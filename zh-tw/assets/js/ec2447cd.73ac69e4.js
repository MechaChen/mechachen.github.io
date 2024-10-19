"use strict";(self.webpackChunkbenson_doc=self.webpackChunkbenson_doc||[]).push([[1042],{3905:(t,e,a)=>{a.d(e,{Zo:()=>k,kt:()=>s});var r=a(7294);function l(t,e,a){return e in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}function n(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,r)}return a}function i(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?n(Object(a),!0).forEach((function(e){l(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):n(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}function p(t,e){if(null==t)return{};var a,r,l=function(t,e){if(null==t)return{};var a,r,l={},n=Object.keys(t);for(r=0;r<n.length;r++)a=n[r],e.indexOf(a)>=0||(l[a]=t[a]);return l}(t,e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);for(r=0;r<n.length;r++)a=n[r],e.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(t,a)&&(l[a]=t[a])}return l}var d=r.createContext({}),u=function(t){var e=r.useContext(d),a=e;return t&&(a="function"==typeof t?t(e):i(i({},e),t)),a},k=function(t){var e=u(t.components);return r.createElement(d.Provider,{value:e},t.children)},c="mdxType",o={inlineCode:"code",wrapper:function(t){var e=t.children;return r.createElement(r.Fragment,{},e)}},m=r.forwardRef((function(t,e){var a=t.components,l=t.mdxType,n=t.originalType,d=t.parentName,k=p(t,["components","mdxType","originalType","parentName"]),c=u(a),m=l,s=c["".concat(d,".").concat(m)]||c[m]||o[m]||n;return a?r.createElement(s,i(i({ref:e},k),{},{components:a})):r.createElement(s,i({ref:e},k))}));function s(t,e){var a=arguments,l=e&&e.mdxType;if("string"==typeof t||l){var n=a.length,i=new Array(n);i[0]=m;var p={};for(var d in e)hasOwnProperty.call(e,d)&&(p[d]=e[d]);p.originalType=t,p[c]="string"==typeof t?t:l,i[1]=p;for(var u=2;u<n;u++)i[u]=a[u];return r.createElement.apply(null,i)}return r.createElement.apply(null,a)}m.displayName="MDXCreateElement"},8914:(t,e,a)=>{a.r(e),a.d(e,{assets:()=>d,contentTitle:()=>i,default:()=>o,frontMatter:()=>n,metadata:()=>p,toc:()=>u});var r=a(7462),l=(a(7294),a(3905));const n={sidebar__label:"[Graph] 1. \u4ec0\u9ebc\u662f Graph?",title:"[Graph] 1. \u4ec0\u9ebc\u662f Graph?"},i=void 0,p={unversionedId:"Code/graph-1-intro",id:"Code/graph-1-intro",title:"[Graph] 1. \u4ec0\u9ebc\u662f Graph?",description:"\u4ec0\u9ebc\u662f Graph?",source:"@site/docs/Code/graph-1-intro.mdx",sourceDirName:"Code",slug:"/Code/graph-1-intro",permalink:"/zh-tw/docs/Code/graph-1-intro",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/Code/graph-1-intro.mdx",tags:[],version:"current",frontMatter:{sidebar__label:"[Graph] 1. \u4ec0\u9ebc\u662f Graph?",title:"[Graph] 1. \u4ec0\u9ebc\u662f Graph?"},sidebar:"tutorialSidebar",previous:{title:"[Git] Git \u5408\u4f75\u7b56\u7565",permalink:"/zh-tw/docs/Code/git-merging-strategies"},next:{title:"[Graph] 2. Graph \u7684\u57fa\u672c\u904b\u7b97",permalink:"/zh-tw/docs/Code/graph-2-operation"}},d={},u=[{value:"\u4ec0\u9ebc\u662f Graph?",id:"\u4ec0\u9ebc\u662f-graph",level:2},{value:"Graph \u7684\u4f7f\u7528\u60c5\u5883",id:"graph-\u7684\u4f7f\u7528\u60c5\u5883",level:2},{value:"Graph \u7684\u8853\u8a9e\u548c\u7a2e\u985e",id:"graph-\u7684\u8853\u8a9e\u548c\u7a2e\u985e",level:2},{value:"\u8853\u8a9e",id:"\u8853\u8a9e",level:3},{value:"\u7a2e\u985e",id:"\u7a2e\u985e",level:3},{value:"\u5716\u7684\u8868\u793a\u6cd5",id:"\u5716\u7684\u8868\u793a\u6cd5",level:2},{value:"\u9130\u63a5\u77e9\u9663 (Adjacency Matrix)",id:"\u9130\u63a5\u77e9\u9663-adjacency-matrix",level:3},{value:"\u9130\u63a5\u4e32\u5217 (Adjacency List)",id:"\u9130\u63a5\u4e32\u5217-adjacency-list",level:3},{value:"Adjacency Matrix \u8ddf Adjacency List \u7684 Big O \u6bd4\u8f03",id:"adjacency-matrix-\u8ddf-adjacency-list-\u7684-big-o-\u6bd4\u8f03",level:3},{value:"\u7d50\u8ad6",id:"\u7d50\u8ad6",level:2},{value:"\u53c3\u8003\u8cc7\u6599",id:"\u53c3\u8003\u8cc7\u6599",level:3}],k={toc:u},c="wrapper";function o(t){let{components:e,...a}=t;return(0,l.kt)(c,(0,r.Z)({},k,a,{components:e,mdxType:"MDXLayout"}),(0,l.kt)("h2",{id:"\u4ec0\u9ebc\u662f-graph"},"\u4ec0\u9ebc\u662f Graph?"),(0,l.kt)("p",null,"Graph \u53ea\u662f\u4e00\u5806 nodes + connections\uff0c\u5982\u4e0b\u9762 4 \u500b\u5716\uff0c\u90fd\u53ef\u4ee5\u7b97\u662f Graph\uff1a"),(0,l.kt)("div",{style:{display:"flex",justifyContent:"center",flexWrap:"wrap"}},(0,l.kt)("div",{style:{width:"50%"}},(0,l.kt)("img",{style:{width:"100%"},src:"/img/graph-illustration-1.png",alt:"graph-illustration-1"})),(0,l.kt)("div",{style:{width:"50%"}},(0,l.kt)("img",{style:{width:"100%"},src:"/img/graph-illustration-2.png",alt:"graph-illustration-2"})),(0,l.kt)("div",{style:{width:"50%"}},(0,l.kt)("img",{style:{width:"100%"},src:"/img/graph-illustration-3.png",alt:"graph-illustration-3"})),(0,l.kt)("div",{style:{width:"50%"}},(0,l.kt)("img",{style:{width:"100%"},src:"/img/graph-illustration-4.png",alt:"graph-illustration-4"}))),(0,l.kt)("br",null),(0,l.kt)("br",null),(0,l.kt)("br",null),(0,l.kt)("h2",{id:"graph-\u7684\u4f7f\u7528\u60c5\u5883"},"Graph \u7684\u4f7f\u7528\u60c5\u5883"),(0,l.kt)("p",null,"Graph \u5145\u65a5\u5728\u6211\u5011\u751f\u6d3b\u5468\u906d\uff0c\u4ee5\u4e0b\u662f\u4e00\u4e9b\u5e38\u898b\u7684\u4f8b\u5b50\uff1a"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"\u793e\u4ea4\u7db2\u8def (Social Network)"),(0,l.kt)("li",{parentName:"ul"},"\u5730\u5740 / \u5730\u5716 (Location / Mapping)"),(0,l.kt)("li",{parentName:"ul"},"\u8def\u7531\u6f14\u7b97\u6cd5 (Routing algorithm)"),(0,l.kt)("li",{parentName:"ul"},"\u968e\u5c64\u8996\u89ba\u756b (Visual Hierachy)"),(0,l.kt)("li",{parentName:"ul"},"\u6a94\u6848\u7cfb\u7d71\u512a\u5316 (File System Optimizations)"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"\u4efb\u4f55\u5730\u65b9"))),(0,l.kt)("br",null),(0,l.kt)("br",null),(0,l.kt)("br",null),(0,l.kt)("h2",{id:"graph-\u7684\u8853\u8a9e\u548c\u7a2e\u985e"},"Graph \u7684\u8853\u8a9e\u548c\u7a2e\u985e"),(0,l.kt)("h3",{id:"\u8853\u8a9e"},"\u8853\u8a9e"),(0,l.kt)("p",null,"Graph \u7684\u4e3b\u8981\u8853\u8a9e\u5982\u4e0b\uff1a"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"Vertex"),"\uff1a\u4e00\u7bc0\u9ede ( a node )"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"Edge"),"\uff1a\u9023\u7d50 (connection)")),(0,l.kt)("img",{width:"500px",src:"/img/graph-terminology.png",alt:"graph-terminology"}),(0,l.kt)("br",null),(0,l.kt)("br",null),(0,l.kt)("h3",{id:"\u7a2e\u985e"},"\u7a2e\u985e"),(0,l.kt)("ol",null,(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("strong",{parentName:"li"},"Undirected Graph"),"\uff1a\u6c92\u6709\u65b9\u5411\u7684 Graph")),(0,l.kt)("p",null,"\u4f8b\u5982\uff1aFacebook \u7684 Friend \u95dc\u4fc2\uff0cMaria \u662f Armie \u7684\u670b\u53cb\uff0cArmie \u4e5f\u662f Maria \u7684\u670b\u53cb\uff0c\u96d9\u65b9\u90fd\u770b\u5f97\u5230\u5f7c\u6b64\u7684\u52d5\u614b"),(0,l.kt)("div",{style:{display:"flex",justifyContent:"center"}},(0,l.kt)("div",{style:{width:"50%"}},(0,l.kt)("img",{width:"100%",src:"/img/undirected-graph.png",alt:"undirected-graph"})),(0,l.kt)("div",{style:{width:"50%"}},(0,l.kt)("img",{width:"100%",src:"/img/undirected-graph-example.png",alt:"undirected-graph-example"}))),(0,l.kt)("br",null),(0,l.kt)("br",null),(0,l.kt)("br",null),(0,l.kt)("ol",{start:2},(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("strong",{parentName:"li"},"Directed Graph"),"\uff1a\u6709\u65b9\u5411\u7684 Graph")),(0,l.kt)("p",null,"\u4f8b\u5982\uff1aInstagram \u7684 Follow \u95dc\u4fc2\uff0cMaria \u95dc\u6ce8 Justine Bieber\uff0cMarie \u770b\u5f97\u5230 Justine Bieber \u7684\u52d5\u614b\uff0c\u4f46 Justine Bieber \u6c92\u6709\u8ffd\u8e64 Maria\uff0c\u6240\u4ee5\u770b\u4e0d\u5230 Maria \u7684\u52d5\u614b"),(0,l.kt)("div",{style:{display:"flex",justifyContent:"center"}},(0,l.kt)("div",{style:{width:"50%"}},(0,l.kt)("img",{width:"100%",src:"/img/directed-graph.png",alt:"directed-graph"})),(0,l.kt)("div",{style:{width:"50%"}},(0,l.kt)("img",{width:"100%",src:"/img/directed-graph-example.png",alt:"directed-graph-example"}))),(0,l.kt)("br",null),(0,l.kt)("br",null),(0,l.kt)("br",null),(0,l.kt)("ol",{start:3},(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("strong",{parentName:"li"},"Weighted Graph"),"\uff1a\u6bcf\u500b\u908a (Vertext) \u6709\u88ab\u5206\u914d\u7279\u5225\u6578\u5b57\u7684 Graph\uff0c\u6b64\u6578\u5b57\u5373\u662f\u6240\u8b02\u7684\u6b0a\u91cd (Weight)")),(0,l.kt)("p",null,"\u4f8b\u5982\uff1a\u5730\u5716\u7684\u8ddd\u96e2\uff0c\u5f9e\u53f0\u5317\u5230\u4e0a\u6d77\u7684\u76f4\u98db\u822a\u73ed\uff0c\u8ddd\u96e2\u662f 1000 \u516c\u91cc\uff0c\u4f46\u5f9e\u53f0\u5317\u5230\u4e0a\u6d77\u7684\u8f49\u6a5f\u822a\u73ed\uff0c\u8ddd\u96e2\u662f 2000 \u516c\u91cc"),(0,l.kt)("div",{style:{display:"flex",justifyContent:"center",flexWrap:"wrap"}},(0,l.kt)("div",{style:{width:"50%"}},(0,l.kt)("img",{width:"100%",src:"/img/weighted-graph.png",alt:"weighted-graph"})),(0,l.kt)("div",{style:{width:"50%"}},(0,l.kt)("img",{width:"100%",src:"/img/weighted-graph-example.png",alt:"weighted-graph-example"})),(0,l.kt)("div",{style:{width:"50%",marginLeft:"auto"}},(0,l.kt)("img",{width:"100%",src:"/img/weighted-graph-example-2.png",alt:"weighted-graph-example"}))),(0,l.kt)("br",null),(0,l.kt)("br",null),(0,l.kt)("br",null),(0,l.kt)("h2",{id:"\u5716\u7684\u8868\u793a\u6cd5"},"\u5716\u7684\u8868\u793a\u6cd5"),(0,l.kt)("p",null,"\u5716\u7684\u8868\u793a\u6cd5\u4e3b\u8981\u53ef\u4ee5\u5206\u70ba\u4ee5\u4e0b\u5169\u7a2e\uff1a"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"\u9130\u63a5\u77e9\u9663 (Adjacency Matrix)"),(0,l.kt)("li",{parentName:"ul"},"\u9130\u63a5\u4e32\u5217 (Adjacency List)")),(0,l.kt)("br",null),(0,l.kt)("br",null),(0,l.kt)("h3",{id:"\u9130\u63a5\u77e9\u9663-adjacency-matrix"},"\u9130\u63a5\u77e9\u9663 (Adjacency Matrix)"),(0,l.kt)("p",null,"Adjacency Matrix \u5373\u662f\u7528\u4e00\u500b\u77e9\u9663\uff0c\u4f86\u8868\u793a\u6bcf\u500b Vertex \u4e4b\u9593 Edge \u7684\u9023\u7d50\u95dc\u4fc2"),(0,l.kt)("img",{width:"500px",src:"/img/adjacency-matrix-illustration.png",alt:"adjacency-matrix-illustration"}),(0,l.kt)("br",null),(0,l.kt)("br",null),(0,l.kt)("br",null),(0,l.kt)("br",null),(0,l.kt)("p",null,"\u518d\u6839\u64da Graph \u7684\u7a2e\u985e\uff0c\u5c0d\u61c9\u5230\u7684\u77e9\u9663\u4e5f\u6703\u6709\u6240\u4e0d\u540c\uff1a"),(0,l.kt)("br",null),(0,l.kt)("br",null),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Undirected Graph\uff1a ",(0,l.kt)("br",null))),(0,l.kt)("p",null,"undirected Graph \u56e0\u70ba\u662f\u96d9\u5411\u7684\uff0c\u6240\u4ee5 Matrix \u662f\u5c0d\u7a31\u7684\uff0c\u4f8b\u5982\u7576 5 \u9023\u5230 4 \u6642\uff0c4 \u4e5f\u6703\u9023\u5230 5\uff0c\u6240\u4ee5\u77e9\u9663\u6703\u662f\u5c0d\u7a31\u7684"),(0,l.kt)("img",{width:"100%",src:"/img/adjacency-matrix-undirected.png",alt:"adjacency-matrix-undirected-graph"}),(0,l.kt)("br",null),(0,l.kt)("br",null),(0,l.kt)("br",null),(0,l.kt)("br",null),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Directed Graph\uff1a",(0,l.kt)("br",null))),(0,l.kt)("p",null,"directed graph \u56e0\u70ba vertex \u4e4b\u9593\u6709\u55ae\u5411\u7684\uff0c\u6240\u4ee5 matrix \u4e0d\u6703\u5b8c\u5168\u5c0d\u7a31\uff0c\u4f8b\u5982\u7576 1 \u9023\u5230 2 \u6642\uff0c2 \u6c92\u6709\u9023\u5230 1\uff0c\u6240\u4ee5\u77e9\u9663\u5c31\u6703\u662f\u975e\u5c0d\u7a31\u7684"),(0,l.kt)("img",{width:"100%",src:"/img/adjacency-matrix-directed.png",alt:"adjacency-matrix-directed-graph"}),(0,l.kt)("br",null),(0,l.kt)("br",null),(0,l.kt)("br",null),(0,l.kt)("br",null),(0,l.kt)("h3",{id:"\u9130\u63a5\u4e32\u5217-adjacency-list"},"\u9130\u63a5\u4e32\u5217 (Adjacency List)"),(0,l.kt)("p",null,"Graph \u4e5f\u53ef\u4ee5\u7528\u9130\u63a5\u4e32\u5217\uff08Adjacency List\uff09\u4f86\u8868\u793a\u3002\n\u5176\u4e2d\u6bcf\u500b\u7d22\u5f15\u4ee3\u8868\u4e00\u500b\u9802\u9ede\uff08Vertex\uff09\uff0c\u800c\u5c0d\u61c9\u7684\u503c\u662f\u4e00\u500b\u9663\u5217\uff0c\u8868\u793a\u8a72\u9802\u9ede\u7684\u908a\uff08Edge\uff09\u53ca\u5176\u9023\u63a5\u7684\u9802\u9ede\u3002\u4f8b\u5982\uff1a"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"\u5728 0th index \u7684 Vertex \u6709\u9023\u5230 1st \u548c 5th Vertex\uff0c\u5728 Adjacency List \u5c31\u6703\u662f ",(0,l.kt)("inlineCode",{parentName:"li"},"[1, 5]"))),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-javascript"},"const adjacencyList = [];\n\nadjacencyList[0] = [1, 5]\n")),(0,l.kt)("img",{width:"500px",src:"/img/adjacency-list.png",alt:"adjacency-list"}),(0,l.kt)("br",null),(0,l.kt)("br",null),(0,l.kt)("br",null),(0,l.kt)("br",null),(0,l.kt)("p",null,"\u5982\u679c\u503c\u70ba string \u7684\u8a71\uff0c\u90a3\u6211\u5011\u53ef\u4ee5\u6539\u7528 Hash Map \u4f86\u8868\u793a\uff0c\u4f8b\u5982\uff1a"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"\u5728 A Vertex \u6709\u9023\u5230 B \u548c F\uff0c\u5728 Adjacency List \u5c31\u6703\u662f ",(0,l.kt)("inlineCode",{parentName:"li"},"['B', 'F']"))),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-javascript"},"const adjacencyList = {};\n\nadjacencyList['A'] = ['B', 'F']\n")),(0,l.kt)("img",{width:"500px",src:"/img/adjacency-list-hash-map.png",alt:"adjacency-list-hash-map"}),(0,l.kt)("br",null),(0,l.kt)("br",null),(0,l.kt)("br",null),(0,l.kt)("h3",{id:"adjacency-matrix-\u8ddf-adjacency-list-\u7684-big-o-\u6bd4\u8f03"},"Adjacency Matrix \u8ddf Adjacency List \u7684 Big O \u6bd4\u8f03"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"| V |")," - number of vertices"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"| E |")," - number of edges")),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Operation"),(0,l.kt)("th",{parentName:"tr",align:null},"Adjacency List"),(0,l.kt)("th",{parentName:"tr",align:null},"Adjacency Matrix"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Add Vertex"),(0,l.kt)("td",{parentName:"tr",align:null},"\u2705 O(1)"),(0,l.kt)("td",{parentName:"tr",align:null},"\u274c O(","|","V^2","|",")")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Add Edge"),(0,l.kt)("td",{parentName:"tr",align:null},"\u2705 O(1)"),(0,l.kt)("td",{parentName:"tr",align:null},"\u2705 O(1)")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Remove Vertex"),(0,l.kt)("td",{parentName:"tr",align:null},"\u2705 O(","|","E","|",")"),(0,l.kt)("td",{parentName:"tr",align:null},"\u274c O(","|","V^2","|",")")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Remove Edge"),(0,l.kt)("td",{parentName:"tr",align:null},"\u274c O(","|","E","|",")"),(0,l.kt)("td",{parentName:"tr",align:null},"O(1)")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Query"),(0,l.kt)("td",{parentName:"tr",align:null},"\u274c O(","|","V","|"," + ","|","E","|",")"),(0,l.kt)("td",{parentName:"tr",align:null},"\u2705 O(1)")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Storage"),(0,l.kt)("td",{parentName:"tr",align:null},"O(","|","V","|"," + ","|","E","|",")"),(0,l.kt)("td",{parentName:"tr",align:null},"\u274c O(","|","V^2","|",")")))),(0,l.kt)("br",null),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"\u5728 Adjacency Matrix \u52a0 Vertex\uff0c\u9700\u8981\u591a\u589e\u52a0 1 row + 1 column\u3002\u5728 Adjacency List \u52a0 Vertex\uff0c\u53ea\u8981\u591a\u4e00\u5c0d key value")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"\u4f46 Query \u6642\uff0cAdjacency Matrix \u53ef\u4ee5\u76f4\u63a5\u53d6\u5f97\u5c0d\u61c9\u7684 Vertex or Edge\u3002Adjacency List \u53ea\u80fd\u5148\u53d6\u5f97 key \u503c\uff0c\u518d\u53bb\u904d\u6b77\u6b64 Vertex \u6709\u6c92\u6709\u5c0d\u61c9\u7684 Edge"))),(0,l.kt)("br",null),(0,l.kt)("br",null),(0,l.kt)("p",null,"\u7e3d\u7d50\u4f86\u8aaa\uff1a"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Adjacency List"),(0,l.kt)("th",{parentName:"tr",align:null},"Adjacency Matrix"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"\u2705 \u7a00\u758f\u5716 (sparse graph) \u4e2d\uff0c\u4f54\u66f4\u5c11\u7a7a\u9593"),(0,l.kt)("td",{parentName:"tr",align:null},"\u274c \u7a00\u758f\u5716\u4e2d\uff0c\u4f54\u66f4\u591a\u7a7a\u9593")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"\u2705 \u904d\u6b77\u6240\u6709\u7684\u908a (Edges) \u901f\u5ea6\u66f4\u5feb"),(0,l.kt)("td",{parentName:"tr",align:null},"\u274c \u904d\u6b77\u6240\u6709\u7684\u8b8a\u76f8\u5c0d\u6162")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"\u274c \u67e5\u627e\u908a (Edges) \u76f8\u5c0d\u6162"),(0,l.kt)("td",{parentName:"tr",align:null},"\u2705 \u67e5\u627e\u908a (Edges) \u76f8\u5c0d\u5feb")))),(0,l.kt)("br",null),(0,l.kt)("br",null),(0,l.kt)("p",null,"\u90a3\u6211\u5011\u7a76\u7adf\u8981\u7528\u54ea\u4e00\u500b\uff1f ",(0,l.kt)("br",null)),(0,l.kt)("br",null),(0,l.kt)("br",null),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},(0,l.kt)("strong",{parentName:"p"},(0,l.kt)("em",{parentName:"strong"},"Adjacency List"))," ",(0,l.kt)("br",null),"\n",(0,l.kt)("strong",{parentName:"p"},(0,l.kt)("em",{parentName:"strong"},"Adjacency List"))," ",(0,l.kt)("br",null),"\n",(0,l.kt)("strong",{parentName:"p"},(0,l.kt)("em",{parentName:"strong"},"Adjacency List"))," ",(0,l.kt)("br",null),"\n",(0,l.kt)("strong",{parentName:"p"},(0,l.kt)("em",{parentName:"strong"},"Adjacency List"))," ",(0,l.kt)("br",null))),(0,l.kt)("br",null),(0,l.kt)("br",null),(0,l.kt)("p",null,"\u56e0\u70ba\u5927\u90e8\u5206\u7684\u8cc7\u6599\u90fd\u50be\u5411\u5448\u73fe\u4e00\u500b ",(0,l.kt)("strong",{parentName:"p"},"\u7a00\u758f\u5716 (Sparser Graph)"),"\uff0c\u53ef\u4ee5\u8b93\u6211\u5011"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"\u4f54\u66f4\u5c11\u7684\u7a7a\u9593"),(0,l.kt)("li",{parentName:"ul"},"\u904d\u6b77\u6240\u6709\u7684\u908a (Edges) \u901f\u5ea6\u66f4\u5feb")),(0,l.kt)("br",null),(0,l.kt)("br",null),(0,l.kt)("h2",{id:"\u7d50\u8ad6"},"\u7d50\u8ad6"),(0,l.kt)("ol",null,(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("p",{parentName:"li"},"Graph \u662f\u4e00\u5806 Vertex (nodes) + Edges (connections)")),(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("p",{parentName:"li"},"\u5716\u7684\u4e3b\u8981\u5143\u7d20\u6709 Vertex \u548c Edge\uff0c\u5176\u4e2d Edge \u6709\u5206\u70ba Undirected Edge \u548c Directed Edge")),(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("p",{parentName:"li"},"\u5716\u7684\u8868\u793a\u6cd5\u4e3b\u8981\u53ef\u4ee5\u5206\u70ba"),(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"\u9130\u63a5\u77e9\u9663 (Adjacency Matrix)")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"\u9130\u63a5\u4e32\u5217 (Adjacency List)"))),(0,l.kt)("p",{parentName:"li"},"\u4e14\u901a\u5e38\u6703\u7528 Adjacency List \u4f86\u8868\u793a Graph\uff0c\u6548\u80fd\u6bd4\u8f03\u597d\uff0c\u56e0\u70ba\u5927\u90e8\u5206\u7684\u8cc7\u6599\u90fd\u50be\u5411\u5448\u73fe\u4e00\u500b ",(0,l.kt)("strong",{parentName:"p"},"\u7a00\u758f\u5716 (Sparser Graph)")))),(0,l.kt)("br",null),(0,l.kt)("br",null),(0,l.kt)("br",null),(0,l.kt)("h3",{id:"\u53c3\u8003\u8cc7\u6599"},"\u53c3\u8003\u8cc7\u6599"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://www.udemy.com/course/js-algorithms-and-data-structures-masterclass/?couponCode=KEEPLEARNING"},"Colt Steele - JavaScript Algorithms and Data Structures Masterclass")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://en.wikipedia.org/wiki/Adjacency_matrix"},"Wiki - Adjacency Matrix"))),(0,l.kt)("br",null),(0,l.kt)("br",null))}o.isMDXComponent=!0}}]);