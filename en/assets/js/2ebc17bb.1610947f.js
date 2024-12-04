"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[79557],{15680:(e,r,t)=>{t.d(r,{xA:()=>c,yg:()=>g});var n=t(96540);function o(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function a(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function i(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?a(Object(t),!0).forEach((function(r){o(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function s(e,r){if(null==e)return{};var t,n,o=function(e,r){if(null==e)return{};var t,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)t=a[n],r.indexOf(t)>=0||(o[t]=e[t]);return o}(e,r);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)t=a[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var u=n.createContext({}),l=function(e){var r=n.useContext(u),t=r;return e&&(t="function"==typeof e?e(r):i(i({},r),e)),t},c=function(e){var r=l(e.components);return n.createElement(u.Provider,{value:r},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var r=e.children;return n.createElement(n.Fragment,{},r)}},m=n.forwardRef((function(e,r){var t=e.components,o=e.mdxType,a=e.originalType,u=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),p=l(t),m=o,g=p["".concat(u,".").concat(m)]||p[m]||d[m]||a;return t?n.createElement(g,i(i({ref:r},c),{},{components:t})):n.createElement(g,i({ref:r},c))}));function g(e,r){var t=arguments,o=r&&r.mdxType;if("string"==typeof e||o){var a=t.length,i=new Array(a);i[0]=m;var s={};for(var u in r)hasOwnProperty.call(r,u)&&(s[u]=r[u]);s.originalType=e,s[p]="string"==typeof e?e:o,i[1]=s;for(var l=2;l<a;l++)i[l]=t[l];return n.createElement.apply(null,i)}return n.createElement.apply(null,t)}m.displayName="MDXCreateElement"},94816:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>u,contentTitle:()=>i,default:()=>d,frontMatter:()=>a,metadata:()=>s,toc:()=>l});var n=t(58168),o=(t(96540),t(15680));const a={title:"Disk",sidebar_position:1,tags:["Azure","Resource","Compute","Disk"]},i=void 0,s={unversionedId:"resource/azure/Compute/Disk",id:"resource/azure/Compute/Disk",title:"Disk",description:"Resource Icon",source:"@site/i18n/en/docusaurus-plugin-content-docs/current/resource/azure/Compute/Disk.mdx",sourceDirName:"resource/azure/Compute",slug:"/resource/azure/Compute/Disk",permalink:"/en/docs/resource/azure/Compute/Disk",draft:!1,tags:[{label:"Azure",permalink:"/en/docs/tags/azure"},{label:"Resource",permalink:"/en/docs/tags/resource"},{label:"Compute",permalink:"/en/docs/tags/compute"},{label:"Disk",permalink:"/en/docs/tags/disk"}],version:"current",sidebarPosition:1,frontMatter:{title:"Disk",sidebar_position:1,tags:["Azure","Resource","Compute","Disk"]},sidebar:"mySidebar",previous:{title:"AvailabilitySet",permalink:"/en/docs/resource/azure/Compute/Availabilityset"},next:{title:"LinuxVirtualMachine",permalink:"/en/docs/resource/azure/Compute/LinuxVirtualMachine"}},u={},l=[{value:"Resource Icon",id:"resource-icon",level:2},{value:"Resource Overview",id:"resource-overview",level:2},{value:"Associated Resources",id:"associated-resources",level:2},{value:"Parent Resource",id:"parent-resource",level:3},{value:"Connected Resources",id:"connected-resources",level:3},{value:"Resource Setting Values",id:"resource-setting-values",level:2},{value:"Reference Materials",id:"reference-materials",level:2}],c={toc:l},p="wrapper";function d(e){let{components:r,...t}=e;return(0,o.yg)(p,(0,n.A)({},c,t,{components:r,mdxType:"MDXLayout"}),(0,o.yg)("hr",null),(0,o.yg)("br",null),(0,o.yg)("h2",{id:"resource-icon"},"Resource Icon"),(0,o.yg)("img",{src:"https://cloudstudioblob.blob.core.windows.net/cloudstudio/azureImg/compute-disk.png"}),(0,o.yg)("h2",{id:"resource-overview"},"Resource Overview"),(0,o.yg)("p",null,"Azure Virtual Machines are virtual servers running in the cloud.\nA virtual machine includes one or more disks, which are used to store the operating system (OS) and data.\nDisks serve as persistent storage for the virtual machine."),(0,o.yg)("h2",{id:"associated-resources"},"Associated Resources"),(0,o.yg)("h3",{id:"parent-resource"},"Parent Resource"),(0,o.yg)("ul",null,(0,o.yg)("li",{parentName:"ul"},(0,o.yg)("a",{parentName:"li",href:"https://docs.cstudio.app/en/docs/resource/azure/Base/ResourceGroup"},(0,o.yg)("strong",{parentName:"a"},"Resource Group")))),(0,o.yg)("h3",{id:"connected-resources"},"Connected Resources"),(0,o.yg)("h2",{id:"resource-setting-values"},"Resource Setting Values"),(0,o.yg)("ul",null,(0,o.yg)("li",{parentName:"ul"},(0,o.yg)("inlineCode",{parentName:"li"},"storage_type"),": The type of storage account to back the Disk"),(0,o.yg)("li",{parentName:"ul"},(0,o.yg)("inlineCode",{parentName:"li"},"size_gb"),": The size of the Disk in GB - ",(0,o.yg)("inlineCode",{parentName:"li"},"1")," to ",(0,o.yg)("inlineCode",{parentName:"li"},"32767")),(0,o.yg)("li",{parentName:"ul"},(0,o.yg)("inlineCode",{parentName:"li"},"enabled_public_network_access"),": Allow public network access for the Disk - ",(0,o.yg)("inlineCode",{parentName:"li"},"true"),", ",(0,o.yg)("inlineCode",{parentName:"li"},"false")),(0,o.yg)("li",{parentName:"ul"},(0,o.yg)("inlineCode",{parentName:"li"},"tag")," : Tag to categorize resources - up to 512 characters, ",(0,o.yg)("inlineCode",{parentName:"li"},"key:value"))),(0,o.yg)("hr",null),(0,o.yg)("h2",{id:"reference-materials"},"Reference Materials"),(0,o.yg)("ul",null,(0,o.yg)("li",{parentName:"ul"},(0,o.yg)("a",{parentName:"li",href:"https://learn.microsoft.com/ko-kr/azure/virtual-machines/managed-disks-overview"},"Azure Compute Disk(Microsoft)")),(0,o.yg)("li",{parentName:"ul"},(0,o.yg)("a",{parentName:"li",href:"https://registry.terraform.io/providers/hashicorp/azurerm/latest/docs/resources/disk_access"},"Azure Compute Disk(Terraform)"))))}d.isMDXComponent=!0}}]);