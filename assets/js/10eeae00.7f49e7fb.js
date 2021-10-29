(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[342],{3905:function(e,t,n){"use strict";n.d(t,{Zo:function(){return u},kt:function(){return h}});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),c=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},u=function(e){var t=c(e.components);return r.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),m=c(n),h=a,d=m["".concat(s,".").concat(h)]||m[h]||p[h]||i;return n?r.createElement(d,o(o({ref:t},u),{},{components:n})):r.createElement(d,o({ref:t},u))}));function h(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:a,o[1]=l;for(var c=2;c<i;c++)o[c]=n[c];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},598:function(e,t,n){"use strict";n.r(t),n.d(t,{frontMatter:function(){return l},contentTitle:function(){return s},metadata:function(){return c},toc:function(){return u},default:function(){return m}});var r=n(4034),a=n(9973),i=(n(7294),n(3905)),o=["components"],l={},s="Path",c={unversionedId:"Linux/Script/Variables/Path",id:"Linux/Script/Variables/Path",isDocsHomePage:!1,title:"Path",description:"This section introduce the PATH environment variable.",source:"@site/docs/Linux/Script/Variables/Path.md",sourceDirName:"Linux/Script/Variables",slug:"/Linux/Script/Variables/Path",permalink:"/docs/Linux/Script/Variables/Path",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Identity",permalink:"/docs/Linux/Script/Variables/Identity"},next:{title:"Special",permalink:"/docs/Linux/Script/Variables/Special"}},u=[{value:"File Path",id:"file-path",children:[],level:2}],p={toc:u};function m(e){var t=e.components,n=(0,a.Z)(e,o);return(0,i.kt)("wrapper",(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"path"},"Path"),(0,i.kt)("p",null,"This section introduce the ",(0,i.kt)("inlineCode",{parentName:"p"},"PATH")," environment variable."),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Use ",(0,i.kt)("inlineCode",{parentName:"li"},"man bash")," and search for ",(0,i.kt)("inlineCode",{parentName:"li"},"PATH"),". You may need to search for a little bit time."),(0,i.kt)("li",{parentName:"ul"},"Path is a colon separated list of directories in which the shell look for commands."),(0,i.kt)("li",{parentName:"ul"},"The shell will search for commands ",(0,i.kt)("strong",{parentName:"li"},"in orders"),", which means you can intercept a command by adding a new path before the original path. (like ",(0,i.kt)("inlineCode",{parentName:"li"},'export PATH="/my/new/directory:${PATH}"'),")"),(0,i.kt)("li",{parentName:"ul"},"The command may be hashed (and stored in the shell for quick lookup), if you want to reset the hashed table, use ",(0,i.kt)("inlineCode",{parentName:"li"},"hash -r"))),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},'$ echo "${PATH}"\n# You may see something like this:\n# /usr/local/bin:/usr/bin:/usr/local/sbin:/usr/sbin:/sbin:/usr/sbin:/home/vagrant/bin\n\n# Find where is a command located\n$ which head\n\n# Find all possible commands\n$ which -a head\n')),(0,i.kt)("h2",{id:"file-path"},"File Path"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"basename"),": strip to file path (left file name)"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"dirname"),": strip the file part (left directory name)"),(0,i.kt)("li",{parentName:"ul"},"These two commands will not bother whether this path exist or not"),(0,i.kt)("li",{parentName:"ul"},"Use ",(0,i.kt)("inlineCode",{parentName:"li"},"man basename")," and ",(0,i.kt)("inlineCode",{parentName:"li"},"man dirname")," for more information.")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"$ basename /vagrant/test.sh\n# Result:\n# test.sh\n\n$ dirname /vagrant/test.sh\n# Result:\n# /not\n\n$ basename /not/exist\n# Result:\n# exist\n\n$ dirname /not/exist\n# Result:\n# /vagrant\n\n")))}m.isMDXComponent=!0}}]);