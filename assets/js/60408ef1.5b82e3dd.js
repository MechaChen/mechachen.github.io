"use strict";(self.webpackChunkbenson_doc=self.webpackChunkbenson_doc||[]).push([[8792],{3905:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>m});var n=r(7294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var c=n.createContext({}),s=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},u=function(e){var t=s(e.components);return n.createElement(c.Provider,{value:t},e.children)},p="mdxType",k={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,c=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),p=s(r),d=o,m=p["".concat(c,".").concat(d)]||p[d]||k[d]||a;return r?n.createElement(m,l(l({ref:t},u),{},{components:r})):n.createElement(m,l({ref:t},u))}));function m(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,l=new Array(a);l[0]=d;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i[p]="string"==typeof e?e:o,l[1]=i;for(var s=2;s<a;s++)l[s]=r[s];return n.createElement.apply(null,l)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},4643:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>l,default:()=>k,frontMatter:()=>a,metadata:()=>i,toc:()=>s});var n=r(7462),o=(r(7294),r(3905));const a={sidebar_position:2,sidebar_label:"[Docker] 1. \u4ec0\u9ebc\u662f Docker Container\uff1f \u70ba\u4ec0\u9ebc\u9700\u8981 Docker Container\uff1f",title:"[Docker] 1. \u4ec0\u9ebc\u662f Docker Container\uff1f \u70ba\u4ec0\u9ebc\u9700\u8981 Docker Container\uff1f",tags:["Docker"]},l=void 0,i={unversionedId:"Deploy/docker-1-what-is-docker",id:"Deploy/docker-1-what-is-docker",title:"[Docker] 1. \u4ec0\u9ebc\u662f Docker Container\uff1f \u70ba\u4ec0\u9ebc\u9700\u8981 Docker Container\uff1f",description:"\u554f\u984c\uff1a\u6bcf\u500b\u5c08\u6848\u7684\u74b0\u5883\u90fd\u4e0d\u4e00\u6a23\uff0c\u597d\u7169\u554a \ud83d\ude2b",source:"@site/docs/Deploy/docker-1-what-is-docker.mdx",sourceDirName:"Deploy",slug:"/Deploy/docker-1-what-is-docker",permalink:"/docs/Deploy/docker-1-what-is-docker",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/Deploy/docker-1-what-is-docker.mdx",tags:[{label:"Docker",permalink:"/docs/tags/docker"}],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2,sidebar_label:"[Docker] 1. \u4ec0\u9ebc\u662f Docker Container\uff1f \u70ba\u4ec0\u9ebc\u9700\u8981 Docker Container\uff1f",title:"[Docker] 1. \u4ec0\u9ebc\u662f Docker Container\uff1f \u70ba\u4ec0\u9ebc\u9700\u8981 Docker Container\uff1f",tags:["Docker"]},sidebar:"tutorialSidebar",previous:{title:"[Catelog] Docker \u76ee\u9304",permalink:"/docs/Deploy/catelog"},next:{title:"[Docker] 2. \u662f\u4e0d\u662f VM \u4e5f\u53ef\u4ee5\u505a\u5230\u540c\u6a23\u7684\u4e8b\uff1f VM vs Container",permalink:"/docs/Deploy/docker-2-vm-vs-container"}},c={},s=[{value:"\u554f\u984c\uff1a\u6bcf\u500b\u5c08\u6848\u7684\u74b0\u5883\u90fd\u4e0d\u4e00\u6a23\uff0c\u597d\u7169\u554a \ud83d\ude2b",id:"\u554f\u984c\u6bcf\u500b\u5c08\u6848\u7684\u74b0\u5883\u90fd\u4e0d\u4e00\u6a23\u597d\u7169\u554a-",level:2},{value:"\u554f\u984c\u4e00\uff1a\u672c\u6a5f\u7684\u7a0b\u5f0f\u8a9e\u8a00\u7248\u672c\u4e0d\u4e00\u6a23",id:"\u554f\u984c\u4e00\u672c\u6a5f\u7684\u7a0b\u5f0f\u8a9e\u8a00\u7248\u672c\u4e0d\u4e00\u6a23",level:3},{value:"\u554f\u984c\u4e8c\uff1aOperating system \u4e0d\u4e00\u6a23",id:"\u554f\u984c\u4e8coperating-system-\u4e0d\u4e00\u6a23",level:3},{value:"\u89e3\u65b9\uff1aDocker Container",id:"\u89e3\u65b9docker-container",level:2},{value:"\u7d50\u8ad6",id:"\u7d50\u8ad6",level:2}],u={toc:s},p="wrapper";function k(e){let{components:t,...r}=e;return(0,o.kt)(p,(0,n.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("br",null),(0,o.kt)("h2",{id:"\u554f\u984c\u6bcf\u500b\u5c08\u6848\u7684\u74b0\u5883\u90fd\u4e0d\u4e00\u6a23\u597d\u7169\u554a-"},"\u554f\u984c\uff1a\u6bcf\u500b\u5c08\u6848\u7684\u74b0\u5883\u90fd\u4e0d\u4e00\u6a23\uff0c\u597d\u7169\u554a \ud83d\ude2b"),(0,o.kt)("h3",{id:"\u554f\u984c\u4e00\u672c\u6a5f\u7684\u7a0b\u5f0f\u8a9e\u8a00\u7248\u672c\u4e0d\u4e00\u6a23"},"\u554f\u984c\u4e00\uff1a\u672c\u6a5f\u7684\u7a0b\u5f0f\u8a9e\u8a00\u7248\u672c\u4e0d\u4e00\u6a23"),(0,o.kt)("br",null),(0,o.kt)("p",null,"\u5982\u679c\u6211\u7528\u67d0\u4e9b\u7279\u5b9a\u7684 environment \u53bb\u57f7\u884c\u6211\u7684 project\uff0c\u90a3\u5982\u679c\u8981\u78ba\u4fdd\u5728\u5176\u4ed6 teamate \u4e5f\u53ef\u4ee5\u6b63\u5e38\u7684\u904b\u4f5c\u540c\u4e00\u5305\u5c08\u6848\uff0c\u5176\u4ed6\u4eba\u5fc5\u9808\u5b89\u88dd\u8ddf\u6211\u4e00\u6a23\u7684\u74b0\u5883\u8a2d\u5b9a\uff0c\u751a\u81f3\u7248\u672c\u53ef\u80fd\u4e5f\u8981\u4e00\u6a23\n( \u4f8b\u5982\u90fd\u9700\u8981\u5b89\u88dd Node.js\uff0c\u7136\u5f8c\u90fd\u8981\u5b89\u88dd Node.js 17.0 )"),(0,o.kt)("figure",null,(0,o.kt)("img",{src:"/img/team-node-versions.png",width:"500",alt:"What is Docker?"})),(0,o.kt)("br",null),(0,o.kt)("p",null,"\u60f3\u50cf\u5982\u679c\u4f60\u4e0d\u53ea\u6709\u4e00\u5305\u5c08\u6848\u8981\u8655\u7406\uff0c\u5982\u679c\uff1a"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"\u5c08\u6848 1 \u9700\u8981 Node.js 8.0.0"),(0,o.kt)("li",{parentName:"ul"},"\u5c08\u6848 2 \u9700\u8981 Node.js 12.0.0"),(0,o.kt)("li",{parentName:"ul"},"\u5c08\u6848 3 \u9700\u8981 Python 3.6.0, Node.js 18.0.0 etc")),(0,o.kt)("br",null),(0,o.kt)("p",null,"\u90a3\u5982\u679c\u6211\u5011\u9700\u8981\u540c\u6642\u958b\u767c\u591a\u500b\u5c08\u6848\uff0c\u958b\u767c\u6642\u5c31\u6703\u5e38\u5e38\u9700\u8981\u5207\u63db\u7a0b\u5f0f\u8a9e\u8a00\u7684\u7248\u672c\uff0c\u4f8b\u5982\u4f7f\u7528 ",(0,o.kt)("inlineCode",{parentName:"p"},"nvm"),"\u3001",(0,o.kt)("inlineCode",{parentName:"p"},"pyenv")," \u4f86\u5207\u63db\uff0c\u6703\u8b93\u6211\u5011\u5728\u958b\u767c\u4e0a\u975e\u5e38\u4e0d\u65b9\u4fbf"),(0,o.kt)("br",null),(0,o.kt)("h3",{id:"\u554f\u984c\u4e8coperating-system-\u4e0d\u4e00\u6a23"},"\u554f\u984c\u4e8c\uff1aOperating system \u4e0d\u4e00\u6a23"),(0,o.kt)("p",null,"\u6211\u5011\u5718\u968a\u56e0\u70ba\u662f\u6709\u53f0\u7063 team \u8ddf\u83f2\u5f8b\u8cd3 team \u5408\u4f5c\uff0c\u800c\u53f0\u7063 team \u7528 mac \u5c45\u591a\uff0c\u83f2\u5f8b\u8cd3 team \u7528 Windows \u5c45\u591a\uff0c\u5c0e\u81f4\u6211\u5011\u6709\u6642\u5019\u5728\u958b\u767c\u6642\u7684\u7d50\u679c\u4e0d\u592a\u4e00\u6a23\uff0c\u6240\u4ee5\u5f8c\u4f86\u5c31\u7d71\u4e00\u7528 Docker container \u958b\u767c\u4e86\uff0c\u9019\u6a23\u5927\u5bb6\u7684\u958b\u767c\u904e\u7a0b\u4e5f\u6703\u90fd\u662f\u4e00\u6a23\u7684"),(0,o.kt)("br",null),(0,o.kt)("br",null),(0,o.kt)("h2",{id:"\u89e3\u65b9docker-container"},"\u89e3\u65b9\uff1aDocker Container"),(0,o.kt)("p",null,"\u56e0\u6b64\uff0c\u70ba\u4e86\u89e3\u6c7a\u9019\u4e9b\u554f\u984c\uff0c\u5c31\u51fa\u73fe\u4e86 Docker Container\uff01\uff01\uff01\n\u8b93\u6211\u5011\u53ef\u4ee5\u5c07\u9019\u4e9b\u6240\u9700\u74b0\u5883\u8ddf\u6211\u5011\u7684\u5c08\u6848\u5168\u90e8\u5305\u5728\u4e00\u8d77\uff0c\u6211\u5011\u5728\u958b\u767c\u6642\u5c31\u4e0d\u7528\u8003\u616e\u4e0a\u8ff0\u74b0\u5883\u7684\u554f\u984c\u4e86 \ud83c\udf89\ud83c\udf89\ud83c\udf89"),(0,o.kt)("br",null),(0,o.kt)("p",null,"\u800c\u5c07\u6211\u5011 App \u6240\u9700\u74b0\u5883 & \u7522\u54c1\u7a0b\u5f0f\u78bc\u6703\u88ab\u653e Container \u88cf\uff0c\u6211\u5011\u8981\u958b\u767c\u6642\uff0c\u53ea\u9700\u8981\u53bb\u904b\u884c\u9019\u500b Container \u5c31\u53ef\u4ee5\u4e86"),(0,o.kt)("figure",null,(0,o.kt)("img",{src:"/img/container-illustration.png",width:"150",alt:"What is Docker?"})),(0,o.kt)("br",null),(0,o.kt)("br",null),(0,o.kt)("p",null,"\u6211\u5011\u5728\u540c\u4e00\u500b\u96fb\u8166\u4e0a\uff0c\u5c31\u53ef\u4ee5\u5229 Container \u53bb\u904b\u884c\u4e0d\u540c\u7684\u5c08\u6848\u800c\u4e0d\u7528\u4e00\u76f4\u64d4\u5fc3\u74b0\u5883\u7684\u554f\u984c\uff0c\u9019\u6a23\u5c31\u53ef\u4ee5\u8b93\u6211\u5011\u7684\u958b\u767c\u904e\u7a0b\u66f4\u52a0\u9806\u66a2 \ud83e\udd73\ud83e\udd73\ud83e\udd73"),(0,o.kt)("figure",null,(0,o.kt)("img",{src:"/img/containers.png",width:"500",alt:"What is Docker?"})),(0,o.kt)("br",null),(0,o.kt)("br",null),(0,o.kt)("h2",{id:"\u7d50\u8ad6"},"\u7d50\u8ad6"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"\u5229\u7528 Docker Container \u53ef\u4ee5\u8b93\u6211\u5011\u904b\u884c App \u6240\u9700\u8981\u7684\u74b0\u5883 + \u7a0b\u5f0f\u78bc\u90fd\u5305\u88dd\u5728\u4e00\u8d77\uff0c\u6e1b\u5c11\u9700\u8981\u9762\u5c0d\u4e0d\u540c\u5c08\u6848\u6709\u4e0d\u540c\u74b0\u5883\u7684\u554f\u984c")),(0,o.kt)("br",null),(0,o.kt)("br",null))}k.isMDXComponent=!0}}]);