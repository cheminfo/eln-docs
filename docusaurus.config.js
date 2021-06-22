/** @type {import('@docusaurus/types').DocusaurusConfig} */
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
          label: "Tutorial",
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
      copyright: `Copyright © ${new Date().getFullYear()} Cheminfo contributors, Inc. Built with Docusaurus.`,
    },
    hideableSidebar: true,
  },
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
            const sidebarItems = await defaultSidebarItemsGenerator(args);
            return raisingSingleNodes(sidebarItems);
          },
          // Please change this to your repo.
          editUrl: "https://github.com/cheminfo/eln-docs/edit/main/",
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

function raisingSingleNodes(items) {
  // we need to traverse the full hierarhy and if there is only one child items we raise it one level
  for (let i = 0; i < items.length; i++) {
    let parentItem = items[i];
    if (parentItem.label === "includes") {
      items.splice(i, 1);
      i--;
    } else {
      if (parentItem && parentItem.items && parentItem.items.length) {
        for (let j = 0; j < parentItem.items.length; j++) {
          if (parentItem.items[j].label === "includes") {
            parentItem.items.splice(j, 1);
            j--;
          } else if (
            parentItem.items[j].items &&
            parentItem.items[j].items.length === 1
          ) {
            parentItem.items[j] = parentItem.items[j].items[0];
          }
        }
        raisingSingleNodes(parentItem.items);
      }
    }
  }
  return items;
}
