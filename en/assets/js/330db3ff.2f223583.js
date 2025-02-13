"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[77824],{15680:(e,n,t)=>{t.d(n,{xA:()=>c,yg:()=>y});var r=t(96540);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var s=r.createContext({}),p=function(e){var n=r.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):o(o({},n),e)),t},c=function(e){var n=p(e.components);return r.createElement(s.Provider,{value:n},e.children)},u="mdxType",m={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},g=r.forwardRef((function(e,n){var t=e.components,a=e.mdxType,i=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),u=p(t),g=a,y=u["".concat(s,".").concat(g)]||u[g]||m[g]||i;return t?r.createElement(y,o(o({ref:n},c),{},{components:t})):r.createElement(y,o({ref:n},c))}));function y(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var i=t.length,o=new Array(i);o[0]=g;var l={};for(var s in n)hasOwnProperty.call(n,s)&&(l[s]=n[s]);l.originalType=e,l[u]="string"==typeof e?e:a,o[1]=l;for(var p=2;p<i;p++)o[p]=t[p];return r.createElement.apply(null,o)}return r.createElement.apply(null,t)}g.displayName="MDXCreateElement"},29666:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>s,contentTitle:()=>o,default:()=>m,frontMatter:()=>i,metadata:()=>l,toc:()=>p});var r=t(58168),a=(t(96540),t(15680));const i={title:"EcsTaskDefinition",sidebar_position:0,tags:["AWS","Resource","Ecs","EcsTaskDefinition"]},o=void 0,l={unversionedId:"resource/aws/Ecs/EcsTaskDefinition",id:"resource/aws/Ecs/EcsTaskDefinition",title:"EcsTaskDefinition",description:"Resource Icon",source:"@site/i18n/en/docusaurus-plugin-content-docs/current/resource/aws/Ecs/EcsTaskDefinition.mdx",sourceDirName:"resource/aws/Ecs",slug:"/resource/aws/Ecs/EcsTaskDefinition",permalink:"/en/docs/resource/aws/Ecs/EcsTaskDefinition",draft:!1,tags:[{label:"AWS",permalink:"/en/docs/tags/aws"},{label:"Resource",permalink:"/en/docs/tags/resource"},{label:"Ecs",permalink:"/en/docs/tags/ecs"},{label:"EcsTaskDefinition",permalink:"/en/docs/tags/ecs-task-definition"}],version:"current",sidebarPosition:0,frontMatter:{title:"EcsTaskDefinition",sidebar_position:0,tags:["AWS","Resource","Ecs","EcsTaskDefinition"]},sidebar:"mySidebar",previous:{title:"EcsCluster",permalink:"/en/docs/resource/aws/Ecs/EcsCluster"},next:{title:"Efs",permalink:"/en/docs/category/efs"}},s={},p=[{value:"Resource Icon",id:"resource-icon",level:2},{value:"Resource Overview",id:"resource-overview",level:2},{value:"Associated Resources",id:"associated-resources",level:2},{value:"Parent Resources",id:"parent-resources",level:3},{value:"Resource Setting Values",id:"resource-setting-values",level:2},{value:"Reference Materials",id:"reference-materials",level:2}],c={toc:p},u="wrapper";function m(e){let{components:n,...t}=e;return(0,a.yg)(u,(0,r.A)({},c,t,{components:n,mdxType:"MDXLayout"}),(0,a.yg)("hr",null),(0,a.yg)("br",null),(0,a.yg)("h2",{id:"resource-icon"},"Resource Icon"),(0,a.yg)("img",{src:"https://cloudstudioblob.blob.core.windows.net/cloudstudio/awsImg/ecs-ecs_task_definition.png"}),(0,a.yg)("h2",{id:"resource-overview"},"Resource Overview"),(0,a.yg)("h2",{id:"associated-resources"},"Associated Resources"),(0,a.yg)("h3",{id:"parent-resources"},"Parent Resources"),(0,a.yg)("ul",null,(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("a",{parentName:"li",href:"https://docs.cstudio.app/en/docs/resource/aws/Base/Region"},(0,a.yg)("strong",{parentName:"a"},"Region")))),(0,a.yg)("h2",{id:"resource-setting-values"},"Resource Setting Values"),(0,a.yg)("ul",null,(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("p",{parentName:"li"},(0,a.yg)("inlineCode",{parentName:"p"},"app_environment")," : Launch type required for the task - ",(0,a.yg)("inlineCode",{parentName:"p"},"EC2"),", ",(0,a.yg)("inlineCode",{parentName:"p"},"Fargate"))),(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("p",{parentName:"li"},(0,a.yg)("inlineCode",{parentName:"p"},"os_architecture")," : Operating system family to use when registering the task definition")),(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("p",{parentName:"li"},(0,a.yg)("inlineCode",{parentName:"p"},"task_cpu")," : Number of CPU units used by the task")),(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("p",{parentName:"li"},(0,a.yg)("inlineCode",{parentName:"p"},"task_memory")," : Amount of memory used by the task (MiB)")),(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("p",{parentName:"li"},(0,a.yg)("inlineCode",{parentName:"p"},"network_mode")," : Networking mode to use for the task's container - ",(0,a.yg)("inlineCode",{parentName:"p"},"awsvpc"),", ",(0,a.yg)("inlineCode",{parentName:"p"},"none"),", ",(0,a.yg)("inlineCode",{parentName:"p"},"bridge"),", ",(0,a.yg)("inlineCode",{parentName:"p"},"host"))),(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("p",{parentName:"li"},(0,a.yg)("inlineCode",{parentName:"p"},"container")," : Name of the container to run in the ECS Cluster"),(0,a.yg)("ul",{parentName:"li"},(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("inlineCode",{parentName:"li"},"image_url")," : Image of the container to run in the ECS Cluster"),(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("inlineCode",{parentName:"li"},"essential_enabled")," : Whether other objects related to the container should stop or continue running if the container stops - ",(0,a.yg)("inlineCode",{parentName:"li"},"false"),", ",(0,a.yg)("inlineCode",{parentName:"li"},"true")),(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("inlineCode",{parentName:"li"},"port_mapping")," : Port mapping details",(0,a.yg)("ul",{parentName:"li"},(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("inlineCode",{parentName:"li"},"name")," : Name of the port mapping"),(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("inlineCode",{parentName:"li"},"container_port")," : Port number used by the container for traffic to and from the host container instance"),(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("inlineCode",{parentName:"li"},"protocol")," : Protocol used for port mapping - ",(0,a.yg)("inlineCode",{parentName:"li"},"tcp"),", ",(0,a.yg)("inlineCode",{parentName:"li"},"udp")),(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("inlineCode",{parentName:"li"},"app_protocol")," : Application protocol used for service connections - ",(0,a.yg)("inlineCode",{parentName:"li"},"http"),", ",(0,a.yg)("inlineCode",{parentName:"li"},"http2"),", ",(0,a.yg)("inlineCode",{parentName:"li"},"grpc"),", ",(0,a.yg)("inlineCode",{parentName:"li"},"none")))),(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("inlineCode",{parentName:"li"},"cpu")," : CPU capacity of the container running in the ECS Cluster"),(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("inlineCode",{parentName:"li"},"memory")," : Memory capacity of the container running in the ECS Cluster"))),(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("p",{parentName:"li"},(0,a.yg)("inlineCode",{parentName:"p"},"volume")),(0,a.yg)("ul",{parentName:"li"},(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("inlineCode",{parentName:"li"},"name")," : Name of the volume to attach to the task definition"))),(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("p",{parentName:"li"},(0,a.yg)("inlineCode",{parentName:"p"},"volume_mount")),(0,a.yg)("ul",{parentName:"li"},(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("inlineCode",{parentName:"li"},"name")," : Name of the volume to attach to the task definition"),(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("inlineCode",{parentName:"li"},"container_name")," : Name of the container where the volume will be mounted"),(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("inlineCode",{parentName:"li"},"volume_name")," : Name of the volume to be mounted"),(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("inlineCode",{parentName:"li"},"container_path")," : Path in the container where the volume will be mounted"),(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("inlineCode",{parentName:"li"},"read_only")," : Whether the container has read-only access to the volume - ",(0,a.yg)("inlineCode",{parentName:"li"},"false"),", ",(0,a.yg)("inlineCode",{parentName:"li"},"true"))))),(0,a.yg)("h2",{id:"reference-materials"},"Reference Materials"),(0,a.yg)("ul",null,(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("a",{parentName:"li",href:"https://docs.aws.amazon.com/ko_kr/AmazonECS/latest/developerguide/task_definitions.html"},"Amazon Ecs Task Definition(AWS)")),(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("a",{parentName:"li",href:"https://registry.terraform.io/providers/hashicorp/aws/latest/docs/resources/ecs_task_definition"},"Amazon Ecs Task Definition(Terraform)"))))}m.isMDXComponent=!0}}]);