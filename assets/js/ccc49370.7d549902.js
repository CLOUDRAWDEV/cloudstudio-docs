"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[83249],{84029:(e,t,a)=>{a.r(t),a.d(t,{default:()=>f});var n=a(96540),r=a(20053),l=a(1003),o=a(17559),i=a(7131),s=a(16669),c=a(48258),m=a(58168),u=a(21312),p=a(39022);function d(e){const{nextItem:t,prevItem:a}=e;return n.createElement("nav",{className:"pagination-nav docusaurus-mt-lg","aria-label":(0,u.T)({id:"theme.blog.post.paginator.navAriaLabel",message:"Blog post page navigation",description:"The ARIA label for the blog posts pagination"})},a&&n.createElement(p.A,(0,m.A)({},a,{subLabel:n.createElement(u.A,{id:"theme.blog.post.paginator.newerPost",description:"The blog post button label to navigate to the newer/previous post"},"Newer Post")})),t&&n.createElement(p.A,(0,m.A)({},t,{subLabel:n.createElement(u.A,{id:"theme.blog.post.paginator.olderPost",description:"The blog post button label to navigate to the older/next post"},"Older Post"),isNext:!0})))}function b(){const{assets:e,metadata:t}=(0,i.e)(),{title:a,description:r,date:o,tags:s,authors:c,frontMatter:m}=t,{keywords:u}=m,p=e.image??m.image;return n.createElement(l.be,{title:a,description:r,keywords:u,image:p},n.createElement("meta",{property:"og:type",content:"article"}),n.createElement("meta",{property:"article:published_time",content:o}),c.some((e=>e.url))&&n.createElement("meta",{property:"article:author",content:c.map((e=>e.url)).filter(Boolean).join(",")}),s.length>0&&n.createElement("meta",{property:"article:tag",content:s.map((e=>e.label)).join(",")}))}var h=a(67763);function g(e){let{sidebar:t,children:a}=e;const{metadata:r,toc:l}=(0,i.e)(),{nextItem:o,prevItem:m,frontMatter:u}=r,{hide_table_of_contents:p,toc_min_heading_level:b,toc_max_heading_level:g}=u;return n.createElement(s.A,{sidebar:t,toc:!p&&l.length>0?n.createElement(h.A,{toc:l,minHeadingLevel:b,maxHeadingLevel:g}):void 0},n.createElement(c.A,null,a),(o||m)&&n.createElement(d,{nextItem:o,prevItem:m}))}function f(e){const t=e.content;return n.createElement(i.i,{content:e.content,isBlogPostPage:!0},n.createElement(l.e3,{className:(0,r.A)(o.G.wrapper.blogPages,o.G.page.blogPostPage)},n.createElement(b,null),n.createElement(g,{sidebar:e.sidebar},n.createElement(t,null))))}},67763:(e,t,a)=>{a.d(t,{A:()=>m});var n=a(58168),r=a(96540),l=a(20053),o=a(65195);const i={tableOfContents:"tableOfContents_bqdL",docItemContainer:"docItemContainer_F8PC"},s="table-of-contents__link toc-highlight",c="table-of-contents__link--active";function m(e){let{className:t,...a}=e;return r.createElement("div",{className:(0,l.A)(i.tableOfContents,"thin-scrollbar",t)},r.createElement(o.A,(0,n.A)({},a,{linkClassName:s,linkActiveClassName:c})))}},41579:(e,t,a)=>{a.d(t,{A:()=>w});var n=a(58168),r=a(96540),l=a(5260);var o=a(77964);var i=a(75489);var s=a(41622);var c=a(51107);function m(e){return r.createElement(c.A,e)}var u=a(62710),p=a(89724),d=a(11963);var b=a(86025),h=a(78056);const g=e=>{let{color:t,children:a}=e;return r.createElement("button",{className:h.A.button,style:{backgroundColor:t,borderRadius:"4px",color:"#fff",padding:"0.6rem",border:"none"}},a)};var f=a(20053),E=a(92303),v=a(31682),A=a(86976),y=a(23104);const _={tabList:"tabList_TRJ7",tabItem:"tabItem_hGfb"};function T(e){const{lazy:t,block:a,defaultValue:l,values:o,groupId:i,className:s}=e,c=r.Children.map(e.children,(e=>{if((0,r.isValidElement)(e)&&"value"in e.props)return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)})),m=o??c.map((e=>{let{props:{value:t,label:a,attributes:n}}=e;return{value:t,label:a,attributes:n}})),u=(0,v.X)(m,((e,t)=>e.value===t.value));if(u.length>0)throw new Error(`Docusaurus error: Duplicate values "${u.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`);const p=null===l?l:l??c.find((e=>e.props.default))?.props.value??c[0].props.value;if(null!==p&&!m.some((e=>e.value===p)))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${p}" but none of its children has the corresponding value. Available values are: ${m.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);const{tabGroupChoices:d,setTabGroupChoices:b}=(0,A.x)(),[h,g]=(0,r.useState)(p),E=[],{blockElementScrollPositionUntilNextRender:T}=(0,y.a_)();if(null!=i){const e=d[i];null!=e&&e!==h&&m.some((t=>t.value===e))&&g(e)}const x=e=>{const t=e.currentTarget,a=E.indexOf(t),n=m[a].value;n!==h&&(T(t),g(n),null!=i&&b(i,String(n)))},k=e=>{let t=null;switch(e.key){case"ArrowRight":{const a=E.indexOf(e.currentTarget)+1;t=E[a]??E[0];break}case"ArrowLeft":{const a=E.indexOf(e.currentTarget)-1;t=E[a]??E[E.length-1];break}}t?.focus()};return r.createElement("div",{className:(0,f.A)("tabs-container",_.tabList)},r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,f.A)("tabs",{"tabs--block":a},s)},m.map((e=>{let{value:t,label:a,attributes:l}=e;return r.createElement("li",(0,n.A)({role:"tab",tabIndex:h===t?0:-1,"aria-selected":h===t,key:t,ref:e=>E.push(e),onKeyDown:k,onFocus:x,onClick:x},l,{className:(0,f.A)("tabs__item",_.tabItem,l?.className,{"tabs__item--active":h===t})}),a??t)}))),t?(0,r.cloneElement)(c.filter((e=>e.props.value===h))[0],{className:"margin-top--md"}):r.createElement("div",{className:"margin-top--md"},c.map(((e,t)=>(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==h})))))}var x=a(14252),k=a(19365);const C=e=>{let{color:t,children:a}=e;return r.createElement("span",{className:h.A.TextColor,style:{color:t}},a)},w={head:function(e){const t=r.Children.map(e.children,(e=>r.isValidElement(e)?function(e){if(e.props?.mdxType&&e.props.originalType){const{mdxType:t,originalType:a,...n}=e.props;return r.createElement(e.props.originalType,n)}return e}(e):e));return r.createElement(l.A,e,t)},code:function(e){const t=["a","b","big","i","span","em","strong","sup","sub","small"];return r.Children.toArray(e.children).every((e=>"string"==typeof e&&!e.includes("\n")||(0,r.isValidElement)(e)&&t.includes(e.props?.mdxType)))?r.createElement("code",e):r.createElement(o.A,e)},a:function(e){return r.createElement(i.A,e)},pre:function(e){return r.createElement(o.A,(0,r.isValidElement)(e.children)&&"code"===e.children.props?.originalType?e.children.props:{...e})},details:function(e){const t=r.Children.toArray(e.children),a=t.find((e=>r.isValidElement(e)&&"summary"===e.props?.mdxType)),l=r.createElement(r.Fragment,null,t.filter((e=>e!==a)));return r.createElement(s.A,(0,n.A)({},e,{summary:a}),l)},ul:u.A,img:p.A,h1:e=>r.createElement(m,(0,n.A)({as:"h1"},e)),h2:e=>r.createElement(m,(0,n.A)({as:"h2"},e)),h3:e=>r.createElement(m,(0,n.A)({as:"h3"},e)),h4:e=>r.createElement(m,(0,n.A)({as:"h4"},e)),h5:e=>r.createElement(m,(0,n.A)({as:"h5"},e)),h6:e=>r.createElement(m,(0,n.A)({as:"h6"},e)),admonition:d.A,highlight:function(e){let{children:t,color:a}=e;return r.createElement("span",{style:{backgroundColor:a,borderRadius:"2px",color:"#fff",padding:"0.2rem"}},t)},caption:function(e){let{src:t,caption:a}=e;return r.createElement("figure",{className:h.A.caption},r.createElement("div",{className:h.A.caption_img},r.createElement("img",{src:(0,b.A)(t),alt:a})),r.createElement("figcaption",{className:h.A.captionText},`${a}`))},Button:g,Tabs:function(e){const t=(0,E.A)();return r.createElement(T,(0,n.A)({key:String(t)},e))},Link:i.A,React:r,TOCInline:x.A,TabItem:k.A,TextColor:C}},78056:(e,t,a)=>{a.d(t,{A:()=>n});const n={imgWrap:"imgWrap_LCPB","tabs-container":"tabs-container_EwLu",caption:"caption_yGEz",caption_img:"caption_img_GAfQ",captionText:"captionText_Ag26",button:"button_tHl2",releaseWrap:"releaseWrap_EdcT",tag:"tag_PSRA",securityTable:"securityTable_SzzQ"}}}]);