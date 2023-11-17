"use strict";(self.webpackChunkbenson_doc=self.webpackChunkbenson_doc||[]).push([[1065],{3905:(t,e,n)=>{n.d(e,{Zo:()=>k,kt:()=>d});var l=n(7294);function r(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function a(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);e&&(l=l.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,l)}return n}function i(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?a(Object(n),!0).forEach((function(e){r(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function o(t,e){if(null==t)return{};var n,l,r=function(t,e){if(null==t)return{};var n,l,r={},a=Object.keys(t);for(l=0;l<a.length;l++)n=a[l],e.indexOf(n)>=0||(r[n]=t[n]);return r}(t,e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);for(l=0;l<a.length;l++)n=a[l],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(r[n]=t[n])}return r}var p=l.createContext({}),u=function(t){var e=l.useContext(p),n=e;return t&&(n="function"==typeof t?t(e):i(i({},e),t)),n},k=function(t){var e=u(t.components);return l.createElement(p.Provider,{value:e},t.children)},c="mdxType",s={inlineCode:"code",wrapper:function(t){var e=t.children;return l.createElement(l.Fragment,{},e)}},T=l.forwardRef((function(t,e){var n=t.components,r=t.mdxType,a=t.originalType,p=t.parentName,k=o(t,["components","mdxType","originalType","parentName"]),c=u(n),T=r,d=c["".concat(p,".").concat(T)]||c[T]||s[T]||a;return n?l.createElement(d,i(i({ref:e},k),{},{components:n})):l.createElement(d,i({ref:e},k))}));function d(t,e){var n=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var a=n.length,i=new Array(a);i[0]=T;var o={};for(var p in e)hasOwnProperty.call(e,p)&&(o[p]=e[p]);o.originalType=t,o[c]="string"==typeof t?t:r,i[1]=o;for(var u=2;u<a;u++)i[u]=n[u];return l.createElement.apply(null,i)}return l.createElement.apply(null,n)}T.displayName="MDXCreateElement"},1869:(t,e,n)=>{n.r(e),n.d(e,{assets:()=>p,contentTitle:()=>i,default:()=>s,frontMatter:()=>a,metadata:()=>o,toc:()=>u});var l=n(7462),r=(n(7294),n(3905));const a={sidebar_position:4,sidebar_label:"[HTTP] \u7c21\u55ae\u6613\u7528\u7684 HTTP/0.9 ~ HTTP/1.1",title:"[HTTP] \u7c21\u55ae\u6613\u7528\u7684 HTTP/0.9 ~ HTTP/1.1",tags:["HTTP","Network"]},i=void 0,o={unversionedId:"Network/http-history-1-http-1",id:"Network/http-history-1-http-1",title:"[HTTP] \u7c21\u55ae\u6613\u7528\u7684 HTTP/0.9 ~ HTTP/1.1",description:"HTTP \u767c\u5c55\u53f2\u7c21\u4ecb",source:"@site/docs/Network/http-history-1-http-1.mdx",sourceDirName:"Network",slug:"/Network/http-history-1-http-1",permalink:"/docs/Network/http-history-1-http-1",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/Network/http-history-1-http-1.mdx",tags:[{label:"HTTP",permalink:"/docs/tags/http"},{label:"Network",permalink:"/docs/tags/network"}],version:"current",lastUpdatedAt:1700207877,formattedLastUpdatedAt:"Nov 17, 2023",sidebarPosition:4,frontMatter:{sidebar_position:4,sidebar_label:"[HTTP] \u7c21\u55ae\u6613\u7528\u7684 HTTP/0.9 ~ HTTP/1.1",title:"[HTTP] \u7c21\u55ae\u6613\u7528\u7684 HTTP/0.9 ~ HTTP/1.1",tags:["HTTP","Network"]},sidebar:"tutorialSidebar",previous:{title:"[TCP] 4. TCP connection \u6c92\u6709\u4f60\u60f3\u50cf\u7684\u7c21\u55ae\uff01 \u7d30\u8ac7\u5927\u91cf TCP \u9023\u7d50\u7684\u6548\u80fd\u554f\u984c\u548c\u8cc7\u5b89\u554f\u984c",permalink:"/docs/Network/tcp-4-performance-and-security"},next:{title:"[HTTPS] 1.1 - Sniffing attack (\u55c5\u63a2\u653b\u64ca)",permalink:"/docs/Network/https-1-sniffing-attack"}},p={},u=[{value:"HTTP \u767c\u5c55\u53f2\u7c21\u4ecb",id:"http-\u767c\u5c55\u53f2\u7c21\u4ecb",level:2},{value:"HTTP 0.9: \u6700\u7c21\u55ae\u7684\u55ae\u884c\u5354\u5b9a (One-Line protocol)",id:"http-09-\u6700\u7c21\u55ae\u7684\u55ae\u884c\u5354\u5b9a-one-line-protocol",level:2},{value:"HTTP 1.0: \u7db2\u8def\u98db\u5feb\u6210\u9577\u7684\u5e74\u4ee3",id:"http-10-\u7db2\u8def\u98db\u5feb\u6210\u9577\u7684\u5e74\u4ee3",level:2},{value:"Cache \u90e8\u5206",id:"cache-\u90e8\u5206",level:3},{value:"Authorization \u6b0a\u9650\u8a2d\u5b9a\u90e8\u5206",id:"authorization-\u6b0a\u9650\u8a2d\u5b9a\u90e8\u5206",level:3},{value:"HTTP 1.1: \u6a19\u6e96\u7684\u7db2\u8def\u5354\u5b9a",id:"http-11-\u6a19\u6e96\u7684\u7db2\u8def\u5354\u5b9a",level:2},{value:"\u64f4\u5c55\u7684 Authorization \u6a5f\u5236",id:"\u64f4\u5c55\u7684-authorization-\u6a5f\u5236",level:3},{value:"\u64f4\u5c55\u7684 Caching \u6a5f\u5236",id:"\u64f4\u5c55\u7684-caching-\u6a5f\u5236",level:3},{value:"TCP Keep-Alive",id:"tcp-keep-alive",level:3},{value:"Request Pipelining",id:"request-pipelining",level:3},{value:"\u7d50\u8ad6",id:"\u7d50\u8ad6",level:2},{value:"\u53c3\u8003\u8cc7\u6e90",id:"\u53c3\u8003\u8cc7\u6e90",level:3}],k={toc:u},c="wrapper";function s(t){let{components:e,...n}=t;return(0,r.kt)(c,(0,l.Z)({},k,n,{components:e,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"http-\u767c\u5c55\u53f2\u7c21\u4ecb"},"HTTP \u767c\u5c55\u53f2\u7c21\u4ecb"),(0,r.kt)("p",null,"\u4eca\u5929\u53c8\u662f\u65b0\u7684\u7db2\u8def\u5e38\u8b58\u4e3b\u984c\uff1a ",(0,r.kt)("strong",{parentName:"p"},"HTTP"),"\uff0c\u6211\u6703\u5c31\u6211\u6240\u77e5\u9053\u7684\u4f86\u4ecb\u7d39 HTTP \u7684\u767c\u5c55\u53f2\uff0c\u4e3b\u8981\u4ecb\u7d39 HTTP 0.9 ~ HTTP 3.0 \u7684\u6642\u7a7a\u80cc\u666f\uff0c\u6bcf\u500b\u7248\u672c\u767c\u5c55\u7684\u539f\u56e0\uff0c\u548c\u5176\u7a76\u7adf\u5e36\u4f86\u4e86\u4ec0\u9ebc\u6539\u8b8a"),(0,r.kt)("br",null),(0,r.kt)("p",null,"\u5f9e\u5927\u65b9\u5411\u4f86\u770b\uff0cHTTP \u4e3b\u8981\u7d93\u6b77\u904e\u4e86\u5e7e\u6b21\u5927\u8b8a\u66f4\uff1a"),(0,r.kt)("table",null,(0,r.kt)("thead",null,(0,r.kt)("tr",null,(0,r.kt)("th",{align:"center"},"\u7248\u672c"),(0,r.kt)("th",null,"\u76ee\u7684"))),(0,r.kt)("tbody",null,(0,r.kt)("tr",null,(0,r.kt)("td",{align:"center"},"HTTP 0.9 ~ HTTP 1.1"),(0,r.kt)("td",null,(0,r.kt)("b",null,"\u7c21\u55ae\u6613\u7528\u7684\u7db2\u8def\u5354\u5b9a"),(0,r.kt)("br",null),"\u4e3b\u8981\u662f\u70ba\u4e86\u4f7f HTTP \u5354\u5b9a\u80fd\u5feb\u901f\u666e\u53ca")),(0,r.kt)("tr",null,(0,r.kt)("td",{align:"center"},"HTTP 2.0"),(0,r.kt)("td",null,(0,r.kt)("b",null,"\u6539\u5584\u61c9\u7528\u5c64\u7684\u6548\u80fd"),(0,r.kt)("br",null),"\u4e3b\u8981\u662f\u6539\u5584 HTTP head of blocking \u9020\u6210\u7684\u6548\u80fd\u554f\u984c\uff0c\u8b93\u6211\u5011\u53ef\u4ee5\u540c\u6642\u767c\u9001\u591a\u500b HTTP request")),(0,r.kt)("tr",null,(0,r.kt)("td",{align:"center"},"HTTP 3.0"),(0,r.kt)("td",null,(0,r.kt)("b",null,"\u6539\u5584\u50b3\u8f38\u5c64\u7684\u6548\u80fd"),(0,r.kt)("br",null),"\u4e3b\u8981\u662f\u6539\u5584 TCP head of blocking \u9020\u6210\u7684\u6548\u80fd\u554f\u984c\uff0c\u8b93\u6211\u5011\u53ef\u4ee5\u5feb\u901f\u5207\u63db\u4e0d\u540c\u7684\u7db2\u8def\uff0c\u800c\u4e0d\u6703\u9020\u6210\u5361\u9813")))),(0,r.kt)("br",null),(0,r.kt)("br",null),(0,r.kt)("p",null,"\u4ee5\u4e0b\u662f HTTP \u7248\u672c\u7684\u7c21\u4ecb\u8868\u683c:"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"center"},"\u7248\u672c"),(0,r.kt)("th",{parentName:"tr",align:"center"},"\u5f15\u5165\u5e74\u4efd"),(0,r.kt)("th",{parentName:"tr",align:"center"},"\u73fe\u5728\u72c0\u614b"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"center"},"HTTP/0.9"),(0,r.kt)("td",{parentName:"tr",align:"center"},"1991"),(0,r.kt)("td",{parentName:"tr",align:"center"},"\u274c \u68c4\u7528")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"center"},"HTTP/1.0"),(0,r.kt)("td",{parentName:"tr",align:"center"},"1996"),(0,r.kt)("td",{parentName:"tr",align:"center"},"\u274c \u68c4\u7528")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"center"},"HTTP/1.1"),(0,r.kt)("td",{parentName:"tr",align:"center"},"1997"),(0,r.kt)("td",{parentName:"tr",align:"center"},"\u2705 \u6a19\u6e96")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"center"},"HTTP/2"),(0,r.kt)("td",{parentName:"tr",align:"center"},"2015"),(0,r.kt)("td",{parentName:"tr",align:"center"},"\u2705 \u6a19\u6e96")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"center"},"HTTP/3"),(0,r.kt)("td",{parentName:"tr",align:"center"},"2022"),(0,r.kt)("td",{parentName:"tr",align:"center"},"\u2705 \u6a19\u6e96")))),(0,r.kt)("p",null,"(\u8cc7\u6599\u4f86\u6e90\uff1a ",(0,r.kt)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/HTTP#History"},"https://en.wikipedia.org/wiki/HTTP#History")," )"),(0,r.kt)("br",null),(0,r.kt)("br",null),(0,r.kt)("p",null,"\u63a5\u8005\uff0c\u4eca\u5929\u6703\u4ecb\u7d39 HTTP 0.9 ~ HTTP 1.1 \u7684\u767c\u5c55\u53f2"),(0,r.kt)("br",null),(0,r.kt)("h2",{id:"http-09-\u6700\u7c21\u55ae\u7684\u55ae\u884c\u5354\u5b9a-one-line-protocol"},"HTTP 0.9: \u6700\u7c21\u55ae\u7684\u55ae\u884c\u5354\u5b9a (One-Line protocol)"),(0,r.kt)("p",null,"1989 \u5e74\uff0c\u300c\u842c\u7dad\u7db2\u4e4b\u7236\u300dTim Berners-Lee \u63d0\u51fa\u4e86 World Wide Web \u7684\u6982\u5ff5\uff0c\uff0c\u4e26\u5728 1990 \u5e74\u958b\u767c\u4e86 HTTP \u5354\u8b70\u548c HTML \u8a9e\u8a00\u3002\u842c\u7dad\u7db2\u7684\u767c\u660e\u5fb9\u5e95\u6539\u8b8a\u4e86\u4eba\u5011\u7372\u53d6\u4fe1\u606f\u7684\u65b9\u5f0f\uff0c\u4f7f\u4fe1\u606f\u7684\u50b3\u64ad\u8b8a\u5f97\u66f4\u52a0\u5feb\u901f\u548c\u4fbf\u6377\uff0c\u4e26\u5728 1991 \u5e74\u6b63\u5f0f\u516c\u4f48 HTTP 0.9"),(0,r.kt)("p",null,"\u6b64\u6642 HTTP \u7684\u7248\u672c\u6b63\u662f 0.9\uff0c\u53ea\u5177\u6709\u4ee5\u4e0b\u529f\u80fd"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"$> telnet google.com 80\n\nConnected to 74.125.xxx.xxx\n\nGET /about/\n\n(hypertext response)\n(connection closed)\n")),(0,r.kt)("br",null),(0,r.kt)("p",null,"\u6b64\u6642\u5019\u80fd\u505a\u7684\u53ea\u6709"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Client \u53ea\u80fd\u9001\u51fa ",(0,r.kt)("inlineCode",{parentName:"li"},"GET")," method\uff0c\u8ddf\u8981\u53d6\u5f97\u7684\u8def\u5f91\u8cc7\u6e90"),(0,r.kt)("li",{parentName:"ul"},"Server \u53ea\u80fd\u56de\u50b3 HTML response")),(0,r.kt)("p",null,"\u6c92\u6709\u4efb\u4f55\u7684 HTTP header"),(0,r.kt)("br",null),(0,r.kt)("h2",{id:"http-10-\u7db2\u8def\u98db\u5feb\u6210\u9577\u7684\u5e74\u4ee3"},"HTTP 1.0: \u7db2\u8def\u98db\u5feb\u6210\u9577\u7684\u5e74\u4ee3"),(0,r.kt)("br",null),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},(0,r.kt)("strong",{parentName:"p"},"HTTP/1.0 \u4e3b\u8981\u89e3\u6c7a\u4e86\u7db2\u8def\u98db\u5feb\u6210\u9577\u7684\u5e74\u4ee3\uff0c\u9700\u8981\u66f4\u591a\u7684\u529f\u80fd\u9762\u5c0d\u4e0d\u540c\u7684\u9700\u6c42"))),(0,r.kt)("br",null),(0,r.kt)("p",null,"\u5f9e 1991 \u5e74\u5230 1995 \u5e74\u662f HTML \u898f\u7bc4\u7684\u5feb\u901f\u5171\u540c\u6f14\u5316\u6642\u671f\uff0c\u4e00\u7a2e\u88ab\u7a31\u70ba\u300c\u7db2\u9801\u700f\u89bd\u5668\u300d\u7684\u65b0\u578b\u8edf\u9ad4\u7684\u51fa\u73fe\uff0c\u4ee5\u53ca\u9762\u5411\u6d88\u8cbb\u8005\u7684\u516c\u5171\u4e92\u806f\u7db2\u57fa\u790e\u8a2d\u65bd\u7684\u51fa\u73fe\u548c\u5feb\u901f\u589e\u9577"),(0,r.kt)("p",null,"\u5728\u6b64\u6642\uff0c\u57fa\u65bc\u300c\u842c\u7dad\u7db2\u4e4b\u7236\u300dTim Berner-Lee \u7684\u521d\u59cb\u700f\u89bd\u5668\u539f\u578b\uff0c\u570b\u5bb6\u8d85\u7d1a\u8a08\u7b97\u61c9\u7528\u4e2d\u5fc3\uff08NCSA, National Center of Supercomputing Applications\uff09\u7684\u4e00\u500b\u5718\u968a\u6c7a\u5b9a\u5be6\u65bd\u4ed6\u5011\u81ea\u5df1\u7684\u7248\u672c\u3002\u65bc\u662f\uff0c",(0,r.kt)("strong",{parentName:"p"},"\u7b2c\u4e00\u500b\u6d41\u884c\u7684\u700f\u89bd\u5668\u8a95\u751f\u4e86\uff1aNCSA Mosaic"),"\u3002NCSA \u5718\u968a\u7684\u4e00\u4f4d\u7a0b\u5e8f\u54e1 Marc Andreessen \u8207 Jim Clark \u65bc 1994 \u5e74 10 \u6708\u5408\u4f5c\u5275\u7acb\u4e86 Mosaic Communications\u3002",(0,r.kt)("strong",{parentName:"p"},"\u8a72\u516c\u53f8\u5f8c\u4f86\u6539\u540d\u70ba Netscape"),"\uff0c\u4e26\u65bc 1994 \u5e74 12 \u6708\u63a8\u51fa\u4e86 Netscape Navigator 1.0"),(0,r.kt)("p",null,"\u96a8\u8457\u958b\u59cb\u5411\u5927\u773e\u666e\u53ca\uff0c\u4ee5\u53ca\u5404\u985e\u9700\u6c42\u98db\u589e\uff0c\u5f88\u5feb\u66b4\u9732\u4e86 HTTP 0.9 \u7684\u8a31\u591a\u57fa\u672c\u9650\u5236\uff1a\u6211\u5011\u9700\u8981\u4e00\u500b\u529f\u80fd\u66f4\u8c50\u5bcc\u7684\u5354\u5b9a\uff0c\u4e0d\u50c5\u53ef\u4ee5\u63d0\u4f9b HTML\uff0c\u9084\u80fd\u63d0\u4f9b\u6709\u95dc\u8acb\u6c42\u548c\u56de\u61c9\u7684\u66f4\u8c50\u5bcc\u7684 metadata\uff0c\u5be6\u73fe\u5167\u5bb9\u5354\u5546\u7b49\u529f\u80fd\uff0c\u4e26\u5728 1996 \u5e74\u6b63\u5f0f\u516c\u4f48 HTTP 1.0"),(0,r.kt)("br",null),(0,r.kt)("p",null,"\u6b64\u6642 HTTP 1.0 \u7684\u7bc4\u672c\u5982\u4e0b\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"$> telnet website.org 80\n\nConnected to xxx.xxx.xxx.xxx\n\n# Request\nGET /rfc/rfc1945.txt HTTP/1.0  (1)\nUser-Agent: CERN-LineMode/2.15 libwww/2.17b3\nAccept: */*\n\n# Response\nHTTP/1.0 200 OK  (2)\nContent-Type: text/plain (3)\nContent-Length: 137582\nExpires: Thu, 01 Dec 1997 16:00:00 GMT (4)\nLast-Modified: Wed, 1 May 1996 12:45:26 GMT (4)\nServer: Apache 0.84\n\n(plain-text response)\n(connection closed)\n")),(0,r.kt)("br",null),(0,r.kt)("p",null,"\u6b64\u6642\uff0c\u6211\u5011\u591a\u4e86\u4ee5\u4e0b\u529f\u80fd\uff1a"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"\u66f4\u591a\u7684 HTTP method\uff1a",(0,r.kt)("inlineCode",{parentName:"li"},"POST"),", ",(0,r.kt)("inlineCode",{parentName:"li"},"HEAD")),(0,r.kt)("li",{parentName:"ul"},"\u63d0\u4f9b\u4f7f\u7528\u7684 HTTP version (1)"),(0,r.kt)("li",{parentName:"ul"},"\u63d0\u4f9b response status (2)"),(0,r.kt)("li",{parentName:"ul"},"\u53ef\u4ee5\u767c\u9001\u4e0d\u540c\u7a2e\u985e\u7684\u5167\u6587\uff0c\u5305\u62ec HTML file, plain text file, image, \u9084\u6709\u5176\u4ed6\u5167\u6587\u985e\u578b."),(0,r.kt)("li",{parentName:"ul"},"\u591a\u884c\u7684 HTTP content\uff0c\u5305\u62ec\uff1a",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Cache related (4)"),(0,r.kt)("li",{parentName:"ul"},"Authorization"))),(0,r.kt)("li",{parentName:"ul"},"Connection: keep-alive \u652f\u6301\u9577\u9023\u63a5\uff0c\u4f46\u975e\u6a19\u6e96")),(0,r.kt)("p",null,"\u5df2\u7d93\u7b97\u662f\u5177\u6709\u975e\u5e38\u591a\u529f\u80fd\u7684\u5354\u5b9a\u4e86\uff0c\u9084\u5305\u542b\u4ee5\u4e0b\u4e00\u4e9b\u5e38\u7528\u5230\u7684\u529f\u80fd"),(0,r.kt)("br",null),(0,r.kt)("h3",{id:"cache-\u90e8\u5206"},"Cache \u90e8\u5206"),(0,r.kt)("p",null,"HTTP 1.0 \u7684\u7de9\u5b58\u63a7\u5236\u6a5f\u5236\u4e3b\u8981\u4f9d\u9760 ",(0,r.kt)("inlineCode",{parentName:"p"},"Last-Modified")," \u548c ",(0,r.kt)("inlineCode",{parentName:"p"},"Expires")," \u9019\u5169\u500b header \u4f86\u63a7\u5236\u8cc7\u6e90\u7684\u7de9\u5b58"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"strong"},"Last-Modified")),"\uff1a\u8868\u793a\u8cc7\u6e90\u7684\u6700\u5f8c\u4fee\u6539\u6642\u9593"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"strong"},"Expires")),"\uff1a\u8868\u793a\u8cc7\u6e90\u7684\u904e\u671f\u6642\u9593")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"\u4e3b\u8981\u662f\u5229\u7528\u6642\u9593\u4f86\u63a7\u5236 cache \u7684\u5b58\u53d6"),"\n(\u95dc\u65bc HTTP cache \u7684\u90e8\u5206\uff0c\u5f8c\u9762\u6703\u518d\u8a73\u7d30\u4ecb\u7d39)"),(0,r.kt)("br",null),(0,r.kt)("h3",{id:"authorization-\u6b0a\u9650\u8a2d\u5b9a\u90e8\u5206"},"Authorization \u6b0a\u9650\u8a2d\u5b9a\u90e8\u5206"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-html"},"Authorization: <username>:<password>\n")),(0,r.kt)("br",null),(0,r.kt)("p",null,"\u5176\u4e2d\uff0cusername \u8868\u793a\u7528\u6236\u540d\uff0cpassword \u8868\u793a\u5bc6\u78bc\uff0c\u4f8b\u5982\uff0c\u4ee5\u4e0b\u662f HTTP 1.0 \u4e2d Authorization header \u7684\u793a\u4f8b\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-html"},"Authorization: benson_chen:benson123456\n")),(0,r.kt)("br",null),(0,r.kt)("p",null,"HTTP 1.0 \u7684 Authorization header \u5b58\u5728\u4ee5\u4e0b\u7f3a\u9ede\uff1a"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"\u5b89\u5168\u6027\u4e0d\u9ad8\uff1a\u7528\u6236\u540d\u548c\u5bc6\u78bc\u660e\u6587\u50b3\u8f38\uff0c\u5bb9\u6613\u88ab\u622a\u7372"),(0,r.kt)("li",{parentName:"ul"},"\u4e0d\u9748\u6d3b\uff1a\u53ea\u80fd\u4f7f\u7528 Basic \u65b9\u5f0f\u9032\u884c\u6388\u6b0a")),(0,r.kt)("p",null,"\u6b64\u6642\u7684 Authorization \u529f\u80fd\u9084\u662f\u7b97\u7c21\u964b\uff0c\u4e5f\u5f88\u5bb9\u6613\u88ab\u7aca\u53d6\uff0c\u8ddf\u6211\u5011\u73fe\u5728\u7684\u4f7f\u7528\u60c5\u5883\u9084\u6709\u4e00\u6bb5\u8ddd\u96e2"),(0,r.kt)("br",null),(0,r.kt)("br",null),(0,r.kt)("br",null),(0,r.kt)("p",null,"\u96d6\u7136\u5df2\u7d93\u6709\u9019\u9ebc\u8c50\u5bcc\u7684\u529f\u80fd\uff0c",(0,r.kt)("strong",{parentName:"p"},"\u4f46\u662f HTTP 1.0 \u5176\u5be6\u9084\u4e0d\u662f\u500b\u6b63\u5f0f\u7684\u7db2\u8def\u6a19\u6e96\u5354\u5b9a"),"\uff08\u8a73\u898b ",(0,r.kt)("a",{parentName:"p",href:"https://www.rfc-editor.org/rfc/rfc1945#:~:text=RFC%201945%20HTTP%2F1,HTTP%2F1.0"},"RFC 1945"),")"),(0,r.kt)("br",null),(0,r.kt)("p",null,"\u56e0\u6b64\uff0c\u5236\u5b9a HTTP \u5354\u8b70\u76f8\u95dc\u7684\u7d44\u7e54\u4ecd\u5728\u81f4\u529b\u65bc\u5236\u5b9a\u7db2\u8def\u7684\u6a19\u6e96\u5354\u5b9a\uff0c\u7d93\u904e\u4e86 4 \u5e74\u7684\u52aa\u529b\u5f8c\uff0c\u624d\u8a95\u751f\u51fa\u4e86\u7b2c\u4e00\u500b\u6a19\u6e96\u7684\u7db2\u8def\u5354\u5b9a\uff1aHTTP 1.1"),(0,r.kt)("br",null),(0,r.kt)("br",null),(0,r.kt)("h2",{id:"http-11-\u6a19\u6e96\u7684\u7db2\u8def\u5354\u5b9a"},"HTTP 1.1: \u6a19\u6e96\u7684\u7db2\u8def\u5354\u5b9a"),(0,r.kt)("br",null),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},(0,r.kt)("strong",{parentName:"p"},"HTTP/1.1 \u4e3b\u8981\u5236\u5b9a\u4e86\u7db2\u8def\u50b3\u8f38\u5354\u5b9a\u6a19\u6e96\uff0c\u4e14\u91dd\u5c0d\u6548\u80fd\u9032\u884c\u8af8\u591a\u6539\u826f"))),(0,r.kt)("br",null),(0,r.kt)("p",null,"\u6b64\u6a19\u6e96\u65bc 1997 \u5e74 1 \u6708\u6b63\u5f0f\u767c\u5e03\uff0c\u5927\u7d04\u5728 HTTP/1.0 \u767c\u5e03\u5f8c\u7684\u516d\u500b\u6708\u3002\u7136\u5f8c\uff0c\u5728 1999 \u5e74 6 \u6708\uff0c\u5927\u7d04\u5169\u5e74\u534a\u5f8c\uff0c\u4e00\u4e9b\u6539\u9032\u548c\u66f4\u65b0\u88ab\u7d0d\u5165\u6a19\u6e96\uff0c\u4e26\u4f5c\u70ba RFC 2616 \u767c\u5e03"),(0,r.kt)("p",null,"HTTP/1.1 \u6a19\u6e96\u89e3\u6c7a\u4e86\u65e9\u671f\u7248\u672c\u4e2d\u767c\u73fe\u7684\u8a31\u591a\u5354\u8b70\u6a21\u7cca\u6027\uff0c\u64f4\u5c55\u4e86\u8a31\u591a\u65e2\u6709\u529f\u80fd\uff0c\u4e26\u5f15\u5165\u4e86\u4e00\u4e9b\u95dc\u9375\u7684\u6027\u80fd\u512a\u5316\uff1a"),(0,r.kt)("table",null,(0,r.kt)("thead",null,(0,r.kt)("tr",null,(0,r.kt)("th",{align:"center"},"\u512a\u5316\u9805\u76ee"),(0,r.kt)("th",null,"\u5167\u5bb9"))),(0,r.kt)("tbody",null,(0,r.kt)("tr",null,(0,r.kt)("td",null,"HTTP method"),(0,r.kt)("td",null,"\u64f4\u5c55 ",(0,r.kt)("code",null,"PUT"),", ",(0,r.kt)("code",null,"DELETE"),", ",(0,r.kt)("code",null,"OPTIONS")," HTTP methods")),(0,r.kt)("tr",null,(0,r.kt)("td",null,"HTTP Authorization header"),(0,r.kt)("td",null,"\u65b0\u589e ",(0,r.kt)("code",null,"Authorization")," \u7684 schema\uff0c\u4f7f HTTP \u53ef\u4ee5\u6709\u4e0d\u540c\u985e\u578b\u7684\u5bc6\u78bc")),(0,r.kt)("tr",null,(0,r.kt)("td",null,"\u6548\u80fd\u65b9\u9762"),(0,r.kt)("td",null,(0,r.kt)("ul",null,(0,r.kt)("li",null,"Keep-Alive connections"),(0,r.kt)("li",null,"\u64f4\u5c55 caching \u6a5f\u5236"),(0,r.kt)("li",null,"\u65b0\u589e request pipelining \u6a5f\u5236")))))),(0,r.kt)("br",null),(0,r.kt)("br",null),(0,r.kt)("p",null,"HTTP/1.1 \u7684\u6a23\u672c\u5982\u4e0b\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"$> telnet website.org 80\nConnected to xxx.xxx.xxx.xxx\n\n# Request 1\nGET /index.html HTTP/1.1 \nHost: website.org\nUser-Agent: Mozilla/5.0 (Macintosh; Intel Mac OS X 10_7_4)... (snip)\nAccept: text/html,application/xhtml+xml,application/xml;q=0.9,*/*;q=0.8\nAccept-Encoding: gzip,deflate,sdch\nAccept-Language: en-US,en;q=0.8\nAccept-Charset: ISO-8859-1,utf-8;q=0.7,*;q=0.3\nCookie: __qca=P0-800083390... (snip)\n\n# Response 1\nHTTP/1.1 200 OK \nServer: nginx/1.0.11\nConnection: keep-alive\nContent-Type: text/html; charset=utf-8\nVia: HTTP/1.1 GWA\nDate: Wed, 25 Jul 2012 20:23:35 GMT\nExpires: Wed, 25 Jul 2012 20:23:35 GMT\nCache-Control: max-age=0, no-cache\nTransfer-Encoding: chunked\n\n100 \n<!doctype html>\n(snip)\n\n100\n(snip)\n\n0 \n\n# Request 2\nGET /favicon.ico HTTP/1.1 \nHost: www.website.org\nUser-Agent: Mozilla/5.0 (Macintosh; Intel Mac OS X 10_7_4)... (snip)\nAccept: */*\nReferer: http://website.org/\nConnection: close \nAccept-Encoding: gzip,deflate,sdch\nAccept-Language: en-US,en;q=0.8\nAccept-Charset: ISO-8859-1,utf-8;q=0.7,*;q=0.3\nCookie: __qca=P0-800083390... (snip)\n\n# Response 2\nHTTP/1.1 200 OK \nServer: nginx/1.0.11\nContent-Type: image/x-icon\nContent-Length: 3638\nConnection: close\nLast-Modified: Thu, 19 Jul 2012 17:51:44 GMT\nCache-Control: max-age=315360000\nAccept-Ranges: bytes\nVia: HTTP/1.1 GWA\nDate: Sat, 21 Jul 2012 21:35:22 GMT\nExpires: Thu, 31 Dec 2037 23:55:55 GMT\nEtag: W/PSA-GAu26oXbDi\n\n(icon data)\n(connection closed)\n")),(0,r.kt)("br",null),(0,r.kt)("h3",{id:"\u64f4\u5c55\u7684-authorization-\u6a5f\u5236"},"\u64f4\u5c55\u7684 Authorization \u6a5f\u5236"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"\u589e\u52a0\u4e86 Bearer \u65b9\u5f0f"),"\uff1a",(0,r.kt)("br",null),"\nBearer \u65b9\u5f0f\u662f HTTP 1.1 \u4e2d\u65b0\u589e\u7684\u4e00\u7a2e\u6388\u6b0a\u65b9\u5f0f\uff0c\u5b83\u4f7f\u7528\u4ee4\u724c\u4f86\u4ee3\u66ff\u7528\u6236\u540d\u548c\u5bc6\u78bc\u3002Bearer \u65b9\u5f0f\u66f4\u52a0\u5b89\u5168\u548c\u65b9\u4fbf\uff0c\u56e0\u6b64\u5728 HTTP 1.1 \u4e2d\u88ab\u5ee3\u6cdb\u4f7f\u7528")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"\u589e\u52a0\u4e86 Digest \u65b9\u5f0f"),"\uff1a",(0,r.kt)("br",null),"\nDigest \u65b9\u5f0f\u662f HTTP 1.1 \u4e2d\u65b0\u589e\u7684\u4e00\u7a2e\u6388\u6b0a\u65b9\u5f0f\uff0c\u5b83\u4f7f\u7528\u54c8\u5e0c\u7b97\u6cd5\u4f86\u9a57\u8b49\u7528\u6236\u540d\u548c\u5bc6\u78bc\u3002Digest \u65b9\u5f0f\u66f4\u52a0\u5b89\u5168\uff0c\u56e0\u6b64\u5728\u4e00\u4e9b\u5b89\u5168\u654f\u611f\u7684\u61c9\u7528\u4e2d\u88ab\u4f7f\u7528")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"\u589e\u52a0\u4e86 Authorization header \u7684\u683c\u5f0f\u6821\u9a57"),"\uff1a",(0,r.kt)("br",null),"\nHTTP 1.1 \u5c0d Authorization header \u7684\u683c\u5f0f\u9032\u884c\u4e86\u6821\u9a57\uff0c\u4ee5\u9632\u6b62\u932f\u8aa4\u7684\u6388\u6b0a\u4fe1\u606f"))),(0,r.kt)("br",null),(0,r.kt)("p",null,"\u5177\u9ad4\u4f86\u8aaa\uff0cHTTP 1.1 \u4e2d Authorization header \u7684\u683c\u5f0f\u5982\u4e0b\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-html"},"Authorization: <scheme> <credentials>\n")),(0,r.kt)("p",null,"\u5176\u4e2d\uff0cscheme \u8868\u793a\u6388\u6b0a\u65b9\u5f0f\uff0ccredentials \u8868\u793a\u6388\u6b0a\u4fe1\u606f"),(0,r.kt)("br",null),(0,r.kt)("br",null),(0,r.kt)("h3",{id:"\u64f4\u5c55\u7684-caching-\u6a5f\u5236"},"\u64f4\u5c55\u7684 Caching \u6a5f\u5236"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"\u589e\u52a0\u4e86 ",(0,r.kt)("inlineCode",{parentName:"strong"},"Etag")," \u982d\u90e8"),"\uff1a",(0,r.kt)("br",null),(0,r.kt)("inlineCode",{parentName:"li"},"Etag")," \u982d\u90e8\u662f\u8cc7\u6e90\u7684\u552f\u4e00\u6a19\u8b58\u7b26\uff0c\u53ef\u4ee5\u7528\u4f86\u4ee3\u66ff ",(0,r.kt)("inlineCode",{parentName:"li"},"Last-Modified")," \u982d\u90e8\u3002",(0,r.kt)("inlineCode",{parentName:"li"},"Etag")," \u982d\u90e8\u53ef\u4ee5\u6709\u6548\u9632\u6b62\u8cc7\u6e90\u88ab\u8aa4\u5224\u70ba\u904e\u671f\u3002",(0,r.kt)("br",null),(0,r.kt)("br",null)),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"\u5f15\u5165\u4e86 ",(0,r.kt)("inlineCode",{parentName:"strong"},"Cache-Control")," \u982d\u90e8"),"\uff1a",(0,r.kt)("br",null),(0,r.kt)("inlineCode",{parentName:"li"},"Cache-Control")," \u982d\u90e8\u53ef\u4ee5\u7528\u4f86\u6307\u5b9a\u8cc7\u6e90\u7684\u7de9\u5b58\u7b56\u7565\uff0c\u4f8b\u5982\u662f\u5426\u53ef\u4ee5\u7de9\u5b58\u3001\u7de9\u5b58\u7684\u6642\u9593\u7b49\u3002",(0,r.kt)("inlineCode",{parentName:"li"},"Cache-Control")," \u982d\u90e8\u53ef\u4ee5\u8b93\u5ba2\u6236\u7aef\u548c\u670d\u52d9\u5668\u66f4\u52a0\u9748\u6d3b\u5730\u63a7\u5236\u8cc7\u6e90\u7684\u7de9\u5b58\u3002",(0,r.kt)("br",null),(0,r.kt)("br",null)),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"\u5f15\u5165\u4e86 ",(0,r.kt)("inlineCode",{parentName:"strong"},"Vary")," \u982d\u90e8"),"\uff1a",(0,r.kt)("br",null),(0,r.kt)("inlineCode",{parentName:"li"},"Vary")," \u982d\u90e8\u53ef\u4ee5\u7528\u4f86\u6307\u5b9a\u5f71\u97ff\u8cc7\u6e90\u7de9\u5b58\u7684\u56e0\u7d20\uff0c\u4f8b\u5982\u5ba2\u6236\u7aef\u7684 IP \u5730\u5740\u3001Cookie \u7b49\u3002",(0,r.kt)("inlineCode",{parentName:"li"},"Vary")," \u982d\u90e8\u53ef\u4ee5\u9632\u6b62\u8cc7\u6e90\u88ab\u7de9\u5b58\u5230\u5ba2\u6236\u7aef\u7684\u672c\u5730\uff0c\u5f9e\u800c\u63d0\u9ad8\u8cc7\u6e90\u7684\u5b89\u5168\u6027",(0,r.kt)("br",null))),(0,r.kt)("br",null),(0,r.kt)("br",null),(0,r.kt)("h3",{id:"tcp-keep-alive"},"TCP Keep-Alive"),(0,r.kt)("figure",null,(0,r.kt)("img",{width:"500",src:"https://ithelp.ithome.com.tw/upload/images/20231010/20148944qMKFN7tTwL.png"})),(0,r.kt)("br",null),(0,r.kt)("p",null,"\u5728\u4e4b\u524d\u63d0\u5230\u7684 TCP connection \u4e2d\uff0c\u6bcf\u4e00\u6b21\u7684\u5efa\u7acb TCP \u9023\u7d50\u90fd\u9700\u8981\u7d93\u904e\u4e09\u6b21\u63e1\u624b\u7684\u8907\u96dc\u904e\u7a0b\uff0c\u56e0\u6b64\u6703\u5927\u5927\u589e\u52a0 network request \u6240\u9700\u8981\u7684\u6642\u9593\uff0c\u5728 HTTP/1.1 \u4e2d\uff0c\u6bcf\u6b21\u7684 request \u5df2\u7d93\u90fd\u9810\u8a2d\u70ba\u8b93 TCP Keep-Alive\uff0c\u4f7f\u5f97\u4e0b\u4e00\u6b21\u767c\u9001 request \u6642\uff0c\u4e0d\u9700\u8981\u518d\u91cd\u65b0\u5efa\u7acb\u4e00\u6b21 TCP connection\uff0c\u5927\u5927\u7bc0\u7701 network request \u7684\u6642\u9593"),(0,r.kt)("br",null),(0,r.kt)("h3",{id:"request-pipelining"},"Request Pipelining"),(0,r.kt)("figure",null,(0,r.kt)("img",{width:"500",src:"https://ithelp.ithome.com.tw/upload/images/20231010/20148944APjdXJj7pt.png"})),(0,r.kt)("p",null,"\u5141\u8a31\u540c\u6642\u767c\u51fa\u591a\u500b HTTP request\uff0c\u4e0d\u7528\u7b49\u5f85\u4e0a\u4e00\u500b request \u7684 response"),(0,r.kt)("p",null,"\u96d6\u7136\u7406\u60f3\u5f88\u8c50\u6eff\uff0c\u4f46\u73fe\u5be6\u5f88\u9aa8\u611f\uff0c\u5be6\u969b\u4e0a"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"\u73fe\u5be6\u4e2d Pipelining \u8981\u6b63\u78ba\u5730\u5be6\u73fe\u975e\u5e38\u68d8\u624b\uff0c\u56e0\u70ba proxy \u5f88\u96e3\u6b63\u78ba\u7684\u63a7\u5236 pipelining"),(0,r.kt)("li",{parentName:"ul"},"\u96d6\u7136\u4e0d\u7528\u7b49\u5f85\u4e0a\u4e00\u500b response\uff0c\u4f46 response \u56de\u50b3\u4e00\u5b9a\u8981\u6309\u9806\u5e8f\uff0c\u4f8b\u5982\uff1a")),(0,r.kt)("mermaid",{value:'flowchart TB\nid1["request 1, request 2, request 3"]\nid2["\u2705 response 1, response 2, response 3"]\nid3["\u274c response 1, response 3, response 2"]\nid1 --\x3e id2\nid1 --\x3e id3'}),(0,r.kt)("br",null),(0,r.kt)("br",null),(0,r.kt)("br",null),(0,r.kt)("p",null,"\u5c0e\u81f4 ",(0,r.kt)("strong",{parentName:"p"},"Head of blocking")," \u7684\u554f\u984c\u7522\u751f\uff0c\u56e0\u6b64\u6709\u4e86\u5f8c\u7e8c HTTP/2.0 \u4f86\u9032\u884c\u512a\u5316\uff0c\u8acb\u770b\u4e0b\u4e00\u7bc7\uff5e"),(0,r.kt)("br",null),(0,r.kt)("br",null),(0,r.kt)("h2",{id:"\u7d50\u8ad6"},"\u7d50\u8ad6"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"\u77ad\u89e3 HTTP 0.9 ~ HTTP 1.1 \u7684\u4e3b\u8981\u529f\u80fd\u662f\u70ba\u4e86\u4f7f\u7db2\u969b\u7db2\u8def\u5feb\u901f\u666e\u53ca\uff0c\u8a2d\u8a08\u4e0a\u7c21\u55ae\u6613\u7528\u70ba\u76ee\u7684"),(0,r.kt)("li",{parentName:"ul"},"\u77ad\u89e3 HTTP 0.9 \u53ea\u63d0\u4f9b Client ",(0,r.kt)("inlineCode",{parentName:"li"},"GET")," method\uff0c\u548c Server \u56de\u50b3 HTML response\uff0c\u53ea\u6709\u6700\u7c21\u55ae\u7684\u529f\u80fd"),(0,r.kt)("li",{parentName:"ul"},"\u77ad\u89e3 HTTP 1.0 \u70ba\u4e86\u56e0\u61c9 Web browser \u7684\u8a95\u751f\uff0c\u548c\u7db2\u8def\u7684\u5feb\u901f\u767c\u5c55\uff0c\u591a\u4e86\u8a31\u591a\u529f\u80fd\u56e0\u61c9\u591a\u6a23\u9700\u6c42\uff0c\u4f46\u9084\u4e0d\u662f\u6b63\u5f0f\u7684\u7db2\u8def\u50b3\u8f38\u6a19\u6e96\u5354\u5b9a"),(0,r.kt)("li",{parentName:"ul"},"\u77ad\u89e3 HTTP 1.1 \u5b8c\u5584\u4e86 HTTP 1.0 \u7684\u529f\u80fd\uff0c\u5305\u62ec Authorization, Caching \u7b49\uff0c\u4e26\u505a\u4e86\u8af8\u591a\u6548\u80fd\u512a\u5316\uff0c\u5305\u62ec TCP Keep-Alive, Compressing, Pipelining\uff0c\u4e26\u4e14\u662f\u6b63\u5f0f\u7684\u7db2\u8def\u50b3\u8f38\u6a19\u6e96\u5354\u5b9a")),(0,r.kt)("br",null),(0,r.kt)("br",null),(0,r.kt)("h3",{id:"\u53c3\u8003\u8cc7\u6e90"},"\u53c3\u8003\u8cc7\u6e90"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://hpbn.co/brief-history-of-http/"},"O'Reilly - HTTP: Brief History of HTTP - High Performance Browser Networking (O'Reilly) (hpbn.co)")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://web.dev/performance-http2/#server-push"},"Web.dev - Introduction to HTTP/2")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://www.youtube.com/watch?v=a-sBfyiXysI&t=158s"},"ByteByteGo - HTTP/1 to HTTP/2 to HTTP/3 - YouTube")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://en.wikipedia.org/wiki/HTTP#History"},"Wikipedia - HTTP"))),(0,r.kt)("br",null),(0,r.kt)("br",null))}s.isMDXComponent=!0}}]);