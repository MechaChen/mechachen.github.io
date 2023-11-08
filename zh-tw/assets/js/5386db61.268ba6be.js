"use strict";(self.webpackChunkbenson_doc=self.webpackChunkbenson_doc||[]).push([[3824],{3905:(t,e,l)=>{l.d(e,{Zo:()=>u,kt:()=>N});var n=l(7294);function r(t,e,l){return e in t?Object.defineProperty(t,e,{value:l,enumerable:!0,configurable:!0,writable:!0}):t[e]=l,t}function a(t,e){var l=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),l.push.apply(l,n)}return l}function d(t){for(var e=1;e<arguments.length;e++){var l=null!=arguments[e]?arguments[e]:{};e%2?a(Object(l),!0).forEach((function(e){r(t,e,l[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(l)):a(Object(l)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(l,e))}))}return t}function o(t,e){if(null==t)return{};var l,n,r=function(t,e){if(null==t)return{};var l,n,r={},a=Object.keys(t);for(n=0;n<a.length;n++)l=a[n],e.indexOf(l)>=0||(r[l]=t[l]);return r}(t,e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);for(n=0;n<a.length;n++)l=a[n],e.indexOf(l)>=0||Object.prototype.propertyIsEnumerable.call(t,l)&&(r[l]=t[l])}return r}var i=n.createContext({}),k=function(t){var e=n.useContext(i),l=e;return t&&(l="function"==typeof t?t(e):d(d({},e),t)),l},u=function(t){var e=k(t.components);return n.createElement(i.Provider,{value:e},t.children)},p="mdxType",m={inlineCode:"code",wrapper:function(t){var e=t.children;return n.createElement(n.Fragment,{},e)}},c=n.forwardRef((function(t,e){var l=t.components,r=t.mdxType,a=t.originalType,i=t.parentName,u=o(t,["components","mdxType","originalType","parentName"]),p=k(l),c=r,N=p["".concat(i,".").concat(c)]||p[c]||m[c]||a;return l?n.createElement(N,d(d({ref:e},u),{},{components:l})):n.createElement(N,d({ref:e},u))}));function N(t,e){var l=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var a=l.length,d=new Array(a);d[0]=c;var o={};for(var i in e)hasOwnProperty.call(e,i)&&(o[i]=e[i]);o.originalType=t,o[p]="string"==typeof t?t:r,d[1]=o;for(var k=2;k<a;k++)d[k]=l[k];return n.createElement.apply(null,d)}return n.createElement.apply(null,l)}c.displayName="MDXCreateElement"},855:(t,e,l)=>{l.r(e),l.d(e,{assets:()=>i,contentTitle:()=>d,default:()=>m,frontMatter:()=>a,metadata:()=>o,toc:()=>k});var n=l(7462),r=(l(7294),l(3905));const a={sidebar_label:"[DNS] 5. \u4ec0\u9ebc\u662f DNS record\uff1f \u7db2\u8def\u4e16\u754c\u7684\u96fb\u8a71\u7c3f\u7d00\u9304",title:"[DNS] 5. \u4ec0\u9ebc\u662f DNS record\uff1f \u7db2\u8def\u4e16\u754c\u7684\u96fb\u8a71\u7c3f\u7d00\u9304",tags:["DNS"]},d=void 0,o={unversionedId:"Network/dns-5-dns-record",id:"Network/dns-5-dns-record",title:"[DNS] 5. \u4ec0\u9ebc\u662f DNS record\uff1f \u7db2\u8def\u4e16\u754c\u7684\u96fb\u8a71\u7c3f\u7d00\u9304",description:"\u524d\u8a00",source:"@site/docs/Network/dns-5-dns-record.mdx",sourceDirName:"Network",slug:"/Network/dns-5-dns-record",permalink:"/zh-tw/docs/Network/dns-5-dns-record",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/Network/dns-5-dns-record.mdx",tags:[{label:"DNS",permalink:"/zh-tw/docs/tags/dns"}],version:"current",frontMatter:{sidebar_label:"[DNS] 5. \u4ec0\u9ebc\u662f DNS record\uff1f \u7db2\u8def\u4e16\u754c\u7684\u96fb\u8a71\u7c3f\u7d00\u9304",title:"[DNS] 5. \u4ec0\u9ebc\u662f DNS record\uff1f \u7db2\u8def\u4e16\u754c\u7684\u96fb\u8a71\u7c3f\u7d00\u9304",tags:["DNS"]},sidebar:"tutorialSidebar",previous:{title:"[DNS] 4. DNS \u5728\u524d\u7aef\u7684\u61c9\u7528",permalink:"/zh-tw/docs/Network/dns-4-application-in-frontend"},next:{title:"[HTTPS] 1.1 - Sniffing attack (\u55c5\u63a2\u653b\u64ca)",permalink:"/zh-tw/docs/Network/https-1-sniffing-attack"}},i={},k=[{value:"\u524d\u8a00",id:"\u524d\u8a00",level:2},{value:"\u5e38\u898b Record \u985e\u578b",id:"\u5e38\u898b-record-\u985e\u578b",level:2},{value:"<code>A Record</code> &amp; <code>AAAA Record</code> - \u5c07\u57df\u540d\u6307\u5411 IP address",id:"a-record--aaaa-record---\u5c07\u57df\u540d\u6307\u5411-ip-address",level:3},{value:"<code>CNAME Record</code> - \u57df\u540d\u6307\u5411\u57df\u540d",id:"cname-record---\u57df\u540d\u6307\u5411\u57df\u540d",level:3},{value:"Subdomain \u7684\u6307\u5411",id:"subdomain-\u7684\u6307\u5411",level:4},{value:"CDN \u7684\u6307\u5411",id:"cdn-\u7684\u6307\u5411",level:4},{value:"<code>SOA Record</code> - \u8ca0\u8cac\u4eba\u662f\u8ab0",id:"soa-record---\u8ca0\u8cac\u4eba\u662f\u8ab0",level:3},{value:"<code>NS Record</code> - \u662f\u54ea\u53f0\u6a5f\u5668\u7ba1\u7406\u4f60\u5bb6\u7684 DNS \u8cc7\u8a0a",id:"ns-record---\u662f\u54ea\u53f0\u6a5f\u5668\u7ba1\u7406\u4f60\u5bb6\u7684-dns-\u8cc7\u8a0a",level:3},{value:"<code>SRV Record</code> - \u66f4\u7d30\u7bc0\u7684 record",id:"srv-record---\u66f4\u7d30\u7bc0\u7684-record",level:3},{value:"Mail related",id:"mail-related",level:2},{value:"<code>MX Record</code> - \u6536\u4fe1\u8655",id:"mx-record---\u6536\u4fe1\u8655",level:3},{value:"<code>PTR Record</code> - IP \u6307\u5411\u540d\u7a31",id:"ptr-record---ip-\u6307\u5411\u540d\u7a31",level:3},{value:"<code>TXT Record</code> - \u7d14\u6587\u5b57",id:"txt-record---\u7d14\u6587\u5b57",level:3},{value:"\u53c3\u8003\u8cc7\u8a0a",id:"\u53c3\u8003\u8cc7\u8a0a",level:3}],u={toc:k},p="wrapper";function m(t){let{components:e,...l}=t;return(0,r.kt)(p,(0,n.Z)({},u,l,{components:e,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"\u524d\u8a00"},"\u524d\u8a00"),(0,r.kt)("p",null,"\u6211\u5011\u4e4b\u524d\u6709\u63d0\u5230\uff0cDNS \u6703\u5e6b\u6211\u5011\u628a Domain name \u6307\u5411 IP address\uff0c\u5176\u5be6 DNS \u7684\u672c\u8cea\u5c31\u50cf\u96fb\u8a71\u7c3f\uff0c\u88e1\u9762\u6709\u5404\u9805\u7d00\u9304 (Record)\uff0c\u5982\u679c\u6211\u5011\u6709\u4e86\u540d\u5b57(\u76f8\u7576\u65bc DNS \u7684 domain name)\uff0c\u5c31\u53ef\u4ee5\u77e5\u9053\u5c0d\u65b9\u7684\u806f\u7d61\u65b9\u5f0f\uff0c\u4f8b\u5982\u96fb\u8a71(\u76f8\u7576\u65bc DNS \u7684 IP address)\uff0c\u5982\u4e0b\u8868\uff1a"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null}),(0,r.kt)("th",{parentName:"tr",align:null},"\u540d\u7a31"),(0,r.kt)("th",{parentName:"tr",align:null},"\u806f\u7d61\u65b9\u5f0f"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"\u771f\u5be6\u4e16\u754c"),(0,r.kt)("td",{parentName:"tr",align:null},"\u5fc5\u52dd\u5ba2"),(0,r.kt)("td",{parentName:"tr",align:null},"28825252")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"\u7db2\u8def\u4e16\u754c"),(0,r.kt)("td",{parentName:"tr",align:null},"trendmicro.com"),(0,r.kt)("td",{parentName:"tr",align:null},"216.104.20.24")))),(0,r.kt)("br",null),(0,r.kt)("br",null),(0,r.kt)("p",null,"DNS record \u5c31\u6703\u5e6b\u6211\u5011\u7d00\u9304\u6bcf\u500b\u7db2\u57df\u540d\u7a31\u5c0d\u61c9\u5230\u7684\u806f\u7d61\u8cc7\u8a0a\uff0c\u4f46\u6709\u6642\u5019\u4e0d\u4e00\u5b9a\u662f IP address\uff0c\u6709\u53ef\u80fd\u662f\u53e6\u4e00\u500b\u7db2\u57df (CNAME)\uff0c\u9084\u6709\u5176\u4ed6\u4e0d\u540c\u985e\u578b\u7684\u7d00\u9304\uff0c\u5e38\u898b\u7684\u5982\u4e0b\uff1a"),(0,r.kt)("br",null),(0,r.kt)("br",null),(0,r.kt)("table",null,(0,r.kt)("thead",null,(0,r.kt)("tr",null,(0,r.kt)("th",null,"\u985e\u578b"),(0,r.kt)("th",null,"Record type"),(0,r.kt)("th",null,"\u529f\u80fd"))),(0,r.kt)("tbody",null,(0,r.kt)("tr",null,(0,r.kt)("td",{rowspan:"5"},"\u5e38\u898b\u985e\u578b"),(0,r.kt)("td",null,"A Record"),(0,r.kt)("td",null,"\u57df\u540d\u6307\u5411 IPv4 address")),(0,r.kt)("tr",null,(0,r.kt)("td",null,"AAAA Record"),(0,r.kt)("td",null,"\u57df\u540d\u6307\u5411 IPv6 address")),(0,r.kt)("tr",null,(0,r.kt)("td",null,"SOA Record"),(0,r.kt)("td",null,"\u8ca0\u8cac\u4eba\u662f\u8ab0")),(0,r.kt)("tr",null,(0,r.kt)("td",null,"NS Record"),(0,r.kt)("td",null,"\u662f\u54ea\u53f0\u6a5f\u5668\u7ba1\u7406\u4f60\u5bb6\u7684 DNS \u8cc7\u8a0a")),(0,r.kt)("tr",null,(0,r.kt)("td",null,"SRV Record"),(0,r.kt)("td",null,"\u66f4\u7d30\u7bc0\u7684 record")),(0,r.kt)("tr",null,(0,r.kt)("td",{rowspan:"3"},"Mail \u76f8\u95dc"),(0,r.kt)("td",null,"MX Record"),(0,r.kt)("td",null,"\u6536\u4fe1\u8655")),(0,r.kt)("tr",null,(0,r.kt)("td",null,"PTR Record"),(0,r.kt)("td",null,"IP \u6307\u5411\u57df\u540d")),(0,r.kt)("tr",null,(0,r.kt)("td",null,"TXT Record"),(0,r.kt)("td",null,"\u7d14\u6587\u5b57\uff0cuser \u53ef\u4ee5\u81ea\u5b9a\u7fa9\u5c6c\u6027\u53bb\u81ea\u7531\u4f7f\u7528")))),(0,r.kt)("br",null),(0,r.kt)("br",null),(0,r.kt)("br",null),(0,r.kt)("p",null,"\u901a\u5e38\u6211\u5011\u6700\u9700\u8981\u77ad\u89e3\u7684\uff0c\u5c31\u662f A Record\u3001CNAME Record\uff0c\u4f46\u5176\u4ed6\u4e5f\u9084\u6709\u4e00\u4e9b\u9084\u7b97\u5e38\u898b\u7684 Record \u985e\u578b\uff0c\u4ee5\u4e0b\u6211\u5011\u5c31\u4f86\u4e00\u4e00\u4ecb\u7d39\u5427\uff5e"),(0,r.kt)("br",null),(0,r.kt)("h2",{id:"\u5e38\u898b-record-\u985e\u578b"},"\u5e38\u898b Record \u985e\u578b"),(0,r.kt)("h3",{id:"a-record--aaaa-record---\u5c07\u57df\u540d\u6307\u5411-ip-address"},(0,r.kt)("inlineCode",{parentName:"h3"},"A Record")," & ",(0,r.kt)("inlineCode",{parentName:"h3"},"AAAA Record")," - \u5c07\u57df\u540d\u6307\u5411 IP address"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"TYPE"),(0,r.kt)("th",{parentName:"tr",align:null},"NAME"),(0,r.kt)("th",{parentName:"tr",align:null},"VALUE"),(0,r.kt)("th",{parentName:"tr",align:null},"TTL"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"A"),(0,r.kt)("td",{parentName:"tr",align:null},"example.com"),(0,r.kt)("td",{parentName:"tr",align:null},"12.34.56.78"),(0,r.kt)("td",{parentName:"tr",align:null},"7200")))),(0,r.kt)("br",null),(0,r.kt)("p",null,"\u6240\u8b02\u7684 ",(0,r.kt)("strong",{parentName:"p"},"A Record"),"\uff0c\u5c31\u662f\u5c07 domain \u6307\u5411 IP address \u7684\u7d00\u9304\uff0cA Record \u6703\u6709 4 \u500b\u63cf\u8ff0\u6b04\u4f4d\uff0c\u57fa\u672c\u4e0a\u5927\u90e8\u5206\u7684 DNS Record \u90fd\u63a1\u7528\u4e0a\u8ff0 4 \u500b\u6b04\u4f4d\u4f86\u63cf\u8ff0\u8a72 Record\uff1a"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"TYPE"),": Record \u985e\u578b"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"NAME"),": \u8f38\u5165\u7684 domain name"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"VALUE"),": domain name \u6307\u5411\u7684 IPv4 address"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"TTL"),": Time To Live\uff0c\u4e5f\u5c31\u662f\u6b64 DNS record cache \u7684\u5b58\u6d3b\u6642\u9593\uff0c\u4ee5\u79d2\u70ba\u55ae\u4f4d")),(0,r.kt)("br",null),(0,r.kt)("br",null),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"\u90a3\u4e0a\u8ff0\u63d0\u5230 A Record \u53ea\u80fd\u6307\u5411 IPv4 address\uff0c\u90a3 IPv6 \u5462\uff1f")),(0,r.kt)("br",null),(0,r.kt)("p",null,"\u6240\u4ee5 DNS \u4e5f\u6709\u4e00\u500b Record \u985e\u578b\u662f\u4f86\u63cf\u8ff0 IPv6 \u7684 address\uff0c\u4e5f\u5c31\u662f ",(0,r.kt)("strong",{parentName:"p"},"AAAA Record (quad A Record)"),"\uff0c\u5c31\u53ef\u4ee5\u5e6b\u52a9\u6211\u5011\u89e3\u6c7a\u60f3\u8981\u6307\u5411 IPv6 address \u7684\u554f\u984c"),(0,r.kt)("br",null),(0,r.kt)("h3",{id:"cname-record---\u57df\u540d\u6307\u5411\u57df\u540d"},(0,r.kt)("inlineCode",{parentName:"h3"},"CNAME Record")," - \u57df\u540d\u6307\u5411\u57df\u540d"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"TYPE"),(0,r.kt)("th",{parentName:"tr",align:null},"NAME"),(0,r.kt)("th",{parentName:"tr",align:null},"VALUE"),(0,r.kt)("th",{parentName:"tr",align:null},"TTL"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"CNAME"),(0,r.kt)("td",{parentName:"tr",align:null},"bar.example.com"),(0,r.kt)("td",{parentName:"tr",align:null},"foo.example.com"),(0,r.kt)("td",{parentName:"tr",align:null},"32600")))),(0,r.kt)("br",null),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"CNAME Record"),"\uff0c\u4e5f\u5c31\u662f Conical Name Record\uff0c\u4e2d\u6587\u7ffb\u505a\u300c\u771f\u5be6\u7d00\u9304\u540d\u7a31\u300d\uff0cConical \u6709\u300c\u898f\u7bc4\u300d\u7684\u610f\u601d"),(0,r.kt)("p",null,"CNAME \u7684 NAME \u7684\u90e8\u5206\uff0c\u5c31\u662f\u6211\u5011\u8f38\u5165\u7684 domain name\uff0cVALUE \u5c31\u662f\u6211\u5011\u8981\u6307\u5411\u7684\u53e6\u4e00\u500b domain name"),(0,r.kt)("br",null),(0,r.kt)("p",null,"\u901a\u5e38 CNAME \u7684\u7528\u9014\u6709\u4ee5\u4e0b 2 \u7a2e\uff1a"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"subdomain \u7684\u6307\u5411"),(0,r.kt)("li",{parentName:"ul"},"CDN domain \u7684\u6307\u5411")),(0,r.kt)("br",null),(0,r.kt)("h4",{id:"subdomain-\u7684\u6307\u5411"},"Subdomain \u7684\u6307\u5411"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"1. WWW (World Wide Web) \u7684\u6307\u5411")),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"TYPE"),(0,r.kt)("th",{parentName:"tr",align:null},"NAME"),(0,r.kt)("th",{parentName:"tr",align:null},"VALUE"),(0,r.kt)("th",{parentName:"tr",align:null},"TTL"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"CNAME"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"http://www.example.com"},"www.example.com")),(0,r.kt)("td",{parentName:"tr",align:null},"example.com"),(0,r.kt)("td",{parentName:"tr",align:null},"32600")))),(0,r.kt)("br",null),(0,r.kt)("br",null),(0,r.kt)("p",null,"\u901a\u5e38\uff0c\u6211\u5011\u7684\u7db2\u5740\u7d50\u69cb\u5982\u4e0b\uff1a"),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://ithelp.ithome.com.tw/upload/images/20231004/20148944NfDQI2edH9.png",alt:"https://ithelp.ithome.com.tw/upload/images/20231004/20148944NfDQI2edH9.png"})),(0,r.kt)("br",null),(0,r.kt)("p",null,"\u7531\u4e0a\u5716\u6240\u793a\uff1a"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},".")," \u7684\u90e8\u5206\u662f Root domain"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},".com")," \u7684\u90e8\u5206\u662f Top Level Domain"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"example")," \u7684\u90e8\u5206\u662f 2nd Level Domain"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"www.")," \u7684\u90e8\u5206\u662f sub domain")),(0,r.kt)("br",null),(0,r.kt)("p",null,"\u6240\u4ee5\uff0c\u5982\u679c\u8981\u8b93 user \u5f9e ",(0,r.kt)("a",{parentName:"p",href:"http://www.example.com"},"www.example.com")," \u9032\u5165\u6211\u5011\u7684 server\uff0c\u5c31\u9700\u8981\u53e6\u5916\u8a2d\u5b9a CNAME"),(0,r.kt)("br",null),(0,r.kt)("br",null),(0,r.kt)("br",null),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"2. \u591a\u529f\u80fd\u7684\u55ae\u4e00\u4f3a\u670d\u5668\u7684\u8a2d\u5b9a")),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"TYPE"),(0,r.kt)("th",{parentName:"tr",align:null},"NAME"),(0,r.kt)("th",{parentName:"tr",align:null},"VALUE"),(0,r.kt)("th",{parentName:"tr",align:null},"TTL"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"CNAME"),(0,r.kt)("td",{parentName:"tr",align:null},"ftp.example.com"),(0,r.kt)("td",{parentName:"tr",align:null},"example.com"),(0,r.kt)("td",{parentName:"tr",align:null},"32600")))),(0,r.kt)("br",null),(0,r.kt)("figure",null,(0,r.kt)("img",{src:"https://ithelp.ithome.com.tw/upload/images/20231005/20148944sNWrKhBhh0.png"})),(0,r.kt)("br",null),(0,r.kt)("p",null,"\u7576\u6211\u5011\u53ea\u6709\u4e00\u53f0 server\uff0c\u4f46\u6703\u5229\u7528\u6b64 server \u63d0\u4f9b\u591a\u9805\u670d\u52d9\u6642\uff0c\u5c31\u53ef\u4ee5\u5728\u539f server domain \u524d\u52a0\u5165\u63cf\u8ff0\u529f\u80fd\u7684 sub domain\uff0c\u4ee5\u65b9\u4fbf\u505a\u529f\u80fd\u7684\u5340\u5206\uff0c\u4f46\u5be6\u969b\u4e0a\u90fd\u662f\u5c0e\u5411\u540c\u4e00\u500b server"),(0,r.kt)("br",null),(0,r.kt)("br",null),(0,r.kt)("br",null),(0,r.kt)("h4",{id:"cdn-\u7684\u6307\u5411"},"CDN \u7684\u6307\u5411"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"TYPE"),(0,r.kt)("th",{parentName:"tr",align:null},"NAME"),(0,r.kt)("th",{parentName:"tr",align:null},"VALUE"),(0,r.kt)("th",{parentName:"tr",align:null},"TTL"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"CNAME"),(0,r.kt)("td",{parentName:"tr",align:null},"hello.benson-chen.com"),(0,r.kt)("td",{parentName:"tr",align:null},"d70ti4o1uqq3e.cloudfront.net"),(0,r.kt)("td",{parentName:"tr",align:null},"32600")))),(0,r.kt)("br",null),(0,r.kt)("p",null,"\u5728 AWS Cloudfront\uff0c\u4e5f\u5c31\u662f AWS \u63d0\u4f9b\u7684 CDN \u670d\u52d9\u4e2d\uff0c\u6703\u5148\u7d66\u4e00\u500b\u9810\u8a2d\u7684 domain name\uff0c\u5982\u4e0a\u8ff0\u5c31\u662f d70ti4o1uqq3e.cloudfront.net\u3002"),(0,r.kt)("br",null),(0,r.kt)("p",null,"\u9019\u6a23\u7684\u8a71\uff0c\u6211\u5011\u5c31\u4e0d\u7528\u77e5\u9053 CDN Server \u7684 IP address\uff0c\u53ef\u4ee5\u5c07\u6211\u5011\u7684 domain \u6307\u5411\u5230\u9019\u500b domain name\uff0c\u5c31\u53ef\u4ee5\u8b93 user \u512a\u5148\u5f9e\u6211\u5011\u7684 CDN \u5b58\u53d6\u8cc7\u6e90\u4e86"),(0,r.kt)("br",null),(0,r.kt)("br",null),(0,r.kt)("h3",{id:"soa-record---\u8ca0\u8cac\u4eba\u662f\u8ab0"},(0,r.kt)("inlineCode",{parentName:"h3"},"SOA Record")," - \u8ca0\u8cac\u4eba\u662f\u8ab0"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"TYPE"),(0,r.kt)("th",{parentName:"tr",align:null},"MNAME"),(0,r.kt)("th",{parentName:"tr",align:null},"RNAME"),(0,r.kt)("th",{parentName:"tr",align:null},"SERIAL"),(0,r.kt)("th",{parentName:"tr",align:null},"RETRY"),(0,r.kt)("th",{parentName:"tr",align:null},"TTL"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"SOA"),(0,r.kt)("td",{parentName:"tr",align:null},"ns1.example.com"),(0,r.kt)("td",{parentName:"tr",align:null},"admin.example.com"),(0,r.kt)("td",{parentName:"tr",align:null},"510025"),(0,r.kt)("td",{parentName:"tr",align:null},"60"),(0,r.kt)("td",{parentName:"tr",align:null},"7200")))),(0,r.kt)("p",null,"SOA \u70ba start of authority \u7684\u7e2e\u5beb\uff0c\u5132\u5b58\u76f8\u95dc DNS zone \u7684\u8ca0\u8cac\u4eba\u7684\u8cc7\u8a0a"),(0,r.kt)("br",null),(0,r.kt)("admonition",{title:"DNS zone \u662f\u4ec0\u9ebc\uff1f",type:"info"},(0,r.kt)("p",{parentName:"admonition"},"\u4e00\u500b domain name \u7684\u90e8\u5206\u5340\u584a\uff0c\u7531\u7d71\u4e00\u500b\u7ba1\u7406\u8005\u638c\u7ba1\uff0c\u8209\u4f8b\u4f86\u8aaa\uff1a\n\u6211\u5011\u73fe\u5728\u6709 example.com \u7684 domain name\uff0c\u70ba\u4e86\u5340\u5206\u4e0d\u540c\u7684\u529f\u80fd\uff0c\u6211\u5011\u5728 example.com \u53c8\u6709\u4e09\u500b\u5b50\u7db2\u57df\uff0c\u5206\u5225\u662f\n",(0,r.kt)("inlineCode",{parentName:"p"},"shop.example.com"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"blog.example.com"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"support.example.com"),"\uff0c\u5982\u4e0b\u5716\uff1a"),(0,r.kt)("br",null),(0,r.kt)("br",null),(0,r.kt)("figure",null,(0,r.kt)("img",{src:"/img/dns-zones.png",alt:"DNS zones",width:"600"})),(0,r.kt)("br",null),(0,r.kt)("p",{parentName:"admonition"},"\u4f46 ",(0,r.kt)("inlineCode",{parentName:"p"},"shop.example.com")," \u548c ",(0,r.kt)("inlineCode",{parentName:"p"},"blog.example.com")," \u7684 Server \u6578\u91cf\u8f03\u5c11\uff0c\u6211\u5011\u5c31\u4ea4\u7d66\u540c\u4e00\u500b\u7ba1\u7406\uff0c\n",(0,r.kt)("inlineCode",{parentName:"p"},"support.example.com")," \u7684\u4f3a\u670d\u5668\u6bd4\u8f03\u591a\uff0c\u6211\u5011\u5c31\u4ea4\u7d66\u53e6\u4e00\u500b\u4eba\u8655\u7406"),(0,r.kt)("br",null),(0,r.kt)("p",{parentName:"admonition"},"\u9019\u6642\uff0c",(0,r.kt)("inlineCode",{parentName:"p"},"shop.example.com")," \u548c ",(0,r.kt)("inlineCode",{parentName:"p"},"blog.example.com")," \u5283\u5206\u70ba\u4e00\u500b DNS zone\uff0c",(0,r.kt)("inlineCode",{parentName:"p"},"support.example.com")," \u5c31\u7368\u7acb\u70ba\u53e6\u4e00\u500b DNS zone\uff0c\u6bcf\u500b DNS zone \u90fd\u6709\u7279\u5b9a\u7684\u4eba\u8ca0\u8cac\u7ba1\u7406")),(0,r.kt)("br",null),(0,r.kt)("br",null),(0,r.kt)("p",null,"SOA record \u7531\u4e0b\u9762\u5e7e\u500b\u90e8\u5206\u7d44\u6210\uff1a"),(0,r.kt)("figure",null,(0,r.kt)("img",{src:"/img/soa-record.png",alt:"DNS zones",width:"600"})),(0,r.kt)("br",null),(0,r.kt)("br",null),(0,r.kt)("table",null,(0,r.kt)("thead",null,(0,r.kt)("tr",null,(0,r.kt)("th",null,"\u6b04\u4f4d\u540d\u7a31"),(0,r.kt)("th",null,"\u8aaa\u660e"))),(0,r.kt)("tbody",null,(0,r.kt)("tr",null,(0,r.kt)("td",null,(0,r.kt)("b",null,"MNAME")),(0,r.kt)("td",null,"\u662f Master Name Server \u7684\u7e2e\u5beb\uff0c\u9019\u662f\u8a72\u5340\u57df\u7684\u4e3b\u6b0a\u5a01\u540d\u7a31\u4f3a\u670d\u5668\uff0c\u8ca0\u8cac\u8a72\u5340\u57df\u8cc7\u6599\u7684\u7dad\u8b77")),(0,r.kt)("tr",null,(0,r.kt)("td",null,(0,r.kt)("b",null,"RNAME")),(0,r.kt)("td",null,"\u4ee3\u8868 Responsible person \u7684\u7e2e\u5beb\uff0c\u662f\u8ca0\u8cac\u7ba1\u7406\u9019\u500b DNS \u5340\u57df\u7684\u7ba1\u7406\u54e1\u7684\u96fb\u5b50\u90f5\u4ef6\u5730\u5740\uff0c \u901a\u5e38\u7b2c\u4e00\u500b ",(0,r.kt)("code",null,".")," \u4ee3\u8868 ",(0,r.kt)("code",null,"@"),"\uff0c\u4f8b\u5982\u7bc4\u4f8b\u4e2d ",(0,r.kt)("code",null,"admin.example.com")," \u7b49\u540c\u65bc ",(0,r.kt)("code",null,"admin@example.com"))),(0,r.kt)("tr",null,(0,r.kt)("td",null,(0,r.kt)("b",null,"SERIAL")),(0,r.kt)("td",null,"\u4ee3\u8868\u6b64 DNS zone \u7684\u7248\u672c")),(0,r.kt)("tr",null,(0,r.kt)("td",null,(0,r.kt)("b",null,"RETRY")),(0,r.kt)("td",null,"\u4f3a\u670d\u5668\u518d\u6b21\u5411\u7121\u56de\u61c9\u7684\u4e3b\u8981\u540d\u7a31\u4f3a\u670d\u5668\u8acb\u6c42\u66f4\u65b0\u524d\u61c9\u7b49\u5f85\u7684\u6642\u9593\u9577\u5ea6")))),(0,r.kt)("br",null),(0,r.kt)("br",null),(0,r.kt)("h3",{id:"ns-record---\u662f\u54ea\u53f0\u6a5f\u5668\u7ba1\u7406\u4f60\u5bb6\u7684-dns-\u8cc7\u8a0a"},(0,r.kt)("inlineCode",{parentName:"h3"},"NS Record")," - \u662f\u54ea\u53f0\u6a5f\u5668\u7ba1\u7406\u4f60\u5bb6\u7684 DNS \u8cc7\u8a0a"),(0,r.kt)("br",null),(0,r.kt)("br",null),(0,r.kt)("h3",{id:"srv-record---\u66f4\u7d30\u7bc0\u7684-record"},(0,r.kt)("inlineCode",{parentName:"h3"},"SRV Record")," - \u66f4\u7d30\u7bc0\u7684 record"),(0,r.kt)("br",null),(0,r.kt)("br",null),(0,r.kt)("h2",{id:"mail-related"},"Mail related"),(0,r.kt)("h3",{id:"mx-record---\u6536\u4fe1\u8655"},(0,r.kt)("inlineCode",{parentName:"h3"},"MX Record")," - \u6536\u4fe1\u8655"),(0,r.kt)("h3",{id:"ptr-record---ip-\u6307\u5411\u540d\u7a31"},(0,r.kt)("inlineCode",{parentName:"h3"},"PTR Record")," - IP \u6307\u5411\u540d\u7a31"),(0,r.kt)("h3",{id:"txt-record---\u7d14\u6587\u5b57"},(0,r.kt)("inlineCode",{parentName:"h3"},"TXT Record")," - \u7d14\u6587\u5b57"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"email domain white list\uff0c\u8b93\u8a2d\u5b9a\u7684 domain \u4e0d\u6703\u88ab\u64cb"),(0,r.kt)("li",{parentName:"ul"},"DNS \u8cc7\u8a0a\u90fd\u662f\u516c\u958b\u7684\uff0c\u53ef\u5229\u7528 Google public DNS \u67e5\u8a62")),(0,r.kt)("br",null),(0,r.kt)("br",null),(0,r.kt)("h3",{id:"\u53c3\u8003\u8cc7\u8a0a"},"\u53c3\u8003\u8cc7\u8a0a"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://www.youtube.com/watch?v=HnUDtycXSNE&t=663s"},"PowerCert Animated Videos - DNS Records Explained")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://www.cloudflare.com/zh-tw/learning/dns/dns-records/dns-soa-record/"},"Cloudflare - \u4ec0\u9ebc\u662fDNS SOA \u8a18\u9304\uff1f")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://en.wikipedia.org/wiki/SOA_record"},"Wikipedia - SOA record"))),(0,r.kt)("br",null),(0,r.kt)("br",null))}m.isMDXComponent=!0}}]);