"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[97306],{15680:(e,r,t)=>{t.d(r,{xA:()=>u,yg:()=>d});var n=t(96540);function o(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function a(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function i(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?a(Object(t),!0).forEach((function(r){o(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function l(e,r){if(null==e)return{};var t,n,o=function(e,r){if(null==e)return{};var t,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)t=a[n],r.indexOf(t)>=0||(o[t]=e[t]);return o}(e,r);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)t=a[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var s=n.createContext({}),c=function(e){var r=n.useContext(s),t=r;return e&&(t="function"==typeof e?e(r):i(i({},r),e)),t},u=function(e){var r=c(e.components);return n.createElement(s.Provider,{value:r},e.children)},p="mdxType",g={inlineCode:"code",wrapper:function(e){var r=e.children;return n.createElement(n.Fragment,{},r)}},m=n.forwardRef((function(e,r){var t=e.components,o=e.mdxType,a=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),p=c(t),m=o,d=p["".concat(s,".").concat(m)]||p[m]||g[m]||a;return t?n.createElement(d,i(i({ref:r},u),{},{components:t})):n.createElement(d,i({ref:r},u))}));function d(e,r){var t=arguments,o=r&&r.mdxType;if("string"==typeof e||o){var a=t.length,i=new Array(a);i[0]=m;var l={};for(var s in r)hasOwnProperty.call(r,s)&&(l[s]=r[s]);l.originalType=e,l[p]="string"==typeof e?e:o,i[1]=l;for(var c=2;c<a;c++)i[c]=t[c];return n.createElement.apply(null,i)}return n.createElement.apply(null,t)}m.displayName="MDXCreateElement"},61883:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>s,contentTitle:()=>i,default:()=>g,frontMatter:()=>a,metadata:()=>l,toc:()=>c});var n=t(58168),o=(t(96540),t(15680));const a={title:"MonitorAutoscaleSetting",sidebar_position:2,tags:["Azure","Resource","Monitor","MonitorAutoscaleSetting"]},i=void 0,l={unversionedId:"resource/azure/Monitor/MonitorAutoscaleSetting",id:"resource/azure/Monitor/MonitorAutoscaleSetting",title:"MonitorAutoscaleSetting",description:"Resource Icon",source:"@site/i18n/en/docusaurus-plugin-content-docs/current/resource/azure/Monitor/MonitorAutoscaleSetting.mdx",sourceDirName:"resource/azure/Monitor",slug:"/resource/azure/Monitor/MonitorAutoscaleSetting",permalink:"/en/docs/resource/azure/Monitor/MonitorAutoscaleSetting",draft:!1,tags:[{label:"Azure",permalink:"/en/docs/tags/azure"},{label:"Resource",permalink:"/en/docs/tags/resource"},{label:"Monitor",permalink:"/en/docs/tags/monitor"},{label:"MonitorAutoscaleSetting",permalink:"/en/docs/tags/monitor-autoscale-setting"}],version:"current",sidebarPosition:2,frontMatter:{title:"MonitorAutoscaleSetting",sidebar_position:2,tags:["Azure","Resource","Monitor","MonitorAutoscaleSetting"]},sidebar:"mySidebar",previous:{title:"MonitorActivityLogAlert",permalink:"/en/docs/resource/azure/Monitor/MonitorActivityLogAlert"},next:{title:"MonitorLogProfile",permalink:"/en/docs/resource/azure/Monitor/MonitorLogProfile"}},s={},c=[{value:"Resource Icon",id:"resource-icon",level:2},{value:"Resource Overview",id:"resource-overview",level:2},{value:"Associated Resources",id:"associated-resources",level:2},{value:"Parent Resource",id:"parent-resource",level:3},{value:"Connected Resources",id:"connected-resources",level:3},{value:"Resource setting values",id:"resource-setting-values",level:2},{value:"Reference Materials",id:"reference-materials",level:2}],u={toc:c},p="wrapper";function g(e){let{components:r,...t}=e;return(0,o.yg)(p,(0,n.A)({},u,t,{components:r,mdxType:"MDXLayout"}),(0,o.yg)("hr",null),(0,o.yg)("br",null),(0,o.yg)("h2",{id:"resource-icon"},"Resource Icon"),(0,o.yg)("img",{src:"https://cloudstudioblob.blob.core.windows.net/cloudstudio/azureImg/monitor-monitor_autoscale_setting.png"}),(0,o.yg)("h2",{id:"resource-overview"},"Resource Overview"),(0,o.yg)("p",null,"Azure Monitor autoscale is a feature of Microsoft Azure that enables automatic scaling of resources based on predefined rules and metrics.\nWith autoscale, you can scale up or down resources such as virtual machines, app services, and AKS (Azure Kubernetes Service) clusters to meet changing demands and optimize costs."),(0,o.yg)("h2",{id:"associated-resources"},"Associated Resources"),(0,o.yg)("h3",{id:"parent-resource"},"Parent Resource"),(0,o.yg)("ul",null,(0,o.yg)("li",{parentName:"ul"},(0,o.yg)("a",{parentName:"li",href:"https://docs.cstudio.app/en/docs/resource/azure/Base/ResourceGroup"},(0,o.yg)("strong",{parentName:"a"},"Resource Group")))),(0,o.yg)("h3",{id:"connected-resources"},"Connected Resources"),(0,o.yg)("ul",null,(0,o.yg)("li",{parentName:"ul"},(0,o.yg)("a",{parentName:"li",href:"https://docs.cstudio.app/docs/resource/azure/Compute/LinuxVirtualMachineScaleSet"},(0,o.yg)("strong",{parentName:"a"},"Linux Virtual Machine Scale Set"))),(0,o.yg)("li",{parentName:"ul"},(0,o.yg)("a",{parentName:"li",href:"https://docs.cstudio.app/docs/resource/azure/Compute/WindowsserverVirtualMachineScaleSet"},(0,o.yg)("strong",{parentName:"a"},"Windowsserver Virtual Machine Scale Set")))),(0,o.yg)("h2",{id:"resource-setting-values"},"Resource setting values"),(0,o.yg)("ul",null,(0,o.yg)("li",{parentName:"ul"},(0,o.yg)("p",{parentName:"li"},(0,o.yg)("inlineCode",{parentName:"p"},"target_resource_name")," : The name of resource that the autoscale setting should be added to")),(0,o.yg)("li",{parentName:"ul"},(0,o.yg)("p",{parentName:"li"},(0,o.yg)("inlineCode",{parentName:"p"},"scale_condition")),(0,o.yg)("ul",{parentName:"li"},(0,o.yg)("li",{parentName:"ul"},(0,o.yg)("inlineCode",{parentName:"li"},"min_instance_count")," : The minimum number of instances - ",(0,o.yg)("inlineCode",{parentName:"li"},"0")," ~ ",(0,o.yg)("inlineCode",{parentName:"li"},"1000")),(0,o.yg)("li",{parentName:"ul"},(0,o.yg)("inlineCode",{parentName:"li"},"max_instance_count")," : The Maximum number of instances - ",(0,o.yg)("inlineCode",{parentName:"li"},"1")," ~ ",(0,o.yg)("inlineCode",{parentName:"li"},"1000")),(0,o.yg)("li",{parentName:"ul"},(0,o.yg)("inlineCode",{parentName:"li"},"default_instance_count")," : The number of instances that are available for scaling if metrics are not available for evaluation - ",(0,o.yg)("inlineCode",{parentName:"li"},"1")," ~ ",(0,o.yg)("inlineCode",{parentName:"li"},"1000")),(0,o.yg)("li",{parentName:"ul"},(0,o.yg)("inlineCode",{parentName:"li"},"schedule_type")," : Scheduling method to apply to the scaling action - ",(0,o.yg)("inlineCode",{parentName:"li"},"start_end_dates"),", ",(0,o.yg)("inlineCode",{parentName:"li"},"repeat_days")),(0,o.yg)("li",{parentName:"ul"},(0,o.yg)("inlineCode",{parentName:"li"},"timezone")," : Time zone in which the schedule works"),(0,o.yg)("li",{parentName:"ul"},(0,o.yg)("inlineCode",{parentName:"li"},"start_date")," : Start date of schedule"),(0,o.yg)("li",{parentName:"ul"},(0,o.yg)("inlineCode",{parentName:"li"},"end_date")," : End date of schedule"))),(0,o.yg)("li",{parentName:"ul"},(0,o.yg)("p",{parentName:"li"},(0,o.yg)("inlineCode",{parentName:"p"},"tag")," : Tag to categorize resources - up to 512 characters, ",(0,o.yg)("inlineCode",{parentName:"p"},"key"),":",(0,o.yg)("inlineCode",{parentName:"p"},"value")))),(0,o.yg)("hr",null),(0,o.yg)("h2",{id:"reference-materials"},"Reference Materials"),(0,o.yg)("ul",null,(0,o.yg)("li",{parentName:"ul"},(0,o.yg)("a",{parentName:"li",href:"https://learn.microsoft.com/en-us/azure/azure-monitor/overview"},"Azure MonitorActivityLogAlert(Microsoft)")),(0,o.yg)("li",{parentName:"ul"},(0,o.yg)("a",{parentName:"li",href:"https://azure.microsoft.com/ko-kr/pricing/details/monitor/"},"Azure MonitorActivityLogAlert Price")),(0,o.yg)("li",{parentName:"ul"},(0,o.yg)("a",{parentName:"li",href:"https://registry.terraform.io/providers/hashicorp/azurerm/latest/docs/resources/monitor_autoscale_setting"},"Azure MonitorActivityLogAlert(Terraform)"))))}g.isMDXComponent=!0}}]);