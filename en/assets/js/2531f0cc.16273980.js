"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[71044],{15680:(e,r,t)=>{t.d(r,{xA:()=>u,yg:()=>y});var a=t(96540);function n(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function o(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);r&&(a=a.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,a)}return t}function s(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?o(Object(t),!0).forEach((function(r){n(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function l(e,r){if(null==e)return{};var t,a,n=function(e,r){if(null==e)return{};var t,a,n={},o=Object.keys(e);for(a=0;a<o.length;a++)t=o[a],r.indexOf(t)>=0||(n[t]=e[t]);return n}(e,r);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)t=o[a],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(n[t]=e[t])}return n}var i=a.createContext({}),c=function(e){var r=a.useContext(i),t=r;return e&&(t="function"==typeof e?e(r):s(s({},r),e)),t},u=function(e){var r=c(e.components);return a.createElement(i.Provider,{value:r},e.children)},p="mdxType",m={inlineCode:"code",wrapper:function(e){var r=e.children;return a.createElement(a.Fragment,{},r)}},d=a.forwardRef((function(e,r){var t=e.components,n=e.mdxType,o=e.originalType,i=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),p=c(t),d=n,y=p["".concat(i,".").concat(d)]||p[d]||m[d]||o;return t?a.createElement(y,s(s({ref:r},u),{},{components:t})):a.createElement(y,s({ref:r},u))}));function y(e,r){var t=arguments,n=r&&r.mdxType;if("string"==typeof e||n){var o=t.length,s=new Array(o);s[0]=d;var l={};for(var i in r)hasOwnProperty.call(r,i)&&(l[i]=r[i]);l.originalType=e,l[p]="string"==typeof e?e:n,s[1]=l;for(var c=2;c<o;c++)s[c]=t[c];return a.createElement.apply(null,s)}return a.createElement.apply(null,t)}d.displayName="MDXCreateElement"},12380:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>i,contentTitle:()=>s,default:()=>m,frontMatter:()=>o,metadata:()=>l,toc:()=>c});var a=t(58168),n=(t(96540),t(15680));const o={title:"HashicorpVault",sidebar_position:0,tags:["Kubernetes","Resource","Helm","HashicorpVault"]},s=void 0,l={unversionedId:"resource/kubernetes/Helm/HashicorpVault",id:"resource/kubernetes/Helm/HashicorpVault",title:"HashicorpVault",description:"Resource Icon",source:"@site/i18n/en/docusaurus-plugin-content-docs/current/resource/kubernetes/Helm/HashicorpVault.mdx",sourceDirName:"resource/kubernetes/Helm",slug:"/resource/kubernetes/Helm/HashicorpVault",permalink:"/en/docs/resource/kubernetes/Helm/HashicorpVault",draft:!1,tags:[{label:"Kubernetes",permalink:"/en/docs/tags/kubernetes"},{label:"Resource",permalink:"/en/docs/tags/resource"},{label:"Helm",permalink:"/en/docs/tags/helm"},{label:"HashicorpVault",permalink:"/en/docs/tags/hashicorp-vault"}],version:"current",sidebarPosition:0,frontMatter:{title:"HashicorpVault",sidebar_position:0,tags:["Kubernetes","Resource","Helm","HashicorpVault"]},sidebar:"mySidebar",previous:{title:"CustomChart",permalink:"/en/docs/resource/kubernetes/Helm/CustomChart"},next:{title:"IstioCrds",permalink:"/en/docs/resource/kubernetes/Helm/IstioCrds"}},i={},c=[{value:"Resource Icon",id:"resource-icon",level:2},{value:"Resource Overview",id:"resource-overview",level:2},{value:"Associated Resources",id:"associated-resources",level:2},{value:"Parent Resource",id:"parent-resource",level:3},{value:"Connected Resources",id:"connected-resources",level:3},{value:"Resource Setting Values",id:"resource-setting-values",level:2},{value:"Reference Materials",id:"reference-materials",level:2}],u={toc:c},p="wrapper";function m(e){let{components:r,...t}=e;return(0,n.yg)(p,(0,a.A)({},u,t,{components:r,mdxType:"MDXLayout"}),(0,n.yg)("hr",null),(0,n.yg)("br",null),(0,n.yg)("h2",{id:"resource-icon"},"Resource Icon"),(0,n.yg)("img",{src:"https://cloudstudioblob.blob.core.windows.net/cloudstudio/kubernetesImg/helm-hashicorp_vault.png"}),(0,n.yg)("h2",{id:"resource-overview"},"Resource Overview"),(0,n.yg)("p",null,"This is a Helm chart for installing HashiCorp Vault."),(0,n.yg)("h2",{id:"associated-resources"},"Associated Resources"),(0,n.yg)("h3",{id:"parent-resource"},"Parent Resource"),(0,n.yg)("ul",null,(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("a",{parentName:"li",href:"https://docs.cstudio.app/en/docs/resource/kubernetes/Base/Cluster"},(0,n.yg)("strong",{parentName:"a"},"Cluster"))),(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("a",{parentName:"li",href:"https://docs.cstudio.app/en/docs/resource/kubernetes/Core/Namespace"},(0,n.yg)("strong",{parentName:"a"},"Namespace")))),(0,n.yg)("h3",{id:"connected-resources"},"Connected Resources"),(0,n.yg)("h2",{id:"resource-setting-values"},"Resource Setting Values"),(0,n.yg)("ul",null,(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("inlineCode",{parentName:"li"},"service_name")," : HashiCorp Vault Helm Chart Release Name"),(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("inlineCode",{parentName:"li"},"namespace")," : Namespace where Hashicorp Vault Helm Chart resources will be deployed"),(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("inlineCode",{parentName:"li"},"version")," : Specifies the version of the Hashicorp Vault Helm chart"),(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("inlineCode",{parentName:"li"},"set")," : Dynamically change values of Hashicorp Vault default chart")),(0,n.yg)("hr",null),(0,n.yg)("h2",{id:"reference-materials"},"Reference Materials"),(0,n.yg)("ul",null,(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("a",{parentName:"li",href:"https://developer.hashicorp.com/vault/docs/platform/k8s/helm"},"Helm install(Hashicorp-vault)")),(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("a",{parentName:"li",href:"https://registry.terraform.io/providers/hashicorp/helm/latest/docs"},"Helm Provider(Terraform)"))))}m.isMDXComponent=!0}}]);