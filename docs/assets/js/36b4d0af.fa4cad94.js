"use strict";(self.webpackChunkcheminfo_eln=self.webpackChunkcheminfo_eln||[]).push([[6506],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>h});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var c=a.createContext({}),l=function(e){var t=a.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},p=function(e){var t=l(e.components);return a.createElement(c.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,c=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),u=l(n),m=r,h=u["".concat(c,".").concat(m)]||u[m]||d[m]||i;return n?a.createElement(h,s(s({ref:t},p),{},{components:n})):a.createElement(h,s({ref:t},p))}));function h(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,s=new Array(i);s[0]=m;var o={};for(var c in t)hasOwnProperty.call(t,c)&&(o[c]=t[c]);o.originalType=e,o[u]="string"==typeof e?e:r,s[1]=o;for(var l=2;l<i;l++)s[l]=n[l];return a.createElement.apply(null,s)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},47662:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>s,default:()=>d,frontMatter:()=>i,metadata:()=>o,toc:()=>l});var a=n(87462),r=(n(67294),n(3905));const i={slug:"/uuid/daf2eda5bf803818ce48655dd963ca21",title:"Check HR mass"},s=void 0,o={unversionedId:"structural_analysis/mass/check_hr_mass/README",id:"structural_analysis/mass/check_hr_mass/README",title:"Check HR mass",description:"Introduction",source:"@site/docs/30_structural_analysis/mass/30_check_hr_mass/README.md",sourceDirName:"30_structural_analysis/mass/30_check_hr_mass",slug:"/uuid/daf2eda5bf803818ce48655dd963ca21",permalink:"/docs/eln/uuid/daf2eda5bf803818ce48655dd963ca21",draft:!1,editUrl:"https://github.com/cheminfo/eln-docs/edit/main/docs/30_structural_analysis/mass/30_check_hr_mass/README.md",tags:[],version:"current",frontMatter:{slug:"/uuid/daf2eda5bf803818ce48655dd963ca21",title:"Check HR mass"},sidebar:"tutorialSidebar",previous:{title:"Mass fragmentation",permalink:"/docs/eln/uuid/0e35f561fff36fef6c9e7341a9eec858"},next:{title:"MF from monoisotopic mass",permalink:"/docs/eln/uuid/2294a250c8c1da87ca6753a6eb93c166"}},c={},l=[{value:"Introduction",id:"introduction",level:2},{value:"HR mass",id:"hr-mass",level:2},{value:"Experimental spectrum",id:"experimental-spectrum",level:2}],p={toc:l},u="wrapper";function d(e){let{components:t,...i}=e;return(0,r.kt)(u,(0,a.Z)({},p,i,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"introduction"},"Introduction"),(0,r.kt)("p",null,"This view allows to simulate a high resolution mass spectrum from a molecular formula. It can also be used to get the HR mass spectrum of a peptidic or nucleic sequence."),(0,r.kt)("h2",{id:"hr-mass"},"HR mass"),(0,r.kt)("p",null,"It is possible to predict the mass spectrum of a molecule, by either drawing it on the left panel, entering the molecular formula, or from the peptidic or nucleic sequence that can be entered in the corresponding area. Another possibility is to copy and paste a part of a ",(0,r.kt)("inlineCode",{parentName:"p"},"pdb")," file that contains a sequence, this part will be automatically parsed and the sequence will be extracted."),(0,r.kt)("p",null,(0,r.kt)("img",{src:n(22402).Z,width:"1176",height:"848"})),(0,r.kt)("p",null,"The spectrum is then predicted according to the settings given in the upper panel. In the settings, it is possible to modify :"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"FWHM")," : the full width at half maximum of the peaks can be adjusted."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Gaussian")," : enable or not a Gaussian peak shape."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Max nb peaks")," : specify the maximum number of peaks."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Ionizations")," : specify a single or multiple ionizations."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Annotation")," : show the annotations on the experimental spectrum or the theoretical spectrum.")),(0,r.kt)("p",null,"The spectrum can be predicted by clicking on the ",(0,r.kt)("inlineCode",{parentName:"p"},"Predict mass spectrum")," button. It is also possible to save all data."),(0,r.kt)("p",null,(0,r.kt)("img",{src:n(58353).Z,width:"1036",height:"428"})),(0,r.kt)("p",null,"In the case where the FWHM is set to zero, and the peaks are non-Gaussian, if the annotation is ",(0,r.kt)("inlineCode",{parentName:"p"},"on theoretical spectrum"),", the system will show the isotope that correspond to each peak."),(0,r.kt)("p",null,(0,r.kt)("img",{src:n(32264).Z,width:"1180",height:"656"})),(0,r.kt)("h2",{id:"experimental-spectrum"},"Experimental spectrum"),(0,r.kt)("p",null,"You can drag and drop experimental spectrum on the top right panel. If you click on one experimental spectrum, it will be loaded and displayed. On the spectrum, if you press ",(0,r.kt)("inlineCode",{parentName:"p"},"ALT")," and click on a peak, this peak will be added on the table on the right. Once you added one peak, you can assign it to any text."),(0,r.kt)("p",null,(0,r.kt)("img",{src:n(19940).Z,width:"1624",height:"650"})))}d.isMDXComponent=!0},22402:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/nucleic-faa3ba042b3dd3a856c9528d81552803.gif"},19940:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/peak_assignment-01cd2bf5bbf8c1032a925fcd28fbd5df.gif"},58353:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/settings-b8c1edbef16148a691403f21e7ee71a4.png"},32264:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/theoretical_spectrum-13e8c2f9ca0813f3fe1f23bad82d2091.png"}}]);