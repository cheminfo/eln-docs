(self.webpackChunkcheminfo_eln=self.webpackChunkcheminfo_eln||[]).push([[6102],{3905:function(e,t,a){"use strict";a.d(t,{Zo:function(){return u},kt:function(){return d}});var i=a(67294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,i)}return a}function r(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,i,n=function(e,t){if(null==e)return{};var a,i,n={},o=Object.keys(e);for(i=0;i<o.length;i++)a=o[i],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(i=0;i<o.length;i++)a=o[i],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var c=i.createContext({}),s=function(e){var t=i.useContext(c),a=t;return e&&(a="function"==typeof e?e(t):r(r({},t),e)),a},u=function(e){var t=s(e.components);return i.createElement(c.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},m=i.forwardRef((function(e,t){var a=e.components,n=e.mdxType,o=e.originalType,c=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),m=s(a),d=n,A=m["".concat(c,".").concat(d)]||m[d]||p[d]||o;return a?i.createElement(A,r(r({ref:t},u),{},{components:a})):i.createElement(A,r({ref:t},u))}));function d(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=a.length,r=new Array(o);r[0]=m;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:n,r[1]=l;for(var s=2;s<o;s++)r[s]=a[s];return i.createElement.apply(null,r)}return i.createElement.apply(null,a)}m.displayName="MDXCreateElement"},26641:function(e,t,a){"use strict";a.r(t),a.d(t,{frontMatter:function(){return r},contentTitle:function(){return l},metadata:function(){return c},toc:function(){return s},default:function(){return p}});var i=a(22122),n=a(19756),o=(a(67294),a(3905)),r={slug:"/uuid/c8bcb5d84ca3b08bcee512fceab9823b"},l="Explore SDF files",c={unversionedId:"cheminformatics/explorer-sdf/README",id:"cheminformatics/explorer-sdf/README",isDocsHomePage:!1,title:"Explore SDF files",description:"This tool allows to explore a SDF file and search by substructure or Lipinski parameters.",source:"@site/docs/60_cheminformatics/20_explorer-sdf/README.md",sourceDirName:"60_cheminformatics/20_explorer-sdf",slug:"/uuid/c8bcb5d84ca3b08bcee512fceab9823b",permalink:"/docs/eln/uuid/c8bcb5d84ca3b08bcee512fceab9823b",editUrl:"https://github.com/cheminfo/eln-docs/edit/main/docs/60_cheminformatics/20_explorer-sdf/README.md",version:"current",frontMatter:{slug:"/uuid/c8bcb5d84ca3b08bcee512fceab9823b"},sidebar:"tutorialSidebar",previous:{title:"Convert SDF files to a table",permalink:"/docs/eln/uuid/5dc37671c90094f5255872aa989706e2"},next:{title:"Explore list of SMILES",permalink:"/docs/eln/uuid/b50564ac9d207212f8e5ae8167aeeed6"}},s=[{value:"Overview",id:"overview",children:[]},{value:"Search by substructure or similarity",id:"search-by-substructure-or-similarity",children:[]},{value:"Search by Lipinski parameters",id:"search-by-lipinski-parameters",children:[]},{value:"2D scatter plot",id:"2d-scatter-plot",children:[]}],u={toc:s};function p(e){var t=e.components,r=(0,n.Z)(e,["components"]);return(0,o.kt)("wrapper",(0,i.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"explore-sdf-files"},"Explore SDF files"),(0,o.kt)("p",null,"This tool allows to explore a SDF file and search by substructure or Lipinski parameters."),(0,o.kt)("h2",{id:"overview"},"Overview"),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"overview",src:a(23951).Z})),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"Drag and drop or paste your list of molecules. SDF, ",(0,o.kt)("a",{parentName:"li",href:"https://en.wikipedia.org/wiki/Tab-separated_values"},"TSV")," and SMILES are supported. "),(0,o.kt)("li",{parentName:"ol"},"Your list of molecules is displayed as a table containing their structure, code, and other information such as the number of H donors or acceptors in the molecule."),(0,o.kt)("li",{parentName:"ol"},"Properties extracted from the file and computed for a specific molecule. In the computed properties, you would find molecular weight, exact mass, molecular formula, as well as ",(0,o.kt)("a",{parentName:"li",href:"https://en.wikipedia.org/wiki/Lipinski%27s_rule_of_five"},"Lipinski properties")," of the molecule. "),(0,o.kt)("li",{parentName:"ol"},"Substructure or similarity search on your list of molecules. Draw a substructure and reduce your list of molecules to similar molecules or molecules containing the same pattern. The other tabs will automatically be updated. "),(0,o.kt)("li",{parentName:"ol"},"The properties displayed in tab 3 are shown in an interactive parallel coordinates plot. You can select molecules that have particular properties from this tab.  "),(0,o.kt)("li",{parentName:"ol"},"You can create a 2D scatter plot with the properties displayed in tab 5 and color tabs 5 and 6 according to a specific property. ")),(0,o.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"tip")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},'Click on "Demo" to familiarize yourself with this tool. The demo file contains 3543 organic molecules.'))),(0,o.kt)("div",{className:"admonition admonition-caution alert alert--warning"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"}))),"caution")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},'If your list of molecules is in the TSV format, the file must contain a header line and a column named "smiles".'))),(0,o.kt)("h2",{id:"search-by-substructure-or-similarity"},"Search by substructure or similarity"),(0,o.kt)("p",null,"When you draw a substructure, the list of molecules will automatically update according to the search mode you chose. You can see the properties of a specific molecule by scrolling your mouse over it. The displayed molecule will be highlighted in the table. "),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"substructure search",src:a(45261).Z})),(0,o.kt)("h2",{id:"search-by-lipinski-parameters"},"Search by Lipinski parameters"),(0,o.kt)("p",null,"You can also select molecules according to their Lipinski parameters. To do so, you can either use the list of molecules or the interactive parallel coordinates plot. In the list of molecule tab, select a specific number or range for a property as shown below. Using the mouse over, you can highlight the properties of molecules in the interactive plot. "),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"range",src:a(48054).Z})),(0,o.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"tip")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"To search molecules with specific properties, you can use: "),(0,o.kt)("ul",{parentName:"div"},(0,o.kt)("li",{parentName:"ul"},"an exact number (1,2,3...)"),(0,o.kt)("li",{parentName:"ul"},"a limit (>1, <=5, >=2...)"),(0,o.kt)("li",{parentName:"ul"},"a range (1..2, 0..3), for which the limits are included")))),(0,o.kt)("p",null,"You are also allowed to select molecules directly from the interactive plot. Select vertically a range and click on the outside of the range to reset the selection. The list of molecules will automatically update. To see all the functionalities of the interactive plot, ",(0,o.kt)("a",{parentName:"p",href:"/docs/eln/uuid/5ba3ccc2681bc1ff7f370e78efd335c3"},"click here"),". "),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"interactive plot",src:a(6475).Z})),(0,o.kt)("h2",{id:"2d-scatter-plot"},"2D scatter plot"),(0,o.kt)("p",null,"You can create a 2D scatter plot from the properties displayed in the interactive plot. Select your x and y coordinates, as well as the color of the points. The color will automatically be applied to the interactive plot.\nUsing the mouse over in the 2D plot, you can highlight the molecule of interest in both the list of molecules and the interactive plot."),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"color",src:a(54789).Z})),(0,o.kt)("p",null,"To analyze your plot, you can: "),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"zoom in by selecting a portion of the plot"),(0,o.kt)("li",{parentName:"ul"},"zoom out progressively using SHIFT + double click"),(0,o.kt)("li",{parentName:"ul"},"translate the plot with SHIFT + drag "),(0,o.kt)("li",{parentName:"ul"},"go back to the default position with one double click ")),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"plot",src:a(54038).Z})),(0,o.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"info")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"The 2D scatter plot can be download as an SVG file by clicking on the ",(0,o.kt)("img",{alt:"icon",src:a(49549).Z})," icon on the top right of the ",(0,o.kt)("inlineCode",{parentName:"p"},"2D scatter plot")," tab. "))))}p.isMDXComponent=!0},54789:function(e,t,a){"use strict";t.Z=a.p+"assets/images/color-5a7dff49b7bbf9b41694d4bdf5057c71.gif"},49549:function(e,t){"use strict";t.Z="data:image/png;base64,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"},6475:function(e,t,a){"use strict";t.Z=a.p+"assets/images/interactive-256fabaae331b5ce132482db5b578025.gif"},23951:function(e,t,a){"use strict";t.Z=a.p+"assets/images/overview-77b4b36cb0ef392150f209b2e95e18c8.png"},54038:function(e,t,a){"use strict";t.Z=a.p+"assets/images/plot-3c5004f92d70093aad44e48fad3b247d.gif"},48054:function(e,t,a){"use strict";t.Z=a.p+"assets/images/range-d57ae31ea6346c497cdc37cfa4957e24.gif"},45261:function(e,t,a){"use strict";t.Z=a.p+"assets/images/substructure-57daa7632728d3e6c38b3c06085bbbc1.gif"}}]);