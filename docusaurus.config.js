/** @type {import('@docusaurus/types').DocusaurusConfig} */
module.exports = {
  title: "cheminfo ELN documentation",
  tagline: "Making chemical data reusable",
  url: "https://docs.c6h6.org",
  baseUrl: "/",
  onBrokenLinks: "warn", //Todo: Fix broken links
  onBrokenMarkdownLinks: "warn",
  favicon: "img/favicon.png",
  organizationName: "cheminfo", // Usually your GitHub org/user name.
  projectName: "cheminfo ELN", // Usually your repo name.
  themeConfig: {
    navbar: {
      title: "cheminfo ELN",
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
        { to: "/blog", label: "Blog", position: "left" },
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
  },
  presets: [
    [
      "@docusaurus/preset-classic",
      {
        docs: {
          sidebarPath: require.resolve("./sidebars.js"),
          sidebarItemsGenerator: async function ({
            defaultSidebarItemsGenerator,
            ...args
          }) {
            const sidebarItems = await defaultSidebarItemsGenerator(args);
            return raisingSingleNodes(sidebarItems);
          },
          // Please change this to your repo.
          editUrl:
            "https://github.com/facebook/docusaurus/edit/master/website/",
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          editUrl:
            "https://github.com/facebook/docusaurus/edit/master/website/blog/",
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
  for (let parentItem of items) {
    if (parentItem && parentItem.items && parentItem.items.length) {
      for (let i = 0; i < parentItem.items.length; i++) {
        if (parentItem.items[i].label === "includes") {
          parentItem.items.splice(i, 1);
          i--;
        } else if (
          parentItem.items[i].items &&
          parentItem.items[i].items.length === 1
        ) {
          parentItem.items[i] = parentItem.items[i].items[0];
        }
      }
      raisingSingleNodes(parentItem.items);
    }
  }
  return items;
}
