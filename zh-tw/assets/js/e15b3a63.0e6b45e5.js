"use strict";(self.webpackChunkbenson_doc=self.webpackChunkbenson_doc||[]).push([[1962],{3905:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>m});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var p=n.createContext({}),c=function(e){var t=n.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},u=function(e){var t=c(e.components);return n.createElement(p.Provider,{value:t},e.children)},k="mdxType",s={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,p=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),k=c(r),d=a,m=k["".concat(p,".").concat(d)]||k[d]||s[d]||o;return r?n.createElement(m,l(l({ref:t},u),{},{components:r})):n.createElement(m,l({ref:t},u))}));function m(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,l=new Array(o);l[0]=d;var i={};for(var p in t)hasOwnProperty.call(t,p)&&(i[p]=t[p]);i.originalType=e,i[k]="string"==typeof e?e:a,l[1]=i;for(var c=2;c<o;c++)l[c]=r[c];return n.createElement.apply(null,l)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},3702:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>p,contentTitle:()=>l,default:()=>s,frontMatter:()=>o,metadata:()=>i,toc:()=>c});var n=r(7462),a=(r(7294),r(3905));const o={sidebar_position:2,sidebar_label:"[Docker] 6. \u958b\u59cb\u904b\u4f5c\u4f60\u7684 app\uff1a\u555f\u52d5 & \u505c\u6b62 Docker Container",title:"[Docker] 6. \u958b\u59cb\u904b\u4f5c\u4f60\u7684 app\uff1a\u555f\u52d5 & \u505c\u6b62 Docker Container",tags:["Docker"]},l=void 0,i={unversionedId:"Deploy/docker-6-start-and-stop-container",id:"Deploy/docker-6-start-and-stop-container",title:"[Docker] 6. \u958b\u59cb\u904b\u4f5c\u4f60\u7684 app\uff1a\u555f\u52d5 & \u505c\u6b62 Docker Container",description:"1. \u77ad\u89e3 Dockerfile \u8ddf Image \u7684\u95dc\u4fc2",source:"@site/docs/Deploy/docker-6-start-and-stop-container.mdx",sourceDirName:"Deploy",slug:"/Deploy/docker-6-start-and-stop-container",permalink:"/zh-tw/docs/Deploy/docker-6-start-and-stop-container",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/Deploy/docker-6-start-and-stop-container.mdx",tags:[{label:"Docker",permalink:"/zh-tw/docs/tags/docker"}],version:"current",lastUpdatedAt:1709478903,formattedLastUpdatedAt:"2024\u5e743\u67083\u65e5",sidebarPosition:2,frontMatter:{sidebar_position:2,sidebar_label:"[Docker] 6. \u958b\u59cb\u904b\u4f5c\u4f60\u7684 app\uff1a\u555f\u52d5 & \u505c\u6b62 Docker Container",title:"[Docker] 6. \u958b\u59cb\u904b\u4f5c\u4f60\u7684 app\uff1a\u555f\u52d5 & \u505c\u6b62 Docker Container",tags:["Docker"]},sidebar:"tutorialSidebar",previous:{title:"[Docker] 5. \u4f86\u64b0\u5beb\u7c21\u55ae\u7684 Dockerfile \u4f86\u5efa\u7acb Docker Image \u5427",permalink:"/zh-tw/docs/Deploy/docker-5-dockerfile-basic"},next:{title:"[Catelog] \u7db2\u8def\u5e38\u8b58\u55ae\u5143\u76ee\u9304",permalink:"/zh-tw/docs/Network/catelog"}},p={},c=[{value:"Start Container",id:"start-container",level:2},{value:"by UI",id:"by-ui",level:3},{value:"by Terminal",id:"by-terminal",level:3},{value:"\u5ba2\u88fd\u5316 <code>port</code>",id:"\u5ba2\u88fd\u5316-port",level:4},{value:"Start already existed Container",id:"start-already-existed-container",level:4},{value:"Stop Container",id:"stop-container",level:2},{value:"by terminal",id:"by-terminal-1",level:3},{value:"show current Container",id:"show-current-container",level:4},{value:"Stop Container",id:"stop-container-1",level:4},{value:"\u53c3\u8003\u8cc7\u6e90",id:"\u53c3\u8003\u8cc7\u6e90",level:3}],u={toc:c},k="wrapper";function s(e){let{components:t,...r}=e;return(0,a.kt)(k,(0,n.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("br",null),(0,a.kt)("admonition",{title:"\u5b78\u7fd2\u76ee\u6a19",type:"note"},(0,a.kt)("ol",{parentName:"admonition"},(0,a.kt)("li",{parentName:"ol"},"\u77ad\u89e3 Dockerfile \u8ddf Image \u7684\u95dc\u4fc2"),(0,a.kt)("li",{parentName:"ol"},"\u4e86\u89e3 Dockerfile \u7684\u57fa\u672c\u8a9e\u6cd5"),(0,a.kt)("li",{parentName:"ol"},"\u77ad\u89e3\u5982\u4f55\u5229\u7528 Dockerfile \u5efa\u7acb Image"))),(0,a.kt)("h2",{id:"start-container"},"Start Container"),(0,a.kt)("h3",{id:"by-ui"},"by UI"),(0,a.kt)("p",null,"\u8981\u555f\u52d5\u4e00\u500b Container\uff0c\u6211\u5011\u5728 docker desktop \u5c0d\u4e00\u500b Image \u505a Run"),(0,a.kt)("figure",null,(0,a.kt)("img",{src:"/img/docker-run-by-ui.png",alt:"Docker run by UI"})),(0,a.kt)("br",null),(0,a.kt)("br",null),(0,a.kt)("p",null,"\u63a5\u8457\u5c31\u6703\u63d0\u4f9b\u4e00\u4e9b\u9078\u9805\uff0c\u50cf\u662f\u8b93\u6211\u5011\u5ba2\u88fd\u5316"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Container expose \u7684 port"),(0,a.kt)("li",{parentName:"ul"},"\u6700\u5f8c\u6211\u5011\u4e3b\u6a5f\u4e0a\u986f\u793a\u7684 port")),(0,a.kt)("p",null,"\u6b64\u8655\uff0c\u6211\u5011\u5c07 Container port \u8a2d\u5b9a\u70ba 4000\uff0c\u4e3b\u6a5f\u4e0a\u7684 port \u70ba 4001"),(0,a.kt)("figure",null,(0,a.kt)("img",{src:"/img/docker-run-setting.png",alt:"Docker run setting",width:"350"})),(0,a.kt)("br",null),(0,a.kt)("br",null),(0,a.kt)("p",null,"\u5728\u6211\u5011\u700f\u89bd\u5668\u4e0a\uff0c\u6703\u770b\u898b Server \u5728 4001 port \u904b\u884c"),(0,a.kt)("figure",null,(0,a.kt)("img",{src:"/img/docker-run-result.png",alt:"Docker run result",width:"400"})),(0,a.kt)("br",null),(0,a.kt)("br",null),(0,a.kt)("br",null),(0,a.kt)("h3",{id:"by-terminal"},"by Terminal"),(0,a.kt)("p",null,"\u4f7f\u7528"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"docker images\n")),(0,a.kt)("p",null,"\u5c31\u53ef\u4ee5\u986f\u793a\u51fa\u76ee\u524d\u6240\u6709\u5b58\u5728\u7684 Image"),(0,a.kt)("figure",null,(0,a.kt)("img",{src:"/img/docker-show-images.png",alt:"Docker run by UI"})),(0,a.kt)("br",null),(0,a.kt)("br",null),(0,a.kt)("p",null,"\u6211\u5011\u53ef\u4ee5\u85c9\u7531"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"docker run <Repository>\n")),(0,a.kt)("p",null,"\u4f86\u958b\u555f\u4e00\u500b\u4ee5\u6b64 ",(0,a.kt)("inlineCode",{parentName:"p"},"<REPOSITORY>")," \u70ba Image \u7684 Container"),(0,a.kt)("br",null),(0,a.kt)("br",null),(0,a.kt)("p",null,"\u6211\u5011\u53ef\u4ee5\u5728 ",(0,a.kt)("inlineCode",{parentName:"p"},"run")," & ",(0,a.kt)("inlineCode",{parentName:"p"},"<REPOSITORY>")," \u4e2d\u9593\u5ba2\u88fd\u5316 Container \u7684\u540d\u7a31"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"docker run --name <Container Name> <Repository>\n")),(0,a.kt)("br",null),(0,a.kt)("br",null),(0,a.kt)("h4",{id:"\u5ba2\u88fd\u5316-port"},"\u5ba2\u88fd\u5316 ",(0,a.kt)("inlineCode",{parentName:"h4"},"port")),(0,a.kt)("p",null,"\u5ba2\u88fd\u5316 port \u5305\u542b 2 \u90e8\u5206\n\u5305\u62ec"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Container \u7684 port"),(0,a.kt)("li",{parentName:"ul"},"\u4e3b\u6a5f\u4e0a\u7684 port")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"docker run --name <Container Name> <Repository> -p <Host Port>:<Container Port>\n\n# example\ndocker run --name test-container test-image -p 4001:4000\n")),(0,a.kt)("p",null,"\u5982\u679c\u4e0d\u60f3\u8981 docker Container \u904b\u884c\u6642\uff0c\u986f\u793a\u5728\u4f60\u7684 terminal\uff0c\u4f60\u53ef\u4ee5\u52a0\u5165 ",(0,a.kt)("inlineCode",{parentName:"p"},"-d")," flag (detached)\uff0c\u5c31\u4e0d\u6703\u963b\u64cb terminal\uff0c\u53ef\u4ee5\u7e7c\u7e8c\u5728 terminal \u8f38\u5165\u5176\u4ed6\u6307\u4ee4\u4e86"),(0,a.kt)("br",null),(0,a.kt)("br",null),(0,a.kt)("h4",{id:"start-already-existed-container"},"Start already existed Container"),(0,a.kt)("p",null,"\u5982\u679c\u6211\u5011\u60f3\u8981\u555f\u7528\u5df2\u7d93\u5b58\u5728\uff0c\u4f46\u72c0\u614b\u662f ",(0,a.kt)("strong",{parentName:"p"},"Exited")," \u7684 Container\uff0c\n\u6211\u5011\u53ef\u4ee5\u7528"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"docker start <Container Name>\n")),(0,a.kt)("br",null),(0,a.kt)("br",null),(0,a.kt)("br",null),(0,a.kt)("h2",{id:"stop-container"},"Stop Container"),(0,a.kt)("h3",{id:"by-terminal-1"},"by terminal"),(0,a.kt)("h4",{id:"show-current-container"},"show current Container"),(0,a.kt)("p",null,"\u5229\u7528 "),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"docker ps\n")),(0,a.kt)("p",null,"\u4f86\u78ba\u8a8d\u73fe\u5728\u6240\u6709 ",(0,a.kt)("em",{parentName:"p"},"In-Use")," \u7684 Container \u7684\uff0c\n",(0,a.kt)("strong",{parentName:"p"},"Exited")," \u7684\u4e0d\u6703\u986f\u793a\u5728\u9019\n( ",(0,a.kt)("inlineCode",{parentName:"p"},"ps")," === Process )"),(0,a.kt)("figure",null,(0,a.kt)("img",{src:"/img/docker-show-running-containers.png",alt:"Docker run by UI"})),(0,a.kt)("p",null,"\u82e5\u6211\u5011\u60f3\u8981\u986f\u793a ",(0,a.kt)("strong",{parentName:"p"},"Exited")," \u7684 Container\uff0c\u6211\u5011\u53ef\u4ee5\u52a0\u5165 ",(0,a.kt)("inlineCode",{parentName:"p"},"-a")," flag\uff0c\u8868\u793a all\uff0c\u986f\u793a\u6240\u6709\u7684 Container"),(0,a.kt)("br",null),(0,a.kt)("br",null),(0,a.kt)("h4",{id:"stop-container-1"},"Stop Container"),(0,a.kt)("p",null,"\u6211\u5011\u53ef\u4ee5\u5229\u7528"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"docker stop <Container Name or Container ID>\n")),(0,a.kt)("p",null,"\u4f86\u7d42\u6b62\u4e00\u500b Container \u7684\u904b\u884c"),(0,a.kt)("br",null),(0,a.kt)("br",null),(0,a.kt)("h3",{id:"\u53c3\u8003\u8cc7\u6e90"},"\u53c3\u8003\u8cc7\u6e90"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://www.youtube.com/watch?v=ZPEpreOpqao&list=PL4cUxeGkcC9hxjeEtdHFNYMtCpjNBm3h7&index=7"},"Docker Crash Course #7 - Starting & Stopping Containers (youtube.com)"))),(0,a.kt)("br",null),(0,a.kt)("br",null))}s.isMDXComponent=!0}}]);