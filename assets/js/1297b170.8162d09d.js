"use strict";(self.webpackChunkbenson_doc=self.webpackChunkbenson_doc||[]).push([[4911],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>g});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var p=a.createContext({}),s=function(e){var t=a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},d=function(e){var t=s(e.components);return a.createElement(p.Provider,{value:t},e.children)},c="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,l=e.originalType,p=e.parentName,d=o(e,["components","mdxType","originalType","parentName"]),c=s(n),u=r,g=c["".concat(p,".").concat(u)]||c[u]||m[u]||l;return n?a.createElement(g,i(i({ref:t},d),{},{components:n})):a.createElement(g,i({ref:t},d))}));function g(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=n.length,i=new Array(l);i[0]=u;var o={};for(var p in t)hasOwnProperty.call(t,p)&&(o[p]=t[p]);o.originalType=e,o[c]="string"==typeof e?e:r,i[1]=o;for(var s=2;s<l;s++)i[s]=n[s];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},5328:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>i,default:()=>m,frontMatter:()=>l,metadata:()=>o,toc:()=>s});var a=n(7462),r=(n(7294),n(3905));const l={sidebar_position:1,sidebar_label:"[Browser] The relationship between Page Life Cycle & Critical Rendering Path",title:"[Browser] The relationship between Page Life Cycle & Critical Rendering Path",tags:["Critical Rendering Path","Browser"]},i=void 0,o={unversionedId:"Plan/page-life-cycle",id:"Plan/page-life-cycle",title:"[Browser] The relationship between Page Life Cycle & Critical Rendering Path",description:"Background",source:"@site/docs/Plan/page-life-cycle.mdx",sourceDirName:"Plan",slug:"/Plan/page-life-cycle",permalink:"/docs/Plan/page-life-cycle",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/Plan/page-life-cycle.mdx",tags:[{label:"Critical Rendering Path",permalink:"/docs/tags/critical-rendering-path"},{label:"Browser",permalink:"/docs/tags/browser"}],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1,sidebar_label:"[Browser] The relationship between Page Life Cycle & Critical Rendering Path",title:"[Browser] The relationship between Page Life Cycle & Critical Rendering Path",tags:["Critical Rendering Path","Browser"]},sidebar:"tutorialSidebar",previous:{title:"[Catelog] \u5be6\u4f5c library \u76ee\u9304",permalink:"/docs/Plan/implementation-catlog"},next:{title:"[Design Pattern] \u6211\u5011\u70ba\u4ec0\u9ebc\u8981 Design patterns\uff1f",permalink:"/docs/Plan/why-we-need-design-patterns"}},p={},s=[{value:"Background",id:"background",level:2},{value:"Critical Rendering Path",id:"critical-rendering-path",level:2},{value:"Page Life Cycle",id:"page-life-cycle",level:2},{value:"Critical Rendering Path &amp; Page Life Cycle",id:"critical-rendering-path--page-life-cycle",level:2},{value:"Summary",id:"summary",level:2},{value:"References",id:"references",level:3}],d={toc:s},c="wrapper";function m(e){let{components:t,...n}=e;return(0,r.kt)(c,(0,a.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"background"},"Background"),(0,r.kt)("p",null,"Since knowledge of the browser's lifecycle and processes is scattered, especially in the Page Life Cycle and Critical Rendering Path, I decided to organize the information to clarify the entire timeline of these two processes."),(0,r.kt)("br",null),(0,r.kt)("h2",{id:"critical-rendering-path"},"Critical Rendering Path"),(0,r.kt)("img",{src:"/img/critical-rendering-path.jpg",alt:"Critical Rendering Path",width:"70%"}),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"1. Construction of the DOM Tree")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"The browser parses the HTML line by line to construct the DOM Tree."),(0,r.kt)("li",{parentName:"ul"},"If JavaScript modifies the DOM, it affects the final structure of the DOM Tree.")),(0,r.kt)("br",null),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"2. Construction of the CSSOM Tree")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"When encountering ",(0,r.kt)("inlineCode",{parentName:"li"},"<link>")," or ",(0,r.kt)("inlineCode",{parentName:"li"},"<style>"),", the browser begins downloading and parsing CSS files to construct the CSSOM Tree."),(0,r.kt)("li",{parentName:"ul"},"The construction of the CSSOM Tree and DOM Tree happens in parallel.")),(0,r.kt)("br",null),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"3. Construction of the Render Tree")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Combining DOM Tree and CSSOM Tree:"),(0,r.kt)("li",{parentName:"ul"},"The browser combines both to generate the Render Tree, which only contains visible elements needed for rendering.")),(0,r.kt)("p",null,"Note:\nIf the CSSOM Tree is not yet complete, the construction of the Render Tree will be blocked."),(0,r.kt)("br",null),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"4. Layout")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"The browser calculates the position and size of each element based on the Render Tree, like drawing a building block on the web page.")),(0,r.kt)("br",null),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"5. Paint")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Painting the content and styles (e.g. color, font style) of the elements onto each building block of the layout.")),(0,r.kt)("br",null),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"6. Composite")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"The browser composites the painted layers to display the final webpage, similar to concepts in Photoshop and Illustrator where overlapping layers combine to form a complete picture.")),(0,r.kt)("br",null),(0,r.kt)("h2",{id:"page-life-cycle"},"Page Life Cycle"),(0,r.kt)("p",null,"The Page Life Cycle represents the series of phases a webpage undergoes from its initial loading in the browser to its eventual closure. Each stage in this cycle triggers specific events, enabling developers to interact with the page during its different states."),(0,r.kt)("p",null,"We can see all these events in the following example:\xa0"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-html"},"<script>\n  log('initial readyState:' + document.readyState);\n\n  document.addEventListener('readystatechange', () => log('readyState:' + document.readyState));\n  document.addEventListener('DOMContentLoaded', () => log('DOMContentLoaded'));\n\n  window.onload = () => log('window onload');\n<\/script>\n\n<iframe src=\"iframe.html\" onload=\"log('iframe onload')\"></iframe>\n\n<img src=\"https://en.js.cx/clipart/train.gif\" id=\"img\">\n<script>\n  img.onload = () => log('img onload');\n\n  window.addEventListener(\"beforeunload\", function() {\n    console.log('beforeunload');\n  });\n\n  window.addEventListener(\"unload\", function() {\n    console.log('unload');\n  });\n<\/script>\n\n// [1] initial readyState:loading\n// [2] readyState:interactive\n// [2] DOMContentLoaded\n// [3] iframe onload\n// [4] img onload\n// [4] readyState:complete\n// [4] window onload\n// [5] beforeunload\n// [6] unload\n")),(0,r.kt)("br",null),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"1. ",(0,r.kt)("inlineCode",{parentName:"strong"},"document.readyState: loading"))),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"Initial Stage"),": When the browser receives the first byte of the HTML response, document.readyState is immediately set to loading.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"Parsing Process"),":"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"The browser begins parsing the HTML and incrementally builds the DOM Tree.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"When encountering external resources (like CSS and JavaScript), the browser sends requests to download these resources.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"If a JavaScript file is encountered, it might pause the parsing of the DOM Tree, depending on the script's loading mode (normal, defer, or async)."))))),(0,r.kt)("br",null),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"2. ",(0,r.kt)("inlineCode",{parentName:"strong"},"document.readyState: interactive (DOM Content Loaded)"))),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"Completion of DOM Tree Construction"),":"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"When the HTML parsing is fully complete, readyState changes to interactive."))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"Triggering the DOMContentLoaded Event"),":"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"At this point, the DOM structure is available, and developers can start interacting with it.")))),(0,r.kt)("br",null),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"3. ",(0,r.kt)("inlineCode",{parentName:"strong"},"DOMContentLoaded"))),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Basically, it means the same as ",(0,r.kt)("inlineCode",{parentName:"li"},"document.readyState: interactive"),"."),(0,r.kt)("li",{parentName:"ul"},"But it is triggered after ",(0,r.kt)("inlineCode",{parentName:"li"},"document.readyState: interactive"),".")),(0,r.kt)("br",null),(0,r.kt)("admonition",{type:"note"},(0,r.kt)("p",{parentName:"admonition"},"At this stage, not all resources, such as images and iframes, may be fully loaded.")),(0,r.kt)("br",null),(0,r.kt)("br",null),(0,r.kt)("br",null),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"3. ",(0,r.kt)("inlineCode",{parentName:"strong"},"document.readyState: complete"))),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"Completion of All Resource Loading"),":"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"When all resources on the page (including images, CSS, iframes, etc.) are fully loaded, document.readyState changes to complete."))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"Triggering the load Event"),":"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"This indicates that the page has fully loaded.")))),(0,r.kt)("br",null),(0,r.kt)("ol",{start:4},(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"p"},"window.onload"),":"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Fired after readyState: complete, usually used to execute code that depends on all resources being loaded."))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"p"},"window.onbeforeunload"),":"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Used to prompt the user to confirm before leaving the page (e.g., when form data is unsaved)."))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"p"},"window.onunload"),":"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Fired when the page is about to unload, typically used to clean up resources.")))),(0,r.kt)("br",null),(0,r.kt)("h2",{id:"critical-rendering-path--page-life-cycle"},"Critical Rendering Path & Page Life Cycle"),(0,r.kt)("p",null,"Following is the relationship and timeline between the Page Life Cycle and Critical Rendering Path."),(0,r.kt)("img",{src:"/img/page-life-cycle-with-critical-rendering-path.jpg",alt:"Page Life Cycle with Critical Rendering Path",width:"100%"}),(0,r.kt)("p",null,"Here are some key overlaps:"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("strong",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"strong"},"document.readyState: loading")," & Parsing HTML"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"When the new window is opened, document.readyState is immediately set to loading, and then the browser receives the first byte of the HTML response.")))),(0,r.kt)("br",null),(0,r.kt)("ol",{start:2},(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("strong",{parentName:"li"},"DOM tree construction")," & ",(0,r.kt)("strong",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"strong"},"document.readyState: interactive"),", ",(0,r.kt)("inlineCode",{parentName:"strong"},"DOMContentLoaded")),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"After the DOM tree construction is complete, ",(0,r.kt)("inlineCode",{parentName:"li"},"document.readyState: interactive")," is triggered, then the ",(0,r.kt)("inlineCode",{parentName:"li"},"DOMContentLoaded"),", these 2 events both represent the completion of the DOM tree construction completion.")))),(0,r.kt)("br",null),(0,r.kt)("ol",{start:3},(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("strong",{parentName:"li"},"Composite phase")," & ",(0,r.kt)("strong",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"strong"},"document.readyState: complete"),", ",(0,r.kt)("inlineCode",{parentName:"strong"},"window.onload")),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"After the Composite phase is complete, and the web page is fully rendered, ",(0,r.kt)("inlineCode",{parentName:"li"},"document.readyState: complete")," will be triggered, then the ",(0,r.kt)("inlineCode",{parentName:"li"},"window.onload"),", these 2 events both represent the completion of the Composite phase.")))),(0,r.kt)("br",null),(0,r.kt)("br",null),(0,r.kt)("h2",{id:"summary"},"Summary"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"Page Life Cycle"),": Represents each stage of the web page, each stage of the Page life cycle will trigger the corresponding event.")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"Critical Rendering Path"),": Represents how the browser renders the page.")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"Page Life Cycle & Critical Rendering Path overlaps"),":"),(0,r.kt)("ol",{parentName:"li"},(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("strong",{parentName:"li"},"Start"),": when new window is opened, ",(0,r.kt)("strong",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"strong"},"document.readyState: loading")," is triggered, then starts parsing HTML")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("strong",{parentName:"li"},"DOM finished"),": after DOM tree construction is complete, ",(0,r.kt)("strong",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"strong"},"document.readyState: interactive")," is triggered, then ",(0,r.kt)("inlineCode",{parentName:"strong"},"DOMContentLoaded"))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("strong",{parentName:"li"},"Render finished"),": after Composite phase is complete, ",(0,r.kt)("strong",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"strong"},"document.readyState: complete")," is triggered, then ",(0,r.kt)("inlineCode",{parentName:"strong"},"window.onload")))))),(0,r.kt)("br",null),(0,r.kt)("br",null),(0,r.kt)("h3",{id:"references"},"References"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://web.dev/learn/performance/understanding-the-critical-path"},"Understanding the Critical Path")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://javascript.info/onload-ondomcontentloaded"},"onload vs onDOMContentLoaded")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://html.spec.whatwg.org/multipage/scripting.html"},"HTML Scripting")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://www.explainthis.io/zh-hant/swe/fe-DOMContentLoaded-load-beforeunload-unload-difference"},"DOMContentLoaded vs load vs beforeunload vs unload"))),(0,r.kt)("br",null),(0,r.kt)("br",null),(0,r.kt)("br",null))}m.isMDXComponent=!0}}]);