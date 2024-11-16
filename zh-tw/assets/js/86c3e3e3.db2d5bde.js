"use strict";(self.webpackChunkbenson_doc=self.webpackChunkbenson_doc||[]).push([[8512],{3905:(e,t,r)=>{r.d(t,{Zo:()=>k,kt:()=>d});var i=r(7294);function l(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function n(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,i)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?n(Object(r),!0).forEach((function(t){l(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):n(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function o(e,t){if(null==e)return{};var r,i,l=function(e,t){if(null==e)return{};var r,i,l={},n=Object.keys(e);for(i=0;i<n.length;i++)r=n[i],t.indexOf(r)>=0||(l[r]=e[r]);return l}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(i=0;i<n.length;i++)r=n[i],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(l[r]=e[r])}return l}var c=i.createContext({}),u=function(e){var t=i.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},k=function(e){var t=u(e.components);return i.createElement(c.Provider,{value:t},e.children)},p="mdxType",s={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},b=i.forwardRef((function(e,t){var r=e.components,l=e.mdxType,n=e.originalType,c=e.parentName,k=o(e,["components","mdxType","originalType","parentName"]),p=u(r),b=l,d=p["".concat(c,".").concat(b)]||p[b]||s[b]||n;return r?i.createElement(d,a(a({ref:t},k),{},{components:r})):i.createElement(d,a({ref:t},k))}));function d(e,t){var r=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var n=r.length,a=new Array(n);a[0]=b;var o={};for(var c in t)hasOwnProperty.call(t,c)&&(o[c]=t[c]);o.originalType=e,o[p]="string"==typeof e?e:l,a[1]=o;for(var u=2;u<n;u++)a[u]=r[u];return i.createElement.apply(null,a)}return i.createElement.apply(null,r)}b.displayName="MDXCreateElement"},1281:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>a,default:()=>s,frontMatter:()=>n,metadata:()=>o,toc:()=>u});var i=r(7462),l=(r(7294),r(3905));const n={sidebar__label:"[React] React Fiber - 1 - \u4ec0\u9ebc\u662f React Fiber?",title:"[React] React Fiber - 1 - \u4ec0\u9ebc\u662f React Fiber?"},a=void 0,o={unversionedId:"Code/react-fiber-1-what-is-react-fiber",id:"Code/react-fiber-1-what-is-react-fiber",title:"[React] React Fiber - 1 - \u4ec0\u9ebc\u662f React Fiber?",description:"\u4ec0\u9ebc\u662f React Fiber?",source:"@site/docs/Code/react-fiber-1-what-is-react-fiber.mdx",sourceDirName:"Code",slug:"/Code/react-fiber-1-what-is-react-fiber",permalink:"/zh-tw/docs/Code/react-fiber-1-what-is-react-fiber",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/Code/react-fiber-1-what-is-react-fiber.mdx",tags:[],version:"current",frontMatter:{sidebar__label:"[React] React Fiber - 1 - \u4ec0\u9ebc\u662f React Fiber?",title:"[React] React Fiber - 1 - \u4ec0\u9ebc\u662f React Fiber?"},sidebar:"tutorialSidebar",previous:{title:"[LeetCode] Lv.4 \u8a08\u756b",permalink:"/zh-tw/docs/Code/leetcode-lv4"},next:{title:"[React] React Fiber - 2 - \u6df1\u5165 React \u539f\u59cb\u78bc",permalink:"/zh-tw/docs/Code/react-fiber-2-fiber-deep-dive"}},c={},u=[{value:"\u4ec0\u9ebc\u662f React Fiber?",id:"\u4ec0\u9ebc\u662f-react-fiber",level:2},{value:"\u70ba\u4ec0\u9ebc\u9700\u8981 React Fiber\uff1f React Fiber \u70ba\u4ec0\u9ebc\u9019\u9ebc\u91cd\u8981\uff1f",id:"\u70ba\u4ec0\u9ebc\u9700\u8981-react-fiber-react-fiber-\u70ba\u4ec0\u9ebc\u9019\u9ebc\u91cd\u8981",level:2},{value:"Fiber Task Scheduling",id:"fiber-task-scheduling",level:2},{value:"Pausing Work",id:"pausing-work",level:3},{value:"Prioritizing Work",id:"prioritizing-work",level:3},{value:"Reusing Work",id:"reusing-work",level:3},{value:"\u984c\u5916\u8a71\uff1a\u70ba\u4ec0\u9ebc\u53eb Fiber\uff1f",id:"\u984c\u5916\u8a71\u70ba\u4ec0\u9ebc\u53eb-fiber",level:2},{value:"\u7d50\u8ad6",id:"\u7d50\u8ad6",level:2},{value:"\u53c3\u8003\u8cc7\u6599",id:"\u53c3\u8003\u8cc7\u6599",level:3}],k={toc:u},p="wrapper";function s(e){let{components:t,...r}=e;return(0,l.kt)(p,(0,i.Z)({},k,r,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("h2",{id:"\u4ec0\u9ebc\u662f-react-fiber"},"\u4ec0\u9ebc\u662f React Fiber?"),(0,l.kt)("p",null,"React Fiber \u662f React 16 \u5f15\u5165\u7684\u4e00\u500b\u65b0\u67b6\u69cb\uff0c\u7528\u65bc\u6539\u5584 React 16 \u524d\u7684\u6e32\u67d3\u4e0a\u7684\u6548\u80fd\u554f\u984c"),(0,l.kt)("br",null),(0,l.kt)("h2",{id:"\u70ba\u4ec0\u9ebc\u9700\u8981-react-fiber-react-fiber-\u70ba\u4ec0\u9ebc\u9019\u9ebc\u91cd\u8981"},"\u70ba\u4ec0\u9ebc\u9700\u8981 React Fiber\uff1f React Fiber \u70ba\u4ec0\u9ebc\u9019\u9ebc\u91cd\u8981\uff1f"),(0,l.kt)("p",null,"\u5728 React 16 \u4e4b\u524d\uff0c\u5982\u679c\u9047\u5230\u5927\u91cf\u7684\u66f4\u65b0\uff0c\u5982\u4e0b\u9762\u7684\u52d5\u756b\uff0c\u5c31\u6703\u9020\u6210\u700f\u89bd\u5668\u5361\u9813\uff0c\u4f7f\u7528\u8005\u9ad4\u9a57\u4e0d\u4f73"),(0,l.kt)("iframe",{id:"stack-reconciler-animation",width:"560",height:"315",src:"https://www.youtube.com/embed/BGkyupqB_go?si=so241ZL2eMKJyHzK",title:"React old Stack Reconciler",frameborder:"0",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share",referrerpolicy:"strict-origin-when-cross-origin",allowfullscreen:!0}),(0,l.kt)("br",null),(0,l.kt)("br",null),(0,l.kt)("br",null),(0,l.kt)("p",null,"\u6709\u4e86 React 16 Fiber \u67b6\u69cb\uff0c\u6548\u80fd\u548c\u7db2\u9801\u6d41\u66a2\u5ea6\u5927\u5927\u63d0\u5347\uff0c\u4f7f\u5f97\u4f7f\u7528\u8005\u9ad4\u9a57\u66f4\u597d"),(0,l.kt)("iframe",{id:"fiber-animation",width:"560",height:"315",src:"https://www.youtube.com/embed/wLcHRRkYL9w?si=SwVmGCIyVSrwC5VA",title:"React Fiber Reconciler",frameborder:"0",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share",referrerpolicy:"strict-origin-when-cross-origin",allowfullscreen:!0}),(0,l.kt)("br",null),(0,l.kt)("br",null),(0,l.kt)("br",null),(0,l.kt)("br",null),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"\u90a3 React Fiber \u5230\u5e95\u505a\u4e86\u4ec0\u9ebc\u5462\uff1f \u4e4b\u524d\u7684\u67b6\u69cb\u5230\u5e95\u6709\u4ec0\u9ebc\u554f\u984c\uff1f\uff1f")),(0,l.kt)("br",null),(0,l.kt)("br",null),(0,l.kt)("p",null,"\u6211\u5011\u53ef\u4ee5\u5148\u7c21\u55ae\u4f86\u8ac7\u8ac7 React \u904b\u4f5c\u7684\u6838\u5fc3\u5169\u968e\u6bb5\uff1a ",(0,l.kt)("strong",{parentName:"p"},"Reconciliation phase")," \u548c ",(0,l.kt)("strong",{parentName:"p"},"Commit phase")),(0,l.kt)("img",{src:"/img/reconciler-and-renderer.png",alt:"Reconciler and Renderer",width:"500"}),(0,l.kt)("br",null),(0,l.kt)("br",null),(0,l.kt)("table",null,(0,l.kt)("thead",null,(0,l.kt)("tr",null,(0,l.kt)("th",null),(0,l.kt)("th",null,"Reconciliation phase\uff08\u5354\u8abf\u968e\u6bb5\uff09"),(0,l.kt)("th",null,"Commit phase\uff08\u63d0\u4ea4\u968e\u6bb5\uff09"))),(0,l.kt)("tbody",null,(0,l.kt)("tr",null,(0,l.kt)("td",null,"\u76ee\u7684"),(0,l.kt)("td",null,"\u6bd4\u8f03\u65b0\u820a\u7684 Virtual DOM\uff0c\u8a08\u7b97\u51fa\u65b0\u7684 Virtual DOM"),(0,l.kt)("td",null,"\u66f4\u65b0 Application \u7684 UI")),(0,l.kt)("tr",null,(0,l.kt)("td",null,"\u8ca0\u8cac\u55ae\u4f4d"),(0,l.kt)("td",null,"Reconciler"),(0,l.kt)("td",null,"Renderer")),(0,l.kt)("tr",null,(0,l.kt)("td",null,"\u512a\u9ede"),(0,l.kt)("td",null,"\u6f14\u7b97\u6cd5\u5b8c\u5168\u7368\u7acb\u65bc\u6e32\u67d3\u74b0\u5883\uff0c\u540c\u4e00\u5957\u7b97\u6cd5\u53ef\u4ee5\u7528\u5728 Web\u3001App \u7b49"),(0,l.kt)("td",null,"\u50c5\u8ca0\u8cac\u6e32\u67d3\u5230\u5c0d\u61c9\u7684\u5e73\u53f0\uff0c\u4f8b\u5982 Web, App \u7b49\uff0c\u8ddf state \u7121\u95dc")))),(0,l.kt)("br",null),(0,l.kt)("br",null),(0,l.kt)("br",null),(0,l.kt)("p",null,"\u96d6\u7136 React \u505a\u5230\u95dc\u6ce8\u9ede\u5206\u96e2\u7684\u6982\u5ff5\u5f88\u68d2\uff0c\u4f46\u662f\u9084\u6709\u4e00\u500b\u5927\u554f\u984c\uff0c\u5c31\u662f ",(0,l.kt)("strong",{parentName:"p"},"Reconciliation phase \u548c Commit phase \u90fd\u662f\u540c\u6b65\u7684"),"\uff0c\u5982\u679c\u9047\u5230\u5927\u91cf\u66f4\u65b0\uff0c\u5c31\u6703\u9020\u6210\u700f\u89bd\u5668\u5361\u9813\uff0c\u5982 ",(0,l.kt)("a",{href:"#stack-reconciler-animation"},"\u52d5\u756b 1")," \u4e00\u6a23"),(0,l.kt)("img",{src:"/img/reconciliation-and-rendering-synchronous.png",alt:"Reconciliation and Rendering Synchronous",width:"400"}),(0,l.kt)("br",null),(0,l.kt)("br",null),(0,l.kt)("br",null),(0,l.kt)("p",null,"\u56e0\u6b64 React team \u70ba\u4e86\u89e3\u6c7a\u9019\u500b\u554f\u984c\uff0c\u5f15\u9032\u4e86 React Fiber \u67b6\u69cb\uff0c\u8b93 Reconciler \u6709\u4e86 Task scheduling (\u4efb\u52d9\u5b89\u6392) \u7684\u80fd\u529b\uff0c\u5305\u62ec\uff1a"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Pausing Work (\u66ab\u505c\u5de5\u4f5c)"),(0,l.kt)("li",{parentName:"ul"},"Prioritizing Work (\u5206\u914d\u4efb\u52d9\u7684\u512a\u5148\u7d1a)"),(0,l.kt)("li",{parentName:"ul"},"Reusing Work (\u91cd\u8907\u4f7f\u7528\u5de5\u4f5c)")),(0,l.kt)("br",null),(0,l.kt)("br",null),(0,l.kt)("p",null,"\u50cf\u662f\u5728 ",(0,l.kt)("a",{href:"#fiber-animation"},"\u52d5\u756b 2")," \u4e2d\uff0c\u5c31\u7528\u5230\u4e86 Prioritizing Work \u7684\u6982\u5ff5\uff0c\u8b93\u9ad8\u512a\u5148\u7d1a\u7684\u66f4\u65b0\u53ef\u4ee5\u5148\u5b8c\u6210\uff0c\u4e0d\u6703\u88ab\u4f4e\u512a\u5148\u7d1a\u7684\u66f4\u65b0\u963b\u585e\uff0c\u5982\u4e0b\u5716\uff1a"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"\u4e09\u89d2\u5f62\u88ab\u8996\u70ba\u9ad8\u512a\u5148\u5ea6\u7684\u4efb\u52d9"),(0,l.kt)("li",{parentName:"ul"},"\u5b9a\u6642\u7684\u6578\u5b57\u66f4\u65b0\u5247\u662f\u4f4e\u512a\u5148\u5ea6\u7684\u4efb\u52d9")),(0,l.kt)("img",{id:"fiber-priority",src:"/img/fiber-priority.png",alt:"Fiber Priority",width:"300"}),(0,l.kt)("br",null),(0,l.kt)("br",null),(0,l.kt)("br",null),(0,l.kt)("p",null,"\u6211\u5011\u5148\u512a\u5148\u57f7\u884c\u4e09\u89d2\u5f62\u8b8a\u5f62\u52d5\u756b\u7684\u4efb\u52d9\uff0c\u6578\u5b57\u7684\u66f4\u65b0\u56e0\u70ba\u6c92\u6709\u90a3\u9ebc\u983b\u7e41\u8ddf\u660e\u986f\uff0c\u6240\u4ee5\u5148\u66ab\u6642\u64f1\u7f6e\uff0c\u7b49\u5230\u4e09\u89d2\u5f62\u8b8a\u5f62\u52d5\u756b\u5b8c\u6210\u5f8c\uff0c\u518d\u56de\u904e\u982d\u4f86\u66f4\u65b0\u6578\u5b57"),(0,l.kt)("br",null),(0,l.kt)("br",null),(0,l.kt)("p",null,"\u63a5\u8457\u6211\u5011\u5c31\u4f86\u7d30\u8ac7 Fiber \u7684 Task Scheduling \u5982\u4f55\u904b\u4f5c\u7684"),(0,l.kt)("br",null),(0,l.kt)("br",null),(0,l.kt)("h2",{id:"fiber-task-scheduling"},"Fiber Task Scheduling"),(0,l.kt)("h3",{id:"pausing-work"},"Pausing Work"),(0,l.kt)("p",null,"\u6709\u4e86 Fiber \u67b6\u69cb\uff0c\u6211\u5011\u6703\u77e5\u9053",(0,l.kt)("a",{href:"https://web.dev/articles/rendering-performance"},"\u6bcf\u4e00\u5e40 (\u7d04 16.66 ms)")," \u7684\u6642\u9593\u4e0a\u57f7\u884c\u4efb\u52d9\uff0c\u7576\u6c92\u6709\u6642\u9593\u6642\uff0c\u6211\u5011\u53ef\u4ee5\u66ab\u505c\u4e00\u4e9b\u512a\u5148\u5ea6\u8f03\u4f4e\u7684\u5de5\u4f5c\uff0c\u53bb\u505a\u5176\u4ed6\u66f4\u91cd\u8981\u7684\u5de5\u4f5c\uff0c\u4e4b\u5f8c\u518d\u56de\u4f86\u5b8c\u6210\u5269\u4e0b\u7684\u4efb\u52d9"),(0,l.kt)("br",null),(0,l.kt)("br",null),(0,l.kt)("div",{style:{display:"flex",justifyContent:"center"}},(0,l.kt)("div",{style:{marginRight:"20px"}},(0,l.kt)("img",{src:"/img/full-time-remaining.png",alt:"Full Time Remaining",width:"100%"}),(0,l.kt)("p",{style:{textAlign:"center"}},"Full Time Remaining")),(0,l.kt)("div",null,(0,l.kt)("img",{src:"/img/no-time-remaining.png",alt:"No Time Remaining",width:"100%"}),(0,l.kt)("p",{style:{textAlign:"center"}},"No Time Remaining"))),(0,l.kt)("br",null),(0,l.kt)("br",null),(0,l.kt)("p",null,"\u53ef\u4ee5\u53c3\u8003\u4e0b\u9762\u7684\u904e\u7a0b"),(0,l.kt)("iframe",{width:"560",height:"315",src:"https://www.youtube.com/embed/0fUmOPQUv-Q?si=_Nd6wzdFMXKdQ9IU&clip=UgkxvhqewFMkCzx7EnZBpJjV_fsKXnw3HSxq&clipt=EPDlDxjQuhM",title:"YouTube video player",frameborder:"0",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share",referrerpolicy:"strict-origin-when-cross-origin",allowfullscreen:!0}),(0,l.kt)("br",null),(0,l.kt)("br",null),(0,l.kt)("br",null),(0,l.kt)("h3",{id:"prioritizing-work"},"Prioritizing Work"),(0,l.kt)("p",null,"\u5728\u4ecb\u7d39 React Fiber \u6642\u6709\u63d0\u5230 React \u6c7a\u5b9a\u4e86\u5404\u985e\u71df\u5de5\u4f5c\u7684 Priority\uff0c\u90a3\u600e\u9ebc\u6c7a\u5b9a\u4ec0\u9ebc\u662f\u66f4\u91cd\u8981\u7684\u5de5\u4f5c\u5462\uff1f"),(0,l.kt)("p",null,"\u5728 ",(0,l.kt)("a",{href:"https://github.com/facebook/react/blob/v16.0.0/src/renderers/shared/fiber/ReactPriorityLevel.js"},"React v16 \u7684\u539f\u59cb\u78bc"),"\u88e1\u9762\u6709\u5b9a\u7fa9"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js"},"// v16 ReactPriorityLevel.js\nmodule.exports = {\n  NoWork: 0, // No work is pending.\n  SynchronousPriority: 1, // For controlled text inputs. Synchronous side-effects.\n  TaskPriority: 2, // Completes at the end of the current tick.\n  HighPriority: 3, // Interaction that needs to complete pretty soon to feel responsive.\n  LowPriority: 4, // Data fetching, or result from updating stores.\n  OffscreenPriority: 5, // Won't be visible but do the work in case it becomes visible.\n};\n")),(0,l.kt)("p",null,"\u6211\u5011\u53ef\u4ee5\u770b\u5230"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"SynchronousPriority"),"\uff1a\u540c\u6b65\u7684\u512a\u5148\u7d1a\uff0c\u7528\u65bc\u63a7\u5236\u6587\u5b57\u8f38\u5165\u7b49\u540c\u6b65\u7684 side-effects\uff0c\u70ba\u6700\u9ad8\u7684\u512a\u5148\u7d1a"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"TaskPriority"),"\uff1a\u5728\u7576\u524d ",(0,l.kt)("a",{href:"https://github.com/getify/You-Dont-Know-JS/blob/1st-ed/async%20%26%20performance/ch1.md#:~:text=each%20iteration%20of%20this%20loop%20is%20called%20a%20%22tick.%22"},"tick \uff08\u4e5f\u5c31\u662f\u6bcf\u4e00\u6b21 Event Loop \u7684\u5faa\u74b0)")," \u7d50\u675f\u6642\u5b8c\u6210\u7684\u512a\u5148\u7d1a\uff0c\u70ba\u7b2c\u4e8c\u9ad8\u7684\u512a\u5148\u7d1a"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"HighPriority"),"\uff1a\u7528\u65bc\u9700\u8981\u5feb\u901f\u97ff\u61c9\u7684\u4ea4\u4e92\uff0c\u4f8b\u5982\u9ede\u64ca\u3001\u8f38\u5165\u7b49\uff0c\u70ba\u7b2c\u4e09\u9ad8\u7684\u512a\u5148\u7d1a"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"LowPriority"),"\uff1a\u7528\u65bc\u6578\u64da\u7372\u53d6\u6216\u66f4\u65b0 store \u7b49\uff0c\u70ba\u7b2c\u56db\u9ad8\u7684\u512a\u5148\u7d1a"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"OffscreenPriority"),"\uff1a\u4e0d\u6703\u986f\u793a\u5728\u756b\u9762\u4e0a\u7684 Task\uff0c\u7528\u65bc\u4e0d\u6703\u7acb\u5373\u986f\u793a\u4f46\u53ef\u80fd\u5728\u986f\u793a\u6642\u9700\u8981\u5b8c\u6210\u7684\u5de5\u4f5c\uff0c\u70ba\u6700\u4f4e\u7684\u512a\u5148\u7d1a")),(0,l.kt)("br",null),(0,l.kt)("br",null),(0,l.kt)("p",null,"\u6709\u4e86\u9019\u4e9b Priority \u7684\u5b9a\u7fa9\uff0c\u7576 Task \u9032\u4f86 React \u6642\uff0c\u6703\u6839\u64da Task \u7684\u512a\u5148\u7d1a\u4f86\u6c7a\u5b9a Task \u7684\u57f7\u884c\u9806\u5e8f"),(0,l.kt)("img",{id:"priority-task-order",src:"/img/priority-task-order.png",alt:"Priority Task Order",width:"400"}),(0,l.kt)("br",null),(0,l.kt)("br",null),(0,l.kt)("admonition",{title:"\u985e\u4f3c Priority Queue \u7684\u6982\u5ff5",type:"info"},(0,l.kt)("p",{parentName:"admonition"},"\u5982\u679c\u4f60\u525b\u597d\u6709\u5b78\u904e Priority Queue \u9019\u500b Data Structure\uff0c\u6703\u767c\u73fe\u9019\u6982\u5ff5\u5f88\u985e\u4f3c\uff0c\u5728 React \u5f8c\u7e8c\u7684\u7248\u672c\u4e2d\uff0c\u4e5f",(0,l.kt)("a",{href:"https://github.com/facebook/react/blob/e62a8d754548a490c2a3bcff3b420e5eedaf11c0/packages/scheduler/src/SchedulerMinHeap.js"},"\u5be6\u73fe\u4e86\u81ea\u5df1\u7684 Min Heap")," \u4f86\u5be6\u73fe Priority Queue \u7684\u6982\u5ff5")),(0,l.kt)("br",null),(0,l.kt)("br",null),(0,l.kt)("br",null),(0,l.kt)("p",null,"\u5982\u4e0a\u5716 \u6240\u793a\uff0c\u4e09\u89d2\u5f62\u8b8a\u5f62\u52d5\u756b\u7684\u512a\u5148\u7d1a\u70ba ",(0,l.kt)("inlineCode",{parentName:"p"},"HighPriority"),"\uff0c\u800c\u6578\u5b57\u66f4\u65b0\u7684\u512a\u5148\u7d1a\u70ba ",(0,l.kt)("inlineCode",{parentName:"p"},"LowPriority"),"\uff0c\u6240\u4ee5\u4e09\u89d2\u5f62\u8b8a\u5f62\u52d5\u756b\u6703\u5148\u5b8c\u6210\uff0c\u6578\u5b57\u66f4\u65b0\u5247\u662f\u5f8c\u9762\u518d\u5b8c\u6210"),(0,l.kt)("img",{src:"/img/fiber-priority.png",alt:"Fiber Priority Example",width:"300"}),(0,l.kt)("br",null),(0,l.kt)("br",null),(0,l.kt)("br",null),(0,l.kt)("h3",{id:"reusing-work"},"Reusing Work"),(0,l.kt)("p",null,"\u5728\u820a\u7684 Stack reconciler \u4e2d\uff0c\u6c92\u6709 cache Virtual DOM \u6bcf\u500b node \u7684\u6a5f\u5236\uff0c\u82e5\u767c\u73fe\u67d0\u500b node \u9700\u8981\u66f4\u65b0\uff0c\u6703\u91cd\u65b0\u628a\u6574\u500b Virtual DOM \u904d\u6b77\u904e\u4e00\u904d\uff0c\u9020\u6210\u8a08\u7b97 Virtual DOM \u82b1\u8cbb\u7684\u6642\u9593\u5f88\u4e45\uff0c\u4f46\u50c5\u66f4\u65b0\u90e8\u5206\u7684 Real DOM"),(0,l.kt)("p",null,"\u65b0\u7684 Fiber reconciler \u5f15\u9032\u5f8c\uff0c\u6709\u4e86 Reusing work (cache) \u7684\u6a5f\u5236\uff0c\u6703\u91cd\u65b0\u904b\u7528 Virtual DOM \u4e4b\u524d\u7684\u8a08\u7b97\u7d50\u679c\uff0c\u512a\u5316\u6027\u80fd"),(0,l.kt)("img",{src:"/img/reusing-work.png",alt:"Reusing Work",width:"400"}),(0,l.kt)("br",null),(0,l.kt)("br",null),(0,l.kt)("br",null),(0,l.kt)("p",null,"\u52d5\u756b\u89e3\u8aaa\u5982\u4e0b"),(0,l.kt)("iframe",{width:"560",height:"315",src:"https://www.youtube.com/embed/0fUmOPQUv-Q?si=Yt2B6uuj-4u343xH&clip=UgkxOwvuqTNAKdruXjQlBNWwRIHvGREF23J9&clipt=EKyCGRiXxBw",title:"YouTube video player",frameborder:"0",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share",referrerpolicy:"strict-origin-when-cross-origin",allowfullscreen:!0}),(0,l.kt)("br",null),(0,l.kt)("br",null),(0,l.kt)("br",null),(0,l.kt)("h2",{id:"\u984c\u5916\u8a71\u70ba\u4ec0\u9ebc\u53eb-fiber"},"\u984c\u5916\u8a71\uff1a\u70ba\u4ec0\u9ebc\u53eb Fiber\uff1f"),(0,l.kt)("p",null,"\u6211\u7576\u521d\u4e00\u76f4\u5f88\u7d0d\u60b6\u70ba\u4ec0\u9ebc\u53eb Fiber\uff0c\u6211\u7b2c\u4e00\u6642\u9593\u60f3\u5230\u7684\u662f\u6240\u8b02\u7684\u5149\u7e96\uff08\u53ef\u4ee5\u53c3\u8003\u4e0b\u9762\u5f71\u7247\uff09\uff1a"),(0,l.kt)("iframe",{width:"560",height:"315",src:"https://www.youtube.com/embed/o5t6evogJbg?si=1DdpL5R-C_CKtx7P",title:"YouTube video player",frameborder:"0",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share",referrerpolicy:"strict-origin-when-cross-origin",allowfullscreen:!0}),(0,l.kt)("br",null),(0,l.kt)("br",null),(0,l.kt)("br",null),(0,l.kt)("p",null,"\u56e0\u70ba\u4e5f\u627e\u4e0d\u5230\u5b98\u65b9\u6709 Fiber \u9019\u500b\u540d\u7a31\u7684\u5178\u6545\uff0c\u6240\u4ee5\u6211\u4e5f\u554f\u4e86 Chat GPT \u4e00\u4e0b\uff0c\u6211\u5f97\u5230\u7684\u56de\u7b54\u662f\uff1a"),(0,l.kt)("br",null),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"React Fiber \u548c\u5149\u7e96\u7684\u552f\u4e00\u5171\u540c\u9ede\u5728\u65bc\u300c\u5206\u5272\u6210\u7d30\u5c0f\u55ae\u5143\u4ee5\u63d0\u9ad8\u8655\u7406\u6548\u7387\u300d\uff1a"),(0,l.kt)("ul",{parentName:"blockquote"},(0,l.kt)("li",{parentName:"ul"},"React Fiber \u5c07\u6e32\u67d3\u5de5\u4f5c\u5206\u89e3\u6210\u7d30\u5c0f\u7684\u300cfiber units\u300d\uff0c\u5141\u8a31\u5b83\u5728\u9700\u8981\u6642\u4e2d\u65b7\u3001\u91cd\u65b0\u8abf\u6574\u512a\u5148\u7d1a\uff0c\u4e26\u9032\u884c\u512a\u5148\u8655\u7406\uff0c\u9019\u6a23\u61c9\u7528\u7a0b\u5f0f\u53ef\u4ee5\u4fdd\u6301\u6d41\u66a2\u3001\u5373\u6642\u7684\u53cd\u61c9\u3002"),(0,l.kt)("li",{parentName:"ul"},"\u5149\u7e96\u5247\u662f\u5c07\u5149\u8a0a\u865f\u5feb\u901f\u4e14\u7a69\u5b9a\u5730\u50b3\u8f38\uff0c\u4ee5\u5c0f\u5206\u6bb5\u65b9\u5f0f\u9054\u5230\u9577\u8ddd\u96e2\u548c\u9ad8\u6548\u80fd\u7684\u8cc7\u6599\u50b3\u8f38"))),(0,l.kt)("br",null),(0,l.kt)("p",null,"\u6211\u500b\u4eba\u89ba\u5f97\u9019\u500b\u539f\u56e0\u9084\u662f\u883b\u727d\u5f37\u7684\uff0c\u6211\u6bd4\u8f03\u8a8d\u540c\u7684\u53ea\u6709\uff1a"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"\u2705 React Fiber \u662f\u6975\u5c0f\u7684\u55ae\u5143\uff0c\u8ddf\u5149\u7e96\u7684\u76f4\u5f91\u540c\u982d\u9aee\u4e00\u6a23\u7d30\uff0c\u4f7f\u5f97 React \u7684 task scheduling \u53ef\u4ee5\u975e\u5e38\u5f48\u6027"),(0,l.kt)("li",{parentName:"ul"},"\u2705 React Fiber \u80fd\u9ad8\u6548\u5730\u8655\u7406\u8cc7\u6599\uff0c\u5c31\u50cf\u5149\u7e96\u80fd\u9ad8\u6548\u5730\u50b3\u8f38\u5149\u8a0a\u865f\u4e00\u6a23")),(0,l.kt)("br",null),(0,l.kt)("p",null,"\u4e0d\u8a8d\u540c\u7684\u662f\uff1a"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"\u274c \u4e00\u6839\u5149\u7e96\u7684\u9577\u5ea6\u662f\u53ef\u4ee5\u975e\u5e38\u9577\u7684\uff0c\u4e0d\u6703\u5206\u6bb5\u4e32\u63a5\u8655\u7406\uff0c\u4f46 React Fiber \u5c07\u591a\u500b fiber nodes \u4e32\u63a5\u5728\u4e00\u8d77"),(0,l.kt)("li",{parentName:"ul"},"\u274c \u5149\u7e96\u7684\u5f48\u6027\u4f86\u81ea\u65bc\u6750\u8cea\u672c\u8eab\uff0c\u4e00\u6839\u7684\u9577\u5ea6\u5c31\u53ef\u4ee5\u62ff\u4f86\u7167\u80c3\u93e1\u6216\u63a2\u6e2c\u591a\u5f4e\u9053\u7684\u7ba1\u9053\u88e1\uff0c\u4e0d\u662f\u900f\u904e\u5206\u6bb5\u8655\u7406\u7684\u65b9\u6cd5\u7522\u8eab\u7684\u5f48\u6027"),(0,l.kt)("li",{parentName:"ul"},"\u274c \u5149\u7e96\u7684\u50b3\u8f38\u4e26\u6c92\u6709\u512a\u5148\u7d1a\u7684\u6982\u5ff5\uff0c\u4f46 React Fiber \u6709")),(0,l.kt)("br",null),(0,l.kt)("br",null),(0,l.kt)("p",null,"\u4f46\u5982\u679c\u4ee5\u7e3d\u7d50\u4f86\u8aaa\uff0c\u50cf\u662f\u5149\u7e96\u8b93\u5149\u7684\u50b3\u8f38\u6709\u6548\u7387\uff0c\u8b93\u539f\u59cb\u7684\u5149\u80fd\u5920\u4e0d\u907a\u5931\u80fd\u91cf\u4e14\u6709\u6548\u7387\u5730\u50b3\u8f38\uff0c",(0,l.kt)("br",null),"\nReact Fiber \u8b93\u6e32\u67d3\u6709\u6548\u7387\uff0c\u8b93\u539f\u672c\u6e32\u67d3\u6a5f\u5236\u9806\u5229\u904b\u4f5c\u4e14\u4e0d\u6703\u6389\u798e\uff0c\u6211\u89ba\u5f97\u9019\u6a23\u7684\u8aaa\u6cd5\u5c31\u6bd4\u8f03\u53ef\u4ee5\u63a5\u53d7"),(0,l.kt)("br",null),(0,l.kt)("br",null),(0,l.kt)("h2",{id:"\u7d50\u8ad6"},"\u7d50\u8ad6"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"React Fiber \u662f React 16 \u5f15\u5165\u7684\u65b0\u67b6\u69cb\uff0c\u5f15\u9032\u4e86 Task Scheduling \u7684\u80fd\u529b\uff0c\u7528\u65bc\u6539\u5584 React 16 \u524d\u7684\u6e32\u67d3\u4e0a\u7684\u6548\u80fd\u554f\u984c"),(0,l.kt)("li",{parentName:"ul"},"Task Scheduling \u7684\u80fd\u529b\u5305\u542b Pausing Work\u3001Prioritizing Work \u548c Reusing Work\uff1a",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"Prioritizing Work\uff1a\u5206\u914d\u4efb\u52d9\u7684\u512a\u5148\u7d1a\uff0c\u8b93\u9ad8\u512a\u5148\u7d1a\u7684\u5de5\u4f5c\u53ef\u4ee5\u5148\u5b8c\u6210\uff0c\u4e0d\u6703\u88ab\u4f4e\u512a\u5148\u7d1a\u7684\u5de5\u4f5c\u963b\u585e"),(0,l.kt)("li",{parentName:"ul"},"Pausing Work\uff1a\u66ab\u505c\u4f4e\u512a\u5148\u5ea6\u7684\u5de5\u4f5c\uff0c\u5148\u4ee5\u6bcf\u4e00\u5e40\u80fd\u9806\u5229\u6e32\u67d3\u70ba\u4e3b"),(0,l.kt)("li",{parentName:"ul"},"Reusing Work\uff1a\u91cd\u8907\u4f7f\u7528\u820a Virtual DOM \u7684\u8a08\u7b97\u7d50\u679c\uff0c\u8b93\u65b0 Virtual DOM \u7522\u751f\u904e\u7a0b\u4e0d\u9700\u8981\u6bcf\u6b21\u90fd\u8981\u5927\u91cf\u7684\u8a08\u7b97")))),(0,l.kt)("br",null),(0,l.kt)("br",null),(0,l.kt)("br",null),(0,l.kt)("h3",{id:"\u53c3\u8003\u8cc7\u6599"},"\u53c3\u8003\u8cc7\u6599"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://github.com/acdlite/react-fiber-architecture"},"Vercel & ex-React Core Team member - Andrew Clark - React Fiber Architecture")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://www.youtube.com/watch?v=0fUmOPQUv-Q&t=424s&pp=ygURcmVhY3QgZmliZXIgaW50cm8%3D"},"Fullstack Academy - Brief Overview of React Fiber - A Tutorial on its Features and Advantages")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://github.com/facebook/react/tree/v16.0.0"},"React v16.0 source code")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://github.com/getify/You-Dont-Know-JS/blob/1st-ed/async%20%26%20performance/ch1.md#:~:text=each%20iteration%20of%20this%20loop%20is%20called%20a%20%22tick.%22"},"You Don't Know JS - Async & Performance")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://web.dev/articles/rendering-performance"},"web.dev - Rendering Performance")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://www.youtube.com/watch?app=desktop&v=o5t6evogJbg"},"What is Fiber Optics? | Mocomi Kids"))),(0,l.kt)("br",null),(0,l.kt)("br",null),(0,l.kt)("br",null))}s.isMDXComponent=!0}}]);