/** @type {import('@docusaurus/types').DocusaurusConfig} */
const math = require("remark-math");
const katex = require("rehype-katex");

module.exports = {
  title: "cheminfo ELN documentation",
  tagline: "Making chemical data reusable",
  url: "https://docs.c6h6.org",
  baseUrl: "/docs/",
  onBrokenLinks: "warn", //Todo: Fix broken links
  onBrokenMarkdownLinks: "warn",
  favicon: "img/favicon.png",
  organizationName: "cheminfo", // Usually your GitHub org/user name.
  projectName: "Cheminfo ELN", // Usually your repo name.
  plugins: [
    [
      require.resolve("@easyops-cn/docusaurus-search-local"),
      {
        // ... Your options.
        // `hashed` is recommended as long-term-cache of index file is possible.
        hashed: true,
        docsRouteBasePath: "/eln",
        indexPages: true, //because of bug: https://github.com/easyops-cn/docusaurus-search-local/issues/42
      },
    ],
  ],
  themeConfig: {
    navbar: {
      logo: {
        alt: "Cheminfo logo",
        src: "img/logo.png",
      },
      items: [
        {
          type: "doc",
          docId: "intro",
          position: "left",
          label: "Documentation",
        },
        {
          href: "https://github.com/cheminfo",
          label: "GitHub",
          position: "right",
        },
      ],
    },
    footer: {
      style: "dark",
      copyright: `Copyright © ${new Date().getFullYear()} Cheminfo contributors. Built with Docusaurus.`,
    },
    docs: {
      sidebar: {
        hideable: true,
      },
    },
  },
  stylesheets: [
    {
      href: "https://cdn.jsdelivr.net/npm/katex@0.13.11/dist/katex.min.css",
      integrity:
        "sha384-Um5gpz1odJg5Z4HAmzPtgZKdTBHZdw8S29IecapCSB31ligYPhHQZMIlWLYQGVoc",
      crossorigin: "anonymous",
    },
  ],
  presets: [
    [
      "@docusaurus/preset-classic",
      {
        docs: {
          sidebarPath: require.resolve("./sidebars.js"),
          routeBasePath: "/eln",
          sidebarItemsGenerator: async function ({
            defaultSidebarItemsGenerator,
            ...args
          }) {
            let sidebarItems = await defaultSidebarItemsGenerator(args);
            sidebarItems = filterItems(sidebarItems);
            return raisingSingleNodes(sidebarItems);
          },
          // Please change this to your repo.
          editUrl: "https://github.com/cheminfo/eln-docs/edit/main/",
          remarkPlugins: [math],
          rehypePlugins: [katex],
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          editUrl: "https://github.com/cheminfo/eln-docs/edit/main/blog/",
        },
        theme: {
          customCss: require.resolve("./src/css/custom.css"),
        },
      },
    ],
  ],
};

const ignoredLabels = ["includes"];

function filterItems(items) {
  items = items.filter((item) => !ignoredLabels.includes(item.label));

  items.forEach((item) => {
    if (Array.isArray(item.items)) {
      item.items = filterItems(item.items);
    }
  });
  return items;
}

function raisingSingleNodes(items) {
  // we need to traverse the full hierarhy and if there is only one child items we raise it one level
  for (let parentItem of items) {
    if (parentItem && parentItem.items && parentItem.items.length) {
      for (let j = 0; j < parentItem.items.length; j++) {
        if (
          parentItem.items[j].items &&
          parentItem.items[j].items.length === 1
        ) {
          parentItem.items[j] = parentItem.items[j].items[0];
        }
      }
      raisingSingleNodes(parentItem.items);
    }
  }
  return items;
}
