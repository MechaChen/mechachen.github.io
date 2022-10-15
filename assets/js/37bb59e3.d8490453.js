"use strict";(self.webpackChunkbenson_doc=self.webpackChunkbenson_doc||[]).push([[3419],{3905:(e,n,t)=>{t.d(n,{Zo:()=>d,kt:()=>u});var r=t(7294);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function l(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function i(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var s=r.createContext({}),c=function(e){var n=r.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):l(l({},n),e)),t},d=function(e){var n=c(e.components);return r.createElement(s.Provider,{value:n},e.children)},p={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},m=r.forwardRef((function(e,n){var t=e.components,o=e.mdxType,a=e.originalType,s=e.parentName,d=i(e,["components","mdxType","originalType","parentName"]),m=c(t),u=o,b=m["".concat(s,".").concat(u)]||m[u]||p[u]||a;return t?r.createElement(b,l(l({ref:n},d),{},{components:t})):r.createElement(b,l({ref:n},d))}));function u(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var a=t.length,l=new Array(a);l[0]=m;var i={};for(var s in n)hasOwnProperty.call(n,s)&&(i[s]=n[s]);i.originalType=e,i.mdxType="string"==typeof e?e:o,l[1]=i;for(var c=2;c<a;c++)l[c]=t[c];return r.createElement.apply(null,l)}return r.createElement.apply(null,t)}m.displayName="MDXCreateElement"},9497:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>s,contentTitle:()=>l,default:()=>p,frontMatter:()=>a,metadata:()=>i,toc:()=>c});var r=t(7462),o=(t(7294),t(3905));const a={sidebar_label:"[Observer] React state management library",title:"[Observer] React state management library",tags:["React","Observer Pattern"]},l=void 0,i={unversionedId:"Design/observer-pattern",id:"Design/observer-pattern",title:"[Observer] React state management library",description:"How to write your own state management library @ Reddits/reactjs",source:"@site/docs/Design/observer-pattern.mdx",sourceDirName:"Design",slug:"/Design/observer-pattern",permalink:"/docs/Design/observer-pattern",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/Design/observer-pattern.mdx",tags:[{label:"React",permalink:"/docs/tags/react"},{label:"Observer Pattern",permalink:"/docs/tags/observer-pattern"}],version:"current",frontMatter:{sidebar_label:"[Observer] React state management library",title:"[Observer] React state management library",tags:["React","Observer Pattern"]},sidebar:"tutorialSidebar",previous:{title:"Intro",permalink:"/docs/intro"},next:{title:"[RTL] Why \u4f7f\u7528 React Testing Library?",permalink:"/docs/Testing/react-testing-library"}},s={},c=[{value:"Core concept",id:"core-concept",level:2},{value:"React state \u554f\u984c &amp; state management library \u7684\u51fa\u73fe",id:"react-state-\u554f\u984c--state-management-library-\u7684\u51fa\u73fe",level:2},{value:"\u554f\u984c 1\uff1a\u592a\u591a\u91cd\u8907\u7684 state",id:"\u554f\u984c-1\u592a\u591a\u91cd\u8907\u7684-state",level:3},{value:"\u554f\u984c 2\uff1a\u7d71\u4e00 state \u5728\u6700\u4e0a\u5c64\u6703 props-drilling",id:"\u554f\u984c-2\u7d71\u4e00-state-\u5728\u6700\u4e0a\u5c64\u6703-props-drilling",level:3},{value:"\u554f\u984c 3\uff1are-render \u554f\u984c",id:"\u554f\u984c-3re-render-\u554f\u984c",level:3},{value:"Observer \u7c21\u6613\u5be6\u73fe",id:"observer-\u7c21\u6613\u5be6\u73fe",level:2},{value:"\u89d2\u8272 &amp; \u4efb\u52d9",id:"\u89d2\u8272--\u4efb\u52d9",level:3},{value:"\u9032\u968e\u61c9\u7528\uff1aSelector",id:"\u9032\u968e\u61c9\u7528selector",level:3},{value:"Observer Pattern \u5728 state management library \u7684\u61c9\u7528",id:"observer-pattern-\u5728-state-management-library-\u7684\u61c9\u7528",level:2},{value:"Store",id:"store",level:3}],d={toc:c};function p(e){let{components:n,...t}=e;return(0,o.kt)("wrapper",(0,r.Z)({},d,t,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},(0,o.kt)("a",{parentName:"p",href:"https://judehunter.dev/blog/how-to-write-your-own-state-management-library"},"How to write your own state management library")," @ Reddits/reactjs")),(0,o.kt)("h2",{id:"core-concept"},"Core concept"),(0,o.kt)("p",null,"Observer Pattern \u7684\u5176\u4e2d\u4e00\u7a2e\u61c9\u7528\uff0c",(0,o.kt)("strong",{parentName:"p"},"React state management library")),(0,o.kt)("p",null,"\u7576\u9700\u6c42\u65b9\u6709\u8f03\u5927\u91cf\u7684\u9700\u6c42\uff0c\u4f9b\u7d66\u65b9\u7121\u6cd5\u5e38\u5e38\u7d66\u4e88\u6709\u6548\u7684\u56de\u61c9\u6642\uff0c(\u4f8b\u5982\u56de\u61c9\u90fd\u8ddf\u4e0a\u6b21\u4e00\u6a21\u4e00\u6a23)",(0,o.kt)("br",null),"\n\u9019\u6642\uff0c\u4f9b\u7d66\u65b9\u6210\u70ba\u4e3b\u52d5\u65b9\uff0c\u7576\u771f\u7684\u6709\u8fa6\u6cd5\u7d66\u65bc\u6709\u6548\u56de\u994b\u6642\u624d\u901a\u77e5\uff0c\u4ee5\u907f\u514d\u8f03\u5927\u91cf\u9700\u6c42\u65b9\u5e38\u5e38\u5f97\u4e0d\u5230\u60f3\u8981\u7684\u56de\u994b",(0,o.kt)("br",null),"\n\u9019\u5c31\u662f ",(0,o.kt)("strong",{parentName:"p"},"\u89c0\u5bdf\u8005\u6a21\u5f0f Observer Pattern")),(0,o.kt)("h2",{id:"react-state-\u554f\u984c--state-management-library-\u7684\u51fa\u73fe"},"React state \u554f\u984c & state management library \u7684\u51fa\u73fe"),(0,o.kt)("h3",{id:"\u554f\u984c-1\u592a\u591a\u91cd\u8907\u7684-state"},"\u554f\u984c 1\uff1a\u592a\u591a\u91cd\u8907\u7684 state"),(0,o.kt)("p",null,"\u4f8b\u5982\u6bcf\u4e00\u9801\u90fd\u9700\u8981\u77e5\u9053\u4f7f\u7528\u8005\u7684\u8cc7\u8a0a\uff0c\u82e5\u6bcf\u4e00\u9801\u90fd\u9700\u8981\u91cd\u65b0\u53d6\u5f97\u4f7f\u7528\u8005\u8cc7\u8a0a\uff0c",(0,o.kt)("br",null),"\n\u5c31\u9700\u8981\u6bcf\u4e00\u500b\u6709\u4e00\u500b ",(0,o.kt)("inlineCode",{parentName:"p"},"userInfo")," \u7684 state"),(0,o.kt)("p",null,"\u9020\u6210"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"\u91cd\u8907\u7684 ",(0,o.kt)("inlineCode",{parentName:"li"},"userInfo")),(0,o.kt)("li",{parentName:"ol"},"\u53ef\u80fd\u6bcf\u4e00\u9801\u7684 ",(0,o.kt)("inlineCode",{parentName:"li"},"userInfo")," \u72c0\u614b\u90fd\u4e0d\u4e00\u6a23")),(0,o.kt)("br",null),(0,o.kt)("admonition",{title:"Solution",type:"info"},(0,o.kt)("p",{parentName:"admonition"},"\u6211\u5011\u53ef\u4ee5\u628a ",(0,o.kt)("inlineCode",{parentName:"p"},"userInfo")," \u653e\u5728\u6700\u4e0a\u5c64\u7684 Component \u7d71\u4e00\u8655\u7406\uff0c\u5229\u7528 props \u7684\u65b9\u5f0f\u50b3\u4e0b\u4f86")),(0,o.kt)("br",null),(0,o.kt)("h3",{id:"\u554f\u984c-2\u7d71\u4e00-state-\u5728\u6700\u4e0a\u5c64\u6703-props-drilling"},"\u554f\u984c 2\uff1a\u7d71\u4e00 state \u5728\u6700\u4e0a\u5c64\u6703 props-drilling"),(0,o.kt)("p",null,"\u7576\u6211\u5011\u628a\u5171\u7528\u7684 state \u7d71\u4e00\u5728\u6700\u4e0a\u5c64\u6642\uff0c\u5982\u679c Component \u662f\u5728\u5e95\u4e0b\u597d\u5e7e\u5c64\uff0c ",(0,o.kt)("br",null),"\n\u4e2d\u9593\u7684 Component \u90fd\u6703\u9700\u8981\u5c07 prop \u50b3\u4e0b\u53bb\uff0c\u9020\u6210\u56b4\u91cd\u7684 props-drilling"),(0,o.kt)("admonition",{title:"Solution",type:"info"},(0,o.kt)("p",{parentName:"admonition"},"\u6211\u5011\u53ef\u4ee5\u900f\u904e Context API \u4f86\u89e3\u6c7a\u9019\u500b\u554f\u984c")),(0,o.kt)("br",null),(0,o.kt)("h3",{id:"\u554f\u984c-3re-render-\u554f\u984c"},"\u554f\u984c 3\uff1are-render \u554f\u984c"),(0,o.kt)("p",null,"\u96d6\u7136 Context API \u53ef\u4ee5\u89e3\u6c7a props-drilling \u7684\u554f\u984c\uff0c\u4f46 Context \u88e1\u7684\u503c\u66f4\u65b0\u6642\uff0c\u6700\u4e0a\u5c64\u7684 Component \u6703 re-render ",(0,o.kt)("br",null),"\n\u9020\u6210\u6240\u6709\u7684 Children \u4e5f\u4e00\u8d77 re-render"),(0,o.kt)("admonition",{title:"Solution",type:"info"},(0,o.kt)("p",{parentName:"admonition"},"\u6211\u5011\u53ef\u4ee5\u5c07\u72c0\u614b\u5eab (state store) \u653e\u5728\u5916\u9762\uff0c\u7576 state \u6709\u6539\u8b8a\u6642\uff0c",(0,o.kt)("br",null),"\n\u76f8\u95dc\u7684 Component \u624d\u6703 re-render\uff0c\u9019\u5c31\u662f state management library \u7684\u6982\u5ff5")),(0,o.kt)("br",null),(0,o.kt)("h2",{id:"observer-\u7c21\u6613\u5be6\u73fe"},"Observer \u7c21\u6613\u5be6\u73fe"),(0,o.kt)("h3",{id:"\u89d2\u8272--\u4efb\u52d9"},"\u89d2\u8272 & \u4efb\u52d9"),(0,o.kt)("p",null,"Publisher\uff1a\u901a\u77e5\u65b9\uff0c\u7576\u8a0a\u606f\u4e00\u6709\u8b8a\u66f4\u6642\uff0c\u4e3b\u52d5\u901a\u77e5\u65b0\u8a0a\u606f\u7684\u4e00\u65b9"),(0,o.kt)("p",null,"Subscriber\uff1a\u63a5\u6536\u65b9\uff0c\u7576\u6709\u65b0\u8a0a\u606f\u6642\uff0c\u7acb\u5373\u88ab\u52d5\u63a5\u6536\u7684\u4e00\u65b9"),(0,o.kt)("p",null,"example : \u4e00\u7fa4\u7121\u4eba\u6a5f & \u4e00\u500b\u63a7\u5236\u4e2d\u5fc3"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-tsx",metastring:'title="commander.ts"',title:'"commander.ts"'},"const createCommander = () => {\n  // a space to store all state\n  let info = {\n    direciton: 'north',\n    velocity: 10,\n  }\n\n  // a spece to store all drones (subscribers)\n  type Drone = (newInfo: typeof info) => void;\n\n  const drones: Array<Drone> = [];\n\n  // api to add drone (subscriber)\n  const invite = (newDrone: Drone) => {\n    drones.push(newDrone);\n  }\n\n  // api to notify all drones (subscribers)\n  const notifyAllWith = (newInfo: typeof info) => {\n    for (const drone of drones) {\n      drone(newInfo);\n    }\n\n    info = newInfo;\n  }\n}\n")),(0,o.kt)("br",null),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-tsx",metastring:'title="index.ts"',title:'"index.ts"'},"const commander = createCommander();\n\nconst drone1 = (newInfo) => console.log('Drone 1 got new info : ', newInfo);\nconst drone1 = (newInfo) => console.log('Drone 2 got new info : ', newInfo);\n\ncommander.invite(drone1);\ncommander.invite(drone2);\n\nconst newInfo = {\n  direction: 'south',\n  velocity: 10,\n}\n\ncommander.notifyAllWith(newInfo);\n// Drone 1 got new info :  { direction: 'south', velocity: 10 }\n// Drone 2 got new info :  { direction: 'south', velocity: 10 }\n\n")),(0,o.kt)("br",null),(0,o.kt)("h3",{id:"\u9032\u968e\u61c9\u7528selector"},"\u9032\u968e\u61c9\u7528\uff1aSelector"),(0,o.kt)("p",null,"\u7576\u6211\u5011\u53ea\u60f3\u76e3\u807d\u7279\u5b9a\u7684 state \u6642\uff0c\u5c31\u53ef\u4ee5\u52a0\u5165 selector\uff0c\u9078\u64c7\u6211\u5011\u8981\u76e3\u807d\u7684\u72c0\u614b\uff0c",(0,o.kt)("br",null),"\n\u4f8b\u5982\u7576\u7121\u4eba\u6a5f\u5728\u7279\u5b9a\u74b0\u5883\uff0c\u53ea\u80fd\u4ee5\u4f4e\u901f\u98db\u884c\u6642\uff0c\u53ea\u60f3\u8981\u76e3\u807d\u63a7\u5236\u53f0\u7684\u65b9\u5411\uff0c\u5c31\u53ef\u4ee5\u52a0\u5165\u9078\u64c7\u5668"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-tsx",metastring:"title=selectableCommander.ts",title:"selectableCommander.ts"},"const createCommander = () => {\n  // create a space to store info\n  let info = {\n    direction: 'north',\n    velocity: 10,\n  }\n\n  // create a space to store all drones\n  type Selector = keyof typeof info;\n  type DroneCb = (newInfo: typeof info) => void;\n\n  type Drone = [\n    selector: Selector, \n    droneCb: DroneCb\n  ];\n\n  const drones: Array<Drone> = [];\n\n  // create an api to add drone\n  const invite = (newDrone: Drone) => {\n    drones.push(newDrone);\n  }\n\n  // create an api to notify all drones \n  const notifyAllWith = (newInfo: typeof info) => {\n    for (const [selector, droneCb] of drones) {\n      if (\n        selector === 'direction' &&           // when drone's selector is direction & \n        newInfo.direction !== info.direction  // direction value changed\n      ) {\n        droneCb(newInfo);\n      }\n\n      else if (\n        selector === 'velocity' &&          // when drone's selector is velocity\n        newInfo.velocity !== info.velocity  // & veloctiy value changed\n      ) {\n        droneCb(newInfo);\n      }\n    }\n\n    // update info\n    info = newInfo;\n  }\n\n  return { invite, notifyAllWith };\n}\n\nexport default createCommander;\n")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-tsx",metastring:"title=index.ts",title:"index.ts"},"const commander = createCommander();\n\nconst drone1 = [\n  'direction',\n  (newInfo) => console.log('Drone 1 listen to direction change :', newInfo)\n];\n\nconst drone2 = [\n  'velocity',\n  (newInfo) => console.log('Drone 2 listens to velocity change :', newInfo)\n];\n\ncommander.invite(drone1);\ncommander.invite(drone2);\n\n// change direction\nconst newDirectionInfo = {\n  direction: 'east',\n  velocity: 10,\n}\n\ncommander.notifyAllWith(newDirectionInfo);\n\n\n// change velocity\nconst newVelocityInfo = {\n  direction: 'east',\n  velocity: 50,\n}\n\ncommander.notifyAllWith(newVelocityInfo);\n")),(0,o.kt)("br",null),(0,o.kt)("h2",{id:"observer-pattern-\u5728-state-management-library-\u7684\u61c9\u7528"},"Observer Pattern \u5728 state management library \u7684\u61c9\u7528"),(0,o.kt)("h3",{id:"store"},"Store"),(0,o.kt)("p",null,"\u6211\u5011\u6709\u4e00\u5730\u65b9\u5132\u5b58 & \u7ba1\u7406\u6240\u6709\u7684\u72c0\u614b\uff0c\u7576\u72c0\u614b\u6709\u8b8a\u66f4\u6642\uff0c\u6211\u5011\u5e0c\u671b\u6240\u6709\u7684 Component \u90fd\u6703\u77e5\u9053\uff0c ",(0,o.kt)("br",null),'\n\u6b64\u6642\uff0c \u5132\u5b58\u72c0\u614b\u7684\u5730\u65b9\u5c31\u662f "Publisher" \uff0c\u6240\u6709\u7684 Component \u5c31\u662f "Subscriber"\uff0c ',(0,o.kt)("br",null),"\nSubscriber \u6703\u6c7a\u5b9a\u8981\u4e0d\u8981\u52a0\u5165 Publisher \u7684\u884c\u5217\uff0c\u9019\u6a23\u7576 Publisher \u6709\u8b8a\u66f4\u6216\u6d88\u606f\u6642\uff0c Subscriber \u6703\u7b2c\u4e00\u6642\u9593\u77e5\u9053 ",(0,o.kt)("br",null)),(0,o.kt)("p",null,"\u8209\u4ee5\u4e0b\u4f8b\u5b50\u4f86\u8aaa\uff1a Drone"))}p.isMDXComponent=!0}}]);