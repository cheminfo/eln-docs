---
slug: /installation/importation
---

# Automatic importation of files (jcamp, etc.)
`rest-on-couch` allows to automatically import files based on a filter that is placed in the corresponding folder.

In `roc-eln-docker` folder you will find `rest-on-couch` that contains a folder `eln` that corresponds to the name of the `couchDB` database. In this folder you are free to put any number of folders that will contain a file named `ìmport.js` describing how to import files that are dropped in the folder. So all the files that you would like to import of the kind `nmr` for example could be placed in: `/usr/local/docker/roc-eln-docker/rest-on-couch/eln/nmr/to_process` and once they are processed they will be moved to `/usr/local/docker/roc-eln-docker/rest-on-couch/eln/nmr/processed` or in case of error to `/usr/local/docker/roc-eln-docker/rest-on-couch/eln/nmr/errored`.

In order to debug a file that is in errored and to edit the `import.js` file you may run the importation in an interactive way. For this you may go in the docker image. First find the `id` of the `rest-on-couch-import` image using `docker ps` and then go in the image using `docker exec -it fe2acfbb9bba sh` (replace the correct image ID).

To get the help of the import you can run `node bin/rest-on-couch-import.js --help`

You can test the importation of an errored file with an instruction like: `node bin/rest-on-couch-import.js --dry-run /rest-on-couch/eln/nmr/errored/2017/08/28/abc.jdx eln nmr`

