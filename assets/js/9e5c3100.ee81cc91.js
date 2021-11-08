(self.webpackChunkyingchiaochen_website=self.webpackChunkyingchiaochen_website||[]).push([[9138],{3905:function(e,t,n){"use strict";n.d(t,{Zo:function(){return l},kt:function(){return d}});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),u=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},l=function(e){var t=u(e.components);return r.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,l=i(e,["components","mdxType","originalType","parentName"]),m=u(n),d=a,f=m["".concat(s,".").concat(d)]||m[d]||p[d]||o;return n?r.createElement(f,c(c({ref:t},l),{},{components:n})):r.createElement(f,c({ref:t},l))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,c=new Array(o);c[0]=m;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i.mdxType="string"==typeof e?e:a,c[1]=i;for(var u=2;u<o;u++)c[u]=n[u];return r.createElement.apply(null,c)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},8001:function(e,t,n){"use strict";n.r(t),n.d(t,{frontMatter:function(){return i},contentTitle:function(){return s},metadata:function(){return u},toc:function(){return l},default:function(){return m}});var r=n(4034),a=n(9973),o=(n(7294),n(3905)),c=["components"],i={},s="Tips",u={unversionedId:"Cloud/Kubernetes/Advanced/Tips",id:"Cloud/Kubernetes/Advanced/Tips",isDocsHomePage:!1,title:"Tips",description:"- Set up auto completion",source:"@site/docs/Cloud/Kubernetes/Advanced/Tips.md",sourceDirName:"Cloud/Kubernetes/Advanced",slug:"/Cloud/Kubernetes/Advanced/Tips",permalink:"/docs/Cloud/Kubernetes/Advanced/Tips",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Sidecar Pattern",permalink:"/docs/Cloud/Kubernetes/Advanced/Sidecar"},next:{title:"Autoscaling",permalink:"/docs/Cloud/Kubernetes/Basics/Autoscaling"}},l=[],p={toc:l};function m(e){var t=e.components,n=(0,a.Z)(e,c);return(0,o.kt)("wrapper",(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"tips"},"Tips"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Set up auto completion")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"# Follow instruction for your terminal\nkubectl completion --help\n\n# In Linux, the default one is usually bash\nsource <(kubectl completion bash)\n")),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Set up namespace short cut")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"# Set the config and specify that we will use namespace 'labels' as default\nkubectl config set-context $(kubectl config current-context) --namespace=labels\n\n# Set alias to quickly switch between namespace\n# Usage: kcd <namespace> \nalias kcd='kubectl config set-context $(kubectl config current- context) --namespace '\n")),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Set up vim editor")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"# Open vimrc\nvim ~/.vimrc\n")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-vim",metastring:'title="~/.vimrc"',title:'"~/.vimrc"'},'" Most common\nset number\nset ruler\nset ai\nset si\n\n" Optional\nsyntax enable\nset ignorecase\nset smartcase\nset expandtab\nset tabstop=4\nset softtabstop=4\nset shiftwidth=4\nset smarttab\nset confirm\nset history=500\nset wildmenu\nset lbr\n')))}m.isMDXComponent=!0}}]);