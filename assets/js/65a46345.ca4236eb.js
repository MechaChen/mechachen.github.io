"use strict";(self.webpackChunkbenson_doc=self.webpackChunkbenson_doc||[]).push([[6771],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>d});var r=n(7294);function l(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){l(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,l=function(e,t){if(null==e)return{};var n,r,l={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(l[n]=e[n]);return l}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(l[n]=e[n])}return l}var p=r.createContext({}),s=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=s(e.components);return r.createElement(p.Provider,{value:t},e.children)},c="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},k=r.forwardRef((function(e,t){var n=e.components,l=e.mdxType,a=e.originalType,p=e.parentName,u=o(e,["components","mdxType","originalType","parentName"]),c=s(n),k=l,d=c["".concat(p,".").concat(k)]||c[k]||m[k]||a;return n?r.createElement(d,i(i({ref:t},u),{},{components:n})):r.createElement(d,i({ref:t},u))}));function d(e,t){var n=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var a=n.length,i=new Array(a);i[0]=k;var o={};for(var p in t)hasOwnProperty.call(t,p)&&(o[p]=t[p]);o.originalType=e,o[c]="string"==typeof e?e:l,i[1]=o;for(var s=2;s<a;s++)i[s]=n[s];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}k.displayName="MDXCreateElement"},2993:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>i,default:()=>m,frontMatter:()=>a,metadata:()=>o,toc:()=>s});var r=n(7462),l=(n(7294),n(3905));const a={sidebar_label:"[CORS] 1. CORS \u662f\u4ec0\u9ebc\uff1f \u963b\u64cb CSRF \u7684\u5229\u5668",title:"[CORS] 1. CORS \u662f\u4ec0\u9ebc\uff1f \u963b\u64cb CSRF \u7684\u5229\u5668",tags:["CORS","Security"]},i=void 0,o={unversionedId:"Security/cors-1",id:"Security/cors-1",title:"[CORS] 1. CORS \u662f\u4ec0\u9ebc\uff1f \u963b\u64cb CSRF \u7684\u5229\u5668",description:"\u4ec0\u9ebc\u662f CORS\uff1f",source:"@site/docs/Security/cors-1.mdx",sourceDirName:"Security",slug:"/Security/cors-1",permalink:"/docs/Security/cors-1",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/Security/cors-1.mdx",tags:[{label:"CORS",permalink:"/docs/tags/cors"},{label:"Security",permalink:"/docs/tags/security"}],version:"current",frontMatter:{sidebar_label:"[CORS] 1. CORS \u662f\u4ec0\u9ebc\uff1f \u963b\u64cb CSRF \u7684\u5229\u5668",title:"[CORS] 1. CORS \u662f\u4ec0\u9ebc\uff1f \u963b\u64cb CSRF \u7684\u5229\u5668",tags:["CORS","Security"]},sidebar:"tutorialSidebar",previous:{title:"[CDN] CDN \u662f\u4ec0\u9ebc?",permalink:"/docs/Plan/forward-proxy"},next:{title:"[Unit Test] \u524d\u7aef\u55ae\u5143\u6e2c\u8a66\u76ee\u9304",permalink:"/docs/Testing/catlog"}},p={},s=[{value:"\u4ec0\u9ebc\u662f CORS\uff1f",id:"\u4ec0\u9ebc\u662f-cors",level:2},{value:"\u70ba\u4ec0\u9ebc\u8981\u6709 CORS\uff1f",id:"\u70ba\u4ec0\u9ebc\u8981\u6709-cors",level:2},{value:"\u9677\u9631: Server \u5176\u5be6\u9084\u662f\u6703\u8655\u7406 request",id:"\u9677\u9631-server-\u5176\u5be6\u9084\u662f\u6703\u8655\u7406-request",level:2},{value:"\u7c21\u55ae\u8acb\u6c42",id:"\u7c21\u55ae\u8acb\u6c42",level:2},{value:"\u8acb\u6c42\u5167\u5bb9",id:"\u8acb\u6c42\u5167\u5bb9",level:3},{value:"\u4e00\u822c\u8acb\u6c42",id:"\u4e00\u822c\u8acb\u6c42",level:2},{value:"Preflight Request (\u9810\u6aa2\u8acb\u6c42)",id:"preflight-request-\u9810\u6aa2\u8acb\u6c42",level:3},{value:"example:  js POST fetch",id:"example--js-post-fetch",level:3},{value:"Preflight request",id:"preflight-request",level:4},{value:"Preflight response",id:"preflight-response",level:4},{value:"\u4e00\u822c Request &amp; Response",id:"\u4e00\u822c-request--response",level:4},{value:"\u7d50\u8ad6",id:"\u7d50\u8ad6",level:2},{value:"\u53c3\u8003\u8cc7\u6e90",id:"\u53c3\u8003\u8cc7\u6e90",level:3}],u={toc:s},c="wrapper";function m(e){let{components:t,...n}=e;return(0,l.kt)(c,(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("h2",{id:"\u4ec0\u9ebc\u662f-cors"},"\u4ec0\u9ebc\u662f CORS\uff1f"),(0,l.kt)("p",null,"\u5148\u4f86\u8aaa\u660e\u4e00\u4e0b\u4ec0\u9ebc\u662f ",(0,l.kt)("inlineCode",{parentName:"p"},"Origin"),"\uff1a"),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"Origin"),": \u7531 ",(0,l.kt)("inlineCode",{parentName:"p"},"protocol")," + ",(0,l.kt)("inlineCode",{parentName:"p"},"host")," + ",(0,l.kt)("inlineCode",{parentName:"p"},"port"),"\uff0cex:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"- https://www.benson-chen.com\n- http://www.mecha-chen.com:80\n- https://www.hello-world.com:443\n")),(0,l.kt)("p",null,"\u5982\u679c fetch, XMLHTTPRequest \u7684 api origin \u4e0d\u4e00\u6a23\uff0c\u5c31\u6703\u88ab ",(0,l.kt)("inlineCode",{parentName:"p"},"Cross Origin Resource Sharing (CORS)")," policy \u963b\u64cb"),(0,l.kt)("br",null),(0,l.kt)("admonition",{type:"caution"},(0,l.kt)("mdxAdmonitionTitle",{parentName:"admonition"},(0,l.kt)("inlineCode",{parentName:"mdxAdmonitionTitle"},"script"),", ",(0,l.kt)("inlineCode",{parentName:"mdxAdmonitionTitle"},"img")," \u7684 src \u4e0d\u5728\u6b64\u9650\u5236"),(0,l.kt)("p",{parentName:"admonition"},"\u56e0\u70ba\u50cf ",(0,l.kt)("inlineCode",{parentName:"p"},"script"),", ",(0,l.kt)("inlineCode",{parentName:"p"},"img")," \u7684 src \u53ea\u662f\u53d6\u5f97\u8cc7\u6e90\uff0c\u5c0d Server \u6c92\u6709\u4ec0\u9ebc\u5b89\u5168\u4e0a\u7684\u7591\u616e\uff0c\u6240\u4ee5\u6c92\u6709\u5728 CORS policy \u7684\u9650\u5236\u7bc4\u570d\u88e1")),(0,l.kt)("br",null),(0,l.kt)("br",null),(0,l.kt)("h2",{id:"\u70ba\u4ec0\u9ebc\u8981\u6709-cors"},"\u70ba\u4ec0\u9ebc\u8981\u6709 CORS\uff1f"),(0,l.kt)("p",null,"\u907f\u514d ",(0,l.kt)("strong",{parentName:"p"},"CSRF (Cross-Site Request Forgery)"),"\uff0c\u8209\u4f8b\u4f86\u8aaa\uff1a"),(0,l.kt)("figure",null,(0,l.kt)("img",{src:"/img/csrf.png",width:"500"})),(0,l.kt)("ol",null,(0,l.kt)("li",{parentName:"ol"},"User \u767b\u5165\u4e86 bank.com"),(0,l.kt)("li",{parentName:"ol"},"bank.com \u5c07\u9280\u884c\u7684\u5e33\u865f cookie \u5b58\u5728 User \u7684\u700f\u89bd\u5668\uff0c\u700f\u89bd\u5668\u6240\u6709\u7684 tab \u90fd\u5b58\u53d6\u5f97\u5230"),(0,l.kt)("li",{parentName:"ol"},"User \u9032\u5165 evil.com (\u507d\u9020\u7684\u60e1\u610f\u7db2\u7ad9)"),(0,l.kt)("li",{parentName:"ol"},"evil.com \u5617\u8a66\u53bb\u5b58\u53d6\u4e86 bank.com \u7684\u8cc7\u8a0a\uff0c\u56e0\u70ba\u6709 cookie \u7684\u5b58\u5728\uff0c\u6240\u4ee5\u6253 api \u6703\u6210\u529f"),(0,l.kt)("li",{parentName:"ol"},"Hacker \u5c31\u6210\u529f\u5229\u7528 evil.com \u53d6\u5f97 User \u7684\u9280\u884c\u5e33\u6236\u8cc7\u8a0a\u4e86")),(0,l.kt)("br",null),(0,l.kt)("p",null,"\u6709\u4e86 CORS\uff0c\u56e0\u70ba ",(0,l.kt)("inlineCode",{parentName:"p"},"evail.com")," \u8ddf ",(0,l.kt)("inlineCode",{parentName:"p"},"bank.com")," \u662f\u4e0d\u4e00\u6a23\u7684 domain\uff0c\u5c31\u53ef\u4ee5\u907f\u514d ",(0,l.kt)("inlineCode",{parentName:"p"},"evil.com")," \u53d6\u5f97 ",(0,l.kt)("inlineCode",{parentName:"p"},"bank.com")," \u7684 api response\uff0c\u4e26\u89e3\u6c7a\u6389 CORS \u4e86 \ud83c\udf08\ud83c\udf08\ud83c\udf08"),(0,l.kt)("br",null),(0,l.kt)("br",null),(0,l.kt)("h2",{id:"\u9677\u9631-server-\u5176\u5be6\u9084\u662f\u6703\u8655\u7406-request"},"\u9677\u9631: Server \u5176\u5be6\u9084\u662f\u6703\u8655\u7406 request"),(0,l.kt)("p",null,"\u96d6\u8aaa\u6709\u4e86 CORS \u4e4b\u5f8c\uff0c\u53ef\u4ee5\u963b\u64cb CSRF\uff0c\u53ef\u662f\u963b\u64cb\u7684\u65b9\u5f0f\u53ea\u662f"),(0,l.kt)("br",null),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},(0,l.kt)("strong",{parentName:"p"},'Browser \u4e0d\u628a "\u5df2\u7d93\u53d6\u5f97 respones \u7684\u7d50\u679c" \u56de\u50b3\u7d66\u4f60\u770b'))),(0,l.kt)("br",null),(0,l.kt)("p",null,"\u9a5a\u4e0d\u9a5a\u559c\uff0c\u610f\u4e0d\u610f\u5916 \ud83d\ude08\ud83d\ude08\ud83d\ude08"),(0,l.kt)("img",{src:"https://memeprod.ap-south-1.linodeobjects.com/user-gif-thumbnail/92a94a6729ddc1ad62ef6041fa5e0461.gif",width:"400"}),(0,l.kt)("br",null),(0,l.kt)("br",null),(0,l.kt)("br",null),(0,l.kt)("p",null,"\u600e\u9ebc\u8aaa\u5462\uff1f \u4f60\u6703\u770b\u898b\u7684\u932f\u8aa4\u8a0a\u606f\u5982\u4e0b\uff1a"),(0,l.kt)("admonition",{title:"CORS error",type:"danger"},(0,l.kt)("p",{parentName:"admonition"},"request has been blocked by CORS policy: No \u2018Access-Control-Allow-Origin\u2019 header is present on the requested resource")),(0,l.kt)("br",null),(0,l.kt)("p",null,"\u6709\u6c92\u6709\u767c\u73fe\u4eae\u9ede\uff1f ",(0,l.kt)("inlineCode",{parentName:"p"},"Access-Control-Allow-Origin")," \u662f Server \u7684 response \u624d\u6703\u52a0\u4e0a\u7684 header\uff0c\u8868\u793a Server \u5176\u5be6\u5df2\u7d93\u8655\u7406\u5b8c request \u4e86"),(0,l.kt)("p",null,"\u90a3\u5982\u679c\u6211\u5011\u7684 request \u5176\u5be6\u6703\u53bb\u66f4\u6539 DB \u7684\u8cc7\u6599\uff0c\u50cf\u662f ",(0,l.kt)("inlineCode",{parentName:"p"},"PUT /user/:id")," \u6216\u662f ",(0,l.kt)("inlineCode",{parentName:"p"},"DELETE /user/:id")," \u5462\uff1f"),(0,l.kt)("p",null,"\u90a3\u9019\u6642\u5019\u5c31\u60b2\u5287\u4e86\uff0c\u5c31\u7b97\u6709 CORS \u7684\u4fdd\u8b77\uff0cServer \u7684 DB \u8cc7\u6599\u9084\u662f\u6703\u88ab\u780d\u6389\uff0c\u6240\u4ee5\u5462\uff1f \u53c8\u6709\u53e6\u5916\u4e00\u500b\u6a5f\u5236\u5e6b\u6211\u5011\u53bb\u5340\u5206 request\uff0c\u4f86\u91dd\u5c0d\u4e0d\u540c\u5b89\u5168\u7a0b\u5ea6\u7684 request \u505a\u4e0d\u540c\u7684\u8655\u7406\uff0c\u5206\u5225\u662f ",(0,l.kt)("strong",{parentName:"p"},"\u7c21\u55ae\u8acb\u6c42")," & ",(0,l.kt)("strong",{parentName:"p"},"\u4e00\u822c\u8acb\u6c42"),"\uff0c\u6211\u5011\u63a5\u4e0b\u4f86\u5c31\u6703\u91dd\u5c0d\u9019 2 \u7a2e\u8acb\u6c42\u4f86\u505a\u8aaa\u660e"),(0,l.kt)("br",null),(0,l.kt)("br",null),(0,l.kt)("h2",{id:"\u7c21\u55ae\u8acb\u6c42"},"\u7c21\u55ae\u8acb\u6c42"),(0,l.kt)("p",null,"\u5728\u53ea\u7b26\u5408\u7279\u5b9a\u7c21\u55ae\u5167\u5bb9\u7684\u689d\u4ef6\u4e0b\uff0c\u56e0\u70ba\u5b89\u5168\u6027\u7591\u616e\u6bd4\u8f03\u4f4e\uff0c\u6703\u76f4\u63a5\u5c0d Server \u767c\u9001\u8acb\u6c42"),(0,l.kt)("br",null),(0,l.kt)("h3",{id:"\u8acb\u6c42\u5167\u5bb9"},"\u8acb\u6c42\u5167\u5bb9"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Method: ",(0,l.kt)("inlineCode",{parentName:"li"},"GET"),", ",(0,l.kt)("inlineCode",{parentName:"li"},"POST"),", ",(0,l.kt)("inlineCode",{parentName:"li"},"HEAD")),(0,l.kt)("li",{parentName:"ul"},"Request header: ",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"Accept")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"Accept Language")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"Content-Language")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"Content-Type"),": ",(0,l.kt)("inlineCode",{parentName:"li"},"application/x-www-form-urlencoded"),", ",(0,l.kt)("inlineCode",{parentName:"li"},"multipart/form-data"),", ",(0,l.kt)("inlineCode",{parentName:"li"},"text/plain"))))),(0,l.kt)("h2",{id:"\u4e00\u822c\u8acb\u6c42"},"\u4e00\u822c\u8acb\u6c42"),(0,l.kt)("p",null,"\u5982\u679c\u4e0d\u7b26\u5408\u4e0a\u8ff0\u7c21\u55ae\u8acb\u6c42\u7684\u689d\u4ef6\uff0c\u6703\u5c0d Server \u5148\u767c\u9001 Preflight request \uff0c\u518d\u767c\u9001\u4e00\u822c request"),(0,l.kt)("h3",{id:"preflight-request-\u9810\u6aa2\u8acb\u6c42"},"Preflight Request (\u9810\u6aa2\u8acb\u6c42)"),(0,l.kt)("p",null,"\u6703\u5148\u5c0d Server \u767c\u9001\u9810\u6aa2\u8acb\u6c42\uff0c\u8868\u793a\u6709\u54ea\u4e00\u4e9b HTTP method \u7684 options\uff0c\u6545\u767c\u9001\u7684 request \u70ba HTTP ",(0,l.kt)("inlineCode",{parentName:"p"},"OPTION")," method\uff0c\u7bc4\u4f8b\u5982\u4e0b"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-plaintext"},"OPTIONS /data/\nHost: othersite.com\nOrigin: https://shubo.io\nAccess-Control-Request-Method: POST\nAccess-Control-Request-Headers: X-MY-CUSTOM-HEADER, Content-Type\n")),(0,l.kt)("br",null),(0,l.kt)("br",null),(0,l.kt)("admonition",{title:"\u70ba\u4ec0\u9ebc\u662f\u53eb OPTIONS \u5462\uff1f \u800c\u4e0d\u662f CHECK \u4e4b\u985e\u7684\uff1f",type:"info"},(0,l.kt)("p",{parentName:"admonition"},'HTTP \u65b9\u6cd5\u7684\u547d\u540d\u901a\u5e38\u8207\u5176\u529f\u80fd\u548c\u76ee\u7684\u6709\u95dc\u3002\u5c0d\u65bc "OPTIONS" \u9019\u500b\u540d\u7a31\uff0c\u5176\u80cc\u5f8c\u7684\u539f\u56e0\u53ef\u4ee5\u5f9e\u5169\u500b\u65b9\u9762\u4f86\u7406\u89e3\uff1a'),(0,l.kt)("ol",{parentName:"admonition"},(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("strong",{parentName:"li"},"\u63d0\u4f9b\u9078\u9805\uff08Options\uff09"),"\uff1aOPTIONS \u65b9\u6cd5\u7684\u4e3b\u8981\u76ee\u7684\u662f\u63d0\u4f9b\u95dc\u65bc\u76ee\u6a19\u8cc7\u6e90\u53ef\u7528\u7684\u901a\u4fe1\u9078\u9805\u3002\u63db\u53e5\u8a71\u8aaa\uff0c\u5b83\u544a\u8a34\u5ba2\u6236\u7aef\u53ef\u4ee5\u5c0d\u7279\u5b9a\u8cc7\u6e90\u9032\u884c\u54ea\u4e9b\u64cd\u4f5c\uff0c\u9019\u4e9b\u64cd\u4f5c\u5c31\u662f\u5ba2\u6236\u7aef\u7684\u201c\u9078\u9805\u201d\u3002\u6240\u4ee5\uff0c\u5f9e\u9019\u500b\u89d2\u5ea6\u4f86\u770b\uff0c\u201cOPTIONS\u201d\u9019\u500b\u540d\u7a31\u53cd\u6620\u4e86\u9019\u500b\u65b9\u6cd5\u7684\u6838\u5fc3\u529f\u80fd\uff0c\u5373\u63d0\u4f9b\u6709\u95dc\u8cc7\u6e90\u7684\u53ef\u7528\u65b9\u6cd5\u548c\u9650\u5236\u7684\u4fe1\u606f"))),(0,l.kt)("br",null),(0,l.kt)("br",null),(0,l.kt)("h3",{id:"example--js-post-fetch"},"example:  js POST fetch"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-javascript"},"fetch('https://othersite.com/data/', {\n  method: 'POST',\n  headers: {\n    'Content-Type': 'application/json', // \u975e\u7c21\u55ae\u8acb\u6c42\n    'X-CUSTOM-HEADER': '123'\n  }\n})\n")),(0,l.kt)("h4",{id:"preflight-request"},"Preflight request"),(0,l.kt)("p",null,"\u50b3\u9001"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"OPTIONS")," method: \u8ddf Server \u8aaa\u6211\u60f3\u8981\u78ba\u8a8d\u54ea\u4e9b method \u5728\u6b64 domain \u4e0b\u53ef\u4ee5\u7528"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"Host"),": Client \u7684 host"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"Origin"),": Client \u7684 domain"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"Access-Control-Request-Method"),": Client \u8981\u5141\u8a31\u7684 method"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"Access-Control-Request-Headers"),": Client \u8981\u5141\u8a31\u7684 headers")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-plaintext"},"```plaintext\nOPTIONS /data/\nHost: othersite.com\nOrigin: https://shubo.io\nAccess-Control-Request-Method: POST\nAccess-Control-Request-Headers: X-MY-CUSTOM-HEADER, Content-Type\n")),(0,l.kt)("br",null),(0,l.kt)("h4",{id:"preflight-response"},"Preflight response"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"Access-Control-Allow-Methods"),": Server \u5141\u8a31\u7684 HTTP \u65b9\u6cd5\u3002"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"Access-Control-Allow-Headers"),": Server \u5141\u8a31\u7684\u975e\u300c\u7c21\u55ae\u300dheader\u3002")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-plaintext"},"Access-Control-Allow-Methods: POST\nAccess-Control-Allow-Headers: X-MY-CUSTOM-HEADER, Content-Type\n")),(0,l.kt)("br",null),(0,l.kt)("h4",{id:"\u4e00\u822c-request--response"},"\u4e00\u822c Request & Response"),(0,l.kt)("p",null,"request:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-plaintext"},"POST /data/\nHost: othersite.com\nOrigin: https://shubo.io\nContent-Type: application/json\nX-MY-CUSTOM-HEADER: 123\n")),(0,l.kt)("br",null),(0,l.kt)("p",null,"response:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-plaintext"},"Access-Control-Allow-Origin: https://shubo.io\n")),(0,l.kt)("br",null),(0,l.kt)("br",null),(0,l.kt)("h2",{id:"\u7d50\u8ad6"},"\u7d50\u8ad6"),(0,l.kt)("ol",null,(0,l.kt)("li",{parentName:"ol"},"\u6709\u4e86 CORS\uff0c\u5c31\u53ef\u4ee5\u963b\u64cb CSRF\uff0c\u907f\u514d hacker \u4f7f\u7528 client cookie \u53d6\u5f97 client \u76f8\u95dc\u8cc7\u8a0a\u6216\u66f4\u6539 client \u76f8\u95dc\u8cc7\u8a0a"),(0,l.kt)("li",{parentName:"ol"},"\u5373\u4fbf\u6709\u4e86 CORS\uff0c\u9084\u662f\u6703\u8ddf Server \u8acb\u6c42\u6210\u529f\uff0c\u53ea\u662f\u7c21\u55ae\u8acb\u6c42\u7684\u8a71\uff0cresponse \u6703\u88ab browser \u963b\u64cb\uff0c\u4e00\u822c request \u7684\u8a71\uff0c\u5982\u679c preflight response fail \u4e86\uff0c\u624d\u6703\u963b\u64cb\u63a5\u4e0b\u4f86\u7684\u8acb\u6c42")),(0,l.kt)("br",null),(0,l.kt)("br",null),(0,l.kt)("br",null),(0,l.kt)("h3",{id:"\u53c3\u8003\u8cc7\u6e90"},"\u53c3\u8003\u8cc7\u6e90"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://www.shubo.io/what-is-cors/"},"[\u6559\u5b78] \u6df1\u5165\u4e86\u89e3 CORS (\u8de8\u4f86\u6e90\u8cc7\u6e90\u5171\u7528): \u5982\u4f55\u6b63\u78ba\u8a2d\u5b9a CORS\uff1f - Shubo \u7684\u7a0b\u5f0f\u958b\u767c\u7b46\u8a18")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://www.explainthis.io/zh-hant/swe/what-is-cors"},"CORS \u662f\u4ec0\u9ebc? \u70ba\u4ec0\u9ebc\u8981\u6709 CORS? \uff5cExplainThis")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://juejin.cn/post/6983852288091619342"},"\u9762\u8bd5\u5b98\u95ee\u6211CORS\u8de8\u57df\uff0c\u6211\u76f4\u63a5\u4e00\u5957\u64cd\u4f5c\u65a9\u6740\uff01 - \u6398\u91d1 (juejin.cn)")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://tech-blog.cymetrics.io/posts/jo/zerobased-cross-site-request-forgery/"},"\u96f6\u57fa\u790e\u8cc7\u5b89\u7cfb\u5217\uff08\u4e00\uff09-\u8a8d\u8b58 CSRF\uff08Cross Site Request Forgery\uff09 (cymetrics.io)")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://cloud.tencent.com/developer/article/2132990"},"\u4f60\u662f\u600e\u6837\u89e3\u51b3\u8de8\u57df\u95ee\u9898\u7684?-\u9762\u8bd5\u5fc5\u95ee-\u817e\u8baf\u4e91\u5f00\u53d1\u8005\u793e\u533a-\u817e\u8baf\u4e91 (tencent.com)")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://www.shotcat.com/%E5%89%8D%E7%AB%AF%E9%9D%A2%E8%AF%95%E6%9F%A5%E6%BC%8F%E8%A1%A5%E7%BC%BA-%E4%B8%89-%E8%B7%A8%E5%9F%9F%E5%8F%8A%E5%B8%B8%E8%A7%81%E8%A7%A3%E5%86%B3%E5%8A%9E%E6%B3%95/"},"\u524d\u7aef\u9762\u8bd5\u67e5\u6f0f\u8865\u7f3a\u2013(\u4e09) \u8de8\u57df\u53ca\u5e38\u89c1\u89e3\u51b3\u529e\u6cd5 - \u5c04\u624b\u732b\u7684\u4e2a\u4eba\u535a\u5ba2 (shotcat.com)")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://www.youtube.com/watch?v=4KHiSt0oLJ0&pp=ygUEQ09SUw%3D%3D"},"CORS in 100 Seconds - YouTube"))),(0,l.kt)("br",null),(0,l.kt)("br",null))}m.isMDXComponent=!0}}]);