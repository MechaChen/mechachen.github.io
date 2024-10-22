"use strict";(self.webpackChunkbenson_doc=self.webpackChunkbenson_doc||[]).push([[963],{3905:(e,n,t)=>{t.d(n,{Zo:()=>u,kt:()=>h});var r=t(7294);function l(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){l(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function d(e,n){if(null==e)return{};var t,r,l=function(e,n){if(null==e)return{};var t,r,l={},a=Object.keys(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||(l[t]=e[t]);return l}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(l[t]=e[t])}return l}var i=r.createContext({}),p=function(e){var n=r.useContext(i),t=n;return e&&(t="function"==typeof e?e(n):o(o({},n),e)),t},u=function(e){var n=p(e.components);return r.createElement(i.Provider,{value:n},e.children)},c="mdxType",k={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},s=r.forwardRef((function(e,n){var t=e.components,l=e.mdxType,a=e.originalType,i=e.parentName,u=d(e,["components","mdxType","originalType","parentName"]),c=p(t),s=l,h=c["".concat(i,".").concat(s)]||c[s]||k[s]||a;return t?r.createElement(h,o(o({ref:n},u),{},{components:t})):r.createElement(h,o({ref:n},u))}));function h(e,n){var t=arguments,l=n&&n.mdxType;if("string"==typeof e||l){var a=t.length,o=new Array(a);o[0]=s;var d={};for(var i in n)hasOwnProperty.call(n,i)&&(d[i]=n[i]);d.originalType=e,d[c]="string"==typeof e?e:l,o[1]=d;for(var p=2;p<a;p++)o[p]=t[p];return r.createElement.apply(null,o)}return r.createElement.apply(null,t)}s.displayName="MDXCreateElement"},4289:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>i,contentTitle:()=>o,default:()=>k,frontMatter:()=>a,metadata:()=>d,toc:()=>p});var r=t(7462),l=(t(7294),t(3905));const a={sidebar__label:"[LeetCode] \u4ec0\u9ebc\u662f Heap?",title:"[LeetCode] \u4ec0\u9ebc\u662f Heap?"},o=void 0,d={unversionedId:"Code/heap",id:"Code/heap",title:"[LeetCode] \u4ec0\u9ebc\u662f Heap?",description:"\u4ec0\u9ebc\u662f Heap?",source:"@site/docs/Code/heap.mdx",sourceDirName:"Code",slug:"/Code/heap",permalink:"/zh-tw/docs/Code/heap",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/Code/heap.mdx",tags:[],version:"current",frontMatter:{sidebar__label:"[LeetCode] \u4ec0\u9ebc\u662f Heap?",title:"[LeetCode] \u4ec0\u9ebc\u662f Heap?"},sidebar:"tutorialSidebar",previous:{title:"[Graph] 3. Graph traversal - DFS & BFS",permalink:"/zh-tw/docs/Code/graph-3-traversal"},next:{title:"[HTTP] Content Type",permalink:"/zh-tw/docs/Code/http_content-type"}},i={},p=[{value:"\u4ec0\u9ebc\u662f Heap?",id:"\u4ec0\u9ebc\u662f-heap",level:2},{value:"\u6700\u5927\u5806\uff08Max Heap\uff09",id:"\u6700\u5927\u5806max-heap",level:3},{value:"\u6700\u5c0f\u5806\uff08Min Heap\uff09",id:"\u6700\u5c0f\u5806min-heap",level:3},{value:"\u6211\u5011\u70ba\u4ec0\u9ebc\u9700\u8981\u77e5\u9053 Heap?",id:"\u6211\u5011\u70ba\u4ec0\u9ebc\u9700\u8981\u77e5\u9053-heap",level:2},{value:"\u5982\u4f55\u5be6\u4f5c Heap?",id:"\u5982\u4f55\u5be6\u4f5c-heap",level:2},{value:"\u5982\u4f55\u5c0b\u627e children nodes",id:"\u5982\u4f55\u5c0b\u627e-children-nodes",level:3},{value:"\u5982\u4f55\u5c0b\u627e parent node",id:"\u5982\u4f55\u5c0b\u627e-parent-node",level:3},{value:"\u7d50\u8ad6",id:"\u7d50\u8ad6",level:2},{value:"\u53c3\u8003\u8cc7\u6599",id:"\u53c3\u8003\u8cc7\u6599",level:3}],u={toc:p},c="wrapper";function k(e){let{components:n,...t}=e;return(0,l.kt)(c,(0,r.Z)({},u,t,{components:n,mdxType:"MDXLayout"}),(0,l.kt)("h2",{id:"\u4ec0\u9ebc\u662f-heap"},"\u4ec0\u9ebc\u662f Heap?"),(0,l.kt)("p",null,"Heap \u662f\u4e00\u7a2e\u7279\u6b8a\u7684 Tree\uff0c\u5b83\u6eff\u8db3\u4ee5\u4e0b\u6027\u8cea\uff1a"),(0,l.kt)("ol",null,(0,l.kt)("li",{parentName:"ol"},"\u5b83\u662f\u4e00\u500b\u5b8c\u5168\u4e8c\u53c9\u6a39\uff08Complete Binary Tree\uff09"),(0,l.kt)("li",{parentName:"ol"},"parent node \u7684\u503c\u7e3d\u662f\u6703\u4e00\u76f4\u5927\u65bc child node (Max Heap) \u6216\u5c0f\u65bc child node (Min Heap)")),(0,l.kt)("br",null),(0,l.kt)("br",null),(0,l.kt)("p",null,"\u7bc4\u4f8b\u5982\u4e0b"),(0,l.kt)("br",null),(0,l.kt)("h3",{id:"\u6700\u5927\u5806max-heap"},"\u6700\u5927\u5806\uff08Max Heap\uff09"),(0,l.kt)("mermaid",{value:'flowchart\nnode1(("41"))\nnode11(("39"))\nnode111(("18"))\nnode112(("27"))\nnode12(("33"))\nnode121(("12"))\n\nnode1 --\x3e node11\n\tnode11 --\x3e node111\n\tnode11 --\x3e node112\nnode1 --\x3e node12\n\tnode12 --\x3e node121'}),(0,l.kt)("br",null),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"parent nodes \u7e3d\u662f\u6bd4 child nodes \u5927"),(0,l.kt)("li",{parentName:"ul"},"parent node \u6700\u591a\u53ea\u80fd\u6709 2 \u500b childe nodes"),(0,l.kt)("li",{parentName:"ul"},"Binary Heap \u80fd\u8d8a\u7dca\u5bc6\u5c31\u8d8a\u7dca\u5bc6 (compact)\uff0c\u6bcf\u500b node \u7684 children \u6703\u76e1\u53ef\u80fd\u88ab\u586b\u6eff\uff0c\u4e14\u6703\u5f9e\u5de6\u908a\u958b\u59cb\u586b\uff0c\u4e0d\u50cf Binary search tree \u53ef\u4ee5 node \u90fd\u5728\u540c\u4e00\u908a\uff0c\u50cf Linked List \u4e00\u6a23")),(0,l.kt)("br",null),(0,l.kt)("br",null),(0,l.kt)("h3",{id:"\u6700\u5c0f\u5806min-heap"},"\u6700\u5c0f\u5806\uff08Min Heap\uff09"),(0,l.kt)("mermaid",{value:'flowchart\nnode1(("1"))\n\tnode11(("2"))\n\t\tnode111(("17"))\n\t\t\tnode1111(("25"))\n\t\t\tnode1112(("100"))\n\t\tnode112(("19"))\n\tnode12(("3"))\n\t\tnode121(("36"))\n\t\tnode122(("7"))\n\nnode1 --\x3e node11\n\tnode11 --\x3e node111\n\t\tnode111 --\x3e node1111\n\t\tnode111 --\x3e node1112\n\tnode11 --\x3e node112\nnode1 --\x3e node12\n\tnode12 --\x3e node121\n\tnode12 --\x3e node122'}),(0,l.kt)("br",null),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"parent nodes \u7e3d\u662f\u6bd4 child nodes \u5c0f"),(0,l.kt)("li",{parentName:"ul"},"parent node \u6700\u591a\u53ea\u80fd\u6709 2 \u500b childe nodes")),(0,l.kt)("br",null),(0,l.kt)("br",null),(0,l.kt)("hr",null),(0,l.kt)("p",null,"\u274c Not a Binary Heap"),(0,l.kt)("mermaid",{value:'flowchart\nnode1(("33"))\nnode11(("18"))\nnode111(("12"))\nnode112(("27"))\nnode12(("41"))\nnode121(("39"))\n\nnode1 --\x3e node11\n\tnode11 --\x3e node111\n\tnode11 --\x3e node112\nnode1 --\x3e node12\n\tnode12 --\x3e node121'}),(0,l.kt)("br",null),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"33 < 41"),(0,l.kt)("li",{parentName:"ul"},"41 > 39")),(0,l.kt)("br",null),(0,l.kt)("p",null,"\u6c92\u6709\u6240\u6709\u7bc0\u9ede\u7b26\u5408",(0,l.kt)("strong",{parentName:"p"},"\u90fd\u5927\u65bc")," or ",(0,l.kt)("strong",{parentName:"p"},"\u90fd\u5c0f\u65bc"),"\u7684\u898f\u5f8b"),(0,l.kt)("br",null),(0,l.kt)("br",null),(0,l.kt)("h2",{id:"\u6211\u5011\u70ba\u4ec0\u9ebc\u9700\u8981\u77e5\u9053-heap"},"\u6211\u5011\u70ba\u4ec0\u9ebc\u9700\u8981\u77e5\u9053 Heap?"),(0,l.kt)("p",null,"Binary Heap \u5c0d\u5f8c\u7e8c\u5efa\u7acb\u4e00\u4e9b\u986f\u7b97\u6cd5\u6216\u8cc7\u6599\u7d50\u69cb\u975e\u5e38\u91cd\u8981\uff0c\u50cf\u662f\uff1a"),(0,l.kt)("ol",null,(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("strong",{parentName:"li"},"Binary Heap \u672c\u8eab"),"\uff1a\u4ee5 log n \u7684\u6642\u9593\u8907\u96dc\u5ea6\uff0c\u4f86\u627e\u5230\u6700\u5927\u6216\u6700\u5c0f\u7684\u503c"),(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("strong",{parentName:"li"},"Priority Queues"),"\uff1a\u91dd\u5c0d\u81ea\u5b9a\u7fa9\u7684\u6392\u5e8f\u898f\u5247\uff0c\u4f86\u53d6\u51fa\u524d K \u500b (\u6216\u7b2c K \u500b) \u6700\u5927\u6216\u6700\u5c0f\u7684\u512a\u5148\u7684\u503c"),(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("strong",{parentName:"li"},"Graph traversal"),"\uff1a\u50cf\u662f\uff1a",(0,l.kt)("ol",{parentName:"li"},(0,l.kt)("li",{parentName:"ol"},"Dijkstra's Algorithm (\u55ae\u5143\u6700\u77ed\u8def\u5f91)"),(0,l.kt)("li",{parentName:"ol"},"Prim's Algorithm (\u6700\u5c0f\u751f\u6210\u6a39)")))),(0,l.kt)("br",null),(0,l.kt)("br",null),(0,l.kt)("h2",{id:"\u5982\u4f55\u5be6\u4f5c-heap"},"\u5982\u4f55\u5be6\u4f5c Heap?"),(0,l.kt)("p",null,"\u56e0\u70ba Heap \u662f Complete Binary Tree\uff0c\u6211\u5011\u53ef\u4ee5\u7528\u5c64\u5e8f\u904d\u6b77 (Level Order Traversal) \u7684\u65b9\u5f0f\uff0c\u5c07\u5176\u8868\u793a\u70ba\u4e00\u500b\u9663\u5217\uff0c\u50cf\u662f\uff1a"),(0,l.kt)("br",null),(0,l.kt)("img",{src:"/img/heap_tree_to_array.png",alt:"heap-tree-to-array",width:"600"}),(0,l.kt)("br",null),(0,l.kt)("br",null),(0,l.kt)("br",null),(0,l.kt)("h3",{id:"\u5982\u4f55\u5c0b\u627e-children-nodes"},"\u5982\u4f55\u5c0b\u627e children nodes"),(0,l.kt)("p",null,"\u5728\u4e0a\u5716\uff0c\u6211\u5011\u53ef\u4ee5\u767c\u73fe\uff0cparent node \u8ddf children node \u662f\u6709\u7279\u6b8a\u95dc\u4fc2\u7684\uff0c\u6211\u5011\u53ef\u4ee5\u4f9d\u4e0b\u9762\u4e09\u5f35\u5716\u4f86\u89c0\u5bdf\uff1a"),(0,l.kt)("br",null),(0,l.kt)("ol",null,(0,l.kt)("li",{parentName:"ol"},"\u7576 parent node \u7684 index \u662f 0\uff0cleft child \u70ba 1, right child \u70ba 2")),(0,l.kt)("img",{src:"/img/heap_parent_and_children_1.png",alt:"heap-array-index",width:"500"}),(0,l.kt)("br",null),(0,l.kt)("br",null),(0,l.kt)("br",null),(0,l.kt)("br",null),(0,l.kt)("ol",{start:2},(0,l.kt)("li",{parentName:"ol"},"\u7576 parent node \u7684 index \u662f 2\uff0cleft child \u70ba 5, right child \u70ba 6")),(0,l.kt)("img",{src:"/img/heap_parent_and_children_2.png",alt:"heap-array-index",width:"500"}),(0,l.kt)("br",null),(0,l.kt)("br",null),(0,l.kt)("br",null),(0,l.kt)("br",null),(0,l.kt)("ol",{start:3},(0,l.kt)("li",{parentName:"ol"},"\u7576 parent node \u7684 index \u662f 6\uff0cleft child \u70ba 13, right child \u70ba 14")),(0,l.kt)("img",{src:"/img/heap_parent_and_children_3.png",alt:"heap-array-index",width:"500"}),(0,l.kt)("br",null),(0,l.kt)("br",null),(0,l.kt)("br",null),(0,l.kt)("br",null),(0,l.kt)("p",null,"\u6839\u64da\u4e0a\u8ff0\u7684\u89c0\u5bdf\u548c\u6578\u5b78\u4e0a\u7684\u4e00\u4e9b\u6b78\u7d0d\uff0c\u6211\u5011\u53ef\u4ee5\u5f97\u5230\u4e00\u500b\u7d50\u8ad6\uff1a"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"\u82e5 1 \u500b node \u7684\u4f4d\u7f6e\u5728 n\n- Left child \u5b58\u5728\u65bc\uff1a2n + 1\n- Right child \u5b58\u5728\u65bc\uff1a2n + 2\n")),(0,l.kt)("img",{src:"/img/heap_find_children.png",alt:"heap_find_children",width:"500"}),(0,l.kt)("br",null),(0,l.kt)("br",null),(0,l.kt)("br",null),(0,l.kt)("h3",{id:"\u5982\u4f55\u5c0b\u627e-parent-node"},"\u5982\u4f55\u5c0b\u627e parent node"),(0,l.kt)("p",null,"\u53cd\u4e4b\uff0c\u6211\u5011\u53ef\u4ee5\u5f9e find children nodes \u7684\u516c\u5f0f\uff0c\u53cd\u63a8 parent node \u7684\u516c\u5f0f\uff1a"),(0,l.kt)("br",null),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js"},"\u82e5 1 \u500b node \u7684\u4f4d\u7f6e\u5728 n\n- Parent node \u5b58\u5728\u65bc\uff1aMath.floor((n - 1) / 2)\n")),(0,l.kt)("img",{src:"/img/heap_find_parent.png",alt:"heap_find_parent",width:"500"}),(0,l.kt)("br",null),(0,l.kt)("br",null),(0,l.kt)("br",null),(0,l.kt)("h2",{id:"\u7d50\u8ad6"},"\u7d50\u8ad6"),(0,l.kt)("ol",null,(0,l.kt)("li",{parentName:"ol"},"Heap \u662f\u4e00\u7a2e\u7279\u6b8a\u7684 Complete Binary tree"),(0,l.kt)("li",{parentName:"ol"},"Heap \u53ef\u4ee5\u5e6b\u52a9\u5f8c\u7e8c\u7684\u8cc7\u6599\u7d50\u69cb & \u6f14\u7b97\u6cd5\uff0c\u50cf\u662f\uff1a",(0,l.kt)("ol",{parentName:"li"},(0,l.kt)("li",{parentName:"ol"},"Heap, Priority Queue \u7528\u4f86\u505a kth \u6700\u5927/\u6700\u5c0f\u503c\u7684\u904b\u7b97"),(0,l.kt)("li",{parentName:"ol"},"Graph \u7684 Traversal \u6f14\u7b97\u6cd5\uff0c\u50cf\u662f Dijkstra's Algorithm, Prim's Algorithm"))),(0,l.kt)("li",{parentName:"ol"},"Heap \u53ef\u4ee5\u7528 array \u4f86\u8868\u793a\uff0c\u4e26\u85c9\u7531\u7279\u6b8a\u95dc\u4fc2\u53d6\u5f97 parent node \u6216 children node \u7684 index")),(0,l.kt)("br",null),(0,l.kt)("br",null),(0,l.kt)("h3",{id:"\u53c3\u8003\u8cc7\u6599"},"\u53c3\u8003\u8cc7\u6599"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://www.udemy.com/course/js-algorithms-and-data-structures-masterclass"},"Colt Steele - JavaScript Algorithms and Data Structures Masterclass"))),(0,l.kt)("br",null),(0,l.kt)("br",null))}k.isMDXComponent=!0}}]);