(self.webpackChunkyingchiaochen_website=self.webpackChunkyingchiaochen_website||[]).push([[9793],{3905:function(e,t,n){"use strict";n.d(t,{Zo:function(){return u},kt:function(){return m}});var a=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var o=a.createContext({}),c=function(e){var t=a.useContext(o),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},u=function(e){var t=c(e.components);return a.createElement(o.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,r=e.originalType,o=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),d=c(n),m=i,h=d["".concat(o,".").concat(m)]||d[m]||p[m]||r;return n?a.createElement(h,l(l({ref:t},u),{},{components:n})):a.createElement(h,l({ref:t},u))}));function m(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var r=n.length,l=new Array(r);l[0]=d;var s={};for(var o in t)hasOwnProperty.call(t,o)&&(s[o]=t[o]);s.originalType=e,s.mdxType="string"==typeof e?e:i,l[1]=s;for(var c=2;c<r;c++)l[c]=n[c];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},2951:function(e,t,n){"use strict";n.r(t),n.d(t,{frontMatter:function(){return s},contentTitle:function(){return o},metadata:function(){return c},toc:function(){return u},default:function(){return d}});var a=n(4034),i=n(9973),r=(n(7294),n(3905)),l=["components"],s={},o="Istio Traffic",c={unversionedId:"Cloud/Service-Mesh/Istio/Traffic",id:"Cloud/Service-Mesh/Istio/Traffic",isDocsHomePage:!1,title:"Istio Traffic",description:"Overview",source:"@site/docs/Cloud/Service-Mesh/Istio/Traffic.md",sourceDirName:"Cloud/Service-Mesh/Istio",slug:"/Cloud/Service-Mesh/Istio/Traffic",permalink:"/docs/Cloud/Service-Mesh/Istio/Traffic",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Istio Setup",permalink:"/docs/Cloud/Service-Mesh/Istio/Setup"},next:{title:"Github Actions Overview",permalink:"/docs/Cloud/DevOps/GithubActions/Overview"}},u=[{value:"Overview",id:"overview",children:[],level:2},{value:"Kubernetes Service",id:"kubernetes-service",children:[{value:"ClusterIP",id:"clusterip",children:[],level:3},{value:"NodePort",id:"nodeport",children:[],level:3},{value:"LoadBalancer",id:"loadbalancer",children:[],level:3}],level:2},{value:"Ingress",id:"ingress",children:[{value:"Kubernetes Ingress",id:"kubernetes-ingress",children:[],level:3},{value:"Istio Ingress Gateway",id:"istio-ingress-gateway",children:[],level:3}],level:2},{value:"Ingress and Egress",id:"ingress-and-egress",children:[],level:2},{value:"Istio Routing",id:"istio-routing",children:[{value:"Ingress Gateway",id:"ingress-gateway",children:[],level:3},{value:"Gateway",id:"gateway",children:[],level:3},{value:"Virtual Service",id:"virtual-service",children:[],level:3},{value:"Destination Rule",id:"destination-rule",children:[],level:3},{value:"Service Entry",id:"service-entry",children:[],level:3},{value:"Sidecar",id:"sidecar",children:[],level:3}],level:2},{value:"Resilience and Testing",id:"resilience-and-testing",children:[{value:"Timeout",id:"timeout",children:[],level:3},{value:"Retries",id:"retries",children:[],level:3},{value:"Circuit Breaker",id:"circuit-breaker",children:[],level:3},{value:"Fault Injection",id:"fault-injection",children:[],level:3}],level:2},{value:"Example 1",id:"example-1",children:[{value:"Gateway",id:"gateway-1",children:[],level:3},{value:"Virtual Service",id:"virtual-service-1",children:[],level:3},{value:"Access",id:"access",children:[],level:3},{value:"Weighted Traffic",id:"weighted-traffic",children:[],level:3}],level:2},{value:"References",id:"references",children:[],level:2}],p={toc:u};function d(e){var t=e.components,s=(0,i.Z)(e,l);return(0,r.kt)("wrapper",(0,a.Z)({},p,s,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"istio-traffic"},"Istio Traffic"),(0,r.kt)("h2",{id:"overview"},"Overview"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"In order to direct traffic within your mesh, Istio needs to know where all your endpoints are, and which services they belong to. To populate its own service registry, Istio connects to a service discovery system. For example, if you\u2019ve installed Istio on a Kubernetes cluster, then Istio automatically detects the services and endpoints in that cluster. Using this service registry, the Envoy proxies can then direct traffic to the relevant services."),(0,r.kt)("li",{parentName:"ul"},"For more ",(0,r.kt)("a",{parentName:"li",href:"https://istio.io/latest/docs/concepts/traffic-management/"},"information"))),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"k8s-istio-traffic",src:n(1717).Z})),(0,r.kt)("h2",{id:"kubernetes-service"},"Kubernetes Service"),(0,r.kt)("p",null,"Kubernetes ",(0,r.kt)("inlineCode",{parentName:"p"},"Service")," is a Kubernetes resource to expose anothor resources like pods, deployments, ... . It selects pods using labels and also checks for readiness probe(mount the pod is it is ready) and liveness probe (kill the pod if no reponse)."),(0,r.kt)("p",null,"Each service is assigned an dedicated cluster ip so it will not effected by the removal of any pod (endpoint). Plus, it is ",(0,r.kt)("inlineCode",{parentName:"p"},"<service-name>.<namespace>.svc.cluster.local"),", like ",(0,r.kt)("inlineCode",{parentName:"p"},"reviews.prod.svc.cluster.local"),". Since Kubernetes implement a flat network model, each ip can establish a connection with any other ip if no further restriction is set. Hence, when a resource contact the service, an unchanged ip, then it route the traffic in a random way (equally distributed) to endpoints it references. "),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"Service")," has 3 basic types (and some other advanced types):"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"ClusterIP")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"NodePort")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"LoadBalancer"))),(0,r.kt)("h3",{id:"clusterip"},"ClusterIP"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"The default service type."),(0,r.kt)("li",{parentName:"ul"},"It is used for communication within the cluster."),(0,r.kt)("li",{parentName:"ul"},"The service will be assigned a dedicated ip.")),(0,r.kt)("h3",{id:"nodeport"},"NodePort"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"It also setup a ",(0,r.kt)("inlineCode",{parentName:"li"},"ClusterIP")," behind the scene."),(0,r.kt)("li",{parentName:"ul"},"It opens a random port (over 30000 unless you specify it) in each node in the cluster."),(0,r.kt)("li",{parentName:"ul"},"Then when traffic arrive this port, traffic is redirected to the service (by manipulating the iptable)."),(0,r.kt)("li",{parentName:"ul"},"The connection between the NodePort and the ClusterIP is automatically established.")),(0,r.kt)("h3",{id:"loadbalancer"},"LoadBalancer"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"It also setup a ",(0,r.kt)("inlineCode",{parentName:"li"},"NodePort")," and ",(0,r.kt)("inlineCode",{parentName:"li"},"ClusterIP")," behind the scene."),(0,r.kt)("li",{parentName:"ul"},"It requires the support of cloud infrastructure."),(0,r.kt)("li",{parentName:"ul"},"It serves as a load balancer (usually L4) for all node ports."),(0,r.kt)("li",{parentName:"ul"},"The connection between the LoadBalancer, the NodePort and the ClusterIP is automatically established."),(0,r.kt)("li",{parentName:"ul"},"If the infrastructure doesn't support, the ",(0,r.kt)("inlineCode",{parentName:"li"},"External IP")," field of the service will always be ",(0,r.kt)("inlineCode",{parentName:"li"},"Pending"),".")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"$ minikube tunnel\n")),(0,r.kt)("h2",{id:"ingress"},"Ingress"),(0,r.kt)("p",null,"Ingress is another way to define routing rules other than load balancers. It supports url-based routing, which looks at the host field in the HTTP packet header (L7 load balancer)."),(0,r.kt)("h3",{id:"kubernetes-ingress"},"Kubernetes Ingress"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"Ingress"),"is an API object defined by Kubernetes Ingress API, which defines a simple way for routing rules.")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},"apiVersion: networking.k8s.io/v1\nkind: Ingress\nmetadata:\n  name: example-ingress\n  annotations:\n    nginx.ingress.kubernetes.io/rewrite-target: /$1\nspec:\n  rules:\n    - host: hello-world.info\n      http:\n        paths:\n          - path: /\n            pathType: Prefix\n            backend:\n              service:\n                name: web\n                port:\n                  number: 8080\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"$ kubectl get ingress\n")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Ingress controller is a resource that implement the Kubernetes Ingress API. The most widely support one is Nginx controller.",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"It sets up a deployment, just as other default controllers in Kubernetes."),(0,r.kt)("li",{parentName:"ul"},"It still need support of load balancer. What it actually do is configure that load balancer to let it know how to route the traffic.")))),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"$ minikube addons enable ingress\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"$ kubectl get pods -n ingress-nginx\n")),(0,r.kt)("h3",{id:"istio-ingress-gateway"},"Istio Ingress Gateway"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Instead of using Kubernetes native ",(0,r.kt)("inlineCode",{parentName:"li"},"Ingress")," resource, Istio provides its own gateway with advanced monitoring and routing rules."),(0,r.kt)("li",{parentName:"ul"},"It just another routing model defined by Istio, but with more flexibilities."),(0,r.kt)("li",{parentName:"ul"},"By splitting the functionality of ",(0,r.kt)("inlineCode",{parentName:"li"},"Ingress")," into several ",(0,r.kt)("inlineCode",{parentName:"li"},"CustomResource"),": ",(0,r.kt)("inlineCode",{parentName:"li"},"Gateway"),", ",(0,r.kt)("inlineCode",{parentName:"li"},"VirtualService"),", and ",(0,r.kt)("inlineCode",{parentName:"li"},"DestinationRule"),", it achieves a more powerful routing configuration."),(0,r.kt)("li",{parentName:"ul"},"We describe it in detail in later sections.")),(0,r.kt)("h2",{id:"ingress-and-egress"},"Ingress and Egress"),(0,r.kt)("h2",{id:"istio-routing"},"Istio Routing"),(0,r.kt)("p",null,"Istio separate its routing model into 3 parts: ",(0,r.kt)("inlineCode",{parentName:"p"},"Gateway"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"VirtualService"),", an ",(0,r.kt)("inlineCode",{parentName:"p"},"DestinationRule"),"."),(0,r.kt)("h3",{id:"ingress-gateway"},"Ingress Gateway"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"There are ",(0,r.kt)("inlineCode",{parentName:"li"},"isio-ingressgateway")," and ",(0,r.kt)("inlineCode",{parentName:"li"},"istio-egressgateway")," in the ",(0,r.kt)("inlineCode",{parentName:"li"},"istio-system")," namespace, they are the Envoy proxy that can be configure for routing rules, acting as boundary of the service mesh."),(0,r.kt)("li",{parentName:"ul"},"They are both a (service, deployment) pair. When traffic arrives the service, it comes to the underlying deployment pod, which is a configured Envoy proxy, having several rules defined the user on how to route traffic"),(0,r.kt)("li",{parentName:"ul"},"They just like a LoadBalancer but the underlying implementation used Envoy instead native service."),(0,r.kt)("li",{parentName:"ul"},"You can also define your own Ingress and Egress resources."),(0,r.kt)("li",{parentName:"ul"},"Ingress controls the inbound traffic from the external world, the Egress it the opposite.")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"$ kubectl get pods -n istio-system\n")),(0,r.kt)("h3",{id:"gateway"},"Gateway"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"Gateway")," describes a load balancer operating at the edge of the mesh receiving incoming or outgoing HTTP/TCP connections. "),(0,r.kt)("li",{parentName:"ul"},"The specification only describes a set of ports that should be exposed, the type of protocol to use, SNI configuration for the load balancer, etc."),(0,r.kt)("li",{parentName:"ul"},"The gateway will be applied to the proxy running on a pod with labels ",(0,r.kt)("inlineCode",{parentName:"li"},"app: my-gateway-controller"),". The default ingress gateway set up by ",(0,r.kt)("inlineCode",{parentName:"li"},"demo")," profile has the label ",(0,r.kt)("inlineCode",{parentName:"li"},"istio: ingressgateway")),(0,r.kt)("li",{parentName:"ul"},"The Gateway specification describes the L4-L6 properties of a load balancer. It only defines which traffic can enter the service mesh, but do not specify any routing rules."),(0,r.kt)("li",{parentName:"ul"},"A ",(0,r.kt)("inlineCode",{parentName:"li"},"VirtualService")," can then be bound to a gateway to control the forwarding of traffic arriving at a particular host or gateway port."),(0,r.kt)("li",{parentName:"ul"},"The ",(0,r.kt)("inlineCode",{parentName:"li"},"host")," means the ",(0,r.kt)("inlineCode",{parentName:"li"},"HOST: uk.bookinfo.com")," in the HTTP header (the host url address used by a client when attempting to connect to a service), which is added by DNS automatically or manually by using ",(0,r.kt)("inlineCode",{parentName:"li"},"curl"),"."),(0,r.kt)("li",{parentName:"ul"},"For more ",(0,r.kt)("a",{parentName:"li",href:"https://istio.io/latest/docs/reference/config/networking/gateway/"},"information"))),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},'apiVersion: networking.istio.io/v1beta1\nkind: Gateway\nmetadata:\n  name: my-gateway\n  namespace: some-config-namespace\nspec:\n  selector:\n    app: my-gateway-controller\n  servers:\n  - port:\n      number: 80\n      name: http\n      protocol: HTTP\n    hosts:\n    - uk.bookinfo.com\n    - eu.bookinfo.com\n    tls:\n      httpsRedirect: true # sends 301 redirect for http requests\n  - port:\n      number: 443\n      name: https-443\n      protocol: HTTPS\n    hosts:\n    - uk.bookinfo.com\n    - eu.bookinfo.com\n    tls:\n      mode: SIMPLE # enables HTTPS on this port\n      serverCertificate: /etc/certs/servercert.pem\n      privateKey: /etc/certs/privatekey.pem\n  - port:\n      number: 9443\n      name: https-9443\n      protocol: HTTPS\n    hosts:\n    - "bookinfo-namespace/*.bookinfo.com"\n    tls:\n      mode: SIMPLE # enables HTTPS on this port\n      credentialName: bookinfo-secret # fetches certs from Kubernetes secret\n  - port:\n      number: 9080\n      name: http-wildcard\n      protocol: HTTP\n    hosts:\n    - "*"\n  - port:\n      number: 2379 # to expose internal service via external port 2379\n      name: mongo\n      protocol: MONGO\n    hosts:\n    - "*"\n\n')),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"$ kubectl get gateway\n")),(0,r.kt)("h3",{id:"virtual-service"},"Virtual Service"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Virtual services are attached to Istio ",(0,r.kt)("inlineCode",{parentName:"li"},"Gateway"),", which is configuration affecting traffic routing."),(0,r.kt)("li",{parentName:"ul"},"The traffic will be routed to subset, which is defined in the Destination Rule"),(0,r.kt)("li",{parentName:"ul"},"It can also define load balancing rules and traffic policies."),(0,r.kt)("li",{parentName:"ul"},"You can specify Kubernetes ",(0,r.kt)("inlineCode",{parentName:"li"},"Service")," in the ",(0,r.kt)("inlineCode",{parentName:"li"},"hosts")," field, both for short and long name."),(0,r.kt)("li",{parentName:"ul"},"As mentioned above, a gateway (",(0,r.kt)("inlineCode",{parentName:"li"},"istio-ingressgateway"),") is also a proxy without other containers"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"gateway")," are the names of gateways and sidecars that should apply these routes."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"mesh")," is a special keyword to set rules to all (sidecar) proxies."),(0,r.kt)("li",{parentName:"ul"},"It supports a great number of rules, such as cookie, prefix, ..."),(0,r.kt)("li",{parentName:"ul"},"The ",(0,r.kt)("inlineCode",{parentName:"li"},"route")," field specify which detisnation rules to send to"),(0,r.kt)("li",{parentName:"ul"},"For more ",(0,r.kt)("a",{parentName:"li",href:"https://istio.io/latest/docs/reference/config/networking/virtual-service/"},"information"))),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},'apiVersion: networking.istio.io/v1beta1\nkind: VirtualService\nmetadata:\n  name: bookinfo-rule\n  namespace: bookinfo-namespace\nspec:\n  hosts:\n  - reviews.prod.svc.cluster.local\n  - uk.bookinfo.com\n  - eu.bookinfo.com\n  gateways:\n  - some-config-namespace/my-gateway\n  - mesh # applies to all the sidecars in the mesh\n  http:\n  - match:\n    - headers:\n        cookie:\n          exact: "user=dev-123"\n    route:\n    - destination:\n        port:\n          number: 7777\n        host: reviews.qa.svc.cluster.local\n  - match:\n    - uri:\n        prefix: /reviews/\n    route:\n    - destination:\n        port:\n          number: 9080 # can be omitted if it\'s the only port for reviews\n        host: reviews.prod.svc.cluster.local\n      weight: 80\n    - destination:\n        host: reviews.qa.svc.cluster.local\n      weight: 20\n')),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Another thing a virtual service can do is route traffic to several destination rules with different weight."),(0,r.kt)("li",{parentName:"ul"},"All weight should sum up to 100 or it will fail. "),(0,r.kt)("li",{parentName:"ul"},"It can be used in A/B testing (canary testing)")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},"apiVersion: networking.istio.io/v1alpha3 \nkind: VirtualService\nmetadata:\n  name: reviews \nspec:\n  # It means reviews.default.svc.cluster.local\n  # So it means some traffic that is originally sent \n  # to reviews service will be replaced by this new rule\n  hosts:\n    - reviews\n  http:\n  - route:\n    - destination: \n        # This host means it want to send traffic to pods\n        # befine reviews service but using a desination rule\n        # with subset v1 for more control\n        host: reviews\n        subset: v1\n      # 99% of the traffic\n      weight: 99\n    - destination:\n        host: reviews\n        subset: v2 \n      weight: 1\n")),(0,r.kt)("h3",{id:"destination-rule"},"Destination Rule"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"It likes service, but a different abstration layer based on service."),(0,r.kt)("li",{parentName:"ul"},"You specify a Kubernetes ",(0,r.kt)("inlineCode",{parentName:"li"},"Service"),", and it use labels to select those pods (entrypoints) that are maintained by the service (I guess it will get endpoints information by inspecting the service resource)"),(0,r.kt)("li",{parentName:"ul"},"When the traffic coming, it routes to pods under the ",(0,r.kt)("inlineCode",{parentName:"li"},"ratings")," service and having the label ",(0,r.kt)("inlineCode",{parentName:"li"},"version: v3"),"."),(0,r.kt)("li",{parentName:"ul"},"It adds a traffic policy to configure the load balancer to use ",(0,r.kt)("inlineCode",{parentName:"li"},"LEAST_CONN")," for normal and ",(0,r.kt)("inlineCode",{parentName:"li"},"ROUND_ROBIN")," for a test version. ")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},"apiVersion: networking.istio.io/v1beta1\nkind: DestinationRule\nmetadata:\n  name: bookinfo-ratings\nspec:\n  host: ratings.prod.svc.cluster.local\n  trafficPolicy:\n    loadBalancer:\n      simple: LEAST_CONN\n  subsets:\n  - name: testversion\n    labels:\n      version: v3\n    trafficPolicy:\n      loadBalancer:\n        simple: ROUND_ROBIN\n")),(0,r.kt)("h3",{id:"service-entry"},"Service Entry"),(0,r.kt)("p",null,"To talk to external service through egress gateway"),(0,r.kt)("h3",{id:"sidecar"},"Sidecar"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"By default, Istio configures every Envoy proxy to accept traffic on all the ports of its associated workload, and to reach every workload in the mesh when forwarding traffic.\nA configuration like ",(0,r.kt)("inlineCode",{parentName:"li"},"Gateway")," but apply on workloads (sidecar) in the mesh.")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},'apiVersion: networking.istio.io/v1alpha3\nkind: Sidecar\nmetadata:\n  name: default\n  namespace: bookinfo\nspec:\n  egress:\n  - hosts:\n    - "./*"\n    - "istio-system/*"\n')),(0,r.kt)("h2",{id:"resilience-and-testing"},"Resilience and Testing"),(0,r.kt)("h3",{id:"timeout"},"Timeout"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Is a service take too much time to respond, we must not keep the dependent server waiting forever, or the chain of request will get queued up and break the entire service")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},"apiVersion: networking.istio.io/v1alpha3\nkind: VirtualService\nmetadata:\n  name: ratings\nspec:\n  hosts:\n  - ratings\n  http:\n  - route:\n    - destination:\n        host: ratings\n        subset: v1\n    timeout: 10s\n")),(0,r.kt)("h3",{id:"retries"},"Retries"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Attempt an operation again if it failed"),(0,r.kt)("li",{parentName:"ul"},"default: ",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"25ms interval"),(0,r.kt)("li",{parentName:"ul"},"2 retries (total 3 requests) before returing errors")))),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},"apiVersion: networking.istio.io/v1alpha3\nkind: VirtualService\nmetadata:\n  name: ratings\nspec:\n  hosts:\n  - ratings\n  http:\n  - route:\n    - destination:\n        host: ratings\n        subset: v1\n    retries:\n      attempts: 3\n      perTryTimeout: 2s\n")),(0,r.kt)("h3",{id:"circuit-breaker"},"Circuit Breaker"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Limit the impact of failures and other network issues to prevent propagation of errors in the system")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},"apiVersion: networking.istio.io/v1alpha3\nkind: DestinationRule\nmetadata:\n  name: reviews\nspec:\n  host: reviews\n  subsets:\n  - name: v1\n    labels:\n      version: v1\n    trafficPolicy:\n      connectionPool:\n        tcp:\n          maxConnections: 100\n")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"h2load")," is a http2 benchmarking tool and can fire concurrent requests and then show some statistics of the traffic.")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},'$ h2load -n1000 -c1 "http://$GATEWAY_URL/productpage"\n')),(0,r.kt)("h3",{id:"fault-injection"},"Fault Injection"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"It injects some fault like delay or abort into the routing to simulate error conditions")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},"apiVersion: networking.istio.io/v1alpha3\nkind: VirtualService\nmetadata:\n  name: ratings\nspec:\n  hosts:\n  - ratings\n  http:\n  - fault:\n      delay:\n        percentage:\n          value: 0.1\n        fixedDelay: 5s\n    route:\n    - destination:\n        host: ratings\n        subset: v1\n")),(0,r.kt)("h2",{id:"example-1"},"Example 1"),(0,r.kt)("p",null,"We use the example of bookinfo to illustrate the whole routing process. You can reference the setup section."),(0,r.kt)("h3",{id:"gateway-1"},"Gateway"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},'apiVersion: networking.istio.io/v1beta1\nkind: Gateway\nmetadata:\n  name: bookinfo-gateway\nspec:\n  selector:\n    istio: ingressgateway # use istio default controller\n  servers:\n  - port:\n      number: 80\n      name: http\n      protocol: HTTP\n    hosts:\n    - "bookinfo.app"\n')),(0,r.kt)("h3",{id:"virtual-service-1"},"Virtual Service"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},'apiVersion: networking.istio.io/v1beta1\nkind: VirtualService\nmetadata:\n  name: bookinfo\nspec:\n  hosts:\n  - "bookinfo.app"\n  gateways:\n  - bookinfo-gateway\n  http:\n  - match:\n    - uri:\n        exact: /productpage\n    - uri:\n        prefix: /static\n    - uri:\n        exact: /login\n    - uri:\n        exact: /logout\n    - uri:\n        prefix: /api/v1/products\n    route:\n    - destination:\n        host: productpage\n        port:\n          number: 9080\n')),(0,r.kt)("h3",{id:"access"},"Access"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Add the ",(0,r.kt)("inlineCode",{parentName:"li"},"Host")," header")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},'# You can not paste the url in the browser because you didn\'t configure the dns so\n# it will not add Host field and Istio will not let the traffic come in\n$ curl -H "Host: bookinfo.app" "http://$GATEWAY_URL/productpage"\n')),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Or you can directly modify the dns entry in ",(0,r.kt)("inlineCode",{parentName:"li"},"/etc/hosts"))),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},'# Remember to delete the entry if you don\'t use again\n$ echo -e "${INGRESS_HOST}\\tbookinfo.app" | sudo tee -a /etc/hosts\n$ curl "http://bookinfo.app:${INGRESS_PORT}/productpage"\n')),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Change the gateway host back to ",(0,r.kt)("inlineCode",{parentName:"li"},'"*"')," (wildcard) to allow all traffic coming. (we will use ",(0,r.kt)("inlineCode",{parentName:"li"},'"*"')," for the later example)")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},'$ curl "http://$GATEWAY_URL/productpage"\n')),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"another curl example")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},'# -I == --header, show the header\n# -s == --silent, show error messages it it fails\n$ curl -s -I -HHost:httpbin.example.com "http://$INGRESS_HOST:$INGRESS_PORT/status/200"\n')),(0,r.kt)("h3",{id:"weighted-traffic"},"Weighted Traffic"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Apply some default virtual services")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"$ kubectl apply -f samples/bookinfo/networking/destination-rule-all.yaml \n")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Add weighted rules for reviews virtual service")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},"apiVersion: networking.istio.io/v1beta1\nkind: VirtualService\nmetadata:\n  name: reviews\nspec:\n  hosts:\n  - reviews\n  http:\n  - route:\n    - destination:\n        host: reviews\n        subset: v1\n      weight: 75\n    - destination:\n        host: reviews\n        subset: v2\n      weight: 25\n")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Use this for sending traffic automatically")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},'$ while sleep 0.01; do curl -sS "http://$GATEWAY_URL/productpage" &> /dev/null ; done\n')),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Add user info filter (use sign in button on the top right corner to login and you'll see the change)")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},"apiVersion: networking.istio.io/v1alpha3\nkind: VirtualService\nmetadata:\n  name: reviews\nspec:\n  hosts:\n  - reviews\n  http:\n  - match:\n    - headers:\n        end-user:\n          exact: jason\n    route:\n    - destination:\n        host: reviews\n        subset: v2\n  - route:\n    - destination:\n        host: reviews\n        subset: v3\n")),(0,r.kt)("h2",{id:"references"},"References"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://kubernetes.io/docs/tasks/access-application-cluster/ingress-minikube/"},"https://kubernetes.io/docs/tasks/access-application-cluster/ingress-minikube/")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://istio.io/latest/docs/setup/getting-started/"},"https://istio.io/latest/docs/setup/getting-started/")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://istio.io/latest/docs/tasks/traffic-management/ingress/ingress-control/"},"https://istio.io/latest/docs/tasks/traffic-management/ingress/ingress-control/")),(0,r.kt)("li",{parentName:"ul"},"KodeKloud - Service Mesh with Istio"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://istio.io/latest/docs/reference/config/networking/gateway/"},"https://istio.io/latest/docs/reference/config/networking/gateway/")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://banzaicloud.com/blog/backyards-ingress/"},"https://banzaicloud.com/blog/backyards-ingress/")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://istio.io/latest/docs/reference/config/networking/sidecar/"},"https://istio.io/latest/docs/reference/config/networking/sidecar/"))))}d.isMDXComponent=!0},1717:function(e,t,n){"use strict";t.Z=n.p+"assets/images/k8s-istio-traffic.drawio-a0c64cda25f7f7509f0fe2d3041e2cc8.png"}}]);