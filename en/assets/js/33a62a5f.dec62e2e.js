"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[27318],{15680:(e,t,n)=>{n.d(t,{xA:()=>u,yg:()=>y});var a=n(96540);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),p=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},u=function(e){var t=p(e.components);return a.createElement(s.Provider,{value:t},e.children)},m="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},g=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),m=p(n),g=r,y=m["".concat(s,".").concat(g)]||m[g]||c[g]||i;return n?a.createElement(y,o(o({ref:t},u),{},{components:n})):a.createElement(y,o({ref:t},u))}));function y(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,o=new Array(i);o[0]=g;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[m]="string"==typeof e?e:r,o[1]=l;for(var p=2;p<i;p++)o[p]=n[p];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}g.displayName="MDXCreateElement"},89500:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>c,frontMatter:()=>i,metadata:()=>l,toc:()=>p});var a=n(58168),r=(n(96540),n(15680));const i={title:"Job",sidebar_position:0,tags:["Kubernetes","Resource","Batch","Job"]},o=void 0,l={unversionedId:"resource/kubernetes/Batch/Job",id:"resource/kubernetes/Batch/Job",title:"Job",description:"Resource Icon",source:"@site/i18n/en/docusaurus-plugin-content-docs/current/resource/kubernetes/Batch/Job.mdx",sourceDirName:"resource/kubernetes/Batch",slug:"/resource/kubernetes/Batch/Job",permalink:"/en/docs/resource/kubernetes/Batch/Job",draft:!1,tags:[{label:"Kubernetes",permalink:"/en/docs/tags/kubernetes"},{label:"Resource",permalink:"/en/docs/tags/resource"},{label:"Batch",permalink:"/en/docs/tags/batch"},{label:"Job",permalink:"/en/docs/tags/job"}],version:"current",sidebarPosition:0,frontMatter:{title:"Job",sidebar_position:0,tags:["Kubernetes","Resource","Batch","Job"]},sidebar:"mySidebar",previous:{title:"CronJob",permalink:"/en/docs/resource/kubernetes/Batch/CronJob"},next:{title:"Core",permalink:"/en/docs/category/core"}},s={},p=[{value:"Resource Icon",id:"resource-icon",level:2},{value:"Resource Overview",id:"resource-overview",level:2},{value:"Associated Resources",id:"associated-resources",level:2},{value:"Parent Resource",id:"parent-resource",level:3},{value:"Connected Resources",id:"connected-resources",level:3},{value:"Resource Setting Values",id:"resource-setting-values",level:2},{value:"Reference Materials",id:"reference-materials",level:2}],u={toc:p},m="wrapper";function c(e){let{components:t,...n}=e;return(0,r.yg)(m,(0,a.A)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,r.yg)("hr",null),(0,r.yg)("br",null),(0,r.yg)("h2",{id:"resource-icon"},"Resource Icon"),(0,r.yg)("img",{src:"https://cloudstudioblob.blob.core.windows.net/cloudstudio/kubernetesImg/batch-job.png"}),(0,r.yg)("h2",{id:"resource-overview"},"Resource Overview"),(0,r.yg)("p",null,"A Kubernetes resource used to execute one-time jobs."),(0,r.yg)("h2",{id:"associated-resources"},"Associated Resources"),(0,r.yg)("h3",{id:"parent-resource"},"Parent Resource"),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("a",{parentName:"li",href:"https://docs.cstudio.app/en/docs/resource/kubernetes/Base/Cluster"},(0,r.yg)("strong",{parentName:"a"},"Cluster"))),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("a",{parentName:"li",href:"https://docs.cstudio.app/en/docs/resource/kubernetes/Core/Namespace"},(0,r.yg)("strong",{parentName:"a"},"Namespace")))),(0,r.yg)("h3",{id:"connected-resources"},"Connected Resources"),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("a",{parentName:"li",href:"https://docs.cstudio.app/en/docs/resource/kubernetes/Core/ConfigMap"},(0,r.yg)("strong",{parentName:"a"},"ConfigMap")))),(0,r.yg)("h2",{id:"resource-setting-values"},"Resource Setting Values"),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("p",{parentName:"li"},(0,r.yg)("inlineCode",{parentName:"p"},"service_name")," : Name of the Job resource")),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("p",{parentName:"li"},(0,r.yg)("inlineCode",{parentName:"p"},"namespace")," : Namespace where job resources will be distributed")),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("p",{parentName:"li"},(0,r.yg)("inlineCode",{parentName:"p"},"annotations")," : A key-value used to display necessary information in the Kubernetes system")),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("p",{parentName:"li"},(0,r.yg)("inlineCode",{parentName:"p"},"labels")," : To distinguish objects, the user arbitrarily specifies the desired value")),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("p",{parentName:"li"},(0,r.yg)("inlineCode",{parentName:"p"},"template_labels")," : Label to be set in Pod created per node")),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("p",{parentName:"li"},(0,r.yg)("inlineCode",{parentName:"p"},"restart_policy")," : Specifies what to do after a container running within a Pod fails or a task completes")),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("p",{parentName:"li"},(0,r.yg)("inlineCode",{parentName:"p"},"backoff_limit")," : Block creating or updating a task when the task state ends or rejects - it is True")),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("p",{parentName:"li"},(0,r.yg)("inlineCode",{parentName:"p"},"wait_for_completion")," : Blocks job creation or update until the job reaches completion or failure status - Default is True")),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("p",{parentName:"li"},(0,r.yg)("inlineCode",{parentName:"p"},"timeouts")," : Time allowed before a task is considered failed"),(0,r.yg)("ul",{parentName:"li"},(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("inlineCode",{parentName:"li"},"create")," : Time to create a new task and wait for the task to complete successfully - default 1m   "),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("inlineCode",{parentName:"li"},"update")," : Time to update an existing task and wait for successful task completion - default 1m"))),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("p",{parentName:"li"},(0,r.yg)("inlineCode",{parentName:"p"},"containers")," : Defines templates for containers belonging to a pod - Default values can be set and applied, after which detailed settings can be configured"),(0,r.yg)("ul",{parentName:"li"},(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("p",{parentName:"li"},(0,r.yg)("inlineCode",{parentName:"p"},"containers.name")," : Define container name"),(0,r.yg)("ul",{parentName:"li"},(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("p",{parentName:"li"},(0,r.yg)("inlineCode",{parentName:"p"},"image")," : Specify the image to use for the container")),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("p",{parentName:"li"},(0,r.yg)("inlineCode",{parentName:"p"},"args")," : Commands to be executed in the container")),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("p",{parentName:"li"},(0,r.yg)("inlineCode",{parentName:"p"},"command")," : Commands to be executed in the container")),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("p",{parentName:"li"},(0,r.yg)("inlineCode",{parentName:"p"},"port")," : List of ports to expose in container")),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("p",{parentName:"li"},(0,r.yg)("inlineCode",{parentName:"p"},"resources")," : SSpecifies the amount of resources in the container - Detailed settings"),(0,r.yg)("ul",{parentName:"li"},(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("inlineCode",{parentName:"li"},"name")," : Specify minimum/maximum amount of computing resources - ",(0,r.yg)("inlineCode",{parentName:"li"},"limits"),", ",(0,r.yg)("inlineCode",{parentName:"li"},"requests")),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("inlineCode",{parentName:"li"},"cpu")," : Specifies the amount of cpu(m)"),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("inlineCode",{parentName:"li"},"memory")," : Specifies the amount of memory(Mi)"))),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("p",{parentName:"li"},(0,r.yg)("inlineCode",{parentName:"p"},"probe")," : Define how to diagnose the health of a Pod - Detailed settings"),(0,r.yg)("ul",{parentName:"li"},(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("inlineCode",{parentName:"li"},"name")," : Probe method selection - ",(0,r.yg)("inlineCode",{parentName:"li"},"startup"),", ",(0,r.yg)("inlineCode",{parentName:"li"},"liveness"),", ",(0,r.yg)("inlineCode",{parentName:"li"},"readiness")),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("inlineCode",{parentName:"li"},"http_get_path")," : Path to access the HTTP server"),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("inlineCode",{parentName:"li"},"http_get_port")," : Port number to be accessed by the container"),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("inlineCode",{parentName:"li"},"http_header")," : Custom headers to set in the request"),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("inlineCode",{parentName:"li"},"initial_delay_seconds")," : Number of seconds after the container starts before the probe starts"),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("inlineCode",{parentName:"li"},"period_seconds")," : How often to perform probes (in seconds)"))),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("p",{parentName:"li"},(0,r.yg)("inlineCode",{parentName:"p"},"env")," : Block of key-value pairs to set in container environment - Detailed settings"),(0,r.yg)("ul",{parentName:"li"},(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("inlineCode",{parentName:"li"},"name")," : Name of the environment variable"),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("inlineCode",{parentName:"li"},"value")," : Value for the environment variable"))),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("p",{parentName:"li"},(0,r.yg)("inlineCode",{parentName:"p"},"volume_mount")," : The pod volume to mount on the container's file system - Detailed settings"),(0,r.yg)("ul",{parentName:"li"},(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("inlineCode",{parentName:"li"},"name")," : Name of the volume mount"),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("inlineCode",{parentName:"li"},"path"),(0,r.yg)("ul",{parentName:"li"},(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("inlineCode",{parentName:"li"},"mount_path")," : Path within the container where the volume should be mounted"),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("inlineCode",{parentName:"li"},"sub_path")," : Path within the container where the volume should be mounted"))))))))),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("p",{parentName:"li"},(0,r.yg)("inlineCode",{parentName:"p"},"volume")," : List of volumes that containers in a pod can mount"),(0,r.yg)("ul",{parentName:"li"},(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("inlineCode",{parentName:"li"},"name")," : Volume name",(0,r.yg)("ul",{parentName:"li"},(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("inlineCode",{parentName:"li"},"type")," : Type of volume to mount - ",(0,r.yg)("inlineCode",{parentName:"li"},"EmptyDir"),", ",(0,r.yg)("inlineCode",{parentName:"li"},"ConfigMap"),", ",(0,r.yg)("inlineCode",{parentName:"li"},"PersistentVolumeClaim")),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("inlineCode",{parentName:"li"},"target_name")," : Name of persistent volume claim"),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("inlineCode",{parentName:"li"},"default_mode")," : Mode to use for generated files - between 0 and 0777, default is 0644"),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("inlineCode",{parentName:"li"},"read_only")," : If true, mounted read-only, otherwise read/write"))))),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("p",{parentName:"li"},(0,r.yg)("inlineCode",{parentName:"p"},"image_pull_secrets")," : Secret in the same namespace containing the permissions needed to pull the image used by the Container"))),(0,r.yg)("hr",null),(0,r.yg)("h2",{id:"reference-materials"},"Reference Materials"),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("a",{parentName:"li",href:"https://learn.microsoft.com/ko-kr/azure/app-service/overview"},"Horizontal Pod Autoscaling(Kubernetes)")),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("a",{parentName:"li",href:"https://registry.terraform.io/providers/hashicorp/azurerm/latest/en/docs/resources/app_service"},"Horizontal Pod Autoscaling(Terraform)"))))}c.isMDXComponent=!0}}]);