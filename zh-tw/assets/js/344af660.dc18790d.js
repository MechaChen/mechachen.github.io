"use strict";(self.webpackChunkbenson_doc=self.webpackChunkbenson_doc||[]).push([[1942],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>m});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var c=r.createContext({}),l=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},u=function(e){var t=l(e.components);return r.createElement(c.Provider,{value:t},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},k=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,c=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),p=l(n),k=o,m=p["".concat(c,".").concat(k)]||p[k]||d[k]||a;return n?r.createElement(m,s(s({ref:t},u),{},{components:n})):r.createElement(m,s({ref:t},u))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,s=new Array(a);s[0]=k;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i[p]="string"==typeof e?e:o,s[1]=i;for(var l=2;l<a;l++)s[l]=n[l];return r.createElement.apply(null,s)}return r.createElement.apply(null,n)}k.displayName="MDXCreateElement"},7121:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>s,default:()=>d,frontMatter:()=>a,metadata:()=>i,toc:()=>l});var r=n(7462),o=(n(7294),n(3905));const a={sidebar__label:"[Frontend] 1.3 - \u6e2c\u8a66 custom hook",title:"[Frontend] 1.3 - \u6e2c\u8a66 custom hook"},s=void 0,i={unversionedId:"Testing/frontend-unit-testing-1.3-custom-hook",id:"Testing/frontend-unit-testing-1.3-custom-hook",title:"[Frontend] 1.3 - \u6e2c\u8a66 custom hook",description:"\u554f\u984c",source:"@site/docs/Testing/frontend-unit-testing-1.3-custom-hook.mdx",sourceDirName:"Testing",slug:"/Testing/frontend-unit-testing-1.3-custom-hook",permalink:"/zh-tw/docs/Testing/frontend-unit-testing-1.3-custom-hook",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/Testing/frontend-unit-testing-1.3-custom-hook.mdx",tags:[],version:"current",frontMatter:{sidebar__label:"[Frontend] 1.3 - \u6e2c\u8a66 custom hook",title:"[Frontend] 1.3 - \u6e2c\u8a66 custom hook"},sidebar:"tutorialSidebar",previous:{title:"[Frontend] 1.2 - \u6e2c\u8a66\u547d\u540d\uff06\u67b6\u69cb",permalink:"/zh-tw/docs/Testing/frontend-unit-testing-1.2-naming-and-pattern"},next:{title:"[Frontend] 2.1 - \u8207 Provider \u7684\u6e2c\u8a66",permalink:"/zh-tw/docs/Testing/frontend-unit-testing-2.1-with-provider"}},c={},l=[{value:"\u554f\u984c",id:"\u554f\u984c",level:2},{value:"\u63cf\u8ff0",id:"\u63cf\u8ff0",level:2},{value:"\u7d50\u8ad6",id:"\u7d50\u8ad6",level:2},{value:"\u53c3\u8003\u6587\u737b",id:"\u53c3\u8003\u6587\u737b",level:2}],u={toc:l},p="wrapper";function d(e){let{components:t,...n}=e;return(0,o.kt)(p,(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"\u554f\u984c"},"\u554f\u984c"),(0,o.kt)("admonition",{title:"Testing Custom Hook",type:"info"},(0,o.kt)("p",{parentName:"admonition"},"\u5728 React 16.8 \u5f8c\uff0c\u6211\u5011\u6709\u4e86 custom hook \u9019\u500b\u65b0\u7684\u6982\u5ff5\uff0c\u8981\u5982\u4f55\u6e2c\u8a66\u5462\uff1f")),(0,o.kt)("br",null),(0,o.kt)("h2",{id:"\u63cf\u8ff0"},"\u63cf\u8ff0"),(0,o.kt)("p",null,"\u5728\u65e9\u671f React < v18 \u7684\u6642\u5019\uff0creact-testing-library \u9084\u6c92\u6709\u6e2c\u8a66 customHook \u7684 api\uff0c ",(0,o.kt)("br",null),"\n\u662f\u85c9\u7531 ",(0,o.kt)("a",{parentName:"p",href:"https://react-hooks-testing-library.com/"},"React Hooks Testing Library")," \u4f86\u6e2c\u8a66 customHook"),(0,o.kt)("br",null),(0,o.kt)("p",null,"\u4f46\u662f\u56e0\u70ba React 18 \u6709\u505a\u4e86\u4e00\u4e9b\u8b8a\u66f4\uff0c\u4f7f\u5f97 ",(0,o.kt)("a",{parentName:"p",href:"https://react-hooks-testing-library.com/"},"React Hooks Testing Library")," \u7121\u6cd5\u4f7f\u7528\uff0c ",(0,o.kt)("br",null),"\n\u53cd\u800c\u662f\u5c07 solution \u6574\u5408\u5230 react-testing-library \u4e86 (see ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/testing-library/react-hooks-testing-library#details"},"issue")," )\uff0c ",(0,o.kt)("br",null),"\n\u56e0\u6b64\uff0c\u6211\u5011\u53ef\u4ee5\u76f4\u63a5\u4f7f\u7528 React testing library \u7684 ",(0,o.kt)("inlineCode",{parentName:"p"},"renderHook")," api \u4f86\u505a\u6e2c\u8a66\uff0c\u5169\u8005\u7684\u7528\u6cd5\u4e00\u6a21\u4e00\u6a23"),(0,o.kt)("br",null),(0,o.kt)("p",null,"\u7528\u6cd5\u6703\u985e\u4f3c\u65bc ",(0,o.kt)("inlineCode",{parentName:"p"},"useRef"),"\uff0c\u7d50\u679c\u6703\u5b58\u5728 ",(0,o.kt)("inlineCode",{parentName:"p"},".current")," \u7684\u5c6c\u6027\u88e1"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-jsx"},"// production code\n\nconst useUserLocations = () => {\n    const [userLocations, setUserLocations] = useState();\n\n    useEffect(() => {\n        setUserLocations(['America', 'French']);\n    }, []);\n    \n    return userLocations;\n};\n")),(0,o.kt)("br",null),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-jsx"},"// Testing code\n\ndescribe('userLocations', () => {\n    test('by default, should return an array containing users locations', () => {\n        // Act\n        const { result } = renderHook(useFetchUserLocation);\n\n        // Assert\n        expect(result.current).toEqual(['America', 'French']);\n    });\n});\n")),(0,o.kt)("br",null),(0,o.kt)("br",null),(0,o.kt)("h1",{id:"\u6e2c\u8a66\u6709\u8d77\u59cb-props-\u7684-customhook"},"\u6e2c\u8a66\u6709\u8d77\u59cb props \u7684 customHook"),(0,o.kt)("p",null,"\u5728 ",(0,o.kt)("inlineCode",{parentName:"p"},"renderHook")," api \uff0c\u6211\u5011\u53ef\u4ee5\u50b3\u5165\u7b2c\u4e8c\u500b\u53c3\u6578\uff0c\n\u7b2c\u4e8c\u500b\u53c3\u6578\u662f\u4e00\u500b object\uff0c\u50b3\u5165\u4e00\u4e9b\u57fa\u672c\u7684\u8a2d\u5b9a\uff0c\n\u50cf\u662f ",(0,o.kt)("inlineCode",{parentName:"p"},"initialProps")," \u5c31\u53ef\u4ee5\u5728\u6b64\u5e36\u5165"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-jsx"},"// production code\n\nconst useUserLocations = (props) => {\n    const [userLocations, setUserLocations] = useState(props.userLocations);\n    return userLocations;\n};\n")),(0,o.kt)("br",null),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-jsx"},"// Testing code\n\ndescribe('userLocations', () => {\n  test('by default, should return an array containing users locations', () => {\n    // Arrange\n    const userLocations = ['America', 'French'];\n\n    // Act\n    const { result } = renderHook(useFetchUserLocation, {\n      initialProps: { userLocations },\n    });\n\n    // Assert\n    expect(result.current).toEqual(['America', 'French']);\n  });\n});\n")),(0,o.kt)("br",null),(0,o.kt)("h2",{id:"\u7d50\u8ad6"},"\u7d50\u8ad6"),(0,o.kt)("p",null,"\u6211\u5011\u53ef\u4ee5\u76f4\u63a5\u7528 React Testing library \u7684 ",(0,o.kt)("inlineCode",{parentName:"p"},"renderHook")," api \u4f86\u505a\u6e2c\u8a66\uff0c ",(0,o.kt)("br",null),"\n\u5176\u652f\u63f4\u6240\u6709 React \u7684\u7248\u672c\uff0c\u5373\u4f7f\u662f React v18"),(0,o.kt)("br",null),(0,o.kt)("h2",{id:"\u53c3\u8003\u6587\u737b"},"\u53c3\u8003\u6587\u737b"),(0,o.kt)("blockquote",null,(0,o.kt)("ul",{parentName:"blockquote"},(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://testing-library.com/docs/react-testing-library/api/#renderhook"},"Testing Library - renderHook")))))}d.isMDXComponent=!0}}]);