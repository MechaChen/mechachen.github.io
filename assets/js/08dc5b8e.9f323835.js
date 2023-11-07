"use strict";(self.webpackChunkbenson_doc=self.webpackChunkbenson_doc||[]).push([[8199],{3905:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>b});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var l=n.createContext({}),c=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},p=function(e){var t=c(e.components);return n.createElement(l.Provider,{value:t},e.children)},d="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},y=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,i=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),d=c(r),y=a,b=d["".concat(l,".").concat(y)]||d[y]||u[y]||i;return r?n.createElement(b,o(o({ref:t},p),{},{components:r})):n.createElement(b,o({ref:t},p))}));function b(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=r.length,o=new Array(i);o[0]=y;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[d]="string"==typeof e?e:a,o[1]=s;for(var c=2;c<i;c++)o[c]=r[c];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}y.displayName="MDXCreateElement"},8165:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>u,frontMatter:()=>i,metadata:()=>s,toc:()=>c});var n=r(7462),a=(r(7294),r(3905));const i={sidebar_label:"[Frontend Unit Test] Why \u4f7f\u7528 React Testing Library?",tags:["Implementation","React Testing Library"]},o="[Frontend Unit Test] Why \u4f7f\u7528 React Testing Library?",s={unversionedId:"Testing/react-testing-library",id:"Testing/react-testing-library",title:"[Frontend Unit Test] Why \u4f7f\u7528 React Testing Library?",description:"\u5728 React Testing Library \u51fa\u73fe\u524d\uff0c\u5df2\u7d93\u6709\u4e00\u500b\u53eb\u505a Enzyme \u7684\u6e2c\u8a66\u5de5\u5177\uff0c\u4e3b\u6253\u7684\u7279\u8272\u662f Shallow rendering\uff0c",source:"@site/docs/Testing/react-testing-library.mdx",sourceDirName:"Testing",slug:"/Testing/react-testing-library",permalink:"/docs/Testing/react-testing-library",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/Testing/react-testing-library.mdx",tags:[{label:"Implementation",permalink:"/docs/tags/implementation"},{label:"React Testing Library",permalink:"/docs/tags/react-testing-library"}],version:"current",lastUpdatedAt:1676217775,formattedLastUpdatedAt:"Feb 12, 2023",frontMatter:{sidebar_label:"[Frontend Unit Test] Why \u4f7f\u7528 React Testing Library?",tags:["Implementation","React Testing Library"]},sidebar:"tutorialSidebar",previous:{title:"[Book] \u55ae\u5143\u6e2c\u8a66\u7684\u85dd\u8853\uff1aCh9. Readability",permalink:"/docs/Testing/aout_ch9"}},l={},c=[{value:"Why <code>shallow rendering</code> is bad?",id:"why-shallow-rendering-is-bad",level:2}],p={toc:c},d="wrapper";function u(e){let{components:t,...r}=e;return(0,a.kt)(d,(0,n.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"frontend-unit-test-why-\u4f7f\u7528-react-testing-library"},"[Frontend Unit Test]"," Why \u4f7f\u7528 React Testing Library?"),(0,a.kt)("admonition",{title:"\u524d\u60c5\u63d0\u8981",type:"note"},(0,a.kt)("p",{parentName:"admonition"},"\u5728 React Testing Library \u51fa\u73fe\u524d\uff0c\u5df2\u7d93\u6709\u4e00\u500b\u53eb\u505a Enzyme \u7684\u6e2c\u8a66\u5de5\u5177\uff0c\u4e3b\u6253\u7684\u7279\u8272\u662f Shallow rendering\uff0c",(0,a.kt)("br",null),"\n\u53ea\u5e6b\u4f60 render \u4e00\u5c64 component\uff0c\u4e0d\u6703 render \u5167\u90e8\uff0c\n\u770b\u4f3c\u5e6b\u6211\u5011\u66f4\u5bb9\u6613\u505a unit test\uff0c\u4f46\u5be6\u969b\u4e0a\u6703\u6709\u5f88\u591a\u554f\u984c")),(0,a.kt)("h2",{id:"why-shallow-rendering-is-bad"},"Why ",(0,a.kt)("inlineCode",{parentName:"h2"},"shallow rendering")," is bad?"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"shallow render \u4e0d\u6703\u771f\u7684\u6e32\u67d3\u5167\u90e8\u7684 component\uff0c\u8207\u5be6\u969b user \u6240\u898b\u4e0d\u540c"),(0,a.kt)("li",{parentName:"ol"})))}u.isMDXComponent=!0}}]);