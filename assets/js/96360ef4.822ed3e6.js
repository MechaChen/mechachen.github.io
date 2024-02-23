"use strict";(self.webpackChunkbenson_doc=self.webpackChunkbenson_doc||[]).push([[7688],{3905:(e,t,r)=>{r.d(t,{Zo:()=>c,kt:()=>s});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function l(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?l(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},l=Object.keys(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var u=n.createContext({}),p=function(e){var t=n.useContext(u),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},c=function(e){var t=p(e.components);return n.createElement(u.Provider,{value:t},e.children)},k="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,l=e.originalType,u=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),k=p(r),d=a,s=k["".concat(u,".").concat(d)]||k[d]||m[d]||l;return r?n.createElement(s,o(o({ref:t},c),{},{components:r})):n.createElement(s,o({ref:t},c))}));function s(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=r.length,o=new Array(l);o[0]=d;var i={};for(var u in t)hasOwnProperty.call(t,u)&&(i[u]=t[u]);i.originalType=e,i[k]="string"==typeof e?e:a,o[1]=i;for(var p=2;p<l;p++)o[p]=r[p];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},1638:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>u,contentTitle:()=>o,default:()=>m,frontMatter:()=>l,metadata:()=>i,toc:()=>p});var n=r(7462),a=(r(7294),r(3905));const l={sidebar_position:2,sidebar_label:"[Docker] 4. \u5efa\u7bc9\u7269\u7684\u57fa\u5e95\uff1aParent Image",title:"[Docker] 4. \u5efa\u7bc9\u7269\u7684\u57fa\u5e95\uff1aParent Image",tags:["Docker"]},o=void 0,i={unversionedId:"Deploy/docker-4-parent-image",id:"Deploy/docker-4-parent-image",title:"[Docker] 4. \u5efa\u7bc9\u7269\u7684\u57fa\u5e95\uff1aParent Image",description:"\u554f\u984c\uff1a\u5f9e 0 ~ 1 \u592a\u7d2f\u4e86\uff0c\u6709\u6c92\u6709\u73fe\u6210\u7684\u57fa\u5e95\u53ef\u4ee5\u7528\uff1f",source:"@site/docs/Deploy/docker-4-parent-image.mdx",sourceDirName:"Deploy",slug:"/Deploy/docker-4-parent-image",permalink:"/docs/Deploy/docker-4-parent-image",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/Deploy/docker-4-parent-image.mdx",tags:[{label:"Docker",permalink:"/docs/tags/docker"}],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2,sidebar_label:"[Docker] 4. \u5efa\u7bc9\u7269\u7684\u57fa\u5e95\uff1aParent Image",title:"[Docker] 4. \u5efa\u7bc9\u7269\u7684\u57fa\u5e95\uff1aParent Image",tags:["Docker"]},sidebar:"tutorialSidebar",previous:{title:"[Docker] 3. \u8ddf Docker \u6709\u95dc\u7684\u4e00\u4e9b\u6838\u5fc3\u540d\u8a5e\uff1aDockerfile, Image \u8ddf Container",permalink:"/docs/Deploy/docker-3-dockerfile-image-container"},next:{title:"[Catelog] \u7db2\u8def\u5e38\u8b58\u55ae\u5143\u76ee\u9304",permalink:"/docs/Network/catelog"}},u={},p=[{value:"\u554f\u984c\uff1a\u5f9e 0 ~ 1 \u592a\u7d2f\u4e86\uff0c\u6709\u6c92\u6709\u73fe\u6210\u7684\u57fa\u5e95\u53ef\u4ee5\u7528\uff1f",id:"\u554f\u984c\u5f9e-0--1-\u592a\u7d2f\u4e86\u6709\u6c92\u6709\u73fe\u6210\u7684\u57fa\u5e95\u53ef\u4ee5\u7528",level:2},{value:"\u89e3\u65b9\uff1a Parent image",id:"\u89e3\u65b9-parent-image",level:2},{value:"\u5982\u4f55\u5f15\u7528",id:"\u5982\u4f55\u5f15\u7528",level:3},{value:"\u7d50\u8ad6",id:"\u7d50\u8ad6",level:2},{value:"\u53c3\u8003\u8cc7\u6e90",id:"\u53c3\u8003\u8cc7\u6e90",level:3}],c={toc:p},k="wrapper";function m(e){let{components:t,...r}=e;return(0,a.kt)(k,(0,n.Z)({},c,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("br",null),(0,a.kt)("h2",{id:"\u554f\u984c\u5f9e-0--1-\u592a\u7d2f\u4e86\u6709\u6c92\u6709\u73fe\u6210\u7684\u57fa\u5e95\u53ef\u4ee5\u7528"},"\u554f\u984c\uff1a\u5f9e 0 ~ 1 \u592a\u7d2f\u4e86\uff0c\u6709\u6c92\u6709\u73fe\u6210\u7684\u57fa\u5e95\u53ef\u4ee5\u7528\uff1f"),(0,a.kt)("p",null,"\u524d\u9762\u6211\u5011\u8aaa\u5230 Image \u5c31\u662f\u4e00\u500b\u6c92\u6709\u96fb\u6e90\u7684\u5efa\u7bc9\u7269\uff0c\u90a3\u6211\u5011\u8aaa\u8981\u5efa\u7acb\u4e00\u500b Image\uff0c\u5c31\u662f\u8981\u5f9e 0 \u958b\u59cb\u5efa\u7acb\u4e00\u500b\u5efa\u7bc9\u7269\uff0c\u9019\u6a23\u592a\u7d2f\u4e86\uff0c\u6709\u6c92\u6709\u73fe\u6210\u7684\u57fa\u5e95\u53ef\u4ee5\u7528\uff1f"),(0,a.kt)("br",null),(0,a.kt)("br",null),(0,a.kt)("h2",{id:"\u89e3\u65b9-parent-image"},"\u89e3\u65b9\uff1a Parent image"),(0,a.kt)("figure",null,(0,a.kt)("img",{src:"/img/parent-image.png",width:500,alt:""})),(0,a.kt)("br",null),(0,a.kt)("p",null,"\u9019\u6642\u5019\u6211\u5011\u5c31\u53ef\u4ee5\u5229\u7528\u5916\u90e8\u73fe\u6709 Docker image \u4f5c\u70ba\u6211\u5011\u7684\u57fa\u5e95\uff0c\u53eb\u505a ",(0,a.kt)("strong",{parentName:"p"},"Parent Image"),"\uff0c\u53bb\u4f5c\u70ba\u6211\u5011\u7684\u57fa\u5e95\uff0c\u50cf\u662f\uff1a"),(0,a.kt)("table",null,(0,a.kt)("thead",null,(0,a.kt)("tr",null,(0,a.kt)("th",null,"Image"),(0,a.kt)("th",null,"\u5167\u5bb9"))),(0,a.kt)("tbody",null,(0,a.kt)("tr",null,(0,a.kt)("td",null,(0,a.kt)("a",{href:"https://hub.docker.com/_/ubuntu",target:"_blank"},"ubuntu")),(0,a.kt)("td",null,(0,a.kt)("ul",null,(0,a.kt)("li",null,"\u4e00\u4e9b OS \u7684\u5de5\u5177\u548c library")))),(0,a.kt)("tr",null,(0,a.kt)("td",null,(0,a.kt)("a",{href:"https://hub.docker.com/_/node",target:"_blank"},"node")),(0,a.kt)("td",null,(0,a.kt)("ul",null,(0,a.kt)("li",null,"\u4e00\u4e9b OS \u7684\u5de5\u5177\u548c library"),(0,a.kt)("li",null,"Node.js \u7684\u57f7\u884c\u74b0\u5883")))))),(0,a.kt)("br",null),(0,a.kt)("admonition",{title:"\u5b8c\u6574\u7684 Operating system \u8ddf Parent Image \u7684\u5dee\u7570",type:"caution"},(0,a.kt)("table",{parentName:"admonition"},(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null}),(0,a.kt)("th",{parentName:"tr",align:null},"OS"),(0,a.kt)("th",{parentName:"tr",align:null},"Parent Image"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("strong",{parentName:"td"},"\u6838\u5fc3 (Kernel)")),(0,a.kt)("td",{parentName:"tr",align:null},"\u6709"),(0,a.kt)("td",{parentName:"tr",align:null},"\u4f7f\u7528\u5bbf\u4e3b\u7684\u6838\u5fc3(mac \u4e2d\uff0cDocker Desktop \u6703\u5e6b\u4f60\u958b\u4e00\u500b\u7c21\u55ae\u7684 Linux VM)")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("strong",{parentName:"td"},"\u4f7f\u7528\u8005\u4ecb\u9762")),(0,a.kt)("td",{parentName:"tr",align:null},"\u5716\u5f62\u7528\u6236\u754c\u9762(GUI)\u6216\u547d\u4ee4\u884c\u4ecb\u9762(CLI)"),(0,a.kt)("td",{parentName:"tr",align:null},"\u901a\u5e38\u6c92\u6709 GUI\u3002\u53ea\u63d0\u4f9b CLI")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("strong",{parentName:"td"},"\u8cc7\u6e90\u7ba1\u7406")),(0,a.kt)("td",{parentName:"tr",align:null},"\u5167\u5b58\u3001\u8655\u7406\u5668\u3001\u78c1\u76e4\u7b49\u8cc7\u6e90\u7684\u5b8c\u6574\u7ba1\u7406\u7cfb\u7d71"),(0,a.kt)("td",{parentName:"tr",align:null},"\u4f9d\u8cf4\u65bc Docker \u5f15\u64ce\u548c\u5bbf\u4e3b\u6a5f\u7684\u8cc7\u6e90\u7ba1\u7406")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("strong",{parentName:"td"},"\u7cfb\u7d71\u670d\u52d9")),(0,a.kt)("td",{parentName:"tr",align:null},"\u5305\u62ec\u65e5\u8a8c\u3001\u6392\u7a0b\u3001\u7db2\u8def\u8a2d\u7f6e\u7b49\u670d\u52d9"),(0,a.kt)("td",{parentName:"tr",align:null},"\u901a\u5e38\u53ea\u5305\u62ec\u6700\u57fa\u672c\u7684\u670d\u52d9\u3002\u67d0\u4e9b\u6700\u5c0f\u5316\u7684\u57fa\u790e\u6620\u50cf\u6a94\u751a\u81f3\u53ef\u80fd\u4e0d\u5305\u542b\u9019\u4e9b"))))),(0,a.kt)("br",null),(0,a.kt)("h3",{id:"\u5982\u4f55\u5f15\u7528"},"\u5982\u4f55\u5f15\u7528"),(0,a.kt)("p",null,"\u57f7\u884c "),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"Docker pull node\n")),(0,a.kt)("br",null),(0,a.kt)("p",null,"\u5c31\u6703\u5e6b\u6211\u5011\u628a docker \u76f8\u95dc\u7684 image \u5b58\u5230\u672c\u6a5f\u7684\u7279\u5b9a\u7684\u8cc7\u6599\u593e\uff0c\n\u9810\u8a2d\u6703\u4e0b\u8f09\u6700\u65b0\u7248\uff0c\u4f46\u6211\u5011\u4e5f\u53ef\u4ee5\u6307\u5b9a\u6211\u5011\u8981\u7684\u7248\u672c"),(0,a.kt)("figure",null,(0,a.kt)("img",{src:"/img/docker-pull-parent-image.png",width:500,alt:""})),(0,a.kt)("br",null),(0,a.kt)("br",null),(0,a.kt)("h2",{id:"\u7d50\u8ad6"},"\u7d50\u8ad6"),(0,a.kt)("p",null,"\u5229\u7528 Parent Image\uff0c\u6253\u9020 Image \u7684\u57fa\u5e95\uff0c\u8b93\u6211\u5011\u53ef\u4ee5\u5feb\u901f\u7684\u5efa\u7acb\u81ea\u5df1\u7684 Image"),(0,a.kt)("br",null),(0,a.kt)("br",null),(0,a.kt)("h3",{id:"\u53c3\u8003\u8cc7\u6e90"},"\u53c3\u8003\u8cc7\u6e90"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://www.youtube.com/watch?v=ZVQmnziXEpA&list=PL4cUxeGkcC9hxjeEtdHFNYMtCpjNBm3h7&index=4"},"Docker Crash Course #4 - Parent Images & Docker Hub (youtube.com)"))),(0,a.kt)("br",null),(0,a.kt)("br",null))}m.isMDXComponent=!0}}]);