"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[98868],{15680:(e,r,t)=>{t.d(r,{xA:()=>c,yg:()=>y});var a=t(96540);function n(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function o(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);r&&(a=a.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,a)}return t}function s(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?o(Object(t),!0).forEach((function(r){n(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function i(e,r){if(null==e)return{};var t,a,n=function(e,r){if(null==e)return{};var t,a,n={},o=Object.keys(e);for(a=0;a<o.length;a++)t=o[a],r.indexOf(t)>=0||(n[t]=e[t]);return n}(e,r);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)t=o[a],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(n[t]=e[t])}return n}var l=a.createContext({}),u=function(e){var r=a.useContext(l),t=r;return e&&(t="function"==typeof e?e(r):s(s({},r),e)),t},c=function(e){var r=u(e.components);return a.createElement(l.Provider,{value:r},e.children)},p="mdxType",g={inlineCode:"code",wrapper:function(e){var r=e.children;return a.createElement(a.Fragment,{},r)}},d=a.forwardRef((function(e,r){var t=e.components,n=e.mdxType,o=e.originalType,l=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),p=u(t),d=n,y=p["".concat(l,".").concat(d)]||p[d]||g[d]||o;return t?a.createElement(y,s(s({ref:r},c),{},{components:t})):a.createElement(y,s({ref:r},c))}));function y(e,r){var t=arguments,n=r&&r.mdxType;if("string"==typeof e||n){var o=t.length,s=new Array(o);s[0]=d;var i={};for(var l in r)hasOwnProperty.call(r,l)&&(i[l]=r[l]);i.originalType=e,i[p]="string"==typeof e?e:n,s[1]=i;for(var u=2;u<o;u++)s[u]=t[u];return a.createElement.apply(null,s)}return a.createElement.apply(null,t)}d.displayName="MDXCreateElement"},48818:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>l,contentTitle:()=>s,default:()=>g,frontMatter:()=>o,metadata:()=>i,toc:()=>u});var a=t(58168),n=(t(96540),t(15680));const o={title:"ConfigMap",sidebar_position:0,tags:["Kubernetes","Resource","Core","ConfigMap"]},s=void 0,i={unversionedId:"resource/kubernetes/Core/ConfigMap",id:"resource/kubernetes/Core/ConfigMap",title:"ConfigMap",description:"Resource Icon",source:"@site/i18n/en/docusaurus-plugin-content-docs/current/resource/kubernetes/Core/ConfigMap.mdx",sourceDirName:"resource/kubernetes/Core",slug:"/resource/kubernetes/Core/ConfigMap",permalink:"/en/docs/resource/kubernetes/Core/ConfigMap",draft:!1,tags:[{label:"Kubernetes",permalink:"/en/docs/tags/kubernetes"},{label:"Resource",permalink:"/en/docs/tags/resource"},{label:"Core",permalink:"/en/docs/tags/core"},{label:"ConfigMap",permalink:"/en/docs/tags/config-map"}],version:"current",sidebarPosition:0,frontMatter:{title:"ConfigMap",sidebar_position:0,tags:["Kubernetes","Resource","Core","ConfigMap"]},sidebar:"mySidebar",previous:{title:"Core",permalink:"/en/docs/category/core"},next:{title:"Namespace",permalink:"/en/docs/resource/kubernetes/Core/Namespace"}},l={},u=[{value:"Resource Icon",id:"resource-icon",level:2},{value:"Resource Overview",id:"resource-overview",level:2},{value:"Associated Resources",id:"associated-resources",level:2},{value:"Parent Resource",id:"parent-resource",level:3},{value:"Connected Resources",id:"connected-resources",level:3},{value:"Resource Setting Values",id:"resource-setting-values",level:2},{value:"Reference Materials",id:"reference-materials",level:2}],c={toc:u},p="wrapper";function g(e){let{components:r,...t}=e;return(0,n.yg)(p,(0,a.A)({},c,t,{components:r,mdxType:"MDXLayout"}),(0,n.yg)("hr",null),(0,n.yg)("br",null),(0,n.yg)("h2",{id:"resource-icon"},"Resource Icon"),(0,n.yg)("img",{src:"https://cloudstudioblob.blob.core.windows.net/cloudstudio/kubernetesImg/core-config_map.png"}),(0,n.yg)("h2",{id:"resource-overview"},"Resource Overview"),(0,n.yg)("p",null,"A Kubernetes resource used to separate and store application configuration data and pass it to containers within a pod."),(0,n.yg)("h2",{id:"associated-resources"},"Associated Resources"),(0,n.yg)("h3",{id:"parent-resource"},"Parent Resource"),(0,n.yg)("ul",null,(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("a",{parentName:"li",href:"https://docs.cstudio.app/en/docs/resource/kubernetes/Base/Cluster"},(0,n.yg)("strong",{parentName:"a"},"Cluster"))),(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("a",{parentName:"li",href:"https://docs.cstudio.app/en/docs/resource/kubernetes/Core/Namespace"},(0,n.yg)("strong",{parentName:"a"},"Namespace")))),(0,n.yg)("h3",{id:"connected-resources"},"Connected Resources"),(0,n.yg)("ul",null,(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("a",{parentName:"li",href:"https://docs.cstudio.app/en/docs/resource/kubernetes/Core/Pod"},(0,n.yg)("strong",{parentName:"a"},"Pod"))),(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("a",{parentName:"li",href:"https://docs.cstudio.app/en/docs/resource/kubernetes/Apps/Deployment"},(0,n.yg)("strong",{parentName:"a"},"Deployment"))),(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("a",{parentName:"li",href:"https://docs.cstudio.app/en/docs/resource/kubernetes/Core/DaemonSet"},(0,n.yg)("strong",{parentName:"a"},"DaemonSet"))),(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("a",{parentName:"li",href:"https://docs.cstudio.app/en/docs/resource/kubernetes/Apps/StatefulSet"},(0,n.yg)("strong",{parentName:"a"},"StatefulSet"))),(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("a",{parentName:"li",href:"https://docs.cstudio.app/en/docs/resource/kubernetes/Batch/Job"},(0,n.yg)("strong",{parentName:"a"},"Job"))),(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("a",{parentName:"li",href:"https://docs.cstudio.app/en/docs/resource/kubernetes/Batch/CronJob"},(0,n.yg)("strong",{parentName:"a"},"CronJob")))),(0,n.yg)("h2",{id:"resource-setting-values"},"Resource Setting Values"),(0,n.yg)("ul",null,(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("inlineCode",{parentName:"li"},"service_name")," : Name of the ConfigMap resource"),(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("inlineCode",{parentName:"li"},"namespace")," : Namespace where ConfigMap resources will be deployed"),(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("inlineCode",{parentName:"li"},"annotations")," : A key-value used to display necessary information in the Kubernetes system"),(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("inlineCode",{parentName:"li"},"labels")," : To distinguish objects, the user arbitrarily specifies the desired value"),(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("inlineCode",{parentName:"li"},"data")," : General data as key-value pairs - used to store configuration information in text format such as configuration files, environment variables, etc",(0,n.yg)("ul",{parentName:"li"},(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("inlineCode",{parentName:"li"},"data.name")," : The key value of the data"),(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("inlineCode",{parentName:"li"},"data.value")," : The value of the data"))),(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("inlineCode",{parentName:"li"},"binary_data")," : Binary data for a specific key - used to store binary files or other binary format data",(0,n.yg)("ul",{parentName:"li"},(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("inlineCode",{parentName:"li"},"data.name")," : The key for the binary data"),(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("inlineCode",{parentName:"li"},"data.value")," : The value for the binary data")))),(0,n.yg)("hr",null),(0,n.yg)("h2",{id:"reference-materials"},"Reference Materials"),(0,n.yg)("ul",null,(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("a",{parentName:"li",href:"https://kubernetes.io/docs/concepts/configuration/configmap/"},"ConfigMap(Kubernetes)")),(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("a",{parentName:"li",href:"https://registry.terraform.io/providers/hashicorp/kubernetes/latest/docs/resources/config_map"},"ConfigMap(Terraform)"))))}g.isMDXComponent=!0}}]);