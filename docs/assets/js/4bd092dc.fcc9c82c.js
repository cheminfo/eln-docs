"use strict";(self.webpackChunkcheminfo_eln=self.webpackChunkcheminfo_eln||[]).push([[4369],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>f});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),l=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},p=function(e){var t=l(e.components);return r.createElement(s.Provider,{value:t},e.children)},m="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,s=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),m=l(n),u=a,f=m["".concat(s,".").concat(u)]||m[u]||d[u]||i;return n?r.createElement(f,o(o({ref:t},p),{},{components:n})):r.createElement(f,o({ref:t},p))}));function f(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=u;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c[m]="string"==typeof e?e:a,o[1]=c;for(var l=2;l<i;l++)o[l]=n[l];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}u.displayName="MDXCreateElement"},89990:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>d,frontMatter:()=>i,metadata:()=>c,toc:()=>l});var r=n(87462),a=(n(67294),n(3905));const i={slug:"/uuid/ml-spectra-selection"},o=void 0,c={unversionedId:"machine_learning/includes/select_spectra/README",id:"machine_learning/includes/select_spectra/README",title:"README",description:"How to select spectra.",source:"@site/docs/50_machine_learning/includes/select_spectra/README.md",sourceDirName:"50_machine_learning/includes/select_spectra",slug:"/uuid/ml-spectra-selection",permalink:"/docs/eln/uuid/ml-spectra-selection",draft:!1,editUrl:"https://github.com/cheminfo/eln-docs/edit/main/docs/50_machine_learning/includes/select_spectra/README.md",tags:[],version:"current",frontMatter:{slug:"/uuid/ml-spectra-selection"}},s={},l=[],p={toc:l},m="wrapper";function d(e){let{components:t,...i}=e;return(0,a.kt)(m,(0,r.Z)({},p,i,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("admonition",{title:"Select spectra",type:"tip"},(0,a.kt)("details",null,(0,a.kt)("summary",null,"How to select spectra."),(0,a.kt)("div",null,(0,a.kt)("h1",{parentName:"admonition",id:"spectra-selection"},"Spectra selection"),(0,a.kt)("p",{parentName:"admonition"},"All the spectra analysis tools start with a phase of selection."),(0,a.kt)("p",{parentName:"admonition"},(0,a.kt)("img",{alt:"overview",src:n(26924).Z,width:"1681",height:"780"})),(0,a.kt)("h2",{parentName:"admonition",id:"select-samples"},"Select samples"),(0,a.kt)("p",{parentName:"admonition"},"In order to facilitate the analysis of the spectra it is advised to have samples containing representative spectra in order to evaluate the intra-variability as well as the reproducibility."),(0,a.kt)("p",{parentName:"admonition"},"Selection of spectra to analyze is achieved with one of those 3 methods:"),(0,a.kt)("p",{parentName:"admonition"},"At the level of the sample by either clicking on the ",(0,a.kt)("inlineCode",{parentName:"p"},"+"),", this will add all the spectra related to this sample or on the ",(0,a.kt)("inlineCode",{parentName:"p"},"+")," on the top of the sample box to add all the spectra of all the selected samples."),(0,a.kt)("p",{parentName:"admonition"},(0,a.kt)("img",{alt:"select sample",src:n(82075).Z,width:"279",height:"206"})),(0,a.kt)("p",{parentName:"admonition"},"If you select a sample it is also possible to add a specific spectrum by clicking on the ",(0,a.kt)("inlineCode",{parentName:"p"},"+")," at the level of the spectra list."),(0,a.kt)("p",{parentName:"admonition"},(0,a.kt)("img",{alt:"select spectra",src:n(81086).Z,width:"279",height:"242"}))))))}d.isMDXComponent=!0},26924:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/overview-7589b8d19fa1e2f90d2054b3c6098d75.png"},82075:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/selectSample-576efbcaaea8e83a60f43715086c0902.png"},81086:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/selectSpectra-4e3a6332ddc1ab3002f4472db682e962.png"}}]);