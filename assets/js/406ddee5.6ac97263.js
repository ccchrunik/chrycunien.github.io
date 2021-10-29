(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[9991],{3905:function(e,t,n){"use strict";n.d(t,{Zo:function(){return s},kt:function(){return d}});var r=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var u=r.createContext({}),c=function(e){var t=r.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},s=function(e){var t=c(e.components);return r.createElement(u.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},p=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,a=e.originalType,u=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),p=c(n),d=i,k=p["".concat(u,".").concat(d)]||p[d]||m[d]||a;return n?r.createElement(k,o(o({ref:t},s),{},{components:n})):r.createElement(k,o({ref:t},s))}));function d(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=n.length,o=new Array(a);o[0]=p;var l={};for(var u in t)hasOwnProperty.call(t,u)&&(l[u]=t[u]);l.originalType=e,l.mdxType="string"==typeof e?e:i,o[1]=l;for(var c=2;c<a;c++)o[c]=n[c];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}p.displayName="MDXCreateElement"},94:function(e,t,n){"use strict";n.r(t),n.d(t,{frontMatter:function(){return l},contentTitle:function(){return u},metadata:function(){return c},toc:function(){return s},default:function(){return p}});var r=n(4034),i=n(9973),a=(n(7294),n(3905)),o=["components"],l={},u="Network Management",c={unversionedId:"System/Network/Virtualization/SDN/Network-Management",id:"System/Network/Virtualization/SDN/Network-Management",isDocsHomePage:!1,title:"Network Management",description:"Ideal",source:"@site/docs/System/Network/Virtualization/SDN/Network-Management.md",sourceDirName:"System/Network/Virtualization/SDN",slug:"/System/Network/Virtualization/SDN/Network-Management",permalink:"/docs/System/Network/Virtualization/SDN/Network-Management",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"P4 Overview",permalink:"/docs/System/Network/Virtualization/P4/P4-Overview"},next:{title:"Network Review",permalink:"/docs/System/Network/Virtualization/SDN/Network-Review"}},s=[{value:"Ideal",id:"ideal",children:[],level:2},{value:"Indirect Control",id:"indirect-control",children:[{value:"Infer network view by reverse engineering",id:"infer-network-view-by-reverse-engineering",children:[],level:3},{value:"Policies buried in box-centric configuration",id:"policies-buried-in-box-centric-configuration",children:[],level:3},{value:"Problems",id:"problems",children:[],level:3},{value:"Architecture Questions to Study",id:"architecture-questions-to-study",children:[],level:3}],level:2},{value:"SDN - Direct Controle",id:"sdn---direct-controle",children:[{value:"Architecture",id:"architecture",children:[],level:3}],level:2},{value:"References",id:"references",children:[],level:2}],m={toc:s};function p(e){var t=e.components,l=(0,i.Z)(e,o);return(0,a.kt)("wrapper",(0,r.Z)({},m,l,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"network-management"},"Network Management"),(0,a.kt)("h2",{id:"ideal"},"Ideal"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Managing network in a simple way"),(0,a.kt)("li",{parentName:"ul"},"Directly and explicitly apply policies to network"),(0,a.kt)("li",{parentName:"ul"},"With the information provided by the Internet itself, or directly connect to a router or intercept packets to find out the problem")),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"management-ideal",src:n(5209).Z})),(0,a.kt)("h2",{id:"indirect-control"},"Indirect Control"),(0,a.kt)("h3",{id:"infer-network-view-by-reverse-engineering"},"Infer network view by reverse engineering"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Probe routers to fetch configuration"),(0,a.kt)("li",{parentName:"ul"},"Monitor control traffic (e.g., LSAs, BGP update)"),(0,a.kt)("li",{parentName:"ul"},"Usually, the internal topology is hidden from the outside world."),(0,a.kt)("li",{parentName:"ul"},"In traditional network, the builder and the manager of the network may be different, so it\u2019s a big burden for management."),(0,a.kt)("li",{parentName:"ul"},"You need to do testing manually and you must have some level of network background.")),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"management-indirect-probe",src:n(5032).Z})),(0,a.kt)("h3",{id:"policies-buried-in-box-centric-configuration"},"Policies buried in box-centric configuration"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Many knobs to tune"),(0,a.kt)("li",{parentName:"ul"},"Trial and error"),(0,a.kt)("li",{parentName:"ul"},"Different switch have different commands interface, even the switch from the same vendor may differ, it tedious to know all these commands")),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"management-indirect-command",src:n(8009).Z})),(0,a.kt)("h3",{id:"problems"},"Problems"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"62% of network downtime in multi-vendor networks comes from human-error",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"A misconfiguration may be found several weeks later when a network crashed"))),(0,a.kt)("li",{parentName:"ul"},"80% of IT budgets is spent on maintenance and operations. ",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"Human resources is very expensive in the US, so we have to make a trade-off between devices and humans. ")))),(0,a.kt)("h3",{id:"architecture-questions-to-study"},"Architecture Questions to Study"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"How should the functionality that controls a network be divided up?"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Important"),": everyone hates net outages"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Practical"),": solutions can be implemented without changing IP or end-hosts"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Relevant"),": trends toward separating decision-making from forwarding"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Unsolved"),": problem is not solved by running BGP/OSPF on faster servers")),(0,a.kt)("h2",{id:"sdn---direct-controle"},"SDN - Direct Controle"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Express goals explicitly",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"Security policies, QoS, egress point selection"),(0,a.kt)("li",{parentName:"ul"},"Do not bury goals in box-specific configuration"),(0,a.kt)("li",{parentName:"ul"},"Make policy dependencies explicit"))),(0,a.kt)("li",{parentName:"ul"},"Design network to provide timely and accurate view",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"Topology, traffic, resource limitations"),(0,a.kt)("li",{parentName:"ul"},"Give decision maker the inputs it needs"))),(0,a.kt)("li",{parentName:"ul"},"Decision maker computes and pushes desired network state",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"FIB entries, packet filters, queuing parameters"),(0,a.kt)("li",{parentName:"ul"},"Simplify router functionality"),(0,a.kt)("li",{parentName:"ul"},"Add new functions without modifying/creating protocols or upgrading routers")))),(0,a.kt)("h3",{id:"architecture"},"Architecture"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Decision Plane",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"Distributed"),(0,a.kt)("li",{parentName:"ul"},"Centralized"))),(0,a.kt)("li",{parentName:"ul"},"Dissemination Plane",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"In-band (Use the same channel for both data plane and control plane)"),(0,a.kt)("li",{parentName:"ul"},"Out-of-band (Use separate Ethernet ports and links (i.e. using the traditional networks))"))),(0,a.kt)("li",{parentName:"ul"},"Data Plane",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"Flow table entries"),(0,a.kt)("li",{parentName:"ul"},"Piece of code run at every router"),(0,a.kt)("li",{parentName:"ul"},"Piece of code in each packet")))),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"management-architecture",src:n(3304).Z})),(0,a.kt)("h2",{id:"references"},"References"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"This note is based on NTU course - ",(0,a.kt)("a",{parentName:"li",href:"https://nol.ntu.edu.tw/nol/coursesearch/print_table.php?course_id=942%20U0710&class=&dpt_code=9420&ser_no=50698&semester=110-1&lang=CH"},"Network Virtualization and Security")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://www.researchgate.net/post/Is-anyone-familiar-with-in-band-and-out-of-band-control-on-SDN"},"https://www.researchgate.net/post/Is-anyone-familiar-with-in-band-and-out-of-band-control-on-SDN"))))}p.isMDXComponent=!0},3304:function(e,t,n){"use strict";t.Z=n.p+"assets/images/management-architecture-6192f2d91c7752dfde638d27c5b8ae3d.png"},5209:function(e,t,n){"use strict";t.Z=n.p+"assets/images/management-ideal-a1600808e6b4724feece258e7e77a006.png"},8009:function(e,t,n){"use strict";t.Z=n.p+"assets/images/management-indirect-command-18e87ee5adce29dfc39042752de35d56.png"},5032:function(e,t,n){"use strict";t.Z=n.p+"assets/images/management-indirect-probe-a3c0eef91d881ceeb3a6f1d0ab9dec8e.png"}}]);