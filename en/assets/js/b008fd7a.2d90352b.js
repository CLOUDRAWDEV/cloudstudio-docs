"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[28103],{15680:(e,r,t)=>{t.d(r,{xA:()=>u,yg:()=>m});var n=t(96540);function o(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function a(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function i(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?a(Object(t),!0).forEach((function(r){o(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function c(e,r){if(null==e)return{};var t,n,o=function(e,r){if(null==e)return{};var t,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)t=a[n],r.indexOf(t)>=0||(o[t]=e[t]);return o}(e,r);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)t=a[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var s=n.createContext({}),l=function(e){var r=n.useContext(s),t=r;return e&&(t="function"==typeof e?e(r):i(i({},r),e)),t},u=function(e){var r=l(e.components);return n.createElement(s.Provider,{value:r},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var r=e.children;return n.createElement(n.Fragment,{},r)}},g=n.forwardRef((function(e,r){var t=e.components,o=e.mdxType,a=e.originalType,s=e.parentName,u=c(e,["components","mdxType","originalType","parentName"]),p=l(t),g=o,m=p["".concat(s,".").concat(g)]||p[g]||d[g]||a;return t?n.createElement(m,i(i({ref:r},u),{},{components:t})):n.createElement(m,i({ref:r},u))}));function m(e,r){var t=arguments,o=r&&r.mdxType;if("string"==typeof e||o){var a=t.length,i=new Array(a);i[0]=g;var c={};for(var s in r)hasOwnProperty.call(r,s)&&(c[s]=r[s]);c.originalType=e,c[p]="string"==typeof e?e:o,i[1]=c;for(var l=2;l<a;l++)i[l]=t[l];return n.createElement.apply(null,i)}return n.createElement.apply(null,t)}g.displayName="MDXCreateElement"},15286:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>s,contentTitle:()=>i,default:()=>d,frontMatter:()=>a,metadata:()=>c,toc:()=>l});var n=t(58168),o=(t(96540),t(15680));const a={title:"Server",sidebar_position:0,tags:["Ncloud","Resource","Compute","Server"]},i=void 0,c={unversionedId:"resource/ncloud/Compute/Server",id:"resource/ncloud/Compute/Server",title:"Server",description:"Resource Icon",source:"@site/i18n/en/docusaurus-plugin-content-docs/current/resource/ncloud/Compute/Server.mdx",sourceDirName:"resource/ncloud/Compute",slug:"/resource/ncloud/Compute/Server",permalink:"/en/docs/resource/ncloud/Compute/Server",draft:!1,tags:[{label:"Ncloud",permalink:"/en/docs/tags/ncloud"},{label:"Resource",permalink:"/en/docs/tags/resource"},{label:"Compute",permalink:"/en/docs/tags/compute"},{label:"Server",permalink:"/en/docs/tags/server"}],version:"current",sidebarPosition:0,frontMatter:{title:"Server",sidebar_position:0,tags:["Ncloud","Resource","Compute","Server"]},sidebar:"mySidebar",previous:{title:"LoginKey",permalink:"/en/docs/resource/ncloud/Compute/LoginKey"},next:{title:"Containers",permalink:"/en/docs/category/containers"}},s={},l=[{value:"Resource Icon",id:"resource-icon",level:2},{value:"Resource Overview",id:"resource-overview",level:2},{value:"Associated Resources",id:"associated-resources",level:2},{value:"Parent Resource",id:"parent-resource",level:3},{value:"Connected Resources",id:"connected-resources",level:3},{value:"Resource Setting Values",id:"resource-setting-values",level:2},{value:"Reference Materials",id:"reference-materials",level:2}],u={toc:l},p="wrapper";function d(e){let{components:r,...t}=e;return(0,o.yg)(p,(0,n.A)({},u,t,{components:r,mdxType:"MDXLayout"}),(0,o.yg)("hr",null),(0,o.yg)("br",null),(0,o.yg)("h2",{id:"resource-icon"},"Resource Icon"),(0,o.yg)("img",{src:"https://cloudstudioblob.blob.core.windows.net/cloudstudio/ncloudImg/compute-server.png"}),(0,o.yg)("h2",{id:"resource-overview"},"Resource Overview"),(0,o.yg)("p",null,"This computing resource provides the flexibility of virtualization without the need to manage physical hardware. It is efficient in terms of time and cost by creating servers in a cloud environment, making it suitable for scenarios where infrastructure management is burdensome or when temporary access to a large number of server resources is needed."),(0,o.yg)("h2",{id:"associated-resources"},"Associated Resources"),(0,o.yg)("h3",{id:"parent-resource"},"Parent Resource"),(0,o.yg)("ul",null,(0,o.yg)("li",{parentName:"ul"},(0,o.yg)("a",{parentName:"li",href:"https://docs.cstudio.app/en/docs/resource/ncloud/Networking/Subnet"},(0,o.yg)("strong",{parentName:"a"},"Subnet")))),(0,o.yg)("h3",{id:"connected-resources"},"Connected Resources"),(0,o.yg)("ul",null,(0,o.yg)("li",{parentName:"ul"},(0,o.yg)("a",{parentName:"li",href:"https://docs.cstudio.app/en/docs/resource/ncloud/Storage/BlockStorage"},(0,o.yg)("strong",{parentName:"a"},"BlockStorage"))),(0,o.yg)("li",{parentName:"ul"},(0,o.yg)("a",{parentName:"li",href:"https://docs.cstudio.app/en/docs/resource/ncloud/Networking/PublicIP"},(0,o.yg)("strong",{parentName:"a"},"PublicIp"))),(0,o.yg)("li",{parentName:"ul"},(0,o.yg)("a",{parentName:"li",href:"https://docs.cstudio.app/en/docs/resource/ncloud/Networking/TargetGroup"},(0,o.yg)("strong",{parentName:"a"},"TargetGroup")))),(0,o.yg)("h2",{id:"resource-setting-values"},"Resource Setting Values"),(0,o.yg)("ul",null,(0,o.yg)("li",{parentName:"ul"},(0,o.yg)("inlineCode",{parentName:"li"},"include_subnet_name")," : The name of Subnet to which to create the Server"),(0,o.yg)("li",{parentName:"ul"},(0,o.yg)("inlineCode",{parentName:"li"},"server_image_product_code")," : The code of OS image to use"),(0,o.yg)("li",{parentName:"ul"},(0,o.yg)("inlineCode",{parentName:"li"},"server_product_code")," : The code for hardware configuration on the server"),(0,o.yg)("li",{parentName:"ul"},(0,o.yg)("inlineCode",{parentName:"li"},"login_key_name")," : The Login key name to use"),(0,o.yg)("li",{parentName:"ul"},(0,o.yg)("inlineCode",{parentName:"li"},"init_script")," : The name of Init script to apply"),(0,o.yg)("li",{parentName:"ul"},(0,o.yg)("inlineCode",{parentName:"li"},"is_encrypted_base_block_storage_volume")," : Whether to encrypt basic Block storage if server image is RHV"),(0,o.yg)("li",{parentName:"ul"},(0,o.yg)("inlineCode",{parentName:"li"},"linked_network_interface_name")," : The Network interface to apply with the server")),(0,o.yg)("hr",null),(0,o.yg)("h2",{id:"reference-materials"},"Reference Materials"),(0,o.yg)("ul",null,(0,o.yg)("li",{parentName:"ul"},(0,o.yg)("a",{parentName:"li",href:"https://registry.terraform.io/providers/NaverCloudPlatform/ncloud/latest/docs/resources/server"},"ncloud_server(Terraform)"))))}d.isMDXComponent=!0}}]);