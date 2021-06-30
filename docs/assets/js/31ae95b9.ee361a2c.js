(self.webpackChunkcheminfo_eln=self.webpackChunkcheminfo_eln||[]).push([[454],{3905:function(e,t,n){"use strict";n.d(t,{Zo:function(){return p},kt:function(){return h}});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var c=r.createContext({}),l=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},p=function(e){var t=l(e.components);return r.createElement(c.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,c=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),d=l(n),h=o,f=d["".concat(c,".").concat(h)]||d[h]||u[h]||i;return n?r.createElement(f,a(a({ref:t},p),{},{components:n})):r.createElement(f,a({ref:t},p))}));function h(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,a=new Array(i);a[0]=d;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:o,a[1]=s;for(var l=2;l<i;l++)a[l]=n[l];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},8831:function(e,t,n){"use strict";n.r(t),n.d(t,{frontMatter:function(){return a},contentTitle:function(){return s},metadata:function(){return c},toc:function(){return l},default:function(){return u}});var r=n(2122),o=n(9756),i=(n(7294),n(3905)),a={},s="X-Ray Diffraction Patterns",c={unversionedId:"spectra/physical_chemistry/pxrd/README",id:"spectra/physical_chemistry/pxrd/README",isDocsHomePage:!1,title:"X-Ray Diffraction Patterns",description:"This module allows visualizing and processing X-Ray diffraction patterns. You can upload brml files which are generated by Bruker machines, xy files generated by PowDLL, and jcamp files.",source:"@site/docs/30_spectra/20_physical_chemistry/pxrd/README.md",sourceDirName:"30_spectra/20_physical_chemistry/pxrd",slug:"/spectra/physical_chemistry/pxrd/README",permalink:"/docs/eln/spectra/physical_chemistry/pxrd/README",editUrl:"https://github.com/cheminfo/eln-docs/edit/main/docs/30_spectra/20_physical_chemistry/pxrd/README.md",version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Isotherm analysis",permalink:"/docs/eln/spectra/physical_chemistry/isotherm/README"},next:{title:"PXRD pattern database lookup",permalink:"/docs/eln/spectra/physical_chemistry/pxrd/lookup/index"}},l=[{value:"Upload",id:"upload",children:[]},{value:"Visualization",id:"visualization",children:[]},{value:"Processing",id:"processing",children:[]},{value:"Feature requests and support",id:"feature-requests-and-support",children:[]}],p={toc:l};function u(e){var t=e.components,a=(0,o.Z)(e,["components"]);return(0,i.kt)("wrapper",(0,r.Z)({},p,a,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"x-ray-diffraction-patterns"},"X-Ray Diffraction Patterns"),(0,i.kt)("p",null,"This module allows visualizing and processing X-Ray diffraction patterns. You can upload ",(0,i.kt)("inlineCode",{parentName:"p"},"brml")," files which are generated by Bruker machines, ",(0,i.kt)("inlineCode",{parentName:"p"},"xy")," files generated by PowDLL, and ",(0,i.kt)("inlineCode",{parentName:"p"},"jcamp")," files."),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Screenshot of the XRD analysis module",src:n(3963).Z})),(0,i.kt)("h2",{id:"upload"},"Upload"),(0,i.kt)("p",null,"Files can be uploaded either by drag-and-drop to the field on the left-hand-side (1 in the image) or automatically from the instrument. The files will appear in field 2. Note that you can only upload files to samples to which you have write access."),(0,i.kt)("h2",{id:"visualization"},"Visualization"),(0,i.kt)("p",null,"To add patterns to the visualizer, click on the ",(0,i.kt)("inlineCode",{parentName:"p"},"+")," in field 2. The sample will then appear in field 3 from which you can control the visualization settings."),(0,i.kt)("p",null,"If you click on the color in a row, you can select any color you which for the line, and you can use the control buttons in the top right corner of field 3 to control which figures you show in a spectrum."),(0,i.kt)("p",null,"In the chart you can draw a rectangle to zoom and double click to reset. You can move the graphs by pressing ",(0,i.kt)("inlineCode",{parentName:"p"},"SHIFT")," while dragging them."),(0,i.kt)("p",null,"Currently, we only display 2\u0398 vs. the counts on the detector."),(0,i.kt)("h2",{id:"processing"},"Processing"),(0,i.kt)("p",null,"Field 4 gives you some basic processing tools. For example, you can get the derivatives of the patterns or normalize it. To scale the maximum intensity to one, you should use the ",(0,i.kt)("inlineCode",{parentName:"p"},"Rescale (x to y)")," option."),(0,i.kt)("h2",{id:"feature-requests-and-support"},"Feature requests and support"),(0,i.kt)("p",null,"If you need additional tools and support for this module, ",(0,i.kt)("a",{parentName:"p",href:"https://help.github.com/en/github/managing-your-work-on-github/creating-an-issue"},"Open an issue")," on the ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/cheminfo/xrd-analysis"},"xrd-analysis GitHub repository")," or simply post a question on the ",(0,i.kt)("a",{parentName:"p",href:"https://groups.google.com/forum/#!forum/cheminfo"},"forum"),"."))}u.isMDXComponent=!0},3963:function(e,t,n){"use strict";t.Z=n.p+"assets/images/analysis-8a2efea505af5352cc82fbfdc540517c.png"}}]);