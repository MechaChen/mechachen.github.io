"use strict";(self.webpackChunkbenson_doc=self.webpackChunkbenson_doc||[]).push([[1625],{3905:(e,t,n)=>{n.d(t,{Zo:()=>s,kt:()=>k});var r=n(7294);function l(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){l(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,l=function(e,t){if(null==e)return{};var n,r,l={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(l[n]=e[n]);return l}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(l[n]=e[n])}return l}var u=r.createContext({}),c=function(e){var t=r.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},s=function(e){var t=c(e.components);return r.createElement(u.Provider,{value:t},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,l=e.mdxType,a=e.originalType,u=e.parentName,s=o(e,["components","mdxType","originalType","parentName"]),p=c(n),m=l,k=p["".concat(u,".").concat(m)]||p[m]||d[m]||a;return n?r.createElement(k,i(i({ref:t},s),{},{components:n})):r.createElement(k,i({ref:t},s))}));function k(e,t){var n=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var a=n.length,i=new Array(a);i[0]=m;var o={};for(var u in t)hasOwnProperty.call(t,u)&&(o[u]=t[u]);o.originalType=e,o[p]="string"==typeof e?e:l,i[1]=o;for(var c=2;c<a;c++)i[c]=n[c];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},230:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>u,contentTitle:()=>i,default:()=>d,frontMatter:()=>a,metadata:()=>o,toc:()=>c});var r=n(7462),l=(n(7294),n(3905));const a={sidebar_label:"[Implement] \u5be6\u4f5c Redux",title:"[Implement] \u5be6\u4f5c Redux",tags:["Implement","Redux"]},i=void 0,o={unversionedId:"Plan/implement-redux",id:"Plan/implement-redux",title:"[Implement] \u5be6\u4f5c Redux",description:"Redux \u5927\u90e8\u5206\u90fd\u662f\u201c\u6163\u4f8b\u201d",source:"@site/docs/Plan/implement-redux.mdx",sourceDirName:"Plan",slug:"/Plan/implement-redux",permalink:"/docs/Plan/implement-redux",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/Plan/implement-redux.mdx",tags:[{label:"Implement",permalink:"/docs/tags/implement"},{label:"Redux",permalink:"/docs/tags/redux"}],version:"current",frontMatter:{sidebar_label:"[Implement] \u5be6\u4f5c Redux",title:"[Implement] \u5be6\u4f5c Redux",tags:["Implement","Redux"]},sidebar:"tutorialSidebar",previous:{title:"[Design Pattern] Flux pattern",permalink:"/docs/Plan/flux-pattern"},next:{title:"[Implement] React state management library",permalink:"/docs/Plan/observer-pattern"}},u={},c=[{value:"Redux \u5927\u90e8\u5206\u90fd\u662f\u201c\u6163\u4f8b\u201d",id:"redux-\u5927\u90e8\u5206\u90fd\u662f\u6163\u4f8b",level:2},{value:"1. State \u90fd\u5b58\u5728\u5728\u4e00\u500b single tree",id:"1-state-\u90fd\u5b58\u5728\u5728\u4e00\u500b-single-tree",level:3},{value:"2. Action \u8868\u793a\u72c0\u614b\u6539\u8b8a",id:"2-action-\u8868\u793a\u72c0\u614b\u6539\u8b8a",level:3},{value:"3. Reducer \u7ffb\u8b6f Action \u7136\u5f8c\u6539\u8b8a\u72c0\u614b",id:"3-reducer-\u7ffb\u8b6f-action-\u7136\u5f8c\u6539\u8b8a\u72c0\u614b",level:3},{value:"\u5efa\u7acb Redux",id:"\u5efa\u7acb-redux",level:2},{value:"Requirements",id:"requirements",level:3},{value:"\u521d\u59cb\u6a23\u677f (initial boilerplate)",id:"\u521d\u59cb\u6a23\u677f-initial-boilerplate",level:3},{value:"<code>store.getState()</code>",id:"storegetstate",level:3},{value:"<code>store.dispatch(action)</code>",id:"storedispatchaction",level:3},{value:"<code>store.subscribe(listener)</code>",id:"storesubscribelistener",level:3},{value:"\u7d50\u8ad6",id:"\u7d50\u8ad6",level:2},{value:"\u53c3\u8003\u8cc7\u6e90",id:"\u53c3\u8003\u8cc7\u6e90",level:3}],s={toc:c},p="wrapper";function d(e){let{components:t,...n}=e;return(0,l.kt)(p,(0,r.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("h2",{id:"redux-\u5927\u90e8\u5206\u90fd\u662f\u6163\u4f8b"},"Redux \u5927\u90e8\u5206\u90fd\u662f\u201c\u6163\u4f8b\u201d"),(0,l.kt)("ol",null,(0,l.kt)("li",{parentName:"ol"},"State \u90fd\u5b58\u5728\u5728\u4e00\u500b single tree"),(0,l.kt)("li",{parentName:"ol"},"Action \u8868\u793a\u72c0\u614b\u6539\u8b8a"),(0,l.kt)("li",{parentName:"ol"},"Reducer \u7ffb\u8b6f Action \u7136\u5f8c\u6539\u8b8a\u72c0\u614b")),(0,l.kt)("br",null),(0,l.kt)("h3",{id:"1-state-\u90fd\u5b58\u5728\u5728\u4e00\u500b-single-tree"},"1. State \u90fd\u5b58\u5728\u5728\u4e00\u500b single tree"),(0,l.kt)("br",null),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"State lives in a single tree")),(0,l.kt)("br",null),(0,l.kt)("p",null,"\u6574\u500b app \u7684\u72c0\u614b\u5982\u4e0b\uff1a"),(0,l.kt)("br",null),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js"},"const initialState = { count: 0 }\n")),(0,l.kt)("br",null),(0,l.kt)("br",null),(0,l.kt)("h3",{id:"2-action-\u8868\u793a\u72c0\u614b\u6539\u8b8a"},"2. Action \u8868\u793a\u72c0\u614b\u6539\u8b8a"),(0,l.kt)("p",null,"\u6839\u64da Redux \u7684\u6163\u4f8b\uff0c\u4e0d\u8981\u76f4\u63a5\u66f4\u6539\u72c0\u614b (mutate the state)"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js"},"state.count = 1\n")),(0,l.kt)("br",null),(0,l.kt)("br",null),(0,l.kt)("p",null,"\u53cd\u4e4b\uff0c\u5275\u9020\u4e00\u4e9b\u53ef\u4ee5\u8b93\u958b\u767c\u8005\u5728 app \u4e2d\u4f7f\u7528\u7684 action \u4f86\u66f4\u6539\u72c0\u614b"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js"},"const actions = {\n    increment: { type: 'INCREMENT' },\n    decrement: { type: 'DECREMENT' },\n};\n")),(0,l.kt)("br",null),(0,l.kt)("br",null),(0,l.kt)("h3",{id:"3-reducer-\u7ffb\u8b6f-action-\u7136\u5f8c\u6539\u8b8a\u72c0\u614b"},"3. Reducer \u7ffb\u8b6f Action \u7136\u5f8c\u6539\u8b8a\u72c0\u614b"),(0,l.kt)("p",null,"\u6700\u5f8c\u4e00\u968e\u6bb5\u6703\u547c\u53eb\u4e00\u500b reducer\nreducer: \u4e00\u500b pure function \u6703\u50b3\u4e00\u500b\u6839\u64da\u524d\u4e00\u500b state \u7522\u751f\u7684\u65b0 copy "),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"\u5982\u679c ",(0,l.kt)("inlineCode",{parentName:"li"},"increment")," action fire\uff0c\u589e\u52a0 ",(0,l.kt)("inlineCode",{parentName:"li"},"state.count")),(0,l.kt)("li",{parentName:"ul"},"\u5982\u679c ",(0,l.kt)("inlineCode",{parentName:"li"},"decrement")," action fire\uff0c\u589e\u52a0 ",(0,l.kt)("inlineCode",{parentName:"li"},"state.count"))),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js"},"const countReducer = (state = initialState, action) => {\n    switch (action.type) {\n        case actions.increment.type:\n            return { count: state.count + 1 };\n\n        case actions.decrement.type:\n            return { count: state.count - 1 };\n\n        default:\n            return state;\n    }\n}\n")),(0,l.kt)("br",null),(0,l.kt)("br",null),(0,l.kt)("h2",{id:"\u5efa\u7acb-redux"},"\u5efa\u7acb Redux"),(0,l.kt)("h3",{id:"requirements"},"Requirements"),(0,l.kt)("p",null,"Redux \u6700\u95dc\u9375\u7684 api\uff0c\u5c31\u662f ",(0,l.kt)("inlineCode",{parentName:"p"},"createStore"),"\uff0c\u4ee5\u4e0b\u6211\u5011\u6703\u4f86\u63a2\u8a0e ",(0,l.kt)("inlineCode",{parentName:"p"},"createStore")," \u7684\u529f\u80fd\u9700\u6c42 & \u5982\u4f55\u5be6\u73fe"),(0,l.kt)("br",null),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js"},"import { createStore } from 'redux';\n\nconst store = createStore(counReducer);\n\nstore.subscribe(() => {\n    console.log(store.getState());\n});\n\nstore.dispatch(action.increment);\n// logs { count: 1 }\n\nstore.dispatch(actions.increment);\n// logs { count: 2 }\n\nstore.dispatch(actions.decrement);\n// logs { count: 1 }\n")),(0,l.kt)("br",null),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"createStore")," \u7684\u9700\u6c42"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"\u63a5\u6536\u4e00\u500b reducer function"),(0,l.kt)("li",{parentName:"ul"},"\u63d0\u4f9b ",(0,l.kt)("inlineCode",{parentName:"li"},"subscribe")," \u529f\u80fd\uff0c\u8b93\u5916\u90e8\u53ef\u4ee5\u76e3\u807d\u5230 store \u7684 state"),(0,l.kt)("li",{parentName:"ul"},"\u63d0\u4f9b ",(0,l.kt)("inlineCode",{parentName:"li"},"dispatch")," \u529f\u80fd\uff0c\u8b93 user \u53ef\u4ee5\u900f\u904e ",(0,l.kt)("inlineCode",{parentName:"li"},"action")," \u66f4\u6539\u72c0\u614b")),(0,l.kt)("br",null),(0,l.kt)("br",null),(0,l.kt)("h3",{id:"\u521d\u59cb\u6a23\u677f-initial-boilerplate"},"\u521d\u59cb\u6a23\u677f (initial boilerplate)"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js"},"const createStore = (myReducer) => {\n    let listeners = [];\n    let currentState = yourReducer(undefined, {});\n}\n")),(0,l.kt)("p",null,"Redux \u5229\u7528 function programming \u7684 closure \u6982\u5ff5\uff0c\u4f86\u50cf Class \u4e00\u6a23\u4fdd\u5b58\u72c0\u614b"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"currentState"),": \u7576\u6211\u5011\u4f7f\u7528 ",(0,l.kt)("inlineCode",{parentName:"li"},"undefined")," \u5e36\u5165\u6642\uff0c\u9810\u8a2d\u6703\u5e36\u5165\u4e0a\u9762\u7684 ",(0,l.kt)("inlineCode",{parentName:"li"},"initialState"))),(0,l.kt)("br",null),(0,l.kt)("br",null),(0,l.kt)("h3",{id:"storegetstate"},(0,l.kt)("inlineCode",{parentName:"h3"},"store.getState()")),(0,l.kt)("br",null),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"\u56de\u50b3 store \u6700\u65b0\u7684\u72c0\u614b")),(0,l.kt)("br",null),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js"},"const createStore = (myReducer) => {\n    let listeners = [];\n    let currentState = myReducer(undefined, {});\n\n    const getState = () => (\n        currentState\n    )\n\n    return {\n        getState,\n    }\n}\n")),(0,l.kt)("br",null),(0,l.kt)("br",null),(0,l.kt)("h3",{id:"storedispatchaction"},(0,l.kt)("inlineCode",{parentName:"h3"},"store.dispatch(action)")),(0,l.kt)("br",null),(0,l.kt)("blockquote",null,(0,l.kt)("ol",{parentName:"blockquote"},(0,l.kt)("li",{parentName:"ol"},"\u5c07 ",(0,l.kt)("inlineCode",{parentName:"li"},"action")," \u548c ",(0,l.kt)("inlineCode",{parentName:"li"},"currentState")," \u7522\u751f\u4e00\u500b\u65b0\u7684 state"),(0,l.kt)("li",{parentName:"ol"},"\u4e26\u901a\u77e5\u6240\u6709\u7684 listener"))),(0,l.kt)("br",null),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js"},"const createStore = (myReducer) => {\n    let listeners = [];\n    let currentState = myReducer(undefined, {});\n\n    const getState = () => (\n        currentState\n    );\n\n    const dispatch = () => {\n        currentState = myReducer(currentState, action);\n\n        listeners.forEach((listener) => {\n            listener();\n        });\n    };\n}\n")),(0,l.kt)("br",null),(0,l.kt)("br",null),(0,l.kt)("h3",{id:"storesubscribelistener"},(0,l.kt)("inlineCode",{parentName:"h3"},"store.subscribe(listener)")),(0,l.kt)("br",null),(0,l.kt)("blockquote",null,(0,l.kt)("ol",{parentName:"blockquote"},(0,l.kt)("li",{parentName:"ol"},"\u8b93\u4f60\u53ef\u4ee5\u76e3\u807d store \u662f\u4e0d\u662f\u6709 state change (\u6216\u662f action \u88ab\u89f8\u767c)"),(0,l.kt)("li",{parentName:"ol"},"\u540c\u6642\u4e5f\u56de\u50b3\u4e00\u500b ",(0,l.kt)("inlineCode",{parentName:"li"},"unsubscribe")," method\uff0c\u8b93\u6211\u5011\u7576 store \u6c92\u8208\u8da3\u6642\uff0c\u53ef\u4ee5\u53d6\u6d88\u76e3\u807d"))),(0,l.kt)("br",null),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-javascript"},"const createStore = (myReducer) => {\n  let listeners = [];\n  let currentState = myReducer(undefined, {});\n\n  const getState = () => {\n    return currentState;\n  };\n\n  const dispatch = (action) => {\n    currentState = myReducer(currentState, action);\n\n    listeners.forEach((listener) => {\n      listener();\n    });\n  };\n\n  const subscribe = () => {\n    \n  };\n\n  return {\n    getState,\n    dispatch,\n    subscribe,\n  };\n}\n")),(0,l.kt)("br",null),(0,l.kt)("h2",{id:"\u7d50\u8ad6"},"\u7d50\u8ad6"),(0,l.kt)("ol",null,(0,l.kt)("li",{parentName:"ol"},"Redux \u7684\u7a0b\u5f0f\u78bc\u5f88\u9593\u55ae\uff0c\u5229\u7528 Closure + Flux pattern \u7684\u6982\u5ff5\u5c31\u53ef\u4ee5\u5be6\u73fe"),(0,l.kt)("li",{parentName:"ol"},"\u5927\u90e8\u5206\u90fd\u662f\u9075\u5faa\u6163\u4f8b(Convention)\uff0cRedux \u7a0b\u5f0f\u78bc\u5176\u5be6\u53ea\u4f54\u4e00\u5c0f\u90e8\u5206")),(0,l.kt)("br",null),(0,l.kt)("br",null),(0,l.kt)("h3",{id:"\u53c3\u8003\u8cc7\u6e90"},"\u53c3\u8003\u8cc7\u6e90"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://www.freecodecamp.org/news/redux-in-24-lines-of-code/"},"How to Implement Redux in 24 Lines of JavaScript (freecodecamp.org)")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://cloud.tencent.com/developer/article/1612960"},"React-Redux 100\u884c\u4ee3\u7801\u7b80\u6613\u7248\u63a2\u7a76\u539f\u7406\u3002\uff08\u9762\u8bd5\u70ed\u70b9\uff0cReact Hook + TypeScript\u5b9e\u73b0\uff09-\u817e\u8baf\u4e91\u5f00\u53d1\u8005\u793e\u533a-\u817e\u8baf\u4e91 (tencent.com)"))),(0,l.kt)("br",null),(0,l.kt)("br",null))}d.isMDXComponent=!0}}]);