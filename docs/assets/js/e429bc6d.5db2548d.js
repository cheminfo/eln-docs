"use strict";(self.webpackChunkcheminfo_eln=self.webpackChunkcheminfo_eln||[]).push([[8771],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return f}});var r=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function a(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=r.createContext({}),s=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},u=function(e){var t=s(e.components);return r.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,l=e.parentName,u=a(e,["components","mdxType","originalType","parentName"]),d=s(n),f=o,m=d["".concat(l,".").concat(f)]||d[f]||p[f]||i;return n?r.createElement(m,c(c({ref:t},u),{},{components:n})):r.createElement(m,c({ref:t},u))}));function f(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,c=new Array(i);c[0]=d;var a={};for(var l in t)hasOwnProperty.call(t,l)&&(a[l]=t[l]);a.originalType=e,a.mdxType="string"==typeof e?e:o,c[1]=a;for(var s=2;s<i;s++)c[s]=n[s];return r.createElement.apply(null,c)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},53778:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return a},contentTitle:function(){return l},metadata:function(){return s},toc:function(){return u},default:function(){return d}});var r=n(87462),o=n(63366),i=(n(67294),n(3905)),c=["components"],a={},l="Writing documentation",s={unversionedId:"for_developers/documentation/writing_docs/README",id:"for_developers/documentation/writing_docs/README",isDocsHomePage:!1,title:"Writing documentation",description:"The documentation of the ELN is hosted on GitHub and the simplest way to correct or improve the text is to directly edit the file on GitHub.",source:"@site/docs/90_for_developers/documentation/writing_docs/README.md",sourceDirName:"90_for_developers/documentation/writing_docs",slug:"/for_developers/documentation/writing_docs/README",permalink:"/docs/eln/for_developers/documentation/writing_docs/README",editUrl:"https://github.com/cheminfo/eln-docs/edit/main/docs/90_for_developers/documentation/writing_docs/README.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Images and GIF",permalink:"/docs/eln/for_developers/documentation/image/README"},next:{title:"Creating access tokens",permalink:"/docs/eln/for_developers/token/README"}},u=[{value:"Spellcheck",id:"spellcheck",children:[],level:2}],p={toc:u};function d(e){var t=e.components,a=(0,o.Z)(e,c);return(0,i.kt)("wrapper",(0,r.Z)({},p,a,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"writing-documentation"},"Writing documentation"),(0,i.kt)("p",null,"The documentation of the ELN is hosted on GitHub and the simplest way to correct or improve the text is to directly edit the file on ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/cheminfo/eln-docs"},"GitHub"),"."),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"edit a file on GitHub",src:n(32801).Z})),(0,i.kt)("p",null,"If you want to get involved more deeply in the update of the documentation it is better to have a local copy of the repository on your computer."),(0,i.kt)("h2",{id:"spellcheck"},"Spellcheck"),(0,i.kt)("p",null,"We use a GitHub action that automatically checks the spelling in all Markdown files.\nUnder the hood it uses ",(0,i.kt)("a",{parentName:"p",href:"https://facelessuser.github.io/pyspelling/configuration/#spell-checker-options"},"PySpelling"),", which you can run with ",(0,i.kt)("inlineCode",{parentName:"p"},"pyspelling -c spellcheck.yaml"),".\nIt might be that the dictionaries ",(0,i.kt)("inlineCode",{parentName:"p"},"PySpelling")," uses do not know some words. Add them to ",(0,i.kt)("inlineCode",{parentName:"p"},"wordlist.txt")," in this case."))}d.isMDXComponent=!0},32801:function(e,t,n){t.Z=n.p+"assets/images/editFile-7d774d8c7f7b9e5cdf047b04ab923ebd.gif"}}]);