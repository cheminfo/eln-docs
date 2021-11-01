---
slug: /installation/backup
---

# Backing up the system 

Since CouchDB is an append-only database, using a [rsync](https://rsync.samba.org/)/[rsnapshot](https://rsnapshot.org/)-based solution is a safe option. For large database you may be interested the `rsync` option `--append` that will only append data onto shorter files and therefore not copy the full database.

Alternatively, you can use the [CouchDB replication feature to another server](https://guide.couchdb.org/draft/replication.html). You can conveniently set up replication from the [Fauxton graphical interface](https://couchdb.apache.org/fauxton-visual-guide/index.html) at the `_utils` endpoint.