"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[53025],{15680:(e,r,n)=>{n.d(r,{xA:()=>p,yg:()=>m});var t=n(96540);function a(e,r,n){return r in e?Object.defineProperty(e,r,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[r]=n,e}function i(e,r){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);r&&(t=t.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),n.push.apply(n,t)}return n}function l(e){for(var r=1;r<arguments.length;r++){var n=null!=arguments[r]?arguments[r]:{};r%2?i(Object(n),!0).forEach((function(r){a(e,r,n[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))}))}return e}function s(e,r){if(null==e)return{};var n,t,a=function(e,r){if(null==e)return{};var n,t,a={},i=Object.keys(e);for(t=0;t<i.length;t++)n=i[t],r.indexOf(n)>=0||(a[n]=e[n]);return a}(e,r);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(t=0;t<i.length;t++)n=i[t],r.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var o=t.createContext({}),g=function(e){var r=t.useContext(o),n=r;return e&&(n="function"==typeof e?e(r):l(l({},r),e)),n},p=function(e){var r=g(e.components);return t.createElement(o.Provider,{value:r},e.children)},u="mdxType",c={inlineCode:"code",wrapper:function(e){var r=e.children;return t.createElement(t.Fragment,{},r)}},y=t.forwardRef((function(e,r){var n=e.components,a=e.mdxType,i=e.originalType,o=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),u=g(n),y=a,m=u["".concat(o,".").concat(y)]||u[y]||c[y]||i;return n?t.createElement(m,l(l({ref:r},p),{},{components:n})):t.createElement(m,l({ref:r},p))}));function m(e,r){var n=arguments,a=r&&r.mdxType;if("string"==typeof e||a){var i=n.length,l=new Array(i);l[0]=y;var s={};for(var o in r)hasOwnProperty.call(r,o)&&(s[o]=r[o]);s.originalType=e,s[u]="string"==typeof e?e:a,l[1]=s;for(var g=2;g<i;g++)l[g]=n[g];return t.createElement.apply(null,l)}return t.createElement.apply(null,n)}y.displayName="MDXCreateElement"},58426:(e,r,n)=>{n.r(r),n.d(r,{assets:()=>o,contentTitle:()=>l,default:()=>c,frontMatter:()=>i,metadata:()=>s,toc:()=>g});var t=n(58168),a=(n(96540),n(15680));const i={title:"Ingress",sidebar_position:0,tags:["Kubernetes","\u30ea\u30bd\u30fc\u30b9","Networking","Ingress"]},l=void 0,s={unversionedId:"resource/kubernetes/Networking/Ingress",id:"resource/kubernetes/Networking/Ingress",title:"Ingress",description:"\u30ea\u30bd\u30fc\u30b9\u30a2\u30a4\u30b3\u30f3",source:"@site/i18n/ja/docusaurus-plugin-content-docs/current/resource/kubernetes/Networking/Ingress.mdx",sourceDirName:"resource/kubernetes/Networking",slug:"/resource/kubernetes/Networking/Ingress",permalink:"/ja/docs/resource/kubernetes/Networking/Ingress",draft:!1,tags:[{label:"Kubernetes",permalink:"/ja/docs/tags/kubernetes"},{label:"\u30ea\u30bd\u30fc\u30b9",permalink:"/ja/docs/tags/\u30ea\u30bd\u30fc\u30b9"},{label:"Networking",permalink:"/ja/docs/tags/networking"},{label:"Ingress",permalink:"/ja/docs/tags/ingress"}],version:"current",sidebarPosition:0,frontMatter:{title:"Ingress",sidebar_position:0,tags:["Kubernetes","\u30ea\u30bd\u30fc\u30b9","Networking","Ingress"]},sidebar:"mySidebar",previous:{title:"Networking",permalink:"/ja/docs/category/networking-1"},next:{title:"IngressClass",permalink:"/ja/docs/resource/kubernetes/Networking/IngressClass"}},o={},g=[{value:"\u30ea\u30bd\u30fc\u30b9\u30a2\u30a4\u30b3\u30f3",id:"\u30ea\u30bd\u30fc\u30b9\u30a2\u30a4\u30b3\u30f3",level:2},{value:"\u30ea\u30bd\u30fc\u30b9\u6982\u8981",id:"\u30ea\u30bd\u30fc\u30b9\u6982\u8981",level:2},{value:"\u95a2\u9023\u30ea\u30bd\u30fc\u30b9",id:"\u95a2\u9023\u30ea\u30bd\u30fc\u30b9",level:2},{value:"\u4e0a\u4f4d\u30ea\u30bd\u30fc\u30b9",id:"\u4e0a\u4f4d\u30ea\u30bd\u30fc\u30b9",level:3},{value:"\u63a5\u7d9a\u30ea\u30bd\u30fc\u30b9",id:"\u63a5\u7d9a\u30ea\u30bd\u30fc\u30b9",level:3},{value:"\u30ea\u30bd\u30fc\u30b9\u8a2d\u5b9a\u5024",id:"\u30ea\u30bd\u30fc\u30b9\u8a2d\u5b9a\u5024",level:2},{value:"\u53c2\u8003\u8cc7\u6599",id:"\u53c2\u8003\u8cc7\u6599",level:2}],p={toc:g},u="wrapper";function c(e){let{components:r,...n}=e;return(0,a.yg)(u,(0,t.A)({},p,n,{components:r,mdxType:"MDXLayout"}),(0,a.yg)("hr",null),(0,a.yg)("br",null),(0,a.yg)("h2",{id:"\u30ea\u30bd\u30fc\u30b9\u30a2\u30a4\u30b3\u30f3"},"\u30ea\u30bd\u30fc\u30b9\u30a2\u30a4\u30b3\u30f3"),(0,a.yg)("img",{src:"https://cloudstudioblob.blob.core.windows.net/cloudstudio/kubernetesImg/networking-ingress.png"}),(0,a.yg)("h2",{id:"\u30ea\u30bd\u30fc\u30b9\u6982\u8981"},"\u30ea\u30bd\u30fc\u30b9\u6982\u8981"),(0,a.yg)("p",null,"\u30a4\u30f3\u30d0\u30a6\u30f3\u30c9\u63a5\u7d9a\u304c\u30d0\u30c3\u30af\u30a8\u30f3\u30c9\u3067\u5b9a\u7fa9\u3055\u308c\u305f\u30a8\u30f3\u30c9\u30dd\u30a4\u30f3\u30c8\u306b\u5230\u9054\u3067\u304d\u308b\u3088\u3046\u306b\u3059\u308b\u30eb\u30fc\u30eb\u306b\u95a2\u3059\u308b\u30af\u30d0\u30cd\u30c6\u30a3\u30b9\u30ea\u30bd\u30fc\u30b9"),(0,a.yg)("h2",{id:"\u95a2\u9023\u30ea\u30bd\u30fc\u30b9"},"\u95a2\u9023\u30ea\u30bd\u30fc\u30b9"),(0,a.yg)("h3",{id:"\u4e0a\u4f4d\u30ea\u30bd\u30fc\u30b9"},"\u4e0a\u4f4d\u30ea\u30bd\u30fc\u30b9"),(0,a.yg)("ul",null,(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("a",{parentName:"li",href:"https://docs.cstudio.app/ja/docs/resource/kubernetes/Base/Cluster"},(0,a.yg)("strong",{parentName:"a"},"Cluster"))),(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("a",{parentName:"li",href:"https://docs.cstudio.app/ja/docs/resource/kubernetes/Core/Namespace"},(0,a.yg)("strong",{parentName:"a"},"Namespace")))),(0,a.yg)("h3",{id:"\u63a5\u7d9a\u30ea\u30bd\u30fc\u30b9"},"\u63a5\u7d9a\u30ea\u30bd\u30fc\u30b9"),(0,a.yg)("ul",null,(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("a",{parentName:"li",href:"https://docs.cstudio.app/ja/docs/resource/kubernetes/Networking/IngressClass"},(0,a.yg)("strong",{parentName:"a"},"IngressClass"))),(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("a",{parentName:"li",href:"https://docs.cstudio.app/ja/docs/resource/kubernetes/Helm/NginxIngress"},(0,a.yg)("strong",{parentName:"a"},"NginxIngress")))),(0,a.yg)("h2",{id:"\u30ea\u30bd\u30fc\u30b9\u8a2d\u5b9a\u5024"},"\u30ea\u30bd\u30fc\u30b9\u8a2d\u5b9a\u5024"),(0,a.yg)("ul",null,(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("inlineCode",{parentName:"li"},"service_name")," : Ingress \u30ea\u30bd\u30fc\u30b9\u540d"),(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("inlineCode",{parentName:"li"},"namespace")," : Ingress \u30ea\u30bd\u30fc\u30b9\u304c\u30c7\u30d7\u30ed\u30a4\u3055\u308c\u308b\u30cd\u30fc\u30e0\u30b9\u30da\u30fc\u30b9"),(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("inlineCode",{parentName:"li"},"annotations")," : \u30af\u30d0\u30cd\u30c6\u30a3\u30b9\u30b7\u30b9\u30c6\u30e0\u3067\u5fc5\u8981\u306a\u60c5\u5831\u3092\u8868\u793a\u3059\u308b\u305f\u3081\u306b\u4f7f\u7528\u3059\u308b key-value"),(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("inlineCode",{parentName:"li"},"labels")," : \u30aa\u30d6\u30b8\u30a7\u30af\u30c8\u3092\u533a\u5207\u308b\u305f\u3081\u306b\u30e6\u30fc\u30b6\u30fc\u304c\u4efb\u610f\u306b\u5e0c\u671b\u3059\u308b\u5024\u3092\u6307\u5b9a"),(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("inlineCode",{parentName:"li"},"tls")," : TLS \u3092\u9069\u7528",(0,a.yg)("ul",{parentName:"li"},(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("inlineCode",{parentName:"li"},"hosts")," : TLS \u8a8d\u8a3c\u66f8\u306b\u542b\u307e\u308c\u308b\u30db\u30b9\u30c8\u306e\u30ea\u30b9\u30c8"),(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("inlineCode",{parentName:"li"},"secret_name")," : TLS \u8a8d\u8a3c\u66f8\u306b\u95a2\u9023\u4ed8\u3051\u3089\u308c\u305f\u30af\u30d0\u30cd\u30c6\u30a3\u30b9\u30b7\u30fc\u30af\u30ec\u30c3\u30c8\u306e\u540d\u524d\u3092\u6307\u5b9a"))),(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("inlineCode",{parentName:"li"},"ingress_class_name")," : \u63a5\u7d9a\u3059\u308b\u30a4\u30f3\u30b0\u30ec\u30b9\u30af\u30e9\u30b9\u306e\u540d\u524d\u3092\u6307\u5b9a"),(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("inlineCode",{parentName:"li"},"host")," : \u30eb\u30fc\u30c6\u30a3\u30f3\u30b0 \u30eb\u30fc\u30eb\u3092\u9069\u7528\u3059\u308b\u30db\u30b9\u30c8\u30cd\u30fc\u30e0 \u30a2\u30c9\u30ec\u30b9\u3092\u6307\u5b9a"),(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("inlineCode",{parentName:"li"},"backend")," : \u30eb\u30fc\u30c6\u30a3\u30f3\u30b0\u3059\u308b\u30d0\u30c3\u30af\u30a8\u30f3\u30c9\u60c5\u5831\u3092\u5165\u529b",(0,a.yg)("ul",{parentName:"li"},(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("inlineCode",{parentName:"li"},"name")," : Routing rule \u306e\u540d\u524d",(0,a.yg)("ul",{parentName:"li"},(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("inlineCode",{parentName:"li"},"path")," : \u30d0\u30c3\u30af\u30a8\u30f3\u30c9\u306b\u63a5\u7d9a\u3059\u308b\u30d1\u30b9"),(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("inlineCode",{parentName:"li"},"path_type")," : \u7d4c\u8def\u4e00\u81f4\u306e\u89e3\u6790\u3092\u6c7a\u5b9a - ",(0,a.yg)("inlineCode",{parentName:"li"},"Prefix"),", ",(0,a.yg)("inlineCode",{parentName:"li"},"ImplementationSpecific"),", ",(0,a.yg)("inlineCode",{parentName:"li"},"Exact")),(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("inlineCode",{parentName:"li"},"port")," : \u30b5\u30fc\u30d3\u30b9\u306e\u30dd\u30fc\u30c8\u756a\u53f7 - ",(0,a.yg)("inlineCode",{parentName:"li"},"1~65535"))))))),(0,a.yg)("hr",null),(0,a.yg)("h2",{id:"\u53c2\u8003\u8cc7\u6599"},"\u53c2\u8003\u8cc7\u6599"),(0,a.yg)("ul",null,(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("a",{parentName:"li",href:"https://kubernetes.io/docs/concepts/services-networking/ingress/"},"Ingress(kubernetes)")),(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("a",{parentName:"li",href:"https://registry.terraform.io/providers/hashicorp/kubernetes/latest/docs/resources/ingress"},"Ingress(Terraform)"))))}c.isMDXComponent=!0}}]);