"use strict";(self.webpackChunkbenson_doc=self.webpackChunkbenson_doc||[]).push([[3183],{3905:(t,e,r)=>{r.d(e,{Zo:()=>s,kt:()=>d});var l=r(7294);function n(t,e,r){return e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}function a(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);e&&(l=l.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,l)}return r}function i(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?a(Object(r),!0).forEach((function(e){n(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}function u(t,e){if(null==t)return{};var r,l,n=function(t,e){if(null==t)return{};var r,l,n={},a=Object.keys(t);for(l=0;l<a.length;l++)r=a[l],e.indexOf(r)>=0||(n[r]=t[r]);return n}(t,e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);for(l=0;l<a.length;l++)r=a[l],e.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(t,r)&&(n[r]=t[r])}return n}var o=l.createContext({}),m=function(t){var e=l.useContext(o),r=e;return t&&(r="function"==typeof t?t(e):i(i({},e),t)),r},s=function(t){var e=m(t.components);return l.createElement(o.Provider,{value:e},t.children)},c="mdxType",k={inlineCode:"code",wrapper:function(t){var e=t.children;return l.createElement(l.Fragment,{},e)}},g=l.forwardRef((function(t,e){var r=t.components,n=t.mdxType,a=t.originalType,o=t.parentName,s=u(t,["components","mdxType","originalType","parentName"]),c=m(r),g=n,d=c["".concat(o,".").concat(g)]||c[g]||k[g]||a;return r?l.createElement(d,i(i({ref:e},s),{},{components:r})):l.createElement(d,i({ref:e},s))}));function d(t,e){var r=arguments,n=e&&e.mdxType;if("string"==typeof t||n){var a=r.length,i=new Array(a);i[0]=g;var u={};for(var o in e)hasOwnProperty.call(e,o)&&(u[o]=e[o]);u.originalType=t,u[c]="string"==typeof t?t:n,i[1]=u;for(var m=2;m<a;m++)i[m]=r[m];return l.createElement.apply(null,i)}return l.createElement.apply(null,r)}g.displayName="MDXCreateElement"},741:(t,e,r)=>{r.r(e),r.d(e,{assets:()=>o,contentTitle:()=>i,default:()=>k,frontMatter:()=>a,metadata:()=>u,toc:()=>m});var l=r(7462),n=(r(7294),r(3905));const a={sidebar_label:"[Git] Git \u5408\u4f75\u7b56\u7565",title:"[Git] Git \u5408\u4f75\u7b56\u7565",tags:["Git"]},i=void 0,u={unversionedId:"Code/git-merging-strategies",id:"Code/git-merging-strategies",title:"[Git] Git \u5408\u4f75\u7b56\u7565",description:"\u5c07 main \u7684\u66f4\u65b0\u52a0\u5230 features",source:"@site/docs/Code/git-merging-strategies.mdx",sourceDirName:"Code",slug:"/Code/git-merging-strategies",permalink:"/docs/Code/git-merging-strategies",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/Code/git-merging-strategies.mdx",tags:[{label:"Git",permalink:"/docs/tags/git"}],version:"current",frontMatter:{sidebar_label:"[Git] Git \u5408\u4f75\u7b56\u7565",title:"[Git] Git \u5408\u4f75\u7b56\u7565",tags:["Git"]},sidebar:"tutorialSidebar",previous:{title:"Intro",permalink:"/docs/intro"},next:{title:"[HTTP] Content Type",permalink:"/docs/Code/http_content-type"}},o={},m=[{value:"\u5c07 main \u7684\u66f4\u65b0\u52a0\u5230 features",id:"\u5c07-main-\u7684\u66f4\u65b0\u52a0\u5230-features",level:2},{value:"Merge",id:"merge",level:3},{value:"Rebase",id:"rebase",level:3},{value:"\u5c07 feature \u5408\u56de Main",id:"\u5c07-feature-\u5408\u56de-main",level:2},{value:"Merge",id:"merge-1",level:3},{value:"Fast-forward merge",id:"fast-forward-merge",level:3},{value:"Squash",id:"squash",level:3},{value:"\u5408\u4f75\u7b56\u7565\u6bd4\u8f03",id:"\u5408\u4f75\u7b56\u7565\u6bd4\u8f03",level:2},{value:"\u5408\u4f75\u56de main",id:"\u5408\u4f75\u56de-main",level:3},{value:"\u66f4\u65b0 feature",id:"\u66f4\u65b0-feature",level:3},{value:"\u53c3\u8003\u8cc7\u6e90",id:"\u53c3\u8003\u8cc7\u6e90",level:3}],s={toc:m},c="wrapper";function k(t){let{components:e,...r}=t;return(0,n.kt)(c,(0,l.Z)({},s,r,{components:e,mdxType:"MDXLayout"}),(0,n.kt)("br",null),(0,n.kt)("h2",{id:"\u5c07-main-\u7684\u66f4\u65b0\u52a0\u5230-features"},"\u5c07 main \u7684\u66f4\u65b0\u52a0\u5230 features"),(0,n.kt)("h3",{id:"merge"},"Merge"),(0,n.kt)("p",null,"\u5c07 master \u65b0\u7684\u8b8a\u66f4\u5e36\u5230 feature\uff0c\u540c\u6642\u5efa\u7acb\u4e00\u500b\u65b0\u7684 commit \u9ede"),(0,n.kt)("img",{src:"/img/update-feature-by-merge.png",width:600}),(0,n.kt)("br",null),(0,n.kt)("br",null),(0,n.kt)("br",null),(0,n.kt)("h3",{id:"rebase"},"Rebase"),(0,n.kt)("p",null,"\u5c07 feature 1 \u7684\u6839\u57fa\u79fb\u5230\u6700\u65b0 Main \u7684 commit \u9ede\u4e0a\uff0c\n\u8b93\u6211\u5011\u7684 history \u66f4\u4e7e\u6de8\u548c\u76f4\u89c0"),(0,n.kt)("img",{src:"/img/update-feature-by-rebase-before.png",width:600}),(0,n.kt)("img",{src:"/img/update-feature-by-rebase-after.png",width:600}),(0,n.kt)("br",null),(0,n.kt)("br",null),(0,n.kt)("br",null),(0,n.kt)("h2",{id:"\u5c07-feature-\u5408\u56de-main"},"\u5c07 feature \u5408\u56de Main"),(0,n.kt)("img",{src:"/img/integrate-main-by-merge.png",width:600}),(0,n.kt)("br",null),(0,n.kt)("br",null),(0,n.kt)("h3",{id:"merge-1"},"Merge"),(0,n.kt)("p",null,"\u5c07 feature merge \u56de Main\uff0c\u540c\u6642\u7522\u751f\u4e00\u500b\u65b0\u7684 commit \u9ede"),(0,n.kt)("p",null,"Props:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"feature \u548c Main \u7684\u6240\u6709 histories \u90fd\u6703\u88ab\u4fdd\u7559")),(0,n.kt)("img",{src:"/img/integrate-main-by-merge-highlight.png",width:600}),(0,n.kt)("br",null),(0,n.kt)("br",null),(0,n.kt)("p",null,"Cons\uff1a"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"\u5230\u6700\u5f8c\u592a\u591a\u5206\u4e4b\u6703\u8b8a\u5f97\u5f88\u6df7\u4e82")),(0,n.kt)("img",{src:"/img/integrate-main-by-merge-flaw.png",width:600}),(0,n.kt)("br",null),(0,n.kt)("br",null),(0,n.kt)("br",null),(0,n.kt)("h3",{id:"fast-forward-merge"},"Fast-forward merge"),(0,n.kt)("p",null,"\u5148\u5c07 feature rebase \u70ba Main \u7684\u6700\u65b0 commit \u9ede\u5f8c\uff0c\n\u518d\u5c07 Main \u6307\u5411 Feature \u6700\u65b0\u7684 commit \u9ede\uff0c"),(0,n.kt)("p",null,"Props\uff1a"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"\u6703\u8b93\u6240\u6709\u7684 git history \u90fd\u5728\u4e00\u76f4\u7dda\u4e0a\uff0c\u975e\u5e38\u4e7e\u6de8")),(0,n.kt)("img",{src:"/img/integrate-main-by-fast-forward-before.png"}),(0,n.kt)("img",{src:"/img/integrate-main-by-fast-forward-after.png"}),(0,n.kt)("br",null),(0,n.kt)("br",null),(0,n.kt)("br",null),(0,n.kt)("admonition",{title:"Fast-forward merge \u524d\u63d0\u689d\u4ef6",type:"warning"},(0,n.kt)("p",{parentName:"admonition"},"\u82e5\u8981\u57f7\u884c Fast-forward merge\uff0cfeature \u7684\u6839\u7bc0\u9ede\u4e00\u5b9a\u8981\u5728 Main \u7684\u6700\u65b0\u7bc0\u9ede\u4e0a\uff0c\u9019\u6a23 Main \u624d\u53ef\u4ee5\u7121\u7e2b\u4e32\u63a5 feature \u6240\u6709\u7684 commit \u9ede")),(0,n.kt)("br",null),(0,n.kt)("br",null),(0,n.kt)("br",null),(0,n.kt)("h3",{id:"squash"},"Squash"),(0,n.kt)("p",null,"\u5c07 feature \u6240\u6709\u7684 commit \u9ede\u90fd squash \u6210\u4e00\u500b commit \u9ede\uff0c\u4e26\u5c07\u6b64 commit \u9ede merge \u56de Main branch\uff0c\u5728 Main branch \u4e0a\u7522\u751f\u4e00\u500b\u65b0\u7684 commit \u9ede"),(0,n.kt)("p",null,"Pros\uff1a"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Main \u4e7e\u6de8\u53c8\u6aa2\u9ede")),(0,n.kt)("p",null,"Cons\uff1a"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"feature \u7684 history \u6703\u6d88\u5931\uff0c\u4f46\u53ef\u4ee5\u628a feature \u7684 commit messages \u90fd\u52a0\u5230 squash commit \u7684 comment \u4e2d\uff0c\u4f5c\u70ba\u88dc\u511f")),(0,n.kt)("img",{src:"/img/integrate-main-by-squash.png"}),(0,n.kt)("img",{src:"/img/integrate-main-by-commits-to-messages.png",width:400}),(0,n.kt)("br",null),(0,n.kt)("br",null),(0,n.kt)("br",null),(0,n.kt)("h2",{id:"\u5408\u4f75\u7b56\u7565\u6bd4\u8f03"},"\u5408\u4f75\u7b56\u7565\u6bd4\u8f03"),(0,n.kt)("h3",{id:"\u5408\u4f75\u56de-main"},"\u5408\u4f75\u56de main"),(0,n.kt)("table",null,(0,n.kt)("thead",null,(0,n.kt)("tr",null,(0,n.kt)("th",null,"strategy"),(0,n.kt)("th",null,"merge"),(0,n.kt)("th",null,"fast-forward"),(0,n.kt)("th",null,"squash"))),(0,n.kt)("tbody",null,(0,n.kt)("tr",null,(0,n.kt)("td",null,"Pros"),(0,n.kt)("td",{style:{verticalAlign:"top"}},"\u4fdd\u7559\u5b8c\u6574\u7684 commit \u6b77\u53f2,\u5305\u62ec\u6240\u6709\u5206\u652f\u4e0a\u7684\u8b8a\u66f4"),(0,n.kt)("td",{style:{verticalAlign:"top"}},"\u4fdd\u6301\u7dda\u6027\u6b77\u53f2,\u7c21\u55ae\u6e05\u6670"),(0,n.kt)("td",{style:{verticalAlign:"top"}},"\u5c07\u591a\u500b commit \u58d3\u7e2e\u6210\u4e00\u500b,\u4fdd\u6301\u6b77\u53f2\u7c21\u6f54")),(0,n.kt)("tr",null,(0,n.kt)("td",null,"Cons"),(0,n.kt)("td",{style:{verticalAlign:"top"}},"\u53ef\u80fd\u5c0e\u81f4 commit \u6b77\u53f2\u6df7\u4e82,\u7279\u5225\u662f\u5728\u9032\u884c\u5927\u91cf\u7684\u5408\u4f75\u64cd\u4f5c\u6642"),(0,n.kt)("td",{style:{verticalAlign:"top"}},(0,n.kt)("li",null,"\u53ea\u80fd\u5728\u6c92\u6709\u5206\u652f\u7684\u60c5\u6cc1\u4e0b\u4f7f\u7528,\u5426\u5247\u6703\u5931\u53bb\u5206\u652f\u4fe1\u606f"),(0,n.kt)("li",null,"\u4e00\u5b9a\u8981\u78ba\u4fdd root \u5728 main \u7684\u6700\u65b0 commit,\u4e0d\u7136\u7121\u6cd5\u4f7f\u7528")),(0,n.kt)("td",{style:{verticalAlign:"top"}},(0,n.kt)("li",null,"\u5931\u53bb commit \u7684\u7d30\u7bc0"),(0,n.kt)("li",null,"\u6703\u5931\u53bb\u8a73\u7d30\u7684 commit \u6b77\u53f2,\u4e0d\u9069\u7528\u65bc\u9700\u8981\u4fdd\u7559\u6bcf\u6b21\u8b8a\u66f4\u8a18\u9304\u7684\u60c5\u6cc1"))))),(0,n.kt)("br",null),(0,n.kt)("h3",{id:"\u66f4\u65b0-feature"},"\u66f4\u65b0 feature"),(0,n.kt)("table",null,(0,n.kt)("thead",null,(0,n.kt)("tr",null,(0,n.kt)("th",null,"strategy"),(0,n.kt)("th",null,"merge"),(0,n.kt)("th",null,"rebase"))),(0,n.kt)("tbody",null,(0,n.kt)("tr",null,(0,n.kt)("td",null,"Pros"),(0,n.kt)("td",null,"\u4fdd\u7559\u5b8c\u6574\u7684 commit \u6b77\u53f2,\u5305\u62ec\u6240\u6709\u5206\u652f\u4e0a\u7684\u8b8a\u66f4"),(0,n.kt)("td",null,"\u4fdd\u6301\u7dda\u6027\u548c\u4e7e\u6de8\u7684 commit \u6b77\u53f2,\u4fbf\u65bc\u67e5\u770b\u548c\u7406\u89e3")),(0,n.kt)("tr",null,(0,n.kt)("td",null,"Cons"),(0,n.kt)("td",{style:{verticalAlign:"top"}},"\u53ef\u80fd\u5c0e\u81f4\u6b77\u53f2\u6df7\u4e82,\u7279\u5225\u662f\u7d93\u5e38\u5408\u4f75\u7684\u5206\u652f"),(0,n.kt)("td",{style:{verticalAlign:"top"}},(0,n.kt)("li",null,"\u53ef\u80fd\u6703\u6539\u5beb\u6b77\u53f2,\u4e0d\u5efa\u8b70\u5728\u516c\u5171\u5206\u652f\u4e0a\u4f7f\u7528"),(0,n.kt)("li",null,"\u9700\u8981\u5c0f\u5fc3\u8655\u7406\u885d\u7a81,\u53ef\u80fd\u6703\u6bd4\u8f03\u8907\u96dc"))))),(0,n.kt)("br",null),(0,n.kt)("br",null),(0,n.kt)("br",null),(0,n.kt)("br",null),(0,n.kt)("br",null),(0,n.kt)("h3",{id:"\u53c3\u8003\u8cc7\u6e90"},"\u53c3\u8003\u8cc7\u6e90"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://www.youtube.com/watch?v=0chZFIZLR_0"},"Git MERGE vs REBASE: Everything You Need to Know - YouTube")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://www.youtube.com/watch?v=DN1fNYoJgDw"},"GIT Fast Forward Visualized - YouTube")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://www.youtube.com/shorts/j1HTNbvBt7E"},"Fast-forward merges are the future #git #coding (youtube.com)"))),(0,n.kt)("br",null),(0,n.kt)("br",null),(0,n.kt)("br",null))}k.isMDXComponent=!0}}]);