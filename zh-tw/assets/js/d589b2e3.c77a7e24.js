"use strict";(self.webpackChunkbenson_doc=self.webpackChunkbenson_doc||[]).push([[4731],{3905:(t,e,n)=>{n.d(e,{Zo:()=>s,kt:()=>m});var l=n(7294);function r(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function i(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);e&&(l=l.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,l)}return n}function a(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?i(Object(n),!0).forEach((function(e){r(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function u(t,e){if(null==t)return{};var n,l,r=function(t,e){if(null==t)return{};var n,l,r={},i=Object.keys(t);for(l=0;l<i.length;l++)n=i[l],e.indexOf(n)>=0||(r[n]=t[n]);return r}(t,e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);for(l=0;l<i.length;l++)n=i[l],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(r[n]=t[n])}return r}var o=l.createContext({}),k=function(t){var e=l.useContext(o),n=e;return t&&(n="function"==typeof t?t(e):a(a({},e),t)),n},s=function(t){var e=k(t.components);return l.createElement(o.Provider,{value:e},t.children)},c="mdxType",p={inlineCode:"code",wrapper:function(t){var e=t.children;return l.createElement(l.Fragment,{},e)}},b=l.forwardRef((function(t,e){var n=t.components,r=t.mdxType,i=t.originalType,o=t.parentName,s=u(t,["components","mdxType","originalType","parentName"]),c=k(n),b=r,m=c["".concat(o,".").concat(b)]||c[b]||p[b]||i;return n?l.createElement(m,a(a({ref:e},s),{},{components:n})):l.createElement(m,a({ref:e},s))}));function m(t,e){var n=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var i=n.length,a=new Array(i);a[0]=b;var u={};for(var o in e)hasOwnProperty.call(e,o)&&(u[o]=e[o]);u.originalType=t,u[c]="string"==typeof t?t:r,a[1]=u;for(var k=2;k<i;k++)a[k]=n[k];return l.createElement.apply(null,a)}return l.createElement.apply(null,n)}b.displayName="MDXCreateElement"},4170:(t,e,n)=>{n.r(e),n.d(e,{assets:()=>o,contentTitle:()=>a,default:()=>p,frontMatter:()=>i,metadata:()=>u,toc:()=>k});var l=n(7462),r=(n(7294),n(3905));const i={sidebar_position:4,sidebar_label:"[HTTPS] 1.3 - Certificate Authority (\u6191\u8b49\u9812\u767c\u6a5f\u69cb)",title:"[HTTPS] 1.3 - Certificate Authority (\u6191\u8b49\u9812\u767c\u6a5f\u69cb)",tags:["HTTPS","Security"]},a=void 0,u={unversionedId:"Network/certificate-authority",id:"Network/certificate-authority",title:"[HTTPS] 1.3 - Certificate Authority (\u6191\u8b49\u9812\u767c\u6a5f\u69cb)",description:"\u554f\u984c 1\uff1a\u5982\u4f55\u907f\u514d\u4e2d\u9593\u4eba\u63db\u6389\u516c\u9470\uff1f",source:"@site/docs/Network/certificate-authority.mdx",sourceDirName:"Network",slug:"/Network/certificate-authority",permalink:"/zh-tw/docs/Network/certificate-authority",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/Network/certificate-authority.mdx",tags:[{label:"HTTPS",permalink:"/zh-tw/docs/tags/https"},{label:"Security",permalink:"/zh-tw/docs/tags/security"}],version:"current",sidebarPosition:4,frontMatter:{sidebar_position:4,sidebar_label:"[HTTPS] 1.3 - Certificate Authority (\u6191\u8b49\u9812\u767c\u6a5f\u69cb)",title:"[HTTPS] 1.3 - Certificate Authority (\u6191\u8b49\u9812\u767c\u6a5f\u69cb)",tags:["HTTPS","Security"]},sidebar:"tutorialSidebar",previous:{title:"[HTTPS] 1.2 - Middle man attack (\u4e2d\u9593\u4eba\u653b\u64ca)",permalink:"/zh-tw/docs/Network/middle-man-attack"},next:{title:"[Proxy] Forward Proxy \u662f\u4ec0\u9ebc?",permalink:"/zh-tw/docs/Operate/forward-proxy"}},o={},k=[{value:"\u554f\u984c 1\uff1a\u5982\u4f55\u907f\u514d\u4e2d\u9593\u4eba\u63db\u6389\u516c\u9470\uff1f",id:"\u554f\u984c-1\u5982\u4f55\u907f\u514d\u4e2d\u9593\u4eba\u63db\u6389\u516c\u9470",level:2},{value:"\u89e3\u6cd5\u4e00\uff1a\u52a0\u5165\u81ea\u5df1\u8eab\u4efd\u76f8\u95dc\u7684 Hash\uff0c\u8b49\u660e\u6211\u662f\u8ab0",id:"\u89e3\u6cd5\u4e00\u52a0\u5165\u81ea\u5df1\u8eab\u4efd\u76f8\u95dc\u7684-hash\u8b49\u660e\u6211\u662f\u8ab0",level:3},{value:"\u5c0f\u7d50",id:"\u5c0f\u7d50",level:3},{value:"\u554f\u984c 2\uff1a\u591a\u50b3\u6d88\u606f\u6458\u8981\u5c31\u80fd\u5b8c\u7f8e\u5730\u5316\u89e3\u4e2d\u9593\u4eba\u653b\u64ca\u4e86\u55ce\uff1f",id:"\u554f\u984c-2\u591a\u50b3\u6d88\u606f\u6458\u8981\u5c31\u80fd\u5b8c\u7f8e\u5730\u5316\u89e3\u4e2d\u9593\u4eba\u653b\u64ca\u4e86\u55ce",level:2},{value:"\u8aaa\u5230\u5e95\uff0c\u90a3\u5230\u5e95\u8981\u5982\u4f55\u907f\u514d\u4e2d\u9593\u4eba\u653b\u64ca\uff1f",id:"\u8aaa\u5230\u5e95\u90a3\u5230\u5e95\u8981\u5982\u4f55\u907f\u514d\u4e2d\u9593\u4eba\u653b\u64ca",level:3},{value:"\u5316\u89e3\u7b2c\u4e00\u6b21 MITM",id:"\u5316\u89e3\u7b2c\u4e00\u6b21-mitm",level:3},{value:"\u5316\u89e3\u7b2c\u4e8c\u6b21 MITM",id:"\u5316\u89e3\u7b2c\u4e8c\u6b21-mitm",level:3},{value:"\u7e3d\u7d50",id:"\u7e3d\u7d50",level:2}],s={toc:k},c="wrapper";function p(t){let{components:e,...n}=t;return(0,r.kt)(c,(0,l.Z)({},s,n,{components:e,mdxType:"MDXLayout"}),(0,r.kt)("br",null),(0,r.kt)("h2",{id:"\u554f\u984c-1\u5982\u4f55\u907f\u514d\u4e2d\u9593\u4eba\u63db\u6389\u516c\u9470"},"\u554f\u984c 1\uff1a\u5982\u4f55\u907f\u514d\u4e2d\u9593\u4eba\u63db\u6389\u516c\u9470\uff1f"),(0,r.kt)("p",null,"\u5728 ",(0,r.kt)("a",{parentName:"p",href:"./middle-man-attack"},"\u4e2d\u9593\u4eba\u653b\u64ca")," \u7684\u6587\u7ae0\u4e2d\uff0c\u6211\u5011\u63d0\u5230\u4e2d\u9593\u4eba\u53ef\u4ee5\u6514\u622a Person 2 \u7684\u8cc7\u8a0a\uff0c ",(0,r.kt)("br",null),"\n\u99ed\u5ba2\u53ef\u4ee5\u900f\u904e\u66ff\u63db Person 2 \u7684 Public key\uff0c\u50b3\u7d66 Person 1\uff0c ",(0,r.kt)("br",null),"\n\u8b93 Person 1 \u7528\u932f\u8aa4\u7684 Public key \u52a0\u5bc6\uff0c\u4f7f\u5f97\u99ed\u5ba2\u5f97\u4ee5\u89e3\u5bc6\u7372\u53d6 Person 1 \u50b3\u905e\u7684\u8cc7\u6599"),(0,r.kt)("br",null),(0,r.kt)("h3",{id:"\u89e3\u6cd5\u4e00\u52a0\u5165\u81ea\u5df1\u8eab\u4efd\u76f8\u95dc\u7684-hash\u8b49\u660e\u6211\u662f\u8ab0"},"\u89e3\u6cd5\u4e00\uff1a\u52a0\u5165\u81ea\u5df1\u8eab\u4efd\u76f8\u95dc\u7684 Hash\uff0c\u8b49\u660e\u6211\u662f\u8ab0"),(0,r.kt)("p",null,"\u9019\u6642\uff0cPerson 2 \u53ef\u4ee5\u900f\u904e\u5c07"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"\u81ea\u5df1\u7684\u516c\u9470"),(0,r.kt)("li",{parentName:"ul"},"\u81ea\u5df1\u7684 Personal info\n\u9032\u884c hash \u4f86\u7522\u751f\u8cc7\u8a0a\u6458\u8981 (information digest) ",(0,r.kt)("br",null))),(0,r.kt)("p",null,"\u63a5\u8457\uff0c\u6211\u5011\u518d\u4f86\u50b3\u8f38\u770b\u770b\uff0c\u770b\u7576\u99ed\u5ba2\u66f4\u63db Public key \u6642\u6703\u767c\u751f\u4ec0\u9ebc\u4e8b\uff1f"),(0,r.kt)("img",{src:"/img/attack-hashed-info.png"}),(0,r.kt)("br",null),(0,r.kt)("br",null),(0,r.kt)("p",null,"\u9019\u6642\uff0c\u6211\u5011\u5c07\u81ea\u5df1\u7684"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Public key"),(0,r.kt)("li",{parentName:"ul"},"Person 2 info"),(0,r.kt)("li",{parentName:"ul"},"Info digest (hashed value)")),(0,r.kt)("p",null,"\u50b3\u905e\u5230\u7db2\u8def\u4e0a\uff0c\u7576\u99ed\u5ba2\u7576\u4e2d\u9593\u4eba\u64f7\u53d6\u6642\uff0c\u50c5\u5c07 Public key \u66f4\u63db\uff0c ",(0,r.kt)("br",null),"\n\u5176\u4ed6\u8cc7\u8a0a\u6b63\u5e38\u50b3\u9001\uff0c\u907f\u514d\u8d77\u7591\uff0c ",(0,r.kt)("br",null)),(0,r.kt)("p",null,"\u9019\u6642\uff0c\u99ed\u5ba2\u66f4\u63db\u5b8c\u5f8c\uff0c\u50b3\u9001\u7684\u8cc7\u8a0a\u70ba\uff1a"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Hacker's Public key")),(0,r.kt)("li",{parentName:"ul"},"Person 2 info"),(0,r.kt)("li",{parentName:"ul"},"Info digest")),(0,r.kt)("br",null),(0,r.kt)("p",null,"\u9019\u6642\u5462\uff0c\u5982\u679c Person 1 \u8981\u9a57\u8b49\u9019\u4e9b\u8cc7\u8a0a\u6709\u6c92\u88ab\u4eba\u7ac4\u6539\u904e\uff0c ",(0,r.kt)("br",null),"\n\u6211\u5011\u5c31\u53ef\u4ee5\u5c07 H-Public key \u548c Person 2 info hash\uff0c\u7522\u751f\u4e00\u500b\u65b0\u7684 info digest\uff0c ",(0,r.kt)("br",null),"\n\u518d\u548c\u50b3\u904e\u4f86\u7684\u76f8\u6bd4\uff0c\u5c31\u77e5\u9053\u6709\u6c92\u6709\u88ab\u7be1\u6539\u904e\u4e86 ",(0,r.kt)("br",null)),(0,r.kt)("br",null),(0,r.kt)("h3",{id:"\u5c0f\u7d50"},"\u5c0f\u7d50"),(0,r.kt)("p",null,"\u6240\u4ee5\uff0c",(0,r.kt)("strong",{parentName:"p"},"\u591a\u50b3\u905e\u8ddf\u81ea\u5df1\u76f8\u95dc\u7684 Hash \u503c\uff0c\u53ef\u4ee5\u77e5\u9053\u6211\u5011\u5176\u4ed6\u63a5\u6536\u5230\u7684\u8cc7\u8a0a\u6709\u6c92\u6709\u88ab\u7be1\u6539")),(0,r.kt)("br",null),(0,r.kt)("br",null),(0,r.kt)("h2",{id:"\u554f\u984c-2\u591a\u50b3\u6d88\u606f\u6458\u8981\u5c31\u80fd\u5b8c\u7f8e\u5730\u5316\u89e3\u4e2d\u9593\u4eba\u653b\u64ca\u4e86\u55ce"},"\u554f\u984c 2\uff1a\u591a\u50b3\u6d88\u606f\u6458\u8981\u5c31\u80fd\u5b8c\u7f8e\u5730\u5316\u89e3\u4e2d\u9593\u4eba\u653b\u64ca\u4e86\u55ce\uff1f"),(0,r.kt)("p",null,"\u96d6\u7136\u6211\u5011\u900f\u904e\u591a\u50b3 info digest\uff0c",(0,r.kt)("br",null),"\n\u4f7f\u5f97\u99ed\u5ba2\u5982\u679c\u66f4\u6539 Public key\uff0c\u5c31\u6703\u7121\u6cd5\u901a\u904e\u6aa2\u9a57\uff0c ",(0,r.kt)("br",null)),(0,r.kt)("p",null,"\u4f46\u662f\uff0c",(0,r.kt)("strong",{parentName:"p"},"\u5982\u679c\u99ed\u5ba2\u9023 info digest \u90fd\u66ff\u63db\u6389\uff0c\u6211\u5011\u5c31\u6c92\u6709\u76f8\u95dc\u7684\u8cc7\u8a0a\u53ef\u4ee5\u9a57\u8b49\u4e86")),(0,r.kt)("p",null,"\u5047\u8a2d\uff0c\u99ed\u5ba2\u4fdd\u7559\u539f\u672c\u7684 Person 2 info\uff0c\u4f7f\u7528\u4e86\u81ea\u5df1\u7684"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"H-Public key"),(0,r.kt)("li",{parentName:"ul"},"\u5229\u7528 Person 2 info + H-Public key \u5f62\u6210\u7684 Fake info digest")),(0,r.kt)("br",null),(0,r.kt)("p",null,"\u4e26\u5c07\u9019\u4e09\u7d44\u8cc7\u6599\u50b3\u9001\u7d66 Person 1\uff0c ",(0,r.kt)("br",null),"\n\u27a1\ufe0f Person 1 \u5c07 H-Public key \u548c Person 2 info \u96dc\u6e4a\u904e\u5f8c ",(0,r.kt)("br",null),"\n\u27a1\ufe0f \u5f97\u5230\u7684\u503c\u5c31\u6703\u7b49\u540c\u65bc Fake info digest ",(0,r.kt)("br",null),"\n\u27a1\ufe0f \u6211\u5011\u4e5f\u56e0\u6b64\u7121\u6cd5\u9a57\u8b49\u8cc7\u6599\u6709\u6c92\u6709\u88ab\u4e2d\u9593\u4eba\u66ff\u63db\u904e"),(0,r.kt)("img",{src:"/img/tempering-info-data.png"}),(0,r.kt)("br",null),(0,r.kt)("br",null),(0,r.kt)("h3",{id:"\u8aaa\u5230\u5e95\u90a3\u5230\u5e95\u8981\u5982\u4f55\u907f\u514d\u4e2d\u9593\u4eba\u653b\u64ca"},"\u8aaa\u5230\u5e95\uff0c\u90a3\u5230\u5e95\u8981\u5982\u4f55\u907f\u514d\u4e2d\u9593\u4eba\u653b\u64ca\uff1f"),(0,r.kt)("p",null,"\u90a3\u9019\u6a23\u7684\u8a71\uff0c\u900f\u904e\u81ea\u5df1\u50b3\u8f38\u7684\u65b9\u5f0f\uff0c\u7e3d\u662f\u6703\u88ab\u4e2d\u9593\u4eba\u7ac4\u6539\uff0c ",(0,r.kt)("br",null),"\n\u90a3\u6211\u5011\u4e0d\u5982\u5c31",(0,r.kt)("strong",{parentName:"p"},"\u627e\u500b\u6709\u516c\u4fe1\u529b\u7684\u6a5f\u69cb\uff0c\u900f\u904e\u4ed6\u5011\u7684\u6a5f\u5236\u4fdd\u8b77\u6211\u5011\u7684\u7b2c\u4e00\u6b21\u50b3\u8f38"),"\uff0c ",(0,r.kt)("br",null),"\n\u6211\u5011\u7a31\u9019\u6709\u516c\u4fe1\u529b\u7684\u6a5f\u69cb\u70ba Certificate authority (\u6191\u8b49\u7ba1\u7406\u4e2d\u5fc3) ",(0,r.kt)("br",null)),(0,r.kt)("p",null,"CA \u4e5f\u540c\u6a23\u662f\u900f\u904e\u975e\u5c0d\u7a31\u5f0f\u52a0\u5bc6\u4fdd\u8b77\u7b2c\u4e00\u6b21\u50b3\u8f38\uff0c",(0,r.kt)("br",null),"\nCA \u6703\u63d0\u4f9b\u81ea\u5df1\u7684 Public & Private key \u7d66\u63a5\u6536\u65b9\u548c\u50b3\u9001\u65b9 ",(0,r.kt)("br",null)),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"CA - Private key \u7d66 Person 2"),(0,r.kt)("li",{parentName:"ul"},"CA - Public key \u7d66 Person 1")),(0,r.kt)("p",null,"\u6211\u5011\u5c0d\u539f\u672c Person 2 \u7684 info digest \u7528 CA - Private key \u518d\u52a0\u5bc6\uff0c ",(0,r.kt)("br",null),"\n\u5f62\u6210 Digital signature (\u6578\u4f4d\u7c3d\u540d)"),(0,r.kt)("img",{width:"600",src:"/img/digital-signature.png"}),(0,r.kt)("p",null,"\u7136\u5f8c\uff0c\u518d\u5c07 Person 2 \u7684\u9019 3 \u500b\u8a0a\u606f\u4e00\u8d77\u50b3\u8f38\uff1a"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Public key"),(0,r.kt)("li",{parentName:"ul"},"Personal info"),(0,r.kt)("li",{parentName:"ul"},"Digital signature")),(0,r.kt)("p",null,"\u5f62\u6210\u6240\u8b02\u7684 Digital certificate (\u6578\u4f4d\u8b49\u66f8)"),(0,r.kt)("img",{width:"300",src:"/img/digital-certificate.png"}),(0,r.kt)("br",null),(0,r.kt)("br",null),(0,r.kt)("br",null),(0,r.kt)("h3",{id:"\u5316\u89e3\u7b2c\u4e00\u6b21-mitm"},"\u5316\u89e3\u7b2c\u4e00\u6b21 MITM"),(0,r.kt)("img",{src:"/img/prevent-certificate-tempering.png"}),(0,r.kt)("p",null,"\u90a3\u6211\u5011\u4f86\u770b\u770b\u5982\u679c\u4e2d\u9593\u4eba\u7528\u7b2c\u4e8c\u6b21\u7684\u653b\u64ca\u624b\u6bb5\uff0c \u5c07 Public key \u548c info digest \u90fd\u63db\u6389\u7684\u60c5\u6cc1\uff0c ",(0,r.kt)("br",null),"\nPerson 1 \u80fd\u4e0d\u80fd\u6210\u529f\u7684\u5075\u6e2c\u5230\u5462\uff1f"),(0,r.kt)("p",null,"\u5982\u679c\u99ed\u5ba2\u7528\u7b2c\u4e8c\u6b21\u7684\u9032\u653b\u624b\u6bb5\uff0c \u751a\u81f3\u507d\u9020\u4e86\u81ea\u5df1\u7684\u8b49\u66f8\u6642\uff0c ",(0,r.kt)("br",null),"\n\u27a1\ufe0f \u7576\u5047\u8b49\u66f8\u50b3\u5230 Person 1 \u624b\u4e0a\u6642\uff0c",(0,r.kt)("strong",{parentName:"p"},"\u56e0\u70ba\u8b49\u66f8\u7121\u6cd5\u7528 CA - Public key \u89e3\u51fa")," ",(0,r.kt)("br",null),"\n\u27a1\ufe0f \u4ee3\u8868\u9019\u500b\u5047\u8b49\u66f8\u4e26\u4e0d\u662f\u7528 CA - Private key \u52a0\u5bc6\u7684 ",(0,r.kt)("br",null),"\n\u27a1\ufe0f \u5176\u4e2d\u5fc5\u6709\u8a50\uff01\uff01\uff01",(0,r.kt)("br",null),(0,r.kt)("br",null)),(0,r.kt)("p",null,"\u6545\u6211\u5011\u56e0\u6b64\u6210\u529f\u963b\u64cb\u4e86\u99ed\u5ba2 ",(0,r.kt)("br",null)),(0,r.kt)("br",null),(0,r.kt)("br",null),(0,r.kt)("h3",{id:"\u5316\u89e3\u7b2c\u4e8c\u6b21-mitm"},"\u5316\u89e3\u7b2c\u4e8c\u6b21 MITM"),(0,r.kt)("p",null,"\u90a3\u5047\u5982\u9019\u6b21\u99ed\u5ba2\u5b78\u4e56\u4e86\uff0c\u5c31\u4e0d\u66f4\u6539 Digital Signature \u7684\u90e8\u5206\uff0c ",(0,r.kt)("br",null),"\n\u8b93 Person 1 \u53ef\u4ee5\u7528 CA - Public key \u89e3\u958b\uff0c \u72c0\u6cc1\u5c31\u6703\u5982\u4e0b\u5716\u767c\u5c55 ",(0,r.kt)("br",null)),(0,r.kt)("img",{src:"/img/prevent-signature-tempering.png"}),(0,r.kt)("br",null),(0,r.kt)("br",null),(0,r.kt)("p",null,"\u5728 Person 1 \u7528 CA - Public key \u89e3\u958b\u5f8c\uff0c\u6210\u529f\u4e86\u5f97\u5230\u4e86 Person 2 \u6240\u52a0\u5bc6\u904e\u7684 info digest\uff0c ",(0,r.kt)("br",null),"\n\u27a1\ufe0f \u4f46\u662f\u9019\u6642\u5019\u5462\uff0c\u4ed6\u53c8\u5c07\u5f97\u5230\u7684 Public key \u548c Personal info \u53bb hash\uff0c\u770b\u770b\u9019\u5169\u500b\u8cc7\u6599\u6709\u6c92\u6709\u88ab\u8abf\u5305\u904e ",(0,r.kt)("br",null),"\n\u27a1\ufe0f \u5c07 Public key \u548c Personal info \u9032\u884c\u96dc\u6e4a\u5f97\u5230\u4e00\u500b\u65b0\u7684 info digest \u6642 ",(0,r.kt)("br",null),"\n\u27a1\ufe0f \u6bd4\u5c0d\u6211\u5011\u89e3\u5bc6\u5f97\u5230\u7684 Person 2 info digest\uff0c \u767c\u73fe\u4e0d\u4e00\u6a23\uff0c\u4ee3\u8868 Public key \u548c Personal info \u78ba\u5be6\u6709\u88ab\u7be1\u6539\u904e ",(0,r.kt)("br",null),(0,r.kt)("br",null)),(0,r.kt)("p",null,"\u56e0\u6b64\uff0c\u6211\u5011\u4e5f\u6210\u529f\u5316\u89e3\u4e86\u99ed\u5ba2\u7684\u653b\u64ca"),(0,r.kt)("br",null),(0,r.kt)("br",null),(0,r.kt)("h2",{id:"\u7e3d\u7d50"},"\u7e3d\u7d50"),(0,r.kt)("p",null,"\u6240\u4ee5\u5462\uff0c\u7e3d\u7d50\u5982\u4e0b\uff1a"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"\u6211\u5011\u900f\u904e Certificate Authority \u4f86\u78ba\u4fdd\u6211\u5011\u7684\u9a57\u8b49\u6a5f\u5236 (\u5373\u6211\u5011\u7684\u6578\u4f4d\u7c3d\u7ae0)\u4e0d\u6703\u88ab\u66ff\u63db\u6389\uff0c\u4e00\u5b9a\u662f Person 2 \u767c\u9001\u7684"),(0,r.kt)("li",{parentName:"ul"},"\u518d\u900f\u904e\u6578\u4f4d\u7c3d\u7ae0\u4f86\u5224\u65b7\u63a5\u6536\u5230\u7684 Public key \u4e00\u5b9a\u662f Person 2 \u767c\u9001\u7684")),(0,r.kt)("br",null),(0,r.kt)("p",null,"\u5c31\u53ef\u4ee5\u78ba\u4fdd Person 1 \u5b89\u5168\u7684\u62ff\u5230 Person 2 \u7684 Public key\uff0c\u9032\u800c\u9032\u884c\u5b89\u5168\u7684\u7db2\u8def\u50b3\u8f38\u4f5c\u696d"),(0,r.kt)("br",null),(0,r.kt)("br",null))}p.isMDXComponent=!0}}]);