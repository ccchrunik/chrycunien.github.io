(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[7055],{3905:function(e,t,r){"use strict";r.d(t,{Zo:function(){return p},kt:function(){return f}});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function s(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var u=n.createContext({}),i=function(e){var t=n.useContext(u),r=t;return e&&(r="function"==typeof e?e(t):s(s({},t),e)),r},p=function(e){var t=i(e.components);return n.createElement(u.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,u=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),d=i(r),f=a,m=d["".concat(u,".").concat(f)]||d[f]||c[f]||o;return r?n.createElement(m,s(s({ref:t},p),{},{components:r})):n.createElement(m,s({ref:t},p))}));function f(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,s=new Array(o);s[0]=d;var l={};for(var u in t)hasOwnProperty.call(t,u)&&(l[u]=t[u]);l.originalType=e,l.mdxType="string"==typeof e?e:a,s[1]=l;for(var i=2;i<o;i++)s[i]=r[i];return n.createElement.apply(null,s)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},3290:function(e,t,r){"use strict";r.r(t),r.d(t,{frontMatter:function(){return l},contentTitle:function(){return u},metadata:function(){return i},toc:function(){return p},default:function(){return d}});var n=r(4034),a=r(9973),o=(r(7294),r(3905)),s=["components"],l={},u="Setup",i={unversionedId:"System/Database/Operation/SQL/PostgreSQL/Setup",id:"System/Database/Operation/SQL/PostgreSQL/Setup",isDocsHomePage:!1,title:"Setup",description:"Installation",source:"@site/docs/System/Database/Operation/SQL/PostgreSQL/Setup.md",sourceDirName:"System/Database/Operation/SQL/PostgreSQL",slug:"/System/Database/Operation/SQL/PostgreSQL/Setup",permalink:"/docs/System/Database/Operation/SQL/PostgreSQL/Setup",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"SDN Perspectives",permalink:"/docs/System/Network/Virtualization/SDN/SDN-Perspectives"}},p=[{value:"Installation",id:"installation",children:[],level:2},{value:"Add default user",id:"add-default-user",children:[],level:2},{value:"Login",id:"login",children:[{value:"Default user",id:"default-user",children:[],level:3},{value:"Postgres",id:"postgres",children:[],level:3}],level:2}],c={toc:p};function d(e){var t=e.components,r=(0,a.Z)(e,s);return(0,o.kt)("wrapper",(0,n.Z)({},c,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"setup"},"Setup"),(0,o.kt)("h2",{id:"installation"},"Installation"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"$ brew install postgresql\n")),(0,o.kt)("h2",{id:"add-default-user"},"Add default user"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"$ /usr/local/opt/postgres/bin/createuser -s postgres\n")),(0,o.kt)("p",null,"You may look for ",(0,o.kt)("strong",{parentName:"p"},"peer authentication")," of postgres."),(0,o.kt)("h2",{id:"login"},"Login"),(0,o.kt)("h3",{id:"default-user"},"Default user"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"$ psql postgres\n")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"postgres=# select current_user;\n")),(0,o.kt)("h3",{id:"postgres"},"Postgres"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"$ psql -U postgres\n")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"postgres=# select current_user;\n")))}d.isMDXComponent=!0}}]);