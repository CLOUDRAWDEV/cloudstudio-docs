"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[86505],{15680:(e,i,t)=>{t.d(i,{xA:()=>p,yg:()=>g});var s=t(96540);function r(e,i,t){return i in e?Object.defineProperty(e,i,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[i]=t,e}function o(e,i){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);i&&(s=s.filter((function(i){return Object.getOwnPropertyDescriptor(e,i).enumerable}))),t.push.apply(t,s)}return t}function a(e){for(var i=1;i<arguments.length;i++){var t=null!=arguments[i]?arguments[i]:{};i%2?o(Object(t),!0).forEach((function(i){r(e,i,t[i])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(i){Object.defineProperty(e,i,Object.getOwnPropertyDescriptor(t,i))}))}return e}function c(e,i){if(null==e)return{};var t,s,r=function(e,i){if(null==e)return{};var t,s,r={},o=Object.keys(e);for(s=0;s<o.length;s++)t=o[s],i.indexOf(t)>=0||(r[t]=e[t]);return r}(e,i);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(s=0;s<o.length;s++)t=o[s],i.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var n=s.createContext({}),l=function(e){var i=s.useContext(n),t=i;return e&&(t="function"==typeof e?e(i):a(a({},i),e)),t},p=function(e){var i=l(e.components);return s.createElement(n.Provider,{value:i},e.children)},u="mdxType",y={inlineCode:"code",wrapper:function(e){var i=e.children;return s.createElement(s.Fragment,{},i)}},d=s.forwardRef((function(e,i){var t=e.components,r=e.mdxType,o=e.originalType,n=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),u=l(t),d=r,g=u["".concat(n,".").concat(d)]||u[d]||y[d]||o;return t?s.createElement(g,a(a({ref:i},p),{},{components:t})):s.createElement(g,a({ref:i},p))}));function g(e,i){var t=arguments,r=i&&i.mdxType;if("string"==typeof e||r){var o=t.length,a=new Array(o);a[0]=d;var c={};for(var n in i)hasOwnProperty.call(i,n)&&(c[n]=i[n]);c.originalType=e,c[u]="string"==typeof e?e:r,a[1]=c;for(var l=2;l<o;l++)a[l]=t[l];return s.createElement.apply(null,a)}return s.createElement.apply(null,t)}d.displayName="MDXCreateElement"},57201:(e,i,t)=>{t.d(i,{KH:()=>s,az:()=>r,hk:()=>o,rI:()=>a});const s={9.1:"\ubaa8\ub2c8\ud130\ub9c1, \uce21\uc815, \ubd84\uc11d \ubc0f \ud3c9\uac00",5.3:"\uc870\uc9c1\uc758 \uc5ed\ud560, \ucc45\uc784 \ubc0f \uad8c\ud55c",7.5:"\ubb38\uc11c\ud654\ub41c \uc815\ubcf4",8.1:"\uc6b4\uc601 \uacc4\ud68d \ubc0f \ud1b5\uc81c","6.1.3":"\uc815\ubcf4\ubcf4\ud638 \uc704\ud5d8\uc870\uce58","6.1.2":"\uc815\ubcf4\ubcf4\ud638 \uc704\ud5d8\ud3c9\uac00",8.2:"\uc815\ubcf4\ubcf4\ud638 \uc704\ud5d8\ud3c9\uac00"},r={"7.2.2":"\uac10\uc0ac\uae30\ub85d \ubc0f \ubaa8\ub2c8\ud130\ub9c1","2.1.2.":"\uc8fc\uc694 \uc9c1\ubb34\uc790 \uc9c0\uc815 \ubc0f \uac10\ub3c5","2.1.3.":"\uc9c1\ubb34 \ubd84\ub9ac","2.1.4.":"\ube44\ubc00\uc720\uc9c0\uc11c\uc57d\uc11c","3.1.1.":"\uc790\uc0b0 \uc2dd\ubcc4","3.2.1.":"\ubcc0\uacbd\uad00\ub9ac","3.3.2.":"\ucde8\uc57d\uc810 \uc810\uac80","4.1.1.":"\uacf5\uae09\ub9dd \uad00\ub9ac \uc815\ucc45 \uc218\ub9bd","4.2.1.":"\uacf5\uae09\ub9dd \ubcc0\uacbd\uad00\ub9ac","6.1.1.":"\uc7a5\uc560 \ub300\uc751\uc808\ucc28 \uc218\ub9bd","6.1.2":"\uc7a5\uc560 \ubcf4\uace0","6.1.3":"\uc7a5\uc560 \ucc98\ub9ac \ubc0f \ubcf5\uad6c","6.2.2.":"\uc774\uc911\ud654 \ubc0f \ubc31\uc5c5","5.1.1":"\uce68\ud574\uc0ac\uace0 \ub300\uc751 \uc808\ucc28 \uc218\ub9bd","5.1.3":"\uce68\ud574\uc0ac\uace0 \ub300\uc751 \ud6c8\ub828 \ubc0f \uc810\uac80","5.1.2":"\uce68\ud574\uc0ac\uace0 \ub300\uc751 \uccb4\uacc4 \uad6c\ucd95","5.2.1.":"\uce68\ud574\uc0ac\uace0 \ubcf4\uace0","10.1.1.":"\uc811\uadfc\ud1b5\uc81c \uc815\ucc45 \uc218\ub9bd","10.2.3.":"\uc811\uadfc\uad8c\ud55c \uac80\ud1a0","10.2.1.":"\uc0ac\uc6a9\uc790 \ub4f1\ub85d \ubc0f \uad8c\ud55c\ubd80\uc5ec","10.3.3.":"\uac15\ud654\ub41c \uc778\uc99d \uc218\ub2e8 \uc81c\uacf5","10.3.5.":"\uc774\uc6a9\uc790 \ud328\uc2a4\uc6cc\ub4dc \uad00\ub9ac","9.1.1.":"\uac00\uc0c1\uc790\uc6d0 \uad00\ub9ac","9.1.5":"\uacf5\uac1c\uc11c\ubc84 \ubcf4\uc548","9.2.1":"\uc545\uc131\ucf54\ub4dc \ud1b5\uc81c","11.1.1":"\ub124\ud2b8\uc6cc\ud06c \ubcf4\uc548\uc815\ucc45 \uc218\ub9bd","11.1.5":"\ub124\ud2b8\uc6cc\ud06c \ubd84\ub9ac","13.1.5":"\uc2dc\uac01 \ub3d9\uae30\ud654","13.2.2":"\uc2dc\ud5d8\ub370\uc774\ud130 \ubcf4\uc548","12.1.1.":"\ub370\uc774\ud130 \ubd84\ub958","12.1.2.":"\ub370\uc774\ud130 \uc18c\uc720\uad8c","12.1.3.":"\ub370\uc774\ud130 \ubb34\uacb0\uc131","12.1.4.":"\ub370\uc774\ud130 \ubcf4\ud638","12.1.5.":"\ub370\uc774\ud130 \ucd94\uc801\uc131","12.1.6.":"\ub370\uc774\ud130 \ud3d0\uae30","12.3.1.":"\uc554\ud638 \uc815\ucc45 \uc218\ub9bd","12.3.2.":"\uc554\ud638\ud0a4 \uad00\ub9ac","14.2.1.":"\ubb3c\ub9ac\uc801 \uc704\uce58 \ubc0f \ubd84\ub9ac"},o={2.11:"\uc0ac\uace0 \uc608\ubc29 \ubc0f \ub300\uc751",2.2:"\uc778\uc801\ubcf4\uc548",2.3:"\uc678\ubd80\uc790 \ubcf4\uc548",1.2:"\uc704\ud5d8 \uad00\ub9ac","2.9.":"\uc2dc\uc2a4\ud15c \ubc0f \uc11c\ube44\uc2a4 \uc6b4\uc601\uad00\ub9ac",2.12:"\uc7ac\ud574\ubcf5\uad6c",2.9:"\uc2dc\uc2a4\ud15c \ubc0f \uc11c\ube44\uc2a4 \uc6b4\uc601\uad00\ub9ac",2.6:"\uc811\uadfc\ud1b5\uc81c",2.5:"\uc778\uc99d \ubc0f \uad8c\ud55c\uad00\ub9ac",2.7:"\uc554\ud638\ud654 \uc801\uc6a9","2.10":"\uc2dc\uc2a4\ud15c \ubc0f \uc11c\ube44\uc2a4 \ubcf4\uc548\uad00\ub9ac",2.8:"\uc815\ubcf4\uc2dc\uc2a4\ud15c \ub3c4\uc785 \ubc0f \uac1c\ubc1c \ubcf4\uc548",2.4:"\ubb3c\ub9ac\ubcf4\uc548"},a={"1.4.1":"\ubcf4\uc548\uac10\uc0ac","2.1.1":"\ub0b4\ubd80\uc778\ub825 \ubcf4\uc548","2.1.2":"\ub0b4\ubd80\uc778\ub825 \ubcf4\uc548","2.1.3":"\ub0b4\ubd80\uc778\ub825 \ubcf4\uc548","2.2.1":"\uc678\ubd80\uc778\ub825 \ubcf4\uc548","3.1.1":"\uc790\uc0b0 \uc2dd\ubcc4 \ubc0f \ubd84\ub958","3.2.1":"\uc790\uc0b0 \ubcc0\uacbd\uad00\ub9ac","3.3.1":"\uc704\ud5d8\uad00\ub9ac","4.1.1":"\uacf5\uae09\ub9dd \uad00\ub9ac\uc815\ucc45","4.2.1":"\uacf5\uae09\ub9dd \ubcc0\uacbd\uad00\ub9ac","5.1.1":"\uc7a5\uc560\ub300\uc751","5.1.2":"\uc7a5\uc560\ub300\uc751","5.1.3":"\uc7a5\uc560\ub300\uc751","5.2.1":"\uc11c\ube44\uc2a4 \uac00\uc6a9\uc131","5.2.2":"\uc11c\ube44\uc2a4 \uac00\uc6a9\uc131","6.1.1":"\uce68\ud574\uc0ac\uace0 \ub300\uc751 \uc808\ucc28 \ubc0f \uccb4\uacc4","6.1.2":"\uce68\ud574\uc0ac\uace0 \ub300\uc751 \uc808\ucc28 \ubc0f \uccb4\uacc4","6.1.3":"\uce68\ud574\uc0ac\uace0 \ub300\uc751 \uc808\ucc28 \ubc0f \uccb4\uacc4","6.2.1":"\uce68\ud574\uc0ac\uace0 \ub300\uc751","7.1.1":"\uc811\uadfc\ud1b5\uc81c \uc815\ucc45","7.2.1":"\uc811\uadfc\uad8c\ud55c \uad00\ub9ac","7.2.2":"\uc811\uadfc\uad8c\ud55c \uad00\ub9ac","7.3.1":"\uc0ac\uc6a9\uc790 \uc2dd\ubcc4 \ubc0f \uc778\uc99d","7.3.2":"\uc0ac\uc6a9\uc790 \uc2dd\ubcc4 \ubc0f \uc778\uc99d","8.1.1":"\uac00\uc0c1\ud654 \ubcf4\uc548","8.1.2":"\uac00\uc0c1\ud654 \ubcf4\uc548","8.1.3":"\uac00\uc0c1\ud654 \ubcf4\uc548","8.1.4":"\uac00\uc0c1\ud654 \ubcf4\uc548","8.1.5":"\uac00\uc0c1\ud654 \ubcf4\uc548","8.2.1":"\uac00\uc0c1\ud658\uacbd \ubcf4\ud638","8.3.1":"\uc778\ud504\ub77c \ubcf4\uc548","8.3.2":"\uc778\ud504\ub77c \ubcf4\uc548","8.3.3":"\uc778\ud504\ub77c \ubcf4\uc548","9.1.1":"\uc2dc\uc2a4\ud15c \ubd84\uc11d \ubc0f \uc124\uacc4","9.2.1":"\uad6c\ud604 \ubc0f \uc2dc\ud5d8","10.1.1":"\ub370\uc774\ud130 \ubcf4\ud638","10.1.2":"\ub370\uc774\ud130 \ubcf4\ud638","10.1.3":"\ub370\uc774\ud130 \ubcf4\ud638","10.1.4":"\ub370\uc774\ud130 \ubcf4\ud638","10.1.5":"\ub370\uc774\ud130 \ubcf4\ud638","10.1.6":"\ub370\uc774\ud130 \ubcf4\ud638","10.2.1":"\uc554\ud638\ud654","10.2.2":"\uc554\ud638\ud654","11.1.1":"\ubb3c\ub9ac\uc801 \ubcf4\ud638\uad6c\uc5ed","11.1.2":"\ubb3c\ub9ac\uc801 \ubcf4\ud638\uad6c\uc5ed","11.1.3":"\ubb3c\ub9ac\uc801 \ubcf4\ud638\uad6c\uc5ed","11.2.1":"\uc815\ubcf4\ucc98\ub9ac \uc2dc\uc124 \ubc0f \uc7a5\ube44\ubcf4\ud638","11.2.2":"\uc815\ubcf4\ucc98\ub9ac \uc2dc\uc124 \ubc0f \uc7a5\ube44\ubcf4\ud638","11.2.3":"\uc815\ubcf4\ucc98\ub9ac \uc2dc\uc124 \ubc0f \uc7a5\ube44\ubcf4\ud638"}},26690:(e,i,t)=>{t.r(i),t.d(i,{assets:()=>u,contentTitle:()=>l,default:()=>m,frontMatter:()=>n,metadata:()=>p,toc:()=>y});var s=t(58168),r=(t(96540),t(15680)),o=t(78056);t(88526),t(93245),t(9478);const a=[{category:"App Service",resource:"Linux App Service",option:"Failed Request Tracing Enabled",type:"\ub85c\uae45 \ubaa8\ub2c8\ud130\ub9c1",description:"\uc2e4\ud328\ud55c \uc694\uccad \uc815\ubcf4 \ucd94\uc801 \uc124\uc815 \ube44\ud65c\uc131\ud654",risk:"medium",iso:"9.1",csap:"7.2.2",isms:"2.11",evaluation:"1.4.1"},{category:"App Service",resource:"Linux App Service",option:"Detailed Error Messages Enabled",type:"\ub85c\uae45 \ubaa8\ub2c8\ud130\ub9c1",description:"\uc624\ub958 \ud398\uc774\uc9c0 \uc800\uc7a5 \uc124\uc815 \ube44\ud65c\uc131\ud654",risk:"medium",iso:"9.1",csap:"7.2.2",isms:"2.11",evaluation:"1.4.1"},{category:"App Service",resource:"Linux App Service",option:"Auth Settings Enabled",type:"\uc0ac\uc6a9\uc790 \ud655\uc778 \ubc0f \uc778\uc99d",description:"\uc778\uc99d \ube44\ud65c\uc131\ud654",risk:"medium",iso:"8.1",csap:"10.3.3.",isms:"2.5",evaluation:"7.3.1"},{category:"App Service",resource:"Linux App Service\n",option:"Ftps State",type:"\uc811\uadfc \ud1b5\uc81c",description:"\uc554\ud638\ud654\ub418\uc9c0 \uc54a\ub294 ftp \ud504\ub85c\ud1a0\ucf5c \ud5c8\uc6a9",risk:"high",iso:"8.1",csap:"12.3.1.",isms:"2.7",evaluation:"10.2.1"},{category:"App Service",resource:"Linux App Service ",option:"Http2 Enabled",type:"\ub124\ud2b8\uc6cc\ud06c \ubcf4\uc548",description:"http2 \ubbf8\uc801\uc6a9",risk:"low",iso:"8.1",csap:"11.1.1",isms:"2.10",evaluation:"8.3.1"},{category:"App Service",resource:"Service Pllaan",option:"Sku Tier",type:"\ub124\ud2b8\uc6cc\ud06c \ubcf4\uc548",description:"always on \uc124\uc815\uc774 \ube44\ud65c\uc131\ud654\ub41c sku \uc0ac\uc6a9",risk:"low",iso:"8.1",csap:"6.2.2.",isms:"2.9",evaluation:"5.2.1"},{category:"App Service",resource:"Windows App Service",option:"Failed Request Tracing Enabled",type:"\ub85c\uae45 \ubaa8\ub2c8\ud130\ub9c1",description:"\uc2e4\ud328\ud55c \uc694\uccad \uc815\ubcf4 \ucd94\uc801 \uc124\uc815 \ube44\ud65c\uc131\ud654",risk:"medium",iso:"9.1",csap:"7.2.2",isms:"2.11",evaluation:"1.4.1"},{category:"App Service",resource:"Windows App Service",option:"Detailed Error Messages Enabled",type:"\ub85c\uae45 \ubaa8\ub2c8\ud130\ub9c1",description:"\uc624\ub958 \ud398\uc774\uc9c0 \uc800\uc7a5 \uc124\uc815 \ube44\ud65c\uc131\ud654",risk:"medium",iso:"9.1",csap:"7.2.2",isms:"2.11",evaluation:"1.4.1"},{category:"App Service",resource:"Windows App Service",option:"Auth Settings Enabled",type:"\uc0ac\uc6a9\uc790 \ud655\uc778 \ubc0f \uc778\uc99d",description:"\uc778\uc99d \ube44\ud65c\uc131\ud654",risk:"medium",iso:"8.1",csap:"10.3.3.",isms:"2.5",evaluation:"7.3.1"},{category:"App Service",resource:"Windows App Service",option:"Http2 Enabled",type:"\ub124\ud2b8\uc6cc\ud06c \ubcf4\uc548",description:"http2 \ubbf8\uc801\uc6a9",risk:"low",iso:"8.1",csap:"11.1.1",isms:"2.10",evaluation:"8.3.1"},{category:"App Service",resource:"Windows App Service",option:"Ftps State",type:"\uc811\uadfc \ud1b5\uc81c",description:"\uc554\ud638\ud654\ub418\uc9c0 \uc54a\ub294 ftp \ud504\ub85c\ud1a0\ucf5c \ud5c8\uc6a9",risk:"high",iso:"8.1",csap:"12.3.1.",isms:"2.7",evaluation:"10.2.1"},{category:"Compute",resource:"Linux Virtual Machine Sacle Set",option:"Enable Ssh Key Authentication",type:"\uc0ac\uc6a9\uc790 \ud655\uc778 \ubc0f \uc778\uc99d",description:"ssh \ud0a4 \uc778\uc99d \ubbf8\uc0ac\uc6a9",risk:"high",iso:"8.1",csap:"12.3.1.",isms:"2.7",evaluation:"10.2.1"},{category:"Compute",resource:"Linux Virtual Mamchine",option:"Enable Ssh Key Authentication",type:"\uc0ac\uc6a9\uc790 \ud655\uc778 \ubc0f \uc778\uc99d",description:"ssh \ud0a4 \uc778\uc99d \ubbf8\uc0ac\uc6a9",risk:"high",iso:"8.1",csap:"12.3.1.",isms:"2.7",evaluation:"10.2.1"},{category:"Container",resource:"Container Registry",option:"Public Network Access Enabled",type:"\uc811\uadfc \ud1b5\uc81c",description:"public \ub124\ud2b8\uc6cc\ud06c \uc811\uadfc \ud5c8\uc6a9",risk:"critical",iso:"8.1",csap:"10.1.1.",isms:"2.6",evaluation:"7.1.1"},{category:"Container",resource:"Container Registry",option:"Admin Enabled",type:"\uc811\uadfc \ud1b5\uc81c",description:"\uad00\ub9ac\uc790 \ud65c\uc131\ud654",risk:"medium",iso:"8.1",csap:"10.2.1.",isms:"2.5",evaluation:"7.2.2"},{category:"Container",resource:"Kubernetes",option:"Default Node Pool > Enable Node Public Ip",type:"\uc811\uadfc \ud1b5\uc81c",description:"\ub178\ud2b8 public ip \ud65c\uc131\ud654",risk:"critical",iso:"8.1",csap:"10.1.1.",isms:"2.6",evaluation:"7.1.1"},{category:"Container",resource:"Kubernetes Cluster",option:"Sku Tier",type:"\ub124\ud2b8\uc6cc\ud06c \ubcf4\uc548",description:"Free sku\ub294 Uptime SLA \uc11c\ube44\uc2a4 \ubbf8\uc81c\uacf5",risk:"high",iso:"8.1",csap:"6.2.2.",isms:"2.9",evaluation:"5.2.1"},{category:"Container",resource:"Kubernetes Cluster",option:"Default Node Pool > Max Pods",type:"\ub124\ud2b8\uc6cc\ud06c \ubcf4\uc548",description:"\uc0dd\uc131 \uac00\ub2a5\ud55c \ucd5c\ub300 \ud30c\ub4dc \uac1c\uc218 \ubd80\uc871",risk:"high",iso:"8.1",csap:"6.2.2.",isms:"2.9",evaluation:"5.2.1"},{category:"Container",resource:"Kubernetes Cluster",option:"Api Server Authorized Ip Ranges",type:"\uc811\uadfc \ud1b5\uc81c",description:"\uc811\uadfc \uac00\ub2a5 ip \uc804\uccb4 \ubc94\uc704 \uc124\uc815",risk:"critical",iso:"8.1",csap:"10.1.1.",isms:"2.6",evaluation:"7.1.1"},{category:"Container",resource:"Kubernetes Cluster",option:"Network Policy",type:"\ub124\ud2b8\uc6cc\ud06c \ubcf4\uc548",description:"network policy \ubbf8\uc124\uc815",risk:"critical",iso:"8.1",csap:"11.1.1",isms:"2.10",evaluation:"8.3.1"},{category:"Cosmosdb",resource:"Cosmosdb Cassandra,\nCosmosdb Gremlin,\nCosmosdb Mongo,\nCosmosdb Sql,\nCosmosdb Table",option:"Public Network Access Enabled",type:"\uc811\uadfc \ud1b5\uc81c",description:"public \ub124\ud2b8\uc6cc\ud06c \uc811\uadfc \ud5c8\uc6a9",risk:"critical",iso:"8.1",csap:"10.1.1.",isms:"2.6",evaluation:"7.1.1"},{category:"Database",resource:"Mssql Server",option:"Auditing Policy > Enable Storage Destination, Auditing Policy > Enable Log Analytics Destination",type:"\ub85c\uae45 \ubaa8\ub2c8\ud130\ub9c1",description:"\uac10\uc0ac \uc815\ucc45 \ube44\ud65c\uc131\ud654",risk:"medium",iso:"9.1",csap:"7.2.2",isms:"2.11",evaluation:"1.4.1"},{category:"Database",resource:"Mssql Server",option:"Enable Storage Destination, Storage Retention Days",type:"\ub85c\uae45 \ubaa8\ub2c8\ud130\ub9c1",description:"\ub85c\uadf8 \ubcf4\uad00 \uae30\uac04 \uc9e7\uc74c",risk:"medium",iso:"9.1",csap:"7.2.2",isms:"2.11",evaluation:"1.4.1"},{category:"Database",resource:"Mssql Server",option:"Security Alert Policy > Alert Policy State, Security Alert Policy > Disabled Alerts",type:"\ub85c\uae45 \ubaa8\ub2c8\ud130\ub9c1",description:"\ud2b9\uc815 \uc704\ud611 \uc54c\ub9bc \ube44\ud65c\uc131\ud654",risk:"medium",iso:"9.1",csap:"7.2.2",isms:"2.11",evaluation:"1.4.1"},{category:"Database",resource:"Mssql Server",option:"Security Alert Policy > Alert Policy State, Security Alert Policy > Alert Retention Days",type:"\ub85c\uae45 \ubaa8\ub2c8\ud130\ub9c1",description:"\ub85c\uadf8 \ubcf4\uad00 \uae30\uac04 \uc9e7\uc74c",risk:"medium",iso:"9.1",csap:"7.2.2",isms:"2.11",evaluation:"1.4.1"},{category:"Database",resource:"Mssql Server",option:"Security Alert Policy > Alert Policy State, Security Alert Policy > Alert Email Addresses",type:"\ub85c\uae45 \ubaa8\ub2c8\ud130\ub9c1",description:"\ubcf4\uc548 \uacbd\uace0 \ubc1b\uc744 \uc774\uba54\uc77c \uc8fc\uc18c \ubbf8\uc124\uc815",risk:"medium",iso:"9.1",csap:"7.2.2",isms:"2.11",evaluation:"1.4.1"},{category:"Database",resource:"Mssql Server",option:"Security Alert Policy > Alert Policy State, Security Alert Policy > Alert Email Account Admins",type:"\ub85c\uae45 \ubaa8\ub2c8\ud130\ub9c1",description:"\uad6c\ub3c5\uc790 \ubcf4\uc548 \uacbd\uace0 \ube44\ud65c\uc131\ud654",risk:"low",iso:"9.1",csap:"7.2.2",isms:"2.11",evaluation:"1.4.1"},{category:"Database",resource:"Mssql Server",option:"Security Alert Policy > Alert Policy State",type:"\ub85c\uae45 \ubaa8\ub2c8\ud130\ub9c1",description:"security alert \ube44\ud65c\uc131\ud654",risk:"medium",iso:"9.1",csap:"7.2.2",isms:"2.11",evaluation:"1.4.1"},{category:"Database",resource:"Mssql Server",option:"Minimum Tls Version",type:"\uc554\ud638\ud654",description:"\ucde8\uc57d\ud55c tls \ubc84\uc804 \uc0ac\uc6a9",risk:"high",iso:"8.1",csap:"12.3.1.",isms:"2.7",evaluation:"10.2.1"},{category:"Database",resource:"Mysql",option:"Threat Detection Enabled",type:"\ub85c\uae45 \ubaa8\ub2c8\ud130\ub9c1",description:"\uc704\ud611 \ud0d0\uc9c0 \ube44\ud65c\uc131\ud654",risk:"high",iso:"9.1",csap:"7.2.2",isms:"2.11",evaluation:"1.4.1"},{category:"Database",resource:"Mysql",option:"Firewall Rule > Start Ip Address, Firewall Rule > End Ip Address",type:"\uc811\uadfc \ud1b5\uc81c",description:"\uc811\uadfc \uac00\ub2a5 ip \uc804\uccb4 \ubc94\uc704 \uc124\uc815",risk:"high",iso:"8.1",csap:"10.1.1.",isms:"2.6",evaluation:"7.1.1"},{category:"Database",resource:"Mysql",option:"Public Network Access Enabled",type:"\uc811\uadfc \ud1b5\uc81c",description:"public \ub124\ud2b8\uc6cc\ud06c \uc811\uadfc \ud5c8\uc6a9",risk:"critical",iso:"8.1",csap:"10.1.1.",isms:"2.6",evaluation:"7.1.1"},{category:"Database",resource:"Mysql",option:"Minimum Tls Version",type:"\uc554\ud638\ud654",description:"\ucde8\uc57d\ud55c tls \ubc84\uc804 \uc0ac\uc6a9",risk:"high",iso:"8.1",csap:"12.3.1.",isms:"2.7",evaluation:"10.2.1"},{category:"Database",resource:"Mysql",option:"Ssl Enforcement Enabled",type:"\ub124\ud2b8\uc6cc\ud06c \ubcf4\uc548",description:"\uc554\ud638\ud654 \uc5f0\uacb0 \ubbf8\uc801\uc6a9",risk:"high",iso:"8.1",csap:"12.3.1.",isms:"2.7",evaluation:"10.2.1"},{category:"Database",resource:"Mysql Database",option:"Enable Storage Destination, Storage Retention Days",type:"\ub85c\uae45 \ubaa8\ub2c8\ud130\ub9c1",description:"\ub85c\uadf8 \ubcf4\uad00 \uae30\uac04 \uc9e7\uc74c",risk:"medium",iso:"9.1",csap:"7.2.2",isms:"2.11",evaluation:"1.4.1"},{category:"Database",resource:"Mysql Database",option:"Auditing Policy > Enable Storage Destination, Auditing Policy > Enable Log Analytics\nDestination",type:"\ub85c\uae45 \ubaa8\ub2c8\ud130\ub9c1",description:"\uac10\uc0ac \uc815\ucc45 \ube44\ud65c\uc131\ud654",risk:"medium",iso:"9.1",csap:"7.2.2",isms:"2.11",evaluation:"1.4.1"},{category:"Database",resource:"Mysql Database",option:"Zone Redundant",type:"\ub370\uc774\ud130 \ubcf4\ud638",description:"zone \uc911\ubcf5\uc131 \ube44\ud65c\uc131\ud654",risk:"high",iso:"8.1",csap:"12.1.4.",isms:"2.9",evaluation:"10.1.4"},{category:"Database",resource:"Mysql Flexible",option:"Firewall Rule > Start Ip Address, Firewall Rule > End Ip Address",type:"\uc811\uadfc \ud1b5\uc81c",description:"\uc811\uadfc \uac00\ub2a5 ip \uc804\uccb4 \ubc94\uc704 \uc124\uc815",risk:"high",iso:"8.1",csap:"10.1.1.",isms:"2.6",evaluation:"7.1.1"},{category:"Database",resource:"Mysql Server",option:"Public Network Access Enabled",type:"\uc811\uadfc \ud1b5\uc81c",description:"public \ub124\ud2b8\uc6cc\ud06c \uc811\uadfc \ud5c8\uc6a9",risk:"critical",iso:"8.1",csap:"10.1.1.",isms:"2.6",evaluation:"7.1.1"},{category:"Database",resource:"Postgresql",option:"Configuration > Log Retention",type:"\ub85c\uae45 \ubaa8\ub2c8\ud130\ub9c1",description:"\ub85c\uadf8 \ubcf4\uc874 \ube44\ud65c\uc131\ud654",risk:"medium",iso:"9.1",csap:"7.2.2",isms:"2.11",evaluation:"1.4.1"},{category:"Database",resource:"Postgresql",option:"Configuration > Connection Throttling",type:"\ub85c\uae45 \ubaa8\ub2c8\ud130\ub9c1",description:"connection throttling \uc124\uc815 \ube44\ud65c\uc131\ud654",risk:"medium",iso:"9.1",csap:"7.2.2",isms:"2.11",evaluation:"1.4.1"},{category:"Database",resource:"Postgresql",option:"Configuration > Log Checkpoint",type:"\ub85c\uae45 \ubaa8\ub2c8\ud130\ub9c1",description:"log checkpoint \uc124\uc815 \ube44\ud65c\uc131\ud654",risk:"medium",iso:"9.1",csap:"7.2.2",isms:"2.11",evaluation:"1.4.1"},{category:"Database",resource:"Postgresql",option:"Configuration > Log Connections",type:"\ub85c\uae45 \ubaa8\ub2c8\ud130\ub9c1",description:"log connections \uc124\uc815 \ube44\ud65c\uc131\ud654",risk:"medium",iso:"9.1",csap:"7.2.2",isms:"2.11",evaluation:"1.4.1"},{category:"Database",resource:"Postgresql",option:"Firewall Rule > Start Ip Address, Firewall Rule > End Ip Address",type:"\uc811\uadfc \ud1b5\uc81c",description:"\uc811\uadfc \uac00\ub2a5 ip \uc804\uccb4 \ubc94\uc704 \uc124\uc815",risk:"high",iso:"8.1",csap:"10.1.1.",isms:"2.6",evaluation:"7.1.1"},{category:"Database",resource:"Postgresql",option:"Public Network Access Enabled",type:"\uc811\uadfc \ud1b5\uc81c",description:"public \ub124\ud2b8\uc6cc\ud06c \uc811\uadfc \ud5c8\uc6a9",risk:"critical",iso:"8.1",csap:"10.1.1.",isms:"2.6",evaluation:"7.1.1"},{category:"Database",resource:"Postgresql",option:"Minimum Tls Version",type:"\uc554\ud638\ud654",description:"\ucde8\uc57d\ud55c tls \ubc84\uc804 \uc0ac\uc6a9",risk:"high",iso:"8.1",csap:"12.3.1.",isms:"2.7",evaluation:"10.2.1"},{category:"Database",resource:"Postgresql",option:"Ssl Enforcement Enabled",type:"\ub124\ud2b8\uc6cc\ud06c \ubcf4\uc548",description:"\uc554\ud638\ud654 \uc5f0\uacb0 \ubbf8\uc801\uc6a9",risk:"high",iso:"8.1",csap:"12.3.1.",isms:"2.7",evaluation:"10.2.1"},{category:"Database",resource:"Postgresql Flexible",option:"Geo Redundant Backup Enabled",type:"\ub370\uc774\ud130 \ubcf4\ud638",description:"\uc9c0\uc5ed \uc911\ubcf5 \ubc31\uc5c5 \ube44\ud65c\uc131\ud654",risk:"high",iso:"8.1",csap:"6.2.2.",isms:"2.9",evaluation:"5.2.1"},{category:"Database",resource:"Postgresql Flexible",option:"Firewall Rule > Start Ip Address, Firewall Rule > End Ip Address",type:"\uc811\uadfc \ud1b5\uc81c",description:"\uc811\uadfc \uac00\ub2a5 ip \uc804\uccb4 \ubc94\uc704 \uc124\uc815",risk:"high",iso:"8.1",csap:"10.1.1.",isms:"2.6",evaluation:"7.1.1"},{category:"Key Vault",resource:"Key Vault",option:"Network Acl Action",type:"\uc811\uadfc \ud1b5\uc81c",description:"\uc124\uc815\ud55c ip\uc640 \uc77c\uce58\ud558\uc9c0 \uc54a\ub294 \uacbd\uc6b0 \uac70\ubd80",risk:"critical",iso:"8.1",csap:"10.1.1.",isms:"2.6",evaluation:"7.1.1"},{category:"Key Vault",resource:"Key Vault",option:"Purge Protection Enabled",type:"\ub370\uc774\ud130 \ubcf4\ud638",description:"\uc81c\uac70 \ubcf4\ud638 \ube44\ud65c\uc131\ud654",risk:"medium",iso:"8.1",csap:"12.1.4.",isms:"2.9",evaluation:"10.1.4"},{category:"Key Vault",resource:"Key Vault",option:"Key Vault Secret > Content Type",type:"\uc554\ud638\ud654",description:"secret \ub0b4\uc6a9 \uc720\ud615 \ubbf8\uc124\uc815",risk:"low",iso:"8.1",csap:"12.3.2.",isms:"2.7",evaluation:"10.2.2"},{category:"Key Vault",resource:"Key Vault",option:"Key Vault Secret > Enabled Expiration Date",type:"\uc554\ud638\ud654",description:"secret \ub9cc\ub8cc \uc124\uc815 \ube44\ud65c\uc131\ud654",risk:"low",iso:"8.1",csap:"12.3.2.",isms:"2.7",evaluation:"10.2.2"},{category:"Key Vault",resource:"Key Vault",option:"Key Vault Key > Enabled Expiration Date",type:"\uc554\ud638\ud654",description:"key \ub9cc\ub8cc \uc124\uc815 \ube44\ud65c\uc131\ud654",risk:"medium",iso:"8.1",csap:"12.3.2.",isms:"2.7",evaluation:"10.2.2"},{category:"Network",resource:"Application Gateway",option:"Http Listener > Protocol",type:"\uc811\uadfc \ud1b5\uc81c",description:"\uc554\ud638\ud654 \ub418\uc9c0 \uc54a\ub294 http \ud504\ub85c\ud1a0\ucf5c \uc0ac\uc6a9",risk:"critical",iso:"8.1",csap:"12.3.1.",isms:"2.7",evaluation:"10.2.1"},{category:"Network",resource:"Network Security Group",option:"Security Rules > Direction, Security Rules > Access, Security Rules > Source Address Prefixes, Security Rules > Destination Port Ranges",type:"\uc811\uadfc \ud1b5\uc81c",description:"\uc778\ud130\ub137\uc5d0\uc11c FTP \uc561\uc138\uc2a4 \ud5c8\uc6a9",risk:"critical",iso:"8.1",csap:"10.1.1.",isms:"2.6",evaluation:"7.1.1"},{category:"Network",resource:"Network Security Group",option:"Security Rules > Direction, Security Rules > Access, Security Rules > Source Address Prefixes, Security Rules > Destination Port Ranges",type:"\uc811\uadfc \ud1b5\uc81c",description:"\uc778\ud130\ub137\uc5d0\uc11c SSH \uc561\uc138\uc2a4 \ud5c8\uc6a9",risk:"critical",iso:"8.1",csap:"10.1.1.",isms:"2.6",evaluation:"7.1.1"},{category:"Network",resource:"Network Security Group",option:"Security Rules > Direction, Security Rules > Access, Security Rules > Source Address Prefixes, Security Rules > Destination Port Ranges",type:"\uc811\uadfc \ud1b5\uc81c",description:"\uc778\ud130\ub137\uc5d0\uc11c HTTP \uc561\uc138\uc2a4 \ud5c8\uc6a9",risk:"critical",iso:"8.1",csap:"10.1.1.",isms:"2.6",evaluation:"7.1.1"},{category:"Network",resource:"Network Security Group",option:"Security Rules > Direction, Security Rules > Access, Security Rules > Source Address Prefixes, Security Rules > Destination Port Ranges",type:"\uc811\uadfc \ud1b5\uc81c",description:"\uc778\ud130\ub137\uc5d0\uc11c RDP \uc561\uc138\uc2a4 \ud5c8\uc6a9",risk:"critical",iso:"8.1",csap:"10.1.1.",isms:"2.6",evaluation:"7.1.1"},{category:"Network",resource:"Network Security Group",option:"Security Rules > Direction, Security Rules > Access, Security Rules > Source Address Prefixes / ",type:"\uc811\uadfc \ud1b5\uc81c",description:"cidr \uc804\uccb4 \ub178\ucd9c",risk:"critical",iso:"8.1",csap:"10.1.1.",isms:"2.6",evaluation:"7.1.1"},{category:"Network",resource:"Network Security Group",option:"Security Rules > Direction, Security Rules > Access, Security Rules > Source Address Prefixes / ",type:"\uc811\uadfc \ud1b5\uc81c",description:"cidr \uc804\uccb4 \ub178\ucd9c",risk:"critical",iso:"8.1",csap:"10.1.1.",isms:"2.6",evaluation:"7.1.1"},{category:"Network",resource:"Web Application Firewall Policy",option:"Owasp Version",type:"\ub370\uc774\ud130 \ubcf4\ud638",description:"log4jshell\ub97c \ubc29\uc5b4\ud558\uae30 \uc704\ud55c rule\uc774 \ubd80\uc7ac\ud55c \ubc84\uc804 \uc0ac\uc6a9",risk:"critical",iso:"8.1",csap:"12.1.4.",isms:"2.9",evaluation:"10.1.4"},{category:"Redis Cache",resource:"Redis Cache",option:"Public Network Access Enabled",type:"\uc811\uadfc \ud1b5\uc81c",description:"public \ub124\ud2b8\uc6cc\ud06c \uc811\uadfc \ud5c8\uc6a9",risk:"critical",iso:"8.1",csap:"10.1.1.",isms:"2.6",evaluation:"7.1.1"},{category:"Redis Cache",resource:"Redis Cache",option:"Sku Name",type:" \ub370\uc774\ud130 \ubcf4\ud638",description:"\ubcf5\uc81c \uae30\ub2a5\uc744 \uc81c\uacf5\ud558\uc9c0 \uc54a\ub294 sku \uc0ac\uc6a9",risk:"high",iso:"8.1",csap:"12.1.4.",isms:"2.9",evaluation:"10.1.4"},{category:"Redis Cache",resource:"Redis Cache",option:"Minimum Tls Version",type:"\uc554\ud638\ud654",description:"\ucde8\uc57d\ud55c tls \ubc84\uc804 \uc0ac\uc6a9",risk:"high",iso:"8.1",csap:"12.3.1.",isms:"2.7",evaluation:"10.2.1"},{category:"Redis Cache",resource:"Redis Cache",option:"Enable Non Ssl Port",type:"\uc811\uadfc \ud1b5\uc81c",description:"\uc554\ud638\ud654 \ub418\uc9c0 \uc54a\ub294 \ud1b5\uc2e0 \ud5c8\uc6a9",risk:"high",iso:"8.1",csap:"12.3.1.",isms:"2.7",evaluation:"10.2.1"},{category:"Storage",resource:"Storage Account",option:"Networking > Bypass",type:"\uc811\uadfc \ud1b5\uc81c",description:"azure service \uc6b0\ud68c \ubd88\uac00\ub2a5",risk:"high",iso:"8.1",csap:"10.1.1.",isms:"2.6",evaluation:"7.1.1"},{category:"Storage",resource:"Storage Account",option:"Storage Container > Container Access Type",type:"\uc811\uadfc \ud1b5\uc81c",description:"\uacf5\uac1c \uc561\uc138\uc2a4 \ud56d\ubaa9 \uc124\uc815",risk:"high",iso:"8.1",csap:"10.1.1.",isms:"2.6",evaluation:"7.1.1"},{category:"Storage",resource:"Storage Account",option:"Public Network Access Enabled",type:"\uc811\uadfc \ud1b5\uc81c",description:"public \ub124\ud2b8\uc6cc\ud06c \uc811\uadfc \ud5c8\uc6a9",risk:"critical",iso:"8.1",csap:"10.1.1.",isms:"2.6",evaluation:"7.1.1"},{category:"Storage",resource:"Storage Account",option:"Minimum Tls Version",type:"\uc554\ud638\ud654",description:"\ucde8\uc57d\ud55c tls \ubc84\uc804 \uc0ac\uc6a9",risk:"high",iso:"8.1",csap:"12.3.1.",isms:"2.7",evaluation:"10.2.1"},{category:"Storage",resource:"Storage Account",option:"Enable Https Traffic Only",type:"\uc811\uadfc \ud1b5\uc81c",description:"\uc554\ud638\ud654\ub418\uc9c0 \uc54a\ub294 http \ud504\ub85c\ud1b9\ucf5c \uc0ac\uc6a9",risk:"critical",iso:"8.1",csap:"12.3.1.",isms:"2.7",evaluation:"10.2.1"}];var c=t(57201);const n={title:"Azure",sidebar_position:1,tags:["security","\ubcf4\uc548 \uc9c4\ub2e8","\uce94\ubc84\uc2a4"]},l=void 0,p={unversionedId:"canvas/security/rules/azure",id:"canvas/security/rules/azure",title:"Azure",description:"Azure \uc9c4\ub2e8 \ud56d\ubaa9",source:"@site/docs/canvas/security/rules/azure.mdx",sourceDirName:"canvas/security/rules",slug:"/canvas/security/rules/azure",permalink:"/docs/canvas/security/rules/azure",draft:!1,tags:[{label:"security",permalink:"/docs/tags/security"},{label:"\ubcf4\uc548 \uc9c4\ub2e8",permalink:"/docs/tags/\ubcf4\uc548-\uc9c4\ub2e8"},{label:"\uce94\ubc84\uc2a4",permalink:"/docs/tags/\uce94\ubc84\uc2a4"}],version:"current",sidebarPosition:1,frontMatter:{title:"Azure",sidebar_position:1,tags:["security","\ubcf4\uc548 \uc9c4\ub2e8","\uce94\ubc84\uc2a4"]},sidebar:"mySidebar",previous:{title:"\ubcf4\uc548\uc9c4\ub2e8 \ud56d\ubaa9",permalink:"/docs/category/\ubcf4\uc548\uc9c4\ub2e8-\ud56d\ubaa9"},next:{title:"AWS",permalink:"/docs/canvas/security/rules/aws"}},u={},y=[{value:"Azure \uc9c4\ub2e8 \ud56d\ubaa9",id:"azure-\uc9c4\ub2e8-\ud56d\ubaa9",level:2}],d={toc:y},g="wrapper";function m(e){let{components:i,...t}=e;return(0,r.yg)(g,(0,s.A)({},d,t,{components:i,mdxType:"MDXLayout"}),(0,r.yg)("hr",null),(0,r.yg)("br",null),(0,r.yg)("h2",{id:"azure-\uc9c4\ub2e8-\ud56d\ubaa9"},"Azure \uc9c4\ub2e8 \ud56d\ubaa9"),(0,r.yg)("div",{className:o.A.securityTable},(0,r.yg)("table",null,(0,r.yg)("thead",null,(0,r.yg)("tr",null,(0,r.yg)("th",null,"\uce74\ud14c\uace0\ub9ac"),(0,r.yg)("th",null,"\ub9ac\uc18c\uc2a4"),(0,r.yg)("th",null,"\uc635\uc158"),(0,r.yg)("th",null,"\ud56d\ubaa9"),(0,r.yg)("th",null,"\uc124\uba85"),(0,r.yg)("th",null,"\uc704\ud5d8\ub3c4"),(0,r.yg)("th",null,"ISO27001"),(0,r.yg)("th",null,"CSAP"),(0,r.yg)("th",null,"ISMS-P"),(0,r.yg)("th",null,"\uc548\uc815\uc131 \ud3c9\uac00"))),(0,r.yg)("tbody",null,a.map((e=>(0,r.yg)("tr",null,(0,r.yg)("td",null,e.category),(0,r.yg)("td",null,e.resource),(0,r.yg)("td",null,e.option),(0,r.yg)("td",null,e.type),(0,r.yg)("td",null,e.description),(0,r.yg)("td",null,(0,r.yg)("div",{className:o.A.tag,"data-type":e.risk},e.risk.toUpperCase())),(0,r.yg)("td",null,e.iso," ",c.KH[e.iso]),(0,r.yg)("td",null,e.csap," ",c.az[e.csap]),(0,r.yg)("td",null,e.isms," ",c.hk[e.isms]),(0,r.yg)("td",null,e.evaluation," ",c.rI[e.evaluation]))))))))}m.isMDXComponent=!0},78056:(e,i,t)=>{t.d(i,{A:()=>s});const s={imgWrap:"imgWrap_LCPB","tabs-container":"tabs-container_EwLu",caption:"caption_yGEz",caption_img:"caption_img_GAfQ",captionText:"captionText_Ag26",button:"button_tHl2",releaseWrap:"releaseWrap_EdcT",tag:"tag_PSRA",securityTable:"securityTable_SzzQ"}},93245:(e,i,t)=>{t.d(i,{A:()=>s});const s=t.p+"assets/images/security-result01-811c03fd9b5b88220caef7208c6dc7c0.png"},9478:(e,i,t)=>{t.d(i,{A:()=>s});const s=t.p+"assets/images/security-result02-e11ff48b33b7e64d5dab663c237024cc.png"},88526:(e,i,t)=>{t.d(i,{A:()=>s});const s=t.p+"assets/images/security01-6a67a66b2a4ac474dcafd2974bab5aa2.gif"}}]);