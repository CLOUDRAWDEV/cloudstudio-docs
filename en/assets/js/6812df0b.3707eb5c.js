"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[31692],{15680:(e,t,a)=>{a.d(t,{xA:()=>u,yg:()=>g});var r=a(96540);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},i=Object.keys(e);for(r=0;r<i.length;r++)a=i[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)a=i[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var l=r.createContext({}),c=function(e){var t=r.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},u=function(e){var t=c(e.components);return r.createElement(l.Provider,{value:t},e.children)},p="mdxType",y={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var a=e.components,n=e.mdxType,i=e.originalType,l=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),p=c(a),d=n,g=p["".concat(l,".").concat(d)]||p[d]||y[d]||i;return a?r.createElement(g,o(o({ref:t},u),{},{components:a})):r.createElement(g,o({ref:t},u))}));function g(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=a.length,o=new Array(i);o[0]=d;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[p]="string"==typeof e?e:n,o[1]=s;for(var c=2;c<i;c++)o[c]=a[c];return r.createElement.apply(null,o)}return r.createElement.apply(null,a)}d.displayName="MDXCreateElement"},55202:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>y,frontMatter:()=>i,metadata:()=>s,toc:()=>c});var r=a(58168),n=(a(96540),a(15680));const i={title:"Transit Gateway",sidebar_position:0,tags:["AWS","Resource","Ec2","TransitGateway"]},o=void 0,s={unversionedId:"resource/aws/Vpc/TransitGateway",id:"resource/aws/Vpc/TransitGateway",title:"Transit Gateway",description:"Resource Icon",source:"@site/i18n/en/docusaurus-plugin-content-docs/current/resource/aws/Vpc/TransitGateway.mdx",sourceDirName:"resource/aws/Vpc",slug:"/resource/aws/Vpc/TransitGateway",permalink:"/en/docs/resource/aws/Vpc/TransitGateway",draft:!1,tags:[{label:"AWS",permalink:"/en/docs/tags/aws"},{label:"Resource",permalink:"/en/docs/tags/resource"},{label:"Ec2",permalink:"/en/docs/tags/ec-2"},{label:"TransitGateway",permalink:"/en/docs/tags/transit-gateway"}],version:"current",sidebarPosition:0,frontMatter:{title:"Transit Gateway",sidebar_position:0,tags:["AWS","Resource","Ec2","TransitGateway"]},sidebar:"mySidebar",previous:{title:"Subnet",permalink:"/en/docs/resource/aws/Vpc/Subnet"},next:{title:"TransitGatewayAttachment",permalink:"/en/docs/resource/aws/Vpc/TransitGatewayAttachment"}},l={},c=[{value:"Resource Icon",id:"resource-icon",level:2},{value:"Resource Overview",id:"resource-overview",level:2},{value:"Associated Resources",id:"associated-resources",level:2},{value:"Parent Resources",id:"parent-resources",level:3},{value:"Connected Resources",id:"connected-resources",level:3},{value:"Resource Setting Values",id:"resource-setting-values",level:2},{value:"Reference Materials",id:"reference-materials",level:2}],u={toc:c},p="wrapper";function y(e){let{components:t,...a}=e;return(0,n.yg)(p,(0,r.A)({},u,a,{components:t,mdxType:"MDXLayout"}),(0,n.yg)("hr",null),(0,n.yg)("br",null),(0,n.yg)("h2",{id:"resource-icon"},"Resource Icon"),(0,n.yg)("img",{src:"https://cloudstudioblob.blob.core.windows.net/cloudstudio/awsImg/ec2-transit_gateway.png"}),(0,n.yg)("h2",{id:"resource-overview"},"Resource Overview"),(0,n.yg)("p",null,"The Transit Gateway is a network transit hub that can be used to interconnect Virtual Private Clouds (VPCs) and on-premises networks.\nAs cloud infrastructure expands globally, inter-region peering uses AWS global infrastructure to link Transit Gateways together.\nData is automatically encrypted and does not traverse the public internet."),(0,n.yg)("h2",{id:"associated-resources"},"Associated Resources"),(0,n.yg)("h3",{id:"parent-resources"},"Parent Resources"),(0,n.yg)("ul",null,(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("a",{parentName:"li",href:"https://docs.cstudio.app/en/docs/resource/aws/Base/Region"},(0,n.yg)("strong",{parentName:"a"},"Region")))),(0,n.yg)("h3",{id:"connected-resources"},"Connected Resources"),(0,n.yg)("ul",null,(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("a",{parentName:"li",href:"https://docs.cstudio.app/en/docs/resource/aws/Vpc/"},(0,n.yg)("strong",{parentName:"a"},"Vpc")))),(0,n.yg)("h2",{id:"resource-setting-values"},"Resource Setting Values"),(0,n.yg)("ul",null,(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("inlineCode",{parentName:"li"},"dns_support")," : Enable DNS verification for connected VPCs - ",(0,n.yg)("inlineCode",{parentName:"li"},"enable"),", ",(0,n.yg)("inlineCode",{parentName:"li"},"disable")),(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("inlineCode",{parentName:"li"},"vpn_ecmp_support")," : ECMP routing support for connected VPNs - ",(0,n.yg)("inlineCode",{parentName:"li"},"enable"),", ",(0,n.yg)("inlineCode",{parentName:"li"},"disable")),(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("inlineCode",{parentName:"li"},"default_route_table_association")," : Automatically associate attachments with the main route table - ",(0,n.yg)("inlineCode",{parentName:"li"},"enable"),", ",(0,n.yg)("inlineCode",{parentName:"li"},"disable")),(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("inlineCode",{parentName:"li"},"default_route_table_propagation")," : Enable auto propagation of attachments with the main route table - ",(0,n.yg)("inlineCode",{parentName:"li"},"enable"),", ",(0,n.yg)("inlineCode",{parentName:"li"},"disable")),(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("inlineCode",{parentName:"li"},"multicast_support")," : Enable create multicast domain - ",(0,n.yg)("inlineCode",{parentName:"li"},"enable"),", ",(0,n.yg)("inlineCode",{parentName:"li"},"disable")),(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("inlineCode",{parentName:"li"},"transit_gateway_cidr_blocks")," : Cidr blocks of Transit Gateway"),(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("inlineCode",{parentName:"li"},"vpc_attachment"))),(0,n.yg)("hr",null),(0,n.yg)("h2",{id:"reference-materials"},"Reference Materials"),(0,n.yg)("ul",null,(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("a",{parentName:"li",href:"https://docs.aws.amazon.com/ko_kr/vpc/latest/tgw/what-is-transit-gateway.html?nc2=type_a"},"AWS Transit Gateway(AWS)")),(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("a",{parentName:"li",href:"https://aws.amazon.com/ko/transit-gateway/pricing/?nc2=type_a"},"AWS Transit Gateway Price(AWS)")),(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("a",{parentName:"li",href:"https://registry.terraform.io/providers/hashicorp/aws/latest/docs/resources/ec2_transit_gateway"},"aws_ec2_transit_gateway(Terraform)"))))}y.isMDXComponent=!0}}]);