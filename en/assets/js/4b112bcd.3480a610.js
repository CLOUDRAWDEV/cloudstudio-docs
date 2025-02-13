"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[53654],{15680:(e,t,r)=>{r.d(t,{xA:()=>u,yg:()=>d});var a=r(96540);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function s(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},o=Object.keys(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var c=a.createContext({}),l=function(e){var t=a.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):s(s({},t),e)),r},u=function(e){var t=l(e.components);return a.createElement(c.Provider,{value:t},e.children)},p="mdxType",y={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},g=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,o=e.originalType,c=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),p=l(r),g=n,d=p["".concat(c,".").concat(g)]||p[g]||y[g]||o;return r?a.createElement(d,s(s({ref:t},u),{},{components:r})):a.createElement(d,s({ref:t},u))}));function d(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=r.length,s=new Array(o);s[0]=g;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i[p]="string"==typeof e?e:n,s[1]=i;for(var l=2;l<o;l++)s[l]=r[l];return a.createElement.apply(null,s)}return a.createElement.apply(null,r)}g.displayName="MDXCreateElement"},40305:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>s,default:()=>y,frontMatter:()=>o,metadata:()=>i,toc:()=>l});var a=r(58168),n=(r(96540),r(15680));const o={title:"Vpn Gateway",sidebar_position:0,tags:["AWS","Resource","Vpc","VpnGateway"]},s=void 0,i={unversionedId:"resource/aws/Vpc/VpnGateway",id:"resource/aws/Vpc/VpnGateway",title:"Vpn Gateway",description:"Resource Icon",source:"@site/i18n/en/docusaurus-plugin-content-docs/current/resource/aws/Vpc/VpnGateway.mdx",sourceDirName:"resource/aws/Vpc",slug:"/resource/aws/Vpc/VpnGateway",permalink:"/en/docs/resource/aws/Vpc/VpnGateway",draft:!1,tags:[{label:"AWS",permalink:"/en/docs/tags/aws"},{label:"Resource",permalink:"/en/docs/tags/resource"},{label:"Vpc",permalink:"/en/docs/tags/vpc"},{label:"VpnGateway",permalink:"/en/docs/tags/vpn-gateway"}],version:"current",sidebarPosition:0,frontMatter:{title:"Vpn Gateway",sidebar_position:0,tags:["AWS","Resource","Vpc","VpnGateway"]},sidebar:"mySidebar",previous:{title:"Vpc Peering",permalink:"/en/docs/resource/aws/Vpc/VpcPeering"},next:{title:"Waf",permalink:"/en/docs/category/waf"}},c={},l=[{value:"Resource Icon",id:"resource-icon",level:2},{value:"Resource Overview",id:"resource-overview",level:2},{value:"Associated Resources",id:"associated-resources",level:2},{value:"Parent Resources",id:"parent-resources",level:3},{value:"Connected Resources",id:"connected-resources",level:3},{value:"Resource Setting Values",id:"resource-setting-values",level:2},{value:"Reference Materials",id:"reference-materials",level:2}],u={toc:l},p="wrapper";function y(e){let{components:t,...r}=e;return(0,n.yg)(p,(0,a.A)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,n.yg)("hr",null),(0,n.yg)("br",null),(0,n.yg)("h2",{id:"resource-icon"},"Resource Icon"),(0,n.yg)("img",{src:"https://cloudstudioblob.blob.core.windows.net/cloudstudio/awsImg/vpc-vpn_gateway.png"}),(0,n.yg)("h2",{id:"resource-overview"},"Resource Overview"),(0,n.yg)("p",null,"The Virtual Private Gateway is the VPN concentrator on the Amazon side of a Site-to-Site VPN connection.\nYou create a Virtual Private Gateway and attach it to the VPC where you will establish the Site-to-Site VPN connection."),(0,n.yg)("h2",{id:"associated-resources"},"Associated Resources"),(0,n.yg)("h3",{id:"parent-resources"},"Parent Resources"),(0,n.yg)("ul",null,(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("a",{parentName:"li",href:"https://docs.cstudio.app/en/docs/resource/aws/Base/Region"},(0,n.yg)("strong",{parentName:"a"},"Region")))),(0,n.yg)("h3",{id:"connected-resources"},"Connected Resources"),(0,n.yg)("ul",null,(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("p",{parentName:"li"},(0,n.yg)("a",{parentName:"p",href:"https://docs.cstudio.app/en/docs/resource/aws/Vpc/"},(0,n.yg)("strong",{parentName:"a"},"Vpc")))),(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("p",{parentName:"li"},(0,n.yg)("a",{parentName:"p",href:"https://docs.cstudio.app/en/docs/resource/aws/Vpc/CustomerGateway"},(0,n.yg)("strong",{parentName:"a"},"Vpc Customer Gateway"))))),(0,n.yg)("h2",{id:"resource-setting-values"},"Resource Setting Values"),(0,n.yg)("ul",null,(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("inlineCode",{parentName:"li"},"linked_vpc_name")," : The name of the VPC that contain the VPN Gateway"),(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("inlineCode",{parentName:"li"},"vpn_connection")," : VPN Connection Name",(0,n.yg)("ul",{parentName:"li"},(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("inlineCode",{parentName:"li"},"linked_customer_gateway")," : The name of the Customer Gateway to connect to the VPN Gateway"),(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("inlineCode",{parentName:"li"},"static_routes_only")," : Specify whether to use only static routing for routing between gateways - ",(0,n.yg)("inlineCode",{parentName:"li"},"true"),", ",(0,n.yg)("inlineCode",{parentName:"li"},"false"))))),(0,n.yg)("hr",null),(0,n.yg)("h2",{id:"reference-materials"},"Reference Materials"),(0,n.yg)("ul",null,(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("a",{parentName:"li",href:"https://docs.aws.amazon.com/ko_kr/vpn/latest/s2svpn/how_it_works.html"},"AWS Site-to-Site VPN Working Mechanism (AWS)")),(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("a",{parentName:"li",href:"https://registry.terraform.io/providers/hashicorp/aws/latest/docs/resources/api_gateway_resource"},"aws_api_gateway_resource(Terraform)"))))}y.isMDXComponent=!0}}]);