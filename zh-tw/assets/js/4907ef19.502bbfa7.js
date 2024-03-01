"use strict";(self.webpackChunkbenson_doc=self.webpackChunkbenson_doc||[]).push([[4329],{3905:(e,n,t)=>{t.d(n,{Zo:()=>m,kt:()=>s});var a=t(7294);function l(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function r(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?r(Object(t),!0).forEach((function(n){l(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):r(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function i(e,n){if(null==e)return{};var t,a,l=function(e,n){if(null==e)return{};var t,a,l={},r=Object.keys(e);for(a=0;a<r.length;a++)t=r[a],n.indexOf(t)>=0||(l[t]=e[t]);return l}(e,n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)t=r[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(l[t]=e[t])}return l}var p=a.createContext({}),k=function(e){var n=a.useContext(p),t=n;return e&&(t="function"==typeof e?e(n):o(o({},n),e)),t},m=function(e){var n=k(e.components);return a.createElement(p.Provider,{value:n},e.children)},c="mdxType",d={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},u=a.forwardRef((function(e,n){var t=e.components,l=e.mdxType,r=e.originalType,p=e.parentName,m=i(e,["components","mdxType","originalType","parentName"]),c=k(t),u=l,s=c["".concat(p,".").concat(u)]||c[u]||d[u]||r;return t?a.createElement(s,o(o({ref:n},m),{},{components:t})):a.createElement(s,o({ref:n},m))}));function s(e,n){var t=arguments,l=n&&n.mdxType;if("string"==typeof e||l){var r=t.length,o=new Array(r);o[0]=u;var i={};for(var p in n)hasOwnProperty.call(n,p)&&(i[p]=n[p]);i.originalType=e,i[c]="string"==typeof e?e:l,o[1]=i;for(var k=2;k<r;k++)o[k]=t[k];return a.createElement.apply(null,o)}return a.createElement.apply(null,t)}u.displayName="MDXCreateElement"},1732:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>p,contentTitle:()=>o,default:()=>d,frontMatter:()=>r,metadata:()=>i,toc:()=>k});var a=t(7462),l=(t(7294),t(3905));const r={sidebar_position:2,sidebar_label:"[Docker] 5. \u4f86\u64b0\u5beb\u7c21\u55ae\u7684 Dockerfile \u4f86\u5efa\u7acb Docker Image \u5427",title:"[Docker] 5. \u4f86\u64b0\u5beb\u7c21\u55ae\u7684 Dockerfile \u4f86\u5efa\u7acb Docker Image \u5427",tags:["Docker"]},o=void 0,i={unversionedId:"Deploy/docker-5-dockerfile-basic",id:"Deploy/docker-5-dockerfile-basic",title:"[Docker] 5. \u4f86\u64b0\u5beb\u7c21\u55ae\u7684 Dockerfile \u4f86\u5efa\u7acb Docker Image \u5427",description:"1. \u77ad\u89e3 Dockerfile \u8ddf Image \u7684\u95dc\u4fc2",source:"@site/docs/Deploy/docker-5-dockerfile-basic.mdx",sourceDirName:"Deploy",slug:"/Deploy/docker-5-dockerfile-basic",permalink:"/zh-tw/docs/Deploy/docker-5-dockerfile-basic",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/Deploy/docker-5-dockerfile-basic.mdx",tags:[{label:"Docker",permalink:"/zh-tw/docs/tags/docker"}],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2,sidebar_label:"[Docker] 5. \u4f86\u64b0\u5beb\u7c21\u55ae\u7684 Dockerfile \u4f86\u5efa\u7acb Docker Image \u5427",title:"[Docker] 5. \u4f86\u64b0\u5beb\u7c21\u55ae\u7684 Dockerfile \u4f86\u5efa\u7acb Docker Image \u5427",tags:["Docker"]},sidebar:"tutorialSidebar",previous:{title:"[Docker] 4. \u5efa\u7bc9\u7269\u7684\u57fa\u5e95\uff1aParent Image",permalink:"/zh-tw/docs/Deploy/docker-4-parent-image"},next:{title:"[Docker] 6. \u958b\u59cb\u904b\u4f5c\u4f60\u7684 app\uff1a\u555f\u52d5 & \u505c\u6b62 Docker Container",permalink:"/zh-tw/docs/Deploy/docker-6-start-and-stop-container"}},p={},k=[{value:"\u554f\u984c\uff1aDockerfile \u8ddf Image \u7684\u95dc\u4fc2\uff1f",id:"\u554f\u984cdockerfile-\u8ddf-image-\u7684\u95dc\u4fc2",level:2},{value:"Dockerfile \u7684\u57fa\u672c\u8a9e\u6cd5\u6709\u54ea\u4e9b\uff1f",id:"dockerfile-\u7684\u57fa\u672c\u8a9e\u6cd5\u6709\u54ea\u4e9b",level:2},{value:"<code>FROM</code>",id:"from",level:3},{value:"<code>WORKDIR</code>",id:"workdir",level:3},{value:"<code>COPY</code>",id:"copy",level:3},{value:"<code>RUN</code>",id:"run",level:3},{value:"<code>EXPOSE</code>",id:"expose",level:3},{value:"<code>CMD</code>",id:"cmd",level:3},{value:"\u5982\u4f55\u5229\u7528 Dockerfile \u5efa\u7acb Image\uff1f",id:"\u5982\u4f55\u5229\u7528-dockerfile-\u5efa\u7acb-image",level:2},{value:"\u7d50\u8ad6",id:"\u7d50\u8ad6",level:2},{value:"\u53c3\u8003\u8cc7\u6e90",id:"\u53c3\u8003\u8cc7\u6e90",level:3}],m={toc:k},c="wrapper";function d(e){let{components:n,...t}=e;return(0,l.kt)(c,(0,a.Z)({},m,t,{components:n,mdxType:"MDXLayout"}),(0,l.kt)("br",null),(0,l.kt)("admonition",{title:"\u5b78\u7fd2\u76ee\u6a19",type:"note"},(0,l.kt)("ol",{parentName:"admonition"},(0,l.kt)("li",{parentName:"ol"},"\u77ad\u89e3 Dockerfile \u8ddf Image \u7684\u95dc\u4fc2"),(0,l.kt)("li",{parentName:"ol"},"\u4e86\u89e3 Dockerfile \u7684\u57fa\u672c\u8a9e\u6cd5"),(0,l.kt)("li",{parentName:"ol"},"\u77ad\u89e3\u5982\u4f55\u5229\u7528 Dockerfile \u5efa\u7acb Image"))),(0,l.kt)("h2",{id:"\u554f\u984cdockerfile-\u8ddf-image-\u7684\u95dc\u4fc2"},"\u554f\u984c\uff1aDockerfile \u8ddf Image \u7684\u95dc\u4fc2\uff1f"),(0,l.kt)("br",null),(0,l.kt)("p",null,"\u5728 ",(0,l.kt)("a",{parentName:"p",href:"./docker-3-dockerfile-image-container"},"\u7b2c\u4e09\u7bc7")," \u6709\u63d0\u5230\uff0cImage \u5c31\u662f\u4e00\u500b App \u6240\u9700\u8981\u7684\u74b0\u5883\u8ddf\u7522\u54c1\u7a0b\u5f0f\u78bc\uff0c\u4f46\u4e0d\u6703\u904b\u4f5c\uff0c\u56e0\u70ba\u9084\u6c92\u88ab\u4e1f\u5230\u9032\u7a0b (Process) \u4e2d\uff0c\n\u5c31\u50cf\u4e00\u500b\u5efa\u7bc9\u7269\uff0c\u8a72\u6709\u7684\u8a2d\u5099\u548c\u67b6\u69cb\u90fd\u6709\u4e86\uff0c\u53ef\u662f\u6c92\u6709\u96fb\u7121\u6cd5\u904b\u4f5c"),(0,l.kt)("br",null),(0,l.kt)("p",null,"\u800c Image \u4e5f\u8ddf\u5efa\u7bc9\u7269\u4e00\u6a23\uff0c\u69cb\u9020\u662f\u4e00\u5c64\u4e00\u5c64\u7684\uff0c\u6bcf\u4e00\u884c\u90fd\u662f\u7d44\u6210 App \u7684\u8981\u7d20\u4e4b\u4e00"),(0,l.kt)("figure",null,(0,l.kt)("img",{src:"/img/image-layers.png",alt:"Image Layers",width:500})),(0,l.kt)("br",null),(0,l.kt)("br",null),(0,l.kt)("p",null,"\u800c Dockerfile \u5c31\u5b9a\u7fa9 Image \u7684\u5efa\u7bc9\u7269\u85cd\u5716\uff0c\u6bcf\u4e00\u884c\u90fd\u662f\u4e00\u5c64 Image\uff0c\u6700\u5f8c\u7d44\u5c64\u4e00\u500b\u5b8c\u6574\u7684 Image\uff0c\u4ee5\u4e0b\u70ba\u7c21\u55ae\u7684\u5b8c\u6574\u7bc4\u4f8b\uff1a"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-python"},'# Dockerfile\n\n## 1st \u5c64\uff1a\u5f9e node:20-alpine \u4f5c\u70ba\u7b2c\u4e00\u5c64\nFROM node:20-alpine\n\n## 2nd \u5c64\uff1a\u8a2d\u5b9a\u5de5\u4f5c\u76ee\u9304\nWORKDIR /app\n\n## 3rd \u5c64\uff1a\u62f7\u8c9d\u73fe\u5728\u672c\u6a5f\u7684\u8cc7\u6599\u593e\u5230 Image \u4e2d\u7684 /app \u8cc7\u6599\u593e\nCOPY . .\n\n## 4th \u5c64\uff1a\u5b89\u88dd npm \u5957\u4ef6\nRUN npm install\n\n## 5th \u5c64\uff1aContainer \u904b\u884c\u6642\uff0c\u958b\u653e 4000 port\nEXPOSE 4000\n\n## 6th \u5c64\uff1aContainer \u904b\u884c\u6642\uff0c\u57f7\u884c app.js\nCMD ["node", "app.js"]\n')),(0,l.kt)("br",null),(0,l.kt)("br",null),(0,l.kt)("h2",{id:"dockerfile-\u7684\u57fa\u672c\u8a9e\u6cd5\u6709\u54ea\u4e9b"},"Dockerfile \u7684\u57fa\u672c\u8a9e\u6cd5\u6709\u54ea\u4e9b\uff1f"),(0,l.kt)("h3",{id:"from"},(0,l.kt)("inlineCode",{parentName:"h3"},"FROM")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-python"},"# format\nFROM [--platform=<platform>] <image>[:<tag>] [AS <name>]\n\n# example\nFROM node:20-alpine\n")),(0,l.kt)("br",null),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"FROM"),"\uff1a\u958b\u59cb\u555f\u52d5\u5efa\u7acb Image \u7684\u968e\u6bb5\uff0c\u4e26\u4e14\u8a2d\u5b9a ",(0,l.kt)("inlineCode",{parentName:"p"},"parent image")," \u4f5c\u70ba\u57fa\u5e95\u3002\u5c24\u5176\u662f\u8ddf\u4f5c\u696d\u7cfb\u7d71\u76f8\u95dc\u7684 Image\uff0c\u6211\u5011\u53ef\u4ee5\u76f4\u63a5\u5f9e\u9019\u88e1\u5f15\u7528\uff0c\n\u4f8b\u5982 "),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"node:20-alpine"),"\uff0c\u9019\u500b Image \u5c31\u662f\u4e00\u500b\u5df2\u7d93\u5305\u542b\u4e86 Node.js \u7684\u74b0\u5883\uff0c\u4e26\u4e14\u662f\u57fa\u65bc Alpine Linux \u7684\u8f15\u91cf Image"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"ubuntu:20.04"),"\uff0c\u9019\u500b Image \u5c31\u662f\u4e00\u500b\u5df2\u7d93\u5305\u542b\u4e86 Ubuntu 20.04 \u7684\u74b0\u5883")),(0,l.kt)("br",null),(0,l.kt)("admonition",{title:"Base image",type:"info"},(0,l.kt)("p",{parentName:"admonition"},"\u82e5\u4e00\u958b\u59cb\u6c92\u6709\u6307\u5b9a Image\uff0c\u800c\u662f\u4f7f\u7528 ",(0,l.kt)("inlineCode",{parentName:"p"},"FROM scratch"),"\uff0c\u5c31\u7a31\u505a\u4e00\u500b Base Image")),(0,l.kt)("br",null),(0,l.kt)("br",null),(0,l.kt)("h3",{id:"workdir"},(0,l.kt)("inlineCode",{parentName:"h3"},"WORKDIR")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-python"},"# format\nWORKDIR /path/to/workdir\n\n# example\nWORKDIR /app\n")),(0,l.kt)("br",null),(0,l.kt)("p",null,"\u5c07 Container \u7684\u5de5\u4f5c\u76ee\u9304\u8a2d\u5b9a\u5728 Container \u7684\u6307\u5b9a\u7684 folder \u5e95\u4e0b\uff0c\n\u5f8c\u7e8c ",(0,l.kt)("inlineCode",{parentName:"p"},"RUN"),", ",(0,l.kt)("inlineCode",{parentName:"p"},"CMD"),", ",(0,l.kt)("inlineCode",{parentName:"p"},"ENTRYPOINT"),", ",(0,l.kt)("inlineCode",{parentName:"p"},"COPY")," and ",(0,l.kt)("inlineCode",{parentName:"p"},"ADD")," \u90fd\u6703\u5728\u6307\u5b9a\u7684\u76ee\u9304\u4e0b\u57f7\u884c"),(0,l.kt)("br",null),(0,l.kt)("br",null),(0,l.kt)("h3",{id:"copy"},(0,l.kt)("inlineCode",{parentName:"h3"},"COPY")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-python"},"# format\nCOPY [--chown=<user>:<group>] [--chmod=<perms>] <src>... <dest>\n\n# example 1\nCOPY . .\n\n# example 2\nCOPY . /app\n")),(0,l.kt)("p",null,"example 1\uff1a ",(0,l.kt)("br",null)),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"\u7b2c\u4e00\u9ede\u70ba\u8907\u88fd\u7684\u5c0d\u8c61\uff0c",(0,l.kt)("inlineCode",{parentName:"li"},".")," \u4ee3\u8868\u8981\u8907\u88fd\u73fe\u5728\u7684\u8cc7\u6599\u593e & \u5e95\u4e0b\u7684\u6240\u6709\u6a94\u6848"),(0,l.kt)("li",{parentName:"ul"},"\u7b2c\u4e8c\u9ede\u70ba\u8cbc\u4e0a\u7684\u8cc7\u6599\u593e\u4f4d\u7f6e\uff0c",(0,l.kt)("inlineCode",{parentName:"li"},".")," \u4ee3\u8868\u5c07\u8907\u88fd\u7684\u8cc7\u6599\u593e\u8cbc\u5230 Image \u7684 root folder")),(0,l.kt)("br",null),(0,l.kt)("p",null,"example 2\uff1a ",(0,l.kt)("br",null)),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"\u7b2c\u4e00\u9ede\u540c\u4e0a"),(0,l.kt)("li",{parentName:"ul"},"\u7b2c\u4e8c\u9ede\u70ba\u8cbc\u4e0a\u7684\u8cc7\u6599\u593e\u4f4d\u7f6e\uff0c",(0,l.kt)("inlineCode",{parentName:"li"},".")," \u4ee3\u8868\u5c07\u8907\u88fd\u7684\u8cc7\u6599\u593e\u8cbc\u5230 Image \u7684 app folder")),(0,l.kt)("br",null),(0,l.kt)("admonition",{type:"caution"},(0,l.kt)("mdxAdmonitionTitle",{parentName:"admonition"},"\u6709\u8a2d\u5b9a ",(0,l.kt)("inlineCode",{parentName:"mdxAdmonitionTitle"},"WORKDIR")," \u7684\u8a71"),(0,l.kt)("p",{parentName:"admonition"},"\u5982\u679c\u6709\u8a2d\u5b9a ",(0,l.kt)("inlineCode",{parentName:"p"},"WORKDIR"),"\uff0c\u5247 ",(0,l.kt)("inlineCode",{parentName:"p"},"COPY")," \u7684\u76ee\u7684\u5730\u6703\u662f\u5f9e ",(0,l.kt)("inlineCode",{parentName:"p"},"WORKDIR")," \u7684\u4f4d\u7f6e\uff0c\u4f8b\u5982\uff1a"),(0,l.kt)("pre",{parentName:"admonition"},(0,l.kt)("code",{parentName:"pre",className:"language-python"},"WORKDIR /app\n\nCOPY . .\n")),(0,l.kt)("br",null),(0,l.kt)("p",{parentName:"admonition"},"\u9019\u6a23\u7684\u8a71\uff0c",(0,l.kt)("inlineCode",{parentName:"p"},"COPY")," \u7684\u76ee\u7684\u5730\u5c31\u6703\u662f ",(0,l.kt)("inlineCode",{parentName:"p"},"/app"),"\uff0c\u800c\u4e0d\u662f Image \u7684 root folder")),(0,l.kt)("br",null),(0,l.kt)("br",null),(0,l.kt)("h3",{id:"run"},(0,l.kt)("inlineCode",{parentName:"h3"},"RUN")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-python"},"# example 1\nRUN npm install\n\n# \u5728 build image \u6642\u6703\u53bb\u57f7\u884c\n")),(0,l.kt)("br",null),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"RUN"),"\uff1a\u5728 build image \u6642\u6703\u53bb\u57f7\u884c\uff0c\u4f8b\u5982\u5b89\u88dd\u5957\u4ef6\u3001\u57f7\u884c\u6307\u4ee4\u7b49\u7b49\uff0c\u4f8b\u5982\uff1a"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"npm install"),"\uff1a\u5b89\u88dd package.json \u4e2d\u7684\u8a18\u9304\u7684\u5957\u4ef6\uff0c\u5c07\u9700\u8981\u7684\u5957\u4ef6\u5b89\u88dd\u5230 Image \u4e2d"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"apt-get install -y curl"),"\uff1a\u7528 Ubuntu \u5167\u5efa\u7684\u5b89\u88dd\u5957\u4ef6\u6307\u4ee4\uff0c\u5b89\u88dd curl \u5230 Image \u4e2d")),(0,l.kt)("br",null),(0,l.kt)("br",null),(0,l.kt)("h3",{id:"expose"},(0,l.kt)("inlineCode",{parentName:"h3"},"EXPOSE")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-python"},"EXPOSE 4000\n")),(0,l.kt)("br",null),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"EXPOSE"),"\uff1a\u8868\u793a\u904b\u884c\u4e2d\u7684 Docker Container \u6703\u76e3\u807d\u7684 port\u3002\u5c31\u50cf\u4e00\u68df\u5efa\u7bc9\u7269\uff0c\u7576\u5efa\u7bc9\u7269\u6709\u96fb\u6642\uff0c\u6703\u958b\u653e\u7684\u7279\u5b9a\u9580\u53e3\uff0c\u4f8b\u5982 4 \u865f\u51fa\u5165\u53e3"),(0,l.kt)("br",null),(0,l.kt)("br",null),(0,l.kt)("h3",{id:"cmd"},(0,l.kt)("inlineCode",{parentName:"h3"},"CMD")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-python"},'# format\nCMD command param1 param2\n\n# example\nCMD ["node", "app.js"]\n')),(0,l.kt)("br",null),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"CMD"),"\uff1a\u7576 Docker Image \u88ab\u4e1f\u5230\u9032\u7a0b\u4e2d\u8b8a\u6210 Container \u6642\uff0c\u6703\u57f7\u884c\u7684\u6307\u4ee4\u3002\u5c31\u50cf\u5efa\u7bc9\u7269\u6709\u96fb\u4e86\u5f8c\uff0c\u9700\u8981\u53bb\u6253\u958b\u4e00\u6a13\u7684\u96fb\u71c8\u3001\u6e96\u5099\u597d\u5de5\u4f5c\u4eba\u54e1\uff0c\u4e00\u6a13\u624d\u80fd\u670d\u52d9\u5ba2\u4eba"),(0,l.kt)("br",null),(0,l.kt)("br",null),(0,l.kt)("br",null),(0,l.kt)("h2",{id:"\u5982\u4f55\u5229\u7528-dockerfile-\u5efa\u7acb-image"},"\u5982\u4f55\u5229\u7528 Dockerfile \u5efa\u7acb Image\uff1f"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-python"},"# format\ndocker build [OPTIONS] PATH | URL | -\n\n# example\ndocker build -t myapp .\n")),(0,l.kt)("br",null),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"-t"),"\uff1a \u4ee3\u8868 tag\uff0c\u5373 image \u7684\u540d\u7a31"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"."),"\uff1a \u8868\u793a\u73fe\u5728\u7684\u8cc7\u6599\u593e\u76ee\u9304\uff0cdocker \u6703\u6839\u64da\u73fe\u5728\u7684\u8cc7\u6599\u593e\u53bb\u5c0b\u627e Dockerfile\uff0c\u4e26\u4f9d\u64da\u6b64 Dockerfile \u5efa\u7acb Image")),(0,l.kt)("br",null),(0,l.kt)("br",null),(0,l.kt)("h2",{id:"\u7d50\u8ad6"},"\u7d50\u8ad6"),(0,l.kt)("ol",null,(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("p",{parentName:"li"},"Dockerfile \u8207 Image \u7684\u95dc\u4fc2\u5c31\u662f\u85cd\u5716\u8207\u5efa\u7bc9\u7269\uff0cDockerfile \u7684\u6bcf\u4e00\u884c\u90fd\u662f Image \u7684\u4e00\u5c64")),(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("p",{parentName:"li"},"\u4e00\u500b\u7c21\u55ae\u7684 Dockerfile \u9700\u8981\u57fa\u672c\u8a9e\u6cd5\u5982\u4e0b\uff1a"),(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"FROM"),"\uff1a\u5efa\u7acb Image \u7684\u57fa\u5e95"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"WORKDIR"),"\uff1a\u6307\u5b9a Image \u7684\u5de5\u4f5c\u76ee\u9304"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"COPY"),"\uff1a\u8907\u88fd\u672c\u6a5f\u7684\u8cc7\u6599\u593e\u5230\u6307\u5b9a Image \u7684\u4f4d\u5740\u4e2d"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"RUN"),"\uff1a\u5728 build Image \u6642\u57f7\u884c\u7684\u6307\u4ee4"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"EXPOSE"),"\uff1a\u958b\u59cb\u904b\u884c\uff0cContainer \u5c0d\u5916\u958b\u653e\u7684 port\n-",(0,l.kt)("inlineCode",{parentName:"li"},"CMD"),"\uff1a\u958b\u59cb\u904b\u884c\uff0c\u8b8a\u6210 Container \u5f8c\u57f7\u884c\u7684\u6307\u4ee4"))),(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("p",{parentName:"li"},"\u5229\u7528 ",(0,l.kt)("inlineCode",{parentName:"p"},"docker build")," \u6307\u4ee4\uff0c\u5c31\u53ef\u4ee5\u6839\u64da\u6307\u5b9a\u7684 Dockerfile \u5efa\u7acb Image "))),(0,l.kt)("br",null),(0,l.kt)("br",null),(0,l.kt)("h3",{id:"\u53c3\u8003\u8cc7\u6e90"},"\u53c3\u8003\u8cc7\u6e90"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://www.youtube.com/watch?v=ZVQmnziXEpA&list=PL4cUxeGkcC9hxjeEtdHFNYMtCpjNBm3h7&index=4"},"Docker Crash Course #4 - Parent Images & Docker Hub (youtube.com)")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://docs.docker.com/reference/dockerfile"},"Dockerfile reference | Docker Docs")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://docs.docker.com/reference/cli/docker/image/build/"},"Dockerfile reference | Docker Docs"))),(0,l.kt)("br",null),(0,l.kt)("br",null))}d.isMDXComponent=!0}}]);