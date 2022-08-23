(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[1930],{32952:function(g,b,a){"use strict";a.d(b,{C:function(){return f}});var c=a(67294),h=a(3857),d=a(58067),i=Object.defineProperty,j=Object.defineProperties,k=Object.getOwnPropertyDescriptors,l=Object.getOwnPropertySymbols,m=Object.prototype.hasOwnProperty,n=Object.prototype.propertyIsEnumerable,o=(a,b,c)=>b in a?i(a,b,{enumerable:!0,configurable:!0,writable:!0,value:c}):a[b]=c,p=(c,a)=>{for(var b in a||(a={}))m.call(a,b)&&o(c,b,a[b]);if(l)for(var b of l(a))n.call(a,b)&&o(c,b,a[b]);return c},q=(a,b)=>j(a,k(b));let e={xs:{fontSize:9,height:16},sm:{fontSize:10,height:18},md:{fontSize:11,height:20},lg:{fontSize:13,height:26},xl:{fontSize:16,height:32}},r={xs:4,sm:4,md:6,lg:8,xl:10};Object.keys(e).reduce((a,b)=>(a[b]=e[b].height,a),{});var s=(0,d.k)((a,{color:d,size:b,radius:l,gradientFrom:m,gradientTo:n,gradientDeg:o,fullWidth:g})=>{let c=a.fn.size({size:b,sizes:r}),{fontSize:s,height:h}=b in e?e[b]:e.md,i=a.fn.variant({color:d,variant:"light"}),j=a.fn.variant({color:d,variant:"filled"}),f=a.fn.variant({color:d,variant:"outline"}),k=a.fn.variant({variant:"gradient",gradient:{from:m,to:n,deg:o}});return{leftSection:{marginRight:a.spacing.xs/2},rightSection:{marginLeft:a.spacing.xs/2},inner:{whiteSpace:"nowrap",overflow:"hidden",textOverflow:"ellipsis"},root:q(p(p({},a.fn.focusStyles()),a.fn.fontStyles()),{fontSize:s,height:h,WebkitTapHighlightColor:"transparent",lineHeight:`${h-2}px`,textDecoration:"none",padding:`0 ${a.fn.size({size:b,sizes:a.spacing})/1.5}px`,boxSizing:"border-box",display:g?"flex":"inline-flex",alignItems:"center",justifyContent:"center",width:g?"100%":"auto",textTransform:"uppercase",borderRadius:a.fn.radius(l),fontWeight:700,letterSpacing:.25,cursor:"default",textOverflow:"ellipsis",overflow:"hidden"}),light:{backgroundColor:i.background,color:i.color,border:"1px solid transparent"},filled:{backgroundColor:j.background,color:j.color,border:"1px solid transparent"},outline:{backgroundColor:f.background,color:f.color,border:`1px solid ${f.border}`},gradient:{backgroundImage:k.background,color:k.color,border:0},dot:{backgroundColor:"transparent",color:"dark"===a.colorScheme?a.colors.dark[0]:a.colors.gray[7],border:`1px solid ${"dark"===a.colorScheme?a.colors.dark[3]:a.colors.gray[3]}`,paddingLeft:a.fn.size({size:b,sizes:a.spacing})/1.5-c/2,"&::before":{content:'""',display:"block",width:c,height:c,borderRadius:c,backgroundColor:a.fn.themeColor(d,"dark"===a.colorScheme?4:a.fn.primaryShade("light")),marginRight:c}}}}),t=a(10745),u=Object.defineProperty,v=Object.getOwnPropertySymbols,w=Object.prototype.hasOwnProperty,x=Object.prototype.propertyIsEnumerable,y=(a,b,c)=>b in a?u(a,b,{enumerable:!0,configurable:!0,writable:!0,value:c}):a[b]=c,z=(c,a)=>{for(var b in a||(a={}))w.call(a,b)&&y(c,b,a[b]);if(v)for(var b of v(a))x.call(a,b)&&y(c,b,a[b]);return c},A=(b,d)=>{var c={};for(var a in b)w.call(b,a)&&0>d.indexOf(a)&&(c[a]=b[a]);if(null!=b&&v)for(var a of v(b))0>d.indexOf(a)&&x.call(b,a)&&(c[a]=b[a]);return c};let B={variant:"light",size:"md",radius:"xl",gradient:{from:"blue",to:"cyan",deg:45}},f=(0,c.forwardRef)((g,i)=>{let d=(0,h.Z3)("Badge",B,g),{component:j,className:k,color:l,variant:m,fullWidth:n,children:o,size:p,leftSection:e,rightSection:f,radius:q,gradient:b,classNames:r,styles:u}=d,v=A(d,["component","className","color","variant","fullWidth","children","size","leftSection","rightSection","radius","gradient","classNames","styles"]),{classes:a,cx:w}=s({size:p,fullWidth:n,color:l,radius:q,gradientFrom:b.from,gradientTo:b.to,gradientDeg:b.deg},{classNames:r,styles:u,name:"Badge"});return c.createElement(t.x,z({component:j||"div",className:w(a[m],a.root,k),ref:i},v),e&&c.createElement("span",{className:a.leftSection},e),c.createElement("span",{className:a.inner},o),f&&c.createElement("span",{className:a.rightSection},f))});f.displayName="@mantine/core/Badge"},76867:function(e,b,a){"use strict";a.d(b,{W:function(){return d}});var c=a(67294),f=a(3857),g=(0,a(58067).k)((a,{fluid:b,size:c,sizes:d})=>({root:{paddingLeft:a.spacing.md,paddingRight:a.spacing.md,maxWidth:b?"100%":a.fn.size({size:c,sizes:d}),marginLeft:"auto",marginRight:"auto"}})),h=a(10745),i=Object.defineProperty,j=Object.getOwnPropertySymbols,k=Object.prototype.hasOwnProperty,l=Object.prototype.propertyIsEnumerable,m=(a,b,c)=>b in a?i(a,b,{enumerable:!0,configurable:!0,writable:!0,value:c}):a[b]=c,n=(c,a)=>{for(var b in a||(a={}))k.call(a,b)&&m(c,b,a[b]);if(j)for(var b of j(a))l.call(a,b)&&m(c,b,a[b]);return c},o=(b,d)=>{var c={};for(var a in b)k.call(b,a)&&0>d.indexOf(a)&&(c[a]=b[a]);if(null!=b&&j)for(var a of j(b))0>d.indexOf(a)&&l.call(b,a)&&(c[a]=b[a]);return c};let p={sizes:{xs:540,sm:720,md:960,lg:1140,xl:1320}},d=(0,c.forwardRef)((b,d)=>{let a=(0,f.Z3)("Container",p,b),{className:e,fluid:i,size:j,styles:k,classNames:l,sizes:m}=a,q=o(a,["className","fluid","size","styles","classNames","sizes"]),{classes:r,cx:s}=g({fluid:i,size:j,sizes:m},{styles:k,classNames:l,name:"Container"});return c.createElement(h.x,n({className:s(r.root,e),ref:d},q))});d.displayName="@mantine/core/Container"},52416:function(g,f,a){"use strict";a.d(f,{r:function(){return e}});var b=a(67294),h=a(3857);let[i,j]=function(c){let a=(0,b.createContext)(null);return[a.Provider,function(c){let d=(0,b.useContext)(a),[e]=c.split(".");if(!d)throw Error(`${c} component was rendered outside of ${e} component context`);return d}]}(null);var k=a(37447),c=a(58067),l=Object.defineProperty,m=Object.getOwnPropertySymbols,n=Object.prototype.hasOwnProperty,o=Object.prototype.propertyIsEnumerable,p=(a,b,c)=>b in a?l(a,b,{enumerable:!0,configurable:!0,writable:!0,value:c}):a[b]=c,q=(c,a)=>{for(var b in a||(a={}))n.call(a,b)&&p(c,b,a[b]);if(m)for(var b of m(a))o.call(a,b)&&p(c,b,a[b]);return c};let r=(a,b)=>`${100/(b/a)}%`,s=(a,b)=>a?`${100/(b/a)}%`:void 0;var t=(0,c.k)((b,{gutter:e,grow:c,offset:f,offsetXs:g,offsetSm:h,offsetMd:i,offsetLg:j,offsetXl:l,columns:a,span:d,xs:m,sm:n,md:o,lg:p,xl:t})=>({root:q({boxSizing:"border-box",flexGrow:c?1:0,padding:b.fn.size({size:e,sizes:b.spacing})/2,marginLeft:s(f,a),flexBasis:r(d,a),flexShrink:0,maxWidth:c?"unset":r(d,a)},function({sizes:a,offsets:b,theme:c,columns:d,grow:e}){return k.j1.reduce((g,f)=>("number"==typeof a[f]&&(g[`@media (min-width: ${c.breakpoints[f]+1}px)`]={flexBasis:r(a[f],d),flexShrink:0,maxWidth:e?"unset":r(a[f],d),marginLeft:s(b[f],d)}),g),{})}({sizes:{xs:m,sm:n,md:o,lg:p,xl:t},offsets:{xs:g,sm:h,md:i,lg:j,xl:l},theme:b,columns:a,grow:c}))})),u=a(10745),v=Object.defineProperty,w=Object.getOwnPropertySymbols,x=Object.prototype.hasOwnProperty,y=Object.prototype.propertyIsEnumerable,z=(a,b,c)=>b in a?v(a,b,{enumerable:!0,configurable:!0,writable:!0,value:c}):a[b]=c,A=(c,a)=>{for(var b in a||(a={}))x.call(a,b)&&z(c,b,a[b]);if(w)for(var b of w(a))y.call(a,b)&&z(c,b,a[b]);return c},B=(b,d)=>{var c={};for(var a in b)x.call(b,a)&&0>d.indexOf(a)&&(c[a]=b[a]);if(null!=b&&w)for(var a of w(b))0>d.indexOf(a)&&y.call(b,a)&&(c[a]=b[a]);return c};let C={offset:0,offsetXs:0,offsetSm:0,offsetMd:0,offsetLg:0,offsetXl:0},d=(0,b.forwardRef)((f,g)=>{var a;let e=(0,h.Z3)("Col",C,f),{children:i,span:k,offset:l,offsetXs:m,offsetSm:n,offsetMd:o,offsetLg:p,offsetXl:q,xs:r,sm:s,md:v,lg:w,xl:x,className:y,classNames:z,styles:D,id:J}=e,E=B(e,["children","span","offset","offsetXs","offsetSm","offsetMd","offsetLg","offsetXl","xs","sm","md","lg","xl","className","classNames","styles","id"]),{columns:c,gutter:F,grow:G}=j("Grid.Col"),d=k||c,{classes:H,cx:I}=t({gutter:F,offset:l,offsetXs:m,offsetSm:n,offsetMd:o,offsetLg:p,offsetXl:q,xs:r,sm:s,md:v,lg:w,xl:x,grow:G,columns:c,span:d},{classNames:z,styles:D,name:"Col"});return"number"!=typeof(a=d)||!(a>0)||a%1!=0||d>c?null:b.createElement(u.x,A({className:I(H.root,y),ref:g},E),i)});d.displayName="@mantine/core/Col";var D=(0,c.k)((a,{justify:b,align:c,gutter:d})=>({root:{margin:-a.fn.size({size:d,sizes:a.spacing})/2,display:"flex",flexWrap:"wrap",justifyContent:b,alignItems:c}})),E=Object.defineProperty,F=Object.getOwnPropertySymbols,G=Object.prototype.hasOwnProperty,H=Object.prototype.propertyIsEnumerable,I=(a,b,c)=>b in a?E(a,b,{enumerable:!0,configurable:!0,writable:!0,value:c}):a[b]=c,J=(c,a)=>{for(var b in a||(a={}))G.call(a,b)&&I(c,b,a[b]);if(F)for(var b of F(a))H.call(a,b)&&I(c,b,a[b]);return c},K=(b,d)=>{var c={};for(var a in b)G.call(b,a)&&0>d.indexOf(a)&&(c[a]=b[a]);if(null!=b&&F)for(var a of F(b))0>d.indexOf(a)&&H.call(b,a)&&(c[a]=b[a]);return c};let L={gutter:"md",justify:"flex-start",align:"stretch",columns:12},e=(0,b.forwardRef)((d,e)=>{let a=(0,h.Z3)("Grid",L,d),{gutter:c,children:f,grow:g,justify:j,align:k,columns:l,className:m,classNames:n,styles:o,id:s}=a,p=K(a,["gutter","children","grow","justify","align","columns","className","classNames","styles","id"]),{classes:q,cx:r}=D({gutter:c,justify:j,align:k},{classNames:n,styles:o,name:"Grid"});return b.createElement(i,{value:{gutter:c,grow:g,columns:l}},b.createElement(u.x,J({className:r(q.root,m),ref:e},p),f))});e.Col=d,e.displayName="@mantine/core/Grid"},53365:function(g,b,a){"use strict";a.d(b,{E:function(){return f}});var c=a(67294),h=a(3857),d=a(21055),e=a(58067);let i={xs:3,sm:5,md:8,lg:12,xl:16},j=(0,d.F4)({from:{backgroundPosition:"0 0"},to:{backgroundPosition:"40px 0"}});var k=(0,e.k)((a,{color:d,radius:b,size:c,striped:e,animate:f})=>({root:{position:"relative",height:a.fn.size({size:c,sizes:i}),backgroundColor:"dark"===a.colorScheme?a.colors.dark[4]:a.colors.gray[2],borderRadius:a.fn.size({size:b,sizes:a.radius}),overflow:"hidden"},bar:{position:"absolute",top:0,bottom:0,left:0,height:"100%",display:"flex",justifyContent:"center",alignItems:"center",backgroundColor:a.fn.themeColor(d||a.primaryColor,a.fn.primaryShade(),!1),transition:"width 100ms linear",animation:f?`${j} 1000ms linear infinite`:"none",backgroundSize:"20px 20px",backgroundImage:e?"linear-gradient(45deg, rgba(255, 255, 255, 0.15) 25%, transparent 25%, transparent 50%, rgba(255, 255, 255, 0.15) 50%, rgba(255, 255, 255, 0.15) 75%, transparent 75%, transparent)":"none","&:last-of-type":{borderTopRightRadius:a.fn.size({size:b,sizes:a.radius}),borderBottomRightRadius:a.fn.size({size:b,sizes:a.radius})},"&:first-of-type":{borderTopLeftRadius:a.fn.size({size:b,sizes:a.radius}),borderBottomLeftRadius:a.fn.size({size:b,sizes:a.radius})},"@media (prefers-reduced-motion)":{transitionDuration:"0ms"}},label:{color:a.white,fontSize:.65*a.fn.size({size:c,sizes:i}),fontWeight:700,userSelect:"none",overflow:"hidden",whiteSpace:"nowrap"}})),l=a(10745),m=a(50112),n=Object.defineProperty,o=Object.defineProperties,p=Object.getOwnPropertyDescriptors,q=Object.getOwnPropertySymbols,r=Object.prototype.hasOwnProperty,s=Object.prototype.propertyIsEnumerable,t=(a,b,c)=>b in a?n(a,b,{enumerable:!0,configurable:!0,writable:!0,value:c}):a[b]=c,u=(c,a)=>{for(var b in a||(a={}))r.call(a,b)&&t(c,b,a[b]);if(q)for(var b of q(a))s.call(a,b)&&t(c,b,a[b]);return c},v=(a,b)=>o(a,p(b)),w=(b,d)=>{var c={};for(var a in b)r.call(b,a)&&0>d.indexOf(a)&&(c[a]=b[a]);if(null!=b&&q)for(var a of q(b))0>d.indexOf(a)&&s.call(b,a)&&(c[a]=b[a]);return c};let x={size:"md",radius:"sm",striped:!1,animate:!1,label:""},f=(0,c.forwardRef)((i,j)=>{var n;let b=(0,h.Z3)("Progress",x,i),{className:o,value:d,color:p,size:q,radius:r,striped:s,animate:e,label:f,"aria-label":t,classNames:y,styles:z,sections:g}=b,A=w(b,["className","value","color","size","radius","striped","animate","label","aria-label","classNames","styles","sections"]),{classes:a,cx:B,theme:D}=k({color:p,size:q,radius:r,striped:s||e,animate:e},{classNames:y,styles:z,name:"Progress"}),C=Array.isArray(g)?(n=g).reduce((a,b)=>(a.sections.push(v(u({},b),{accumulated:a.accumulated})),a.accumulated+=b.value,a),{accumulated:0,sections:[]}).sections.map((b,d)=>c.createElement(l.x,{key:d,className:a.bar,sx:{width:`${b.value}%`,left:`${b.accumulated}%`,backgroundColor:D.fn.themeColor(b.color,D.fn.primaryShade(),!1)}},b.label&&c.createElement(m.x,{className:a.label},b.label))):null;return c.createElement(l.x,u({className:B(a.root,o),ref:j},A),C||c.createElement("div",{role:"progressbar","aria-valuemax":100,"aria-valuemin":0,"aria-valuenow":d,"aria-label":t,className:a.bar,style:{width:`${d}%`}},f?c.createElement(m.x,{className:a.label},f):""))});f.displayName="@mantine/core/Progress"},51223:function(f,b,a){"use strict";a.d(b,{M:function(){return e}});var c=a(67294),g=a(3857),d=a(58067),h=Object.defineProperty,i=Object.getOwnPropertySymbols,j=Object.prototype.hasOwnProperty,k=Object.prototype.propertyIsEnumerable,l=(a,b,c)=>b in a?h(a,b,{enumerable:!0,configurable:!0,writable:!0,value:c}):a[b]=c,m=(c,a)=>{for(var b in a||(a={}))j.call(a,b)&&l(c,b,a[b]);if(i)for(var b of i(a))k.call(a,b)&&l(c,b,a[b]);return c},n=(0,d.k)((a,{spacing:b,breakpoints:c,cols:d})=>{let e=(function(d,a){if(0===a.length)return a;let c="maxWidth"in a[0]?"maxWidth":"minWidth",b=[...a].sort((a,b)=>d.fn.size({size:b[c],sizes:d.breakpoints})-d.fn.size({size:a[c],sizes:d.breakpoints}));return"minWidth"===c?b.reverse():b})(a,c).reduce((e,c)=>{let d="maxWidth"in c?"max-width":"min-width",f=a.fn.size({size:"max-width"===d?c.maxWidth:c.minWidth,sizes:a.breakpoints});return e[`@media (${d}: ${f+("max-width"===d?0:1)}px)`]={gridTemplateColumns:`repeat(${c.cols}, minmax(0, 1fr))`,gap:a.fn.size({size:c.spacing||b,sizes:a.spacing})},e},{});return{root:m({boxSizing:"border-box",display:"grid",gridTemplateColumns:`repeat(${d}, minmax(0, 1fr))`,gap:a.fn.size({size:b,sizes:a.spacing})},e)}}),o=a(10745),p=Object.defineProperty,q=Object.getOwnPropertySymbols,r=Object.prototype.hasOwnProperty,s=Object.prototype.propertyIsEnumerable,t=(a,b,c)=>b in a?p(a,b,{enumerable:!0,configurable:!0,writable:!0,value:c}):a[b]=c,u=(c,a)=>{for(var b in a||(a={}))r.call(a,b)&&t(c,b,a[b]);if(q)for(var b of q(a))s.call(a,b)&&t(c,b,a[b]);return c},v=(b,d)=>{var c={};for(var a in b)r.call(b,a)&&0>d.indexOf(a)&&(c[a]=b[a]);if(null!=b&&q)for(var a of q(b))0>d.indexOf(a)&&s.call(b,a)&&(c[a]=b[a]);return c};let w={breakpoints:[],cols:1,spacing:"md"},e=(0,c.forwardRef)((b,d)=>{let a=(0,g.Z3)("SimpleGrid",w,b),{className:e,breakpoints:f,cols:h,spacing:i,children:j,classNames:k,styles:l}=a,m=v(a,["className","breakpoints","cols","spacing","children","classNames","styles"]),{classes:p,cx:q}=n({breakpoints:f,cols:h,spacing:i},{classNames:k,styles:l,name:"SimpleGrid"});return c.createElement(o.x,u({className:q(p.root,e),ref:d},m),j)});e.displayName="@mantine/core/SimpleGrid"},68449:function(f,d,a){"use strict";a.d(d,{T:function(){return c}});var e=a(67294),g=a(3857),h=(0,a(58067).k)((a,{bulletSize:d,color:g,radius:h,align:b,lineVariant:i,lineWidth:c},e)=>{let f=a.fn.variant({variant:"filled",color:g});return{itemBody:{},itemContent:{},itemBulletWithChild:{ref:e("itemBulletWithChild"),borderWidth:1,backgroundColor:"dark"===a.colorScheme?a.colors.dark[4]:a.colors.gray[3],color:"dark"===a.colorScheme?a.colors.dark[0]:a.black},itemBullet:{ref:e("itemBullet"),boxSizing:"border-box",width:d,height:d,borderRadius:a.fn.size({size:h,sizes:a.radius}),border:`${c}px solid ${"dark"===a.colorScheme?a.colors.dark[4]:a.colors.gray[3]}`,backgroundColor:"dark"===a.colorScheme?a.colors.dark[7]:a.white,position:"absolute",top:0,left:"left"===b?-d/2-c/2:"auto",right:"right"===b?-d/2-c/2:"auto",display:"flex",alignItems:"center",justifyContent:"center",color:a.white},item:{position:"relative",boxSizing:"border-box",color:"dark"===a.colorScheme?a.colors.dark[0]:a.black,paddingLeft:"left"===b?a.spacing.xl:0,paddingRight:"right"===b?a.spacing.xl:0,textAlign:b,"&:not(:last-of-type)::before":{display:"block"},"&:not(:first-of-type)":{marginTop:a.spacing.xl},"&::before":{boxSizing:"border-box",position:"absolute",top:0,left:"left"===b?-c:"auto",right:"right"===b?-c:"auto",bottom:-a.spacing.xl,borderLeft:`${c}px ${i} ${"dark"===a.colorScheme?a.colors.dark[4]:a.colors.gray[3]}`,content:'""',display:"none"}},itemLineActive:{"&::before":{borderLeftColor:f.background}},itemActive:{[`& .${e("itemBullet")}`]:{borderColor:f.background,backgroundColor:a.white},[`& .${e("itemBulletWithChild")}`]:{backgroundColor:f.background,color:a.white}},itemTitle:{fontWeight:500,lineHeight:1,marginBottom:a.spacing.xs/2,textAlign:b}}}),i=a(10745),j=a(50112),k=Object.defineProperty,l=Object.getOwnPropertySymbols,m=Object.prototype.hasOwnProperty,n=Object.prototype.propertyIsEnumerable,o=(a,b,c)=>b in a?k(a,b,{enumerable:!0,configurable:!0,writable:!0,value:c}):a[b]=c,p=(c,a)=>{for(var b in a||(a={}))m.call(a,b)&&o(c,b,a[b]);if(l)for(var b of l(a))n.call(a,b)&&o(c,b,a[b]);return c},q=(b,d)=>{var c={};for(var a in b)m.call(b,a)&&0>d.indexOf(a)&&(c[a]=b[a]);if(null!=b&&l)for(var a of l(b))0>d.indexOf(a)&&n.call(b,a)&&(c[a]=b[a]);return c};function b(g){var b=g,{className:k,bullet:c,title:d,bulletSize:l=20,radius:m="xl",lineWidth:n=4,active:o,lineActive:r,classNames:s,styles:t,children:u,color:v,align:w,lineVariant:x="solid"}=b,y=q(b,["className","bullet","title","bulletSize","radius","lineWidth","active","lineActive","classNames","styles","children","color","align","lineVariant"]);let{classes:a,cx:f}=h({bulletSize:l,color:v,radius:m,align:w,lineVariant:x,lineWidth:n},{classNames:s,styles:t,name:"Timeline"});return e.createElement(i.x,p({className:f(a.item,{[a.itemLineActive]:r,[a.itemActive]:o},k)},y),e.createElement("div",{className:f(a.itemBullet,{[a.itemBulletWithChild]:c})},c),e.createElement("div",{className:a.itemBody},d&&e.createElement(j.x,{className:a.itemTitle},d),e.createElement("div",{className:a.itemContent},u)))}b.displayName="@mantine/core/TimelineItem";var r=a(81353),s=Object.defineProperty,t=Object.getOwnPropertySymbols,u=Object.prototype.hasOwnProperty,v=Object.prototype.propertyIsEnumerable,w=(a,b,c)=>b in a?s(a,b,{enumerable:!0,configurable:!0,writable:!0,value:c}):a[b]=c,x=(c,a)=>{for(var b in a||(a={}))u.call(a,b)&&w(c,b,a[b]);if(t)for(var b of t(a))v.call(a,b)&&w(c,b,a[b]);return c},y=(b,d)=>{var c={};for(var a in b)u.call(b,a)&&0>d.indexOf(a)&&(c[a]=b[a]);if(null!=b&&t)for(var a of t(b))0>d.indexOf(a)&&v.call(b,a)&&(c[a]=b[a]);return c};let z={active:-1,radius:"xl",bulletSize:20,align:"left",lineWidth:4,reverseActive:!1},c=(0,e.forwardRef)((h,j)=>{let c=(0,g.Z3)("Timeline",z,h),{children:k,active:p,color:q,radius:s,bulletSize:d,align:l,lineWidth:f,classNames:t,styles:u,sx:a,reverseActive:v}=c,m=y(c,["children","active","color","radius","bulletSize","align","lineWidth","classNames","styles","sx","reverseActive"]),n=(0,r.e)(k,b),o=n.map((a,b)=>e.cloneElement(a,{classNames:t,styles:u,align:l,lineWidth:f,radius:a.props.radius||s,color:a.props.color||q,bulletSize:a.props.bulletSize||d,active:a.props.active||(v?p>=n.length-b-1:p>=b),lineActive:a.props.lineActive||(v?p>=n.length-b-1:p-1>=b)}));return e.createElement(i.x,x({ref:j,sx:["left"===l?{paddingLeft:d/2+f/2}:{paddingRight:d/2+f/2},...Array.isArray(a)?a:[a]]},m),o)});c.Item=b,c.displayName="@mantine/core/Timeline"},50064:function(c,a,b){"use strict";function d(){return"undefined"!=typeof window?function(){let{userAgent:a}=window.navigator;return/(Macintosh)|(MacIntel)|(MacPPC)|(Mac68K)/i.test(a)?"macos":/(iPhone)|(iPad)|(iPod)/i.test(a)?"ios":/(Win32)|(Win64)|(Windows)|(WinCE)/i.test(a)?"windows":/Android/i.test(a)?"android":/Linux/i.test(a)?"linux":"undetermined"}():"undetermined"}b.d(a,{i:function(){return d}})},4298:function(a,c,b){a.exports=b(20699)}}])