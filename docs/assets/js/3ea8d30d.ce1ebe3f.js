"use strict";(self.webpackChunkcheminfo_eln=self.webpackChunkcheminfo_eln||[]).push([[7295,8953],{3905:(e,t,a)=>{a.d(t,{Zo:()=>p,kt:()=>h});var n=a(67294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var c=n.createContext({}),l=function(e){var t=n.useContext(c),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},p=function(e){var t=l(e.components);return n.createElement(c.Provider,{value:t},e.children)},d="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,i=e.originalType,c=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),d=l(a),u=r,h=d["".concat(c,".").concat(u)]||d[u]||m[u]||i;return a?n.createElement(h,o(o({ref:t},p),{},{components:a})):n.createElement(h,o({ref:t},p))}));function h(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=a.length,o=new Array(i);o[0]=u;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s[d]="string"==typeof e?e:r,o[1]=s;for(var l=2;l<i;l++)o[l]=a[l];return n.createElement.apply(null,o)}return n.createElement.apply(null,a)}u.displayName="MDXCreateElement"},93141:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>c,contentTitle:()=>o,default:()=>m,frontMatter:()=>i,metadata:()=>s,toc:()=>l});var n=a(87462),r=(a(67294),a(3905));const i={},o=void 0,s={unversionedId:"structural_analysis/includes/jcamp/README",id:"structural_analysis/includes/jcamp/README",title:"README",description:"How is a JCAMP-DX file structured.",source:"@site/docs/30_structural_analysis/includes/jcamp/README.md",sourceDirName:"30_structural_analysis/includes/jcamp",slug:"/structural_analysis/includes/jcamp/",permalink:"/docs/eln/structural_analysis/includes/jcamp/",draft:!1,editUrl:"https://github.com/cheminfo/eln-docs/edit/main/docs/30_structural_analysis/includes/jcamp/README.md",tags:[],version:"current",frontMatter:{}},c={},l=[],p={toc:l},d="wrapper";function m(e){let{components:t,...i}=e;return(0,r.kt)(d,(0,n.Z)({},p,i,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("admonition",{title:"JCAMP-DX format",type:"tip"},(0,r.kt)("details",null,(0,r.kt)("summary",null,"How is a JCAMP-DX file structured."),(0,r.kt)("div",null,(0,r.kt)("h2",{parentName:"admonition",id:"jcamp-dx-file-format"},"JCAMP-DX file format"),(0,r.kt)("p",{parentName:"admonition"},(0,r.kt)("a",{parentName:"p",href:"http://jcamp-dx.org/"},"JCAMP-DX (Joint Committee on Atomic and Molecular Physical Data Exchange)")," is a standard file format for the exchange of spectra and related physical and chemical information between different spectrometers, databases or other systems."),(0,r.kt)("p",{parentName:"admonition"},"The information is stored using ASCII characters and the file can be viewed, corrected and annotated with a text editor. The spectra are stored as a table containing (x,y) coordinate pairs. Besides the data points, it is possible to store metainformation and make comments. The file extension is  ",(0,r.kt)("inlineCode",{parentName:"p"},".jdx"),"."),(0,r.kt)("p",{parentName:"admonition"},"A JCAMP-DX document is composed of an unlimited number of Labelled Data Records (LDRs). Each LDR starts with a \u201c",(0,r.kt)("strong",{parentName:"p"},"##"),"\u201d and ends with \u201c",(0,r.kt)("strong",{parentName:"p"},"="),"\u201d. Any space, comma, slash or hyphen is removed and the text is written with capital letters."),(0,r.kt)("p",{parentName:"admonition"},"Some examples of Data Labels:"),(0,r.kt)("ul",{parentName:"admonition"},(0,r.kt)("li",{parentName:"ul"},"TITLE : title of the experiment"),(0,r.kt)("li",{parentName:"ul"},"END : the last line of the file"),(0,r.kt)("li",{parentName:"ul"},"XUNITS : the units reported on the x-axis"),(0,r.kt)("li",{parentName:"ul"},"NPOINTS : number of points")),(0,r.kt)("p",{parentName:"admonition"},(0,r.kt)("img",{alt:"example",src:a(70912).Z,width:"853",height:"685"})),(0,r.kt)("p",{parentName:"admonition"},"Two important LDRs are \u201cXYDATA\u201d and \u201cPEAKTABLE\u201d, which contain the spectral information. The former gives information in the form of a table where the first value in a line stands for an x coordinate and any subsequent values are y-coordinates with an equidistant increment on the x-axis. The latter provides information as a collection of (X,Y) pairs. "),(0,r.kt)("p",{parentName:"admonition"},"It is commonplace to compress the data tables. For instance, the table of numbers can be replaced by a line of characters (pseudo-digits). Among these pseudo-digits, there are PAC, SQZ, DIF, DIFDUP."),(0,r.kt)("p",{parentName:"admonition"},(0,r.kt)("img",{alt:"pseudodigits",src:a(57217).Z,width:"744",height:"218"})),(0,r.kt)("p",{parentName:"admonition"},"An example of compressed data using DIFDUP"),(0,r.kt)("p",{parentName:"admonition"},(0,r.kt)("img",{alt:"compressed",src:a(44622).Z,width:"976",height:"161"})),(0,r.kt)("p",{parentName:"admonition"},"An in depth description is given in the original paper by ",(0,r.kt)("a",{parentName:"p",href:"http://old.iupac.org/jcamp/protocols/dxir01.pdf"},"McDonald and Wilks"),". Insofar as JCAMP-DX is a well-described and accessible format, it partially aligns with the FAIR (",(0,r.kt)("strong",{parentName:"p"},"F"),"indable, ",(0,r.kt)("strong",{parentName:"p"},"A"),"ccessible, ",(0,r.kt)("strong",{parentName:"p"},"I"),"nteroperable, ",(0,r.kt)("strong",{parentName:"p"},"R"),"eusable) principles . It is interoperable and reusable. Provided that the user makes it findable and accessible, JCAMP-DX will fully comply with the aforementioned principles.")))))}m.isMDXComponent=!0},12597:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>l,contentTitle:()=>s,default:()=>u,frontMatter:()=>o,metadata:()=>c,toc:()=>p});var n=a(87462),r=(a(67294),a(3905)),i=a(93141);const o={description:"Predict 1D proton NMR spectra",slug:"/uuid/eea0ba081ea2cc99da5c1aed2f29a0a8",title:"1H prediction"},s="<sup>1</sup>H prediction",c={unversionedId:"structural_analysis/nmr/predictions/1h/README",id:"structural_analysis/nmr/predictions/1h/README",title:"1H prediction",description:"Predict 1D proton NMR spectra",source:"@site/docs/30_structural_analysis/nmr/predictions/1h/README.md",sourceDirName:"30_structural_analysis/nmr/predictions/1h",slug:"/uuid/eea0ba081ea2cc99da5c1aed2f29a0a8",permalink:"/docs/eln/uuid/eea0ba081ea2cc99da5c1aed2f29a0a8",draft:!1,editUrl:"https://github.com/cheminfo/eln-docs/edit/main/docs/30_structural_analysis/nmr/predictions/1h/README.md",tags:[],version:"current",frontMatter:{description:"Predict 1D proton NMR spectra",slug:"/uuid/eea0ba081ea2cc99da5c1aed2f29a0a8",title:"1H prediction"},sidebar:"tutorialSidebar",previous:{title:"13C prediction",permalink:"/docs/eln/uuid/b50564ac9d207212f8e5ae8167a45f3c"},next:{title:"COSY prediction",permalink:"/docs/eln/uuid/b50564ac9d207212f8e5ae8167a607ed"}},l={},p=[],d={toc:p},m="wrapper";function u(e){let{components:t,...o}=e;return(0,r.kt)(m,(0,n.Z)({},d,o,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"1h-prediction"},(0,r.kt)("sup",null,"1"),"H prediction"),(0,r.kt)("p",null,"This tool allows you to predict the ",(0,r.kt)("sup",null,"1"),"H NMR spectrum of your sample or any other molecule."),(0,r.kt)("admonition",{title:"Overview",type:"info"},(0,r.kt)("p",{parentName:"admonition"},(0,r.kt)("img",{alt:"overview",src:a(46140).Z,width:"942",height:"597"})),(0,r.kt)("ol",{parentName:"admonition"},(0,r.kt)("li",{parentName:"ol"},"Drag and drop module - paste a molfile or a SMILES string of a molecule"),(0,r.kt)("li",{parentName:"ol"},"Draw a chemical structure and predict module - draw the structure of the molecule"),(0,r.kt)("li",{parentName:"ol"},"Chemical structure with explicit hydrogens module - explicit representation of hydrogens in a molecule"),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("sup",null,"1"),"H NMR spectrum module - predicted ",(0,r.kt)("sup",null,"1"),"H spectrum of the chosen molecule"),(0,r.kt)("li",{parentName:"ol"},"Signal module - list of obtained peaks and the corresponding chemical shifts"),(0,r.kt)("li",{parentName:"ol"},"Drag and drop module - paste a JCAMP-DX of an experimental spectrum for comparison"),(0,r.kt)("li",{parentName:"ol"},"Advanced options module - modify the magnetic field strength, specify the range of chemical shifts, change line width and the number of points to plot."),(0,r.kt)("li",{parentName:"ol"},"List of spectra module - select which experimental spectra of the sample to superimpose on the predicted one"),(0,r.kt)("li",{parentName:"ol"},"Peak list module - list of peaks with corresponding chemical shifts, scalar couplings and multiplicity, ready for publication."))),(0,r.kt)("p",null,"The structure of the currently selected sample will be already drawn so that you may go ahead and simulate its spectrum right away. If you wish to simulate the spectrum of another molecule, you can draw it or you can paste the structure in the form of a molfile or a SMILES string. Structure drawing is powered by ",(0,r.kt)("a",{parentName:"p",href:"https://peter-ertl.com/jsme/"},"JSME"),". You may also drop or paste a ",(0,r.kt)("strong",{parentName:"p"},"JCAMP-DX file")," to superimpose an experimental spectrum over the prediction."),(0,r.kt)(i.default,{mdxType:"Jcamp"}),(0,r.kt)("p",null,"The simulated spectrum, the chemical structure with explicit hydrogens and the list of peaks modules are linked, so that hovering over an entry in the list will highlight the corresponding atom in the structure and the relevant peak in the spectrum. Furthermore, the predicted spectrum is reported in the publication ready form (with chemical shifts, scalar couplings and peak multiplicity)."),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"prediction",src:a(71241).Z,width:"665",height:"606"})," "),(0,r.kt)("admonition",{type:"tip"},(0,r.kt)("p",{parentName:"admonition"},"In the advanced options, you can adjust the parameters of the simulation. With frequency you can specify the strength of the magnetic field. Furthermore, you may adjust the range of chemical shifts in which to perform the simulation. Linewidth and number of points specify the peak width and the number of data points to simulate, respectively.")),(0,r.kt)("sup",null,"1"),"H chemical shifts and coupling constants are predicted using [Spinus](http://www2.chemie.uni-erlangen.de/services/spinus/). Simulation from predicted parameters uses the method described in [DOI:10.1016/j.jmr.2010.12.008](http://www.sciencedirect.com/science/article/pii/S1090780710004003). The use of neural networks allows the prediction of ",(0,r.kt)("sup",null,"1"),"H NMR spectra.",(0,r.kt)("p",null,(0,r.kt)("img",{alt:"neural network",src:a(92896).Z,width:"1320",height:"854"})))}u.isMDXComponent=!0},44622:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/jcamp_compressed-c16de3e05c9ef95d06fc2fcaf445df4e.png"},70912:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/jcamp_example-7488c6236980359b00c42c448fe4316a.png"},57217:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/jcamp_pseudodigits-6d23683254164351241d59d04e8491d4.png"},71241:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/NMRpredict1H-91c84c0c02854caba74d91b98fdaedb5.gif"},46140:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/h_prediction-f45781b048cecad584e092428952fc3d.png"},92896:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/neuralNetwork-92d8b22c2d5bae00de7048ee94d931b8.png"}}]);