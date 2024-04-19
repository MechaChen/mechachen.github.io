"use strict";(self.webpackChunkbenson_doc=self.webpackChunkbenson_doc||[]).push([[1625],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>k});var r=n(7294);function l(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){l(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function u(e,t){if(null==e)return{};var n,r,l=function(e,t){if(null==e)return{};var n,r,l={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(l[n]=e[n]);return l}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(l[n]=e[n])}return l}var o=r.createContext({}),s=function(e){var t=r.useContext(o),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=s(e.components);return r.createElement(o.Provider,{value:t},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,l=e.mdxType,a=e.originalType,o=e.parentName,c=u(e,["components","mdxType","originalType","parentName"]),p=s(n),m=l,k=p["".concat(o,".").concat(m)]||p[m]||d[m]||a;return n?r.createElement(k,i(i({ref:t},c),{},{components:n})):r.createElement(k,i({ref:t},c))}));function k(e,t){var n=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var a=n.length,i=new Array(a);i[0]=m;var u={};for(var o in t)hasOwnProperty.call(t,o)&&(u[o]=t[o]);u.originalType=e,u[p]="string"==typeof e?e:l,i[1]=u;for(var s=2;s<a;s++)i[s]=n[s];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},230:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>o,contentTitle:()=>i,default:()=>d,frontMatter:()=>a,metadata:()=>u,toc:()=>s});var r=n(7462),l=(n(7294),n(3905));const a={sidebar_label:"[Implement] 34 \u884c\u5be6\u73fe Redux",title:"[Implement] 34 \u884c\u5be6\u73fe Redux",tags:["Implement","Redux"]},i=void 0,u={unversionedId:"Plan/implement-redux",id:"Plan/implement-redux",title:"[Implement] 34 \u884c\u5be6\u73fe Redux",description:"\u70ba\u4ec0\u9ebc\u8981\u5b58\u5728 Redux\uff1f Flux pattern \u7684\u5be6\u73fe",source:"@site/docs/Plan/implement-redux.mdx",sourceDirName:"Plan",slug:"/Plan/implement-redux",permalink:"/docs/Plan/implement-redux",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/Plan/implement-redux.mdx",tags:[{label:"Implement",permalink:"/docs/tags/implement"},{label:"Redux",permalink:"/docs/tags/redux"}],version:"current",lastUpdatedAt:1709478903,formattedLastUpdatedAt:"Mar 3, 2024",frontMatter:{sidebar_label:"[Implement] 34 \u884c\u5be6\u73fe Redux",title:"[Implement] 34 \u884c\u5be6\u73fe Redux",tags:["Implement","Redux"]},sidebar:"tutorialSidebar",previous:{title:"[Implement] 60 \u884c\u5be6\u73fe react-redux",permalink:"/docs/Plan/implement-react-redux"},next:{title:"[Implement] React state management library",permalink:"/docs/Plan/observer-pattern"}},o={},s=[{value:"\u70ba\u4ec0\u9ebc\u8981\u5b58\u5728 Redux\uff1f Flux pattern \u7684\u5be6\u73fe",id:"\u70ba\u4ec0\u9ebc\u8981\u5b58\u5728-redux-flux-pattern-\u7684\u5be6\u73fe",level:2},{value:"Redux \u4f7f\u7528\u524d\u9808\u77e5\uff1a\u9808\u9075\u5b88\u4e00\u5b9a\u7684 &quot;\u898f\u7bc4&quot; \u624d\u80fd\u4f7f\u7528",id:"redux-\u4f7f\u7528\u524d\u9808\u77e5\u9808\u9075\u5b88\u4e00\u5b9a\u7684-\u898f\u7bc4-\u624d\u80fd\u4f7f\u7528",level:2},{value:"1. State \u90fd\u5b58\u5728\u5728\u4e00\u500b single tree",id:"1-state-\u90fd\u5b58\u5728\u5728\u4e00\u500b-single-tree",level:3},{value:"2. Action \u8868\u793a\u72c0\u614b\u6539\u8b8a",id:"2-action-\u8868\u793a\u72c0\u614b\u6539\u8b8a",level:3},{value:"3. Reducer \u7ffb\u8b6f Action \u7136\u5f8c\u6539\u8b8a\u72c0\u614b",id:"3-reducer-\u7ffb\u8b6f-action-\u7136\u5f8c\u6539\u8b8a\u72c0\u614b",level:3},{value:"\u5be6\u73fe Redux",id:"\u5be6\u73fe-redux",level:2},{value:"\u529f\u80fd\u9700\u6c42",id:"\u529f\u80fd\u9700\u6c42",level:3},{value:"\u521d\u59cb\u6a23\u677f (initial boilerplate)",id:"\u521d\u59cb\u6a23\u677f-initial-boilerplate",level:3},{value:"<code>store.getState()</code>",id:"storegetstate",level:3},{value:"<code>store.dispatch(action)</code>",id:"storedispatchaction",level:3},{value:"<code>store.subscribe(listener)</code>",id:"storesubscribelistener",level:3},{value:"\u7d50\u8ad6",id:"\u7d50\u8ad6",level:2},{value:"\u53c3\u8003\u8cc7\u6e90",id:"\u53c3\u8003\u8cc7\u6e90",level:3}],c={toc:s},p="wrapper";function d(e){let{components:t,...n}=e;return(0,l.kt)(p,(0,r.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("h2",{id:"\u70ba\u4ec0\u9ebc\u8981\u5b58\u5728-redux-flux-pattern-\u7684\u5be6\u73fe"},"\u70ba\u4ec0\u9ebc\u8981\u5b58\u5728 Redux\uff1f Flux pattern \u7684\u5be6\u73fe"),(0,l.kt)("p",null,"\u5728\u5be6\u73fe Redux \u4e4b\u524d\uff0c\u6211\u5011\u5148\u4f86\u4e86\u89e3\u4e00\u4e0b\u70ba\u4ec0\u9ebc\u8981\u5b58\u5728 Redux\uff1f \u77ad\u89e3\u6211\u5011\u8981\u89e3\u6c7a\u7684\u554f\u984c\u5f8c\uff0c\u6211\u5011\u624d\u77e5\u9053 Redux \u7684\u91cd\u9ede\u529f\u80fd\u6709\u54ea\u4e9b"),(0,l.kt)("p",null,"\u5728 ",(0,l.kt)("a",{parentName:"p",href:"./flux-pattern"},"Flux pattern")," \u7684\u6587\u7ae0\u4e2d\uff0c\u6709\u63d0\u5230\u6211\u5011\u9700\u8981\u4e00\u500b\u5168\u5c40\u7684\u55ae\u4e00\u5be6\u4f8b store \u4f86\u7ba1\u7406\u6240\u6709\u7684\u72c0\u614b\uff0c\u800c Redux \u5c31\u662f\u70ba\u4e86\u89e3\u6c7a\u9019\u500b\u554f\u984c\u800c\u5b58\u5728\u7684"),(0,l.kt)("p",null,"\u800c Redux \u7684\u5b58\u5728\u5c31\u662f\u70ba\u4e86\u8b93 Flux pattern \u4e2d\u7684 ",(0,l.kt)("inlineCode",{parentName:"p"},"Dispatch")," \u8ddf ",(0,l.kt)("inlineCode",{parentName:"p"},"Store")," \u90e8\u5206\u5f97\u4ee5\u5be6\u73fe"),(0,l.kt)("figure",null,(0,l.kt)("img",{src:"/img/flux-pattern.png"})),(0,l.kt)("br",null),(0,l.kt)("h2",{id:"redux-\u4f7f\u7528\u524d\u9808\u77e5\u9808\u9075\u5b88\u4e00\u5b9a\u7684-\u898f\u7bc4-\u624d\u80fd\u4f7f\u7528"},'Redux \u4f7f\u7528\u524d\u9808\u77e5\uff1a\u9808\u9075\u5b88\u4e00\u5b9a\u7684 "\u898f\u7bc4" \u624d\u80fd\u4f7f\u7528'),(0,l.kt)("p",null,"\u5176\u5be6\u4f7f\u7528 Redux\uff0c\u9700\u8981\u9075\u5faa\u5f88\u591a\u6163\u4f8b or \u898f\u7bc4\uff0c\u518d\u642d\u914d Redux \u7c21\u77ed\u7684\u7a0b\u5f0f\u78bc\uff0c\u624d\u80fd\u5be6\u73fe Flux pattern \u7684\u6982\u5ff5\uff0c\u800c\u6211\u5011\u8981\u9075\u5b88\u7684\u898f\u7bc4\u6709\u4e00\u4e0b\u4e09\u9ede\uff1a"),(0,l.kt)("ol",null,(0,l.kt)("li",{parentName:"ol"},"State \u90fd\u5b58\u5728\u5728\u4e00\u500b single tree"),(0,l.kt)("li",{parentName:"ol"},"Action \u8868\u793a\u72c0\u614b\u6539\u8b8a"),(0,l.kt)("li",{parentName:"ol"},"Reducer \u7ffb\u8b6f Action \u7136\u5f8c\u6539\u8b8a\u72c0\u614b")),(0,l.kt)("br",null),(0,l.kt)("h3",{id:"1-state-\u90fd\u5b58\u5728\u5728\u4e00\u500b-single-tree"},"1. State \u90fd\u5b58\u5728\u5728\u4e00\u500b single tree"),(0,l.kt)("br",null),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"State lives in a single tree")),(0,l.kt)("br",null),(0,l.kt)("p",null,"\u6574\u500b app \u7684\u72c0\u614b\u5982\u4e0b\uff1a"),(0,l.kt)("br",null),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js"},"const initialState = { count: 0 }\n")),(0,l.kt)("br",null),(0,l.kt)("br",null),(0,l.kt)("h3",{id:"2-action-\u8868\u793a\u72c0\u614b\u6539\u8b8a"},"2. Action \u8868\u793a\u72c0\u614b\u6539\u8b8a"),(0,l.kt)("p",null,"\u6839\u64da Redux \u7684\u6163\u4f8b\uff0c\u4e0d\u8981\u76f4\u63a5\u66f4\u6539\u72c0\u614b (mutate the state)"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js"},"state.count = 1\n")),(0,l.kt)("br",null),(0,l.kt)("br",null),(0,l.kt)("p",null,'\u53cd\u4e4b\uff0c\u5efa\u7acb\u4e00\u4e9b\u65e2\u6709\u7684"\u884c\u70ba(Action)"\uff0c\u8b93\u6211\u5011\u53ef\u4ee5\u900f\u904e\u9019\u4e9b\u884c\u70ba\u4f86\u66f4\u6539\u72c0\u614b'),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js"},"const actions = {\n    increment: { type: 'INCREMENT' },\n    decrement: { type: 'DECREMENT' },\n};\n")),(0,l.kt)("br",null),(0,l.kt)("br",null),(0,l.kt)("h3",{id:"3-reducer-\u7ffb\u8b6f-action-\u7136\u5f8c\u6539\u8b8a\u72c0\u614b"},"3. Reducer \u7ffb\u8b6f Action \u7136\u5f8c\u6539\u8b8a\u72c0\u614b"),(0,l.kt)("p",null,"\u6700\u5f8c\u4e00\u968e\u6bb5\u6703\u547c\u53eb\u4e00\u500b reducer\nreducer: \u4e00\u500b pure function \u6703\u50b3\u4e00\u500b\u6839\u64da\u524d\u4e00\u500b state \u7522\u751f\u7684\u65b0 copy "),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"\u5982\u679c ",(0,l.kt)("inlineCode",{parentName:"li"},"increment")," action fire\uff0c\u589e\u52a0 ",(0,l.kt)("inlineCode",{parentName:"li"},"state.count")),(0,l.kt)("li",{parentName:"ul"},"\u5982\u679c ",(0,l.kt)("inlineCode",{parentName:"li"},"decrement")," action fire\uff0c\u589e\u52a0 ",(0,l.kt)("inlineCode",{parentName:"li"},"state.count"))),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js"},"const countReducer = (state = initialState, action) => {\n    switch (action.type) {\n        case actions.increment.type:\n            return { count: state.count + 1 };\n\n        case actions.decrement.type:\n            return { count: state.count - 1 };\n\n        default:\n            return state;\n    }\n}\n")),(0,l.kt)("br",null),(0,l.kt)("br",null),(0,l.kt)("p",null,"\u6709\u4e86\u958b\u767c\u8005\u9075\u5faa\u9019\u4e9b\u898f\u7bc4\uff0c\u518d\u642d\u914d\u4e0b\u5217\u7c21\u77ed\u7684 Redux\uff0c\u624d\u80fd\u4f7f Flux pattern \u5b8c\u6574\u5448\u73fe"),(0,l.kt)("br",null),(0,l.kt)("br",null),(0,l.kt)("h2",{id:"\u5be6\u73fe-redux"},"\u5be6\u73fe Redux"),(0,l.kt)("h3",{id:"\u529f\u80fd\u9700\u6c42"},"\u529f\u80fd\u9700\u6c42"),(0,l.kt)("p",null,"Redux \u6700\u95dc\u9375\u7684 api\uff0c\u5c31\u662f ",(0,l.kt)("inlineCode",{parentName:"p"},"createStore"),"\uff0c\u4e26\u9700\u8981\u6eff\u8db3\u4ee5\u4e0b\u529f\u80fd\uff1a"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"\u63a5\u6536\u4e00\u500b reducer function"),(0,l.kt)("li",{parentName:"ul"},"\u7522\u51fa\u7684 store \u9700",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"\u63d0\u4f9b ",(0,l.kt)("inlineCode",{parentName:"li"},"getState")," \u529f\u80fd\uff0c\u8b93\u5916\u90e8\u53ef\u4ee5\u53d6\u5f97 store \u7684 state"),(0,l.kt)("li",{parentName:"ul"},"\u63d0\u4f9b ",(0,l.kt)("inlineCode",{parentName:"li"},"subscribe")," \u529f\u80fd\uff0c\u8b93\u5916\u90e8\u53ef\u4ee5\u76e3\u807d\u5230 store \u7684 state \u7684\u8b8a\u5316"),(0,l.kt)("li",{parentName:"ul"},"\u63d0\u4f9b ",(0,l.kt)("inlineCode",{parentName:"li"},"unsubscribe")," \u529f\u80fd\uff0c\u8b93\u76e3\u807d\u8005\u53ef\u4ee5\u53d6\u6d88\u76e3\u807d"),(0,l.kt)("li",{parentName:"ul"},"\u63d0\u4f9b ",(0,l.kt)("inlineCode",{parentName:"li"},"dispatch")," \u529f\u80fd\uff0c\u8b93 user \u53ef\u4ee5\u900f\u904e ",(0,l.kt)("inlineCode",{parentName:"li"},"action")," \u66f4\u6539 ",(0,l.kt)("inlineCode",{parentName:"li"},"store")," \u7684\u72c0\u614b")))),(0,l.kt)("br",null),(0,l.kt)("p",null,"\u9700\u8981\u80fd\u57f7\u884c\u7684\u5be6\u969b\u7a0b\u5f0f\u78bc\u5982\u4e0b\uff1a"),(0,l.kt)("br",null),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js"},"import { createStore } from 'redux';\n\nconst store = createStore(counReducer);\n\n/* 1. \u76e3\u807d store \u7684 state \u8b8a\u5316 */\n/* 2. \u53ef\u4ee5\u53d6\u5f97 store \u7684 state */\n\nconst unsubscribe = store.subscribe(() => {\n    console.log('subscriber 1 :', store.getState());\n});\n\n\n/* 3. \u53ef\u4ee5\u900f\u904e action \u66f4\u6539 store \u7684 state */\n\nstore.dispatch(action.increment); // subscriber 1 : { count: 1 }\nstore.dispatch(actions.increment); // subscriber 1 : { count: 2 }\nstore.dispatch(actions.decrement); // subscriber 1 : { count: 1 }\n\n\n/* 4. \u53d6\u6d88\u76e3\u807d */\n\nunsubscribe();\nstore.dispatch(actions.decrement); // no logs\n")),(0,l.kt)("br",null),(0,l.kt)("br",null),(0,l.kt)("p",null,"\u4ee5\u4e0b\u6211\u5011\u6703\u4f86\u63a2\u8a0e ",(0,l.kt)("inlineCode",{parentName:"p"},"createStore")," \u7684\u529f\u80fd\u9700\u6c42 & \u5982\u4f55\u5be6\u73fe"),(0,l.kt)("br",null),(0,l.kt)("br",null),(0,l.kt)("h3",{id:"\u521d\u59cb\u6a23\u677f-initial-boilerplate"},"\u521d\u59cb\u6a23\u677f (initial boilerplate)"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js"},"const createStore = (myReducer) => {\n    let listeners = [];\n    let currentState = yourReducer(undefined, {});\n}\n")),(0,l.kt)("p",null,"Redux \u5229\u7528 function programming \u7684 closure \u6982\u5ff5\uff0c\u4f86\u50cf Class \u4e00\u6a23\u4fdd\u5b58\u72c0\u614b"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"currentState"),": \u7576\u6211\u5011\u4f7f\u7528 ",(0,l.kt)("inlineCode",{parentName:"li"},"undefined")," \u5e36\u5165\u6642\uff0c\u9810\u8a2d\u6703\u5e36\u5165\u4e0a\u9762\u7684 ",(0,l.kt)("inlineCode",{parentName:"li"},"initialState"))),(0,l.kt)("br",null),(0,l.kt)("admonition",{title:"Closure \u7c21\u4ecb",type:"info"},(0,l.kt)("p",{parentName:"admonition"},"\u5982\u679c\u4e0d\u77e5\u9053\u4ec0\u9ebc\u662f Closure\uff0c\u53ef\u4ee5\u53c3\u8003 You Don't Know Js yet \u4f5c\u8005\u7684\u9019\u500b\u5f71\u7247\uff1a\n",(0,l.kt)("a",{parentName:"p",href:"https://frontendmasters.com/courses/deep-javascript-v3/what-is-closure/"},"https://frontendmasters.com/courses/deep-javascript-v3/what-is-closure/"))),(0,l.kt)("br",null),(0,l.kt)("br",null),(0,l.kt)("h3",{id:"storegetstate"},(0,l.kt)("inlineCode",{parentName:"h3"},"store.getState()")),(0,l.kt)("br",null),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"\u56de\u50b3 store \u6700\u65b0\u7684\u72c0\u614b")),(0,l.kt)("br",null),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js",metastring:"showLineNumbers",showLineNumbers:!0},"const createStore = (myReducer) => {\n    let listeners = [];\n    let currentState = myReducer(undefined, {});\n\n    // highlight-start\n    const getState = () => {\n        return currentState;\n    }\n    // highlight-end\n\n    return {\n        getState,\n    }\n}\n")),(0,l.kt)("br",null),(0,l.kt)("br",null),(0,l.kt)("h3",{id:"storedispatchaction"},(0,l.kt)("inlineCode",{parentName:"h3"},"store.dispatch(action)")),(0,l.kt)("br",null),(0,l.kt)("blockquote",null,(0,l.kt)("ol",{parentName:"blockquote"},(0,l.kt)("li",{parentName:"ol"},"\u900f\u904e ",(0,l.kt)("inlineCode",{parentName:"li"},"reducer")," \u5c07 ",(0,l.kt)("inlineCode",{parentName:"li"},"action")," \u548c ",(0,l.kt)("inlineCode",{parentName:"li"},"currentState")," \u7d50\u5408\u7522\u751f\u4e00\u500b\u65b0\u7684 state"),(0,l.kt)("li",{parentName:"ol"},"\u4e26\u901a\u77e5\u6240\u6709\u7684 listeners"))),(0,l.kt)("br",null),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js",metastring:"showLineNumbers",showLineNumbers:!0},"const createStore = (myReducer) => {\n    let listeners = [];\n    let currentState = myReducer(undefined, {});\n\n    const getState = () => {\n        return currentState;\n    };\n\n    // highlight-start\n    const dispatch = () => {\n        currentState = myReducer(currentState, action);\n\n        listeners.forEach((listener) => {\n            listener();\n        });\n    };\n    // highlight-end\n}\n")),(0,l.kt)("br",null),(0,l.kt)("br",null),(0,l.kt)("h3",{id:"storesubscribelistener"},(0,l.kt)("inlineCode",{parentName:"h3"},"store.subscribe(listener)")),(0,l.kt)("br",null),(0,l.kt)("blockquote",null,(0,l.kt)("ol",{parentName:"blockquote"},(0,l.kt)("li",{parentName:"ol"},"\u8b93\u4f60\u53ef\u4ee5\u76e3\u807d store \u662f\u4e0d\u662f\u6709 state change (\u6216\u662f action \u88ab\u89f8\u767c)"),(0,l.kt)("li",{parentName:"ol"},"\u540c\u6642\u4e5f\u56de\u50b3\u4e00\u500b ",(0,l.kt)("inlineCode",{parentName:"li"},"unsubscribe")," method\uff0c\u8b93\u6211\u5011\u7576 store \u6c92\u8208\u8da3\u6642\uff0c\u53ef\u4ee5\u53d6\u6d88\u76e3\u807d"))),(0,l.kt)("br",null),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-javascript",metastring:"showLineNumbers",showLineNumbers:!0},"const createStore = (myReducer) => {\n    let listeners = [];\n    let currentState = myReducer(undefined, {});\n\n    const getState = () => {\n        return currentState;\n    };\n\n    const dispatch = (action) => {\n        currentState = myReducer(currentState, action);\n\n        listeners.forEach((listener) => {\n            listener();\n        });\n    };\n\n    // highlight-start\n    const subscribe = (newListener) => {\n        listeners.push(newListener);\n\n        const unsubscribe = () => {\n            listeners = listeners.filter((l) => (\n                l !== newListener,\n            ));\n        };\n\n        return unsubscribe;\n    };\n    // highlight-end\n\n    return {\n        getState,\n        dispatch,\n        subscribe,\n    };\n}\n")),(0,l.kt)("br",null),(0,l.kt)("h2",{id:"\u7d50\u8ad6"},"\u7d50\u8ad6"),(0,l.kt)("ol",null,(0,l.kt)("li",{parentName:"ol"},"Redux \u7684\u7a0b\u5f0f\u78bc\u5f88\u9593\u55ae\uff0c\u5229\u7528 Closure + Flux pattern \u7684\u6982\u5ff5\u5c31\u53ef\u4ee5\u5be6\u73fe"),(0,l.kt)("li",{parentName:"ol"},"\u5927\u90e8\u5206\u90fd\u662f\u9075\u5faa\u6163\u4f8b(Convention)\uff0cRedux \u7a0b\u5f0f\u78bc\u5176\u5be6\u53ea\u4f54\u4e00\u5c0f\u90e8\u5206")),(0,l.kt)("br",null),(0,l.kt)("br",null),(0,l.kt)("h3",{id:"\u53c3\u8003\u8cc7\u6e90"},"\u53c3\u8003\u8cc7\u6e90"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://www.freecodecamp.org/news/redux-in-24-lines-of-code/"},"How to Implement Redux in 24 Lines of JavaScript (freecodecamp.org)")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://cloud.tencent.com/developer/article/1612960"},"React-Redux 100\u884c\u4ee3\u7801\u7b80\u6613\u7248\u63a2\u7a76\u539f\u7406\u3002\uff08\u9762\u8bd5\u70ed\u70b9\uff0cReact Hook + TypeScript\u5b9e\u73b0\uff09-\u817e\u8baf\u4e91\u5f00\u53d1\u8005\u793e\u533a-\u817e\u8baf\u4e91 (tencent.com)"))),(0,l.kt)("br",null),(0,l.kt)("br",null))}d.isMDXComponent=!0}}]);