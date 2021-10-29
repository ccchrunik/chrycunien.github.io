(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[6598],{3905:function(e,n,t){"use strict";t.d(n,{Zo:function(){return p},kt:function(){return d}});var a=t(7294);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function l(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?l(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):l(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function s(e,n){if(null==e)return{};var t,a,r=function(e,n){if(null==e)return{};var t,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)t=l[a],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)t=l[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var o=a.createContext({}),c=function(e){var n=a.useContext(o),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},p=function(e){var n=c(e.components);return a.createElement(o.Provider,{value:n},e.children)},u={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},m=a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,l=e.originalType,o=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),m=c(t),d=r,v=m["".concat(o,".").concat(d)]||m[d]||u[d]||l;return t?a.createElement(v,i(i({ref:n},p),{},{components:t})):a.createElement(v,i({ref:n},p))}));function d(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var l=t.length,i=new Array(l);i[0]=m;var s={};for(var o in n)hasOwnProperty.call(n,o)&&(s[o]=n[o]);s.originalType=e,s.mdxType="string"==typeof e?e:r,i[1]=s;for(var c=2;c<l;c++)i[c]=t[c];return a.createElement.apply(null,i)}return a.createElement.apply(null,t)}m.displayName="MDXCreateElement"},2640:function(e,n,t){"use strict";t.r(n),t.d(n,{frontMatter:function(){return s},contentTitle:function(){return o},metadata:function(){return c},toc:function(){return p},default:function(){return m}});var a=t(4034),r=t(9973),l=(t(7294),t(3905)),i=["components"],s={},o="Services Discovery",c={unversionedId:"Cloud/Kubernetes/Basics/Services-Discovery",id:"Cloud/Kubernetes/Basics/Services-Discovery",isDocsHomePage:!1,title:"Services Discovery",description:"Servies advantage",source:"@site/docs/Cloud/Kubernetes/Basics/Services-Discovery.md",sourceDirName:"Cloud/Kubernetes/Basics",slug:"/Cloud/Kubernetes/Basics/Services-Discovery",permalink:"/docs/Cloud/Kubernetes/Basics/Services-Discovery",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Rollouts",permalink:"/docs/Cloud/Kubernetes/Basics/Rollouts"},next:{title:"Services",permalink:"/docs/Cloud/Kubernetes/Basics/Services"}},p=[{value:"Servies advantage",id:"servies-advantage",children:[],level:2},{value:"Mechanisms",id:"mechanisms",children:[],level:2},{value:"Source Code",id:"source-code",children:[],level:2}],u={toc:p};function m(e){var n=e.components,t=(0,r.Z)(e,i);return(0,l.kt)("wrapper",(0,a.Z)({},u,t,{components:n,mdxType:"MDXLayout"}),(0,l.kt)("h1",{id:"services-discovery"},"Services Discovery"),(0,l.kt)("h2",{id:"servies-advantage"},"Servies advantage"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Supports multi-pod design"),(0,l.kt)("li",{parentName:"ul"},"Provides static endpoints for each tier"),(0,l.kt)("li",{parentName:"ul"},"Handles Pod IP change"),(0,l.kt)("li",{parentName:"ul"},"Load balancing")),(0,l.kt)("h2",{id:"mechanisms"},"Mechanisms"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"To discover services between each other, we have to use other method because they no longer share the same local network."),(0,l.kt)("li",{parentName:"ul"},"Environment variables",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"Service address automatically inject into containers"),(0,l.kt)("li",{parentName:"ul"},"Environment variables follow naming conventions based on service name"),(0,l.kt)("li",{parentName:"ul"},"Only in the same namespace"))),(0,l.kt)("li",{parentName:"ul"},"DNS",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"DNS records automatically created in cluster's DNS"),(0,l.kt)("li",{parentName:"ul"},"Container automatically configure to query cluster DNS"),(0,l.kt)("li",{parentName:"ul"},"Update dynamically between namespaces")))),(0,l.kt)("h2",{id:"source-code"},"Source Code"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-yaml",metastring:'title="4.1-namespace-yaml"',title:'"4.1-namespace-yaml"'},"apiVersion: v1\nkind: Namespace\nmetadata:\n  name: service-discovery\n  labels:\n    app: counter\n")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-yaml",metastring:'title="4.2-data_tier.yaml"',title:'"4.2-data_tier.yaml"'},"apiVersion: v1\nkind: Service\nmetadata:\n  name: data-tier\n  labels:\n    app: microservices\nspec:\n  ports:\n  - port: 6379\n    protocol: TCP # default\n    name: redis # optional when only 1 port\n  selector:\n    tier: data\n  # Internal access within the cluster\n  type: ClusterIP # default\n---\napiVersion: v1\nkind: Pod\nmetadata:\n  name: data-tier\n  labels:\n    app: microservices\n    tier: data\nspec:\n  containers:\n    - name: redis\n      image: redis:latest\n      imagePullPolicy: IfNotPresent\n      ports:\n        - containerPort: 6379\n")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-yaml",metastring:'title="4.3-app_tier.yaml"',title:'"4.3-app_tier.yaml"'},"apiVersion: v1\nkind: Service\nmetadata:\n  name: app-tier\n  labels:\n    app: microservices\nspec:\n  ports:\n  - port: 8080\n  selector:\n    tier: app\n---\napiVersion: v1\nkind: Pod\nmetadata:\n  name: app-tier\n  labels:\n    app: microservices\n    tier: app\nspec:\n  containers:\n    - name: server\n      image: lrakai/microservices:server-v1\n      ports:\n        - containerPort: 8080\n      env:\n        - name: REDIS_URL\n          # Environment variable service discovery\n          # Naming pattern:\n          #   IP address: <all_caps_service_name>_SERVICE_HOST\n          #   Port: <all_caps_service_name>_SERVICE_PORT\n          #   Named Port: <all_caps_service_name>_SERVICE_PORT_<all_caps_port_name>\n          value: redis://$(DATA_TIER_SERVICE_HOST):$(DATA_TIER_SERVICE_PORT_REDIS)\n          # In multi-container example value was\n          # value: redis://localhost:6379\n")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-yaml",metastring:'title="4.4-support_tier.yaml"',title:'"4.4-support_tier.yaml"'},"apiVersion: v1\nkind: Pod\nmetadata:\n  name: support-tier\n  labels:\n    app: microservices\n    tier: support\nspec:\n  containers:\n    - name: counter\n      image: lrakai/microservices:counter-v1\n      env:\n        - name: API_URL\n          # DNS for service discovery\n          # Naming pattern:\n          #   IP address: <service_name>.<service_namespace>\n          #   Port: needs to be extracted from SRV DNS record\n          value: http://app-tier.service-discovery:8080\n\n    - name: poller\n      image: lrakai/microservices:poller-v1\n      env:\n        - name: API_URL\n          # omit namespace to only search in the same namespace\n          value: http://app-tier:$(APP_TIER_SERVICE_PORT)\n")),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Create all resources")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"kubectl apply -f 4.1-namespace.yaml\nkubectl apply -n service-discovery -f 4.2-data_tier.yaml\nkubectl apply -n service-discovery -f 4.3-app_tier.yaml\nkubectl apply -n service-discovery -f 4.4-support_tier.yaml\n")),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Get pods")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"kubectl get pods -n service-discovery\n")),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Get Pod information")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"kubectl get -n service-discovery pod <pod_name>\n")),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Get more information")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"kubectl describe -n service-discovery pod <pod_name>\n")),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Get logs of containers")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"# -f means follow, watch real-time logs\nkubectl logs -n service-discovery support-tier poller -f\n")),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Delete all resources")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"kubectl delete -n service-discovery -f 4.2-data_tier.yaml\nkubectl delete -n service-discovery -f 4.3-app_tier.yaml\nkubectl delete -n service-discovery -f 4.4-support_tier.yaml\nkubectl delete -f 4.1-namespace.yaml\n")))}m.isMDXComponent=!0}}]);