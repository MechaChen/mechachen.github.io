"use strict";(self.webpackChunkbenson_doc=self.webpackChunkbenson_doc||[]).push([[2076],{3905:(t,e,n)=>{n.d(e,{Zo:()=>s,kt:()=>f});var r=n(7294);function l(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function i(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function a(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?i(Object(n),!0).forEach((function(e){l(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function o(t,e){if(null==t)return{};var n,r,l=function(t,e){if(null==t)return{};var n,r,l={},i=Object.keys(t);for(r=0;r<i.length;r++)n=i[r],e.indexOf(n)>=0||(l[n]=t[n]);return l}(t,e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);for(r=0;r<i.length;r++)n=i[r],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(l[n]=t[n])}return l}var c=r.createContext({}),k=function(t){var e=r.useContext(c),n=e;return t&&(n="function"==typeof t?t(e):a(a({},e),t)),n},s=function(t){var e=k(t.components);return r.createElement(c.Provider,{value:e},t.children)},p="mdxType",u={inlineCode:"code",wrapper:function(t){var e=t.children;return r.createElement(r.Fragment,{},e)}},m=r.forwardRef((function(t,e){var n=t.components,l=t.mdxType,i=t.originalType,c=t.parentName,s=o(t,["components","mdxType","originalType","parentName"]),p=k(n),m=l,f=p["".concat(c,".").concat(m)]||p[m]||u[m]||i;return n?r.createElement(f,a(a({ref:e},s),{},{components:n})):r.createElement(f,a({ref:e},s))}));function f(t,e){var n=arguments,l=e&&e.mdxType;if("string"==typeof t||l){var i=n.length,a=new Array(i);a[0]=m;var o={};for(var c in e)hasOwnProperty.call(e,c)&&(o[c]=e[c]);o.originalType=t,o[p]="string"==typeof t?t:l,a[1]=o;for(var k=2;k<i;k++)a[k]=n[k];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},6823:(t,e,n)=>{n.r(e),n.d(e,{assets:()=>c,contentTitle:()=>a,default:()=>u,frontMatter:()=>i,metadata:()=>o,toc:()=>k});var r=n(7462),l=(n(7294),n(3905));const i={sidebar_label:"[HTTPS] 1.1 - Sniffing attack (\u55c5\u63a2\u653b\u64ca)",title:"[HTTPS] 1.1 - Sniffing attack (\u55c5\u63a2\u653b\u64ca)",tags:["Security","HTTPS"]},a=void 0,o={unversionedId:"Network/https-1-sniffing-attack",id:"Network/https-1-sniffing-attack",title:"[HTTPS] 1.1 - Sniffing attack (\u55c5\u63a2\u653b\u64ca)",description:"\u554f\u984c\uff1aSniffing attack (\u55c5\u63a2\u653b\u64ca)",source:"@site/docs/Network/https-1-sniffing-attack.mdx",sourceDirName:"Network",slug:"/Network/https-1-sniffing-attack",permalink:"/docs/Network/https-1-sniffing-attack",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/Network/https-1-sniffing-attack.mdx",tags:[{label:"Security",permalink:"/docs/tags/security"},{label:"HTTPS",permalink:"/docs/tags/https"}],version:"current",lastUpdatedAt:1699549132,formattedLastUpdatedAt:"Nov 9, 2023",frontMatter:{sidebar_label:"[HTTPS] 1.1 - Sniffing attack (\u55c5\u63a2\u653b\u64ca)",title:"[HTTPS] 1.1 - Sniffing attack (\u55c5\u63a2\u653b\u64ca)",tags:["Security","HTTPS"]},sidebar:"tutorialSidebar",previous:{title:"[HTTP] \u7c21\u55ae\u6613\u7528\u7684 HTTP/0.9 ~ HTTP/1.1",permalink:"/docs/Network/http-history-1-http-1"},next:{title:"[HTTPS] 1.2 - Middle man attack (\u4e2d\u9593\u4eba\u653b\u64ca)",permalink:"/docs/Network/https-2-middle-man-attack"}},c={},k=[{value:"\u554f\u984c\uff1aSniffing attack (\u55c5\u63a2\u653b\u64ca)",id:"\u554f\u984csniffing-attack-\u55c5\u63a2\u653b\u64ca",level:2},{value:"\u89e3\u65b9\u4e00\uff1aSymmetric encryption (\u5c0d\u7a31\u52a0\u5bc6)",id:"\u89e3\u65b9\u4e00symmetric-encryption-\u5c0d\u7a31\u52a0\u5bc6",level:2},{value:"\u539f\u7406",id:"\u539f\u7406",level:3},{value:"\u65b0\u554f\u984c\uff1aKey stolen",id:"\u65b0\u554f\u984ckey-stolen",level:3},{value:"\u89e3\u65b9\u4e8c\uff1aAsymmetric encryption (\u975e\u5c0d\u7a31\u52a0\u5bc6)",id:"\u89e3\u65b9\u4e8casymmetric-encryption-\u975e\u5c0d\u7a31\u52a0\u5bc6",level:2},{value:"\u539f\u7406",id:"\u539f\u7406-1",level:3},{value:"\u5b8c\u7f8e\u9632\u79a6",id:"\u5b8c\u7f8e\u9632\u79a6",level:3},{value:"\u7e3d\u7d50",id:"\u7e3d\u7d50",level:2}],s={toc:k},p="wrapper";function u(t){let{components:e,...n}=t;return(0,l.kt)(p,(0,r.Z)({},s,n,{components:e,mdxType:"MDXLayout"}),(0,l.kt)("h2",{id:"\u554f\u984csniffing-attack-\u55c5\u63a2\u653b\u64ca"},"\u554f\u984c\uff1aSniffing attack (\u55c5\u63a2\u653b\u64ca)"),(0,l.kt)("p",null,"\u5728 HTTP \u4e0a\uff0c\u6211\u5011\u7684\u8cc7\u6599\u90fd\u662f\u4ee5 Plain Text \u50b3\u8f38\u7684\uff0c\u6c92\u6709\u4efb\u4f55\u7684\u4fdd\u8b77\uff0c",(0,l.kt)("br",null),"\n\u5c31\u597d\u50cf\u5728\u88f8\u5954\u4e00\u6a23\uff0c\u4efb\u4f55\u4eba\u90fd\u53ef\u4ee5\u8f15\u6613\u7684\u76e3\u807d\u4e26\u53d6\u5f97\u8cc7\u6599 ",(0,l.kt)("br",null),(0,l.kt)("br",null)),(0,l.kt)("figure",{style:{marginLeft:0}},(0,l.kt)("img",{src:"/img/sniffing-attack.png",width:"500"}),(0,l.kt)("figcaption",null,"\u5716\u7247\u4f86\u6e90\uff1a",(0,l.kt)("a",{href:"https://dzone.com/articles/what-is-a-sniffing-attack"},"https://dzone.com/articles/what-is-a-sniffing-attack"))),(0,l.kt)("br",null),(0,l.kt)("p",null,"\u90a3\u6211\u5011\u50b3\u8f38\u7684\u8cc7\u6599\u5c31\u6703\u8f15\u6613\u7684\u88ab\u7aca\u53d6\u8d70"),(0,l.kt)("br",null),(0,l.kt)("h2",{id:"\u89e3\u65b9\u4e00symmetric-encryption-\u5c0d\u7a31\u52a0\u5bc6"},"\u89e3\u65b9\u4e00\uff1aSymmetric encryption (\u5c0d\u7a31\u52a0\u5bc6)"),(0,l.kt)("h3",{id:"\u539f\u7406"},"\u539f\u7406"),(0,l.kt)("p",null,"\u9019\u6642\u5462\uff0c\u6211\u5011\u70ba\u4e86\u4e0d\u88ab\u76e3\u807d\u8005\u8f15\u6613\u8b80\u53d6\u6211\u5011\u7684\u8cc7\u6599\uff0c\u6211\u5011\u53ef\u4ee5\u505a\u52a0\u5bc6 (Encryption) \u7684\u52d5\u4f5c\uff0c",(0,l.kt)("br",null),"\n\u6211\u5011\u5148\u7528\u6700\u7c21\u55ae\u7684\u5c0d\u7a31\u52a0\u5bc6 (\u4e5f\u5c31\u662f\u8aaa\uff0c\u96d9\u65b9\u7684\u5bc6\u9470\u90fd\u662f\u540c\u4e00\u628a)\uff0c\u4e26\u52a0\u5bc6\u6211\u5011\u7684\u8a0a\u606f\uff0c",(0,l.kt)("br",null),"\n\u6d41\u7a0b\u5982\u4e0b\uff1a"),(0,l.kt)("ol",null,(0,l.kt)("li",{parentName:"ol"},"Person 1 \u5c07\u9470\u5319\u50b3\u7d66 Person 2"),(0,l.kt)("li",{parentName:"ol"},"Person 1 \u5c07\u50b3\u8f38\u8cc7\u6599\u7528\u6b64\u9470\u5319\u52a0\u5bc6\uff0cPerson 2 \u7528\u6b64\u9470\u5319\u89e3\u5bc6\uff0c\u89e3\u8b80\u8a0a\u606f")),(0,l.kt)("br",null),(0,l.kt)("img",{src:"/img/symmetric-encryption.png",width:"800"}),(0,l.kt)("br",null),(0,l.kt)("br",null),(0,l.kt)("br",null),(0,l.kt)("br",null),(0,l.kt)("br",null),(0,l.kt)("p",null,"\u9019\u6642\u5019\uff0c\u6211\u5011\u50b3\u8f38\u7684\u8cc7\u6599\u5c31\u6703\u662f\u52a0\u5bc6\u904e\u7684\u8cc7\u8a0a\uff0c\u99ed\u5ba2\u5c31\u7121\u6cd5\u8f15\u6613\u89e3\u8b80\u4e86"),(0,l.kt)("img",{src:"/img/unhackable-symmetric-encryption.png",width:"800"}),(0,l.kt)("br",null),(0,l.kt)("br",null),(0,l.kt)("admonition",{title:"\u70ba\u4ec0\u9ebc\u4e0d\u7528 Encode (\u7de8\u78bc) \u5462\uff1f",type:"info"},(0,l.kt)("p",{parentName:"admonition"},"\u56e0\u70ba\u7de8\u78bc\u7684\u76ee\u7684\u53ea\u662f\u5c07\u6211\u5011\u7684\u8cc7\u6599\u8f49\u63db\u6210\u5176\u4ed6\u8a9e\u8a00\uff0c\n\u5982\u679c\u99ed\u5ba2\u77e5\u9053\u6211\u5011\u662f\u4f7f\u7528\u4ec0\u9ebc\u8a9e\u8a00\uff0c\u4ed6\u53ef\u4ee5\u8f49\u63db\u56de\u4f86\uff0c\n\u6211\u5011\u7684\u8cc7\u6599\u4e00\u6a23\u6703\u88ab\u770b\u5149")),(0,l.kt)("admonition",{title:"\u70ba\u4ec0\u9ebc\u4e0d\u7528 Hash (\u96dc\u6e4a) \u5462\uff1f",type:"info"},(0,l.kt)("p",{parentName:"admonition"},"\u56e0\u70ba\u96dc\u6e4a\u7684\u76ee\u7684\u662f\u8b93\u9001\u51fa\u65b9\u7684\u8cc7\u6599\u7121\u6cd5\u88ab\u89e3\u8b80\uff0c\n\u9019\u6a23\u7684\u8a71\u53d6\u5f97\u65b9\u4e5f\u6c92\u8fa6\u6cd5\u8b80\u53d6\u8cc7\u6599")),(0,l.kt)("br",null),(0,l.kt)("h3",{id:"\u65b0\u554f\u984ckey-stolen"},"\u65b0\u554f\u984c\uff1aKey stolen"),(0,l.kt)("p",null,"\u4f46\u9019\u7a2e\u65b9\u6cd5\u9084\u662f\u6709\u500b\u5c0f\u6f0f\u6d1e\uff0c\u90a3\u5c31\u662f"),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},(0,l.kt)("strong",{parentName:"p"},"\u7576\u7b2c\u4e00\u6b21\u50b3\u8f38\u7684\u9470\u5319\u88ab\u5077\u6642\uff0c\u99ed\u5ba2\u5c31\u53ef\u4ee5\u89e3\u5bc6\u4e86"))),(0,l.kt)("br",null),(0,l.kt)("img",{src:"/img/sym-key-stolen.png",width:"650"}),(0,l.kt)("img",{src:"/img/crack-sym-encrypt.png",width:"800"}),(0,l.kt)("br",null),(0,l.kt)("br",null),(0,l.kt)("p",null,"\u56e0\u6b64\uff0c\u5c0d\u65bc Sniffing attack\uff0c\u6211\u5011\u50c5\u7528\u5c0d\u7a31\u52a0\u5bc6\u9084\u662f\u7121\u6cd5\u5b8c\u7f8e\u89e3\u6c7a"),(0,l.kt)("br",null),(0,l.kt)("h2",{id:"\u89e3\u65b9\u4e8casymmetric-encryption-\u975e\u5c0d\u7a31\u52a0\u5bc6"},"\u89e3\u65b9\u4e8c\uff1aAsymmetric encryption (\u975e\u5c0d\u7a31\u52a0\u5bc6)"),(0,l.kt)("p",null,"\u56e0\u6b64\uff0c\u70ba\u4e86\u89e3\u6c7a\u9019\u500b\u554f\u984c\uff0c\u6211\u5011\u5c31\u6709\u975e\u5c0d\u7a31\u52a0\u5bc6\u4f86\u89e3\u6c7a\u9019\u500b\u554f\u984c ",(0,l.kt)("br",null),(0,l.kt)("br",null)),(0,l.kt)("h3",{id:"\u539f\u7406-1"},"\u539f\u7406"),(0,l.kt)("ol",null,(0,l.kt)("li",{parentName:"ol"},"\u6211\u5011\u5728\u63a5\u6536\u8a0a\u606f\u65b9 (Person 2) \u7522\u751f\u4e00\u7d44 Public key \u548c Private key"),(0,l.kt)("li",{parentName:"ol"},"\u5c07 Public key \u7d66\u50b3\u9001\u8a0a\u606f\u65b9 (Person 1)"),(0,l.kt)("li",{parentName:"ol"},"Person 1 \u7528 Public key \u52a0\u5bc6\u8cc7\u6599\uff0c\u5230\u9054 Person 2 \u6642\u5728\u7528 Private key \u89e3\u958b")),(0,l.kt)("br",null),(0,l.kt)("p",null,"\u9019\u6a23\u4e00\u4f86\uff0c\u5c31\u53ea\u6709 Person 2 \u80fd\u770b\u5230\u89e3\u5bc6\u5f8c\u7684\u8cc7\u6599\uff0c ",(0,l.kt)("br",null),"\n\u8a73\u7d30\u904e\u7a0b\u5982\u4e0b\u5716\uff1a"),(0,l.kt)("br",null),(0,l.kt)("img",{src:"/img/async-encryption.png"}),(0,l.kt)("br",null),(0,l.kt)("br",null),(0,l.kt)("h3",{id:"\u5b8c\u7f8e\u9632\u79a6"},"\u5b8c\u7f8e\u9632\u79a6"),(0,l.kt)("p",null,"\u9019\u6642\u5019\uff0c\u5982\u679c\u6709\u99ed\u5ba2\u5617\u8a66\u505a Sniffing attack\uff0c\u6703\u767c\u751f\u4ec0\u9ebc\u4e8b\u5462\uff1f"),(0,l.kt)("br",null),(0,l.kt)("p",null,"\u5982\u679c\u99ed\u5ba2\u5728 step 2\uff0c\u5c07\u6211\u5011\u7684 Public key \u7d66\u5077\u8d70"),(0,l.kt)("img",{src:"/img/attack-async-encrypt-1.png"}),(0,l.kt)("img",{src:"/img/attack-async-encrypt-2.png"}),(0,l.kt)("br",null),(0,l.kt)("br",null),(0,l.kt)("p",null,"\u7576\u6211\u5011\u5728 Step 3 \u6642\uff0c\u6211\u5011\u7d93 Public key \u50b3\u8f38\u7684\u8cc7\u6599\uff0c",(0,l.kt)("br",null),"\n\u99ed\u5ba2\u4e5f\u6c92\u8fa6\u6cd5\u7528\u5b83\u53d6\u5f97\u7684 Public key \u89e3\u958b\uff0c\u9019\u6a23\u5c31\u89e3\u6c7a\u554f\u984c\u4e86"),(0,l.kt)("br",null),(0,l.kt)("h2",{id:"\u7e3d\u7d50"},"\u7e3d\u7d50"),(0,l.kt)("p",null,"\u6211\u5011\u5728 HTTP \u5354\u8b70\u4e0a\u50b3\u8f38\u6642\uff0c\u53ef\u4ee5\u5229\u7528 ",(0,l.kt)("strong",{parentName:"p"},(0,l.kt)("inlineCode",{parentName:"strong"},"Asymmetric encryption (\u975e\u5c0d\u7a31\u52a0\u5bc6)")),"\uff0c",(0,l.kt)("br",null),"\n\u6210\u529f\u62b5\u64cb ",(0,l.kt)("strong",{parentName:"p"},(0,l.kt)("inlineCode",{parentName:"strong"},"Sniffing attack (\u55c5\u63a2\u653b\u64ca)"))),(0,l.kt)("br",null))}u.isMDXComponent=!0}}]);