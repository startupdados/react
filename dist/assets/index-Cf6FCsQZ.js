import{h as B,r as h,j as a,a2 as g,T as u,a3 as S,B as C,a4 as T}from"./index-abcHMAUO.js";import{c as x,d as l,T as y,a as w,b as J,e as F,f as A}from"./TableSortLabel-CHxKLulo.js";import{B as M}from"./Button-DNQi5Rop.js";const k=(r,t)=>(s,d)=>{const n=s[t],o=d[t];return typeof n=="number"&&typeof o=="number"?r==="asc"?n-o:o-n:typeof n=="string"&&typeof o=="string"?r==="asc"?n.localeCompare(o):o.localeCompare(n):0},I=({data:r,customColumns:t=[],title:s})=>{B();const[d,n]=h.useState("asc"),[o,p]=h.useState(null);if(r.length===0)return a.jsx("div",{children:"Sem dados"});const f=Object.keys(r[0]).concat(t.map(e=>e.id)),b=e=>{n(o===e&&d==="asc"?"desc":"asc"),p(e)},j=g(x)(({index:e})=>({backgroundColor:e%2===0?"#FFFFFF":"#F0F0F0"})),m=g(l)(({theme:e})=>({backgroundColor:e.palette.primary.main,color:"white",fontWeight:"bold",textAlign:"center"})),v=e=>`${Math.max(...r.map(i=>String(i[e]).length),e.length)+1}ch`;return a.jsxs("div",{children:[a.jsx(u,{variant:"h5",align:"center",gutterBottom:!0,children:s}),a.jsx(y,{component:S,sx:{maxHeight:"80vh",overflow:"auto"},children:a.jsxs(w,{stickyHeader:!0,sx:{width:"100%",tableLayout:"auto"},children:[a.jsx(J,{children:a.jsx(x,{children:f.map(e=>t.some(i=>i.id===e)?a.jsx(m,{sx:{minWidth:"10ch"},children:t.find(i=>i.id===e).label},e):a.jsx(m,{sortDirection:o===e?d:!1,sx:{minWidth:v(e)},children:a.jsx(F,{active:o===e,direction:o===e?d:"asc",onClick:()=>b(e),sx:{color:"white","& .MuiTableSortLabel-icon":{color:"white !important",position:"absolute",right:"-22 px"},"&:hover":{color:"white"},"&.Mui-active":{color:"white"}},children:e})},e))})}),a.jsx(A,{children:r.sort(k(d,o)).map((e,c)=>a.jsxs(j,{index:c,children:[Object.keys(e).map(i=>a.jsx(l,{align:"center",children:e[i]},i)),t.map(i=>a.jsx(l,{align:"center",children:i.render(e)},i.id))]},c))})]})})]})},R=()=>{const r=[{Nome:"João da Silva",Idade:30,Cidade:"São Paulo",Biografia:"João é um engenheiro de software com mais de 10 anos de experiência.",Biografia2:"João é um engenheiro de software com mais de 10 anos de experiência.",Biografia3:"João é um engenheiro de software com mais de 10 anos de experiência.",Status:"Ativo"},{Nome:"Maria Ferreira",Idade:22,Cidade:"Rio de Janeiro",Biografia:"Maria é uma desenvolvedora front-end apaixonada por design de interfaces.",Biografia2:"João é um engenheiro de software com mais de 10 anos de experiência.",Biografia3:"João é um engenheiro de software com mais de 10 anos de experiência.",Status:"Inativo"},{Nome:"Carlos Souza",Idade:40,Cidade:"Brasília",Biografia:"Carlos é gerente de projetos com vasta experiência em metodologias ágeis.",Biografia2:"João é um engenheiro de software com mais de 10 anos de experiência.",Biografia3:"João é um engenheiro de software com mais de 10 anos de experiência.",Status:"Ativo"},{Nome:"Ana Oliveira",Idade:28,Cidade:"Salvador",Biografia:"Ana é uma desenvolvedora full-stack com experiência em diversas tecnologias.",Biografia2:"João é um engenheiro de software com mais de 10 anos de experiência.",Biografia3:"João é um engenheiro de software com mais de 10 anos de experiência.",Status:"Pendente"}],t=[{id:"action",label:"Ação",render:s=>a.jsx(M,{variant:"contained",color:"primary",onClick:()=>alert(`Executando ação para ${s.Nome}`),children:"Executar"})},{id:"statusChip",label:"Status",render:s=>a.jsx(T,{label:s.Status,color:s.Status==="Ativo"?"success":s.Status==="Inativo"?"error":"warning"})}];return a.jsxs(C,{sx:{padding:0},children:[a.jsx(u,{variant:"h3",component:"div",align:"center",gutterBottom:!0,children:"Monitoring Dashboard"}),a.jsx("div",{children:a.jsx(I,{data:r,customColumns:t,title:"Tabela de Usuários"})})]})};export{R as default};
