(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[5825],{3905:function(e,t,r){"use strict";r.d(t,{Zo:function(){return u},kt:function(){return d}});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var c=n.createContext({}),s=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},u=function(e){var t=s(e.components);return n.createElement(c.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,c=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),m=s(r),d=a,f=m["".concat(c,".").concat(d)]||m[d]||p[d]||o;return r?n.createElement(f,i(i({ref:t},u),{},{components:r})):n.createElement(f,i({ref:t},u))}));function d(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,i=new Array(o);i[0]=m;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:a,i[1]=l;for(var s=2;s<o;s++)i[s]=r[s];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},2176:function(e,t,r){"use strict";r.r(t),r.d(t,{frontMatter:function(){return l},contentTitle:function(){return c},metadata:function(){return s},toc:function(){return u},default:function(){return m}});var n=r(4034),a=r(9973),o=(r(7294),r(3905)),i=["components"],l={},c="Overview",s={unversionedId:"Programming/Design Pattern/Patterns/Facade/Overview",id:"Programming/Design Pattern/Patterns/Facade/Overview",isDocsHomePage:!1,title:"Overview",description:"Motivation",source:"@site/docs/Programming/Design Pattern/Patterns/Facade/Overview.md",sourceDirName:"Programming/Design Pattern/Patterns/Facade",slug:"/Programming/Design Pattern/Patterns/Facade/Overview",permalink:"/docs/Programming/Design Pattern/Patterns/Facade/Overview",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Facade",permalink:"/docs/Programming/Design Pattern/Patterns/Facade/Go"},next:{title:"Go Factory Pattern",permalink:"/docs/Programming/Design Pattern/Patterns/Factory/Go"}},u=[{value:"Motivation",id:"motivation",children:[],level:2},{value:"Goals",id:"goals",children:[],level:2},{value:"Facade Patterns",id:"facade-patterns",children:[],level:2},{value:"References",id:"references",children:[],level:2}],p={toc:u};function m(e){var t=e.components,r=(0,a.Z)(e,i);return(0,o.kt)("wrapper",(0,n.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"overview"},"Overview"),(0,o.kt)("h2",{id:"motivation"},"Motivation"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Balancing complexity and presentation/usability"),(0,o.kt)("li",{parentName:"ul"},"End user is not exposed to the internal, which are composed of may sub-systems"),(0,o.kt)("li",{parentName:"ul"},"We only wants some API that just work")),(0,o.kt)("h2",{id:"goals"},"Goals"),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"Facade: Provides a simple, easy way to understand interface over a large and sophisticated body of code")),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Build a facade to provides a simplified API over a set of components"),(0,o.kt)("li",{parentName:"ul"},"May wish to expose internals through the facade (optionally)"),(0,o.kt)("li",{parentName:"ul"},"May allow users to escalate to use more complex APIs if they need to")),(0,o.kt)("h2",{id:"facade-patterns"},"Facade Patterns"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Facade is actually another form of encapsulation"),(0,o.kt)("li",{parentName:"ul"},"You can select which interface to expose to users"),(0,o.kt)("li",{parentName:"ul"},"In addition, you can choose to provides several levels of API to each target group"),(0,o.kt)("li",{parentName:"ul"},"You can use Facade to both limit access to internals and create a simple API for users")),(0,o.kt)("h2",{id:"references"},"References"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://www.udemy.com/course/design-patterns-go"},"https://www.udemy.com/course/design-patterns-go"))))}m.isMDXComponent=!0}}]);