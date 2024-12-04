"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[58598],{15680:(e,r,t)=>{t.d(r,{xA:()=>u,yg:()=>y});var o=t(96540);function n(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function a(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);r&&(o=o.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,o)}return t}function l(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?a(Object(t),!0).forEach((function(r){n(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function c(e,r){if(null==e)return{};var t,o,n=function(e,r){if(null==e)return{};var t,o,n={},a=Object.keys(e);for(o=0;o<a.length;o++)t=a[o],r.indexOf(t)>=0||(n[t]=e[t]);return n}(e,r);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)t=a[o],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(n[t]=e[t])}return n}var s=o.createContext({}),i=function(e){var r=o.useContext(s),t=r;return e&&(t="function"==typeof e?e(r):l(l({},r),e)),t},u=function(e){var r=i(e.components);return o.createElement(s.Provider,{value:r},e.children)},p="mdxType",g={inlineCode:"code",wrapper:function(e){var r=e.children;return o.createElement(o.Fragment,{},r)}},d=o.forwardRef((function(e,r){var t=e.components,n=e.mdxType,a=e.originalType,s=e.parentName,u=c(e,["components","mdxType","originalType","parentName"]),p=i(t),d=n,y=p["".concat(s,".").concat(d)]||p[d]||g[d]||a;return t?o.createElement(y,l(l({ref:r},u),{},{components:t})):o.createElement(y,l({ref:r},u))}));function y(e,r){var t=arguments,n=r&&r.mdxType;if("string"==typeof e||n){var a=t.length,l=new Array(a);l[0]=d;var c={};for(var s in r)hasOwnProperty.call(r,s)&&(c[s]=r[s]);c.originalType=e,c[p]="string"==typeof e?e:n,l[1]=c;for(var i=2;i<a;i++)l[i]=t[i];return o.createElement.apply(null,l)}return o.createElement.apply(null,t)}d.displayName="MDXCreateElement"},33189:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>s,contentTitle:()=>l,default:()=>g,frontMatter:()=>a,metadata:()=>c,toc:()=>i});var o=t(58168),n=(t(96540),t(15680));const a={title:"Flow Log",sidebar_position:0,tags:["AWS","Resource","Vpc","FlowLog"]},l=void 0,c={unversionedId:"resource/aws/Vpc/FlowLog",id:"resource/aws/Vpc/FlowLog",title:"Flow Log",description:"Resource Icon",source:"@site/i18n/en/docusaurus-plugin-content-docs/current/resource/aws/Vpc/FlowLog.mdx",sourceDirName:"resource/aws/Vpc",slug:"/resource/aws/Vpc/FlowLog",permalink:"/en/docs/resource/aws/Vpc/FlowLog",draft:!1,tags:[{label:"AWS",permalink:"/en/docs/tags/aws"},{label:"Resource",permalink:"/en/docs/tags/resource"},{label:"Vpc",permalink:"/en/docs/tags/vpc"},{label:"FlowLog",permalink:"/en/docs/tags/flow-log"}],version:"current",sidebarPosition:0,frontMatter:{title:"Flow Log",sidebar_position:0,tags:["AWS","Resource","Vpc","FlowLog"]},sidebar:"mySidebar",previous:{title:"EndpointService",permalink:"/en/docs/resource/aws/Vpc/EndpointService"},next:{title:"Internet Gateway",permalink:"/en/docs/resource/aws/Vpc/InternetGateway"}},s={},i=[{value:"Resource Icon",id:"resource-icon",level:2},{value:"Resource Overview",id:"resource-overview",level:2},{value:"Associated Resources",id:"associated-resources",level:2},{value:"Parent Resources",id:"parent-resources",level:3},{value:"Connected Resources",id:"connected-resources",level:3},{value:"Resource Setting Values",id:"resource-setting-values",level:2},{value:"Reference Materials",id:"reference-materials",level:2}],u={toc:i},p="wrapper";function g(e){let{components:r,...t}=e;return(0,n.yg)(p,(0,o.A)({},u,t,{components:r,mdxType:"MDXLayout"}),(0,n.yg)("hr",null),(0,n.yg)("br",null),(0,n.yg)("h2",{id:"resource-icon"},"Resource Icon"),(0,n.yg)("img",{src:"https://cloudstudioblob.blob.core.windows.net/cloudstudio/awsImg/vpc-flow_log.png"}),(0,n.yg)("h2",{id:"resource-overview"},"Resource Overview"),(0,n.yg)("p",null,"VPC Flow Logs provide the ability to collect information about IP traffic transmitted and received on network interfaces within a VPC.\nFlow log data can be published to Amazon CloudWatch Logs, Amazon S3, or Amazon Kinesis Data Firehose.\nOnce flow logs are created, you can retrieve and view the flow log records from the configured log group, bucket, or delivery stream."),(0,n.yg)("h2",{id:"associated-resources"},"Associated Resources"),(0,n.yg)("h3",{id:"parent-resources"},"Parent Resources"),(0,n.yg)("ul",null,(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("a",{parentName:"li",href:"https://docs.cstudio.app/en/docs/resource/aws/Vpc/"},(0,n.yg)("strong",{parentName:"a"},"Vpc")))),(0,n.yg)("h3",{id:"connected-resources"},"Connected Resources"),(0,n.yg)("ul",null,(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("a",{parentName:"li",href:"https://docs.cstudio.app/en/docs/resource/aws/S3/S3Bucket"},(0,n.yg)("strong",{parentName:"a"},"S3 Bucket"))),(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("a",{parentName:"li",href:"https://docs.cstudio.app/en/docs/resource/aws/Cloudwatch/Log"},(0,n.yg)("strong",{parentName:"a"},"Cloudwatch Log")))),(0,n.yg)("h2",{id:"resource-setting-values"},"Resource Setting Values"),(0,n.yg)("ul",null,(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("inlineCode",{parentName:"li"},"linked_log_destination_type")," : The type of the logging destination"),(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("inlineCode",{parentName:"li"},"linked_log_destination_name")," : The name of the logging destination"),(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("inlineCode",{parentName:"li"},"traffic_type")," : The type of traffic to capture"),(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("inlineCode",{parentName:"li"},"included_vpc_name")," : VPC name to attach to Flow Log")),(0,n.yg)("hr",null),(0,n.yg)("h2",{id:"reference-materials"},"Reference Materials"),(0,n.yg)("ul",null,(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("a",{parentName:"li",href:"https://docs.aws.amazon.com/ko_kr/vpc/latest/userguide/flow-logs.html"},"IP Traffic Logging with VPC Flow Logs (AWS)")),(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("a",{parentName:"li",href:"https://aws.amazon.com/ko/cloudwatch/pricing/"},"Amazon CloudWatch Price(AWS)")),(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("a",{parentName:"li",href:"https://registry.terraform.io/providers/hashicorp/aws/latest/docs/resources/flow_log"},"aws_flow_log(Terraform)"))))}g.isMDXComponent=!0}}]);