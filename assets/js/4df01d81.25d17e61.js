(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[3951],{3905:function(e,t,n){"use strict";n.d(t,{Zo:function(){return p},kt:function(){return m}});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=r.createContext({}),u=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},p=function(e){var t=u(e.components);return r.createElement(c.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,c=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),d=u(n),m=a,h=d["".concat(c,".").concat(m)]||d[m]||s[m]||i;return n?r.createElement(h,l(l({ref:t},p),{},{components:n})):r.createElement(h,l({ref:t},p))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,l=new Array(i);l[0]=d;var o={};for(var c in t)hasOwnProperty.call(t,c)&&(o[c]=t[c]);o.originalType=e,o.mdxType="string"==typeof e?e:a,l[1]=o;for(var u=2;u<i;u++)l[u]=n[u];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},5091:function(e,t,n){"use strict";n.r(t),n.d(t,{frontMatter:function(){return o},contentTitle:function(){return c},metadata:function(){return u},toc:function(){return p},default:function(){return d}});var r=n(2122),a=n(9756),i=(n(7294),n(3905)),l=["components"],o={},c="Idea",u={unversionedId:"TODO/idea",id:"TODO/idea",isDocsHomePage:!1,title:"Idea",description:"This file record some project ideas.",source:"@site/docs/TODO/idea.md",sourceDirName:"TODO",slug:"/TODO/idea",permalink:"/docs/TODO/idea",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Blog TODO",permalink:"/docs/TODO/blog"},next:{title:"Vim Setup",permalink:"/docs/Tools/Vim/Setup"}},p=[{value:"Circuit",id:"circuit",children:[{value:"Hierarchy",id:"hierarchy",children:[]},{value:"Advanced",id:"advanced",children:[]},{value:"Communication",id:"communication",children:[]},{value:"Report",id:"report",children:[]},{value:"Cache",id:"cache",children:[]}]},{value:"Resource Watch",id:"resource-watch",children:[]}],s={toc:p};function d(e){var t=e.components,n=(0,a.Z)(e,l);return(0,i.kt)("wrapper",(0,r.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"idea"},"Idea"),(0,i.kt)("p",null,"This file record some project ideas."),(0,i.kt)("h2",{id:"circuit"},"Circuit"),(0,i.kt)("p",null,"This is a concurrent (parallel) processing framework inspired by the Go context time limit."),(0,i.kt)("h3",{id:"hierarchy"},"Hierarchy"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"The ",(0,i.kt)("inlineCode",{parentName:"li"},"circuit")," is the top level coordinator"),(0,i.kt)("li",{parentName:"ul"},"The ",(0,i.kt)("inlineCode",{parentName:"li"},"circuit")," has several ",(0,i.kt)("inlineCode",{parentName:"li"},"ExecPlan"),"s"),(0,i.kt)("li",{parentName:"ul"},"Each ",(0,i.kt)("inlineCode",{parentName:"li"},"ExecPlan")," contains several ",(0,i.kt)("inlineCode",{parentName:"li"},"Stage")," s"),(0,i.kt)("li",{parentName:"ul"},"Each ",(0,i.kt)("inlineCode",{parentName:"li"},"Stage")," contains several ",(0,i.kt)("inlineCode",{parentName:"li"},"Task"),"s"),(0,i.kt)("li",{parentName:"ul"},"Each ",(0,i.kt)("inlineCode",{parentName:"li"},"Task")," represents a ",(0,i.kt)("inlineCode",{parentName:"li"},"executable")," or ",(0,i.kt)("inlineCode",{parentName:"li"},"script")," to complete"),(0,i.kt)("li",{parentName:"ul"},"A ",(0,i.kt)("inlineCode",{parentName:"li"},"Task")," has several properties, either the normal ",(0,i.kt)("inlineCode",{parentName:"li"},"executor")," or ",(0,i.kt)("inlineCode",{parentName:"li"},"examiner")),(0,i.kt)("li",{parentName:"ul"},"A ",(0,i.kt)("inlineCode",{parentName:"li"},"examiner")," is a special task, when it return false, then all the stage should stop")),(0,i.kt)("h3",{id:"advanced"},"Advanced"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"We have a plan to support feature of DAG"),(0,i.kt)("li",{parentName:"ul"},"Allowing a fairly complex execution plan running in a concurrent way")),(0,i.kt)("h3",{id:"communication"},"Communication"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Each ",(0,i.kt)("inlineCode",{parentName:"li"},"Stage")," is isolated, they only communicate through tunnel"),(0,i.kt)("li",{parentName:"ul"},"A tunnel is actually a function parameter manage by a ",(0,i.kt)("inlineCode",{parentName:"li"},"Stage")," (a mapping)"),(0,i.kt)("li",{parentName:"ul"},"This structure also can be used in ",(0,i.kt)("inlineCode",{parentName:"li"},"Task")," and ",(0,i.kt)("inlineCode",{parentName:"li"},"ExecPlan")," (not recommended)")),(0,i.kt)("h3",{id:"report"},"Report"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"This project should include a real-time report for the execution "),(0,i.kt)("li",{parentName:"ul"},"Including each tasks status, ..."),(0,i.kt)("li",{parentName:"ul"},"Use different color for higher readability")),(0,i.kt)("h3",{id:"cache"},"Cache"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"This program will cache the previously executed "),(0,i.kt)("li",{parentName:"ul"},"But also allow force execution")),(0,i.kt)("h2",{id:"resource-watch"},"Resource Watch"),(0,i.kt)("p",null,"This project will provide a convenient way to handle cpu and memory limit."))}d.isMDXComponent=!0}}]);