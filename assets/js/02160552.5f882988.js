"use strict";(self.webpackChunkbenson_doc=self.webpackChunkbenson_doc||[]).push([[2419],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>k});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var u=r.createContext({}),i=function(e){var t=r.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},c=function(e){var t=i(e.components);return r.createElement(u.Provider,{value:t},e.children)},p="mdxType",f={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,l=e.originalType,u=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),p=i(n),d=o,k=p["".concat(u,".").concat(d)]||p[d]||f[d]||l;return n?r.createElement(k,a(a({ref:t},c),{},{components:n})):r.createElement(k,a({ref:t},c))}));function k(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var l=n.length,a=new Array(l);a[0]=d;var s={};for(var u in t)hasOwnProperty.call(t,u)&&(s[u]=t[u]);s.originalType=e,s[p]="string"==typeof e?e:o,a[1]=s;for(var i=2;i<l;i++)a[i]=n[i];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},3211:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>u,contentTitle:()=>a,default:()=>f,frontMatter:()=>l,metadata:()=>s,toc:()=>i});var r=n(7462),o=(n(7294),n(3905));const l={sidebar__label:"[React] useLayoutEffect",title:"[React] useLayoutEffect"},a=void 0,s={unversionedId:"Code/useLayoutEffect",id:"Code/useLayoutEffect",title:"[React] useLayoutEffect",description:"\u6700\u8fd1\u5728\u5de5\u4f5c\u6642\uff0c\u525b\u597d\u5728\u7814\u7a76\u4e00\u4e9b\u6e32\u67d3\u5c3a\u5bf8\u76f8\u95dc\u7684\u554f\u984c\uff0c\u5c31\u807d\u8aaa\u904e useLayoutEffect \u9019\u500b hook\uff0c",source:"@site/docs/Code/useLayoutEffect.mdx",sourceDirName:"Code",slug:"/Code/useLayoutEffect",permalink:"/docs/Code/useLayoutEffect",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/Code/useLayoutEffect.mdx",tags:[],version:"current",lastUpdatedAt:1668274042,formattedLastUpdatedAt:"Nov 12, 2022",frontMatter:{sidebar__label:"[React] useLayoutEffect",title:"[React] useLayoutEffect"},sidebar:"tutorialSidebar",previous:{title:"[LeetCode] Lv.4 \u8a08\u756b",permalink:"/docs/Code/leetcode-lv4"},next:{title:"[Catelog] \u7db2\u8def\u5e38\u8b58\u55ae\u5143\u76ee\u9304",permalink:"/docs/Network/catelog"}},u={},i=[{value:"\u9047\u5230\u7684\u60c5\u5883 &amp; \u554f\u984c",id:"\u9047\u5230\u7684\u60c5\u5883--\u554f\u984c",level:2},{value:"\u60c5\u5883",id:"\u60c5\u5883",level:3},{value:"\u554f\u984c",id:"\u554f\u984c",level:3},{value:"<code>useLayoutEffect</code> \u600e\u9ebc\u89e3\u6c7a\u554f\u984c",id:"uselayouteffect-\u600e\u9ebc\u89e3\u6c7a\u554f\u984c",level:2},{value:"<code>useLayoutEffect</code> \u7684\u7f3a\u9ede",id:"uselayouteffect-\u7684\u7f3a\u9ede",level:2},{value:"\u7a0b\u5f0f\u78bc",id:"\u7a0b\u5f0f\u78bc",level:3}],c={toc:i},p="wrapper";function f(e){let{components:t,...n}=e;return(0,o.kt)(p,(0,r.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("admonition",{title:"\u70ba\u4ec0\u9ebc\u5beb\u9019\u7bc7\u6587\u7ae0",type:"note"},(0,o.kt)("p",{parentName:"admonition"},"  \u6700\u8fd1\u5728\u5de5\u4f5c\u6642\uff0c\u525b\u597d\u5728\u7814\u7a76\u4e00\u4e9b\u6e32\u67d3\u5c3a\u5bf8\u76f8\u95dc\u7684\u554f\u984c\uff0c\u5c31\u807d\u8aaa\u904e ",(0,o.kt)("inlineCode",{parentName:"p"},"useLayoutEffect")," \u9019\u500b hook\uff0c ",(0,o.kt)("br",null),"\n\u7136\u5f8c\u6700\u8fd1\u5728\u5e6b senior \u5be9 PR \u6642\uff0c\u770b\u5b8c\u5f8c\u89ba\u5f97\u53ef\u4ee5\u7528\u9019 hook \u89e3\u6c7a code \u4e0a\u9762\u7684\u4e00\u4e9b\u554f\u984c\uff0c",(0,o.kt)("br",null),"\n\u4ecb\u7d39\u7d66 senior \u5f8c\uff0c\u4ed6\u8aaa\u5f88\u6709\u5e6b\u52a9\uff0c\u8b93\u6211\u89ba\u5f97\u5f88\u611f\u52d5\ud83e\udd7a\ud83e\udd7a\uff0c\u6211\u4e5f\u80fd\u505a\u51fa\u4e00\u9ede\u8ca2\u737b\uff0c\u56e0\u6b64\u6c7a\u5b9a\u4f86\u7d00\u5ff5\u4e00\u4e0b",(0,o.kt)("br",null))),(0,o.kt)("h2",{id:"\u9047\u5230\u7684\u60c5\u5883--\u554f\u984c"},"\u9047\u5230\u7684\u60c5\u5883 & \u554f\u984c"),(0,o.kt)("h3",{id:"\u60c5\u5883"},"\u60c5\u5883"),(0,o.kt)("p",null,"\u60f3\u50cf\u7576\u6211\u5011\u5728\u73a9\u9700\u8981\u95d6\u95dc\u7684\u904a\u6232\uff0c\u7576\u6211\u5011\u5728\u95dc\u5361\u4e2d\uff0c",(0,o.kt)("br",null),"\n\u904a\u6232\u6703\u5e6b\u6211\u5011\u4fdd\u5b58\u7d00\u9304\uff0c\u518d\u6b21\u767b\u5165\u6642\uff0c\u904a\u6232\u6703\u5e6b\u6211\u5011\u9032\u5165\u5230\u4e0a\u6b21\u9032\u5ea6\uff0c",(0,o.kt)("br",null),"\n\u7576\u6211\u5011\u4e0a\u6b21\u5df2\u7d93\u95d6\u95dc\u6210\u529f\uff0c\u518d\u6b21\u767b\u5165\u6703\u5e36\u6211\u5011\u5230\u95dc\u5361\u9078\u64c7\u756b\u9762\uff0c",(0,o.kt)("br",null)),(0,o.kt)("p",null,"\u9019\u6642\uff0c\u6211\u5011\u8a2d\u8a08\u767b\u5165\u904a\u6232\u7684\u7a0b\u5f0f\u78bc\u6642\uff0c\u9700\u8981\uff1a",(0,o.kt)("br",null)),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"user \u767b\u5165\u6642\uff0c\u5617\u8a66\u53d6\u5f97\u4e0a\u6b21\u904a\u6232\u7d00\u9304\uff0c\u4e26\u986f\u793a\u8f09\u5165\u756b\u9762"),(0,o.kt)("li",{parentName:"ul"},"\u6210\u529f\u53d6\u5f97\u7d00\u9304\u5f8c\uff0c\u5c0e\u5230\u73fe\u5728\u7684\u904a\u6232\u9032\u5ea6\u9801\u9762"),(0,o.kt)("li",{parentName:"ul"},"\u6c92\u6709\u7d00\u9304\u6642\uff0c\u986f\u793a\u4e3b\u756b\u9762")),(0,o.kt)("p",null,"\u7a0b\u5f0f\u78bc\u5982\u4e0b\uff1a"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-jsx"},"// mock get game level progress api\nconst getGameLevelProgressSuccess = () => {\n  return new Promise((resolve) => {\n    setTimeout(() => {\n      resolve()\n    }, 3000);\n  });\n}\n\nconst Game = function Game() {\n  const router = useRouter(); // we use next/router to redirect\n\n  const [isLoading, setIsLoading] = useState(false);\n\n  const enterGameLevelProgress = async () => {\n    setIsLoading(true);\n\n    try {\n      await getGameLevelProgressSuccess();\n      // because next router.replace is a promise,\n      // we should await it to avoid redirect be called after finally block\n      // and it will show a blink of Game level map content\n      await router.replace('/level5');\n    } catch (err) {\n      // do nothing for now\n    } finally {\n      setIsLoading(false);\n    }\n  }\n\n  useEffect(() => {\n    // some synchronous calculation\n    calFib(40);\n    enterGameLevelProgress();\n  }, []);\n\n  return (\n    <div className={styles.container}>\n      {isLoading\n        ? <div>Loading...</div>\n        : <h1>This is all Game Level map</h1>\n      }\n    </div>\n  );\n};\n")),(0,o.kt)("br",null),"\u4e0a\u9762\u7a0b\u5f0f\u78bc\u7d50\u679c\u5982\u4e0b\uff1a",(0,o.kt)("br",null),(0,o.kt)("br",null),(0,o.kt)("br",null),(0,o.kt)("div",{style:{display:"flex",justifyContent:"center"}},(0,o.kt)("video",{width:"800",controls:!0},(0,o.kt)("source",{src:"/videos/withoutUseLayoutEffect.mp4",type:"video/mp4"}),"Your browser not support video tag")),(0,o.kt)("br",null),(0,o.kt)("h3",{id:"\u554f\u984c"},"\u554f\u984c"),(0,o.kt)("p",null,"\u5728\u958b\u59cb\u8f09\u5165\u756b\u9762\u6642\uff0c\u6703\u5148\u77ac\u9593\u986f\u793a This is all Game Level map\uff0c\u624d\u986f\u793a Loading \u5b57\u6a23\uff0c",(0,o.kt)("br",null),"\n\u770b\u8d77\u4f86\u5c31\u50cf\u662f\u9583\u983b\u4e00\u6a23\uff0c\u9019\u4e0d\u662f\u6211\u5011\u60f3\u8981\u7684\u6548\u679c\uff01\uff01\uff01"),(0,o.kt)("p",null,"\u9019\u662f\u56e0\u70ba ",(0,o.kt)("inlineCode",{parentName:"p"},"useEffect")," \u6703\u5728 virtual DOM \u6e32\u67d3\u5230\u756b\u9762\u4e0a\u5f8c\u624d\u89f8\u767c\uff0c",(0,o.kt)("br",null),"\n\u6240\u4ee5\u4e00\u958b\u59cb\u6703\u5148\u986f\u793a isLoading === false \u7684\u72c0\u614b\uff0c",(0,o.kt)("br",null),"\n\u5f8c\u7e8c\u5728 ",(0,o.kt)("inlineCode",{parentName:"p"},"useEffect")," \u555f\u52d5\u6703\u624d\u6703\u6539\u6210 isLoading === true \u7684\u72c0\u614b",(0,o.kt)("br",null),(0,o.kt)("br",null),(0,o.kt)("br",null)),(0,o.kt)("h2",{id:"uselayouteffect-\u600e\u9ebc\u89e3\u6c7a\u554f\u984c"},(0,o.kt)("inlineCode",{parentName:"h2"},"useLayoutEffect")," \u600e\u9ebc\u89e3\u6c7a\u554f\u984c"),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"useLayoutEffect")," \u6703\u5728\u6e32\u67d3\u5230 browser \u524d\u5c31\u5148\u57f7\u884c\uff0c\u5c31\u53ef\u4ee5\u907f\u514d\u9019\u500b\u554f\u984c\uff0c\u5982\u4e0b\u5716",(0,o.kt)("br",null)),(0,o.kt)("div",{style:{display:"flex",justifyContent:"center"}},(0,o.kt)("figure",{style:{display:"flex",flexFlow:"column",alignItems:"center"}},(0,o.kt)("img",{width:"300",src:"/img/hook-flow.png",alt:"hook flow image"}),(0,o.kt)("figcaption",{style:{paddingTop:"20px"}},(0,o.kt)("a",{href:"https://github.com/donavon/hook-flow",taget:"_blank",style:{fontSize:"12px"}},"https://github.com/donavon/hook-flow")))),(0,o.kt)("p",null,"\u4ee5\u4e0b\u662f\u6539\u5beb\u7684\u7a0b\u5f0f\u78bc\uff1a"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-jsx"},"// this will be executed before paint to the DOM\nuseLayoutEffect(() => {\n  calFib(40);\n  enterGameLevelProgress();\n}, []);\n")),(0,o.kt)("br",null),"\u57f7\u884c\u7684\u7d50\u679c\uff1a",(0,o.kt)("br",null),(0,o.kt)("br",null),(0,o.kt)("div",{style:{display:"flex",justifyContent:"center"}},(0,o.kt)("video",{width:"800",controls:!0},(0,o.kt)("source",{src:"/videos/useLayoutEffect.mp4",type:"video/mp4"}),"Your browser not support video tag")),(0,o.kt)("br",null),(0,o.kt)("br",null),(0,o.kt)("h2",{id:"uselayouteffect-\u7684\u7f3a\u9ede"},(0,o.kt)("inlineCode",{parentName:"h2"},"useLayoutEffect")," \u7684\u7f3a\u9ede"),(0,o.kt)("p",null,"\u96d6\u7136\u9019\u500b hook \u6709\u8457\u975e\u5e38\u68d2\u7684\u512a\u9ede\uff0c\u53ef\u4ee5\u8b93\u6211\u5011\u5728\u756b\u9762\u6e32\u67d3\u524d\u5c31\u8655\u7406\u597d\u8cc7\u8a0a\u4e26\u540c\u6642\u6e32\u67d3\uff0c",(0,o.kt)("br",null),"\n\u4f46\u662f\u9047\u5230\u5927\u91cf\u7684\u8a08\u7b97\u6642\uff0c\u6574\u500b\u756b\u9762\u5c31\u6703\u5361\u4f4f\uff0c",(0,o.kt)("br",null),"\n\u4f8b\u5982\u6211\u5011\u628a ",(0,o.kt)("inlineCode",{parentName:"p"},"useLayoutEffect")," \u7684\u8a08\u7b97\u91cf\u52a0\u5927"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-jsx"},"useLayoutEffect(() => {\n  // massive calculation by 42 fibonacci number\n  calFib(42);\n  enterGameLevelProgress();\n}, []);\n")),(0,o.kt)("br",null),(0,o.kt)("p",null,"\u756b\u9762\u4e00\u958b\u59cb\u5c31\u6703\u5361\u4f4f\u4e00\u9663\u5b50\uff0c\u8a08\u7b97\u5b8c ",(0,o.kt)("inlineCode",{parentName:"p"},"calFib(42)")," \u5f8c\u624d\u6703\u958b\u59cb\u9032\u5165 loading \u756b\u9762\uff0c",(0,o.kt)("br",null),"\n\u756b\u9762\u5982\u4e0b\uff1a",(0,o.kt)("br",null),(0,o.kt)("br",null)),(0,o.kt)("div",{style:{display:"flex",justifyContent:"center"}},(0,o.kt)("video",{width:"800",controls:!0},(0,o.kt)("source",{src:"/videos/useLayoutEffectFlaw.mp4",type:"video/mp4"}),"Your browser not support video tag")),(0,o.kt)("br",null),"\u6b64\u6642\u6211\u5011\u7684\u756b\u9762\u6703\u6574\u500b\u5361\u4f4f\uff0c\u9023\u6309\u9215\u90fd\u4e0d\u80fd\u9ede\u64ca\u4e86\ud83d\ude31\ud83d\ude31\uff0c",(0,o.kt)("br",null),"\u9019\u4e5f\u662f\u70ba\u4ec0\u9ebc React \u5b98\u65b9\u4e0d\u63a8\u85a6\u6211\u5011\u4f7f\u7528\u7684\u539f\u56e0 (",(0,o.kt)("a",{hreef:"https://reactjs.org/docs/hooks-reference.html#uselayouteffect",target:"_blank"},"useLayoutEffect"),")",(0,o.kt)("br",null),(0,o.kt)("br",null),(0,o.kt)("br",null),(0,o.kt)("h3",{id:"\u7a0b\u5f0f\u78bc"},"\u7a0b\u5f0f\u78bc"),(0,o.kt)("p",null,"\u5982\u679c\u6709\u8208\u8da3\u53ef\u4ee5\u5230\u7dda\u4e0a\u7de8\u8f2f\u5668\u4f86\u73a9\u4e00\u4e0b\uff1a",(0,o.kt)("a",{parentName:"p",href:"https://stackblitz.com/edit/nextjs-y3ruoh?file=pages%2Findex.js,pages%2Flevel5.js,pages%2F_app.js"},"https://stackblitz.com/edit/nextjs-y3ruoh?file=pages%2Findex.js,pages%2Flevel5.js,pages%2F_app.js")),(0,o.kt)("br",null),(0,o.kt)("br",null),(0,o.kt)("admonition",{title:"\u53c3\u8003\u6587\u4ef6",type:"note"},(0,o.kt)("ul",{parentName:"admonition"},(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://medium.com/hannah-lin/react-hook-%E7%AD%86%E8%A8%98-uselayouteffect-30c93301a618"},"https://medium.com/hannah-lin/react-hook-%E7%AD%86%E8%A8%98-uselayouteffect-30c93301a618")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://reactjs.org/docs/hooks-reference.html#uselayouteffect"},"https://reactjs.org/docs/hooks-reference.html#uselayouteffect")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://www.youtube.com/watch?v=wU57kvYOxT4&t=10s"},"https://www.youtube.com/watch?v=wU57kvYOxT4&t=10s")))))}f.isMDXComponent=!0}}]);