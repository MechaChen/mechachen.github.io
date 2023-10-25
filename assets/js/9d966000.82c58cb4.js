"use strict";(self.webpackChunkbenson_doc=self.webpackChunkbenson_doc||[]).push([[5678],{3905:(e,t,r)=>{r.d(t,{Zo:()=>s,kt:()=>k});var n=r(7294);function l(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){l(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function a(e,t){if(null==e)return{};var r,n,l=function(e,t){if(null==e)return{};var r,n,l={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(l[r]=e[r]);return l}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(l[r]=e[r])}return l}var u=n.createContext({}),d=function(e){var t=n.useContext(u),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},s=function(e){var t=d(e.components);return n.createElement(u.Provider,{value:t},e.children)},p="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,l=e.mdxType,o=e.originalType,u=e.parentName,s=a(e,["components","mdxType","originalType","parentName"]),p=d(r),m=l,k=p["".concat(u,".").concat(m)]||p[m]||c[m]||o;return r?n.createElement(k,i(i({ref:t},s),{},{components:r})):n.createElement(k,i({ref:t},s))}));function k(e,t){var r=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var o=r.length,i=new Array(o);i[0]=m;var a={};for(var u in t)hasOwnProperty.call(t,u)&&(a[u]=t[u]);a.originalType=e,a[p]="string"==typeof e?e:l,i[1]=a;for(var d=2;d<o;d++)i[d]=r[d];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},1446:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>u,contentTitle:()=>i,default:()=>c,frontMatter:()=>o,metadata:()=>a,toc:()=>d});var n=r(7462),l=(r(7294),r(3905));const o={sidebar__label:"[Unit Test] 2.1 - \u8207 Provider \u7684\u6e2c\u8a66",title:"[Unit Test] 2.1 - \u8207 Provider \u7684\u6e2c\u8a66"},i=void 0,a={unversionedId:"Testing/frontend-unit-testing-2.1-with-provider",id:"Testing/frontend-unit-testing-2.1-with-provider",title:"[Unit Test] 2.1 - \u8207 Provider \u7684\u6e2c\u8a66",description:"\u524d\u60c5\u63d0\u8981\uff1aProvider pattern",source:"@site/docs/Testing/frontend-unit-testing-2.1-with-provider.mdx",sourceDirName:"Testing",slug:"/Testing/frontend-unit-testing-2.1-with-provider",permalink:"/docs/Testing/frontend-unit-testing-2.1-with-provider",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/Testing/frontend-unit-testing-2.1-with-provider.mdx",tags:[],version:"current",lastUpdatedAt:1697628620,formattedLastUpdatedAt:"Oct 18, 2023",frontMatter:{sidebar__label:"[Unit Test] 2.1 - \u8207 Provider \u7684\u6e2c\u8a66",title:"[Unit Test] 2.1 - \u8207 Provider \u7684\u6e2c\u8a66"},sidebar:"tutorialSidebar",previous:{title:"[Unit Test] 1.5 - \u5982\u4f55\u505a\u597d\u6e2c\u8a66\uff1f - \u53ef\u8b80\u7bc7",permalink:"/docs/Testing/frontend-unit-testing-1.5-how-make-good-test-readable"},next:{title:"[Unit Test] 2.2 - \u5229\u7528 immer.js \u8f15\u9b06\u5efa\u7acb mock data",permalink:"/docs/Testing/frontend-unit-testing-2.2-mock-data-with-immerjs"}},u={},d=[{value:"\u524d\u60c5\u63d0\u8981\uff1a<code>Provider</code> pattern",id:"\u524d\u60c5\u63d0\u8981provider-pattern",level:2},{value:"\u5728\u55ae\u5143\u6e2c\u8a66\u4e2d\uff0cProvider \u9020\u6210\u7684\u554f\u984c",id:"\u5728\u55ae\u5143\u6e2c\u8a66\u4e2dprovider-\u9020\u6210\u7684\u554f\u984c",level:2},{value:"\u8986\u5beb\u539f\u751f\u7684 <code>render</code>",id:"\u8986\u5beb\u539f\u751f\u7684-render",level:2},{value:"Testing <code>render</code> with <code>Redux</code>",id:"testing-render-with-redux",level:2},{value:"Usage",id:"usage",level:3},{value:"\u7e3d\u7d50",id:"\u7e3d\u7d50",level:2},{value:"\u53c3\u8003\u6587\u737b",id:"\u53c3\u8003\u6587\u737b",level:2}],s={toc:d},p="wrapper";function c(e){let{components:t,...r}=e;return(0,l.kt)(p,(0,n.Z)({},s,r,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("h2",{id:"\u524d\u60c5\u63d0\u8981provider-pattern"},"\u524d\u60c5\u63d0\u8981\uff1a",(0,l.kt)("inlineCode",{parentName:"h2"},"Provider")," pattern"),(0,l.kt)("p",null,"(\u5982\u679c\u5c0d Redux \u7b49 Provider \u5df2\u7d93\u719f\u6089\uff0c\u53ef\u4ee5\u8df3\u904e\u6b64\u6bb5)"),(0,l.kt)("p",null,"\u5728\u73fe\u4eca\u7684\u524d\u7aef\u6846\u67b6\uff0c\u7576\u6211\u5011\u6709\u591a\u500b Components \u9700\u8981\u5171\u7528\u4e00\u4e9b\u8a2d\u5b9a or \u72c0\u614b\u6642\uff0c ",(0,l.kt)("br",null),"\n\u7531\u65bc Components \u662f\u5448\u6a39\u72c0\u7d50\u69cb\uff0c\u6211\u5011\u6703\u5c07\u5171\u7528\u7684\u8a2d\u5b9a or \u72c0\u614b\u653e\u5728\u9019\u4e9b Components \u5171\u540c\u4e14\u6700\u8fd1\u7684 Parent node \u9032\u884c\u7d71\u4e00\u500b\u7ba1\u7406\uff0c ",(0,l.kt)("br",null),"\n\u518d\u7531\u8a72 Parent node \u5c07\u8a72\u8a2d\u5b9a or \u72c0\u614b\u4e00\u5c64\u5c64\u7684\u50b3\u905e\u4e0b\u4f86\uff0c\u5982\u4e0b\u5716\u6240\u793a"),(0,l.kt)("br",null),(0,l.kt)("p",null,"\u7576 2 \u500b\u4e0d\u540c\u7684 Child components \u9700\u8981\u7528\u5230\u76f8\u540c\u7684\u8a2d\u5b9a or \u72c0\u614b"),(0,l.kt)("br",null),(0,l.kt)("img",{width:"500",src:"/img/children-with-common-state.png"}),(0,l.kt)("br",null),(0,l.kt)("br",null),(0,l.kt)("br",null),(0,l.kt)("br",null),(0,l.kt)("br",null),(0,l.kt)("p",null,"\u6211\u5011\u6703\u653e\u5230 2 \u500b\u5143\u4ef6\u7684\u6700\u8fd1\u5171\u540c\u7684 Parent node\uff0c\u4e26\u5728\u85c9\u7531 Parent node \u5c07\u72c0\u614b or \u8a2d\u5b9a\u4e00\u5c64\u5c64\u7684\u50b3\u905e\u4e0b\u4f86\uff0c",(0,l.kt)("br",null),"\n\u597d\u8655\u662f\u8b93\u72c0\u614b / \u8a2d\u5b9a\u540c\u6b65"),(0,l.kt)("br",null),(0,l.kt)("img",{width:"500",src:"/img/share-state.png"}),(0,l.kt)("br",null),(0,l.kt)("br",null),(0,l.kt)("br",null),(0,l.kt)("br",null),(0,l.kt)("br",null),(0,l.kt)("p",null,"\u4f46\u662f\u9019\u6a23\u6703\u5ef6\u4f38\u4e00\u500b\u554f\u984c\uff0c\u7576\u6a39\u72c0\u7d50\u69cb\u8d8a\u4f86\u8d8a\u9f90\u5927\u6642\uff0c\u4e14\u7576 2 \u500b\u5143\u4ef6\u76f8\u8ddd\u5f88\u9060\u6642\uff0c",(0,l.kt)("br",null),"\n\u5171\u7528\u7684 Parent node \u6df1\u5ea6 (depth) \u8207\u63a5\u53d7\u72c0\u614b\u7684\u5b50\u5143\u4ef6\u6df1\u5ea6\u5dee\u5c31\u6703\u975e\u5e38\u591a\uff0c ",(0,l.kt)("br",null),"\n\u6211\u5011\u5c31\u8981\u50b3\u905e\u975e\u5e38\u591a\u5c64\u7684\u5143\u4ef6\u624d\u80fd\u5c07\u72c0\u614b / \u8a2d\u5b9a\u50b3\u905e\u5230\u6211\u5011\u7684\u76ee\u6a19\u5b50\u5143\u4ef6 ( \u524d\u7aef\u7a31\u6b64\u554f\u984c\u70ba Prop-drilling )\uff0c\u5982\u4e0b\u5716"),(0,l.kt)("br",null),(0,l.kt)("img",{width:"500",src:"/img/more-share-state.png"}),(0,l.kt)("br",null),(0,l.kt)("br",null),(0,l.kt)("br",null),(0,l.kt)("br",null),(0,l.kt)("br",null),(0,l.kt)("p",null,"\u6b64\u6642\uff0c\u524d\u7aef\u5c31\u767c\u5c55\u51fa\u4e00\u500b\u6a21\u5f0f\uff0c\u7a31\u4f5c ",(0,l.kt)("strong",{parentName:"p"},"Provider Pattern"),"\uff0c",(0,l.kt)("br",null),"\n\u5176\u5f62\u5f0f\u70ba\uff0c\u5c07\u8cc7\u6599\u7d71\u4e00\u5c01\u88dd\u5728\u4e00\u500b Provider \u88cf\uff0c\u5305\u5728 root node \u7684\u4e0a\u5c64\uff0c ",(0,l.kt)("br",null),"\n\u53ea\u8981\u662f child node\uff0c\u5c31\u53ef\u4ee5\u76f4\u63a5\u900f\u904e Provider \u7684 API\uff0c\u53d6\u5f97\u5132\u5b58\u5728 Provider \u7684\u72c0\u614b / \u8a2d\u5b9a\u4e86\uff0c ",(0,l.kt)("br",null),"\n\u4e0d\u7528\u518d\u4e00\u5c64\u5c64\u7684\u50b3\u4e0b\u4f86"),(0,l.kt)("br",null),(0,l.kt)("img",{width:"500",src:"/img/share-state-with-provider.png"}),(0,l.kt)("br",null),(0,l.kt)("br",null),(0,l.kt)("br",null),(0,l.kt)("br",null),(0,l.kt)("p",null,"\u50cf\u662f"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"\u6a23\u5f0f\u8a2d\u5b9a\uff0cex\uff1a",(0,l.kt)("inlineCode",{parentName:"li"},"Style Provider")," (Tonic UI)"),(0,l.kt)("li",{parentName:"ul"},"\u72c0\u614b\u7ba1\u7406\uff0cex\uff1a",(0,l.kt)("inlineCode",{parentName:"li"},"Redux"),"\u3001",(0,l.kt)("inlineCode",{parentName:"li"},"Zustand")," "),(0,l.kt)("li",{parentName:"ul"},"\u8def\u7531\u7ba1\u7406\uff0cex\uff1a",(0,l.kt)("inlineCode",{parentName:"li"},"React router"))),(0,l.kt)("br",null),(0,l.kt)("br",null),(0,l.kt)("h2",{id:"\u5728\u55ae\u5143\u6e2c\u8a66\u4e2dprovider-\u9020\u6210\u7684\u554f\u984c"},"\u5728\u55ae\u5143\u6e2c\u8a66\u4e2d\uff0cProvider \u9020\u6210\u7684\u554f\u984c"),(0,l.kt)("p",null,"\u4f46 Provider \u6a21\u5f0f\uff0c\u5728\u55ae\u5143\u6e2c\u8a66\u4e2d\u4e5f\u6703\u7522\u751f\u4e00\u4e9b\u554f\u984c\uff0c",(0,l.kt)("br",null),"\n\u5728\u55ae\u5143\u6e2c\u8a66\u4e2d\uff0c\u6211\u5011\u53ea\u60f3\u8981\u6e2c\u8a66\u55ae\u4e00\u5143\u4ef6\uff0c",(0,l.kt)("br",null),"\n\u4f46\u662f\u5728\u6b64\u5143\u4ef6\u4e2d\uff0c\u6211\u5011\u53ef\u80fd\u6703\u7528\u5230\u4e0d\u540c Provider \u63d0\u4f9b\u7684\u72c0\u614b / \u8a2d\u5b9a\uff0c ",(0,l.kt)("br",null),"\n\u9019\u6642\uff0c\u6211\u5011\u6e2c\u8a66\u6642\uff0c\u5c31\u9700\u8981\u53e6\u5916\u5c07\u6b64\u5143\u4ef6\u5305\u5728 Providers \u4e2d\uff0c\u4f8b\u5982 ",(0,l.kt)("br",null)),(0,l.kt)("br",null),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"\u4f7f\u7528 ",(0,l.kt)("inlineCode",{parentName:"li"},"Redux"))),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-jsx"},"import { Provider } from 'react-redux';\n\n<Provider store={store}>\n    <TargetComponent />\n</Provider>\n")),(0,l.kt)("br",null),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"\u4f7f\u7528 ",(0,l.kt)("inlineCode",{parentName:"li"},"Style Provider"))),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-jsx"},"import { TonicUiProvider } from '@tonic-ui/react';\n\n<TonicUiProvider>\n    <TargetComponent />\n</TonicUiProvider>\n")),(0,l.kt)("p",null,"\u4e0d\u7136\u6703\u7522\u751f\u4ee5\u4e0b\u7684\u932f\u8aa4"),(0,l.kt)("br",null),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"Redux"))),(0,l.kt)("img",{width:"800",src:"/img/redux-error.png"}),(0,l.kt)("br",null),(0,l.kt)("br",null),(0,l.kt)("br",null),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"Style Provider"))),(0,l.kt)("img",{width:"800",src:"/img/style-provider-error.png"}),(0,l.kt)("br",null),(0,l.kt)("br",null),(0,l.kt)("br",null),(0,l.kt)("p",null,"\u4f46\u9019\u6642\uff0c\u7576\u6211\u5011\u60f3\u8981\u6e2c\u8a66\u55ae\u4e00 Component \u6642\uff0c\u6211\u5011\u5728\u6bcf\u500b test case \u90fd\u9700\u8981\u9019\u6a23\u5305\u88dd\uff0c\n\u9020\u6210"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"\u64b0\u5beb\u6e2c\u8a66\u975e\u5e38\u9ebb\u7169\uff0c\u5197\u9577"),(0,l.kt)("li",{parentName:"ul"},"\u5176\u4ed6\u4eba\u96e3\u4ee5\u95b1\u8b80\u6e2c\u8a66")),(0,l.kt)("br",null),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-jsx"},"import { Provider } from 'react-redux';\nimport { TonicProvider } from '@tonic-ui/react';\nimport { render } from '@testing-library/react';\n\n\ndescribe('TargetComponent', () => {\n    test('when under some scenaior, should perform some behavior', () => {\n        // Arrange\n        const store = createReduxStore();\n    \n        // Act\n        const { getByTestId } = render(\n            <Provider store={store}>\n                <TonicProvider>\n                    <TargetComponent />\n                </TonicProvider>\n            </Provider>\n        );\n        const senderEmailInput = getByTestId('tagetId');\n        \n        // Assert\n        expect(senderEmailInput).toHaveValue('benson_chen@trendmicro.com');\n    });\n});\n\n")),(0,l.kt)("br",null),(0,l.kt)("br",null),(0,l.kt)("p",null,"\u60f3\u50cf\u4e00\u4e0b\u5982\u679c\u6211\u5011\u6bcf\u4e00\u500b test case \u90fd\u9700\u8981\u9019\u6a23\u64b0\u5beb\uff0c\u90a3\u6703\u662f\u975e\u5e38\u9ebb\u7169\u7684\u6b65\u9a5f\uff0c",(0,l.kt)("br",null),"\n\u9019\u4e5f\u9055\u53cd\u4e86 AOUT  \u4e2d Ch.8 \u63d0\u5230 ",(0,l.kt)("strong",{parentName:"p"},"\u597d\u7684\u55ae\u5143\u6e2c\u8a66")," \u7684\u6e96\u5247\uff0c\u5305\u62ec\uff1a"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"\u53ef\u8b80\u6027 ( Readability )\n\u88ab\u6e2c\u8a66\u7684 Component \u88ab\u591a\u5c64 Provider \u5305\u8986\uff0c\u4e0d\u6613\u95b1\u8b80",(0,l.kt)("br",null)),(0,l.kt)("li",{parentName:"ul"},"\u53ef\u7dad\u8b77\u6027 ( Maintainability )\n\u64b0\u5beb\u548c\u6539\u5beb\u90fd\u4e0d\u65b9\u4fbf\uff0c\u6703\u9020\u6210\u8f49\u5beb\u6642\u7a0b\u9577\uff0c\u5927\u5bb6\u4e0d\u60f3\u7dad\u8b77",(0,l.kt)("br",null))),(0,l.kt)("br",null),(0,l.kt)("p",null,"\u56e0\u6b64\uff0cReact Testing Library \u7684\u4f5c\u8005 Kent C Dodds. \u548c Redux \u5b98\u7db2\u63a8\u85a6\u4e86\u4e00\u4e9b\u6539\u5584\u7684\u65b9\u6848"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://testing-library.com/docs/react-testing-library/setup/#custom-render"},"Custom ",(0,l.kt)("inlineCode",{parentName:"a"},"render")," - React Testing Library ")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://redux.js.org/usage/writing-tests#setting-up-a-reusable-test-render-function"},"Setting Up a Reusable Test Render Function - Redux"))),(0,l.kt)("br",null),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},(0,l.kt)("strong",{parentName:"p"},"\u4e3b\u8981\u7684\u6838\u5fc3\u65b9\u6cd5\u5c31\u662f\uff1a\u6539\u5beb\u539f\u672c\u7684 ",(0,l.kt)("inlineCode",{parentName:"strong"},"render")," \u65b9\u6cd5"))),(0,l.kt)("br",null),(0,l.kt)("br",null),(0,l.kt)("h2",{id:"\u8986\u5beb\u539f\u751f\u7684-render"},"\u8986\u5beb\u539f\u751f\u7684 ",(0,l.kt)("inlineCode",{parentName:"h2"},"render")),(0,l.kt)("p",null,"\u6211\u5011\u5148\u5c07\u6240\u6709\u7684 ",(0,l.kt)("strong",{parentName:"p"},"Providers")," \u90fd\u96c6\u5408\u5728\u4e00\u8d77\uff0c",(0,l.kt)("br",null),"\n\u7136\u5f8c\u518d\u5ba2\u88fd\u5316 React Testing Library \u7684 ",(0,l.kt)("inlineCode",{parentName:"p"},"render")," function\uff0c ",(0,l.kt)("br",null),"\n\u5c07 Providers \u50b3\u5165 ",(0,l.kt)("inlineCode",{parentName:"p"},"render")," \u7b2c 2 \u500b\u53c3\u6578\uff0c\u505a\u4e00\u4e9b\u521d\u59cb\u5316\u8a2d\u5b9a ",(0,l.kt)("br",null)),(0,l.kt)("br",null),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-jsx"},"import React from 'react';\nimport { render } from '@testing-library/react';\n\n// example Providers\nimport { ThemeProvider } from 'my-ui-lib'  \nimport { TranslationProvider } from 'my-i18n-lib'  \nimport defaultStrings from 'i18n/en-x-default'\n\nconst AllTheProviders = ({children}) => {  \n    return (  \n        <ThemeProvider theme=\"light\">  \n            <TranslationProvider messages={defaultStrings}>  \n                {children}  \n            </TranslationProvider>  \n        </ThemeProvider>  \n    )  \n};\n  \nconst customRender = (ui, options) => (\n    render(ui, { wrapper: AllTheProviders, ...options });\n)\n  \n// re-export everything  \nexport * from '@testing-library/react';\n  \n// override render method  \nexport { customRender as render };\n")),(0,l.kt)("br",null),(0,l.kt)("br",null),(0,l.kt)("p",null,"\u9019\u6642\uff0c\u6211\u5011\u5c31\u53ef\u4ee5\u4f7f\u7528\u539f\u672c Provider \u63d0\u4f9b\u7684 api\uff0c\u800c\u4e0d\u9700\u8981\u53e6\u5916\u591a\u5305\u4e00\u5c64 Provider \u4e86"),(0,l.kt)("br",null),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-jsx"},"const TargetComponent = () => {\n    const { color } = useTheme();\n\n    return (\n        <Box color={color.blue}>\n            I'm target\n        </Box>\n    );\n};\n\ndescribe('TargetComponent', () => {\n    test('when under some scenario, should perform some behaviors', () => {\n        ...\n        const { getByTestId, debug } = render(<TargetComponent />);\n        ...\n    });\n})\n")),(0,l.kt)("br",null),(0,l.kt)("br",null),(0,l.kt)("h2",{id:"testing-render-with-redux"},"Testing ",(0,l.kt)("inlineCode",{parentName:"h2"},"render")," with ",(0,l.kt)("inlineCode",{parentName:"h2"},"Redux")),(0,l.kt)("p",null,"Redux \u4e5f\u53ef\u4ee5\u63a1\u7528\u985e\u4f3c\u7684\u505a\u6cd5\uff0c",(0,l.kt)("br",null),"\n\u6211\u5011\u53ef\u4ee5\u5c07\u507d\u9020\u7684 redux state \u50b3\u5165 ",(0,l.kt)("inlineCode",{parentName:"p"},"render")," \u7684\u7b2c 2 \u500b\u53c3\u6578 ",(0,l.kt)("inlineCode",{parentName:"p"},"option")," \u4e2d\uff0c",(0,l.kt)("br",null),"\n( option \u672c\u4f86\u5c31\u53ef\u4ee5\u50b3\u5165\u4e00\u4e9b\u9810\u8a2d\u503c\uff0c\u50cf\u662f initialProps\uff0c\u6240\u4ee5\u6211\u89ba\u5f97\u628a mock redux state \u653e\u5728\u9019\u88e1\u662f\u5408\u7406\u7684 )"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-jsx"},"import React from 'react'  \nimport { render } from '@testing-library/react'  \nimport { configureStore } from '@reduxjs/toolkit'  \nimport { Provider } from 'react-redux'  \n// As a basic setup, import your same slice reducers  \nimport userReducer from '../features/users/userSlice'  \n  \nconst renderWithRedux = (\n    ui: ReactElement,\n    {\n        mockReduxState = {},\n        // Automatically create a store instance if no store was passed in\n        store = setupStore(mockReduxState),\n        ...renderOptions\n    }: ExtendedRenderOptions = {},\n) => {\n    const Wrapper = function Wrapper({ children }) {\n        return (\n            <Provider store={store}>\n                <DefaultProviders>\n                    {children}\n                </DefaultProviders>\n            </Provider>\n        );\n    };\n\n    return { store, ...render(ui, { wrapper: Wrapper, ...renderOptions }) };\n};\n")),(0,l.kt)("br",null),(0,l.kt)("h3",{id:"usage"},"Usage"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-jsx"},"const mockReduxState = {\n    ...state,\n    account: {\n        ...state.account,\n        profile: {\n            ...state.account.profile,\n            email: 'test@testdomain.com',\n        },\n    },\n};\n\nconst { getByTestId, debug } = renderWithRedux(\n    <TargetComponent />, { mockReduxState }\n);\n")),(0,l.kt)("br",null),(0,l.kt)("h2",{id:"\u7e3d\u7d50"},"\u7e3d\u7d50"),(0,l.kt)("p",null,"\u524d\u7aef\u7684 Provider \u65b9\u5f0f\u96d6\u7136\u89e3\u6c7a\u4e86\u5f88\u591a React \u6a39\u72c0\u7d50\u69cb\u7684\u7bc0\u9ede\u9700\u5171\u4eab\u72c0\u614b\u7684\u554f\u984c\uff0c",(0,l.kt)("br",null),"\n\u4f46\u4e5f\u9020\u6210\u55ae\u5143\u6e2c\u8a66\u4e0a\u5f88\u5927\u7684\u56f0\u96e3\uff0c",(0,l.kt)("br",null),"\n\u6211\u5011\u53ef\u4ee5\u5229\u7528\u9810\u8a2d\u5e36\u6709\u4e00\u4e9b\u5e38\u7528\u7684 Provider\uff0c\u4f86\u7c21\u5316\u64b0\u5beb Unit test \u7684\u904e\u7a0b\uff0c",(0,l.kt)("br",null),"\n\u4f7f\u524d\u7aef\u7684\u55ae\u5143\u6e2c\u8a66\u66f4\u597d\u7dad\u8b77\u548c\u64b0\u5beb"),(0,l.kt)("br",null),(0,l.kt)("h2",{id:"\u53c3\u8003\u6587\u737b"},"\u53c3\u8003\u6587\u737b"),(0,l.kt)("blockquote",null,(0,l.kt)("ul",{parentName:"blockquote"},(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://testing-library.com/docs/react-testing-library/setup/#custom-render"},"Testing Library - Custom Render")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://redux.js.org/usage/writing-tests"},"Redux - Writing Tests")))),(0,l.kt)("br",null),(0,l.kt)("br",null))}c.isMDXComponent=!0}}]);