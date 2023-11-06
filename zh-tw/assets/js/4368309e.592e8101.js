"use strict";(self.webpackChunkbenson_doc=self.webpackChunkbenson_doc||[]).push([[8931],{2196:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>c,contentTitle:()=>i,default:()=>a,frontMatter:()=>l,metadata:()=>o,toc:()=>d});var t=r(5893),s=r(3905);const l={sidebar_label:"[DNS] 1. \u70ba\u4ec0\u9ebc\u524d\u7aef\u8981\u77e5\u9053 DNS & request \u6548\u80fd\u76e3\u63a7",title:"[DNS] 1. \u70ba\u4ec0\u9ebc\u524d\u7aef\u8981\u77e5\u9053 DNS & request \u6548\u80fd\u76e3\u63a7",tags:["DNS"]},i=void 0,o={id:"Network/dns-1-why-know-dns",title:"[DNS] 1. \u70ba\u4ec0\u9ebc\u524d\u7aef\u8981\u77e5\u9053 DNS & request \u6548\u80fd\u76e3\u63a7",description:"\u524d\u8a00",source:"@site/docs/Network/dns-1-why-know-dns.mdx",sourceDirName:"Network",slug:"/Network/dns-1-why-know-dns",permalink:"/zh-tw/docs/Network/dns-1-why-know-dns",draft:!1,unlisted:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/Network/dns-1-why-know-dns.mdx",tags:[{label:"DNS",permalink:"/zh-tw/docs/tags/dns"}],version:"current",lastUpdatedAt:1698939206,formattedLastUpdatedAt:"2023\u5e7411\u67082\u65e5",frontMatter:{sidebar_label:"[DNS] 1. \u70ba\u4ec0\u9ebc\u524d\u7aef\u8981\u77e5\u9053 DNS & request \u6548\u80fd\u76e3\u63a7",title:"[DNS] 1. \u70ba\u4ec0\u9ebc\u524d\u7aef\u8981\u77e5\u9053 DNS & request \u6548\u80fd\u76e3\u63a7",tags:["DNS"]},sidebar:"tutorialSidebar",previous:{title:"[Catelog] \u7db2\u8def\u5e38\u8b58\u55ae\u5143\u76ee\u9304",permalink:"/zh-tw/docs/Network/catelog"},next:{title:"[DNS] 2. \u7db2\u8def\u4e16\u754c\u904b\u4f5c\u539f\u7406 & \u672c\u5730 DNS cache",permalink:"/zh-tw/docs/Network/dns-2-dns-cache"}},c={},d=[{value:"\u524d\u8a00",id:"\u524d\u8a00",level:2},{value:"\u70ba\u4ec0\u9ebc\u524d\u7aef\u9700\u8981\u7406\u89e3 DNS?",id:"\u70ba\u4ec0\u9ebc\u524d\u7aef\u9700\u8981\u7406\u89e3-dns",level:2},{value:"\u5f9e Chrome DevTool \u77ad\u89e3 network \u70ba\u4ec0\u9ebc\u5f88\u6162\uff1f",id:"\u5f9e-chrome-devtool-\u77ad\u89e3-network-\u70ba\u4ec0\u9ebc\u5f88\u6162",level:2},{value:"\u7d50\u8ad6",id:"\u7d50\u8ad6",level:2},{value:"\u53c3\u8003\u8cc7\u8a0a",id:"\u53c3\u8003\u8cc7\u8a0a",level:3}];function h(e){const n={a:"a",admonition:"admonition",blockquote:"blockquote",code:"code",h2:"h2",h3:"h3",img:"img",li:"li",ol:"ol",p:"p",strong:"strong",ul:"ul",...(0,s.ah)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.h2,{id:"\u524d\u8a00",children:"\u524d\u8a00"}),"\n",(0,t.jsx)(n.p,{children:"\u7576\u5728\u5f80\u6210\u70ba\u66f4\u597d\u7684\u524d\u7aef\u7684\u8def\u4e0a\uff0c\u901a\u5e38\u90fd\u6703\u770b\u5230\u4e00\u4e9b\u6587\u7ae0\uff0c\u8b1b\u8ff0\u6211\u5011\u9700\u8981\u7684\u4e00\u4e9b\u7db2\u8def\u5e38\u8b58\uff0c\u5305\u62ec\uff1a"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"DNS"}),"\n",(0,t.jsx)(n.li,{children:"HTTP / HTTP2 / HTTPS"}),"\n",(0,t.jsx)(n.li,{children:"CDN"}),"\n",(0,t.jsx)(n.li,{children:"CORS"}),"\n",(0,t.jsx)(n.li,{children:"TCP/IP"}),"\n"]}),"\n",(0,t.jsx)(n.p,{children:"\u90fd\u662f\u6211\u5011\u5728\u524d\u7aef\u9019\u689d\u8def\u4e0a\uff0c\u4e0d\u7ba1\u662f\u5404\u4f4d\u524d\u7aef\u5927\u4f6c\uff0c\u6216\u662f\u773e\u591a\u7684\u9762\u8a66\u6587\u7ae0\uff0c\u5e38\u5e38\u6703\u770b\u5230\u7684\u7db2\u8def\u5e38\u8b58\u4e3b\u984c\u3002\u800c\u5728\u505a\u4e86\u56db\u5e74\u524d\u7aef\u5f8c\uff0c\u518d\u52a0\u4e0a\u73fe\u5728\u7684\u8cc7\u5b89\u516c\u53f8\u4e3b\u8981\u4f7f\u7528 AWS, Azure \u7684\u96f2\u7aef\u670d\u52d9\uff0c\u7576\u6211\u5011\u8981\u53bb\u505a\u76f8\u95dc\u7684\u8a2d\u5b9a\u6642\uff0c\u7684\u78ba\u5e38\u5e38\u6703\u770b\u5230\u8ddf\u9019\u4e9b\u7db2\u8def\u5e38\u8b58\u6709\u95dc\u7684\u95dc\u9375\u5b57"}),"\n",(0,t.jsx)(n.p,{children:"\u6240\u4ee5\uff0c\u8b93\u6211\u5011\u4f86\u958b\u59cb\u8a8d\u8b58\u7db2\u8def\u5e38\u8b58\uff0c\u4f86\u6210\u70ba\u66f4\u53b2\u5bb3\u7684\u524d\u7aef\u5427\uff5e"}),"\n",(0,t.jsx)("br",{}),"\n",(0,t.jsx)("br",{}),"\n",(0,t.jsxs)(n.p,{children:["\u4eca\u5929\u7db2\u8def\u5e38\u8b58\u7684\u7b2c\u4e00\u7bc7\u5c31\u662f ",(0,t.jsx)(n.strong,{children:"DNS"})," (Domain Name System)~"]}),"\n",(0,t.jsx)(n.p,{children:"\u7136\u5f8c\uff0c\u6211\u63cf\u8ff0\u7684\u65b9\u5f0f\uff0c\u6703\u5f9e\uff1a"}),"\n",(0,t.jsxs)(n.ol,{children:["\n",(0,t.jsx)(n.li,{children:"\u70ba\u4ec0\u9ebc\u524d\u7aef\u9700\u8981\u7406\u89e3 DNS"}),"\n",(0,t.jsx)(n.li,{children:"DNS \u7684\u904b\u4f5c\u904e\u7a0b"}),"\n",(0,t.jsx)(n.li,{children:"\u5982\u4f55\u512a\u5316"}),"\n",(0,t.jsx)(n.li,{children:"\u90e8\u7f72\u8207 DNS"}),"\n"]}),"\n",(0,t.jsx)(n.p,{children:"\u4ee5\u9019\u5faa\u5e8f\u6f38\u9032\u7684\u4e09\u500b\u4e3b\u984c\u4f86\u63cf\u5beb\u6587\u7ae0"}),"\n",(0,t.jsx)("br",{}),"\n",(0,t.jsx)(n.h2,{id:"\u70ba\u4ec0\u9ebc\u524d\u7aef\u9700\u8981\u7406\u89e3-dns",children:"\u70ba\u4ec0\u9ebc\u524d\u7aef\u9700\u8981\u7406\u89e3 DNS?"}),"\n",(0,t.jsxs)(n.blockquote,{children:["\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.strong,{children:"1. \u53ef\u4ee5\u77ad\u89e3\u9020\u6210\u7db2\u8def\u8acb\u6c42\u8b8a\u6162\u7684\u539f\u56e0\u4e4b\u4e00"})}),"\n"]}),"\n",(0,t.jsx)(n.p,{children:"DNS \u4e5f\u662f\u5728\u9032\u884c\u7db2\u8def\u8acb\u6c42\u7684\u5fc5\u7d93\u904e\u7a0b\u4e4b\u4e00\uff0c\u900f\u904e\u77ad\u89e3 DNS\uff0c\u6211\u5011\u53ef\u4ee5\u591a\u4e86\u89e3\u4e00\u500b\u9020\u6210\u7db2\u8def\u8acb\u6c42\u8b8a\u6162\u7684\u539f\u56e0\uff0c\u548c\u5982\u4f55\u900f\u904e\u512a\u5316 DNS \u7684\u65b9\u5f0f\u52a0\u901f network request\uff0c\u5927\u5e45\u964d\u4f4e user \u7b49\u5f85\u7684\u6642\u9593"}),"\n",(0,t.jsx)("br",{}),"\n",(0,t.jsxs)(n.blockquote,{children:["\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.strong,{children:"2. \u53ef\u4ee5\u5728\u524d\u7aef\u512a\u5316 DNS \u89e3\u6790\uff0c\u52a0\u901f\u7db2\u8def\u8acb\u6c42"})}),"\n"]}),"\n",(0,t.jsx)(n.p,{children:"\u5728\u524d\u7aef\uff0c\u7576\u6211\u5011\u900f\u904e monitor \u7684\u65b9\u5f0f\u5bdf\u89ba\u5230 DNS \u9020\u6210 network request \u7684\u6642\u9593\u904e\u9577\u6642\uff0c\u6211\u5011\u53ef\u4ee5\u900f\u904e\u5728 HTML \u53e6\u5916\u52a0\u5165\u8a2d\u5b9a\u4f86\u9032\u884c\u512a\u5316\uff0c\u4e0b\u9762\u6703\u518d\u8a73\u7d30\u505a\u8aaa\u660e"}),"\n",(0,t.jsx)("br",{}),"\n",(0,t.jsxs)(n.blockquote,{children:["\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.strong,{children:"3. \u5c0d\u524d\u7aef\u90e8\u7f72\u7db2\u9801\u8cc7\u6e90\u7684\u904e\u7a0b\u66f4\u77ad\u89e3"})}),"\n"]}),"\n",(0,t.jsxs)(n.p,{children:["\u7576\u6211\u5011\u8981\u53bb\u90e8\u7f72\u524d\u7aef\u7db2\u7ad9\u8cc7\u6e90\u6642\uff0c\u6703\u9700\u8981\u9032\u884c\u5c07 domain name \u6307\u5411 ip address \u7684\u64cd\u4f5c\uff08\u4f8b\u5982 ",(0,t.jsx)(n.code,{children:"mechachen.github.io"})," -> ",(0,t.jsx)(n.code,{children:"185.199.108.153"}),")\uff0c\u800c\u9019\u4e2d\u9593\u5c31\u662f DNS \u7684\u64cd\u4f5c\uff0c\u5982\u679c\u5c0d DNS \u6982\u5ff5\u6709\u66f4\u6df1\u5c64\u7684\u77ad\u89e3\uff0c\u53ef\u4ee5\u5e6b\u6211\u5011\u66f4\u77ad\u89e3\u8cc7\u6e90\u90e8\u7f72\u4e0a\u300c\u70ba\u4ec0\u9ebc\u300d\u8981\u505a\u67d0\u4e9b\u8a2d\u5b9a"]}),"\n",(0,t.jsx)("br",{}),"\n",(0,t.jsx)("br",{}),"\n",(0,t.jsx)(n.h2,{id:"\u5f9e-chrome-devtool-\u77ad\u89e3-network-\u70ba\u4ec0\u9ebc\u5f88\u6162",children:"\u5f9e Chrome DevTool \u77ad\u89e3 network \u70ba\u4ec0\u9ebc\u5f88\u6162\uff1f"}),"\n",(0,t.jsx)(n.p,{children:"\u5728\u6211\u5011\u9032\u884c\u7db2\u8def\u8acb\u6c42\u6642\uff0c\u5176\u5be6 Chrome DevTool \u6703\u544a\u8a34\u4f60\u8acb\u6c42\u7684\u6642\u9593\u6b77\u7a0b\uff0c\u5982\u5716\u6240\u793a\uff1a"}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.img,{src:"https://ithelp.ithome.com.tw/upload/images/20231001/20148944Z1heEjSGOB.png",alt:"https://ithelp.ithome.com.tw/upload/images/20231001/20148944Z1heEjSGOB.png"})}),"\n",(0,t.jsx)(n.p,{children:"\u53ef\u4ee5\u900f\u904e"}),"\n",(0,t.jsxs)(n.ol,{children:["\n",(0,t.jsx)(n.li,{children:"\u6253\u958b Chomre Devtool\uff0c\u5207\u63db\u5230 Network tab"}),"\n",(0,t.jsx)(n.li,{children:"\u9078\u53d6\u7279\u5b9a\u7684 request\uff0c\u4e26\u5207\u63db\u5230 Timing tab"}),"\n"]}),"\n",(0,t.jsx)("br",{}),"\n",(0,t.jsx)("br",{}),"\n",(0,t.jsx)(n.p,{children:"\u5c31\u53ef\u4ee5\u770b\u5230\u8acb\u6c42\u7684\u6642\u9593\u6b77\u7a0b\uff0c\u8ddf\u6bcf\u6bb5\u6b77\u7a0b\u6240\u82b1\u8cbb\u7684\u6642\u9593\u4e86\uff0c\u5f9e\u9019\u88e1\u6211\u5011\u53ef\u4ee5\u770b\u5230\uff1a"}),"\n",(0,t.jsxs)("table",{children:[(0,t.jsx)("thead",{children:(0,t.jsxs)("tr",{children:[(0,t.jsx)("th",{align:"left",children:"\u4efb\u52d9\u985e\u578b"}),(0,t.jsx)("th",{align:"left",children:"\u4efb\u52d9"}),(0,t.jsx)("th",{align:"left",children:"\u82b1\u8cbb\u6642\u9593"})]})}),(0,t.jsxs)("tbody",{children:[(0,t.jsxs)("tr",{children:[(0,t.jsx)("td",{align:"left",rowspan:"3",children:"Connection Start (\u5efa\u7acb\u9023\u63a5)"}),(0,t.jsx)("td",{align:"left",children:"DNS lookup"}),(0,t.jsx)("td",{align:"left",children:"1.57 s"})]}),(0,t.jsxs)("tr",{children:[(0,t.jsx)("td",{align:"left",children:"Initial connection (\u5efa\u7acb TCP \u9023\u63a5)"}),(0,t.jsx)("td",{align:"left",children:"341.95 s"})]}),(0,t.jsxs)("tr",{children:[(0,t.jsx)("td",{align:"left",children:"SSL (SSL/TSL \u63e1\u624b)"}),(0,t.jsx)("td",{align:"left",children:"341.95 s"})]}),(0,t.jsxs)("tr",{children:[(0,t.jsx)("td",{align:"left",rowspan:"3",children:"Request/Response"}),(0,t.jsx)("td",{align:"left",children:"Request sent (\u767c\u9001\u8acb\u6c42)"}),(0,t.jsx)("td",{align:"left",children:"0.19 ms"})]}),(0,t.jsxs)("tr",{children:[(0,t.jsx)("td",{align:"left",children:"Waiting for server response (\u7b49\u5f85 Server \u56de\u61c9)"}),(0,t.jsx)("td",{align:"left",children:"425.89 s"})]}),(0,t.jsxs)("tr",{children:[(0,t.jsx)("td",{align:"left",children:"Content Download (\u4e0b\u8f09\u5167\u5bb9)"}),(0,t.jsx)("td",{align:"left",children:"0.64s"})]})]})]}),"\n",(0,t.jsx)("br",{}),"\n",(0,t.jsx)("br",{}),"\n",(0,t.jsx)(n.p,{children:"\u800c\u4e0b\u4e00\u7bc7\u6703\u91dd\u5c0d DNS lookup \u9019\u6bb5\uff0c\u4f86\u9032\u884c\u80cc\u5f8c\u539f\u7406\u8aaa\u660e\u8ddf\u5982\u4f55\u512a\u5316"}),"\n",(0,t.jsx)("br",{}),"\n",(0,t.jsx)("br",{}),"\n",(0,t.jsx)(n.admonition,{title:"\u5de5\u4f5c\u5c0f\u6487\u6b65\uff1a",type:"info",children:(0,t.jsx)(n.p,{children:"\u7576 Waiting for server response \u904e\u4e45\u6642\uff0c\u4f60\u5c31\u53ef\u4ee5\u958b\u5674\u4f60\u5011\u5bb6\u7684\u5f8c\u7aef\u4e86\uff08\u8aa4"})}),"\n",(0,t.jsx)("br",{}),"\n",(0,t.jsx)(n.h2,{id:"\u7d50\u8ad6",children:"\u7d50\u8ad6"}),"\n",(0,t.jsxs)(n.ol,{children:["\n",(0,t.jsx)(n.li,{children:"\u77e5\u9053\u70ba\u4ec0\u9ebc\u8981\u77ad\u89e3 DNS\uff0c\u53ef\u4ee5\u5e6b\u52a9\u4f60\u4e86\u89e3\u5176\u4e2d\u4e00\u90e8\u5206\u7684 request \u7de9\u6162\u554f\u984c\uff0c\u800c\u5f9e\u4e2d\u512a\u5316"}),"\n",(0,t.jsx)(n.li,{children:"\u77e5\u9053\u70ba\u4ec0\u9ebc\u8981\u4e86\u89e3 DNS\uff0c\u8ddf\u524d\u7aef\u8cc7\u6e90\u90e8\u7f72\u6709\u95dc"}),"\n",(0,t.jsx)(n.li,{children:"\u77e5\u9053\u5982\u4f55\u76e3\u63a7 request \u6548\u80fd\uff0c\u53ca\u6bcf\u500b\u968e\u6bb5\u7684\u82b1\u8cbb\u6642\u9577"}),"\n"]}),"\n",(0,t.jsx)("br",{}),"\n",(0,t.jsx)("br",{}),"\n",(0,t.jsx)(n.h3,{id:"\u53c3\u8003\u8cc7\u8a0a",children:"\u53c3\u8003\u8cc7\u8a0a"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.a,{href:"https://juejin.cn/post/7105387310698463263#heading-12",children:"\u7a00\u571f\u6398\u91d1 - \u9762\u8bd5\u88c5X\uff1a\u6df1\u5165\u7406\u89e3 DNS \u89e3\u6790"})}),"\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.a,{href:"https://juejin.cn/post/7221792648541536317#heading-1",children:"\u7a00\u571f\u6398\u91d1 - DNS \u89e3\u6790\u4f18\u5316"})}),"\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.a,{href:"https://www.youtube.com/watch?v=27r4Bzuj5NQ",children:"ByteByteGo - Everything You Need to Know About DNS: Crash Course System Design #4"})}),"\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.a,{href:"https://www.youtube.com/watch?v=mpQZVYPuDGU",children:"PowerCert Animated Videos - How a DNS Server (Domain Name System) works."})}),"\n"]}),"\n",(0,t.jsx)("br",{})]})}function a(e={}){const{wrapper:n}={...(0,s.ah)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(h,{...e})}):h(e)}},3905:(e,n,r)=>{r.d(n,{ah:()=>d});var t=r(7294);function s(e,n,r){return n in e?Object.defineProperty(e,n,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[n]=r,e}function l(e,n){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),r.push.apply(r,t)}return r}function i(e){for(var n=1;n<arguments.length;n++){var r=null!=arguments[n]?arguments[n]:{};n%2?l(Object(r),!0).forEach((function(n){s(e,n,r[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(r,n))}))}return e}function o(e,n){if(null==e)return{};var r,t,s=function(e,n){if(null==e)return{};var r,t,s={},l=Object.keys(e);for(t=0;t<l.length;t++)r=l[t],n.indexOf(r)>=0||(s[r]=e[r]);return s}(e,n);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(t=0;t<l.length;t++)r=l[t],n.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(s[r]=e[r])}return s}var c=t.createContext({}),d=function(e){var n=t.useContext(c),r=n;return e&&(r="function"==typeof e?e(n):i(i({},n),e)),r},h={inlineCode:"code",wrapper:function(e){var n=e.children;return t.createElement(t.Fragment,{},n)}},a=t.forwardRef((function(e,n){var r=e.components,s=e.mdxType,l=e.originalType,c=e.parentName,a=o(e,["components","mdxType","originalType","parentName"]),j=d(r),x=s,u=j["".concat(c,".").concat(x)]||j[x]||h[x]||l;return r?t.createElement(u,i(i({ref:n},a),{},{components:r})):t.createElement(u,i({ref:n},a))}));a.displayName="MDXCreateElement"}}]);