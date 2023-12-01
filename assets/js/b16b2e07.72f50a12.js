"use strict";(self.webpackChunkbenson_doc=self.webpackChunkbenson_doc||[]).push([[2661],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>k});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var u=r.createContext({}),s=function(e){var t=r.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},c=function(e){var t=s(e.components);return r.createElement(u.Provider,{value:t},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,l=e.originalType,u=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),p=s(n),m=a,k=p["".concat(u,".").concat(m)]||p[m]||d[m]||l;return n?r.createElement(k,o(o({ref:t},c),{},{components:n})):r.createElement(k,o({ref:t},c))}));function k(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=n.length,o=new Array(l);o[0]=m;var i={};for(var u in t)hasOwnProperty.call(t,u)&&(i[u]=t[u]);i.originalType=e,i[p]="string"==typeof e?e:a,o[1]=i;for(var s=2;s<l;s++)o[s]=n[s];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},987:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>u,contentTitle:()=>o,default:()=>d,frontMatter:()=>l,metadata:()=>i,toc:()=>s});var r=n(7462),a=(n(7294),n(3905));const l={sidebar_position:0,sidebar_label:"[Design Pattern] Flux pattern",title:"[Design Pattern] Flux pattern",tags:["Design Pattern"]},o=void 0,i={unversionedId:"Plan/flux-pattern",id:"Plan/flux-pattern",title:"[Design Pattern] Flux pattern",description:"\u70ba\u4ec0\u9ebc\u6211\u5011\u9700\u8981 Flux?",source:"@site/docs/Plan/flux-pattern.mdx",sourceDirName:"Plan",slug:"/Plan/flux-pattern",permalink:"/docs/Plan/flux-pattern",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/Plan/flux-pattern.mdx",tags:[{label:"Design Pattern",permalink:"/docs/tags/design-pattern"}],version:"current",sidebarPosition:0,frontMatter:{sidebar_position:0,sidebar_label:"[Design Pattern] Flux pattern",title:"[Design Pattern] Flux pattern",tags:["Design Pattern"]},sidebar:"tutorialSidebar",previous:{title:"[Proxy] Forward Proxy \u662f\u4ec0\u9ebc?",permalink:"/docs/Operate/forward-proxy"},next:{title:"[Implement] \u5be6\u4f5c Redux",permalink:"/docs/Plan/implement-redux"}},u={},s=[{value:"\u70ba\u4ec0\u9ebc\u6211\u5011\u9700\u8981 Flux?",id:"\u70ba\u4ec0\u9ebc\u6211\u5011\u9700\u8981-flux",level:2},{value:"\u554f\u984c\uff1a\u6df7\u4e82\u7684\u8cc7\u6599\u6d41\u5411",id:"\u554f\u984c\u6df7\u4e82\u7684\u8cc7\u6599\u6d41\u5411",level:3},{value:"\u4ec0\u9ebc\u662f Flux?",id:"\u4ec0\u9ebc\u662f-flux",level:2},{value:"<strong>Singleton</strong>: \u9650\u5236\u6539\u8b8a store \u7684 state \u7684\u65b9\u6cd5",id:"singleton-\u9650\u5236\u6539\u8b8a-store-\u7684-state-\u7684\u65b9\u6cd5",level:3},{value:"Observer pattern: \u901a\u77e5\u6240\u6709\u7684 view\uff0cstore state \u6539\u8b8a\u4e86",id:"observer-pattern-\u901a\u77e5\u6240\u6709\u7684-viewstore-state-\u6539\u8b8a\u4e86",level:3},{value:"\u88dc\u5145: \u5de5\u5ee0\u6a21\u5f0f (Factory pattern) \u4f86\u7522\u751f\u591a\u500b\u55ae\u9ad4(Singleton)",id:"\u88dc\u5145-\u5de5\u5ee0\u6a21\u5f0f-factory-pattern-\u4f86\u7522\u751f\u591a\u500b\u55ae\u9ad4singleton",level:2},{value:"\u7d50\u8ad6",id:"\u7d50\u8ad6",level:2},{value:"\u53c3\u8003\u8cc7\u6599",id:"\u53c3\u8003\u8cc7\u6599",level:3}],c={toc:s},p="wrapper";function d(e){let{components:t,...n}=e;return(0,a.kt)(p,(0,r.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"\u70ba\u4ec0\u9ebc\u6211\u5011\u9700\u8981-flux"},"\u70ba\u4ec0\u9ebc\u6211\u5011\u9700\u8981 Flux?"),(0,a.kt)("h3",{id:"\u554f\u984c\u6df7\u4e82\u7684\u8cc7\u6599\u6d41\u5411"},"\u554f\u984c\uff1a\u6df7\u4e82\u7684\u8cc7\u6599\u6d41\u5411"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"\u5728\u524d\u7aef\u4e2d\uff0c\u6211\u5011\u5e38\u7528\u7684 MVC \u7684\u6bcf\u500b\u90e8\u5206\u8cc7\u6599\u6d41\u5411\u90fd\u53ef\u4ee5\u662f\u96d9\u5411\u7684\uff0c\u82e5\u6c92\u6709\u826f\u597d\u7684\u6163\u4f8b\u6216\u7dad\u8b77\uff0c\u5c31\u6703\u9020\u6210\u8cc7\u6599\u6d41\u96e3\u4ee5\u638c\u63a7\uff0c\u5f8c\u7e8c\u5c08\u6848\u96e3\u4ee5\u7dad\u8b77")),(0,a.kt)("p",null,"( \u6709\u7dad\u8b77\u904e jQuery \u5c08\u6848\u7684\u5c31\u77e5\u9053 \ud83e\udd2a )"),(0,a.kt)("figure",null,(0,a.kt)("img",{src:"/img/mvc.webp",width:500}),(0,a.kt)("figcaption",null,"(\u5716\u7247\u4f86\u6e90\uff1ahttps://tw.alphacamp.co/blog/mvc-model-view-controller)")),(0,a.kt)("br",null),(0,a.kt)("figure",null,(0,a.kt)("img",{src:"/img/mvc-problem.png",width:500}),(0,a.kt)("figcaption",null,"(\u5716\u7247\u4f86\u6e90\uff1ahttps://www.youtube.com/watch?v=nYkdrAPrdcw&list=PLb0IAmt7-GS188xDYE-u1ShQmFFGbrk0v&t=621s)")),(0,a.kt)("br",null),(0,a.kt)("br",null),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"\u63d0\u4f9b\u4e00\u500b\u524d\u7aef\u7684\u6982\u5ff5\uff0c\u8b93\u5927\u5bb6\u53ef\u4ee5\u9075\u5faa\uff0c\u8b93\u5927\u898f\u6a21\u7684\u958b\u767c\u548c\u7dad\u8b77\u4e0a\u4e0d\u6703\u6709\u4e0d\u77e5\u9053\u8cc7\u6599\u6d41\u5411\u7684\u554f\u984c")),(0,a.kt)("br",null),(0,a.kt)("br",null),(0,a.kt)("h2",{id:"\u4ec0\u9ebc\u662f-flux"},"\u4ec0\u9ebc\u662f Flux?"),(0,a.kt)("p",null,"\u8b93 app data \u7684\u6d41\u5411\u9075\u5faa Unidirectional data flow\uff0c\u4ee5\u89e3\u6c7a MVC \u6c92\u6709\u5b9a\u7fa9\u8cc7\u6599\u6d41\u5411\u7684\uff0c\u9020\u6210\u7dad\u8b77\u56f0\u96e3\u7684\u554f\u984c"),(0,a.kt)("figure",null,(0,a.kt)("img",{src:"/img/flux-pattern.png"})),(0,a.kt)("br",null),(0,a.kt)("br",null),(0,a.kt)("p",null,"\u540c\u6642\u4e26\u5728"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"\u66f4\u6539 store state \u6642\uff0c\u4f7f\u7528 Singleton \u4e14\u9650\u5236\u53ea\u6709 action \u80fd\u66f4\u6539 state")),(0,a.kt)("mermaid",{value:"flowchart LR\nsubgraph Singleton pattern\ndirection LR\nAction --\x3e Dispatcher\nDispatcher --\x3e Store\nend"}),(0,a.kt)("br",null),(0,a.kt)("br",null),(0,a.kt)("ol",{start:2},(0,a.kt)("li",{parentName:"ol"},"\u66f4\u65b0 View \u6642\uff0c\u5728 Store state \u66f4\u65b0\u6642\u5229\u7528 Observer \u901a\u77e5\u8a02\u95b1\u7684 View")),(0,a.kt)("mermaid",{value:"flowchart LR\nsubgraph Observer pattern\ndirection LR\nStore --\x3e View\nend"}),(0,a.kt)("br",null),(0,a.kt)("br",null),(0,a.kt)("p",null,"\u4f86\u9054\u6210\u55ae\u4e00\u8cc7\u6599\u6d41\u5411\uff0c\u4ee5\u4e0b\u5c31\u4f86\u4e00\u4e00\u8aaa\u660e"),(0,a.kt)("br",null),(0,a.kt)("br",null),(0,a.kt)("h3",{id:"singleton-\u9650\u5236\u6539\u8b8a-store-\u7684-state-\u7684\u65b9\u6cd5"},(0,a.kt)("strong",{parentName:"h3"},"Singleton"),": \u9650\u5236\u6539\u8b8a store \u7684 state \u7684\u65b9\u6cd5"),(0,a.kt)("p",null,"\u5229\u7528 store \u4f5c\u70ba\u6574\u500b app \u7684 Singleton Pattern\uff0c\u70ba\u6574\u500b app \u6240\u6709\u72c0\u614b\u7684\u96c6\u5408\u9ad4 & \u55ae\u4e00\u500b\u5b58\u5728\uff0c\u53ea\u80fd\u900f\u904e action \u53bb\u6539\u8b8a store \u7684\u503c\uff0c\u9650\u5236\u5176\u5b58\u53d6\uff0c\u8b93\u6211\u5011\u53ef\u4ee5\u900f\u904e\u4e00\u500b\u7d71\u4e00\u7684 state \u5340\u584a\u53bb\u7a2e\u6574\u500b\u8cc7\u6599\u6d41\u7684\u66f4\u65b0"),(0,a.kt)("br",null),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"// Actions\nconst actions = {\n    increment: { type: 'INCREMENT' },\n    decrement: { type: 'DECREMENT' },\n};\n\n// Reducer: manipulate store's state change\nconst countReducer = (state = initialState, action) => {\n    switch (action.type) {\n        case actions.increment.type:\n            return { count: state.count + 1 };\n\n        case actions.decrement.type:\n            return { count: state.count - 1 };\n\n        default:\n            return state;\n    }\n}\n\n// \ndispatch(actinos.increment);\nstore.getState() // { count: 1 }\n")),(0,a.kt)("br",null),(0,a.kt)("br",null),(0,a.kt)("h3",{id:"observer-pattern-\u901a\u77e5\u6240\u6709\u7684-viewstore-state-\u6539\u8b8a\u4e86"},"Observer pattern: \u901a\u77e5\u6240\u6709\u7684 view\uff0cstore state \u6539\u8b8a\u4e86"),(0,a.kt)("p",null,"\u5728 Redux \u7684\u7a0b\u5f0f\u539f\u59cb\u78bc\u4e2d\uff0c\u5be6\u73fe ",(0,a.kt)("inlineCode",{parentName:"p"},"dispatch")," \u7684\u90e8\u5206\uff0c\u7576\u5229\u7528 reducer \u8ddf action \u7522\u751f\u65b0\u7684 store state \u6642\uff0c\u5c31\u6703\u901a\u77e5\u6240\u6709\u8a3b\u518a\u9019\u500b store \u7684\u5c0d\u8c61\uff0c\u901a\u5e38\u662f\u4e00\u500b view\uff0c\u6216\u8005 React \u7684\u4e00\u500b Component \u7b49\uff0c\u9019\u4fbf\u662f\u5229\u7528\u7684 Observer pattern \u7684\u6982\u5ff5"),(0,a.kt)("br",null),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"const createStore = (myReducer) => {\n    let listener = [];\n    let currentState = myReducer(undefined, {});\n\n    ...\n\n    const dispatch = (action) => {\n        currentState = myReducer(currentState, action);\n\n    // highlight-start\n        listeners.forEach((listener) => {\n            listener();\n        });\n    // highlight-end\n    };\n\n    return {\n        getState,\n        dispatch,\n        subscribe,\n    };\n};\n")),(0,a.kt)("br",null),(0,a.kt)("br",null),(0,a.kt)("h2",{id:"\u88dc\u5145-\u5de5\u5ee0\u6a21\u5f0f-factory-pattern-\u4f86\u7522\u751f\u591a\u500b\u55ae\u9ad4singleton"},"\u88dc\u5145: \u5de5\u5ee0\u6a21\u5f0f (Factory pattern) \u4f86\u7522\u751f\u591a\u500b\u55ae\u9ad4(Singleton)"),(0,a.kt)("p",null,"\u5728 Redux \u4e2d\uff0c\u6c92\u6709\u9650\u5236\u53ea\u80fd\u64c1\u6709\u4e00\u500b store\uff0c\u53cd\u800c\u63d0\u4f9b\u4e86\u4e00\u500b ",(0,a.kt)("inlineCode",{parentName:"p"},"createStore")," \u7684 api\uff0c\u8b93\u6211\u5011\u53bb\u5efa\u7acb\u81ea\u5df1\u7684 store\uff0c\u9019\u4fbf\u662f\u4f7f\u7528\u4e86 Factory pattern \u7684\u6982\u5ff5"),(0,a.kt)("p",null,"Redux \u5229\u7528 function programming \u7684 closure \u6280\u5de7\uff0c\u4f86\u50cf Class \u4e00\u6a23\u4fdd\u5b58\u81ea\u5df1\u7684\u72c0\u614b & \u81ea\u5df1\u7684 listeners"),(0,a.kt)("br",null),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"// highlight-start\nconst createStore = (myReducer) => {\n    let listener = [];\n    let currentState = myReducer(undefined, {});\n// highlight-end\n\n    const getState = () => {...};\n    const dispatch = (action) => {...};\n    const subscribe = (newListener) => {...};\n\n    return {\n        getState,\n        dispatch,\n        subscribe,\n    };\n};\n")),(0,a.kt)("br",null),(0,a.kt)("br",null),(0,a.kt)("p",null,"\u8b93\u6bcf\u500b store \u90fd\u53ef\u4ee5\u64c1\u6709\u81ea\u5df1\u7684 Component, view listeners\uff0c\u81ea\u5df1\u7684 action\uff0c\u4e14\u6bcf\u500b store \u90fd\u662f\u7368\u7acb\u7684\uff0c\u4e0d\u6703\u4e92\u76f8\u5e72\u64fe"),(0,a.kt)("br",null),(0,a.kt)("br",null),(0,a.kt)("h2",{id:"\u7d50\u8ad6"},"\u7d50\u8ad6"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"MVC \u53ea\u662f\u505a separation of concern\uff0c\u4f46\u662f Flux \u9760\u8457\u5c0d\u8cc7\u6599\u4f86\u6e90\u7684\u5b58\u53d6\u9650\u5236\u6c7a\u5b9a\u4e86\u8cc7\u6599\u7684\u6d41\u52d5\u65b9\u5f0f\uff0c\u8b93\u6211\u5011\u66f4\u53ef\u4ee5\u6e05\u695a\u5730\u4e86\u89e3\u8cc7\u6599\u7684\u6d41\u5411\uff0c\u8b93\u5c08\u6848\u5728 scaling \u6642\u66f4\u597d\u7dad\u8b77"),(0,a.kt)("li",{parentName:"ol"},"\u5c0d Singelton \u7684 store state \u505a\u5b58\u53d6\u7684\u9650\u5236\uff0c\u53ea\u80fd\u7528 action \u6539\u8b8a\uff0c\u9054\u6210\u8cc7\u6599\u55ae\u4e00\u6d41\u5411\u7684\u76ee\u7684"),(0,a.kt)("li",{parentName:"ol"},"\u5229\u7528 Obeserver pattern \u7684\u6982\u5ff5\uff0c\u8b93 store \u901a\u77e5\u6240\u6709\u7684 View\uff0c\u901a\u77e5\u6240\u6709\u8a3b\u518a\u7684 React component")),(0,a.kt)("br",null),(0,a.kt)("br",null),(0,a.kt)("h3",{id:"\u53c3\u8003\u8cc7\u6599"},"\u53c3\u8003\u8cc7\u6599"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://andrewray.me/blog/the-mental-model-that-helped-me-finally-understand-flux"},'The Mental Model That Helped Me Finally Understand "Flux" - Andy Ray\'s Blog (andrewray.me)')),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://medium.com/code-cartoons/a-cartoon-guide-to-flux-6157355ab207"},"A cartoon guide to Flux. Flux is both one of the most popular\u2026 | by Lin Clark | Code Cartoons | Medium")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://www.youtube.com/watch?v=nYkdrAPrdcw&list=PLb0IAmt7-GS188xDYE-u1ShQmFFGbrk0v&t=621s"},"Hacker Way: Rethinking Web App Development at Facebook - YouTube")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://chat.openai.com/c/4ccb1384-4d32-410f-bbc9-71295c7bbde7"},"Flux \u7c21\u55ae\u7bc4\u4f8b\u7a0b\u5f0f (openai.com)")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://www.freecodecamp.org/news/how-to-use-flux-in-react-example/"},"How to Use Flux to Manage State in ReactJS - Explained with an Example (freecodecamp.org)")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://tw.alphacamp.co/blog/mvc-model-view-controller"},"MVC\u67b6\u69cb\u662f\u4ec0\u9ebc\uff1f\u8a8d\u8b58 Model-View-Controller \u8edf\u9ad4\u8a2d\u8a08\u6a21\u5f0f - ALPHA Camp"))),(0,a.kt)("br",null),(0,a.kt)("br",null))}d.isMDXComponent=!0}}]);