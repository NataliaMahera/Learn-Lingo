import{r as s,b,s as E,q as l,e as d,o as u,c as f,j as t,L as K,d as S,f as g,g as w,B as A,h as B,i as k}from"./index-5ec77c8c.js";import{T as q}from"./TeachersList-b84b2d15.js";const Q=()=>{const[a,y]=s.useState([]),[r,x]=s.useState(""),[L,m]=s.useState(!0),p=b(E),T=4,j=l(f(g,"teachers"),u(),d(r+3)),i=async o=>{try{w(o,c=>{const n=[];c.forEach(e=>{const h=e.key,M=e.val();n.push({id:h,...M}),x(h)}),y(e=>[...e,...n]),n.length<T&&a.length>0&&m(!1)})}catch(c){console.error(c.message),A.error("Oops something went wrong, error fetching teachers",B)}},D=()=>{const o=l(f(g,"teachers"),u(),k(r),d(String(Number(r)+4)));i(o)};return s.useEffect(()=>{i(j)},[]),p?t.jsx(K,{}):t.jsxs("section",{className:"container pt-[32px] pb-[96px]",children:[t.jsx(q,{teachers:a}),L&&a.length>0&&t.jsx(S,{onClick:D,children:"Load More"})]})};export{Q as default};
