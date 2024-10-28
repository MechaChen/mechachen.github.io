"use strict";(self.webpackChunkbenson_doc=self.webpackChunkbenson_doc||[]).push([[5667],{3905:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>k});var l=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function n(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);t&&(l=l.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,l)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?n(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):n(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function o(e,t){if(null==e)return{};var r,l,a=function(e,t){if(null==e)return{};var r,l,a={},n=Object.keys(e);for(l=0;l<n.length;l++)r=n[l],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(l=0;l<n.length;l++)r=n[l],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var s=l.createContext({}),u=function(e){var t=l.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},p=function(e){var t=u(e.components);return l.createElement(s.Provider,{value:t},e.children)},h="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return l.createElement(l.Fragment,{},t)}},c=l.forwardRef((function(e,t){var r=e.components,a=e.mdxType,n=e.originalType,s=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),h=u(r),c=a,k=h["".concat(s,".").concat(c)]||h[c]||d[c]||n;return r?l.createElement(k,i(i({ref:t},p),{},{components:r})):l.createElement(k,i({ref:t},p))}));function k(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var n=r.length,i=new Array(n);i[0]=c;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o[h]="string"==typeof e?e:a,i[1]=o;for(var u=2;u<n;u++)i[u]=r[u];return l.createElement.apply(null,i)}return l.createElement.apply(null,r)}c.displayName="MDXCreateElement"},7718:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>d,frontMatter:()=>n,metadata:()=>o,toc:()=>u});var l=r(7462),a=(r(7294),r(3905));const n={sidebar__label:"[Graph] 3. Graph traversal - DFS & BFS",title:"[Graph] 3. Graph traversal - DFS & BFS"},i=void 0,o={unversionedId:"Code/graph-3-traversal",id:"Code/graph-3-traversal",title:"[Graph] 3. Graph traversal - DFS & BFS",description:"Graph traversal \u662f\u4ec0\u9ebc\uff1f",source:"@site/docs/Code/graph-3-traversal.mdx",sourceDirName:"Code",slug:"/Code/graph-3-traversal",permalink:"/zh-tw/docs/Code/graph-3-traversal",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/Code/graph-3-traversal.mdx",tags:[],version:"current",frontMatter:{sidebar__label:"[Graph] 3. Graph traversal - DFS & BFS",title:"[Graph] 3. Graph traversal - DFS & BFS"},sidebar:"tutorialSidebar",previous:{title:"[Graph] 2. Graph \u7684\u57fa\u672c\u904b\u7b97",permalink:"/zh-tw/docs/Code/graph-2-operation"},next:{title:"[Graph] 4. Disjoint Set (Union & Find)",permalink:"/zh-tw/docs/Code/graph-4-disjoint-set"}},s={},u=[{value:"Graph traversal \u662f\u4ec0\u9ebc\uff1f",id:"graph-traversal-\u662f\u4ec0\u9ebc",level:2},{value:"Graph Traversal \u7684 use cases",id:"graph-traversal-\u7684-use-cases",level:2},{value:"Graph Traversal \u7684\u7a2e\u985e",id:"graph-traversal-\u7684\u7a2e\u985e",level:2},{value:"Depth-First Search (DFS)",id:"depth-first-search-dfs",level:2},{value:"DFS \u52d5\u756b\u7bc4\u4f8b",id:"dfs-\u52d5\u756b\u7bc4\u4f8b",level:3},{value:"\u7a0b\u5f0f\u78bc\u5be6\u73fe",id:"\u7a0b\u5f0f\u78bc\u5be6\u73fe",level:3},{value:"Pseudocode",id:"pseudocode",level:4},{value:"JS \u5be6\u73fe",id:"js-\u5be6\u73fe",level:4},{value:"Breadth-First Search (BFS)",id:"breadth-first-search-bfs",level:2},{value:"BFS \u52d5\u756b\u7bc4\u4f8b",id:"bfs-\u52d5\u756b\u7bc4\u4f8b",level:3},{value:"\u7a0b\u5f0f\u78bc\u5be6\u73fe",id:"\u7a0b\u5f0f\u78bc\u5be6\u73fe-1",level:3},{value:"Pseudocode",id:"pseudocode-1",level:4},{value:"JS \u5be6\u73fe",id:"js-\u5be6\u73fe-1",level:4},{value:"\u7d50\u8ad6",id:"\u7d50\u8ad6",level:2},{value:"\u53c3\u8003\u8cc7\u6599",id:"\u53c3\u8003\u8cc7\u6599",level:3}],p={toc:u},h="wrapper";function d(e){let{components:t,...r}=e;return(0,a.kt)(h,(0,l.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"graph-traversal-\u662f\u4ec0\u9ebc"},"Graph traversal \u662f\u4ec0\u9ebc\uff1f"),(0,a.kt)("p",null,"\u901a\u5e38\u5728\u73fe\u5be6\u4e16\u754c\u4e2d\uff0c\u90fd\u662f\u53bb\u91dd\u5c0d\u7279\u5b9a\u60c5\u5883\u627e\u5230\u5c0d\u61c9\u7684 vertex \u53bb\u505a\u8655\u7406\uff0c\u50cf\u662f\u627e\u5230\u670b\u53cb\u670b\u53cb\uff0c\u4e3b\u8981\u6703\u6709\u4ee5\u4e0b\u4e09\u7a2e\u884c\u70ba\uff1a"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Visiting"),(0,a.kt)("li",{parentName:"ul"},"Updating"),(0,a.kt)("li",{parentName:"ul"},"Checking")),(0,a.kt)("br",null),(0,a.kt)("br",null),(0,a.kt)("admonition",{type:"caution"},(0,a.kt)("p",{parentName:"admonition"},"\u8ddf Tree \u6bd4\u8d77\u4f86\uff0cGraph traversal \u6c92\u6709\u7279\u5b9a\u7684 root /  starting point")),(0,a.kt)("br",null),(0,a.kt)("br",null),(0,a.kt)("h2",{id:"graph-traversal-\u7684-use-cases"},"Graph Traversal \u7684 use cases"),(0,a.kt)("p",null,"\u4ee5\u4e0b\u662f\u9700\u8981\u4f7f\u7528 Graph traversal \u7684 use cases\uff1a"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Peer to peer networking (\u9ede\u5c0d\u9ede\u7db2\u8def)"),(0,a.kt)("li",{parentName:"ul"},"Web crawlers\uff08\u722c\u87f2\u7684\u7db2\u7ad9\u88e1\uff0c\u9084\u6709\u5176\u4ed6\u7684\u7db2\u7ad9\u9023\u7d50\u8981\u722c\uff09"),(0,a.kt)("li",{parentName:"ul"},"\u63a8\u85a6\u670b\u53cb\uff0c\u4f8b\u5982 FB friend recommendations ",(0,a.kt)("br",null),"\n(ex : Maria & Armie \u90fd\u662f Nan \u7684\u670b\u53cb\uff0cTim \u4e5f\u90fd\u662f Maria & Armie \u7684\u670b\u53cb\n\u56e0\u6b64\u6211\u5011\u53ef\u4ee5\u63a8\u85a6 Tim  \u7d66 Nan)")),(0,a.kt)("img",{width:"400",src:"/img/undirected-graph-example.png",alt:"undirected-graph-example"}),(0,a.kt)("br",null),(0,a.kt)("br",null),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Shortest path problems (\u6700\u77ed\u8def\u5f91\u554f\u984c)",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"GPS Navigation"),(0,a.kt)("li",{parentName:"ul"},"Solving mazes"),(0,a.kt)("li",{parentName:"ul"},"AI (shortest path to win the game)")))),(0,a.kt)("br",null),(0,a.kt)("br",null),(0,a.kt)("h2",{id:"graph-traversal-\u7684\u7a2e\u985e"},"Graph Traversal \u7684\u7a2e\u985e"),(0,a.kt)("p",null,"Graph traversal \u8ddf Tree traversal \u4e00\u6a23\uff0c\u4e3b\u8981\u6703\u6709\u5169\u7a2e\uff1a"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Depth-First Search (DFS)"),(0,a.kt)("li",{parentName:"ul"},"Breadth-First Search (BFS)")),(0,a.kt)("br",null),(0,a.kt)("h2",{id:"depth-first-search-dfs"},"Depth-First Search (DFS)"),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"\u5f9e\u7d66\u5b9a\u7684 vertex \u958b\u59cb\uff0c\u6cbf\u8457\u7576\u4e0b\u7684\u7b2c\u4e00\u500b neighbor \u4e00\u8def\u6df1\u5165\u5230\u6700\u6df1\u7684 vertex\uff0c\u7136\u5f8c\u56de\u6eaf\uff0c\u7e7c\u7e8c\u63a2\u7d22\u5176\u4ed6\u672a\u8a2a\u554f\u7684 vertex\u3002\u901a\u5e38\u7528 Recursion \u9054\u6210")),(0,a.kt)("img",{width:"550",src:"/img/graph-depth-first-search.png",alt:"graph-depth-first-search"}),(0,a.kt)("br",null),(0,a.kt)("br",null),(0,a.kt)("br",null),(0,a.kt)("h3",{id:"dfs-\u52d5\u756b\u7bc4\u4f8b"},"DFS \u52d5\u756b\u7bc4\u4f8b"),(0,a.kt)("p",null,"\u5047\u5982\u5f9e A \u9ede\u958b\u59cb\uff0c\u7136\u5f8c\u4e3b\u8981\u4f9d\u5b57\u6bcd\u9806\u5e8f\u70ba\u512a\u5148\u65b9\u5411\u9078\u64c7 neighbor"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"A --\x3e B\uff1aA \u627e\u5230\u7b2c\u4e00\u500b neighbor B\uff0cA \u5f80 B \u8d70"),(0,a.kt)("li",{parentName:"ol"},"B --\x3e D\uff1aB \u627e\u5230\u4e0b\u4e00\u500b neighbor\uff0cB \u5f80 D \u8d70"),(0,a.kt)("li",{parentName:"ol"},"D --\x3e E\uff1aD \u627e\u5230\u4e0b\u4e00\u500b neighbor E\uff0cD \u5f80 E \u8d70"),(0,a.kt)("li",{parentName:"ol"},"E --\x3e C\uff1aE \u627e\u5230\u4e0b\u4e00\u500b neighbor C\uff0cE \u5f80 C \u8d70"),(0,a.kt)("li",{parentName:"ol"},"C --\x3e E\uff1aC \u8d70\u5230\u5e95\u4e86\uff0c\u5f80\u56de\u8d70\u5230 E"),(0,a.kt)("li",{parentName:"ol"},"E --\x3e F\uff1aE \u627e\u5230\u7b2c\u4e8c\u500b neighbor F\uff0cE \u5f80 F \u8d70"),(0,a.kt)("li",{parentName:"ol"},"F\uff1a\u8d70\u5230\u5e95\u767c\u73fe\u6240\u6709\u7bc0\u9ede\u90fd\u904d\u6b77\u904e\u4e86\uff0c\u505c\u6b62\u904d\u6b77")),(0,a.kt)("div",{style:{position:"relative",width:"100%",maxWidth:"600px",height:"0",paddingBottom:"62.5%"}},(0,a.kt)("iframe",{src:"https://docs.google.com/presentation/d/e/2PACX-1vQjOVPTIpUBFtSGz6RUIxdLLx_HS3M3IpyKly6-jjsyuCrkp0IMtQ8IPhpiHXtchB1BKUjLmowChdkT/embed?start=false&loop=false&delayms=3000",frameborder:"0",allowfullscreen:"true",mozallowfullscreen:"true",webkitallowfullscreen:"true",style:{position:"absolute",top:0,left:0,width:"100%",height:"100%",maxWidth:"600px",maxHeight:"375px"}})),(0,a.kt)("br",null),(0,a.kt)("br",null),(0,a.kt)("br",null),(0,a.kt)("p",null,"\u5982\u679c\u4ee5 Adjacency List \u4f86\u770b\u7684\u8a71\uff0c\u5c31\u6703\u5982\u4e0b\u5716\uff1a"),(0,a.kt)("div",{style:{position:"relative",width:"100%",maxWidth:"600px",height:"0",paddingBottom:"62.5%"}},(0,a.kt)("iframe",{src:"https://docs.google.com/presentation/d/e/2PACX-1vTR7Z22pr0cOhJ8Ol5Y8s1_xqYLxQ9CUOxBLMDnXteXed0kS-hUpD-BToVH0S4ZN712nAd3jhMHOeh8/embed?start=false&loop=false&delayms=3000",frameborder:"0",allowfullscreen:"true",mozallowfullscreen:"true",webkitallowfullscreen:"true",style:{position:"absolute",top:0,left:0,width:"100%",height:"100%",maxWidth:"600px",maxHeight:"375px"}})),(0,a.kt)("br",null),(0,a.kt)("br",null),(0,a.kt)("br",null),(0,a.kt)("br",null),(0,a.kt)("h3",{id:"\u7a0b\u5f0f\u78bc\u5be6\u73fe"},"\u7a0b\u5f0f\u78bc\u5be6\u73fe"),(0,a.kt)("h4",{id:"pseudocode"},"Pseudocode"),(0,a.kt)("p",null,"\u6211\u5011\u7684\u9700\u6c42\u5982\u4e0b\uff1a"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"\u5ba3\u544a\u4e00\u500b function \u63a5\u6536\u4e00\u500b\u521d\u59cb\u7bc0\u9ede"),(0,a.kt)("li",{parentName:"ul"},"\u5ba3\u544a\u4e00\u500b\u9663\u5217\uff0c\u5132\u5b58\u6700\u7d42\u904d\u6b77\u7d50\u679c"),(0,a.kt)("li",{parentName:"ul"},"\u5ba3\u544a\u4e00\u500b\u7269\u4ef6\uff0c\u5132\u5b58\u6240\u6709\u7d93\u904e\u7684 vertices"),(0,a.kt)("li",{parentName:"ul"},"\u5ba3\u544a\u4e00\u500b helper function\uff0c\u5176\u63a5\u6536\u4e00\u500b vertex",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"\u5982\u679c vertex \u4e0d\u5b58\u5728\uff0c\u6b64 helper function \u76f4\u63a5 return"),(0,a.kt)("li",{parentName:"ul"},"\u6b64 helper function \u6703\u628a vertex \u52a0\u5230\u7269\u4ef6\u88e1\uff0c\u8868\u793a\u5df2\u88ab\u8a2a\u554f\uff0c\u4e26\u4e14\u52a0\u5230\u7d50\u679c\u9663\u5217\u88e1\uff0c\u8868\u793a\u5df2\u88ab\u904d\u6b77"),(0,a.kt)("li",{parentName:"ul"},"\u904d\u6b77\u6b64 vertext adjacencyList \u7684\u6240\u6709\u503c"),(0,a.kt)("li",{parentName:"ul"},"\u5982\u679c\u6709 adjacencyList \u7684 vertex \u9084\u6c92\u88ab\u8a2a\u554f\uff0c\u6301\u7e8c\u5730\u5c0d\u90a3\u4e9b vertices \u547c\u53eb\u6b64 helper function"))),(0,a.kt)("li",{parentName:"ul"},"\u4ee5\u8d77\u59cb vertex \u547c\u53eb\u6b64\u8f14\u52a9\u51fd\u5f0f")),(0,a.kt)("br",null),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-javascript"},"DFS(vertext):\n    if vertex is empty\n        return\n    \n    add vertex to results list\n    mark vertex as visited\n\n    for each neighbor in vertex's neighbors:\n        if neighbor is not visited:\n            DFS(neighbor)\n")),(0,a.kt)("br",null),(0,a.kt)("h4",{id:"js-\u5be6\u73fe"},"JS \u5be6\u73fe"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-javascript"},"const graph = [];\n\nconst result = [];\nconst visited = {};\n\n\nfunction dfs(vertex) {\n    if (vertex) {\n        return null;\n    }\n\n    result.push(vertex);\n    visited[vertex] = true;\n\n    for (let neighbor of graph[vertex]) {\n        if (!visited[neighbor]) {\n            dfs(neighbor);\n        }\n    }\n}\n\ndfs(root);\n")),(0,a.kt)("br",null),(0,a.kt)("br",null),(0,a.kt)("br",null),(0,a.kt)("br",null),(0,a.kt)("br",null),(0,a.kt)("h2",{id:"breadth-first-search-bfs"},"Breadth-First Search (BFS)"),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"\u5f9e\u7d66\u5b9a\u7684 vertex \u958b\u59cb\uff0c\u9996\u5148\u8a2a\u554f\u6240\u6709\u76f4\u63a5\u76f8\u9130\u7684\u7bc0\u9ede\uff08\u5373\u7b2c\u4e00\u5c64\uff09\uff0c\u7136\u5f8c\u4f9d\u6b21\u8a2a\u554f\u9019\u4e9b\u7bc0\u9ede\u7684\u9130\u5c45\uff08\u5373\u7b2c\u4e8c\u5c64\uff09\uff0c\u4ee5\u6b64\u985e\u63a8\u3002\u9019\u7a2e\u65b9\u6cd5\u4f7f\u7528 Queue\u4f86\u8a18\u9304\u8a2a\u554f\u7684\u7bc0\u9ede\u3002")),(0,a.kt)("img",{width:"550",src:"/img/graph-breadth-first-search.png",alt:"graph-breadth-first-search"}),(0,a.kt)("br",null),(0,a.kt)("br",null),(0,a.kt)("br",null),(0,a.kt)("br",null),(0,a.kt)("h3",{id:"bfs-\u52d5\u756b\u7bc4\u4f8b"},"BFS \u52d5\u756b\u7bc4\u4f8b"),(0,a.kt)("p",null,"\u5047\u5982\u5f9e A \u9ede\u958b\u59cb\uff0c\u7136\u5f8c\u4e3b\u8981\u4f9d\u5b57\u6bcd\u9806\u5e8f\u70ba\u512a\u5148\u65b9\u5411\u9078\u64c7 neighbor"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"A --\x3e B\uff1aA \u627e\u5230\u7b2c\u4e00\u500b neighbor B\uff0cA \u5f80 B \u8d70"),(0,a.kt)("li",{parentName:"ol"},"A --\x3e E\uff1aA \u627e\u5230\u4e0b\u4e00\u500b neighbor E\uff0cA \u5f80 E \u8d70"),(0,a.kt)("li",{parentName:"ol"},"B --\x3e C\uff1aB \u627e\u5230\u4e0b\u4e00\u500b neighbor C\uff0cB \u5f80 C \u8d70"),(0,a.kt)("li",{parentName:"ol"},"B --\x3e D\uff1aB \u627e\u5230\u4e0b\u4e00\u500b neighbor D\uff0cB \u5f80 D \u8d70"),(0,a.kt)("li",{parentName:"ol"},"E --\x3e F\uff1aE \u627e\u5230\u4e0b\u4e00\u500b neighbor F\uff0cE \u5f80 F \u8d70"),(0,a.kt)("li",{parentName:"ol"},"F\uff1a\u8d70\u5230\u5e95\u767c\u73fe\u6240\u6709\u7bc0\u9ede\u90fd\u904d\u6b77\u904e\u4e86\uff0c\u505c\u6b62\u904d\u6b77")),(0,a.kt)("div",{style:{position:"relative",width:"100%",maxWidth:"600px",height:"0",paddingBottom:"62.5%"}},(0,a.kt)("iframe",{src:"https://docs.google.com/presentation/d/e/2PACX-1vQd3BDMrbFb_SltYn2WSWSqymfQNeITRuZWYcUJqKFpBb9t2vR09QeadZPgNOKXID7bFGZFVbFcfAlx/embed?start=false&loop=false&delayms=3000",frameborder:"0",allowfullscreen:"true",mozallowfullscreen:"true",webkitallowfullscreen:"true",style:{position:"absolute",top:0,left:0,width:"100%",height:"100%",maxWidth:"600px",maxHeight:"375px"}})),(0,a.kt)("br",null),(0,a.kt)("br",null),(0,a.kt)("br",null),(0,a.kt)("br",null),(0,a.kt)("p",null,"\u5982\u679c\u4ee5 Adjacency List \u4f86\u770b\u7684\u8a71\uff0c\u5c31\u6703\u5982\u4e0b\u5716\uff1a"),(0,a.kt)("div",{style:{position:"relative",width:"100%",maxWidth:"600px",height:"0",paddingBottom:"62.5%"}},(0,a.kt)("iframe",{src:"https://docs.google.com/presentation/d/e/2PACX-1vTR7Z22pr0cOhJ8Ol5Y8s1_xqYLxQ9CUOxBLMDnXteXed0kS-hUpD-BToVH0S4ZN712nAd3jhMHOeh8/embed?start=false&loop=false&delayms=3000",frameborder:"0",allowfullscreen:"true",mozallowfullscreen:"true",webkitallowfullscreen:"true",style:{position:"absolute",top:0,left:0,width:"100%",height:"100%",maxWidth:"600px",maxHeight:"375px"}})),(0,a.kt)("br",null),(0,a.kt)("br",null),(0,a.kt)("br",null),(0,a.kt)("br",null),(0,a.kt)("h3",{id:"\u7a0b\u5f0f\u78bc\u5be6\u73fe-1"},"\u7a0b\u5f0f\u78bc\u5be6\u73fe"),(0,a.kt)("h4",{id:"pseudocode-1"},"Pseudocode"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"\u6b64\u51fd\u5f0f\u63a5\u6536\u4e00\u500b\u8d77\u59cb vertex"),(0,a.kt)("li",{parentName:"ul"},"\u5ba3\u544a\u4e00\u500b queue\uff0c\u4e26\u5c07\u8d77\u59cb vertex \u653e\u9032\u53bb"),(0,a.kt)("li",{parentName:"ul"},"\u5ba3\u544a\u4e00\u500b array\uff0c\u5132\u5b58\u6240\u6709\u8a2a\u554f\u904e\u7684\u7bc0\u9ede"),(0,a.kt)("li",{parentName:"ul"},"\u5ba3\u544a\u4e00\u500b object\uff0c\u5132\u5b58\u6240\u6709\u8a2a\u554f\u904e\u7684\u7bc0\u9ede"),(0,a.kt)("li",{parentName:"ul"},"\u5c07\u8d77\u59cb vertex \u6a19\u8a3b\u70ba visited"),(0,a.kt)("li",{parentName:"ul"},"\u53ea\u8981 queue \u5167\u9084\u6709 vertex\uff0c\u5c31\u5c0d queue \u505a\u904d\u6b77",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"\u79fb\u9664 queue \u7684 1st vertex\uff0c\u4e26\u5c07 vertex push \u5230 visited array"),(0,a.kt)("li",{parentName:"ul"},"\u904d\u6b77\u6b64 vertex \u5c0d\u61c9\u7684 adjacencyList \u7684\u6240\u6709\u5143\u7d20"),(0,a.kt)("li",{parentName:"ul"},"\u5982\u679c\u904d\u6b77\u5230\u7684 vertex \u4e0d\u5728 visited object \u88e1\uff0c\u5c07\u5176\u6a19\u793a\u70ba visited \u4e14 enqueue \u6b64 vertex"))),(0,a.kt)("li",{parentName:"ul"},"\u4e00\u65e6\u5b8c\u6210\u904d\u6b77\uff0c\u56de\u50b3\u8a2a\u554f\u904e\u7684 nodes")),(0,a.kt)("br",null),(0,a.kt)("h4",{id:"js-\u5be6\u73fe-1"},"JS \u5be6\u73fe"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-javascript"},"const graph = [];\n\nconst result = [];\n\nfunction bfs(vertex) {\n    const queue = [vertex];\n    const result = [];\n    const visited = {};\n\n    visited[vertex] = true;\n\n    while (queue.length > 0) {\n        const vertex = queue.shift();\n        result.push(vertex);\n\n        const adjacencyList = graph[vertex];\n\n        for (let neighbor of adjacencyList) {\n            if (!visited[neighbor]) {\n                visited[neighbor] = true;\n                queue.push(neighbor);\n            }\n        }\n    }\n\n    return result;\n}\n\nbfs(root);\n")),(0,a.kt)("br",null),(0,a.kt)("br",null),(0,a.kt)("br",null),(0,a.kt)("h2",{id:"\u7d50\u8ad6"},"\u7d50\u8ad6"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"Graph traversal \u5206\u70ba\u5169\u7a2e\uff1aDFS & BFS"),(0,a.kt)("li",{parentName:"ol"},"DFS \u6cbf\u8457 neighbor \u4e00\u76f4\u6df1\u5165\u5230\u6700\u6df1\u7684 vertex\uff0c\u7136\u5f8c\u56de\u6eaf\uff0c\u76f4\u5230\u904d\u6b77\u6240\u6709 vertex"),(0,a.kt)("li",{parentName:"ol"},"BFS \u4e00\u5c64\u4e00\u5c64\u7684\u904d\u6b77\u6240\u6709 neighbors\uff0c\u76f4\u5230\u904d\u6b77\u6240\u6709 vertex")),(0,a.kt)("br",null),(0,a.kt)("br",null),(0,a.kt)("br",null),(0,a.kt)("h3",{id:"\u53c3\u8003\u8cc7\u6599"},"\u53c3\u8003\u8cc7\u6599"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://www.udemy.com/course/js-algorithms-and-data-structures-masterclass/?couponCode=KEEPLEARNING"},"Colt Steele - JavaScript Algorithms and Data Structures Masterclass")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://leetcode.com/explore/learn/card/graph/619/depth-first-search-in-graph/3882/"},"LeetCode - The Depth First Search Algorithm")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://leetcode.com/explore/learn/card/graph/620/breadth-first-search-in-graph/3883/"},"LeetCode - The Breadth First Search Algorithm"))),(0,a.kt)("br",null),(0,a.kt)("br",null),(0,a.kt)("br",null))}d.isMDXComponent=!0}}]);