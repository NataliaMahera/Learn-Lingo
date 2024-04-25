import{b as D,s as I,j as t,L as $,F as te,k as ne,l as ae,m as Q,n as E,E as _,B as V,h as Z,p as k,t as oe,v as R,w as se,x as ie,r as F,R as le,y as ce,M as xe,z as ue,A as pe}from"./index-5ec77c8c.js";const de={fullName:"",email:"",number:"",reason:Q[0].name},fe=({closeModal:c,teacher:g})=>{if(D(I))return t.jsx($,{});const x=({reason:s,fullName:e,email:a,phone:o},{resetForm:r})=>{try{console.log(s,e,a,o),r(),c(),V.success("You successfully booked a trial lesson",Z)}catch{V.error("Oops something went wrong, check if you entered the data correctly",Z)}},{name:f,surname:m,avatar_url:p}=g||{};return t.jsxs(t.Fragment,{children:[t.jsx("h1",{className:"mb-[20px] text-[40px] leading-[1.2] font-medium text-primary-text-color",children:"Book trial lesson"}),t.jsx("p",{className:"mb-[20px] text-[16px] leading-[1.37] text-secondary-text-color",children:"Our experienced tutor will assess your current language level, discuss your learning goals, and tailor the lesson to your specific needs."}),t.jsxs("div",{className:"mb-[40px] flex gap-[14px]",children:[t.jsx("img",{src:p,alt:`${f}, ${m}`,className:"w-[44px] h-[44px] rounded-[50%] bg-secondary-accent-color"}),t.jsxs("div",{className:"text-[16px] leading-[1.5] font-medium text-primary-text-color",children:[t.jsx("h3",{className:"text-[12px] leading-[1.33] text-card-text-color",children:"Your teacher"}),t.jsx("p",{children:`${f} ${m}`})]})]}),t.jsx("h2",{className:"text-[24px] leading-[1.33] text-primary-text-color font-medium mb-[20px]",children:"What is your main reason for learning English?"}),t.jsx(te,{initialValues:de,validationSchema:ne,onSubmit:x,children:t.jsxs(ae,{autoComplete:"off",className:"flex flex-col gap-[18px]",children:[t.jsx("div",{className:"flex flex-col gap-[16px] mb-[22px]",children:Q.map(({name:s,id:e})=>t.jsxs("div",{className:"custom-radio",children:[t.jsx(E,{id:e,type:"radio",name:"reason",value:s,className:"text-[16px] leading-[1.37] text-primary-text-color"}),t.jsx("label",{htmlFor:e,className:"relative",children:s})]},e))}),t.jsx(E,{type:"text",name:"fullname",placeholder:"Full Name",className:"input-form"}),t.jsx(_,{name:"fullname",component:"span",className:"errorMsg"}),t.jsx(E,{type:"text",name:"email",placeholder:"Email",className:"input-form"}),t.jsx(_,{name:"email",component:"span",className:"errorMsg p-[px]"}),t.jsx(E,{type:"text",name:"number",placeholder:"Phone number",className:"input-form"}),t.jsx(_,{name:"number",component:"span",className:"errorMsg p-[px]"}),t.jsx("button",{type:"submit",className:"hover:bg-accent-color-btn transition-colors text-[18px] leading-[1.56] font-bold mt-[22px] bg-accent-color p-y-[16px] w-full text-primary-text-color h-[60px] rounded-[12px] outline-none",children:"Book"})]})})]})},he="/Learn-Lingo/assets/factor-authentication-e29eb450.png",me=()=>D(I)?t.jsx($,{}):t.jsxs("div",{className:"m-auto",children:[t.jsx("img",{className:"m-auto w-[150px] mb-[5px]",src:he,alt:"notAuth "}),t.jsx("h1",{className:"text-center font-medium text-[20px] leading-[1.37] text-primary-text-color mb-[5px]",children:"Oops, you are not registered yet!"}),t.jsx("p",{className:" text-secondary-text-color text-center",children:"Register or log in into your account and you will have an access to more functions of using the site."})]}),ge=c=>c.favorites.favoriteItems,ve=({teacher:c})=>{const{name:g,surname:u,languages:x,lesson_info:f,conditions:m}=c||{};return t.jsxs(t.Fragment,{children:[t.jsxs("h2",{className:"text-[24px] leading-[1] font-medium text-primary-text-color mb-[32px]",children:[g," ",u]}),t.jsxs("ul",{className:"flex flex-col gap-[8px] text-[16px] mb-[16px] leading-[1.5] font-medium text-primary-text-color",children:[t.jsx("li",{children:t.jsxs("p",{children:[t.jsx("span",{className:"text-card-text-color",children:"Speaks: "}),t.jsxs("span",{className:"underline",children:[" ",x==null?void 0:x.join(", ")]})]})}),t.jsx("li",{children:t.jsxs("p",{children:[t.jsx("span",{className:"text-card-text-color",children:"Lesson Info: "}),f]})}),t.jsxs("li",{children:[" ",t.jsxs("p",{children:[t.jsx("span",{className:"text-card-text-color",children:"Conditions: "}),m.map(p=>p+" ")]})]})]})]})};var z={},X={exports:{}};X.exports;(function(c){(function(g,u,x){function f(e){var a=this,o=s();a.next=function(){var r=2091639*a.s0+a.c*23283064365386963e-26;return a.s0=a.s1,a.s1=a.s2,a.s2=r-(a.c=r|0)},a.c=1,a.s0=o(" "),a.s1=o(" "),a.s2=o(" "),a.s0-=o(e),a.s0<0&&(a.s0+=1),a.s1-=o(e),a.s1<0&&(a.s1+=1),a.s2-=o(e),a.s2<0&&(a.s2+=1),o=null}function m(e,a){return a.c=e.c,a.s0=e.s0,a.s1=e.s1,a.s2=e.s2,a}function p(e,a){var o=new f(e),r=a&&a.state,n=o.next;return n.int32=function(){return o.next()*4294967296|0},n.double=function(){return n()+(n()*2097152|0)*11102230246251565e-32},n.quick=n,r&&(typeof r=="object"&&m(r,o),n.state=function(){return m(o,{})}),n}function s(){var e=4022871197,a=function(o){o=String(o);for(var r=0;r<o.length;r++){e+=o.charCodeAt(r);var n=.02519603282416938*e;e=n>>>0,n-=e,n*=e,e=n>>>0,n-=e,e+=n*4294967296}return(e>>>0)*23283064365386963e-26};return a}u&&u.exports?u.exports=p:x&&x.amd?x(function(){return p}):this.alea=p})(k,c,!1)})(X);var ye=X.exports,U={exports:{}};U.exports;(function(c){(function(g,u,x){function f(s){var e=this,a="";e.x=0,e.y=0,e.z=0,e.w=0,e.next=function(){var r=e.x^e.x<<11;return e.x=e.y,e.y=e.z,e.z=e.w,e.w^=e.w>>>19^r^r>>>8},s===(s|0)?e.x=s:a+=s;for(var o=0;o<a.length+64;o++)e.x^=a.charCodeAt(o)|0,e.next()}function m(s,e){return e.x=s.x,e.y=s.y,e.z=s.z,e.w=s.w,e}function p(s,e){var a=new f(s),o=e&&e.state,r=function(){return(a.next()>>>0)/4294967296};return r.double=function(){do var n=a.next()>>>11,i=(a.next()>>>0)/4294967296,l=(n+i)/(1<<21);while(l===0);return l},r.int32=a.next,r.quick=r,o&&(typeof o=="object"&&m(o,a),r.state=function(){return m(a,{})}),r}u&&u.exports?u.exports=p:x&&x.amd?x(function(){return p}):this.xor128=p})(k,c,!1)})(U);var je=U.exports,W={exports:{}};W.exports;(function(c){(function(g,u,x){function f(s){var e=this,a="";e.next=function(){var r=e.x^e.x>>>2;return e.x=e.y,e.y=e.z,e.z=e.w,e.w=e.v,(e.d=e.d+362437|0)+(e.v=e.v^e.v<<4^(r^r<<1))|0},e.x=0,e.y=0,e.z=0,e.w=0,e.v=0,s===(s|0)?e.x=s:a+=s;for(var o=0;o<a.length+64;o++)e.x^=a.charCodeAt(o)|0,o==a.length&&(e.d=e.x<<10^e.x>>>4),e.next()}function m(s,e){return e.x=s.x,e.y=s.y,e.z=s.z,e.w=s.w,e.v=s.v,e.d=s.d,e}function p(s,e){var a=new f(s),o=e&&e.state,r=function(){return(a.next()>>>0)/4294967296};return r.double=function(){do var n=a.next()>>>11,i=(a.next()>>>0)/4294967296,l=(n+i)/(1<<21);while(l===0);return l},r.int32=a.next,r.quick=r,o&&(typeof o=="object"&&m(o,a),r.state=function(){return m(a,{})}),r}u&&u.exports?u.exports=p:x&&x.amd?x(function(){return p}):this.xorwow=p})(k,c,!1)})(W);var we=W.exports,q={exports:{}};q.exports;(function(c){(function(g,u,x){function f(s){var e=this;e.next=function(){var o=e.x,r=e.i,n,i;return n=o[r],n^=n>>>7,i=n^n<<24,n=o[r+1&7],i^=n^n>>>10,n=o[r+3&7],i^=n^n>>>3,n=o[r+4&7],i^=n^n<<7,n=o[r+7&7],n=n^n<<13,i^=n^n<<9,o[r]=i,e.i=r+1&7,i};function a(o,r){var n,i=[];if(r===(r|0))i[0]=r;else for(r=""+r,n=0;n<r.length;++n)i[n&7]=i[n&7]<<15^r.charCodeAt(n)+i[n+1&7]<<13;for(;i.length<8;)i.push(0);for(n=0;n<8&&i[n]===0;++n);for(n==8?i[7]=-1:i[n],o.x=i,o.i=0,n=256;n>0;--n)o.next()}a(e,s)}function m(s,e){return e.x=s.x.slice(),e.i=s.i,e}function p(s,e){s==null&&(s=+new Date);var a=new f(s),o=e&&e.state,r=function(){return(a.next()>>>0)/4294967296};return r.double=function(){do var n=a.next()>>>11,i=(a.next()>>>0)/4294967296,l=(n+i)/(1<<21);while(l===0);return l},r.int32=a.next,r.quick=r,o&&(o.x&&m(o,a),r.state=function(){return m(a,{})}),r}u&&u.exports?u.exports=p:x&&x.amd?x(function(){return p}):this.xorshift7=p})(k,c,!1)})(q);var Ne=q.exports,K={exports:{}};K.exports;(function(c){(function(g,u,x){function f(s){var e=this;e.next=function(){var o=e.w,r=e.X,n=e.i,i,l;return e.w=o=o+1640531527|0,l=r[n+34&127],i=r[n=n+1&127],l^=l<<13,i^=i<<17,l^=l>>>15,i^=i>>>12,l=r[n]=l^i,e.i=n,l+(o^o>>>16)|0};function a(o,r){var n,i,l,w,H,N=[],L=128;for(r===(r|0)?(i=r,r=null):(r=r+"\0",i=0,L=Math.max(L,r.length)),l=0,w=-32;w<L;++w)r&&(i^=r.charCodeAt((w+32)%r.length)),w===0&&(H=i),i^=i<<10,i^=i>>>15,i^=i<<4,i^=i>>>13,w>=0&&(H=H+1640531527|0,n=N[w&127]^=i+H,l=n==0?l+1:0);for(l>=128&&(N[(r&&r.length||0)&127]=-1),l=127,w=4*128;w>0;--w)i=N[l+34&127],n=N[l=l+1&127],i^=i<<13,n^=n<<17,i^=i>>>15,n^=n>>>12,N[l]=i^n;o.w=H,o.X=N,o.i=l}a(e,s)}function m(s,e){return e.i=s.i,e.w=s.w,e.X=s.X.slice(),e}function p(s,e){s==null&&(s=+new Date);var a=new f(s),o=e&&e.state,r=function(){return(a.next()>>>0)/4294967296};return r.double=function(){do var n=a.next()>>>11,i=(a.next()>>>0)/4294967296,l=(n+i)/(1<<21);while(l===0);return l},r.int32=a.next,r.quick=r,o&&(o.X&&m(o,a),r.state=function(){return m(a,{})}),r}u&&u.exports?u.exports=p:x&&x.amd?x(function(){return p}):this.xor4096=p})(k,c,!1)})(K);var be=K.exports,Y={exports:{}};Y.exports;(function(c){(function(g,u,x){function f(s){var e=this,a="";e.next=function(){var r=e.b,n=e.c,i=e.d,l=e.a;return r=r<<25^r>>>7^n,n=n-i|0,i=i<<24^i>>>8^l,l=l-r|0,e.b=r=r<<20^r>>>12^n,e.c=n=n-i|0,e.d=i<<16^n>>>16^l,e.a=l-r|0},e.a=0,e.b=0,e.c=-1640531527,e.d=1367130551,s===Math.floor(s)?(e.a=s/4294967296|0,e.b=s|0):a+=s;for(var o=0;o<a.length+20;o++)e.b^=a.charCodeAt(o)|0,e.next()}function m(s,e){return e.a=s.a,e.b=s.b,e.c=s.c,e.d=s.d,e}function p(s,e){var a=new f(s),o=e&&e.state,r=function(){return(a.next()>>>0)/4294967296};return r.double=function(){do var n=a.next()>>>11,i=(a.next()>>>0)/4294967296,l=(n+i)/(1<<21);while(l===0);return l},r.int32=a.next,r.quick=r,o&&(typeof o=="object"&&m(o,a),r.state=function(){return m(a,{})}),r}u&&u.exports?u.exports=p:x&&x.amd?x(function(){return p}):this.tychei=p})(k,c,!1)})(Y);var Se=Y.exports,ee={exports:{}};const Be={},He=Object.freeze(Object.defineProperty({__proto__:null,default:Be},Symbol.toStringTag,{value:"Module"})),Me=oe(He);(function(c){(function(g,u,x){var f=256,m=6,p=52,s="random",e=x.pow(f,m),a=x.pow(2,p),o=a*2,r=f-1,n;function i(h,d,j){var y=[];d=d==!0?{entropy:!0}:d||{};var v=N(H(d.entropy?[h,A(u)]:h??L(),3),y),b=new l(y),B=function(){for(var S=b.g(m),C=e,M=0;S<a;)S=(S+M)*f,C*=f,M=b.g(1);for(;S>=o;)S/=2,C/=2,M>>>=1;return(S+M)/C};return B.int32=function(){return b.g(4)|0},B.quick=function(){return b.g(4)/4294967296},B.double=B,N(A(b.S),u),(d.pass||j||function(S,C,M,O){return O&&(O.S&&w(O,b),S.state=function(){return w(b,{})}),M?(x[s]=S,C):S})(B,v,"global"in d?d.global:this==x,d.state)}function l(h){var d,j=h.length,y=this,v=0,b=y.i=y.j=0,B=y.S=[];for(j||(h=[j++]);v<f;)B[v]=v++;for(v=0;v<f;v++)B[v]=B[b=r&b+h[v%j]+(d=B[v])],B[b]=d;(y.g=function(S){for(var C,M=0,O=y.i,P=y.j,G=y.S;S--;)C=G[O=r&O+1],M=M*f+G[r&(G[O]=G[P=r&P+C])+(G[P]=C)];return y.i=O,y.j=P,M})(f)}function w(h,d){return d.i=h.i,d.j=h.j,d.S=h.S.slice(),d}function H(h,d){var j=[],y=typeof h,v;if(d&&y=="object")for(v in h)try{j.push(H(h[v],d-1))}catch{}return j.length?j:y=="string"?h:h+"\0"}function N(h,d){for(var j=h+"",y,v=0;v<j.length;)d[r&v]=r&(y^=d[r&v]*19)+j.charCodeAt(v++);return A(d)}function L(){try{var h;return n&&(h=n.randomBytes)?h=h(f):(h=new Uint8Array(f),(g.crypto||g.msCrypto).getRandomValues(h)),A(h)}catch{var d=g.navigator,j=d&&d.plugins;return[+new Date,g,j,g.screen,A(u)]}}function A(h){return String.fromCharCode.apply(0,h)}if(N(x.random(),u),c.exports){c.exports=i;try{n=Me}catch{}}else x["seed"+s]=i})(typeof self<"u"?self:k,[],Math)})(ee);var Ae=ee.exports,Ce=ye,ke=je,Oe=we,Le=Ne,Te=be,Ge=Se,T=Ae;T.alea=Ce;T.xor128=ke;T.xorwow=Oe;T.xorshift7=Le;T.xor4096=Te;T.tychei=Ge;var Re=T,De=k&&k.__importDefault||function(c){return c&&c.__esModule?c:{default:c}};Object.defineProperty(z,"__esModule",{value:!0});var re=z.AvatarGenerator=void 0,J=De(Re),Pe=function(){function c(){}return c.prototype.generateRandomAvatar=function(g){var u=new Array;u.push("NoHair","Eyepatch","Hat","Hijab","Turban","WinterHat1","WinterHat2","WinterHat3","WinterHat4","LongHairBigHair","LongHairBob","LongHairBun","LongHairCurly","LongHairCurvy","LongHairDreads","LongHairFrida","LongHairFro","LongHairFroBand","LongHairNotTooLong","LongHairShavedSides","LongHairMiaWallace","LongHairStraight","LongHairStraight2","LongHairStraightStrand","ShortHairDreads01","ShortHairDreads02","ShortHairFrizzle","ShortHairShaggyMullet","ShortHairShortCurly","ShortHairShortFlat","ShortHairShortRound","ShortHairShortWaved","ShortHairSides","ShortHairTheCaesar","ShortHairTheCaesarSidePart");var x=new Array;x.push("Blank","Kurt","Prescription01","Prescription02","Round","Sunglasses","Wayfarers");var f=new Array;f.push("Blank","BeardMedium","BeardLight","BeardMagestic","MoustacheFancy","MoustacheMagnum");var m=new Array;m.push("Auburn","Black","Blonde","BlondeGolden","Brown","BrownDark","Platinum","Red");var p=new Array;p.push("BlazerShirt","BlazerSweater","CollarSweater","GraphicShirt","Hoodie","Overall","ShirtCrewNeck","ShirtScoopNeck","ShirtVNeck");var s=new Array;s.push("Close","Cry","Default","Dizzy","EyeRoll","Happy","Hearts","Side","Squint","Surprised","Wink","WinkWacky");var e=new Array;e.push("Angry","AngryNatural","Default","DefaultNatural","FlatNatural","RaisedExcited","RaisedExcitedNatural","SadConcerned","SadConcernedNatural","UnibrowNatural","UpDown","UpDownNatural");var a=new Array;a.push("Concerned","Default","Disbelief","Eating","Grimace","Sad","ScreamOpen","Serious","Smile","Tongue","Twinkle","Vomit");var o=new Array;o.push("Tanned","Yellow","Pale","Light","Brown","DarkBrown","Black");var r=new Array;r.push("Auburn","Black","Blonde","BlondeGolden","Brown","BrownDark","PastelPink","Platinum","Red","SilverGray");var n=new Array;n.push("Black","Blue01","Blue02","Blue03","Gray01","Gray02","Heather","PastelBlue","PastelGreen","PastelOrange","PastelRed","PastelYellow","Pink","Red","White");var i=new Array;i.push("Black","Blue01","Blue02","Blue03","Gray01","Gray02","Heather","PastelBlue","PastelGreen","PastelOrange","PastelRed","PastelYellow","Pink","Red","White");var l=g?J.default(g):J.default();return"https://avataaars.io/?accessoriesType="+x[Math.floor(l()*x.length)]+"&avatarStyle=Circle&clotheColor="+i[Math.floor(l()*i.length)]+"&clotheType="+p[Math.floor(l()*p.length)]+"&eyeType="+s[Math.floor(l()*s.length)]+"&eyebrowType="+e[Math.floor(l()*e.length)]+"&facialHairColor="+m[Math.floor(l()*m.length)]+"&facialHairType="+f[Math.floor(l()*f.length)]+"&hairColor="+r[Math.floor(l()*r.length)]+"&hatColor="+n[Math.floor(l()*n.length)]+"&mouthType="+a[Math.floor(l()*a.length)]+"&skinColor="+o[Math.floor(l()*o.length)]+"&topType="+u[Math.floor(l()*u.length)]},c}();re=z.AvatarGenerator=Pe;const Ee=({teacher:c})=>{const{name:g,surname:u,avatar_url:x}=c||{};return t.jsxs("div",{className:" relative flex justify-center items-center w-[120px] h-[120px] rounded-[50%] border-[3px] border-secondary-accent-color",children:[t.jsx("img",{className:"w-[96px] h-[96px] rounded-[50%] bg-secondary-accent-color ",src:x,alt:`${g}, ${u}`}),t.jsx("svg",{className:"absolute top-[17px] right-[20px] fill-green-color w-[12px] h-[12px] rounded-[50%] border-[2px] border-bg-color",children:t.jsx("use",{href:`${R}#icon-green-point`})})]})},Fe=new re,_e=({teacher:c})=>{const g=D(ge),u=D(se),x=ie(),[f,m]=F.useState(!0),[p,s]=F.useState(!1),[e,a]=F.useState(null),o=d=>{s(!0),a(d)},r=()=>{s(!1),a(null)},n={BOOKING:"BOOKING",UNAUTHORIZED:"UNAUTHORIZED"},i=F.useMemo(()=>e==="BOOKING"?t.jsx(fe,{closeModal:r,modalData:e,teacher:c}):e==="UNAUTHORIZED"?t.jsx(me,{closeModal:r,modalData:e}):null,[e,c]),l=g.some(({id:d})=>d===c.id),w=()=>{u?x(l?ue(c):pe(c)):o(n.UNAUTHORIZED)},{rating:H,price_per_hour:N,lessons_done:L,levels:A,reviews:h}=c||{};return t.jsxs(t.Fragment,{children:[t.jsxs("li",{className:" flex flex-wrap w-auto rounded-[24px] p-[24px] bg-bg-color gap-[48px]",children:[t.jsx(Ee,{teacher:c}),t.jsxs("div",{children:[t.jsxs("div",{className:"relative flex flex-wrap gap-x-[50px] gap-y-[20px] lg:gap-[192px]",children:[t.jsx("div",{children:t.jsx("p",{className:"text-[16px] leading-[1.5] font-medium text-card-text-color mb-[8px]",children:"Languages"})}),t.jsx("div",{children:t.jsxs("ul",{className:"flex w-full flex-wrap text-[16px] leading-[1.5] font-medium text-primary-text-color",children:[t.jsxs("li",{className:"flex justify-center items-center gap-[8px] ",children:[t.jsx("svg",{className:"w-[16px] h-[16px] stroke-primary-text-color fill-none ",children:t.jsx("use",{href:`${R}#icon-book-open`})}),t.jsx("p",{className:"descItem",children:"Lessons online"})]}),t.jsx("li",{children:t.jsxs("p",{className:"descItem",children:["Lessons done: ",L]})}),t.jsxs("li",{className:"flex justify-center items-center gap-[8px] ",children:[t.jsx("svg",{className:"w-[16px] h-[16px] fill-accent-color",children:t.jsx("use",{href:`${R}#icon-star`})}),t.jsxs("p",{className:"descItem",children:["Rating: ",H]})]}),t.jsx("li",{children:t.jsxs("p",{children:["Price / 1 hour:"," ",t.jsxs("span",{className:"text-green-color",children:[N,"$"]})]})}),t.jsx("button",{className:"absolute top-0 right-0 lg:right-[-84px] ml-[61px] flex justify-start ease-in-out duration-100 hover:scale-[1.035] hover:contrast-[0.9] cursor-pointer ",type:"button",onClick:w,children:t.jsx("svg",{className:l?"remove-favorite-icon":"add-favorite-icon",children:t.jsx("use",{href:R+"#icon-heart"})})})]})})]}),t.jsx(ve,{teacher:c}),f?t.jsx(le,{onClick:()=>m(!1),children:"Read more"}):t.jsxs(t.Fragment,{children:[t.jsx("p",{className:"max-w-[968px] mb-[32px]",children:c.experience}),t.jsx("ul",{className:"",children:h==null?void 0:h.map(({reviewer_name:d,reviewer_rating:j,comment:y},v)=>t.jsxs("li",{children:[t.jsxs("div",{className:"flex gap-[12px]",children:[t.jsx("img",{src:Fe.generateRandomAvatar(),alt:d,className:"w-[44px] h-[44px] rounded-[50%] bg-secondary-accent-color"}),t.jsxs("div",{className:"text-[16px] leading-[1.5] font-medium",children:[t.jsx("p",{className:"text-card-text-color",children:d}),t.jsxs("div",{className:"flex justify-center items-center gap-[8px]",children:[t.jsx("svg",{className:"w-[16px] h-[16px] fill-accent-color","aria-label":"star icon",children:t.jsx("use",{href:R+"#icon-star"})}),t.jsxs("p",{className:"text-[14px] leading-[1.29] font-medium text-primary-text-color",children:[j,".0"]})]})]})]}),t.jsx("p",{className:"mt-[16px]",children:y})]},v))})]}),t.jsx("ul",{className:"flex flex-wrap gap-[8px]",children:A==null?void 0:A.map((d,j)=>t.jsx("li",{className:`py-[8px] px-[12px] rounded-[35px] border-[1px] border-decor-text-element mt-[32px] ${j===0&&"bg-accent-color border-none"}`,children:t.jsxs("p",{className:"text-[14px] leading-[1.14] font-medium text-primary-text-color",children:["#",d]})},j))}),!f&&t.jsx(ce,{onClick:()=>o(n.BOOKING),children:"Book trial lesson"})]})]}),p&&t.jsx(t.Fragment,{children:t.jsx(xe,{closeModal:r,isOpenModal:p,body:i})})]})},$e=({teachers:c})=>(console.log("teachers: ",c),D(I)?t.jsx($,{}):t.jsx(t.Fragment,{children:t.jsx("ul",{className:"flex flex-col w-auto gap-[32px]",children:c.length>0&&(c==null?void 0:c.map(u=>t.jsx(_e,{teacher:u},u.id)))})}));export{$e as T,ge as s};
