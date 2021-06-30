(self.webpackChunkcheminfo_eln=self.webpackChunkcheminfo_eln||[]).push([[3594,8753],{3905:function(e,t,n){"use strict";n.d(t,{Zo:function(){return u},kt:function(){return m}});var a=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var c=a.createContext({}),s=function(e){var t=a.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},u=function(e){var t=s(e.components);return a.createElement(c.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,r=e.originalType,c=e.parentName,u=o(e,["components","mdxType","originalType","parentName"]),d=s(n),m=i,h=d["".concat(c,".").concat(m)]||d[m]||p[m]||r;return n?a.createElement(h,l(l({ref:t},u),{},{components:n})):a.createElement(h,l({ref:t},u))}));function m(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var r=n.length,l=new Array(r);l[0]=d;var o={};for(var c in t)hasOwnProperty.call(t,c)&&(o[c]=t[c]);o.originalType=e,o.mdxType="string"==typeof e?e:i,l[1]=o;for(var s=2;s<r;s++)l[s]=n[s];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},4964:function(e,t,n){"use strict";n.r(t),n.d(t,{frontMatter:function(){return o},contentTitle:function(){return c},metadata:function(){return s},toc:function(){return u},default:function(){return d}});var a=n(2122),i=n(9756),r=(n(7294),n(3905)),l=n(5038),o={slug:"/uuid/13a5028017f3fdcd3d5c0ce32120e876"},c="Add and modify an ELN entry",s={unversionedId:"eln/eln-add-entry/README",id:"eln/eln-add-entry/README",isDocsHomePage:!1,title:"Add and modify an ELN entry",description:"Userguide",source:"@site/docs/55_eln/20_eln-add-entry/README.md",sourceDirName:"55_eln/20_eln-add-entry",slug:"/uuid/13a5028017f3fdcd3d5c0ce32120e876",permalink:"/docs/eln/uuid/13a5028017f3fdcd3d5c0ce32120e876",editUrl:"https://github.com/cheminfo/eln-docs/edit/main/docs/55_eln/20_eln-add-entry/README.md",version:"current",frontMatter:{slug:"/uuid/13a5028017f3fdcd3d5c0ce32120e876"},sidebar:"tutorialSidebar",previous:{title:"Copy product as molfile",permalink:"/docs/eln/eln/eln-add-entry/copyProduct/index"},next:{title:"Search reactions by structure",permalink:"/docs/eln/uuid/3fc7caa33b9b3eb50bb48920f4788725"}},u=[{value:"Userguide",id:"userguide",children:[{value:"JSME tricks",id:"jsme-tricks",children:[]},{value:"Reagents table calculator",id:"reagents-table-calculator",children:[]},{value:"Drag drop images",id:"drag-drop-images",children:[]},{value:"Calculate solvent volume to reach specific concentration",id:"calculate-solvent-volume-to-reach-specific-concentration",children:[]},{value:"Safety information",id:"safety-information",children:[]}]},{value:"Specifying the purity of a reagent",id:"specifying-the-purity-of-a-reagent",children:[]}],p={toc:u};function d(e){var t=e.components,o=(0,i.Z)(e,["components"]);return(0,r.kt)("wrapper",(0,a.Z)({},p,o,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"add-and-modify-an-eln-entry"},"Add and modify an ELN entry"),(0,r.kt)("h2",{id:"userguide"},"Userguide"),(0,r.kt)("p",null,"This view shows a concept of an electronic laboratory notebook done directly in the visualizer."),(0,r.kt)("h3",{id:"jsme-tricks"},"JSME tricks"),(0,r.kt)("p",null,"JSME is a simple to use and powerful tool developed by Peter Ertl and Bruno Bienfait."),(0,r.kt)("p",null,"It is possible to select a molecule by going hover it. Once selected you can move this molecule ","(","just click around and drag the mouse",")","."),(0,r.kt)("p",null,"Even if the molecule does not appear as being selected you can still act on it. In instance you can:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"copy to the molecule to the other side of the reaction by clicking on the arrow."),(0,r.kt)("li",{parentName:"ul"},"click on the white rectangle to delete this selected molecule")),(0,r.kt)(l.default,{mdxType:"JSMETip"}),(0,r.kt)("h3",{id:"reagents-table-calculator"},"Reagents table calculator"),(0,r.kt)("p",null,'The reagent calculater is connected to databases and can retrieve information about a chemical. For instance in the "code" you may enter a molecular formula, name or cas number and the system will look for commercially available chemicals. You can then select the molecule you want to add in the table.'),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"If you enter a new sample and change the molecular formula, molecular weight will be automatically calculated. In the molecular formula you may enter groups like Et, Ph, Ts, ... as well as parenthesis.."),(0,r.kt)("li",{parentName:"ul"},"The purity may be enter in %, M ","(","molar",")"," or L ","(","loading",")",". Molar is expressed in mmoles / mL and loading is expressed by mmoles / g and is practical for solid phase synthesis."),(0,r.kt)("li",{parentName:"ul"},"The first reagent for which you add a quantity will be defined as 1 equivalent. You may still change this anytime. After defining the first quantity you will probably want to define the other reagents from the equivalent columns rather than the quantity ","(","except probably for the solvent",")","."),(0,r.kt)("li",{parentName:"ul"},'One the equivalents are specified those samples are "connected". This means that if you change the quantity of one of the reagents all the quantity will change.'),(0,r.kt)("li",{parentName:"ul"},'It is possible to remove the link between the reagents by unselecting the "Link" checkbox.')),(0,r.kt)("h3",{id:"drag-drop-images"},"Drag drop images"),(0,r.kt)("p",null,'You may just copy / paste an image of the "Drop or paste" zone and it will be inserted in the procedure.'),(0,r.kt)("h3",{id:"calculate-solvent-volume-to-reach-specific-concentration"},"Calculate solvent volume to reach specific concentration"),(0,r.kt)("p",null,"For some reaction it is important to calculate the solvent to reach a specific concentration."),(0,r.kt)("p",null,"The reagent table allows to do this:"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"For the solvent enter as number of equivalent '1'"),(0,r.kt)("li",{parentName:"ol"},"Enter the concentration you want to achieve in the 'Purity' column.")),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Reagents",src:n(1873).Z})),(0,r.kt)("h3",{id:"safety-information"},"Safety information"),(0,r.kt)("p",null,"When looking for commercial products you may decide to also lookup for safety information in PubChem."),(0,r.kt)("p",null,"To activate this feature, click on ",(0,r.kt)("inlineCode",{parentName:"p"},"prefs")," and check ",(0,r.kt)("inlineCode",{parentName:"p"},"Activate safety lookup"),". Don't forget to save your new preferences !"),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Safety preferences",src:n(7585).Z})),(0,r.kt)("p",null,"It is also possible to directly edit the safety information by clicking in the ",(0,r.kt)("inlineCode",{parentName:"p"},"Hazard pictogram")," column and entering the various GHS pictogram code separated by a comma."),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Safety preferences",src:n(8165).Z})),(0,r.kt)("p",null,"More information from PubChem about the chemical can also be found by clicking on the 'i' icon."),(0,r.kt)("h2",{id:"specifying-the-purity-of-a-reagent"},"Specifying the purity of a reagent"),(0,r.kt)("p",null,"The purity of a reagent may be specified using 3 possibles units:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"%"),": purity as mass ratio",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"like 40% HNMe2 in water"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"M")," (or ",(0,r.kt)("inlineCode",{parentName:"li"},"mM"),"): moles/liter (or mmoles/liter)",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"like 1.6M BuLi"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"L"),": loading: mole/kg",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"useful for solid phase synthesis")))),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"purity.png",src:n(429).Z})))}d.isMDXComponent=!0},5038:function(e,t,n){"use strict";n.r(t),n.d(t,{frontMatter:function(){return l},contentTitle:function(){return o},metadata:function(){return c},toc:function(){return s},default:function(){return p}});var a=n(2122),i=n(9756),r=(n(7294),n(3905)),l={},o=void 0,c={unversionedId:"includes/jsme-tip",id:"includes/jsme-tip",isDocsHomePage:!1,title:"jsme-tip",description:"If you would like to draw efficiently the molecules directly in the editor click on the little question mark and try to learn all the shortcuts. You may also check the userguide here.",source:"@site/docs/includes/jsme-tip.md",sourceDirName:"includes",slug:"/includes/jsme-tip",permalink:"/docs/eln/includes/jsme-tip",editUrl:"https://github.com/cheminfo/eln-docs/edit/main/docs/includes/jsme-tip.md",version:"current",frontMatter:{}},s=[],u={toc:s};function p(e){var t=e.components,n=(0,i.Z)(e,["components"]);return(0,r.kt)("wrapper",(0,a.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"JSME editor")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},"If you would like to draw efficiently the molecules directly in the editor click on the little question mark and try to learn all the shortcuts. You may also check the ",(0,r.kt)("a",{parentName:"p",href:"/eln/uuid/jsme"},"userguide here"),"."))))}p.isMDXComponent=!0},429:function(e,t,n){"use strict";t.Z=n.p+"assets/images/purity-735abf16e81199e094def837f3c3ee00.png"},1873:function(e,t,n){"use strict";t.Z=n.p+"assets/images/reagents-6f63937de2a17976b34e45114fddbae9.png"},8165:function(e,t){"use strict";t.Z="data:image/png;base64,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"},7585:function(e,t,n){"use strict";t.Z=n.p+"assets/images/safetyPrefs-67b935ad3bd3f701547d5a7796818fd9.png"}}]);