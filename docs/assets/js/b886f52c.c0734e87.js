(self.webpackChunkcheminfo_eln=self.webpackChunkcheminfo_eln||[]).push([[8359],{3905:function(e,t,n){"use strict";n.d(t,{Zo:function(){return u},kt:function(){return f}});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=a.createContext({}),c=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},u=function(e){var t=c(e.components);return a.createElement(l.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},p=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,l=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),p=c(n),f=r,m=p["".concat(l,".").concat(f)]||p[f]||d[f]||i;return n?a.createElement(m,o(o({ref:t},u),{},{components:n})):a.createElement(m,o({ref:t},u))}));function f(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,o=new Array(i);o[0]=p;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:r,o[1]=s;for(var c=2;c<i;c++)o[c]=n[c];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}p.displayName="MDXCreateElement"},2213:function(e,t,n){"use strict";n.r(t),n.d(t,{frontMatter:function(){return o},contentTitle:function(){return s},metadata:function(){return l},toc:function(){return c},default:function(){return d}});var a=n(2122),r=n(9756),i=(n(7294),n(3905)),o={slug:"/uuid/088e53bb9d86f832fa90961ee70a17aa"},s="GC / LC-MS visualization",l={unversionedId:"spectra/organic_chemistry/chromatography/gc-lc-ms-visualization/README",id:"spectra/organic_chemistry/chromatography/gc-lc-ms-visualization/README",isDocsHomePage:!1,title:"GC / LC-MS visualization",description:"This application enables the visualization and integration of GC / LC data with or without MS.",source:"@site/docs/30_spectra/10_organic_chemistry/chromatography/gc-lc-ms-visualization/README.md",sourceDirName:"30_spectra/10_organic_chemistry/chromatography/gc-lc-ms-visualization",slug:"/uuid/088e53bb9d86f832fa90961ee70a17aa",permalink:"/docs/eln/uuid/088e53bb9d86f832fa90961ee70a17aa",editUrl:"https://github.com/cheminfo/eln-docs/edit/main/docs/30_spectra/10_organic_chemistry/chromatography/gc-lc-ms-visualization/README.md",version:"current",frontMatter:{slug:"/uuid/088e53bb9d86f832fa90961ee70a17aa"},sidebar:"tutorialSidebar",previous:{title:"GC / LC \u2014 MS High resolution",permalink:"/docs/eln/spectra/organic_chemistry/chromatography/gc-lc-ms-high-resolution"},next:{title:"Add labels in chromatogram",permalink:"/docs/eln/spectra/organic_chemistry/chromatography/gc-lc-ms-visualization/addLabels/index"}},c=[{value:"Loading files",id:"loading-files",children:[]},{value:"Molecular Formula (MF)",id:"molecular-formula-mf",children:[]},{value:"Mass modifications (ion adducts) and isotopic distribution",id:"mass-modifications-ion-adducts-and-isotopic-distribution",children:[]},{value:"Mass Spectra Related Preferences",id:"mass-spectra-related-preferences",children:[]}],u={toc:c};function d(e){var t=e.components,o=(0,r.Z)(e,["components"]);return(0,i.kt)("wrapper",(0,a.Z)({},u,o,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"gc--lc-ms-visualization"},"GC / LC-MS visualization"),(0,i.kt)("p",null,"This application enables the visualization and integration of GC / LC data with or without MS."),(0,i.kt)("h2",{id:"loading-files"},"Loading files"),(0,i.kt)("p",null,"Files can be uploaded either as a JCAMP, NetCDF or mzData format. Multiple files can be drag and dropped into the highlighted zone or selected by ctrl-clicking in the pop-up window. The files are listed below the drop zone and are visualized when clicked."),(0,i.kt)("h2",{id:"molecular-formula-mf"},"Molecular Formula (MF)"),(0,i.kt)("p",null,"Moelcular formula are specified here. Several formulae can be defined by separating with a dot."),(0,i.kt)("p",null,(0,i.kt)("img",{src:n(303).Z})),(0,i.kt)("p",null,"For single formula, the monoisotopic mass and molecular weight are displayed below."),(0,i.kt)("h2",{id:"mass-modifications-ion-adducts-and-isotopic-distribution"},"Mass modifications (ion adducts) and isotopic distribution"),(0,i.kt)("p",null,"In order to calculate the theoretical masses you need to define the ion adduct. Many adducts can be defined at once by separating with commas. You may also define multiple charges."),(0,i.kt)("p",null,(0,i.kt)("img",{src:n(438).Z})),(0,i.kt)("p",null,"All the possible masses (based on input formula and ion adducts) are displayed as a virtual green spectrum, and listed in the bottom-right."),(0,i.kt)("p",null,(0,i.kt)("img",{src:n(5220).Z})),(0,i.kt)("h2",{id:"mass-spectra-related-preferences"},"Mass Spectra Related Preferences"),(0,i.kt)("p",null,"This section contains global settings for the manipulation of mass spectra and extracted ion chromatograms ","(","EIC",")","."),(0,i.kt)("p",null,"The ",(0,i.kt)("strong",{parentName:"p"},"mass tolerance")," is the tolerance used when integrating mass spectra into a chromatogram peak (should be less than the sampling distance)."),(0,i.kt)("p",null,"The ",(0,i.kt)("strong",{parentName:"p"},"mass extraction window")," determines the minimum and maximum extracted masses for EIC based on the input m/z."),(0,i.kt)("p",null,"The ",(0,i.kt)("strong",{parentName:"p"},"height threshold")," defines the minimum relative height for a peak to be included in EIC."),(0,i.kt)("p",null,"The ",(0,i.kt)("strong",{parentName:"p"},"list of specific EIC to superimpose")," can be used to manually input specific masses and formula for creation of EIC."))}d.isMDXComponent=!0},438:function(e,t){"use strict";t.Z="data:image/png;base64,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"},303:function(e,t){"use strict";t.Z="data:image/png;base64,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"},5220:function(e,t,n){"use strict";t.Z=n.p+"assets/images/theoretical_masses-45c31f65b78aa7513124a8f0d3853bb4.png"}}]);