"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[35770],{15680:(e,r,a)=>{a.d(r,{xA:()=>s,yg:()=>d});var t=a(96540);function n(e,r,a){return r in e?Object.defineProperty(e,r,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[r]=a,e}function o(e,r){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);r&&(t=t.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),a.push.apply(a,t)}return a}function l(e){for(var r=1;r<arguments.length;r++){var a=null!=arguments[r]?arguments[r]:{};r%2?o(Object(a),!0).forEach((function(r){n(e,r,a[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(a,r))}))}return e}function i(e,r){if(null==e)return{};var a,t,n=function(e,r){if(null==e)return{};var a,t,n={},o=Object.keys(e);for(t=0;t<o.length;t++)a=o[t],r.indexOf(a)>=0||(n[a]=e[a]);return n}(e,r);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(t=0;t<o.length;t++)a=o[t],r.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var c=t.createContext({}),u=function(e){var r=t.useContext(c),a=r;return e&&(a="function"==typeof e?e(r):l(l({},r),e)),a},s=function(e){var r=u(e.components);return t.createElement(c.Provider,{value:r},e.children)},p="mdxType",m={inlineCode:"code",wrapper:function(e){var r=e.children;return t.createElement(t.Fragment,{},r)}},y=t.forwardRef((function(e,r){var a=e.components,n=e.mdxType,o=e.originalType,c=e.parentName,s=i(e,["components","mdxType","originalType","parentName"]),p=u(a),y=n,d=p["".concat(c,".").concat(y)]||p[y]||m[y]||o;return a?t.createElement(d,l(l({ref:r},s),{},{components:a})):t.createElement(d,l({ref:r},s))}));function d(e,r){var a=arguments,n=r&&r.mdxType;if("string"==typeof e||n){var o=a.length,l=new Array(o);l[0]=y;var i={};for(var c in r)hasOwnProperty.call(r,c)&&(i[c]=r[c]);i.originalType=e,i[p]="string"==typeof e?e:n,l[1]=i;for(var u=2;u<o;u++)l[u]=a[u];return t.createElement.apply(null,l)}return t.createElement.apply(null,a)}y.displayName="MDXCreateElement"},24406:(e,r,a)=>{a.r(r),a.d(r,{assets:()=>c,contentTitle:()=>l,default:()=>m,frontMatter:()=>o,metadata:()=>i,toc:()=>u});var t=a(58168),n=(a(96540),a(15680));const o={title:"BackupVault",sidebar_position:0,tags:["AWS","Resource","Backup","BackupVault"]},l=void 0,i={unversionedId:"resource/aws/Backup/BackupVault",id:"resource/aws/Backup/BackupVault",title:"BackupVault",description:"Resource Icon",source:"@site/i18n/en/docusaurus-plugin-content-docs/current/resource/aws/Backup/BackupVault.mdx",sourceDirName:"resource/aws/Backup",slug:"/resource/aws/Backup/BackupVault",permalink:"/en/docs/resource/aws/Backup/BackupVault",draft:!1,tags:[{label:"AWS",permalink:"/en/docs/tags/aws"},{label:"Resource",permalink:"/en/docs/tags/resource"},{label:"Backup",permalink:"/en/docs/tags/backup"},{label:"BackupVault",permalink:"/en/docs/tags/backup-vault"}],version:"current",sidebarPosition:0,frontMatter:{title:"BackupVault",sidebar_position:0,tags:["AWS","Resource","Backup","BackupVault"]},sidebar:"mySidebar",previous:{title:"BackupPlan",permalink:"/en/docs/resource/aws/Backup/BackupPlan"},next:{title:"Base",permalink:"/en/docs/category/base-1"}},c={},u=[{value:"Resource Icon",id:"resource-icon",level:2},{value:"Resource Overview",id:"resource-overview",level:2},{value:"Parent Resource",id:"parent-resource",level:3},{value:"Associated Resources",id:"associated-resources",level:2},{value:"Resource Setting Values",id:"resource-setting-values",level:2},{value:"Reference Materials",id:"reference-materials",level:2}],s={toc:u},p="wrapper";function m(e){let{components:r,...a}=e;return(0,n.yg)(p,(0,t.A)({},s,a,{components:r,mdxType:"MDXLayout"}),(0,n.yg)("hr",null),(0,n.yg)("br",null),(0,n.yg)("h2",{id:"resource-icon"},"Resource Icon"),(0,n.yg)("img",{src:"https://cloudstudioblob.blob.core.windows.net/cloudstudio/awsImg/backup-backup_vault.png"}),(0,n.yg)("h2",{id:"resource-overview"},"Resource Overview"),(0,n.yg)("p",null,"In AWS Backup, a Backup Vault is a container for storing and managing backups.\nWhen creating a Backup Vault, you must specify an AWS KMS encryption key to encrypt some of the backups in the vault."),(0,n.yg)("h3",{id:"parent-resource"},"Parent Resource"),(0,n.yg)("ul",null,(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("a",{parentName:"li",href:"https://docs.cstudio.app/en/docs/resource/aws/Base/"},(0,n.yg)("strong",{parentName:"a"},"Base")))),(0,n.yg)("h2",{id:"associated-resources"},"Associated Resources"),(0,n.yg)("h2",{id:"resource-setting-values"},"Resource Setting Values"),(0,n.yg)("ul",null,(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("inlineCode",{parentName:"li"},"kms_key_name")," : The server-side encryption key that is used to protect your backups"),(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("inlineCode",{parentName:"li"},"lock_configuration")," : AWS Backup vault lock configuration resource",(0,n.yg)("ul",{parentName:"li"},(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("inlineCode",{parentName:"li"},"lock_configuration.enabled_lock")," : Whether to enable vault lock - ",(0,n.yg)("inlineCode",{parentName:"li"},"false"),",",(0,n.yg)("inlineCode",{parentName:"li"},"true"),(0,n.yg)("ul",{parentName:"li"},(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("inlineCode",{parentName:"li"},"lock_configuration.enabled_lock.lock_mode")," : The mode of vault lock - ",(0,n.yg)("inlineCode",{parentName:"li"},"Governance"),", ",(0,n.yg)("inlineCode",{parentName:"li"},"Compliance")),(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("inlineCode",{parentName:"li"},"lock_configuration.enabled_lock.min_retention_days")," : The minimum retention period that the vault retains its recovery points - ",(0,n.yg)("inlineCode",{parentName:"li"},"1~36500")),(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("inlineCode",{parentName:"li"},"lock_configuration.enabled_lock.max_retention_days")," : The maximum retention period that the vault retains its recovery points - ",(0,n.yg)("inlineCode",{parentName:"li"},"1~36500"))))))),(0,n.yg)("hr",null),(0,n.yg)("h2",{id:"reference-materials"},"Reference Materials"),(0,n.yg)("ul",null,(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("a",{parentName:"li",href:"https://docs.aws.amazon.com/ko_kr/aws-backup/latest/devguide/create-a-vault.html"},"Amazon BackupVault(AWS)")),(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("a",{parentName:"li",href:"https://registry.terraform.io/providers/hashicorp/aws/latest/docs/resources/backup_vault"},"Amazon BackupVault(Terraform)"))))}m.isMDXComponent=!0}}]);