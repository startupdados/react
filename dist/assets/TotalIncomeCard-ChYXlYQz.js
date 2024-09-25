import{g as j,a as R,v as b,s as _,_ as o,w as S,x as g,r as U,u as $,b as L,j as s,c as A,d as I,C as M,L as T,m as X,n as N,p as B}from"./index-abcHMAUO.js";function E(t){return String(t).match(/[\d.\-+]*\s*(.*)/)[1]||""}function F(t){return parseFloat(t)}function K(t){return j("MuiSkeleton",t)}R("MuiSkeleton",["root","text","rectangular","rounded","circular","pulse","wave","withChildren","fitContent","heightAuto"]);const P=["animation","className","component","height","style","variant","width"];let l=t=>t,m,f,x,v;const W=t=>{const{classes:a,variant:e,animation:i,hasChildren:n,width:d,height:r}=t;return I({root:["root",e,i,n&&"withChildren",n&&!d&&"fitContent",n&&!r&&"heightAuto"]},K,a)},D=b(m||(m=l`
  0% {
    opacity: 1;
  }

  50% {
    opacity: 0.4;
  }

  100% {
    opacity: 1;
  }
`)),G=b(f||(f=l`
  0% {
    transform: translateX(-100%);
  }

  50% {
    /* +0.5s of delay between each loop */
    transform: translateX(100%);
  }

  100% {
    transform: translateX(100%);
  }
`)),O=_("span",{name:"MuiSkeleton",slot:"Root",overridesResolver:(t,a)=>{const{ownerState:e}=t;return[a.root,a[e.variant],e.animation!==!1&&a[e.animation],e.hasChildren&&a.withChildren,e.hasChildren&&!e.width&&a.fitContent,e.hasChildren&&!e.height&&a.heightAuto]}})(({theme:t,ownerState:a})=>{const e=E(t.shape.borderRadius)||"px",i=F(t.shape.borderRadius);return o({display:"block",backgroundColor:t.vars?t.vars.palette.Skeleton.bg:S(t.palette.text.primary,t.palette.mode==="light"?.11:.13),height:"1.2em"},a.variant==="text"&&{marginTop:0,marginBottom:0,height:"auto",transformOrigin:"0 55%",transform:"scale(1, 0.60)",borderRadius:`${i}${e}/${Math.round(i/.6*10)/10}${e}`,"&:empty:before":{content:'"\\00a0"'}},a.variant==="circular"&&{borderRadius:"50%"},a.variant==="rounded"&&{borderRadius:(t.vars||t).shape.borderRadius},a.hasChildren&&{"& > *":{visibility:"hidden"}},a.hasChildren&&!a.width&&{maxWidth:"fit-content"},a.hasChildren&&!a.height&&{height:"auto"})},({ownerState:t})=>t.animation==="pulse"&&g(x||(x=l`
      animation: ${0} 2s ease-in-out 0.5s infinite;
    `),D),({ownerState:t,theme:a})=>t.animation==="wave"&&g(v||(v=l`
      position: relative;
      overflow: hidden;

      /* Fix bug in Safari https://bugs.webkit.org/show_bug.cgi?id=68196 */
      -webkit-mask-image: -webkit-radial-gradient(white, black);

      &::after {
        animation: ${0} 2s linear 0.5s infinite;
        background: linear-gradient(
          90deg,
          transparent,
          ${0},
          transparent
        );
        content: '';
        position: absolute;
        transform: translateX(-100%); /* Avoid flash during server-side hydration */
        bottom: 0;
        left: 0;
        right: 0;
        top: 0;
      }
    `),G,(a.vars||a).palette.action.hover)),h=U.forwardRef(function(a,e){const i=$({props:a,name:"MuiSkeleton"}),{animation:n="pulse",className:d,component:r="span",height:c,style:C,variant:y="text",width:k}=i,u=L(i,P),p=o({},i,{animation:n,component:r,variant:y,hasChildren:!!u.children}),w=W(p);return s.jsx(O,o({as:r,ref:e,className:A(w.root,d),ownerState:p},u,{style:o({width:k,height:c},C)}))}),q=()=>s.jsx(M,{sx:{p:2},children:s.jsx(T,{sx:{py:0},children:s.jsxs(X,{alignItems:"center",disableGutters:!0,sx:{py:0},children:[s.jsx(N,{children:s.jsx(h,{variant:"rectangular",width:44,height:44})}),s.jsx(B,{sx:{py:0},primary:s.jsx(h,{variant:"rectangular",height:20}),secondary:s.jsx(h,{variant:"text"})})]})})});export{h as S,q as T};
