(self.webpackChunkcheminfo_eln=self.webpackChunkcheminfo_eln||[]).push([[7931,236],{3905:function(e,t,n){"use strict";n.d(t,{Zo:function(){return m},kt:function(){return d}});var a=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var c=a.createContext({}),l=function(e){var t=a.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},m=function(e){var t=l(e.components);return a.createElement(c.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},p=a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,o=e.originalType,c=e.parentName,m=s(e,["components","mdxType","originalType","parentName"]),p=l(n),d=i,f=p["".concat(c,".").concat(d)]||p[d]||u[d]||o;return n?a.createElement(f,r(r({ref:t},m),{},{components:n})):a.createElement(f,r({ref:t},m))}));function d(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=n.length,r=new Array(o);r[0]=p;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:i,r[1]=s;for(var l=2;l<o;l++)r[l]=n[l];return a.createElement.apply(null,r)}return a.createElement.apply(null,n)}p.displayName="MDXCreateElement"},9498:function(e,t,n){"use strict";n.r(t),n.d(t,{frontMatter:function(){return s},contentTitle:function(){return c},metadata:function(){return l},toc:function(){return m},default:function(){return p}});var a=n(2122),i=n(9756),o=(n(7294),n(3905)),r=n(9301),s={slug:"/uuid/f8b2a67c144b612f89580e05f8c02509"},c="Mass spectra deconvolution",l={unversionedId:"spectra/organic_chemistry/mass/deconvolution/README",id:"spectra/organic_chemistry/mass/deconvolution/README",isDocsHomePage:!1,title:"Mass spectra deconvolution",description:"This tool allows to determine the exact composition based on a mass spectrum even if there are overlaps.",source:"@site/docs/30_spectra/10_organic_chemistry/mass/deconvolution/README.md",sourceDirName:"30_spectra/10_organic_chemistry/mass/deconvolution",slug:"/uuid/f8b2a67c144b612f89580e05f8c02509",permalink:"/docs/eln/uuid/f8b2a67c144b612f89580e05f8c02509",editUrl:"https://github.com/cheminfo/eln-docs/edit/main/docs/30_spectra/10_organic_chemistry/mass/deconvolution/README.md",version:"current",frontMatter:{slug:"/uuid/f8b2a67c144b612f89580e05f8c02509"},sidebar:"tutorialSidebar",previous:{title:"View and process infrared spectra",permalink:"/docs/eln/uuid/3fc7caa33b9b3eb50bb48920f4788725"},next:{title:"Mass fragmentation",permalink:"/docs/eln/uuid/0e35f561fff36fef6c9e7341a9eec858"}},m=[{value:"Peak picking",id:"peak-picking",children:[]},{value:"Define possible MFs",id:"define-possible-mfs",children:[]},{value:"Mass spectrum parameters",id:"mass-spectrum-parameters",children:[]}],u={toc:m};function p(e){var t=e.components,s=(0,i.Z)(e,["components"]);return(0,o.kt)("wrapper",(0,a.Z)({},u,s,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"mass-spectra-deconvolution"},"Mass spectra deconvolution"),(0,o.kt)("p",null,"This tool allows to determine the exact composition based on a mass spectrum even if there are overlaps."),(0,o.kt)("p",null,"The workflow is the following:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"make a peak picking (centroids) of the mass spectrum"),(0,o.kt)("li",{parentName:"ul"},"generate all the theoretical isotopic distribution of all entities to look for"),(0,o.kt)("li",{parentName:"ul"},"align the theoretical isotopic distribution to the centroids"),(0,o.kt)("li",{parentName:"ul"},"calculate a non-negative matrix factorization"),(0,o.kt)("li",{parentName:"ul"},"create a report")),(0,o.kt)("h2",{id:"peak-picking"},"Peak picking"),(0,o.kt)("p",null,"When loading the spectrum a peak picking is done that determine the position and width of all the peaks based on global spectrum deconvolution algorithm that was implemented in ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/mljs/global-spectral-deconvolution"},"javascript"),"."),(0,o.kt)("p",null,"The result of the peak picking appears in the spectrum as yellow vertical lines. Note that the top of the peak is determined based on the 3 highest point and does not have to match an experimental point."),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"centroids",src:n(2461).Z})),(0,o.kt)("h2",{id:"define-possible-mfs"},"Define possible MFs"),(0,o.kt)("p",null,"When trying to deconvolute a mass spectrum it is required to define all the possible molecular formula. It is important to limit as much as possible the number of molecular formula to consider."),(0,o.kt)("p",null,"The molecular formula is defined based on:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Base MF : atoms that are common and present in all the molecular formula"),(0,o.kt)("li",{parentName:"ul"},"Modifications: list of modifications that can be applied on the ",(0,o.kt)("inlineCode",{parentName:"li"},"Base MF"),(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"if you want to search for isotopic enrichment you can enter as MF: ",(0,o.kt)("inlineCode",{parentName:"li"},"C-1[13C]"),", a modification in which we remove a ",(0,o.kt)("inlineCode",{parentName:"li"},"C")," of natural abundance and add a ",(0,o.kt)("sup",null,"13"),"C"))),(0,o.kt)("li",{parentName:"ul"},"Ionizations: define the list of ways to ionize the molecule. If the molecule is naturally charted this field may stay empty. It can also contain an unlimited comma separated list of ionizations like ",(0,o.kt)("inlineCode",{parentName:"li"},"Na+, K+, NH4+, H+,"),". Note this comma at the end that allows also to have no ionizatioon.")),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"preferences mf",src:n(2978).Z})),(0,o.kt)(r.default,{mdxType:"MFFilter"}),(0,o.kt)("h2",{id:"mass-spectrum-parameters"},"Mass spectrum parameters"),(0,o.kt)("p",null,"Peak width calculation is done automatically and allows to predict the peak width based on the mass."),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"preferences mass",src:n(6109).Z})))}p.isMDXComponent=!0},9301:function(e,t,n){"use strict";n.r(t),n.d(t,{frontMatter:function(){return r},contentTitle:function(){return s},metadata:function(){return c},toc:function(){return l},default:function(){return u}});var a=n(2122),i=n(9756),o=(n(7294),n(3905)),r={},s=void 0,c={unversionedId:"spectra/organic_chemistry/mass/includes/filter-mf/README",id:"spectra/organic_chemistry/mass/includes/filter-mf/README",isDocsHomePage:!1,title:"README",description:"Possible MFs can be filtered based on DBE (double bond equivalent, unsaturation), charge and molecular weight. It is also possible to add more advanced filtering option by entering a javascript code that can use the following variables:",source:"@site/docs/30_spectra/10_organic_chemistry/mass/includes/filter-mf/README.md",sourceDirName:"30_spectra/10_organic_chemistry/mass/includes/filter-mf",slug:"/spectra/organic_chemistry/mass/includes/filter-mf/README",permalink:"/docs/eln/spectra/organic_chemistry/mass/includes/filter-mf/README",editUrl:"https://github.com/cheminfo/eln-docs/edit/main/docs/30_spectra/10_organic_chemistry/mass/includes/filter-mf/README.md",version:"current",frontMatter:{}},l=[],m={toc:l};function u(e){var t=e.components,r=(0,i.Z)(e,["components"]);return(0,o.kt)("wrapper",(0,a.Z)({},m,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"Molecular formula filtering")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"Possible MFs can be filtered based on DBE (double bond equivalent, unsaturation), charge and molecular weight. It is also possible to add more advanced filtering option by entering a javascript code that can use the following variables:"),(0,o.kt)("ul",{parentName:"div"},(0,o.kt)("li",{parentName:"ul"},"mm: monoisotopic mass of the non ionized molecule"),(0,o.kt)("li",{parentName:"ul"},"mz: observed mass (m/z)"),(0,o.kt)("li",{parentName:"ul"},"charge: charge of the non ionized molecule"),(0,o.kt)("li",{parentName:"ul"},"unsaturation: unsaturation of the non ionized molecule"),(0,o.kt)("li",{parentName:"ul"},"atoms.O, atoms.C, atoms.N, ... number of atoms of the non ionized molecule"),(0,o.kt)("li",{parentName:"ul"},"examples:",(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"atoms.O < atoms.C"),(0,o.kt)("li",{parentName:"ul"},"mm < 500 && atoms.C > 10")))),(0,o.kt)("p",{parentName:"div"},(0,o.kt)("img",{alt:"filter mf",src:n(8473).Z})))))}u.isMDXComponent=!0},2461:function(e,t,n){"use strict";t.Z=n.p+"assets/images/centroids-174c9cdecb7e8e1ea3105c5de858de26.png"},6109:function(e,t,n){"use strict";t.Z=n.p+"assets/images/prefs-mass-a54ce6c2d980c86ecf5799b1a66f79a2.png"},2978:function(e,t,n){"use strict";t.Z=n.p+"assets/images/prefs-mf-e852e5ca4f8b1920efa7c2f7c1053ed5.png"},8473:function(e,t,n){"use strict";t.Z=n.p+"assets/images/filter-mf-98ab7287295331812eb6f063ff5dc47b.png"}}]);