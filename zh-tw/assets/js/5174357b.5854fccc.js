"use strict";(self.webpackChunkbenson_doc=self.webpackChunkbenson_doc||[]).push([[4832],{3905:(e,t,r)=>{r.d(t,{Zo:()=>c,kt:()=>m});var n=r(7294);function l(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){l(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function o(e,t){if(null==e)return{};var r,n,l=function(e,t){if(null==e)return{};var r,n,l={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(l[r]=e[r]);return l}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(l[r]=e[r])}return l}var u=n.createContext({}),s=function(e){var t=n.useContext(u),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},c=function(e){var t=s(e.components);return n.createElement(u.Provider,{value:t},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},k=n.forwardRef((function(e,t){var r=e.components,l=e.mdxType,a=e.originalType,u=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),p=s(r),k=l,m=p["".concat(u,".").concat(k)]||p[k]||d[k]||a;return r?n.createElement(m,i(i({ref:t},c),{},{components:r})):n.createElement(m,i({ref:t},c))}));function m(e,t){var r=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var a=r.length,i=new Array(a);i[0]=k;var o={};for(var u in t)hasOwnProperty.call(t,u)&&(o[u]=t[u]);o.originalType=e,o[p]="string"==typeof e?e:l,i[1]=o;for(var s=2;s<a;s++)i[s]=r[s];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}k.displayName="MDXCreateElement"},1871:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>u,contentTitle:()=>i,default:()=>d,frontMatter:()=>a,metadata:()=>o,toc:()=>s});var n=r(7462),l=(r(7294),r(3905));const a={sidebar_label:"[CDN] CDN \u662f\u4ec0\u9ebc?",title:"[CDN] CDN \u662f\u4ec0\u9ebc?",tags:["Security","System Design"]},i=void 0,o={unversionedId:"Plan/forward-proxy",id:"Plan/forward-proxy",title:"[CDN] CDN \u662f\u4ec0\u9ebc?",description:"\u672c\u6587\u975e\u539f\u5275\uff0c\u4ee5\u4e0b\u662f\u53c3\u8003\u8cc7\u6599\u548c\u5716\u7247\u4f86\u6e90\uff1a",source:"@site/docs/Plan/forward-proxy.mdx",sourceDirName:"Plan",slug:"/Plan/forward-proxy",permalink:"/zh-tw/docs/Plan/forward-proxy",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/Plan/forward-proxy.mdx",tags:[{label:"Security",permalink:"/zh-tw/docs/tags/security"},{label:"System Design",permalink:"/zh-tw/docs/tags/system-design"}],version:"current",lastUpdatedAt:1684126170,formattedLastUpdatedAt:"2023\u5e745\u670815\u65e5",frontMatter:{sidebar_label:"[CDN] CDN \u662f\u4ec0\u9ebc?",title:"[CDN] CDN \u662f\u4ec0\u9ebc?",tags:["Security","System Design"]},sidebar:"tutorialSidebar",previous:{title:"[Proxy] Forward Proxy \u662f\u4ec0\u9ebc?",permalink:"/zh-tw/docs/Operate/forward-proxy"},next:{title:"[CORS] 1. CORS \u662f\u4ec0\u9ebc\uff1f \u963b\u64cb CSRF \u7684\u5229\u5668",permalink:"/zh-tw/docs/Security/cors-1"}},u={},s=[{value:"CDN \u662f\u4ec0\u9ebc\uff1f \u70ba\u4ec0\u9ebd\u8981\u7528 CDN?",id:"cdn-\u662f\u4ec0\u9ebc-\u70ba\u4ec0\u9ebd\u8981\u7528-cdn",level:2},{value:"CDN \u627e\u5c0b\u6700\u8fd1\u7684 Edge server \u7684\u6280\u8853",id:"cdn-\u627e\u5c0b\u6700\u8fd1\u7684-edge-server-\u7684\u6280\u8853",level:2},{value:"DNS based routing",id:"dns-based-routing",level:3},{value:"Anycast",id:"anycast",level:3},{value:"CDN \u984d\u5916\u7684\u597d\u8655",id:"cdn-\u984d\u5916\u7684\u597d\u8655",level:2},{value:"Security",id:"security",level:3},{value:"CDN \u8b93\u4f7f\u7528\u8005\u770b\u5230\u5176\u5167\u5bb9\u7684\u6d41\u7a0b\u662f\u5982\u4f55\u904b\u4f5c\u7684\uff1f",id:"cdn-\u8b93\u4f7f\u7528\u8005\u770b\u5230\u5176\u5167\u5bb9\u7684\u6d41\u7a0b\u662f\u5982\u4f55\u904b\u4f5c\u7684",level:2},{value:"\u7d50\u8ad6",id:"\u7d50\u8ad6",level:2},{value:"\u53c3\u8003\u8cc7\u8a0a",id:"\u53c3\u8003\u8cc7\u8a0a",level:2}],c={toc:s},p="wrapper";function d(e){let{components:t,...r}=e;return(0,l.kt)(p,(0,n.Z)({},c,r,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"\u672c\u6587\u975e\u539f\u5275\uff0c\u4ee5\u4e0b\u662f\u53c3\u8003\u8cc7\u6599\u548c\u5716\u7247\u4f86\u6e90\uff1a"),(0,l.kt)("ul",{parentName:"blockquote"},(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://www.linkedin.com/posts/alexxubyte_systemdesign-coding-interviewtips-activity-6990698121835986944-_gl8?utm_source=share&utm_medium=member_desktop"},"Forward and Reverse proxy by Alex Xu")," ",(0,l.kt)("br",null)))),(0,l.kt)("br",null),(0,l.kt)("h2",{id:"cdn-\u662f\u4ec0\u9ebc-\u70ba\u4ec0\u9ebd\u8981\u7528-cdn"},"CDN \u662f\u4ec0\u9ebc\uff1f \u70ba\u4ec0\u9ebd\u8981\u7528 CDN?"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"\u5728\u65e9\u671f 199X \u5e74\u4ee3\uff0c\u539f\u672c\u662f\u7528\u4f86\u4f5c\u70ba\u50b3\u8f38\u975c\u614b\u5167\u5bb9\u5230\u5404\u500b\u4e16\u754c"),(0,l.kt)("li",{parentName:"ul"},"\u5f8c\u4f86\u8fd1\u671f\uff0c\u53ea\u6709 http traffic\uff0c\u5c31\u6709\u6a5f\u6703\u7528 CDN"),(0,l.kt)("li",{parentName:"ul"},"\u5c24\u5176\u662f\u5728\u7db2\u901f\u5f88\u91cd\u8981\u7684\u5e74\u4ee3\uff0c0.1 \u79d2\u90fd\u6703\u5e36\u4f86\u6975\u5927\u7684\u7522\u503c")),(0,l.kt)("img",{src:"/img/efficiency-and-conversion-rates.png",width:"400"}),(0,l.kt)("br",null),(0,l.kt)("br",null),(0,l.kt)("br",null),(0,l.kt)("admonition",{title:"Conversion rate (\u8f49\u5316\u7387) \u662f\u4ec0\u9ebc\uff1f",type:"info"},(0,l.kt)("p",{parentName:"admonition"},"Conversion Rate\uff08\u8f49\u5316\u7387\uff09\u662f\u4e00\u500b\u8861\u91cf\u7db2\u7ad9\u3001\u61c9\u7528\u7a0b\u5e8f\u6216\u71df\u92b7\u6d3b\u52d5\u6548\u679c\u7684\u6307\u6a19\uff0c",(0,l.kt)("br",null),"\n\u901a\u5e38\u7528\u65bc\u8861\u91cf\u7528\u6236\u5728\u9054\u5230\u67d0\u500b\u76ee\u6a19\uff08\u4f8b\u5982\u8cfc\u8cb7\u7522\u54c1\u3001\u8a3b\u518a\u5e33\u6236\u6216\u586b\u5beb\u8868\u683c\uff09\u65b9\u9762\u7684\u8868\u73fe\u3002",(0,l.kt)("br",null),"\n\u63db\u53e5\u8a71\u8aaa\uff0c\u5b83\u63cf\u8ff0\u4e86\u5f9e\u7528\u6236\u700f\u89bd\u7db2\u7ad9\u5230\u5be6\u969b\u5b8c\u6210\u76ee\u6a19\u64cd\u4f5c\u7684\u904e\u7a0b\u4e2d\u7684\u6210\u529f\u6bd4\u4f8b\u3002 ",(0,l.kt)("br",null)),(0,l.kt)("p",{parentName:"admonition"},"\u8f49\u5316\u7387\u7684\u8a08\u7b97\u516c\u5f0f\u5982\u4e0b\uff1a ",(0,l.kt)("br",null)),(0,l.kt)("pre",{parentName:"admonition"},(0,l.kt)("code",{parentName:"pre"},"\u8f49\u5316\u7387\uff08%\uff09 =\uff08\u5b8c\u6210\u76ee\u6a19\u64cd\u4f5c\u7684\u7528\u6236\u6578\u91cf / \u53c3\u8207\u7528\u6236\u7e3d\u6578\uff09x 100\n")),(0,l.kt)("br",null),"\u4f8b\u5982\uff0c\u5982\u679c\u4e00\u500b\u96fb\u5b50\u5546\u52d9\u7db2\u7ad9\u6709 1,000 \u540d\u8a2a\u5ba2\uff0c\u5176\u4e2d\u6709 50 \u540d\u8a2a\u5ba2\u8cfc\u8cb7\u4e86\u7522\u54c1\uff0c\u90a3\u9ebc\u8f49\u5316\u7387\u5c31\u662f\uff1a ",(0,l.kt)("br",null),(0,l.kt)("pre",{parentName:"admonition"},(0,l.kt)("code",{parentName:"pre"},"\u8f49\u5316\u7387\uff08%\uff09 =\uff0850 / 1,000\uff09x 100 = 5%\n")),(0,l.kt)("br",null),"\u8f49\u5316\u7387\u662f\u4e00\u500b\u91cd\u8981\u7684\u71df\u92b7\u548c\u7528\u6236\u9ad4\u9a57\u6307\u6a19\uff0c\u901a\u5e38\u7528\u4f86\u8a55\u4f30\u5ee3\u544a\u6295\u653e\u3001\u7db2\u7ad9\u8a2d\u8a08\u3001\u7522\u54c1\u5b9a\u50f9\u7b49\u65b9\u9762\u7684\u6210\u529f\u7a0b\u5ea6\u3002",(0,l.kt)("br",null),"\u901a\u904e\u5206\u6790\u548c\u512a\u5316\u8f49\u5316\u7387\uff0c\u4f01\u696d\u53ef\u4ee5\u63d0\u9ad8\u6536\u5165\u3001\u964d\u4f4e\u7372\u5ba2\u6210\u672c\uff0c\u4e26\u63d0\u9ad8\u5ba2\u6236\u6eff\u610f\u5ea6\u3002"),(0,l.kt)("br",null),(0,l.kt)("br",null),(0,l.kt)("p",null,"\u70ba\u4e86\u8b93\u7db2\u7ad9\u7684\u5167\u5bb9\u80fd\u5feb\u901f\u50b3\u9001\u7d66\u4f7f\u7528\u8005\uff0cCDN provider \u5728\u5168\u4e16\u754c\u5404\u5730\u90fd\u67b6\u8a2d\u4e86 CDN servers"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"CDN \u5206\u5e03\u5728\u5168\u7403\u7684\u6bcf\u4e00\u500b\u9ede\u7a31\u4f5c ",(0,l.kt)("strong",{parentName:"li"},(0,l.kt)("inlineCode",{parentName:"strong"},"Pop (Point of Presence)"))),(0,l.kt)("li",{parentName:"ul"},"\u5728\u6bcf\u500b Pop \u7684 server\uff0c\u7a31\u505a ",(0,l.kt)("strong",{parentName:"li"},(0,l.kt)("inlineCode",{parentName:"strong"},"Edge server")))),(0,l.kt)("img",{src:"/img/cdn-regions.png",width:"400"})," ",(0,l.kt)("br",null),(0,l.kt)("img",{src:"/img/pop.png",width:"300"})," ",(0,l.kt)("br",null),(0,l.kt)("img",{src:"/img/edge-server.png",width:"100"}),(0,l.kt)("br",null),(0,l.kt)("br",null),(0,l.kt)("h2",{id:"cdn-\u627e\u5c0b\u6700\u8fd1\u7684-edge-server-\u7684\u6280\u8853"},"CDN \u627e\u5c0b\u6700\u8fd1\u7684 Edge server \u7684\u6280\u8853"),(0,l.kt)("img",{src:"/img/cloud-providers.png",width:"450"}),(0,l.kt)("br",null),(0,l.kt)("br",null),(0,l.kt)("p",null,"\u6709\u5206\u4ee5\u4e0b 2 \u7a2e\uff1a"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},(0,l.kt)("inlineCode",{parentName:"strong"},"DNS based routing"))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},(0,l.kt)("inlineCode",{parentName:"strong"},"Anycast")))),(0,l.kt)("img",{src:"/img/cdn-routing.png",width:"300"}),(0,l.kt)("br",null),(0,l.kt)("br",null),(0,l.kt)("h3",{id:"dns-based-routing"},"DNS based routing"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"DNS based routing \u7684\u6bcf\u500b CDN \u7684 ip address \u90fd\u4e0d\u4e00\u6a23")),(0,l.kt)("img",{src:"/img/dns-based-routing.png",width:"400"}),(0,l.kt)("br",null),(0,l.kt)("h3",{id:"anycast"},"Anycast"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Anycast \u7684\u6bcf\u500b CDN \u7684 ip address \u90fd\u4e00\u6a23")),(0,l.kt)("img",{src:"/img/anycast.png",width:"400"}),(0,l.kt)("h2",{id:"cdn-\u984d\u5916\u7684\u597d\u8655"},"CDN \u984d\u5916\u7684\u597d\u8655"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"\u984d\u5916\u591a\u4e86\u5b89\u5168\u6027 (Security)")),(0,l.kt)("br",null),(0,l.kt)("h3",{id:"security"},"Security"),(0,l.kt)("p",null,"\u56e0\u70ba CDN \u6709\u5f88\u591a\u7684 server\uff0c\u5177\u6709\u5927\u91cf\u7684 network capactiy\uff0c\n\u53ef\u4ee5\u62b5\u6a94 DDOS"),(0,l.kt)("img",{src:"/img/cdn-and-ddos.jpg",width:"500"}),(0,l.kt)("br",null),(0,l.kt)("br",null),(0,l.kt)("br",null),(0,l.kt)("p",null,"\u5c24\u5176\u662f\u5229\u7528 Anycast \u5efa\u7acb\u7684 CDN\uff0c\u66f4\u80fd\u6709\u6548\u5730\u64f4\u6563\u653b\u64ca"),(0,l.kt)("img",{src:"/img/anycast-and-ddos.jpg",width:"500"}),(0,l.kt)("br",null),(0,l.kt)("br",null),(0,l.kt)("br",null),(0,l.kt)("h2",{id:"cdn-\u8b93\u4f7f\u7528\u8005\u770b\u5230\u5176\u5167\u5bb9\u7684\u6d41\u7a0b\u662f\u5982\u4f55\u904b\u4f5c\u7684"},"CDN \u8b93\u4f7f\u7528\u8005\u770b\u5230\u5176\u5167\u5bb9\u7684\u6d41\u7a0b\u662f\u5982\u4f55\u904b\u4f5c\u7684\uff1f"),(0,l.kt)("img",{src:"/img/cdn-flow-chart.webp"}),(0,l.kt)("br",null),(0,l.kt)("br",null),(0,l.kt)("ol",null,(0,l.kt)("li",{parentName:"ol"},"Client \u6703\u6aa2\u67e5\u6709\u6c92\u6709 local \u7684 DNS cache\uff0c\u6709\u7684\u8a71\u5c31\u8fd4\u56de\u8a72 cache"),(0,l.kt)("li",{parentName:"ol"},"\u5982\u679c\u6c92\u6709 DNS cache\uff0c\u5c31\u6703\u53bb DNS resolver \u67e5\u627e Server ip"),(0,l.kt)("li",{parentName:"ol"},"\u5982\u679c\u6c92\u6709\u4f7f\u7528 CDN\uff0c\u5c31\u6703\u76f4\u63a5\u6703\u50b3 Server ip address"),(0,l.kt)("li",{parentName:"ol"},"\u5982\u679c\u6709\u4f7f\u7528 CDN\uff0c\u5c31\u6703\u8fd4\u56de\u4e00\u500b CNAME (Conical Name) \u6a19\u6e96\u57df\u540d\uff0c\u6307\u5411 CDN server"),(0,l.kt)("li",{parentName:"ol"},"\u6b64\u6642\uff0c\u6211\u5011\u6703\u518d\u8981\u6c42 CDN \u7684 Authoritative Name Server \u53bb\u66ff\u6211\u5011\u89e3\u6790\u57df\u540d\uff0c\u9032\u800c\u8fd4\u56de CDN \u7684 load balancer \u7684\u57df\u540d"),(0,l.kt)("li",{parentName:"ol"},"\u6211\u5011\u6703\u518d\u53bb\u89e3\u6790 CDN load balancer \u7684\u57df\u540d\uff0c\u6700\u5f8c\u5f97\u5230\u6700\u8fd1\u7684 Edge server \u7684\u57df\u540d"),(0,l.kt)("li",{parentName:"ol"},"\u5982\u679c Edge server \u6c92\u6709\u8cc7\u6599\uff0c\u5c31\u6703\u5f80 central \u627e\uff0c\u751a\u81f3\u53bb\u627e\u5230\u539f\u672c\u7684 Web server")),(0,l.kt)("br",null),(0,l.kt)("br",null),(0,l.kt)("h2",{id:"\u7d50\u8ad6"},"\u7d50\u8ad6"),(0,l.kt)("p",null,"\u85c9\u7531\u67b6\u5728\u4e0d\u540c\u5730\u5340\u7684 CDN Edge server\uff0c\u53ef\u4ee5\u5e6b\u6211\u5011"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"\u5229\u7528 ",(0,l.kt)("strong",{parentName:"li"},"Cache")," \u5feb\u901f\u975c\u614b\u8fd4\u56de\u9801\u9762"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"\u8655\u7406 HTTP traffic"),"\uff0c\u907f\u514d\u6d41\u91cf\u963b\u585e"),(0,l.kt)("li",{parentName:"ul"},"\u984d\u5916\u589e\u52a0\u5b89\u5168\u6027\uff0c\u6709\u591a\u500b CDN Edge servers \u5e6b\u6211\u5011",(0,l.kt)("strong",{parentName:"li"},"\u62b5\u64cb DDOS attack"))),(0,l.kt)("br",null),(0,l.kt)("h2",{id:"\u53c3\u8003\u8cc7\u8a0a"},"\u53c3\u8003\u8cc7\u8a0a"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://link.segmentfault.com/?enc=GCHAOWTTXttsSNxSorAdGA%3D%3D.7kCGqMlUEDvDSl9jLEtOKjRRK8C%2BpWYBe17taWKtElRRFPCYjfvsQ6t0fdBJO2W7"},"\u5173\u4e8e cdn\u3001\u56de\u6e90\u7b49\u95ee\u9898\u4e00\u7f51\u6253\u5c3d")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://www.youtube.com/watch?v=RI9np1LWzqw&t=1s"},"What Is A CDN? How Does It Work? - YouTube")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://blog.bytebytego.com/p/how-does-cdn-work"},"How does CDN work? - by Alex Xu - ByteByteGo Newsletter")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://juejin.cn/post/7064952956201730062#heading-6"},"\u56fe\u89e3|\u4ec0\u4e48\u662f\u5185\u5bb9\u5206\u53d1\u7f51\u7edc(cdn) - \u6398\u91d1 (juejin.cn)")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://blog.cloud-ace.tw/networking-website/cdn/cloud-cdn-intro/"},"CDN \u662f\u4ec0\u9ebc\uff1fGoogle Cloud CDN \u7528\u9014\u3001\u67b6\u69cb\u5b8c\u6574\u4ecb\u7d39 - Cloud Ace (cloud-ace.tw)"))))}d.isMDXComponent=!0}}]);