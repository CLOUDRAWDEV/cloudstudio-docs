"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[34372],{15680:(e,r,t)=>{t.d(r,{xA:()=>u,yg:()=>d});var n=t(96540);function a(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function o(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function s(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?o(Object(t),!0).forEach((function(r){a(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function l(e,r){if(null==e)return{};var t,n,a=function(e,r){if(null==e)return{};var t,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)t=o[n],r.indexOf(t)>=0||(a[t]=e[t]);return a}(e,r);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)t=o[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var i=n.createContext({}),c=function(e){var r=n.useContext(i),t=r;return e&&(t="function"==typeof e?e(r):s(s({},r),e)),t},u=function(e){var r=c(e.components);return n.createElement(i.Provider,{value:r},e.children)},p="mdxType",m={inlineCode:"code",wrapper:function(e){var r=e.children;return n.createElement(n.Fragment,{},r)}},g=n.forwardRef((function(e,r){var t=e.components,a=e.mdxType,o=e.originalType,i=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),p=c(t),g=a,d=p["".concat(i,".").concat(g)]||p[g]||m[g]||o;return t?n.createElement(d,s(s({ref:r},u),{},{components:t})):n.createElement(d,s({ref:r},u))}));function d(e,r){var t=arguments,a=r&&r.mdxType;if("string"==typeof e||a){var o=t.length,s=new Array(o);s[0]=g;var l={};for(var i in r)hasOwnProperty.call(r,i)&&(l[i]=r[i]);l.originalType=e,l[p]="string"==typeof e?e:a,s[1]=l;for(var c=2;c<o;c++)s[c]=t[c];return n.createElement.apply(null,s)}return n.createElement.apply(null,t)}g.displayName="MDXCreateElement"},45404:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>i,contentTitle:()=>s,default:()=>m,frontMatter:()=>o,metadata:()=>l,toc:()=>c});var n=t(58168),a=(t(96540),t(15680));const o={title:"CertManager",sidebar_position:0,tags:["Kubernetes","Resource","Helm","CertManager"]},s=void 0,l={unversionedId:"resource/kubernetes/Helm/CertManager",id:"resource/kubernetes/Helm/CertManager",title:"CertManager",description:"Resource Icon",source:"@site/i18n/en/docusaurus-plugin-content-docs/current/resource/kubernetes/Helm/CertManager.mdx",sourceDirName:"resource/kubernetes/Helm",slug:"/resource/kubernetes/Helm/CertManager",permalink:"/en/docs/resource/kubernetes/Helm/CertManager",draft:!1,tags:[{label:"Kubernetes",permalink:"/en/docs/tags/kubernetes"},{label:"Resource",permalink:"/en/docs/tags/resource"},{label:"Helm",permalink:"/en/docs/tags/helm"},{label:"CertManager",permalink:"/en/docs/tags/cert-manager"}],version:"current",sidebarPosition:0,frontMatter:{title:"CertManager",sidebar_position:0,tags:["Kubernetes","Resource","Helm","CertManager"]},sidebar:"mySidebar",previous:{title:"Helm",permalink:"/en/docs/category/helm"},next:{title:"CustomChart",permalink:"/en/docs/resource/kubernetes/Helm/CustomChart"}},i={},c=[{value:"Resource Icon",id:"resource-icon",level:2},{value:"Resource Overview",id:"resource-overview",level:2},{value:"Associated Resources",id:"associated-resources",level:2},{value:"Parent Resource",id:"parent-resource",level:3},{value:"Connected Resources",id:"connected-resources",level:3},{value:"Resource Setting Values",id:"resource-setting-values",level:2},{value:"Reference Materials",id:"reference-materials",level:2}],u={toc:c},p="wrapper";function m(e){let{components:r,...t}=e;return(0,a.yg)(p,(0,n.A)({},u,t,{components:r,mdxType:"MDXLayout"}),(0,a.yg)("hr",null),(0,a.yg)("br",null),(0,a.yg)("h2",{id:"resource-icon"},"Resource Icon"),(0,a.yg)("img",{src:"https://cloudstudioblob.blob.core.windows.net/cloudstudio/kubernetesImg/helm-cert_manager.png"}),(0,a.yg)("h2",{id:"resource-overview"},"Resource Overview"),(0,a.yg)("p",null,"A Helm chart for installing Cert-Manager."),(0,a.yg)("h2",{id:"associated-resources"},"Associated Resources"),(0,a.yg)("h3",{id:"parent-resource"},"Parent Resource"),(0,a.yg)("ul",null,(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("a",{parentName:"li",href:"https://docs.cstudio.app/en/docs/resource/kubernetes/Base/Cluster"},(0,a.yg)("strong",{parentName:"a"},"Cluster"))),(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("a",{parentName:"li",href:"https://docs.cstudio.app/en/docs/resource/kubernetes/Core/Namespace"},(0,a.yg)("strong",{parentName:"a"},"Namespace")))),(0,a.yg)("h3",{id:"connected-resources"},"Connected Resources"),(0,a.yg)("h2",{id:"resource-setting-values"},"Resource Setting Values"),(0,a.yg)("ul",null,(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("inlineCode",{parentName:"li"},"service_name")," : Cert-Manager Helm chart release name"),(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("inlineCode",{parentName:"li"},"namespace")," : Namespace where the CertManager Helm Chart resource will be deployed"),(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("inlineCode",{parentName:"li"},"version")," : CertManager Helm Chart version to use"),(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("inlineCode",{parentName:"li"},"installCRDs")," : Check whether custom resource definition related to Cert Manager is installed")),(0,a.yg)("hr",null),(0,a.yg)("h2",{id:"reference-materials"},"Reference Materials"),(0,a.yg)("ul",null,(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("a",{parentName:"li",href:"https://cert-manager.io/docs/installation/helm/"},"Helm install(CertManager)")),(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("a",{parentName:"li",href:"https://registry.terraform.io/providers/hashicorp/helm/latest/docs"},"Helm Provider(Terraform)"))))}m.isMDXComponent=!0}}]);