"use strict";(self.webpackChunkcheminfo_eln=self.webpackChunkcheminfo_eln||[]).push([[5484,8953,8788],{3905:(e,t,a)=>{a.d(t,{Zo:()=>d,kt:()=>h});var n=a(67294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var c=n.createContext({}),l=function(e){var t=n.useContext(c),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},d=function(e){var t=l(e.components);return n.createElement(c.Provider,{value:t},e.children)},p="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,i=e.originalType,c=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),p=l(a),u=r,h=p["".concat(c,".").concat(u)]||p[u]||m[u]||i;return a?n.createElement(h,o(o({ref:t},d),{},{components:a})):n.createElement(h,o({ref:t},d))}));function h(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=a.length,o=new Array(i);o[0]=u;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s[p]="string"==typeof e?e:r,o[1]=s;for(var l=2;l<i;l++)o[l]=a[l];return n.createElement.apply(null,o)}return n.createElement.apply(null,a)}u.displayName="MDXCreateElement"},93141:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>c,contentTitle:()=>o,default:()=>m,frontMatter:()=>i,metadata:()=>s,toc:()=>l});var n=a(87462),r=(a(67294),a(3905));const i={},o=void 0,s={unversionedId:"structural_analysis/includes/jcamp/README",id:"structural_analysis/includes/jcamp/README",title:"README",description:"How is a JCAMP-DX file structured.",source:"@site/docs/30_structural_analysis/includes/jcamp/README.md",sourceDirName:"30_structural_analysis/includes/jcamp",slug:"/structural_analysis/includes/jcamp/",permalink:"/docs/eln/structural_analysis/includes/jcamp/",draft:!1,editUrl:"https://github.com/cheminfo/eln-docs/edit/main/docs/30_structural_analysis/includes/jcamp/README.md",tags:[],version:"current",frontMatter:{}},c={},l=[],d={toc:l},p="wrapper";function m(e){let{components:t,...i}=e;return(0,r.kt)(p,(0,n.Z)({},d,i,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("admonition",{title:"JCAMP-DX format",type:"tip"},(0,r.kt)("details",null,(0,r.kt)("summary",null,"How is a JCAMP-DX file structured."),(0,r.kt)("div",null,(0,r.kt)("h2",{parentName:"admonition",id:"jcamp-dx-file-format"},"JCAMP-DX file format"),(0,r.kt)("p",{parentName:"admonition"},(0,r.kt)("a",{parentName:"p",href:"http://jcamp-dx.org/"},"JCAMP-DX (Joint Committee on Atomic and Molecular Physical Data Exchange)")," is a standard file format for the exchange of spectra and related physical and chemical information between different spectrometers, databases or other systems."),(0,r.kt)("p",{parentName:"admonition"},"The information is stored using ASCII characters and the file can be viewed, corrected and annotated with a text editor. The spectra are stored as a table containing (x,y) coordinate pairs. Besides the data points, it is possible to store metainformation and make comments. The file extension is  ",(0,r.kt)("inlineCode",{parentName:"p"},".jdx"),"."),(0,r.kt)("p",{parentName:"admonition"},"A JCAMP-DX document is composed of an unlimited number of Labelled Data Records (LDRs). Each LDR starts with a \u201c",(0,r.kt)("strong",{parentName:"p"},"##"),"\u201d and ends with \u201c",(0,r.kt)("strong",{parentName:"p"},"="),"\u201d. Any space, comma, slash or hyphen is removed and the text is written with capital letters."),(0,r.kt)("p",{parentName:"admonition"},"Some examples of Data Labels:"),(0,r.kt)("ul",{parentName:"admonition"},(0,r.kt)("li",{parentName:"ul"},"TITLE : title of the experiment"),(0,r.kt)("li",{parentName:"ul"},"END : the last line of the file"),(0,r.kt)("li",{parentName:"ul"},"XUNITS : the units reported on the x-axis"),(0,r.kt)("li",{parentName:"ul"},"NPOINTS : number of points")),(0,r.kt)("p",{parentName:"admonition"},(0,r.kt)("img",{alt:"example",src:a(70912).Z,width:"853",height:"685"})),(0,r.kt)("p",{parentName:"admonition"},"Two important LDRs are \u201cXYDATA\u201d and \u201cPEAKTABLE\u201d, which contain the spectral information. The former gives information in the form of a table where the first value in a line stands for an x coordinate and any subsequent values are y-coordinates with an equidistant increment on the x-axis. The latter provides information as a collection of (X,Y) pairs. "),(0,r.kt)("p",{parentName:"admonition"},"It is commonplace to compress the data tables. For instance, the table of numbers can be replaced by a line of characters (pseudo-digits). Among these pseudo-digits, there are PAC, SQZ, DIF, DIFDUP."),(0,r.kt)("p",{parentName:"admonition"},(0,r.kt)("img",{alt:"pseudodigits",src:a(57217).Z,width:"744",height:"218"})),(0,r.kt)("p",{parentName:"admonition"},"An example of compressed data using DIFDUP"),(0,r.kt)("p",{parentName:"admonition"},(0,r.kt)("img",{alt:"compressed",src:a(44622).Z,width:"976",height:"161"})),(0,r.kt)("p",{parentName:"admonition"},"An in depth description is given in the original paper by ",(0,r.kt)("a",{parentName:"p",href:"http://old.iupac.org/jcamp/protocols/dxir01.pdf"},"McDonald and Wilks"),". Insofar as JCAMP-DX is a well-described and accessible format, it partially aligns with the FAIR (",(0,r.kt)("strong",{parentName:"p"},"F"),"indable, ",(0,r.kt)("strong",{parentName:"p"},"A"),"ccessible, ",(0,r.kt)("strong",{parentName:"p"},"I"),"nteroperable, ",(0,r.kt)("strong",{parentName:"p"},"R"),"eusable) principles . It is interoperable and reusable. Provided that the user makes it findable and accessible, JCAMP-DX will fully comply with the aforementioned principles.")))))}m.isMDXComponent=!0},6477:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>c,contentTitle:()=>o,default:()=>m,frontMatter:()=>i,metadata:()=>s,toc:()=>l});var n=a(87462),r=(a(67294),a(3905));const i={},o=void 0,s={unversionedId:"structural_analysis/nmr/includes/hose_code/hose_code",id:"structural_analysis/nmr/includes/hose_code/hose_code",title:"hose_code",description:"What is the HOSE code.",source:"@site/docs/30_structural_analysis/nmr/includes/hose_code/hose_code.md",sourceDirName:"30_structural_analysis/nmr/includes/hose_code",slug:"/structural_analysis/nmr/includes/hose_code/",permalink:"/docs/eln/structural_analysis/nmr/includes/hose_code/",draft:!1,editUrl:"https://github.com/cheminfo/eln-docs/edit/main/docs/30_structural_analysis/nmr/includes/hose_code/hose_code.md",tags:[],version:"current",frontMatter:{}},c={},l=[],d={toc:l},p="wrapper";function m(e){let{components:t,...i}=e;return(0,r.kt)(p,(0,n.Z)({},d,i,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("admonition",{title:"HOSE",type:"tip"},(0,r.kt)("details",null,(0,r.kt)("summary",null,"What is the HOSE code."),(0,r.kt)("div",null,(0,r.kt)("h2",{parentName:"admonition",id:"hose-code"},"HOSE code"),(0,r.kt)("p",{parentName:"admonition"},"The HOSE (Hierarchically Ordered Spherical Environment) code describes the environment of individual atoms spherically. The environment of a particular atom is described in the form of a string of characters. The priority rules and necessary syntax have been outlined in the ",(0,r.kt)("a",{parentName:"p",href:"https://doi.org/10.1016/S0003-2670(01)83100-7"},"original paper")," in 1978.\nFor instance, here are some symbols."),(0,r.kt)("p",{parentName:"admonition"},(0,r.kt)("img",{alt:"image",src:a(73531).Z,width:"795",height:"354"})),(0,r.kt)("p",{parentName:"admonition"},"The prediction of the signal due to each individual atom is done by considering the chemical environment of the atom by layers like onion peels. See the following example."),(0,r.kt)("p",{parentName:"admonition"},(0,r.kt)("img",{alt:"image",src:a(66169).Z,width:"1433",height:"857"})),(0,r.kt)("p",{parentName:"admonition"},"The HOSE code is based on ",(0,r.kt)("a",{parentName:"p",href:"https://nmrshiftdb.nmr.uni-koeln.de/"},"nmrshiftdb"),". ")))))}m.isMDXComponent=!0},82091:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>d,contentTitle:()=>c,default:()=>h,frontMatter:()=>s,metadata:()=>l,toc:()=>p});var n=a(87462),r=(a(67294),a(3905)),i=a(93141),o=a(6477);const s={description:"Predict 1D 13C NMR spectra",slug:"/uuid/b50564ac9d207212f8e5ae8167a45f3c",title:"13C prediction"},c="<sup>13</sup>C prediction",l={unversionedId:"structural_analysis/nmr/predictions/13c/README",id:"structural_analysis/nmr/predictions/13c/README",title:"13C prediction",description:"Predict 1D 13C NMR spectra",source:"@site/docs/30_structural_analysis/nmr/predictions/13c/README.md",sourceDirName:"30_structural_analysis/nmr/predictions/13c",slug:"/uuid/b50564ac9d207212f8e5ae8167a45f3c",permalink:"/docs/eln/uuid/b50564ac9d207212f8e5ae8167a45f3c",draft:!1,editUrl:"https://github.com/cheminfo/eln-docs/edit/main/docs/30_structural_analysis/nmr/predictions/13c/README.md",tags:[],version:"current",frontMatter:{description:"Predict 1D 13C NMR spectra",slug:"/uuid/b50564ac9d207212f8e5ae8167a45f3c",title:"13C prediction"},sidebar:"tutorialSidebar",previous:{title:"NMR spectroscopy",permalink:"/docs/eln/structural_analysis/nmr/introduction/"},next:{title:"1H prediction",permalink:"/docs/eln/uuid/eea0ba081ea2cc99da5c1aed2f29a0a8"}},d={},p=[],m={toc:p},u="wrapper";function h(e){let{components:t,...s}=e;return(0,r.kt)(u,(0,n.Z)({},m,s,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"13c-prediction"},(0,r.kt)("sup",null,"13"),"C prediction"),(0,r.kt)("p",null,"This tool allows you to predict the ",(0,r.kt)("sup",null,"13"),"C NMR spectrum of your sample or any other molecule."),(0,r.kt)("admonition",{title:"Overview",type:"info"},(0,r.kt)("p",{parentName:"admonition"},(0,r.kt)("img",{alt:"C_predictions",src:a(27238).Z,width:"1122",height:"602"})),(0,r.kt)("ol",{parentName:"admonition"},(0,r.kt)("li",{parentName:"ol"},"Drag and drop module - paste a molfile or a SMILES string of a molecule"),(0,r.kt)("li",{parentName:"ol"},"Draw a chemical structure and predict module - draw the structure of the molecule"),(0,r.kt)("li",{parentName:"ol"},"Chemical structure with explicit hydrogens module - explicit representation of hydrogens in a molecule"),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("sup",null,"13"),"C NMR spectrum module - predicted ",(0,r.kt)("sup",null,"13"),"C spectrum of the chosen molecule"),(0,r.kt)("li",{parentName:"ol"},"Signal module - list of obtained peaks and the corresponding chemical shifts"),(0,r.kt)("li",{parentName:"ol"},"Drag and drop module - paste a JCAMP-DX of an experimental spectrum for comparison"))),(0,r.kt)("p",null,"The structure of the currently selected sample will be already drawn so that you may go ahead and simulate its spectrum right away. If you wish to simulate the spectrum of another molecule, you can draw it or you can paste the structure in the form of a molfile or a SMILES string. Structure drawing is powered by ",(0,r.kt)("a",{parentName:"p",href:"https://peter-ertl.com/jsme/"},"JSME"),". You may also drop or paste a ",(0,r.kt)("strong",{parentName:"p"},"JCAMP-DX file")," to superimpose an experimental spectrum over the prediction."),(0,r.kt)(i.default,{mdxType:"Jcamp"}),(0,r.kt)("p",null,"The simulated spectrum, the chemical structure with explicit hydrogens and the list of peaks modules are linked, so that hovering over an entry in the list will highlight the corresponding atom in the structure and the relevant peak in the spectrum."),(0,r.kt)("p",null,"NMR prediction is done with ",(0,r.kt)("a",{parentName:"p",href:"http://nmrshiftdb.nmr.uni-koeln.de/"},"NMRshiftDB"),". It is an NMR database for organic structures and their spectra. Using this information, in conjunction with the principle of ",(0,r.kt)("strong",{parentName:"p"},"HOSE")," code, a machine learning model makes chemical shift predictions. "),(0,r.kt)(o.default,{mdxType:"HOSE"}),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"prediction",src:a(11735).Z,width:"677",height:"508"})))}h.isMDXComponent=!0},44622:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/jcamp_compressed-c16de3e05c9ef95d06fc2fcaf445df4e.png"},70912:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/jcamp_example-7488c6236980359b00c42c448fe4316a.png"},57217:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/jcamp_pseudodigits-6d23683254164351241d59d04e8491d4.png"},73531:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/hose_code-4708c1cb5a5b35d5117d771ccf0b9c85.png"},66169:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/layers-68837efb322a159e7f1aff84bcd52226.png"},27238:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/C_predictions-c85116f4e8253eb28eb2b87c90e73523.png"},11735:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/NMRpredict13C-4d6d9e4b7b867a2559c7afc655aace40.gif"}}]);