"use strict";(self.webpackChunkcheminfo_eln=self.webpackChunkcheminfo_eln||[]).push([[9812],{3905:(t,e,r)=>{r.d(e,{Zo:()=>u,kt:()=>f});var n=r(67294);function o(t,e,r){return e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}function a(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,n)}return r}function i(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?a(Object(r),!0).forEach((function(e){o(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}function l(t,e){if(null==t)return{};var r,n,o=function(t,e){if(null==t)return{};var r,n,o={},a=Object.keys(t);for(n=0;n<a.length;n++)r=a[n],e.indexOf(r)>=0||(o[r]=t[r]);return o}(t,e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);for(n=0;n<a.length;n++)r=a[n],e.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(t,r)&&(o[r]=t[r])}return o}var s=n.createContext({}),c=function(t){var e=n.useContext(s),r=e;return t&&(r="function"==typeof t?t(e):i(i({},e),t)),r},u=function(t){var e=c(t.components);return n.createElement(s.Provider,{value:e},t.children)},m="mdxType",p={inlineCode:"code",wrapper:function(t){var e=t.children;return n.createElement(n.Fragment,{},e)}},d=n.forwardRef((function(t,e){var r=t.components,o=t.mdxType,a=t.originalType,s=t.parentName,u=l(t,["components","mdxType","originalType","parentName"]),m=c(r),d=o,f=m["".concat(s,".").concat(d)]||m[d]||p[d]||a;return r?n.createElement(f,i(i({ref:e},u),{},{components:r})):n.createElement(f,i({ref:e},u))}));function f(t,e){var r=arguments,o=e&&e.mdxType;if("string"==typeof t||o){var a=r.length,i=new Array(a);i[0]=d;var l={};for(var s in e)hasOwnProperty.call(e,s)&&(l[s]=e[s]);l.originalType=t,l[m]="string"==typeof t?t:o,i[1]=l;for(var c=2;c<a;c++)i[c]=r[c];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},56400:(t,e,r)=>{r.r(e),r.d(e,{assets:()=>s,contentTitle:()=>i,default:()=>p,frontMatter:()=>a,metadata:()=>l,toc:()=>c});var n=r(87462),o=(r(67294),r(3905));const a={},i="Structure and MF information",l={unversionedId:"structural_analysis/mass/structure-and-mf-information",id:"structural_analysis/mass/structure-and-mf-information",title:"Structure and MF information",description:"Isotopic distribution and elemental analysis from a structure",source:"@site/docs/30_structural_analysis/mass/structure-and-mf-information.md",sourceDirName:"30_structural_analysis/mass",slug:"/structural_analysis/mass/structure-and-mf-information",permalink:"/docs/eln/structural_analysis/mass/structure-and-mf-information",draft:!1,editUrl:"https://github.com/cheminfo/eln-docs/edit/main/docs/30_structural_analysis/mass/structure-and-mf-information.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Isotopic distribution from MF or chemical structure",permalink:"/docs/eln/structural_analysis/mass/isotopic-distribution/"},next:{title:"Homotopic, enantiotopic and diastereotopic atoms",permalink:"/docs/eln/structural_analysis/nmr/diastereotopic/"}},s={},c=[{value:"Isotopic distribution and elemental analysis from a structure",id:"isotopic-distribution-and-elemental-analysis-from-a-structure",level:2},{value:"Introduction",id:"introduction",level:3},{value:"Tricks:",id:"tricks",level:3},{value:"Fragmenting the molecule",id:"fragmenting-the-molecule",level:3}],u={toc:c},m="wrapper";function p(t){let{components:e,...r}=t;return(0,o.kt)(m,(0,n.Z)({},u,r,{components:e,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"structure-and-mf-information"},"Structure and MF information"),(0,o.kt)("h2",{id:"isotopic-distribution-and-elemental-analysis-from-a-structure"},"Isotopic distribution and elemental analysis from a structure"),(0,o.kt)("h3",{id:"introduction"},"Introduction"),(0,o.kt)("p",null,"This tool allows to calculate the theoretical distribution and monoisotopic mass from a structure as soon as drawn or imported as SMILES code."),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Please use a recent version of Google Chrome!")),(0,o.kt)("h3",{id:"tricks"},"Tricks:"),(0,o.kt)("p",null," Click right in the window, you can copy smiles, but also ChemDraw ",(0,o.kt)("inlineCode",{parentName:"p"},".mol")," and ",(0,o.kt)("inlineCode",{parentName:"p"},".sdf")," files"),(0,o.kt)("p",null,(0,o.kt)("img",{parentName:"p",src:"https://lh4.googleusercontent.com/oa80uLEXnUQqYVhKpPXmoYfZrpxAMxVEuwnsVgtZOmjKwqQNluOBakvylZ6T-_LMEyA2Nc6MfpdVZs9jBoRMEGTUb4dQ98Mtl43riI9LzEvi5k8Akgc7RBgvfUiJtF_nQw5uzlMr",alt:null})),(0,o.kt)("h3",{id:"fragmenting-the-molecule"},"Fragmenting the molecule"),(0,o.kt)("p",null,"In order to fragment the molecule you should select the blue round and click on the bonds that are allowed to fragment."),(0,o.kt)("p",null,(0,o.kt)("img",{parentName:"p",src:"https://lh3.googleusercontent.com/vIhoAzQW6NvpADRID0CMaTj4SbiI5pd3EAZMbYNUvg7XoR3twiMRgrgUMbdXlonIFV_ORRyzb2hM7HgbBgiOvY47_8EAsUd6lJ4irOqxUoe6HJ5AiYhr0k52o9ySlQRkv4gi1_-t",alt:null})))}p.isMDXComponent=!0}}]);