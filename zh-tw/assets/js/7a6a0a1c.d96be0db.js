"use strict";(self.webpackChunkbenson_doc=self.webpackChunkbenson_doc||[]).push([[7849],{3905:(t,e,n)=>{n.d(e,{Zo:()=>c,kt:()=>b});var r=n(7294);function l(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function a(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function i(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?a(Object(n),!0).forEach((function(e){l(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function o(t,e){if(null==t)return{};var n,r,l=function(t,e){if(null==t)return{};var n,r,l={},a=Object.keys(t);for(r=0;r<a.length;r++)n=a[r],e.indexOf(n)>=0||(l[n]=t[n]);return l}(t,e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);for(r=0;r<a.length;r++)n=a[r],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(l[n]=t[n])}return l}var s=r.createContext({}),u=function(t){var e=r.useContext(s),n=e;return t&&(n="function"==typeof t?t(e):i(i({},e),t)),n},c=function(t){var e=u(t.components);return r.createElement(s.Provider,{value:e},t.children)},p="mdxType",d={inlineCode:"code",wrapper:function(t){var e=t.children;return r.createElement(r.Fragment,{},e)}},g=r.forwardRef((function(t,e){var n=t.components,l=t.mdxType,a=t.originalType,s=t.parentName,c=o(t,["components","mdxType","originalType","parentName"]),p=u(n),g=l,b=p["".concat(s,".").concat(g)]||p[g]||d[g]||a;return n?r.createElement(b,i(i({ref:e},c),{},{components:n})):r.createElement(b,i({ref:e},c))}));function b(t,e){var n=arguments,l=e&&e.mdxType;if("string"==typeof t||l){var a=n.length,i=new Array(a);i[0]=g;var o={};for(var s in e)hasOwnProperty.call(e,s)&&(o[s]=e[s]);o.originalType=t,o[p]="string"==typeof t?t:l,i[1]=o;for(var u=2;u<a;u++)i[u]=n[u];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}g.displayName="MDXCreateElement"},1465:(t,e,n)=>{n.r(e),n.d(e,{assets:()=>s,contentTitle:()=>i,default:()=>d,frontMatter:()=>a,metadata:()=>o,toc:()=>u});var r=n(7462),l=(n(7294),n(3905));const a={sidebar__label:"[FEUT] Part 1.1 - Basic - Frontend unit testing fundamentals",title:"[FEUT] Part 1.1 - Basic - Frontend unit testing fundamentals"},i=void 0,o={unversionedId:"Testing/frontend-unit-testing-basic-1",id:"Testing/frontend-unit-testing-basic-1",title:"[FEUT] Part 1.1 - Basic - Frontend unit testing fundamentals",description:"\u70ba\u4ec0\u9ebc\u6e2c\u8a66\u7684\u547d\u540d\u5f88\u91cd\u8981\uff1f",source:"@site/docs/Testing/frontend-unit-testing-basic-1.mdx",sourceDirName:"Testing",slug:"/Testing/frontend-unit-testing-basic-1",permalink:"/zh-tw/docs/Testing/frontend-unit-testing-basic-1",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/Testing/frontend-unit-testing-basic-1.mdx",tags:[],version:"current",frontMatter:{sidebar__label:"[FEUT] Part 1.1 - Basic - Frontend unit testing fundamentals",title:"[FEUT] Part 1.1 - Basic - Frontend unit testing fundamentals"},sidebar:"tutorialSidebar",previous:{title:"[AOUT] Ch9. Readability",permalink:"/zh-tw/docs/Testing/aout_ch9"},next:{title:"[FEUT] Part 1.2 - Basic - Testing custom hook",permalink:"/zh-tw/docs/Testing/frontend-unit-testing-basic-2"}},s={},u=[{value:"\u70ba\u4ec0\u9ebc\u6e2c\u8a66\u7684\u547d\u540d\u5f88\u91cd\u8981\uff1f",id:"\u70ba\u4ec0\u9ebc\u6e2c\u8a66\u7684\u547d\u540d\u5f88\u91cd\u8981",level:2},{value:"\u6709\u63a8\u85a6\u7684\u547d\u540d\u65b9\u5f0f\u55ce\uff1f",id:"\u6709\u63a8\u85a6\u7684\u547d\u540d\u65b9\u5f0f\u55ce",level:2},{value:"\u64b0\u5beb\u6e2c\u8a66\u7a0b\u5f0f\u78bc",id:"\u64b0\u5beb\u6e2c\u8a66\u7a0b\u5f0f\u78bc",level:2},{value:"\u6709\u5beb\u7a0b\u5f0f\u78bc\u6700\u597d\u7684\u6a21\u5f0f\u55ce\uff1f",id:"\u6709\u5beb\u7a0b\u5f0f\u78bc\u6700\u597d\u7684\u6a21\u5f0f\u55ce",level:3},{value:"\u4e00\u500b\u6e2c\u8a66\u53ea\u6e2c\u4e00\u500b\u7d50\u679c",id:"\u4e00\u500b\u6e2c\u8a66\u53ea\u6e2c\u4e00\u500b\u7d50\u679c",level:2}],c={toc:u},p="wrapper";function d(t){let{components:e,...n}=t;return(0,l.kt)(p,(0,r.Z)({},c,n,{components:e,mdxType:"MDXLayout"}),(0,l.kt)("h2",{id:"\u70ba\u4ec0\u9ebc\u6e2c\u8a66\u7684\u547d\u540d\u5f88\u91cd\u8981"},"\u70ba\u4ec0\u9ebc\u6e2c\u8a66\u7684\u547d\u540d\u5f88\u91cd\u8981\uff1f"),(0,l.kt)("p",null,"\u6839\u64da AOUT \u597d\u7684\u55ae\u5143\u6e2c\u8a66\u7684\u4e09\u5927\u652f\u67f1\uff0c\u70ba\u4e86\u6e2c\u8a66\u5177\u6709"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Readable\uff1a\u53ef\u8b80\u7684"),(0,l.kt)("li",{parentName:"ul"},"Trustworthy\uff1a\u53ef\u4fe1\u8cf4\u7684")),(0,l.kt)("br",null),(0,l.kt)("p",null,"\u624d\u80fd\u8b93\u5c08\u6848\u5f8c\u7e8c"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Bugless\uff1a\u6e1b\u5c11 bug"),(0,l.kt)("li",{parentName:"ul"},"Updatable\uff1a\u5f8c\u7e8c\u82e5\u6709\u66f4\u65b0\u4e5f\u4e0d\u6703\u6015\u51fa\u932f\uff0c\u6211\u5011\u53ef\u4ee5\u900f\u904e Unit test \u5feb\u901f\u7684\u81ea\u52d5\u6e2c\u8a66"),(0,l.kt)("li",{parentName:"ul"},"Documented\uff1a\u76f4\u63a5\u544a\u8a34\u5176\u4ed6\u958b\u767c\u8005\u6211\u5011\u7684\u66fe\u7d93\u505a\u4e86\u54ea\u4e9b\u9700\u6c42\uff0c\u7576\u521d\u6211\u5011\u671f\u5f85\u7684\u7d50\u679c\u662f\u4ec0\u9ebc\uff0c\u800c\u4e0d\u7528\u518d\u8b80 code")),(0,l.kt)("br",null),(0,l.kt)("p",null,"\u56e0\u6b64\uff0c\u6211\u5011\u9700\u8981\u91cd\u8996\u6e2c\u8a66\u7684\u547d\u540d\uff0c\u4e0d\u50c5\u662f\u70ba\u4e86\u6e1b\u5c11 bug\uff0c\u66f4\u591a\u7684\u662f\u70ba\u4e86\u5f8c\u7e8c\u80fd\u653e\u5fc3\u7684\u66f4\u65b0\u548c\u8a18\u5f97\u7576\u521d\u505a\u4e86\u4ec0\u9ebc\u9700\u6c42"),(0,l.kt)("br",null),(0,l.kt)("h2",{id:"\u6709\u63a8\u85a6\u7684\u547d\u540d\u65b9\u5f0f\u55ce"},"\u6709\u63a8\u85a6\u7684\u547d\u540d\u65b9\u5f0f\u55ce\uff1f"),(0,l.kt)("p",null,"\u6839\u64da AOUT(Art of Unit Testing)\uff0c\u4f5c\u8005 Roy \u6839\u64da\u81ea\u8eab\u7d93\u9a57\u767c\u60f3\u4e86 U.S.E. \u547d\u540d\u6cd5\u5247\uff0c\n\u5206\u5225\u4ee3\u8868\uff1a"),(0,l.kt)("br",null),(0,l.kt)("p",null,"U\uff1aUnit of Work\uff0c\u53d7\u6e2c\u7684\u5de5\u4f5c\u55ae\u4f4d ",(0,l.kt)("br",null),"\nS\uff1aScenario\uff0c\u7576\u4e0b\u7684\u60c5\u5883 ",(0,l.kt)("br",null),"\nE\uff1aExpected Result\uff0c\u9810\u671f\u7d50\u679c ",(0,l.kt)("br",null)),(0,l.kt)("br",null),(0,l.kt)("p",null,"\u5305\u542b\u9019\u4e09\u500b\u5143\u7d20\uff0c\u5c31\u53ef\u4ee5\u5b8c\u6574\u7684\u63cf\u8ff0\u6e2c\u8a66\u7684\u60c5\u5883\n\u5c31\u50cf\u662f\u82f1\u6587\u53e5\u5b50\uff0c\u5305\u542b"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"\u4e3b\u9ad4 ( Unit of Work )"),(0,l.kt)("li",{parentName:"ul"},"\u539f\u56e0 ( Scenario )"),(0,l.kt)("li",{parentName:"ul"},"\u7d50\u679c ( Expected Result )")),(0,l.kt)("p",null,"\u5c31\u53ef\u4ee5\u5f88\u5b8c\u6574\u7684\u63cf\u8ff0\u4e00\u4ef6\u4e8b\u7684\u4f86\u9f8d\u53bb\u8108"),(0,l.kt)("p",null,"\u7bc4\u672c\u5982\u4e0b\uff1a"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-jsx"},"// test case template\n\ndescribe('<Unit of Work>', () => {\n    test('when <Scenario>, should <Expected Resutlt>', () => {\n    // your testing code\n    });\n});\n")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-jsx"},"// test case example\n\ndescribe('LoadingButton', () => {\n    test('when isLoading prop is true, should show loading icon', () => {\n    // your testing code\n    });\n});\n")),(0,l.kt)("br",null),(0,l.kt)("br",null),(0,l.kt)("h2",{id:"\u64b0\u5beb\u6e2c\u8a66\u7a0b\u5f0f\u78bc"},"\u64b0\u5beb\u6e2c\u8a66\u7a0b\u5f0f\u78bc"),(0,l.kt)("h3",{id:"\u6709\u5beb\u7a0b\u5f0f\u78bc\u6700\u597d\u7684\u6a21\u5f0f\u55ce"},"\u6709\u5beb\u7a0b\u5f0f\u78bc\u6700\u597d\u7684\u6a21\u5f0f\u55ce\uff1f"),(0,l.kt)("p",null,"\u76ee\u524d\u8edf\u9ad4\u696d\u5df2\u7d93\u6709 2 \u5957\u64b0\u5beb\u6e2c\u8a66\u7a0b\u5f0f\u78bc\u7684\u6a21\u5f0f\uff0c\u5305\u542b\uff1a"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"3A pattern\uff1aArrange, Act, Assert"),(0,l.kt)("li",{parentName:"ul"},"GWT pattern\uff1aGiven, When, Then")),(0,l.kt)("br",null),(0,l.kt)("p",null,"\u73fe\u4eca\u8f03\u5ee3\u70ba\u4eba\u77e5\u548c\u8f03\u591a\u4eba\u63a1\u7528\u7684\u662f 3A pattern\uff0c\n\u6545\u6211\u5011\u4ee5\u4e0b\u7a0b\u5f0f\u78bc\u90fd\u6703\u4ee5\u6b64 pattern \u64b0\u5beb"),(0,l.kt)("p",null,"\u4ee5\u4e0b\u662f 3A pattern \u7684\u7c21\u4ecb\uff1a"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Arrange\uff1a\u6e96\u5099\u6240\u6709\u6e2c\u8a66\u8981\u7528\u7684\u8cc7\u6e90"),(0,l.kt)("li",{parentName:"ul"},"Act\uff1a\u57f7\u884c\u6e2c\u8a66"),(0,l.kt)("li",{parentName:"ul"},"Assert\uff1a\u65b7\u5b9a\u6e2c\u8a66\u7d50\u679c\u662f\u5426\u7b26\u5408\u9810\u671f")),(0,l.kt)("br",null),(0,l.kt)("p",null,"\u4ee5\u4e0b\u662f 3A pattern \u7684\u7bc4\u4f8b"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-jsx"},"describe('SubmitButton', () => {\n    test('when loading, should show loading icon', () => {\n        // Arrange: declare the data or variables we need\n        const props = { isLoading: true };\n    \n        // Act: actually doing the process\n        const { getByTestId } = render(<SubmitButton {...props} />);\n        const loadingIcon = getByTestId('loadingIcon');\n    \n        // Assert: judge whether the result is expected as we thought\n        expect(loadingIcon).toBeVisible();\n    });\n});\n")),(0,l.kt)("br",null),(0,l.kt)("br",null),(0,l.kt)("h2",{id:"\u4e00\u500b\u6e2c\u8a66\u53ea\u6e2c\u4e00\u500b\u7d50\u679c"},"\u4e00\u500b\u6e2c\u8a66\u53ea\u6e2c\u4e00\u500b\u7d50\u679c"),(0,l.kt)("admonition",{title:"Best assert practice",type:"note"},(0,l.kt)("p",{parentName:"admonition"},(0,l.kt)("strong",{parentName:"p"},"Testing only one thing, only 1 concern in 1 test case"))),(0,l.kt)("br",null),(0,l.kt)("p",null,"\u6211\u5011\u5728\u6bcf\u4e00\u500b\u6e2c\u8a66\u6848\u4f8b\uff0c\u53ea\u8981\u6e2c\u4e00\u500b\u7d50\u679c\u5c31\u597d\u4e86\uff0c\n\u5982\u679c\u5728\u76f8\u540c\u7684\u60c5\u5883\u4e0b\u6709\u591a\u500b\u9810\u671f\u7684\u7d50\u679c\uff0c\u6211\u5011\u61c9\u8a72\u6bcf\u4e00\u500b\u7d50\u679c\u90fd\u53e6\u5beb\u4e00\u500b test case\uff0c"),(0,l.kt)("p",null,"\u8209\u4f8b\u5982\u4e0b\uff1a"),(0,l.kt)("p",null,"\u7576\u6211\u5011\u8981\u63d0\u4ea4\u8868\u55ae\u6309\u4e0b submit button \u6b63\u5728 loading \u6642\uff0c\nbutton \u61c9\u8a72\u8981\u986f\u793a loading icon \u548c\u88ab disabled"),(0,l.kt)("br",null),(0,l.kt)("p",null,"\u4ee5\u4e0b\u662f\u932f\u8aa4\u7bc4\u4f8b\uff1a"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-jsx"},"describe('SubmitButton', () => {\n    test('when loading, should show loading icon and disabled', () => {\n        // Arrange\n        const props = { isLoading: true };\n    \n        // Act\n        const { getByTestId } = render(<SubmitButton {...props} />);\n        const submitBtn = getByTestId('submitBtn');\n        const loadingIcon = getByTestId('loadingIcon');\n    \n        // Assert\n        // \u274c Assert too many thing in a single test case\n        expect(loadingIcon).toBeVisible();\n        expect(submitBtn).toBeDisabled();\n    });\n});\n\n")),(0,l.kt)("br",null),(0,l.kt)("p",null,"\u4ee5\u4e0b\u662f\u6b63\u78ba\u7bc4\u4f8b\uff1a"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-jsx"},"describe('SubmitButton', () => {\n    test('when loading, should show loading icon', () => {\n        // Arrange\n        const props = { isLoading: true };\n    \n        // Act\n        const { getByTestId } = render(<SubmitButton {...props} />);\n        const loadingIcon = getByTestId('loadingIcon');\n    \n        // Assert\n        // \u2705 Assert only 1 thing in 1 test case\n        expect(loadingIcon).toBeVisible();\n    });\n\n    test('when loading, should be disabled', () => {\n        // Arrange\n        const props = { isLoading: true };\n    \n        // Act\n        const { getByTestId } = render(<SubmitButton {...props} />);\n        const submitBtn = getByTestId('submitBtn');\n    \n        // Assert\n        // \u2705 Assert 1 thing in 1 test case\n        expect(submitBtn).toBeDisabled();\n    });\n});\n")),(0,l.kt)("br",null),(0,l.kt)("p",null,"\u9019\u6a23\u7684\u597d\u8655\u662f\uff1a"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"\u6bcf\u500b\u6e2c\u8a66\u6848\u4f8b\u7684\u6558\u8ff0 & \u7a0b\u5f0f\u78bc\u8b8a\u77ed\u4e86\uff0c\u53ef\u8b80\u6027\u4e0a\u5347"),(0,l.kt)("li",{parentName:"ul"},"\u7576\u6709\u6e2c\u8a66\u5931\u6557\u6642\uff0c\u6211\u5011\u99ac\u4e0a\u5c31\u77e5\u9053\u662f\u54ea\u500b\u7d50\u679c\u6c92\u6709\u7b26\u5408\u9810\u671f\uff0c\u4e0d\u7528\u731c\u662f\u9019\u500b\u6e2c\u8a66\u6848\u4f8b\u7684\u54ea\u500b\u7d50\u679c\u5931\u6557")))}d.isMDXComponent=!0}}]);