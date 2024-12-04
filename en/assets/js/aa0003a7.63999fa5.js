"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[92566],{15680:(e,r,n)=>{n.d(r,{xA:()=>u,yg:()=>d});var t=n(96540);function a(e,r,n){return r in e?Object.defineProperty(e,r,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[r]=n,e}function i(e,r){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);r&&(t=t.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),n.push.apply(n,t)}return n}function o(e){for(var r=1;r<arguments.length;r++){var n=null!=arguments[r]?arguments[r]:{};r%2?i(Object(n),!0).forEach((function(r){a(e,r,n[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))}))}return e}function s(e,r){if(null==e)return{};var n,t,a=function(e,r){if(null==e)return{};var n,t,a={},i=Object.keys(e);for(t=0;t<i.length;t++)n=i[t],r.indexOf(n)>=0||(a[n]=e[n]);return a}(e,r);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(t=0;t<i.length;t++)n=i[t],r.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=t.createContext({}),c=function(e){var r=t.useContext(l),n=r;return e&&(n="function"==typeof e?e(r):o(o({},r),e)),n},u=function(e){var r=c(e.components);return t.createElement(l.Provider,{value:r},e.children)},p="mdxType",m={inlineCode:"code",wrapper:function(e){var r=e.children;return t.createElement(t.Fragment,{},r)}},y=t.forwardRef((function(e,r){var n=e.components,a=e.mdxType,i=e.originalType,l=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),p=c(n),y=a,d=p["".concat(l,".").concat(y)]||p[y]||m[y]||i;return n?t.createElement(d,o(o({ref:r},u),{},{components:n})):t.createElement(d,o({ref:r},u))}));function d(e,r){var n=arguments,a=r&&r.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=y;var s={};for(var l in r)hasOwnProperty.call(r,l)&&(s[l]=r[l]);s.originalType=e,s[p]="string"==typeof e?e:a,o[1]=s;for(var c=2;c<i;c++)o[c]=n[c];return t.createElement.apply(null,o)}return t.createElement.apply(null,n)}y.displayName="MDXCreateElement"},35265:(e,r,n)=>{n.r(r),n.d(r,{assets:()=>l,contentTitle:()=>o,default:()=>m,frontMatter:()=>i,metadata:()=>s,toc:()=>c});var t=n(58168),a=(n(96540),n(15680));const i={title:"Kms Key",sidebar_position:0,tags:["AWS","Resource","Kms","KmsKey"]},o=void 0,s={unversionedId:"resource/aws/Kms/KmsKey",id:"resource/aws/Kms/KmsKey",title:"Kms Key",description:"Resource Icon",source:"@site/i18n/en/docusaurus-plugin-content-docs/current/resource/aws/Kms/KmsKey.mdx",sourceDirName:"resource/aws/Kms",slug:"/resource/aws/Kms/KmsKey",permalink:"/en/docs/resource/aws/Kms/KmsKey",draft:!1,tags:[{label:"AWS",permalink:"/en/docs/tags/aws"},{label:"Resource",permalink:"/en/docs/tags/resource"},{label:"Kms",permalink:"/en/docs/tags/kms"},{label:"KmsKey",permalink:"/en/docs/tags/kms-key"}],version:"current",sidebarPosition:0,frontMatter:{title:"Kms Key",sidebar_position:0,tags:["AWS","Resource","Kms","KmsKey"]},sidebar:"mySidebar",previous:{title:"Kms",permalink:"/en/docs/category/kms"},next:{title:"Lambda",permalink:"/en/docs/category/lambda"}},l={},c=[{value:"Resource Icon",id:"resource-icon",level:2},{value:"Resource Overview",id:"resource-overview",level:2},{value:"Associated Resources",id:"associated-resources",level:2},{value:"Parent Resources",id:"parent-resources",level:3},{value:"Resource Setting Values",id:"resource-setting-values",level:2},{value:"Reference Materials",id:"reference-materials",level:2}],u={toc:c},p="wrapper";function m(e){let{components:r,...n}=e;return(0,a.yg)(p,(0,t.A)({},u,n,{components:r,mdxType:"MDXLayout"}),(0,a.yg)("hr",null),(0,a.yg)("br",null),(0,a.yg)("h2",{id:"resource-icon"},"Resource Icon"),(0,a.yg)("img",{src:"https://cloudstudioblob.blob.core.windows.net/cloudstudio/awsImg/kms-kms_key.png"}),(0,a.yg)("h2",{id:"resource-overview"},"Resource Overview"),(0,a.yg)("p",null,"AWS Key Management Service (AWS KMS) is a cloud-optimized encryption and key management service.\nAWS KMS keys and features are utilized across various AWS services, allowing users to protect data within their own applications using AWS KMS keys and functionalities."),(0,a.yg)("h2",{id:"associated-resources"},"Associated Resources"),(0,a.yg)("h3",{id:"parent-resources"},"Parent Resources"),(0,a.yg)("ul",null,(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("a",{parentName:"li",href:"https://docs.cstudio.app/en/docs/resource/aws/Base/Region"},(0,a.yg)("strong",{parentName:"a"},"Region")))),(0,a.yg)("h2",{id:"resource-setting-values"},"Resource Setting Values"),(0,a.yg)("ul",null,(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("inlineCode",{parentName:"li"},"description"),": The description of the key as viewed in AWS console"),(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("inlineCode",{parentName:"li"},"key_usage"),": Specifies the intended use of the key - ",(0,a.yg)("inlineCode",{parentName:"li"},"ENCRYPT_DECRYPT")),(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("inlineCode",{parentName:"li"},"multi_region"),": Indicates whether the KMS key is a multi-Region or regional - ",(0,a.yg)("inlineCode",{parentName:"li"},"true"),", ",(0,a.yg)("inlineCode",{parentName:"li"},"false")),(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("inlineCode",{parentName:"li"},"deletion_window_in_days"),": Validity of KMS Keys"),(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("inlineCode",{parentName:"li"},"enable_key_rotation"),": Specifies whether key rotation is enabled - ",(0,a.yg)("inlineCode",{parentName:"li"},"true"),", ",(0,a.yg)("inlineCode",{parentName:"li"},"false")),(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("inlineCode",{parentName:"li"},"grant_list"),": The name of the KMS Grant",(0,a.yg)("ul",{parentName:"li"},(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("inlineCode",{parentName:"li"},"operations"),": Allowed operations for KMS Key - ",(0,a.yg)("inlineCode",{parentName:"li"},"Decrypt"),", ",(0,a.yg)("inlineCode",{parentName:"li"},"Encrypt"),", ",(0,a.yg)("inlineCode",{parentName:"li"},"GenerateDataKey"),", ",(0,a.yg)("inlineCode",{parentName:"li"},"GenerateDataKeyWithoutPlaintext"),", ",(0,a.yg)("inlineCode",{parentName:"li"},"ReEncryptFrom"),", ",(0,a.yg)("inlineCode",{parentName:"li"},"ReEncryptTo"),", ",(0,a.yg)("inlineCode",{parentName:"li"},"Sign"),", ",(0,a.yg)("inlineCode",{parentName:"li"},"Verify"),", ",(0,a.yg)("inlineCode",{parentName:"li"},"CreateGrant"),", ",(0,a.yg)("inlineCode",{parentName:"li"},"RetireGrant"),", ",(0,a.yg)("inlineCode",{parentName:"li"},"DescribeKey"))))),(0,a.yg)("hr",null),(0,a.yg)("h2",{id:"reference-materials"},"Reference Materials"),(0,a.yg)("ul",null,(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("a",{parentName:"li",href:"https://docs.aws.amazon.com/ko_kr/kms/latest/developerguide/overview.html"},"AWS Key Management Service(AWS)")),(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("a",{parentName:"li",href:"https://aws.amazon.com/ko/kms/pricing/?nc1=h_ls"},"AWS Key Management Service Price(AWS)")),(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("a",{parentName:"li",href:"https://registry.terraform.io/providers/hashicorp/aws/latest/docs/resources/kms_alias"},"aws_kms_alias(Terraform)"))))}m.isMDXComponent=!0}}]);