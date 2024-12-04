"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[29605],{15680:(e,r,t)=>{t.d(r,{xA:()=>p,yg:()=>g});var n=t(96540);function a(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function l(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function i(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?l(Object(t),!0).forEach((function(r){a(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):l(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function o(e,r){if(null==e)return{};var t,n,a=function(e,r){if(null==e)return{};var t,n,a={},l=Object.keys(e);for(n=0;n<l.length;n++)t=l[n],r.indexOf(t)>=0||(a[t]=e[t]);return a}(e,r);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)t=l[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var s=n.createContext({}),u=function(e){var r=n.useContext(s),t=r;return e&&(t="function"==typeof e?e(r):i(i({},r),e)),t},p=function(e){var r=u(e.components);return n.createElement(s.Provider,{value:r},e.children)},m="mdxType",c={inlineCode:"code",wrapper:function(e){var r=e.children;return n.createElement(n.Fragment,{},r)}},y=n.forwardRef((function(e,r){var t=e.components,a=e.mdxType,l=e.originalType,s=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),m=u(t),y=a,g=m["".concat(s,".").concat(y)]||m[y]||c[y]||l;return t?n.createElement(g,i(i({ref:r},p),{},{components:t})):n.createElement(g,i({ref:r},p))}));function g(e,r){var t=arguments,a=r&&r.mdxType;if("string"==typeof e||a){var l=t.length,i=new Array(l);i[0]=y;var o={};for(var s in r)hasOwnProperty.call(r,s)&&(o[s]=r[s]);o.originalType=e,o[m]="string"==typeof e?e:a,i[1]=o;for(var u=2;u<l;u++)i[u]=t[u];return n.createElement.apply(null,i)}return n.createElement.apply(null,t)}y.displayName="MDXCreateElement"},88767:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>s,contentTitle:()=>i,default:()=>c,frontMatter:()=>l,metadata:()=>o,toc:()=>u});var n=t(58168),a=(t(96540),t(15680));const l={title:"PersistentVolume",sidebar_position:0,tags:["Kubernetes","\u30ea\u30bd\u30fc\u30b9","Core","PersistentVolume"]},i=void 0,o={unversionedId:"resource/kubernetes/Core/PersistentVolume",id:"resource/kubernetes/Core/PersistentVolume",title:"PersistentVolume",description:"\u30ea\u30bd\u30fc\u30b9\u30a2\u30a4\u30b3\u30f3",source:"@site/i18n/ja/docusaurus-plugin-content-docs/current/resource/kubernetes/Core/PersistentVolume.mdx",sourceDirName:"resource/kubernetes/Core",slug:"/resource/kubernetes/Core/PersistentVolume",permalink:"/ja/docs/resource/kubernetes/Core/PersistentVolume",draft:!1,tags:[{label:"Kubernetes",permalink:"/ja/docs/tags/kubernetes"},{label:"\u30ea\u30bd\u30fc\u30b9",permalink:"/ja/docs/tags/\u30ea\u30bd\u30fc\u30b9"},{label:"Core",permalink:"/ja/docs/tags/core"},{label:"PersistentVolume",permalink:"/ja/docs/tags/persistent-volume"}],version:"current",sidebarPosition:0,frontMatter:{title:"PersistentVolume",sidebar_position:0,tags:["Kubernetes","\u30ea\u30bd\u30fc\u30b9","Core","PersistentVolume"]},sidebar:"mySidebar",previous:{title:"Namespace",permalink:"/ja/docs/resource/kubernetes/Core/Namespace"},next:{title:"PersistentVolumeClaim",permalink:"/ja/docs/resource/kubernetes/Core/PersistentVolumeClaim"}},s={},u=[{value:"\u30ea\u30bd\u30fc\u30b9\u30a2\u30a4\u30b3\u30f3",id:"\u30ea\u30bd\u30fc\u30b9\u30a2\u30a4\u30b3\u30f3",level:2},{value:"\u30ea\u30bd\u30fc\u30b9\u6982\u8981",id:"\u30ea\u30bd\u30fc\u30b9\u6982\u8981",level:2},{value:"\u95a2\u9023\u30ea\u30bd\u30fc\u30b9",id:"\u95a2\u9023\u30ea\u30bd\u30fc\u30b9",level:2},{value:"\u4e0a\u4f4d\u30ea\u30bd\u30fc\u30b9",id:"\u4e0a\u4f4d\u30ea\u30bd\u30fc\u30b9",level:3},{value:"\u63a5\u7d9a\u30ea\u30bd\u30fc\u30b9",id:"\u63a5\u7d9a\u30ea\u30bd\u30fc\u30b9",level:3},{value:"\u30ea\u30bd\u30fc\u30b9\u8a2d\u5b9a\u5024",id:"\u30ea\u30bd\u30fc\u30b9\u8a2d\u5b9a\u5024",level:2},{value:"\u53c2\u8003\u8cc7\u6599",id:"\u53c2\u8003\u8cc7\u6599",level:2}],p={toc:u},m="wrapper";function c(e){let{components:r,...t}=e;return(0,a.yg)(m,(0,n.A)({},p,t,{components:r,mdxType:"MDXLayout"}),(0,a.yg)("hr",null),(0,a.yg)("br",null),(0,a.yg)("h2",{id:"\u30ea\u30bd\u30fc\u30b9\u30a2\u30a4\u30b3\u30f3"},"\u30ea\u30bd\u30fc\u30b9\u30a2\u30a4\u30b3\u30f3"),(0,a.yg)("img",{src:"https://cloudstudioblob.blob.core.windows.net/cloudstudio/kubernetesImg/core-persistent_volume.png"}),(0,a.yg)("h2",{id:"\u30ea\u30bd\u30fc\u30b9\u6982\u8981"},"\u30ea\u30bd\u30fc\u30b9\u6982\u8981"),(0,a.yg)("p",null,"\u30af\u30e9\u30b9\u30bf\u30fc\u306b\u30cd\u30c3\u30c8\u30ef\u30fc\u30af\u63a5\u7d9a\u3055\u308c\u305f\u30ea\u30dd\u30b8\u30c8\u30ea\u3092\u63d0\u4f9b\u3059\u308b\u30af\u30d0\u30cd\u30c6\u30a3\u30b9 \u30ea\u30bd\u30fc\u30b9\u3067\u3059\u3002"),(0,a.yg)("h2",{id:"\u95a2\u9023\u30ea\u30bd\u30fc\u30b9"},"\u95a2\u9023\u30ea\u30bd\u30fc\u30b9"),(0,a.yg)("h3",{id:"\u4e0a\u4f4d\u30ea\u30bd\u30fc\u30b9"},"\u4e0a\u4f4d\u30ea\u30bd\u30fc\u30b9"),(0,a.yg)("ul",null,(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("a",{parentName:"li",href:"https://docs.cstudio.app/ja/docs/resource/kubernetes/Base/Cluster"},(0,a.yg)("strong",{parentName:"a"},"Cluster")))),(0,a.yg)("h3",{id:"\u63a5\u7d9a\u30ea\u30bd\u30fc\u30b9"},"\u63a5\u7d9a\u30ea\u30bd\u30fc\u30b9"),(0,a.yg)("ul",null,(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("a",{parentName:"li",href:"https://docs.cstudio.app/ja/docs/resource/kubernetes/Storage/StorageClass"},(0,a.yg)("strong",{parentName:"a"},"StorageClass"))),(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("a",{parentName:"li",href:"https://docs.cstudio.app/ja/docs/resource/kubernetes/Core/PersistentVolumeClaim"},(0,a.yg)("strong",{parentName:"a"},"PersistentVolumeClaim")))),(0,a.yg)("h2",{id:"\u30ea\u30bd\u30fc\u30b9\u8a2d\u5b9a\u5024"},"\u30ea\u30bd\u30fc\u30b9\u8a2d\u5b9a\u5024"),(0,a.yg)("ul",null,(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("inlineCode",{parentName:"li"},"service_name")," : PersistentVolume \u30ea\u30bd\u30fc\u30b9\u540d"),(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("inlineCode",{parentName:"li"},"annotations")," : \u30af\u30d0\u30cd\u30c6\u30a3\u30b9\u30b7\u30b9\u30c6\u30e0\u3067\u5fc5\u8981\u306a\u60c5\u5831\u3092\u8868\u793a\u3059\u308b\u305f\u3081\u306b\u4f7f\u7528\u3059\u308b key-value"),(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("inlineCode",{parentName:"li"},"labels")," : \u30aa\u30d6\u30b8\u30a7\u30af\u30c8\u3092\u533a\u5207\u308b\u305f\u3081\u306b\u30e6\u30fc\u30b6\u30fc\u304c\u4efb\u610f\u306b\u5e0c\u671b\u3059\u308b\u5024\u3092\u6307\u5b9a"),(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("inlineCode",{parentName:"li"},"spec")," : Persistent Volume \u306e\u5177\u4f53\u7684\u306a\u30b9\u30da\u30c3\u30af\u3092\u5b9a\u7fa9",(0,a.yg)("ul",{parentName:"li"},(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("inlineCode",{parentName:"li"},"spec.storage_class_name")," : \u4f7f\u7528\u3059\u308b\u30b9\u30c8\u30ec\u30fc\u30b8 class \u540d\u524d\u6307\u5b9a"),(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("inlineCode",{parentName:"li"},"spec.storage_capacity")," : \u4f7f\u7528\u3059\u308b\u30b9\u30c8\u30ec\u30fc\u30b8\u5bb9\u91cf\u306e\u8a2d\u5b9a"),(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("inlineCode",{parentName:"li"},"spec.volume_driver")," : \u4f7f\u7528\u3059\u308b volume \u30c9\u30e9\u30a4\u30d0\u30fc\u8a2d\u5b9a"),(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("inlineCode",{parentName:"li"},"spec.volume_handle"),' : PV \u304c\u5b9f\u969b\u306e\u30b9\u30c8\u30ec\u30fc\u30b8\u30ea\u30bd\u30fc\u30b9\u306b\u63a5\u7d9a\u3055\u308c\u308b\u8b58\u5225\u5b50"'),(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("inlineCode",{parentName:"li"},"spec.persistent_volume_reclaim_policy")," : \u30af\u30ec\u30fc\u30e0\u304b\u3089\u89e3\u9664\u3055\u308c\u305f\u3068\u304d\u306e\u30dc\u30ea\u30e5\u30fc\u30e0\u56de\u53ce\u30dd\u30ea\u30b7\u30fc - ",(0,a.yg)("inlineCode",{parentName:"li"},"retain"),",",(0,a.yg)("inlineCode",{parentName:"li"},"delete"),",",(0,a.yg)("inlineCode",{parentName:"li"},"recycle")),(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("inlineCode",{parentName:"li"},"spec.read_only")," : Volume mounts \u3067 Readonly \u8a2d\u5b9a\u3092\u5f37\u5236\u3059\u308b\u304b\u3069\u3046\u304b\u6307\u5b9a - ",(0,a.yg)("inlineCode",{parentName:"li"},"false"),",",(0,a.yg)("inlineCode",{parentName:"li"},"true")),(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("inlineCode",{parentName:"li"},"spec.volume_attributes")," : \u4f7f\u7528\u3059\u308b\u30dc\u30ea\u30e5\u30fc\u30e0\u306e\u30d7\u30ed\u30d1\u30c6\u30a3\u3092\u6307\u5b9a"),(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("inlineCode",{parentName:"li"},"spec.access_modes")," : \u30dc\u30ea\u30e5\u30fc\u30e0\u3092\u30de\u30a6\u30f3\u30c8\u3067\u304d\u308b\u65b9\u6cd5\u3092\u6307\u5b9a - ",(0,a.yg)("inlineCode",{parentName:"li"},"ReadOnlyMany"),",",(0,a.yg)("inlineCode",{parentName:"li"},"ReadWriteOnce"),",",(0,a.yg)("inlineCode",{parentName:"li"},"ReadWriteMany")),(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("inlineCode",{parentName:"li"},"spec.mount_options")," : \u8ffd\u52a0\u30de\u30a6\u30f3\u30c8\u30aa\u30d7\u30b7\u30e7\u30f3\u306e\u6307\u5b9a"))),(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("inlineCode",{parentName:"li"},"node_stage_secret_ref")," : \u30b9\u30c8\u30ec\u30fc\u30b8\u306b\u30a2\u30af\u30bb\u30b9\u3067\u304d\u308b\u30e6\u30fc\u30b6\u30fc\u306e\u8a8d\u8a3c\u3092\u542b\u3080\u30af\u30d0\u30cd\u30c6\u30a3\u30b9 \u30b7\u30fc\u30af\u30ec\u30c3\u30c8\u3092\u6307\u5b9a",(0,a.yg)("ul",{parentName:"li"},(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("inlineCode",{parentName:"li"},"node_stage_secret_ref.name")," : secret \u540d\u306e\u8a2d\u5b9a"),(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("inlineCode",{parentName:"li"},"node_stage_secret_ref.namespace")," : secret \u304c\u3042\u308b\u30cd\u30fc\u30e0\u30b9\u30da\u30fc\u30b9\u306e\u8a2d\u5b9a")))),(0,a.yg)("hr",null),(0,a.yg)("h2",{id:"\u53c2\u8003\u8cc7\u6599"},"\u53c2\u8003\u8cc7\u6599"),(0,a.yg)("ul",null,(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("a",{parentName:"li",href:"https://registry.terraform.io/providers/hashicorp/kubernetes/latest/docs/resources/persistent_volume"},"PersistentVolume(Kubernetes)")),(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("a",{parentName:"li",href:"https://kubernetes.io/docs/concepts/storage/persistent-volumes/"},"PersistentVolume(Terraform)"))))}c.isMDXComponent=!0}}]);