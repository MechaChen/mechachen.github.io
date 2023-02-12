"use strict";(self.webpackChunkbenson_doc=self.webpackChunkbenson_doc||[]).push([[4592],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>m});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),u=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=u(e.components);return r.createElement(s.Provider,{value:t},e.children)},c="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},k=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,l=e.originalType,s=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),c=u(n),k=a,m=c["".concat(s,".").concat(k)]||c[k]||d[k]||l;return n?r.createElement(m,i(i({ref:t},p),{},{components:n})):r.createElement(m,i({ref:t},p))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=n.length,i=new Array(l);i[0]=k;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o[c]="string"==typeof e?e:a,i[1]=o;for(var u=2;u<l;u++)i[u]=n[u];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}k.displayName="MDXCreateElement"},375:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>d,frontMatter:()=>l,metadata:()=>o,toc:()=>u});var r=n(7462),a=(n(7294),n(3905));const l={sidebar__label:"[Book] Ch9. Readability",title:"[Book] \u55ae\u5143\u6e2c\u8a66\u7684\u85dd\u8853\uff1aCh9. Readability"},i=void 0,o={unversionedId:"Testing/aout_ch9",id:"Testing/aout_ch9",title:"[Book] \u55ae\u5143\u6e2c\u8a66\u7684\u85dd\u8853\uff1aCh9. Readability",description:"\u6b64\u7bc7\u70ba the Art of Unit Test \u8b80\u5f8c\u5fc3\u5f97 & \u7b46\u8a18\u6574\u7406\uff0c\u53c3\u8003\u8cc7\u8a0a\uff1a",source:"@site/docs/Testing/aout_ch9.mdx",sourceDirName:"Testing",slug:"/Testing/aout_ch9",permalink:"/zh-tw/docs/Testing/aout_ch9",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/Testing/aout_ch9.mdx",tags:[],version:"current",frontMatter:{sidebar__label:"[Book] Ch9. Readability",title:"[Book] \u55ae\u5143\u6e2c\u8a66\u7684\u85dd\u8853\uff1aCh9. Readability"},sidebar:"tutorialSidebar",previous:{title:"[Book] \u55ae\u5143\u6e2c\u8a66\u7684\u85dd\u8853\uff1aCh7. Trustworthy",permalink:"/zh-tw/docs/Testing/aout_ch7"},next:{title:"[Frontend] Part 1.1 - Basic - \u6e2c\u8a66\u547d\u540d\uff06\u67b6\u69cb",permalink:"/zh-tw/docs/Testing/frontend-unit-testing-basic-1"}},s={},u=[{value:"\u6e2c\u8a66\u7684\u547d\u540d",id:"\u6e2c\u8a66\u7684\u547d\u540d",level:2},{value:"\u8b8a\u6578\u7684\u547d\u540d",id:"\u8b8a\u6578\u7684\u547d\u540d",level:2},{value:"\u5206\u96e2\u64cd\u4f5c(Act)\u548c\u9a57\u8b49(Assert)",id:"\u5206\u96e2\u64cd\u4f5cact\u548c\u9a57\u8b49assert",level:2},{value:"\u907f\u514d\u521d\u59cb\u5316(Setup)\u548c\u6e05\u7406(Teardown)",id:"\u907f\u514d\u521d\u59cb\u5316setup\u548c\u6e05\u7406teardown",level:2}],p={toc:u},c="wrapper";function d(e){let{components:t,...n}=e;return(0,a.kt)(c,(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("br",null),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"\u6b64\u7bc7\u70ba the Art of Unit Test \u8b80\u5f8c\u5fc3\u5f97 & \u7b46\u8a18\u6574\u7406\uff0c\u53c3\u8003\u8cc7\u8a0a\uff1a"),(0,a.kt)("ul",{parentName:"blockquote"},(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://www.manning.com/books/the-art-of-unit-testing-third-edition"},"The Art of Unit Test, Third Edition")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://www.tenlong.com.tw/products/9789864342471"},"\u55ae\u5143\u85dd\u8853\u7684\u6e2c\u8a66, 2/e")))),(0,a.kt)("br",null),(0,a.kt)("p",null,"\u6e2c\u662f\u7684\u53ef\u8b80\u6027\u662f\u975e\u5e38\u91cd\u8981\u7684\u4e00\u74b0\uff0c\u82e5\u6c92\u6709\u53ef\u8b80\u6027\uff0c\u5247\uff1a"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"\u4f60\u7684\u5de5\u4f5c\u5925\u4f34\u6216\u5f8c\u7e8c\u63a5\u624b\u4eba\u54e1\u770b\u4e0d\u61c2\u6e2c\u8a66\uff0c\u4ed6\u5011\u5c31\u4e0d\u77e5\u9053\u6e2c\u8a66\u5728\u505a\u4ec0\u9ebc\uff0c\u4f60\u7684\u6e2c\u8a66\u5c31\u6c92\u6709\u610f\u7fa9\uff0c\u7b49\u65bc\u4f60\u7684\u6e2c\u8a66\u662f\u6c92\u6709\u4fe1\u4efb\u5ea6\u7684"),(0,a.kt)("li",{parentName:"ul"},"\u597d\u7684\u6e2c\u8a66\uff0c\u4e5f\u6703\u662f\u5176\u4ed6\u4eba\u7684\u6551\u661f\uff0c\u8868\u793a\u9019\u6bb5\u7a0b\u5f0f\u78bc\uff0c\u6216\u9019\u9805\u5c08\u6848\u505a\u4e86\u4ec0\u9ebc\uff0c\u4e0d\u7528\u8b80\u7a0b\u5f0f\u78bc\u5c31\u80fd\u5feb\u901f\u4e86\u89e3\u9019\u5c08\u6848")),(0,a.kt)("br",null),(0,a.kt)("p",null,"\u56e0\u6b64\uff0c\u53ef\u8b80\u6027\u5e7e\u4e4e\u53ef\u4ee5\u8aaa\u662f\u64b0\u5beb\u6e2c\u8a66\u4e2d\u6700\u91cd\u8981\u7684\u4e00\u74b0\uff0c",(0,a.kt)("br",null),"\n\u90a3\u8981\u5982\u4f55\u5beb\u51fa\u53ef\u8b80\u7684\u6e2c\u8a66\u5462\uff1f \u4e3b\u8981\u5305\u542b 4 \u500b\u90e8\u5206\uff1a",(0,a.kt)("br",null)),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"#%E6%B8%AC%E8%A9%A6%E7%9A%84%E5%91%BD%E5%90%8D"},"\u6e2c\u8a66\u7684\u547d\u540d")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"#%E8%AE%8A%E6%95%B8%E7%9A%84%E5%91%BD%E5%90%8D"},"\u8b8a\u6578\u7684\u547d\u540d")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"#%E5%88%86%E9%9B%A2%E6%93%8D%E4%BD%9Cact%E5%92%8C%E9%A9%97%E8%AD%89assert"},"\u5206\u96e2\u64cd\u4f5c\u548c\u9a57\u8b49")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"#%E9%81%BF%E5%85%8D%E5%88%9D%E5%A7%8B%E5%8C%96setup%E5%92%8C%E6%B8%85%E7%90%86teardown"},"\u907f\u514d\u521d\u59cb\u5316\u548c\u6e05\u7406"))),(0,a.kt)("br",null),(0,a.kt)("h2",{id:"\u6e2c\u8a66\u7684\u547d\u540d"},"\u6e2c\u8a66\u7684\u547d\u540d"),(0,a.kt)("p",null,"\u547d\u540d\u4e2d\u9808\u5305\u542b 3 \u7684\u8981\u7d20\uff1a\u5305\u542b"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Unit of Work"),(0,a.kt)("li",{parentName:"ul"},"Scenario"),(0,a.kt)("li",{parentName:"ul"},"Expected behavior")),(0,a.kt)("p",null,"\u9019 3 \u500b\u8981\u7d20\u53ef\u4ee5\u5b8c\u6574\u7684\u8868\u9054\u6e2c\u8a66\uff0c\u53ef\u4ee5\u7a31\u9019\u500b\u70ba ",(0,a.kt)("strong",{parentName:"p"},"U.S.E")," \u547d\u540d\u898f\u5247"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-jsx"},"describe(Unit_of_Work, () => {\n    describe(Scenario, () => {\n        it(Expected_Behavior, () => {\n\n        });\n    })\n});\n")),(0,a.kt)("admonition",{title:"\u500b\u4eba\u7684 murmur",type:"info"},(0,a.kt)("p",{parentName:"admonition"},"\u70ba\u4ec0\u9ebc\u9019\u6a23\u7684\u547d\u540d\u5145\u5206\u8868\u9054\u4e86\u6e2c\u8a66\u6240\u6709\u7684\u8981\u7d20\uff1f"),(0,a.kt)("ul",{parentName:"admonition"},(0,a.kt)("li",{parentName:"ul"},"\u5305\u542b\u4e86\u5b8c\u6574\u7684\u6642\u9593\u9806\u5e8f\uff1a\u5148\u6709\u5de5\u4f5c\u55ae\u5143 \u2192 \u653e\u5728\u7279\u5b9a\u60c5\u5883 \u2192 \u7522\u51fa\u6700\u5f8c\u7d50\u679c"))),(0,a.kt)("br",null),(0,a.kt)("br",null),(0,a.kt)("p",null,"\u4e0b\u9762\u70ba\u7bc4\u4f8b\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-jsx"},"describe('verifyEmail', () => {\n    describe('when failling min length rule', () => {\n        it('return should greater than 8 characters error message', () => {\n            // ...\n        });\n    });\n});\n")),(0,a.kt)("br",null),(0,a.kt)("p",null,"\u82e5\u6c92\u6709\u7279\u5b9a\u7684\u60c5\u5883\uff0c\u6709\u4e00\u4e9b\u7279\u5b9a\u7684\u8a5e\u5f59\u53ef\u4ee5\u7528\u5728 Scenario \u5340\u584a\uff1a"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"\u56de\u50b3\u503c (return value) \u6642\uff1a ",(0,a.kt)("inlineCode",{parentName:"li"},"By default")),(0,a.kt)("li",{parentName:"ol"},"\u6539\u8b8a\u72c0\u614b (update state) \u6642\uff1a ",(0,a.kt)("inlineCode",{parentName:"li"},"Always"),", ",(0,a.kt)("inlineCode",{parentName:"li"},"When called"))),(0,a.kt)("br",null),(0,a.kt)("br",null),(0,a.kt)("h2",{id:"\u8b8a\u6578\u7684\u547d\u540d"},"\u8b8a\u6578\u7684\u547d\u540d"),(0,a.kt)("p",null,"\u4e0d\u8981\u7528 Magic number\uff0c\u5176\u4ed6\u4eba\u6703\u770b\u4e0d\u61c2\u6e2c\u8a66\u7684\u8b8a\u6578\u6240\u4ee3\u8868\u7684\u610f\u6db5\uff0c\u5c31\u6703\u964d\u4f4e\u6e2c\u8a66\u7684\u53ef\u6027\u5ea6"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-jsx"},"describe('verifyPassword', () => {\n    describe('when same as last time', () => {\n        it('return requires english error message', () => {\n            const result = verifyPassword('owiem,', [], false);\n            expect(result).toBe('requires english');\n        });\n    });\n});\n")),(0,a.kt)("br",null),(0,a.kt)("h2",{id:"\u5206\u96e2\u64cd\u4f5cact\u548c\u9a57\u8b49assert"},"\u5206\u96e2\u64cd\u4f5c(Act)\u548c\u9a57\u8b49(Assert)"),(0,a.kt)("p",null,"\u628a act \u548c assert \u5206\u958b\u4f86\u5beb\uff0c\u6e05\u695a\u7684\u5206\u96e2\u5340\u584a\uff0c\u53ef\u4ee5\u63d0\u9ad8\u53ef\u8b80\u6027"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-jsx"},"test('bad assertion', () => {\n    expect(verifyPassword(testPassword, rules)).toBe('...');\n});\n\ntest('good separation', () => {\n    const result = verifyPassword(testPassword, rules);\n    expect(result).toBe('...');\n});\n")),(0,a.kt)("br",null),(0,a.kt)("h2",{id:"\u907f\u514d\u521d\u59cb\u5316setup\u548c\u6e05\u7406teardown"},"\u907f\u514d\u521d\u59cb\u5316(Setup)\u548c\u6e05\u7406(Teardown)"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"\u76e1\u91cf\u907f\u514d\u7528 setup and teardown"),(0,a.kt)("li",{parentName:"ul"},"\u5f88\u591a\u8a2d\u5b9a\u90fd\u5728 setup \u4e2d\uff0c\u6211\u5011\u6aa2\u9a57\u500b\u5225\u6e2c\u8a66\u5728 setup \u4e2d\u6709\u54ea\u4e9b\u8a2d\u5b9a"),(0,a.kt)("li",{parentName:"ul"},"\u5982\u679c\u5168\u90e8\u90fd\u5beb\u5728 setup \u4e2d\uff0c\u6709\u4e9b setup \u7528\u5728\u67d0\u4e9b cases\uff0c\u6709\u4e9b\u7528\u5728\u53e6\u5916\u7684 cases\uff0c\u6703\u9020\u6210",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"\u4e0d\u77e5\u9053\u6bcf\u500b test case \u9700\u8981\u7684\u5148\u524d\u8a2d\u5b9a\u6709\u54ea\u4e9b"),(0,a.kt)("li",{parentName:"ul"},"setup \u6703\u5f88\u80a5\u5927"))),(0,a.kt)("li",{parentName:"ul"},"\u9700\u8981\u7522\u751f\u7684\u5047\u7269\u4ef6\u7528 helper function \u7522\u751f\uff0c\u76f4\u63a5\u4f7f\u7528\u5728 test cases \u88cf\u9762")))}d.isMDXComponent=!0}}]);