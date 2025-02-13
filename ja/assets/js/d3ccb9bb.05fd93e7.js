"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[92501],{15680:(e,t,r)=>{r.d(t,{xA:()=>s,yg:()=>d});var a=r(96540);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},o=Object.keys(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var u=a.createContext({}),p=function(e){var t=a.useContext(u),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},s=function(e){var t=p(e.components);return a.createElement(u.Provider,{value:t},e.children)},c="mdxType",y={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},g=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,o=e.originalType,u=e.parentName,s=i(e,["components","mdxType","originalType","parentName"]),c=p(r),g=n,d=c["".concat(u,".").concat(g)]||c[g]||y[g]||o;return r?a.createElement(d,l(l({ref:t},s),{},{components:r})):a.createElement(d,l({ref:t},s))}));function d(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=r.length,l=new Array(o);l[0]=g;var i={};for(var u in t)hasOwnProperty.call(t,u)&&(i[u]=t[u]);i.originalType=e,i[c]="string"==typeof e?e:n,l[1]=i;for(var p=2;p<o;p++)l[p]=r[p];return a.createElement.apply(null,l)}return a.createElement.apply(null,r)}g.displayName="MDXCreateElement"},79095:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>u,contentTitle:()=>l,default:()=>y,frontMatter:()=>o,metadata:()=>i,toc:()=>p});var a=r(58168),n=(r(96540),r(15680));const o={title:"NatGateway",sidebar_position:4,tags:["Azure","\u30ea\u30bd\u30fc\u30b9","Network","NatGateway"]},l=void 0,i={unversionedId:"resource/azure/Network/NatGateway",id:"resource/azure/Network/NatGateway",title:"NatGateway",description:"\u30ea\u30bd\u30fc\u30b9\u30a2\u30a4\u30b3\u30f3",source:"@site/i18n/ja/docusaurus-plugin-content-docs/current/resource/azure/Network/NatGateway.mdx",sourceDirName:"resource/azure/Network",slug:"/resource/azure/Network/NatGateway",permalink:"/ja/docs/resource/azure/Network/NatGateway",draft:!1,tags:[{label:"Azure",permalink:"/ja/docs/tags/azure"},{label:"\u30ea\u30bd\u30fc\u30b9",permalink:"/ja/docs/tags/\u30ea\u30bd\u30fc\u30b9"},{label:"Network",permalink:"/ja/docs/tags/network"},{label:"NatGateway",permalink:"/ja/docs/tags/nat-gateway"}],version:"current",sidebarPosition:4,frontMatter:{title:"NatGateway",sidebar_position:4,tags:["Azure","\u30ea\u30bd\u30fc\u30b9","Network","NatGateway"]},sidebar:"mySidebar",previous:{title:"Firewall",permalink:"/ja/docs/resource/azure/Network/Firewall"},next:{title:"NetworkDdosProtectionPlan",permalink:"/ja/docs/resource/azure/Network/NetworkDdosProtectionPlan"}},u={},p=[{value:"\u30ea\u30bd\u30fc\u30b9\u30a2\u30a4\u30b3\u30f3",id:"\u30ea\u30bd\u30fc\u30b9\u30a2\u30a4\u30b3\u30f3",level:2},{value:"\u30ea\u30bd\u30fc\u30b9\u6982\u8981",id:"\u30ea\u30bd\u30fc\u30b9\u6982\u8981",level:2},{value:"\u95a2\u9023\u30ea\u30bd\u30fc\u30b9",id:"\u95a2\u9023\u30ea\u30bd\u30fc\u30b9",level:2},{value:"\u4e0a\u4f4d\u30ea\u30bd\u30fc\u30b9",id:"\u4e0a\u4f4d\u30ea\u30bd\u30fc\u30b9",level:3},{value:"\u63a5\u7d9a\u30ea\u30bd\u30fc\u30b9",id:"\u63a5\u7d9a\u30ea\u30bd\u30fc\u30b9",level:3},{value:"\u30ea\u30bd\u30fc\u30b9\u8a2d\u5b9a\u5024",id:"\u30ea\u30bd\u30fc\u30b9\u8a2d\u5b9a\u5024",level:2},{value:"\u53c2\u8003\u8cc7\u6599",id:"\u53c2\u8003\u8cc7\u6599",level:2}],s={toc:p},c="wrapper";function y(e){let{components:t,...r}=e;return(0,n.yg)(c,(0,a.A)({},s,r,{components:t,mdxType:"MDXLayout"}),(0,n.yg)("hr",null),(0,n.yg)("br",null),(0,n.yg)("h2",{id:"\u30ea\u30bd\u30fc\u30b9\u30a2\u30a4\u30b3\u30f3"},"\u30ea\u30bd\u30fc\u30b9\u30a2\u30a4\u30b3\u30f3"),(0,n.yg)("img",{src:"https://cloudstudioblob.blob.core.windows.net/cloudstudio/azureImg/network-nat_gateway.png"}),(0,n.yg)("h2",{id:"\u30ea\u30bd\u30fc\u30b9\u6982\u8981"},"\u30ea\u30bd\u30fc\u30b9\u6982\u8981"),(0,n.yg)("p",null,"\u3067\u63d0\u4f9b\u3059\u308b\u7ba1\u7406\u578b\u30cd\u30c3\u30c8\u30ef\u30fc\u30ad\u30f3\u30b0\u30b5\u30fc\u30d3\u30b9\u3067\u3001\u30bd\u30fc\u30b9 IP \u30a2\u30c9\u30ec\u30b9\u3092\u975e\u8868\u793a\u306b\u3057\u305f\u72b6\u614b\u3067 VNet\uff08\u4eee\u60f3\u30cd\u30c3\u30c8\u30ef\u30fc\u30af\uff09\u5185\u306e\u30ea\u30bd\u30fc\u30b9\u304c\u30a4\u30f3\u30bf\u30fc\u30cd\u30c3\u30c8\u306b\u30a2\u30af\u30bb\u30b9\u3067\u304d\u308b\u3088\u3046\u306b\u3057\u307e\u3059\u3002\nAzure NAT Gateway \u3092\u4f7f\u7528\u3057\u3066\u3001\u500b\u4eba\u306e IP \u30a2\u30c9\u30ec\u30b9\u3092\u30a4\u30f3\u30bf\u30fc\u30cd\u30c3\u30c8\u306b\u9732\u51fa\u3059\u308b\u3053\u3068\u306a\u304f\u3001VNet \u5185\u306e\u30ea\u30bd\u30fc\u30b9\u306b\u30a4\u30f3\u30bf\u30fc\u30cd\u30c3\u30c8\u63a5\u7d9a\u3092\u63d0\u4f9b\u3059\u308b\u3053\u3068\u304c\u3067\u304d\u307e\u3059\u3002\u3053\u308c\u306b\u3088\u308a\u3001\u30a4\u30f3\u30bf\u30fc\u30cd\u30c3\u30c8\u304b\u3089\u30ea\u30bd\u30fc\u30b9\u306b\u76f4\u63a5\u30a2\u30af\u30bb\u30b9\u3059\u308b\u306e\u3092\u9632\u304e\u3001\u30bb\u30ad\u30e5\u30ea\u30c6\u30a3\u3092\u6539\u5584\u3059\u308b\u306e\u306b\u5f79\u7acb\u3061\u307e\u3059\u3002\n\u307e\u305f\u3001VNet \u5185\u306e\u30ea\u30bd\u30fc\u30b9\u306b\u30a2\u30af\u30bb\u30b9\u3059\u308b\u305f\u3081\u306b\u5fc5\u8981\u306a\u30d1\u30d6\u30ea\u30c3\u30af IP \u30a2\u30c9\u30ec\u30b9\u306e\u6570\u3092\u6e1b\u3089\u3059\u306e\u306b\u5f79\u7acb\u3061\u307e\u3059\u3002"),(0,n.yg)("h2",{id:"\u95a2\u9023\u30ea\u30bd\u30fc\u30b9"},"\u95a2\u9023\u30ea\u30bd\u30fc\u30b9"),(0,n.yg)("h3",{id:"\u4e0a\u4f4d\u30ea\u30bd\u30fc\u30b9"},"\u4e0a\u4f4d\u30ea\u30bd\u30fc\u30b9"),(0,n.yg)("ul",null,(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("a",{parentName:"li",href:"https://docs.cstudio.app/ja/docs/resource/azure/Base/ResourceGroup"},(0,n.yg)("strong",{parentName:"a"},"Resource Group")))),(0,n.yg)("h3",{id:"\u63a5\u7d9a\u30ea\u30bd\u30fc\u30b9"},"\u63a5\u7d9a\u30ea\u30bd\u30fc\u30b9"),(0,n.yg)("ul",null,(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("a",{parentName:"li",href:"https://docs.cstudio.app/ja/docs/resource/azure/Network/Subnet"},"- [",(0,n.yg)("strong",{parentName:"a"},"Subnet"),"](https://docs.cstudio.app/ja/docs/resource/azure/Network/Subnet)")),(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("a",{parentName:"li",href:"https://docs.cstudio.app/ja/docs/resource/azure/Network/PublicIp"},(0,n.yg)("strong",{parentName:"a"},"Public Ip")))),(0,n.yg)("h2",{id:"\u30ea\u30bd\u30fc\u30b9\u8a2d\u5b9a\u5024"},"\u30ea\u30bd\u30fc\u30b9\u8a2d\u5b9a\u5024"),(0,n.yg)("ul",null,(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("p",{parentName:"li"},(0,n.yg)("inlineCode",{parentName:"p"},"linked_subnet_name")," : Nat Gateway \u3092\u63a5\u7d9a\u3059\u308b Subnet \u306e\u540d\u524d")),(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("p",{parentName:"li"},(0,n.yg)("inlineCode",{parentName:"p"},"linked_public_ip_name")," : Nat Gateway \u306b\u63a5\u7d9a\u3059\u308b Public Ip \u306e\u540d\u524d")),(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("p",{parentName:"li"},(0,n.yg)("inlineCode",{parentName:"p"},"idle_timeout_in_minutes")," : NatGateway \u3067\u30a2\u30a4\u30c9\u30eb\u72b6\u614b\u306e\u6d41\u308c\u3092\u9664\u53bb\u3059\u308b\u6642\u9593\u5236\u9650(\u5206) - ",(0,n.yg)("inlineCode",{parentName:"p"},"4"),"~ ",(0,n.yg)("inlineCode",{parentName:"p"},"120"))),(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("p",{parentName:"li"},(0,n.yg)("inlineCode",{parentName:"p"},"tag")," : \u30ea\u30bd\u30fc\u30b9\u3092\u30ab\u30c6\u30b4\u30ea\u306b\u5206\u985e\u3059\u308b\u305f\u3081\u306e\u30bf\u30b0 - \u6700\u5927 512 \u6587\u5b57, ",(0,n.yg)("inlineCode",{parentName:"p"},"key"),":",(0,n.yg)("inlineCode",{parentName:"p"},"value")))),(0,n.yg)("hr",null),(0,n.yg)("h2",{id:"\u53c2\u8003\u8cc7\u6599"},"\u53c2\u8003\u8cc7\u6599"),(0,n.yg)("ul",null,(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("a",{parentName:"li",href:"https://learn.microsoft.com/en-us/azure/virtual-network/nat-gateway/nat-overview"},"Azure NatGateway(Microsoft)")),(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("a",{parentName:"li",href:"https://azure.microsoft.com/en-us/pricing/details/virtual-network/"},"Azure NatGateway \u4fa1\u683c")),(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("a",{parentName:"li",href:"https://registry.terraform.io/providers/hashicorp/azurerm/latest/docs/resources/nat_gateway"},"Azure NatGateway(Terraform)"))))}y.isMDXComponent=!0}}]);