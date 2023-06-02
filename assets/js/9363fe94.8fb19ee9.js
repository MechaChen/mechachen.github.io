"use strict";(self.webpackChunkbenson_doc=self.webpackChunkbenson_doc||[]).push([[8494],{3905:(e,t,a)=>{a.d(t,{Zo:()=>s,kt:()=>u});var i=a(7294);function l(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function r(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,i)}return a}function n(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?r(Object(a),!0).forEach((function(t){l(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function m(e,t){if(null==e)return{};var a,i,l=function(e,t){if(null==e)return{};var a,i,l={},r=Object.keys(e);for(i=0;i<r.length;i++)a=r[i],t.indexOf(a)>=0||(l[a]=e[a]);return l}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(i=0;i<r.length;i++)a=r[i],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(l[a]=e[a])}return l}var p=i.createContext({}),o=function(e){var t=i.useContext(p),a=t;return e&&(a="function"==typeof e?e(t):n(n({},t),e)),a},s=function(e){var t=o(e.components);return i.createElement(p.Provider,{value:t},e.children)},c="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},k=i.forwardRef((function(e,t){var a=e.components,l=e.mdxType,r=e.originalType,p=e.parentName,s=m(e,["components","mdxType","originalType","parentName"]),c=o(a),k=l,u=c["".concat(p,".").concat(k)]||c[k]||d[k]||r;return a?i.createElement(u,n(n({ref:t},s),{},{components:a})):i.createElement(u,n({ref:t},s))}));function u(e,t){var a=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var r=a.length,n=new Array(r);n[0]=k;var m={};for(var p in t)hasOwnProperty.call(t,p)&&(m[p]=t[p]);m.originalType=e,m[c]="string"==typeof e?e:l,n[1]=m;for(var o=2;o<r;o++)n[o]=a[o];return i.createElement.apply(null,n)}return i.createElement.apply(null,a)}k.displayName="MDXCreateElement"},7491:(e,t,a)=>{a.r(t),a.d(t,{Easy:()=>d,Hard:()=>s,Medium:()=>c,assets:()=>p,contentTitle:()=>n,default:()=>b,frontMatter:()=>r,metadata:()=>m,toc:()=>o});var i=a(7462),l=(a(7294),a(3905));const r={sidebar__label:"[LeetCode] Lv.4 \u8a08\u756b",title:"[LeetCode] Lv.4 \u8a08\u756b"},n=void 0,m={unversionedId:"Code/leetcode-lv4",id:"Code/leetcode-lv4",title:"[LeetCode] Lv.4 \u8a08\u756b",description:"\u6f14\u7b97\u6cd5 Lv.4 (7 / 10)",source:"@site/docs/Code/leetcode-lv4.mdx",sourceDirName:"Code",slug:"/Code/leetcode-lv4",permalink:"/docs/Code/leetcode-lv4",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/Code/leetcode-lv4.mdx",tags:[],version:"current",frontMatter:{sidebar__label:"[LeetCode] Lv.4 \u8a08\u756b",title:"[LeetCode] Lv.4 \u8a08\u756b"},sidebar:"tutorialSidebar",previous:{title:"[LeetCode] Lv.3 \u8a08\u756b",permalink:"/docs/Code/leetcode-lv3"},next:{title:"[React] useLayoutEffect",permalink:"/docs/Code/useLayoutEffect"}},p={},o=[{value:"\u6f14\u7b97\u6cd5 Lv.4 (7 / 10)",id:"\u6f14\u7b97\u6cd5-lv4-7--10",level:2},{value:"Stage 1",id:"stage-1",level:2},{value:"Readings",id:"readings",level:3},{value:"Questions",id:"questions",level:3},{value:"Stage 2",id:"stage-2",level:2}],s=()=>(0,l.kt)("span",{style:{backgroundColor:"rgba(255, 45, 85, 0.15)",borderRadius:"15px",color:"rgb(255, 45, 85)",padding:"5px 10px",fontWeight:"bold",fontSize:"14px",margin:"0 5px"}},"Hard"),c=()=>(0,l.kt)("span",{style:{backgroundColor:"rgba(255, 184, 0, 0.15)",borderRadius:"15px",color:"rgb(255, 184, 0)",padding:"5px 10px",fontWeight:"bold",fontSize:"14px",margin:"0 5px"}},"Medium"),d=()=>(0,l.kt)("span",{style:{backgroundColor:"rgba(0, 175, 155, 0.15)",borderRadius:"15px",color:"rgb(0, 175, 155)",padding:"5px 10px",fontWeight:"bold",fontSize:"14px",margin:"0 5px"}},"Easy"),k={toc:o,Hard:s,Medium:c,Easy:d},u="wrapper";function b(e){let{components:t,...a}=e;return(0,l.kt)(u,(0,i.Z)({},k,a,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("h2",{id:"\u6f14\u7b97\u6cd5-lv4-7--10"},"\u6f14\u7b97\u6cd5 Lv.4 (7 / 10)"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Dynamic programming",(0,l.kt)("ul",{parentName:"li",className:"contains-task-list"},(0,l.kt)("li",{parentName:"ul",className:"task-list-item"},(0,l.kt)("input",{parentName:"li",type:"checkbox",checked:!0,disabled:!0})," ",(0,l.kt)("a",{parentName:"li",href:"https://leetcode.com/problems/best-time-to-buy-and-sell-stock/"},"Best Time to Buy and Sell Stock")," ",(0,l.kt)(d,{mdxType:"Easy"})),(0,l.kt)("li",{parentName:"ul",className:"task-list-item"},(0,l.kt)("input",{parentName:"li",type:"checkbox",checked:!0,disabled:!0})," ",(0,l.kt)("a",{parentName:"li",href:"https://leetcode.com/problems/climbing-stairs"},"Climbing Stairs")," ",(0,l.kt)(d,{mdxType:"Easy"})),(0,l.kt)("li",{parentName:"ul",className:"task-list-item"},(0,l.kt)("input",{parentName:"li",type:"checkbox",checked:!0,disabled:!0})," ",(0,l.kt)("a",{parentName:"li",href:"https://leetcode.com/problems/maximum-subarray"},"Maximum Subarray")," ",(0,l.kt)(c,{mdxType:"Medium"})),(0,l.kt)("li",{parentName:"ul",className:"task-list-item"},(0,l.kt)("input",{parentName:"li",type:"checkbox",checked:!0,disabled:!0})," ",(0,l.kt)("a",{parentName:"li",href:"https://leetcode.com/problems/longest-palindromic-substring/"},"Longest Palindromic Substring")," ",(0,l.kt)(c,{mdxType:"Medium"})),(0,l.kt)("li",{parentName:"ul",className:"task-list-item"},(0,l.kt)("input",{parentName:"li",type:"checkbox",checked:!0,disabled:!0})," ",(0,l.kt)("a",{parentName:"li",href:"https://leetcode.com/problems/coin-change"},"Coin Change")," ",(0,l.kt)(c,{mdxType:"Medium"})),(0,l.kt)("li",{parentName:"ul",className:"task-list-item"},(0,l.kt)("input",{parentName:"li",type:"checkbox",checked:!1,disabled:!0})," ",(0,l.kt)("a",{parentName:"li",href:"https://leetcode.com/problems/partition-equal-subset-sum"},"Partition Equal Subset Sum")," ",(0,l.kt)(c,{mdxType:"Medium"})),(0,l.kt)("li",{parentName:"ul",className:"task-list-item"},(0,l.kt)("input",{parentName:"li",type:"checkbox",checked:!1,disabled:!0})," ",(0,l.kt)("a",{parentName:"li",href:"https://leetcode.com/problems/unique-paths"},"Unique Paths")," ",(0,l.kt)(c,{mdxType:"Medium"})),(0,l.kt)("li",{parentName:"ul",className:"task-list-item"},(0,l.kt)("input",{parentName:"li",type:"checkbox",checked:!0,disabled:!0})," ",(0,l.kt)("a",{parentName:"li",href:"https://leetcode.com/problems/house-robber"},"House Robber")," ",(0,l.kt)(c,{mdxType:"Medium"})),(0,l.kt)("li",{parentName:"ul",className:"task-list-item"},(0,l.kt)("input",{parentName:"li",type:"checkbox",checked:!1,disabled:!0})," ",(0,l.kt)("a",{parentName:"li",href:"https://leetcode.com/problems/maximum-product-subarray"},"Maximum Product Subarray")," ",(0,l.kt)(c,{mdxType:"Medium"})),(0,l.kt)("li",{parentName:"ul",className:"task-list-item"},(0,l.kt)("input",{parentName:"li",type:"checkbox",checked:!0,disabled:!0})," ",(0,l.kt)("a",{parentName:"li",href:"https://leetcode.com/problems/trapping-rain-water"},"Trapping Rain Water")," ",(0,l.kt)(s,{mdxType:"Hard"}))))),(0,l.kt)("h2",{id:"stage-1"},"Stage 1"),(0,l.kt)("h3",{id:"readings"},"Readings"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://www.techinterviewhandbook.org/algorithms/dynamic-programming/"},"Dynamic programming")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://dev.to/nikolaotasevic/dynamic-programming--7-steps-to-solve-any-dp-interview-problem-3870"},"Dynamic Programming \u2013 7 Steps to Solve any DP Interview Problem")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://medium.com/basecs/less-repetition-more-dynamic-programming-43d29830a630"},"Less Repetition, More Dynamic Programming"),", basecs")),(0,l.kt)("h3",{id:"questions"},"Questions"),(0,l.kt)("ul",{className:"contains-task-list"},(0,l.kt)("li",{parentName:"ul",className:"task-list-item"},(0,l.kt)("input",{parentName:"li",type:"checkbox",checked:!0,disabled:!0})," ",(0,l.kt)("a",{parentName:"li",href:"https://leetcode.com/problems/best-time-to-buy-and-sell-stock/"},"Best Time to Buy and Sell Stock")," ",(0,l.kt)(d,{mdxType:"Easy"})," (\ud83c\udf1f\ud83c\udf1f\ud83c\udf1f\ud83c\udf1f\ud83c\udf1f)",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"in Top 100 likes"),(0,l.kt)("li",{parentName:"ul"},"in \u5b57\u7bc0\u8df3\u52d5 \u52d5\u614b\u898f\u5283 \u9ad8\u983b\u984c ",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"\u983b\u5ea6\uff1a122 \uff08Top 1 in Dynamic programming)"),(0,l.kt)("li",{parentName:"ul"},"\u6700\u8fd1\u8003\u5bdf\u6642\u9593 (2023-01-13)"))))),(0,l.kt)("li",{parentName:"ul",className:"task-list-item"},(0,l.kt)("input",{parentName:"li",type:"checkbox",checked:!1,disabled:!0})," ",(0,l.kt)("a",{parentName:"li",href:"https://leetcode.com/problems/climbing-stairs"},"Climbing Stairs")," ",(0,l.kt)(d,{mdxType:"Easy"}),(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"in Top 100 likes"),(0,l.kt)("li",{parentName:"ul"},"in \u5b57\u7bc0\u8df3\u52d5 \u52d5\u614b\u898f\u5283 \u9ad8\u983b\u984c ",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"\u983b\u5ea6\uff1a37"),(0,l.kt)("li",{parentName:"ul"},"\u6700\u8fd1\u8003\u5bdf\u6642\u9593 (2022-08-05)"))))),(0,l.kt)("li",{parentName:"ul",className:"task-list-item"},(0,l.kt)("input",{parentName:"li",type:"checkbox",checked:!1,disabled:!0})," ",(0,l.kt)("a",{parentName:"li",href:"https://leetcode.com/problems/maximum-subarray"},"Maximum Subarray")," ",(0,l.kt)(c,{mdxType:"Medium"})," (\ud83c\udf1f\ud83c\udf1f\ud83c\udf1f\ud83c\udf1f\ud83c\udf1f)",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"Divide and Conquer")),(0,l.kt)("li",{parentName:"ul"},"in Top 100 likes"),(0,l.kt)("li",{parentName:"ul"},"in \u5b57\u7bc0\u8df3\u52d5 \u52d5\u614b\u898f\u5283 \u9ad8\u983b\u984c ",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"\u983b\u5ea6\uff1a90 \uff08Top 3 in Dynamic programming)"),(0,l.kt)("li",{parentName:"ul"},"\u6700\u8fd1\u8003\u5bdf\u6642\u9593 (2022-01-13)")))))),(0,l.kt)("h2",{id:"stage-2"},"Stage 2"),(0,l.kt)("ul",{className:"contains-task-list"},(0,l.kt)("li",{parentName:"ul",className:"task-list-item"},(0,l.kt)("input",{parentName:"li",type:"checkbox",checked:!1,disabled:!0})," ",(0,l.kt)("a",{parentName:"li",href:"https://leetcode.com/problems/longest-palindromic-substring/"},"Longest Palindromic Substring")," (\ud83c\udf1f\ud83c\udf1f\ud83c\udf1f\ud83c\udf1f\ud83c\udf1f)",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"Hash Table")," \u3001",(0,l.kt)("inlineCode",{parentName:"li"},"Greedy")),(0,l.kt)("li",{parentName:"ul"},"in Top 100 likes"),(0,l.kt)("li",{parentName:"ul"},"in \u5b57\u7bc0\u8df3\u52d5 \u52d5\u614b\u898f\u5283 \u9ad8\u983b\u984c ",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"\u983b\u5ea6\uff1a88\uff08Top 4 in Dynamic programming)"),(0,l.kt)("li",{parentName:"ul"},"\u6700\u8fd1\u8003\u5bdf\u6642\u9593 (2023-01-04)"))))),(0,l.kt)("li",{parentName:"ul",className:"task-list-item"},(0,l.kt)("input",{parentName:"li",type:"checkbox",checked:!1,disabled:!0})," ",(0,l.kt)("a",{parentName:"li",href:"https://leetcode.com/problems/coin-change"},"Coin Change")," ",(0,l.kt)(c,{mdxType:"Medium"}),(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"Breadth-First Search")),(0,l.kt)("li",{parentName:"ul"},"in Top 100 likes"),(0,l.kt)("li",{parentName:"ul"},"in \u5b57\u7bc0\u8df3\u52d5 \u52d5\u614b\u898f\u5283 \u9ad8\u983b\u984c ",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"\u983b\u5ea6\uff1a40 \uff08Top 9 in Dynamic programming)"),(0,l.kt)("li",{parentName:"ul"},"\u6700\u8fd1\u8003\u5bdf\u6642\u9593 (2022-12-13)"))))),(0,l.kt)("li",{parentName:"ul",className:"task-list-item"},(0,l.kt)("input",{parentName:"li",type:"checkbox",checked:!1,disabled:!0})," ",(0,l.kt)("a",{parentName:"li",href:"https://leetcode.com/problems/trapping-rain-water"},"Trapping Rain Water")," ",(0,l.kt)(s,{mdxType:"Hard"})," (\ud83c\udf1f\ud83c\udf1f\ud83c\udf1f\ud83c\udf1f\ud83c\udf1f)",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"Two pointers"),"\u3001",(0,l.kt)("inlineCode",{parentName:"li"},"Stack"),"\u3001",(0,l.kt)("inlineCode",{parentName:"li"},"Monotonic Stack")),(0,l.kt)("li",{parentName:"ul"},"in Top 100 likes"),(0,l.kt)("li",{parentName:"ul"},"in \u5b57\u7bc0\u8df3\u52d5 \u52d5\u614b\u898f\u5283 \u9ad8\u983b\u984c ",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"\u983b\u5ea6\uff1a93 \uff08Top 2 in Dynamic programming)"),(0,l.kt)("li",{parentName:"ul"},"\u6700\u8fd1\u8003\u5bdf\u6642\u9593 (2022-12-05)"))))),(0,l.kt)("li",{parentName:"ul",className:"task-list-item"},(0,l.kt)("input",{parentName:"li",type:"checkbox",checked:!1,disabled:!0})," ",(0,l.kt)("a",{parentName:"li",href:"https://leetcode.com/problems/house-robber"},"House Robber")," ",(0,l.kt)(c,{mdxType:"Medium"}),(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"Classical problem"),(0,l.kt)("li",{parentName:"ul"},"in Top 100 likes"),(0,l.kt)("li",{parentName:"ul"},"in \u5b57\u7bc0\u8df3\u52d5 \u52d5\u614b\u898f\u5283 \u9ad8\u983b\u984c ",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"\u983b\u5ea6\uff1a30"),(0,l.kt)("li",{parentName:"ul"},"\u6700\u8fd1\u8003\u5bdf\u6642\u9593 (2022-08-23)")))))))}b.isMDXComponent=!0}}]);