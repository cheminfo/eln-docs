(self.webpackChunkcheminfo_eln=self.webpackChunkcheminfo_eln||[]).push([[9514,6167],{20895:function(e,t,n){"use strict";n.d(t,{dK:function(){return a},_k:function(){return r},vc:function(){return o},rx:function(){return c},qo:function(){return l},Hk:function(){return i},Iz:function(){return s}});n(31336);var a=["en"],r=!1,o=null,c="c8eb53e2",l=8,i=50,s={search_placeholder:"Search",see_all_results:"See all results",no_results:"No results.",search_results_for:'Search results for "{{ keyword }}"',search_the_documentation:"Search the documentation",count_documents_found_plural:"{{ count }} documents found",count_documents_found:"{{ count }} document found",no_documents_were_found:"No documents were found"}},38704:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return X}});var a=n(67294),r=n(3905),o=n(46291),c=n(56698),l=n(86010),i=n(941),s=n(93783),d=n(77898),u=n(55537),m=n(22122),p=function(e){return a.createElement("svg",(0,m.Z)({width:"20",height:"20","aria-hidden":"true"},e),a.createElement("g",{fill:"#7a7a7a"},a.createElement("path",{d:"M9.992 10.023c0 .2-.062.399-.172.547l-4.996 7.492a.982.982 0 01-.828.454H1c-.55 0-1-.453-1-1 0-.2.059-.403.168-.551l4.629-6.942L.168 3.078A.939.939 0 010 2.528c0-.548.45-.997 1-.997h2.996c.352 0 .649.18.828.45L9.82 9.472c.11.148.172.347.172.55zm0 0"}),a.createElement("path",{d:"M19.98 10.023c0 .2-.058.399-.168.547l-4.996 7.492a.987.987 0 01-.828.454h-3c-.547 0-.996-.453-.996-1 0-.2.059-.403.168-.551l4.625-6.942-4.625-6.945a.939.939 0 01-.168-.55 1 1 0 01.996-.997h3c.348 0 .649.18.828.45l4.996 7.492c.11.148.168.347.168.55zm0 0"})))},f=n(24973),h=n(19756),b=n(36742),E=n(13919),v=n(18617),_="menuLinkText_1J2g",g=function e(t,n){return"link"===t.type?(0,i.Mg)(t.href,n):"category"===t.type&&t.items.some((function(t){return e(t,n)}))},k=(0,a.memo)((function(e){var t=e.items,n=(0,h.Z)(e,["items"]);return a.createElement(a.Fragment,null,t.map((function(e,t){return a.createElement(C,(0,m.Z)({key:t,item:e},n))})))}));function C(e){var t=e.item,n=(0,h.Z)(e,["item"]);switch(t.type){case"category":return 0===t.items.length?null:a.createElement(Z,(0,m.Z)({item:t},n));case"link":default:return a.createElement(N,(0,m.Z)({item:t},n))}}function Z(e){var t,n=e.item,r=e.onItemClick,o=e.activePath,c=(0,h.Z)(e,["item","onItemClick","activePath"]),s=n.items,d=n.label,u=n.collapsible,p=g(n,o),f=(0,i.uR)({initialState:function(){return!!u&&(!p&&n.collapsed)}}),b=f.collapsed,E=f.setCollapsed,v=f.toggleCollapsed;return function(e){var t=e.isActive,n=e.collapsed,r=e.setCollapsed,o=(0,i.D9)(t);(0,a.useEffect)((function(){t&&!o&&n&&r(!1)}),[t,o,n])}({isActive:p,collapsed:b,setCollapsed:E}),a.createElement("li",{className:(0,l.Z)(i.kM.docs.docSidebarItemCategory,"menu__list-item",{"menu__list-item--collapsed":b})},a.createElement("a",(0,m.Z)({className:(0,l.Z)("menu__link",(t={"menu__link--sublist":u,"menu__link--active":u&&p},t[_]=!u,t)),onClick:u?function(e){e.preventDefault(),v()}:void 0,href:u?"#":void 0},c),d),a.createElement(i.zF,{lazy:!0,as:"ul",className:"menu__list",collapsed:b},a.createElement(k,{items:s,tabIndex:b?-1:0,onItemClick:r,activePath:o})))}function N(e){var t=e.item,n=e.onItemClick,r=e.activePath,o=(0,h.Z)(e,["item","onItemClick","activePath"]),c=t.href,s=t.label,d=g(t,r);return a.createElement("li",{className:(0,l.Z)(i.kM.docs.docSidebarItemLink,"menu__list-item"),key:s},a.createElement(b.Z,(0,m.Z)({className:(0,l.Z)("menu__link",{"menu__link--active":d}),"aria-current":d?"page":void 0,to:c},(0,E.Z)(c)&&{onClick:n},o),(0,E.Z)(c)?s:a.createElement("span",null,s,a.createElement(v.Z,null))))}var S="sidebar_15mo",I="sidebarWithHideableNavbar_267A",T="sidebarHidden_2kNb",M="sidebarLogo_3h0W",w="menu_Bmed",y="menuWithAnnouncementBar_2WvA",x="collapseSidebarButton_1CGd",A="collapseSidebarButtonIcon_3E-R";function P(e){var t=e.onClick;return a.createElement("button",{type:"button",title:(0,f.I)({id:"theme.docs.sidebar.collapseButtonTitle",message:"Collapse sidebar",description:"The title attribute for collapse button of doc sidebar"}),"aria-label":(0,f.I)({id:"theme.docs.sidebar.collapseButtonAriaLabel",message:"Collapse sidebar",description:"The title attribute for collapse button of doc sidebar"}),className:(0,l.Z)("button button--secondary button--outline",x),onClick:t},a.createElement(p,{className:A}))}function B(e){var t,n,r=e.path,o=e.sidebar,c=e.onCollapse,s=e.isHidden,m=function(){var e=(0,i.nT)().isClosed,t=(0,a.useState)(!e),n=t[0],r=t[1];return(0,d.Z)((function(t){var n=t.scrollY;e||r(0===n)})),n}(),p=(0,i.LU)(),f=p.navbar.hideOnScroll,h=p.hideableSidebar,b=(0,i.nT)().isClosed;return a.createElement("div",{className:(0,l.Z)(S,(t={},t[I]=f,t[T]=s,t))},f&&a.createElement(u.Z,{tabIndex:-1,className:M}),a.createElement("nav",{className:(0,l.Z)("menu thin-scrollbar",w,(n={},n[y]=!b&&m,n))},a.createElement("ul",{className:(0,l.Z)(i.kM.docs.docSidebarMenu,"menu__list")},a.createElement(k,{items:o,activePath:r}))),h&&a.createElement(P,{onClick:c}))}var F=function(e){var t=e.toggleSidebar,n=e.sidebar,r=e.path;return a.createElement("ul",{className:(0,l.Z)(i.kM.docs.docSidebarMenu,"menu__list")},a.createElement(k,{items:n,activePath:r,onItemClick:function(){return t()}}))};function H(e){return a.createElement(i.Cv,{component:F,props:e})}var L=a.memo(B),D=a.memo(H);function R(e){var t=(0,s.Z)(),n="desktop"===t||"ssr"===t,r="mobile"===t;return a.createElement(a.Fragment,null,n&&a.createElement(L,e),r&&a.createElement(D,e))}var W=n(60637),z=n(24608),Y=n(5977),J="backToTopButton_35hR",K="backToTopButtonShow_18ls";function q(){var e=(0,a.useRef)(null);return{smoothScrollTop:function(){var t;e.current=(t=null,function e(){var n=document.documentElement.scrollTop;n>0&&(t=requestAnimationFrame(e),window.scrollTo(0,Math.floor(.85*n)))}(),function(){return t&&cancelAnimationFrame(t)})},cancelScrollToTop:function(){return null==e.current?void 0:e.current()}}}var U=function(){var e,t=(0,Y.TH)(),n=q(),r=n.smoothScrollTop,o=n.cancelScrollToTop,c=(0,a.useState)(!1),i=c[0],s=c[1];return(0,d.Z)((function(e,t){var n=e.scrollY;if(t){var a=n<t.scrollY;if(a||o(),n<300)s(!1);else if(a){var r=document.documentElement.scrollHeight;n+window.innerHeight<r&&s(!0)}else s(!1)}}),[t]),a.createElement("button",{className:(0,l.Z)("clean-btn",J,(e={},e[K]=i,e)),type:"button",onClick:function(){return r()}},a.createElement("svg",{viewBox:"0 0 24 24",width:"28"},a.createElement("path",{d:"M7.41 15.41L12 10.83l4.59 4.58L18 14l-6-6-6 6z",fill:"currentColor"})))},G={docPage:"docPage_31aa",docMainContainer:"docMainContainer_3ufF",docSidebarContainer:"docSidebarContainer_3Kbt",docMainContainerEnhanced:"docMainContainerEnhanced_3NYZ",docSidebarContainerHidden:"docSidebarContainerHidden_3pA8",collapsedDocSidebar:"collapsedDocSidebar_2JMH",expandSidebarButtonIcon:"expandSidebarButtonIcon_1naQ",docItemWrapperEnhanced:"docItemWrapperEnhanced_2vyJ"},O=n(99105);function Q(e){var t,n,o,s=e.currentDocRoute,d=e.versionMetadata,u=e.children,m=d.pluginId,h=d.version,b=s.sidebar,E=b?d.docsSidebars[b]:void 0,v=(0,a.useState)(!1),_=v[0],g=v[1],k=(0,a.useState)(!1),C=k[0],Z=k[1],N=(0,a.useCallback)((function(){C&&Z(!1),g(!_)}),[C]);return a.createElement(c.Z,{wrapperClassName:i.kM.wrapper.docsPages,pageClassName:i.kM.page.docsDocPage,searchMetadatas:{version:h,tag:(0,i.os)(m,h)}},a.createElement("div",{className:G.docPage},a.createElement(U,null),E&&a.createElement("aside",{className:(0,l.Z)(G.docSidebarContainer,(t={},t[G.docSidebarContainerHidden]=_,t)),onTransitionEnd:function(e){e.currentTarget.classList.contains(G.docSidebarContainer)&&_&&Z(!0)}},a.createElement(R,{key:b,sidebar:E,path:s.path,onCollapse:N,isHidden:C}),C&&a.createElement("div",{className:G.collapsedDocSidebar,title:(0,f.I)({id:"theme.docs.sidebar.expandButtonTitle",message:"Expand sidebar",description:"The ARIA label and title attribute for expand button of doc sidebar"}),"aria-label":(0,f.I)({id:"theme.docs.sidebar.expandButtonAriaLabel",message:"Expand sidebar",description:"The ARIA label and title attribute for expand button of doc sidebar"}),tabIndex:0,role:"button",onKeyDown:N,onClick:N},a.createElement(p,{className:G.expandSidebarButtonIcon}))),a.createElement("main",{className:(0,l.Z)(G.docMainContainer,(n={},n[G.docMainContainerEnhanced]=_||!E,n))},a.createElement("div",{className:(0,l.Z)("container padding-top--md padding-bottom--lg",G.docItemWrapper,(o={},o[G.docItemWrapperEnhanced]=_,o))},a.createElement(r.Zo,{components:W.Z},u)))))}var X=function(e){var t=e.route.routes,n=e.versionMetadata,r=e.location,c=t.find((function(e){return(0,Y.LX)(r.pathname,e)}));return c?a.createElement(a.Fragment,null,a.createElement(O.Z,null,a.createElement("html",{className:n.className})),a.createElement(Q,{currentDocRoute:c,versionMetadata:n},(0,o.Z)(t,{versionMetadata:n}))):a.createElement(z.default,e)}},24608:function(e,t,n){"use strict";n.r(t);var a=n(67294),r=n(56698),o=n(24973);t.default=function(){return a.createElement(r.Z,{title:(0,o.I)({id:"theme.NotFound.title",message:"Page Not Found"})},a.createElement("main",{className:"container margin-vert--xl"},a.createElement("div",{className:"row"},a.createElement("div",{className:"col col--6 col--offset-3"},a.createElement("h1",{className:"hero__title"},a.createElement(o.Z,{id:"theme.NotFound.title",description:"The title of the 404 page"},"Page Not Found")),a.createElement("p",null,a.createElement(o.Z,{id:"theme.NotFound.p1",description:"The first paragraph of the 404 page"},"We could not find what you were looking for.")),a.createElement("p",null,a.createElement(o.Z,{id:"theme.NotFound.p2",description:"The 2nd paragraph of the 404 page"},"Please contact the owner of the site that linked you to the original URL and let them know their link is broken."))))))}}}]);