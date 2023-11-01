"use strict";(self.webpackChunkbenson_doc=self.webpackChunkbenson_doc||[]).push([[5999],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>k});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=a.createContext({}),p=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},u=function(e){var t=p(e.components);return a.createElement(l.Provider,{value:t},e.children)},c="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,l=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),c=p(n),d=r,k=c["".concat(l,".").concat(d)]||c[d]||m[d]||i;return n?a.createElement(k,o(o({ref:t},u),{},{components:n})):a.createElement(k,o({ref:t},u))}));function k(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,o=new Array(i);o[0]=d;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[c]="string"==typeof e?e:r,o[1]=s;for(var p=2;p<i;p++)o[p]=n[p];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},1010:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>m,frontMatter:()=>i,metadata:()=>s,toc:()=>p});var a=n(7462),r=(n(7294),n(3905));const i={sidebar_position:0,sidebar__label:"[Unit Test] 3.1 - \u8207 api \u7684\u6e2c\u8a66",title:"[Unit Test] 3.1 - \u8207 api \u7684\u6e2c\u8a66"},o=void 0,s={unversionedId:"Testing/frontend-unit-testing-3.1-test-with-api",id:"Testing/frontend-unit-testing-3.1-test-with-api",title:"[Unit Test] 3.1 - \u8207 api \u7684\u6e2c\u8a66",description:"\u524d\u8a00",source:"@site/docs/Testing/frontend-unit-testing-3.1-test-with-api.mdx",sourceDirName:"Testing",slug:"/Testing/frontend-unit-testing-3.1-test-with-api",permalink:"/docs/Testing/frontend-unit-testing-3.1-test-with-api",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/Testing/frontend-unit-testing-3.1-test-with-api.mdx",tags:[],version:"current",lastUpdatedAt:1698208578,formattedLastUpdatedAt:"Oct 25, 2023",sidebarPosition:0,frontMatter:{sidebar_position:0,sidebar__label:"[Unit Test] 3.1 - \u8207 api \u7684\u6e2c\u8a66",title:"[Unit Test] 3.1 - \u8207 api \u7684\u6e2c\u8a66"},sidebar:"tutorialSidebar",previous:{title:"[Unit Test] 2.2 - \u5229\u7528 immer.js \u8f15\u9b06\u5efa\u7acb mock data",permalink:"/docs/Testing/frontend-unit-testing-2.2-mock-data-with-immerjs"},next:{title:"[Unit Test] 3.2 - \u6bcf\u500b\u6e2c\u8a66\u90fd\u8a72\u662f\u7368\u7acb\u7684\uff0c\u90a3\u4e9b\u4f60\u8a72\u6e05\u7684 api mock data",permalink:"/docs/Testing/frontend-unit-testing-3.2-clear-api-mocking"}},l={},p=[{value:"\u524d\u8a00",id:"\u524d\u8a00",level:2},{value:"\u70ba\u4ec0\u9ebc\u8981\u4f7f\u7528\u5c01\u88dd\u7684\u51fd\u5f0f\u4f86 call api\uff1f",id:"\u70ba\u4ec0\u9ebc\u8981\u4f7f\u7528\u5c01\u88dd\u7684\u51fd\u5f0f\u4f86-call-api",level:2},{value:"\u554f\u984c\uff1a\u55ae\u5143\u6e2c\u8a66\u9700\u507d\u9020 api response",id:"\u554f\u984c\u55ae\u5143\u6e2c\u8a66\u9700\u507d\u9020-api-response",level:2},{value:"3 \u6b65\u9a5f\u4f86 mock api",id:"3-\u6b65\u9a5f\u4f86-mock-api",level:2},{value:"\u5f15\u5165",id:"\u5f15\u5165",level:3},{value:"\u76e3\u63a7",id:"\u76e3\u63a7",level:3},{value:"\u507d\u9020",id:"\u507d\u9020",level:3},{value:"\u7d50\u8ad6",id:"\u7d50\u8ad6",level:2},{value:"\u53c3\u8003\u6587\u737b",id:"\u53c3\u8003\u6587\u737b",level:3}],u={toc:p},c="wrapper";function m(e){let{components:t,...n}=e;return(0,r.kt)(c,(0,a.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"\u524d\u8a00"},"\u524d\u8a00"),(0,r.kt)("p",null,"\u5728\u524d\u7aef\uff0c\u6211\u5011\u6703\u6709\u597d\u5e7e\u7a2e\u547c\u53eb api \u7684\u65b9\u5f0f\uff1a"),(0,r.kt)("blockquote",null,(0,r.kt)("ol",{parentName:"blockquote"},(0,r.kt)("li",{parentName:"ol"},"\u76f4\u63a5\u5229\u7528 fetch \u6216 axios \u7b49\u76f4\u63a5\u547c\u53eb api"),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("strong",{parentName:"li"},"\u5c07 fetch \u548c\u9700\u8981\u7684\u53c3\u6578\u5c01\u88dd\u5728\u4e00\u500b function \u88cf\uff0c\u7528 function \u4f86\u547c\u53eb api")))),(0,r.kt)("p",null,"\u6b64\u8655\u6211\u5011\u7528\u7b2c\u4e8c\u7a2e\u65b9\u5f0f\u8655\u7406\uff0c\u4e0b\u9762\u6703\u8aaa\u660e\u539f\u56e0"),(0,r.kt)("br",null),(0,r.kt)("h2",{id:"\u70ba\u4ec0\u9ebc\u8981\u4f7f\u7528\u5c01\u88dd\u7684\u51fd\u5f0f\u4f86-call-api"},"\u70ba\u4ec0\u9ebc\u8981\u4f7f\u7528\u5c01\u88dd\u7684\u51fd\u5f0f\u4f86 call api\uff1f"),(0,r.kt)("p",null,"\u8b93 call api \u7684\u6642\u5019\u66f4\u8a9e\u610f\u5316\uff0c\u4e0d\u7528\u592a\u904e\u5728\u4e4e\u7d30\u7bc0\uff0c\u8b93\u5c01\u88dd\u904e\u7684 api function \u4f86\u8655\u7406 call api \u7684\u76f8\u95dc\u7d30\u7bc0\uff0c\n\u7bc4\u4f8b\u5982\u4e0b\uff1a \u5047\u8a2d\u6211\u5011\u4eca\u5929\u60f3\u4e0a\u50b3\u4e00\u500b user \u7684\u8cc7\u8a0a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-jsx"},"// apis/user.js\n\nconst apiUploadUserData = async (userFields) => {\n    const formData = new FormData();\n\n    Object.entries(userFields).forEach(([key, value]) => {\n        uploadForm.append(key, value);\n    });\n\n    await axios({\n        method: 'post',\n        url: '/users',\n        headers: { 'Content-Type': 'multipart/form-data' },\n        data: uploadForm,\n    });\n};\n")),(0,r.kt)("br",null),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-jsx"},"// page/user.jsx\n\nconst User = () => {\n    const [name, setName] = useState();\n    const [email, setEmail] = useState();\n    const [address, setAddress] = useState();\n\n    useEffect(() => {\n        apiUploadUser({ name, email, address })\n            .then(() => {\n                alert('Upload user successfully');\n            })\n            .catch(() => {\n                alert('Upload user failed')\n            });\n    }, []);\n\n    return (...);\n};\n")),(0,r.kt)("p",null,"\u9019\u6a23\u6211\u5011\u5728 Component \u547c\u53eb\u6642\u5c31\u4e0d\u7528\u5beb\u592a\u591a\u908f\u8f2f\u4e86\uff0c\u5c07 api \u8655\u7406\u908f\u8f2f\u7684\u90e8\u4efd\u548c Component \u8655\u7406 UI \u4e92\u52d5\u7684\u90e8\u5206\u5206\u96e2\u958b\u4f86"),(0,r.kt)("br",null),(0,r.kt)("h2",{id:"\u554f\u984c\u55ae\u5143\u6e2c\u8a66\u9700\u507d\u9020-api-response"},"\u554f\u984c\uff1a\u55ae\u5143\u6e2c\u8a66\u9700\u507d\u9020 api response"),(0,r.kt)("p",null,"\u56e0\u70ba\u6211\u5011\u662f\u5728\u505a\u55ae\u5143\u6e2c\u8a66\uff0c\u57fa\u672c\u4e0a\u5e0c\u671b\u8207\u5916\u754c\u7684\u9023\u7d50\u8d8a\u5c11\u8d8a\u597d\uff0c\u624d\u80fd\u78ba\u4fdd\u6bcf\u500b\u5de5\u4f5c\u55ae\u4f4d\u6e2c\u8a66\u7684\u7d50\u679c\u90fd\u80fd\u7dad\u6301\u4e00\u81f4\uff0c\u7db2\u8def\u8acb\u6c42\u5c31\u662f\u5916\u90e8\u56e0\u7d20\u4e4b\u4e00"),(0,r.kt)("p",null,"\u6240\u4ee5\uff0c\u91dd\u5c0d\u5de5\u4f5c\u55ae\u4f4d\u6703\u4f7f\u7528\u5230\u7db2\u8def\u8acb\u6c42\u7684\u90e8\u5206\uff0c\u6211\u5011\u53ef\u4ee5\u4f7f\u7528\u507d\u8cc7\u6599 (mock data)\uff0c\u53bb\u9664\u5916\u90e8\u56e0\u7d20\uff0c\u4f7f\u5f97\u55ae\u5143\u6e2c\u8a66\u80fd\u5920\u5728\u7a69\u5b9a\u7684 api response \u4e0b\u6b63\u78ba\u7684\u986f\u793a\u6e2c\u9a57\u7d50\u679c"),(0,r.kt)("br",null),(0,r.kt)("h2",{id:"3-\u6b65\u9a5f\u4f86-mock-api"},"3 \u6b65\u9a5f\u4f86 mock api"),(0,r.kt)("p",null,"\u5982\u679c\u5c08\u6848\u4e0a\u4f7f\u7528\u5c01\u88dd\u7684 api\uff0c\u901a\u5e38\u6211\u5011\u6703\u5c07\u76f8\u540c\u696d\u52d9\u908f\u8f2f\u7684\u8cc7\u6599\u653e\u5728\u4e00\u8d77\uff0c\u4f8b\u5982\u8ddf user \u6709\u95dc\u7684\u653e\u4e00\u8d77\uff0cproduct \u6709\u95dc\u7684\u653e\u5728\u4e00\u8d77"),(0,r.kt)("p",null,"\u82e5\u5c08\u6848\u4e0a\u5c0d\u61c9\u7684\u5f8c\u7aef\u67b6\u69cb\u662f micro service\uff0c\u53ef\u4ee5\u76f4\u63a5\u4ee5 service \u4f86\u5340\u5206\u5c01\u88dd api \u7684\u8cc7\u6599\u593e\uff0c\u4f8b\u5982\uff1a",(0,r.kt)("inlineCode",{parentName:"p"},"/api/user.js")," \u3001",(0,r.kt)("inlineCode",{parentName:"p"},"/api/product.js")),(0,r.kt)("p",null,"\u5047\u8a2d\u6211\u5011\u5728 ",(0,r.kt)("inlineCode",{parentName:"p"},"/api/user.js")," \u6709 3 \u96bb api"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-jsx"},"export const apiGetUser = async ({ userUuid }) => {\n    await axios({\n        method: 'get',\n        url: '/users',\n        params: { uuid: userUuid },\n    });\n};\n\nexport const apiUploadUserData = async (userFields) => {\n    const formData = new FormData();\n\n    Object.entries(userFields).forEach(([key, value]) => {\n        uploadForm.append(key, value);\n    });\n\n    await axios({\n        method: 'post',\n        url: '/users',\n        headers: { 'Content-Type': 'multipart/form-data' },\n        data: uploadForm,\n    });\n};\n\nexport const apiUpdateUser = async ({\n    userUuid,\n    ...userFields,\n}) => {\n    const formData = new FormData();\n\n    Object.entries(userFields).forEach(([key, value]) => {\n        uploadForm.append(key, value);\n    });\n\n    await axios({\n        method: 'post',\n        url: '/users',\n        params: { uuid: userUuid },\n        headers: { 'Content-Type': 'multipart/form-data' },\n        data: uploadForm,\n    });\n};\n")),(0,r.kt)("p",null,"\u82e5\u6211\u5011\u8981 mock api \u7684 response\uff0c\u6211\u5011\u9700\u8981\u57f7\u884c\u4ee5\u4e0b 3 \u6b65\u9a5f\uff1a"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("strong",{parentName:"li"},"\u5f15\u5165 (Import)"),"\uff1a\u5f15\u5165\u771f\u5be6\u5c01\u88dd api \u7684 function \u7684\u6240\u5728\u6a94\u6848"),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("strong",{parentName:"li"},"\u76e3\u63a7 (Monitor)"),"\uff1a\u7528 ",(0,r.kt)("inlineCode",{parentName:"li"},"jest.mock")," mock \u6574\u500b\u6a94\u6848"),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("strong",{parentName:"li"},"\u507d\u9020 (Mock)"),"\uff1a\u7528 ",(0,r.kt)("inlineCode",{parentName:"li"},".mockResolvedValue")," \u4f86 mock api response")),(0,r.kt)("br",null),(0,r.kt)("h3",{id:"\u5f15\u5165"},"\u5f15\u5165"),(0,r.kt)("p",null,"\u5f15\u5165\u771f\u5be6\u5c01\u88dd api \u7684 function \u7684\u6240\u5728\u6a94\u6848"),(0,r.kt)("br",null),(0,r.kt)("h3",{id:"\u76e3\u63a7"},"\u76e3\u63a7"),(0,r.kt)("p",null,"\u81ea\u52d5 mock\uff0c\u7528 jest.mock mock \u6574\u500b\u6a94\u6848"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-jsx"},"import { apiUploadUser, ... } from '/apis/users';\n\njest.mock('./users');\n")),(0,r.kt)("br",null),(0,r.kt)("p",null,"\u9019\u6642\u5019\uff0c\u88e1\u9762\u7684\u6bcf\u500b\u5c01\u88dd\u7684 api \u90fd\u6703\u88ab\u6539\u5beb\u6210 jest.fn\uff0c\u6211\u5011\u5c31\u53ef\u4ee5\u5229\u7528 jest.fn \u7684\u76f8\u95dc function \u4f86\u5c0d\u5c01\u88dd\u7684 api function \u505a\u76e3\u63a7\uff0c\u5305\u62ec\uff1a"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"\u76e3\u63a7 api function \u547c\u53eb\u6b21\u6578"),(0,r.kt)("li",{parentName:"ul"},"\u76e3\u63a7 api function \u547c\u53eb\u7684\u5e38\u6578"),(0,r.kt)("li",{parentName:"ul"},"\u63a7\u5236 api function \u56de\u50b3\u7684\u8cc7\u6599")),(0,r.kt)("br",null),(0,r.kt)("admonition",{title:"\u624b\u52d5 mock",type:"info"},(0,r.kt)("p",{parentName:"admonition"},"\u5982\u679c\u6211\u5011\u5c01\u88dd\u7684 api \u6709\u4e00\u4e9b\u7279\u5225\u7684\u9700\u6c42\uff0c\u4e0d\u60f3\u8981 jest.mock \u76f4\u63a5\u5e6b\u6211\u5011\u8907\u5beb\u6210 jest.fn\uff0c \u6211\u5011\u53ef\u4ee5\u5728 jest.mock \u50b3\u5165\u7b2c 2 \u500b\u53c3\u6578\uff0c\u8b93\u6211\u5011\u81ea\u5df1 mock \u5c0d\u61c9\u7684 api\uff0c \uff08\u5982\u7576\u6211\u5011\u5c01\u88dd\u7684 api \u662f\u7528 class \u64b0\u5beb\u6642\uff0c\u5c31\u9700\u8981\u81ea\u5df1\u64b0\u5beb)"),(0,r.kt)("pre",{parentName:"admonition"},(0,r.kt)("code",{parentName:"pre",className:"language-jsx"},"import { apiUploadUsers, ... } from './users';\n\njest.mock('./users', () => ({\n    apiGetUser: jest.fn(),\n    apiUploadUser: jest.fn(),\n    apiUpdateUser: jest.fn(),\n}));\n"))),(0,r.kt)("br",null),(0,r.kt)("h3",{id:"\u507d\u9020"},"\u507d\u9020"),(0,r.kt)("p",null,"\u5c0d\u65bc\u5df2\u7d93\u7528 ",(0,r.kt)("inlineCode",{parentName:"p"},"jest.fn")," \u8986\u5beb\u904e\u7684 api function\uff0c\u6211\u5011\u53ef\u4ee5\u7528 ",(0,r.kt)("inlineCode",{parentName:"p"},"mockResolvedValue")," \u4f86\u507d\u9020\u5c0d\u61c9\u7684 api response\uff0c\u9019\u6a23\u7684\u597d\u8655\u662f\uff1a"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"\u6211\u5011\u53ef\u4ee5\u81ea\u5df1\u5ba2\u88fd\u5316\u56de\u50b3\u7d50\u679c\uff0c\u6211\u5011\u53ef\u4ee5\u6839\u64da test case \u56de\u50b3\u4e0d\u540c\u7684\u7d50\u679c"),(0,r.kt)("li",{parentName:"ul"},"\u56de\u50b3\u7684\u6e2c\u8a66\u7d50\u679c\u662f\u7a69\u5b9a\u7684\uff0c\u4e0d\u6703\u96a8\u8457 api \u8b8a\u52d5")),(0,r.kt)("p",null,"\u58de\u8655\u662f\uff1a"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"\u6211\u5011\u9700\u8981\u81ea\u5df1\u7dad\u8b77\u56de\u50b3\u7d50\u679c\uff0c\u7576 api schema \u6709\u66f4\u65b0\u6642\u6211\u5011\u9700\u8981\u81ea\u5df1\u66f4\u65b0")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-jsx"},"describe('Component', () => {\n    test('when under some conditions, should show responded results', () => {\n        apiGetUser.mockResolvedValue({\n            name: 'fake user name',\n            email: 'fake user email',\n            address: 'fake user address',\n        });\n\n        ...\n    });\n\n    test('when under new conditions, should show another results', () => {\n        apiGetUser.mockResolvedValue({\n            name: 'new fake name',\n            email: 'new fake email',\n            address: 'new fake address',\n        });\n\n        ...\n    });\n})\n")),(0,r.kt)("br",null),(0,r.kt)("br",null),(0,r.kt)("admonition",{type:"info"},(0,r.kt)("mdxAdmonitionTitle",{parentName:"admonition"},"\u7576\u53ea\u9700\u8981 mock \u5c11\u6578 api function\uff0c\u7528 ",(0,r.kt)("inlineCode",{parentName:"mdxAdmonitionTitle"},"jest.spyOn")),(0,r.kt)("p",{parentName:"admonition"},"\u7576\u6211\u5011\u5728\u6e2c\u8a66 Component \u6642\uff0c\u6709\u6642\u5019\u53ea\u9700\u8981\u7528\u5230\u6975\u5c11\u6578\u7684 api function\uff0c\u9019\u6642\u5019\uff0c\u6211\u5011\u53ef\u4ee5\u7528 jest.spyOn \u53bb mock \u7279\u5b9a\u7684 api function\uff0c\u4e0d\u7528\u624b\u52d5\u53bb\u8907\u5beb\u6574\u5305 module\uff0c\u7bc4\u4f8b\u5982\u4e0b\uff1a"),(0,r.kt)("pre",{parentName:"admonition"},(0,r.kt)("code",{parentName:"pre",className:"language-jsx"},"import * as userApis from '/apis/users';\n\njest.spyOn(userApis, 'apiGetUser');\n\ndescribe('Component', () => {\n    test('when under some conditions, should show some results', () => {\n        apiGetUser.mockResolvedValue({\n            name: 'fake name',\n            email: 'fake email',\n            address: 'fake address',\n        });\n\n        ...\n    });\n});\n"))),(0,r.kt)("br",null),(0,r.kt)("h2",{id:"\u7d50\u8ad6"},"\u7d50\u8ad6"),(0,r.kt)("p",null,"\u6211\u5011\u5728\u505a\u55ae\u5143\u6e2c\u8a66\uff0c\u4f46\u5de5\u4f5c\u55ae\u4f4d\u6709\u7db2\u8def\u8acb\u6c42\u6642\uff0c\u6211\u5011\u53ef\u4ee5\u5229\u7528 ",(0,r.kt)("inlineCode",{parentName:"p"},"jest.mock")," 3 \u6b65\u9a5f\u5728\u55ae\u5143\u6e2c\u8a66\u4e2d\u507d\u9020 api response\uff0c\u5206\u5225\u662f\uff1a"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"\u5f15\u5165\uff1a\u5f15\u5165\u771f\u5be6 api \u6a94\u6848"),(0,r.kt)("li",{parentName:"ol"},"\u76e3\u63a7\uff1a\u5229\u7528 jest.fn \u6539\u5beb\u539f\u6a94\u6848 function \u4e26\u91cd\u4e2d\u76e3\u63a7"),(0,r.kt)("li",{parentName:"ol"},"\u507d\u9020\uff1a\u7528 mockResolvedValue \u507d\u9020 api response")),(0,r.kt)("p",null,"\u5c31\u53ef\u4ee5\u9806\u5229\u7684\u9054\u6210\u507d\u9020 api \u7684\u76ee\u7684\uff0c\u9806\u5229\u5730\u505a\u55ae\u5143\u6e2c\u8a66"),(0,r.kt)("br",null),(0,r.kt)("h3",{id:"\u53c3\u8003\u6587\u737b"},"\u53c3\u8003\u6587\u737b"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://kentcdodds.com/blog/stop-mocking-fetch"},"Stop mocking fetch")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://dev.to/zaklaughton/the-only-3-steps-you-need-to-mock-an-api-call-in-jest-39mb"},"the-only-3-steps-you-need-to-mock-an-api-call-in-jest-39mb")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://jestjs.io/docs/es6-class-mocks#replacing-the-mock-using-mockimplementation-or-mockimplementationonce"},"ES6 Class Mocks"))),(0,r.kt)("br",null))}m.isMDXComponent=!0}}]);