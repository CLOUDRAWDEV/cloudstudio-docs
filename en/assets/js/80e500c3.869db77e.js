"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[19639],{15680:(e,r,t)=>{t.d(r,{xA:()=>s,yg:()=>g});var n=t(96540);function o(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function a(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function i(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?a(Object(t),!0).forEach((function(r){o(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function l(e,r){if(null==e)return{};var t,n,o=function(e,r){if(null==e)return{};var t,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)t=a[n],r.indexOf(t)>=0||(o[t]=e[t]);return o}(e,r);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)t=a[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var c=n.createContext({}),u=function(e){var r=n.useContext(c),t=r;return e&&(t="function"==typeof e?e(r):i(i({},r),e)),t},s=function(e){var r=u(e.components);return n.createElement(c.Provider,{value:r},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var r=e.children;return n.createElement(n.Fragment,{},r)}},y=n.forwardRef((function(e,r){var t=e.components,o=e.mdxType,a=e.originalType,c=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),p=u(t),y=o,g=p["".concat(c,".").concat(y)]||p[y]||d[y]||a;return t?n.createElement(g,i(i({ref:r},s),{},{components:t})):n.createElement(g,i({ref:r},s))}));function g(e,r){var t=arguments,o=r&&r.mdxType;if("string"==typeof e||o){var a=t.length,i=new Array(a);i[0]=y;var l={};for(var c in r)hasOwnProperty.call(r,c)&&(l[c]=r[c]);l.originalType=e,l[p]="string"==typeof e?e:o,i[1]=l;for(var u=2;u<a;u++)i[u]=t[u];return n.createElement.apply(null,i)}return n.createElement.apply(null,t)}y.displayName="MDXCreateElement"},87347:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>c,contentTitle:()=>i,default:()=>d,frontMatter:()=>a,metadata:()=>l,toc:()=>u});var n=t(58168),o=(t(96540),t(15680));const a={title:"NetworkInterface",sidebar_position:6,tags:["Azure","Resource","Network","NetworkInterface"]},i=void 0,l={unversionedId:"resource/azure/Network/NetworkInterface",id:"resource/azure/Network/NetworkInterface",title:"NetworkInterface",description:"Resource Icon",source:"@site/i18n/en/docusaurus-plugin-content-docs/current/resource/azure/Network/NetworkInterface.mdx",sourceDirName:"resource/azure/Network",slug:"/resource/azure/Network/NetworkInterface",permalink:"/en/docs/resource/azure/Network/NetworkInterface",draft:!1,tags:[{label:"Azure",permalink:"/en/docs/tags/azure"},{label:"Resource",permalink:"/en/docs/tags/resource"},{label:"Network",permalink:"/en/docs/tags/network"},{label:"NetworkInterface",permalink:"/en/docs/tags/network-interface"}],version:"current",sidebarPosition:6,frontMatter:{title:"NetworkInterface",sidebar_position:6,tags:["Azure","Resource","Network","NetworkInterface"]},sidebar:"mySidebar",previous:{title:"NetworkDdosProtectionPlan",permalink:"/en/docs/resource/azure/Network/NetworkDdosProtectionPlan"},next:{title:"NetworkSecurityGroup",permalink:"/en/docs/resource/azure/Network/NetworkSecurityGroup"}},c={},u=[{value:"Resource Icon",id:"resource-icon",level:2},{value:"Resource Overview",id:"resource-overview",level:2},{value:"Associated Resources",id:"associated-resources",level:2},{value:"Parent Resource",id:"parent-resource",level:3},{value:"Connected Resources",id:"connected-resources",level:3},{value:"Resource Setting Values",id:"resource-setting-values",level:2},{value:"Reference Materials",id:"reference-materials",level:2}],s={toc:u},p="wrapper";function d(e){let{components:r,...t}=e;return(0,o.yg)(p,(0,n.A)({},s,t,{components:r,mdxType:"MDXLayout"}),(0,o.yg)("hr",null),(0,o.yg)("br",null),(0,o.yg)("h2",{id:"resource-icon"},"Resource Icon"),(0,o.yg)("img",{src:"https://cloudstudioblob.blob.core.windows.net/cloudstudio/azureImg/network-network_interface.png"}),(0,o.yg)("h2",{id:"resource-overview"},"Resource Overview"),(0,o.yg)("h2",{id:"associated-resources"},"Associated Resources"),(0,o.yg)("h3",{id:"parent-resource"},"Parent Resource"),(0,o.yg)("ul",null,(0,o.yg)("li",{parentName:"ul"},(0,o.yg)("a",{parentName:"li",href:"https://docs.cstudio.app/en/docs/resource/azure/Base/ResourceGroup"},(0,o.yg)("strong",{parentName:"a"},"Resource Group")))),(0,o.yg)("h3",{id:"connected-resources"},"Connected Resources"),(0,o.yg)("ul",null,(0,o.yg)("li",{parentName:"ul"},(0,o.yg)("a",{parentName:"li",href:"https://docs.cstudio.app/en/docs/resource/azure/Network/PublicIp"},(0,o.yg)("strong",{parentName:"a"},"Public Ip")))),(0,o.yg)("h2",{id:"resource-setting-values"},"Resource Setting Values"),(0,o.yg)("ul",null,(0,o.yg)("li",{parentName:"ul"},(0,o.yg)("inlineCode",{parentName:"li"},"included_subnet_name")," : Name of subnet where Network Interface included"),(0,o.yg)("li",{parentName:"ul"},(0,o.yg)("inlineCode",{parentName:"li"},"ip_configuration"),(0,o.yg)("ul",{parentName:"li"},(0,o.yg)("li",{parentName:"ul"},(0,o.yg)("inlineCode",{parentName:"li"},"is_primary")," : Enalbed primary Ip Configuration - ",(0,o.yg)("inlineCode",{parentName:"li"},"true"),", ",(0,o.yg)("inlineCode",{parentName:"li"},"false")),(0,o.yg)("li",{parentName:"ul"},(0,o.yg)("inlineCode",{parentName:"li"},"private_ip_address_allocation")," : Private Ip address allocation method"),(0,o.yg)("li",{parentName:"ul"},(0,o.yg)("inlineCode",{parentName:"li"},"enabled_public_ip")," : Enabled using Public Ip - ",(0,o.yg)("inlineCode",{parentName:"li"},"true"),", ",(0,o.yg)("inlineCode",{parentName:"li"},"false")),(0,o.yg)("li",{parentName:"ul"},(0,o.yg)("inlineCode",{parentName:"li"},"linked_public_ip_name")," : The name of Public Ip to use"))),(0,o.yg)("li",{parentName:"ul"},(0,o.yg)("inlineCode",{parentName:"li"},"tag")," : Tag to categorize resources - up to 512 characters, ",(0,o.yg)("inlineCode",{parentName:"li"},"key"),":",(0,o.yg)("inlineCode",{parentName:"li"},"value"))),(0,o.yg)("hr",null),(0,o.yg)("h2",{id:"reference-materials"},"Reference Materials"),(0,o.yg)("ul",null,(0,o.yg)("li",{parentName:"ul"},(0,o.yg)("a",{parentName:"li",href:"https://learn.microsoft.com/ko-kr/azure/virtual-network/virtual-network-network-interface?tabs=azure-portal#associate-or-dissociate-a-network-security-group"},"Azure NetworkInterface(Microsoft)")),(0,o.yg)("li",{parentName:"ul"},(0,o.yg)("a",{parentName:"li",href:"https://registry.terraform.io/providers/hashicorp/azurerm/latest/docs/resources/network_interface"},"Azure NetworkInterface(Terraform)"))))}d.isMDXComponent=!0}}]);