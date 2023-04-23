"use strict";(self.webpackChunkbenson_doc=self.webpackChunkbenson_doc||[]).push([[2577],{3905:(t,e,n)=>{n.d(e,{Zo:()=>m,kt:()=>k});var a=n(7294);function r(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function o(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,a)}return n}function p(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?o(Object(n),!0).forEach((function(e){r(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function l(t,e){if(null==t)return{};var n,a,r=function(t,e){if(null==t)return{};var n,a,r={},o=Object.keys(t);for(a=0;a<o.length;a++)n=o[a],e.indexOf(n)>=0||(r[n]=t[n]);return r}(t,e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);for(a=0;a<o.length;a++)n=o[a],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(r[n]=t[n])}return r}var i=a.createContext({}),u=function(t){var e=a.useContext(i),n=e;return t&&(n="function"==typeof t?t(e):p(p({},e),t)),n},m=function(t){var e=u(t.components);return a.createElement(i.Provider,{value:e},t.children)},d="mdxType",c={inlineCode:"code",wrapper:function(t){var e=t.children;return a.createElement(a.Fragment,{},e)}},s=a.forwardRef((function(t,e){var n=t.components,r=t.mdxType,o=t.originalType,i=t.parentName,m=l(t,["components","mdxType","originalType","parentName"]),d=u(n),s=r,k=d["".concat(i,".").concat(s)]||d[s]||c[s]||o;return n?a.createElement(k,p(p({ref:e},m),{},{components:n})):a.createElement(k,p({ref:e},m))}));function k(t,e){var n=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var o=n.length,p=new Array(o);p[0]=s;var l={};for(var i in e)hasOwnProperty.call(e,i)&&(l[i]=e[i]);l.originalType=t,l[d]="string"==typeof t?t:r,p[1]=l;for(var u=2;u<o;u++)p[u]=n[u];return a.createElement.apply(null,p)}return a.createElement.apply(null,n)}s.displayName="MDXCreateElement"},1603:(t,e,n)=>{n.r(e),n.d(e,{assets:()=>i,contentTitle:()=>p,default:()=>c,frontMatter:()=>o,metadata:()=>l,toc:()=>u});var a=n(7462),r=(n(7294),n(3905));const o={sidebar__label:"[HTTP] Content Type",title:"[HTTP] Content Type"},p=void 0,l={unversionedId:"Code/http_content-type",id:"Code/http_content-type",title:"[HTTP] Content Type",description:"\u672c\u6587\u975e\u539f\u5275\uff0c\u4ee5\u4e0b\u662f\u53c3\u8003\u8cc7\u6599\uff1a",source:"@site/docs/Code/http_content-type.mdx",sourceDirName:"Code",slug:"/Code/http_content-type",permalink:"/docs/Code/http_content-type",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/Code/http_content-type.mdx",tags:[],version:"current",lastUpdatedAt:1666118665,formattedLastUpdatedAt:"Oct 18, 2022",frontMatter:{sidebar__label:"[HTTP] Content Type",title:"[HTTP] Content Type"},sidebar:"tutorialSidebar",previous:{title:"Intro",permalink:"/docs/intro"},next:{title:"[React] useLayoutEffect",permalink:"/docs/Code/useLayoutEffect"}},i={},u=[{value:"\u4ec0\u9ebc\u662f Content-type ?",id:"\u4ec0\u9ebc\u662f-content-type-",level:2},{value:"\u7c21\u4ecb",id:"\u7c21\u4ecb",level:3},{value:"\u898f\u7bc4",id:"\u898f\u7bc4",level:3},{value:"POST \u8acb\u6c42\u5e38\u7528\u7684 media type",id:"post-\u8acb\u6c42\u5e38\u7528\u7684-media-type",level:2},{value:"\u50b3\u8f38 JSON \u6a94",id:"\u50b3\u8f38-json-\u6a94",level:3},{value:"1. application/json",id:"1-applicationjson",level:4},{value:"\u50b3\u8f38 Form data",id:"\u50b3\u8f38-form-data",level:3},{value:"1. application/x-www-form-urlencoded",id:"1-applicationx-www-form-urlencoded",level:4},{value:"2. multipart/form-data",id:"2-multipartform-data",level:4},{value:"\u50b3\u8f38 binary data",id:"\u50b3\u8f38-binary-data",level:3},{value:"1. application/octet-stream",id:"1-applicationoctet-stream",level:4}],m={toc:u},d="wrapper";function c(t){let{components:e,...o}=t;return(0,r.kt)(d,(0,a.Z)({},m,o,{components:e,mdxType:"MDXLayout"}),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"\u672c\u6587\u975e\u539f\u5275\uff0c\u4ee5\u4e0b\u662f\u53c3\u8003\u8cc7\u6599\uff1a"),(0,r.kt)("ul",{parentName:"blockquote"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://juejin.cn/post/6959742146781904904"},"\u8be6\u89e3 HTTP Header \u4e2d\u7684 Content-Type")," ",(0,r.kt)("br",null)),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://www.iana.org/assignments/media-types/media-types.xhtml"},"IANA")))),(0,r.kt)("br",null),(0,r.kt)("p",null,"\u89ba\u5f97\u81ea\u5df1\u4e00\u76f4\u90fd\u6c92\u6709\u5f88\u6e05\u695a HTTP Content-Type \u9019\u584a\uff0c",(0,r.kt)("br",null),"\n\u6bcf\u6b21\u5728\u50b3 POST api \u8cc7\u6599\u6642\uff0c\u90fd\u4e0d\u77e5\u9053\u70ba\u4ec0\u9ebc\u8981\u50b3\u9019\u985e\u578b\u7684 Content-type\uff0c",(0,r.kt)("br",null),"\n\u6240\u4ee5\u6c7a\u5b9a\u4f86\u6574\u7406\u4e00\u4e0b"),(0,r.kt)("h2",{id:"\u4ec0\u9ebc\u662f-content-type-"},"\u4ec0\u9ebc\u662f Content-type ?"),(0,r.kt)("h3",{id:"\u7c21\u4ecb"},"\u7c21\u4ecb"),(0,r.kt)("p",null,"HTTP \u5411\u63a5\u6536\u65b9\u8aaa\u660e\u50b3\u8f38\u8cc7\u6599\u7684\u7684\u5a92\u9ad4\u985e\u578b (media type)\uff0c ",(0,r.kt)("br",null),"\n\u5a92\u9ad4\u5373\u662f\u50b3\u9001\u8a0a\u606f\u7684\u4e00\u500b\u50b3\u8f38\u7684\u7ba1\u9053\u6216\u5f62\u5f0f\uff0c\u50cf\u662f \u6587\u5b57(text)\u3001\u5716\u7247(image)\u3001\u5f71\u7247(video)\u3001\u97f3\u6a02(audio)\u3001\u61c9\u7528\u7a0b\u5f0f(application)\u7b49\u7b49\uff0c"),(0,r.kt)("p",null,"\u5728\u700f\u89bd\u5668\u4e2d\uff0cresponse \u6703\u6839\u64da Content-type \u6c7a\u5b9a\u986f\u793a\u7684\u6a23\u5b50\uff0c ",(0,r.kt)("br",null),"\n\u82e5\u5728 response header \u4e2d\u8072\u660e\u4e86 ",(0,r.kt)("inlineCode",{parentName:"p"},"Content-type: image/jpeg"),"\uff0c\u5247\u8cc7\u6599\u6703\u4ee5\u5716\u7247\u65b9\u5f0f\u5448\u73fe",(0,r.kt)("br",null),"\n\u82e5\u6c92\u6709\u6a19\u660e\uff0c\u5247\u6703\u9810\u8a2d\u5e36 ",(0,r.kt)("inlineCode",{parentName:"p"},"Content-type: text/html"),"\uff0c\u4ee5\u6587\u5b57\u65b9\u5f0f\u5448\u73fe"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-php"},"<?php\n  header('Content-type: image/jpeg');\n  echo file_get_contents(\"https://media.geeksforgeeks.org/wp-content/uploads/geeksforgeeks.png\");\n?>\n")),(0,r.kt)("p",null,"\u8f38\u51fa\u7d50\u679c\uff1a",(0,r.kt)("br",null),"\n",(0,r.kt)("img",{alt:"Geeks for Geeks in picture form",src:n(1107).Z,width:"667",height:"184"})),(0,r.kt)("br",null),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-php"},'<?php\n  // Without Content-type, will be text/plain\n  echo file_get_contents("https://media.geeksforgeeks.org/wp-content/uploads/geeksforgeeks.png");\n?>\n')),(0,r.kt)("p",null,"\u8f38\u51fa\u7d50\u679c\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},'?PNG  IHDRX??\'?iCCPsRGB IEC61966-2.1(?u??+DQ??3????????????63??P????H?U????l??RDJV???9oF?\n$sn????{N???pZ??^?d?Z(p?E?]??h??QEW?f??T??{, f???????????z?aE??????y???6%]>vkrA?;S?????d??M?\n\xa1?6???`%?????&???Q-Z?j????BSZo?a???}N ?._u {??#??N?g?{-bKGD??????? pHYs.#.#x??vtIME?4_?X \nIDATx??w?U??????MB$??$@@? 2t?"EDa???"? C?*C????Hq?ja??w ????????L{??}?}??w?;??{???{.4, ???j???\nq10??_??h2]`P??:^?5??@\x7f?W?=????????XY??? w\x7f.??9??`z?1?!V??B????XM~^?|?1?qm???(?h??C?OV?js{e?+ \nL?b?{%?@`?+:sQ?@?\n')),(0,r.kt)("br",null),(0,r.kt)("br",null),(0,r.kt)("h3",{id:"\u898f\u7bc4"},"\u898f\u7bc4"),(0,r.kt)("p",null,"Content-Type \u5305\u542b\u4ee5\u4e0b 3 \u500b\u90e8\u5206\uff0c"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"media type\uff1a\u8cc7\u6599\u7684 media type\uff0c\u4ee5 MIME \u70ba\u6a19\u6e96"),(0,r.kt)("li",{parentName:"ul"},"charset\uff1a\u6578\u64da\u7528\u4f55\u7a2e\u5b57\u7b26\u96c6"),(0,r.kt)("li",{parentName:"ul"},"boundary\uff1a\u8cc7\u6599\u5206\u683c\u7b26\u865f\uff0c\u7576\u6709\u8907\u5408\u578b media \u6642 (multipart / message) (",(0,r.kt)("a",{parentName:"li",href:"https://www.rfc-editor.org/rfc/rfc2046.html#page-5"},"RFC2046 page 5"),") ",(0,r.kt)("br",null),"\n\uff0c\u6b64\u90e8\u5206\u662f\u5fc5\u9808\u7684\uff0c\u7528\u4f86\u5206\u9694\u4e0d\u540c\u7684\u8cc7\u6599\uff1b\u7531 1 \u5230 70 \u500b\u5b57\u5143\u7d44\u6210\uff0c\u700f\u89bd\u5668\u6703\u81ea\u52d5\u52a0\u4e0a\uff0c\u4e0d\u7528\u81ea\u5df1\u52a0")),(0,r.kt)("admonition",{title:"MIME",type:"info"},(0,r.kt)("p",{parentName:"admonition"},"HTTP \u53ef\u4f7f\u7528\u7684 media type \u662f\u53c3\u7167 MIME (Multipurpose Internet Mail Extensions) \u800c\u4f86\uff0c",(0,r.kt)("br",null),"\nMIME \u662f\u4e00\u7a2e\u6a19\u6e96\uff0c\u56e0\u70ba\u65e9\u671f\u7684\u96fb\u5b50\u90f5\u4ef6\u53ea\u80fd\u7528\u6587\u5b57\u50b3\u8f38\uff0c\u800c\u7576\u5f8c\u7e8c\u7684\u96fb\u5b50\u90f5\u4ef6\u958b\u59cb\u9700\u8981\u50b3\u8f38\u5716\u7247\u3001\u5f71\u7247\u3001\u97f3\u6a02\u7b49\u7b49\uff0c",(0,r.kt)("br",null),"\n\u5c31\u9700\u8981\u4e00\u7a2e\u6a19\u6e96\u4f86\u8868\u793a\u9019\u4e9b\u5a92\u9ad4\u985e\u578b")),(0,r.kt)("br",null),(0,r.kt)("h2",{id:"post-\u8acb\u6c42\u5e38\u7528\u7684-media-type"},"POST \u8acb\u6c42\u5e38\u7528\u7684 media type"),(0,r.kt)("p",null,"GET \u548c POST \u662f\u6211\u5011\u6700\u5e38\u7528\u7684\u5169\u500b HTTP \u8acb\u6c42\u65b9\u6cd5\u3002\u5c0d\u65bc GET\u8acb\u6c42\uff0c\u9700\u8981\u50b3\u905e\u7684\u6578\u64da\u6bd4\u8f03\u7c21\u55ae\uff0c\u6211\u5011\u901a\u5e38\u4f7f\u7528 ",(0,r.kt)("inlineCode",{parentName:"p"},"queryString")," \u7684\u65b9\u5f0f\u50b3\u905e\uff0c\u4f8b\u5982 ",(0,r.kt)("a",{parentName:"p",href:"https://test.com/api?a=1&b=2"},"https://test.com/api?a=1&b=2")," \uff0c",(0,r.kt)("br",null),"\nContent-Type \u7684\u503c\u5c31\u6c92\u6709\u592a\u5927\u4f5c\u7528\u4e86\u3002",(0,r.kt)("br",null)),(0,r.kt)("admonition",{type:"info"},(0,r.kt)("mdxAdmonitionTitle",{parentName:"admonition"},(0,r.kt)("a",{parentName:"mdxAdmonitionTitle",href:"https://www.rfc-editor.org/rfc/rfc2046.html#page-3"},"RFC7231 page3")),(0,r.kt)("p",{parentName:"admonition"},"...",(0,r.kt)("br",null),"\nThe Content-Type header field specifies the nature of the data in the ",(0,r.kt)("br",null),"\nbody of an entity by giving media type and subtype identifiers, ...",(0,r.kt)("br",null),"\n...")),(0,r.kt)("br",null),(0,r.kt)("p",null,"\u4f46\u5c0d\u65bc ",(0,r.kt)("inlineCode",{parentName:"p"},"POST")," \u8acb\u6c42\uff0cContent-Type \u7684\u503c\u5c31\u975e\u5e38\u91cd\u8981\u4e86\uff0c\u9700\u8981\u6839\u64da\u4e0d\u540c\u5834\u666f\u505a\u4e0d\u540c\u9078\u64c7\uff0c\u6211\u5011\u4f9d\u5e38\u898b\u7684\u9700\u6c42\u4ecb\u7d39\uff1a"),(0,r.kt)("br",null),(0,r.kt)("h3",{id:"\u50b3\u8f38-json-\u6a94"},"\u50b3\u8f38 JSON \u6a94"),(0,r.kt)("h4",{id:"1-applicationjson"},"1. application/json"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"Content-type:  application/json\n")),(0,r.kt)("p",null,"JSON \u672c\u8eab\u662f\u6587\u5b57\uff0c\u70ba\u4ec0\u9ebc\u4e0d\u7528 ",(0,r.kt)("inlineCode",{parentName:"p"},"text/plain")," \u5462\uff1f",(0,r.kt)("br",null)),(0,r.kt)("p",null,"\u6839\u64da ",(0,r.kt)("a",{parentName:"p",href:"https://www.rfc-editor.org/rfc/rfc8259.html#section-12"},"RFC 8259 section 12"),"\uff0c\u56e0\u70ba text \u4e2d\u53ef\u80fd\u53ef\u4ee5\u5305\u542b\u53ef\u57f7\u884c\u7684\u7a0b\u5f0f\u78bc\uff0c",(0,r.kt)("br",null),"\n\u800c JSON \u672c\u8eab\u4e5f\u662f JavaScript \u7684\u5b50\u96c6\u5408(\u50c5\u6c92\u6709 assignment & invocation)\uff0c",(0,r.kt)("br",null),"\n\u9019\u6703\u9020\u6210\u50b3\u8f38\u8cc7\u6599\u6642\u8cc7\u5b89\u4e0a\u7684\u98a8\u96aa\uff0c\u6211\u5011\u53ef\u4ee5\u5728\u50b3\u8f38\u4e2d\u9014\u60e1\u610f\u7684\u7a0b\u5f0f\u78bc\uff0c\u985e\u4f3c\u4f7f\u7528 ",(0,r.kt)("inlineCode",{parentName:"p"},"eval()")," \u7b49\u7a0b\u5f0f\u78bc\u8f49\u63db",(0,r.kt)("br",null)),(0,r.kt)("p",null,"\u56e0\u6b64\uff0c\u6211\u5011\u9700\u8981\u7279\u5225\u7684\u50b3\u8f38\u65b9\u5f0f\u8f49\u63db\uff0c\u9019\u6642\u5019\u5c31\u9700\u8981 ",(0,r.kt)("inlineCode",{parentName:"p"},"application/json")," \u4e86"),(0,r.kt)("admonition",{type:"info"},(0,r.kt)("mdxAdmonitionTitle",{parentName:"admonition"},"application MIME type (",(0,r.kt)("a",{parentName:"mdxAdmonitionTitle",href:"https://www.rfc-editor.org/rfc/rfc2046.html#page-4"},"RFC 2046"),")"),(0,r.kt)("p",{parentName:"admonition"},"application \u70ba\u9664\u4e86 text, image, audio, video \u4e4b\u5916\u7684\u8cc7\u6599",(0,r.kt)("br",null),"\n\u901a\u5e38\u662f\u4e00\u4e9b"),(0,r.kt)("ol",{parentName:"admonition"},(0,r.kt)("li",{parentName:"ol"},"\u672a\u7de8\u8b6f\u7684 binary data"),(0,r.kt)("li",{parentName:"ol"},"\u4e00\u4e9b\u6703\u88ab\u7528\u5728\u7db2\u8def\u4e0a\u7684\u61c9\u7528\u7a0b\u5f0f\u7684\u8cc7\u6599")),(0,r.kt)("p",{parentName:"admonition"},"JSON \u5c31\u7b26\u5408\u7b2c 2 \u500b\u689d\u4ef6\uff0c\u4e14\u53c8\u4e0d\u5e0c\u671b\u88ab\u7576\u6210 ",(0,r.kt)("inlineCode",{parentName:"p"},"text")," \u50b3\u8f38\uff0c\u56e0\u6b64 ",(0,r.kt)("inlineCode",{parentName:"p"},"application")," \u662f\u6700\u9069\u5408\u7684\u4e3b\u578b\u5225")),(0,r.kt)("br",null),(0,r.kt)("h3",{id:"\u50b3\u8f38-form-data"},"\u50b3\u8f38 Form data"),(0,r.kt)("h4",{id:"1-applicationx-www-form-urlencoded"},"1. application/x-www-form-urlencoded"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"Content-type: application/x-www-form-urlencoded\n")),(0,r.kt)("p",null,"Form \u9ed8\u8a8d\u7684\u7de8\u78bc\u65b9\u5f0f\uff0c\u4f7f\u7528\u8a72\u503c\u6642\uff0c\u63d0\u4ea4\u8868\u55ae\u6642\u5167\u5bb9\u5fc5\u9808\u7d93\u904e\u5982\u4e0b\u898f\u5247\u7de8\u78bc\uff1a"),(0,r.kt)("p",null,"\u7a7a\u683c\u8f49\u63db\u70ba \u201c+\u201d \u865f\uff1b\u975e\u5b57\u6bcd\u6578\u5b57\u7684\u5176\u5b83\u5b57\u7b26\u8f49\u63db\u70ba\u985e\u4f3c\u65bc\u201c%E0\u201d\u7684\u5169\u4f4d 16 \u9032\u5236\u8868\u793a\u7684 ASCII \u78bc\uff1b\u63db\u884c\u7b26\u88ab\u8f49\u63db\u70ba\u201cCR LF\u201d\uff1b\n\u6578\u64da\u9805\u540d\u7a31\u548c\u6578\u64da\u503c\u4ee5\u201c=\u201d\u865f\u5206\u5272\uff0c\u6578\u64da\u9805\u8207\u6578\u64da\u9805\u4e4b\u9593\u4ee5\u201c&\u201d\u5206\u5272\uff1b"),(0,r.kt)("p",null,"\u7bc4\u4f8b\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-html"},'<form action="https://xxx.com/api/submit" method="post">\n    <input type="text" name="name" value="Javon Yan">\n    <input type="text" name="age" value="18">\n    <button type="submit">Submit</button>\n</form>\n')),(0,r.kt)("p",null,"Request Header & Body"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"// Request Header \u90e8\u5206\u7701\u7565\nPOST /foo HTTP/1.1\nContent-Length: 37\ncontent-type: application/x-www-form-urlencoded\n\n// Body\nname=Javon+Yan&age=18\n")),(0,r.kt)("br",null),(0,r.kt)("br",null),(0,r.kt)("h4",{id:"2-multipartform-data"},"2. multipart/form-data"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"Content-type: multipart/form-data\n")),(0,r.kt)("p",null,"\u5c0d\u65bc\u4e8c\u9032\u5236\u6587\u4ef6\u6216\u8005\u975e ASCII \u5b57\u7b26\u7684\u50b3\u8f38\uff0capplication/x-www-form-urlencoded \u662f\u4f4e\u6548\u7684\u3002 ",(0,r.kt)("br",null),"\n\u5c0d\u65bc\u5305\u542b\u6587\u4ef6\u3001\u4e8c\u9032\u5236\u6578\u64da\u3001\u975e ASCII \u5b57\u7b26\u7684\u5167\u5bb9\uff0c\u61c9\u8a72\u4f7f\u7528 multipart/form-data\u3002 ",(0,r.kt)("br",null),"\nmultipart/form-data \u7684\u8acb\u6c42\u9ad4\u5305\u542b\u591a\u500b\u90e8\u5206\uff0c\u9700\u8981\u901a\u904e boundary \u5b57\u7b26\u5206\u5272\u3002 ",(0,r.kt)("br",null),"\n\u4ee5\u4e0b\u793a\u4f8b\u4e2d\uff0cForm \u8868\u55ae enctype \u8a2d\u7f6e\u70ba multipart/form-data \uff0c\u8acb\u6c42\u982d\u53ca\u8acb\u6c42\u9ad4\u5982\u4e0b\u6240\u793a\uff0c\u700f\u89bd\u5668\u81ea\u52d5\u751f\u6210\u96a8\u6a5f\u7684 boundary \u4e26\u6dfb\u52a0\u5728\u8acb\u6c42\u982d Content-Type \u4e2d\uff0c\u8acb\u6c42\u9ad4\u4e5f\u6839\u64da\u751f\u6210\u7684 boundary \u5206\u5272\u5404\u500b\u5b57\u6bb5\u7684\u6578\u64da\u3002\n\u793a\u4f8b\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-html"},'<form action="https://xxx.com/api/submit" method="post" enctype="multipart/form-data">\n    <input type="text" name="name" value="Javon Yan">\n    <input type="text" name="age" value="18">\n    <input type="file" name="file">\n    <button type="submit">Submit</button>\n</form>\n')),(0,r.kt)("p",null,"Request Header & Body"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},'// Request Header \u90e8\u5206\u7701\u7565\nPOST /foo HTTP/1.1\nContent-Length: 10240\nContent-Type: multipart/form-data; boundary=----WebKitFormBoundaryujecLxDFPt6acCab\n\n// Body\n------WebKitFormBoundaryujecLxDFPt6acCab\nContent-Disposition: form-data; name="name"\n\nJavon Yan\n------WebKitFormBoundaryujecLxDFPt6acCab\nContent-Disposition: form-data; name="age"\n\n18\n------WebKitFormBoundaryujecLxDFPt6acCab\nContent-Disposition: form-data; name="file"; filename="avatar.png"\nContent-Type: image/png\n\n... (png binary data) ....\n------WebKitFormBoundaryujecLxDFPt6acCab--\n')),(0,r.kt)("br",null),(0,r.kt)("br",null),(0,r.kt)("h3",{id:"\u50b3\u8f38-binary-data"},"\u50b3\u8f38 binary data"),(0,r.kt)("h4",{id:"1-applicationoctet-stream"},"1. application/octet-stream"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"Content-type: application/octet-stream\n")),(0,r.kt)("p",null,'\u7528\u65bc\u50b3\u8f38\u4e8c\u9032\u5236\u6578\u64da\u3002\u53ef\u7528\u65bc\u4e0a\u50b3\u6587\u4ef6\u7684\u5834\u666f\u3002\u5728 Postman \u4e2d\uff0c\u9084\u53ef\u4ee5\u770b\u5230 "binary" \u9019\u4e00\u985e\u578b\uff0c\u6307\u7684\u5c31\u662f\u4e00\u4e9b\u4e8c\u9032\u5236\u6587\u4ef6\u985e\u578b\u3002',(0,r.kt)("br",null),"\n\u5982 application/pdf\uff0c\u6307\u5b9a\u4e86\u7279\u5b9a\u4e8c\u9032\u5236\u6587\u4ef6\u7684 MIME \u985e\u578b\u3002\u5c31\u50cf\u5c0d\u65bctext\u6587\u4ef6\u985e\u578b\u82e5\u6c92\u6709\u7279\u5b9a\u7684\u5b50\u985e\u578b\uff08subtype\uff09\uff0c\u5c31\u4f7f\u7528 text/plain\u3002 ",(0,r.kt)("br",null),"\n\u985e\u4f3c\u7684\uff0c\u4e8c\u9032\u5236\u6587\u4ef6\u6c92\u6709\u7279\u5b9a\u6216\u5df2\u77e5\u7684 subtype\uff0c\u5c31\u4f7f\u7528 application/octet-stream\uff0c\u9019\u662f\u61c9\u7528\u7a0b\u5e8f\u6587\u4ef6\u7684\u9ed8\u8a8d\u503c\uff0c\u4e00\u822c\u5f88\u5c11\u76f4\u63a5\u4f7f\u7528\u3002 ",(0,r.kt)("br",null),"\n\u5c0d\u65bc application/octet-stream\uff0c\u53ea\u80fd\u63d0\u4ea4\u4e8c\u9032\u5236\uff0c\u800c\u4e14\u53ea\u80fd\u63d0\u4ea4\u4e00\u500b\u4e8c\u9032\u5236\uff0c\u5982\u679c\u63d0\u4ea4\u6587\u4ef6\u7684\u8a71\uff0c\u53ea\u80fd\u63d0\u4ea4\u4e00\u500b\u6587\u4ef6\uff0c\u5f8c\u53f0\u63a5\u6536\u53c3\u6578\u53ea\u80fd\u6709\u4e00\u500b\uff0c\u800c\u4e14\u53ea\u80fd\u662f\u6d41\uff08\u6216\u8005\u5b57\u7bc0\u6578\u7d44\uff09\u3002 ",(0,r.kt)("br",null),"\n\u5f88\u591a web \u670d\u52d9\u5668\u4f7f\u7528\u9ed8\u8a8d\u7684 application/octet-stream \u4f86\u767c\u9001\u672a\u77e5\u985e\u578b\u3002\u51fa\u65bc\u4e00\u4e9b\u5b89\u5168\u539f\u56e0\uff0c\u5c0d\u65bc\u9019\u4e9b\u8cc7\u6e90\u700f\u89bd\u5668\u4e0d\u5141\u8a31\u8a2d\u7f6e\u4e00\u4e9b\u81ea\u5b9a\u7fa9\u9ed8\u8a8d\u64cd\u4f5c\uff0c\u5c0e\u81f4\u7528\u6236\u5fc5\u9808\u5b58\u5132\u5230\u672c\u5730\u4ee5\u4f7f\u7528\u3002\u4e00\u822c\u4f86\u8aaa\uff0c\u8a2d\u7f6e\u6b63\u78ba\u7684MIME\u985e\u578b\u5f88\u91cd\u8981\u3002"))}c.isMDXComponent=!0},1107:(t,e,n)=>{n.d(e,{Z:()=>a});const a=n.p+"assets/images/geeksforgeeks-ac203ec72862be1ede34424c352ad0cf.png"}}]);