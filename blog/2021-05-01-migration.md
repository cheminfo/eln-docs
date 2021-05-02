---
slug: migrating_to_docusaurus
title: We migrate our docs to docusaurus
author: Kevin Jablonka
author_title: cheminfo contributor
author_url: https://github.com/kjappelbaum
author_image_url: https://avatars.githubusercontent.com/u/32935233?v=4
tags: [docusaurus]
---

We will migrate the documentation for the cheminfo ELN to docusaurus. This will allow us to have one global documentation page to which we can link if users have questions and in which users can perform a global fulltext search.

There are a few technical difficulties on the way:

- _Link to the appropriate pages in the views_: In the views, the documentation currently uses the `uuid` of the view to get the appropriate documentation page from our GitBook project.
  We would need to replace this mechanism in some way. In the simplest version, it could be a simple link to page of this documentation website.

- _Different deployment might want to have some custom pages._ A solution to this would be that the administrators make their own fork for this repo. Currently, it is solved via git submodules

- *Fix the organization:*  In the GitBook project we have a lot of folders and the organization of some pages does not make sense. This needs to be fixed. Possibly, we should rename `introduction`, remove some subfolders and fix the capitalization. 
