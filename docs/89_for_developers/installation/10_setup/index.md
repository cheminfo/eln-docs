---
slug: /installation/setup
---

# Deploying the ELN 

## System requirements

To host an instance of the ELN no special hardware is needed. In principle, an old computer with 8 GB of RAM and an old CPU can be used.
The system itself will not need a lot of space of the hard drive and the required hard drive space will depend on the amount of data you want to store (to get started, even 32 GB are enough to store >6,000 5 MB files, and most chemical files are smaller).

We recommend that you use CentOS or Ubuntu as operating system.

## Installing dependencies

### 1. Install docker and docker-compose and some dependencies

On Red Hat Linux/CentOS you need to run the following commands:

```bash
yum update -y
yum install epel-release -y
yum install git docker docker-compose -y
```

In Ubuntu you can use the apt package manager to install dependencies.

### 2. Install Node.js

On Red Hat Linux/CentOS you need to run the following commands:

```bash
curl -sL https://rpm.nodesource.com/setup_14.x | bash -
yum install -y nodejs
```

You can use [similar commands or installers](https://nodejs.org/en/download/) on other operating systems.

### 3. Optional configurations

- [On CentOS/Red Hat Linux you might want to permanently disable SE Linux](https://www.rootusers.com/how-to-enable-or-disable-selinux-in-centos-rhel-7/)
- If you are behind a corporate proxy you can follow [the guide to configure Docker to use the proxy](https://docs.docker.com/engine/admin/systemd/#/http-proxy)

## Getting the ELN code and running it

### 1. Start docker daemon

```bash
systemctl start docker
systemctl enable docker
```

:::caution Don't use docker
You should not use the docker instruction because it is not aware of dependencies, and it could lead to unexpected results. Please always use docker-compose instead.

In order to check all the running docker images: `docker-compose ps`. To restart a specific image: `docker-compose restart rest-on-couch`
:::

### 2. Clone this repo

We recommend that you run it from `/usr/local/docker`, but this is not crucial for this system.

```bash
mkdir /usr/local/docker
cd /usr/local/docker
curl -L https://github.com/cheminfo/roc-eln-docker/archive/master.tar.gz | tar xz
mv roc-eln-docker-master roc-eln-docker
cd roc-eln-docker
```

### 3. Edit configuration

1. Adjust the options in `.env`. Mandatory configuration options have the value `REPLACEME`
2. Optional: edit `flavor-builder-config.json` to configure home page
3. If LDAP configuration is needed, edit `rest-on-couch/home/ldap.js`.

If you want a default configuration you might just follow the continuous integration instead of the next steps in this section (Visualizer, ELN, Printers). That is, run the `ci/install.sh` script followed by `docker-compose up -d`.

You might want to use the `ngnix` proxy directly without additional Apache or Ngnix server. In this case, you'll need to set `NGINX_PORT` to 80 (HTTP) or 443 (HTTPS), modify the docker compose to something like 
```
services:
  nginx-proxy:
    image: docker.io/nginx:1.14-alpine
    ports:
      - "${NGINX_PORT}:80" # or  "${NGINX_PORT}:433"  
```
and the `ngnix` configuration to read the SSL certificates in case you use SSL. 


If you do not make these changes, you'll need to set up an Apache or Ngnix server on our system. This is configuration is preferable in case you have more than one serivce running on your server. 

#### Visualizer

Copy the [visualizer](https://github.com/NPellet/visualizer) config to `rest-on-couch/home/visualizer`:

```bash
cd rest-on-couch/home
curl -L https://github.com/cheminfo/roc-visualizer-config/archive/master.tar.gz | tar xz
mv roc-visualizer-config-master visualizer
```

#### ELN

Copy the ELN config to `rest-on-couch/home/eln`:

```bash
cd rest-on-couch/home
curl -L https://github.com/cheminfo/roc-eln-config/archive/master.tar.gz | tar xz
mv roc-eln-config-master eln
cd eln
npm i
```

#### Printers

Copy the printer config to `rest-on-couch/home/printers`:

```bash
cd rest-on-couch/home
curl -L https://github.com/cheminfo/roc-printers-config/archive/master.tar.gz | tar xz
mv roc-printers-config-master printers
```

### 4. Start the application

```bash
cd /usr/local/docker/roc-eln-docker
docker-compose pull
docker-compose up -d --build
```

:::tip  Updating the system 
The docker-compose.yml file contains the list of all the docker images required by this project, their version as well as their dependencies. If you want to update the version of an image you should change the name in the docker-compose.yml. After changing this file you should run: `docker-compose up -d --build` (`-d` allows to put the process in background).
:::

## Setting up an Apache server 

Under RedHat/CentOs run 

```
yum install httpd -y
systemctl enable httpd
```
then, create `/etc/httpd/conf.d/eln.conf` with the following content 

```
<VirtualHost *:80>
    ServerAdmin     a@b.com
    ServerName      eln.myinstitution.org

    SetEnvIf Origin "^(.*)$" AccessControlAllowOrigin=$0
    Header set Access-Control-Allow-Origin %{AccessControlAllowOrigin}e env=AccessControlAllowOrigin
    Header set Vary Origin
    Header set Access-Control-Expose-Headers "ETag, Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With"

    AllowEncodedSlashes NoDecode
    ProxyPass / http://localhost:4444/ nocanon
    ProxyPassReverse / http://localhost:4444/
</VirtualHost>
```

In case you want to use SSL, you can listen on port 433 and add your SSL certificates. To check your configuration, you can use `apachectl configtest`

You can start the server with `systemctl start httpd`. 

## Firewall/iptables 

If you did not already install iptables, you can do it with 

```
yum install iptables-services -y
systemctl start iptables
systemctl enable iptables
```

to allow HTTP on port 80 add the following rule to `/etc/sysconfig/iptables`

```
-A INPUT -p tcp --dport 80 -m state --state NEW,ESTABLISHED -j ACCEPT
```

:::tip 
Note that docker will install new chains in iptables. This means you may not restart iptables once docker is started ! If you really have to restart iptables service then you will have also to restart docker and docker-compose.
:::



