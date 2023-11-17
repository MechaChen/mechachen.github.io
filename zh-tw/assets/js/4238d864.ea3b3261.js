"use strict";(self.webpackChunkbenson_doc=self.webpackChunkbenson_doc||[]).push([[1372],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>k});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var p=r.createContext({}),s=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},c=function(e){var t=s(e.components);return r.createElement(p.Provider,{value:t},e.children)},d="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,l=e.originalType,p=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),d=s(n),m=a,k=d["".concat(p,".").concat(m)]||d[m]||u[m]||l;return n?r.createElement(k,o(o({ref:t},c),{},{components:n})):r.createElement(k,o({ref:t},c))}));function k(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=n.length,o=new Array(l);o[0]=m;var i={};for(var p in t)hasOwnProperty.call(t,p)&&(i[p]=t[p]);i.originalType=e,i[d]="string"==typeof e?e:a,o[1]=i;for(var s=2;s<l;s++)o[s]=n[s];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},8655:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>o,default:()=>u,frontMatter:()=>l,metadata:()=>i,toc:()=>s});var r=n(7462),a=(n(7294),n(3905));const l={sidebar_position:1,sidebar_label:"[DNS] 2. \u7db2\u8def\u4e16\u754c\u904b\u4f5c\u539f\u7406 & \u672c\u5730 DNS cache",title:"[DNS] 2. \u7db2\u8def\u4e16\u754c\u904b\u4f5c\u539f\u7406 & \u672c\u5730 DNS cache",tags:["DNS"]},o=void 0,i={unversionedId:"Network/dns-2-dns-cache",id:"Network/dns-2-dns-cache",title:"[DNS] 2. \u7db2\u8def\u4e16\u754c\u904b\u4f5c\u539f\u7406 & \u672c\u5730 DNS cache",description:"\u4eca\u5929\u6703\u5ef6\u7e8c DNS \u7684\u90e8\u5206\uff0c\u6b63\u5f0f\u4f86\u89e3\u91cb DNS \u5982\u4f55\u904b\u4f5c\uff0c\u548c\u5982\u4f55\u512a\u5316",source:"@site/docs/Network/dns-2-dns-cache.mdx",sourceDirName:"Network",slug:"/Network/dns-2-dns-cache",permalink:"/zh-tw/docs/Network/dns-2-dns-cache",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/Network/dns-2-dns-cache.mdx",tags:[{label:"DNS",permalink:"/zh-tw/docs/tags/dns"}],version:"current",lastUpdatedAt:1700207877,formattedLastUpdatedAt:"2023\u5e7411\u670817\u65e5",sidebarPosition:1,frontMatter:{sidebar_position:1,sidebar_label:"[DNS] 2. \u7db2\u8def\u4e16\u754c\u904b\u4f5c\u539f\u7406 & \u672c\u5730 DNS cache",title:"[DNS] 2. \u7db2\u8def\u4e16\u754c\u904b\u4f5c\u539f\u7406 & \u672c\u5730 DNS cache",tags:["DNS"]},sidebar:"tutorialSidebar",previous:{title:"[DNS] 1. \u70ba\u4ec0\u9ebc\u524d\u7aef\u8981\u77e5\u9053 DNS & request \u6548\u80fd\u76e3\u63a7",permalink:"/zh-tw/docs/Network/dns-1-why-know-dns"},next:{title:"[DNS] 3. DNS resolver - \u5e6b\u4f60\u627e\u4f3a\u670d\u5668\u7684 IP address",permalink:"/zh-tw/docs/Network/dns-3-dns-resolver"}},p={},s=[{value:"DNS \u539f\u7406\u89e3\u91cb",id:"dns-\u539f\u7406\u89e3\u91cb",level:2},{value:"Internet \u8207 IP address",id:"internet-\u8207-ip-address",level:3},{value:"\u672c\u5730\u5feb\u53d6\u67e5\u627e (DNS local cache)",id:"\u672c\u5730\u5feb\u53d6\u67e5\u627e-dns-local-cache",level:3},{value:"\u6aa2\u67e5 Browser \u7684 DNS cache",id:"\u6aa2\u67e5-browser-\u7684-dns-cache",level:4},{value:"\u6aa2\u67e5 Operating System \u7684 DNS cache",id:"\u6aa2\u67e5-operating-system-\u7684-dns-cache",level:4},{value:"\u7d50\u8ad6",id:"\u7d50\u8ad6",level:2},{value:"\u53c3\u8003\u8cc7\u8a0a",id:"\u53c3\u8003\u8cc7\u8a0a",level:3}],c={toc:s},d="wrapper";function u(e){let{components:t,...n}=e;return(0,a.kt)(d,(0,r.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"\u4eca\u5929\u6703\u5ef6\u7e8c DNS \u7684\u90e8\u5206\uff0c\u6b63\u5f0f\u4f86\u89e3\u91cb DNS \u5982\u4f55\u904b\u4f5c\uff0c\u548c\u5982\u4f55\u512a\u5316"),(0,a.kt)("br",null),(0,a.kt)("h2",{id:"dns-\u539f\u7406\u89e3\u91cb"},"DNS \u539f\u7406\u89e3\u91cb"),(0,a.kt)("h3",{id:"internet-\u8207-ip-address"},"Internet \u8207 IP address"),(0,a.kt)("p",null,"\u5728\u89e3\u91cb DNS \u524d\uff0c\u8b93\u6211\u5011\u5148\u4f86\u7c21\u55ae\u4ecb\u7d39\u4e00\u4e0b\u7db2\u8def\u4e16\u754c\u600e\u9ebc\u6e9d\u901a\u7684"),(0,a.kt)("p",null,"\u5728\u7db2\u8def\u7684\u4e16\u754c\u4e2d\uff0c\u96fb\u8166\u662f\u4f9d\u9760\u6578\u64da (digits) \u4f86\u6e9d\u901a\u7684\uff0c\u800c\u5728\u7db2\u8def\u4e16\u754c\uff0c\u96fb\u8166\u900f\u904e IP address \u8fa8\u8b58 (identify) \u5c0d\u65b9\u548c\u5c0d\u65b9\u6e9d\u901a"),(0,a.kt)("figure",null,(0,a.kt)("img",{width:"350",src:"https://ithelp.ithome.com.tw/upload/images/20231001/20148944ySvpDGeV6B.png",alt:"Computer communication with IP address"}),(0,a.kt)("figcaption",null,"(\u5716\u7247\u4f86\u6e90\uff1a",(0,a.kt)("a",{href:"https://www.youtube.com/watch?v=mpQZVYPuDGU",target:"_blank/"},"PowerCert Animated Videos")," )")),(0,a.kt)("br",null),(0,a.kt)("br",null),(0,a.kt)("p",null,"\u4f46\u5728\u4eba\u985e\u7684\u4e16\u754c\u4e2d\uff0c\u6211\u5011\u662f\u4f9d\u9760\u8a9e\u8a00\u4f86\u6e9d\u901a\u7684\uff0c\u6211\u5011\u900f\u904e\u540d\u5b57\u4f86\u8fa8\u8b58\u5c0d\u65b9\u548c\u5c0d\u65b9\u6e9d\u901a"),(0,a.kt)("figure",null,(0,a.kt)("img",{width:"350",src:"https://ithelp.ithome.com.tw/upload/images/20231001/201489443FHGZuzR3e.png",alt:"Computer communication with IP address"}),(0,a.kt)("figcaption",null,"(\u5716\u7247\u4f86\u6e90\uff1a",(0,a.kt)("a",{href:"https://www.youtube.com/watch?v=mpQZVYPuDGU",target:"_blank/"},"PowerCert Animated Videos")," )")),(0,a.kt)("br",null),(0,a.kt)("br",null),(0,a.kt)("p",null,"\u56e0\u6b64\uff0c\u82e5\u4eba\u8981\u8fa8\u8b58\u96fb\u8166\u4e14\u8207\u96fb\u8166\u6e9d\u901a\uff0c\u70ba\u4e86\u65b9\u4fbf\u6027\uff0c\u6211\u5011\u5e0c\u671b\u96fb\u8166\u7684 IP address \u53ef\u4ee5\u8f49\u63db\u6210\u53ef\u8b58\u5225\u7684\u540d\u5b57\uff0c\u4e5f\u5c31\u662f domain name\uff0c\u800c\u5c07 domain name \u8f49\u63db\u6210 IP address\uff0c\u5c31\u9700\u8981 DNS (Domain Name System) \u5e6b\u6211\u5011\u505a\u8f49\u63db"),(0,a.kt)("br",null),(0,a.kt)("br",null),(0,a.kt)("h3",{id:"\u672c\u5730\u5feb\u53d6\u67e5\u627e-dns-local-cache"},"\u672c\u5730\u5feb\u53d6\u67e5\u627e (DNS local cache)"),(0,a.kt)("p",null,"\u5728\u672c\u5730\uff0c\u5305\u62ec\u6211\u5011\u4e0b\u8f09\u7684 chrome \u700f\u89bd\u5668\uff0c\u548c\u6211\u7684\u4f5c\u696d\u7cfb\u7d71\uff0c\u90fd\u6703\u5e6b\u6211\u5011\u7de9\u5b58 (cache) \u66fe\u7d93\u5229\u7528 DNS \u67e5\u5230\u5c0d\u61c9 domain \u7684 ip address"),(0,a.kt)("br",null),(0,a.kt)("h4",{id:"\u6aa2\u67e5-browser-\u7684-dns-cache"},"\u6aa2\u67e5 Browser \u7684 DNS cache"),(0,a.kt)("p",null,"\u5728\u700f\u89bd\u5668\u4e2d\uff0c\u8f38\u5165 chrome://net-internals#DNS \uff0c\u5c31\u53ef\u4ee5\u67e5\u627e\u6211\u5011\u81ea\u5df1\u672c\u5730\u7684\u700f\u89bd\u5668\uff0c\u662f\u5426\u6709 cache \u8a72 domain \u89e3\u6790\u51fa\u7684 ip address\uff0c\u4f8b\u5982\uff0c\u7576\u6211\u5011\u67e5\u627e google.com"),(0,a.kt)("p",null,(0,a.kt)("img",{parentName:"p",src:"https://ithelp.ithome.com.tw/upload/images/20231001/201489441ogwsQ29pj.png",alt:"https://ithelp.ithome.com.tw/upload/images/20231001/201489441ogwsQ29pj.png"})),(0,a.kt)("p",null,"\u5c31\u6703\u986f\u793a "),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},'Resolved IP addresses of "google.com": ["142.250.207.14"].\n')),(0,a.kt)("p",null,"\u5c0d\u61c9 google.com \u7684 IP address \u70ba 142.250.207.14"),(0,a.kt)("br",null),(0,a.kt)("h4",{id:"\u6aa2\u67e5-operating-system-\u7684-dns-cache"},"\u6aa2\u67e5 Operating System \u7684 DNS cache"),(0,a.kt)("p",null,"\u5728\u672c\u5730\u4f5c\u696d\u7cfb\u7d71\u4e2d\uff0c\u4e5f\u6703\u7de9\u5b58 DNS \u7684\u67e5\u627e\u7d50\u679c\uff0c\u6211\u5011\u53ef\u4ee5\u5728 terminal \u8f38\u5165\u4ee5\u4e0b\u6307\u4ee4"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"nslookup <your domain>\n")),(0,a.kt)("p",null,"\u4f8b\u5982"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"nslookup google.com\n")),(0,a.kt)("br",null),(0,a.kt)("p",null,"\u5c31\u6703\u51fa\u73fe\u4ee5\u4e0b\u7d50\u679c\n",(0,a.kt)("img",{parentName:"p",src:"https://ithelp.ithome.com.tw/upload/images/20231001/2014894404ppcgbZ9f.png",alt:"https://ithelp.ithome.com.tw/upload/images/20231001/2014894404ppcgbZ9f.png"})),(0,a.kt)("p",null,"\u5176\u4e2d\u6700\u4e0a\u5c64\u7684\u90e8\u5206\uff0c\u70ba",(0,a.kt)("inlineCode",{parentName:"p"},"\u672c\u5730 DNS server")," \u7684\u8cc7\u8a0a\uff1a"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("strong",{parentName:"p"},"Server: 192.168.31.1"),":\n\u9019\u4e00\u884c\u544a\u8a34\u4f60\u4f60\u7684\u672c\u5730 DNS \u4f3a\u670d\u5668\u7684 IP \u5730\u5740\u3002\u7576\u4f60\u7684\u7cfb\u7d71\u9700\u8981\u89e3\u6790\u4e00\u500b\u7db2\u57df\u540d\u7a31\uff08\u4f8b\u5982 ",(0,a.kt)("inlineCode",{parentName:"p"},"google.com"),"\uff09\u6642\uff0c\u5b83\u6703\u9996\u5148\u806f\u7d61\u9019\u500b\u672c\u5730 DNS \u4f3a\u670d\u5668\u3002")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("strong",{parentName:"p"},"Address: 192.168.31.1#53"),":\n\u9019\u4e00\u884c\u518d\u6b21\u986f\u793a\u4e86\u4f60\u7684\u672c\u5730 DNS \u4f3a\u670d\u5668\u7684 IP \u5730\u5740\uff0c\u4e26\u9644\u52a0\u4e86 ",(0,a.kt)("inlineCode",{parentName:"p"},"#53"),"\uff0c\u8868\u793a\u9019\u500b\u4f3a\u670d\u5668\u6b63\u5728\u4f7f\u7528\u6a19\u6e96 DNS \u7aef\u53e3 53 \u4f86\u63a5\u6536\u67e5\u8a62\u3002\u7aef\u53e3 53 \u662f DNS \u5354\u8b70\u7684\u6a19\u6e96\u7aef\u53e3\u3002"))),(0,a.kt)("p",null,"\u9019\u4e9b\u4fe1\u606f\u544a\u8a34\u4f60\uff0c\u7576\u4f60\u7684\u7cfb\u7d71\u9700\u8981\u89e3\u6790\u7db2\u57df\u540d\u7a31\u6642\uff0c\u5b83\u6703\u9996\u5148\u806f\u7d61\u4f4d\u65bc ",(0,a.kt)("inlineCode",{parentName:"p"},"192.168.31.1")," \u7684\u672c\u5730 DNS \u4f3a\u670d\u5668\uff0c\u4e26\u901a\u904e\u7aef\u53e3 53 \u767c\u9001 DNS \u67e5\u8a62\u3002\u9019\u500b\u672c\u5730 DNS \u4f3a\u670d\u5668\u53ef\u80fd\u662f\u4f60\u7684\u8def\u7531\u5668\u6216\u4f60\u7684\u7db2\u8def\u63d0\u4f9b\u5546\uff08ISP\uff09\u63d0\u4f9b\u7684\uff0c\u5b83\u6703\u6709\u81ea\u5df1\u7684\u7de9\u5b58\uff0c\u4e26\u4e14\u53ef\u80fd\u6703\u5411\u5176\u4ed6 DNS \u4f3a\u670d\u5668\u8f49\u767c\u67e5\u8a62\u4ee5\u7372\u5f97\u89e3\u6790\u7d50\u679c"),(0,a.kt)("br",null),(0,a.kt)("br",null),(0,a.kt)("p",null,"\u4e0b\u9762\u7684\u8cc7\u8a0a\uff0c\u70ba\u67e5\u8a62\u7db2\u57df\u7684 ",(0,a.kt)("inlineCode",{parentName:"p"},"DNS lookup")," \u7d50\u679c\uff1a"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("strong",{parentName:"p"},"Non-authoritative answer"),":\n\u9019\u8868\u793a\u8fd4\u56de\u7684\u7b54\u6848\u4e0d\u662f\u4f86\u81ea\u7db2\u57df\u540d\u7a31\u7684\u6388\u6b0a DNS \u4f3a\u670d\u5668\uff0c\u800c\u662f\u4f86\u81ea\u67d0\u500b\u7de9\u5b58\u4f3a\u670d\u5668\u3002\u9019\u901a\u5e38\u610f\u5473\u8457\u4f60\u6b63\u5728\u770b\u5230\u7684\u662f\u4e00\u500b\u7de9\u5b58\u7684\u7b54\u6848\uff0c\u5b83\u53ef\u80fd\u662f\u5728\u7a0d\u65e9\u524d\u67d0\u500b\u6642\u9593\u9ede\u7531\u6388\u6b0a\u4f3a\u670d\u5668\u63d0\u4f9b\u7684")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("strong",{parentName:"p"},"Name: google.com"),":\n\u9019\u662f\u4f60\u67e5\u8a62\u7684\u7db2\u57df\u540d\u7a31")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("strong",{parentName:"p"},"Address: 142.250.207.14"),":\n\u9019\u662f ",(0,a.kt)("inlineCode",{parentName:"p"},"google.com")," \u7db2\u57df\u540d\u7a31\u89e3\u6790\u5230\u7684 IP \u5730\u5740\u3002\u7576\u4f60\u5728\u700f\u89bd\u5668\u4e2d\u8f38\u5165 ",(0,a.kt)("inlineCode",{parentName:"p"},"google.com")," \u6642\uff0c\u4f60\u7684\u96fb\u8166\u6703\u4f7f\u7528\u9019\u500b IP \u5730\u5740\u4f86\u9023\u63a5\u5230 Google \u7684\u4f3a\u670d\u5668\u3002"))),(0,a.kt)("br",null),(0,a.kt)("p",null,"\u9019\u500b ",(0,a.kt)("inlineCode",{parentName:"p"},"nslookup")," \u7684\u7d50\u679c\u57fa\u672c\u4e0a\u544a\u8a34\u4f60\uff0c\u7576\u4f60\u8a66\u5716\u8a2a\u554f ",(0,a.kt)("inlineCode",{parentName:"p"},"google.com")," \u6642\uff0c\u4f60\u7684\u96fb\u8166\u5c07\u5617\u8a66\u9023\u63a5\u5230 IP \u5730\u5740 ",(0,a.kt)("inlineCode",{parentName:"p"},"142.250.207.14"),"\u3002\u9019\u500b\u7279\u5b9a\u7684 IP \u5730\u5740\u53ef\u80fd\u6703\u96a8\u6642\u9593\u800c\u8b8a\u5316\uff0c\u56e0\u70ba\u5927\u578b\u7db2\u7ad9\u5982 Google \u6703\u4f7f\u7528\u591a\u500b\u4f3a\u670d\u5668\u548c IP \u5730\u5740\u4f86\u8655\u7406\u6d41\u91cf\uff0c\u4e26\u53ef\u80fd\u6703\u57fa\u65bc\u8ca0\u8f09\u5747\u8861\u548c\u5176\u4ed6\u56e0\u7d20\u800c\u66f4\u6539 DNS \u89e3\u6790"),(0,a.kt)("br",null),(0,a.kt)("br",null),(0,a.kt)("h2",{id:"\u7d50\u8ad6"},"\u7d50\u8ad6"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"\u70ba\u4e86\u5229\u7528\u53ef\u8b80\u7684 domain name \u627e\u5230\u5c0d\u61c9\u7684 ip address\uff0c\u6211\u5011\u9700\u8981 DNS"),(0,a.kt)("li",{parentName:"ol"},"\u5728 local \u7684 Browser \u548c OS \u4e2d\uff0c\u90fd\u53ef\u80fd\u5b58\u6709 DNS result \u5f97\u5feb\u53d6\uff0c\u8b93\u6211\u5011\u53ef\u4ee5\u5feb\u901f\u53d6\u5f97 domain name")),(0,a.kt)("br",null),(0,a.kt)("h3",{id:"\u53c3\u8003\u8cc7\u8a0a"},"\u53c3\u8003\u8cc7\u8a0a"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://juejin.cn/post/7105387310698463263#heading-12"},"\u7a00\u571f\u6398\u91d1 - \u9762\u8bd5\u88c5X\uff1a\u6df1\u5165\u7406\u89e3 DNS \u89e3\u6790")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://juejin.cn/post/7221792648541536317#heading-1"},"\u7a00\u571f\u6398\u91d1 - DNS \u89e3\u6790\u4f18\u5316")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://www.youtube.com/watch?v=27r4Bzuj5NQ"},"ByteByteGo - Everything You Need to Know About DNS: Crash Course System Design #4")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://www.youtube.com/watch?v=mpQZVYPuDGU"},"PowerCert Animated Videos - How a DNS Server (Domain Name System) works."))),(0,a.kt)("br",null))}u.isMDXComponent=!0}}]);