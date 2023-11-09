"use strict";(self.webpackChunkbenson_doc=self.webpackChunkbenson_doc||[]).push([[1619],{3905:(e,t,r)=>{r.d(t,{Zo:()=>m,kt:()=>c});var n=r(7294);function l(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){l(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,l=function(e,t){if(null==e)return{};var r,n,l={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(l[r]=e[r]);return l}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(l[r]=e[r])}return l}var p=n.createContext({}),s=function(e){var t=n.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},m=function(e){var t=s(e.components);return n.createElement(p.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},k=n.forwardRef((function(e,t){var r=e.components,l=e.mdxType,a=e.originalType,p=e.parentName,m=i(e,["components","mdxType","originalType","parentName"]),u=s(r),k=l,c=u["".concat(p,".").concat(k)]||u[k]||d[k]||a;return r?n.createElement(c,o(o({ref:t},m),{},{components:r})):n.createElement(c,o({ref:t},m))}));function c(e,t){var r=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var a=r.length,o=new Array(a);o[0]=k;var i={};for(var p in t)hasOwnProperty.call(t,p)&&(i[p]=t[p]);i.originalType=e,i[u]="string"==typeof e?e:l,o[1]=i;for(var s=2;s<a;s++)o[s]=r[s];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}k.displayName="MDXCreateElement"},8215:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>p,contentTitle:()=>o,default:()=>d,frontMatter:()=>a,metadata:()=>i,toc:()=>s});var n=r(7462),l=(r(7294),r(3905));const a={sidebar_position:1,sidebar_label:"[DNS] 3. DNS resolver - \u5e6b\u4f60\u627e\u4f3a\u670d\u5668\u7684 IP address",title:"[DNS] 3. DNS resolver - \u5e6b\u4f60\u627e\u4f3a\u670d\u5668\u7684 IP address",tags:["DNS"]},o=void 0,i={unversionedId:"Network/dns-3-dns-resolver",id:"Network/dns-3-dns-resolver",title:"[DNS] 3. DNS resolver - \u5e6b\u4f60\u627e\u4f3a\u670d\u5668\u7684 IP address",description:"\u4eca\u5929\u4e00\u6a23\u7e7c\u7e8c\u4ecb\u7d39 DNS\uff0c\u6211\u5c07\u4ecb\u7d39\uff1a",source:"@site/docs/Network/dns-3-dns-resolver.mdx",sourceDirName:"Network",slug:"/Network/dns-3-dns-resolver",permalink:"/docs/Network/dns-3-dns-resolver",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/Network/dns-3-dns-resolver.mdx",tags:[{label:"DNS",permalink:"/docs/tags/dns"}],version:"current",lastUpdatedAt:1699549132,formattedLastUpdatedAt:"Nov 9, 2023",sidebarPosition:1,frontMatter:{sidebar_position:1,sidebar_label:"[DNS] 3. DNS resolver - \u5e6b\u4f60\u627e\u4f3a\u670d\u5668\u7684 IP address",title:"[DNS] 3. DNS resolver - \u5e6b\u4f60\u627e\u4f3a\u670d\u5668\u7684 IP address",tags:["DNS"]},sidebar:"tutorialSidebar",previous:{title:"[DNS] 2. \u7db2\u8def\u4e16\u754c\u904b\u4f5c\u539f\u7406 & \u672c\u5730 DNS cache",permalink:"/docs/Network/dns-2-dns-cache"},next:{title:"[DNS] 4. DNS \u5728\u524d\u7aef\u7684\u61c9\u7528",permalink:"/docs/Network/dns-4-application-in-frontend"}},p={},s=[{value:"DNS resolver (Resolving Name Server)",id:"dns-resolver-resolving-name-server",level:2},{value:"Root Name Server",id:"root-name-server",level:3},{value:"TLD (Top Level Domain) Server",id:"tld-top-level-domain-server",level:3},{value:"Authoritative Name Server",id:"authoritative-name-server",level:3},{value:"\u7d50\u8ad6",id:"\u7d50\u8ad6",level:2},{value:"\u53c3\u8003\u8cc7\u8a0a",id:"\u53c3\u8003\u8cc7\u8a0a",level:3}],m={toc:s},u="wrapper";function d(e){let{components:t,...r}=e;return(0,l.kt)(u,(0,n.Z)({},m,r,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("p",null,"\u4eca\u5929\u4e00\u6a23\u7e7c\u7e8c\u4ecb\u7d39 DNS\uff0c\u6211\u5c07\u4ecb\u7d39\uff1a"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"DNS resolver \u7684\u904b\u4f5c\u6d41\u7a0b"),(0,l.kt)("li",{parentName:"ul"},"\u5982\u4f55\u512a\u5316 DNS \u8acb\u6c42"),(0,l.kt)("li",{parentName:"ul"},"\u524d\u7aef\u90e8\u7f72 & DNS")),(0,l.kt)("br",null),(0,l.kt)("h2",{id:"dns-resolver-resolving-name-server"},"DNS resolver (Resolving Name Server)"),(0,l.kt)("p",null,"\u7576 local \u7aef\u7684 Browser \u548c OS \u90fd\u6c92\u6709\u5c0d\u61c9\u7684 DNS cache \u6642\uff0c\u6211\u5011\u5c31\u6703\u8acb\u6c42\u672c\u5730\u7684 DNS resolver (\u6216 Resolving Name Server) \u4f86\u5e6b\u6211\u5011\u627e\u5230 Domain name \u5c0d\u61c9\u7684 IP address"),(0,l.kt)("p",null,"\u5927\u81f4\u7684\u6d41\u7a0b\u5716\u5982\u4e0b\uff1a"),(0,l.kt)("figure",null,(0,l.kt)("img",{src:"https://ithelp.ithome.com.tw/upload/images/20231002/20148944FhJndag8C2.png",alt:"",width:"500"})),(0,l.kt)("p",null,"\u57fa\u672c\u4e0a\u5c31\u662f\uff1a "),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js"},"Root Nameservers --\x3e TLD Nameservers --\x3e Authoritative Nameservers\n")),(0,l.kt)("br",null),(0,l.kt)("br",null),(0,l.kt)("p",null,"\u5b8c\u6574\u7684\u6d41\u7a0b\u5716\u5982\u4e0b\uff1a"),(0,l.kt)("br",null),(0,l.kt)("img",{src:"https://ithelp.ithome.com.tw/upload/images/20231002/20148944vMeBBpbYd3.png",alt:"",width:"800"}),(0,l.kt)("figcaption",null,"(\u5716\u7247\u4f86\u6e90\uff1ahttps://www.youtube.com/watch?v=27r4Bzuj5NQ)"),(0,l.kt)("br",null),(0,l.kt)("br",null),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-mermaid"},"asdfl --\x3e asdfoi\n")),(0,l.kt)("p",null,"\u5927\u81f4\u4e0a\u7684\u6d41\u7a0b\u70ba"),(0,l.kt)("ol",null,(0,l.kt)("li",{parentName:"ol"},"\u627e\u5c0b\u672c\u5730\u7684 cache"),(0,l.kt)("li",{parentName:"ol"},"\u5411 DNS resolver \u767c\u51fa\u8acb\u6c42\uff0c\u5e6b\u6211\u5011\u505a DNS query"),(0,l.kt)("li",{parentName:"ol"},"DNS resolver \u8a62\u554f Root Name Server\uff0c\u627e\u5230\u5c0d\u61c9\u7684 TLD Server"),(0,l.kt)("li",{parentName:"ol"},"DNS resolver \u8a62\u554f TLD Server\uff0c\u627e\u5230\u5c0d\u61c9\u7684 Authoritative Name Server"),(0,l.kt)("li",{parentName:"ol"},"DNS resolver \u8a62\u554f Authoritative Server\uff0c\u627e\u5230\u5c0d\u61c9\u7684 IP address")),(0,l.kt)("br",null),(0,l.kt)("br",null),(0,l.kt)("p",null,"\u800c DNS resolver \u901a\u5e38\u7531\u4ee5\u4e0b\u5169\u8005\u6240\u63d0\u4f9b\uff1a"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"ISP (Internet Service Provider)"),(0,l.kt)("li",{parentName:"ul"},"DNS Provider (e.g. Google DNS ",(0,l.kt)("inlineCode",{parentName:"li"},"<8.8.8.8>"),", Cloudfare ",(0,l.kt)("inlineCode",{parentName:"li"},"<1.1.1.1>"),")")),(0,l.kt)("figure",null,(0,l.kt)("img",{src:"https://ithelp.ithome.com.tw/upload/images/20231002/20148944mXgfTc1aLt.png",alt:"DNS resolver"})),(0,l.kt)("br",null),(0,l.kt)("br",null),(0,l.kt)("p",null,"\u4e0b\u9762\u6211\u5011\u6703\u4ee5\u67e5\u627e ",(0,l.kt)("a",{parentName:"p",href:"http://www.bensonchen.com"},"www.bensonchen.com")," \u70ba\u4f8b"),(0,l.kt)("br",null),(0,l.kt)("h3",{id:"root-name-server"},"Root Name Server"),(0,l.kt)("p",null,"\u5728\u67e5\u627e ",(0,l.kt)("inlineCode",{parentName:"p"},"www.bensonchen.com")," \u6642\uff0c\u5be6\u969b\u4e0a\uff0c\u6211\u5011\u8f38\u5165\u7684\u8cc7\u8a0a\u662f ",(0,l.kt)("inlineCode",{parentName:"p"},"www.bensonchen.com.")," \u6216\u662f ",(0,l.kt)("inlineCode",{parentName:"p"},"www.bensonchen.com.root")),(0,l.kt)("p",null,"\u6700\u5f8c\u9762\u7684 ",(0,l.kt)("inlineCode",{parentName:"p"},".")," \u6216 ",(0,l.kt)("inlineCode",{parentName:"p"},".root")," \u7684\u90e8\u5206\uff0c\u5c31\u6703\u5e6b\u6211\u5011\u53bb\u8ddf root name server \u505a\u8acb\u6c42\uff0c\u8acb\u6b64 server \u5e6b\u6211\u5011\u627e\u5230\u4e0b\u4e00\u968e\u6bb5\uff0c\u4e5f\u5c31\u662f ",(0,l.kt)("inlineCode",{parentName:"p"},".com")," \u7684 TLD servers\uff0c",(0,l.kt)("inlineCode",{parentName:"p"},".com")," \u7684 TLD servers \u6e05\u55ae\u5982\u4e0b\uff1a"),(0,l.kt)("figure",null,(0,l.kt)("img",{src:"https://ithelp.ithome.com.tw/upload/images/20231002/20148944KoN7Kxxbkc.png",alt:"TLD Nameservers",width:"300"})),(0,l.kt)("br",null),(0,l.kt)("br",null),(0,l.kt)("h3",{id:"tld-top-level-domain-server"},"TLD (Top Level Domain) Server"),(0,l.kt)("p",null,"TLD\uff08Top-Level Domain\uff0c\u9802\u7d1a\u57df\u540d\uff09\u662f\u6307\u57df\u540d\u7cfb\u7d71\uff08DNS\uff09\u4e2d\u7684\u6700\u9ad8\u7d1a\u5225\u57df\u540d\u3002\u5b83\u5011\u662f\u57df\u540d\u7684\u6700\u5f8c\u4e00\u90e8\u5206\uff0c\u4f8b\u5982 ",(0,l.kt)("inlineCode",{parentName:"p"},".com"),"\u3001",(0,l.kt)("inlineCode",{parentName:"p"},".org"),"\u3001",(0,l.kt)("inlineCode",{parentName:"p"},".net")," \u7b49\u3002\u6839\u64da\u5176\u6027\u8cea\u548c\u76ee\u7684\uff0cTLD \u53ef\u4ee5\u5206\u70ba\u4ee5\u4e0b\u5e7e\u985e\uff1a"),(0,l.kt)("ol",null,(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("p",{parentName:"li"},(0,l.kt)("strong",{parentName:"p"},"gTLD (Generic Top-Level Domains, \u901a\u7528\u9802\u7d1a\u57df\u540d)"),":\ngTLD \u662f\u958b\u653e\u7d66\u6240\u6709\u4eba\u8a3b\u518a\u7684\uff0c\u4e26\u4e14\u901a\u5e38\u6c92\u6709\u7279\u5b9a\u7684\u4f7f\u7528\u9650\u5236\u3002\u4f8b\u5982\uff0c",(0,l.kt)("inlineCode",{parentName:"p"},".com"),"\u3001",(0,l.kt)("inlineCode",{parentName:"p"},".org")," \u548c ",(0,l.kt)("inlineCode",{parentName:"p"},".net")," \u662f\u6700\u5e38\u898b\u7684 gTLD\u3002\u8fd1\u5e74\u4f86\uff0c\u96a8\u8457\u65b0\u7684 gTLD\uff08\u5982 ",(0,l.kt)("inlineCode",{parentName:"p"},".app"),"\u3001",(0,l.kt)("inlineCode",{parentName:"p"},".blog"),"\u3001",(0,l.kt)("inlineCode",{parentName:"p"},".guru")," \u7b49\uff09\u7684\u63a8\u51fa\uff0cgTLD \u7684\u7bc4\u7587\u4e5f\u5f97\u5230\u4e86\u64f4\u5c55")),(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("p",{parentName:"li"},(0,l.kt)("strong",{parentName:"p"},"ccTLD (Country Code Top-Level Domains, \u570b\u5bb6\u4ee3\u78bc\u9802\u7d1a\u57df\u540d)"),":\nccTLD \u662f\u4ee3\u8868\u7279\u5b9a\u570b\u5bb6\u6216\u5730\u5340\u7684\u9802\u7d1a\u57df\u540d\uff0c\u4f8b\u5982 ",(0,l.kt)("inlineCode",{parentName:"p"},".uk")," \u4ee3\u8868\u82f1\u570b\uff0c",(0,l.kt)("inlineCode",{parentName:"p"},".cn")," \u4ee3\u8868\u4e2d\u570b\uff0c",(0,l.kt)("inlineCode",{parentName:"p"},".jp")," \u4ee3\u8868\u65e5\u672c\u3002ccTLD \u901a\u5e38\u7531\u76f8\u61c9\u570b\u5bb6\u6216\u5730\u5340\u7684\u57df\u540d\u8a3b\u518a\u6a5f\u69cb\u7ba1\u7406\uff0c\u4e26\u53ef\u80fd\u6709\u7279\u5b9a\u7684\u8a3b\u518a\u548c\u4f7f\u7528\u8981\u6c42")),(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("p",{parentName:"li"},(0,l.kt)("strong",{parentName:"p"},"sTLD (Sponsored Top-Level Domains, \u8d0a\u52a9\u9802\u7d1a\u57df\u540d)"),":\nsTLD \u662f\u7531\u7279\u5b9a\u793e\u7fa4\u6216\u7d44\u7e54\u8d0a\u52a9\u548c\u7ba1\u7406\u7684\u9802\u7d1a\u57df\u540d\u3002\u4f8b\u5982\uff0c",(0,l.kt)("inlineCode",{parentName:"p"},".gov")," \u662f\u7531\u7f8e\u570b\u653f\u5e9c\u8d0a\u52a9\u7684\uff0c\u5c08\u4f9b\u653f\u5e9c\u6a5f\u69cb\u4f7f\u7528\uff1b",(0,l.kt)("inlineCode",{parentName:"p"},".edu")," \u662f\u5c08\u4f9b\u6559\u80b2\u6a5f\u69cb\u4f7f\u7528\u7684"))),(0,l.kt)("br",null),(0,l.kt)("br",null),(0,l.kt)("p",null,"\u4e3b\u8981\u5340\u5225\u5728\u65bc gTLD \u662f\u901a\u7528\u7684\uff0c\u901a\u5e38\u6c92\u6709\u7279\u5b9a\u7684\u5730\u7406\u6216\u7d44\u7e54\u9650\u5236\uff0c\u800c ccTLD \u548c sTLD \u5247\u901a\u5e38\u8207\u7279\u5b9a\u7684\u570b\u5bb6\u3001\u5730\u5340\u6216\u7d44\u7e54\u76f8\u95dc\uff0c\u53ef\u80fd\u6709\u66f4\u591a\u7684\u8a3b\u518a\u548c\u4f7f\u7528\u9650\u5236\u3002\u8fd1\u5e74\u4f86\uff0c\u96a8\u8457\u65b0\u7684 gTLD \u7684\u63a8\u51fa\uff0c\u9802\u7d1a\u57df\u540d\u7684\u7bc4\u7587\u548c\u591a\u6a23\u6027\u5f97\u5230\u4e86\u64f4\u5c55\uff0c\u8b93\u7528\u6236\u6709\u66f4\u591a\u9078\u64c7\u4f86\u9078\u64c7\u6700\u7b26\u5408\u4ed6\u5011\u9700\u6c42\u7684\u57df\u540d"),(0,l.kt)("br",null),(0,l.kt)("p",null,"\u800c ",(0,l.kt)("inlineCode",{parentName:"p"},".com")," \u7684\u90e8\u5206\uff0c\u5c31\u6703\u5e6b\u6211\u5011\u53bb\u8ddf TLD servers \u505a\u8acb\u6c42\uff0c\u8acb\u9019\u4e9b servers \u5e6b\u6211\u5011\u627e\u5230\u4e0b\u4e00\u968e\u6bb5\u7684 Authoritative Name Server\uff0c\u4e5f\u5c31\u662f ",(0,l.kt)("inlineCode",{parentName:"p"},".bensonchen.com")," \u7684 name server"),(0,l.kt)("br",null),(0,l.kt)("br",null),(0,l.kt)("br",null),(0,l.kt)("h3",{id:"authoritative-name-server"},"Authoritative Name Server"),(0,l.kt)("p",null,"\u9019\u90e8\u5206\u6703\u5e6b\u6211\u5011\u627e\u5230\u6700\u5f8c\u7684 IP address\uff0c\u4e14\u6211\u5011\u5728\u8a2d\u5b9a A record \u6216 CNAME \u6642(\u5f8c\u7e8c\u5728 CDN \u7684\u90e8\u5206\u6703\u518d\u8a73\u7d30\u8aaa\u660e)\uff0c\u5c31\u662f\u5728\u8a2d\u5b9a Authoritative Name Server\uff0c\u5e6b\u52a9\u6211\u5011\u5c07 bensonchen.com \u6307\u5230\u5c0d\u61c9\u7684 IP address\uff0c\u4e26\u56de\u50b3\u7d66\u6211\u5011\u7684\u672c\u5730\u96fb\u8166"),(0,l.kt)("br",null),(0,l.kt)("br",null),(0,l.kt)("br",null),(0,l.kt)("p",null,"\u91dd\u5c0d\u65bc DNS \u6574\u9ad4\u7684 resolve \u904e\u7a0b\u5982\u5716\u6240\u793a\uff1a"),(0,l.kt)("br",null),(0,l.kt)("figure",null,(0,l.kt)("img",{src:"https://ithelp.ithome.com.tw/upload/images/20231002/201489440yxTrhsofi.png",alt:""})),(0,l.kt)("br",null),(0,l.kt)("br",null),(0,l.kt)("br",null),(0,l.kt)("p",null,"\u4ee5\u4e0a\u5c31\u662f DNS \u904b\u4f5c\u7684\u539f\u7406\uff0c\u5e0c\u671b\u5c0d\u5927\u5bb6\u6709\u66f4\u9032\u4e00\u6b65\u7684\u4e86\u89e3\uff5e"),(0,l.kt)("br",null),(0,l.kt)("br",null),(0,l.kt)("h2",{id:"\u7d50\u8ad6"},"\u7d50\u8ad6"),(0,l.kt)("ol",null,(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("inlineCode",{parentName:"li"},".")," \u6216 ",(0,l.kt)("inlineCode",{parentName:"li"},".root")," \u7684\u90e8\u5206\u6703\u5e6b\u6211\u5011\u53bb\u8ddf Root Name Server \u505a\u8acb\u6c42\uff0c\u627e\u5230\u5c0d\u61c9\u7684 TLD Server"),(0,l.kt)("li",{parentName:"ol"},"TLD \u5206\u70ba 3 \u7a2e\uff0c\u901a\u7528\u7684 gTLD (",(0,l.kt)("inlineCode",{parentName:"li"},".com"),", ",(0,l.kt)("inlineCode",{parentName:"li"},".org"),")\u3001\u5340\u57df\u6027\u7684 ccTLD(",(0,l.kt)("inlineCode",{parentName:"li"},".uk"),", ",(0,l.kt)("inlineCode",{parentName:"li"},".,jp"),")\u3001\u7279\u5b9a\u793e\u7fa4/\u7d44\u7e54\u7684 sTLD(",(0,l.kt)("inlineCode",{parentName:"li"},".gov"),", ",(0,l.kt)("inlineCode",{parentName:"li"},".edu"),")\uff0cTLD Server \u53ef\u4ee5\u5e6b\u6211\u5011\u627e\u5230\u5c0d\u61c9\u7684 Authoritative Name Server"),(0,l.kt)("li",{parentName:"ol"},"Authoritative Name Server \u53ef\u4ee5\u5e6b\u6211\u5011\u627e\u5230\u6700\u5f8c\u76ee\u6a19\u7684 IP address\uff0c\u540c\u6642\u4e5f\u662f\u6211\u5011\u5728\u8a2d\u5b9a A Record \u548c CNAME \u7684\u90e8\u5206")),(0,l.kt)("br",null),(0,l.kt)("br",null),(0,l.kt)("h3",{id:"\u53c3\u8003\u8cc7\u8a0a"},"\u53c3\u8003\u8cc7\u8a0a"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://juejin.cn/post/7105387310698463263#heading-12"},"\u7a00\u571f\u6398\u91d1 - \u9762\u8bd5\u88c5X\uff1a\u6df1\u5165\u7406\u89e3 DNS \u89e3\u6790")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://juejin.cn/post/7221792648541536317#heading-1"},"\u7a00\u571f\u6398\u91d1 - DNS \u89e3\u6790\u4f18\u5316")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://www.youtube.com/watch?v=27r4Bzuj5NQ"},"ByteByteGo - Everything You Need to Know About DNS: Crash Course System Design #4")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://www.youtube.com/watch?v=mpQZVYPuDGU"},"PowerCert Animated Videos - How a DNS Server (Domain Name System) works."))),(0,l.kt)("br",null),(0,l.kt)("br",null))}d.isMDXComponent=!0}}]);