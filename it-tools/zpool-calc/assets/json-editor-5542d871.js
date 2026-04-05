import{fu as Ub,bi as Lb,fv as Bb,T as Fb,fw as Wb,fx as Vb,fy as Hb,b as Jb,fz as Fa,fA as Il,b7 as Kb,fB as Du,fC as Yb,fD as xi,fE as Qb,fF as Gb,fG as Xb,fH as Zb,fI as Uu,fJ as su,fK as lu,fL as Wv,fM as Vv,fN as zs,fO as pg,fP as hg,fQ as Rs,fR as ci,fS as gg,fT as mg,fU as e1,fV as Yd,fW as yc,fX as Ss,fY as t1,fZ as n1,f_ as bg,f$ as r1,g0 as o1,g1 as Yi,bj as a1,g2 as Xf,g3 as Hv,g4 as cu,g5 as Zf,g6 as i1,g7 as yg,g8 as s1,g9 as l1,ga as c1,gb as u1,B as ui,d as jg,cO as d1,r as Ps,O as v1,i as Qd,c2 as f1,b0 as p1,D as fd,l as Ar,h as h1,a0 as g1,cd as m1,al as ep,ac as b1,o as ml,c as jc,k as bo,m as xc,ch as y1,w as Ri,a6 as j1,G as tp,j as x1,ad as np,a7 as w1,a8 as k1,aj as C1,ak as S1,x as O1,a as E1}from"./index-0c1fde36.js";import{_ as _1}from"./TextareaCopyable-59231e95.js";import{m as M1,O as A1,b as T1}from"./jsonquery-6c5d853a.js";import"./ajv-fabfb004.js";import{j as Bo,a5 as wi,a6 as z1,a7 as Jv,a8 as R1,a9 as P1,aa as Kv,ab as Yv,ac as Qv,ad as ia,ae as N1,af as xg,ag as $1,a2 as oc,ah as I1,ai as q1,aj as D1,ak as Gv,al as uu,Q as U1,t as bl,R as wg,F as vs,B as rp,a1 as L1,am as B1,an as F1,ao as W1,ap as V1,V as H1,aq as J1,ar as K1,as as Y1,at as Q1,au as G1,Y as X1,av as Z1,aw as ey,ax as ty,ay as ny,az as ry,$ as oy,a3 as ay,aA as iy,aB as sy,aC as ly,K as cy,aD as op,f as uy,aE as ap,k as pd,O as dy,_ as yl,aF as vy,aG as fy,aH as py,aI as hy,aJ as gy,aK as my,aL as by}from"./index-d5d88338.js";import{json as yy}from"./index-8e30e318.js";import{c as Gd,u as Bs,m as jy,a as wc,U as xy,H as kg}from"./uniqueId-b0d796c7.js";import{l as Wt}from"./_baseExtremum-ae2792a2.js";import{i as un}from"./isEmpty-10f615ca.js";import{d as du}from"./debounce-a6b2605e.js";import{n as Tr}from"./_baseFlatten-f3872d66.js";import{j as Vo,u as wy}from"./useJsonSchemaValidation-dc2bfda0.js";import{c as ky,g as Cy,h as Ia}from"./groupBy-f0323559.js";import{b as Sy,c as Cg}from"./_castFunction-302f37a8.js";import{t as Oy}from"./toInteger-034643bc.js";import{_ as Ey}from"./Space-7fc52151.js";import{_ as _y}from"./FormItem-1b9a5952.js";import{_ as My}from"./Divider-5fc425b0.js";import{_ as Ay}from"./Select-9917c364.js";import{N as Ty}from"./Alert-a9fb131b.js";import"./base64-ae7cf34b.js";import"./index-a6f01dde.js";import"./downloadBase64-508288e2.js";import"./index-6fddb70d.js";import"./index-cfd4d427.js";import"./Copy-ef9ec73c.js";import"./Scrollbar-54724e22.js";import"./ajv-53acda87.js";import"./index-9fb136d3.js";import"./now-e8fe0d27.js";import"./toNumber-29aad22f.js";import"./index-24bd6b84.js";import"./get-slot-1efb97e5.js";import"./context-00991937.js";import"./Tag-e75b8dae.js";import"./FocusDetector-089b8822.js";import"./VirtualList-8140ffff.js";import"./Empty-ca426d71.js";import"./index-cbfaa337.js";var zy=1,Ry=4;function Py(e,t){return t=typeof t=="function"?t:void 0,Sy(e,zy|Ry,t)}function Ny(e,t){for(var n=e==null?0:e.length;n--&&t(e[n],n,e)!==!1;);return e}var $y=Ub(!0);const Iy=$y;function qy(e,t){return e&&Iy(e,t,Lb)}var Dy=Bb(qy,!0);const Uy=Dy;function Ly(e,t){var n=Fb(e)?Ny:Uy;return n(e,Cg(t))}function tn(e){var t=e==null?0:e.length;return t?Wb(e,0,-1):[]}function Lt(e,t){return Vb(e,t)}var By=ky(function(e,t,n){e[n?0:1].push(t)},function(){return[[],[]]});const Fy=By;var Wy=9007199254740991,hd=4294967295,Vy=Math.min;function Hy(e,t){if(e=Oy(e),e<1||e>Wy)return[];var n=hd,o=Vy(e,hd);t=Cg(t),e-=hd;for(var a=Hb(o,t);++n<e;)t(n);return a}function vr(e){return Array.isArray(e)}function yr(e){return e!==null&&typeof e=="object"&&(e.constructor===void 0||e.constructor.name==="Object")}function Sg(e){return e&&typeof e=="object"?e.op==="add":!1}function Og(e){return e&&typeof e=="object"?e.op==="remove":!1}function Xv(e){return e&&typeof e=="object"?e.op==="replace":!1}function Xd(e){return e&&typeof e=="object"?e.op==="copy":!1}function Fi(e){return e&&typeof e=="object"?e.op==="move":!1}function Jy(e,t){return JSON.stringify(e)===JSON.stringify(t)}function Ky(e,t){return e===t}function Eg(e){return e.slice(0,e.length-1)}function Yy(e){return e[e.length-1]}function Qy(e,t){let n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:Ky;if(e.length<t.length)return!1;for(let o=0;o<t.length;o++)if(!n(e[o],t[o]))return!1;return!0}function _g(e){return typeof e=="object"&&e!==null}function Zv(e){if(vr(e)){const t=e.slice();return Object.getOwnPropertySymbols(e).forEach(n=>{t[n]=e[n]}),t}else if(yr(e)){const t={...e};return Object.getOwnPropertySymbols(e).forEach(n=>{t[n]=e[n]}),t}else return e}function ef(e,t,n){if(e[t]===n)return e;{const o=Zv(e);return o[t]=n,o}}function Ye(e,t){let n=e,o=0;for(;o<t.length;)yr(n)?n=n[t[o]]:vr(n)?n=n[parseInt(t[o])]:n=void 0,o++;return n}function co(e,t,n){let o=arguments.length>3&&arguments[3]!==void 0?arguments[3]:!1;if(t.length===0)return n;const a=t[0],i=co(e?e[a]:void 0,t.slice(1),n,o);if(yr(e)||vr(e))return ef(e,a,i);if(o){const s=Gy.test(a)?[]:{};return s[a]=i,s}else throw new Error("Path does not exist")}const Gy=/^\d+$/;function tf(e,t,n){if(t.length===0)return n(e);if(!_g(e))throw new Error("Path doesn't exist");const o=t[0],a=tf(e[o],t.slice(1),n);return ef(e,o,a)}function Lu(e,t){if(t.length===0)return e;if(!_g(e))throw new Error("Path does not exist");if(t.length===1){const a=t[0];if(a in e){const i=Zv(e);return vr(i)&&i.splice(parseInt(a),1),yr(i)&&delete i[a],i}else return e}const n=t[0],o=Lu(e[n],t.slice(1));return ef(e,n,o)}function nf(e,t,n){const o=t.slice(0,t.length-1),a=t[t.length-1];return tf(e,o,i=>{if(!Array.isArray(i))throw new TypeError("Array expected at path "+JSON.stringify(o));const s=Zv(i);return s.splice(parseInt(a),0,n),s})}function Ro(e,t){return e===void 0?!1:t.length===0?!0:e===null?!1:Ro(e[t[0]],t.slice(1))}function fo(e){const t=e.split("/");return t.shift(),t.map(n=>n.replace(/~1/g,"/").replace(/~0/g,"~"))}function dt(e){return e.map(Mg).join("")}function Mg(e){return"/"+String(e).replace(/~/g,"~0").replace(/\//g,"~1")}function kc(e,t){return e+Mg(t)}function Ho(e,t,n){let o=e;for(let a=0;a<t.length;a++){aj(t[a]);let i=t[a];if(n&&n.before){const c=n.before(o,i);if(c!==void 0){if(c.document!==void 0&&(o=c.document),c.json!==void 0)throw new Error('Deprecation warning: returned object property ".json" has been renamed to ".document"');c.operation!==void 0&&(i=c.operation)}}const s=o,l=Jo(o,i.path);if(i.op==="add")o=ej(o,l,i.value);else if(i.op==="remove")o=Zy(o,l);else if(i.op==="replace")o=Xy(o,l,i.value);else if(i.op==="copy")o=tj(o,l,Zd(i.from));else if(i.op==="move")o=nj(o,l,Zd(i.from));else if(i.op==="test")rj(o,l,i.value);else throw new Error("Unknown JSONPatch operation "+JSON.stringify(i));if(n&&n.after){const c=n.after(o,i,s);c!==void 0&&(o=c)}}return o}function Xy(e,t,n){return co(e,t,n)}function Zy(e,t){return Lu(e,t)}function ej(e,t,n){return ac(e,t)?nf(e,t,n):co(e,t,n)}function tj(e,t,n){const o=Ye(e,n);if(ac(e,t))return nf(e,t,o);{const a=Ye(e,n);return co(e,t,a)}}function nj(e,t,n){const o=Ye(e,n),a=Lu(e,n);return ac(a,t)?nf(a,t,o):co(a,t,o)}function rj(e,t,n){if(n===void 0)throw new Error(`Test failed: no value provided (path: "${dt(t)}")`);if(!Ro(e,t))throw new Error(`Test failed: path not found (path: "${dt(t)}")`);const o=Ye(e,t);if(!Jy(o,n))throw new Error(`Test failed, value differs (path: "${dt(t)}")`)}function ac(e,t){if(t.length===0)return!1;const n=Ye(e,Eg(t));return Array.isArray(n)}function oj(e,t){if(Yy(t)!=="-")return t;const n=Eg(t),o=Ye(e,n);return n.concat(o.length)}function aj(e){if(!["add","remove","replace","copy","move","test"].includes(e.op))throw new Error("Unknown JSONPatch op "+JSON.stringify(e.op));if(typeof e.path!="string")throw new Error('Required property "path" missing or not a string in operation '+JSON.stringify(e));if((e.op==="copy"||e.op==="move")&&typeof e.from!="string")throw new Error('Required property "from" missing or not a string in operation '+JSON.stringify(e))}function Jo(e,t){return oj(e,fo(t))}function Zd(e){return fo(e)}function Ag(e,t,n){let o=[];return Ho(e,t,{before:(i,s)=>{let l;const c=Jo(i,s.path);if(s.op==="add")l=Rg(i,c);else if(s.op==="remove")l=zg(i,c);else if(s.op==="replace")l=Tg(i,c);else if(s.op==="copy")l=ij(i,c);else if(s.op==="move")l=sj(i,c,Zd(s.from));else if(s.op==="test")l=[];else throw new Error("Unknown JSONPatch operation "+JSON.stringify(s));let u;if(n&&n.before){const d=n.before(i,s,l);if(d&&d.revertOperations&&(l=d.revertOperations),d&&d.document&&(u=d.document),d&&d.json)throw new Error('Deprecation warning: returned object property ".json" has been renamed to ".document"')}if(o=l.concat(o),u!==void 0)return{document:u}}}),o}function Tg(e,t){return[{op:"replace",path:dt(t),value:Ye(e,t)}]}function zg(e,t){return[{op:"add",path:dt(t),value:Ye(e,t)}]}function Rg(e,t){return ac(e,t)||!Ro(e,t)?[{op:"remove",path:dt(t)}]:Tg(e,t)}function ij(e,t){return Rg(e,t)}function sj(e,t,n){if(t.length<n.length&&Qy(n,t))return[{op:"replace",path:dt(t),value:e}];const o={op:"move",from:dt(t),path:dt(n)};return!ac(e,t)&&Ro(e,t)?[o,...zg(e,t)]:[o]}var Bu={},ip={b:"\b",f:"\f",n:`
`,r:"\r",t:"	",'"':'"',"/":"/","\\":"\\"},lj="a".charCodeAt();Bu.parse=function(e,t,n){var o={},a=0,i=0,s=0,l=n&&n.bigint&&typeof BigInt<"u";return{data:c("",!0),pointers:o};function c(E,K){u();var J;A(E,"value");var U=h();switch(U){case"t":m("rue"),J=!0;break;case"f":m("alse"),J=!1;break;case"n":m("ull"),J=null;break;case'"':J=d();break;case"[":J=p(E);break;case"{":J=b(E);break;default:j(),"-0123456789".indexOf(U)>=0?J=v():z()}return A(E,"valueEnd"),u(),K&&s<e.length&&z(),J}function u(){e:for(;s<e.length;){switch(e[s]){case" ":i++;break;case"	":i+=4;break;case"\r":i=0;break;case`
`:i=0,a++;break;default:break e}s++}}function d(){for(var E="",K;K=h(),K!='"';)K=="\\"?(K=h(),K in ip?E+=ip[K]:K=="u"?E+=x():R()):E+=K;return E}function v(){var E="",K=!0;e[s]=="-"&&(E+=h()),E+=e[s]=="0"?h():C(),e[s]=="."&&(E+=h()+C(),K=!1),(e[s]=="e"||e[s]=="E")&&(E+=h(),(e[s]=="+"||e[s]=="-")&&(E+=h()),E+=C(),K=!1);var J=+E;return l&&K&&(J>Number.MAX_SAFE_INTEGER||J<Number.MIN_SAFE_INTEGER)?BigInt(E):J}function p(E){u();var K=[],J=0;if(h()=="]")return K;for(j();;){var U=E+"/"+J;K.push(c(U)),u();var ae=h();if(ae=="]")break;ae!=","&&R(),u(),J++}return K}function b(E){u();var K={};if(h()=="}")return K;for(j();;){var J=w();h()!='"'&&R();var U=d(),ae=E+"/"+ev(U);O(ae,"key",J),A(ae,"keyEnd"),u(),h()!=":"&&R(),u(),K[U]=c(ae),u();var ge=h();if(ge=="}")break;ge!=","&&R(),u()}return K}function m(E){for(var K=0;K<E.length;K++)h()!==E[K]&&R()}function h(){Y();var E=e[s];return s++,i++,E}function j(){s--,i--}function x(){for(var E=4,K=0;E--;){K<<=4;var J=h().toLowerCase();J>="a"&&J<="f"?K+=J.charCodeAt()-lj+10:J>="0"&&J<="9"?K+=+J:R()}return String.fromCharCode(K)}function C(){for(var E="";e[s]>="0"&&e[s]<="9";)E+=h();if(E.length)return E;Y(),z()}function A(E,K){O(E,K,w())}function O(E,K,J){o[E]=o[E]||{},o[E][K]=J}function w(){return{line:a,column:i,pos:s}}function z(){throw new SyntaxError("Unexpected token "+e[s]+" in JSON at position "+s)}function R(){j(),z()}function Y(){if(s>=e.length)throw new SyntaxError("Unexpected end of JSON input")}};Bu.stringify=function(e,t,n){if(!Cc(e))return;var o=0,a,i,s=typeof n=="object"?n.space:n;switch(typeof s){case"number":var l=s>10?10:s<0?0:Math.floor(s);s=l&&O(l," "),a=l,i=l;break;case"string":s=s.slice(0,10),a=0,i=0;for(var c=0;c<s.length;c++){var u=s[c];switch(u){case" ":i++;break;case"	":i+=4;break;case"\r":i=0;break;case`
`:i=0,o++;break;default:throw new Error("whitespace characters not allowed in JSON")}a++}break;default:s=void 0}var d="",v={},p=0,b=0,m=0,h=n&&n.es6&&typeof Map=="function";return j(e,0,""),{json:d,pointers:v};function j(w,z,R){switch(A(R,"value"),typeof w){case"number":case"bigint":case"boolean":x(""+w);break;case"string":x(Sc(w));break;case"object":w===null?x("null"):typeof w.toJSON=="function"?x(Sc(w.toJSON())):Array.isArray(w)?Y():h?w.constructor.BYTES_PER_ELEMENT?Y():w instanceof Map?K():w instanceof Set?K(!0):E():E()}A(R,"valueEnd");function Y(){if(w.length){x("[");for(var J=z+1,U=0;U<w.length;U++){U&&x(","),C(J);var ae=Cc(w[U])?w[U]:null,ge=R+"/"+U;j(ae,J,ge)}C(z),x("]")}else x("[]")}function E(){var J=Object.keys(w);if(J.length){x("{");for(var U=z+1,ae=0;ae<J.length;ae++){var ge=J[ae],se=w[ge];if(Cc(se)){ae&&x(",");var Te=R+"/"+ev(ge);C(U),A(Te,"key"),x(Sc(ge)),A(Te,"keyEnd"),x(":"),s&&x(" "),j(se,U,Te)}}C(z),x("}")}else x("{}")}function K(J){if(w.size){x("{");for(var U=z+1,ae=!0,ge=w.entries(),se=ge.next();!se.done;){var Te=se.value,De=Te[0],Le=J?!0:Te[1];if(Cc(Le)){ae||x(","),ae=!1;var je=R+"/"+ev(De);C(U),A(je,"key"),x(Sc(De)),A(je,"keyEnd"),x(":"),s&&x(" "),j(Le,U,je)}se=ge.next()}C(z),x("}")}else x("{}")}}function x(w){b+=w.length,m+=w.length,d+=w}function C(w){if(s){for(d+=`
`+O(w,s),p++,b=0;w--;)o?(p+=o,b=i):b+=i,m+=a;m+=1}}function A(w,z){v[w]=v[w]||{},v[w][z]={line:p,column:b,pos:m}}function O(w,z){return Array(w+1).join(z)}};var cj=["number","bigint","boolean","string","object"];function Cc(e){return cj.indexOf(typeof e)>=0}var uj=/"|\\/g,dj=/[\b]/g,vj=/\f/g,fj=/\n/g,pj=/\r/g,hj=/\t/g;function Sc(e){return e=e.replace(uj,"\\$&").replace(vj,"\\f").replace(dj,"\\b").replace(fj,"\\n").replace(pj,"\\r").replace(hj,"\\t"),'"'+e+'"'}var gj=/~/g,mj=/\//g;function ev(e){return e.replace(gj,"~0").replace(mj,"~1")}/*!
 * Font Awesome Free 6.7.2 by @fontawesome - https://fontawesome.com
 * License - https://fontawesome.com/license/free (Icons: CC BY 4.0, Fonts: SIL OFL 1.1, Code: MIT License)
 * Copyright 2024 Fonticons, Inc.
 */const bj={prefix:"far",iconName:"lightbulb",icon:[384,512,[128161],"f0eb","M297.2 248.9C311.6 228.3 320 203.2 320 176c0-70.7-57.3-128-128-128S64 105.3 64 176c0 27.2 8.4 52.3 22.8 72.9c3.7 5.3 8.1 11.3 12.8 17.7c0 0 0 0 0 0c12.9 17.7 28.3 38.9 39.8 59.8c10.4 19 15.7 38.8 18.3 57.5L109 384c-2.2-12-5.9-23.7-11.8-34.5c-9.9-18-22.2-34.9-34.5-51.8c0 0 0 0 0 0s0 0 0 0c-5.2-7.1-10.4-14.2-15.4-21.4C27.6 247.9 16 213.3 16 176C16 78.8 94.8 0 192 0s176 78.8 176 176c0 37.3-11.6 71.9-31.4 100.3c-5 7.2-10.2 14.3-15.4 21.4c0 0 0 0 0 0s0 0 0 0c-12.3 16.8-24.6 33.7-34.5 51.8c-5.9 10.8-9.6 22.5-11.8 34.5l-48.6 0c2.6-18.7 7.9-38.6 18.3-57.5c11.5-20.9 26.9-42.1 39.8-59.8c0 0 0 0 0 0s0 0 0 0s0 0 0 0c4.7-6.4 9-12.4 12.7-17.7zM192 128c-26.5 0-48 21.5-48 48c0 8.8-7.2 16-16 16s-16-7.2-16-16c0-44.2 35.8-80 80-80c8.8 0 16 7.2 16 16s-7.2 16-16 16zm0 384c-44.2 0-80-35.8-80-80l0-16 160 0 0 16c0 44.2-35.8 80-80 80z"]},yj={prefix:"far",iconName:"square-check",icon:[448,512,[9745,9989,61510,"check-square"],"f14a","M64 80c-8.8 0-16 7.2-16 16l0 320c0 8.8 7.2 16 16 16l320 0c8.8 0 16-7.2 16-16l0-320c0-8.8-7.2-16-16-16L64 80zM0 96C0 60.7 28.7 32 64 32l320 0c35.3 0 64 28.7 64 64l0 320c0 35.3-28.7 64-64 64L64 480c-35.3 0-64-28.7-64-64L0 96zM337 209L209 337c-9.4 9.4-24.6 9.4-33.9 0l-64-64c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.4 33.9 0l47 47L303 175c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9z"]},Pg=yj,Ng={prefix:"far",iconName:"square",icon:[448,512,[9632,9723,9724,61590],"f0c8","M384 80c8.8 0 16 7.2 16 16l0 320c0 8.8-7.2 16-16 16L64 432c-8.8 0-16-7.2-16-16L48 96c0-8.8 7.2-16 16-16l320 0zM64 32C28.7 32 0 60.7 0 96L0 416c0 35.3 28.7 64 64 64l320 0c35.3 0 64-28.7 64-64l0-320c0-35.3-28.7-64-64-64L64 32z"]},jj={prefix:"far",iconName:"clock",icon:[512,512,[128339,"clock-four"],"f017","M464 256A208 208 0 1 1 48 256a208 208 0 1 1 416 0zM0 256a256 256 0 1 0 512 0A256 256 0 1 0 0 256zM232 120l0 136c0 8 4 15.5 10.7 20l96 64c11 7.4 25.9 4.4 33.3-6.7s4.4-25.9-6.7-33.3L280 243.2 280 120c0-13.3-10.7-24-24-24s-24 10.7-24 24z"]};var $g={exports:{}};/*
 * @version    1.4.0
 * @date       2015-10-26
 * @stability  3 - Stable
 * @author     Lauri Rooden (https://github.com/litejs/natural-compare-lite)
 * @license    MIT License
 */var sp=function(e,t){var n,o,a=1,i=0,s=0,l=String.alphabet;function c(u,d,v){if(v){for(n=d;v=c(u,n),v<76&&v>65;)++n;return+u.slice(d-1,n)}return v=l&&l.indexOf(u.charAt(d)),v>-1?v+76:(v=u.charCodeAt(d)||0,v<45||v>127?v:v<46?65:v<48?v-1:v<58?v+18:v<65?v-11:v<91?v+11:v<97?v-37:v<123?v+5:v-63)}if((e+="")!=(t+="")){for(;a;)if(o=c(e,i++),a=c(t,s++),o<76&&a<76&&o>66&&a>66&&(o=c(e,i,i),a=c(t,s,i=n),s=n),o!=a)return o<a?-1:1}return 0};try{$g.exports=sp}catch{String.naturalCompare=sp}var xj=$g.exports;const wj=Jb(xj);var lp=Number.isNaN||function(t){return typeof t=="number"&&t!==t};function kj(e,t){return!!(e===t||lp(e)&&lp(t))}function Cj(e,t){if(e.length!==t.length)return!1;for(var n=0;n<e.length;n++)if(!kj(e[n],t[n]))return!1;return!0}function ql(e,t){t===void 0&&(t=Cj);var n=null;function o(){for(var a=[],i=0;i<arguments.length;i++)a[i]=arguments[i];if(n&&n.lastThis===this&&t(a,n.lastArgs))return n.lastResult;var s=e.apply(this,a);return n={lastResult:s,lastArgs:a,lastThis:this},s}return o.clear=function(){n=null},o}var Sj={};(function(e){(function(t){function n(k){return k!==null?Object.prototype.toString.call(k)==="[object Array]":!1}function o(k){return k!==null?Object.prototype.toString.call(k)==="[object Object]":!1}function a(k,S){if(k===S)return!0;var T=Object.prototype.toString.call(k);if(T!==Object.prototype.toString.call(S))return!1;if(n(k)===!0){if(k.length!==S.length)return!1;for(var I=0;I<k.length;I++)if(a(k[I],S[I])===!1)return!1;return!0}if(o(k)===!0){var re={};for(var ke in k)if(hasOwnProperty.call(k,ke)){if(a(k[ke],S[ke])===!1)return!1;re[ke]=!0}for(var _e in S)if(hasOwnProperty.call(S,_e)&&re[_e]!==!0)return!1;return!0}return!1}function i(k){if(k===""||k===!1||k===null)return!0;if(n(k)&&k.length===0)return!0;if(o(k)){for(var S in k)if(k.hasOwnProperty(S))return!1;return!0}else return!1}function s(k){for(var S=Object.keys(k),T=[],I=0;I<S.length;I++)T.push(k[S[I]]);return T}var l;typeof String.prototype.trimLeft=="function"?l=function(k){return k.trimLeft()}:l=function(k){return k.match(/^\s*(.*)/)[1]};var c=0,u=1,d=2,v=3,p=4,b=5,m=6,h=7,j=8,x=9,C={0:"number",1:"any",2:"string",3:"array",4:"object",5:"boolean",6:"expression",7:"null",8:"Array<number>",9:"Array<string>"},A="EOF",O="UnquotedIdentifier",w="QuotedIdentifier",z="Rbracket",R="Rparen",Y="Comma",E="Colon",K="Rbrace",J="Number",U="Current",ae="Expref",ge="Pipe",se="Or",Te="And",De="EQ",Le="GT",je="LT",Oe="GTE",Pe="LTE",ot="NE",xe="Flatten",ue="Star",we="Filter",ft="Dot",Jt="Not",pe="Lbrace",V="Lbracket",he="Lparen",L="Literal",de={".":ft,"*":ue,",":Y,":":E,"{":pe,"}":K,"]":z,"(":he,")":R,"@":U},Q={"<":!0,">":!0,"=":!0,"!":!0},Ne={" ":!0,"	":!0,"\n":!0};function ne(k){return k>="a"&&k<="z"||k>="A"&&k<="Z"||k==="_"}function B(k){return k>="0"&&k<="9"||k==="-"}function bt(k){return k>="a"&&k<="z"||k>="A"&&k<="Z"||k>="0"&&k<="9"||k==="_"}function st(){}st.prototype={tokenize:function(k){var S=[];this._current=0;for(var T,I,re;this._current<k.length;)if(ne(k[this._current]))T=this._current,I=this._consumeUnquotedIdentifier(k),S.push({type:O,value:I,start:T});else if(de[k[this._current]]!==void 0)S.push({type:de[k[this._current]],value:k[this._current],start:this._current}),this._current++;else if(B(k[this._current]))re=this._consumeNumber(k),S.push(re);else if(k[this._current]==="[")re=this._consumeLBracket(k),S.push(re);else if(k[this._current]==='"')T=this._current,I=this._consumeQuotedIdentifier(k),S.push({type:w,value:I,start:T});else if(k[this._current]==="'")T=this._current,I=this._consumeRawStringLiteral(k),S.push({type:L,value:I,start:T});else if(k[this._current]==="`"){T=this._current;var ke=this._consumeLiteral(k);S.push({type:L,value:ke,start:T})}else if(Q[k[this._current]]!==void 0)S.push(this._consumeOperator(k));else if(Ne[k[this._current]]!==void 0)this._current++;else if(k[this._current]==="&")T=this._current,this._current++,k[this._current]==="&"?(this._current++,S.push({type:Te,value:"&&",start:T})):S.push({type:ae,value:"&",start:T});else if(k[this._current]==="|")T=this._current,this._current++,k[this._current]==="|"?(this._current++,S.push({type:se,value:"||",start:T})):S.push({type:ge,value:"|",start:T});else{var _e=new Error("Unknown character:"+k[this._current]);throw _e.name="LexerError",_e}return S},_consumeUnquotedIdentifier:function(k){var S=this._current;for(this._current++;this._current<k.length&&bt(k[this._current]);)this._current++;return k.slice(S,this._current)},_consumeQuotedIdentifier:function(k){var S=this._current;this._current++;for(var T=k.length;k[this._current]!=='"'&&this._current<T;){var I=this._current;k[I]==="\\"&&(k[I+1]==="\\"||k[I+1]==='"')?I+=2:I++,this._current=I}return this._current++,JSON.parse(k.slice(S,this._current))},_consumeRawStringLiteral:function(k){var S=this._current;this._current++;for(var T=k.length;k[this._current]!=="'"&&this._current<T;){var I=this._current;k[I]==="\\"&&(k[I+1]==="\\"||k[I+1]==="'")?I+=2:I++,this._current=I}this._current++;var re=k.slice(S+1,this._current-1);return re.replace("\\'","'")},_consumeNumber:function(k){var S=this._current;this._current++;for(var T=k.length;B(k[this._current])&&this._current<T;)this._current++;var I=parseInt(k.slice(S,this._current));return{type:J,value:I,start:S}},_consumeLBracket:function(k){var S=this._current;return this._current++,k[this._current]==="?"?(this._current++,{type:we,value:"[?",start:S}):k[this._current]==="]"?(this._current++,{type:xe,value:"[]",start:S}):{type:V,value:"[",start:S}},_consumeOperator:function(k){var S=this._current,T=k[S];if(this._current++,T==="!")return k[this._current]==="="?(this._current++,{type:ot,value:"!=",start:S}):{type:Jt,value:"!",start:S};if(T==="<")return k[this._current]==="="?(this._current++,{type:Pe,value:"<=",start:S}):{type:je,value:"<",start:S};if(T===">")return k[this._current]==="="?(this._current++,{type:Oe,value:">=",start:S}):{type:Le,value:">",start:S};if(T==="="&&k[this._current]==="=")return this._current++,{type:De,value:"==",start:S}},_consumeLiteral:function(k){this._current++;for(var S=this._current,T=k.length,I;k[this._current]!=="`"&&this._current<T;){var re=this._current;k[re]==="\\"&&(k[re+1]==="\\"||k[re+1]==="`")?re+=2:re++,this._current=re}var ke=l(k.slice(S,this._current));return ke=ke.replace("\\`","`"),this._looksLikeJSON(ke)?I=JSON.parse(ke):I=JSON.parse('"'+ke+'"'),this._current++,I},_looksLikeJSON:function(k){var S='[{"',T=["true","false","null"],I="-0123456789";if(k==="")return!1;if(S.indexOf(k[0])>=0)return!0;if(T.indexOf(k)>=0)return!0;if(I.indexOf(k[0])>=0)try{return JSON.parse(k),!0}catch{return!1}else return!1}};var Se={};Se[A]=0,Se[O]=0,Se[w]=0,Se[z]=0,Se[R]=0,Se[Y]=0,Se[K]=0,Se[J]=0,Se[U]=0,Se[ae]=0,Se[ge]=1,Se[se]=2,Se[Te]=3,Se[De]=5,Se[Le]=5,Se[je]=5,Se[Oe]=5,Se[Pe]=5,Se[ot]=5,Se[xe]=9,Se[ue]=20,Se[we]=21,Se[ft]=40,Se[Jt]=45,Se[pe]=50,Se[V]=55,Se[he]=60;function xt(){}xt.prototype={parse:function(k){this._loadTokens(k),this.index=0;var S=this.expression(0);if(this._lookahead(0)!==A){var T=this._lookaheadToken(0),I=new Error("Unexpected token type: "+T.type+", value: "+T.value);throw I.name="ParserError",I}return S},_loadTokens:function(k){var S=new st,T=S.tokenize(k);T.push({type:A,value:"",start:k.length}),this.tokens=T},expression:function(k){var S=this._lookaheadToken(0);this._advance();for(var T=this.nud(S),I=this._lookahead(0);k<Se[I];)this._advance(),T=this.led(I,T),I=this._lookahead(0);return T},_lookahead:function(k){return this.tokens[this.index+k].type},_lookaheadToken:function(k){return this.tokens[this.index+k]},_advance:function(){this.index++},nud:function(k){var S,T,I;switch(k.type){case L:return{type:"Literal",value:k.value};case O:return{type:"Field",name:k.value};case w:var re={type:"Field",name:k.value};if(this._lookahead(0)===he)throw new Error("Quoted identifier not allowed for function names.");return re;case Jt:return T=this.expression(Se.Not),{type:"NotExpression",children:[T]};case ue:return S={type:"Identity"},T=null,this._lookahead(0)===z?T={type:"Identity"}:T=this._parseProjectionRHS(Se.Star),{type:"ValueProjection",children:[S,T]};case we:return this.led(k.type,{type:"Identity"});case pe:return this._parseMultiselectHash();case xe:return S={type:xe,children:[{type:"Identity"}]},T=this._parseProjectionRHS(Se.Flatten),{type:"Projection",children:[S,T]};case V:return this._lookahead(0)===J||this._lookahead(0)===E?(T=this._parseIndexExpression(),this._projectIfSlice({type:"Identity"},T)):this._lookahead(0)===ue&&this._lookahead(1)===z?(this._advance(),this._advance(),T=this._parseProjectionRHS(Se.Star),{type:"Projection",children:[{type:"Identity"},T]}):this._parseMultiselectList();case U:return{type:U};case ae:return I=this.expression(Se.Expref),{type:"ExpressionReference",children:[I]};case he:for(var ke=[];this._lookahead(0)!==R;)this._lookahead(0)===U?(I={type:U},this._advance()):I=this.expression(0),ke.push(I);return this._match(R),ke[0];default:this._errorToken(k)}},led:function(k,S){var T;switch(k){case ft:var I=Se.Dot;return this._lookahead(0)!==ue?(T=this._parseDotRHS(I),{type:"Subexpression",children:[S,T]}):(this._advance(),T=this._parseProjectionRHS(I),{type:"ValueProjection",children:[S,T]});case ge:return T=this.expression(Se.Pipe),{type:ge,children:[S,T]};case se:return T=this.expression(Se.Or),{type:"OrExpression",children:[S,T]};case Te:return T=this.expression(Se.And),{type:"AndExpression",children:[S,T]};case he:for(var re=S.name,ke=[],_e,ee;this._lookahead(0)!==R;)this._lookahead(0)===U?(_e={type:U},this._advance()):_e=this.expression(0),this._lookahead(0)===Y&&this._match(Y),ke.push(_e);return this._match(R),ee={type:"Function",name:re,children:ke},ee;case we:var oe=this.expression(0);return this._match(z),this._lookahead(0)===xe?T={type:"Identity"}:T=this._parseProjectionRHS(Se.Filter),{type:"FilterProjection",children:[S,T,oe]};case xe:var it={type:xe,children:[S]},et=this._parseProjectionRHS(Se.Flatten);return{type:"Projection",children:[it,et]};case De:case ot:case Le:case Oe:case je:case Pe:return this._parseComparator(S,k);case V:var We=this._lookaheadToken(0);return We.type===J||We.type===E?(T=this._parseIndexExpression(),this._projectIfSlice(S,T)):(this._match(ue),this._match(z),T=this._parseProjectionRHS(Se.Star),{type:"Projection",children:[S,T]});default:this._errorToken(this._lookaheadToken(0))}},_match:function(k){if(this._lookahead(0)===k)this._advance();else{var S=this._lookaheadToken(0),T=new Error("Expected "+k+", got: "+S.type);throw T.name="ParserError",T}},_errorToken:function(k){var S=new Error("Invalid token ("+k.type+'): "'+k.value+'"');throw S.name="ParserError",S},_parseIndexExpression:function(){if(this._lookahead(0)===E||this._lookahead(1)===E)return this._parseSliceExpression();var k={type:"Index",value:this._lookaheadToken(0).value};return this._advance(),this._match(z),k},_projectIfSlice:function(k,S){var T={type:"IndexExpression",children:[k,S]};return S.type==="Slice"?{type:"Projection",children:[T,this._parseProjectionRHS(Se.Star)]}:T},_parseSliceExpression:function(){for(var k=[null,null,null],S=0,T=this._lookahead(0);T!==z&&S<3;){if(T===E)S++,this._advance();else if(T===J)k[S]=this._lookaheadToken(0).value,this._advance();else{var I=this._lookahead(0),re=new Error("Syntax error, unexpected token: "+I.value+"("+I.type+")");throw re.name="Parsererror",re}T=this._lookahead(0)}return this._match(z),{type:"Slice",children:k}},_parseComparator:function(k,S){var T=this.expression(Se[S]);return{type:"Comparator",name:S,children:[k,T]}},_parseDotRHS:function(k){var S=this._lookahead(0),T=[O,w,ue];if(T.indexOf(S)>=0)return this.expression(k);if(S===V)return this._match(V),this._parseMultiselectList();if(S===pe)return this._match(pe),this._parseMultiselectHash()},_parseProjectionRHS:function(k){var S;if(Se[this._lookahead(0)]<10)S={type:"Identity"};else if(this._lookahead(0)===V)S=this.expression(k);else if(this._lookahead(0)===we)S=this.expression(k);else if(this._lookahead(0)===ft)this._match(ft),S=this._parseDotRHS(k);else{var T=this._lookaheadToken(0),I=new Error("Sytanx error, unexpected token: "+T.value+"("+T.type+")");throw I.name="ParserError",I}return S},_parseMultiselectList:function(){for(var k=[];this._lookahead(0)!==z;){var S=this.expression(0);if(k.push(S),this._lookahead(0)===Y&&(this._match(Y),this._lookahead(0)===z))throw new Error("Unexpected token Rbracket")}return this._match(z),{type:"MultiSelectList",children:k}},_parseMultiselectHash:function(){for(var k=[],S=[O,w],T,I,re,ke;;){if(T=this._lookaheadToken(0),S.indexOf(T.type)<0)throw new Error("Expecting an identifier token, got: "+T.type);if(I=T.value,this._advance(),this._match(E),re=this.expression(0),ke={type:"KeyValuePair",name:I,value:re},k.push(ke),this._lookahead(0)===Y)this._match(Y);else if(this._lookahead(0)===K){this._match(K);break}}return{type:"MultiSelectHash",children:k}}};function Fe(k){this.runtime=k}Fe.prototype={search:function(k,S){return this.visit(k,S)},visit:function(k,S){var T,I,re,ke,_e,ee,oe,it,et,We;switch(k.type){case"Field":return S!==null&&o(S)?(ee=S[k.name],ee===void 0?null:ee):null;case"Subexpression":for(re=this.visit(k.children[0],S),We=1;We<k.children.length;We++)if(re=this.visit(k.children[1],re),re===null)return null;return re;case"IndexExpression":return oe=this.visit(k.children[0],S),it=this.visit(k.children[1],oe),it;case"Index":if(!n(S))return null;var Je=k.value;return Je<0&&(Je=S.length+Je),re=S[Je],re===void 0&&(re=null),re;case"Slice":if(!n(S))return null;var Nt=k.children.slice(0),xn=this.computeSliceParams(S.length,Nt),Sn=xn[0],$t=xn[1],dn=xn[2];if(re=[],dn>0)for(We=Sn;We<$t;We+=dn)re.push(S[We]);else for(We=Sn;We>$t;We+=dn)re.push(S[We]);return re;case"Projection":var Bt=this.visit(k.children[0],S);if(!n(Bt))return null;for(et=[],We=0;We<Bt.length;We++)I=this.visit(k.children[1],Bt[We]),I!==null&&et.push(I);return et;case"ValueProjection":if(Bt=this.visit(k.children[0],S),!o(Bt))return null;et=[];var Kt=s(Bt);for(We=0;We<Kt.length;We++)I=this.visit(k.children[1],Kt[We]),I!==null&&et.push(I);return et;case"FilterProjection":if(Bt=this.visit(k.children[0],S),!n(Bt))return null;var ln=[],vt=[];for(We=0;We<Bt.length;We++)T=this.visit(k.children[2],Bt[We]),i(T)||ln.push(Bt[We]);for(var vn=0;vn<ln.length;vn++)I=this.visit(k.children[1],ln[vn]),I!==null&&vt.push(I);return vt;case"Comparator":switch(ke=this.visit(k.children[0],S),_e=this.visit(k.children[1],S),k.name){case De:re=a(ke,_e);break;case ot:re=!a(ke,_e);break;case Le:re=ke>_e;break;case Oe:re=ke>=_e;break;case je:re=ke<_e;break;case Pe:re=ke<=_e;break;default:throw new Error("Unknown comparator: "+k.name)}return re;case xe:var Ot=this.visit(k.children[0],S);if(!n(Ot))return null;var Ge=[];for(We=0;We<Ot.length;We++)I=Ot[We],n(I)?Ge.push.apply(Ge,I):Ge.push(I);return Ge;case"Identity":return S;case"MultiSelectList":if(S===null)return null;for(et=[],We=0;We<k.children.length;We++)et.push(this.visit(k.children[We],S));return et;case"MultiSelectHash":if(S===null)return null;et={};var Yt;for(We=0;We<k.children.length;We++)Yt=k.children[We],et[Yt.name]=this.visit(Yt.value,S);return et;case"OrExpression":return T=this.visit(k.children[0],S),i(T)&&(T=this.visit(k.children[1],S)),T;case"AndExpression":return ke=this.visit(k.children[0],S),i(ke)===!0?ke:this.visit(k.children[1],S);case"NotExpression":return ke=this.visit(k.children[0],S),i(ke);case"Literal":return k.value;case ge:return oe=this.visit(k.children[0],S),this.visit(k.children[1],oe);case U:return S;case"Function":var It=[];for(We=0;We<k.children.length;We++)It.push(this.visit(k.children[We],S));return this.runtime.callFunction(k.name,It);case"ExpressionReference":var Nn=k.children[0];return Nn.jmespathType=ae,Nn;default:throw new Error("Unknown node type: "+k.type)}},computeSliceParams:function(k,S){var T=S[0],I=S[1],re=S[2],ke=[null,null,null];if(re===null)re=1;else if(re===0){var _e=new Error("Invalid slice, step cannot be 0");throw _e.name="RuntimeError",_e}var ee=re<0;return T===null?T=ee?k-1:0:T=this.capSliceRange(k,T,re),I===null?I=ee?-1:k:I=this.capSliceRange(k,I,re),ke[0]=T,ke[1]=I,ke[2]=re,ke},capSliceRange:function(k,S,T){return S<0?(S+=k,S<0&&(S=T<0?-1:0)):S>=k&&(S=T<0?k-1:k),S}};function He(k){this._interpreter=k,this.functionTable={abs:{_func:this._functionAbs,_signature:[{types:[c]}]},avg:{_func:this._functionAvg,_signature:[{types:[j]}]},ceil:{_func:this._functionCeil,_signature:[{types:[c]}]},contains:{_func:this._functionContains,_signature:[{types:[d,v]},{types:[u]}]},ends_with:{_func:this._functionEndsWith,_signature:[{types:[d]},{types:[d]}]},floor:{_func:this._functionFloor,_signature:[{types:[c]}]},length:{_func:this._functionLength,_signature:[{types:[d,v,p]}]},map:{_func:this._functionMap,_signature:[{types:[m]},{types:[v]}]},max:{_func:this._functionMax,_signature:[{types:[j,x]}]},merge:{_func:this._functionMerge,_signature:[{types:[p],variadic:!0}]},max_by:{_func:this._functionMaxBy,_signature:[{types:[v]},{types:[m]}]},sum:{_func:this._functionSum,_signature:[{types:[j]}]},starts_with:{_func:this._functionStartsWith,_signature:[{types:[d]},{types:[d]}]},min:{_func:this._functionMin,_signature:[{types:[j,x]}]},min_by:{_func:this._functionMinBy,_signature:[{types:[v]},{types:[m]}]},type:{_func:this._functionType,_signature:[{types:[u]}]},keys:{_func:this._functionKeys,_signature:[{types:[p]}]},values:{_func:this._functionValues,_signature:[{types:[p]}]},sort:{_func:this._functionSort,_signature:[{types:[x,j]}]},sort_by:{_func:this._functionSortBy,_signature:[{types:[v]},{types:[m]}]},join:{_func:this._functionJoin,_signature:[{types:[d]},{types:[x]}]},reverse:{_func:this._functionReverse,_signature:[{types:[d,v]}]},to_array:{_func:this._functionToArray,_signature:[{types:[u]}]},to_string:{_func:this._functionToString,_signature:[{types:[u]}]},to_number:{_func:this._functionToNumber,_signature:[{types:[u]}]},not_null:{_func:this._functionNotNull,_signature:[{types:[u],variadic:!0}]}}}He.prototype={callFunction:function(k,S){var T=this.functionTable[k];if(T===void 0)throw new Error("Unknown function: "+k+"()");return this._validateArgs(k,S,T._signature),T._func.call(this,S)},_validateArgs:function(k,S,T){var I;if(T[T.length-1].variadic){if(S.length<T.length)throw I=T.length===1?" argument":" arguments",new Error("ArgumentError: "+k+"() takes at least"+T.length+I+" but received "+S.length)}else if(S.length!==T.length)throw I=T.length===1?" argument":" arguments",new Error("ArgumentError: "+k+"() takes "+T.length+I+" but received "+S.length);for(var re,ke,_e,ee=0;ee<T.length;ee++){_e=!1,re=T[ee].types,ke=this._getTypeName(S[ee]);for(var oe=0;oe<re.length;oe++)if(this._typeMatches(ke,re[oe],S[ee])){_e=!0;break}if(!_e){var it=re.map(function(et){return C[et]}).join(",");throw new Error("TypeError: "+k+"() expected argument "+(ee+1)+" to be type "+it+" but received type "+C[ke]+" instead.")}}},_typeMatches:function(k,S,T){if(S===u)return!0;if(S===x||S===j||S===v){if(S===v)return k===v;if(k===v){var I;S===j?I=c:S===x&&(I=d);for(var re=0;re<T.length;re++)if(!this._typeMatches(this._getTypeName(T[re]),I,T[re]))return!1;return!0}}else return k===S},_getTypeName:function(k){switch(Object.prototype.toString.call(k)){case"[object String]":return d;case"[object Number]":return c;case"[object Array]":return v;case"[object Boolean]":return b;case"[object Null]":return h;case"[object Object]":return k.jmespathType===ae?m:p}},_functionStartsWith:function(k){return k[0].lastIndexOf(k[1])===0},_functionEndsWith:function(k){var S=k[0],T=k[1];return S.indexOf(T,S.length-T.length)!==-1},_functionReverse:function(k){var S=this._getTypeName(k[0]);if(S===d){for(var T=k[0],I="",re=T.length-1;re>=0;re--)I+=T[re];return I}else{var ke=k[0].slice(0);return ke.reverse(),ke}},_functionAbs:function(k){return Math.abs(k[0])},_functionCeil:function(k){return Math.ceil(k[0])},_functionAvg:function(k){for(var S=0,T=k[0],I=0;I<T.length;I++)S+=T[I];return S/T.length},_functionContains:function(k){return k[0].indexOf(k[1])>=0},_functionFloor:function(k){return Math.floor(k[0])},_functionLength:function(k){return o(k[0])?Object.keys(k[0]).length:k[0].length},_functionMap:function(k){for(var S=[],T=this._interpreter,I=k[0],re=k[1],ke=0;ke<re.length;ke++)S.push(T.visit(I,re[ke]));return S},_functionMerge:function(k){for(var S={},T=0;T<k.length;T++){var I=k[T];for(var re in I)S[re]=I[re]}return S},_functionMax:function(k){if(k[0].length>0){var S=this._getTypeName(k[0][0]);if(S===c)return Math.max.apply(Math,k[0]);for(var T=k[0],I=T[0],re=1;re<T.length;re++)I.localeCompare(T[re])<0&&(I=T[re]);return I}else return null},_functionMin:function(k){if(k[0].length>0){var S=this._getTypeName(k[0][0]);if(S===c)return Math.min.apply(Math,k[0]);for(var T=k[0],I=T[0],re=1;re<T.length;re++)T[re].localeCompare(I)<0&&(I=T[re]);return I}else return null},_functionSum:function(k){for(var S=0,T=k[0],I=0;I<T.length;I++)S+=T[I];return S},_functionType:function(k){switch(this._getTypeName(k[0])){case c:return"number";case d:return"string";case v:return"array";case p:return"object";case b:return"boolean";case m:return"expref";case h:return"null"}},_functionKeys:function(k){return Object.keys(k[0])},_functionValues:function(k){for(var S=k[0],T=Object.keys(S),I=[],re=0;re<T.length;re++)I.push(S[T[re]]);return I},_functionJoin:function(k){var S=k[0],T=k[1];return T.join(S)},_functionToArray:function(k){return this._getTypeName(k[0])===v?k[0]:[k[0]]},_functionToString:function(k){return this._getTypeName(k[0])===d?k[0]:JSON.stringify(k[0])},_functionToNumber:function(k){var S=this._getTypeName(k[0]),T;return S===c?k[0]:S===d&&(T=+k[0],!isNaN(T))?T:null},_functionNotNull:function(k){for(var S=0;S<k.length;S++)if(this._getTypeName(k[S])!==h)return k[S];return null},_functionSort:function(k){var S=k[0].slice(0);return S.sort(),S},_functionSortBy:function(k){var S=k[0].slice(0);if(S.length===0)return S;var T=this._interpreter,I=k[1],re=this._getTypeName(T.visit(I,S[0]));if([c,d].indexOf(re)<0)throw new Error("TypeError");for(var ke=this,_e=[],ee=0;ee<S.length;ee++)_e.push([ee,S[ee]]);_e.sort(function(it,et){var We=T.visit(I,it[1]),Je=T.visit(I,et[1]);if(ke._getTypeName(We)!==re)throw new Error("TypeError: expected "+re+", received "+ke._getTypeName(We));if(ke._getTypeName(Je)!==re)throw new Error("TypeError: expected "+re+", received "+ke._getTypeName(Je));return We>Je?1:We<Je?-1:it[0]-et[0]});for(var oe=0;oe<_e.length;oe++)S[oe]=_e[oe][1];return S},_functionMaxBy:function(k){for(var S=k[1],T=k[0],I=this.createKeyFunction(S,[c,d]),re=-1/0,ke,_e,ee=0;ee<T.length;ee++)_e=I(T[ee]),_e>re&&(re=_e,ke=T[ee]);return ke},_functionMinBy:function(k){for(var S=k[1],T=k[0],I=this.createKeyFunction(S,[c,d]),re=1/0,ke,_e,ee=0;ee<T.length;ee++)_e=I(T[ee]),_e<re&&(re=_e,ke=T[ee]);return ke},createKeyFunction:function(k,S){var T=this,I=this._interpreter,re=function(ke){var _e=I.visit(k,ke);if(S.indexOf(T._getTypeName(_e))<0){var ee="TypeError: expected one of "+S+", received "+T._getTypeName(_e);throw new Error(ee)}return _e};return re}};function pt(k){var S=new xt,T=S.parse(k);return T}function Ue(k){var S=new st;return S.tokenize(k)}function Rt(k,S){var T=new xt,I=new He,re=new Fe(I);I._interpreter=re;var ke=T.parse(S);return re.search(ke,k)}t.tokenize=Ue,t.compile=pt,t.search=Rt,t.strictDeepEqual=a})(e)})(Sj);class Oj{add(t,n,o){if(typeof arguments[0]!="string")for(let a in arguments[0])this.add(a,arguments[0][a],arguments[1]);else(Array.isArray(t)?t:[t]).forEach(function(a){this[a]=this[a]||[],n&&this[a][o?"unshift":"push"](n)},this)}run(t,n){this[t]=this[t]||[],this[t].forEach(function(o){o.call(n&&n.context?n.context:n,n)})}}class Ej{constructor(t){this.jsep=t,this.registered={}}register(){for(var t=arguments.length,n=new Array(t),o=0;o<t;o++)n[o]=arguments[o];n.forEach(a=>{if(typeof a!="object"||!a.name||!a.init)throw new Error("Invalid JSEP plugin format");this.registered[a.name]||(a.init(this.jsep),this.registered[a.name]=a)})}}class le{static get version(){return"1.4.0"}static toString(){return"JavaScript Expression Parser (JSEP) v"+le.version}static addUnaryOp(t){return le.max_unop_len=Math.max(t.length,le.max_unop_len),le.unary_ops[t]=1,le}static addBinaryOp(t,n,o){return le.max_binop_len=Math.max(t.length,le.max_binop_len),le.binary_ops[t]=n,o?le.right_associative.add(t):le.right_associative.delete(t),le}static addIdentifierChar(t){return le.additional_identifier_chars.add(t),le}static addLiteral(t,n){return le.literals[t]=n,le}static removeUnaryOp(t){return delete le.unary_ops[t],t.length===le.max_unop_len&&(le.max_unop_len=le.getMaxKeyLen(le.unary_ops)),le}static removeAllUnaryOps(){return le.unary_ops={},le.max_unop_len=0,le}static removeIdentifierChar(t){return le.additional_identifier_chars.delete(t),le}static removeBinaryOp(t){return delete le.binary_ops[t],t.length===le.max_binop_len&&(le.max_binop_len=le.getMaxKeyLen(le.binary_ops)),le.right_associative.delete(t),le}static removeAllBinaryOps(){return le.binary_ops={},le.max_binop_len=0,le}static removeLiteral(t){return delete le.literals[t],le}static removeAllLiterals(){return le.literals={},le}get char(){return this.expr.charAt(this.index)}get code(){return this.expr.charCodeAt(this.index)}constructor(t){this.expr=t,this.index=0}static parse(t){return new le(t).parse()}static getMaxKeyLen(t){return Math.max(0,...Object.keys(t).map(n=>n.length))}static isDecimalDigit(t){return t>=48&&t<=57}static binaryPrecedence(t){return le.binary_ops[t]||0}static isIdentifierStart(t){return t>=65&&t<=90||t>=97&&t<=122||t>=128&&!le.binary_ops[String.fromCharCode(t)]||le.additional_identifier_chars.has(String.fromCharCode(t))}static isIdentifierPart(t){return le.isIdentifierStart(t)||le.isDecimalDigit(t)}throwError(t){const n=new Error(t+" at character "+this.index);throw n.index=this.index,n.description=t,n}runHook(t,n){if(le.hooks[t]){const o={context:this,node:n};return le.hooks.run(t,o),o.node}return n}searchHook(t){if(le.hooks[t]){const n={context:this};return le.hooks[t].find(function(o){return o.call(n.context,n),n.node}),n.node}}gobbleSpaces(){let t=this.code;for(;t===le.SPACE_CODE||t===le.TAB_CODE||t===le.LF_CODE||t===le.CR_CODE;)t=this.expr.charCodeAt(++this.index);this.runHook("gobble-spaces")}parse(){this.runHook("before-all");const t=this.gobbleExpressions(),n=t.length===1?t[0]:{type:le.COMPOUND,body:t};return this.runHook("after-all",n)}gobbleExpressions(t){let n=[],o,a;for(;this.index<this.expr.length;)if(o=this.code,o===le.SEMCOL_CODE||o===le.COMMA_CODE)this.index++;else if(a=this.gobbleExpression())n.push(a);else if(this.index<this.expr.length){if(o===t)break;this.throwError('Unexpected "'+this.char+'"')}return n}gobbleExpression(){const t=this.searchHook("gobble-expression")||this.gobbleBinaryExpression();return this.gobbleSpaces(),this.runHook("after-expression",t)}gobbleBinaryOp(){this.gobbleSpaces();let t=this.expr.substr(this.index,le.max_binop_len),n=t.length;for(;n>0;){if(le.binary_ops.hasOwnProperty(t)&&(!le.isIdentifierStart(this.code)||this.index+t.length<this.expr.length&&!le.isIdentifierPart(this.expr.charCodeAt(this.index+t.length))))return this.index+=n,t;t=t.substr(0,--n)}return!1}gobbleBinaryExpression(){let t,n,o,a,i,s,l,c,u;if(s=this.gobbleToken(),!s||(n=this.gobbleBinaryOp(),!n))return s;for(i={value:n,prec:le.binaryPrecedence(n),right_a:le.right_associative.has(n)},l=this.gobbleToken(),l||this.throwError("Expected expression after "+n),a=[s,i,l];n=this.gobbleBinaryOp();){if(o=le.binaryPrecedence(n),o===0){this.index-=n.length;break}i={value:n,prec:o,right_a:le.right_associative.has(n)},u=n;const d=v=>i.right_a&&v.right_a?o>v.prec:o<=v.prec;for(;a.length>2&&d(a[a.length-2]);)l=a.pop(),n=a.pop().value,s=a.pop(),t={type:le.BINARY_EXP,operator:n,left:s,right:l},a.push(t);t=this.gobbleToken(),t||this.throwError("Expected expression after "+u),a.push(i,t)}for(c=a.length-1,t=a[c];c>1;)t={type:le.BINARY_EXP,operator:a[c-1].value,left:a[c-2],right:t},c-=2;return t}gobbleToken(){let t,n,o,a;if(this.gobbleSpaces(),a=this.searchHook("gobble-token"),a)return this.runHook("after-token",a);if(t=this.code,le.isDecimalDigit(t)||t===le.PERIOD_CODE)return this.gobbleNumericLiteral();if(t===le.SQUOTE_CODE||t===le.DQUOTE_CODE)a=this.gobbleStringLiteral();else if(t===le.OBRACK_CODE)a=this.gobbleArray();else{for(n=this.expr.substr(this.index,le.max_unop_len),o=n.length;o>0;){if(le.unary_ops.hasOwnProperty(n)&&(!le.isIdentifierStart(this.code)||this.index+n.length<this.expr.length&&!le.isIdentifierPart(this.expr.charCodeAt(this.index+n.length)))){this.index+=o;const i=this.gobbleToken();return i||this.throwError("missing unaryOp argument"),this.runHook("after-token",{type:le.UNARY_EXP,operator:n,argument:i,prefix:!0})}n=n.substr(0,--o)}le.isIdentifierStart(t)?(a=this.gobbleIdentifier(),le.literals.hasOwnProperty(a.name)?a={type:le.LITERAL,value:le.literals[a.name],raw:a.name}:a.name===le.this_str&&(a={type:le.THIS_EXP})):t===le.OPAREN_CODE&&(a=this.gobbleGroup())}return a?(a=this.gobbleTokenProperty(a),this.runHook("after-token",a)):this.runHook("after-token",!1)}gobbleTokenProperty(t){this.gobbleSpaces();let n=this.code;for(;n===le.PERIOD_CODE||n===le.OBRACK_CODE||n===le.OPAREN_CODE||n===le.QUMARK_CODE;){let o;if(n===le.QUMARK_CODE){if(this.expr.charCodeAt(this.index+1)!==le.PERIOD_CODE)break;o=!0,this.index+=2,this.gobbleSpaces(),n=this.code}this.index++,n===le.OBRACK_CODE?(t={type:le.MEMBER_EXP,computed:!0,object:t,property:this.gobbleExpression()},t.property||this.throwError('Unexpected "'+this.char+'"'),this.gobbleSpaces(),n=this.code,n!==le.CBRACK_CODE&&this.throwError("Unclosed ["),this.index++):n===le.OPAREN_CODE?t={type:le.CALL_EXP,arguments:this.gobbleArguments(le.CPAREN_CODE),callee:t}:(n===le.PERIOD_CODE||o)&&(o&&this.index--,this.gobbleSpaces(),t={type:le.MEMBER_EXP,computed:!1,object:t,property:this.gobbleIdentifier()}),o&&(t.optional=!0),this.gobbleSpaces(),n=this.code}return t}gobbleNumericLiteral(){let t="",n,o;for(;le.isDecimalDigit(this.code);)t+=this.expr.charAt(this.index++);if(this.code===le.PERIOD_CODE)for(t+=this.expr.charAt(this.index++);le.isDecimalDigit(this.code);)t+=this.expr.charAt(this.index++);if(n=this.char,n==="e"||n==="E"){for(t+=this.expr.charAt(this.index++),n=this.char,(n==="+"||n==="-")&&(t+=this.expr.charAt(this.index++));le.isDecimalDigit(this.code);)t+=this.expr.charAt(this.index++);le.isDecimalDigit(this.expr.charCodeAt(this.index-1))||this.throwError("Expected exponent ("+t+this.char+")")}return o=this.code,le.isIdentifierStart(o)?this.throwError("Variable names cannot start with a number ("+t+this.char+")"):(o===le.PERIOD_CODE||t.length===1&&t.charCodeAt(0)===le.PERIOD_CODE)&&this.throwError("Unexpected period"),{type:le.LITERAL,value:parseFloat(t),raw:t}}gobbleStringLiteral(){let t="";const n=this.index,o=this.expr.charAt(this.index++);let a=!1;for(;this.index<this.expr.length;){let i=this.expr.charAt(this.index++);if(i===o){a=!0;break}else if(i==="\\")switch(i=this.expr.charAt(this.index++),i){case"n":t+=`
`;break;case"r":t+="\r";break;case"t":t+="	";break;case"b":t+="\b";break;case"f":t+="\f";break;case"v":t+="\v";break;default:t+=i}else t+=i}return a||this.throwError('Unclosed quote after "'+t+'"'),{type:le.LITERAL,value:t,raw:this.expr.substring(n,this.index)}}gobbleIdentifier(){let t=this.code,n=this.index;for(le.isIdentifierStart(t)?this.index++:this.throwError("Unexpected "+this.char);this.index<this.expr.length&&(t=this.code,le.isIdentifierPart(t));)this.index++;return{type:le.IDENTIFIER,name:this.expr.slice(n,this.index)}}gobbleArguments(t){const n=[];let o=!1,a=0;for(;this.index<this.expr.length;){this.gobbleSpaces();let i=this.code;if(i===t){o=!0,this.index++,t===le.CPAREN_CODE&&a&&a>=n.length&&this.throwError("Unexpected token "+String.fromCharCode(t));break}else if(i===le.COMMA_CODE){if(this.index++,a++,a!==n.length){if(t===le.CPAREN_CODE)this.throwError("Unexpected token ,");else if(t===le.CBRACK_CODE)for(let s=n.length;s<a;s++)n.push(null)}}else if(n.length!==a&&a!==0)this.throwError("Expected comma");else{const s=this.gobbleExpression();(!s||s.type===le.COMPOUND)&&this.throwError("Expected comma"),n.push(s)}}return o||this.throwError("Expected "+String.fromCharCode(t)),n}gobbleGroup(){this.index++;let t=this.gobbleExpressions(le.CPAREN_CODE);if(this.code===le.CPAREN_CODE)return this.index++,t.length===1?t[0]:t.length?{type:le.SEQUENCE_EXP,expressions:t}:!1;this.throwError("Unclosed (")}gobbleArray(){return this.index++,{type:le.ARRAY_EXP,elements:this.gobbleArguments(le.CBRACK_CODE)}}}const _j=new Oj;Object.assign(le,{hooks:_j,plugins:new Ej(le),COMPOUND:"Compound",SEQUENCE_EXP:"SequenceExpression",IDENTIFIER:"Identifier",MEMBER_EXP:"MemberExpression",LITERAL:"Literal",THIS_EXP:"ThisExpression",CALL_EXP:"CallExpression",UNARY_EXP:"UnaryExpression",BINARY_EXP:"BinaryExpression",ARRAY_EXP:"ArrayExpression",TAB_CODE:9,LF_CODE:10,CR_CODE:13,SPACE_CODE:32,PERIOD_CODE:46,COMMA_CODE:44,SQUOTE_CODE:39,DQUOTE_CODE:34,OPAREN_CODE:40,CPAREN_CODE:41,OBRACK_CODE:91,CBRACK_CODE:93,QUMARK_CODE:63,SEMCOL_CODE:59,COLON_CODE:58,unary_ops:{"-":1,"!":1,"~":1,"+":1},binary_ops:{"||":1,"??":1,"&&":2,"|":3,"^":4,"&":5,"==":6,"!=":6,"===":6,"!==":6,"<":7,">":7,"<=":7,">=":7,"<<":8,">>":8,">>>":8,"+":9,"-":9,"*":10,"/":10,"%":10,"**":11},right_associative:new Set(["**"]),additional_identifier_chars:new Set(["$","_"]),literals:{true:!0,false:!1,null:null},this_str:"this"});le.max_unop_len=le.getMaxKeyLen(le.unary_ops);le.max_binop_len=le.getMaxKeyLen(le.binary_ops);const ki=e=>new le(e).parse(),Mj=Object.getOwnPropertyNames(class{});Object.getOwnPropertyNames(le).filter(e=>!Mj.includes(e)&&ki[e]===void 0).forEach(e=>{ki[e]=le[e]});ki.Jsep=le;const Aj="ConditionalExpression";var Tj={name:"ternary",init(e){e.hooks.add("after-expression",function(n){if(n.node&&this.code===e.QUMARK_CODE){this.index++;const o=n.node,a=this.gobbleExpression();if(a||this.throwError("Expected expression"),this.gobbleSpaces(),this.code===e.COLON_CODE){this.index++;const i=this.gobbleExpression();if(i||this.throwError("Expected expression"),n.node={type:Aj,test:o,consequent:a,alternate:i},o.operator&&e.binary_ops[o.operator]<=.9){let s=o;for(;s.right.operator&&e.binary_ops[s.right.operator]<=.9;)s=s.right;n.node.test=s.right,s.right=n.node,n.node=o}}else this.throwError("Expected :")}})}};ki.plugins.register(Tj);const cp=47,zj=92;var Rj={name:"regex",init(e){e.hooks.add("gobble-token",function(n){if(this.code===cp){const o=++this.index;let a=!1;for(;this.index<this.expr.length;){if(this.code===cp&&!a){const i=this.expr.slice(o,this.index);let s="";for(;++this.index<this.expr.length;){const c=this.code;if(c>=97&&c<=122||c>=65&&c<=90||c>=48&&c<=57)s+=this.char;else break}let l;try{l=new RegExp(i,s)}catch(c){this.throwError(c.message)}return n.node={type:e.LITERAL,value:l,raw:this.expr.slice(o-1,this.index)},n.node=this.gobbleTokenProperty(n.node),n.node}this.code===e.OBRACK_CODE?a=!0:a&&this.code===e.CBRACK_CODE&&(a=!1),this.index+=this.code===zj?2:1}this.throwError("Unclosed Regex")}})}};const gd=43,Pj=45,ws={name:"assignment",assignmentOperators:new Set(["=","*=","**=","/=","%=","+=","-=","<<=",">>=",">>>=","&=","^=","|=","||=","&&=","??="]),updateOperators:[gd,Pj],assignmentPrecedence:.9,init(e){const t=[e.IDENTIFIER,e.MEMBER_EXP];ws.assignmentOperators.forEach(o=>e.addBinaryOp(o,ws.assignmentPrecedence,!0)),e.hooks.add("gobble-token",function(a){const i=this.code;ws.updateOperators.some(s=>s===i&&s===this.expr.charCodeAt(this.index+1))&&(this.index+=2,a.node={type:"UpdateExpression",operator:i===gd?"++":"--",argument:this.gobbleTokenProperty(this.gobbleIdentifier()),prefix:!0},(!a.node.argument||!t.includes(a.node.argument.type))&&this.throwError(`Unexpected ${a.node.operator}`))}),e.hooks.add("after-token",function(a){if(a.node){const i=this.code;ws.updateOperators.some(s=>s===i&&s===this.expr.charCodeAt(this.index+1))&&(t.includes(a.node.type)||this.throwError(`Unexpected ${a.node.operator}`),this.index+=2,a.node={type:"UpdateExpression",operator:i===gd?"++":"--",argument:a.node,prefix:!1})}}),e.hooks.add("after-expression",function(a){a.node&&n(a.node)});function n(o){ws.assignmentOperators.has(o.operator)?(o.type="AssignmentExpression",n(o.left),n(o.right)):o.operator||Object.values(o).forEach(a=>{a&&typeof a=="object"&&n(a)})}}};ki.plugins.register(Rj,ws);ki.addUnaryOp("typeof");ki.addLiteral("null",null);ki.addLiteral("undefined",void 0);class up{constructor(t,n,o){this.from=t,this.to=n,this.diagnostic=o}}class Ui{constructor(t,n,o){this.diagnostics=t,this.panel=n,this.selected=o}static init(t,n,o){let a=t,i=o.facet(ca).markerFilter;i&&(a=i(a,o));let s=t.slice().sort((v,p)=>v.from-p.from||v.to-p.to),l=new Gv,c=[],u=0;for(let v=0;;){let p=v==s.length?null:s[v];if(!p&&!c.length)break;let b,m;for(c.length?(b=u,m=c.reduce((j,x)=>Math.min(j,x.to),p&&p.from>b?p.from:1e8)):(b=p.from,m=p.to,c.push(p),v++);v<s.length;){let j=s[v];if(j.from==b&&(j.to>j.from||j.to==b))c.push(j),v++,m=Math.min(j.to,m);else{m=Math.min(j.from,m);break}}let h=Fg(c);if(c.some(j=>j.from==j.to||j.from==j.to-1&&o.doc.lineAt(j.from).to==j.from))l.add(b,b,wi.widget({widget:new Wj(h),diagnostics:c.slice()}));else{let j=c.reduce((x,C)=>C.markClass?x+" "+C.markClass:x,"");l.add(b,m,wi.mark({class:"cm-lintRange cm-lintRange-"+h+j,diagnostics:c.slice(),inclusiveEnd:c.some(x=>x.to>m)}))}u=m;for(let j=0;j<c.length;j++)c[j].to<=u&&c.splice(j--,1)}let d=l.finish();return new Ui(d,n,Fs(d))}}function Fs(e,t=null,n=0){let o=null;return e.between(n,1e9,(a,i,{spec:s})=>{if(!(t&&s.diagnostics.indexOf(t)<0))if(!o)o=new up(a,i,t||s.diagnostics[0]);else{if(s.diagnostics.indexOf(o.diagnostic)<0)return!1;o=new up(o.from,i,o.diagnostic)}}),o}function Ig(e,t){let n=t.pos,o=t.end||n,a=e.state.facet(ca).hideOn(e,n,o);if(a!=null)return a;let i=e.startState.doc.lineAt(t.pos);return!!(e.effects.some(s=>s.is(Fu))||e.changes.touchesRange(i.from,Math.max(i.to,o)))}function qg(e,t){return e.field(Co,!1)?t:t.concat(oc.appendConfig.of(Hg))}function Nj(e,t){return{effects:qg(e,[Fu.of(t)])}}const Fu=oc.define(),rf=oc.define(),Dg=oc.define(),Co=Jv.define({create(){return new Ui(wi.none,null,null)},update(e,t){if(t.docChanged&&e.diagnostics.size){let n=e.diagnostics.map(t.changes),o=null,a=e.panel;if(e.selected){let i=t.changes.mapPos(e.selected.from,1);o=Fs(n,e.selected.diagnostic,i)||Fs(n,null,i)}!n.size&&a&&t.state.facet(ca).autoPanel&&(a=null),e=new Ui(n,a,o)}for(let n of t.effects)if(n.is(Fu)){let o=t.state.facet(ca).autoPanel?n.value.length?Dl.open:null:e.panel;e=Ui.init(n.value,o,t.state)}else n.is(rf)?e=new Ui(e.diagnostics,n.value?Dl.open:null,e.selected):n.is(Dg)&&(e=new Ui(e.diagnostics,e.panel,n.value));return e},provide:e=>[R1.from(e,t=>t.panel),Bo.decorations.from(e,t=>t.diagnostics)]}),$j=wi.mark({class:"cm-lintRange cm-lintRange-active"});function Ij(e,t,n){let{diagnostics:o}=e.state.field(Co),a,i=-1,s=-1;o.between(t-(n<0?1:0),t+(n>0?1:0),(c,u,{spec:d})=>{if(t>=c&&t<=u&&(c==u||(t>c||n>0)&&(t<u||n<0)))return a=d.diagnostics,i=c,s=u,!1});let l=e.state.facet(ca).tooltipFilter;return a&&l&&(a=l(a,e.state)),a?{pos:i,end:s,above:e.state.doc.lineAt(i).to<s,create(){return{dom:Ug(e,a)}}}:null}function Ug(e,t){return ia("ul",{class:"cm-tooltip-lint"},t.map(n=>Bg(e,n,!1)))}const qj=e=>{let t=e.state.field(Co,!1);(!t||!t.panel)&&e.dispatch({effects:qg(e.state,[rf.of(!0)])});let n=P1(e,Dl.open);return n&&n.dom.querySelector(".cm-panel-lint ul").focus(),!0},dp=e=>{let t=e.state.field(Co,!1);return!t||!t.panel?!1:(e.dispatch({effects:rf.of(!1)}),!0)},Dj=e=>{let t=e.state.field(Co,!1);if(!t)return!1;let n=e.state.selection.main,o=t.diagnostics.iter(n.to+1);return!o.value&&(o=t.diagnostics.iter(0),!o.value||o.from==n.from&&o.to==n.to)?!1:(e.dispatch({selection:{anchor:o.from,head:o.to},scrollIntoView:!0}),!0)},Uj=[{key:"Mod-Shift-m",run:qj,preventDefault:!0},{key:"F8",run:Dj}],Lj=Kv.fromClass(class{constructor(e){this.view=e,this.timeout=-1,this.set=!0;let{delay:t}=e.state.facet(ca);this.lintTime=Date.now()+t,this.run=this.run.bind(this),this.timeout=setTimeout(this.run,t)}run(){clearTimeout(this.timeout);let e=Date.now();if(e<this.lintTime-10)this.timeout=setTimeout(this.run,this.lintTime-e);else{this.set=!1;let{state:t}=this.view,{sources:n}=t.facet(ca);n.length&&Bj(n.map(o=>Promise.resolve(o(this.view))),o=>{this.view.state.doc==t.doc&&this.view.dispatch(Nj(this.view.state,o.reduce((a,i)=>a.concat(i))))},o=>{I1(this.view.state,o)})}}update(e){let t=e.state.facet(ca);(e.docChanged||t!=e.startState.facet(ca)||t.needsRefresh&&t.needsRefresh(e))&&(this.lintTime=Date.now()+t.delay,this.set||(this.set=!0,this.timeout=setTimeout(this.run,t.delay)))}force(){this.set&&(this.lintTime=Date.now(),this.run())}destroy(){clearTimeout(this.timeout)}});function Bj(e,t,n){let o=[],a=-1;for(let i of e)i.then(s=>{o.push(s),clearTimeout(a),o.length==e.length?t(o):a=setTimeout(()=>t(o),200)},n)}const ca=Yv.define({combine(e){return Object.assign({sources:e.map(t=>t.source).filter(t=>t!=null)},Qv(e.map(t=>t.config),{delay:750,markerFilter:null,tooltipFilter:null,needsRefresh:null,hideOn:()=>null},{needsRefresh:(t,n)=>t?n?o=>t(o)||n(o):t:n}))}});function Fj(e,t={}){return[ca.of({source:e,config:t}),Lj,Hg]}function Lg(e){let t=[];if(e)e:for(let{name:n}of e){for(let o=0;o<n.length;o++){let a=n[o];if(/[a-zA-Z]/.test(a)&&!t.some(i=>i.toLowerCase()==a.toLowerCase())){t.push(a);continue e}}t.push("")}return t}function Bg(e,t,n){var o;let a=n?Lg(t.actions):[];return ia("li",{class:"cm-diagnostic cm-diagnostic-"+t.severity},ia("span",{class:"cm-diagnosticText"},t.renderMessage?t.renderMessage(e):t.message),(o=t.actions)===null||o===void 0?void 0:o.map((i,s)=>{let l=!1,c=p=>{if(p.preventDefault(),l)return;l=!0;let b=Fs(e.state.field(Co).diagnostics,t);b&&i.apply(e,b.from,b.to)},{name:u}=i,d=a[s]?u.indexOf(a[s]):-1,v=d<0?u:[u.slice(0,d),ia("u",u.slice(d,d+1)),u.slice(d+1)];return ia("button",{type:"button",class:"cm-diagnosticAction",onclick:c,onmousedown:c,"aria-label":` Action: ${u}${d<0?"":` (access key "${a[s]})"`}.`},v)}),t.source&&ia("div",{class:"cm-diagnosticSource"},t.source))}class Wj extends q1{constructor(t){super(),this.sev=t}eq(t){return t.sev==this.sev}toDOM(){return ia("span",{class:"cm-lintPoint cm-lintPoint-"+this.sev})}}class vp{constructor(t,n){this.diagnostic=n,this.id="item_"+Math.floor(Math.random()*4294967295).toString(16),this.dom=Bg(t,n,!0),this.dom.id=this.id,this.dom.setAttribute("role","option")}}class Dl{constructor(t){this.view=t,this.items=[];let n=a=>{if(a.keyCode==27)dp(this.view),this.view.focus();else if(a.keyCode==38||a.keyCode==33)this.moveSelection((this.selectedIndex-1+this.items.length)%this.items.length);else if(a.keyCode==40||a.keyCode==34)this.moveSelection((this.selectedIndex+1)%this.items.length);else if(a.keyCode==36)this.moveSelection(0);else if(a.keyCode==35)this.moveSelection(this.items.length-1);else if(a.keyCode==13)this.view.focus();else if(a.keyCode>=65&&a.keyCode<=90&&this.selectedIndex>=0){let{diagnostic:i}=this.items[this.selectedIndex],s=Lg(i.actions);for(let l=0;l<s.length;l++)if(s[l].toUpperCase().charCodeAt(0)==a.keyCode){let c=Fs(this.view.state.field(Co).diagnostics,i);c&&i.actions[l].apply(t,c.from,c.to)}}else return;a.preventDefault()},o=a=>{for(let i=0;i<this.items.length;i++)this.items[i].dom.contains(a.target)&&this.moveSelection(i)};this.list=ia("ul",{tabIndex:0,role:"listbox","aria-label":this.view.state.phrase("Diagnostics"),onkeydown:n,onclick:o}),this.dom=ia("div",{class:"cm-panel-lint"},this.list,ia("button",{type:"button",name:"close","aria-label":this.view.state.phrase("close"),onclick:()=>dp(this.view)},"×")),this.update()}get selectedIndex(){let t=this.view.state.field(Co).selected;if(!t)return-1;for(let n=0;n<this.items.length;n++)if(this.items[n].diagnostic==t.diagnostic)return n;return-1}update(){let{diagnostics:t,selected:n}=this.view.state.field(Co),o=0,a=!1,i=null,s=new Set;for(t.between(0,this.view.state.doc.length,(l,c,{spec:u})=>{for(let d of u.diagnostics){if(s.has(d))continue;s.add(d);let v=-1,p;for(let b=o;b<this.items.length;b++)if(this.items[b].diagnostic==d){v=b;break}v<0?(p=new vp(this.view,d),this.items.splice(o,0,p),a=!0):(p=this.items[v],v>o&&(this.items.splice(o,v-o),a=!0)),n&&p.diagnostic==n.diagnostic?p.dom.hasAttribute("aria-selected")||(p.dom.setAttribute("aria-selected","true"),i=p):p.dom.hasAttribute("aria-selected")&&p.dom.removeAttribute("aria-selected"),o++}});o<this.items.length&&!(this.items.length==1&&this.items[0].diagnostic.from<0);)a=!0,this.items.pop();this.items.length==0&&(this.items.push(new vp(this.view,{from:-1,to:-1,severity:"info",message:this.view.state.phrase("No diagnostics")})),a=!0),i?(this.list.setAttribute("aria-activedescendant",i.id),this.view.requestMeasure({key:this,read:()=>({sel:i.dom.getBoundingClientRect(),panel:this.list.getBoundingClientRect()}),write:({sel:l,panel:c})=>{let u=c.height/this.list.offsetHeight;l.top<c.top?this.list.scrollTop-=(c.top-l.top)/u:l.bottom>c.bottom&&(this.list.scrollTop+=(l.bottom-c.bottom)/u)}})):this.selectedIndex<0&&this.list.removeAttribute("aria-activedescendant"),a&&this.sync()}sync(){let t=this.list.firstChild;function n(){let o=t;t=o.nextSibling,o.remove()}for(let o of this.items)if(o.dom.parentNode==this.list){for(;t!=o.dom;)n();t=o.dom.nextSibling}else this.list.insertBefore(o.dom,t);for(;t;)n()}moveSelection(t){if(this.selectedIndex<0)return;let n=this.view.state.field(Co),o=Fs(n.diagnostics,this.items[t].diagnostic);o&&this.view.dispatch({selection:{anchor:o.from,head:o.to},scrollIntoView:!0,effects:Dg.of(o)})}static open(t){return new Dl(t)}}function Jc(e,t='viewBox="0 0 40 40"'){return`url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" ${t}>${encodeURIComponent(e)}</svg>')`}function Oc(e){return Jc(`<path d="m0 2.5 l2 -1.5 l1 0 l2 1.5 l1 0" stroke="${e}" fill="none" stroke-width=".7"/>`,'width="6" height="3"')}const Vj=Bo.baseTheme({".cm-diagnostic":{padding:"3px 6px 3px 8px",marginLeft:"-1px",display:"block",whiteSpace:"pre-wrap"},".cm-diagnostic-error":{borderLeft:"5px solid #d11"},".cm-diagnostic-warning":{borderLeft:"5px solid orange"},".cm-diagnostic-info":{borderLeft:"5px solid #999"},".cm-diagnostic-hint":{borderLeft:"5px solid #66d"},".cm-diagnosticAction":{font:"inherit",border:"none",padding:"2px 4px",backgroundColor:"#444",color:"white",borderRadius:"3px",marginLeft:"8px",cursor:"pointer"},".cm-diagnosticSource":{fontSize:"70%",opacity:.7},".cm-lintRange":{backgroundPosition:"left bottom",backgroundRepeat:"repeat-x",paddingBottom:"0.7px"},".cm-lintRange-error":{backgroundImage:Oc("#d11")},".cm-lintRange-warning":{backgroundImage:Oc("orange")},".cm-lintRange-info":{backgroundImage:Oc("#999")},".cm-lintRange-hint":{backgroundImage:Oc("#66d")},".cm-lintRange-active":{backgroundColor:"#ffdd9980"},".cm-tooltip-lint":{padding:0,margin:0},".cm-lintPoint":{position:"relative","&:after":{content:'""',position:"absolute",bottom:0,left:"-2px",borderLeft:"3px solid transparent",borderRight:"3px solid transparent",borderBottom:"4px solid #d11"}},".cm-lintPoint-warning":{"&:after":{borderBottomColor:"orange"}},".cm-lintPoint-info":{"&:after":{borderBottomColor:"#999"}},".cm-lintPoint-hint":{"&:after":{borderBottomColor:"#66d"}},".cm-panel.cm-panel-lint":{position:"relative","& ul":{maxHeight:"100px",overflowY:"auto","& [aria-selected]":{backgroundColor:"#ddd","& u":{textDecoration:"underline"}},"&:focus [aria-selected]":{background_fallback:"#bdf",backgroundColor:"Highlight",color_fallback:"white",color:"HighlightText"},"& u":{textDecoration:"none"},padding:0,margin:0},"& [name=close]":{position:"absolute",top:"0",right:"2px",background:"inherit",border:"none",font:"inherit",padding:0,margin:0}}});function Hj(e){return e=="error"?4:e=="warning"?3:e=="info"?2:1}function Fg(e){let t="hint",n=1;for(let o of e){let a=Hj(o.severity);a>n&&(n=a,t=o.severity)}return t}class Wg extends D1{constructor(t){super(),this.diagnostics=t,this.severity=Fg(t)}toDOM(t){let n=document.createElement("div");n.className="cm-lint-marker cm-lint-marker-"+this.severity;let o=this.diagnostics,a=t.state.facet(Wu).tooltipFilter;return a&&(o=a(o,t.state)),o.length&&(n.onmouseover=()=>Kj(t,n,o)),n}}function Jj(e,t){let n=o=>{let a=t.getBoundingClientRect();if(!(o.clientX>a.left-10&&o.clientX<a.right+10&&o.clientY>a.top-10&&o.clientY<a.bottom+10)){for(let i=o.target;i;i=i.parentNode)if(i.nodeType==1&&i.classList.contains("cm-tooltip-lint"))return;window.removeEventListener("mousemove",n),e.state.field(Vg)&&e.dispatch({effects:of.of(null)})}};window.addEventListener("mousemove",n)}function Kj(e,t,n){function o(){let s=e.elementAtHeight(t.getBoundingClientRect().top+5-e.documentTop);e.coordsAtPos(s.from)&&e.dispatch({effects:of.of({pos:s.from,above:!1,clip:!1,create(){return{dom:Ug(e,n),getCoords:()=>t.getBoundingClientRect()}}})}),t.onmouseout=t.onmousemove=null,Jj(e,t)}let{hoverTime:a}=e.state.facet(Wu),i=setTimeout(o,a);t.onmouseout=()=>{clearTimeout(i),t.onmouseout=t.onmousemove=null},t.onmousemove=()=>{clearTimeout(i),i=setTimeout(o,a)}}function Yj(e,t){let n=Object.create(null);for(let a of t){let i=e.lineAt(a.from);(n[i.from]||(n[i.from]=[])).push(a)}let o=[];for(let a in n)o.push(new Wg(n[a]).range(+a));return xg.of(o,!0)}const Qj=N1({class:"cm-gutter-lint",markers:e=>e.state.field(tv),widgetMarker:(e,t,n)=>{let o=[];return e.state.field(tv).between(n.from,n.to,(a,i,s)=>{a>n.from&&a<n.to&&o.push(...s.diagnostics)}),o.length?new Wg(o):null}}),tv=Jv.define({create(){return xg.empty},update(e,t){e=e.map(t.changes);let n=t.state.facet(Wu).markerFilter;for(let o of t.effects)if(o.is(Fu)){let a=o.value;n&&(a=n(a||[],t.state)),e=Yj(t.state.doc,a.slice(0))}return e}}),of=oc.define(),Vg=Jv.define({create(){return null},update(e,t){return e&&t.docChanged&&(e=Ig(t,e)?null:Object.assign(Object.assign({},e),{pos:t.changes.mapPos(e.pos)})),t.effects.reduce((n,o)=>o.is(of)?o.value:n,e)},provide:e=>$1.from(e)}),Gj=Bo.baseTheme({".cm-gutter-lint":{width:"1.4em","& .cm-gutterElement":{padding:".2em"}},".cm-lint-marker":{width:"1em",height:"1em"},".cm-lint-marker-info":{content:Jc('<path fill="#aaf" stroke="#77e" stroke-width="6" stroke-linejoin="round" d="M5 5L35 5L35 35L5 35Z"/>')},".cm-lint-marker-warning":{content:Jc('<path fill="#fe8" stroke="#fd7" stroke-width="6" stroke-linejoin="round" d="M20 6L37 35L3 35Z"/>')},".cm-lint-marker-error":{content:Jc('<circle cx="20" cy="20" r="15" fill="#f87" stroke="#f43" stroke-width="6"/>')}}),Hg=[Co,Bo.decorations.compute([Co],e=>{let{selected:t,panel:n}=e.field(Co);return!t||!n||t.from==t.to?wi.none:wi.set([$j.range(t.from,t.to)])}),z1(Ij,{hideOn:Ig}),Vj],Wu=Yv.define({combine(e){return Qv(e,{hoverTime:300,markerFilter:null,tooltipFilter:null})}});function Xj(e={}){return[Wu.of(e),tv,Qj,Gj,Vg]}function Zj(e,t=e.state){const n=new Set;for(const{from:o,to:a}of e.visibleRanges){let i=o;for(;i<=a;){const s=t.doc.lineAt(i);n.has(s)||n.add(s),i=s.to+1}}return n}function nv(e){const t=e.selection.main.head;return e.doc.lineAt(t)}function fp(e,t){let n=0;e:for(let o=0;o<e.length;o++)switch(e[o]){case" ":case" ":{n+=1;continue e}case"	":{n+=t-n%t;continue e}case"\r":continue e;default:break e}return n}const vu=Yv.define({combine(e){return Qv(e,{highlightActiveBlock:!0,hideFirstIndent:!1,markerType:"fullScope",thickness:1})}});class ex{constructor(t,n,o,a){this.lines=t,this.state=n,this.map=new Map,this.unitWidth=o,this.markerType=a;for(const i of this.lines)this.add(i);this.state.facet(vu).highlightActiveBlock&&this.findAndSetActiveLines()}has(t){return this.map.has(typeof t=="number"?t:t.number)}get(t){const n=this.map.get(typeof t=="number"?t:t.number);if(!n)throw new Error("Line not found in indentation map");return n}set(t,n,o){const a=!t.text.trim().length,i={line:t,col:n,level:o,empty:a};return this.map.set(i.line.number,i),i}add(t){if(this.has(t))return this.get(t);if(!t.length||!t.text.trim().length){if(t.number===1)return this.set(t,0,0);if(t.number===this.state.doc.lines){const s=this.closestNonEmpty(t,-1);return this.set(t,0,s.level)}const a=this.closestNonEmpty(t,-1),i=this.closestNonEmpty(t,1);return a.level>=i.level&&this.markerType!=="codeOnly"?this.set(t,0,a.level):a.empty&&a.level===0&&i.level!==0?this.set(t,0,0):i.level>a.level?this.set(t,0,a.level+1):this.set(t,0,i.level)}const n=fp(t.text,this.state.tabSize),o=Math.floor(n/this.unitWidth);return this.set(t,n,o)}closestNonEmpty(t,n){let o=t.number+n;for(;n===-1?o>=1:o<=this.state.doc.lines;){if(this.has(o)){const s=this.get(o);if(!s.empty)return s}const i=this.state.doc.line(o);if(i.text.trim().length){const s=fp(i.text,this.state.tabSize),l=Math.floor(s/this.unitWidth);return this.set(i,s,l)}o+=n}const a=this.state.doc.line(n===-1?1:this.state.doc.lines);return this.set(a,0,0)}findAndSetActiveLines(){const t=nv(this.state);if(!this.has(t))return;let n=this.get(t);if(this.has(n.line.number+1)){const i=this.get(n.line.number+1);i.level>n.level&&(n=i)}if(this.has(n.line.number-1)){const i=this.get(n.line.number-1);i.level>n.level&&(n=i)}if(n.level===0)return;n.active=n.level;let o,a;for(o=n.line.number;o>1;o--){if(!this.has(o-1))continue;const i=this.get(o-1);if(i.level<n.level)break;i.active=n.level}for(a=n.line.number;a<this.state.doc.lines;a++){if(!this.has(a+1))continue;const i=this.get(a+1);if(i.level<n.level)break;i.active=n.level}}}function tx(e){const t={light:"#F0F1F2",dark:"#2B3245",activeLight:"#E4E5E6",activeDark:"#3C445C"};let n=t;return e&&(n=Object.assign(Object.assign({},t),e)),Bo.baseTheme({"&light":{"--indent-marker-bg-color":n.light,"--indent-marker-active-bg-color":n.activeLight},"&dark":{"--indent-marker-bg-color":n.dark,"--indent-marker-active-bg-color":n.activeDark},".cm-line":{position:"relative"},".cm-indent-markers::before":{content:'""',position:"absolute",top:0,left:"2px",right:0,bottom:0,background:"var(--indent-markers)",pointerEvents:"none",zIndex:"-1"}})}function Ec(e,t,n,o,a){return`${`repeating-linear-gradient(to right, var(${e}) 0 ${t}px, transparent ${t}px ${n}ch)`} ${o*n}.5ch/calc(${n*a}ch - 1px) no-repeat`}function nx(e,t,n,o,a){const{level:i,active:s}=e;if(a=a??o,n&&i===0)return[];const l=n?1:0,c=[];if(s!==void 0){const u=s-l-1;u>0&&c.push(Ec("--indent-marker-bg-color",o,t,l,u)),c.push(Ec("--indent-marker-active-bg-color",a,t,s-1,1)),s!==i&&c.push(Ec("--indent-marker-bg-color",o,t,s,i-s))}else c.push(Ec("--indent-marker-bg-color",o,t,l,i-l));return c.join(",")}class rx{constructor(t){this.view=t,this.unitWidth=uu(t.state),this.currentLineNumber=nv(t.state).number,this.generate(t.state)}update(t){const n=uu(t.state),o=n!==this.unitWidth;o&&(this.unitWidth=n);const a=nv(t.state).number,i=a!==this.currentLineNumber;this.currentLineNumber=a;const s=t.state.facet(vu).highlightActiveBlock&&i;(t.docChanged||t.viewportChanged||o||s)&&this.generate(t.state)}generate(t){const n=new Gv,o=Zj(this.view,t),{hideFirstIndent:a,markerType:i,thickness:s,activeThickness:l}=t.facet(vu),c=new ex(o,t,this.unitWidth,i);for(const u of o){const d=c.get(u.number);if(!d?.level)continue;const v=nx(d,this.unitWidth,a,s,l);n.add(u.from,u.from,wi.line({class:"cm-indent-markers",attributes:{style:`--indent-markers: ${v}`}}))}this.decorations=n.finish()}}function ox(e={}){return[vu.of(e),tx(e.colors),Kv.fromClass(rx,{decorations:t=>t.decorations})]}var ax=["mainAxis","crossAxis","fallbackPlacements","fallbackStrategy","fallbackAxisSideDirection","flipAlignment"],ix=["mainAxis","crossAxis","limiter"];function Jg(e,t){if(e==null)return{};var n,o,a=function(s,l){if(s==null)return{};var c={};for(var u in s)if({}.hasOwnProperty.call(s,u)){if(l.indexOf(u)!==-1)continue;c[u]=s[u]}return c}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)===-1&&{}.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}function pp(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter(function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable})),n.push.apply(n,o)}return n}function Ae(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?pp(Object(n),!0).forEach(function(o){sa(e,o,n[o])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):pp(Object(n)).forEach(function(o){Object.defineProperty(e,o,Object.getOwnPropertyDescriptor(n,o))})}return e}function hp(e,t,n,o,a,i,s){try{var l=e[i](s),c=l.value}catch(u){return void n(u)}l.done?t(c):Promise.resolve(c).then(o,a)}function mt(e){return function(){var t=this,n=arguments;return new Promise(function(o,a){var i=e.apply(t,n);function s(c){hp(i,o,a,s,l,"next",c)}function l(c){hp(i,o,a,s,l,"throw",c)}s(void 0)})}}function Kg(e,t){Yg(e,t),t.add(e)}function Bn(e,t,n){Yg(e,t),t.set(e,n)}function Yg(e,t){if(t.has(e))throw new TypeError("Cannot initialize the same private elements twice on an object")}function pn(e,t,n){return e.set(Ir(e,t),n),n}function Ee(e,t){return e.get(Ir(e,t))}function Ir(e,t,n){if(typeof e=="function"?e===t:e.has(t))return arguments.length<3?t:n;throw new TypeError("Private element is not present on this object")}function sa(e,t,n){return(t=function(o){var a=function(i,s){if(typeof i!="object"||!i)return i;var l=i[Symbol.toPrimitive];if(l!==void 0){var c=l.call(i,s||"default");if(typeof c!="object")return c;throw new TypeError("@@toPrimitive must return a primitive value.")}return(s==="string"?String:Number)(i)}(o,"string");return typeof a=="symbol"?a:a+""}(t))in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var gp,md,mp,bd;typeof window<"u"&&((md=(gp=(bd=(mp=window).__svelte)!==null&&bd!==void 0?bd:mp.__svelte={}).v)!==null&&md!==void 0?md:gp.v=new Set).add("5");var nl=!1;nl=!0;var Xr=Symbol(),sx=!1,ic=Array.isArray,lx=Array.prototype.indexOf,Kc=Array.from,cx=Object.defineProperty,qa=Object.getOwnPropertyDescriptor,Qg=Object.getOwnPropertyDescriptors,ux=Object.prototype,dx=Array.prototype,af=Object.getPrototypeOf,bp=Object.isExtensible;function jl(e){return typeof e=="function"}var vx=()=>{};function fx(e){return e()}function rv(e){for(var t=0;t<e.length;t++)e[t]()}function Gg(){var e,t;return{promise:new Promise((n,o)=>{e=n,t=o}),resolve:e,reject:t}}var px=1<<24,rl=16,Vu=32,Xg=64,sf=128,Zo=512,Zr=1024,ea=2048,Wa=4096,va=8192,ol=16384,lf=32768,Qi=65536,hx=1<<17,Zg=1<<18,em=1<<19,Ea=1<<25,fu=32768,ov=1<<21,hi=1<<23,fa=Symbol("$state"),tm=Symbol("legacy props"),gx=Symbol(""),Os=new class extends Error{constructor(){super(...arguments),sa(this,"name","StaleReactionError"),sa(this,"message","The reaction that called `getAbortSignal()` was re-run or destroyed")}};function sc(e){throw new Error("https://svelte.dev/e/lifecycle_outside_component")}function nm(e){return e===this.v}function rm(e,t){return e!=e?t==t:e!==t||e!==null&&typeof e=="object"||typeof e=="function"}function om(e){return!rm(e,this.v)}var Dn=null;function Ws(e){Dn=e}function Ei(e){return am().get(e)}function lt(e){Dn={p:Dn,i:!1,c:null,e:null,s:e,x:null,l:nl&&!(arguments.length>1&&arguments[1]!==void 0&&arguments[1])?{s:null,u:null,$:[]}:null}}function ct(e){var t=Dn,n=t.e;if(n!==null)for(var o of(t.e=null,n))wm(o);return e!==void 0&&(t.x=e),t.i=!0,Dn=t.p,e??{}}function al(){return!nl||Dn!==null&&Dn.l===null}function am(e){var t,n;return Dn===null&&sc(),(n=(t=Dn).c)!==null&&n!==void 0?n:t.c=new Map(function(o){for(var a=o.p;a!==null;){var i=a.c;if(i!==null)return i;a=a.p}return null}(Dn)||void 0)}var Bi=[];function im(){var e=Bi;Bi=[],rv(e)}function Gi(e){if(Bi.length===0&&!Rl){var t=Bi;queueMicrotask(()=>{t===Bi&&im()})}Bi.push(e)}function mx(){for(;Bi.length>0;)im()}function sm(e){var t=Mn;if(t===null)return _n.f|=hi,e;if(t.f&lf)Vs(e,t);else{if(!(t.f&sf))throw e;t.b.error(e)}}function Vs(e,t){for(;t!==null;){if(t.f&sf)try{return void t.b.error(e)}catch(n){e=n}t=t.parent}throw e}var Yc=new Set,Yn=null,zl=null,Po=null,zo=[],Hu=null,av=!1,Rl=!1,pu=new WeakMap,_c=new WeakMap,Ii=new WeakMap,qi=new WeakMap,Mc=new WeakMap,Qc=new WeakMap,Gc=new WeakMap,jo=new WeakSet;let Ul=class iv{constructor(){Kg(this,jo),sa(this,"committed",!1),sa(this,"current",new Map),sa(this,"previous",new Map),Bn(this,pu,new Set),Bn(this,_c,new Set),Bn(this,Ii,0),Bn(this,qi,0),Bn(this,Mc,null),Bn(this,Qc,[]),Bn(this,Gc,[]),sa(this,"skipped_effects",new Set),sa(this,"is_fork",!1)}is_deferred(){return this.is_fork||Ee(qi,this)>0}process(t){zo=[],zl=null,this.apply();var n,o={parent:null,effect:null,effects:[],render_effects:[],block_effects:[]};for(var a of t)Ir(jo,this,lm).call(this,a,o);this.is_fork||Ir(jo,this,bx).call(this),this.is_deferred()?(Ir(jo,this,Ns).call(this,o.effects),Ir(jo,this,Ns).call(this,o.render_effects),Ir(jo,this,Ns).call(this,o.block_effects)):(zl=this,Yn=null,yp(o.render_effects),yp(o.effects),zl=null,(n=Ee(Mc,this))===null||n===void 0||n.resolve()),Po=null}capture(t,n){var o;this.previous.has(t)||this.previous.set(t,n),!(t.f&hi)&&(this.current.set(t,t.v),(o=Po)===null||o===void 0||o.set(t,t.v))}activate(){Yn=this,this.apply()}deactivate(){Yn===this&&(Yn=null,Po=null)}flush(){if(this.activate(),zo.length>0){if(um(),Yn!==null&&Yn!==this)return}else Ee(Ii,this)===0&&this.process([]);this.deactivate()}discard(){for(var t of Ee(_c,this))t(this);Ee(_c,this).clear()}increment(t){pn(Ii,this,Ee(Ii,this)+1),t&&pn(qi,this,Ee(qi,this)+1)}decrement(t){pn(Ii,this,Ee(Ii,this)-1),t&&pn(qi,this,Ee(qi,this)-1),this.revive()}revive(){for(var t of Ee(Qc,this))to(t,ea),Xi(t);for(var n of Ee(Gc,this))to(n,Wa),Xi(n);pn(Qc,this,[]),pn(Gc,this,[]),this.flush()}oncommit(t){Ee(pu,this).add(t)}ondiscard(t){Ee(_c,this).add(t)}settled(){var t;return((t=Ee(Mc,this))!==null&&t!==void 0?t:pn(Mc,this,Gg())).promise}static ensure(){if(Yn===null){var t=Yn=new iv;Yc.add(Yn),Rl||iv.enqueue(()=>{Yn===t&&t.flush()})}return Yn}static enqueue(t){Gi(t)}apply(){}};function lm(e,t){e.f^=Zr;for(var n=e.first;n!==null;){var o,a=n.f,i=!!(96&a),s=i&&(a&Zr)!==0||(a&va)!==0||this.skipped_effects.has(n);if(n.f&sf&&(o=n.b)!==null&&o!==void 0&&o.is_pending()&&(t={parent:t,effect:n,effects:[],render_effects:[],block_effects:[]}),!s&&n.fn!==null){i?n.f^=Zr:4&a?t.effects.push(n):ll(n)&&(n.f&rl&&t.block_effects.push(n),Ks(n));var l=n.first;if(l!==null){n=l;continue}}var c=n.parent;for(n=n.next;n===null&&c!==null;)c===t.effect&&(Ir(jo,this,Ns).call(this,t.effects),Ir(jo,this,Ns).call(this,t.render_effects),Ir(jo,this,Ns).call(this,t.block_effects),t=t.parent),n=c.next,c=c.parent}}function Ns(e){for(var t of e)(t.f&ea?Ee(Qc,this):Ee(Gc,this)).push(t),Ir(jo,this,cm).call(this,t.deps),to(t,Zr)}function cm(e){if(e!==null)for(var t of e)2&t.f&&t.f&fu&&(t.f^=fu,Ir(jo,this,cm).call(this,t.deps))}function bx(){if(Ee(qi,this)===0){for(var e of Ee(pu,this))e();Ee(pu,this).clear()}Ee(Ii,this)===0&&Ir(jo,this,yx).call(this)}function yx(){if(Yc.size>1){this.previous.clear();var e=Po,t=!0,n={parent:null,effect:null,effects:[],render_effects:[],block_effects:[]};for(var o of Yc)if(o!==this){var a=[];for(var[i,s]of this.current){if(o.current.has(i)){if(!t||s===o.current.get(i))continue;o.current.set(i,s)}a.push(i)}if(a.length!==0){var l=[...o.current.keys()].filter(b=>!this.current.has(b));if(l.length>0){var c=zo;zo=[];var u=new Set,d=new Map;for(var v of a)dm(v,l,u,d);if(zo.length>0){for(var p of(Yn=o,o.apply(),zo))Ir(jo,o,lm).call(o,p,n);o.deactivate()}zo=c}}}else t=!1;Yn=null,Po=e}this.committed=!0,Yc.delete(this)}function Vn(e){var t=Rl;Rl=!0;try{for(;;){var n;if(mx(),zo.length===0&&((n=Yn)===null||n===void 0||n.flush(),zo.length===0))return void(Hu=null);um()}}finally{Rl=t}}function um(){var e=Vi;av=!0;try{var t=0;for(hu(!0);zo.length>0;){var n=Ul.ensure();t++>1e3&&jx(),n.process(zo),gi.clear()}}finally{av=!1,hu(e),Hu=null}}function jx(){try{(function(){throw new Error("https://svelte.dev/e/effect_update_depth_exceeded")})()}catch(e){Vs(e,Hu)}}var Ma=null;function yp(e){var t=e.length;if(t!==0){for(var n=0;n<t;){var o,a=e[n++];if(!(24576&a.f)&&ll(a)&&(Ma=new Set,Ks(a),a.deps===null&&a.first===null&&a.nodes===null&&(a.teardown===null&&a.ac===null?Em(a):a.fn=null),((o=Ma)===null||o===void 0?void 0:o.size)>0)){for(var i of(gi.clear(),Ma))if(!(24576&i.f)){for(var s=[i],l=i.parent;l!==null;)Ma.has(l)&&(Ma.delete(l),s.push(l)),l=l.parent;for(var c=s.length-1;c>=0;c--){var u=s[c];24576&u.f||Ks(u)}}Ma.clear()}}Ma=null}}function dm(e,t,n,o){if(!n.has(e)&&(n.add(e),e.reactions!==null))for(var a of e.reactions){var i=a.f;2&i?dm(a,t,n,o):4194320&i&&!(i&ea)&&vm(a,t,o)&&(to(a,ea),Xi(a))}}function vm(e,t,n){var o=n.get(e);if(o!==void 0)return o;if(e.deps!==null)for(var a of e.deps){if(t.includes(a))return!0;if(2&a.f&&vm(a,t,n))return n.set(a,!0),!0}return n.set(e,!1),!1}function Xi(e){for(var t=Hu=e;t.parent!==null;){var n=(t=t.parent).f;if(av&&t===Mn&&n&rl&&!(n&Zg))return;if(96&n){if(!(n&Zr))return;t.f^=Zr}}zo.push(t)}var oi=new WeakMap,di=new WeakMap,xx=new WeakMap,Di=new WeakMap,yd=new WeakMap,li=new WeakMap,ai=new WeakMap,za=new WeakMap,Ga=new WeakMap,Wi=new WeakMap,$s=new WeakMap,fs=new WeakMap,Is=new WeakMap,xl=new WeakMap,ps=new WeakMap,jp=new WeakMap,ei=new WeakSet;let wx=class{constructor(t,n,o){var a,i,s,l;Kg(this,ei),sa(this,"parent",void 0),Bn(this,oi,!1),Bn(this,di,void 0),Bn(this,xx,null),Bn(this,Di,void 0),Bn(this,yd,void 0),Bn(this,li,void 0),Bn(this,ai,null),Bn(this,za,null),Bn(this,Ga,null),Bn(this,Wi,null),Bn(this,$s,null),Bn(this,fs,0),Bn(this,Is,0),Bn(this,xl,!1),Bn(this,ps,null),Bn(this,jp,(a=()=>(pn(ps,this,Va(Ee(fs,this))),()=>{pn(ps,this,null)}),s=0,l=Va(0),()=>{Ll()&&(r(l),il(()=>(s===0&&(i=D(()=>a(()=>Pl(l)))),s+=1,()=>{Gi(()=>{var c;(s-=1)==0&&((c=i)===null||c===void 0||c(),i=void 0,Pl(l))})})))})),pn(di,this,t),pn(Di,this,n),pn(yd,this,o),this.parent=Mn.b,pn(oi,this,!!Ee(Di,this).pending),pn(li,this,sl(()=>{Mn.b=this;var c=Ir(ei,this,kx).call(this);try{pn(ai,this,pa(()=>o(c)))}catch(u){this.error(u)}return Ee(Is,this)>0?Ir(ei,this,wp).call(this):pn(oi,this,!1),()=>{var u;(u=Ee($s,this))===null||u===void 0||u.remove()}},589952))}is_pending(){return Ee(oi,this)||!!this.parent&&this.parent.is_pending()}has_pending_snippet(){return!!Ee(Di,this).pending}update_pending_count(t){Ir(ei,this,fm).call(this,t),pn(fs,this,Ee(fs,this)+t),Ee(ps,this)&&Hs(Ee(ps,this),Ee(fs,this))}get_effect_pending(){return Ee(jp,this).call(this),r(Ee(ps,this))}error(t){var n=Ee(Di,this).onerror,o=Ee(Di,this).failed;if(Ee(xl,this)||!n&&!o)throw t;Ee(ai,this)&&(eo(Ee(ai,this)),pn(ai,this,null)),Ee(za,this)&&(eo(Ee(za,this)),pn(za,this,null)),Ee(Ga,this)&&(eo(Ee(Ga,this)),pn(Ga,this,null));var a=!1,i=!1,s=()=>{a?console.warn("https://svelte.dev/e/svelte_boundary_reset_noop"):(a=!0,i&&function(){throw new Error("https://svelte.dev/e/svelte_boundary_reset_onerror")}(),Ul.ensure(),pn(fs,this,0),Ee(Ga,this)!==null&&Js(Ee(Ga,this),()=>{pn(Ga,this,null)}),pn(oi,this,this.has_pending_snippet()),pn(ai,this,Ir(ei,this,xp).call(this,()=>(pn(xl,this,!1),pa(()=>Ee(yd,this).call(this,Ee(di,this)))))),Ee(Is,this)>0?Ir(ei,this,wp).call(this):pn(oi,this,!1))},l=_n;try{po(null),i=!0,n?.(t,s),i=!1}catch(c){Vs(c,Ee(li,this)&&Ee(li,this).parent)}finally{po(l)}o&&Gi(()=>{pn(Ga,this,Ir(ei,this,xp).call(this,()=>{Ul.ensure(),pn(xl,this,!0);try{return pa(()=>{o(Ee(di,this),()=>t,()=>s)})}catch(c){return Vs(c,Ee(li,this).parent),null}finally{pn(xl,this,!1)}}))})}};function kx(){var e=Ee(di,this);return Ee(oi,this)&&(pn($s,this,mi()),Ee(di,this).before(Ee($s,this)),e=Ee($s,this)),e}function xp(e){var t=Mn,n=_n,o=Dn;$o(Ee(li,this)),po(Ee(li,this)),Ws(Ee(li,this).ctx);try{return e()}catch(a){return sm(a),null}finally{$o(t),po(n),Ws(o)}}function wp(){var e=Ee(Di,this).pending;Ee(ai,this)!==null&&(pn(Wi,this,document.createDocumentFragment()),Ee(Wi,this).append(Ee($s,this)),Am(Ee(ai,this),Ee(Wi,this))),Ee(za,this)===null&&pn(za,this,pa(()=>e(Ee(di,this))))}function fm(e){var t;this.has_pending_snippet()?(pn(Is,this,Ee(Is,this)+e),Ee(Is,this)===0&&(pn(oi,this,!1),Ee(za,this)&&Js(Ee(za,this),()=>{pn(za,this,null)}),Ee(Wi,this)&&(Ee(di,this).before(Ee(Wi,this)),pn(Wi,this,null)))):this.parent&&Ir(ei,t=this.parent,fm).call(t,e)}function pm(e,t,n,o){var a=al()?lc:Ze;if(n.length!==0||e.length!==0){var i=Yn,s=Mn,l=function(){var u=Mn,d=_n,v=Dn,p=Yn;return function(){var b=!(arguments.length>0&&arguments[0]!==void 0)||arguments[0];$o(u),po(d),Ws(v),b&&p?.activate()}}();e.length>0?Promise.all(e).then(()=>{l();try{return c()}finally{i?.deactivate(),Ac()}}):c()}else o(t.map(a));function c(){Promise.all(n.map(u=>function(d){var v=Mn;v===null&&function(){throw new Error("https://svelte.dev/e/async_derived_orphan")}();var p=v.b,b=void 0,m=Va(Xr),h=!_n,j=new Map;return function(x){na(4718592,x,!0)}(()=>{var x=Gg();b=x.promise;try{Promise.resolve(d()).then(x.resolve,x.reject).then(()=>{C===Yn&&C.committed&&C.deactivate(),Ac()})}catch(z){x.reject(z),Ac()}var C=Yn;if(h){var A,O=!p.is_pending();p.update_pending_count(1),C.increment(O),(A=j.get(C))===null||A===void 0||A.reject(Os),j.delete(C),j.set(C,x)}var w=function(z){var R=arguments.length>1&&arguments[1]!==void 0?arguments[1]:void 0;if(C.activate(),R)R!==Os&&(m.f|=hi,Hs(m,R));else for(var[Y,E]of(m.f&hi&&(m.f^=hi),Hs(m,z),j)){if(j.delete(Y),Y===C)break;E.reject(Os)}h&&(p.update_pending_count(-1),C.decrement(O))};x.promise.then(w,z=>w(null,z||"unknown"))}),Ku(()=>{for(var x of j.values())x.reject(Os)}),new Promise(x=>{function C(A){function O(){A===b?x(m):C(b)}A.then(O,O)}C(b)})}(u))).then(u=>{l();try{o([...t.map(a),...u])}catch(d){!(s.f&ol)&&Vs(d,s)}i?.deactivate(),Ac()}).catch(u=>{Vs(u,s)})}}function Ac(){$o(null),po(null),Ws(null)}function lc(e){var t=_n!==null&&2&_n.f?_n:null;return Mn!==null&&(Mn.f|=em),{ctx:Dn,deps:null,effects:null,equals:nm,f:2050,fn:e,reactions:null,rv:0,v:Xr,wv:0,parent:t??Mn,ac:null}}function vo(e){var t=lc(e);return Tm(t),t}function Ze(e){var t=lc(e);return t.equals=om,t}function hm(e){var t=e.effects;if(t!==null){e.effects=null;for(var n=0;n<t.length;n+=1)eo(t[n])}}function cf(e){var t,n=Mn;$o(function(o){for(var a=o.parent;a!==null;){if(!(2&a.f))return a.f&ol?null:a;a=a.parent}return null}(e));try{e.f&=-32769,hm(e),t=Nm(e)}finally{$o(n)}return t}function gm(e){var t,n,o=cf(e);e.equals(o)||((t=Yn)!==null&&t!==void 0&&t.is_fork||(e.v=o),e.wv=Rm()),is||(Po!==null?(Ll()||(n=Yn)!==null&&n!==void 0&&n.is_fork)&&Po.set(e,o):to(e,e.f&Zo?Zr:Wa))}var Da,mm,bm,ym,jd=new Set,gi=new Map,kp=!1;function Va(e,t){return{f:0,v:e,reactions:null,equals:nm,rv:0,wv:0}}function _a(e,t){var n=Va(e);return Tm(n),n}function $(e){var t,n,o=arguments.length>1&&arguments[1]!==void 0&&arguments[1],a=!(arguments.length>2&&arguments[2]!==void 0)||arguments[2],i=Va(e);return o||(i.equals=om),nl&&a&&Dn!==null&&Dn.l!==null&&((n=(t=Dn.l).s)!==null&&n!==void 0?n:t.s=[]).push(i),i}function wo(e,t){return f(e,D(()=>r(e))),t}function f(e,t){var n,o=arguments.length>2&&arguments[2]!==void 0&&arguments[2];return _n===null||ua&&!(_n.f&hx)||!al()||!(4325394&_n.f)||(n=Ua)!==null&&n!==void 0&&n.includes(e)||function(){throw new Error("https://svelte.dev/e/state_unsafe_mutation")}(),Hs(e,o?Es(t):t)}function Hs(e,t){if(!e.equals(t)){var n=e.v;is?gi.set(e,t):gi.set(e,n),e.v=t;var o=Ul.ensure();o.capture(e,n),2&e.f&&(e.f&ea&&cf(e),to(e,e.f&Zo?Zr:Wa)),e.wv=Rm(),jm(e,ea),!al()||Mn===null||!(Mn.f&Zr)||96&Mn.f||(_o===null?function(a){_o=a}([e]):_o.push(e)),!o.is_fork&&jd.size>0&&!kp&&function(){kp=!1;var a=Vi;hu(!0);var i=Array.from(jd);try{for(var s of i)s.f&Zr&&to(s,Wa),ll(s)&&Ks(s)}finally{hu(a)}jd.clear()}()}return t}function Cp(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:1,n=r(e),o=t===1?n++:n--;return f(e,n),o}function Pl(e){f(e,e.v+1)}function jm(e,t){var n=e.reactions;if(n!==null)for(var o=al(),a=n.length,i=0;i<a;i++){var s=n[i],l=s.f;if(o||s!==Mn){var c=(l&ea)===0;if(c&&to(s,t),2&l){var u,d=s;(u=Po)===null||u===void 0||u.delete(d),!(l&fu)&&(l&Zo&&(s.f|=fu),jm(d,Wa))}else c&&(l&rl&&Ma!==null&&Ma.add(s),Xi(s))}}}function Es(e){if(typeof e!="object"||e===null||fa in e)return e;var t=af(e);if(t!==ux&&t!==dx)return e;var n=new Map,o=ic(e),a=_a(0),i=Hi,s=l=>{if(Hi===i)return l();var c=_n,u=Hi;po(null),_p(i);var d=l();return po(c),_p(u),d};return o&&n.set("length",_a(e.length)),new Proxy(e,{defineProperty(l,c,u){"value"in u&&u.configurable!==!1&&u.enumerable!==!1&&u.writable!==!1||function(){throw new Error("https://svelte.dev/e/state_descriptors_fixed")}();var d=n.get(c);return d===void 0?d=s(()=>{var v=_a(u.value);return n.set(c,v),v}):f(d,u.value,!0),!0},deleteProperty(l,c){var u=n.get(c);if(u===void 0){if(c in l){var d=s(()=>_a(Xr));n.set(c,d),Pl(a)}}else f(u,Xr),Pl(a);return!0},get(l,c,u){var d;if(c===fa)return e;var v=n.get(c),p=c in l;if(v===void 0&&(!p||(d=qa(l,c))!==null&&d!==void 0&&d.writable)&&(v=s(()=>_a(Es(p?l[c]:Xr))),n.set(c,v)),v!==void 0){var b=r(v);return b===Xr?void 0:b}return Reflect.get(l,c,u)},getOwnPropertyDescriptor(l,c){var u=Reflect.getOwnPropertyDescriptor(l,c);if(u&&"value"in u){var d=n.get(c);d&&(u.value=r(d))}else if(u===void 0){var v=n.get(c),p=v?.v;if(v!==void 0&&p!==Xr)return{enumerable:!0,configurable:!0,value:p,writable:!0}}return u},has(l,c){var u;if(c===fa)return!0;var d=n.get(c),v=d!==void 0&&d.v!==Xr||Reflect.has(l,c);return(d!==void 0||Mn!==null&&(!v||(u=qa(l,c))!==null&&u!==void 0&&u.writable))&&(d===void 0&&(d=s(()=>_a(v?Es(l[c]):Xr)),n.set(c,d)),r(d)===Xr)?!1:v},set(l,c,u,d){var v,p=n.get(c),b=c in l;if(o&&c==="length")for(var m=u;m<p.v;m+=1){var h=n.get(m+"");h!==void 0?f(h,Xr):m in l&&(h=s(()=>_a(Xr)),n.set(m+"",h))}p===void 0?(!b||(v=qa(l,c))!==null&&v!==void 0&&v.writable)&&(f(p=s(()=>_a(void 0)),Es(u)),n.set(c,p)):(b=p.v!==Xr,f(p,s(()=>Es(u))));var j=Reflect.getOwnPropertyDescriptor(l,c);if(j!=null&&j.set&&j.set.call(d,u),!b){if(o&&typeof c=="string"){var x=n.get("length"),C=Number(c);Number.isInteger(C)&&C>=x.v&&f(x,C+1)}Pl(a)}return!0},ownKeys(l){r(a);var c=Reflect.ownKeys(l).filter(v=>{var p=n.get(v);return p===void 0||p.v!==Xr});for(var[u,d]of n)d.v===Xr||u in l||c.push(u);return c},setPrototypeOf(){(function(){throw new Error("https://svelte.dev/e/state_prototype_fixed")})()}})}function Sp(e){try{if(e!==null&&typeof e=="object"&&fa in e)return e[fa]}catch{}return e}function Cx(e,t){return Object.is(Sp(e),Sp(t))}function mi(){var e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:"";return document.createTextNode(e)}function ko(e){return bm.call(e)}function cc(e){return ym.call(e)}function N(e,t){return ko(e)}function Xe(e){var t=ko(e);return t instanceof Comment&&t.data===""?cc(t):t}function W(e){for(var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:1,n=e;t--;)n=cc(n);return n}var Op=!1;function Ju(e){var t=_n,n=Mn;po(null),$o(null);try{return e()}finally{po(t),$o(n)}}function Sx(e,t,n){var o=arguments.length>3&&arguments[3]!==void 0?arguments[3]:n;e.addEventListener(t,()=>Ju(n));var a=e.__on_r;e.__on_r=a?()=>{a(),o(!0)}:()=>o(!0),Op||(Op=!0,document.addEventListener("reset",i=>{Promise.resolve().then(()=>{if(!i.defaultPrevented)for(var s of i.target.elements){var l;(l=s.__on_r)===null||l===void 0||l.call(s)}})},{capture:!0}))}function xm(e){Mn===null&&(_n===null&&function(){throw new Error("https://svelte.dev/e/effect_orphan")}(),function(){throw new Error("https://svelte.dev/e/effect_in_unowned_derived")}()),is&&function(){throw new Error("https://svelte.dev/e/effect_in_teardown")}()}function na(e,t,n){var o=Mn;o!==null&&o.f&va&&(e|=va);var a={ctx:Dn,deps:null,nodes:null,f:e|ea|Zo,first:null,fn:t,last:null,next:null,parent:o,b:o&&o.b,prev:null,teardown:null,wv:0,ac:null};if(n)try{Ks(a),a.f|=lf}catch(c){throw eo(a),c}else t!==null&&Xi(a);var i=a;if(n&&i.deps===null&&i.teardown===null&&i.nodes===null&&i.first===i.last&&!(i.f&em)&&(i=i.first,e&rl&&e&Qi&&i!==null&&(i.f|=Qi)),i!==null&&(i.parent=o,o!==null&&function(c,u){var d=u.last;d===null?u.last=u.first=c:(d.next=c,c.prev=d,u.last=c)}(i,o),_n!==null&&2&_n.f&&(e&Xg)===0)){var s,l=_n;((s=l.effects)!==null&&s!==void 0?s:l.effects=[]).push(i)}return a}function Ll(){return _n!==null&&!ua}function Ku(e){var t=na(8,null,!1);return to(t,Zr),t.teardown=e,t}function sv(e){xm();var t=Mn.f;if(!(!_n&&t&Vu&&!(t&lf)))return wm(e);var n,o=Dn;((n=o.e)!==null&&n!==void 0?n:o.e=[]).push(e)}function wm(e){return na(1048580,e,!1)}function Kr(e){return na(4,e,!1)}function Z(e,t){var n={effect:null,ran:!1,deps:e};Dn.l.$.push(n),n.effect=il(()=>{e(),n.ran||(n.ran=!0,D(t))})}function jn(){var e=Dn;il(()=>{for(var t of e.l.$){t.deps();var n=t.effect;n.f&Zr&&to(n,Wa),ll(n)&&Ks(n),t.ran=!1}})}function il(e){return na(8|(arguments.length>1&&arguments[1]!==void 0?arguments[1]:0),e,!0)}function ze(e){pm(arguments.length>3&&arguments[3]!==void 0?arguments[3]:[],arguments.length>1&&arguments[1]!==void 0?arguments[1]:[],arguments.length>2&&arguments[2]!==void 0?arguments[2]:[],t=>{na(8,()=>e(...t.map(r)),!0)})}function sl(e){return na(rl|(arguments.length>1&&arguments[1]!==void 0?arguments[1]:0),e,!0)}function km(e){return na(px|(arguments.length>1&&arguments[1]!==void 0?arguments[1]:0),e,!0)}function pa(e){return na(524320,e,!0)}function Cm(e){var t=e.teardown;if(t!==null){var n=is,o=_n;Ep(!0),po(null);try{t.call(null)}finally{Ep(n),po(o)}}}function Sm(e){var t=arguments.length>1&&arguments[1]!==void 0&&arguments[1],n=e.first;e.first=e.last=null;for(var o,a=function(){var i=n.ac;i!==null&&Ju(()=>{i.abort(Os)}),o=n.next,n.f&Xg?n.parent=null:eo(n,t),n=o};n!==null;)a()}function eo(e){var t=!(arguments.length>1&&arguments[1]!==void 0)||arguments[1],n=!1;!t&&!(e.f&Zg)||e.nodes===null||e.nodes.end===null||(Om(e.nodes.start,e.nodes.end),n=!0),Sm(e,t&&!n),gu(e,0),to(e,ol);var o=e.nodes&&e.nodes.t;if(o!==null)for(var a of o)a.stop();Cm(e);var i=e.parent;i!==null&&i.first!==null&&Em(e),e.next=e.prev=e.teardown=e.ctx=e.deps=e.fn=e.nodes=e.ac=null}function Om(e,t){for(;e!==null;){var n=e===t?null:cc(e);e.remove(),e=n}}function Em(e){var t=e.parent,n=e.prev,o=e.next;n!==null&&(n.next=o),o!==null&&(o.prev=n),t!==null&&(t.first===e&&(t.first=o),t.last===e&&(t.last=n))}function Js(e,t){var n=!(arguments.length>2&&arguments[2]!==void 0)||arguments[2],o=[];_m(e,o,!0);var a=()=>{n&&eo(e),t&&t()},i=o.length;if(i>0){var s=()=>--i||a();for(var l of o)l.out(s)}else a()}function _m(e,t,n){if(!(e.f&va)){e.f^=va;var o=e.nodes&&e.nodes.t;if(o!==null)for(var a of o)(a.is_global||n)&&t.push(a);for(var i=e.first;i!==null;){var s=i.next;_m(i,t,!!(i.f&Qi||i.f&Vu&&e.f&rl)&&n),i=s}}}function lv(e){Mm(e,!0)}function Mm(e,t){if(e.f&va){e.f^=va,!(e.f&Zr)&&(to(e,ea),Xi(e));for(var n=e.first;n!==null;){var o=n.next;Mm(n,!!(n.f&Qi||n.f&Vu)&&t),n=o}var a=e.nodes&&e.nodes.t;if(a!==null)for(var i of a)(i.is_global||t)&&i.in()}}function Am(e,t){if(e.nodes)for(var n=e.nodes.start,o=e.nodes.end;n!==null;){var a=n===o?null:cc(n);t.append(n),n=a}}var Ox=null,Vi=!1;function hu(e){Vi=e}var is=!1;function Ep(e){is=e}var _n=null,ua=!1;function po(e){_n=e}var Mn=null;function $o(e){Mn=e}var Ua=null;function Tm(e){_n!==null&&(Ua===null?Ua=[e]:Ua.push(e))}var so=null,yo=0,_o=null,zm=1,Bl=0,Hi=Bl;function _p(e){Hi=e}function Rm(){return++zm}function ll(e){var t=e.f;if(t&ea)return!0;if(2&t&&(e.f&=-32769),(t&Wa)!==0){var n=e.deps;if(n!==null)for(var o=n.length,a=0;a<o;a++){var i=n[a];if(ll(i)&&gm(i),i.wv>e.wv)return!0}t&Zo&&Po===null&&to(e,Zr)}return!1}function Pm(e,t){var n,o=!(arguments.length>2&&arguments[2]!==void 0)||arguments[2],a=e.reactions;if(a!==null&&((n=Ua)===null||n===void 0||!n.includes(e)))for(var i=0;i<a.length;i++){var s=a[i];2&s.f?Pm(s,t,!1):t===s&&(o?to(s,ea):s.f&Zr&&to(s,Wa),Xi(s))}}function Nm(e){var t=so,n=yo,o=_o,a=_n,i=Ua,s=Dn,l=ua,c=Hi,u=e.f;so=null,yo=0,_o=null,_n=96&u?null:e,Ua=null,Ws(e.ctx),ua=!1,Hi=++Bl,e.ac!==null&&(Ju(()=>{e.ac.abort(Os)}),e.ac=null);try{e.f|=ov;var d=(0,e.fn)(),v=e.deps;if(so!==null){var p;if(gu(e,yo),v!==null&&yo>0)for(v.length=yo+so.length,p=0;p<so.length;p++)v[yo+p]=so[p];else e.deps=v=so;if(Ll()&&e.f&Zo)for(p=yo;p<v.length;p++){var b,m;((m=(b=v[p]).reactions)!==null&&m!==void 0?m:b.reactions=[]).push(e)}}else v!==null&&yo<v.length&&(gu(e,yo),v.length=yo);if(al()&&_o!==null&&!ua&&v!==null&&!(6146&e.f))for(p=0;p<_o.length;p++)Pm(_o[p],e);return a!==null&&a!==e&&(Bl++,_o!==null&&(o===null?o=_o:o.push(..._o))),e.f&hi&&(e.f^=hi),d}catch(h){return sm(h)}finally{e.f^=ov,so=t,yo=n,_o=o,_n=a,Ua=i,Ws(s),ua=l,Hi=c}}function Ex(e,t){var n=t.reactions;if(n!==null){var o=lx.call(n,e);if(o!==-1){var a=n.length-1;a===0?n=t.reactions=null:(n[o]=n[a],n.pop())}}n===null&&2&t.f&&(so===null||!so.includes(t))&&(to(t,Wa),t.f&Zo&&(t.f^=Zo,t.f&=-32769),hm(t),gu(t,0))}function gu(e,t){var n=e.deps;if(n!==null)for(var o=t;o<n.length;o++)Ex(e,n[o])}function Ks(e){var t=e.f;if(!(t&ol)){to(e,Zr);var n=Mn,o=Vi;Mn=e,Vi=!0;try{16777232&t?function(i){for(var s=i.first;s!==null;){var l=s.next;!(s.f&Vu)&&eo(s),s=l}}(e):Sm(e),Cm(e);var a=Nm(e);e.teardown=typeof a=="function"?a:null,e.wv=zm}finally{Vi=o,Mn=n}}}function $m(){return Im.apply(this,arguments)}function Im(){return(Im=mt(function*(){yield Promise.resolve(),Vn()})).apply(this,arguments)}function r(e){var t,n,o,a,i,s=!!(2&e.f);if((t=Ox)===null||t===void 0||t.add(e),_n!==null&&!ua&&!(Mn!==null&&Mn.f&ol||(i=Ua)!==null&&i!==void 0&&i.includes(e))){var l=_n.deps;if(_n.f&ov)e.rv<Bl&&(e.rv=Bl,so===null&&l!==null&&l[yo]===e?yo++:so===null?so=[e]:so.includes(e)||so.push(e));else{var c,u;((u=(c=_n).deps)!==null&&u!==void 0?u:c.deps=[]).push(e);var d=e.reactions;d===null?e.reactions=[_n]:d.includes(_n)||d.push(_n)}}if(is){if(gi.has(e))return gi.get(e);if(s){var v=e,p=v.v;return(!(v.f&Zr)&&v.reactions!==null||Dm(v))&&(p=cf(v)),gi.set(v,p),p}}else s&&((n=Po)===null||n===void 0||!n.has(e)||(o=Yn)!==null&&o!==void 0&&o.is_fork&&!Ll())&&(ll(v=e)&&gm(v),Vi&&Ll()&&!(v.f&Zo)&&qm(v));if((a=Po)!==null&&a!==void 0&&a.has(e))return Po.get(e);if(e.f&hi)throw e.v;return e.v}function qm(e){if(e.deps!==null)for(var t of(e.f^=Zo,e.deps)){var n;((n=t.reactions)!==null&&n!==void 0?n:t.reactions=[]).push(e),2&t.f&&!(t.f&Zo)&&qm(t)}}function Dm(e){if(e.v===Xr)return!0;if(e.deps===null)return!1;for(var t of e.deps)if(gi.has(t)||2&t.f&&Dm(t))return!0;return!1}function D(e){var t=ua;try{return ua=!0,e()}finally{ua=t}}var _x=-7169;function to(e,t){e.f=e.f&_x|t}function y(e){if(typeof e=="object"&&e&&!(e instanceof EventTarget)){if(fa in e)cv(e);else if(!Array.isArray(e))for(var t in e){var n=e[t];typeof n=="object"&&n&&fa in n&&cv(n)}}}function cv(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:new Set;if(!(typeof e!="object"||e===null||e instanceof EventTarget||t.has(e))){for(var n in t.add(e),e instanceof Date&&e.getTime(),e)try{cv(e[n],t)}catch{}var o=af(e);if(o!==Object.prototype&&o!==Array.prototype&&o!==Map.prototype&&o!==Set.prototype&&o!==Date.prototype){var a=Qg(o);for(var i in a){var s=a[i].get;if(s)try{s.call(e)}catch{}}}}}var Um=new Set,uv=new Set;function Lm(e,t,n){var o=arguments.length>3&&arguments[3]!==void 0?arguments[3]:{};function a(i){if(o.capture||_l.call(t,i),!i.cancelBubble)return Ju(()=>n?.call(this,i))}return e.startsWith("pointer")||e.startsWith("touch")||e==="wheel"?Gi(()=>{t.addEventListener(e,a,o)}):t.addEventListener(e,a,o),a}function Ce(e,t,n,o,a){var i={capture:o,passive:a},s=Lm(e,t,n,i);(t===document.body||t===window||t===document||t instanceof HTMLMediaElement)&&Ku(()=>{t.removeEventListener(e,s,i)})}function uc(e){for(var t=0;t<e.length;t++)Um.add(e[t]);for(var n of uv)n(e)}function _l(e){var t,n=this,o=n.ownerDocument,a=e.type,i=((t=e.composedPath)===null||t===void 0?void 0:t.call(e))||[],s=i[0]||e.target,l=0,c=e===e&&e.__root;if(c){var u=i.indexOf(c);if(u!==-1&&(n===document||n===window))return void(e.__root=n);var d=i.indexOf(n);if(d===-1)return;u<=d&&(l=u)}if((s=i[l]||e.target)!==n){cx(e,"currentTarget",{configurable:!0,get:()=>s||o});var v=_n,p=Mn;po(null),$o(null);try{for(var b,m=[];s!==null;){var h=s.assignedSlot||s.parentNode||s.host||null;try{var j=s["__"+a];j==null||s.disabled&&e.target!==s||j.call(s,e)}catch(A){b?m.push(A):b=A}if(e.cancelBubble||h===n||h===null)break;s=h}if(b){var x=function(A){queueMicrotask(()=>{throw A})};for(var C of m)x(C);throw b}}finally{e.__root=n,delete e.currentTarget,po(v),$o(p)}}}function uf(e){var t=document.createElement("template");return t.innerHTML=e.replaceAll("<!>","<!---->"),t.content}function Zi(e,t){var n=Mn;n.nodes===null&&(n.nodes={start:e,end:t,a:null,t:null})}function te(e,t){var n,o=!!(1&t),a=!!(2&t),i=!e.startsWith("<!>");return()=>{n===void 0&&(n=uf(i?e:"<!>"+e),o||(n=ko(n)));var s=a||mm?document.importNode(n,!0):n.cloneNode(!0);return o?Zi(ko(s),s.lastChild):Zi(s,s),s}}function _i(e,t){return function(n,o){var a,i=arguments.length>2&&arguments[2]!==void 0?arguments[2]:"svg",s=!n.startsWith("<!>"),l=!!(1&o),c="<".concat(i,">").concat(s?n:"<!>"+n,"</").concat(i,">");return()=>{if(!a){var u=ko(uf(c));if(l)for(a=document.createDocumentFragment();ko(u);)a.appendChild(ko(u));else a=ko(u)}var d=a.cloneNode(!0);return l?Zi(ko(d),d.lastChild):Zi(d,d),d}}(e,t,"svg")}function Wr(){var e=mi((arguments.length>0&&arguments[0]!==void 0?arguments[0]:"")+"");return Zi(e,e),e}function Ut(){var e=document.createDocumentFragment(),t=document.createComment(""),n=mi();return e.append(t,n),Zi(t,n),e}function P(e,t){e!==null&&e.before(t)}var Mx=["beforeinput","click","change","dblclick","contextmenu","focusin","focusout","input","keydown","keyup","mousedown","mousemove","mouseout","mouseover","mouseup","pointerdown","pointermove","pointerout","pointerover","pointerup","touchend","touchmove","touchstart"],Ax={formnovalidate:"formNoValidate",ismap:"isMap",nomodule:"noModule",playsinline:"playsInline",readonly:"readOnly",defaultvalue:"defaultValue",defaultchecked:"defaultChecked",srcobject:"srcObject",novalidate:"noValidate",allowfullscreen:"allowFullscreen",disablepictureinpicture:"disablePictureInPicture",disableremoteplayback:"disableRemotePlayback"},Tx=["touchstart","touchmove"];function zx(e){return Tx.includes(e)}function ut(e,t){var n,o=t==null?"":typeof t=="object"?t+"":t;o!==((n=e.__t)!==null&&n!==void 0?n:e.__t=e.nodeValue)&&(e.__t=o,e.nodeValue=o+"")}function Rx(e,t){return function(n,o){var{target:a,anchor:i,props:s={},events:l,context:c,intro:u=!0}=o;(function(){if(Da===void 0){Da=window,mm=/Firefox/.test(navigator.userAgent);var m=Element.prototype,h=Node.prototype,j=Text.prototype;bm=qa(h,"firstChild").get,ym=qa(h,"nextSibling").get,bp(m)&&(m.__click=void 0,m.__className=void 0,m.__attributes=null,m.__style=void 0,m.__e=void 0),bp(j)&&(j.__t=void 0)}})();var d=new Set,v=m=>{for(var h=0;h<m.length;h++){var j=m[h];if(!d.has(j)){d.add(j);var x=zx(j);a.addEventListener(j,_l,{passive:x});var C=hs.get(j);C===void 0?(document.addEventListener(j,_l,{passive:x}),hs.set(j,1)):hs.set(j,C+1)}}};v(Kc(Um)),uv.add(v);var p=void 0,b=function(m){Ul.ensure();var h=na(524352,m,!0);return function(){var j=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};return new Promise(x=>{j.outro?Js(h,()=>{eo(h),x(void 0)}):(eo(h),x(void 0))})}}(()=>{var m=i??a.appendChild(mi());return function(h,j,x){new wx(h,j,x)}(m,{pending:()=>{}},h=>{c&&(lt({}),Dn.c=c),l&&(s.$$events=l),p=n(h,s)||{},c&&ct()}),()=>{for(var h of d){a.removeEventListener(h,_l);var j=hs.get(h);--j===0?(document.removeEventListener(h,_l),hs.delete(h)):hs.set(h,j)}var x;uv.delete(v),m!==i&&((x=m.parentNode)===null||x===void 0||x.removeChild(m))}});return dv.set(p,b),p}(e,t)}var hs=new Map,dv=new WeakMap,gs,Sa=new WeakMap,Pi=new WeakMap,Oa=new WeakMap,wl=new WeakMap,xd=new WeakMap,Mp=new WeakMap,Px=new WeakMap;let Yu=class{constructor(t){var n=this,o=!(arguments.length>1&&arguments[1]!==void 0)||arguments[1];sa(this,"anchor",void 0),Bn(this,Sa,new Map),Bn(this,Pi,new Map),Bn(this,Oa,new Map),Bn(this,wl,new Set),Bn(this,xd,!0),Bn(this,Mp,()=>{var a=Yn;if(Ee(Sa,this).has(a)){var i=Ee(Sa,this).get(a),s=Ee(Pi,this).get(i);if(s)lv(s),Ee(wl,this).delete(i);else{var l=Ee(Oa,this).get(i);l&&(Ee(Pi,this).set(i,l.effect),Ee(Oa,this).delete(i),l.fragment.lastChild.remove(),this.anchor.before(l.fragment),s=l.effect)}for(var[c,u]of Ee(Sa,this)){if(Ee(Sa,this).delete(c),c===a)break;var d=Ee(Oa,this).get(u);d&&(eo(d.effect),Ee(Oa,this).delete(u))}var v=function(m,h){if(m===i||Ee(wl,n).has(m))return 1;var j=()=>{if(Array.from(Ee(Sa,n).values()).includes(m)){var x=document.createDocumentFragment();Am(h,x),x.append(mi()),Ee(Oa,n).set(m,{effect:h,fragment:x})}else eo(h);Ee(wl,n).delete(m),Ee(Pi,n).delete(m)};Ee(xd,n)||!s?(Ee(wl,n).add(m),Js(h,j,!1)):j()};for(var[p,b]of Ee(Pi,this))v(p,b)}}),Bn(this,Px,a=>{Ee(Sa,this).delete(a);var i=Array.from(Ee(Sa,this).values());for(var[s,l]of Ee(Oa,this))i.includes(s)||(eo(l.effect),Ee(Oa,this).delete(s))}),this.anchor=t,pn(xd,this,o)}ensure(t,n){var o=Yn;!n||Ee(Pi,this).has(t)||Ee(Oa,this).has(t)||Ee(Pi,this).set(t,pa(()=>n(this.anchor))),Ee(Sa,this).set(o,t),Ee(Mp,this).call(this)}};function no(e){Dn===null&&sc(),nl&&Dn.l!==null?Bm(Dn).m.push(e):sv(()=>{var t=D(e);if(typeof t=="function")return t})}function Io(e){Dn===null&&sc(),no(()=>()=>D(e))}function Nx(){var e=Dn;return e===null&&sc(),(t,n,o)=>{var a,i=(a=e.s.$$events)===null||a===void 0?void 0:a[t];if(i){var s=ic(i)?i.slice():[i],l=function(u,d){var{bubbles:v=!1,cancelable:p=!1}=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{};return new CustomEvent(u,{detail:d,bubbles:v,cancelable:p})}(t,n,o);for(var c of s)c.call(e.x,l);return!l.defaultPrevented}return!0}}function $x(e){Dn===null&&sc(),Dn.l===null&&function(){throw new Error("https://svelte.dev/e/lifecycle_legacy_only")}(),Bm(Dn).b.push(e)}function Bm(e){var t,n=e.l;return(t=n.u)!==null&&t!==void 0?t:n.u={a:[],b:[],m:[]}}function ie(e,t){var n=arguments.length>2&&arguments[2]!==void 0&&arguments[2],o=new Yu(e);function a(i,s){o.ensure(i,s)}sl(()=>{var i=!1;t(function(s){i=!0,a(!(arguments.length>1&&arguments[1]!==void 0)||arguments[1],s)}),i||a(!1,null)},n?Qi:0)}function Fm(e,t,n){var o=new Yu(e),a=!al();sl(()=>{var i=t();a&&i!==null&&typeof i=="object"&&(i={}),o.ensure(i,n)})}function Cr(e,t){return t}function wd(e){for(var t=!(arguments.length>1&&arguments[1]!==void 0)||arguments[1],n=0;n<e.length;n++)eo(e[n],t)}function fr(e,t,n,o,a){var i=arguments.length>5&&arguments[5]!==void 0?arguments[5]:null,s=e,l=new Map;!(4&t)||(s=e.appendChild(mi()));var c,u=null,d=Ze(()=>{var h=n();return ic(h)?h:h==null?[]:Kc(h)}),v=!0;function p(){m.fallback=u,function(h,j,x,C,A){var O,w,z,R,Y,E=!!(8&C),K=j.length,J=h.items,U=h.effect.first,ae=null,ge=[],se=[];if(E)for(Y=0;Y<K;Y+=1){var Te;z=A(j[Y],Y),!((R=J.get(z).e).f&Ea)&&((Te=R.nodes)===null||Te===void 0||(Te=Te.a)===null||Te===void 0||Te.measure(),(w??(w=new Set)).add(R))}for(Y=0;Y<K;Y+=1){if(z=A(j[Y],Y),R=J.get(z).e,h.outrogroups!==null)for(var De of h.outrogroups)De.pending.delete(R),De.done.delete(R);if(R.f&Ea){if(R.f^=Ea,R!==U){var Le=ae?ae.next:U;R===h.effect.last&&(h.effect.last=R.prev),R.prev&&(R.prev.next=R.next),R.next&&(R.next.prev=R.prev),Xa(h,ae,R),Xa(h,R,Le),kl(R,Le,x),ge=[],se=[],U=(ae=R).next;continue}kl(R,null,x)}var je;if(R.f&va&&(lv(R),E&&((je=R.nodes)===null||je===void 0||(je=je.a)===null||je===void 0||je.unfix(),(w??(w=new Set)).delete(R))),R!==U){if(O!==void 0&&O.has(R)){if(ge.length<se.length){var Oe,Pe=se[0];ae=Pe.prev;var ot=ge[0],xe=ge[ge.length-1];for(Oe=0;Oe<ge.length;Oe+=1)kl(ge[Oe],Pe,x);for(Oe=0;Oe<se.length;Oe+=1)O.delete(se[Oe]);Xa(h,ot.prev,xe.next),Xa(h,ae,ot),Xa(h,xe,Pe),U=Pe,ae=xe,Y-=1,ge=[],se=[]}else O.delete(R),kl(R,U,x),Xa(h,R.prev,R.next),Xa(h,R,ae===null?h.effect.first:ae.next),Xa(h,ae,R),ae=R;continue}for(ge=[],se=[];U!==null&&U!==R;)(O??(O=new Set)).add(U),se.push(U),U=U.next;if(U===null)continue}!(R.f&Ea)&&ge.push(R),ae=R,U=R.next}if(h.outrogroups!==null){for(var ue of h.outrogroups){var we;ue.pending.size===0&&(wd(Kc(ue.done)),(we=h.outrogroups)===null||we===void 0||we.delete(ue))}h.outrogroups.size===0&&(h.outrogroups=null)}if(U!==null||O!==void 0){var ft=[];if(O!==void 0)for(R of O)!(R.f&va)&&ft.push(R);for(;U!==null;)!(U.f&va)&&U!==h.fallback&&ft.push(U),U=U.next;var Jt=ft.length;if(Jt>0){var pe=4&C&&K===0?x:null;if(E){for(Y=0;Y<Jt;Y+=1){var V;(V=ft[Y].nodes)===null||V===void 0||(V=V.a)===null||V===void 0||V.measure()}for(Y=0;Y<Jt;Y+=1){var he;(he=ft[Y].nodes)===null||he===void 0||(he=he.a)===null||he===void 0||he.fix()}}(function(L,de,Q){for(var Ne,ne=de.length,B=de.length,bt=function(){var pt=de[st];Js(pt,()=>{if(Ne){if(Ne.pending.delete(pt),Ne.done.add(pt),Ne.pending.size===0){var Ue=L.outrogroups;wd(Kc(Ne.done)),Ue.delete(Ne),Ue.size===0&&(L.outrogroups=null)}}else B-=1},!1)},st=0;st<ne;st++)bt();if(B===0){var Se=Q!==null;if(Se){var xt=Q,Fe=xt.parentNode;Fe.textContent="",Fe.append(xt),L.items.clear()}wd(de,!Se)}else{var He;Ne={pending:new Set(de),done:new Set},((He=L.outrogroups)!==null&&He!==void 0?He:L.outrogroups=new Set).add(Ne)}})(h,ft,pe)}}E&&Gi(()=>{if(w!==void 0)for(R of w){var L;(L=R.nodes)===null||L===void 0||(L=L.a)===null||L===void 0||L.apply()}})}(m,c,s,t,o),u!==null&&(c.length===0?u.f&Ea?(u.f^=Ea,kl(u,null,s)):lv(u):Js(u,()=>{u=null}))}var b=sl(()=>{for(var h=(c=r(d)).length,j=new Set,x=0;x<h;x+=1){var C=c[x],A=o(C,x),O=v?null:l.get(A);O?(O.v&&Hs(O.v,C),O.i&&Hs(O.i,x)):(O=Ix(l,v?s:gs??(gs=mi()),C,A,x,a,t,n),v||(O.e.f|=Ea),l.set(A,O)),j.add(A)}h===0&&i&&!u&&(v?u=pa(()=>i(s)):(u=pa(()=>i(gs??(gs=mi())))).f|=Ea),v||p(),r(d)}),m={effect:b,items:l,outrogroups:null,fallback:u};v=!1}function Ix(e,t,n,o,a,i,s,l){var c=1&s?16&s?Va(n):$(n,!1,!1):null,u=2&s?Va(a):null;return{v:c,i:u,e:pa(()=>(i(t,c??n,u??a,l),()=>{e.delete(o)}))}}function kl(e,t,n){if(e.nodes)for(var o=e.nodes.start,a=e.nodes.end,i=t&&!(t.f&Ea)?t.nodes.start:n;o!==null;){var s=cc(o);if(i.before(o),o===a)return;o=s}}function Xa(e,t,n){t===null?e.effect.first=n:t.next=n,n===null?e.effect.last=t:n.prev=t}function Wm(e,t){var n=arguments.length>2&&arguments[2]!==void 0&&arguments[2],o=arguments.length>3&&arguments[3]!==void 0&&arguments[3],a=e,i="";ze(()=>{var s,l=Mn;if(i!==(i=(s=t())!==null&&s!==void 0?s:"")&&(l.nodes!==null&&(Om(l.nodes.start,l.nodes.end),l.nodes=null),i!=="")){var c=i+"";n?c="<svg>".concat(c,"</svg>"):o&&(c="<math>".concat(c,"</math>"));var u=uf(c);if((n||o)&&(u=ko(u)),Zi(ko(u),u.lastChild),n||o)for(;ko(u);)a.before(ko(u));else a.before(u)}})}function dr(e,t,n,o,a){var i,s=(i=t.$$slots)===null||i===void 0?void 0:i[n],l=!1;s===!0&&(s=t[n==="default"?"children":n],l=!0),s===void 0?a!==null&&a(e):s(e,l?()=>o:o)}function Vm(e,t,n){var o=new Yu(e);sl(()=>{var a,i=(a=t())!==null&&a!==void 0?a:null;o.ensure(i,i&&(s=>n(s,i)))},Qi)}function io(e,t,n){Kr(()=>{var o=D(()=>t(e,n?.())||{});if(n&&o!=null&&o.update){var a=!1,i={};il(()=>{var s=n();y(s),a&&rm(i,s)&&(i=s,o.update(s))}),a=!0}if(o!=null&&o.destroy)return()=>o.destroy()})}function qx(e,t){var n,o=void 0;km(()=>{o!==(o=t())&&(n&&(eo(n),n=null),o&&(n=pa(()=>{Kr(()=>o(e))})))})}function Hm(e){var t,n,o="";if(typeof e=="string"||typeof e=="number")o+=e;else if(typeof e=="object")if(Array.isArray(e)){var a=e.length;for(t=0;t<a;t++)e[t]&&(n=Hm(e[t]))&&(o&&(o+=" "),o+=n)}else for(n in e)e[n]&&(o&&(o+=" "),o+=n);return o}function Ci(e){return typeof e=="object"?function(){for(var t,n,o=0,a="",i=arguments.length;o<i;o++)(t=arguments[o])&&(n=Hm(t))&&(a&&(a+=" "),a+=n);return a}(e):e??""}var Ap=[...` 	
\r\f \v\uFEFF`];function Tp(e){var t=arguments.length>1&&arguments[1]!==void 0&&arguments[1]?" !important;":";",n="";for(var o in e){var a=e[o];a!=null&&a!==""&&(n+=" "+o+": "+a+t)}return n}function kd(e){return e[0]!=="-"||e[1]!=="-"?e.toLowerCase():e}function Mt(e,t,n,o,a,i){var s=e.__className;if(s!==n||s===void 0){var l=function(d,v,p){var b=d==null?"":""+d;if(v&&(b=b?b+" "+v:v),p){for(var m in p)if(p[m])b=b?b+" "+m:m;else if(b.length)for(var h=m.length,j=0;(j=b.indexOf(m,j))>=0;){var x=j+h;j!==0&&!Ap.includes(b[j-1])||x!==b.length&&!Ap.includes(b[x])?j=x:b=(j===0?"":b.substring(0,j))+b.substring(x+1)}}return b===""?null:b}(n,o,i);l==null?e.removeAttribute("class"):t?e.className=l:e.setAttribute("class",l),e.__className=n}else if(i&&a!==i)for(var c in i){var u=!!i[c];a!=null&&u===!!a[c]||e.classList.toggle(c,u)}return i}function Cd(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},n=arguments.length>2?arguments[2]:void 0,o=arguments.length>3?arguments[3]:void 0;for(var a in n){var i=n[a];t[a]!==i&&(n[a]==null?e.style.removeProperty(a):e.style.setProperty(a,i,o))}}function No(e,t,n,o){if(e.__style!==t){var a=function(i,s){if(s){var l,c,u="";if(Array.isArray(s)?(l=s[0],c=s[1]):l=s,i){i=String(i).replaceAll(/\s*\/\*.*?\*\/\s*/g,"").trim();var d=!1,v=0,p=!1,b=[];l&&b.push(...Object.keys(l).map(kd)),c&&b.push(...Object.keys(c).map(kd));for(var m=0,h=-1,j=i.length,x=0;x<j;x++){var C=i[x];if(p?C==="/"&&i[x-1]==="*"&&(p=!1):d?d===C&&(d=!1):C==="/"&&i[x+1]==="*"?p=!0:C==='"'||C==="'"?d=C:C==="("?v++:C===")"&&v--,!p&&d===!1&&v===0){if(C===":"&&h===-1)h=x;else if(C===";"||x===j-1){if(h!==-1){var A=kd(i.substring(m,h).trim());b.includes(A)||(C!==";"&&x++,u+=" "+i.substring(m,x).trim()+";")}m=x+1,h=-1}}}}return l&&(u+=Tp(l)),c&&(u+=Tp(c,!0)),(u=u.trim())===""?null:u}return i==null?null:String(i)}(t,o);a==null?e.removeAttribute("style"):e.style.cssText=a,e.__style=t}else o&&(Array.isArray(o)?(Cd(e,n?.[0],o[0]),Cd(e,n?.[1],o[1],"important")):Cd(e,n,o));return o}function vv(e,t){var n=arguments.length>2&&arguments[2]!==void 0&&arguments[2];if(e.multiple){if(t==null)return;if(!ic(t))return void console.warn("https://svelte.dev/e/select_multiple_invalid_value");for(var o of e.options)o.selected=t.includes(zp(o))}else{for(o of e.options)if(Cx(zp(o),t))return void(o.selected=!0);n&&t===void 0||(e.selectedIndex=-1)}}function Dx(e){var t=new MutationObserver(()=>{vv(e,e.__value)});t.observe(e,{childList:!0,subtree:!0,attributes:!0,attributeFilter:["value"]}),Ku(()=>{t.disconnect()})}function zp(e){return"__value"in e?e.__value:e.value}var ks=Symbol("class"),Cl=Symbol("style"),Jm=Symbol("is custom element"),Km=Symbol("is html");function es(e,t){var n=df(e);n.value!==(n.value=t??void 0)&&(e.value!==t||t===0&&e.nodeName==="PROGRESS")&&(e.value=t??"")}function yn(e,t,n,o){var a=df(e);a[t]!==(a[t]=n)&&(t==="loading"&&(e[gx]=n),n==null?e.removeAttribute(t):typeof n!="string"&&Ym(e).includes(t)?e[t]=n:e.setAttribute(t,n))}function Ux(e,t,n,o){var a,i=df(e),s=i[Jm],l=!i[Km],c=t||{},u=e.tagName==="OPTION";for(var d in t)d in n||(n[d]=null);n.class?n.class=Ci(n.class):(o||n[ks])&&(n.class=null),n[Cl]&&((a=n.style)!==null&&a!==void 0||(n.style=null));var v,p,b,m,h,j,x=Ym(e),C=function(O){var w=n[O];if(u&&O==="value"&&w==null)return e.value=e.__value="",c[O]=w,0;if(O==="class")return v=e.namespaceURI==="http://www.w3.org/1999/xhtml",Mt(e,v,w,o,t?.[ks],n[ks]),c[O]=w,c[ks]=n[ks],0;if(O==="style")return No(e,w,t?.[Cl],n[Cl]),c[O]=w,c[Cl]=n[Cl],0;if(w===(p=c[O])&&(w!==void 0||!e.hasAttribute(O))||(c[O]=w,(b=O[0]+O[1])==="$$"))return 0;if(b==="on"){var z={},R="$$"+O,Y=O.slice(2);if(m=function(ae){return Mx.includes(ae)}(Y),function(ae){return ae.endsWith("capture")&&ae!=="gotpointercapture"&&ae!=="lostpointercapture"}(Y)&&(Y=Y.slice(0,-7),z.capture=!0),!m&&p){if(w!=null)return 0;e.removeEventListener(Y,c[R],z),c[R]=null}if(w!=null)if(m)e["__".concat(Y)]=w,uc([Y]);else{let ae=function(ge){c[O].call(this,ge)};c[R]=Lm(Y,e,ae,z)}else m&&(e["__".concat(Y)]=void 0)}else if(O==="style")yn(e,O,w);else if(O==="autofocus")(function(ae,ge){if(ge){var se=document.body;ae.autofocus=!0,Gi(()=>{document.activeElement===se&&ae.focus()})}})(e,!!w);else if(s||O!=="__value"&&(O!=="value"||w==null))if(O==="selected"&&u)(function(ae,ge){ge?ae.hasAttribute("selected")||ae.setAttribute("selected",""):ae.removeAttribute("selected")})(e,w);else if(h=O,l||(h=function(ae){var ge;return ae=ae.toLowerCase(),(ge=Ax[ae])!==null&&ge!==void 0?ge:ae}(h)),j=h==="defaultValue"||h==="defaultChecked",w!=null||s||j)j||x.includes(h)&&(s||typeof w!="string")?(e[h]=w,h in i&&(i[h]=Xr)):typeof w!="function"&&yn(e,h,w);else if(i[O]=null,h==="value"||h==="checked"){var E=e,K=t===void 0;if(h==="value"){var J=E.defaultValue;E.removeAttribute(h),E.defaultValue=J,E.value=E.__value=K?J:null}else{var U=E.defaultChecked;E.removeAttribute(h),E.defaultChecked=U,E.checked=!!K&&U}}else e.removeAttribute(O);else e.value=e.__value=w};for(var A in n)C(A);return c}function Xc(e,t){var n=arguments.length>5?arguments[5]:void 0,o=arguments.length>6&&arguments[6]!==void 0&&arguments[6],a=arguments.length>7&&arguments[7]!==void 0&&arguments[7];pm(arguments.length>4&&arguments[4]!==void 0?arguments[4]:[],arguments.length>2&&arguments[2]!==void 0?arguments[2]:[],arguments.length>3&&arguments[3]!==void 0?arguments[3]:[],i=>{var s=void 0,l={},c=e.nodeName==="SELECT",u=!1;if(km(()=>{var v=t(...i.map(r)),p=Ux(e,s,v,n,o,a);for(var b of(u&&c&&"value"in v&&vv(e,v.value),Object.getOwnPropertySymbols(l)))v[b]||eo(l[b]);for(var m of Object.getOwnPropertySymbols(v)){var h=v[m];m.description!=="@attach"||s&&h===s[m]||(l[m]&&eo(l[m]),l[m]=pa(()=>qx(e,()=>h))),p[m]=h}s=p}),c){var d=e;Kr(()=>{vv(d,s.value,!0),Dx(d)})}u=!0})}function df(e){var t;return(t=e.__attributes)!==null&&t!==void 0?t:e.__attributes={[Jm]:e.nodeName.includes("-"),[Km]:e.namespaceURI==="http://www.w3.org/1999/xhtml"}}var Rp=new Map;function Ym(e){var t,n=e.getAttribute("is")||e.nodeName,o=Rp.get(n);if(o)return o;Rp.set(n,o=[]);for(var a=e,i=Element.prototype;i!==a;){for(var s in t=Qg(a))t[s].set&&o.push(s);a=af(a)}return o}function mu(e,t){var n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:t,o=new WeakSet;Sx(e,"input",function(){var a=mt(function*(i){var s=i?e.defaultValue:e.value;if(s=Sd(e)?Od(s):s,n(s),Yn!==null&&o.add(Yn),yield $m(),s!==(s=t())){var l=e.selectionStart,c=e.selectionEnd,u=e.value.length;if(e.value=s??"",c!==null){var d=e.value.length;l===c&&c===u&&d>u?(e.selectionStart=d,e.selectionEnd=d):(e.selectionStart=l,e.selectionEnd=Math.min(c,d))}}});return function(i){return a.apply(this,arguments)}}()),D(t)==null&&e.value&&(n(Sd(e)?Od(e.value):e.value),Yn!==null&&o.add(Yn)),il(()=>{var a=t();if(e===document.activeElement){var i=zl??Yn;if(o.has(i))return}Sd(e)&&a===Od(e.value)||(e.type!=="date"||a||e.value)&&a!==e.value&&(e.value=a??"")})}function Sd(e){var t=e.type;return t==="number"||t==="range"}function Od(e){return e===""?null:+e}function jt(e,t,n){var o=qa(e,t);o&&o.set&&(e[t]=n,Ku(()=>{e[t]=null}))}function Pp(e,t){return e===t||e?.[fa]===t}function Qn(){var e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},t=arguments.length>1?arguments[1]:void 0,n=arguments.length>2?arguments[2]:void 0;return Kr(()=>{var o,a;return il(()=>{o=a,a=[],D(()=>{e!==n(...a)&&(t(e,...a),o&&Pp(n(...o),e)&&t(null,...o))})}),()=>{Gi(()=>{a&&Pp(n(...a),e)&&t(null,...a)})}}),e}function Aa(e){return function(){for(var t=arguments.length,n=new Array(t),o=0;o<t;o++)n[o]=arguments[o];return n[0].stopPropagation(),e?.apply(this,n)}}function ti(e){return function(){for(var t=arguments.length,n=new Array(t),o=0;o<t;o++)n[o]=arguments[o];return n[0].preventDefault(),e?.apply(this,n)}}function At(){var e=arguments.length>0&&arguments[0]!==void 0&&arguments[0],t=Dn,n=t.l.u;if(n){var o,a=()=>y(t.s);if(e){var i=0,s={},l=lc(()=>{var c=!1,u=t.s;for(var d in u)u[d]!==s[d]&&(s[d]=u[d],c=!0);return c&&i++,i});a=()=>r(l)}n.b.length&&(o=()=>{Np(t,a),rv(n.b)},xm(),na(1048584,o,!0)),sv(()=>{var c=D(()=>n.m.map(fx));return()=>{for(var u of c)typeof u=="function"&&u()}}),n.a.length&&sv(()=>{Np(t,a),rv(n.a)})}}function Np(e,t){if(e.l.s)for(var n of e.l.s)r(n);t()}function Qu(e){var t=Va(0);return function(){return arguments.length===1?(f(t,r(t)+1),arguments[0]):(r(t),e())}}function Ml(e,t){var n,o=(n=e.$$events)===null||n===void 0?void 0:n[t.type],a=ic(o)?o.slice():o==null?[]:[o];for(var i of a)i.call(this,t)}var Tc=!1,Lx={get(e,t){if(!e.exclude.includes(t))return r(e.version),t in e.special?e.special[t]():e.props[t]},set(e,t,n){if(!(t in e.special)){var o=Mn;try{$o(e.parent_effect),e.special[t]=g({get[t](){return e.props[t]}},t,4)}finally{$o(o)}}return e.special[t](n),Cp(e.version),!0},getOwnPropertyDescriptor(e,t){if(!e.exclude.includes(t))return t in e.props?{enumerable:!0,configurable:!0,value:e.props[t]}:void 0},deleteProperty:(e,t)=>(e.exclude.includes(t)||(e.exclude.push(t),Cp(e.version)),!0),has:(e,t)=>!e.exclude.includes(t)&&t in e.props,ownKeys:e=>Reflect.ownKeys(e.props).filter(t=>!e.exclude.includes(t))};function zc(e,t){return new Proxy({props:e,exclude:t,special:{},version:Va(0),parent_effect:Mn},Lx)}var Bx={get(e,t){for(var n=e.props.length;n--;){var o=e.props[n];if(jl(o)&&(o=o()),typeof o=="object"&&o!==null&&t in o)return o[t]}},set(e,t,n){for(var o=e.props.length;o--;){var a=e.props[o];jl(a)&&(a=a());var i=qa(a,t);if(i&&i.set)return i.set(n),!0}return!1},getOwnPropertyDescriptor(e,t){for(var n=e.props.length;n--;){var o=e.props[n];if(jl(o)&&(o=o()),typeof o=="object"&&o!==null&&t in o){var a=qa(o,t);return a&&!a.configurable&&(a.configurable=!0),a}}},has(e,t){if(t===fa||t===tm)return!1;for(var n of e.props)if(jl(n)&&(n=n()),n!=null&&t in n)return!0;return!1},ownKeys(e){var t=[];for(var n of e.props)if(jl(n)&&(n=n()),n){for(var o in n)t.includes(o)||t.push(o);for(var a of Object.getOwnPropertySymbols(n))t.includes(a)||t.push(a)}return t}};function bi(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return new Proxy({props:t},Bx)}function g(e,t,n,o){var a,i,s=!nl||!!(2&n),l=!!(8&n),c=!!(16&n),u=o,d=!0,v=()=>(d&&(d=!1,u=c?D(o):o),u);if(l){var p,b,m=fa in e||tm in e;a=(p=(b=qa(e,t))===null||b===void 0?void 0:b.set)!==null&&p!==void 0?p:m&&t in e?w=>e[t]=w:void 0}var h,j=!1;if(l?[i,j]=function(w){var z=Tc;try{return Tc=!1,[w(),Tc]}finally{Tc=z}}(()=>e[t]):i=e[t],i===void 0&&o!==void 0&&(i=v(),a&&(s&&function(){throw new Error("https://svelte.dev/e/props_invalid_value")}(),a(i))),h=s?()=>{var w=e[t];return w===void 0?v():(d=!0,w)}:()=>{var w=e[t];return w!==void 0&&(u=void 0),w===void 0?u:w},s&&!(4&n))return h;if(a){var x=e.$$legacy;return function(w,z){return arguments.length>0?(s&&z&&!x&&!j||a(z?h():w),w):h()}}var C=!1,A=(1&n?lc:Ze)(()=>(C=!1,h()));l&&r(A);var O=Mn;return function(w,z){if(arguments.length>0){var R=z?r(A):s&&l?Es(w):w;return f(A,R),C=!0,u!==void 0&&(u=R),w}return is&&C||O.f&ol?A.v:r(A)}}function Lr(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:function(o){var a=function(i){try{if(typeof window<"u"&&window.localStorage!==void 0)return window.localStorage[i]}catch{}}("debug");return a!=null&&a.endsWith("*")?o.startsWith(a.slice(0,-1)):o===a}(e);if(!t)return Fx;var n=function(o){for(var a=0,i=0;i<o.length;i++)a=(a<<5)-a+o.charCodeAt(i),a|=0;return $p[Math.abs(a)%$p.length]}(e);return function(){for(var o=arguments.length,a=new Array(o),i=0;i<o;i++)a[i]=arguments[i];console.log("%c".concat(e),"color:".concat(n),...a)}}function Fx(){}var $p=["#0000CC","#0099FF","#009400","#8dd200","#CCCC00","#CC9933","#ae04e7","#ff35d7","#FF3333","#FF6600","#FF9933","#FFCC33"],Wx=0;function _s(){return++Wx}function Yr(e){return parseInt(e,10)}function vf(e){return Vx.test(e)}var Vx=/^-?(?:0|[1-9]\d*)(?:\.\d+)?(?:[eE][+-]?\d+)?$/;function mn(e){return typeof e=="object"&&e!==null&&(e.constructor===void 0||e.constructor.name==="Object")}function ir(e){return typeof e=="object"&&e!==null&&(e.constructor===void 0||e.constructor.name==="Object"||e.constructor.name==="Array")}function Hx(e){return e===!0||e===!1}function fv(e){if(typeof e=="number")return e>9466848e5&&isFinite(e)&&Math.floor(e)===e&&!isNaN(new Date(e).valueOf());if(typeof e=="bigint")return fv(Number(e));try{var t=e&&e.valueOf();if(t!==e)return fv(t)}catch{return!1}return!1}function Qm(e){(Rc=Rc||window.document.createElement("div")).style.color="",Rc.style.color=e;var t=Rc.style.color;return t!==""?t.replace(/\s+/g,"").toLowerCase():void 0}var Rc=void 0;function Jx(e){return typeof e=="string"&&e.length<99&&!!Qm(e)}function ff(e,t){if(typeof e=="number"||typeof e=="string"||typeof e=="boolean"||e===void 0)return typeof e;if(typeof e=="bigint")return"number";if(e===null)return"null";if(Array.isArray(e))return"array";if(mn(e))return"object";var n=t.stringify(e);return n&&vf(n)?"number":n==="true"||n==="false"?"boolean":n==="null"?"null":"unknown"}var Kx=/^https?:\/\/\S+$/;function Gu(e){return typeof e=="string"&&Kx.test(e)}function cl(e,t){if(e==="")return"";var n=e.trim();return n==="null"?null:n==="true"||n!=="false"&&(vf(n)?t.parse(n):e)}var Yx=[];function Ip(e,t){if(e.length!==t.length)return!1;for(var n=0;n<e.length;n++)if(e[n]!==t[n])return!1;return!0}function pv(e){var t=arguments.length>1&&arguments[1]!==void 0&&arguments[1],n={};if(!Array.isArray(e))throw new TypeError("Array expected");function o(s,l){(!Array.isArray(s)&&!mn(s)||t&&l.length>0)&&(n[dt(l)]=!0),mn(s)&&Object.keys(s).forEach(c=>{o(s[c],l.concat(c))})}for(var a=Math.min(e.length,1e4),i=0;i<a;i++)o(e[i],Yx);return Object.keys(n).sort().map(fo)}function Gm(e,t,n){if(!(t<=e))for(var o=e;o<t;o++)n(o)}function bu(e,t){return e.length>t?e.slice(0,t):e}function qp(e){return Ae({},e)}function Dp(e){return Object.values(e)}function Up(e,t,n,o){var a=e.slice(0),i=a.splice(t,n);return a.splice.apply(a,[t+o,0,...i]),a}function Qx(e,t,n){return e.slice(0,t).concat(n).concat(e.slice(t))}function dc(e,t){try{return t.parse(e)}catch{return t.parse(Vo(e))}}function Xm(e,t){try{return dc(e,t)}catch{return}}function vc(e,t){e=e.replace(e0,"");try{return t(e)}catch{}try{return t("{"+e+"}")}catch{}try{return t("["+e+"]")}catch{}throw new Error("Failed to parse partial JSON")}function Zm(e){e=e.replace(e0,"");try{return Vo(e)}catch{}try{var t=Vo("["+e+"]");return t.substring(1,t.length-1)}catch{}try{var n=Vo("{"+e+"}");return n.substring(1,n.length-1)}catch{}throw new Error("Failed to repair partial JSON")}var e0=/,\s*$/;function Ys(e,t){var n=Bp.exec(t);if(n){var o=Yr(n[2]),a=function(b,m){for(var h=arguments.length>2&&arguments[2]!==void 0?arguments[2]:0,j=arguments.length>3&&arguments[3]!==void 0?arguments[3]:b.length,x=0,C=h;C<j;C++)b.charAt(C)===m&&x++;return x}(e,`
`,0,o),i=o-e.lastIndexOf(`
`,o)-1;return{position:o,line:a,column:i,message:t.replace(Bp,()=>"line ".concat(a+1," column ").concat(i+1))}}var s=ew.exec(t),l=s?Yr(s[1]):void 0,c=l!==void 0?l-1:void 0,u=tw.exec(t),d=u?Yr(u[1]):void 0,v=d!==void 0?d-1:void 0,p=c!==void 0&&v!==void 0?function(b,m,h){for(var j=b.indexOf(`
`),x=1;x<m&&j!==-1;)j=b.indexOf(`
`,j+1),x++;return j!==-1?j+h+1:void 0}(e,c,v):void 0;return{position:p,line:c,column:v,message:t.replace(/^JSON.parse: /,"").replace(/ of the JSON data$/,"")}}function Ed(e,t){try{var n=Bu.parse(e),o=dt(t),a=n.pointers[o];if(a)return{path:t,line:a.key?a.key.line:a.value?a.value.line:0,column:a.key?a.key.column:a.value?a.value.column:0,from:a.key?a.key.pos:a.value?a.value.pos:0,to:a.keyEnd?a.keyEnd.pos:a.valueEnd?a.valueEnd.pos:0}}catch(i){console.error(i)}return{path:t,line:0,column:0,from:0,to:0}}function _d(e){return mn(e)?e.json!==void 0?e.text!==void 0?'Content must contain either a property "json" or a property "text" but not both':void 0:e.text===void 0?'Content must contain either a property "json" or a property "text"':typeof e.text!="string"?'Content "text" property must be a string containing a JSON document. Did you mean to use the "json" property instead?':void 0:"Content must be an object"}function Fl(e){return mn(e)&&typeof e.text=="string"}function Wl(e){return mn(e)&&e.json!==void 0}function Gx(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:void 0,n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:JSON;return Fl(e)?e:{text:n.stringify(e.json,null,t)}}function Lp(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:JSON;return Wl(e)?e:{json:t.parse(e.text)}}function hv(e,t,n){return Gx(e,t,n).text}function Xx(e,t){return Zx(e,t)>t}function Zx(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:1/0;if(Fl(e))return e.text.length;var n=e.json,o=0;return function a(i){if(Array.isArray(i)){if((o+=i.length-1+2)>t)return;for(var s=0;s<i.length;s++)if(a(i[s]),o>t)return}else if(mn(i)){var l=Object.keys(i);o+=2+l.length+(l.length-1);for(var c=0;c<l.length;c++){var u=l[c],d=i[u];o+=u.length+2,a(d)}}else o+=typeof i=="string"?i.length+2:String(i).length}(n),o}var Bp=/(position|char) (\d+)/,ew=/line (\d+)/,tw=/column (\d+)/;function t0(e,t){return e.parse===t.parse&&e.stringify===t.stringify}function Fp(e){var t=e.substring(0,999).trim();return!t.includes(`
`)&&nw.test(t)}var kr,Pn,Wo,Ko,Yo,To,yi,nw=/[,:]\S/;function pf(e){var{escapeControlCharacters:t,escapeUnicodeCharacters:n}=e;return t?n?rw:ow:n?aw:iw}(function(e){e.text="text",e.tree="tree",e.table="table"})(kr||(kr={})),function(e){e.after="after",e.inside="inside",e.key="key",e.value="value",e.multi="multi",e.text="text"}(Pn||(Pn={})),function(e){e.after="after",e.key="key",e.value="value",e.inside="inside"}(Wo||(Wo={})),function(e){e.info="info",e.warning="warning",e.error="error"}(Ko||(Ko={})),function(e){e.key="key",e.value="value"}(Yo||(Yo={})),function(e){e.asc="asc",e.desc="desc"}(To||(To={})),function(e){e.no="no",e.self="self",e.nextInside="nextInside"}(yi||(yi={}));var rw={escapeValue:e=>n0(a0(String(e))),unescapeValue:e=>i0(r0(e))},ow={escapeValue:e=>a0(String(e)),unescapeValue:e=>i0(e)},aw={escapeValue:e=>n0(String(e)),unescapeValue:e=>r0(e)},iw={escapeValue:e=>String(e),unescapeValue:e=>e};function n0(e){return e.replace(/[^\x20-\x7F]/g,t=>{var n;return t==="\b"||t==="\f"||t===`
`||t==="\r"||t==="	"?t:"\\u"+("000"+((n=t.codePointAt(0))===null||n===void 0?void 0:n.toString(16))).slice(-4)})}function r0(e){return e.replace(/\\u[a-fA-F0-9]{4}/g,t=>{try{var n=JSON.parse('"'+t+'"');return o0[n]||n}catch{return t}})}var o0={'"':'\\"',"\\":"\\\\","\b":"\\b","\f":"\\f","\n":"\\n","\r":"\\r","	":"\\t"},sw={'\\"':'"',"\\\\":"\\","\\/":"/","\\b":"\b","\\f":"\f","\\n":`
`,"\\r":"\r","\\t":"	"};function a0(e){return e.replace(/["\b\f\n\r\t\\]/g,t=>o0[t]||t)}function i0(e){return e.replace(/\\["bfnrt\\]/g,t=>sw[t]||t)}function Qs(e){return typeof e!="string"?String(e):e.endsWith(`
`)?e+`
`:e}function s0(e,t){return ul(e,n=>n.nodeName.toUpperCase()===t.toUpperCase())}function vi(e,t,n){return ul(e,o=>function(a,i,s){return typeof a.getAttribute=="function"&&a.getAttribute(i)===s}(o,t,n))}function ul(e,t){return!!hf(e,t)}function hf(e,t){for(var n=e;n&&!t(n);)n=n.parentNode;return n}function fc(e){var t,n;return(t=e==null||(n=e.ownerDocument)===null||n===void 0?void 0:n.defaultView)!==null&&t!==void 0?t:void 0}function gf(e){var t=fc(e),n=t?.document.activeElement;return!!n&&ul(n,o=>o===e)}function l0(e,t){return hf(e,n=>n.nodeName===t)}function Md(e){return vi(e,"data-type","selectable-key")?Pn.key:vi(e,"data-type","selectable-value")?Pn.value:vi(e,"data-type","insert-selection-area-inside")?Pn.inside:vi(e,"data-type","insert-selection-area-after")?Pn.after:Pn.multi}function Zc(e){return encodeURIComponent(dt(e))}function c0(e){var t,n=hf(e,a=>!(a==null||!a.hasAttribute)&&a.hasAttribute("data-path")),o=(t=n?.getAttribute("data-path"))!==null&&t!==void 0?t:void 0;return o?fo(decodeURIComponent(o)):void 0}function lw(e){var{allElements:t,currentElement:n,direction:o,hasPrio:a=()=>!0,margin:i=10}=e,s=a1(t.filter(function(x){var C=x.getBoundingClientRect();return C.width>0&&C.height>0}),c),l=c(n);function c(x){var C=x.getBoundingClientRect();return{x:C.left+C.width/2,y:C.top+C.height/2,rect:C,element:x}}function u(x,C){var A=arguments.length>2&&arguments[2]!==void 0?arguments[2]:1,O=x.x-C.x,w=(x.y-C.y)*A;return Math.sqrt(O*O+w*w)}var d=x=>u(x,l);if(o==="Left"||o==="Right"){var v=o==="Left"?s.filter(x=>{return C=l,x.rect.left+i<C.rect.left;var C}):s.filter(x=>{return C=l,x.rect.right>C.rect.right+i;var C}),p=v.filter(x=>{return C=x,A=l,Math.abs(C.y-A.y)<i;var C,A}),b=wc(p,d)||wc(v,x=>u(x,l,10));return b?.element}if(o==="Up"||o==="Down"){var m=o==="Up"?s.filter(x=>{return C=l,x.y+i<C.y;var C}):s.filter(x=>{return C=l,x.y>C.y+i;var C}),h=m.filter(x=>a(x.element)),j=wc(h,d)||wc(m,d);return j?.element}}function mf(){var e,t,n,o;return typeof navigator<"u"&&(e=(t=(n=navigator)===null||n===void 0||(n=n.platform)===null||n===void 0?void 0:n.toUpperCase().includes("MAC"))!==null&&t!==void 0?t:(o=navigator)===null||o===void 0||(o=o.userAgentData)===null||o===void 0||(o=o.platform)===null||o===void 0?void 0:o.toUpperCase().includes("MAC"))!==null&&e!==void 0&&e}function Ha(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:"+",n=[];bf(e,arguments.length>2&&arguments[2]!==void 0?arguments[2]:mf)&&n.push("Ctrl"),e.altKey&&n.push("Alt"),e.shiftKey&&n.push("Shift");var o=e.key.length===1?e.key.toUpperCase():e.key;return o in cw||n.push(o),n.join(t)}function bf(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:mf;return e.ctrlKey||e.metaKey&&t()}var cw={Ctrl:!0,Command:!0,Control:!0,Alt:!0,Option:!0,Shift:!0};function St(e,t){t===void 0&&(t={});var n=t.insertAt;if(e&&typeof document<"u"){var o=document.head||document.getElementsByTagName("head")[0],a=document.createElement("style");a.type="text/css",n==="top"&&o.firstChild?o.insertBefore(a,o.firstChild):o.appendChild(a),a.styleSheet?a.styleSheet.cssText=e:a.appendChild(document.createTextNode(e))}}St(`.jse-absolute-popup.svelte-enkkpn {
  position: relative;
  left: 0;
  top: 0;
  width: 0;
  height: 0;
  z-index: 1001;
}
.jse-absolute-popup.svelte-enkkpn .jse-hidden-input:where(.svelte-enkkpn) {
  position: fixed;
  left: 0;
  top: 0;
  width: 0;
  height: 0;
  padding: 0;
  margin: 0;
  border: none;
  outline: none;
  overflow: hidden;
}
.jse-absolute-popup.svelte-enkkpn .jse-absolute-popup-content:where(.svelte-enkkpn) {
  position: absolute;
}`);var uw=te('<div class="jse-absolute-popup-content svelte-enkkpn"><input type="text" readonly="" tabindex="-1" class="jse-hidden-input svelte-enkkpn"/> <!></div>'),dw=te('<div role="none" class="jse-absolute-popup svelte-enkkpn"><!></div>');function vw(e,t){lt(t,!1);var n=g(t,"popup",8),o=g(t,"closeAbsolutePopup",8),a=$(),i=$();function s(v){n().options&&n().options.closeOnOuterClick&&!ul(v.target,p=>p===r(a))&&o()(n().id)}function l(v){Ha(v)==="Escape"&&(v.preventDefault(),v.stopPropagation(),o()(n().id))}no(function(){r(i)&&r(i).focus()}),At();var c=dw();Ce("mousedown",Da,function(v){s(v)},!0),Ce("keydown",Da,l,!0),Ce("wheel",Da,function(v){s(v)},!0);var u=N(c),d=v=>{var p=uw(),b=N(p);Qn(b,m=>f(i,m),()=>r(i)),Vm(W(b,2),()=>n().component,(m,h)=>{h(m,bi(()=>n().props))}),ze(m=>No(p,m),[()=>(r(a),y(n()),D(()=>function(m,h){var j=m.getBoundingClientRect(),{left:x,top:C,positionAbove:A,positionLeft:O}=function(){if(h.anchor){var{anchor:w,width:z=0,height:R=0,offsetTop:Y=0,offsetLeft:E=0,position:K}=h,{left:J,top:U,bottom:ae,right:ge}=w.getBoundingClientRect(),se=K==="top"||U+R>window.innerHeight&&U>R,Te=K==="left"||J+z>window.innerWidth&&J>z;return{left:Te?ge-E:J+E,top:se?U-Y:ae+Y,positionAbove:se,positionLeft:Te}}if(typeof h.left=="number"&&typeof h.top=="number"){var{left:De,top:Le,width:je=0,height:Oe=0}=h;return{left:De,top:Le,positionAbove:Le+Oe>window.innerHeight&&Le>Oe,positionLeft:De+je>window.innerWidth&&De>je}}throw new Error('Invalid config: pass either "left" and "top", or pass "anchor"')}();return(A?"bottom: ".concat(j.top-C,"px;"):"top: ".concat(C-j.top,"px;"))+(O?"right: ".concat(j.left-x,"px;"):"left: ".concat(x-j.left,"px;"))}(r(a),n().options)))]),P(v,p)};ie(u,v=>{r(a)&&v(d)}),Qn(c,v=>f(a,v),()=>r(a)),Ce("mousedown",c,function(v){v.stopPropagation()}),Ce("keydown",c,l),P(e,c),ct()}var fw=te("<!> <!>",1);function gv(e,t){lt(t,!1);var n=Lr("jsoneditor:AbsolutePopup"),o=$([],!0);function a(l){var c=r(o).findIndex(d=>d.id===l);if(c!==-1){var u=r(o)[c];u.options.onClose&&u.options.onClose(),f(o,r(o).filter(d=>d.id!==l))}}(function(l,c){am().set(l,c)})("absolute-popup",{openAbsolutePopup:function(l,c,u){n("open...",c,u);var d={id:_s(),component:l,props:c||{},options:u||{}};return f(o,[...r(o),d]),d.id},closeAbsolutePopup:a}),Z(()=>r(o),()=>{n("popups",r(o))}),jn(),At(!0);var i=fw(),s=Xe(i);fr(s,1,()=>r(o),Cr,(l,c)=>{vw(l,{get popup(){return r(c)},closeAbsolutePopup:a})}),dr(W(s,2),t,"default",{},null),P(e,i),ct()}function pc(e,t){for(var n=new Set(t),o=e.replace(/ \(copy( \d+)?\)$/,""),a=e,i=1;n.has(a);){var s="copy"+(i>1?" "+i:"");a="".concat(o," (").concat(s,")"),i++}return a}function Ra(e,t){var n=t-3;return e.length>t?e.substring(0,n)+"...":e}function pw(e){if(e==="")return"";var t=e.toLowerCase();if(t==="null")return null;if(t==="true")return!0;if(t==="false")return!1;if(t!=="undefined"){var n=Number(e),o=parseFloat(e);return isNaN(n)||isNaN(o)?e:n}}var hw={id:"jsonquery",name:"JSONQuery",description:`
<p>
  Enter a <a href="https://jsonquerylang.org" target="_blank" 
  rel="noopener noreferrer">JSON Query</a> function to filter, sort, or transform the data.
  You can use functions like <code>get</code>, <code>filter</code>,
  <code>sort</code>, <code>pick</code>, <code>groupBy</code>, <code>uniq</code>, etcetera. 
  Example query: <code>filter(.age >= 18)</code>
</p>
`,createQuery:function(e,t){var{filter:n,sort:o,projection:a}=t,i=[];n&&n.path&&n.relation&&n.value&&i.push(["filter",[(s=n.relation,M1("1 ".concat(s," 1"))[0]),Pc(n.path),pw(n.value)]]);var s;return o&&o.path&&o.direction&&i.push(["sort",Pc(o.path),o.direction==="desc"?"desc":"asc"]),a&&a.paths&&(a.paths.length>1?i.push(["pick",...a.paths.map(Pc)]):i.push(["map",Pc(a.paths[0])])),A1(["pipe",...i])},executeQuery:function(e,t,n){var o=t0(n,JSON)?e:function(a){var i=n.stringify(a);return i!==void 0?JSON.parse(i):void 0}(e);return t.trim()!==""?T1(o,t):o}};function Pc(e){return["get",...e]}var gw=_i("<g><!></g>");function mw(e,t){lt(t,!1);var n=870711,o=$(""),a=g(t,"data",8);function i(l){if(!l||!l.raw)return"";var c=l.raw,u={};return c=c.replace(/\s(?:xml:)?id=["']?([^"')\s]+)/g,(d,v)=>{var p="fa-".concat((n+=1).toString(16));return u[v]=p,' id="'.concat(p,'"')}),c=c.replace(/#(?:([^'")\s]+)|xpointer\(id\((['"]?)([^')]+)\2\)\))/g,(d,v,p,b)=>{var m=v||b;return m&&u[m]?"#".concat(u[m]):d}),c}Z(()=>y(a()),()=>{f(o,i(a()))}),jn();var s=gw();Wm(N(s),()=>r(o),!0),P(e,s),ct()}St(`
  .fa-icon.svelte-v67cny {
    display: inline-block;
    fill: currentColor;
  }
  .fa-flip-horizontal.svelte-v67cny {
    transform: scale(-1, 1);
  }
  .fa-flip-vertical.svelte-v67cny {
    transform: scale(1, -1);
  }
  .fa-spin.svelte-v67cny {
    animation: svelte-v67cny-fa-spin 1s 0s infinite linear;
  }
  .fa-inverse.svelte-v67cny {
    color: #fff;
  }
  .fa-pulse.svelte-v67cny {
    animation: svelte-v67cny-fa-spin 1s infinite steps(8);
  }
  @keyframes svelte-v67cny-fa-spin {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
`);var bw=_i("<svg><!></svg>"),yw=_i("<path></path>"),jw=_i("<polygon></polygon>"),xw=_i("<!><!><!>",1);function nn(e,t){var n=zc(t,["children","$$slots","$$events","$$legacy"]),o=zc(n,["class","data","scale","spin","inverse","pulse","flip","label","style"]);lt(t,!1);var a=g(t,"class",8,""),i=g(t,"data",8),s=$(),l=g(t,"scale",8,1),c=g(t,"spin",8,!1),u=g(t,"inverse",8,!1),d=g(t,"pulse",8,!1),v=g(t,"flip",8,void 0),p=g(t,"label",8,""),b=g(t,"style",8,""),m=$(10),h=$(10),j=$(),x=$();function C(){var O=1;return l()!==void 0&&(O=Number(l())),isNaN(O)||O<=0?(console.warn('Invalid prop: prop "scale" should be a number over 0.'),1):1*O}function A(){return r(s)?Math.max(r(s).width,r(s).height)/16:1}Z(()=>(y(i()),y(b()),y(l())),()=>{f(s,function(O){var w;if(O){if(!("definition"in O)){if("iconName"in O&&"icon"in O){O.iconName;var[z,R,,,Y]=O.icon;w={width:z,height:R,paths:(Array.isArray(Y)?Y:[Y]).map(E=>({d:E}))}}else w=O[Object.keys(O)[0]];return w}console.error("`import faIconName from '@fortawesome/package-name/faIconName` not supported - Please use `import { faIconName } from '@fortawesome/package-name/faIconName'` instead")}}(i())),b(),l(),f(m,r(s)?r(s).width/A()*C():0),f(h,r(s)?r(s).height/A()*C():0),f(j,function(){var O="";b()!==null&&(O+=b());var w=C();return w===1?O.length===0?"":O:(O===""||O.endsWith(";")||(O+="; "),"".concat(O,"font-size: ").concat(w,"em"))}()),f(x,r(s)?"0 0 ".concat(r(s).width," ").concat(r(s).height):"0 0 ".concat(r(m)," ").concat(r(h)))}),jn(),At(),function(O,w){var z=zc(w,["children","$$slots","$$events","$$legacy"]),R=zc(z,["class","width","height","box","spin","inverse","pulse","flip","style","label"]),Y=g(w,"class",8,""),E=g(w,"width",8),K=g(w,"height",8),J=g(w,"box",8,"0 0 0 0"),U=g(w,"spin",8,!1),ae=g(w,"inverse",8,!1),ge=g(w,"pulse",8,!1),se=g(w,"flip",8,"none"),Te=g(w,"style",8,""),De=g(w,"label",8,""),Le=bw();Xc(Le,()=>{var je;return Ae(Ae({version:"1.1",class:"fa-icon ".concat((je=Y())!==null&&je!==void 0?je:""),width:E(),height:K(),"aria-label":De(),role:De()?"img":"presentation",viewBox:J(),style:Te()},R),{},{[ks]:{"fa-spin":U(),"fa-pulse":ge(),"fa-inverse":ae(),"fa-flip-horizontal":se()==="horizontal","fa-flip-vertical":se()==="vertical"}})},void 0,void 0,void 0,"svelte-v67cny"),dr(N(Le),w,"default",{},null),P(O,Le)}(e,bi({get label(){return p()},get width(){return r(m)},get height(){return r(h)},get box(){return r(x)},get style(){return r(j)},get spin(){return c()},get flip(){return v()},get inverse(){return u()},get pulse(){return d()},get class(){return a()}},()=>o,{children:(O,w)=>{var z=Ut();dr(Xe(z),t,"default",{},R=>{var Y=xw(),E=Xe(Y);fr(E,1,()=>(r(s),D(()=>{var ae;return((ae=r(s))===null||ae===void 0?void 0:ae.paths)||[]})),Cr,(ae,ge)=>{var se=yw();Xc(se,()=>Ae({},r(ge))),P(ae,se)});var K=W(E);fr(K,1,()=>(r(s),D(()=>{var ae;return((ae=r(s))===null||ae===void 0?void 0:ae.polygons)||[]})),Cr,(ae,ge)=>{var se=jw();Xc(se,()=>Ae({},r(ge))),P(ae,se)});var J=W(K),U=ae=>{mw(ae,{get data(){return r(s)},set data(ge){f(s,ge)},$$legacy:!0})};ie(J,ae=>{r(s),D(()=>{var ge;return(ge=r(s))===null||ge===void 0?void 0:ge.raw})&&ae(U)}),P(R,Y)}),P(O,z)},$$slots:{default:!0}})),ct()}St(`/* over all fonts, sizes, and colors */
/* "consolas" for Windows, "menlo" for Mac with fallback to "monaco", 'Ubuntu Mono' for Ubuntu */
/* (at Mac this font looks too large at 14px, but 13px is too small for the font on Windows) */
/* main, menu, modal */
/* jsoneditor modal */
/* tooltip in text mode */
/* panels: navigation bar, gutter, search box */
/* navigation-bar */
/* context menu */
/* contents: json key and values */
/* contents: selected or hovered */
/* contents: section of collapsed items in an array */
/* contents: highlighting of search matches */
/* contents: inline tags inside the JSON document */
/* contents: table */
/* controls in modals: inputs, buttons, and \`a\` */
/* messages */
/* svelte-select */
/* color picker */
.jse-boolean-toggle.svelte-eli4ob {
  padding: 0;
  margin: 1px 0 0;
  vertical-align: top;
  display: inline-flex;
  color: var(--jse-value-color-boolean, #ff8c00);
}

.jse-boolean-toggle.svelte-eli4ob:not(.jse-readonly) {
  cursor: pointer;
}`);var ww=te('<div role="checkbox" tabindex="-1"><!></div>');function kw(e,t){lt(t,!1);var n=g(t,"path",9),o=g(t,"value",9),a=g(t,"readOnly",9),i=g(t,"onPatch",9),s=g(t,"focus",9);At(!0);var l,c=ww(),u=N(c),d=Ze(()=>o()===!0?Pg:Ng);nn(u,{get data(){return r(d)}}),ze(()=>{yn(c,"aria-checked",o()===!0),l=Mt(c,1,"jse-boolean-toggle svelte-eli4ob",null,l,{"jse-readonly":a()}),yn(c,"title",a()?"Boolean value ".concat(o()):"Click to toggle this boolean value")}),Ce("mousedown",c,function(v){v.stopPropagation(),a()||(i()([{op:"replace",path:dt(n()),value:!o()}]),s()())}),P(e,c),ct()}St(`/* over all fonts, sizes, and colors */
/* "consolas" for Windows, "menlo" for Mac with fallback to "monaco", 'Ubuntu Mono' for Ubuntu */
/* (at Mac this font looks too large at 14px, but 13px is too small for the font on Windows) */
/* main, menu, modal */
/* jsoneditor modal */
/* tooltip in text mode */
/* panels: navigation bar, gutter, search box */
/* navigation-bar */
/* context menu */
/* contents: json key and values */
/* contents: selected or hovered */
/* contents: section of collapsed items in an array */
/* contents: highlighting of search matches */
/* contents: inline tags inside the JSON document */
/* contents: table */
/* controls in modals: inputs, buttons, and \`a\` */
/* messages */
/* svelte-select */
/* color picker */
.jse-color-picker-popup.svelte-v77py2 .picker_wrapper.popup,
.jse-color-picker-popup.svelte-v77py2 .picker_wrapper.popup .picker_arrow::before,
.jse-color-picker-popup.svelte-v77py2 .picker_wrapper.popup .picker_arrow::after {
  background: var(--jse-color-picker-background, var(--jse-panel-background, #ebebeb));
  line-height: normal;
}
.jse-color-picker-popup.svelte-v77py2 .picker_slider,
.jse-color-picker-popup.svelte-v77py2 .picker_sl,
.jse-color-picker-popup.svelte-v77py2 .picker_editor input,
.jse-color-picker-popup.svelte-v77py2 .picker_sample,
.jse-color-picker-popup.svelte-v77py2 .picker_done button {
  box-shadow: var(--jse-color-picker-border-box-shadow, #cbcbcb 0 0 0 1px);
}
.jse-color-picker-popup.svelte-v77py2 .picker_editor input {
  background: var(--jse-background-color, #fff);
  color: var(--jse-text-color, #4d4d4d);
}
.jse-color-picker-popup.svelte-v77py2 .picker_done button {
  background: var(--jse-button-background, #e0e0e0);
  color: var(--jse-button-color, var(--jse-text-color, #4d4d4d));
}
.jse-color-picker-popup.svelte-v77py2 .picker_done button:hover {
  background: var(--jse-button-background-highlight, #e7e7e7);
}`);var Cw=te('<div class="jse-color-picker-popup svelte-v77py2"></div>');function Sw(e,t){lt(t,!1);var n=g(t,"color",8),o=g(t,"onChange",8),a=g(t,"showOnTop",8),i=$(),s=()=>{};no(mt(function*(){var c,u=new((c=yield Kb(()=>import("./vanilla-picker-2033e4d0.js"),[]))===null||c===void 0?void 0:c.default)({parent:r(i),color:n(),popup:a()?"top":"bottom",onDone(d){var v=d.rgba[3]===1?d.hex.substring(0,7):d.hex;o()(v)}});u.show(),s=()=>{u.destroy()}})),Io(()=>{s()}),At();var l=Cw();Qn(l,c=>f(i,c),()=>r(i)),P(e,l),ct()}St(`/* over all fonts, sizes, and colors */
/* "consolas" for Windows, "menlo" for Mac with fallback to "monaco", 'Ubuntu Mono' for Ubuntu */
/* (at Mac this font looks too large at 14px, but 13px is too small for the font on Windows) */
/* main, menu, modal */
/* jsoneditor modal */
/* tooltip in text mode */
/* panels: navigation bar, gutter, search box */
/* navigation-bar */
/* context menu */
/* contents: json key and values */
/* contents: selected or hovered */
/* contents: section of collapsed items in an array */
/* contents: highlighting of search matches */
/* contents: inline tags inside the JSON document */
/* contents: table */
/* controls in modals: inputs, buttons, and \`a\` */
/* messages */
/* svelte-select */
/* color picker */
.jse-color-picker-button.svelte-13mgyo6 {
  font-size: var(--jse-font-size-mono, 14px);
  width: var(--jse-color-picker-button-size, 1em);
  height: var(--jse-color-picker-button-size, 1em);
  box-sizing: border-box;
  padding: 0;
  margin: 2px 0 0 calc(0.5 * var(--jse-padding, 10px));
  display: inline-flex;
  vertical-align: top;
  border: 1px solid var(--jse-text-color, #4d4d4d);
  border-radius: 2px;
  background: inherit;
  outline: none;
}

.jse-color-picker-button.svelte-13mgyo6:not(.jse-readonly) {
  cursor: pointer;
}`);var Ow=te('<button type="button"></button>');function Ew(e,t){lt(t,!1);var n=$(void 0,!0),o=$(void 0,!0),{openAbsolutePopup:a}=Ei("absolute-popup"),i=g(t,"path",9),s=g(t,"value",9),l=g(t,"readOnly",9),c=g(t,"onPatch",9),u=g(t,"focus",9);function d(m){c()([{op:"replace",path:dt(i()),value:m}]),v()}function v(){u()()}Z(()=>y(s()),()=>{f(n,Qm(s()))}),Z(()=>(y(l()),y(s())),()=>{f(o,l()?"Color ".concat(s()):"Click to open a color picker")}),jn(),At(!0);var p,b=Ow();ze(()=>{var m;p=Mt(b,1,"jse-color-picker-button svelte-13mgyo6",null,p,{"jse-readonly":l()}),No(b,"background: ".concat((m=r(n))!==null&&m!==void 0?m:"")),yn(b,"title",r(o)),yn(b,"aria-label",r(o))}),Ce("click",b,function(m){var h,j;if(!l()){var x=m.target,C=x.getBoundingClientRect().top,A=((h=(j=fc(x))===null||j===void 0?void 0:j.innerHeight)!==null&&h!==void 0?h:0)-C<300&&C>300,O={color:s(),onChange:d,showOnTop:A};a(Sw,O,{anchor:x,closeOnOuterClick:!0,onClose:v,offsetTop:18,offsetLeft:-8,height:300})}}),P(e,b),ct()}var Ad=1e3,Vl=100,Nc=100,yu=2e4,qs=[{start:0,end:Vl}],_w=1048576,Mw=1048576,Td=10485760,zd="Insert or paste contents, enter [ insert a new array, enter { to insert a new object, or start typing to insert a new value",yf="Open context menu (Click here, right click on the selection, or use the context menu button or Ctrl+Q)",Ni="hover-insert-inside",$c="hover-insert-after",Wp="hover-collection",Rd="valid",Vp="repairable",Pa=336,Na=260,Al=100,Hp={[To.asc]:"ascending",[To.desc]:"descending"};function u0(e){for(var t=xy(e,l=>l.start),n=[t[0]],o=0;o<t.length;o++){var a=n.length-1,i=n[a],s=t[o];s.start<=i.end?n[a]={start:Math.min(i.start,s.start),end:Math.max(i.end,s.end)}:n.push(s)}return n}function mv(e){return ju(e)+Vl}function ju(e){return Math.floor(e/Vl)*Vl}function bv(e){return!!e&&(e.type==="space"||e.space===!0)}function ii(e){return!!e&&(e.type==="separator"||e.separator===!0)}function Jp(e){return!!e&&e.type==="label"&&typeof e.text=="string"}function Ta(e){return!!e&&typeof e.onClick=="function"}function ms(e){return!!e&&e.type==="dropdown-button"&&Ta(e.main)&&Array.isArray(e.items)}function Kp(e){return!!e&&e.type==="row"&&Array.isArray(e.items)}function Yp(e){return!!e&&e.type==="column"&&Array.isArray(e.items)}function Qp(e){return mn(e)&&mn(e.parseError)}function Aw(e){return mn(e)&&Array.isArray(e.validationErrors)}function Tw(e){return mn(e)&&Array.isArray(e.path)&&typeof e.message=="string"&&"severity"in e}function zw(e){return mn(e)&&Tw(e)&&typeof e.isChildError=="boolean"}function Rw(e){return mn(e)&&typeof e.action=="function"&&mn(e.props)}function uo(e){return e!==void 0&&e.type==="object"}function Ur(e){return e!==void 0&&e.type==="array"}function jf(e){return e!==void 0&&e.type==="value"}function ts(e){return uo(e)||Ur(e)}function d0(e){return e!==void 0&&Array.isArray(e.searchResults)}function xu(e){return!!e&&e.type==="tree"}function Gp(e){return!!e&&e.type==="text"}function Xp(e){return!!e&&e.type==="mode"}function yv(e){var{json:t,expand:n}=e,o=function(a){var{json:i,factory:s}=a;return Array.isArray(i)?s.createArrayDocumentState():mn(i)?s.createObjectDocumentState():i!==void 0?s.createValueDocumentState():void 0}({json:t,factory:kf});return n&&o?Lo(t,o,[],n):o}function xf(){var{expanded:e}=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{expanded:!1};return{type:"array",expanded:e,visibleSections:qs,items:[]}}function wf(){var{expanded:e}=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{expanded:!1};return{type:"object",expanded:e,properties:{}}}var kf={createObjectDocumentState:wf,createArrayDocumentState:xf,createValueDocumentState:function(){return{type:"value"}}};function v0(e,t,n,o){var{createObjectDocumentState:a,createArrayDocumentState:i,createValueDocumentState:s}=o;return function l(c,u,d){if(Array.isArray(c)){var v=Ur(u)?u:i();if(d.length===0)return v;var p=Yr(d[0]),b=l(c[p],v.items[p],d.slice(1));return co(v,["items",d[0]],b)}if(mn(c)){var m=uo(u)?u:a();if(d.length===0)return m;var h=d[0],j=l(c[h],m.properties[h],d.slice(1));return co(m,["properties",h],j)}return jf(u)?u:s()}(e,t,n)}function xo(e,t){return Hl(e,t,arguments.length>2&&arguments[2]!==void 0?arguments[2]:[],(n,o)=>{if(n!==void 0&&o!==void 0)return Array.isArray(n)?Ur(o)?o:xf({expanded:!!ts(o)&&o.expanded}):mn(n)?uo(o)?o:wf({expanded:!!ts(o)&&o.expanded}):jf(o)?o:void 0},()=>!0)}function Hl(e,t,n,o,a){var i=o(e,t,n);if(Array.isArray(e)&&Ur(i)&&a(i)){var s=[];return Cf(e,i.visibleSections,c=>{var u=n.concat(String(c)),d=Hl(e[c],i.items[c],u,o,a);d!==void 0&&(s[c]=d)}),Ip(s,i.items)?i:Ae(Ae({},i),{},{items:s})}if(mn(e)&&uo(i)&&a(i)){var l={};return Object.keys(e).forEach(c=>{var u=n.concat(c),d=Hl(e[c],i.properties[c],u,o,a);d!==void 0&&(l[c]=d)}),Ip(Object.values(l),Object.values(i.properties))?i:Ae(Ae({},i),{},{properties:l})}return i}function Cf(e,t,n){t.forEach(o=>{var{start:a,end:i}=o;Gm(a,Math.min(e.length,i),n)})}function Jl(e,t){for(var n=e,o=[],a=0;a<t.length;){if(Array.isArray(n)){var i=t[a];o.push("items",i),n=n[Yr(i)]}else{if(!mn(n))throw new Error("Cannot convert path: Object or Array expected at index ".concat(a));var s=t[a];o.push("properties",s),n=n[s]}a++}return o}function Lo(e,t,n,o){for(var a=t,i=function(l){var c=n.slice(0,l);a=Gs(e,a,c,(u,d)=>{var v=ts(d)&&!d.expanded?Ae(Ae({},d),{},{expanded:!0}):d;return Ur(v)?function(p,b){if(function(j,x){return j.some(C=>x>=C.start&&x<C.end)}(p.visibleSections,b))return p;var m=ju(b),h={start:m,end:mv(m)};return Ae(Ae({},p),{},{visibleSections:u0(p.visibleSections.concat(h))})}(v,Yr(n[l])):v})},s=0;s<n.length;s++)i(s);return Gs(e,a,n,(l,c)=>function(u,d,v,p){return Hl(u,d,v,(b,m,h)=>Array.isArray(b)&&p(h)?Ur(m)?m.expanded?m:Ae(Ae({},m),{},{expanded:!0}):xf({expanded:!0}):mn(b)&&p(h)?uo(m)?m.expanded?m:Ae(Ae({},m),{},{expanded:!0}):wf({expanded:!0}):m,b=>ts(b)&&b.expanded)}(l,c,[],o))}function Zp(e,t,n,o){return Gs(e,t,n,(a,i)=>o?function(s,l,c){return Hl(s,l,c,(u,d)=>eh(d),()=>!0)}(a,i,n):eh(i))}function eh(e){return Ur(e)&&e.expanded?Ae(Ae({},e),{},{expanded:!1,visibleSections:qs}):uo(e)&&e.expanded?Ae(Ae({},e),{},{expanded:!1}):e}function f0(e,t,n){var o={json:e,documentState:t},a=n.reduce((i,s)=>({json:Ho(i.json,[s]),documentState:Pw(i.json,i.documentState,s)}),o);return{json:a.json,documentState:xo(a.json,a.documentState)}}function Pw(e,t,n){if(Sg(n))return th(e,t,n,void 0);if(Og(n))return nh(e,t,n);if(Xv(n)){var o=Jo(e,n.path),a=da(e,t,o);return a?Xu(e,t,o,{type:"value",enforceString:a}):t}return Xd(n)||Fi(n)?function(i,s,l){if(Fi(l)&&l.from===l.path)return s;var c=s,u=Jo(i,l.from),d=aa(i,c,u);return Fi(l)&&(c=nh(i,c,{path:l.from})),c=th(i,c,{path:l.path},d),c}(e,t,n):t}function aa(e,t,n){try{return Ye(t,Jl(e,n))}catch{return}}function Sf(e,t,n,o,a){var i=v0(e,t,n,a);return tf(i,Jl(e,n),s=>{var l=Ye(e,n);return o(l,s)})}function Xu(e,t,n,o){return function(a,i,s,l,c){var u=v0(a,i,s,c);return co(u,Jl(a,s),l)}(e,t,n,o,kf)}function Gs(e,t,n,o){return Sf(e,t,n,o,kf)}function th(e,t,n,o){var a=Jo(e,n.path),i=t;return i=Gs(e,i,tn(a),(s,l)=>{if(!Ur(l))return l;var c=Yr(Wt(a)),{items:u,visibleSections:d}=l;return Ae(Ae({},l),{},{items:c<u.length?Qx(u,c,o!==void 0?[o]:Array(1)):u,visibleSections:p0(d,c,1)})}),Xu(e,i,a,o)}function nh(e,t,n){var o=Jo(e,n.path),a=tn(o),i=Ye(e,a);return Array.isArray(i)?Gs(e,t,a,(s,l)=>{if(!Ur(l))return l;var c=Yr(Wt(o)),{items:u,visibleSections:d}=l;return Ae(Ae({},l),{},{items:u.slice(0,c).concat(u.slice(c+1)),visibleSections:p0(d,c,-1)})}):function(s,l,c){var u=Jl(s,c);return Ro(l,u)?Lu(l,Jl(s,c)):l}(e,t,o)}function p0(e,t,n){return function(o){for(var a=o.slice(0),i=1;i<a.length;)a[i-1].end===a[i].start&&(a[i-1]={start:a[i-1].start,end:a[i].end},a.splice(i)),i++;return a}(e.map(o=>({start:o.start>t?o.start+n:o.start,end:o.end>t?o.end+n:o.end})))}function da(e,t,n){var o,a=Ye(e,n),i=aa(e,t,n),s=jf(i)?i.enforceString:void 0;return typeof s=="boolean"?s:typeof(o=a)=="string"&&typeof cl(o,JSON)!="string"}function hc(e,t){var n=arguments.length>2&&arguments[2]!==void 0&&arguments[2],o=e.indexOf(t);return o!==-1?n?e.slice(o):e.slice(o+1):[]}function Of(e,t){var n=[];return function o(a,i,s){n.push(s),vr(a)&&Ur(i)&&i.expanded&&Cf(a,i.visibleSections,l=>{o(a[l],i.items[l],s.concat(String(l)))}),yr(a)&&uo(i)&&i.expanded&&Object.keys(a).forEach(l=>{o(a[l],i.properties[l],s.concat(l))})}(e,t,[]),n}function h0(e,t){var n=!(arguments.length>2&&arguments[2]!==void 0)||arguments[2],o=[];return function a(i,s){o.push({path:s,type:Wo.value});var l=aa(e,t,s);if(i&&ts(l)&&l.expanded){if(n&&o.push({path:s,type:Wo.inside}),vr(i)){var c=Ur(l)?l.visibleSections:qs;Cf(i,c,u=>{var d=s.concat(String(u));a(i[u],d),n&&o.push({path:d,type:Wo.after})})}yr(i)&&Object.keys(i).forEach(u=>{var d=s.concat(u);o.push({path:d,type:Wo.key}),a(i[u],d),n&&o.push({path:d,type:Wo.after})})}}(e,[]),o}function Pd(e,t,n){var o=Of(e,t),a=o.map(dt).indexOf(dt(n));if(a!==-1&&a<o.length-1)return o[a+1]}function ns(e,t,n){var o=arguments.length>3&&arguments[3]!==void 0?arguments[3]:10240;return Lo(e,t,n,Xx({json:Ye(e,n)},o)?Tl:Ef)}function Nd(e,t,n){var o=aa(e,t,n);return ts(o)&&o.expanded?t:ns(e,t,n)}function Tl(e){return e.length===0||e.length===1&&e[0]==="0"}function jv(e){return e.length===0}function Ef(){return!0}function eu(){return!1}function lo(e){return e&&e.type===Pn.after||!1}function zr(e){return e&&e.type===Pn.inside||!1}function qr(e){return e&&e.type===Pn.key||!1}function cn(e){return e&&e.type===Pn.value||!1}function Rn(e){return e&&e.type===Pn.multi||!1}function Zu(e){return Rn(e)&&Lt(e.focusPath,e.anchorPath)}function Kl(e){return Rn(e)||lo(e)||zr(e)||qr(e)||cn(e)}function $d(e){return e&&e.type===Pn.text||!1}function Si(e,t){var n=[];return function(o,a,i){if(a){var s=Ji(a),l=rt(a);if(Lt(s,l))return i(s);if(o!==void 0){var c=m0(s,l);if(s.length===c.length||l.length===c.length)return i(c);var u=oo(s,l),d=$a(o,u),v=ji(o,u),p=Ba(o,u,d),b=Ba(o,u,v);if(!(p===-1||b===-1)){var m=Ye(o,c);if(yr(m)){for(var h=Object.keys(m),j=p;j<=b;j++){var x=i(c.concat(h[j]));if(x!==void 0)return x}return}if(vr(m)){for(var C=p;C<=b;C++){var A=i(c.concat(String(C)));if(A!==void 0)return A}return}throw new Error("Failed to create selection")}}}}(e,t,o=>{n.push(o)}),n}function g0(e){return zr(e)?e.path:tn(rt(e))}function $a(e,t){if(!Rn(t))return t.path;var n=Ba(e,t,t.anchorPath);return Ba(e,t,t.focusPath)<n?t.focusPath:t.anchorPath}function ji(e,t){if(!Rn(t))return t.path;var n=Ba(e,t,t.anchorPath);return Ba(e,t,t.focusPath)>n?t.focusPath:t.anchorPath}function rh(e,t,n){var o=arguments.length>3&&arguments[3]!==void 0&&arguments[3];if(n){var a=o?rt(n):$a(e,n),i=function(c,u,d){var v=Of(c,u),p=v.map(dt),b=dt(d),m=p.indexOf(b);if(m!==-1&&m>0)return v[m-1]}(e,t,a);if(o)return zr(n)||lo(n)?i!==void 0?oo(a,a):void 0:i!==void 0?oo(Ji(n),i):void 0;if(lo(n)||zr(n))return Ht(a);if(qr(n)){if(i===void 0||i.length===0)return;var s=tn(i),l=Ye(e,s);return Array.isArray(l)||un(i)?Ht(i):Ja(i)}return cn(n),i!==void 0?Ht(i):void 0}}function oh(e,t,n,o){if(!n)return{caret:void 0,previous:void 0,next:void 0};var a=h0(e,t,o),i=a.findIndex(s=>Lt(s.path,rt(n))&&String(s.type)===String(n.type));return{caret:i!==-1?a[i]:void 0,previous:i!==-1&&i>0?a[i-1]:void 0,next:i!==-1&&i<a.length-1?a[i+1]:void 0}}function bs(e,t){for(var n=Of(e,t),o=0;o<n.length-1&&n[o+1].length>n[o].length;)o++;var a=n[o];return a===void 0||a.length===0||Array.isArray(Ye(e,tn(a)))?Ht(a):Ja(a)}function Xs(e,t){if(t.length===1){var n=Ia(t);if(n.op==="replace")return Ht(Jo(e,n.path))}if(!un(t)&&t.every(s=>s.op==="move")){var o=Ia(t),a=t.slice(1);if((Xd(o)||Fi(o))&&o.from!==o.path&&a.every(s=>(Xd(s)||Fi(s))&&s.from===s.path))return Ja(Jo(e,o.path))}var i=t.filter(s=>s.op!=="test"&&s.op!=="remove"&&(s.op!=="move"||s.from!==s.path)&&typeof s.path=="string").map(s=>Jo(e,s.path));if(!un(i))return{type:Pn.multi,anchorPath:Ia(i),focusPath:Wt(i)}}function m0(e,t){for(var n=0;n<e.length&&n<t.length&&e[n]===t[n];)n++;return e.slice(0,n)}function wu(e){return qr(e)||cn(e)||Zu(e)}function ah(e,t){return wu(t)&&ir(Ye(e,rt(t)))?rt(t):tn(rt(t))}function ha(e,t){if(e.length<t.length)return!1;for(var n=0;n<t.length;n++)if(e[n]!==t[n])return!1;return!0}function la(e){if(Dr(e)){var{type:t,path:n}=e;return{type:t,path:n}}return e}function Ja(e){return{type:Pn.key,path:e}}function _f(e,t){return{type:Pn.key,path:e,edit:!0,initialValue:t}}function Ht(e){return{type:Pn.value,path:e}}function ku(e,t){return{type:Pn.value,path:e,edit:!0,initialValue:t}}function Ka(e){return{type:Pn.inside,path:e}}function La(e){return{type:Pn.after,path:e}}function oo(e,t){var n=m0(e,t),o=e.length>n.length&&t.length>n.length;return{type:Pn.multi,anchorPath:o?n.concat(e[n.length]):n,focusPath:o?n.concat(t[n.length]):n}}function b0(e,t,n,o){if(qr(t))return String(Wt(t.path));if(cn(t)){var a=Ye(e,t.path);return typeof a=="string"?a:o.stringify(a,null,n)}if(Rn(t)){if(un(t.focusPath))return o.stringify(e,null,n);var i=g0(t),s=Ye(e,i);if(Array.isArray(s)){if(Zu(t)){var l=Ye(e,t.focusPath);return o.stringify(l,null,n)}return Si(e,t).map(c=>{var u=Ye(e,c);return"".concat(o.stringify(u,null,n),",")}).join(`
`)}return Si(e,t).map(c=>{var u=Wt(c),d=Ye(e,c);return"".concat(o.stringify(u),": ").concat(o.stringify(d,null,n),",")}).join(`
`)}}function Dr(e){return(qr(e)||cn(e))&&e.edit===!0}function Ms(e){return qr(e)||cn(e)||Rn(e)}function Ic(e){return qr(e)||cn(e)||Zu(e)}function xv(e){switch(e.type){case Wo.key:return Ja(e.path);case Wo.value:return Ht(e.path);case Wo.after:return La(e.path);case Wo.inside:return Ka(e.path)}}function ih(e,t){switch(e){case Pn.key:return Ja(t);case Pn.value:return Ht(t);case Pn.after:return La(t);case Pn.inside:return Ka(t);case Pn.multi:case Pn.text:return oo(t,t)}}function qc(e,t,n){if(t)return Yl(e,t,n)||ha(Rn(t)?tn(t.focusPath):t.path,n)?t:void 0}function Yl(e,t,n){if(e===void 0||!t)return!1;if(qr(t)||zr(t)||lo(t))return Lt(t.path,n);if(cn(t))return ha(n,t.path);if(Rn(t)){var o=$a(e,t),a=ji(e,t),i=tn(t.focusPath);if(!ha(n,i)||n.length<=i.length)return!1;var s=Ba(e,t,o),l=Ba(e,t,a),c=Ba(e,t,n);return c!==-1&&c>=s&&c<=l}return!1}function Ba(e,t,n){var o=tn(t.focusPath);if(!ha(n,o)||n.length<=o.length)return-1;var a=n[o.length],i=Ye(e,o);if(yr(i))return Object.keys(i).indexOf(a);if(vr(i)){var s=Yr(a);if(s<i.length)return s}return-1}function rt(e){return Rn(e)?e.focusPath:e.path}function Ji(e){return Rn(e)?e.anchorPath:e.path}function ta(){for(var e=[],t=arguments.length,n=new Array(t),o=0;o<t;o++)n[o]=arguments[o];for(var a of n)if(typeof a=="string"&&e.push(a),a&&typeof a=="object")for(var i in a)Object.hasOwnProperty.call(a,i)&&a[i]&&e.push(i);return e.join(" ")}function y0(e,t,n){return ta("jse-value","jse-"+ff(e,n),{"jse-url":Gu(e),"jse-empty":typeof e=="string"&&e.length===0,"jse-table-cell":t===kr.table})}St(`/* over all fonts, sizes, and colors */
/* "consolas" for Windows, "menlo" for Mac with fallback to "monaco", 'Ubuntu Mono' for Ubuntu */
/* (at Mac this font looks too large at 14px, but 13px is too small for the font on Windows) */
/* main, menu, modal */
/* jsoneditor modal */
/* tooltip in text mode */
/* panels: navigation bar, gutter, search box */
/* navigation-bar */
/* context menu */
/* contents: json key and values */
/* contents: selected or hovered */
/* contents: section of collapsed items in an array */
/* contents: highlighting of search matches */
/* contents: inline tags inside the JSON document */
/* contents: table */
/* controls in modals: inputs, buttons, and \`a\` */
/* messages */
/* svelte-select */
/* color picker */
.jse-value.jse-string.svelte-1r0oryi {
  color: var(--jse-value-color-string, #008000);
}
.jse-value.jse-object.svelte-1r0oryi, .jse-value.jse-array.svelte-1r0oryi {
  min-width: 16px;
  color: var(--jse-delimiter-color, rgba(0, 0, 0, 0.38));
}
.jse-value.jse-number.svelte-1r0oryi {
  color: var(--jse-value-color-number, #ee422e);
}
.jse-value.jse-boolean.svelte-1r0oryi {
  color: var(--jse-value-color-boolean, #ff8c00);
}
.jse-value.jse-null.svelte-1r0oryi {
  color: var(--jse-value-color-null, #004ed0);
}
.jse-value.jse-invalid.svelte-1r0oryi {
  color: var(--jse-text-color, #4d4d4d);
}
.jse-value.jse-url.svelte-1r0oryi {
  color: var(--jse-value-color-url, #008000);
  text-decoration: underline;
}

div.jse-editable-div.svelte-1r0oryi {
  min-width: 2em;
  padding: 0 5px;
  box-sizing: border-box;
  outline: none;
  border-radius: 1px;
  vertical-align: top;
  cursor: text !important;
  word-break: normal;
  white-space: pre-wrap;
  overflow-wrap: anywhere;
}
div.jse-editable-div.jse-short-text.svelte-1r0oryi {
  overflow-wrap: normal;
}
div.jse-editable-div.jse-table-cell.svelte-1r0oryi {
  overflow-wrap: normal;
  white-space: nowrap;
}
div.jse-editable-div[contenteditable=true].svelte-1r0oryi {
  outline: var(--jse-edit-outline, 2px solid #656565);
  background: var(--jse-background-color, #fff);
  position: relative;
  display: inline-block;
  border-radius: 0;
  z-index: 3;
}
div.jse-editable-div.jse-empty.svelte-1r0oryi:not(:focus) {
  outline: 1px dotted var(--jse-tag-background, rgba(0, 0, 0, 0.2));
  -moz-outline-radius: 2px;
}
div.jse-editable-div.jse-empty.svelte-1r0oryi::after {
  pointer-events: none;
  color: var(--jse-tag-background, rgba(0, 0, 0, 0.2));
}`);var Nw=te('<div role="textbox" tabindex="0" contenteditable="true" spellcheck="false"></div>');function j0(e,t){lt(t,!1);var n=Lr("jsoneditor:EditableDiv"),o=g(t,"value",9),a=g(t,"initialValue",9),i=g(t,"shortText",9,!1),s=g(t,"label",9),l=g(t,"onChange",9),c=g(t,"onCancel",9),u=g(t,"onFind",9),d=g(t,"onPaste",9,Tr),v=g(t,"onValueClass",9,()=>""),p=$(void 0,!0),b=$(void 0,!0),m=!1;function h(){return r(p)?function(C){return C.replace(/\n$/,"")}(r(p).innerText):""}function j(C){r(p)&&wo(p,r(p).innerText=Qs(C))}no(()=>{n("onMount",{value:o(),initialValue:a()}),j(a()!==void 0?a():o()),r(p)&&function(C){if(C.firstChild!=null){var A=document.createRange(),O=window.getSelection();A.setStart(C,1),A.collapse(!0),O?.removeAllRanges(),O?.addRange(A)}else C.focus()}(r(p))}),Io(()=>{var C=h();n("onDestroy",{closed:m,value:o(),newValue:C}),m||C===o()||l()(C,yi.no)}),Z(()=>(y(v()),y(o())),()=>{f(b,v()(o()))}),jn(),At(!0);var x=Nw();Qn(x,C=>f(p,C),()=>r(p)),ze(C=>{yn(x,"aria-label",s()),Mt(x,1,C,"svelte-1r0oryi")},[()=>Ci((y(ta),r(b),y(i()),D(()=>ta("jse-editable-div",r(b),{"jse-short-text":i()}))))]),Ce("input",x,function(){var C=h();C===""&&j(""),f(b,v()(C))}),Ce("keydown",x,function(C){C.stopPropagation();var A=Ha(C);if(A==="Escape"&&(C.preventDefault(),m=!0,c()()),A==="Enter"||A==="Tab"){C.preventDefault(),m=!0;var O=h();l()(O,yi.nextInside)}A==="Ctrl+F"&&(C.preventDefault(),u()(!1)),A==="Ctrl+H"&&(C.preventDefault(),u()(!0))}),Ce("paste",x,function(C){if(C.stopPropagation(),d()&&C.clipboardData){var A=C.clipboardData.getData("text/plain");d()(A)}}),Ce("blur",x,function(){var C=document.hasFocus(),A=h();n("handleBlur",{hasFocus:C,closed:m,value:o(),newValue:A}),document.hasFocus()&&!m&&(m=!0,A!==o()&&l()(A,yi.self))}),P(e,x),ct()}function $w(e,t){lt(t,!1);var n=g(t,"path",9),o=g(t,"value",9),a=g(t,"selection",9),i=g(t,"mode",9),s=g(t,"parser",9),l=g(t,"normalization",9),c=g(t,"enforceString",9),u=g(t,"onPatch",9),d=g(t,"onPasteJson",9),v=g(t,"onSelect",9),p=g(t,"onFind",9),b=g(t,"focus",9),m=g(t,"findNextInside",9);function h(A){return c()?A:cl(A,s())}function j(){v()(Ht(n())),b()()}At(!0);var x=Ze(()=>(y(l()),y(o()),D(()=>l().escapeValue(o())))),C=Ze(()=>(y(Dr),y(a()),D(()=>Dr(a())?a().initialValue:void 0)));j0(e,{get value(){return r(x)},get initialValue(){return r(C)},label:"Edit value",onChange:function(A,O){u()([{op:"replace",path:dt(n()),value:h(l().unescapeValue(A))}],(w,z,R)=>{if(!R||Lt(n(),rt(R)))return{state:z,selection:O===yi.nextInside?m()(n()):Ht(n())}}),b()()},onCancel:j,onPaste:function(A){try{var O=s().parse(A);ir(O)&&d()({path:n(),contents:O,onPasteAsJson:()=>{j();var w=[{op:"replace",path:dt(n()),value:O}];u()(w,(z,R)=>({state:ns(z,R,n())}))}})}catch{}},get onFind(){return p()},onValueClass:function(A){return y0(h(l().unescapeValue(A)),i(),s())}}),ct()}function As(e,t,n){var o=tn(t),a=Ye(e,o);if(vr(a)){var i=Yr(Wt(t));return n.map((u,d)=>({op:"add",path:dt(o.concat(String(i+d))),value:u.value}))}if(yr(a)){var s=Wt(t),l=Object.keys(a),c=s!==void 0?hc(l,s,!0):[];return[...n.map(u=>{var d=pc(u.key,l);return{op:"add",path:dt(o.concat(d)),value:u.value}}),...c.map(u=>Oi(o,u))]}throw new Error("Cannot create insert operations: parent must be an Object or Array")}function wv(e,t,n){var o=Ye(e,t);if(Array.isArray(o)){var a=o.length;return n.map((i,s)=>({op:"add",path:dt(t.concat(String(a+s))),value:i.value}))}return n.map(i=>{var s=pc(i.key,Object.keys(o));return{op:"add",path:dt(t.concat(s)),value:i.value}})}function gc(e,t,n,o){var a=t.filter(l=>l!==n),i=pc(o,a),s=hc(t,n,!1);return[{op:"move",from:dt(e.concat(n)),path:dt(e.concat(i))},...s.map(l=>Oi(e,l))]}function x0(e,t){var n=Wt(t);if(un(n))throw new Error("Cannot duplicate root object");var o=tn(n),a=Wt(n),i=Ye(e,o);if(vr(i)){var s=Wt(t),l=s?Yr(Wt(s))+1:0;return[...t.map((d,v)=>({op:"copy",from:dt(d),path:dt(o.concat(String(v+l)))}))]}if(yr(i)){var c=Object.keys(i),u=a!==void 0?hc(c,a,!1):[];return[...t.map(d=>{var v=pc(Wt(d),c);return{op:"copy",from:dt(d),path:dt(o.concat(v))}}),...u.map(d=>Oi(o,d))]}throw new Error("Cannot create duplicate operations: parent must be an Object or Array")}function w0(e,t){if(cn(t))return[{op:"move",from:dt(t.path),path:""}];if(!Rn(t))throw new Error("Cannot create extract operations: parent must be an Object or Array");var n=tn(t.focusPath),o=Ye(e,n);if(vr(o)){var a=Si(e,t).map(s=>{var l=Yr(Wt(s));return o[l]});return[{op:"replace",path:"",value:a}]}if(yr(o)){var i={};return Si(e,t).forEach(s=>{var l=String(Wt(s));i[l]=o[l]}),[{op:"replace",path:"",value:i}]}throw new Error("Cannot extract: unsupported type of selection "+JSON.stringify(t))}function k0(e,t,n,o){if(qr(t)){var a=Xm(n,o),i=tn(t.path),s=Ye(e,i);return gc(i,Object.keys(s),Wt(t.path),typeof a=="string"?a:n)}if(cn(t)||Rn(t)&&un(t.focusPath))try{return[{op:"replace",path:dt(rt(t)),value:vc(n,z=>dc(z,o))}]}catch{return[{op:"replace",path:dt(rt(t)),value:n}]}if(Rn(t)){var l=Id(n,o);return function(z,R,Y){var E=Ia(R),K=tn(E),J=Ye(z,K);if(vr(J)){var U=Ia(R),ae=U?Yr(Wt(U)):0;return[...Cu(R),...Y.map((Pe,ot)=>({op:"add",path:dt(K.concat(String(ot+ae))),value:Pe.value}))]}if(yr(J)){var ge=Wt(R),se=tn(ge),Te=Wt(ge),De=Object.keys(J),Le=Te!==void 0?hc(De,Te,!1):[],je=new Set(R.map(Pe=>Wt(Pe))),Oe=De.filter(Pe=>!je.has(Pe));return[...Cu(R),...Y.map(Pe=>{var ot=pc(Pe.key,Oe);return{op:"add",path:dt(se.concat(ot)),value:Pe.value}}),...Le.map(Pe=>Oi(se,Pe))]}throw new Error("Cannot create replace operations: parent must be an Object or Array")}(e,Si(e,t),l)}if(lo(t)){var c=Id(n,o),u=t.path,d=tn(u),v=Ye(e,d);if(vr(v)){var p=Yr(Wt(u));return As(e,d.concat(String(p+1)),c)}if(yr(v)){var b=String(Wt(u)),m=Object.keys(v);if(un(m)||Wt(m)===b)return wv(e,d,c);var h=m.indexOf(b),j=m[h+1];return As(e,d.concat(j),c)}throw new Error("Cannot create insert operations: parent must be an Object or Array")}if(zr(t)){var x=Id(n,o),C=t.path,A=Ye(e,C);if(vr(A))return As(e,C.concat("0"),x);if(yr(A)){var O=Object.keys(A);if(un(O))return wv(e,C,x);var w=Ia(O);return As(e,C.concat(w),x)}throw new Error("Cannot create insert operations: parent must be an Object or Array")}throw new Error("Cannot insert: unsupported type of selection "+JSON.stringify(t))}function Cu(e){return e.map(t=>({op:"remove",path:dt(t)})).reverse()}function Oi(e,t){return{op:"move",from:dt(e.concat(t)),path:dt(e.concat(t))}}function Id(e,t){var n=/^\s*{/.test(e),o=/^\s*\[/.test(e),a=Xm(e,t),i=a!==void 0?a:vc(e,s=>dc(s,t));return n&&mn(i)||o&&Array.isArray(i)?[{key:"New item",value:i}]:Array.isArray(i)?i.map((s,l)=>({key:"New item "+l,value:s})):mn(i)?Object.keys(i).map(s=>({key:s,value:i[s]})):[{key:"New item",value:i}]}function C0(e,t){if(qr(t)){var n=tn(t.path),o=Ye(e,n),a=gc(n,Object.keys(o),Wt(t.path),"");return{operations:a,newSelection:Xs(e,a)}}if(cn(t))return{operations:[{op:"replace",path:dt(t.path),value:""}],newSelection:t};if(Rn(t)){var i=Si(e,t),s=Cu(i),l=Wt(i);if(un(l))return{operations:[{op:"replace",path:"",value:""}],newSelection:Ht([])};var c=tn(l),u=Ye(e,c);if(vr(u)){var d=Ia(i),v=Yr(Wt(d));return{operations:s,newSelection:v===0?Ka(c):La(c.concat(String(v-1)))}}if(yr(u)){var p=Object.keys(u),b=Ia(i),m=Wt(b),h=p.indexOf(m),j=p[h-1];return{operations:s,newSelection:h===0?Ka(c):La(c.concat(j))}}throw new Error("Cannot create remove operations: parent must be an Object or Array")}throw new Error("Cannot remove: unsupported type of selection "+JSON.stringify(t))}function S0(e,t){var n=function(o,a){if(un(a)||!a.every(Fi))return a;var i=[];for(var s of a){var l=sh(fo(s.from)),c=sh(fo(s.path));if(!l||!c)return a;i.push({from:l,path:c,operation:s})}var u=i[0].path.parent,d=Ye(o,u);if(!yr(d)||!i.every(m=>function(h,j){return Lt(h.from.parent,j)&&Lt(h.path.parent,j)}(m,u)))return a;var v=function(m,h){var j=Object.keys(h),x=j.slice();for(var C of m){var A=x.indexOf(C.from.key);A!==-1&&(x.splice(A,1),x.push(C.path.key))}for(var O=0;O<j.length&&j[O]===x[O];)O++;return x[O]}(i,o),p=m=>m.operation,b=i.filter(m=>m.operation.from!==m.operation.path);return b.some(m=>m.path.key===v)?b.map(p):[Oi(u,v),...b.map(p)]}(e,t);return Ag(e,n,{before:(o,a,i)=>{if(Og(a)){var s=fo(a.path);return{revertOperations:[...i,...qd(o,s)]}}if(Fi(a)){var l=fo(a.from);return{revertOperations:a.from===a.path?[a,...qd(o,l)]:[...i,...qd(o,l)]}}return{document:o}}})}function sh(e){return e.length>0?{parent:tn(e),key:Wt(e)}:void 0}function qd(e,t){var n=tn(t),o=Wt(t),a=Ye(e,n);return yr(a)?hc(Object.keys(a),o,!1).map(i=>Oi(n,i)):[]}function lh(e){var t=e.activeIndex<e.items.length-1?e.activeIndex+1:e.items.length>0?0:-1,n=e.items[t],o=e.items.map((a,i)=>Ae(Ae({},a),{},{active:i===t}));return Ae(Ae({},e),{},{items:o,activeItem:n,activeIndex:t})}function ch(e,t){var n,o=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{},a=e.toLowerCase(),i=(n=o?.maxResults)!==null&&n!==void 0?n:1/0,s=o?.columns,l=[],c=[];function u(j){l.length>=i||l.push(j)}function d(j,x){if(vr(x)){var C=c.length;c.push("0");for(var A=0;A<x.length;A++)if(c[C]=String(A),d(j,x[A]),l.length>=i)return;c.pop()}else if(yr(x)){var O=Object.keys(x),w=c.length;for(var z of(c.push(""),O))if(c[w]=z,uh(z,j,c,Yo.key,u),d(j,x[z]),l.length>=i)return;c.pop()}else uh(String(x),j,c,Yo.value,u)}if(e==="")return[];if(s){if(!Array.isArray(t))throw new Error("json must be an Array when option columns is defined");for(var v=0;v<t.length;v++){c[0]=String(v);for(var p=t[v],b=0;b<s.length;b++){var m=s[b];if(m.length===1)c[1]=m[0];else for(var h=0;h<m.length;h++)c[h+1]=m[h];for(;c.length>m.length+1;)c.pop();d(a,Ye(p,m))}if(l.length>=i)break}return l}return d(a,t),l}function uh(e,t,n,o,a){var i=e.toLowerCase(),s=0,l=-1,c=-1;do(c=i.indexOf(t,l))!==-1&&(l=c+t.length,a({path:n.slice(0),field:o,fieldIndex:s,start:c,end:l}),s++);while(c!==-1)}function kv(e,t,n,o){return e.substring(0,n)+t+e.substring(o)}function dh(e,t,n){var o=e;return Ly(n,a=>{o=kv(o,t,a.start,a.end)}),o}function Iw(e,t,n,o,a){var{field:i,path:s,start:l,end:c}=o;if(i===Yo.key){var u=tn(s),d=Ye(e,u),v=Wt(s),p=gc(u,Object.keys(d),v,kv(v,n,l,c));return{newSelection:Xs(e,p),operations:p}}if(i===Yo.value){var b=Ye(e,s);if(b===void 0)throw new Error("Cannot replace: path not found ".concat(dt(s)));var m=typeof b=="string"?b:String(b),h=da(e,t,s),j=kv(m,n,l,c),x=[{op:"replace",path:dt(s),value:h?j:cl(j,a)}];return{newSelection:Xs(e,x),operations:x}}throw new Error("Cannot replace: unknown type of search result field ".concat(i))}function vh(e){return e.path.concat(e.field,String(e.fieldIndex))}function fh(e){var t=d0(e)?e.searchResults.filter(n=>n.field===Yo.key):void 0;return t&&t.length>0?t:void 0}function ph(e){var t=d0(e)?e.searchResults.filter(n=>n.field===Yo.value):void 0;return t&&t.length>0?t:void 0}var qw={createObjectDocumentState:()=>({type:"object",properties:{}}),createArrayDocumentState:()=>({type:"array",items:[]}),createValueDocumentState:()=>({type:"value"})};function O0(e,t){return t.reduce((n,o)=>function(a,i,s,l){return Sf(a,i,s,l,qw)}(e,n,o.path,(a,i)=>Ae(Ae({},i),{},{searchResults:i.searchResults?i.searchResults.concat(o):[o]})),void 0)}function Su(e){var t,n=(t=e?.searchResults)!==null&&t!==void 0?t:[],o=uo(e)?Object.values(e.properties).flatMap(Su):Ur(e)?e.items.flatMap(Su):[];return n.concat(o)}St(`/* over all fonts, sizes, and colors */
/* "consolas" for Windows, "menlo" for Mac with fallback to "monaco", 'Ubuntu Mono' for Ubuntu */
/* (at Mac this font looks too large at 14px, but 13px is too small for the font on Windows) */
/* main, menu, modal */
/* jsoneditor modal */
/* tooltip in text mode */
/* panels: navigation bar, gutter, search box */
/* navigation-bar */
/* context menu */
/* contents: json key and values */
/* contents: selected or hovered */
/* contents: section of collapsed items in an array */
/* contents: highlighting of search matches */
/* contents: inline tags inside the JSON document */
/* contents: table */
/* controls in modals: inputs, buttons, and \`a\` */
/* messages */
/* svelte-select */
/* color picker */
.jse-highlight.svelte-19qyvy6 {
  background-color: var(--jse-search-match-color, #ffe665);
  outline: var(--jse-search-match-outline, none);
}
.jse-highlight.jse-active.svelte-19qyvy6 {
  background-color: var(--jse-search-match-active-color, var(--jse-search-match-color, #ffe665));
  outline: var(--jse-search-match-outline, 2px solid #e0be00);
}`);var Dw=te("<span> </span>");function E0(e,t){lt(t,!1);var n=$(),o=g(t,"text",8),a=g(t,"searchResultItems",8);Z(()=>(y(o()),y(a())),()=>{f(n,function(s,l){var c=[],u=0;for(var d of l){var v=s.slice(u,d.start);v!==""&&c.push({resultIndex:void 0,type:"normal",text:v,active:!1});var p=s.slice(d.start,d.end);c.push({resultIndex:d.resultIndex,type:"highlight",text:p,active:d.active}),u=d.end}var b=Wt(l);return b&&b.end<s.length&&c.push({type:"normal",text:s.slice(b.end),resultIndex:void 0,active:!1}),c}(String(o()),a()))}),jn(),At();var i=Ut();fr(Xe(i),1,()=>r(n),Cr,(s,l)=>{var c=Ut(),u=Xe(c),d=p=>{var b=Wr();ze(()=>ut(b,(r(l),D(()=>r(l).text)))),P(p,b)},v=p=>{var b,m=Dw(),h=N(m);ze((j,x)=>{b=Mt(m,1,"jse-highlight svelte-19qyvy6",null,b,{"jse-active":r(l).active}),yn(m,"data-search-result-index",j),ut(h,x)},[()=>(r(l),D(()=>String(r(l).resultIndex))),()=>(y(Qs),r(l),D(()=>Qs(r(l).text)))]),P(p,m)};ie(u,p=>{r(l),D(()=>r(l).type==="normal")?p(d):p(v,!1)}),P(s,c)}),P(e,i),ct()}function tu(e){var t=1e3;if(e<900)return e.toFixed()+" B";var n=e/t;if(n<900)return n.toFixed(1)+" KB";var o=n/t;if(o<900)return o.toFixed(1)+" MB";var a=o/t;return a<900?a.toFixed(1)+" GB":(a/t).toFixed(1)+" TB"}St(`/* over all fonts, sizes, and colors */
/* "consolas" for Windows, "menlo" for Mac with fallback to "monaco", 'Ubuntu Mono' for Ubuntu */
/* (at Mac this font looks too large at 14px, but 13px is too small for the font on Windows) */
/* main, menu, modal */
/* jsoneditor modal */
/* tooltip in text mode */
/* panels: navigation bar, gutter, search box */
/* navigation-bar */
/* context menu */
/* contents: json key and values */
/* contents: selected or hovered */
/* contents: section of collapsed items in an array */
/* contents: highlighting of search matches */
/* contents: inline tags inside the JSON document */
/* contents: table */
/* controls in modals: inputs, buttons, and \`a\` */
/* messages */
/* svelte-select */
/* color picker */
.jse-tag.svelte-ubve9r {
  border: none;
  font-size: 80%;
  font-family: var(--jse-font-family, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen-Sans, Ubuntu, Cantarell, "Helvetica Neue", sans-serif);
  color: var(--jse-tag-color, var(--jse-text-color-inverse, #fff));
  background: var(--jse-tag-background, rgba(0, 0, 0, 0.2));
  border-radius: 2px;
  cursor: pointer;
  display: inline-block;
  padding: 0 4px;
  line-height: normal;
  margin: 1px 0;
}
.jse-tag.svelte-ubve9r:hover {
  opacity: 0.8;
}
.jse-tag.disabled.svelte-ubve9r {
  opacity: 0.7;
  cursor: inherit;
}`);var Uw=te('<button type="button"><!></button>');function nu(e,t){lt(t,!0);var n,o=vo(()=>t.onclick?i=>{i.preventDefault(),i.stopPropagation(),t.onclick()}:void 0),a=Uw();a.__click=function(){for(var i,s=arguments.length,l=new Array(s),c=0;c<s;c++)l[c]=arguments[c];(i=r(o))===null||i===void 0||i.apply(this,l)},function(i,s){for(var l=arguments.length,c=new Array(l>2?l-2:0),u=2;u<l;u++)c[u-2]=arguments[u];var d=new Yu(i);sl(()=>{var v,p=(v=s())!==null&&v!==void 0?v:null;d.ensure(p,p&&(b=>p(b,...c)))},Qi)}(N(a),()=>{var i;return(i=t.children)!==null&&i!==void 0?i:vx}),ze(()=>n=Mt(a,1,"jse-tag svelte-ubve9r",null,n,{disabled:!t.onclick})),P(e,a),ct()}uc(["click"]);St(`/* over all fonts, sizes, and colors */
/* "consolas" for Windows, "menlo" for Mac with fallback to "monaco", 'Ubuntu Mono' for Ubuntu */
/* (at Mac this font looks too large at 14px, but 13px is too small for the font on Windows) */
/* main, menu, modal */
/* jsoneditor modal */
/* tooltip in text mode */
/* panels: navigation bar, gutter, search box */
/* navigation-bar */
/* context menu */
/* contents: json key and values */
/* contents: selected or hovered */
/* contents: section of collapsed items in an array */
/* contents: highlighting of search matches */
/* contents: inline tags inside the JSON document */
/* contents: table */
/* controls in modals: inputs, buttons, and \`a\` */
/* messages */
/* svelte-select */
/* color picker */
.jse-value.jse-string.svelte-1saqp8c {
  color: var(--jse-value-color-string, #008000);
}
.jse-value.jse-object.svelte-1saqp8c, .jse-value.jse-array.svelte-1saqp8c {
  min-width: 16px;
  color: var(--jse-delimiter-color, rgba(0, 0, 0, 0.38));
}
.jse-value.jse-number.svelte-1saqp8c {
  color: var(--jse-value-color-number, #ee422e);
}
.jse-value.jse-boolean.svelte-1saqp8c {
  color: var(--jse-value-color-boolean, #ff8c00);
}
.jse-value.jse-null.svelte-1saqp8c {
  color: var(--jse-value-color-null, #004ed0);
}
.jse-value.jse-invalid.svelte-1saqp8c {
  color: var(--jse-text-color, #4d4d4d);
}
.jse-value.jse-url.svelte-1saqp8c {
  color: var(--jse-value-color-url, #008000);
  text-decoration: underline;
}

.jse-value.svelte-1saqp8c {
  display: inline-block;
  min-width: 2em;
  padding: 0 5px;
  box-sizing: border-box;
  outline: none;
  border-radius: 1px;
  vertical-align: top;
  word-break: normal;
  overflow-wrap: anywhere;
  white-space: pre-wrap;
}
.jse-value.jse-table-cell.svelte-1saqp8c {
  overflow-wrap: normal;
  white-space: nowrap;
}
.jse-value.jse-empty.svelte-1saqp8c {
  min-width: 4em;
  outline: 1px dotted var(--jse-tag-background, rgba(0, 0, 0, 0.2));
  -moz-outline-radius: 2px;
}
.jse-value.jse-empty.svelte-1saqp8c::after {
  pointer-events: none;
  color: var(--jse-tag-background, rgba(0, 0, 0, 0.2));
  content: "value";
}`);var Lw=te('<div role="button" tabindex="-1" data-type="selectable-value"><!> <!></div>');function Bw(e,t){lt(t,!0);var n=_a(!0),o=vo(()=>r(n)&&typeof t.value=="string"&&t.value.length>t.truncateTextSize&&(!t.searchResultItems||!t.searchResultItems.some(b=>b.active&&b.end>t.truncateTextSize))),a=vo(()=>r(o)&&typeof t.value=="string"?t.value.substring(0,t.truncateTextSize).trim():t.value),i=vo(()=>Gu(t.value));function s(){f(n,!1)}var l=Lw();l.__click=function(b){typeof t.value=="string"&&r(i)&&bf(b)&&(b.preventDefault(),b.stopPropagation(),window.open(t.value,"_blank"))},l.__dblclick=function(b){t.readOnly||(b.preventDefault(),t.onSelect(ku(t.path)))};var c=N(l),u=b=>{var m=vo(()=>t.normalization.escapeValue(r(a)));E0(b,{get text(){return r(m)},get searchResultItems(){return t.searchResultItems}})},d=b=>{var m=Wr();ze(h=>ut(m,h),[()=>Qs(t.normalization.escapeValue(r(a)))]),P(b,m)};ie(c,b=>{t.searchResultItems?b(u):b(d,!1)});var v=W(c,2),p=b=>{nu(b,{onclick:s,children:(m,h)=>{var j=Wr();ze(x=>ut(j,"Show more (".concat(x??"",")")),[()=>tu(t.value.length)]),P(m,j)},$$slots:{default:!0}})};ie(v,b=>{r(o)&&typeof t.value=="string"&&b(p)}),ze(b=>{Mt(l,1,b,"svelte-1saqp8c"),yn(l,"title",r(i)?"Ctrl+Click or Ctrl+Enter to open url in new window":void 0)},[()=>Ci(y0(t.value,t.mode,t.parser))]),P(e,l),ct()}uc(["click","dblclick"]);St(`/* over all fonts, sizes, and colors */
/* "consolas" for Windows, "menlo" for Mac with fallback to "monaco", 'Ubuntu Mono' for Ubuntu */
/* (at Mac this font looks too large at 14px, but 13px is too small for the font on Windows) */
/* main, menu, modal */
/* jsoneditor modal */
/* tooltip in text mode */
/* panels: navigation bar, gutter, search box */
/* navigation-bar */
/* context menu */
/* contents: json key and values */
/* contents: selected or hovered */
/* contents: section of collapsed items in an array */
/* contents: highlighting of search matches */
/* contents: inline tags inside the JSON document */
/* contents: table */
/* controls in modals: inputs, buttons, and \`a\` */
/* messages */
/* svelte-select */
/* color picker */
.jse-tooltip.svelte-brt1mq {
  font-family: var(--jse-font-family, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen-Sans, Ubuntu, Cantarell, "Helvetica Neue", sans-serif);
  font-size: var(--jse-font-size, 16px);
  line-height: normal;
  padding: calc(0.5 * var(--jse-padding, 10px)) var(--jse-padding, 10px);
  border-radius: 3px;
  background: var(--jse-context-menu-background, #656565);
  color: var(--jse-context-menu-color, var(--jse-text-color-inverse, #fff));
  white-space: nowrap;
  box-shadow: var(--jse-controls-box-shadow, 0 2px 6px 0 rgba(0, 0, 0, 0.24));
}`);var Fw=te('<div class="jse-tooltip svelte-brt1mq"> </div>');function Ww(e,t){var n=g(t,"text",8),o=Fw(),a=N(o);ze(()=>ut(a,n())),P(e,o)}function Zs(e,t){var n,{text:o,openAbsolutePopup:a,closeAbsolutePopup:i}=t;function s(){n=a(Ww,{text:o},{position:"top",width:10*o.length,offsetTop:3,anchor:e,closeOnOuterClick:!0})}function l(){i(n)}return e.addEventListener("mouseenter",s),e.addEventListener("mouseleave",l),{destroy(){e.removeEventListener("mouseenter",s),e.removeEventListener("mouseleave",l)}}}St(`/* over all fonts, sizes, and colors */
/* "consolas" for Windows, "menlo" for Mac with fallback to "monaco", 'Ubuntu Mono' for Ubuntu */
/* (at Mac this font looks too large at 14px, but 13px is too small for the font on Windows) */
/* main, menu, modal */
/* jsoneditor modal */
/* tooltip in text mode */
/* panels: navigation bar, gutter, search box */
/* navigation-bar */
/* context menu */
/* contents: json key and values */
/* contents: selected or hovered */
/* contents: section of collapsed items in an array */
/* contents: highlighting of search matches */
/* contents: inline tags inside the JSON document */
/* contents: table */
/* controls in modals: inputs, buttons, and \`a\` */
/* messages */
/* svelte-select */
/* color picker */
.jse-timestamp.svelte-1jcpman {
  padding: 0;
  margin: 0;
  vertical-align: middle;
  display: inline-flex;
  color: var(--jse-value-color-number, #ee422e);
}`);var Vw=te('<div class="jse-timestamp svelte-1jcpman"><!></div>');function Hw(e,t){lt(t,!1);var n=$(void 0,!0),o=Ei("absolute-popup"),a=g(t,"value",9);Z(()=>y(a()),()=>{f(n,"Time: ".concat(new Date(a()).toString()))}),jn(),At(!0);var i=Vw();nn(N(i),{get data(){return jj}}),io(i,(s,l)=>Zs?.(s,l),()=>Ae({text:r(n)},o)),P(e,i),ct()}function Jw(e){var t=[];return!e.isEditing&&Hx(e.value)&&t.push({component:kw,props:e}),!e.isEditing&&Jx(e.value)&&t.push({component:Ew,props:e}),e.isEditing&&t.push({component:$w,props:e}),e.isEditing||t.push({component:Bw,props:e}),!e.isEditing&&fv(e.value)&&t.push({component:Hw,props:e}),t}function Fr(e){return e.map((t,n)=>Yw.test(t)?"["+t+"]":/[.[\]]/.test(t)||t===""?'["'+function(o){return o.replace(/"/g,'\\"')}(t)+'"]':(n>0?".":"")+t).join("")}function Kw(e){for(var t=[],n=0;n<e.length;)e[n]==="."&&n++,e[n]==="["?(n++,e[n]==='"'?(n++,t.push(o(i=>i==='"',!0)),a('"')):t.push(o(i=>i==="]")),a("]")):t.push(o(i=>i==="."||i==="["));function o(i){for(var s=arguments.length>1&&arguments[1]!==void 0&&arguments[1],l="";n<e.length&&!i(e[n]);)s&&e[n]==="\\"&&e[n+1]==='"'?(l+='"',n+=2):(l+=e[n],n++);return l}function a(i){if(e[n]!==i)throw new SyntaxError("Invalid JSON path: ".concat(i," expected at position ").concat(n));n++}return t}function si(e){return{value:e,label:un(e)?"(item root)":Fr(e)}}var Yw=/^\d+$/,Qw={},Gw={showWizard:!0,showOriginal:!0},Ou=Math.min,Ki=Math.max,Eu=Math.round,Dc=Math.floor,ga=e=>({x:e,y:e}),Xw={left:"right",right:"left",bottom:"top",top:"bottom"},Zw={start:"end",end:"start"};function hh(e,t,n){return Ki(e,Ou(t,n))}function ed(e,t){return typeof e=="function"?e(t):e}function rs(e){return e.split("-")[0]}function td(e){return e.split("-")[1]}function _0(e){return e==="x"?"y":"x"}function M0(e){return e==="y"?"height":"width"}var ek=new Set(["top","bottom"]);function fi(e){return ek.has(rs(e))?"y":"x"}function A0(e){return _0(fi(e))}function Cv(e){return e.replace(/start|end/g,t=>Zw[t])}var gh=["left","right"],mh=["right","left"],tk=["top","bottom"],nk=["bottom","top"];function rk(e,t,n,o){var a=td(e),i=function(s,l,c){switch(s){case"top":case"bottom":return c?l?mh:gh:l?gh:mh;case"left":case"right":return l?tk:nk;default:return[]}}(rs(e),n==="start",o);return a&&(i=i.map(s=>s+"-"+a),t&&(i=i.concat(i.map(Cv)))),i}function Uc(e){return e.replace(/left|right|bottom|top/g,t=>Xw[t])}function ok(e){return typeof e!="number"?function(t){return Ae({top:0,right:0,bottom:0,left:0},t)}(e):{top:e,right:e,bottom:e,left:e}}function _u(e){var{x:t,y:n,width:o,height:a}=e;return{width:o,height:a,top:n,left:t,right:t+o,bottom:n+a,x:t,y:n}}function bh(e,t,n){var o,{reference:a,floating:i}=e,s=fi(t),l=A0(t),c=M0(l),u=rs(t),d=s==="y",v=a.x+a.width/2-i.width/2,p=a.y+a.height/2-i.height/2,b=a[c]/2-i[c]/2;switch(u){case"top":o={x:v,y:a.y-i.height};break;case"bottom":o={x:v,y:a.y+a.height};break;case"right":o={x:a.x+a.width,y:p};break;case"left":o={x:a.x-i.width,y:p};break;default:o={x:a.x,y:a.y}}switch(td(t)){case"start":o[l]-=b*(n&&d?-1:1);break;case"end":o[l]+=b*(n&&d?-1:1)}return o}var ak=function(){var e=mt(function*(t,n,o){for(var{placement:a="bottom",strategy:i="absolute",middleware:s=[],platform:l}=o,c=s.filter(Boolean),u=yield l.isRTL==null?void 0:l.isRTL(n),d=yield l.getElementRects({reference:t,floating:n,strategy:i}),{x:v,y:p}=bh(d,a,u),b=a,m={},h=0,j=0;j<c.length;j++){var{name:x,fn:C}=c[j],{x:A,y:O,data:w,reset:z}=yield C({x:v,y:p,initialPlacement:a,placement:b,strategy:i,middlewareData:m,rects:d,platform:l,elements:{reference:t,floating:n}});v=A??v,p=O??p,m=Ae(Ae({},m),{},{[x]:Ae(Ae({},m[x]),w)}),z&&h<=50&&(h++,typeof z=="object"&&(z.placement&&(b=z.placement),z.rects&&(d=z.rects===!0?yield l.getElementRects({reference:t,floating:n,strategy:i}):z.rects),{x:v,y:p}=bh(d,b,u)),j=-1)}return{x:v,y:p,placement:b,strategy:i,middlewareData:m}});return function(t,n,o){return e.apply(this,arguments)}}();function T0(e,t){return Sv.apply(this,arguments)}function Sv(){return Sv=mt(function*(e,t){var n;t===void 0&&(t={});var{x:o,y:a,platform:i,rects:s,elements:l,strategy:c}=e,{boundary:u="clippingAncestors",rootBoundary:d="viewport",elementContext:v="floating",altBoundary:p=!1,padding:b=0}=ed(t,e),m=ok(b),h=l[p?v==="floating"?"reference":"floating":v],j=_u(yield i.getClippingRect({element:(n=yield i.isElement==null?void 0:i.isElement(h))==null||n?h:h.contextElement||(yield i.getDocumentElement==null?void 0:i.getDocumentElement(l.floating)),boundary:u,rootBoundary:d,strategy:c})),x=v==="floating"?{x:o,y:a,width:s.floating.width,height:s.floating.height}:s.reference,C=yield i.getOffsetParent==null?void 0:i.getOffsetParent(l.floating),A=(yield i.isElement==null?void 0:i.isElement(C))&&(yield i.getScale==null?void 0:i.getScale(C))||{x:1,y:1},O=_u(i.convertOffsetParentRelativeRectToViewportRelativeRect?yield i.convertOffsetParentRelativeRectToViewportRelativeRect({elements:l,rect:x,offsetParent:C,strategy:c}):x);return{top:(j.top-O.top+m.top)/A.y,bottom:(O.bottom-j.bottom+m.bottom)/A.y,left:(j.left-O.left+m.left)/A.x,right:(O.right-j.right+m.right)/A.x}}),Sv.apply(this,arguments)}var ik=new Set(["left","top"]);function Ov(){return Ov=mt(function*(e,t){var{placement:n,platform:o,elements:a}=e,i=yield o.isRTL==null?void 0:o.isRTL(a.floating),s=rs(n),l=td(n),c=fi(n)==="y",u=ik.has(s)?-1:1,d=i&&c?-1:1,v=ed(t,e),{mainAxis:p,crossAxis:b,alignmentAxis:m}=typeof v=="number"?{mainAxis:v,crossAxis:0,alignmentAxis:null}:{mainAxis:v.mainAxis||0,crossAxis:v.crossAxis||0,alignmentAxis:v.alignmentAxis};return l&&typeof m=="number"&&(b=l==="end"?-1*m:m),c?{x:b*d,y:p*u}:{x:p*u,y:b*d}}),Ov.apply(this,arguments)}function nd(){return typeof window<"u"}function el(e){return z0(e)?(e.nodeName||"").toLowerCase():"#document"}function So(e){var t;return(e==null||(t=e.ownerDocument)==null?void 0:t.defaultView)||window}function ma(e){var t;return(t=(z0(e)?e.ownerDocument:e.document)||window.document)==null?void 0:t.documentElement}function z0(e){return!!nd()&&(e instanceof Node||e instanceof So(e).Node)}function Qo(e){return!!nd()&&(e instanceof Element||e instanceof So(e).Element)}function ba(e){return!!nd()&&(e instanceof HTMLElement||e instanceof So(e).HTMLElement)}function yh(e){return!(!nd()||typeof ShadowRoot>"u")&&(e instanceof ShadowRoot||e instanceof So(e).ShadowRoot)}var sk=new Set(["inline","contents"]);function Ql(e){var{overflow:t,overflowX:n,overflowY:o,display:a}=Go(e);return/auto|scroll|overlay|hidden|clip/.test(t+o+n)&&!sk.has(a)}var lk=new Set(["table","td","th"]);function ck(e){return lk.has(el(e))}var uk=[":popover-open",":modal"];function Mu(e){return uk.some(t=>{try{return e.matches(t)}catch{return!1}})}var dk=["transform","translate","scale","rotate","perspective"],vk=["transform","translate","scale","rotate","perspective","filter"],fk=["paint","layout","strict","content"];function Ev(e){var t=Mf(),n=Qo(e)?Go(e):e;return dk.some(o=>!!n[o]&&n[o]!=="none")||!!n.containerType&&n.containerType!=="normal"||!t&&!!n.backdropFilter&&n.backdropFilter!=="none"||!t&&!!n.filter&&n.filter!=="none"||vk.some(o=>(n.willChange||"").includes(o))||fk.some(o=>(n.contain||"").includes(o))}function Mf(){return!(typeof CSS>"u"||!CSS.supports)&&CSS.supports("-webkit-backdrop-filter","none")}var pk=new Set(["html","body","#document"]);function Ds(e){return pk.has(el(e))}function Go(e){return So(e).getComputedStyle(e)}function rd(e){return Qo(e)?{scrollLeft:e.scrollLeft,scrollTop:e.scrollTop}:{scrollLeft:e.scrollX,scrollTop:e.scrollY}}function pi(e){if(el(e)==="html")return e;var t=e.assignedSlot||e.parentNode||yh(e)&&e.host||ma(e);return yh(t)?t.host:t}function R0(e){var t=pi(e);return Ds(t)?e.ownerDocument?e.ownerDocument.body:e.body:ba(t)&&Ql(t)?t:R0(t)}function Gl(e,t,n){var o;t===void 0&&(t=[]),n===void 0&&(n=!0);var a=R0(e),i=a===((o=e.ownerDocument)==null?void 0:o.body),s=So(a);if(i){var l=_v(s);return t.concat(s,s.visualViewport||[],Ql(a)?a:[],l&&n?Gl(l):[])}return t.concat(a,Gl(a,[],n))}function _v(e){return e.parent&&Object.getPrototypeOf(e.parent)?e.frameElement:null}function P0(e){var t=Go(e),n=parseFloat(t.width)||0,o=parseFloat(t.height)||0,a=ba(e),i=a?e.offsetWidth:n,s=a?e.offsetHeight:o,l=Eu(n)!==i||Eu(o)!==s;return l&&(n=i,o=s),{width:n,height:o,$:l}}function Af(e){return Qo(e)?e:e.contextElement}function Us(e){var t=Af(e);if(!ba(t))return ga(1);var n=t.getBoundingClientRect(),{width:o,height:a,$:i}=P0(t),s=(i?Eu(n.width):n.width)/o,l=(i?Eu(n.height):n.height)/a;return s&&Number.isFinite(s)||(s=1),l&&Number.isFinite(l)||(l=1),{x:s,y:l}}var hk=ga(0);function N0(e){var t=So(e);return Mf()&&t.visualViewport?{x:t.visualViewport.offsetLeft,y:t.visualViewport.offsetTop}:hk}function os(e,t,n,o){t===void 0&&(t=!1),n===void 0&&(n=!1);var a=e.getBoundingClientRect(),i=Af(e),s=ga(1);t&&(o?Qo(o)&&(s=Us(o)):s=Us(e));var l=function(w,z,R){return z===void 0&&(z=!1),!(!R||z&&R!==So(w))&&z}(i,n,o)?N0(i):ga(0),c=(a.left+l.x)/s.x,u=(a.top+l.y)/s.y,d=a.width/s.x,v=a.height/s.y;if(i)for(var p=So(i),b=o&&Qo(o)?So(o):o,m=p,h=_v(m);h&&o&&b!==m;){var j=Us(h),x=h.getBoundingClientRect(),C=Go(h),A=x.left+(h.clientLeft+parseFloat(C.paddingLeft))*j.x,O=x.top+(h.clientTop+parseFloat(C.paddingTop))*j.y;c*=j.x,u*=j.y,d*=j.x,v*=j.y,c+=A,u+=O,h=_v(m=So(h))}return _u({width:d,height:v,x:c,y:u})}function Au(e,t){var n=rd(e).scrollLeft;return t?t.left+n:os(ma(e)).left+n}function $0(e,t){var n=e.getBoundingClientRect();return{x:n.left+t.scrollLeft-Au(e,n),y:n.top+t.scrollTop}}var gk=new Set(["absolute","fixed"]);function jh(e,t,n){var o;if(t==="viewport")o=function(i,s){var l=So(i),c=ma(i),u=l.visualViewport,d=c.clientWidth,v=c.clientHeight,p=0,b=0;if(u){d=u.width,v=u.height;var m=Mf();(!m||m&&s==="fixed")&&(p=u.offsetLeft,b=u.offsetTop)}var h=Au(c);if(h<=0){var j=c.ownerDocument,x=j.body,C=getComputedStyle(x),A=j.compatMode==="CSS1Compat"&&parseFloat(C.marginLeft)+parseFloat(C.marginRight)||0,O=Math.abs(c.clientWidth-x.clientWidth-A);O<=25&&(d-=O)}else h<=25&&(d+=h);return{width:d,height:v,x:p,y:b}}(e,n);else if(t==="document")o=function(i){var s=ma(i),l=rd(i),c=i.ownerDocument.body,u=Ki(s.scrollWidth,s.clientWidth,c.scrollWidth,c.clientWidth),d=Ki(s.scrollHeight,s.clientHeight,c.scrollHeight,c.clientHeight),v=-l.scrollLeft+Au(i),p=-l.scrollTop;return Go(c).direction==="rtl"&&(v+=Ki(s.clientWidth,c.clientWidth)-u),{width:u,height:d,x:v,y:p}}(ma(e));else if(Qo(t))o=function(i,s){var l=os(i,!0,s==="fixed"),c=l.top+i.clientTop,u=l.left+i.clientLeft,d=ba(i)?Us(i):ga(1);return{width:i.clientWidth*d.x,height:i.clientHeight*d.y,x:u*d.x,y:c*d.y}}(t,n);else{var a=N0(e);o={x:t.x-a.x,y:t.y-a.y,width:t.width,height:t.height}}return _u(o)}function I0(e,t){var n=pi(e);return!(n===t||!Qo(n)||Ds(n))&&(Go(n).position==="fixed"||I0(n,t))}function mk(e,t,n){var o=ba(t),a=ma(t),i=n==="fixed",s=os(e,!0,i,t),l={scrollLeft:0,scrollTop:0},c=ga(0);function u(){c.x=Au(a)}if(o||!o&&!i)if((el(t)!=="body"||Ql(a))&&(l=rd(t)),o){var d=os(t,!0,i,t);c.x=d.x+t.clientLeft,c.y=d.y+t.clientTop}else a&&u();i&&!o&&a&&u();var v=!a||o||i?ga(0):$0(a,l);return{x:s.left+l.scrollLeft-c.x-v.x,y:s.top+l.scrollTop-c.y-v.y,width:s.width,height:s.height}}function Dd(e){return Go(e).position==="static"}function xh(e,t){if(!ba(e)||Go(e).position==="fixed")return null;if(t)return t(e);var n=e.offsetParent;return ma(e)===n&&(n=n.ownerDocument.body),n}function wh(e,t){var n=So(e);if(Mu(e))return n;if(!ba(e)){for(var o=pi(e);o&&!Ds(o);){if(Qo(o)&&!Dd(o))return o;o=pi(o)}return n}for(var a=xh(e,t);a&&ck(a)&&Dd(a);)a=xh(a,t);return a&&Ds(a)&&Dd(a)&&!Ev(a)?n:a||function(i){for(var s=pi(i);ba(s)&&!Ds(s);){if(Ev(s))return s;if(Mu(s))return null;s=pi(s)}return null}(e)||n}var bk={convertOffsetParentRelativeRectToViewportRelativeRect:function(e){var{elements:t,rect:n,offsetParent:o,strategy:a}=e,i=a==="fixed",s=ma(o),l=!!t&&Mu(t.floating);if(o===s||l&&i)return n;var c={scrollLeft:0,scrollTop:0},u=ga(1),d=ga(0),v=ba(o);if((v||!v&&!i)&&((el(o)!=="body"||Ql(s))&&(c=rd(o)),ba(o))){var p=os(o);u=Us(o),d.x=p.x+o.clientLeft,d.y=p.y+o.clientTop}var b=!s||v||i?ga(0):$0(s,c);return{width:n.width*u.x,height:n.height*u.y,x:n.x*u.x-c.scrollLeft*u.x+d.x+b.x,y:n.y*u.y-c.scrollTop*u.y+d.y+b.y}},getDocumentElement:ma,getClippingRect:function(e){var{element:t,boundary:n,rootBoundary:o,strategy:a}=e,i=n==="clippingAncestors"?Mu(t)?[]:function(u,d){var v=d.get(u);if(v)return v;for(var p=Gl(u,[],!1).filter(C=>Qo(C)&&el(C)!=="body"),b=null,m=Go(u).position==="fixed",h=m?pi(u):u;Qo(h)&&!Ds(h);){var j=Go(h),x=Ev(h);x||j.position!=="fixed"||(b=null),(m?!x&&!b:!x&&j.position==="static"&&b&&gk.has(b.position)||Ql(h)&&!x&&I0(u,h))?p=p.filter(C=>C!==h):b=j,h=pi(h)}return d.set(u,p),p}(t,this._c):[].concat(n),s=[...i,o],l=s[0],c=s.reduce((u,d)=>{var v=jh(t,d,a);return u.top=Ki(v.top,u.top),u.right=Ou(v.right,u.right),u.bottom=Ou(v.bottom,u.bottom),u.left=Ki(v.left,u.left),u},jh(t,l,a));return{width:c.right-c.left,height:c.bottom-c.top,x:c.left,y:c.top}},getOffsetParent:wh,getElementRects:function(){var e=mt(function*(t){var n=this.getOffsetParent||wh,o=this.getDimensions,a=yield o(t.floating);return{reference:mk(t.reference,yield n(t.floating),t.strategy),floating:{x:0,y:0,width:a.width,height:a.height}}});return function(t){return e.apply(this,arguments)}}(),getClientRects:function(e){return Array.from(e.getClientRects())},getDimensions:function(e){var{width:t,height:n}=P0(e);return{width:t,height:n}},getScale:Us,isElement:Qo,isRTL:function(e){return Go(e).direction==="rtl"}};function kh(e,t){return e.x===t.x&&e.y===t.y&&e.width===t.width&&e.height===t.height}function yk(e,t,n,o){o===void 0&&(o={});var{ancestorScroll:a=!0,ancestorResize:i=!0,elementResize:s=typeof ResizeObserver=="function",layoutShift:l=typeof IntersectionObserver=="function",animationFrame:c=!1}=o,u=Af(e),d=a||i?[...u?Gl(u):[],...Gl(t)]:[];d.forEach(j=>{a&&j.addEventListener("scroll",n,{passive:!0}),i&&j.addEventListener("resize",n)});var v,p=u&&l?function(j,x){var C,A=null,O=ma(j);function w(){var z;clearTimeout(C),(z=A)==null||z.disconnect(),A=null}return function z(R,Y){R===void 0&&(R=!1),Y===void 0&&(Y=1),w();var E=j.getBoundingClientRect(),{left:K,top:J,width:U,height:ae}=E;if(R||x(),U&&ae){var ge={rootMargin:-Dc(J)+"px "+-Dc(O.clientWidth-(K+U))+"px "+-Dc(O.clientHeight-(J+ae))+"px "+-Dc(K)+"px",threshold:Ki(0,Ou(1,Y))||1},se=!0;try{A=new IntersectionObserver(Te,Ae(Ae({},ge),{},{root:O.ownerDocument}))}catch{A=new IntersectionObserver(Te,ge)}A.observe(j)}function Te(De){var Le=De[0].intersectionRatio;if(Le!==Y){if(!se)return z();Le?z(!1,Le):C=setTimeout(()=>{z(!1,1e-7)},1e3)}Le!==1||kh(E,j.getBoundingClientRect())||z(),se=!1}}(!0),w}(u,n):null,b=-1,m=null;s&&(m=new ResizeObserver(j=>{var[x]=j;x&&x.target===u&&m&&(m.unobserve(t),cancelAnimationFrame(b),b=requestAnimationFrame(()=>{var C;(C=m)==null||C.observe(t)})),n()}),u&&!c&&m.observe(u),m.observe(t));var h=c?os(e):null;return c&&function j(){var x=os(e);h&&!kh(h,x)&&n(),h=x,v=requestAnimationFrame(j)}(),n(),()=>{var j;d.forEach(x=>{a&&x.removeEventListener("scroll",n),i&&x.removeEventListener("resize",n)}),p?.(),(j=m)==null||j.disconnect(),m=null,c&&cancelAnimationFrame(v)}}var jk=function(e){return e===void 0&&(e=0),{name:"offset",options:e,fn:t=>mt(function*(){var n,o,{x:a,y:i,placement:s,middlewareData:l}=t,c=yield function(u,d){return Ov.apply(this,arguments)}(t,e);return s===((n=l.offset)==null?void 0:n.placement)&&(o=l.arrow)!=null&&o.alignmentOffset?{}:{x:a+c.x,y:i+c.y,data:Ae(Ae({},c),{},{placement:s})}})()}},xk=function(e){return e===void 0&&(e={}),{name:"shift",options:e,fn:t=>mt(function*(){var{x:n,y:o,placement:a}=t,i=ed(e,t),{mainAxis:s=!0,crossAxis:l=!1,limiter:c={fn:A=>{var{x:O,y:w}=A;return{x:O,y:w}}}}=i,u=Jg(i,ix),d={x:n,y:o},v=yield T0(t,u),p=fi(rs(a)),b=_0(p),m=d[b],h=d[p];if(s){var j=b==="y"?"bottom":"right";m=hh(m+v[b==="y"?"top":"left"],m,m-v[j])}if(l){var x=p==="y"?"bottom":"right";h=hh(h+v[p==="y"?"top":"left"],h,h-v[x])}var C=c.fn(Ae(Ae({},t),{},{[b]:m,[p]:h}));return Ae(Ae({},C),{},{data:{x:C.x-n,y:C.y-o,enabled:{[b]:s,[p]:l}}})})()}},wk=function(e){return e===void 0&&(e={}),{name:"flip",options:e,fn:t=>mt(function*(){var n,o,{placement:a,middlewareData:i,rects:s,initialPlacement:l,platform:c,elements:u}=t,d=ed(e,t),{mainAxis:v=!0,crossAxis:p=!0,fallbackPlacements:b,fallbackStrategy:m="bestFit",fallbackAxisSideDirection:h="none",flipAlignment:j=!0}=d,x=Jg(d,ax);if((n=i.arrow)!=null&&n.alignmentOffset)return{};var C=rs(a),A=fi(l),O=rs(l)===l,w=yield c.isRTL==null?void 0:c.isRTL(u.floating),z=b||(O||!j?[Uc(l)]:function(Oe){var Pe=Uc(Oe);return[Cv(Oe),Pe,Cv(Pe)]}(l)),R=h!=="none";!b&&R&&z.push(...rk(l,j,h,w));var Y=[l,...z],E=yield T0(t,x),K=[],J=((o=i.flip)==null?void 0:o.overflows)||[];if(v&&K.push(E[C]),p){var U=function(Oe,Pe,ot){ot===void 0&&(ot=!1);var xe=td(Oe),ue=A0(Oe),we=M0(ue),ft=ue==="x"?xe===(ot?"end":"start")?"right":"left":xe==="start"?"bottom":"top";return Pe.reference[we]>Pe.floating[we]&&(ft=Uc(ft)),[ft,Uc(ft)]}(a,s,w);K.push(E[U[0]],E[U[1]])}if(J=[...J,{placement:a,overflows:K}],!K.every(Oe=>Oe<=0)){var ae,ge,se=(((ae=i.flip)==null?void 0:ae.index)||0)+1,Te=Y[se];if(Te&&(!(p==="alignment"&&A!==fi(Te))||J.every(Oe=>fi(Oe.placement)!==A||Oe.overflows[0]>0)))return{data:{index:se,overflows:J},reset:{placement:Te}};var De=(ge=J.filter(Oe=>Oe.overflows[0]<=0).sort((Oe,Pe)=>Oe.overflows[1]-Pe.overflows[1])[0])==null?void 0:ge.placement;if(!De)switch(m){case"bestFit":var Le,je=(Le=J.filter(Oe=>{if(R){var Pe=fi(Oe.placement);return Pe===A||Pe==="y"}return!0}).map(Oe=>[Oe.placement,Oe.overflows.filter(Pe=>Pe>0).reduce((Pe,ot)=>Pe+ot,0)]).sort((Oe,Pe)=>Oe[1]-Pe[1])[0])==null?void 0:Le[0];je&&(De=je);break;case"initialPlacement":De=l}if(a!==De)return{reset:{placement:De}}}return{}})()}};function kk(e){var t,n,o={autoUpdate:!0},a=e,i=c=>Ae(Ae(Ae({},o),e||{}),c||{}),s=c=>{t&&n&&(a=i(c),((u,d,v)=>{var p=new Map,b=Ae({platform:bk},v),m=Ae(Ae({},b.platform),{},{_c:p});return ak(u,d,Ae(Ae({},b),{},{platform:m}))})(t,n,a).then(u=>{var d;Object.assign(n.style,{position:u.strategy,left:"".concat(u.x,"px"),top:"".concat(u.y,"px")}),!((d=a)===null||d===void 0)&&d.onComputed&&a.onComputed(u)}))},l=c=>{Io(c.subscribe(u=>{t===void 0?(t=u,s()):(Object.assign(t,u),s())}))};return[c=>{if("subscribe"in c)return l(c),{};t=c,s()},(c,u)=>{var d;n=c,a=i(u),setTimeout(()=>s(u),0),s(u);var v=()=>{d&&(d(),d=void 0)},p=function(){var{autoUpdate:b}=arguments.length>0&&arguments[0]!==void 0?arguments[0]:a||{};v(),b!==!1&&$m().then(()=>yk(t,n,()=>s(a),b===!0?{}:b))};return d=p(),{update(b){s(b),d=p(b)},destroy(){v()}}},s]}function Ck(e){var{loadOptions:t,filterText:n,items:o,multiple:a,value:i,itemId:s,groupBy:l,filterSelectedItems:c,itemFilter:u,convertStringItemsToObjects:d,filterGroupedItems:v,label:p}=e;if(o&&t)return o;if(!o)return[];o&&o.length>0&&typeof o[0]!="object"&&(o=d(o));var b=o.filter(m=>{var h=u(m[p],n,m);return h&&a&&i!=null&&i.length&&(h=!i.some(j=>!!c&&j[s]===m[s])),h});return l&&(b=v(b)),b}function Sk(e){return q0.apply(this,arguments)}function q0(){return(q0=mt(function*(e){var{dispatch:t,loadOptions:n,convertStringItemsToObjects:o,filterText:a}=e,i=yield n(a).catch(s=>{console.warn("svelte-select loadOptions error :>> ",s),t("error",{type:"loadOptions",details:s})});if(i&&!i.cancelled)return i?(i&&i.length>0&&typeof i[0]!="object"&&(i=o(i)),t("loaded",{items:i})):i=[],{filteredItems:i,loading:!1,focused:!0,listOpen:!0}})).apply(this,arguments)}St(`
  svg.svelte-1kxu7be {
      width: var(--chevron-icon-width, 20px);
      height: var(--chevron-icon-width, 20px);
      color: var(--chevron-icon-colour, currentColor);
  }
`);var Ok=_i(`<svg width="100%" height="100%" viewBox="0 0 20 20" focusable="false" aria-hidden="true" class="svelte-1kxu7be"><path fill="currentColor" d="M4.516 7.548c0.436-0.446 1.043-0.481 1.576 0l3.908 3.747
          3.908-3.747c0.533-0.481 1.141-0.446 1.574 0 0.436 0.445 0.408 1.197 0
          1.615-0.406 0.418-4.695 4.502-4.695 4.502-0.217 0.223-0.502
          0.335-0.787 0.335s-0.57-0.112-0.789-0.335c0
          0-4.287-4.084-4.695-4.502s-0.436-1.17 0-1.615z"></path></svg>`);St(`
    svg.svelte-1hraxrc {
        width: var(--clear-icon-width, 20px);
        height: var(--clear-icon-width, 20px);
        color: var(--clear-icon-color, currentColor);
    }
`);var Ek=_i(`<svg width="100%" height="100%" viewBox="-2 -2 50 50" focusable="false" aria-hidden="true" role="presentation" class="svelte-1hraxrc"><path fill="currentColor" d="M34.923,37.251L24,26.328L13.077,37.251L9.436,33.61l10.923-10.923L9.436,11.765l3.641-3.641L24,19.047L34.923,8.124
    l3.641,3.641L27.641,22.688L38.564,33.61L34.923,37.251z"></path></svg>`);function Ud(e){P(e,Ek())}St(`
    .loading.svelte-y9fi5p {
        width: var(--spinner-width, 20px);
        height: var(--spinner-height, 20px);
        color: var(--spinner-color, var(--icons-color));
        animation: svelte-y9fi5p-rotate 0.75s linear infinite;
        transform-origin: center center;
        transform: none;
    }

    .circle_path.svelte-y9fi5p {
        stroke-dasharray: 90;
        stroke-linecap: round;
    }

    @keyframes svelte-y9fi5p-rotate {
        100% {
            transform: rotate(360deg);
        }
    }
`);var _k=_i('<svg class="loading svelte-y9fi5p" viewBox="25 25 50 50"><circle class="circle_path svelte-y9fi5p" cx="50" cy="50" r="20" fill="none" stroke="currentColor" stroke-width="5" stroke-miterlimit="10"></circle></svg>');St(`
    .svelte-select.svelte-1ul7oo4 {
        /* deprecating camelCase custom props in favour of kebab-case for v5 */
        --borderRadius: var(--border-radius);
        --clearSelectColor: var(--clear-select-color);
        --clearSelectWidth: var(--clear-select-width);
        --disabledBackground: var(--disabled-background);
        --disabledBorderColor: var(--disabled-border-color);
        --disabledColor: var(--disabled-color);
        --disabledPlaceholderColor: var(--disabled-placeholder-color);
        --disabledPlaceholderOpacity: var(--disabled-placeholder-opacity);
        --errorBackground: var(--error-background);
        --errorBorder: var(--error-border);
        --groupItemPaddingLeft: var(--group-item-padding-left);
        --groupTitleColor: var(--group-title-color);
        --groupTitleFontSize: var(--group-title-font-size);
        --groupTitleFontWeight: var(--group-title-font-weight);
        --groupTitlePadding: var(--group-title-padding);
        --groupTitleTextTransform: var(--group-title-text-transform);
        --groupTitleBorderColor: var(--group-title-border-color);
        --groupTitleBorderWidth: var(--group-title-border-width);
        --groupTitleBorderStyle: var(--group-title-border-style);
        --indicatorColor: var(--chevron-color);
        --indicatorHeight: var(--chevron-height);
        --indicatorWidth: var(--chevron-width);
        --inputColor: var(--input-color);
        --inputLeft: var(--input-left);
        --inputLetterSpacing: var(--input-letter-spacing);
        --inputMargin: var(--input-margin);
        --inputPadding: var(--input-padding);
        --itemActiveBackground: var(--item-active-background);
        --itemColor: var(--item-color);
        --itemFirstBorderRadius: var(--item-first-border-radius);
        --itemHoverBG: var(--item-hover-bg);
        --itemHoverColor: var(--item-hover-color);
        --itemIsActiveBG: var(--item-is-active-bg);
        --itemIsActiveColor: var(--item-is-active-color);
        --itemIsNotSelectableColor: var(--item-is-not-selectable-color);
        --itemPadding: var(--item-padding);
        --listBackground: var(--list-background);
        --listBorder: var(--list-border);
        --listBorderRadius: var(--list-border-radius);
        --listEmptyColor: var(--list-empty-color);
        --listEmptyPadding: var(--list-empty-padding);
        --listEmptyTextAlign: var(--list-empty-text-align);
        --listMaxHeight: var(--list-max-height);
        --listPosition: var(--list-position);
        --listShadow: var(--list-shadow);
        --listZIndex: var(--list-z-index);
        --multiItemBG: var(--multi-item-bg);
        --multiItemBorderRadius: var(--multi-item-border-radius);
        --multiItemDisabledHoverBg: var(--multi-item-disabled-hover-bg);
        --multiItemDisabledHoverColor: var(--multi-item-disabled-hover-color);
        --multiItemHeight: var(--multi-item-height);
        --multiItemMargin: var(--multi-item-margin);
        --multiItemPadding: var(--multi-item-padding);
        --multiSelectInputMargin: var(--multi-select-input-margin);
        --multiSelectInputPadding: var(--multi-select-input-padding);
        --multiSelectPadding: var(--multi-select-padding);
        --placeholderColor: var(--placeholder-color);
        --placeholderOpacity: var(--placeholder-opacity);
        --selectedItemPadding: var(--selected-item-padding);
        --spinnerColor: var(--spinner-color);
        --spinnerHeight: var(--spinner-height);
        --spinnerWidth: var(--spinner-width);

        --internal-padding: 0 0 0 16px;

        border: var(--border, 1px solid #d8dbdf);
        border-radius: var(--border-radius, 6px);
        min-height: var(--height, 42px);
        position: relative;
        display: flex;
        align-items: stretch;
        padding: var(--padding, var(--internal-padding));
        background: var(--background, #fff);
        margin: var(--margin, 0);
        width: var(--width, 100%);
        font-size: var(--font-size, 16px);
        max-height: var(--max-height);
    }

    .svelte-1ul7oo4 {
        box-sizing: var(--box-sizing, border-box);
    }

    .svelte-select.svelte-1ul7oo4:hover {
        border: var(--border-hover, 1px solid #b2b8bf);
    }

    .value-container.svelte-1ul7oo4 {
        display: flex;
        flex: 1 1 0%;
        flex-wrap: wrap;
        align-items: center;
        gap: 5px 10px;
        padding: var(--value-container-padding, 5px 0);
        position: relative;
        overflow: var(--value-container-overflow, hidden);
        align-self: stretch;
    }

    .prepend.svelte-1ul7oo4,
    .indicators.svelte-1ul7oo4 {
        display: flex;
        flex-shrink: 0;
        align-items: center;
    }

    .indicators.svelte-1ul7oo4 {
        position: var(--indicators-position);
        top: var(--indicators-top);
        right: var(--indicators-right);
        bottom: var(--indicators-bottom);
    }

    input.svelte-1ul7oo4 {
        position: absolute;
        cursor: default;
        border: none;
        color: var(--input-color, var(--item-color));
        padding: var(--input-padding, 0);
        letter-spacing: var(--input-letter-spacing, inherit);
        margin: var(--input-margin, 0);
        min-width: 10px;
        top: 0;
        right: 0;
        bottom: 0;
        left: 0;
        background: transparent;
        font-size: var(--font-size, 16px);
    }

    .svelte-1ul7oo4:not(.multi) > .value-container:where(.svelte-1ul7oo4) > input:where(.svelte-1ul7oo4) {
        width: 100%;
        height: 100%;
    }

    input.svelte-1ul7oo4::placeholder {
        color: var(--placeholder-color, #78848f);
        opacity: var(--placeholder-opacity, 1);
    }

    input.svelte-1ul7oo4:focus {
        outline: none;
    }

    .svelte-select.focused.svelte-1ul7oo4 {
        border: var(--border-focused, 1px solid #006fe8);
        border-radius: var(--border-radius-focused, var(--border-radius, 6px));
    }

    .disabled.svelte-1ul7oo4 {
        background: var(--disabled-background, #ebedef);
        border-color: var(--disabled-border-color, #ebedef);
        color: var(--disabled-color, #c1c6cc);
    }

    .disabled.svelte-1ul7oo4 input:where(.svelte-1ul7oo4)::placeholder {
        color: var(--disabled-placeholder-color, #c1c6cc);
        opacity: var(--disabled-placeholder-opacity, 1);
    }

    .selected-item.svelte-1ul7oo4 {
        position: relative;
        overflow: var(--selected-item-overflow, hidden);
        padding: var(--selected-item-padding, 0 20px 0 0);
        text-overflow: ellipsis;
        white-space: nowrap;
        color: var(--selected-item-color, inherit);
        font-size: var(--font-size, 16px);
    }

    .multi.svelte-1ul7oo4 .selected-item:where(.svelte-1ul7oo4) {
        position: absolute;
        line-height: var(--height, 42px);
        height: var(--height, 42px);
    }

    .selected-item.svelte-1ul7oo4:focus {
        outline: none;
    }

    .hide-selected-item.svelte-1ul7oo4 {
        opacity: 0;
    }

    .icon.svelte-1ul7oo4 {
        display: flex;
        align-items: center;
        justify-content: center;
    }

    .clear-select.svelte-1ul7oo4 {
        all: unset;
        display: flex;
        align-items: center;
        justify-content: center;
        width: var(--clear-select-width, 40px);
        height: var(--clear-select-height, 100%);
        color: var(--clear-select-color, var(--icons-color));
        margin: var(--clear-select-margin, 0);
        pointer-events: all;
        flex-shrink: 0;
    }

    .clear-select.svelte-1ul7oo4:focus {
        outline: var(--clear-select-focus-outline, 1px solid #006fe8);
    }

    .loading.svelte-1ul7oo4 {
        width: var(--loading-width, 40px);
        height: var(--loading-height);
        color: var(--loading-color, var(--icons-color));
        margin: var(--loading--margin, 0);
        flex-shrink: 0;
    }

    .chevron.svelte-1ul7oo4 {
        width: var(--chevron-width, 40px);
        height: var(--chevron-height, 40px);
        background: var(--chevron-background, transparent);
        pointer-events: var(--chevron-pointer-events, none);
        color: var(--chevron-color, var(--icons-color));
        border: var(--chevron-border, 0 0 0 1px solid #d8dbdf);
        flex-shrink: 0;
    }

    .multi.svelte-1ul7oo4 {
        padding: var(--multi-select-padding, var(--internal-padding));
    }

    .multi.svelte-1ul7oo4 input:where(.svelte-1ul7oo4) {
        padding: var(--multi-select-input-padding, 0);
        position: relative;
        margin: var(--multi-select-input-margin, 5px 0);
        flex: 1 1 40px;
    }

    .svelte-select.error.svelte-1ul7oo4 {
        border: var(--error-border, 1px solid #ff2d55);
        background: var(--error-background, #fff);
    }

    .a11y-text.svelte-1ul7oo4 {
        z-index: 9999;
        border: 0px;
        clip: rect(1px, 1px, 1px, 1px);
        height: 1px;
        width: 1px;
        position: absolute;
        overflow: hidden;
        padding: 0px;
        white-space: nowrap;
    }

    .multi-item.svelte-1ul7oo4 {
        background: var(--multi-item-bg, #ebedef);
        margin: var(--multi-item-margin, 0);
        outline: var(--multi-item-outline, 1px solid #ddd);
        border-radius: var(--multi-item-border-radius, 4px);
        height: var(--multi-item-height, 25px);
        line-height: var(--multi-item-height, 25px);
        display: flex;
        cursor: default;
        padding: var(--multi-item-padding, 0 5px);
        overflow: hidden;
        gap: var(--multi-item-gap, 4px);
        outline-offset: -1px;
        max-width: var(--multi-max-width, none);
        color: var(--multi-item-color, var(--item-color));
    }

    .multi-item.disabled.svelte-1ul7oo4:hover {
        background: var(--multi-item-disabled-hover-bg, #ebedef);
        color: var(--multi-item-disabled-hover-color, #c1c6cc);
    }

    .multi-item-text.svelte-1ul7oo4 {
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
    }

    .multi-item-clear.svelte-1ul7oo4 {
        display: flex;
        align-items: center;
        justify-content: center;
        --clear-icon-color: var(--multi-item-clear-icon-color, #000);
    }

    .multi-item.active.svelte-1ul7oo4 {
        outline: var(--multi-item-active-outline, 1px solid #006fe8);
    }

    .svelte-select-list.svelte-1ul7oo4 {
        box-shadow: var(--list-shadow, 0 2px 3px 0 rgba(44, 62, 80, 0.24));
        border-radius: var(--list-border-radius, 4px);
        max-height: var(--list-max-height, 252px);
        overflow-y: auto;
        background: var(--list-background, #fff);
        position: var(--list-position, absolute);
        z-index: var(--list-z-index, 2);
        border: var(--list-border);
    }

    .prefloat.svelte-1ul7oo4 {
        opacity: 0;
        pointer-events: none;
    }

    .list-group-title.svelte-1ul7oo4 {
        color: var(--group-title-color, #8f8f8f);
        cursor: default;
        font-size: var(--group-title-font-size, 16px);
        font-weight: var(--group-title-font-weight, 600);
        height: var(--height, 42px);
        line-height: var(--height, 42px);
        padding: var(--group-title-padding, 0 20px);
        text-overflow: ellipsis;
        overflow-x: hidden;
        white-space: nowrap;
        text-transform: var(--group-title-text-transform, uppercase);
        border-width: var(--group-title-border-width, medium);
        border-style: var(--group-title-border-style, none);
        border-color: var(--group-title-border-color, color);
    }

    .empty.svelte-1ul7oo4 {
        text-align: var(--list-empty-text-align, center);
        padding: var(--list-empty-padding, 20px 0);
        color: var(--list-empty-color, #78848f);
    }

    .item.svelte-1ul7oo4 {
        cursor: default;
        height: var(--item-height, var(--height, 42px));
        line-height: var(--item-line-height, var(--height, 42px));
        padding: var(--item-padding, 0 20px);
        color: var(--item-color, inherit);
        text-overflow: ellipsis;
        overflow: hidden;
        white-space: nowrap;
        transition: var(--item-transition, all 0.2s);
        align-items: center;
        width: 100%;
    }

    .item.group-item.svelte-1ul7oo4 {
        padding-left: var(--group-item-padding-left, 40px);
    }

    .item.svelte-1ul7oo4:active {
        background: var(--item-active-background, #b9daff);
    }

    .item.active.svelte-1ul7oo4 {
        background: var(--item-is-active-bg, #007aff);
        color: var(--item-is-active-color, #fff);
    }

    .item.first.svelte-1ul7oo4 {
        border-radius: var(--item-first-border-radius, 4px 4px 0 0);
    }

    .item.hover.svelte-1ul7oo4:not(.active) {
        background: var(--item-hover-bg, #e7f2ff);
        color: var(--item-hover-color, inherit);
    }

    .item.not-selectable.svelte-1ul7oo4,
    .item.hover.item.not-selectable.svelte-1ul7oo4,
    .item.active.item.not-selectable.svelte-1ul7oo4,
    .item.not-selectable.svelte-1ul7oo4:active {
        color: var(--item-is-not-selectable-color, #999);
        background: transparent;
    }

    .required.svelte-1ul7oo4 {
        opacity: 0;
        z-index: -1;
        position: absolute;
        top: 0;
        left: 0;
        bottom: 0;
        right: 0;
    }
`);var Mk=te('<div class="list-item svelte-1ul7oo4" tabindex="-1" role="none"><div><!></div></div>'),Ak=te('<div class="empty svelte-1ul7oo4">No options</div>'),Tk=te('<div role="none"><!> <!> <!></div>'),zk=te('<span id="aria-selection" class="svelte-1ul7oo4"> </span> <span id="aria-context" class="svelte-1ul7oo4"> </span>',1),Rk=te('<div class="multi-item-clear svelte-1ul7oo4"><!></div>'),Pk=te('<div role="none"><span class="multi-item-text svelte-1ul7oo4"><!></span> <!></div>'),Nk=te("<div><!></div>"),$k=te('<div class="icon loading svelte-1ul7oo4" aria-hidden="true"><!></div>'),Ik=te('<button type="button" class="icon clear-select svelte-1ul7oo4"><!></button>'),qk=te('<div class="icon chevron svelte-1ul7oo4" aria-hidden="true"><!></div>'),Dk=te('<input type="hidden" class="svelte-1ul7oo4"/>'),Uk=te('<select class="required svelte-1ul7oo4" required tabindex="-1" aria-hidden="true"></select>'),Lk=te('<div role="none"><!> <span aria-live="polite" aria-atomic="false" aria-relevant="additions text" class="a11y-text svelte-1ul7oo4"><!></span> <div class="prepend svelte-1ul7oo4"><!></div> <div class="value-container svelte-1ul7oo4"><!> <input/></div> <div class="indicators svelte-1ul7oo4"><!> <!> <!></div> <!> <!></div>');function Li(e,t){var n=function(q){var X={};for(var me in q.children&&(X.default=!0),q.$$slots)X[me]=!0;return X}(t);lt(t,!1);var o,a=$(),i=$(),s=$(),l=$(),c=$(),u=$(),d=$(),v=$(),p=$(),b=Nx(),m=g(t,"justValue",12,null),h=g(t,"filter",8,Ck),j=g(t,"getItems",8,Sk),x=g(t,"id",8,null),C=g(t,"name",8,null),A=g(t,"container",12,void 0),O=g(t,"input",12,void 0),w=g(t,"multiple",8,!1),z=g(t,"multiFullItemClearable",8,!1),R=g(t,"disabled",8,!1),Y=g(t,"focused",12,!1),E=g(t,"value",12,null),K=g(t,"filterText",12,""),J=g(t,"placeholder",8,"Please select"),U=g(t,"placeholderAlwaysShow",8,!1),ae=g(t,"items",12,null),ge=g(t,"label",8,"label"),se=g(t,"itemFilter",8,(q,X,me)=>"".concat(q).toLowerCase().includes(X.toLowerCase())),Te=g(t,"groupBy",8,void 0),De=g(t,"groupFilter",8,q=>q),Le=g(t,"groupHeaderSelectable",8,!1),je=g(t,"itemId",8,"value"),Oe=g(t,"loadOptions",8,void 0),Pe=g(t,"containerStyles",8,""),ot=g(t,"hasError",8,!1),xe=g(t,"filterSelectedItems",8,!0),ue=g(t,"required",8,!1),we=g(t,"closeListOnChange",8,!0),ft=g(t,"clearFilterTextOnBlur",8,!0),Jt=g(t,"createGroupHeaderItem",8,(q,X)=>({value:q,[ge()]:q})),pe=()=>r(d),V=g(t,"searchable",8,!0),he=g(t,"inputStyles",8,""),L=g(t,"clearable",8,!0),de=g(t,"loading",12,!1),Q=g(t,"listOpen",12,!1),Ne=g(t,"debounce",8,function(q){var X=arguments.length>1&&arguments[1]!==void 0?arguments[1]:1;clearTimeout(o),o=setTimeout(q,X)}),ne=g(t,"debounceWait",8,300),B=g(t,"hideEmptyState",8,!1),bt=g(t,"inputAttributes",24,()=>({})),st=g(t,"listAutoWidth",8,!0),Se=g(t,"showChevron",8,!1),xt=g(t,"listOffset",8,5),Fe=g(t,"hoverItemIndex",12,0),He=g(t,"floatingConfig",24,()=>({})),pt=g(t,"class",8,""),Ue=$(),Rt=$(),k=$(),S=$(),T=$();function I(q){return q.map((X,me)=>({index:me,value:X,label:"".concat(X)}))}function re(q){var X=[],me={};q.forEach(tt=>{var nt=Te()(tt);X.includes(nt)||(X.push(nt),me[nt]=[],nt&&me[nt].push(Object.assign(Jt()(nt,tt),{id:nt,groupHeader:!0,selectable:Le()}))),me[nt].push(Object.assign({groupItem:!!nt},tt))});var qe=[];return De()(X).forEach(tt=>{me[tt]&&qe.push(...me[tt])}),qe}function ke(){var q=arguments.length>0&&arguments[0]!==void 0?arguments[0]:0,X=arguments.length>1?arguments[1]:void 0;Fe(q<0?0:q),!X&&Te()&&r(d)[Fe()]&&!r(d)[Fe()].selectable&&It(1)}function _e(){var q=!0;if(E()){var X=[],me=[];E().forEach(qe=>{X.includes(qe[je()])?q=!1:(X.push(qe[je()]),me.push(qe))}),q||E(me)}return q}function ee(q){var X=q?q[je()]:E()[je()];return ae().find(me=>me[je()]===X)}function oe(q){return it.apply(this,arguments)}function it(){return(it=mt(function*(q){var X=E()[q];E().length===1?E(void 0):E(E().filter(me=>me!==X)),b("clear",X)})).apply(this,arguments)}function et(q){if(Y())switch(q.stopPropagation(),q.key){case"Escape":q.preventDefault(),$t();break;case"Enter":if(q.preventDefault(),Q()){if(r(d).length===0)break;var X=r(d)[Fe()];if(E()&&!w()&&E()[je()]===X[je()]){$t();break}Ge(r(d)[Fe()])}break;case"ArrowDown":q.preventDefault(),Q()?It(1):(Q(!0),f(Ue,void 0));break;case"ArrowUp":q.preventDefault(),Q()?It(-1):(Q(!0),f(Ue,void 0));break;case"Tab":if(Q()&&Y()){if(r(d).length===0||E()&&E()[je()]===r(d)[Fe()][je()])return $t();q.preventDefault(),Ge(r(d)[Fe()]),$t()}break;case"Backspace":if(!w()||K().length>0)return;if(w()&&E()&&E().length>0){if(oe(r(Ue)!==void 0?r(Ue):E().length-1),r(Ue)===0||r(Ue)===void 0)break;f(Ue,E().length>r(Ue)?r(Ue)-1:void 0)}break;case"ArrowLeft":if(!E()||!w()||K().length>0)return;r(Ue)===void 0?f(Ue,E().length-1):E().length>r(Ue)&&r(Ue)!==0&&f(Ue,r(Ue)-1);break;case"ArrowRight":if(!E()||!w()||K().length>0||r(Ue)===void 0)return;r(Ue)===E().length-1?f(Ue,void 0):r(Ue)<E().length-1&&f(Ue,r(Ue)+1)}}function We(q){var X,me;Y()&&O()===((X=document)===null||X===void 0?void 0:X.activeElement)||(q&&b("focus",q),(me=O())===null||me===void 0||me.focus(),Y(!0))}function Je(q){return Nt.apply(this,arguments)}function Nt(){return(Nt=mt(function*(q){var X;Ot||(Q()||Y())&&(b("blur",q),$t(),Y(!1),f(Ue,void 0),(X=O())===null||X===void 0||X.blur())})).apply(this,arguments)}function xn(){if(!R())return K().length>0?Q(!0):void Q(!Q())}function Sn(){b("clear",E()),E(void 0),$t(),We()}function $t(){ft()&&K(""),Q(!1)}$x(mt(function*(){f(Rt,E()),f(k,K()),f(S,w())})),no(()=>{Q()&&Y(!0),Y()&&O()&&O().focus()});var dn=g(t,"ariaValues",8,q=>"Option ".concat(q,", selected.")),Bt=g(t,"ariaListOpen",8,(q,X)=>"You are currently focused on option ".concat(q,". There are ").concat(X," results available.")),Kt=g(t,"ariaFocused",8,()=>"Select is focused, type to refine list, press down to open the menu."),ln,vt=$(null);function vn(){clearTimeout(ln),ln=setTimeout(()=>{Ot=!1},100)}Io(()=>{var q;(q=r(vt))===null||q===void 0||q.remove()});var Ot=!1;function Ge(q){q&&q.selectable!==!1&&function(X){if(X){K("");var me=Object.assign({},X);if(me.groupHeader&&!me.selectable)return;E(w()?E()?E().concat([me]):[me]:E(me)),setTimeout(()=>{we()&&$t(),f(Ue,void 0),b("change",E()),b("select",X)})}}(q)}function Yt(q){Ot||Fe(q)}function It(q){if(r(d).filter(me=>!Object.hasOwn(me,"selectable")||me.selectable===!0).length===0)return Fe(0);q>0&&Fe()===r(d).length-1?Fe(0):q<0&&Fe()===0?Fe(r(d).length-1):Fe(Fe()+q);var X=r(d)[Fe()];X&&X.selectable===!1&&(q!==1&&q!==-1||It(q))}function Nn(q,X,me){if(!w())return X&&X[me]===q[me]}var Fn=sr,Un=sr;function sr(q){return{update(X){X.scroll&&(vn(),q.scrollIntoView({behavior:"auto",block:"nearest"}))}}}var Hn=$({strategy:"absolute",placement:"bottom-start",middleware:[jk(xt()),wk(),xk()],autoUpdate:!1}),[er,pr,Gn]=kk(r(Hn)),Sr=$(!0);Z(()=>(y(ae()),y(E())),()=>{ae(),E()&&function(){if(typeof E()=="string"){var q=(ae()||[]).find(X=>X[je()]===E());E(q||{[je()]:E(),label:E()})}else w()&&Array.isArray(E())&&E().length>0&&E(E().map(X=>typeof X=="string"?{value:X,label:X}:X))}()}),Z(()=>(y(bt()),y(V())),()=>{!bt()&&V()||(f(T,Object.assign({autocapitalize:"none",autocomplete:"off",autocorrect:"off",spellcheck:!1,tabindex:0,type:"text","aria-autocomplete":"list"},bt())),x()&&wo(T,r(T).id=x()),V()||wo(T,r(T).readonly=!0))}),Z(()=>y(w()),()=>{w()&&E()&&(Array.isArray(E())?E([...E()]):E([E()]))}),Z(()=>(r(S),y(w())),()=>{r(S)&&!w()&&E()&&E(null)}),Z(()=>(y(w()),y(E())),()=>{w()&&E()&&E().length>1&&_e()}),Z(()=>y(E()),()=>{E()&&(w()?JSON.stringify(E())!==JSON.stringify(r(Rt))&&_e()&&b("input",E()):r(Rt)&&JSON.stringify(E()[je()])===JSON.stringify(r(Rt)[je()])||b("input",E()))}),Z(()=>(y(E()),y(w()),r(Rt)),()=>{!E()&&w()&&r(Rt)&&b("input",E())}),Z(()=>(y(Y()),y(O())),()=>{!Y()&&O()&&$t()}),Z(()=>(y(K()),r(k)),()=>{K()!==r(k)&&(Oe()||K().length!==0)&&(Oe()?Ne()(mt(function*(){de(!0);var q=yield j()({dispatch:b,loadOptions:Oe(),convertStringItemsToObjects:I,filterText:K()});q?(de(q.loading),Q(Q()?q.listOpen:K().length>0),Y(Q()&&q.focused),ae(Te()?re(q.filteredItems):q.filteredItems)):(de(!1),Y(!0),Q(!0))}),ne()):(Q(!0),w()&&f(Ue,void 0)))}),Z(()=>(y(h()),y(Oe()),y(K()),y(ae()),y(w()),y(E()),y(je()),y(Te()),y(ge()),y(xe()),y(se())),()=>{f(d,h()({loadOptions:Oe(),filterText:K(),items:ae(),multiple:w(),value:E(),itemId:je(),groupBy:Te(),label:ge(),filterSelectedItems:xe(),itemFilter:se(),convertStringItemsToObjects:I,filterGroupedItems:re}))}),Z(()=>(y(w()),y(Q()),y(E()),r(d)),()=>{!w()&&Q()&&E()&&r(d)&&ke(r(d).findIndex(q=>q[je()]===E()[je()]),!0)}),Z(()=>(y(Q()),y(w())),()=>{Q()&&w()&&Fe(0)}),Z(()=>y(K()),()=>{K()&&Fe(0)}),Z(()=>y(Fe()),()=>{var q;q=Fe(),b("hoverItem",q)}),Z(()=>(y(w()),y(E())),()=>{f(a,w()?E()&&E().length>0:E())}),Z(()=>(r(a),y(K())),()=>{f(i,r(a)&&K().length>0)}),Z(()=>(r(a),y(L()),y(R()),y(de())),()=>{f(s,r(a)&&L()&&!R()&&!de())}),Z(()=>(y(U()),y(w()),y(J()),y(E())),()=>{var q;f(l,U()&&w()||w()&&((q=E())===null||q===void 0?void 0:q.length)===0?J():E()?"":J())}),Z(()=>(y(E()),y(w())),()=>{var q,X;f(c,E()?(q=w(),X=void 0,X=q&&E().length>0?E().map(me=>me[ge()]).join(", "):E()[ge()],dn()(X)):"")}),Z(()=>(r(d),y(Fe()),y(Y()),y(Q())),()=>{f(u,function(){if(!r(d)||r(d).length===0)return"";var q=r(d)[Fe()];if(Q()&&q){var X=r(d)?r(d).length:0;return Bt()(q[ge()],X)}return Kt()()}((r(d),Fe(),Y(),Q())))}),Z(()=>y(ae()),()=>{(function(q){q&&q.length!==0&&!q.some(X=>typeof X!="object")&&E()&&(w()?!E().some(X=>!X||!X[je()]):E()[je()])&&(Array.isArray(E())?E(E().map(X=>ee(X)||X)):E(ee()||E()))})(ae())}),Z(()=>(y(w()),y(E()),y(je())),()=>{m((w(),E(),je(),w()?E()?E().map(q=>q[je()]):null:E()?E()[je()]:E()))}),Z(()=>(y(w()),r(Rt),y(E())),()=>{w()||!r(Rt)||E()||b("input",E())}),Z(()=>(y(Q()),r(d),y(w()),y(E())),()=>{Q()&&r(d)&&!w()&&!E()&&ke()}),Z(()=>r(d),()=>{(function(q){Q()&&b("filter",q)})(r(d))}),Z(()=>(y(A()),y(He()),r(Hn)),()=>{A()&&He()&&Gn(Object.assign(r(Hn),He()))}),Z(()=>r(vt),()=>{f(v,!!r(vt))}),Z(()=>(r(vt),y(Q())),()=>{(function(q,X){if(!q||!X)return f(Sr,!0);setTimeout(()=>{f(Sr,!1)},0)})(r(vt),Q())}),Z(()=>(y(Q()),y(A()),r(vt)),()=>{Q()&&A()&&r(vt)&&function(){var{width:q}=A().getBoundingClientRect();wo(vt,r(vt).style.width=st()?q+"px":"auto")}()}),Z(()=>y(Fe()),()=>{f(p,Fe())}),Z(()=>(y(O()),y(Q()),y(Y())),()=>{O()&&Q()&&!Y()&&We()}),Z(()=>(y(A()),y(He())),()=>{var q;A()&&((q=He())===null||q===void 0?void 0:q.autoUpdate)===void 0&&wo(Hn,r(Hn).autoUpdate=!0)}),jn();var hr={getFilteredItems:pe,handleClear:Sn};At();var jr,Xn=Lk();Ce("click",Da,function(q){var X;Q()||Y()||!A()||A().contains(q.target)||(X=r(vt))!==null&&X!==void 0&&X.contains(q.target)||Je()}),Ce("keydown",Da,et);var be=N(Xn),qt=q=>{var X,me=Tk(),qe=N(me),tt=zt=>{var Xt=Ut();dr(Xe(Xt),t,"list-prepend",{},null),P(zt,Xt)};ie(qe,zt=>{D(()=>n["list-prepend"])&&zt(tt)});var nt=W(qe,2),ht=zt=>{var Xt=Ut();dr(Xe(Xt),t,"list",{get filteredItems(){return r(d)}},null),P(zt,Xt)},qn=zt=>{var Xt=Ut(),Pr=Xe(Xt),yt=on=>{var fn=Ut();fr(Xe(fn),1,()=>r(d),Cr,(Wn,On,wt)=>{var Or,mr=Mk(),Nr=N(mr);dr(N(Nr),t,"item",{get item(){return r(On)},index:wt},wn=>{var En=Wr();ze(()=>ut(En,(r(On),y(ge()),D(()=>{var wr;return(wr=r(On))===null||wr===void 0?void 0:wr[ge()]})))),P(wn,En)}),io(Nr,(wn,En)=>Fn?.(wn),()=>({scroll:Nn(r(On),E(),je()),listDom:r(v)})),io(Nr,(wn,En)=>Un?.(wn),()=>({scroll:r(p)===wt,listDom:r(v)})),ze(wn=>Or=Mt(Nr,1,"item svelte-1ul7oo4",null,Or,wn),[()=>{var wn,En;return{"list-group-title":r(On).groupHeader,active:Nn(r(On),E(),je()),first:(En=wt,En===0),hover:Fe()===wt,"group-item":r(On).groupItem,"not-selectable":((wn=r(On))===null||wn===void 0?void 0:wn.selectable)===!1}}]),Ce("mouseover",mr,()=>Yt(wt)),Ce("focus",mr,()=>Yt(wt)),Ce("click",mr,Aa(()=>function(wn){var{item:En,i:wr}=wn;if(En?.selectable!==!1)return E()&&!w()&&E()[je()]===En[je()]?$t():void(function(M){return M.groupHeader&&M.selectable||M.selectable||!M.hasOwnProperty("selectable")}(En)&&(Fe(wr),Ge(En)))}({item:r(On),i:wt}))),Ce("keydown",mr,ti(Aa(function(wn){Ml.call(this,t,wn)}))),P(Wn,mr)}),P(on,fn)},hn=on=>{var fn=Ut(),Wn=Xe(fn),On=wt=>{var Or=Ut();dr(Xe(Or),t,"empty",{},mr=>{P(mr,Ak())}),P(wt,Or)};ie(Wn,wt=>{B()||wt(On)},!0),P(on,fn)};ie(Pr,on=>{r(d),D(()=>r(d).length>0)?on(yt):on(hn,!1)},!0),P(zt,Xt)};ie(nt,zt=>{D(()=>n.list)?zt(ht):zt(qn,!1)});var Gt=W(nt,2),rn=zt=>{var Xt=Ut();dr(Xe(Xt),t,"list-append",{},null),P(zt,Xt)};ie(Gt,zt=>{D(()=>n["list-append"])&&zt(rn)}),io(me,zt=>pr?.(zt)),Qn(me,zt=>f(vt,zt),()=>r(vt)),Kr(()=>Ce("scroll",me,vn)),Kr(()=>Ce("pointerup",me,ti(Aa(function(zt){Ml.call(this,t,zt)})))),Kr(()=>Ce("mousedown",me,ti(Aa(function(zt){Ml.call(this,t,zt)})))),ze(()=>X=Mt(me,1,"svelte-select-list svelte-1ul7oo4",null,X,{prefloat:r(Sr)})),P(q,me)};ie(be,q=>{Q()&&q(qt)});var bn=W(be,2),$n=N(bn),lr=q=>{var X=zk(),me=Xe(X),qe=N(me),tt=N(W(me,2));ze(()=>{ut(qe,r(c)),ut(tt,r(u))}),P(q,X)};ie($n,q=>{Y()&&q(lr)});var Rr=W(bn,2);dr(N(Rr),t,"prepend",{},null);var Vt=W(Rr,2),xr=N(Vt),Vr=q=>{var X=Ut(),me=Xe(X),qe=nt=>{var ht=Ut();fr(Xe(ht),1,E,Cr,(qn,Gt,rn)=>{var zt,Xt=Pk(),Pr=N(Xt);dr(N(Pr),t,"selection",{get selection(){return r(Gt)},index:rn},on=>{var fn=Wr();ze(()=>ut(fn,(r(Gt),y(ge()),D(()=>r(Gt)[ge()])))),P(on,fn)});var yt=W(Pr,2),hn=on=>{var fn=Rk();dr(N(fn),t,"multi-clear-icon",{},Wn=>{Ud(Wn)}),Ce("pointerup",fn,ti(Aa(()=>oe(rn)))),P(on,fn)};ie(yt,on=>{R()||z()||!Ud||on(hn)}),ze(()=>zt=Mt(Xt,1,"multi-item svelte-1ul7oo4",null,zt,{active:r(Ue)===rn,disabled:R()})),Ce("click",Xt,ti(()=>z()?oe(rn):{})),Ce("keydown",Xt,ti(Aa(function(on){Ml.call(this,t,on)}))),P(qn,Xt)}),P(nt,ht)},tt=nt=>{var ht,qn=Nk();dr(N(qn),t,"selection",{get selection(){return E()}},Gt=>{var rn=Wr();ze(()=>ut(rn,(y(E()),y(ge()),D(()=>E()[ge()])))),P(Gt,rn)}),ze(()=>ht=Mt(qn,1,"selected-item svelte-1ul7oo4",null,ht,{"hide-selected-item":r(i)})),P(nt,qn)};ie(me,nt=>{w()?nt(qe):nt(tt,!1)}),P(q,X)};ie(xr,q=>{r(a)&&q(Vr)});var Zn=W(xr,2);Xc(Zn,()=>Ae(Ae({readOnly:!V()},r(T)),{},{placeholder:r(l),style:he(),disabled:R()}),void 0,void 0,void 0,"svelte-1ul7oo4",!0),Qn(Zn,q=>O(q),()=>O());var Br=W(Vt,2),In=N(Br),Qt=q=>{var X=$k();dr(N(X),t,"loading-icon",{},me=>{(function(qe){P(qe,_k())})(me)}),P(q,X)};ie(In,q=>{de()&&q(Qt)});var Tt=W(In,2),An=q=>{var X=Ik();dr(N(X),t,"clear-icon",{},me=>{Ud(me)}),Ce("click",X,Sn),P(q,X)};ie(Tt,q=>{r(s)&&q(An)});var gr=W(Tt,2),tr=q=>{var X=qk();dr(N(X),t,"chevron-icon",{get listOpen(){return Q()}},me=>{(function(qe){P(qe,Ok())})(me)}),P(q,X)};ie(gr,q=>{Se()&&q(tr)});var H=W(Br,2);dr(H,t,"input-hidden",{get value(){return E()}},q=>{var X=Dk();ze(me=>{yn(X,"name",C()),es(X,me)},[()=>(y(E()),D(()=>E()?JSON.stringify(E()):null))]),P(q,X)});var ce=W(H,2),Me=q=>{var X=Ut();dr(Xe(X),t,"required",{get value(){return E()}},me=>{P(me,Uk())}),P(q,X)};return ie(ce,q=>{y(ue()),y(E()),D(()=>ue()&&(!E()||E().length===0))&&q(Me)}),Kr(()=>Ce("pointerup",Xn,ti(xn))),Qn(Xn,q=>A(q),()=>A()),io(Xn,q=>er?.(q)),ze(()=>{var q;jr=Mt(Xn,1,"svelte-select ".concat((q=pt())!==null&&q!==void 0?q:""),"svelte-1ul7oo4",jr,{multi:w(),disabled:R(),focused:Y(),"list-open":Q(),"show-chevron":Se(),error:ot()}),No(Xn,Pe())}),Ce("keydown",Zn,et),Ce("blur",Zn,Je),Ce("focus",Zn,We),mu(Zn,K),P(e,Xn),jt(t,"getFilteredItems",pe),jt(t,"handleClear",Sn),ct(hr)}St(`/* over all fonts, sizes, and colors */
/* "consolas" for Windows, "menlo" for Mac with fallback to "monaco", 'Ubuntu Mono' for Ubuntu */
/* (at Mac this font looks too large at 14px, but 13px is too small for the font on Windows) */
/* main, menu, modal */
/* jsoneditor modal */
/* tooltip in text mode */
/* panels: navigation bar, gutter, search box */
/* navigation-bar */
/* context menu */
/* contents: json key and values */
/* contents: selected or hovered */
/* contents: section of collapsed items in an array */
/* contents: highlighting of search matches */
/* contents: inline tags inside the JSON document */
/* contents: table */
/* controls in modals: inputs, buttons, and \`a\` */
/* messages */
/* svelte-select */
/* color picker */
table.jse-transform-wizard.svelte-9wqi8y {
  border-collapse: collapse;
  border-spacing: 0;
  width: 100%;
}
table.jse-transform-wizard.svelte-9wqi8y input:where(.svelte-9wqi8y) {
  font-family: inherit;
  font-size: inherit;
}
table.jse-transform-wizard.svelte-9wqi8y tr:where(.svelte-9wqi8y) th:where(.svelte-9wqi8y) {
  font-weight: normal;
  text-align: left;
  width: 60px;
}
table.jse-transform-wizard.svelte-9wqi8y tr:where(.svelte-9wqi8y) td:where(.svelte-9wqi8y) .jse-horizontal:where(.svelte-9wqi8y) {
  width: 100%;
  display: flex;
  flex-direction: row;
  margin-bottom: calc(0.5 * var(--jse-padding, 10px));
}
table.jse-transform-wizard.svelte-9wqi8y tr:where(.svelte-9wqi8y) td:where(.svelte-9wqi8y) .jse-horizontal:where(.svelte-9wqi8y) .svelte-select .multi-item {
  align-items: center;
}
table.jse-transform-wizard.svelte-9wqi8y tr:where(.svelte-9wqi8y) td:where(.svelte-9wqi8y) .jse-horizontal:where(.svelte-9wqi8y) .svelte-select .value-container {
  gap: 0 !important;
}
table.jse-transform-wizard.svelte-9wqi8y tr:where(.svelte-9wqi8y) td:where(.svelte-9wqi8y) .jse-horizontal:where(.svelte-9wqi8y) .svelte-select.jse-filter-path {
  flex: 4;
  margin-right: calc(0.5 * var(--jse-padding, 10px));
}
table.jse-transform-wizard.svelte-9wqi8y tr:where(.svelte-9wqi8y) td:where(.svelte-9wqi8y) .jse-horizontal:where(.svelte-9wqi8y) .svelte-select.jse-filter-relation {
  flex: 1.5;
  margin-right: calc(0.5 * var(--jse-padding, 10px));
}
table.jse-transform-wizard.svelte-9wqi8y tr:where(.svelte-9wqi8y) td:where(.svelte-9wqi8y) .jse-horizontal:where(.svelte-9wqi8y) .svelte-select.jse-sort-path {
  flex: 3;
  margin-right: calc(0.5 * var(--jse-padding, 10px));
}
table.jse-transform-wizard.svelte-9wqi8y tr:where(.svelte-9wqi8y) td:where(.svelte-9wqi8y) .jse-horizontal:where(.svelte-9wqi8y) .svelte-select.jse-sort-direction {
  flex: 1;
}
table.jse-transform-wizard.svelte-9wqi8y tr:where(.svelte-9wqi8y) td:where(.svelte-9wqi8y) .jse-horizontal:where(.svelte-9wqi8y) .svelte-select.jse-projection-paths {
  flex: 1;
}
table.jse-transform-wizard.svelte-9wqi8y tr:where(.svelte-9wqi8y) td:where(.svelte-9wqi8y) .jse-horizontal:where(.svelte-9wqi8y) .svelte-select input {
  box-sizing: border-box;
}
table.jse-transform-wizard.svelte-9wqi8y tr:where(.svelte-9wqi8y) td:where(.svelte-9wqi8y) .jse-horizontal:where(.svelte-9wqi8y) .jse-filter-value:where(.svelte-9wqi8y) {
  flex: 4;
  padding: 4px 8px;
  border: var(--jse-input-border, 1px solid #d8dbdf);
  border-radius: var(--jse-input-radius, 3px);
  outline: none;
  background: var(--jse-input-background, var(--jse-background-color, #fff));
  color: inherit;
}
table.jse-transform-wizard.svelte-9wqi8y tr:where(.svelte-9wqi8y) td:where(.svelte-9wqi8y) .jse-horizontal:where(.svelte-9wqi8y) .jse-filter-value:where(.svelte-9wqi8y):focus {
  border: var(--jse-input-border-focus, 1px solid var(--jse-input-border-focus, var(--jse-theme-color, #3883fa)));
}`);var Bk=te('<table class="jse-transform-wizard svelte-9wqi8y"><tbody><tr class="svelte-9wqi8y"><th class="svelte-9wqi8y">Filter</th><td class="svelte-9wqi8y"><div class="jse-horizontal svelte-9wqi8y"><!> <!> <input class="jse-filter-value svelte-9wqi8y"/></div></td></tr><tr class="svelte-9wqi8y"><th class="svelte-9wqi8y">Sort</th><td class="svelte-9wqi8y"><div class="jse-horizontal svelte-9wqi8y"><!> <!></div></td></tr><tr class="svelte-9wqi8y"><th class="svelte-9wqi8y">Pick</th><td class="svelte-9wqi8y"><div class="jse-horizontal svelte-9wqi8y"><!></div></td></tr></tbody></table>');function Fk(e,t){var n,o,a,i,s;lt(t,!1);var l=$(void 0,!0),c=$(void 0,!0),u=$(void 0,!0),d=$(void 0,!0),v=$(void 0,!0),p=$(void 0,!0),b=Lr("jsoneditor:TransformWizard"),m=g(t,"json",9),h=g(t,"queryOptions",29,()=>({})),j=g(t,"onChange",9),x=["==","!=","<","<=",">",">="].map(xe=>({value:xe,label:xe})),C=[{value:"asc",label:"ascending"},{value:"desc",label:"descending"}],A=$((n=h())!==null&&n!==void 0&&(n=n.filter)!==null&&n!==void 0&&n.path?si(h().filter.path):void 0,!0),O=$((o=x.find(xe=>{var ue;return xe.value===((ue=h().filter)===null||ue===void 0?void 0:ue.relation)}))!==null&&o!==void 0?o:x[0],!0),w=$(((a=h())===null||a===void 0||(a=a.filter)===null||a===void 0?void 0:a.value)||"",!0),z=$((i=h())!==null&&i!==void 0&&(i=i.sort)!==null&&i!==void 0&&i.path?si(h().sort.path):void 0,!0),R=$((s=C.find(xe=>{var ue;return xe.value===((ue=h().sort)===null||ue===void 0?void 0:ue.direction)}))!==null&&s!==void 0?s:C[0],!0);Z(()=>y(m()),()=>{f(l,Array.isArray(m()))}),Z(()=>(r(l),y(m())),()=>{f(c,r(l)?pv(m()):[])}),Z(()=>(r(l),y(m())),()=>{f(u,r(l)?pv(m(),!0):[])}),Z(()=>(r(c),si),()=>{f(d,r(c).map(si))}),Z(()=>(r(u),si),()=>{f(v,r(u)?r(u).map(si):[])}),Z(()=>(y(h()),r(v),Lt),()=>{var xe;f(p,(xe=h())!==null&&xe!==void 0&&(xe=xe.projection)!==null&&xe!==void 0&&xe.paths&&r(v)?h().projection.paths.map(ue=>r(v).find(we=>Lt(we.value,ue))).filter(ue=>!!ue):void 0)}),Z(()=>r(A),()=>{var xe,ue,we;ue=(xe=r(A))===null||xe===void 0?void 0:xe.value,Lt((we=h())===null||we===void 0||(we=we.filter)===null||we===void 0?void 0:we.path,ue)||(b("changeFilterPath",ue),h(co(h(),["filter","path"],ue,!0)),j()(h()))}),Z(()=>r(O),()=>{var xe,ue,we;ue=(xe=r(O))===null||xe===void 0?void 0:xe.value,Lt((we=h())===null||we===void 0||(we=we.filter)===null||we===void 0?void 0:we.relation,ue)||(b("changeFilterRelation",ue),h(co(h(),["filter","relation"],ue,!0)),j()(h()))}),Z(()=>r(w),()=>{var xe,ue;xe=r(w),Lt((ue=h())===null||ue===void 0||(ue=ue.filter)===null||ue===void 0?void 0:ue.value,xe)||(b("changeFilterValue",xe),h(co(h(),["filter","value"],xe,!0)),j()(h()))}),Z(()=>r(z),()=>{var xe,ue,we;ue=(xe=r(z))===null||xe===void 0?void 0:xe.value,Lt((we=h())===null||we===void 0||(we=we.sort)===null||we===void 0?void 0:we.path,ue)||(b("changeSortPath",ue),h(co(h(),["sort","path"],ue,!0)),j()(h()))}),Z(()=>r(R),()=>{var xe,ue,we;ue=(xe=r(R))===null||xe===void 0?void 0:xe.value,Lt((we=h())===null||we===void 0||(we=we.sort)===null||we===void 0?void 0:we.direction,ue)||(b("changeSortDirection",ue),h(co(h(),["sort","direction"],ue,!0)),j()(h()))}),Z(()=>r(p),()=>{(function(xe){var ue;Lt((ue=h())===null||ue===void 0||(ue=ue.projection)===null||ue===void 0?void 0:ue.paths,xe)||(b("changeProjectionPaths",xe),h(co(h(),["projection","paths"],xe,!0)),j()(h()))})(r(p)?r(p).map(xe=>xe.value):void 0)}),jn(),At(!0);var Y=Bk(),E=N(Y),K=N(E),J=W(N(K)),U=N(J),ae=N(U);Li(ae,{class:"jse-filter-path",showChevron:!0,get items(){return r(d)},get value(){return r(A)},set value(xe){f(A,xe)},$$legacy:!0});var ge=W(ae,2);Li(ge,{class:"jse-filter-relation",showChevron:!0,clearable:!1,get items(){return x},get value(){return r(O)},set value(xe){f(O,xe)},$$legacy:!0});var se=W(ge,2),Te=W(K),De=W(N(Te)),Le=N(De),je=N(Le);Li(je,{class:"jse-sort-path",showChevron:!0,get items(){return r(d)},get value(){return r(z)},set value(xe){f(z,xe)},$$legacy:!0}),Li(W(je,2),{class:"jse-sort-direction",showChevron:!0,clearable:!1,get items(){return C},get value(){return r(R)},set value(xe){f(R,xe)},$$legacy:!0});var Oe=W(Te),Pe=W(N(Oe)),ot=N(Pe);Li(N(ot),{class:"jse-projection-paths",multiple:!0,showChevron:!0,get items(){return r(v)},get value(){return r(p)},set value(xe){f(p,xe)},$$legacy:!0}),mu(se,()=>r(w),xe=>f(w,xe)),P(e,Y),ct()}St(`/* over all fonts, sizes, and colors */
/* "consolas" for Windows, "menlo" for Mac with fallback to "monaco", 'Ubuntu Mono' for Ubuntu */
/* (at Mac this font looks too large at 14px, but 13px is too small for the font on Windows) */
/* main, menu, modal */
/* jsoneditor modal */
/* tooltip in text mode */
/* panels: navigation bar, gutter, search box */
/* navigation-bar */
/* context menu */
/* contents: json key and values */
/* contents: selected or hovered */
/* contents: section of collapsed items in an array */
/* contents: highlighting of search matches */
/* contents: inline tags inside the JSON document */
/* contents: table */
/* controls in modals: inputs, buttons, and \`a\` */
/* messages */
/* svelte-select */
/* color picker */
.jse-select-query-language.svelte-jrd4q2 {
  position: relative;
  width: 32px;
}
.jse-select-query-language.svelte-jrd4q2 .jse-select-query-language-container:where(.svelte-jrd4q2) {
  position: absolute;
  top: 0;
  right: 0;
  display: flex;
  flex-direction: column;
  box-shadow: var(--jse-controls-box-shadow, 0 2px 6px 0 rgba(0, 0, 0, 0.24));
}
.jse-select-query-language.svelte-jrd4q2 .jse-select-query-language-container:where(.svelte-jrd4q2) .jse-query-language:where(.svelte-jrd4q2) {
  border: none;
  background: transparent;
  color: inherit;
  cursor: pointer;
  font-family: var(--jse-font-family, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen-Sans, Ubuntu, Cantarell, "Helvetica Neue", sans-serif);
  font-size: var(--jse-font-size, 16px);
  padding: 5px;
  margin: 0;
  text-align: left;
  padding: var(--jse-padding, 10px) calc(2 * var(--jse-padding, 10px));
  white-space: nowrap;
  color: var(--jse-context-menu-color, var(--jse-text-color-inverse, #fff));
  background: var(--jse-context-menu-background, #656565);
}
.jse-select-query-language.svelte-jrd4q2 .jse-select-query-language-container:where(.svelte-jrd4q2) .jse-query-language:where(.svelte-jrd4q2):hover {
  background: var(--jse-context-menu-background-highlight, #7a7a7a);
}`);var Wk=te('<button type="button"><!> </button>'),Vk=te('<div class="jse-select-query-language svelte-jrd4q2"><div class="jse-select-query-language-container svelte-jrd4q2"></div></div>');function Hk(e,t){lt(t,!1);var n=g(t,"queryLanguages",8),o=g(t,"queryLanguageId",12),a=g(t,"onChangeQueryLanguage",8);At();var i=Vk();fr(N(i),5,n,Cr,(s,l)=>{var c,u=Wk(),d=N(u),v=m=>{nn(m,{get data(){return Pg}})},p=m=>{nn(m,{get data(){return Ng}})};ie(d,m=>{r(l),y(o()),D(()=>r(l).id===o())?m(v):m(p,!1)});var b=W(d);ze(()=>{var m;c=Mt(u,1,"jse-query-language svelte-jrd4q2",null,c,{selected:r(l).id===o()}),yn(u,"title",(r(l),D(()=>"Select ".concat(r(l).name," as query language")))),ut(b," ".concat((r(l),(m=D(()=>r(l).name))!==null&&m!==void 0?m:"")))}),Ce("click",u,()=>{return m=r(l).id,o(m),void a()(m);var m}),P(s,u)}),P(e,i),ct()}St(`/* over all fonts, sizes, and colors */
/* "consolas" for Windows, "menlo" for Mac with fallback to "monaco", 'Ubuntu Mono' for Ubuntu */
/* (at Mac this font looks too large at 14px, but 13px is too small for the font on Windows) */
/* main, menu, modal */
/* jsoneditor modal */
/* tooltip in text mode */
/* panels: navigation bar, gutter, search box */
/* navigation-bar */
/* context menu */
/* contents: json key and values */
/* contents: selected or hovered */
/* contents: section of collapsed items in an array */
/* contents: highlighting of search matches */
/* contents: inline tags inside the JSON document */
/* contents: table */
/* controls in modals: inputs, buttons, and \`a\` */
/* messages */
/* svelte-select */
/* color picker */
.jse-header.svelte-1k211ye {
  display: flex;
  background: var(--jse-theme-color, #3883fa);
  color: var(--jse-menu-color, var(--jse-text-color-inverse, #fff));
}
.jse-header.svelte-1k211ye .jse-title:where(.svelte-1k211ye) {
  flex: 1;
  padding: 5px;
  vertical-align: middle;
}
.jse-header.svelte-1k211ye button:where(.svelte-1k211ye) {
  border: none;
  background: transparent;
  min-width: 32px;
  color: inherit;
  cursor: pointer;
}
.jse-header.svelte-1k211ye button:where(.svelte-1k211ye):hover {
  background: rgba(255, 255, 255, 0.1);
}`);var Jk=te('<button type="button" class="jse-fullscreen svelte-1k211ye" title="Toggle full screen"><!></button>'),Kk=te('<div class="jse-header svelte-1k211ye"><div class="jse-title svelte-1k211ye"> </div> <!> <!> <button type="button" class="jse-close svelte-1k211ye"><!></button></div>');function Tu(e,t){lt(t,!1);var n=g(t,"title",9,"Modal"),o=g(t,"fullScreenButton",9,!1),a=g(t,"fullscreen",13,!1),i=g(t,"onClose",9,void 0);At(!0);var s=Kk(),l=N(s),c=N(l),u=W(l,2);dr(u,t,"actions",{},null);var d=W(u,2),v=b=>{var m=Jk(),h=N(m),j=Ze(()=>a()?Gb:Xb);nn(h,{get data(){return r(j)}}),Ce("click",m,()=>a(!a())),P(b,m)};ie(d,b=>{o()&&b(v)});var p=W(d,2);nn(N(p),{get data(){return Du}}),ze(()=>ut(c,n())),Ce("click",p,()=>{var b;return(b=i())===null||b===void 0?void 0:b()}),P(e,s),ct()}St(`/* over all fonts, sizes, and colors */
/* "consolas" for Windows, "menlo" for Mac with fallback to "monaco", 'Ubuntu Mono' for Ubuntu */
/* (at Mac this font looks too large at 14px, but 13px is too small for the font on Windows) */
/* main, menu, modal */
/* jsoneditor modal */
/* tooltip in text mode */
/* panels: navigation bar, gutter, search box */
/* navigation-bar */
/* context menu */
/* contents: json key and values */
/* contents: selected or hovered */
/* contents: section of collapsed items in an array */
/* contents: highlighting of search matches */
/* contents: inline tags inside the JSON document */
/* contents: table */
/* controls in modals: inputs, buttons, and \`a\` */
/* messages */
/* svelte-select */
/* color picker */
.jse-config.svelte-5gkegr {
  border: none;
  background: transparent;
  min-width: 32px;
  color: inherit;
  cursor: pointer;
}
.jse-config.svelte-5gkegr:hover {
  background: rgba(255, 255, 255, 0.1);
}
.jse-config.hide.svelte-5gkegr {
  display: none;
}`);var Yk=te('<button slot="actions" type="button" title="Select a query language"><!></button>'),Ld=Lr("jsoneditor:AutoScrollHandler");function Ch(e){var t,n;function o(l){return l<20?200:l<50?400:1200}function a(){if(e){var l=.05*(t||0);e.scrollTop+=l}}function i(l){n&&l===t||(s(),Ld("startAutoScroll",l),t=l,n=setInterval(a,50))}function s(){n&&(Ld("stopAutoScroll"),clearInterval(n),n=void 0,t=void 0)}return Ld("createAutoScrollHandler",e),{onDrag:function(l){if(e){var c=l.clientY,{top:u,bottom:d}=e.getBoundingClientRect();c<u?i(-o(u-c)):c>d?i(o(c-d)):s()}},onDragEnd:function(){s()}}}var Qk=(e,t,n,o)=>(e/=o/2)<1?n/2*e*e+t:-n/2*(--e*(e-2)-1)+t,D0=()=>{var e,t,n,o,a,i,s,l,c,u,d,v,p;function b(j){return j.getBoundingClientRect().top-(e.getBoundingClientRect?e.getBoundingClientRect().top:0)+n}function m(j){e.scrollTo?e.scrollTo(e.scrollLeft,j):e.scrollTop=j}function h(j){u||(u=j),m(i(d=j-u,n,l,c)),p=!0,d<c?requestAnimationFrame(h):function(){m(n+l),t&&s&&(t.setAttribute("tabindex","-1"),t.focus()),typeof v=="function"&&v(),u=0,p=!1}()}return function(j){var x=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};switch(c=1e3,a=x.offset||0,v=x.callback,i=x.easing||Qk,s=x.a11y||!1,typeof x.container){case"object":e=x.container;break;case"string":e=document.querySelector(x.container);break;default:e=window.document.documentElement}switch(n=e.scrollTop,typeof j){case"number":t=void 0,s=!1,o=n+j;break;case"object":o=b(t=j);break;case"string":t=document.querySelector(j),o=b(t)}switch(l=o-n+a,typeof x.duration){case"number":c=x.duration;break;case"function":c=x.duration(l)}p?u=0:requestAnimationFrame(h)}};function Ts(e,t){var n=Date.now(),o=e();return t(Date.now()-n),o}var Cs=Lr("validation"),Gk={createObjectDocumentState:()=>({type:"object",properties:{}}),createArrayDocumentState:()=>({type:"array",items:[]}),createValueDocumentState:()=>({type:"value"})};function Sh(e,t,n,o){return Sf(e,t,n,o,Gk)}function U0(e,t,n,o){if(Cs("validateJSON"),!t)return[];if(n!==o){var a=n.stringify(e);return t(a!==void 0?o.parse(a):void 0)}return t(e)}function Xk(e,t,n,o){if(Cs("validateText"),e.length>104857600)return{validationErrors:[{path:[],message:"Validation turned off: the document is too large",severity:Ko.info}]};if(e.length!==0)try{var a=Ts(()=>n.parse(e),c=>Cs("validate: parsed json in ".concat(c," ms")));if(!t)return;var i=n===o?a:Ts(()=>o.parse(e),c=>Cs("validate: parsed json with the validationParser in ".concat(c," ms"))),s=Ts(()=>t(i),c=>Cs("validate: validated json in ".concat(c," ms")));return un(s)?void 0:{validationErrors:s}}catch(c){var l=Ts(()=>function(u,d){if(u.length>_w)return!1;try{return d.parse(Vo(u)),!0}catch{return!1}}(e,n),u=>Cs("validate: checked whether repairable in ".concat(u," ms")));return{parseError:Ys(e,c.message||c.toString()),isRepairable:l}}}var Lc=Lr("jsoneditor:FocusTracker");function Tf(e){var t,{onMount:n,onDestroy:o,getWindow:a,hasFocus:i,onFocus:s,onBlur:l}=e,c=!1;function u(){var v=i();v&&(clearTimeout(t),c||(Lc("focus"),s(),c=v))}function d(){c&&(clearTimeout(t),t=setTimeout(()=>{i()||(Lc("blur"),c=!1,l())}))}n(()=>{Lc("mount FocusTracker");var v=a();v&&(v.addEventListener("focusin",u,!0),v.addEventListener("focusout",d,!0))}),o(()=>{Lc("destroy FocusTracker");var v=a();v&&(v.removeEventListener("focusin",u,!0),v.removeEventListener("focusout",d,!0))})}St(`/* over all fonts, sizes, and colors */
/* "consolas" for Windows, "menlo" for Mac with fallback to "monaco", 'Ubuntu Mono' for Ubuntu */
/* (at Mac this font looks too large at 14px, but 13px is too small for the font on Windows) */
/* main, menu, modal */
/* jsoneditor modal */
/* tooltip in text mode */
/* panels: navigation bar, gutter, search box */
/* navigation-bar */
/* context menu */
/* contents: json key and values */
/* contents: selected or hovered */
/* contents: section of collapsed items in an array */
/* contents: highlighting of search matches */
/* contents: inline tags inside the JSON document */
/* contents: table */
/* controls in modals: inputs, buttons, and \`a\` */
/* messages */
/* svelte-select */
/* color picker */
.jse-message.svelte-cbvd26 {
  font-family: var(--jse-font-family-mono, consolas, menlo, monaco, "Ubuntu Mono", "source-code-pro", monospace);
  font-size: var(--jse-font-size-mono, 14px);
  padding: var(--jse-padding, 10px);
  display: flex;
  gap: var(--jse-padding, 10px);
  flex-wrap: wrap;
  align-items: stretch;
}
.jse-message.jse-success.svelte-cbvd26 {
  background: var(--message-success-background, #9ac45d);
  color: var(--jse-message-success-color, #fff);
}
.jse-message.svelte-cbvd26 .jse-text:where(.svelte-cbvd26) {
  display: flex;
  flex: 1;
  min-width: 60%;
  align-items: center;
}
.jse-message.svelte-cbvd26 .jse-text.jse-clickable:where(.svelte-cbvd26) {
  cursor: pointer;
}
.jse-message.svelte-cbvd26 .jse-text.jse-clickable:where(.svelte-cbvd26):hover {
  background-color: rgba(255, 255, 255, 0.1);
}
.jse-message.jse-error.svelte-cbvd26 {
  background: var(--jse-message-error-background, var(--jse-error-color, #ee5341));
  color: var(--jse-message-error-color, #fff);
}
.jse-message.jse-warning.svelte-cbvd26 {
  background: var(--jse-message-warning-background, #ffde5c);
  color: var(--jse-message-warning-color, #4d4d4d);
}
.jse-message.jse-info.svelte-cbvd26 {
  background: var(--jse-message-info-background, #4f91ff);
  color: var(--jse-message-info-color, #fff);
}
.jse-message.svelte-cbvd26 .jse-actions:where(.svelte-cbvd26) {
  display: flex;
  gap: var(--jse-padding, 10px);
}
.jse-message.svelte-cbvd26 .jse-actions:where(.svelte-cbvd26) button.jse-action:where(.svelte-cbvd26) {
  border: none;
  background: transparent;
  color: inherit;
  cursor: pointer;
  font-family: var(--jse-font-family, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen-Sans, Ubuntu, Cantarell, "Helvetica Neue", sans-serif);
  font-size: var(--jse-font-size, 16px);
  padding: 5px;
  margin: 0;
  background: var(--jse-message-action-background, rgba(255, 255, 255, 0.2));
  color: inherit;
  padding: calc(0.5 * var(--jse-padding, 10px)) var(--jse-padding, 10px);
}
.jse-message.svelte-cbvd26 .jse-actions:where(.svelte-cbvd26) button.jse-action:where(.svelte-cbvd26):hover {
  background: var(--jse-message-action-background-highlight, rgba(255, 255, 255, 0.3));
}`);var Zk=te('<button type="button" class="jse-button jse-action jse-primary svelte-cbvd26"><!> </button>'),eC=te('<div><div role="button" tabindex="-1"><div class="jse-text-centered"><!> </div></div> <div class="jse-actions svelte-cbvd26"></div></div>');function Oo(e,t){lt(t,!1);var n=g(t,"type",9,"success"),o=g(t,"icon",9,void 0),a=g(t,"message",9,void 0),i=g(t,"actions",25,()=>[]),s=g(t,"onClick",9,void 0),l=g(t,"onClose",9,void 0);l()&&Io(l()),At(!0);var c,u=eC(),d=N(u),v=N(d),p=N(v),b=h=>{nn(h,{get data(){return o()}})};ie(p,h=>{o()&&h(b)});var m=W(p);fr(W(d,2),5,i,Cr,(h,j)=>{var x=Zk(),C=N(x),A=w=>{nn(w,{get data(){return r(j),D(()=>r(j).icon)}})};ie(C,w=>{r(j),D(()=>r(j).icon)&&w(A)});var O=W(C);ze(()=>{var w;yn(x,"title",(r(j),D(()=>r(j).title))),x.disabled=(r(j),D(()=>r(j).disabled)),ut(O," ".concat((r(j),(w=D(()=>r(j).text))!==null&&w!==void 0?w:"")))}),Ce("click",x,()=>{r(j).onClick&&r(j).onClick()}),Ce("mousedown",x,()=>{r(j).onMouseDown&&r(j).onMouseDown()}),P(h,x)}),ze(()=>{var h,j;Mt(u,1,"jse-message jse-".concat((h=n())!==null&&h!==void 0?h:""),"svelte-cbvd26"),c=Mt(d,1,"jse-text svelte-cbvd26",null,c,{"jse-clickable":!!s()}),ut(m," ".concat((j=a())!==null&&j!==void 0?j:""))}),Ce("click",d,function(){s()&&s()()}),P(e,u),ct()}St(`/* over all fonts, sizes, and colors */
/* "consolas" for Windows, "menlo" for Mac with fallback to "monaco", 'Ubuntu Mono' for Ubuntu */
/* (at Mac this font looks too large at 14px, but 13px is too small for the font on Windows) */
/* main, menu, modal */
/* jsoneditor modal */
/* tooltip in text mode */
/* panels: navigation bar, gutter, search box */
/* navigation-bar */
/* context menu */
/* contents: json key and values */
/* contents: selected or hovered */
/* contents: section of collapsed items in an array */
/* contents: highlighting of search matches */
/* contents: inline tags inside the JSON document */
/* contents: table */
/* controls in modals: inputs, buttons, and \`a\` */
/* messages */
/* svelte-select */
/* color picker */
.jse-validation-errors-overview.svelte-1342rh4 {
  font-family: var(--jse-font-family-mono, consolas, menlo, monaco, "Ubuntu Mono", "source-code-pro", monospace);
  font-size: var(--jse-font-size-mono, 14px);
  overflow: auto;
  max-height: 25%;
}
.jse-validation-errors-overview.svelte-1342rh4 table:where(.svelte-1342rh4) {
  border-collapse: collapse;
  width: 100%;
}
.jse-validation-errors-overview.svelte-1342rh4 table:where(.svelte-1342rh4) tr:where(.svelte-1342rh4) {
  cursor: pointer;
}
.jse-validation-errors-overview.svelte-1342rh4 table:where(.svelte-1342rh4) tr.jse-validation-error:where(.svelte-1342rh4) {
  background: var(--jse-message-error-background, var(--jse-error-color, #ee5341));
  color: var(--jse-message-error-color, #fff);
}
.jse-validation-errors-overview.svelte-1342rh4 table:where(.svelte-1342rh4) tr.jse-validation-warning:where(.svelte-1342rh4) {
  background: var(--jse-message-warning-background, #ffde5c);
  color: var(--jse-message-warning-color, #4d4d4d);
}
.jse-validation-errors-overview.svelte-1342rh4 table:where(.svelte-1342rh4) tr.jse-validation-warning:where(.svelte-1342rh4):hover {
  filter: brightness(105%);
}
.jse-validation-errors-overview.svelte-1342rh4 table:where(.svelte-1342rh4) tr.jse-validation-info:where(.svelte-1342rh4) {
  background: var(--jse-message-info-background, #4f91ff);
  color: var(--jse-message-info-color, #fff);
}
.jse-validation-errors-overview.svelte-1342rh4 table:where(.svelte-1342rh4) tr:where(.svelte-1342rh4):hover {
  filter: brightness(110%);
}
.jse-validation-errors-overview.svelte-1342rh4 table:where(.svelte-1342rh4) tr:where(.svelte-1342rh4) td:where(.svelte-1342rh4) {
  padding: 4px var(--jse-padding, 10px);
  vertical-align: middle;
}
.jse-validation-errors-overview.svelte-1342rh4 table:where(.svelte-1342rh4) tr:where(.svelte-1342rh4) td.jse-validation-error-icon:where(.svelte-1342rh4) {
  width: 36px;
  box-sizing: border-box;
}
.jse-validation-errors-overview.svelte-1342rh4 table:where(.svelte-1342rh4) tr:where(.svelte-1342rh4) td.jse-validation-error-action:where(.svelte-1342rh4) {
  width: 36px;
  box-sizing: border-box;
  padding: 0;
}
.jse-validation-errors-overview.svelte-1342rh4 table:where(.svelte-1342rh4) tr:where(.svelte-1342rh4) td.jse-validation-error-action:where(.svelte-1342rh4) button.jse-validation-errors-collapse:where(.svelte-1342rh4) {
  border: none;
  background: transparent;
  color: inherit;
  cursor: pointer;
  font-family: var(--jse-font-family, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen-Sans, Ubuntu, Cantarell, "Helvetica Neue", sans-serif);
  font-size: var(--jse-font-size, 16px);
  padding: 5px;
  margin: 0;
  width: 36px;
  height: 26px;
  cursor: pointer;
}
.jse-validation-errors-overview.svelte-1342rh4 table:where(.svelte-1342rh4) tr:where(.svelte-1342rh4) td.jse-validation-error-action:where(.svelte-1342rh4) button.jse-validation-errors-collapse:where(.svelte-1342rh4):hover {
  background-color: rgba(255, 255, 255, 0.2);
}
.jse-validation-errors-overview.svelte-1342rh4 table:where(.svelte-1342rh4) tr:where(.svelte-1342rh4) td:where(.svelte-1342rh4) div.jse-validation-errors-expand:where(.svelte-1342rh4) {
  display: inline-block;
  position: relative;
  top: 3px;
}`);var tC=te('<button type="button" class="jse-validation-errors-collapse svelte-1342rh4" title="Collapse validation errors"><!></button>'),nC=te('<tr tabindex="0"><td class="jse-validation-error-icon svelte-1342rh4"><!></td><td class="jse-validation-error-path svelte-1342rh4"> </td><td class="jse-validation-error-message svelte-1342rh4"> </td><td class="jse-validation-error-action svelte-1342rh4"><!></td></tr>'),rC=te('<tr class="jse-validation-error svelte-1342rh4"><td class="svelte-1342rh4"></td><td class="svelte-1342rh4"></td><td class="svelte-1342rh4"> </td><td class="svelte-1342rh4"></td></tr>'),oC=te('<table class="jse-validation-errors-overview-expanded svelte-1342rh4"><tbody><!><!></tbody></table>'),aC=te('<table class="jse-validation-errors-overview-collapsed svelte-1342rh4"><tbody><tr><td class="jse-validation-error-icon svelte-1342rh4"><!></td><td class="jse-validation-error-count svelte-1342rh4"> <div class="jse-validation-errors-expand svelte-1342rh4"><!></div></td></tr></tbody></table>'),iC=te('<div class="jse-validation-errors-overview svelte-1342rh4"><!></div>');function zf(e,t){lt(t,!1);var n=$(void 0,!0),o=g(t,"validationErrors",9),a=g(t,"selectError",9),i=$(!0,!0);function s(){f(i,!1)}function l(){f(i,!0)}Z(()=>y(o()),()=>{f(n,o().length)}),jn(),At(!0);var c=Ut(),u=Xe(c),d=v=>{var p=iC(),b=N(p),m=j=>{var x=oC(),C=N(x),A=N(C);fr(A,1,()=>(y(bu),y(o()),y(Nc),D(()=>bu(o(),Nc))),Cr,(z,R,Y)=>{var E=nC(),K=N(E);nn(N(K),{get data(){return Yi}});var J=W(K),U=N(J),ae=W(J),ge=N(ae),se=N(W(ae)),Te=De=>{var Le=tC();nn(N(Le),{get data(){return c1}}),Ce("click",Le,Aa(s)),P(De,Le)};ie(se,De=>{y(o()),D(()=>Y===0&&o().length>1)&&De(Te)}),ze(De=>{var Le;Mt(E,1,"jse-validation-".concat((r(R),(Le=D(()=>r(R).severity))!==null&&Le!==void 0?Le:"")),"svelte-1342rh4"),ut(U,De),ut(ge,(r(R),D(()=>r(R).message)))},[()=>(y(Fr),r(R),D(()=>Fr(r(R).path)))]),Ce("click",E,()=>{setTimeout(()=>a()(r(R)))}),P(z,E)});var O=W(A),w=z=>{var R=rC(),Y=W(N(R),2),E=N(Y);ze(()=>ut(E,"(and ".concat(r(n)-Nc," more errors)"))),P(z,R)};ie(O,z=>{r(n)>Nc&&z(w)}),P(j,x)},h=j=>{var x=aC(),C=N(x),A=N(C),O=N(A);nn(N(O),{get data(){return Yi}});var w=N(W(O));nn(N(W(w)),{get data(){return yg}}),ze(z=>{var R;Mt(A,1,"jse-validation-".concat(z??""),"svelte-1342rh4"),ut(w,"".concat((R=r(n))!==null&&R!==void 0?R:""," validation errors "))},[()=>(y(o()),D(()=>{return z=o(),[Ko.error,Ko.warning,Ko.info].find(R=>z.some(Y=>Y.severity===R));var z}))]),Ce("click",A,l),P(j,x)};ie(b,j=>{r(i)||r(n)===1?j(m):j(h,!1)}),P(v,p)};ie(u,v=>{y(un),y(o()),D(()=>!un(o()))&&v(d)}),P(e,c),ct()}function zu(e,t){if(e)return e.addEventListener("keydown",n),{destroy(){e.removeEventListener("keydown",n)}};function n(o){o.key==="Escape"&&(o.preventDefault(),o.stopPropagation(),t())}}St(`/* over all fonts, sizes, and colors */
/* "consolas" for Windows, "menlo" for Mac with fallback to "monaco", 'Ubuntu Mono' for Ubuntu */
/* (at Mac this font looks too large at 14px, but 13px is too small for the font on Windows) */
/* main, menu, modal */
/* jsoneditor modal */
/* tooltip in text mode */
/* panels: navigation bar, gutter, search box */
/* navigation-bar */
/* context menu */
/* contents: json key and values */
/* contents: selected or hovered */
/* contents: section of collapsed items in an array */
/* contents: highlighting of search matches */
/* contents: inline tags inside the JSON document */
/* contents: table */
/* controls in modals: inputs, buttons, and \`a\` */
/* messages */
/* svelte-select */
/* color picker */
dialog.jse-modal.svelte-2aoco4 {
  border-radius: 3px;
  font-size: var(--jse-padding, 10px);
  border: none;
  padding: 0;
  display: flex;
  min-width: 0;
  margin: auto;
  overflow: visible;
  transition: width 0.1s ease-in-out, height 0.1s ease-in-out;
}
dialog.jse-modal.jse-sort-modal.svelte-2aoco4 {
  width: 400px;
}
dialog.jse-modal.jse-repair-modal.svelte-2aoco4 {
  width: 600px;
  height: 500px;
}
dialog.jse-modal.jse-jsoneditor-modal.svelte-2aoco4 {
  width: 800px;
  height: 600px;
}
dialog.jse-modal.jse-transform-modal.svelte-2aoco4 {
  width: 1200px;
  height: 800px;
}
dialog.jse-modal.jse-fullscreen.svelte-2aoco4 {
  width: 100%;
  height: 100%;
}
dialog.jse-modal.svelte-2aoco4::backdrop {
  background: var(--jse-overlay-background, rgba(0, 0, 0, 0.3));
}
dialog.jse-modal[open].svelte-2aoco4 {
  animation: svelte-2aoco4-zoom 0.3s cubic-bezier(0.34, 1.56, 0.64, 1);
}
dialog.jse-modal[open].svelte-2aoco4::backdrop {
  animation: svelte-2aoco4-fade 0.2s ease-out;
}
dialog.jse-modal.svelte-2aoco4 .jse-modal-inner:where(.svelte-2aoco4) {
  flex: 1;
  display: flex;
  flex-direction: column;
  min-width: 0;
  min-height: 0;
  padding: 0;
  font-family: var(--jse-font-family, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen-Sans, Ubuntu, Cantarell, "Helvetica Neue", sans-serif);
  font-size: var(--jse-font-size, 16px);
  line-height: normal;
  background: var(--jse-modal-background, #f5f5f5);
  color: var(--jse-text-color, #4d4d4d);
}
@keyframes svelte-2aoco4-zoom {
  from {
    transform: scale(0.95);
  }
  to {
    transform: scale(1);
  }
}
@keyframes svelte-2aoco4-fade {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}
dialog.jse-modal.svelte-2aoco4 .svelte-select {
  --border: var(--jse-svelte-select-border, 1px solid #d8dbdf);
  --item-is-active-bg: var(--jse-item-is-active-bg, #3883fa);
  --border-radius: var(--jse-svelte-select-border-radius, 3px);
  --background: var(--jse-svelte-select-background, #fff);
  --padding: var(--jse-svelte-select-padding, 0 10px);
  --multi-select-padding: var(--jse-svelte-select-multi-select-padding, 0 10px);
  --font-size: var(--jse-svelte-select-font-size, var(--jse-font-size, 16px));
  --height: 36px;
  --multi-item-height: 28px;
  --multi-item-margin: 2px;
  --multi-item-padding: 2px 8px;
  --multi-item-border-radius: 6px;
  --indicator-top: 8px;
}`);var sC=te('<dialog><div class="jse-modal-inner svelte-2aoco4"><!></div></dialog>');function Xl(e,t){lt(t,!1);var n=g(t,"className",8,void 0),o=g(t,"fullscreen",8,!1),a=g(t,"onClose",8),i=$();function s(){a()()}no(()=>r(i).showModal()),Io(()=>r(i).close()),At();var l,c=sC(),u=N(c);dr(N(u),t,"default",{},null),Qn(c,d=>f(i,d),()=>r(i)),Kr(()=>Ce("close",c,s)),Kr(()=>{return Ce("pointerdown",c,(d=s,function(){for(var v=arguments.length,p=new Array(v),b=0;b<v;b++)p[b]=arguments[b];p[0].target===this&&d?.apply(this,p)}));var d}),Kr(()=>Ce("cancel",c,ti(function(d){Ml.call(this,t,d)}))),io(c,(d,v)=>zu?.(d,v),()=>s),ze(d=>l=Mt(c,1,d,"svelte-2aoco4",l,{"jse-fullscreen":o()}),[()=>Ci((y(ta),y(n()),D(()=>ta("jse-modal",n()))))]),P(e,c),ct()}St(`/* over all fonts, sizes, and colors */
/* "consolas" for Windows, "menlo" for Mac with fallback to "monaco", 'Ubuntu Mono' for Ubuntu */
/* (at Mac this font looks too large at 14px, but 13px is too small for the font on Windows) */
/* main, menu, modal */
/* jsoneditor modal */
/* tooltip in text mode */
/* panels: navigation bar, gutter, search box */
/* navigation-bar */
/* context menu */
/* contents: json key and values */
/* contents: selected or hovered */
/* contents: section of collapsed items in an array */
/* contents: highlighting of search matches */
/* contents: inline tags inside the JSON document */
/* contents: table */
/* controls in modals: inputs, buttons, and \`a\` */
/* messages */
/* svelte-select */
/* color picker */
.jse-modal-contents.svelte-10a6ob6 {
  flex: 1;
  display: flex;
  flex-direction: column;
  padding: 20px;
  overflow: auto;
  min-width: 0;
  min-height: 0;
}
.jse-modal-contents.svelte-10a6ob6 .jse-actions:where(.svelte-10a6ob6) {
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  padding-top: var(--jse-padding, 10px);
}
.jse-modal-contents.svelte-10a6ob6 .jse-actions:where(.svelte-10a6ob6) button.jse-primary:where(.svelte-10a6ob6) {
  border: none;
  background: transparent;
  color: inherit;
  cursor: pointer;
  font-family: var(--jse-font-family, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen-Sans, Ubuntu, Cantarell, "Helvetica Neue", sans-serif);
  font-size: var(--jse-font-size, 16px);
  padding: 5px;
  margin: 0;
  background: var(--jse-button-primary-background, var(--jse-theme-color, #3883fa));
  color: var(--jse-button-primary-color, #fff);
  padding: var(--jse-padding, 10px) calc(2 * var(--jse-padding, 10px));
  border-radius: 3px;
}
.jse-modal-contents.svelte-10a6ob6 .jse-actions:where(.svelte-10a6ob6) button.jse-primary:where(.svelte-10a6ob6):hover {
  background: var(--jse-button-primary-background-highlight, var(--jse-theme-color-highlight, #5f9dff));
}
.jse-modal-contents.svelte-10a6ob6 .jse-actions:where(.svelte-10a6ob6) button.jse-primary:where(.svelte-10a6ob6):disabled {
  background: var(--jse-button-primary-background-disabled, #9d9d9d);
}

.jse-shortcuts.svelte-10a6ob6 {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  margin: calc(2 * var(--jse-padding, 10px)) 0;
}
.jse-shortcuts.svelte-10a6ob6 .jse-shortcut:where(.svelte-10a6ob6) .jse-key:where(.svelte-10a6ob6) {
  font-size: 200%;
  color: var(--jse-theme-color, #3883fa);
}`);var lC=te('<!> <div class="jse-modal-contents svelte-10a6ob6"><div>Clipboard permission is disabled by your browser. You can use:</div> <div class="jse-shortcuts svelte-10a6ob6"><div class="jse-shortcut svelte-10a6ob6"><div class="jse-key svelte-10a6ob6"> </div> for copy</div> <div class="jse-shortcut svelte-10a6ob6"><div class="jse-key svelte-10a6ob6"> </div> for cut</div> <div class="jse-shortcut svelte-10a6ob6"><div class="jse-key svelte-10a6ob6"> </div> for paste</div></div> <div class="jse-actions svelte-10a6ob6"><button type="button" class="jse-primary svelte-10a6ob6">Close</button></div></div>',1);function L0(e,t){lt(t,!1);var n=g(t,"onClose",9),o=mf()?"⌘":"Ctrl";At(!0),Xl(e,{get onClose(){return n()},className:"jse-copy-paste",children:(a,i)=>{var s=lC(),l=Xe(s);Tu(l,{title:"Copying and pasting",get onClose(){return n()}});var c=W(l,2),u=W(N(c),2),d=N(u),v=N(d),p=N(v),b=W(d,2),m=N(b),h=N(m),j=N(W(b,2)),x=N(j),C=N(W(u,2));ze(()=>{ut(p,"".concat(o,"+C")),ut(h,"".concat(o,"+X")),ut(x,"".concat(o,"+V"))}),Ce("click",C,function(){for(var A,O=arguments.length,w=new Array(O),z=0;z<O;z++)w[z]=arguments[z];(A=n())===null||A===void 0||A.apply(this,w)}),P(a,s)},$$slots:{default:!0}}),ct()}St(`/* over all fonts, sizes, and colors */
/* "consolas" for Windows, "menlo" for Mac with fallback to "monaco", 'Ubuntu Mono' for Ubuntu */
/* (at Mac this font looks too large at 14px, but 13px is too small for the font on Windows) */
/* main, menu, modal */
/* jsoneditor modal */
/* tooltip in text mode */
/* panels: navigation bar, gutter, search box */
/* navigation-bar */
/* context menu */
/* contents: json key and values */
/* contents: selected or hovered */
/* contents: section of collapsed items in an array */
/* contents: highlighting of search matches */
/* contents: inline tags inside the JSON document */
/* contents: table */
/* controls in modals: inputs, buttons, and \`a\` */
/* messages */
/* svelte-select */
/* color picker */
.jse-menu.svelte-3erbu0 {
  background: var(--jse-theme-color, #3883fa);
  font-family: var(--jse-font-family, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen-Sans, Ubuntu, Cantarell, "Helvetica Neue", sans-serif);
  font-size: var(--jse-font-size-main-menu, 14px);
  color: var(--jse-menu-color, var(--jse-text-color-inverse, #fff));
  display: flex;
  flex-wrap: wrap;
  align-items: stretch;
  position: relative;
}
.jse-menu.svelte-3erbu0 .jse-button:where(.svelte-3erbu0) {
  font-family: inherit;
  font-size: inherit;
  line-height: 1.5em;
  border: none;
  background: transparent;
  color: inherit;
  cursor: pointer;
  width: var(--jse-menu-button-size, 32px);
  height: var(--jse-menu-button-size, 32px);
  padding: calc(0.5 * var(--jse-padding, 10px));
  margin: 0;
  border-radius: 0;
  display: inline-flex;
  align-items: center;
  text-align: center;
  justify-content: center;
}
.jse-menu.svelte-3erbu0 .jse-button:where(.svelte-3erbu0):hover, .jse-menu.svelte-3erbu0 .jse-button:where(.svelte-3erbu0):focus {
  background: var(--jse-theme-color-highlight, #5f9dff);
}
.jse-menu.svelte-3erbu0 .jse-button:where(.svelte-3erbu0):disabled {
  color: var(--jse-menu-color, var(--jse-text-color-inverse, #fff));
  opacity: 0.5;
  background: transparent;
}
.jse-menu.svelte-3erbu0 .jse-button.jse-group-button:where(.svelte-3erbu0) {
  width: auto;
  height: calc(var(--jse-menu-button-size, 32px) - var(--jse-padding, 10px));
  margin: calc(0.5 * var(--jse-padding, 10px)) 0;
  padding: 0 calc(0.5 * var(--jse-padding, 10px)) 1px;
  border: 1px solid var(--jse-menu-color, var(--jse-text-color-inverse, #fff));
}
.jse-menu.svelte-3erbu0 .jse-button.jse-group-button:where(.svelte-3erbu0):not(.jse-last) {
  border-right: none;
}
.jse-menu.svelte-3erbu0 .jse-button.jse-group-button.jse-first:where(.svelte-3erbu0) {
  margin-left: calc(0.5 * var(--jse-padding, 10px));
}
.jse-menu.svelte-3erbu0 .jse-button.jse-group-button.jse-last:where(.svelte-3erbu0) {
  margin-right: calc(0.5 * var(--jse-padding, 10px));
}
.jse-menu.svelte-3erbu0 .jse-button.jse-group-button:where(.svelte-3erbu0):hover, .jse-menu.svelte-3erbu0 .jse-button.jse-group-button:where(.svelte-3erbu0):focus {
  background: var(--jse-theme-color-highlight, #5f9dff);
}
.jse-menu.svelte-3erbu0 .jse-button.jse-group-button.jse-selected:where(.svelte-3erbu0) {
  background: var(--jse-menu-color, var(--jse-text-color-inverse, #fff));
  color: var(--jse-theme-color, #3883fa);
}
.jse-menu.svelte-3erbu0 .jse-space:where(.svelte-3erbu0) {
  flex: 1;
}
.jse-menu.svelte-3erbu0 .jse-separator:where(.svelte-3erbu0) {
  background: var(--jse-menu-color, var(--jse-text-color-inverse, #fff));
  opacity: 0.3;
  width: 1px;
  margin: 3px;
}`);var cC=te('<div class="jse-separator svelte-3erbu0"></div>'),uC=te('<div class="jse-space svelte-3erbu0"></div>'),dC=te('<button type="button"><!> <!></button>'),vC=te('<div class="jse-menu svelte-3erbu0"><!> <!> <!></div>');function od(e,t){lt(t,!1);var n=g(t,"items",25,()=>[]);At(!0);var o=vC(),a=N(o);dr(a,t,"left",{},null);var i=W(a,2);fr(i,1,n,Cr,(s,l)=>{var c=Ut(),u=Xe(c),d=p=>{P(p,cC())},v=p=>{var b=Ut(),m=Xe(b),h=x=>{P(x,uC())},j=x=>{var C=Ut(),A=Xe(C),O=z=>{var R=dC(),Y=N(R),E=U=>{nn(U,{get data(){return r(l),D(()=>r(l).icon)}})};ie(Y,U=>{r(l),D(()=>r(l).icon)&&U(E)});var K=W(Y,2),J=U=>{var ae=Wr();ze(()=>ut(ae,(r(l),D(()=>r(l).text)))),P(U,ae)};ie(K,U=>{r(l),D(()=>r(l).text)&&U(J)}),ze(()=>{var U;Mt(R,1,"jse-button ".concat((r(l),(U=D(()=>r(l).className))!==null&&U!==void 0?U:"")),"svelte-3erbu0"),yn(R,"title",(r(l),D(()=>r(l).title))),R.disabled=(r(l),D(()=>r(l).disabled||!1))}),Ce("click",R,function(){for(var U,ae=arguments.length,ge=new Array(ae),se=0;se<ae;se++)ge[se]=arguments[se];(U=r(l).onClick)===null||U===void 0||U.apply(this,ge)}),P(z,R)},w=z=>{var R=Wr();ze(Y=>ut(R,Y),[()=>(r(l),D(()=>function(Y){return console.error("Unknown type of menu item",Y),"???"}(r(l))))]),P(z,R)};ie(A,z=>{y(Ta),r(l),D(()=>Ta(r(l)))?z(O):z(w,!1)},!0),P(x,C)};ie(m,x=>{y(bv),r(l),D(()=>bv(r(l)))?x(h):x(j,!1)},!0),P(p,b)};ie(u,p=>{y(ii),r(l),D(()=>ii(r(l)))?p(d):p(v,!1)}),P(s,c)}),dr(W(i,2),t,"right",{},null),P(e,o),ct()}St(`/* over all fonts, sizes, and colors */
/* "consolas" for Windows, "menlo" for Mac with fallback to "monaco", 'Ubuntu Mono' for Ubuntu */
/* (at Mac this font looks too large at 14px, but 13px is too small for the font on Windows) */
/* main, menu, modal */
/* jsoneditor modal */
/* tooltip in text mode */
/* panels: navigation bar, gutter, search box */
/* navigation-bar */
/* context menu */
/* contents: json key and values */
/* contents: selected or hovered */
/* contents: section of collapsed items in an array */
/* contents: highlighting of search matches */
/* contents: inline tags inside the JSON document */
/* contents: table */
/* controls in modals: inputs, buttons, and \`a\` */
/* messages */
/* svelte-select */
/* color picker */
.jse-json-repair-component.svelte-16jv58j {
  flex: 1;
  display: flex;
  flex-direction: column;
  background: var(--jse-background-color, #fff);
  color: var(--jse-text-color, #4d4d4d);
}
.jse-json-repair-component.svelte-16jv58j .jse-info:where(.svelte-16jv58j) {
  padding: calc(0.5 * var(--jse-padding, 10px));
  font-family: var(--jse-font-family, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen-Sans, Ubuntu, Cantarell, "Helvetica Neue", sans-serif);
  font-size: var(--jse-font-size, 16px);
  vertical-align: center;
}
.jse-json-repair-component.svelte-16jv58j .jse-json-text:where(.svelte-16jv58j) {
  flex: 1;
  border: none;
  padding: 2px;
  font-family: var(--jse-font-family-mono, consolas, menlo, monaco, "Ubuntu Mono", "source-code-pro", monospace);
  font-size: var(--jse-font-size-mono, 14px);
  background: var(--jse-input-background, var(--jse-background-color, #fff));
  color: var(--jse-text-color, #4d4d4d);
  resize: none;
  outline: none;
}`);var fC=te('<div slot="left" class="jse-info svelte-16jv58j">Repair invalid JSON, then click apply</div>'),pC=te('<div class="jse-json-repair-component svelte-16jv58j"><!> <!> <textarea class="jse-json-text svelte-16jv58j" autocomplete="off" autocapitalize="off" spellcheck="false"></textarea></div>');function hC(e,t){lt(t,!1);var n=$(void 0,!0),o=$(void 0,!0),a=$(void 0,!0),i=$(void 0,!0),s=$(void 0,!0),l=$(void 0,!0),c=g(t,"text",13,""),u=g(t,"readOnly",9,!1),d=g(t,"onParse",9),v=g(t,"onRepair",9),p=g(t,"onChange",9,void 0),b=g(t,"onApply",9),m=g(t,"onCancel",9),h=Lr("jsoneditor:JSONRepair"),j=$(void 0,!0);function x(){if(r(j)&&r(n)){var J=r(n).position!==void 0?r(n).position:0;r(j).setSelectionRange(J,J),r(j).focus()}}function C(){b()(c())}function A(){try{c(v()(c())),p()&&p()(c())}catch{}}var O=$(void 0,!0);Z(()=>y(c()),()=>{f(n,function(J){try{return void d()(J)}catch(U){return Ys(J,U.message)}}(c()))}),Z(()=>y(c()),()=>{f(o,function(J){try{return v()(J),!0}catch{return!1}}(c()))}),Z(()=>r(n),()=>{h("error",r(n))}),Z(()=>y(m()),()=>{f(O,[{type:"space"},{type:"button",icon:Du,title:"Cancel repair",className:"jse-cancel",onClick:m()}])}),Z(()=>Xf,()=>{f(a,{icon:Xf,text:"Show me",title:"Scroll to the error location",onClick:x})}),Z(()=>xi,()=>{f(i,{icon:xi,text:"Auto repair",title:"Automatically repair JSON",onClick:A})}),Z(()=>(r(o),r(a),r(i)),()=>{f(s,r(o)?[r(a),r(i)]:[r(a)])}),Z(()=>y(u()),()=>{f(l,[{icon:Hv,text:"Apply",title:"Apply fixed JSON",disabled:u(),onClick:C}])}),jn(),At(!0);var w=pC(),z=N(w);od(z,{get items(){return r(O)},$$slots:{left:(J,U)=>{P(J,fC())}}});var R=W(z,2),Y=J=>{var U=Ze(()=>(r(n),D(()=>"Cannot parse JSON: ".concat(r(n).message))));Oo(J,{type:"error",get icon(){return Yi},get message(){return r(U)},get actions(){return r(s)}})},E=J=>{Oo(J,{type:"success",message:"JSON is valid now and can be parsed.",get actions(){return r(l)}})};ie(R,J=>{r(n)?J(Y):J(E,!1)});var K=W(R,2);Qn(K,J=>f(j,J),()=>r(j)),ze(()=>{K.readOnly=u(),es(K,c())}),Ce("input",K,function(J){h("handleChange");var U=J.target.value;c()!==U&&(c(U),p()&&p()(c()))}),P(e,w),ct()}function B0(e,t){lt(t,!1);var n=g(t,"text",13),o=g(t,"onParse",9),a=g(t,"onRepair",9),i=g(t,"onApply",9),s=g(t,"onClose",9);function l(u){i()(u),s()()}function c(){s()()}At(!0),Xl(e,{get onClose(){return s()},className:"jse-repair-modal",children:(u,d)=>{hC(u,{get onParse(){return o()},get onRepair(){return a()},onApply:l,onCancel:c,get text(){return n()},set text(v){n(v)},$$legacy:!0})},$$slots:{default:!0}}),ct()}St(`/* over all fonts, sizes, and colors */
/* "consolas" for Windows, "menlo" for Mac with fallback to "monaco", 'Ubuntu Mono' for Ubuntu */
/* (at Mac this font looks too large at 14px, but 13px is too small for the font on Windows) */
/* main, menu, modal */
/* jsoneditor modal */
/* tooltip in text mode */
/* panels: navigation bar, gutter, search box */
/* navigation-bar */
/* context menu */
/* contents: json key and values */
/* contents: selected or hovered */
/* contents: section of collapsed items in an array */
/* contents: highlighting of search matches */
/* contents: inline tags inside the JSON document */
/* contents: table */
/* controls in modals: inputs, buttons, and \`a\` */
/* messages */
/* svelte-select */
/* color picker */
div.jse-collapsed-items.svelte-1v6dhm4 {
  margin-left: calc(var(--level) * var(--jse-indent-size, calc(1em + 4px)));
  font-family: var(--jse-font-family, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen-Sans, Ubuntu, Cantarell, "Helvetica Neue", sans-serif);
  font-size: var(--jse-font-size, 16px);
  color: var(--jse-collapsed-items-link-color, rgba(0, 0, 0, 0.38));
  padding: calc(0.5 * var(--jse-padding, 10px));
  border: 8px solid transparent;
  border-width: 8px 0;
  background-color: var(--jse-contents-background-color, transparent);
  background-image: linear-gradient(var(--jse-collapsed-items-background-color, #f5f5f5), var(--jse-collapsed-items-background-color, #f5f5f5)), linear-gradient(to bottom right, transparent 50.5%, var(--jse-collapsed-items-background-color, #f5f5f5) 50.5%), linear-gradient(to bottom left, transparent 50.5%, var(--jse-collapsed-items-background-color, #f5f5f5) 50.5%), linear-gradient(to top right, transparent 50.5%, var(--jse-collapsed-items-background-color, #f5f5f5) 50.5%), linear-gradient(to top left, transparent 50.5%, var(--jse-collapsed-items-background-color, #f5f5f5) 50.5%);
  background-repeat: repeat, repeat-x, repeat-x, repeat-x, repeat-x;
  background-position: 0 0, 8px 0, 8px 0, 8px 100%, 8px 100%;
  background-size: auto auto, 16px 16px, 16px 16px, 16px 16px, 16px 16px;
  background-clip: padding-box, border-box, border-box, border-box, border-box;
  background-origin: padding-box, border-box, border-box, border-box, border-box;
  display: flex;
}
div.jse-collapsed-items.jse-selected.svelte-1v6dhm4 {
  background-color: var(--jse-selection-background-color, #d3d3d3);
  --jse-collapsed-items-background-color: var(--jse-collapsed-items-selected-background-color, #c2c2c2);
}
div.jse-collapsed-items.svelte-1v6dhm4 div.jse-text:where(.svelte-1v6dhm4),
div.jse-collapsed-items.svelte-1v6dhm4 button.jse-expand-items:where(.svelte-1v6dhm4) {
  margin: 0 calc(0.5 * var(--jse-padding, 10px));
}
div.jse-collapsed-items.svelte-1v6dhm4 div.jse-text:where(.svelte-1v6dhm4) {
  display: inline;
}
div.jse-collapsed-items.svelte-1v6dhm4 button.jse-expand-items:where(.svelte-1v6dhm4) {
  font-family: inherit;
  font-size: inherit;
  color: var(--jse-collapsed-items-link-color, rgba(0, 0, 0, 0.38));
  background: none;
  border: none;
  padding: 0;
  text-decoration: underline;
  cursor: pointer;
}
div.jse-collapsed-items.svelte-1v6dhm4 button.jse-expand-items:where(.svelte-1v6dhm4):hover, div.jse-collapsed-items.svelte-1v6dhm4 button.jse-expand-items:where(.svelte-1v6dhm4):focus {
  color: var(--jse-collapsed-items-link-color-highlight, #ee5341);
}`);var gC=te('<button type="button" class="jse-expand-items svelte-1v6dhm4"> </button>'),mC=te('<div role="none"><div><div class="jse-text svelte-1v6dhm4"> </div> <!></div></div>');function bC(e,t){lt(t,!1);var n=$(void 0,!0),o=$(void 0,!0),a=$(void 0,!0),i=$(void 0,!0),s=$(void 0,!0),l=g(t,"visibleSections",9),c=g(t,"sectionIndex",9),u=g(t,"total",9),d=g(t,"path",9),v=g(t,"selection",9),p=g(t,"onExpandSection",9),b=g(t,"context",9);Z(()=>(y(l()),y(c())),()=>{f(n,l()[c()])}),Z(()=>r(n),()=>{f(o,r(n).end)}),Z(()=>(y(l()),y(c()),y(u())),()=>{f(a,l()[c()+1]?l()[c()+1].start:u())}),Z(()=>(y(b()),y(v()),y(d()),r(o)),()=>{f(i,Yl(b().getJson(),v(),d().concat(String(r(o)))))}),Z(()=>(r(o),r(a)),()=>{f(s,function(O,w){var z={start:O,end:Math.min(mv(O),w)},R=Math.max(ju((O+w)/2),O),Y={start:R,end:Math.min(mv(R),w)},E=ju(w),K=E===w?E-Vl:E,J={start:Math.max(K,O),end:w},U=[z],ae=Y.start>=z.end&&Y.end<=J.start;return ae&&U.push(Y),J.start>=(ae?Y.end:z.end)&&U.push(J),U}(r(o),r(a)))}),jn(),At(!0);var m,h,j=mC(),x=N(j),C=N(x),A=N(C);fr(W(C,2),1,()=>r(s),Cr,(O,w)=>{var z=gC(),R=N(z);ze(()=>{var Y,E;return ut(R,"show ".concat((r(w),(Y=D(()=>r(w).start))!==null&&Y!==void 0?Y:""),"-").concat((r(w),(E=D(()=>r(w).end))!==null&&E!==void 0?E:"")))}),Ce("click",z,()=>p()(d(),r(w))),P(O,z)}),ze(()=>{var O,w;m=Mt(j,1,"jse-collapsed-items svelte-1v6dhm4",null,m,{"jse-selected":r(i)}),h=No(j,"",h,{"--level":(y(d()),D(()=>d().length+2))}),ut(A,"Items ".concat((O=r(o))!==null&&O!==void 0?O:"","-").concat((w=r(a))!==null&&w!==void 0?w:""))}),Ce("mousemove",j,function(O){O.stopPropagation()}),P(e,j),ct()}St(`/* over all fonts, sizes, and colors */
/* "consolas" for Windows, "menlo" for Mac with fallback to "monaco", 'Ubuntu Mono' for Ubuntu */
/* (at Mac this font looks too large at 14px, but 13px is too small for the font on Windows) */
/* main, menu, modal */
/* jsoneditor modal */
/* tooltip in text mode */
/* panels: navigation bar, gutter, search box */
/* navigation-bar */
/* context menu */
/* contents: json key and values */
/* contents: selected or hovered */
/* contents: section of collapsed items in an array */
/* contents: highlighting of search matches */
/* contents: inline tags inside the JSON document */
/* contents: table */
/* controls in modals: inputs, buttons, and \`a\` */
/* messages */
/* svelte-select */
/* color picker */
.jse-context-menu-pointer.svelte-10ijtzr {
  position: absolute;
  top: calc(-0.5 * var(--jse-context-menu-pointer-size, calc(1em + 4px)));
  right: calc(-0.5 * var(--jse-context-menu-pointer-size, calc(1em + 4px)));
  width: var(--jse-context-menu-pointer-size, calc(1em + 4px));
  height: var(--jse-context-menu-pointer-size, calc(1em + 4px));
  padding: 0;
  margin: 0;
  cursor: pointer;
  background: transparent;
  border-radius: 2px;
  background: var(--jse-context-menu-pointer-hover-background, #b2b2b2);
  color: var(--jse-context-menu-pointer-color, var(--jse-context-menu-color, var(--jse-text-color-inverse, #fff)));
  border: none;
  box-shadow: var(--jse-controls-box-shadow, 0 2px 6px 0 rgba(0, 0, 0, 0.24));
}
.jse-context-menu-pointer.jse-root.svelte-10ijtzr {
  top: 0;
  right: calc(-2px - var(--jse-context-menu-pointer-size, calc(1em + 4px)));
}
.jse-context-menu-pointer.jse-insert.svelte-10ijtzr {
  right: -1px;
}
.jse-context-menu-pointer.svelte-10ijtzr:hover {
  background: var(--jse-context-menu-pointer-background-highlight, var(--jse-context-menu-background-highlight, #7a7a7a));
}
.jse-context-menu-pointer.jse-selected.svelte-10ijtzr {
  background: var(--jse-context-menu-pointer-background, var(--jse-context-menu-background, #656565));
}
.jse-context-menu-pointer.jse-selected.svelte-10ijtzr:hover {
  background: var(--jse-context-menu-pointer-background-highlight, var(--jse-context-menu-background-highlight, #7a7a7a));
}`);var yC=te('<button type="button"><!></button>');function ni(e,t){lt(t,!1);var n=g(t,"root",9,!1),o=g(t,"insert",9,!1),a=g(t,"selected",9),i=g(t,"onContextMenu",9);At(!0);var s,l=yC();nn(N(l),{get data(){return Fa}}),ze(()=>{s=Mt(l,1,"jse-context-menu-pointer svelte-10ijtzr",null,s,{"jse-root":n(),"jse-insert":o(),"jse-selected":a()}),yn(l,"title",yf)}),Ce("click",l,function(c){for(var u=c.target;u&&u.nodeName!=="BUTTON";)u=u.parentNode;u&&i()({anchor:u,left:0,top:0,width:Na,height:Pa,offsetTop:2,offsetLeft:0,showTip:!0})}),P(e,l),ct()}St(`/* over all fonts, sizes, and colors */
/* "consolas" for Windows, "menlo" for Mac with fallback to "monaco", 'Ubuntu Mono' for Ubuntu */
/* (at Mac this font looks too large at 14px, but 13px is too small for the font on Windows) */
/* main, menu, modal */
/* jsoneditor modal */
/* tooltip in text mode */
/* panels: navigation bar, gutter, search box */
/* navigation-bar */
/* context menu */
/* contents: json key and values */
/* contents: selected or hovered */
/* contents: section of collapsed items in an array */
/* contents: highlighting of search matches */
/* contents: inline tags inside the JSON document */
/* contents: table */
/* controls in modals: inputs, buttons, and \`a\` */
/* messages */
/* svelte-select */
/* color picker */
.jse-key.svelte-1n4cez4 {
  display: inline-block;
  min-width: 2em;
  padding: 0 5px;
  box-sizing: border-box;
  outline: none;
  border-radius: 1px;
  vertical-align: top;
  color: var(--jse-key-color, #1a1a1a);
  word-break: normal;
  overflow-wrap: normal;
  white-space: pre-wrap;
}
.jse-key.jse-empty.svelte-1n4cez4 {
  min-width: 3em;
  outline: 1px dotted var(--jse-tag-background, rgba(0, 0, 0, 0.2));
  -moz-outline-radius: 2px;
}
.jse-key.jse-empty.svelte-1n4cez4::after {
  pointer-events: none;
  color: var(--jse-tag-background, rgba(0, 0, 0, 0.2));
  content: "key";
}`);var jC=te('<div role="none" data-type="selectable-key"><!></div>'),xC=te("<!> <!>",1),wC=te('<div role="button" tabindex="-1" class="jse-value" data-type="selectable-value"></div>');function F0(e,t){lt(t,!0);var n=vo(()=>cn(t.selection)&&Dr(t.selection)),o=vo(()=>t.context.onRenderValue({path:t.path,value:t.value,mode:t.context.mode,truncateTextSize:t.context.truncateTextSize,readOnly:t.context.readOnly,enforceString:t.enforceString,isEditing:r(n),parser:t.context.parser,normalization:t.context.normalization,selection:t.selection,searchResultItems:t.searchResultItems,onPatch:t.context.onPatch,onPasteJson:t.context.onPasteJson,onSelect:t.context.onSelect,onFind:t.context.onFind,findNextInside:t.context.findNextInside,focus:t.context.focus})),a=Ut();fr(Xe(a),17,()=>r(o),Cr,(i,s)=>{var l=Ut(),c=Xe(l),u=v=>{var p=vo(()=>r(s).action),b=wC();io(b,(m,h)=>{var j;return(j=r(p))===null||j===void 0?void 0:j(m,h)},()=>r(s).props),P(v,b)},d=v=>{var p=vo(()=>r(s).component),b=Ut();Vm(Xe(b),()=>r(p),(m,h)=>{h(m,bi(()=>r(s).props))}),P(v,b)};ie(c,v=>{Rw(r(s))?v(u):v(d,!1)}),P(i,l)}),P(e,a),ct()}var kC={selecting:!1,selectionAnchor:void 0,selectionAnchorType:void 0,selectionFocus:void 0,dragging:!1};function Bd(e){var{json:t,selection:n,deltaY:o,items:a}=e;if(!n)return{operations:void 0,updatedSelection:void 0,offset:0};var i=o<0?function(d){for(var{json:v,items:p,selection:b,deltaY:m}=d,h=$a(v,b),j=p.findIndex(z=>Lt(z.path,h)),x=()=>{var z;return(z=p[C-1])===null||z===void 0?void 0:z.height},C=j,A=0;x()!==void 0&&Math.abs(m)>A+x()/2;)A+=x(),C-=1;var O=p[C].path,w=C-j;return C!==j&&p[C]!==void 0?{beforePath:O,offset:w}:void 0}({json:t,selection:n,deltaY:o,items:a}):function(d){for(var v,{json:p,items:b,selection:m,deltaY:h}=d,j=ji(p,m),x=b.findIndex(K=>Lt(K.path,j)),C=0,A=x,O=()=>{var K;return(K=b[A+1])===null||K===void 0?void 0:K.height};O()!==void 0&&Math.abs(h)>C+O()/2;)C+=O(),A+=1;var w=tn(j),z=Ye(p,w),R=Array.isArray(z)?A:A+1,Y=(v=b[R])===null||v===void 0?void 0:v.path,E=A-x;return Y?{beforePath:Y,offset:E}:{append:!0,offset:E}}({json:t,selection:n,deltaY:o,items:a});if(!i||i.offset===0)return{operations:void 0,updatedSelection:void 0,offset:0};var s=function(d,v,p){if(!v)return[];var b="beforePath"in p?p.beforePath:void 0,m="append"in p?p.append:void 0,h=tn(rt(v)),j=Ye(d,h);if(!(m||b&&ha(b,h)&&b.length>h.length))return[];var x=$a(d,v),C=ji(d,v),A=Wt(x),O=Wt(C),w=b?b[h.length]:void 0;if(!yr(j)){if(vr(j)){var z=Yr(A),R=Yr(O),Y=w!==void 0?Yr(w):j.length;return Hy(R-z+1,Y<z?ae=>({op:"move",from:dt(h.concat(String(z+ae))),path:dt(h.concat(String(Y+ae)))}):()=>({op:"move",from:dt(h.concat(String(z))),path:dt(h.concat(String(Y)))}))}throw new Error("Cannot create move operations: parent must be an Object or Array")}var E=Object.keys(j),K=E.indexOf(A),J=E.indexOf(O),U=m?E.length:w!==void 0?E.indexOf(w):-1;return K!==-1&&J!==-1&&U!==-1?U>K?[...E.slice(K,J+1),...E.slice(U,E.length)].map(ae=>Oi(h,ae)):[...E.slice(U,K),...E.slice(J+1,E.length)].map(ae=>Oi(h,ae)):[]}(t,n,i),l=tn($a(t,n)),c=Ye(t,l);if(Array.isArray(c)){var u=function(d){var v,p,{items:b,json:m,selection:h,offset:j}=d,x=$a(m,h),C=ji(m,h),A=b.findIndex(R=>Lt(R.path,x)),O=b.findIndex(R=>Lt(R.path,C)),w=(v=b[A+j])===null||v===void 0?void 0:v.path,z=(p=b[O+j])===null||p===void 0?void 0:p.path;return oo(w,z)}({items:a,json:t,selection:n,offset:i.offset});return{operations:s,updatedSelection:u,offset:i.offset}}return{operations:s,updatedSelection:void 0,offset:i.offset}}St(`/* over all fonts, sizes, and colors */
/* "consolas" for Windows, "menlo" for Mac with fallback to "monaco", 'Ubuntu Mono' for Ubuntu */
/* (at Mac this font looks too large at 14px, but 13px is too small for the font on Windows) */
/* main, menu, modal */
/* jsoneditor modal */
/* tooltip in text mode */
/* panels: navigation bar, gutter, search box */
/* navigation-bar */
/* context menu */
/* contents: json key and values */
/* contents: selected or hovered */
/* contents: section of collapsed items in an array */
/* contents: highlighting of search matches */
/* contents: inline tags inside the JSON document */
/* contents: table */
/* controls in modals: inputs, buttons, and \`a\` */
/* messages */
/* svelte-select */
/* color picker */
button.jse-validation-error.svelte-q6a061 {
  border: none;
  background: transparent;
  color: inherit;
  cursor: pointer;
  font-family: var(--jse-font-family, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen-Sans, Ubuntu, Cantarell, "Helvetica Neue", sans-serif);
  font-size: var(--jse-font-size, 16px);
  padding: 5px;
  margin: 0;
  padding: 0;
  margin: 0;
  vertical-align: top;
  display: inline-flex;
  color: var(--jse-error-color, #ee5341);
}

button.jse-validation-info.svelte-q6a061 {
  border: none;
  background: transparent;
  color: inherit;
  cursor: pointer;
  font-family: var(--jse-font-family, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen-Sans, Ubuntu, Cantarell, "Helvetica Neue", sans-serif);
  font-size: var(--jse-font-size, 16px);
  padding: 5px;
  margin: 0;
  padding: 0;
  margin: 0;
  vertical-align: top;
  display: inline-flex;
  color: var(--jse-info-color, #4f91ff);
}

button.jse-validation-warning.svelte-q6a061 {
  border: none;
  background: transparent;
  color: inherit;
  cursor: pointer;
  font-family: var(--jse-font-family, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen-Sans, Ubuntu, Cantarell, "Helvetica Neue", sans-serif);
  font-size: var(--jse-font-size, 16px);
  padding: 5px;
  margin: 0;
  padding: 0;
  margin: 0;
  vertical-align: top;
  display: inline-flex;
  color: var(--jse-warning-color, #fdc539);
}`);var CC=te('<button type="button"><!></button>');function Ls(e,t){lt(t,!1);var n=$(),o=Ei("absolute-popup"),a=g(t,"validationError",8),i=g(t,"onExpand",8);Z(()=>y(a()),()=>{f(n,zw(a())&&a().isChildError?"Contains invalid data":a().message)}),jn(),At();var s=CC();nn(N(s),{get data(){return Yi}}),Kr(()=>Ce("click",s,function(){for(var l,c=arguments.length,u=new Array(c),d=0;d<c;d++)u[d]=arguments[d];(l=i())===null||l===void 0||l.apply(this,u)})),io(s,(l,c)=>Zs?.(l,c),()=>Ae({text:r(n)},o)),ze(()=>{var l;return Mt(s,1,"jse-validation-".concat((y(a()),(l=D(()=>a().severity))!==null&&l!==void 0?l:"")),"svelte-q6a061")}),P(e,s),ct()}St(`/* over all fonts, sizes, and colors */
/* "consolas" for Windows, "menlo" for Mac with fallback to "monaco", 'Ubuntu Mono' for Ubuntu */
/* (at Mac this font looks too large at 14px, but 13px is too small for the font on Windows) */
/* main, menu, modal */
/* jsoneditor modal */
/* tooltip in text mode */
/* panels: navigation bar, gutter, search box */
/* navigation-bar */
/* context menu */
/* contents: json key and values */
/* contents: selected or hovered */
/* contents: section of collapsed items in an array */
/* contents: highlighting of search matches */
/* contents: inline tags inside the JSON document */
/* contents: table */
/* controls in modals: inputs, buttons, and \`a\` */
/* messages */
/* svelte-select */
/* color picker */
.jse-expand.svelte-1qi6rc1 {
  width: var(--jse-indent-size, calc(1em + 4px));
  padding: 0;
  margin: 0;
  border: none;
  cursor: pointer;
  background: transparent;
  color: var(--jse-delimiter-color, rgba(0, 0, 0, 0.38));
  font-size: var(--jse-font-size-mono, 14px);
  height: var(--jse-line-height, calc(1em + 4px));
}
.jse-expand.svelte-1qi6rc1:hover {
  opacity: 0.8;
}

.jse-meta.svelte-1qi6rc1,
.jse-separator.svelte-1qi6rc1,
.jse-index.svelte-1qi6rc1,
.jse-bracket.svelte-1qi6rc1 {
  vertical-align: top;
  color: var(--jse-delimiter-color, rgba(0, 0, 0, 0.38));
}

.jse-index.svelte-1qi6rc1 {
  padding: 0 calc(0.5 * var(--jse-padding, 10px));
}

.jse-bracket.svelte-1qi6rc1 {
  padding: 0 2px;
}
.jse-bracket.jse-expanded.svelte-1qi6rc1 {
  padding-right: var(--jse-padding, 10px);
}

.jse-identifier.svelte-1qi6rc1 {
  vertical-align: top;
  position: relative;
}

.jse-json-node.svelte-1qi6rc1 {
  position: relative;
  color: var(--jse-text-color, #4d4d4d);
}
.jse-json-node.jse-root.svelte-1qi6rc1 {
  min-height: 100%;
  padding-bottom: 2px;
  box-sizing: border-box;
}
.jse-json-node.jse-root.svelte-1qi6rc1 > .jse-contents-outer:where(.svelte-1qi6rc1) > .jse-contents:where(.svelte-1qi6rc1) {
  padding-left: 0;
}
.jse-json-node.svelte-1qi6rc1 .jse-props:where(.svelte-1qi6rc1),
.jse-json-node.svelte-1qi6rc1 .jse-items:where(.svelte-1qi6rc1) {
  position: relative;
}
.jse-json-node.svelte-1qi6rc1 .jse-header-outer:where(.svelte-1qi6rc1),
.jse-json-node.svelte-1qi6rc1 .jse-footer-outer:where(.svelte-1qi6rc1) {
  display: flex;
  margin-left: calc(var(--level) * var(--jse-indent-size, calc(1em + 4px)));
}
.jse-json-node.svelte-1qi6rc1 .jse-header:where(.svelte-1qi6rc1) {
  position: relative;
}
.jse-json-node.svelte-1qi6rc1 .jse-header:where(.svelte-1qi6rc1) .jse-meta:where(.svelte-1qi6rc1) > .jse-meta-inner:where(.svelte-1qi6rc1) {
  display: flex;
  justify-content: center;
}
.jse-json-node.svelte-1qi6rc1 .jse-contents-outer:where(.svelte-1qi6rc1) {
  display: flex;
  margin-left: calc(var(--level) * var(--jse-indent-size, calc(1em + 4px)));
}
.jse-json-node.svelte-1qi6rc1 .jse-header:where(.svelte-1qi6rc1),
.jse-json-node.svelte-1qi6rc1 .jse-contents:where(.svelte-1qi6rc1) {
  display: flex;
  flex-direction: row;
  align-items: flex-start;
}
.jse-json-node.svelte-1qi6rc1 .jse-contents:where(.svelte-1qi6rc1) {
  padding-left: var(--jse-indent-size, calc(1em + 4px));
  cursor: var(--jse-contents-cursor, pointer);
}
.jse-json-node.svelte-1qi6rc1 .jse-contents:where(.svelte-1qi6rc1) .jse-value-outer:where(.svelte-1qi6rc1) {
  display: inline-flex;
}
.jse-json-node.svelte-1qi6rc1 .jse-footer:where(.svelte-1qi6rc1) {
  display: inline-flex;
  padding-left: calc(var(--jse-indent-size, calc(1em + 4px)) + 5px);
}
.jse-json-node.svelte-1qi6rc1 .jse-header:where(.svelte-1qi6rc1),
.jse-json-node.svelte-1qi6rc1 .jse-contents:where(.svelte-1qi6rc1),
.jse-json-node.svelte-1qi6rc1 .jse-footer:where(.svelte-1qi6rc1) {
  background: var(--jse-contents-background-color, transparent);
}
.jse-json-node.svelte-1qi6rc1 .jse-insert-selection-area:where(.svelte-1qi6rc1) {
  padding: 0 calc(0.5 * var(--jse-padding, 10px));
  flex: 1;
}
.jse-json-node.svelte-1qi6rc1 .jse-insert-selection-area.jse-inside:where(.svelte-1qi6rc1) {
  display: inline-flex;
  align-items: center;
}
.jse-json-node.svelte-1qi6rc1 .jse-insert-selection-area.jse-after:where(.svelte-1qi6rc1) {
  display: flex;
  align-items: flex-end;
}
.jse-json-node.svelte-1qi6rc1 .jse-context-menu-pointer-anchor:where(.svelte-1qi6rc1) {
  position: relative;
}
.jse-json-node.svelte-1qi6rc1 .jse-insert-area:where(.svelte-1qi6rc1) {
  display: flex;
  position: relative;
  z-index: 1;
  margin-left: calc(var(--level) * var(--jse-indent-size, calc(1em + 4px)));
  max-width: 250px;
  min-width: 100px;
  height: 0;
  margin-right: calc(0.5 * var(--jse-padding, 10px));
  outline: 1px solid;
}
.jse-json-node.svelte-1qi6rc1 .jse-insert-area.jse-hovered:where(.svelte-1qi6rc1) {
  outline-color: var(--jse-context-menu-pointer-hover-background, #b2b2b2);
}
.jse-json-node.svelte-1qi6rc1 .jse-key-outer:where(.svelte-1qi6rc1) {
  position: relative;
}
.jse-json-node.svelte-1qi6rc1 .jse-key-outer:where(.svelte-1qi6rc1):hover,
.jse-json-node.svelte-1qi6rc1 .jse-value-outer:where(.svelte-1qi6rc1):hover,
.jse-json-node.svelte-1qi6rc1 .jse-meta:where(.svelte-1qi6rc1):hover,
.jse-json-node.svelte-1qi6rc1 .jse-footer:where(.svelte-1qi6rc1):hover {
  background: var(--jse-hover-background-color, rgba(0, 0, 0, 0.06));
  cursor: var(--jse-contents-cursor, pointer);
}
.jse-json-node.jse-hovered.svelte-1qi6rc1:not(.jse-selected):not(.jse-selected-value) .jse-value-outer,
.jse-json-node.jse-hovered.svelte-1qi6rc1:not(.jse-selected):not(.jse-selected-value) .jse-meta,
.jse-json-node.jse-hovered.svelte-1qi6rc1:not(.jse-selected):not(.jse-selected-value) .jse-items .jse-header,
.jse-json-node.jse-hovered.svelte-1qi6rc1:not(.jse-selected):not(.jse-selected-value) .jse-items .jse-contents,
.jse-json-node.jse-hovered.svelte-1qi6rc1:not(.jse-selected):not(.jse-selected-value) .jse-props .jse-header,
.jse-json-node.jse-hovered.svelte-1qi6rc1:not(.jse-selected):not(.jse-selected-value) .jse-props .jse-contents,
.jse-json-node.jse-hovered.svelte-1qi6rc1:not(.jse-selected):not(.jse-selected-value) .jse-footer {
  background: var(--jse-hover-background-color, rgba(0, 0, 0, 0.06));
  cursor: var(--jse-contents-cursor, pointer);
}
.jse-json-node.jse-hovered.svelte-1qi6rc1:not(.jse-selected):not(.jse-selected-value) .jse-value-outer .jse-value-outer,
.jse-json-node.jse-hovered.svelte-1qi6rc1:not(.jse-selected):not(.jse-selected-value) .jse-value-outer .jse-meta,
.jse-json-node.jse-hovered.svelte-1qi6rc1:not(.jse-selected):not(.jse-selected-value) .jse-meta .jse-value-outer,
.jse-json-node.jse-hovered.svelte-1qi6rc1:not(.jse-selected):not(.jse-selected-value) .jse-meta .jse-meta,
.jse-json-node.jse-hovered.svelte-1qi6rc1:not(.jse-selected):not(.jse-selected-value) .jse-items .jse-header .jse-value-outer,
.jse-json-node.jse-hovered.svelte-1qi6rc1:not(.jse-selected):not(.jse-selected-value) .jse-items .jse-header .jse-meta,
.jse-json-node.jse-hovered.svelte-1qi6rc1:not(.jse-selected):not(.jse-selected-value) .jse-items .jse-contents .jse-value-outer,
.jse-json-node.jse-hovered.svelte-1qi6rc1:not(.jse-selected):not(.jse-selected-value) .jse-items .jse-contents .jse-meta,
.jse-json-node.jse-hovered.svelte-1qi6rc1:not(.jse-selected):not(.jse-selected-value) .jse-props .jse-header .jse-value-outer,
.jse-json-node.jse-hovered.svelte-1qi6rc1:not(.jse-selected):not(.jse-selected-value) .jse-props .jse-header .jse-meta,
.jse-json-node.jse-hovered.svelte-1qi6rc1:not(.jse-selected):not(.jse-selected-value) .jse-props .jse-contents .jse-value-outer,
.jse-json-node.jse-hovered.svelte-1qi6rc1:not(.jse-selected):not(.jse-selected-value) .jse-props .jse-contents .jse-meta,
.jse-json-node.jse-hovered.svelte-1qi6rc1:not(.jse-selected):not(.jse-selected-value) .jse-footer .jse-value-outer,
.jse-json-node.jse-hovered.svelte-1qi6rc1:not(.jse-selected):not(.jse-selected-value) .jse-footer .jse-meta {
  background: none;
}
.jse-json-node.jse-selected.svelte-1qi6rc1 .jse-header:where(.svelte-1qi6rc1),
.jse-json-node.jse-selected.svelte-1qi6rc1 .jse-contents:where(.svelte-1qi6rc1),
.jse-json-node.jse-selected.svelte-1qi6rc1 .jse-footer:where(.svelte-1qi6rc1) {
  background: var(--jse-selection-background-color, #d3d3d3);
  cursor: var(--jse-contents-selected-cursor, grab);
}
.jse-json-node.jse-selected.svelte-1qi6rc1 .jse-key-outer:where(.svelte-1qi6rc1):hover,
.jse-json-node.jse-selected.svelte-1qi6rc1 .jse-value-outer:where(.svelte-1qi6rc1):hover,
.jse-json-node.jse-selected.svelte-1qi6rc1 .jse-meta:where(.svelte-1qi6rc1):hover,
.jse-json-node.jse-selected.svelte-1qi6rc1 .jse-footer:where(.svelte-1qi6rc1):hover {
  background: inherit;
  cursor: inherit;
}
.jse-json-node.svelte-1qi6rc1 .jse-key-outer.jse-selected-key:where(.svelte-1qi6rc1) {
  background: var(--jse-selection-background-color, #d3d3d3);
  cursor: var(--jse-contents-selected-cursor, grab);
}
.jse-json-node.jse-selected-value.svelte-1qi6rc1 .jse-value-outer,
.jse-json-node.jse-selected-value.svelte-1qi6rc1 .jse-meta,
.jse-json-node.jse-selected-value.svelte-1qi6rc1 .jse-items .jse-header,
.jse-json-node.jse-selected-value.svelte-1qi6rc1 .jse-items .jse-contents,
.jse-json-node.jse-selected-value.svelte-1qi6rc1 .jse-props .jse-header,
.jse-json-node.jse-selected-value.svelte-1qi6rc1 .jse-props .jse-contents,
.jse-json-node.jse-selected-value.svelte-1qi6rc1 .jse-footer {
  background: var(--jse-selection-background-color, #d3d3d3);
  cursor: var(--jse-contents-selected-cursor, grab);
}
.jse-json-node.jse-selected-value.svelte-1qi6rc1 .jse-value-outer .jse-key-outer:hover,
.jse-json-node.jse-selected-value.svelte-1qi6rc1 .jse-meta .jse-key-outer:hover,
.jse-json-node.jse-selected-value.svelte-1qi6rc1 .jse-items .jse-header .jse-key-outer:hover,
.jse-json-node.jse-selected-value.svelte-1qi6rc1 .jse-items .jse-contents .jse-key-outer:hover,
.jse-json-node.jse-selected-value.svelte-1qi6rc1 .jse-props .jse-header .jse-key-outer:hover,
.jse-json-node.jse-selected-value.svelte-1qi6rc1 .jse-props .jse-contents .jse-key-outer:hover,
.jse-json-node.jse-selected-value.svelte-1qi6rc1 .jse-footer .jse-key-outer:hover {
  background: inherit;
  cursor: inherit;
}
.jse-json-node.jse-readonly.svelte-1qi6rc1 {
  --jse-contents-selected-cursor: pointer;
}
.jse-json-node.svelte-1qi6rc1 .jse-insert-area.jse-selected:where(.svelte-1qi6rc1) {
  outline-color: var(--jse-context-menu-pointer-background, var(--jse-context-menu-background, #656565));
}`);var Kn=Qu(()=>kC),SC=te('<div class="jse-separator svelte-1qi6rc1">:</div>'),OC=te('<div class="jse-bracket svelte-1qi6rc1">[</div> <!> &nbsp;',1),EC=te('<div class="jse-bracket svelte-1qi6rc1">[</div> <!> <div class="jse-bracket svelte-1qi6rc1">]</div>',1),_C=te('<div class="jse-context-menu-pointer-anchor svelte-1qi6rc1"><!></div>'),MC=te('<div role="none" class="jse-insert-selection-area jse-inside svelte-1qi6rc1" data-type="insert-selection-area-inside"></div>'),AC=te('<div role="none" class="jse-insert-selection-area jse-after svelte-1qi6rc1" data-type="insert-selection-area-after"></div>'),TC=te('<div data-type="insert-selection-area-inside"><!></div>'),zC=te('<div slot="identifier" class="jse-identifier svelte-1qi6rc1"><div class="jse-index svelte-1qi6rc1"> </div></div>'),RC=te("<!> <!>",1),PC=te('<div role="none" class="jse-insert-selection-area jse-after svelte-1qi6rc1" data-type="insert-selection-area-after"></div>'),NC=te('<div class="jse-items svelte-1qi6rc1"><!> <!></div> <div class="jse-footer-outer svelte-1qi6rc1"><div data-type="selectable-value" class="jse-footer svelte-1qi6rc1"><span class="jse-bracket svelte-1qi6rc1">]</span></div> <!></div>',1),$C=te('<div class="jse-header-outer svelte-1qi6rc1"><div class="jse-header svelte-1qi6rc1"><button type="button" class="jse-expand svelte-1qi6rc1" title="Expand or collapse this array (Ctrl+Click to expand/collapse recursively)"><!></button> <!> <!> <div class="jse-meta svelte-1qi6rc1"><div class="jse-meta-inner svelte-1qi6rc1" data-type="selectable-value"><!></div></div> <!></div> <!> <!></div> <!>',1),IC=te('<div class="jse-separator svelte-1qi6rc1">:</div>'),qC=te('<div class="jse-bracket jse-expanded svelte-1qi6rc1">&lbrace;</div>'),DC=te('<div class="jse-bracket svelte-1qi6rc1">&lbrace;</div> <!> <div class="jse-bracket svelte-1qi6rc1">&rbrace;</div>',1),UC=te('<div class="jse-context-menu-pointer-anchor svelte-1qi6rc1"><!></div>'),LC=te('<div role="none" class="jse-insert-selection-area jse-inside svelte-1qi6rc1" data-type="insert-selection-area-inside"></div>'),BC=te('<div role="none" class="jse-insert-selection-area jse-after svelte-1qi6rc1" data-type="insert-selection-area-after"></div>'),FC=te('<div data-type="insert-selection-area-inside"><!></div>'),WC=te('<div slot="identifier"><!></div>'),VC=te('<div role="none" class="jse-insert-selection-area jse-after svelte-1qi6rc1" data-type="insert-selection-area-after"></div>'),HC=te('<div class="jse-props svelte-1qi6rc1"><!> <!></div> <div class="jse-footer-outer svelte-1qi6rc1"><div data-type="selectable-value" class="jse-footer svelte-1qi6rc1"><div class="jse-bracket svelte-1qi6rc1">&rbrace;</div></div> <!></div>',1),JC=te('<div class="jse-header-outer svelte-1qi6rc1"><div class="jse-header svelte-1qi6rc1"><button type="button" class="jse-expand svelte-1qi6rc1" title="Expand or collapse this object (Ctrl+Click to expand/collapse recursively)"><!></button> <!> <!> <div class="jse-meta svelte-1qi6rc1" data-type="selectable-value"><div class="jse-meta-inner svelte-1qi6rc1"><!></div></div> <!></div> <!> <!></div> <!>',1),KC=te('<div class="jse-separator svelte-1qi6rc1">:</div>'),YC=te('<div class="jse-context-menu-pointer-anchor svelte-1qi6rc1"><!></div>'),QC=te('<div role="none" class="jse-insert-selection-area jse-after svelte-1qi6rc1" data-type="insert-selection-area-after"></div>'),GC=te('<div class="jse-contents-outer svelte-1qi6rc1"><div class="jse-contents svelte-1qi6rc1"><!> <!> <div class="jse-value-outer svelte-1qi6rc1"><!></div> <!></div> <!> <!></div>'),XC=te('<div data-type="insert-selection-area-after"><!></div>'),ZC=te('<div role="treeitem" tabindex="-1"><!> <!></div>');function Mv(e,t){lt(t,!1);var n=$(void 0,!0),o=$(void 0,!0),a=g(t,"pointer",9),i=g(t,"value",9),s=g(t,"state",9),l=g(t,"validationErrors",9),c=g(t,"searchResults",9),u=g(t,"selection",9),d=g(t,"context",9),v=g(t,"onDragSelectionStart",9),p=Lr("jsoneditor:JSONNode"),b=$(void 0,!0),m=void 0,h=$(void 0,!0),j=$(void 0,!0),x=$(void 0,!0),C=$(void 0,!0),A=$(void 0,!0),O=$(void 0,!0),w=$(void 0,!0);function z(pe){pe.stopPropagation();var V=bf(pe);d().onExpand(r(j),!r(x),V)}function R(){d().onExpand(r(j),!0)}function Y(pe,V){var he=gc(r(j),Object.keys(i()),pe,V);return d().onPatch(he),Wt(fo(he[0].path))}function E(pe){d().onDrag(pe)}function K(pe){Kn().selecting&&(Kn(Kn().selecting=!1),pe.stopPropagation()),d().onDragEnd(),document.removeEventListener("mousemove",E,!0),document.removeEventListener("mouseup",K)}function J(){var pe;return((pe=d().findElement([]))===null||pe===void 0||(pe=pe.getBoundingClientRect())===null||pe===void 0?void 0:pe.top)||0}function U(pe,V){var he=J()-pe.initialContentTop;return V.clientY-pe.initialClientY-he}function ae(pe){if(!d().readOnly&&u()){var V=tn(rt(u()));if(Lt(r(j),V)){var he=function(ne,B){var bt=[];function st(S){var T=r(j).concat(S),I=d().findElement(T);I!==void 0&&bt.push({path:T,height:I.clientHeight})}if(Array.isArray(i())){var Se=d().getJson();if(Se===void 0)return;var xt=$a(Se,ne),Fe=ji(Se,ne),He=parseInt(Wt(xt),10),pt=parseInt(Wt(Fe),10),Ue=B.find(S=>He>=S.start&&pt<=S.end);if(!Ue)return;var{start:Rt,end:k}=Ue;Gm(Rt,Math.min(i().length,k),S=>st(String(S)))}else Object.keys(i()).forEach(st);return bt}(u(),r(A)||qs);if(p("dragSelectionStart",{selection:u(),items:he}),he){var L=d().getJson();if(L!==void 0){var de=$a(L,u()),Q=he.findIndex(ne=>Lt(ne.path,de)),{offset:Ne}=Bd({json:L,selection:d().getSelection(),deltaY:0,items:he});f(h,{initialTarget:pe.target,initialClientY:pe.clientY,initialContentTop:J(),selectionStartIndex:Q,selectionItemsCount:Si(L,u()).length,items:he,offset:Ne,didMoveItems:!1}),Kn(Kn().dragging=!0),document.addEventListener("mousemove",ge,!0),document.addEventListener("mouseup",se)}}else p("Cannot drag the current selection (probably spread over multiple sections)")}else v()(pe)}}function ge(pe){if(r(h)){var V=d().getJson();if(V===void 0)return;var he=U(r(h),pe),{offset:L}=Bd({json:V,selection:d().getSelection(),deltaY:he,items:r(h).items});L!==r(h).offset&&(p("drag selection",L,he),f(h,Ae(Ae({},r(h)),{},{offset:L,didMoveItems:!0})))}}function se(pe){if(r(h)){var V=d().getJson();if(V===void 0)return;var he=U(r(h),pe),{operations:L,updatedSelection:de}=Bd({json:V,selection:d().getSelection(),deltaY:he,items:r(h).items});if(L)d().onPatch(L,(ne,B)=>({state:B,selection:de??u()}));else if(pe.target===r(h).initialTarget&&!r(h).didMoveItems){var Q=Md(pe.target),Ne=c0(pe.target);Ne&&d().onSelect(ih(Q,Ne))}f(h,void 0),Kn(Kn().dragging=!1),document.removeEventListener("mousemove",ge,!0),document.removeEventListener("mouseup",se)}}function Te(pe){pe.shiftKey||(pe.stopPropagation(),pe.preventDefault(),d().onSelect(Ka(r(j))))}function De(pe){pe.shiftKey||(pe.stopPropagation(),pe.preventDefault(),d().onSelect(La(r(j))))}function Le(pe){d().onSelect(Ka(r(j))),Vn(),d().onContextMenu(pe)}function je(pe){d().onSelect(La(r(j))),Vn(),d().onContextMenu(pe)}Z(()=>y(a()),()=>{f(j,fo(a()))}),Z(()=>y(a()),()=>{f(n,encodeURIComponent(a()))}),Z(()=>y(s()),()=>{f(x,!!ts(s())&&s().expanded)}),Z(()=>(y(i()),y(s())),()=>{f(C,da(i(),s(),[]))}),Z(()=>y(s()),()=>{f(A,Ur(s())?s().visibleSections:void 0)}),Z(()=>y(l()),()=>{var pe;f(O,(pe=l())===null||pe===void 0?void 0:pe.validationError)}),Z(()=>(y(d()),y(u()),r(j)),()=>{f(w,Yl(d().getJson(),u(),r(j)))}),Z(()=>r(j),()=>{f(o,r(j).length===0)}),jn(),At(!0);var Oe,Pe,ot=ZC(),xe=N(ot),ue=pe=>{var V=$C(),he=Xe(V),L=N(he),de=N(L),Q=N(de),Ne=ee=>{nn(ee,{get data(){return Fa}})},ne=ee=>{nn(ee,{get data(){return Il}})};ie(Q,ee=>{r(x)?ee(Ne):ee(ne,!1)});var B=W(de,2);dr(B,t,"identifier",{},null);var bt=W(B,2),st=ee=>{P(ee,SC())};ie(bt,ee=>{r(o)||ee(st)});var Se=W(bt,2),xt=N(Se),Fe=N(xt),He=ee=>{var oe=OC();nu(W(Xe(oe),2),{children:(it,et)=>{var We=Wr();ze(()=>{var Je,Nt;return ut(We,"".concat((y(i()),(Je=D(()=>i().length))!==null&&Je!==void 0?Je:""),`
                `).concat((y(i()),(Nt=D(()=>i().length===1?"item":"items"))!==null&&Nt!==void 0?Nt:"")))}),P(it,We)},$$slots:{default:!0}}),P(ee,oe)},pt=ee=>{var oe=EC();nu(W(Xe(oe),2),{onclick:R,children:(it,et)=>{var We=Wr();ze(()=>{var Je,Nt;return ut(We,"".concat((y(i()),(Je=D(()=>i().length))!==null&&Je!==void 0?Je:""),`
                `).concat((y(i()),(Nt=D(()=>i().length===1?"item":"items"))!==null&&Nt!==void 0?Nt:"")))}),P(it,We)},$$slots:{default:!0}}),P(ee,oe)};ie(Fe,ee=>{r(x)?ee(He):ee(pt,!1)});var Ue=W(Se,2),Rt=ee=>{var oe=_C();ni(N(oe),{get root(){return r(o)},selected:!0,get onContextMenu(){return y(d()),D(()=>d().onContextMenu)}}),P(ee,oe)};ie(Ue,ee=>{y(d()),r(w),y(u()),y(cn),y(Rn),y(Dr),y(Lt),y(rt),r(j),D(()=>!d().readOnly&&r(w)&&u()&&(cn(u())||Rn(u()))&&!Dr(u())&&Lt(rt(u()),r(j)))&&ee(Rt)});var k=W(L,2),S=ee=>{Ls(ee,{get validationError(){return r(O)},onExpand:R})};ie(k,ee=>{r(O),r(x),D(()=>r(O)&&(!r(x)||!r(O).isChildError))&&ee(S)});var T=W(k,2),I=ee=>{var oe=MC();Ce("click",oe,Te),P(ee,oe)},re=ee=>{var oe=AC();Ce("click",oe,De),P(ee,oe)};ie(T,ee=>{r(x)?ee(I):ee(re,!1)});var ke=W(he,2),_e=ee=>{var oe=NC(),it=Xe(oe),et=N(it),We=Sn=>{var $t,dn,Bt=TC(),Kt=N(Bt),ln=Ze(()=>(r(w),y(zr),y(u()),D(()=>r(w)&&zr(u()))));ni(Kt,{insert:!0,get selected(){return r(ln)},onContextMenu:Le}),ze(vt=>{$t=Mt(Bt,1,"jse-insert-area jse-inside svelte-1qi6rc1",null,$t,vt),yn(Bt,"title",zd),dn=No(Bt,"",dn,{"--level":(r(j),D(()=>r(j).length+1))})},[()=>({"jse-hovered":r(b)===Ni,"jse-selected":r(w)&&zr(u())})]),P(Sn,Bt)};ie(et,Sn=>{y(d()),r(b),y(Ni),r(w),y(zr),y(u()),D(()=>!d().readOnly&&(r(b)===Ni||r(w)&&zr(u())))&&Sn(We)}),fr(W(et,2),1,()=>r(A)||qs,Cr,(Sn,$t,dn)=>{var Bt=RC(),Kt=Xe(Bt);fr(Kt,1,()=>(y(i()),r($t),r(h),D(()=>function(vn,Ot,Ge){var Yt=Ot.start,It=Math.min(Ot.end,vn.length),Nn=kg(Yt,It);return Ge&&Ge.offset!==0?Up(Nn,Ge.selectionStartIndex,Ge.selectionItemsCount,Ge.offset).map((Fn,Un)=>({index:Fn,gutterIndex:Un})):Nn.map(Fn=>({index:Fn,gutterIndex:Fn}))}(i(),r($t),r(h)))),vn=>vn.index,(vn,Ot)=>{var Ge=Ze(()=>(y(Ur),y(l()),r(Ot),D(()=>Ur(l())?l().items[r(Ot).index]:void 0))),Yt=Ze(()=>(y(qc),y(d()),y(u()),r(j),r(Ot),D(()=>qc(d().getJson(),u(),r(j).concat(String(r(Ot).index)))))),It=Ut(),Nn=Xe(It),Fn=Ze(()=>(y(kc),y(a()),r(Ot),D(()=>kc(a(),r(Ot).index)))),Un=Ze(()=>(y(Ur),y(s()),r(Ot),D(()=>Ur(s())?s().items[r(Ot).index]:void 0))),sr=Ze(()=>(y(Ur),y(c()),r(Ot),D(()=>Ur(c())?c().items[r(Ot).index]:void 0)));Mv(Nn,{get value(){return y(i()),r(Ot),D(()=>i()[r(Ot).index])},get pointer(){return r(Fn)},get state(){return r(Un)},get validationErrors(){return r(Ge)},get searchResults(){return r(sr)},get selection(){return r(Yt)},get context(){return d()},onDragSelectionStart:ae,$$slots:{identifier:(Hn,er)=>{var pr=zC(),Gn=N(pr),Sr=N(Gn);ze(()=>ut(Sr,(r(Ot),D(()=>r(Ot).gutterIndex)))),P(Hn,pr)}}}),P(vn,It)});var ln=W(Kt,2),vt=vn=>{var Ot=Ze(()=>r(A)||qs);bC(vn,{get visibleSections(){return r(Ot)},sectionIndex:dn,get total(){return y(i()),D(()=>i().length)},get path(){return r(j)},get onExpandSection(){return y(d()),D(()=>d().onExpandSection)},get selection(){return u()},get context(){return d()}})};ie(ln,vn=>{r($t),y(i()),D(()=>r($t).end<i().length)&&vn(vt)}),P(Sn,Bt)});var Je=W(it,2),Nt=W(N(Je),2),xn=Sn=>{var $t=PC();Ce("click",$t,De),P(Sn,$t)};ie(Nt,Sn=>{r(o)||Sn(xn)}),P(ee,oe)};ie(ke,ee=>{r(x)&&ee(_e)}),Ce("click",de,z),P(pe,V)},we=pe=>{var V=Ut(),he=Xe(V),L=Q=>{var Ne=JC(),ne=Xe(Ne),B=N(ne),bt=N(B),st=N(bt),Se=Je=>{nn(Je,{get data(){return Fa}})},xt=Je=>{nn(Je,{get data(){return Il}})};ie(st,Je=>{r(x)?Je(Se):Je(xt,!1)});var Fe=W(bt,2);dr(Fe,t,"identifier",{},null);var He=W(Fe,2),pt=Je=>{P(Je,IC())};ie(He,Je=>{r(o)||Je(pt)});var Ue=W(He,2),Rt=N(Ue),k=N(Rt),S=Je=>{P(Je,qC())},T=Je=>{var Nt=DC();nu(W(Xe(Nt),2),{onclick:R,children:(xn,Sn)=>{var $t=Wr();ze((dn,Bt)=>ut($t,"".concat(dn??"",`
                `).concat(Bt??"")),[()=>(y(i()),D(()=>Object.keys(i()).length)),()=>(y(i()),D(()=>Object.keys(i()).length===1?"prop":"props"))]),P(xn,$t)},$$slots:{default:!0}}),P(Je,Nt)};ie(k,Je=>{r(x)?Je(S):Je(T,!1)});var I=W(Ue,2),re=Je=>{var Nt=UC();ni(N(Nt),{get root(){return r(o)},selected:!0,get onContextMenu(){return y(d()),D(()=>d().onContextMenu)}}),P(Je,Nt)};ie(I,Je=>{y(d()),r(w),y(u()),y(cn),y(Rn),y(Dr),y(Lt),y(rt),r(j),D(()=>!d().readOnly&&r(w)&&u()&&(cn(u())||Rn(u()))&&!Dr(u())&&Lt(rt(u()),r(j)))&&Je(re)});var ke=W(B,2),_e=Je=>{Ls(Je,{get validationError(){return r(O)},onExpand:R})};ie(ke,Je=>{r(O),r(x),D(()=>r(O)&&(!r(x)||!r(O).isChildError))&&Je(_e)});var ee=W(ke,2),oe=Je=>{var Nt=LC();Ce("click",Nt,Te),P(Je,Nt)},it=Je=>{var Nt=Ut(),xn=Xe(Nt),Sn=$t=>{var dn=BC();Ce("click",dn,De),P($t,dn)};ie(xn,$t=>{r(o)||$t(Sn)},!0),P(Je,Nt)};ie(ee,Je=>{r(x)?Je(oe):Je(it,!1)});var et=W(ne,2),We=Je=>{var Nt=HC(),xn=Xe(Nt),Sn=N(xn),$t=ln=>{var vt,vn,Ot=FC(),Ge=N(Ot),Yt=Ze(()=>(r(w),y(zr),y(u()),D(()=>r(w)&&zr(u()))));ni(Ge,{insert:!0,get selected(){return r(Yt)},onContextMenu:Le}),ze(It=>{vt=Mt(Ot,1,"jse-insert-area jse-inside svelte-1qi6rc1",null,vt,It),yn(Ot,"title",zd),vn=No(Ot,"",vn,{"--level":(r(j),D(()=>r(j).length+1))})},[()=>({"jse-hovered":r(b)===Ni,"jse-selected":r(w)&&zr(u())})]),P(ln,Ot)};ie(Sn,ln=>{y(d()),r(b),y(Ni),r(w),y(zr),y(u()),D(()=>!d().readOnly&&(r(b)===Ni||r(w)&&zr(u())))&&ln($t)}),fr(W(Sn,2),1,()=>(y(i()),r(h),D(()=>function(ln,vt){var vn=Object.keys(ln);return vt&&vt.offset!==0?Up(vn,vt.selectionStartIndex,vt.selectionItemsCount,vt.offset):vn}(i(),r(h)))),Cr,(ln,vt)=>{var vn=Ze(()=>(y(kc),y(a()),r(vt),D(()=>kc(a(),r(vt))))),Ot=Ze(()=>(y(uo),y(c()),r(vt),D(()=>uo(c())?c().properties[r(vt)]:void 0))),Ge=Ze(()=>(y(uo),y(l()),r(vt),D(()=>uo(l())?l().properties[r(vt)]:void 0))),Yt=Ze(()=>(r(j),r(vt),D(()=>r(j).concat(r(vt))))),It=Ze(()=>(y(qc),y(d()),y(u()),y(r(Yt)),D(()=>qc(d().getJson(),u(),r(Yt))))),Nn=Ut(),Fn=Xe(Nn),Un=Ze(()=>(y(uo),y(s()),r(vt),D(()=>uo(s())?s().properties[r(vt)]:void 0)));Mv(Fn,{get value(){return y(i()),r(vt),D(()=>i()[r(vt)])},get pointer(){return r(vn)},get state(){return r(Un)},get validationErrors(){return r(Ge)},get searchResults(){return r(Ot)},get selection(){return r(It)},get context(){return d()},onDragSelectionStart:ae,$$slots:{identifier:(sr,Hn)=>{var er,pr=WC(),Gn=N(pr),Sr=Ze(()=>(y(fh),y(r(Ot)),D(()=>fh(r(Ot)))));(function(hr,jr){lt(jr,!1);var Xn=$(void 0,!0),be=$(void 0,!0),qt=g(jr,"pointer",9),bn=g(jr,"key",9),$n=g(jr,"selection",9),lr=g(jr,"searchResultItems",9),Rr=g(jr,"onUpdateKey",9),Vt=g(jr,"context",9),xr=$(void 0,!0);function Vr(H){r(be)||Vt().readOnly||(H.preventDefault(),Vt().onSelect(_f(r(xr))))}function Zn(H,ce){var Me=Rr()(bn(),Vt().normalization.unescapeValue(H)),q=tn(r(xr)).concat(Me);Vt().onSelect(ce===yi.nextInside?Ht(q):Ja(q)),ce!==yi.self&&Vt().focus()}function Br(){Vt().onSelect(Ja(r(xr))),Vt().focus()}Z(()=>y(qt()),()=>{f(xr,fo(qt()))}),Z(()=>(y($n()),r(xr)),()=>{f(Xn,qr($n())&&Lt($n().path,r(xr)))}),Z(()=>(r(Xn),y($n())),()=>{f(be,r(Xn)&&Dr($n()))}),jn(),At(!0);var In=xC(),Qt=Xe(In),Tt=H=>{var ce=Ze(()=>(y(Vt()),y(bn()),D(()=>Vt().normalization.escapeValue(bn())))),Me=Ze(()=>(y(Dr),y($n()),D(()=>Dr($n())?$n().initialValue:void 0)));j0(H,{get value(){return r(ce)},get initialValue(){return r(Me)},label:"Edit key",shortText:!0,onChange:Zn,onCancel:Br,get onFind(){return y(Vt()),D(()=>Vt().onFind)}})},An=H=>{var ce,Me=jC(),q=N(Me),X=qe=>{var tt=Ze(()=>(y(Vt()),y(bn()),D(()=>Vt().normalization.escapeValue(bn()))));E0(qe,{get text(){return r(tt)},get searchResultItems(){return lr()}})},me=qe=>{var tt=Wr();ze(nt=>ut(tt,nt),[()=>(y(Qs),y(Vt()),y(bn()),D(()=>Qs(Vt().normalization.escapeValue(bn()))))]),P(qe,tt)};ie(q,qe=>{lr()?qe(X):qe(me,!1)}),ze(()=>ce=Mt(Me,1,"jse-key svelte-1n4cez4",null,ce,{"jse-empty":bn()===""})),Ce("dblclick",Me,Vr),P(H,Me)};ie(Qt,H=>{y(Vt()),r(be),D(()=>!Vt().readOnly&&r(be))?H(Tt):H(An,!1)});var gr=W(Qt,2),tr=H=>{ni(H,{selected:!0,get onContextMenu(){return y(Vt()),D(()=>Vt().onContextMenu)}})};ie(gr,H=>{y(Vt()),r(Xn),r(be),D(()=>!Vt().readOnly&&r(Xn)&&!r(be))&&H(tr)}),P(hr,In),ct()})(Gn,{get pointer(){return r(vn)},get key(){return r(vt)},get selection(){return r(It)},get searchResultItems(){return r(Sr)},get context(){return d()},onUpdateKey:Y}),ze(hr=>er=Mt(pr,1,"jse-key-outer svelte-1qi6rc1",null,er,hr),[()=>({"jse-selected-key":qr(r(It))&&Lt(r(It).path,r(Yt))})]),P(sr,pr)}}}),P(ln,Nn)});var dn=W(xn,2),Bt=W(N(dn),2),Kt=ln=>{var vt=VC();Ce("click",vt,De),P(ln,vt)};ie(Bt,ln=>{r(o)||ln(Kt)}),P(Je,Nt)};ie(et,Je=>{r(x)&&Je(We)}),Ce("click",bt,z),P(Q,Ne)},de=Q=>{var Ne=GC(),ne=N(Ne),B=N(ne);dr(B,t,"identifier",{},null);var bt=W(B,2),st=I=>{P(I,KC())};ie(bt,I=>{r(o)||I(st)});var Se=W(bt,2),xt=N(Se),Fe=Ze(()=>r(w)?u():void 0),He=Ze(()=>(y(ph),y(c()),D(()=>ph(c()))));F0(xt,{get path(){return r(j)},get value(){return i()},get enforceString(){return r(C)},get selection(){return r(Fe)},get searchResultItems(){return r(He)},get context(){return d()}});var pt=W(Se,2),Ue=I=>{var re=YC();ni(N(re),{get root(){return r(o)},selected:!0,get onContextMenu(){return y(d()),D(()=>d().onContextMenu)}}),P(I,re)};ie(pt,I=>{y(d()),r(w),y(u()),y(cn),y(Rn),y(Dr),y(Lt),y(rt),r(j),D(()=>!d().readOnly&&r(w)&&u()&&(cn(u())||Rn(u()))&&!Dr(u())&&Lt(rt(u()),r(j)))&&I(Ue)});var Rt=W(ne,2),k=I=>{Ls(I,{get validationError(){return r(O)},onExpand:R})};ie(Rt,I=>{r(O)&&I(k)});var S=W(Rt,2),T=I=>{var re=QC();Ce("click",re,De),P(I,re)};ie(S,I=>{r(o)||I(T)}),P(Q,Ne)};ie(he,Q=>{y(mn),y(i()),D(()=>mn(i()))?Q(L):Q(de,!1)},!0),P(pe,V)};ie(xe,pe=>{y(i()),D(()=>Array.isArray(i()))?pe(ue):pe(we,!1)});var ft=W(xe,2),Jt=pe=>{var V,he=XC(),L=N(he),de=Ze(()=>(r(w),y(lo),y(u()),D(()=>r(w)&&lo(u()))));ni(L,{insert:!0,get selected(){return r(de)},onContextMenu:je}),ze(Q=>{V=Mt(he,1,"jse-insert-area jse-after svelte-1qi6rc1",null,V,Q),yn(he,"title",zd)},[()=>({"jse-hovered":r(b)===$c,"jse-selected":r(w)&&lo(u())})]),P(pe,he)};ie(ft,pe=>{y(d()),r(b),y($c),r(w),y(lo),y(u()),D(()=>!d().readOnly&&(r(b)===$c||r(w)&&lo(u())))&&pe(Jt)}),ze((pe,V)=>{Oe=Mt(ot,1,pe,"svelte-1qi6rc1",Oe,V),yn(ot,"data-path",r(n)),yn(ot,"aria-selected",r(w)),Pe=No(ot,"",Pe,{"--level":(r(j),D(()=>r(j).length))})},[()=>Ci((y(ta),r(x),y(d()),r(j),y(i()),D(()=>ta("jse-json-node",{"jse-expanded":r(x)},d().onClassName(r(j),i()))))),()=>({"jse-root":r(o),"jse-selected":r(w)&&Rn(u()),"jse-selected-value":r(w)&&cn(u()),"jse-readonly":d().readOnly,"jse-hovered":r(b)===Wp})]),Ce("mousedown",ot,function(pe){if((pe.buttons===1||pe.buttons===2)&&!((V=pe.target).nodeName==="DIV"&&V.contentEditable==="true"||pe.buttons===1&&s0(pe.target,"BUTTON"))){var V;pe.stopPropagation(),pe.preventDefault(),d().focus(),document.addEventListener("mousemove",E,!0),document.addEventListener("mouseup",K);var he=Md(pe.target),L=d().getJson(),de=d().getDocumentState();if(!u()||he===Pn.after||he===Pn.inside||u().type!==he&&u().type!==Pn.multi||!Yl(L,u(),r(j)))if(Kn(Kn().selecting=!0),Kn(Kn().selectionAnchor=r(j)),Kn(Kn().selectionAnchorType=he),Kn(Kn().selectionFocus=r(j)),pe.shiftKey){var Q=d().getSelection();Q&&d().onSelect(oo(Ji(Q),r(j)))}else if(he===Pn.multi)if(r(o)&&pe.target.hasAttribute("data-path")){var Ne=Wt(h0(i(),de));d().onSelect(xv(Ne))}else d().onSelect(oo(r(j),r(j)));else L!==void 0&&d().onSelect(ih(he,r(j)));else pe.button===0&&v()(pe)}}),Ce("mousemove",ot,function(pe){if(Kn().selecting){pe.preventDefault(),pe.stopPropagation(),Kn().selectionFocus===void 0&&window.getSelection&&window.getSelection().empty();var V=Md(pe.target);Lt(r(j),Kn().selectionFocus)&&V===Kn().selectionAnchorType||(Kn(Kn().selectionFocus=r(j)),Kn(Kn().selectionAnchorType=V),d().onSelect(oo(Kn().selectionAnchor||Kn().selectionFocus,Kn().selectionFocus)))}}),Ce("mouseover",ot,function(pe){Kn().selecting||Kn().dragging||(pe.stopPropagation(),vi(pe.target,"data-type","selectable-value")?f(b,Wp):vi(pe.target,"data-type","selectable-key")?f(b,void 0):vi(pe.target,"data-type","insert-selection-area-inside")?f(b,Ni):vi(pe.target,"data-type","insert-selection-area-after")&&f(b,$c),clearTimeout(m))}),Ce("mouseout",ot,function(pe){pe.stopPropagation(),m=window.setTimeout(()=>f(b,void 0))}),P(e,ot),ct()}var W0={prefix:"fas",iconName:"jsoneditor-expand",icon:[512,512,[],"","M 0,448 V 512 h 512 v -64 z M 0,0 V 64 H 512 V 0 Z M 256,96 128,224 h 256 z M 256,416 384,288 H 128 Z"]},V0={prefix:"fas",iconName:"jsoneditor-collapse",icon:[512,512,[],"","m 0,224 v 64 h 512 v -64 z M 256,192 384,64 H 128 Z M 256,320 128,448 h 256 z"]},Oh={prefix:"fas",iconName:"jsoneditor-format",icon:[512,512,[],"","M 0,32 v 64 h 416 v -64 z M 160,160 v 64 h 352 v -64 z M 160,288 v 64 h 288 v -64 z M 0,416 v 64 h 320 v -64 z"]},eS={prefix:"fas",iconName:"jsoneditor-compact",icon:[512,512,[],"","M 0,32 v 64 h 512 v -64 z M 0,160 v 64 h 512 v -64 z M 0,288 v 64 h 352 v -64 z"]};St(`/* over all fonts, sizes, and colors */
/* "consolas" for Windows, "menlo" for Mac with fallback to "monaco", 'Ubuntu Mono' for Ubuntu */
/* (at Mac this font looks too large at 14px, but 13px is too small for the font on Windows) */
/* main, menu, modal */
/* jsoneditor modal */
/* tooltip in text mode */
/* panels: navigation bar, gutter, search box */
/* navigation-bar */
/* context menu */
/* contents: json key and values */
/* contents: selected or hovered */
/* contents: section of collapsed items in an array */
/* contents: highlighting of search matches */
/* contents: inline tags inside the JSON document */
/* contents: table */
/* controls in modals: inputs, buttons, and \`a\` */
/* messages */
/* svelte-select */
/* color picker */
.jse-welcome.svelte-1lhnan {
  flex: 1;
  overflow: auto;
  font-family: var(--jse-font-family, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen-Sans, Ubuntu, Cantarell, "Helvetica Neue", sans-serif);
  font-size: var(--jse-font-size, 16px);
  display: flex;
  flex-direction: column;
  align-items: center;
  border-left: var(--jse-main-border, 1px solid #d7d7d7);
  border-right: var(--jse-main-border, 1px solid #d7d7d7);
}
.jse-welcome.svelte-1lhnan:last-child {
  border-bottom: var(--jse-main-border, 1px solid #d7d7d7);
}
.jse-welcome.svelte-1lhnan .jse-space.jse-before:where(.svelte-1lhnan) {
  flex: 1;
}
.jse-welcome.svelte-1lhnan .jse-space.jse-after:where(.svelte-1lhnan) {
  flex: 2;
}
.jse-welcome.svelte-1lhnan .jse-contents:where(.svelte-1lhnan) {
  display: flex;
  flex-direction: column;
  max-width: 300px;
  margin: 2em var(--jse-padding, 10px);
  gap: var(--jse-padding, 10px);
}
.jse-welcome.svelte-1lhnan .jse-contents:where(.svelte-1lhnan) .jse-welcome-info:where(.svelte-1lhnan) {
  color: var(--jse-panel-color-readonly, #b2b2b2);
}
.jse-welcome.svelte-1lhnan .jse-contents:where(.svelte-1lhnan) button:where(.svelte-1lhnan) {
  border: none;
  background: transparent;
  color: inherit;
  cursor: pointer;
  font-family: var(--jse-font-family, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen-Sans, Ubuntu, Cantarell, "Helvetica Neue", sans-serif);
  font-size: var(--jse-font-size, 16px);
  padding: 5px;
  margin: 0;
  background: var(--jse-button-primary-background, var(--jse-theme-color, #3883fa));
  color: var(--jse-button-primary-color, #fff);
  padding: var(--jse-padding, 10px) calc(2 * var(--jse-padding, 10px));
  border-radius: 3px;
}
.jse-welcome.svelte-1lhnan .jse-contents:where(.svelte-1lhnan) button:where(.svelte-1lhnan):hover {
  background: var(--jse-button-primary-background-highlight, var(--jse-theme-color-highlight, #5f9dff));
}
.jse-welcome.svelte-1lhnan .jse-contents:where(.svelte-1lhnan) button:where(.svelte-1lhnan):disabled {
  background: var(--jse-button-primary-background-disabled, #9d9d9d);
}`);var tS=te('<div class="jse-welcome-info svelte-1lhnan">You can paste clipboard data using <b>Ctrl+V</b>, or use the following options:</div> <button class="svelte-1lhnan">Create object</button> <button class="svelte-1lhnan">Create array</button>',1),nS=te('<div class="jse-welcome svelte-1lhnan" role="none"><div class="jse-space jse-before svelte-1lhnan"></div> <div class="jse-contents svelte-1lhnan"><div class="jse-welcome-title">Empty document</div> <!></div> <div class="jse-space jse-after svelte-1lhnan"></div></div>');function Av(e,t){var n=typeof e=="string"?e.toLowerCase():e,o=typeof t=="string"?t.toLowerCase():t;return wj(n,o)}function H0(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:[],n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:[],o=arguments.length>3&&arguments[3]!==void 0?arguments[3]:1,a=Ye(e,t);if(vr(a)){if(n===void 0)throw new Error("Cannot sort: no property selected by which to sort the array");return function(i){var s=arguments.length>1&&arguments[1]!==void 0?arguments[1]:[],l=arguments.length>2&&arguments[2]!==void 0?arguments[2]:[],c=arguments.length>3&&arguments[3]!==void 0?arguments[3]:1,u=function(v,p){var b={boolean:0,number:1,string:2,undefined:4},m=3;return function(h,j){var x=Ye(h,v),C=Ye(j,v);if(typeof x!=typeof C){var A,O,w=(A=b[typeof x])!==null&&A!==void 0?A:m,z=(O=b[typeof C])!==null&&O!==void 0?O:m;return w>z?p:w<z?-p:0}return typeof x=="number"||typeof x=="boolean"?x>C?p:x<C?-p:0:ir(x)?0:p*Av(x,C)}}(l,c),d=Ye(i,s);return[{op:"replace",path:dt(s),value:d.slice(0).sort(u)}]}(e,t,n,o)}if(mn(a))return function(i){var s=arguments.length>1&&arguments[1]!==void 0?arguments[1]:[],l=arguments.length>2&&arguments[2]!==void 0?arguments[2]:1,c=Ye(i,s),u=Object.keys(c).slice();u.sort((v,p)=>l*Av(v,p));var d={};return u.forEach(v=>d[v]=c[v]),[{op:"replace",path:dt(s),value:d}]}(e,t,o);throw new Error("Cannot sort: no array or object")}uc(["click"]);St(`/* over all fonts, sizes, and colors */
/* "consolas" for Windows, "menlo" for Mac with fallback to "monaco", 'Ubuntu Mono' for Ubuntu */
/* (at Mac this font looks too large at 14px, but 13px is too small for the font on Windows) */
/* main, menu, modal */
/* jsoneditor modal */
/* tooltip in text mode */
/* panels: navigation bar, gutter, search box */
/* navigation-bar */
/* context menu */
/* contents: json key and values */
/* contents: selected or hovered */
/* contents: section of collapsed items in an array */
/* contents: highlighting of search matches */
/* contents: inline tags inside the JSON document */
/* contents: table */
/* controls in modals: inputs, buttons, and \`a\` */
/* messages */
/* svelte-select */
/* color picker */
.jse-navigation-bar-dropdown.svelte-1k47orx {
  position: absolute;
  top: 100%;
  left: 0;
  z-index: 3;
  background: var(--jse-navigation-bar-background, var(--jse-background-color, #fff));
  color: var(--jse-navigation-bar-dropdown-color, #656565);
  box-shadow: var(--jse-controls-box-shadow, 0 2px 6px 0 rgba(0, 0, 0, 0.24));
  display: flex;
  flex-direction: column;
  max-height: 300px;
  overflow: auto;
  min-width: 80px;
}
.jse-navigation-bar-dropdown.svelte-1k47orx button.jse-navigation-bar-dropdown-item:where(.svelte-1k47orx) {
  font-family: var(--jse-font-family-mono, consolas, menlo, monaco, "Ubuntu Mono", "source-code-pro", monospace);
  font-size: var(--jse-font-size-mono, 14px);
  border: none;
  background: transparent;
  color: inherit;
  cursor: pointer;
  outline: none;
  text-align: left;
  white-space: nowrap;
  box-sizing: border-box;
  padding: calc(0.5 * var(--jse-padding, 10px)) 36px;
}
.jse-navigation-bar-dropdown.svelte-1k47orx button.jse-navigation-bar-dropdown-item:where(.svelte-1k47orx):focus, .jse-navigation-bar-dropdown.svelte-1k47orx button.jse-navigation-bar-dropdown-item:where(.svelte-1k47orx):hover {
  background: var(--jse-navigation-bar-background-highlight, #e5e5e5);
}
.jse-navigation-bar-dropdown.svelte-1k47orx button.jse-navigation-bar-dropdown-item.jse-selected:where(.svelte-1k47orx) {
  background: var(--jse-navigation-bar-dropdown-color, #656565);
  color: var(--jse-navigation-bar-background, var(--jse-background-color, #fff));
}`);var rS=te('<button type="button"> </button>'),oS=te('<button type="button" class="jse-navigation-bar-dropdown-item svelte-1k47orx">...</button>'),aS=te('<div class="jse-navigation-bar-dropdown svelte-1k47orx"><!> <!></div>');function iS(e,t){lt(t,!1);var n=g(t,"items",9),o=g(t,"selectedItem",9),a=g(t,"onSelect",9);At(!0);var i=aS(),s=N(i);fr(s,1,()=>(y(bu),y(n()),D(()=>bu(n(),100))),u=>u,(u,d)=>{var v,p=rS(),b=N(p);ze((m,h)=>{v=Mt(p,1,"jse-navigation-bar-dropdown-item svelte-1k47orx",null,v,{"jse-selected":r(d)===o()}),yn(p,"title",m),ut(b,h)},[()=>(r(d),D(()=>r(d).toString())),()=>(y(Ra),r(d),D(()=>Ra(r(d).toString(),30)))]),Ce("click",p,Aa(()=>a()(r(d)))),P(u,p)});var l=W(s,2),c=u=>{var d=oS();yn(d,"title","Limited to 100 items"),P(u,d)};ie(l,u=>{y(n()),D(()=>n().length>100)&&u(c)}),P(e,i),ct()}St(`/* over all fonts, sizes, and colors */
/* "consolas" for Windows, "menlo" for Mac with fallback to "monaco", 'Ubuntu Mono' for Ubuntu */
/* (at Mac this font looks too large at 14px, but 13px is too small for the font on Windows) */
/* main, menu, modal */
/* jsoneditor modal */
/* tooltip in text mode */
/* panels: navigation bar, gutter, search box */
/* navigation-bar */
/* context menu */
/* contents: json key and values */
/* contents: selected or hovered */
/* contents: section of collapsed items in an array */
/* contents: highlighting of search matches */
/* contents: inline tags inside the JSON document */
/* contents: table */
/* controls in modals: inputs, buttons, and \`a\` */
/* messages */
/* svelte-select */
/* color picker */
.jse-navigation-bar-item.svelte-13sijxb {
  position: relative;
  display: flex;
}
.jse-navigation-bar-item.svelte-13sijxb button.jse-navigation-bar-button:where(.svelte-13sijxb) {
  font-family: inherit;
  font-size: inherit;
  padding: calc(0.5 * var(--jse-padding, 10px)) 2px;
  border: none;
  background: transparent;
  color: inherit;
  cursor: pointer;
  outline: none;
  min-width: 2em;
  white-space: nowrap;
}
.jse-navigation-bar-item.svelte-13sijxb button.jse-navigation-bar-button:where(.svelte-13sijxb):focus, .jse-navigation-bar-item.svelte-13sijxb button.jse-navigation-bar-button:where(.svelte-13sijxb):hover {
  background: var(--jse-panel-button-background-highlight, #e0e0e0);
  color: var(--panel-button-color-highlight, var(--jse-text-color, #4d4d4d));
}
.jse-navigation-bar-item.svelte-13sijxb button.jse-navigation-bar-button.jse-navigation-bar-arrow:where(.svelte-13sijxb) {
  padding: 2px var(--jse-padding, 10px) 0;
}
.jse-navigation-bar-item.svelte-13sijxb button.jse-navigation-bar-button.jse-navigation-bar-arrow.jse-open:where(.svelte-13sijxb) {
  background: var(--jse-navigation-bar-background, var(--jse-background-color, #fff));
  color: var(--jse-navigation-bar-dropdown-color, #656565);
}
.jse-navigation-bar-item.svelte-13sijxb:last-child {
  padding-right: var(--jse-padding, 10px);
}`);var sS=te('<button type="button" class="jse-navigation-bar-button svelte-13sijxb"> </button>'),lS=te('<div class="jse-navigation-bar-item svelte-13sijxb"><button type="button"><!></button> <!></div>');function Eh(e,t){lt(t,!1);var n,o=$(void 0,!0),a=$(void 0,!0),{openAbsolutePopup:i,closeAbsolutePopup:s}=Ei("absolute-popup"),l=g(t,"path",9),c=g(t,"index",9),u=g(t,"onSelect",9),d=g(t,"getItems",9),v=$(void 0,!0),p=$(!1,!0);function b(A){s(n),u()(r(o).concat(A))}Z(()=>(y(l()),y(c())),()=>{f(o,l().slice(0,c()))}),Z(()=>(y(l()),y(c())),()=>{f(a,l()[c()])}),jn(),At(!0);var m,h=lS(),j=N(h);nn(N(j),{get data(){return yg}});var x=W(j,2),C=A=>{var O=sS(),w=N(O);ze(()=>ut(w,r(a))),Ce("click",O,()=>b(r(a))),P(A,O)};ie(x,A=>{r(a)!==void 0&&A(C)}),Qn(h,A=>f(v,A),()=>r(v)),ze(()=>m=Mt(j,1,"jse-navigation-bar-button jse-navigation-bar-arrow svelte-13sijxb",null,m,{"jse-open":r(p)})),Ce("click",j,function(){if(r(v)){f(p,!0);var A={items:d()(r(o)),selectedItem:r(a),onSelect:b};n=i(iS,A,{anchor:r(v),closeOnOuterClick:!0,onClose:()=>{f(p,!1)}})}}),P(e,h),ct()}function Rf(e){var t,n;if(navigator.clipboard)return navigator.clipboard.writeText(e);if((t=(n=document).queryCommandSupported)!==null&&t!==void 0&&t.call(n,"copy")){var o=document.createElement("textarea");o.value=e,o.style.position="fixed",o.style.opacity="0",document.body.appendChild(o),o.select();try{document.execCommand("copy")}catch(a){console.error(a)}finally{document.body.removeChild(o)}return Promise.resolve()}return console.error("Copy failed."),Promise.resolve()}St(`/* over all fonts, sizes, and colors */
/* "consolas" for Windows, "menlo" for Mac with fallback to "monaco", 'Ubuntu Mono' for Ubuntu */
/* (at Mac this font looks too large at 14px, but 13px is too small for the font on Windows) */
/* main, menu, modal */
/* jsoneditor modal */
/* tooltip in text mode */
/* panels: navigation bar, gutter, search box */
/* navigation-bar */
/* context menu */
/* contents: json key and values */
/* contents: selected or hovered */
/* contents: section of collapsed items in an array */
/* contents: highlighting of search matches */
/* contents: inline tags inside the JSON document */
/* contents: table */
/* controls in modals: inputs, buttons, and \`a\` */
/* messages */
/* svelte-select */
/* color picker */
.jse-navigation-bar-path-editor.svelte-uyexy4 {
  flex: 1;
  display: flex;
  border: var(--jse-edit-outline, 2px solid #656565);
  background: var(--jse-background-color, #fff);
}
.jse-navigation-bar-path-editor.svelte-uyexy4 input.jse-navigation-bar-text:where(.svelte-uyexy4) {
  flex: 1;
  font-family: inherit;
  font-size: inherit;
  padding: 0 5px 1px;
  background: var(--jse-background-color, #fff);
  color: var(--jse-text-color, #4d4d4d);
  border: none;
  outline: none;
}
.jse-navigation-bar-path-editor.svelte-uyexy4 button:where(.svelte-uyexy4) {
  border: none;
  background: var(--jse-background-color, #fff);
  cursor: pointer;
  font-family: inherit;
  font-size: 80%;
  color: inherit;
}
.jse-navigation-bar-path-editor.svelte-uyexy4 button.jse-navigation-bar-copy.copied:where(.svelte-uyexy4) {
  color: var(--message-success-background, #9ac45d);
}
.jse-navigation-bar-path-editor.svelte-uyexy4 button.jse-navigation-bar-validation-error:where(.svelte-uyexy4) {
  color: var(--jse-error-color, #ee5341);
}
.jse-navigation-bar-path-editor.error.svelte-uyexy4 {
  border-color: var(--jse-error-color, #ee5341);
}
.jse-navigation-bar-path-editor.error.svelte-uyexy4 input.jse-navigation-bar-text:where(.svelte-uyexy4) {
  color: var(--jse-error-color, #ee5341);
}
.jse-navigation-bar-path-editor.svelte-uyexy4 .jse-copied-text:where(.svelte-uyexy4) {
  background: var(--message-success-background, #9ac45d);
  color: var(--jse-message-success-color, #fff);
  position: relative;
  margin: 2px;
  padding: 0 5px;
  border-radius: 3px;
}`);var cS=te('<button type="button" class="jse-navigation-bar-validation-error svelte-uyexy4"><!></button>'),uS=te('<div class="jse-copied-text svelte-uyexy4">Copied!</div>'),dS=te('<div><input type="text" class="jse-navigation-bar-text svelte-uyexy4"/> <!> <!> <button type="button" title="Copy selected path to the clipboard"><!></button></div>');function vS(e,t){lt(t,!1);var n=$(),o=Ei("absolute-popup"),a=g(t,"path",8),i=g(t,"pathParser",8),s=g(t,"onChange",8),l=g(t,"onClose",8),c=g(t,"onError",8),u=g(t,"pathExists",8),d=$(),v=$(),p=$(!1),b=void 0,m=$(!1);function h(){r(d).focus()}function j(K){try{var J=i().parse(K);return function(U){if(!u()(U))throw new Error("Path does not exist in current document")}(J),{path:J,error:void 0}}catch(U){return{path:void 0,error:U}}}no(()=>{h()}),Io(()=>{clearTimeout(b)}),Z(()=>(y(i()),y(a())),()=>{f(v,i().stringify(a()))}),Z(()=>(r(p),r(v)),()=>{f(n,r(p)?j(r(v)).error:void 0)}),jn(),At();var x,C=dS(),A=N(C);Qn(A,K=>f(d,K),()=>r(d));var O=W(A,2),w=K=>{var J=cS();nn(N(J),{get data(){return Yi}}),io(J,(U,ae)=>Zs?.(U,ae),()=>Ae({text:String(r(n)||"")},o)),P(K,J)};ie(O,K=>{r(n)&&K(w)});var z=W(O,2),R=K=>{P(K,uS())};ie(z,K=>{r(m)&&K(R)});var Y,E=W(z,2);nn(N(E),{get data(){return ci}}),ze(()=>{x=Mt(C,1,"jse-navigation-bar-path-editor svelte-uyexy4",null,x,{error:r(n)}),es(A,r(v)),Y=Mt(E,1,"jse-navigation-bar-copy svelte-uyexy4",null,Y,{copied:r(m)})}),Ce("keydown",A,Aa(function(K){var J=Ha(K);if(J==="Escape"&&(K.preventDefault(),l()()),J==="Enter"){K.preventDefault(),f(p,!0);var U=j(r(v));U.path!==void 0?s()(U.path):c()(U.error)}})),Ce("input",A,function(K){f(v,K.currentTarget.value)}),Ce("click",E,function(){Rf(r(v)),f(m,!0),b=window.setTimeout(()=>f(m,!1),1e3),h()}),P(e,C),ct()}St(`/* over all fonts, sizes, and colors */
/* "consolas" for Windows, "menlo" for Mac with fallback to "monaco", 'Ubuntu Mono' for Ubuntu */
/* (at Mac this font looks too large at 14px, but 13px is too small for the font on Windows) */
/* main, menu, modal */
/* jsoneditor modal */
/* tooltip in text mode */
/* panels: navigation bar, gutter, search box */
/* navigation-bar */
/* context menu */
/* contents: json key and values */
/* contents: selected or hovered */
/* contents: section of collapsed items in an array */
/* contents: highlighting of search matches */
/* contents: inline tags inside the JSON document */
/* contents: table */
/* controls in modals: inputs, buttons, and \`a\` */
/* messages */
/* svelte-select */
/* color picker */
.jse-navigation-bar.svelte-hjhal6 {
  font-family: var(--jse-font-family-mono, consolas, menlo, monaco, "Ubuntu Mono", "source-code-pro", monospace);
  font-size: var(--jse-font-size-mono, 14px);
  background: var(--jse-panel-background, #ebebeb);
  color: var(--jse-panel-button-color, inherit);
  padding: 0;
  margin: 0;
  display: flex;
  overflow: auto;
  border-left: var(--jse-main-border, 1px solid #d7d7d7);
  border-right: var(--jse-main-border, 1px solid #d7d7d7);
}
.jse-navigation-bar.svelte-hjhal6 .jse-navigation-bar-edit:where(.svelte-hjhal6) {
  font-family: var(--jse-font-family-mono, consolas, menlo, monaco, "Ubuntu Mono", "source-code-pro", monospace);
  font-size: var(--jse-font-size-mono, 14px);
  padding: calc(0.5 * var(--jse-padding, 10px)) var(--jse-padding, 10px);
  color: var(--jse-panel-color-readonly, #b2b2b2);
  background: transparent;
  border: none;
  display: flex;
  cursor: pointer;
  outline: none;
  align-items: center;
}
.jse-navigation-bar.svelte-hjhal6 .jse-navigation-bar-edit.flex:where(.svelte-hjhal6) {
  flex: 1;
}
.jse-navigation-bar.svelte-hjhal6 .jse-navigation-bar-edit:where(.svelte-hjhal6):focus, .jse-navigation-bar.svelte-hjhal6 .jse-navigation-bar-edit:where(.svelte-hjhal6):hover, .jse-navigation-bar.svelte-hjhal6 .jse-navigation-bar-edit.editing:where(.svelte-hjhal6) {
  background: var(--jse-panel-button-background-highlight, #e0e0e0);
  color: var(--panel-button-color-highlight, var(--jse-text-color, #4d4d4d));
  transition: color 0.2s ease-in, background 0.2s ease-in;
}
.jse-navigation-bar.svelte-hjhal6 .jse-navigation-bar-edit:where(.svelte-hjhal6) .jse-navigation-bar-space:where(.svelte-hjhal6) {
  flex: 1;
  text-align: left;
}`);var fS=te("<!> <!>",1),pS=te('<div class="jse-navigation-bar svelte-hjhal6"><!> <button type="button"><span class="jse-navigation-bar-space svelte-hjhal6"> </span> <!></button></div>');function hS(e,t){lt(t,!1);var n=$(void 0,!0),o=$(void 0,!0),a=Lr("jsoneditor:NavigationBar"),i=g(t,"json",9),s=g(t,"selection",9),l=g(t,"onSelect",9),c=g(t,"onError",9),u=g(t,"pathParser",9),d=$(void 0,!0),v=$(!1,!0);function p(J){a("get items for path",J);var U=Ye(i(),J);if(Array.isArray(U))return kg(0,U.length).map(String);if(mn(U)){var ae=Object.keys(U).slice(0);return ae.sort(Av),ae}return[]}function b(J){return Ro(i(),J)}function m(J){a("select path",JSON.stringify(J)),l()(oo(J,J))}function h(){f(v,!1)}function j(J){h(),m(J)}Z(()=>(y(s()),rt),()=>{f(n,s()?rt(s()):[])}),Z(()=>(y(i()),r(n)),()=>{f(o,ir(Ye(i(),r(n))))}),Z(()=>r(n),()=>{r(n),setTimeout(()=>{if(r(d)&&r(d).scrollTo){var J=r(d).scrollWidth-r(d).clientWidth;J>0&&(a("scrollTo ",J),r(d).scrollTo({left:J,behavior:"smooth"}))}})}),jn(),At(!0);var x=pS(),C=N(x),A=J=>{var U=fS(),ae=Xe(U);fr(ae,1,()=>r(n),Cr,(Te,De,Le)=>{Eh(Te,{getItems:p,get path(){return r(n)},index:Le,onSelect:m})});var ge=W(ae,2),se=Te=>{Eh(Te,{getItems:p,get path(){return r(n)},get index(){return r(n),D(()=>r(n).length)},onSelect:m})};ie(ge,Te=>{r(o)&&Te(se)}),P(J,U)},O=J=>{vS(J,{get path(){return r(n)},onClose:h,onChange:j,get onError(){return c()},pathExists:b,get pathParser(){return u()}})};ie(C,J=>{r(v)?J(O,!1):J(A)});var w,z=W(C,2),R=N(z),Y=N(R),E=W(R,2),K=Ze(()=>r(v)?r1:o1);nn(E,{get data(){return r(K)}}),Qn(x,J=>f(d,J),()=>r(d)),ze(J=>{w=Mt(z,1,"jse-navigation-bar-edit svelte-hjhal6",null,w,{flex:!r(v),editing:r(v)}),yn(z,"title",r(v)?"Cancel editing the selected path":"Edit the selected path"),ut(Y,J)},[()=>(y(ir),y(i()),r(v),D(()=>ir(i())||r(v)?" ":"Navigation bar"))]),Ce("click",z,function(){f(v,!r(v))}),P(e,x),ct()}St(`/* over all fonts, sizes, and colors */
/* "consolas" for Windows, "menlo" for Mac with fallback to "monaco", 'Ubuntu Mono' for Ubuntu */
/* (at Mac this font looks too large at 14px, but 13px is too small for the font on Windows) */
/* main, menu, modal */
/* jsoneditor modal */
/* tooltip in text mode */
/* panels: navigation bar, gutter, search box */
/* navigation-bar */
/* context menu */
/* contents: json key and values */
/* contents: selected or hovered */
/* contents: section of collapsed items in an array */
/* contents: highlighting of search matches */
/* contents: inline tags inside the JSON document */
/* contents: table */
/* controls in modals: inputs, buttons, and \`a\` */
/* messages */
/* svelte-select */
/* color picker */
.jse-search-box.svelte-1x1x8q0 {
  border: var(--jse-panel-border, var(--jse-main-border, 1px solid #d7d7d7));
  border-radius: 3px;
  font-family: var(--jse-font-family, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen-Sans, Ubuntu, Cantarell, "Helvetica Neue", sans-serif);
  font-size: var(--jse-font-size, 16px);
  background: var(--jse-panel-background, #ebebeb);
  color: var(--jse-panel-color-readonly, #b2b2b2);
  box-shadow: var(--jse-controls-box-shadow, 0 2px 6px 0 rgba(0, 0, 0, 0.24));
  display: inline-block;
  width: 400px;
  max-width: 100%;
  overflow: auto;
}
.jse-search-box.svelte-1x1x8q0 .jse-search-form:where(.svelte-1x1x8q0) {
  display: flex;
  align-items: stretch;
}
.jse-search-box.svelte-1x1x8q0 .jse-search-form:where(.svelte-1x1x8q0) button:where(.svelte-1x1x8q0),
.jse-search-box.svelte-1x1x8q0 .jse-search-form:where(.svelte-1x1x8q0) input:where(.svelte-1x1x8q0) {
  font-family: inherit;
  font-size: inherit;
}
.jse-search-box.svelte-1x1x8q0 .jse-search-form:where(.svelte-1x1x8q0) button:where(.svelte-1x1x8q0) {
  display: block;
  text-align: center;
  border: none;
  padding: 0 5px;
  margin: 0;
  cursor: pointer;
  color: var(--jse-panel-button-color, inherit);
  background: var(--jse-panel-button-background, transparent);
}
.jse-search-box.svelte-1x1x8q0 .jse-search-form:where(.svelte-1x1x8q0) button:where(.svelte-1x1x8q0):hover {
  color: var(--panel-button-color-highlight, var(--jse-text-color, #4d4d4d));
  background: var(--jse-panel-button-background-highlight, #e0e0e0);
}
.jse-search-box.svelte-1x1x8q0 .jse-search-form:where(.svelte-1x1x8q0) input:where(.svelte-1x1x8q0) {
  color: var(--jse-panel-color, var(--jse-text-color, #4d4d4d));
  border: var(--jse-input-border, 1px solid #d8dbdf);
  border-radius: 3px;
  background: var(--jse-input-background, var(--jse-background-color, #fff));
  height: 28px;
  padding: 0 5px;
  margin: 0;
  flex: 1;
  width: 0;
  min-width: 50px;
  outline: none;
}
.jse-search-box.svelte-1x1x8q0 .jse-search-form:where(.svelte-1x1x8q0) .jse-replace-toggle:where(.svelte-1x1x8q0) {
  padding: var(--jse-padding, 10px) calc(0.5 * var(--jse-padding, 10px));
  min-width: 20px;
  background: var(--jse-panel-button-background-highlight, #e0e0e0);
}
.jse-search-box.svelte-1x1x8q0 .jse-search-form:where(.svelte-1x1x8q0) .jse-search-contents:where(.svelte-1x1x8q0) {
  flex: 1;
  display: flex;
  flex-direction: column;
  padding: calc(0.5 * var(--jse-padding, 10px));
  gap: calc(0.5 * var(--jse-padding, 10px));
}
.jse-search-box.svelte-1x1x8q0 .jse-search-form:where(.svelte-1x1x8q0) .jse-search-contents:where(.svelte-1x1x8q0) .jse-search-section:where(.svelte-1x1x8q0) {
  flex: 1;
  display: flex;
  align-items: center;
  position: relative;
}
.jse-search-box.svelte-1x1x8q0 .jse-search-form:where(.svelte-1x1x8q0) .jse-search-contents:where(.svelte-1x1x8q0) .jse-search-section:where(.svelte-1x1x8q0) .jse-search-icon:where(.svelte-1x1x8q0) {
  color: inherit;
  cursor: inherit;
  background: inherit;
  width: 32px;
  text-align: center;
}
.jse-search-box.svelte-1x1x8q0 .jse-search-form:where(.svelte-1x1x8q0) .jse-search-contents:where(.svelte-1x1x8q0) .jse-search-section:where(.svelte-1x1x8q0) label.jse-search-input-label:where(.svelte-1x1x8q0) {
  flex: 1;
  display: flex;
}
.jse-search-box.svelte-1x1x8q0 .jse-search-form:where(.svelte-1x1x8q0) .jse-search-contents:where(.svelte-1x1x8q0) .jse-search-section:where(.svelte-1x1x8q0) .jse-search-count:where(.svelte-1x1x8q0) {
  color: inherit;
  font-size: 80%;
  visibility: hidden;
  padding: 0 5px;
  min-width: 36px;
  text-align: center;
}
.jse-search-box.svelte-1x1x8q0 .jse-search-form:where(.svelte-1x1x8q0) .jse-search-contents:where(.svelte-1x1x8q0) .jse-search-section:where(.svelte-1x1x8q0) .jse-search-count.jse-visible:where(.svelte-1x1x8q0) {
  visibility: visible;
}
.jse-search-box.svelte-1x1x8q0 .jse-search-form:where(.svelte-1x1x8q0) .jse-search-contents:where(.svelte-1x1x8q0) .jse-replace-section:where(.svelte-1x1x8q0) {
  flex: 1;
  display: flex;
  padding-left: 32px;
}
.jse-search-box.svelte-1x1x8q0 .jse-search-form:where(.svelte-1x1x8q0) .jse-search-contents:where(.svelte-1x1x8q0) .jse-replace-section:where(.svelte-1x1x8q0) button:where(.svelte-1x1x8q0) {
  width: auto;
}`);var gS=te('<button type="button" class="jse-replace-toggle svelte-1x1x8q0" title="Toggle visibility of replace options (Ctrl+H)"><!></button>'),mS=te('<div class="jse-replace-section svelte-1x1x8q0"><input class="jse-replace-input svelte-1x1x8q0" title="Enter replacement text" type="text" placeholder="Replace"/> <button type="button" title="Replace current occurrence (Ctrl+Enter)" class="svelte-1x1x8q0">Replace</button> <button type="button" title="Replace all occurrences" class="svelte-1x1x8q0">All</button></div>'),bS=te('<div class="jse-search-box svelte-1x1x8q0"><form class="jse-search-form svelte-1x1x8q0"><!> <div class="jse-search-contents svelte-1x1x8q0"><div class="jse-search-section svelte-1x1x8q0"><div class="jse-search-icon svelte-1x1x8q0"><!></div> <label class="jse-search-input-label svelte-1x1x8q0" about="jse-search input"><input class="jse-search-input svelte-1x1x8q0" title="Enter text to search" type="text" placeholder="Find"/></label> <div> </div> <button type="button" class="jse-search-next svelte-1x1x8q0" title="Go to next search result (Enter)"><!></button> <button type="button" class="jse-search-previous svelte-1x1x8q0" title="Go to previous search result (Shift+Enter)"><!></button> <button type="button" class="jse-search-clear svelte-1x1x8q0" title="Close search box (Esc)"><!></button></div> <!></div></form></div>');function J0(e,t){lt(t,!1);var n=$(void 0,!0),o=$(void 0,!0),a=$(void 0,!0),i=Lr("jsoneditor:SearchBox"),s=g(t,"json",9),l=g(t,"documentState",9),c=g(t,"parser",9),u=g(t,"showSearch",9),d=g(t,"showReplace",13),v=g(t,"readOnly",9),p=g(t,"columns",9),b=g(t,"onSearch",9),m=g(t,"onFocus",9),h=g(t,"onPatch",9),j=g(t,"onClose",9),x=$("",!0),C="",A=$("",!0),O=$(!1,!0),w=$(void 0,!0),z=du(function(Q){return we.apply(this,arguments)},300),R=du(function(Q){return ft.apply(this,arguments)},300);function Y(){d(!d()&&!v())}function E(Q){Q.stopPropagation();var Ne=Ha(Q);Ne==="Enter"&&(Q.preventDefault(),r(x)!==C?z.flush():Le()),Ne==="Shift+Enter"&&(Q.preventDefault(),Oe()),Ne==="Ctrl+Enter"&&(Q.preventDefault(),d()?ae():Le()),Ne==="Ctrl+H"&&(Q.preventDefault(),Y()),Ne==="Escape"&&(Q.preventDefault(),V())}function K(Q){Ha(Q)==="Enter"&&(Q.preventDefault(),Q.stopPropagation(),ae())}function J(){return U.apply(this,arguments)}function U(){return(U=mt(function*(){Vn(),yield z.flush()})).apply(this,arguments)}function ae(){return ge.apply(this,arguments)}function ge(){return(ge=mt(function*(){var Q;if(!v()){var Ne=(Q=r(w))===null||Q===void 0?void 0:Q.activeItem;if(i("handleReplace",{replaceText:r(A),activeItem:Ne}),r(w)&&Ne&&s()!==void 0){f(w,Ae(Ae({},lh(r(w))),{},{activeIndex:r(o)}));var{operations:ne,newSelection:B}=Iw(s(),l(),r(A),Ne,c());h()(ne,(bt,st)=>({state:st,selection:B})),Vn(),yield R.flush(),yield ot()}}})).apply(this,arguments)}function se(){return Te.apply(this,arguments)}function Te(){return(Te=mt(function*(){if(!v()){i("handleReplaceAll",{text:r(x),replaceText:r(A)});var{operations:Q,newSelection:Ne}=function(ne,B,bt,st,Se){for(var xt=ch(bt,ne,{maxResults:1/0}),Fe=[],He=0;He<xt.length;He++){var pt=xt[He-1],Ue=xt[He];He!==0&&Ue.field===pt.field&&Lt(Ue.path,pt.path)?Wt(Fe).items.push(Ue):Fe.push({path:Ue.path,field:Ue.field,items:[Ue]})}Fe.sort((S,T)=>S.field!==T.field?S.field===Yo.key?1:-1:T.path.length-S.path.length);var Rt,k=[];return Fe.forEach(S=>{var{field:T,path:I,items:re}=S;if(T===Yo.key){var ke=tn(I),_e=Ye(ne,ke),ee=Wt(I),oe=gc(ke,Object.keys(_e),ee,dh(ee,st,re));k=k.concat(oe),Rt=Xs(ne,oe)}else{if(T!==Yo.value)throw new Error("Cannot replace: unknown type of search result field ".concat(T));var it=Ye(ne,I);if(it===void 0)throw new Error("Cannot replace: path not found ".concat(dt(I)));var et=typeof it=="string"?it:String(it),We=da(ne,B,I),Je=dh(et,st,re),Nt=[{op:"replace",path:dt(I),value:We?Je:cl(Je,Se)}];k=k.concat(Nt),Rt=Xs(ne,Nt)}}),{operations:k,newSelection:Rt}}(s(),l(),r(x),r(A),c());h()(Q,(ne,B)=>({state:B,selection:Ne})),yield ot()}})).apply(this,arguments)}function De(Q){Q.select()}function Le(){return je.apply(this,arguments)}function je(){return(je=mt(function*(){f(w,r(w)?lh(r(w)):void 0),yield ot()})).apply(this,arguments)}function Oe(){return Pe.apply(this,arguments)}function Pe(){return Pe=mt(function*(){f(w,r(w)?function(Q){var Ne=Q.activeIndex>0?Q.activeIndex-1:Q.items.length-1,ne=Q.items[Ne],B=Q.items.map((bt,st)=>Ae(Ae({},bt),{},{active:st===Ne}));return Ae(Ae({},Q),{},{items:B,activeItem:ne,activeIndex:Ne})}(r(w)):void 0),yield ot()}),Pe.apply(this,arguments)}function ot(){return xe.apply(this,arguments)}function xe(){return(xe=mt(function*(){var Q;i("handleFocus",r(w));var Ne=(Q=r(w))===null||Q===void 0?void 0:Q.activeItem;Ne&&s()!==void 0&&(yield m()(Ne.path,Ne.resultIndex))})).apply(this,arguments)}function ue(){return ue=mt(function*(Q){yield Jt(Q,r(x),s())}),ue.apply(this,arguments)}function we(){return we=mt(function*(Q){yield Jt(u(),Q,s()),yield ot()}),we.apply(this,arguments)}function ft(){return ft=mt(function*(Q){yield Jt(u(),r(x),Q)}),ft.apply(this,arguments)}function Jt(Q,Ne,ne){return pe.apply(this,arguments)}function pe(){return pe=mt(function*(Q,Ne,ne){return Q?(i("applySearch",{showSearch:Q,text:Ne}),Ne===""?(i("clearing search result"),r(w)!==void 0&&f(w,void 0),Promise.resolve()):(C=Ne,f(O,!0),new Promise(B=>{setTimeout(()=>{var bt=ch(Ne,ne,{maxResults:Ad,columns:p()});f(w,function(st,Se){var xt=Se!=null&&Se.activeItem?vh(Se.activeItem):void 0,Fe=st.findIndex(Ue=>Lt(xt,vh(Ue))),He=Fe!==-1?Fe:Se?.activeIndex!==void 0&&Se?.activeIndex<st.length?Se?.activeIndex:st.length>0?0:-1,pt=st.map((Ue,Rt)=>Ae(Ae({resultIndex:Rt},Ue),{},{active:Rt===He}));return{items:pt,activeItem:pt[He],activeIndex:He}}(bt,r(w))),f(O,!1),B()})}))):(r(w)&&f(w,void 0),Promise.resolve())}),pe.apply(this,arguments)}function V(){i("handleClose"),z.cancel(),R.cancel(),Jt(!1,r(x),s()),j()()}Z(()=>r(w),()=>{var Q;f(n,((Q=r(w))===null||Q===void 0||(Q=Q.items)===null||Q===void 0?void 0:Q.length)||0)}),Z(()=>r(w),()=>{var Q;f(o,((Q=r(w))===null||Q===void 0?void 0:Q.activeIndex)||0)}),Z(()=>(r(n),Ad),()=>{f(a,r(n)>=Ad?"".concat(999,"+"):String(r(n)))}),Z(()=>(y(b()),r(w)),()=>{b()(r(w))}),Z(()=>y(u()),()=>{(function(Q){ue.apply(this,arguments)})(u())}),Z(()=>r(x),()=>{z(r(x))}),Z(()=>y(s()),()=>{R(s())}),jn(),At(!0);var he=Ut(),L=Xe(he),de=Q=>{var Ne=bS(),ne=N(Ne),B=N(ne),bt=ee=>{var oe=gS(),it=N(oe),et=Ze(()=>d()?Fa:Il);nn(it,{get data(){return r(et)}}),Ce("click",oe,Y),P(ee,oe)};ie(B,ee=>{v()||ee(bt)});var st=N(W(B,2)),Se=N(st),xt=N(Se),Fe=ee=>{nn(ee,{get data(){return u1},spin:!0})},He=ee=>{nn(ee,{get data(){return Uu}})};ie(xt,ee=>{r(O)?ee(Fe):ee(He,!1)});var pt=W(Se,2),Ue=N(pt);Kr(()=>mu(Ue,()=>r(x),ee=>f(x,ee))),io(Ue,ee=>De?.(ee)),Kr(()=>Ce("paste",Ue,J));var Rt,k=W(pt,2),S=N(k),T=W(k,2);nn(N(T),{get data(){return s1}});var I=W(T,2);nn(N(I),{get data(){return l1}});var re=W(I,2);nn(N(re),{get data(){return Du}});var ke=W(st,2),_e=ee=>{var oe=mS(),it=N(oe),et=W(it,2),We=W(et,2);mu(it,()=>r(A),Je=>f(A,Je)),Ce("keydown",it,K),Ce("click",et,ae),Ce("click",We,se),P(ee,oe)};ie(ke,ee=>{d()&&!v()&&ee(_e)}),ze(()=>{var ee;Rt=Mt(k,1,"jse-search-count svelte-1x1x8q0",null,Rt,{"jse-visible":r(x)!==""}),ut(S,"".concat(r(o)!==-1&&r(o)<r(n)?"".concat(r(o)+1,"/"):"").concat((ee=r(a))!==null&&ee!==void 0?ee:""))}),Ce("click",T,Le),Ce("click",I,Oe),Ce("click",re,V),Ce("keydown",ne,E),P(Q,Ne)};ie(L,Q=>{u()&&Q(de)}),P(e,he),ct()}var Zl=Symbol("path");function yS(e,t){var n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:1/0,o={};Array.isArray(e)&&function(i,s,l){if(i.length<s)i.forEach(l);else for(var c=s>1?(i.length-1)/(s-1):i.length,u=0;u<s;u++){var d=Math.floor(u*c);l(i[d],d,i)}}(e,n,i=>{mn(i)?K0(i,o,t):o[Zl]=!0});var a=[];return Zl in o&&a.push([]),Y0(o,[],a,t),a}function K0(e,t,n){for(var o in e){var a=e[o],i=t[o]||(t[o]={});mn(a)&&n?K0(a,i,n):i[Zl]===void 0&&(i[Zl]=!0)}}function Y0(e,t,n,o){for(var a in e){var i=t.concat(a),s=e[a];s&&s[Zl]===!0&&n.push(i),yr(s)&&o&&Y0(s,i,n,o)}}function jS(e,t,n,o,a,i){for(var s=arguments.length>6&&arguments[6]!==void 0?arguments[6]:80,l=vr(n)?n.length:0,c=function(C,A){var O=Object.values(C);if(un(O))return A;var w=(z,R)=>z+R;return O.reduce(w)/O.length}(o,a),u=e-s,d=t+2*s,v=C=>o[C]||a,p=0,b=i;b<u&&p<l;)b+=v(p),p++;p>0&&(b-=v(--p));for(var m=p,h=0;h<d&&m<l;)h+=v(m),m++;for(var j=0,x=m;x<l;x++)j+=v(x);return{startIndex:p,endIndex:m,startHeight:b,endHeight:j,averageItemHeight:c,visibleHeight:h,visibleItems:vr(n)?n.slice(p,m):[]}}function _h(e,t,n,o){for(var{rowIndex:a}=Mo(e,t),i=0,s=0;s<a;s++)i+=n[s]||o;return i}function Mo(e,t){var[n,...o]=e,a=parseInt(n,10);return{rowIndex:isNaN(a)?-1:a,columnIndex:t.findIndex(i=>ha(o,i))}}function $i(e,t){var{rowIndex:n,columnIndex:o}=e;return[String(n),...t[o]]}function xS(e,t){var[n,o]=Fy(e,s=>vf(s.path[0])),a=Cy(n,wS),i=jy(a,s=>{var l={row:[],columns:{}};return s.forEach(c=>{var u=function(d,v){var p=Mo(d.path,v);return p.columnIndex!==-1?p.columnIndex:-1}(c,t);u!==-1?(l.columns[u]===void 0&&(l.columns[u]=[]),l.columns[u].push(c)):l.row.push(c)}),l});return{root:o,rows:i}}function ys(e,t){if(t&&t.length!==0)return t.length===1?t[0]:{path:e,message:"Multiple validation issues: "+t.map(n=>Fr(n.path)+" "+n.message).join(", "),severity:Ko.warning}}function wS(e){return parseInt(e.path[0],10)}function kS(e,t,n){var o=t.some(a=>function(i,s,l){if(!i)return!1;if(s.op==="replace"){var c=fo(s.path),{rowIndex:u,columnIndex:d}=Mo(c,l),v=l.findIndex(p=>Lt(p,i.path));if(u!==-1&&d!==-1&&d!==v)return!1}return!0}(e,a,n));return o?void 0:e}var ao=Lr("jsoneditor:actions");function Q0(e){return Tv.apply(this,arguments)}function Tv(){return Tv=mt(function*(e){var{json:t,selection:n,indentation:o,readOnly:a,parser:i,onPatch:s}=e;if(!a&&t!==void 0&&n&&Ms(n)){var l=b0(t,n,o,i);if(l!==void 0){ao("cut",{selection:n,clipboard:l,indentation:o}),yield Rf(l);var{operations:c,newSelection:u}=C0(t,n);s(c,(d,v)=>({state:v,selection:u}))}}}),Tv.apply(this,arguments)}function G0(e){return zv.apply(this,arguments)}function zv(){return zv=mt(function*(e){var{json:t,selection:n,indentation:o,parser:a}=e,i=b0(t,n,o,a);i!==void 0&&(ao("copy",{clipboard:i,indentation:o}),yield Rf(i))}),zv.apply(this,arguments)}function X0(e){var{clipboardText:t,json:n,selection:o,readOnly:a,parser:i,onPatch:s,onChangeText:l,onPasteMultilineText:c,openRepairModal:u}=e;if(!a)try{d(t)}catch{u(t,p=>{ao("repaired pasted text: ",p),d(p)})}function d(v){if(n!==void 0){var p=o||Ht([]),b=k0(n,p,v,i),m=function(h,j,x){var C=arguments.length>3&&arguments[3]!==void 0?arguments[3]:Mw;if(h.length>C)return!1;var A=/\n/.test(h);if(!A)return!1;var O=j.some(z=>z.op==="replace"&&Array.isArray(z.value)),w=j.filter(z=>z.op==="add").length>1;if(!O&&!w)return!1;try{return vc(h,x.parse),!1}catch{return!0}}(t,b,i);ao("paste",{pastedText:v,operations:b,ensureSelection:p,pasteMultilineText:m}),s(b,(h,j)=>{var x=j;return b.filter(C=>(Sg(C)||Xv(C))&&ir(C.value)).forEach(C=>{var A=Jo(n,C.path);x=ns(h,x,A)}),{state:x}}),m&&c(v)}else ao("paste text",{pastedText:v}),l(t,(h,j)=>{if(h)return{state:ns(h,j,[])}})}}function Z0(e){var{json:t,text:n,selection:o,keepSelection:a,readOnly:i,onChange:s,onPatch:l}=e;if(!i&&o){var c=t!==void 0&&(qr(o)||cn(o))?oo(o.path,o.path):o;if(un(rt(o)))ao("remove root",{selection:o}),s&&s({text:"",json:void 0},t!==void 0?{text:void 0,json:t}:{text:n||"",json:t},{contentErrors:void 0,patchResult:void 0});else if(t!==void 0){var{operations:u,newSelection:d}=C0(t,c);ao("remove",{operations:u,selection:o,newSelection:d}),l(u,(v,p)=>({state:p,selection:a?o:d}))}}}function Ru(e){var{insertType:t,selectInside:n,initialValue:o,json:a,selection:i,readOnly:s,parser:l,onPatch:c,onReplaceJson:u}=e;if(!s){var d=function(h,j,x){if(x==="object")return{};if(x==="array")return[];if(x==="structure"&&h!==void 0){var C=j?g0(j):[],A=Ye(h,C);if(Array.isArray(A)&&!un(A)){var O=Ia(A);return ir(O)?Py(O,w=>Array.isArray(w)?[]:mn(w)?void 0:""):""}}return""}(a,i,t);if(a!==void 0){var v=l.stringify(d),p=k0(a,i,v,l);ao("onInsert",{insertType:t,operations:p,newValue:d,data:v});var b=Wt(p.filter(h=>h.op==="add"||h.op==="replace"));c(p,(h,j,x)=>{if(b){var C=Jo(h,b.path);if(ir(d))return{state:Lo(h,j,C,Ef),selection:n?Ka(C):x};if(d===""){var A=un(C)?void 0:Ye(h,tn(C));return{state:Lo(h,j,C,eu),selection:mn(A)?_f(C,o):ku(C,o)}}}}),ao("after patch")}else{ao("onInsert",{insertType:t,newValue:d});var m=[];u(d,(h,j)=>({state:ns(h,j,m),selection:ir(d)?Ka(m):ku(m)}))}}}function eb(e){return Rv.apply(this,arguments)}function Rv(){return Rv=mt(function*(e){var{char:t,selectInside:n,json:o,selection:a,readOnly:i,parser:s,onPatch:l,onReplaceJson:c,onSelect:u}=e;i||(qr(a)?u(Ae(Ae({},a),{},{edit:!0,initialValue:t})):t==="{"?Ru({insertType:"object",selectInside:n,initialValue:void 0,json:o,selection:a,readOnly:i,parser:s,onPatch:l,onReplaceJson:c}):t==="["?Ru({insertType:"array",selectInside:n,initialValue:void 0,json:o,selection:a,readOnly:i,parser:s,onPatch:l,onReplaceJson:c}):cn(a)&&o!==void 0?ir(Ye(o,a.path))||u(Ae(Ae({},a),{},{edit:!0,initialValue:t})):(ao("onInsertValueWithCharacter",{char:t}),yield function(d){return Pv.apply(this,arguments)}({char:t,json:o,selection:a,readOnly:i,parser:s,onPatch:l,onReplaceJson:c})))}),Rv.apply(this,arguments)}function Pv(){return Pv=mt(function*(e){var{char:t,json:n,selection:o,readOnly:a,parser:i,onPatch:s,onReplaceJson:l}=e;a||Ru({insertType:"value",selectInside:!1,initialValue:t,json:n,selection:o,readOnly:a,parser:i,onPatch:s,onReplaceJson:l})}),Pv.apply(this,arguments)}St(`/* over all fonts, sizes, and colors */
/* "consolas" for Windows, "menlo" for Mac with fallback to "monaco", 'Ubuntu Mono' for Ubuntu */
/* (at Mac this font looks too large at 14px, but 13px is too small for the font on Windows) */
/* main, menu, modal */
/* jsoneditor modal */
/* tooltip in text mode */
/* panels: navigation bar, gutter, search box */
/* navigation-bar */
/* context menu */
/* contents: json key and values */
/* contents: selected or hovered */
/* contents: section of collapsed items in an array */
/* contents: highlighting of search matches */
/* contents: inline tags inside the JSON document */
/* contents: table */
/* controls in modals: inputs, buttons, and \`a\` */
/* messages */
/* svelte-select */
/* color picker */
.jse-json-preview.svelte-25xmyd {
  flex: 1;
  font-family: var(--jse-font-family-mono, consolas, menlo, monaco, "Ubuntu Mono", "source-code-pro", monospace);
  font-size: var(--jse-font-size-mono, 14px);
  color: var(--jse-panel-color-readonly, #b2b2b2);
  overflow: auto;
  white-space: pre-wrap;
  padding: 2px;
  border-left: var(--jse-main-border, 1px solid #d7d7d7);
  border-right: var(--jse-main-border, 1px solid #d7d7d7);
  border-bottom: var(--jse-main-border, 1px solid #d7d7d7);
}`);var CS=te('<div class="jse-json-preview svelte-25xmyd"> </div>');function tb(e,t){lt(t,!1);var n=$(),o=$(),a=g(t,"text",8),i=g(t,"json",8),s=g(t,"indentation",8),l=g(t,"parser",8);Z(()=>(y(i()),y(a())),()=>{f(n,i()!==void 0?{json:i()}:{text:a()||""})}),Z(()=>(r(n),y(s()),y(l()),yu),()=>{f(o,Ra(hv(r(n),s(),l()),yu))}),jn(),At();var c=CS(),u=N(c);ze(()=>ut(u,r(o))),P(e,c),ct()}St(`/* over all fonts, sizes, and colors */
/* "consolas" for Windows, "menlo" for Mac with fallback to "monaco", 'Ubuntu Mono' for Ubuntu */
/* (at Mac this font looks too large at 14px, but 13px is too small for the font on Windows) */
/* main, menu, modal */
/* jsoneditor modal */
/* tooltip in text mode */
/* panels: navigation bar, gutter, search box */
/* navigation-bar */
/* context menu */
/* contents: json key and values */
/* contents: selected or hovered */
/* contents: section of collapsed items in an array */
/* contents: highlighting of search matches */
/* contents: inline tags inside the JSON document */
/* contents: table */
/* controls in modals: inputs, buttons, and \`a\` */
/* messages */
/* svelte-select */
/* color picker */
button.jse-context-menu-button.svelte-16jz6ui {
  border: none;
  background: transparent;
  color: inherit;
  cursor: pointer;
  font-family: var(--jse-font-family, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen-Sans, Ubuntu, Cantarell, "Helvetica Neue", sans-serif);
  font-size: var(--jse-font-size, 16px);
  padding: 5px;
  margin: 0;
  flex: 1;
  white-space: nowrap;
  padding: var(--jse-padding, 10px);
  color: inherit;
}
button.jse-context-menu-button.svelte-16jz6ui:hover {
  background: var(--jse-context-menu-background-highlight, #7a7a7a);
}
button.jse-context-menu-button.svelte-16jz6ui:focus {
  background: var(--jse-context-menu-background-highlight, #7a7a7a);
  z-index: 1;
}
button.jse-context-menu-button.svelte-16jz6ui:disabled {
  color: var(--jse-context-menu-color-disabled, #9d9d9d);
  background: unset;
}
button.jse-context-menu-button.left.svelte-16jz6ui {
  text-align: left;
}
button.jse-context-menu-button.svelte-16jz6ui svg {
  width: 16px;
}`);var SS=te('<button type="button"><!> <!></button>');function Fd(e,t){lt(t,!1);var n=g(t,"item",8),o=g(t,"className",8,void 0),a=g(t,"onRequestClose",8);At();var i=SS(),s=N(i),l=d=>{nn(d,{get data(){return y(n()),D(()=>n().icon)}})};ie(s,d=>{y(n()),D(()=>n().icon)&&d(l)});var c=W(s,2),u=d=>{var v=Wr();ze(()=>ut(v,(y(n()),D(()=>n().text)))),P(d,v)};ie(c,d=>{y(n()),D(()=>n().text)&&d(u)}),ze(d=>{Mt(i,1,d,"svelte-16jz6ui"),yn(i,"title",(y(n()),D(()=>n().title))),i.disabled=(y(n()),D(()=>n().disabled||!1))},[()=>Ci((y(ta),y(o()),y(n()),D(()=>ta("jse-context-menu-button",o(),n().className))))]),Ce("click",i,d=>{a()(),n().onClick(d)}),P(e,i),ct()}St(`/* over all fonts, sizes, and colors */
/* "consolas" for Windows, "menlo" for Mac with fallback to "monaco", 'Ubuntu Mono' for Ubuntu */
/* (at Mac this font looks too large at 14px, but 13px is too small for the font on Windows) */
/* main, menu, modal */
/* jsoneditor modal */
/* tooltip in text mode */
/* panels: navigation bar, gutter, search box */
/* navigation-bar */
/* context menu */
/* contents: json key and values */
/* contents: selected or hovered */
/* contents: section of collapsed items in an array */
/* contents: highlighting of search matches */
/* contents: inline tags inside the JSON document */
/* contents: table */
/* controls in modals: inputs, buttons, and \`a\` */
/* messages */
/* svelte-select */
/* color picker */
.jse-dropdown-button.svelte-bov1j6 {
  flex: 1;
  line-height: normal;
  border: none;
  background: transparent;
  color: inherit;
  cursor: pointer;
  font-family: var(--jse-font-family, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen-Sans, Ubuntu, Cantarell, "Helvetica Neue", sans-serif);
  font-size: var(--jse-font-size, 16px);
  padding: 5px;
  margin: 0;
  position: relative;
  padding: 0;
  display: flex;
}
.jse-dropdown-button.svelte-bov1j6 ul:where(.svelte-bov1j6) {
  margin: 0;
  padding: 0;
}
.jse-dropdown-button.svelte-bov1j6 ul:where(.svelte-bov1j6) li:where(.svelte-bov1j6) {
  margin: 0;
  padding: 0;
  list-style-type: none;
}
.jse-dropdown-button.svelte-bov1j6 button.jse-open-dropdown:where(.svelte-bov1j6) {
  border: none;
  background: transparent;
  color: inherit;
  cursor: pointer;
  font-family: var(--jse-font-family, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen-Sans, Ubuntu, Cantarell, "Helvetica Neue", sans-serif);
  font-size: var(--jse-font-size, 16px);
  padding: 5px;
  margin: 0;
  width: 2em;
  background: var(--jse-context-menu-background, #656565);
  color: var(--jse-context-menu-color, var(--jse-text-color-inverse, #fff));
  border-radius: 0;
}
.jse-dropdown-button.svelte-bov1j6 button.jse-open-dropdown.jse-visible:where(.svelte-bov1j6) {
  background: var(--jse-context-menu-background, #656565);
}
.jse-dropdown-button.svelte-bov1j6 button.jse-open-dropdown:where(.svelte-bov1j6):hover {
  background: var(--jse-context-menu-background-highlight, #7a7a7a);
}
.jse-dropdown-button.svelte-bov1j6 button.jse-open-dropdown:where(.svelte-bov1j6):focus {
  z-index: 1;
}
.jse-dropdown-button.svelte-bov1j6 button.jse-open-dropdown:where(.svelte-bov1j6):disabled {
  color: var(--jse-context-menu-color-disabled, #9d9d9d);
  background: unset;
}
.jse-dropdown-button.svelte-bov1j6 .jse-dropdown-items:where(.svelte-bov1j6) {
  display: none;
  position: absolute;
  top: 100%;
  left: 0;
  z-index: 1;
  background: var(--jse-context-menu-background, #656565);
  color: var(--jse-context-menu-color, var(--jse-text-color-inverse, #fff));
  box-shadow: var(--jse-controls-box-shadow, 0 2px 6px 0 rgba(0, 0, 0, 0.24));
}
.jse-dropdown-button.svelte-bov1j6 .jse-dropdown-items.jse-visible:where(.svelte-bov1j6) {
  display: block;
}
.jse-dropdown-button.svelte-bov1j6 .jse-dropdown-items:where(.svelte-bov1j6) button:where(.svelte-bov1j6) {
  border: none;
  background: transparent;
  color: inherit;
  cursor: pointer;
  font-family: var(--jse-font-family, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen-Sans, Ubuntu, Cantarell, "Helvetica Neue", sans-serif);
  font-size: var(--jse-font-size, 16px);
  padding: 5px;
  margin: 0;
  width: 100%;
  text-align: left;
  padding: var(--jse-padding, 10px);
  margin: 0;
}
.jse-dropdown-button.svelte-bov1j6 .jse-dropdown-items:where(.svelte-bov1j6) button:where(.svelte-bov1j6):hover {
  background: var(--jse-context-menu-background-highlight, #7a7a7a);
}
.jse-dropdown-button.svelte-bov1j6 .jse-dropdown-items:where(.svelte-bov1j6) button:where(.svelte-bov1j6):disabled {
  color: var(--jse-context-menu-color-disabled, #9d9d9d);
  background: unset;
}`);var OS=te('<li class="svelte-bov1j6"><button type="button"><!> </button></li>'),ES=te('<div role="button" tabindex="0" class="jse-dropdown-button svelte-bov1j6"><!> <button type="button" data-type="jse-open-dropdown"><!></button> <div><ul class="svelte-bov1j6"></ul></div></div>');St(`/* over all fonts, sizes, and colors */
/* "consolas" for Windows, "menlo" for Mac with fallback to "monaco", 'Ubuntu Mono' for Ubuntu */
/* (at Mac this font looks too large at 14px, but 13px is too small for the font on Windows) */
/* main, menu, modal */
/* jsoneditor modal */
/* tooltip in text mode */
/* panels: navigation bar, gutter, search box */
/* navigation-bar */
/* context menu */
/* contents: json key and values */
/* contents: selected or hovered */
/* contents: section of collapsed items in an array */
/* contents: highlighting of search matches */
/* contents: inline tags inside the JSON document */
/* contents: table */
/* controls in modals: inputs, buttons, and \`a\` */
/* messages */
/* svelte-select */
/* color picker */
button.jse-context-menu-button.svelte-1y5l9l1 {
  border: none;
  background: transparent;
  color: inherit;
  cursor: pointer;
  font-family: var(--jse-font-family, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen-Sans, Ubuntu, Cantarell, "Helvetica Neue", sans-serif);
  font-size: var(--jse-font-size, 16px);
  padding: 5px;
  margin: 0;
  flex: 1;
  white-space: nowrap;
  padding: var(--jse-padding, 10px);
  color: inherit;
}
button.jse-context-menu-button.svelte-1y5l9l1:hover {
  background: var(--jse-context-menu-background-highlight, #7a7a7a);
}
button.jse-context-menu-button.svelte-1y5l9l1:focus {
  background: var(--jse-context-menu-background-highlight, #7a7a7a);
  z-index: 1;
}
button.jse-context-menu-button.svelte-1y5l9l1:disabled {
  color: var(--jse-context-menu-color-disabled, #9d9d9d);
  background: unset;
}
button.jse-context-menu-button.left.svelte-1y5l9l1 {
  text-align: left;
}
button.jse-context-menu-button.svelte-1y5l9l1 svg {
  width: 16px;
}`);var _S=te('<button type="button" slot="defaultItem"><!> </button>');function Wd(e,t){lt(t,!1);var n=$(),o=g(t,"item",8),a=g(t,"className",8,void 0),i=g(t,"onRequestClose",8);Z(()=>(y(o()),y(i())),()=>{f(n,o().items.map(s=>Ae(Ae({},s),{},{onClick:l=>{i()(),s.onClick(l)}})))}),jn(),At(),function(s,l){lt(l,!1);var c=$(void 0,!0),u=g(l,"items",25,()=>[]),d=g(l,"title",9,void 0),v=g(l,"width",9,"120px"),p=$(!1,!0);function b(){f(p,!1)}function m(w){Ha(w)==="Escape"&&(w.preventDefault(),f(p,!1))}no(()=>{document.addEventListener("click",b),document.addEventListener("keydown",m)}),Io(()=>{document.removeEventListener("click",b),document.removeEventListener("keydown",m)}),Z(()=>y(u()),()=>{f(c,u().every(w=>w.disabled===!0))}),jn(),At(!0);var h=ES(),j=N(h);dr(j,l,"defaultItem",{},null);var x,C=W(j,2);nn(N(C),{get data(){return Fa}});var A,O=W(C,2);fr(N(O),5,u,Cr,(w,z)=>{var R=OS(),Y=N(R),E=N(Y),K=U=>{nn(U,{get data(){return r(z),D(()=>r(z).icon)}})};ie(E,U=>{r(z),D(()=>r(z).icon)&&U(K)});var J=W(E);ze(()=>{var U;yn(Y,"title",(r(z),D(()=>r(z).title))),Y.disabled=(r(z),D(()=>r(z).disabled)),Mt(Y,1,Ci((r(z),D(()=>r(z).className))),"svelte-bov1j6"),ut(J," ".concat((r(z),(U=D(()=>r(z).text))!==null&&U!==void 0?U:"")))}),Ce("click",Y,U=>r(z).onClick(U)),P(w,R)}),ze(()=>{var w;yn(h,"title",d()),x=Mt(C,1,"jse-open-dropdown svelte-bov1j6",null,x,{"jse-visible":r(p)}),C.disabled=r(c),A=Mt(O,1,"jse-dropdown-items svelte-bov1j6",null,A,{"jse-visible":r(p)}),No(O,"width: ".concat((w=v())!==null&&w!==void 0?w:"",";"))}),Ce("click",C,function(){var w=r(p);setTimeout(()=>f(p,!w))}),Ce("click",h,b),P(s,h),ct()}(e,{get width(){return y(o()),D(()=>o().width)},get items(){return r(n)},$$slots:{defaultItem:(s,l)=>{var c=_S(),u=N(c),d=p=>{nn(p,{get data(){return y(o()),D(()=>o().main.icon)}})};ie(u,p=>{y(o()),D(()=>o().main.icon)&&p(d)});var v=W(u);ze(p=>{var b;Mt(c,1,p,"svelte-1y5l9l1"),yn(c,"title",(y(o()),D(()=>o().main.title))),c.disabled=(y(o()),D(()=>o().main.disabled||!1)),ut(v," ".concat((y(o()),(b=D(()=>o().main.text))!==null&&b!==void 0?b:"")))},[()=>Ci((y(ta),y(a()),y(o()),D(()=>ta("jse-context-menu-button",a(),o().main.className))))]),Ce("click",c,p=>{i()(),o().main.onClick(p)}),P(s,c)}}}),ct()}St(`/* over all fonts, sizes, and colors */
/* "consolas" for Windows, "menlo" for Mac with fallback to "monaco", 'Ubuntu Mono' for Ubuntu */
/* (at Mac this font looks too large at 14px, but 13px is too small for the font on Windows) */
/* main, menu, modal */
/* jsoneditor modal */
/* tooltip in text mode */
/* panels: navigation bar, gutter, search box */
/* navigation-bar */
/* context menu */
/* contents: json key and values */
/* contents: selected or hovered */
/* contents: section of collapsed items in an array */
/* contents: highlighting of search matches */
/* contents: inline tags inside the JSON document */
/* contents: table */
/* controls in modals: inputs, buttons, and \`a\` */
/* messages */
/* svelte-select */
/* color picker */
.jse-contextmenu.svelte-1shjn02 {
  box-shadow: var(--jse-controls-box-shadow, 0 2px 6px 0 rgba(0, 0, 0, 0.24));
  font-family: var(--jse-font-family, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen-Sans, Ubuntu, Cantarell, "Helvetica Neue", sans-serif);
  font-size: var(--jse-font-size, 16px);
  background: var(--jse-context-menu-background, #656565);
  color: var(--jse-context-menu-color, var(--jse-text-color-inverse, #fff));
}
.jse-contextmenu.svelte-1shjn02 .jse-row:where(.svelte-1shjn02) {
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: stretch;
}
.jse-contextmenu.svelte-1shjn02 .jse-row:where(.svelte-1shjn02) div.jse-label:where(.svelte-1shjn02) {
  flex: 1;
  white-space: nowrap;
  padding: var(--jse-padding, 10px);
  color: var(--jse-context-menu-color-disabled, #9d9d9d);
  line-height: normal;
}
.jse-contextmenu.svelte-1shjn02 .jse-row:where(.svelte-1shjn02) div.jse-tip:where(.svelte-1shjn02) {
  flex: 1;
  background: var(--jse-context-menu-tip-background, rgba(255, 255, 255, 0.2));
  color: var(--context-menu-tip-color, inherit);
  margin: calc(0.5 * var(--jse-padding, 10px));
  padding: calc(0.5 * var(--jse-padding, 10px)) var(--jse-padding, 10px);
  font-size: 80%;
  line-height: 1.3em;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  gap: var(--jse-padding, 10px);
  border-radius: 3px;
}
.jse-contextmenu.svelte-1shjn02 .jse-row:where(.svelte-1shjn02) div.jse-tip:where(.svelte-1shjn02) div.jse-tip-icon:where(.svelte-1shjn02) {
  padding-top: calc(0.5 * var(--jse-padding, 10px));
}
.jse-contextmenu.svelte-1shjn02 .jse-column:where(.svelte-1shjn02) {
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: stretch;
}
.jse-contextmenu.svelte-1shjn02 .jse-column:where(.svelte-1shjn02):not(:last-child) {
  border-right: 1px solid var(--jse-context-menu-separator-color, #7a7a7a);
}
.jse-contextmenu.svelte-1shjn02 .jse-separator:where(.svelte-1shjn02) {
  width: 100%;
  height: 1px;
  background: var(--jse-context-menu-separator-color, #7a7a7a);
}`);var MS=te('<div class="jse-separator svelte-1shjn02"></div>'),AS=te('<div class="jse-label svelte-1shjn02"> </div>'),TS=te('<div class="jse-column svelte-1shjn02"></div>'),zS=te('<div class="jse-separator svelte-1shjn02"></div>'),RS=te('<div class="jse-row svelte-1shjn02"></div>'),PS=te('<div class="jse-separator svelte-1shjn02"></div>'),NS=te('<div class="jse-row svelte-1shjn02"><div class="jse-tip svelte-1shjn02"><div class="jse-tip-icon svelte-1shjn02"><!></div> <div class="jse-tip-text"> </div></div></div>'),$S=te('<div role="menu" tabindex="-1" class="jse-contextmenu svelte-1shjn02"><!> <!></div>');function nb(e,t){lt(t,!1);var n=g(t,"items",9),o=g(t,"onRequestClose",9),a=g(t,"tip",9),i=$(void 0,!0);no(()=>{var p=Array.from(r(i).querySelectorAll("button")).find(b=>!b.disabled);p&&p.focus()});var s={ArrowUp:"Up",ArrowDown:"Down",ArrowLeft:"Left",ArrowRight:"Right"};function l(p){return console.error("Unknown type of context menu item",p),"???"}At(!0);var c=$S(),u=N(c);fr(u,1,n,Cr,(p,b)=>{var m=Ut(),h=Xe(m),j=C=>{Fd(C,{get item(){return r(b)},get onRequestClose(){return o()}})},x=C=>{var A=Ut(),O=Xe(A),w=R=>{Wd(R,{get item(){return r(b)},get onRequestClose(){return o()}})},z=R=>{var Y=Ut(),E=Xe(Y),K=U=>{var ae=RS();fr(ae,5,()=>(r(b),D(()=>r(b).items)),Cr,(ge,se)=>{var Te=Ut(),De=Xe(Te),Le=Oe=>{Fd(Oe,{get item(){return r(se)},get onRequestClose(){return o()}})},je=Oe=>{var Pe=Ut(),ot=Xe(Pe),xe=we=>{Wd(we,{get item(){return r(se)},get onRequestClose(){return o()}})},ue=we=>{var ft=Ut(),Jt=Xe(ft),pe=he=>{var L=TS();fr(L,5,()=>(r(se),D(()=>r(se).items)),Cr,(de,Q)=>{var Ne=Ut(),ne=Xe(Ne),B=st=>{Fd(st,{className:"left",get item(){return r(Q)},get onRequestClose(){return o()}})},bt=st=>{var Se=Ut(),xt=Xe(Se),Fe=pt=>{Wd(pt,{className:"left",get item(){return r(Q)},get onRequestClose(){return o()}})},He=pt=>{var Ue=Ut(),Rt=Xe(Ue),k=T=>{P(T,MS())},S=T=>{var I=Ut(),re=Xe(I),ke=ee=>{var oe=AS(),it=N(oe);ze(()=>ut(it,(r(Q),D(()=>r(Q).text)))),P(ee,oe)},_e=ee=>{var oe=Wr();ze(it=>ut(oe,it),[()=>(r(Q),D(()=>l(r(Q))))]),P(ee,oe)};ie(re,ee=>{y(Jp),r(Q),D(()=>Jp(r(Q)))?ee(ke):ee(_e,!1)},!0),P(T,I)};ie(Rt,T=>{y(ii),r(Q),D(()=>ii(r(Q)))?T(k):T(S,!1)},!0),P(pt,Ue)};ie(xt,pt=>{y(ms),r(Q),D(()=>ms(r(Q)))?pt(Fe):pt(He,!1)},!0),P(st,Se)};ie(ne,st=>{y(Ta),r(Q),D(()=>Ta(r(Q)))?st(B):st(bt,!1)}),P(de,Ne)}),P(he,L)},V=he=>{var L=Ut(),de=Xe(L),Q=ne=>{P(ne,zS())},Ne=ne=>{var B=Wr();ze(bt=>ut(B,bt),[()=>(r(se),D(()=>l(r(se))))]),P(ne,B)};ie(de,ne=>{y(ii),r(se),D(()=>ii(r(se)))?ne(Q):ne(Ne,!1)},!0),P(he,L)};ie(Jt,he=>{y(Yp),r(se),D(()=>Yp(r(se)))?he(pe):he(V,!1)},!0),P(we,ft)};ie(ot,we=>{y(ms),r(se),D(()=>ms(r(se)))?we(xe):we(ue,!1)},!0),P(Oe,Pe)};ie(De,Oe=>{y(Ta),r(se),D(()=>Ta(r(se)))?Oe(Le):Oe(je,!1)}),P(ge,Te)}),P(U,ae)},J=U=>{var ae=Ut(),ge=Xe(ae),se=De=>{P(De,PS())},Te=De=>{var Le=Wr();ze(je=>ut(Le,je),[()=>(r(b),D(()=>l(r(b))))]),P(De,Le)};ie(ge,De=>{y(ii),r(b),D(()=>ii(r(b)))?De(se):De(Te,!1)},!0),P(U,ae)};ie(E,U=>{y(Kp),r(b),D(()=>Kp(r(b)))?U(K):U(J,!1)},!0),P(R,Y)};ie(O,R=>{y(ms),r(b),D(()=>ms(r(b)))?R(w):R(z,!1)},!0),P(C,A)};ie(h,C=>{y(Ta),r(b),D(()=>Ta(r(b)))?C(j):C(x,!1)}),P(p,m)});var d=W(u,2),v=p=>{var b=NS(),m=N(b),h=N(m);nn(N(h),{get data(){return bj}});var j=N(W(h,2));ze(()=>ut(j,a())),P(p,b)};ie(d,p=>{a()&&p(v)}),Qn(c,p=>f(i,p),()=>r(i)),Ce("keydown",c,function(p){var b=Ha(p),m=s[b];if(m&&p.target){p.preventDefault();var h=lw({allElements:Array.from(r(i).querySelectorAll("button:not([disabled])")),currentElement:p.target,direction:m,hasPrio:j=>j.getAttribute("data-type")!=="jse-open-dropdown"});h&&h.focus()}}),P(e,c),ct()}St(`/* over all fonts, sizes, and colors */
/* "consolas" for Windows, "menlo" for Mac with fallback to "monaco", 'Ubuntu Mono' for Ubuntu */
/* (at Mac this font looks too large at 14px, but 13px is too small for the font on Windows) */
/* main, menu, modal */
/* jsoneditor modal */
/* tooltip in text mode */
/* panels: navigation bar, gutter, search box */
/* navigation-bar */
/* context menu */
/* contents: json key and values */
/* contents: selected or hovered */
/* contents: section of collapsed items in an array */
/* contents: highlighting of search matches */
/* contents: inline tags inside the JSON document */
/* contents: table */
/* controls in modals: inputs, buttons, and \`a\` */
/* messages */
/* svelte-select */
/* color picker */
.jse-value.jse-string.svelte-1htmvf1 {
  color: var(--jse-value-color-string, #008000);
}
.jse-value.jse-object.svelte-1htmvf1, .jse-value.jse-array.svelte-1htmvf1 {
  min-width: 16px;
  color: var(--jse-delimiter-color, rgba(0, 0, 0, 0.38));
}
.jse-value.jse-number.svelte-1htmvf1 {
  color: var(--jse-value-color-number, #ee422e);
}
.jse-value.jse-boolean.svelte-1htmvf1 {
  color: var(--jse-value-color-boolean, #ff8c00);
}
.jse-value.jse-null.svelte-1htmvf1 {
  color: var(--jse-value-color-null, #004ed0);
}
.jse-value.jse-invalid.svelte-1htmvf1 {
  color: var(--jse-text-color, #4d4d4d);
}
.jse-value.jse-url.svelte-1htmvf1 {
  color: var(--jse-value-color-url, #008000);
  text-decoration: underline;
}

.jse-enum-value.svelte-1htmvf1 {
  background: var(--jse-hover-background-color, rgba(0, 0, 0, 0.06));
  border: none;
  padding: 0;
  font-family: inherit;
  font-size: inherit;
  cursor: pointer;
  outline: none;
}
.jse-enum-value.jse-selected.svelte-1htmvf1 {
  background: var(--jse-selection-background-color, #d3d3d3);
  color: inherit;
}
.jse-enum-value.jse-value.svelte-1htmvf1:focus {
  color: var(--jse-text-color, #4d4d4d);
}`);te("<option> </option>");te("<select></select>");var Bc,Fc;function Wc(e,t){return Bc||(Fc=new WeakMap,Bc=new ResizeObserver(n=>{for(var o of n){var a=Fc.get(o.target);a&&a(o.target)}})),Fc.set(e,t),Bc.observe(e),{destroy:()=>{Fc.delete(e),Bc.unobserve(e)}}}St(`/* over all fonts, sizes, and colors */
/* "consolas" for Windows, "menlo" for Mac with fallback to "monaco", 'Ubuntu Mono' for Ubuntu */
/* (at Mac this font looks too large at 14px, but 13px is too small for the font on Windows) */
/* main, menu, modal */
/* jsoneditor modal */
/* tooltip in text mode */
/* panels: navigation bar, gutter, search box */
/* navigation-bar */
/* context menu */
/* contents: json key and values */
/* contents: selected or hovered */
/* contents: section of collapsed items in an array */
/* contents: highlighting of search matches */
/* contents: inline tags inside the JSON document */
/* contents: table */
/* controls in modals: inputs, buttons, and \`a\` */
/* messages */
/* svelte-select */
/* color picker */
.jse-tree-mode.svelte-10mlrw4 {
  flex: 1;
  display: flex;
  flex-direction: column;
  position: relative;
  background: var(--jse-background-color, #fff);
  min-width: 0;
  min-height: 0;
  font-family: var(--jse-font-family-mono, consolas, menlo, monaco, "Ubuntu Mono", "source-code-pro", monospace);
  font-size: var(--jse-font-size-mono, 14px);
  color: var(--jse-text-color, #4d4d4d);
  line-height: var(--jse-line-height, calc(1em + 4px));
}
.jse-tree-mode.svelte-10mlrw4 .jse-hidden-input-label:where(.svelte-10mlrw4) .jse-hidden-input:where(.svelte-10mlrw4) {
  position: fixed;
  top: -10px;
  left: -10px;
  width: 1px;
  height: 1px;
  padding: 0;
  border: 0;
  outline: none;
}
.jse-tree-mode.no-main-menu.svelte-10mlrw4 {
  border-top: var(--jse-main-border, 1px solid #d7d7d7);
}
.jse-tree-mode.svelte-10mlrw4 .jse-search-box-container:where(.svelte-10mlrw4) {
  position: relative;
  height: 0;
  top: var(--jse-padding, 10px);
  margin-right: calc(var(--jse-padding, 10px) + 20px);
  margin-left: var(--jse-padding, 10px);
  text-align: right;
  z-index: 3;
}
.jse-tree-mode.svelte-10mlrw4 .jse-contents:where(.svelte-10mlrw4) {
  flex: 1;
  overflow: auto;
  position: relative;
  padding: 2px;
  display: flex;
  flex-direction: column;
  border-left: var(--jse-main-border, 1px solid #d7d7d7);
  border-right: var(--jse-main-border, 1px solid #d7d7d7);
}
.jse-tree-mode.svelte-10mlrw4 .jse-contents:where(.svelte-10mlrw4):last-child {
  border-bottom: var(--jse-main-border, 1px solid #d7d7d7);
}
.jse-tree-mode.svelte-10mlrw4 .jse-contents:where(.svelte-10mlrw4) .jse-loading-space:where(.svelte-10mlrw4) {
  flex: 1;
}
.jse-tree-mode.svelte-10mlrw4 .jse-contents:where(.svelte-10mlrw4) .jse-loading:where(.svelte-10mlrw4) {
  flex: 2;
  text-align: center;
  color: var(--jse-panel-color-readonly, #b2b2b2);
  box-sizing: border-box;
  font-family: var(--jse-font-family, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen-Sans, Ubuntu, Cantarell, "Helvetica Neue", sans-serif);
  font-size: var(--jse-font-size, 16px);
}
.jse-tree-mode.svelte-10mlrw4 .jse-contents:where(.svelte-10mlrw4) .jse-search-box-background:where(.svelte-10mlrw4) {
  border: 50px solid var(--jse-modal-background, #f5f5f5);
  margin: -2px;
  margin-bottom: 2px;
  display: inline-block;
}`);var IS=te("<!> <!>",1),qS=te('<div class="jse-search-box-background svelte-10mlrw4"></div>'),DS=te('<div class="jse-search-box-container svelte-10mlrw4"><!></div> <div class="jse-contents svelte-10mlrw4"><!> <!></div> <!> <!> <!> <!>',1),US=te('<label class="jse-hidden-input-label svelte-10mlrw4"><input type="text" tabindex="-1" class="jse-hidden-input svelte-10mlrw4"/></label> <!>',1),LS=te('<div class="jse-contents svelte-10mlrw4"><div class="jse-loading-space svelte-10mlrw4"></div> <div class="jse-loading svelte-10mlrw4">loading...</div></div>'),BS=te('<div role="tree" tabindex="-1"><!> <!> <!></div> <!> <!>',1);function Nv(e,t){lt(t,!1);var n=$(void 0,!0),o=Lr("jsoneditor:TreeMode"),a=typeof window>"u";o("isSSR:",a);var i=Bs(),s=Bs(),{openAbsolutePopup:l,closeAbsolutePopup:c}=Ei("absolute-popup"),u=$(void 0,!0),d=$(void 0,!0),v=$(void 0,!0),p=!1,b=D0(),m=g(t,"readOnly",9),h=g(t,"externalContent",9),j=g(t,"externalSelection",9),x=g(t,"history",9),C=g(t,"truncateTextSize",9),A=g(t,"mainMenuBar",9),O=g(t,"navigationBar",9),w=g(t,"escapeControlCharacters",9),z=g(t,"escapeUnicodeCharacters",9),R=g(t,"parser",9),Y=g(t,"parseMemoizeOne",9),E=g(t,"validator",9),K=g(t,"validationParser",9),J=g(t,"pathParser",9),U=g(t,"indentation",9),ae=g(t,"onError",9),ge=g(t,"onChange",9),se=g(t,"onChangeMode",9),Te=g(t,"onSelect",9),De=g(t,"onUndo",9),Le=g(t,"onRedo",9),je=g(t,"onRenderValue",9),Oe=g(t,"onRenderMenu",9),Pe=g(t,"onRenderContextMenu",9),ot=g(t,"onClassName",9),xe=g(t,"onFocus",9),ue=g(t,"onBlur",9),we=g(t,"onSortModal",9),ft=g(t,"onTransformModal",9),Jt=g(t,"onJSONEditorModal",9),pe=!1,V=$(!1,!0),he=$(void 0,!0);Tf({onMount:no,onDestroy:Io,getWindow:()=>fc(r(v)),hasFocus:()=>pe&&document.hasFocus()||gf(r(v)),onFocus:()=>{p=!0,xe()&&xe()()},onBlur:()=>{p=!1,ue()&&ue()()}});var L=$(void 0,!0),de=$(void 0,!0),Q=void 0,Ne=!1,ne=$(yv({json:r(L)}),!0),B=$(Kl(j())?j():void 0,!0);function bt(_){f(B,_)}no(()=>{if(r(B)){var _=rt(r(B));f(ne,Lo(r(L),r(ne),_,eu)),setTimeout(()=>tr(_))}});var st,Se=$(void 0,!0),xt=$(void 0,!0),Fe=$(void 0,!0),He=$(void 0,!0),pt=$(!1,!0),Ue=$(!1,!0);function Rt(_){f(He,(st=_)?O0(r(L),st.items):void 0)}function k(_,F){return S.apply(this,arguments)}function S(){return(S=mt(function*(_,F){f(ne,Lo(r(L),r(ne),_,eu));var fe=gr(F);yield Qt(_,{element:fe})})).apply(this,arguments)}function T(){f(pt,!1),f(Ue,!1),wt()}function I(_){o("select validation error",_),f(B,Ht(_.path)),Qt(_.path)}function re(_){var F=arguments.length>1&&arguments[1]!==void 0?arguments[1]:jv;o("expand"),f(ne,Lo(r(L),r(ne),_,F))}function ke(_,F){f(ne,Zp(r(L),r(ne),_,F)),r(B)&&function(fe,Be){return ha(rt(fe),Be)&&(rt(fe).length>Be.length||zr(fe))}(r(B),_)&&f(B,void 0)}var _e=$(!1,!0),ee=$([],!0),oe=$(void 0,!0),it=ql(U0);function et(_,F,fe,Be){Ts(()=>{var $e;try{$e=it(_,F,fe,Be)}catch(Re){$e=[{path:[],message:"Failed to validate: "+Re.message,severity:Ko.warning}]}Lt($e,r(ee))||(o("validationErrors changed:",$e),f(ee,$e),f(oe,function(Re,kt){var Ct;return kt.forEach(Ft=>{Ct=Sh(Re,Ct,Ft.path,(kn,en)=>Ae(Ae({},en),{},{validationError:Ft}))}),kt.forEach(Ft=>{for(var kn=Ft.path;kn.length>0;)kn=tn(kn),Ct=Sh(Re,Ct,kn,(en,Ln)=>Ln.validationError?Ln:Ae(Ae({},Ln),{},{validationError:{isChildError:!0,path:kn,message:"Contains invalid data",severity:Ko.warning}}))}),Ct}(_,r(ee))))},$e=>o("validationErrors updated in ".concat($e," ms")))}function We(){return o("validate"),Q?{parseError:Q,isRepairable:!1}:(et(r(L),E(),R(),K()),un(r(ee))?void 0:{validationErrors:r(ee)})}function Je(){return r(L)}function Nt(){return r(ne)}function xn(){return r(B)}function Sn(_){o("applyExternalContent",{updatedContent:_}),Wl(_)?function(F){if(F!==void 0){var fe=!Lt(r(L),F);if(o("update external json",{isChanged:fe,currentlyText:r(L)===void 0}),!!fe){var Be={documentState:r(ne),selection:r(B),json:r(L),text:r(de),textIsRepaired:r(_e)};f(L,F),f(ne,xo(F,r(ne))),$t(r(L)),f(de,void 0),f(_e,!1),Q=void 0,dn(r(L)),Bt(Be)}}}(_.json):Fl(_)&&function(F){if(!(F===void 0||Wl(h()))){var fe=F!==r(de);if(o("update external text",{isChanged:fe}),!!fe){var Be={documentState:r(ne),selection:r(B),json:r(L),text:r(de),textIsRepaired:r(_e)};try{f(L,Y()(F)),f(ne,xo(r(L),r(ne))),$t(r(L)),f(de,F),f(_e,!1),Q=void 0}catch($e){try{f(L,Y()(Vo(F))),f(ne,xo(r(L),r(ne))),$t(r(L)),f(de,F),f(_e,!0),Q=void 0,dn(r(L))}catch{f(L,void 0),f(ne,void 0),f(de,h().text),f(_e,!1),Q=r(de)!==void 0&&r(de)!==""?Ys(r(de),$e.message||String($e)):void 0}}dn(r(L)),Bt(Be)}}}(_.text)}function $t(_){Ne||(Ne=!0,f(ne,ns(_,r(ne),[])))}function dn(_){r(B)&&(Ro(_,Ji(r(B)))&&Ro(_,rt(r(B)))||(o("clearing selection: path does not exist anymore",r(B)),f(B,bs(_,r(ne)))))}function Bt(_){if(_.json!==void 0||_.text!==void 0){var F=r(L)!==void 0&&_.json!==void 0;x().add({type:"tree",undo:{patch:F?[{op:"replace",path:"",value:_.json}]:void 0,json:_.json,text:_.text,documentState:_.documentState,textIsRepaired:_.textIsRepaired,selection:la(_.selection),sortedColumn:void 0},redo:{patch:F?[{op:"replace",path:"",value:r(L)}]:void 0,json:r(L),text:r(de),documentState:r(ne),textIsRepaired:r(_e),selection:la(r(B)),sortedColumn:void 0}})}}function Kt(_,F){var fe;if(o("patch",_,F),r(L)===void 0)throw new Error("Cannot apply patch: no JSON");var Be=r(L),$e={json:void 0,text:r(de),documentState:r(ne),selection:la(r(B)),textIsRepaired:r(_e),sortedColumn:void 0},Re=S0(r(L),_),kt=f0(r(L),r(ne),_),Ct=(fe=Xs(r(L),_))!==null&&fe!==void 0?fe:r(B),Ft=typeof F=="function"?F(kt.json,kt.documentState,Ct):void 0;return f(L,Ft?.json!==void 0?Ft.json:kt.json),f(ne,Ft?.state!==void 0?Ft.state:kt.documentState),f(B,Ft?.selection!==void 0?Ft.selection:Ct),f(de,void 0),f(_e,!1),f(xt,void 0),f(Fe,void 0),Q=void 0,dn(r(L)),x().add({type:"tree",undo:Ae({patch:Re},$e),redo:{patch:_,json:void 0,text:r(de),documentState:r(ne),selection:la(r(B)),sortedColumn:void 0,textIsRepaired:r(_e)}}),{json:r(L),previousJson:Be,undo:Re,redo:_}}function ln(){!m()&&r(B)&&f(B,_f(rt(r(B))))}function vt(){if(!m()&&r(B)){var _=rt(r(B)),F=Ye(r(L),_);ir(F)?function(fe,Be){o("openJSONEditorModal",{path:fe,value:Be}),pe=!0,Jt()({content:{json:Be},path:fe,onPatch:r(wn).onPatch,onClose:()=>{pe=!1,setTimeout(wt)}})}(_,F):f(B,ku(_))}}function vn(){if(!m()&&cn(r(B))){var _=rt(r(B)),F=dt(_),fe=Ye(r(L),_),Be=!da(r(L),r(ne),_),$e=Be?String(fe):cl(String(fe),R());o("handleToggleEnforceString",{enforceString:Be,value:fe,updatedValue:$e}),ce([{op:"replace",path:F,value:$e}],(Re,kt)=>({state:Xu(r(L),kt,_,{type:"value",enforceString:Be})}))}}function Ot(){return r(_e)&&r(L)!==void 0&&Me(r(L)),r(L)!==void 0?{json:r(L)}:{text:r(de)||""}}function Ge(){return Yt.apply(this,arguments)}function Yt(){return Yt=mt(function*(){var _=!(arguments.length>0&&arguments[0]!==void 0)||arguments[0];yield Q0({json:r(L),selection:r(B),indentation:_?U():void 0,readOnly:m(),parser:R(),onPatch:ce})}),Yt.apply(this,arguments)}function It(){return Nn.apply(this,arguments)}function Nn(){return Nn=mt(function*(){var _=!(arguments.length>0&&arguments[0]!==void 0)||arguments[0];r(L)!==void 0&&(yield G0({json:r(L),selection:r(B),indentation:_?U():void 0,parser:R()}))}),Nn.apply(this,arguments)}function Fn(_){var F;_.preventDefault(),Hn((F=_.clipboardData)===null||F===void 0?void 0:F.getData("text/plain"))}function Un(){return sr.apply(this,arguments)}function sr(){return(sr=mt(function*(){try{Hn(yield navigator.clipboard.readText())}catch(_){console.error(_),f(V,!0)}})).apply(this,arguments)}function Hn(_){_!==void 0&&X0({clipboardText:_,json:r(L),selection:r(B),readOnly:m(),parser:R(),onPatch:ce,onChangeText:q,onPasteMultilineText:qn,openRepairModal:er})}function er(_,F){f(he,{text:_,onParse:fe=>vc(fe,Be=>dc(Be,R())),onRepair:Zm,onApply:F,onClose:wt})}function pr(){Z0({json:r(L),text:r(de),selection:r(B),keepSelection:!1,readOnly:m(),onChange:ge(),onPatch:ce})}function Gn(){!m()&&r(L)!==void 0&&r(B)&&Ms&&!un(rt(r(B)))&&(o("duplicate",{selection:r(B)}),ce(x0(r(L),Si(r(L),r(B)))))}function Sr(){m()||!r(B)||!Rn(r(B))&&!cn(r(B))||un(rt(r(B)))||(o("extract",{selection:r(B)}),ce(w0(r(L),r(B)),(_,F)=>{if(ir(_))return{state:Nd(_,F,[])}}))}function hr(_){Ru({insertType:_,selectInside:!0,initialValue:void 0,json:r(L),selection:r(B),readOnly:m(),parser:R(),onPatch:ce,onReplaceJson:Me})}function jr(_){qr(r(B))&&f(B,Ht(r(B).path)),r(B)||f(B,bs(r(L),r(ne))),hr(_)}function Xn(_){if(!m()&&r(B))if(Ic(r(B)))try{var F=Ji(r(B)),fe=Ye(r(L),F),Be=function(Re,kt,Ct){if(kt==="array"){if(Array.isArray(Re))return Re;if(mn(Re))return Dp(Re);if(typeof Re=="string")try{var Ft=Ct.parse(Re);if(Array.isArray(Ft))return Ft;if(mn(Ft))return Dp(Ft)}catch{return[Re]}return[Re]}if(kt==="object"){if(Array.isArray(Re))return qp(Re);if(mn(Re))return Re;if(typeof Re=="string")try{var kn=Ct.parse(Re);if(mn(kn))return kn;if(Array.isArray(kn))return qp(kn)}catch{return{value:Re}}return{value:Re}}if(kt==="value")return ir(Re)?Ct.stringify(Re):Re;throw new Error("Cannot convert ".concat(ff(Re,Ct)," to ").concat(kt))}(fe,_,R());if(Be===fe)return;var $e=[{op:"replace",path:dt(F),value:Be}];o("handleConvert",{selection:r(B),path:F,type:_,operations:$e}),ce($e,(Re,kt)=>({state:r(B)?ns(Re,kt,rt(r(B))):r(ne)}))}catch(Re){ae()(Re)}else ae()(new Error("Cannot convert current selection to ".concat(_)))}function be(){if(r(B)){var _=rh(r(L),r(ne),r(B),!1),F=tn(rt(r(B)));_&&!un(rt(_))&&Lt(F,tn(rt(_)))?f(B,La(rt(_))):f(B,Ka(F)),o("insert before",{selection:r(B),selectionBefore:_,parentPath:F}),Vn(),rn()}}function qt(){if(r(B)){var _=ji(r(L),r(B));o("insert after",_),f(B,La(_)),Vn(),rn()}}function bn(_){return $n.apply(this,arguments)}function $n(){return($n=mt(function*(_){yield eb({char:_,selectInside:!0,json:r(L),selection:r(B),readOnly:m(),parser:R(),onPatch:ce,onReplaceJson:Me,onSelect:bt})})).apply(this,arguments)}function lr(){if(!m()&&x().canUndo){var _=x().undo();if(xu(_)){var F={json:r(L),text:r(de)};f(L,_.undo.patch?Ho(r(L),_.undo.patch):_.undo.json),f(ne,_.undo.documentState),f(B,_.undo.selection),f(de,_.undo.text),f(_e,_.undo.textIsRepaired),Q=void 0,o("undo",{item:_,json:r(L),documentState:r(ne),selection:r(B)}),H(F,_.undo.patch&&_.redo.patch?{json:r(L),previousJson:F.json,redo:_.undo.patch,undo:_.redo.patch}:void 0),wt(),r(B)&&Qt(rt(r(B)),{scrollToWhenVisible:!1})}else De()(_)}}function Rr(){if(!m()&&x().canRedo){var _=x().redo();if(xu(_)){var F={json:r(L),text:r(de)};f(L,_.redo.patch?Ho(r(L),_.redo.patch):_.redo.json),f(ne,_.redo.documentState),f(B,_.redo.selection),f(de,_.redo.text),f(_e,_.redo.textIsRepaired),Q=void 0,o("redo",{item:_,json:r(L),documentState:r(ne),selection:r(B)}),H(F,_.undo.patch&&_.redo.patch?{json:r(L),previousJson:F.json,redo:_.redo.patch,undo:_.undo.patch}:void 0),wt(),r(B)&&Qt(rt(r(B)),{scrollToWhenVisible:!1})}else Le()(_)}}function Vt(_){var F;m()||r(L)===void 0||(pe=!0,we()({id:i,json:r(L),rootPath:_,onSort:(F=mt(function*(fe){var{operations:Be}=fe;o("onSort",_,Be),ce(Be,($e,Re)=>({state:Nd($e,Re,_),selection:Ht(_)}))}),function(fe){return F.apply(this,arguments)}),onClose:()=>{pe=!1,setTimeout(wt)}}))}function xr(){r(B)&&Vt(ah(r(L),r(B)))}function Vr(){Vt([])}function Zn(_){if(r(L)!==void 0){var{id:F,onTransform:fe,onClose:Be}=_,$e=_.rootPath||[];pe=!0,ft()({id:F||s,json:r(L),rootPath:$e,onTransform:Re=>{fe?fe({operations:Re,json:r(L),transformedJson:Ho(r(L),Re)}):(o("onTransform",$e,Re),ce(Re,(kt,Ct)=>({state:Nd(kt,Ct,$e),selection:Ht($e)})))},onClose:()=>{pe=!1,setTimeout(wt),Be&&Be()}})}}function Br(){r(B)&&Zn({rootPath:ah(r(L),r(B))})}function In(){Zn({rootPath:[]})}function Qt(_){return Tt.apply(this,arguments)}function Tt(){return Tt=mt(function*(_){var{scrollToWhenVisible:F=!0,element:fe}=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};f(ne,Lo(r(L),r(ne),_,eu));var Be=fe??An(_);if(o("scrollTo",{path:_,elem:Be,refContents:r(u)}),!Be||!r(u))return Promise.resolve();var $e=r(u).getBoundingClientRect(),Re=Be.getBoundingClientRect();if(!F&&Re.bottom>$e.top&&Re.top<$e.bottom)return Promise.resolve();var kt=-$e.height/4;return new Promise(Ct=>{b(Be,{container:r(u),offset:kt,duration:300,callback:()=>Ct()})})}),Tt.apply(this,arguments)}function An(_){var F,fe;return Vn(),(F=(fe=r(u))===null||fe===void 0?void 0:fe.querySelector('div[data-path="'.concat(Zc(_),'"]')))!==null&&F!==void 0?F:void 0}function gr(_){var F,fe;return Vn(),(F=(fe=r(u))===null||fe===void 0?void 0:fe.querySelector('span[data-search-result-index="'.concat(_,'"]')))!==null&&F!==void 0?F:void 0}function tr(_){var F=An(_);if(F&&r(u)){var fe=r(u).getBoundingClientRect(),Be=F.getBoundingClientRect(),$e=ir(Ye(r(L),_))?20:Be.height;Be.top<fe.top+20?b(F,{container:r(u),offset:-20,duration:0}):Be.top+$e>fe.bottom-20&&b(F,{container:r(u),offset:-(fe.height-$e-20),duration:0})}}function H(_,F){if(_.json!==void 0||_?.text!==void 0){if(r(de)!==void 0){var fe,Be={text:r(de),json:void 0};(fe=ge())===null||fe===void 0||fe(Be,_,{contentErrors:We(),patchResult:F})}else if(r(L)!==void 0){var $e,Re={text:void 0,json:r(L)};($e=ge())===null||$e===void 0||$e(Re,_,{contentErrors:We(),patchResult:F})}}}function ce(_,F){o("handlePatch",_,F);var fe={json:r(L),text:r(de)},Be=Kt(_,F);return H(fe,Be),Be}function Me(_,F){var fe={json:r(L),text:r(de)},Be={documentState:r(ne),selection:r(B),json:r(L),text:r(de),textIsRepaired:r(_e)},$e=Lo(r(L),xo(_,r(ne)),[],Tl),Re=typeof F=="function"?F(_,$e,r(B)):void 0;f(L,Re?.json!==void 0?Re.json:_),f(ne,Re?.state!==void 0?Re.state:$e),f(B,Re?.selection!==void 0?Re.selection:r(B)),f(de,void 0),f(_e,!1),Q=void 0,dn(r(L)),Bt(Be),H(fe,void 0)}function q(_,F){o("handleChangeText");var fe={json:r(L),text:r(de)},Be={documentState:r(ne),selection:r(B),json:r(L),text:r(de),textIsRepaired:r(_e)};try{f(L,Y()(_)),f(ne,Lo(r(L),xo(r(L),r(ne)),[],Tl)),f(de,void 0),f(_e,!1),Q=void 0}catch(Re){try{f(L,Y()(Vo(_))),f(ne,Lo(r(L),xo(r(L),r(ne)),[],Tl)),f(de,_),f(_e,!0),Q=void 0}catch{f(L,void 0),f(ne,yv({json:r(L),expand:Tl})),f(de,_),f(_e,!1),Q=r(de)!==""?Ys(r(de),Re.message||String(Re)):void 0}}if(typeof F=="function"){var $e=F(r(L),r(ne),r(B));f(L,$e?.json!==void 0?$e.json:r(L)),f(ne,$e?.state!==void 0?$e.state:r(ne)),f(B,$e?.selection!==void 0?$e.selection:r(B))}dn(r(L)),Bt(Be),H(fe,void 0)}function X(_,F){var fe=arguments.length>2&&arguments[2]!==void 0&&arguments[2];o("handleExpand",{path:_,expanded:F,recursive:fe}),F?re(_,fe?Ef:jv):ke(_,fe),wt()}function me(){X([],!0,!0)}function qe(){X([],!1,!0)}function tt(_){o("openFind",{findAndReplace:_}),f(pt,!1),f(Ue,!1),Vn(),f(pt,!0),f(Ue,_)}function nt(_,F){o("handleExpandSection",_,F),f(ne,function(fe,Be,$e,Re){return Gs(fe,Be,$e,(kt,Ct)=>{if(!Ur(Ct))return Ct;var Ft=u0(Ct.visibleSections.concat(Re));return Ae(Ae({},Ct),{},{visibleSections:Ft})})}(r(L),r(ne),_,F))}function ht(_){o("pasted json as text",_),f(xt,_)}function qn(_){o("pasted multiline text",{pastedText:_}),f(Fe,_)}function Gt(_){var F,{anchor:fe,left:Be,top:$e,width:Re,height:kt,offsetTop:Ct,offsetLeft:Ft,showTip:kn}=_,en=function(Tn){var{json:rr,documentState:gn,selection:gt,readOnly:sn,onEditKey:_t,onEditValue:at,onToggleEnforceString:Pt,onCut:cr,onCopy:zn,onPaste:or,onRemove:br,onDuplicate:Hr,onExtract:ka,onInsertBefore:ho,onInsert:Do,onConvert:ra,onInsertAfter:Uo,onSort:ro,onTransform:Jr}=Tn,go=rr!==void 0,Ca=!!gt,mo=!!gt&&un(rt(gt)),Cn=gt?Ye(rr,rt(gt)):void 0,Er=Array.isArray(Cn)?"Edit array":mn(Cn)?"Edit object":"Edit value",_r=go&&(Rn(gt)||qr(gt)||cn(gt)),Mi=gt&&!mo?Ye(rr,tn(rt(gt))):void 0,us=!sn&&go&&wu(gt)&&!mo&&!Array.isArray(Mi),Ai=!sn&&go&&gt!==void 0&&wu(gt),dl=Ai&&!ir(Cn),ds=!sn&&_r,vl=_r,ud=!sn&&Ca,dd=!sn&&go&&_r&&!mo,vd=!sn&&go&&gt!==void 0&&(Rn(gt)||cn(gt))&&!mo,oa=_r,Ti=oa?"Convert to:":"Insert:",Mr=!sn&&(zr(gt)&&Array.isArray(Cn)||lo(gt)&&Array.isArray(Mi)),Eo=!sn&&(oa?Ic(gt)&&!mn(Cn):Ca),fl=!sn&&(oa?Ic(gt)&&!Array.isArray(Cn):Ca),pl=!sn&&(oa?Ic(gt)&&ir(Cn):Ca),zi=gt!==void 0&&da(rr,gn,rt(gt));function Qr(hl){_r?hl!=="structure"&&ra(hl):Do(hl)}return[{type:"row",items:[{type:"button",onClick:()=>_t(),icon:zs,text:"Edit key",title:"Edit the key (Double-click on the key)",disabled:!us},{type:"dropdown-button",main:{type:"button",onClick:()=>at(),icon:zs,text:Er,title:"Edit the value (Double-click on the value)",disabled:!Ai},width:"11em",items:[{type:"button",icon:zs,text:Er,title:"Edit the value (Double-click on the value)",onClick:()=>at(),disabled:!Ai},{type:"button",icon:zi?pg:hg,text:"Enforce string",title:"Enforce keeping the value as string when it contains a numeric value",onClick:()=>Pt(),disabled:!dl}]}]},{type:"separator"},{type:"row",items:[{type:"dropdown-button",main:{type:"button",onClick:()=>cr(!0),icon:Rs,text:"Cut",title:"Cut selected contents, formatted with indentation (Ctrl+X)",disabled:!ds},width:"10em",items:[{type:"button",icon:Rs,text:"Cut formatted",title:"Cut selected contents, formatted with indentation (Ctrl+X)",onClick:()=>cr(!0),disabled:!ds},{type:"button",icon:Rs,text:"Cut compacted",title:"Cut selected contents, without indentation (Ctrl+Shift+X)",onClick:()=>cr(!1),disabled:!ds}]},{type:"dropdown-button",main:{type:"button",onClick:()=>zn(!0),icon:ci,text:"Copy",title:"Copy selected contents, formatted with indentation (Ctrl+C)",disabled:!vl},width:"12em",items:[{type:"button",icon:ci,text:"Copy formatted",title:"Copy selected contents, formatted with indentation (Ctrl+C)",onClick:()=>zn(!0),disabled:!vl},{type:"button",icon:ci,text:"Copy compacted",title:"Copy selected contents, without indentation (Ctrl+Shift+C)",onClick:()=>zn(!1),disabled:!vl}]},{type:"button",onClick:()=>or(),icon:gg,text:"Paste",title:"Paste clipboard contents (Ctrl+V)",disabled:!ud}]},{type:"separator"},{type:"row",items:[{type:"column",items:[{type:"button",onClick:()=>Hr(),icon:mg,text:"Duplicate",title:"Duplicate selected contents (Ctrl+D)",disabled:!dd},{type:"button",onClick:()=>ka(),icon:e1,text:"Extract",title:"Extract selected contents",disabled:!vd},{type:"button",onClick:()=>ro(),icon:su,text:"Sort",title:"Sort array or object contents",disabled:sn||!_r},{type:"button",onClick:()=>Jr(),icon:lu,text:"Transform",title:"Transform array or object contents (filter, sort, project)",disabled:sn||!_r},{type:"button",onClick:()=>br(),icon:Yd,text:"Remove",title:"Remove selected contents (Delete)",disabled:sn||!_r}]},{type:"column",items:[{type:"label",text:Ti},{type:"button",onClick:()=>Qr("structure"),icon:oa?yc:Ss,text:"Structure",title:Ti+" structure like the first item in the array",disabled:!Mr},{type:"button",onClick:()=>Qr("object"),icon:oa?yc:Ss,text:"Object",title:Ti+" object",disabled:!Eo},{type:"button",onClick:()=>Qr("array"),icon:oa?yc:Ss,text:"Array",title:Ti+" array",disabled:!fl},{type:"button",onClick:()=>Qr("value"),icon:oa?yc:Ss,text:"Value",title:Ti+" value",disabled:!pl}]}]},{type:"separator"},{type:"row",items:[{type:"button",onClick:()=>ho(),icon:t1,text:"Insert before",title:"Select area before current entry to insert or paste contents",disabled:sn||!_r||mo},{type:"button",onClick:()=>Uo(),icon:n1,text:"Insert after",title:"Select area after current entry to insert or paste contents",disabled:sn||!_r||mo}]}]}({json:r(L),documentState:r(ne),selection:r(B),readOnly:m(),onEditKey:ln,onEditValue:vt,onToggleEnforceString:vn,onCut:Ge,onCopy:It,onPaste:Un,onRemove:pr,onDuplicate:Gn,onExtract:Sr,onInsertBefore:be,onInsert:jr,onInsertAfter:qt,onConvert:Xn,onSort:xr,onTransform:Br}),Ln=(F=Pe()(en))!==null&&F!==void 0?F:en;if(Ln!==!1){var Et={left:Be,top:$e,offsetTop:Ct,offsetLeft:Ft,width:Re,height:kt,anchor:fe,closeOnOuterClick:!0,onClose:()=>{pe=!1,wt()}};pe=!0;var nr=l(nb,{tip:kn?"Tip: you can open this context menu via right-click or with Ctrl+Q":void 0,items:Ln,onRequestClose:()=>c(nr)},Et)}}function rn(_){if(!Dr(r(B)))if(_&&(_.stopPropagation(),_.preventDefault()),_&&_.type==="contextmenu"&&_.target!==r(d))Gt({left:_.clientX,top:_.clientY,width:Na,height:Pa,showTip:!1});else{var F,fe=(F=r(u))===null||F===void 0?void 0:F.querySelector(".jse-context-menu-pointer.jse-selected");if(fe)Gt({anchor:fe,offsetTop:2,width:Na,height:Pa,showTip:!1});else{var Be,$e=(Be=r(u))===null||Be===void 0?void 0:Be.getBoundingClientRect();$e&&Gt({top:$e.top+2,left:$e.left+2,width:Na,height:Pa,showTip:!1})}}}function zt(_){Gt({anchor:l0(_.target,"BUTTON"),offsetTop:0,width:Na,height:Pa,showTip:!0})}function Xt(){return Pr.apply(this,arguments)}function Pr(){return(Pr=mt(function*(){if(o("apply pasted json",r(xt)),r(xt)){var{onPasteAsJson:_}=r(xt);f(xt,void 0),_(),setTimeout(wt)}})).apply(this,arguments)}function yt(){return hn.apply(this,arguments)}function hn(){return(hn=mt(function*(){o("apply pasted multiline text",r(Fe)),r(Fe)&&(Hn(JSON.stringify(r(Fe))),setTimeout(wt))})).apply(this,arguments)}function on(){o("clear pasted json"),f(xt,void 0),wt()}function fn(){o("clear pasted multiline text"),f(Fe,void 0),wt()}function Wn(){se()(kr.text)}function On(_){f(B,_),wt(),Qt(rt(_))}function wt(){o("focus"),r(d)&&(r(d).focus(),r(d).select())}function Or(_){return function(F,fe,Be){var $e=tn(Be),Re=[Wt(Be)],kt=Ye(F,$e),Ct=kt?Pd(kt,fe,Re):void 0;return Ct?Ht($e.concat(Ct)):La(Be)}(r(L),r(ne),_)}function mr(_){r(n)&&r(n).onDrag(_)}function Nr(){r(n)&&r(n).onDragEnd()}var wn=$(void 0,!0);Z(()=>r(B),()=>{var _;_=r(B),Lt(_,j())||(o("onSelect",_),Te()(_))}),Z(()=>(y(w()),y(z())),()=>{f(Se,pf({escapeControlCharacters:w(),escapeUnicodeCharacters:z()}))}),Z(()=>r(pt),()=>{(function(_){r(u)&&_&&r(u).scrollTop===0&&(wo(u,r(u).style.overflowAnchor="none"),wo(u,r(u).scrollTop+=Al),setTimeout(()=>{r(u)&&wo(u,r(u).style.overflowAnchor="")}))})(r(pt))}),Z(()=>y(h()),()=>{Sn(h())}),Z(()=>y(j()),()=>{(function(_){Lt(r(B),_)||(o("applyExternalSelection",{selection:r(B),externalSelection:_}),Kl(_)&&f(B,_))})(j())}),Z(()=>(r(L),y(E()),y(R()),y(K())),()=>{et(r(L),E(),R(),K())}),Z(()=>(r(u),Ch),()=>{f(n,r(u)?Ch(r(u)):void 0)}),Z(()=>(y(m()),y(C()),y(R()),r(Se),y(je()),y(ot())),()=>{f(wn,{mode:kr.tree,readOnly:m(),truncateTextSize:C(),parser:R(),normalization:r(Se),getJson:Je,getDocumentState:Nt,getSelection:xn,findElement:An,findNextInside:Or,focus:wt,onPatch:ce,onInsert:hr,onExpand:X,onSelect:bt,onFind:tt,onExpandSection:nt,onPasteJson:ht,onRenderValue:je(),onContextMenu:Gt,onClassName:ot()||(()=>{}),onDrag:mr,onDragEnd:Nr})}),Z(()=>r(wn),()=>{o("context changed",r(wn))}),jn();var En={expand:re,collapse:ke,validate:We,getJson:Je,patch:Kt,acceptAutoRepair:Ot,openTransformModal:Zn,scrollTo:Qt,findElement:An,findSearchResult:gr,focus:wt};At(!0);var wr=BS();Ce("mousedown",Da,function(_){!ul(_.target,F=>F===r(v))&&Dr(r(B))&&(o("click outside the editor, exit edit mode"),f(B,la(r(B))),p&&r(d)&&(r(d).focus(),r(d).blur()),o("blur (outside editor)"),r(d)&&r(d).blur())});var M,G=Xe(wr),ye=N(G),Ie=_=>{(function(F,fe){lt(fe,!1);var Be=$(void 0,!0),$e=$(void 0,!0),Re=$(void 0,!0),kt=g(fe,"json",9),Ct=g(fe,"selection",9),Ft=g(fe,"readOnly",9),kn=g(fe,"showSearch",13,!1),en=g(fe,"history",9),Ln=g(fe,"onExpandAll",9),Et=g(fe,"onCollapseAll",9),nr=g(fe,"onUndo",9),Tn=g(fe,"onRedo",9),rr=g(fe,"onSort",9),gn=g(fe,"onTransform",9),gt=g(fe,"onContextMenu",9),sn=g(fe,"onCopy",9),_t=g(fe,"onRenderMenu",9);function at(){kn(!kn())}var Pt=$(void 0,!0),cr=$(void 0,!0),zn=$(void 0,!0),or=$(void 0,!0);Z(()=>y(kt()),()=>{f(Be,kt()!==void 0)}),Z(()=>(r(Be),y(Ct()),cn),()=>{f($e,r(Be)&&(Rn(Ct())||qr(Ct())||cn(Ct())))}),Z(()=>(y(Ln()),y(kt())),()=>{f(Pt,{type:"button",icon:W0,title:"Expand all",className:"jse-expand-all",onClick:Ln(),disabled:!ir(kt())})}),Z(()=>(y(Et()),y(kt())),()=>{f(cr,{type:"button",icon:V0,title:"Collapse all",className:"jse-collapse-all",onClick:Et(),disabled:!ir(kt())})}),Z(()=>y(kt()),()=>{f(zn,{type:"button",icon:Uu,title:"Search (Ctrl+F)",className:"jse-search",onClick:at,disabled:kt()===void 0})}),Z(()=>(y(Ft()),r(Pt),r(cr),y(rr()),y(kt()),y(gn()),r(zn),y(gt()),y(nr()),y(en()),y(Tn()),y(sn()),r($e)),()=>{f(or,Ft()?[r(Pt),r(cr),{type:"separator"},{type:"button",icon:ci,title:"Copy (Ctrl+C)",className:"jse-copy",onClick:sn(),disabled:!r($e)},{type:"separator"},r(zn),{type:"space"}]:[r(Pt),r(cr),{type:"separator"},{type:"button",icon:su,title:"Sort",className:"jse-sort",onClick:rr(),disabled:Ft()||kt()===void 0},{type:"button",icon:lu,title:"Transform contents (filter, sort, project)",className:"jse-transform",onClick:gn(),disabled:Ft()||kt()===void 0},r(zn),{type:"button",icon:bg,title:yf,className:"jse-contextmenu",onClick:gt()},{type:"separator"},{type:"button",icon:Wv,title:"Undo (Ctrl+Z)",className:"jse-undo",onClick:nr(),disabled:!en().canUndo},{type:"button",icon:Vv,title:"Redo (Ctrl+Shift+Z)",className:"jse-redo",onClick:Tn(),disabled:!en().canRedo},{type:"space"}])}),Z(()=>(y(_t()),r(or)),()=>{f(Re,_t()(r(or))||r(or))}),jn(),At(!0),od(F,{get items(){return r(Re)}}),ct()})(_,{get json(){return r(L)},get selection(){return r(B)},get readOnly(){return m()},get history(){return x()},onExpandAll:me,onCollapseAll:qe,onUndo:lr,onRedo:Rr,onSort:Vr,onTransform:In,onContextMenu:zt,onCopy:It,get onRenderMenu(){return Oe()},get showSearch(){return r(pt)},set showSearch(F){f(pt,F)},$$legacy:!0})};ie(ye,_=>{A()&&_(Ie)});var ve=W(ye,2),Ve=_=>{hS(_,{get json(){return r(L)},get selection(){return r(B)},onSelect:On,get onError(){return ae()},get pathParser(){return J()}})};ie(ve,_=>{O()&&_(Ve)});var Qe=W(ve,2),Ke=_=>{var F=US(),fe=Xe(F),Be=N(fe);Be.readOnly=!0,Qn(Be,Ct=>f(d,Ct),()=>r(d));var $e=W(fe,2),Re=Ct=>{var Ft=Ut(),kn=Xe(Ft),en=Et=>{(function(nr,Tn){function rr(Pt){Pt.stopPropagation(),Tn.onCreateObject()}function gn(Pt){Pt.stopPropagation(),Tn.onCreateArray()}lt(Tn,!0);var gt=nS();gt.__click=()=>Tn.onClick();var sn=W(N(gt),2),_t=W(N(sn),2),at=Pt=>{var cr=tS(),zn=W(Xe(cr),2);yn(zn,"title","Create an empty JSON object (press '{')"),zn.__click=rr;var or=W(zn,2);yn(or,"title","Create an empty JSON array (press '[')"),or.__click=gn,P(Pt,cr)};ie(_t,Pt=>{Tn.readOnly||Pt(at)}),P(nr,gt),ct()})(Et,{get readOnly(){return m()},onCreateObject:()=>{wt(),bn("{")},onCreateArray:()=>{wt(),bn("[")},onClick:()=>{wt()}})},Ln=Et=>{var nr=IS(),Tn=Xe(nr),rr=Ze(()=>m()?[]:[{icon:cu,text:"Repair manually",title:'Open the document in "code" mode and repair it manually',onClick:Wn}]);Oo(Tn,{type:"error",message:"The loaded JSON document is invalid and could not be repaired automatically.",get actions(){return r(rr)}}),tb(W(Tn,2),{get text(){return r(de)},get json(){return r(L)},get indentation(){return U()},get parser(){return R()}}),P(Et,nr)};ie(kn,Et=>{r(de)===""||r(de)===void 0?Et(en):Et(Ln,!1)}),P(Ct,Ft)},kt=Ct=>{var Ft=DS(),kn=Xe(Ft);J0(N(kn),{get json(){return r(L)},get documentState(){return r(ne)},get parser(){return R()},get showSearch(){return r(pt)},get showReplace(){return r(Ue)},get readOnly(){return m()},columns:void 0,onSearch:Rt,onFocus:k,onPatch:ce,onClose:T});var en=W(kn,2);yn(en,"data-jsoneditor-scrollable-contents",!0);var Ln=N(en),Et=_t=>{P(_t,qS())};ie(Ln,_t=>{r(pt)&&_t(Et)}),Mv(W(Ln,2),{get value(){return r(L)},pointer:"",get state(){return r(ne)},get validationErrors(){return r(oe)},get searchResults(){return r(He)},get selection(){return r(B)},get context(){return r(wn)},get onDragSelectionStart(){return Tr}}),Qn(en,_t=>f(u,_t),()=>r(u));var nr=W(en,2),Tn=_t=>{var at=Ze(()=>(r(xt),D(()=>"You pasted a JSON ".concat(Array.isArray(r(xt).contents)?"array":"object"," as text")))),Pt=Ze(()=>[{icon:xi,text:"Paste as JSON instead",title:"Replace the value with the pasted JSON",onMouseDown:Xt},{text:"Leave as is",title:"Keep the JSON embedded in the value",onClick:on}]);Oo(_t,{type:"info",get message(){return r(at)},get actions(){return r(Pt)}})};ie(nr,_t=>{r(xt)&&_t(Tn)});var rr=W(nr,2),gn=_t=>{var at=Ze(()=>[{icon:xi,text:"Paste as string instead",title:"Paste the clipboard data as a single string value instead of an array",onClick:yt},{text:"Leave as is",title:"Keep the pasted array",onClick:fn}]);Oo(_t,{type:"info",message:"Multiline text was pasted as array",get actions(){return r(at)}})};ie(rr,_t=>{r(Fe)&&_t(gn)});var gt=W(rr,2),sn=_t=>{var at=Ze(()=>m()?[]:[{icon:Hv,text:"Ok",title:"Accept the repaired document",onClick:Ot},{icon:cu,text:"Repair manually instead",title:"Leave the document unchanged and repair it manually instead",onClick:Wn}]);Oo(_t,{type:"success",message:"The loaded JSON document was invalid but is successfully repaired.",get actions(){return r(at)},onClose:wt})};ie(gt,_t=>{r(_e)&&_t(sn)}),zf(W(gt,2),{get validationErrors(){return r(ee)},selectError:I}),P(Ct,Ft)};ie($e,Ct=>{r(L)===void 0?Ct(Re):Ct(kt,!1)}),Ce("paste",Be,Fn),P(_,F)},Dt=_=>{P(_,LS())};ie(Qe,_=>{a?_(Dt,!1):_(Ke)}),Qn(G,_=>f(v,_),()=>r(v));var an=W(G,2),Zt=_=>{L0(_,{onClose:()=>f(V,!1)})};ie(an,_=>{r(V)&&_(Zt)});var Jn=W(an,2),$r=_=>{B0(_,bi(()=>r(he),{onClose:()=>{var F;(F=r(he))===null||F===void 0||F.onClose(),f(he,void 0)}}))};return ie(Jn,_=>{r(he)&&_($r)}),ze(()=>M=Mt(G,1,"jse-tree-mode svelte-10mlrw4",null,M,{"no-main-menu":!A()})),Ce("keydown",G,function(_){var F=Ha(_),fe=_.shiftKey;if(o("keydown",{combo:F,key:_.key}),F==="Ctrl+X"&&(_.preventDefault(),Ge(!0)),F==="Ctrl+Shift+X"&&(_.preventDefault(),Ge(!1)),F==="Ctrl+C"&&(_.preventDefault(),It(!0)),F==="Ctrl+Shift+C"&&(_.preventDefault(),It(!1)),F==="Ctrl+D"&&(_.preventDefault(),Gn()),F!=="Delete"&&F!=="Backspace"||(_.preventDefault(),pr()),F==="Insert"&&(_.preventDefault(),hr("structure")),F==="Ctrl+A"&&(_.preventDefault(),f(B,Ht([]))),F==="Ctrl+Q"&&rn(_),F==="ArrowUp"||F==="Shift+ArrowUp"){_.preventDefault();var Be=r(B)?rh(r(L),r(ne),r(B),fe)||r(B):bs(r(L),r(ne));f(B,Be),tr(rt(Be))}if(F==="ArrowDown"||F==="Shift+ArrowDown"){_.preventDefault();var $e=r(B)?function(en,Ln,Et){var nr=arguments.length>3&&arguments[3]!==void 0&&arguments[3];if(Et){var Tn=nr?rt(Et):ji(en,Et),rr=ir(Ye(en,Tn))?Zp(en,Ln,Tn,!0):Ln,gn=Pd(en,Ln,Tn),gt=Pd(en,rr,Tn);if(nr)return zr(Et)?gn!==void 0?oo(gn,gn):void 0:lo(Et)?gt!==void 0?oo(gt,gt):void 0:gt!==void 0?oo(Ji(Et),gt):void 0;if(lo(Et))return gt!==void 0?Ht(gt):void 0;if(zr(Et)||cn(Et))return gn!==void 0?Ht(gn):void 0;if(qr(Et)){if(gn===void 0||gn.length===0)return;var sn=tn(gn),_t=Ye(en,sn);return Array.isArray(_t)?Ht(gn):Ja(gn)}return Rn(Et)?gt!==void 0?Ht(gt):gn!==void 0?Ht(gn):void 0:void 0}}(r(L),r(ne),r(B),fe)||r(B):bs(r(L),r(ne));f(B,$e),tr(rt($e))}if(F==="ArrowLeft"||F==="Shift+ArrowLeft"){_.preventDefault();var Re=r(B)?function(en,Ln,Et){var nr=arguments.length>3&&arguments[3]!==void 0&&arguments[3],Tn=!(arguments.length>4&&arguments[4]!==void 0)||arguments[4];if(Et){var{caret:rr,previous:gn}=oh(en,Ln,Et,Tn);if(nr)return Rn(Et)?void 0:oo(Et.path,Et.path);if(rr&&gn)return xv(gn);var gt=tn(rt(Et)),sn=Ye(en,gt);return cn(Et)&&Array.isArray(sn)?oo(Et.path,Et.path):Rn(Et)&&!Array.isArray(sn)?Ja(Et.focusPath):void 0}}(r(L),r(ne),r(B),fe,!m())||r(B):bs(r(L),r(ne));f(B,Re),tr(rt(Re))}if(F==="ArrowRight"||F==="Shift+ArrowRight"){_.preventDefault();var kt=r(B)&&r(L)!==void 0?function(en,Ln,Et){var nr=arguments.length>3&&arguments[3]!==void 0&&arguments[3],Tn=!(arguments.length>4&&arguments[4]!==void 0)||arguments[4];if(Et){var{caret:rr,next:gn}=oh(en,Ln,Et,Tn);return nr?Rn(Et)?void 0:oo(Et.path,Et.path):rr&&gn?xv(gn):Rn(Et)?Ht(Et.focusPath):void 0}}(r(L),r(ne),r(B),fe,!m())||r(B):bs(r(L),r(ne));f(B,kt),tr(rt(kt))}if(F==="Enter"&&r(B)){if(Zu(r(B))){var Ct=r(B).focusPath,Ft=Ye(r(L),tn(Ct));Array.isArray(Ft)&&(_.preventDefault(),f(B,Ht(Ct)))}qr(r(B))&&(_.preventDefault(),f(B,Ae(Ae({},r(B)),{},{edit:!0}))),cn(r(B))&&(_.preventDefault(),ir(Ye(r(L),r(B).path))?X(r(B).path,!0):f(B,Ae(Ae({},r(B)),{},{edit:!0})))}if(F.replace(/^Shift\+/,"").length===1&&r(B))return _.preventDefault(),void bn(_.key);if(F==="Enter"&&(lo(r(B))||zr(r(B))))return _.preventDefault(),void bn("");if(F==="Ctrl+Enter"&&cn(r(B))){var kn=Ye(r(L),r(B).path);Gu(kn)&&window.open(String(kn),"_blank")}F==="Escape"&&r(B)&&(_.preventDefault(),f(B,void 0)),F==="Ctrl+F"&&(_.preventDefault(),tt(!1)),F==="Ctrl+H"&&(_.preventDefault(),tt(!0)),F==="Ctrl+Z"&&(_.preventDefault(),lr()),F==="Ctrl+Shift+Z"&&(_.preventDefault(),Rr())}),Ce("mousedown",G,function(_){o("handleMouseDown",_);var F=_.target;s0(F,"BUTTON")||F.isContentEditable||(wt(),r(B)||r(L)!==void 0||r(de)!==""&&r(de)!==void 0||(o("createDefaultSelection"),f(B,Ht([]))))}),Ce("contextmenu",G,rn),P(e,wr),jt(t,"expand",re),jt(t,"collapse",ke),jt(t,"validate",We),jt(t,"getJson",Je),jt(t,"patch",Kt),jt(t,"acceptAutoRepair",Ot),jt(t,"openTransformModal",Zn),jt(t,"scrollTo",Qt),jt(t,"findElement",An),jt(t,"findSearchResult",gr),jt(t,"focus",wt),ct(En)}function rb(e){return typeof(t=e)!="object"||t===null?e:new Proxy(e,{get:(n,o,a)=>rb(Reflect.get(n,o,a)),set:()=>!1,deleteProperty:()=>!1});var t}var Vc=Lr("jsoneditor:History");function ob(){var e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},t=e.maxItems||1e3,n=[],o=0;function a(){return o<n.length}function i(){return o>0}function s(){return{canUndo:a(),canRedo:i(),items:()=>n.slice().reverse(),add:c,undo:d,redo:v,clear:u}}function l(){e.onChange&&e.onChange(s())}function c(p){Vc("add",p),n=[p].concat(n.slice(o)).slice(0,t),o=0,l()}function u(){Vc("clear"),n=[],o=0,l()}function d(){if(a()){var p=n[o];return o+=1,Vc("undo",p),l(),p}}function v(){if(i())return Vc("redo",n[o-=1]),l(),n[o]}return{get:s}}St(`/* over all fonts, sizes, and colors */
/* "consolas" for Windows, "menlo" for Mac with fallback to "monaco", 'Ubuntu Mono' for Ubuntu */
/* (at Mac this font looks too large at 14px, but 13px is too small for the font on Windows) */
/* main, menu, modal */
/* jsoneditor modal */
/* tooltip in text mode */
/* panels: navigation bar, gutter, search box */
/* navigation-bar */
/* context menu */
/* contents: json key and values */
/* contents: selected or hovered */
/* contents: section of collapsed items in an array */
/* contents: highlighting of search matches */
/* contents: inline tags inside the JSON document */
/* contents: table */
/* controls in modals: inputs, buttons, and \`a\` */
/* messages */
/* svelte-select */
/* color picker */
.jse-transform-modal-inner.svelte-lta8xm {
  flex: 1;
  display: flex;
  flex-direction: column;
  min-width: 0;
  min-height: 0;
}
.jse-transform-modal-inner.svelte-lta8xm .jse-modal-contents:where(.svelte-lta8xm) {
  color: inherit;
  flex: 1;
  display: flex;
  flex-direction: column;
  padding: 0;
  overflow: auto;
  min-width: 0;
  min-height: 0;
}
.jse-transform-modal-inner.svelte-lta8xm .jse-modal-contents:where(.svelte-lta8xm) .jse-actions:where(.svelte-lta8xm) {
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  padding-top: var(--jse-padding, 10px);
}
.jse-transform-modal-inner.svelte-lta8xm .jse-modal-contents:where(.svelte-lta8xm) .jse-actions:where(.svelte-lta8xm) button.jse-primary:where(.svelte-lta8xm) {
  border: none;
  background: transparent;
  color: inherit;
  cursor: pointer;
  font-family: var(--jse-font-family, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen-Sans, Ubuntu, Cantarell, "Helvetica Neue", sans-serif);
  font-size: var(--jse-font-size, 16px);
  padding: 5px;
  margin: 0;
  background: var(--jse-button-primary-background, var(--jse-theme-color, #3883fa));
  color: var(--jse-button-primary-color, #fff);
  padding: var(--jse-padding, 10px) calc(2 * var(--jse-padding, 10px));
  border-radius: 3px;
}
.jse-transform-modal-inner.svelte-lta8xm .jse-modal-contents:where(.svelte-lta8xm) .jse-actions:where(.svelte-lta8xm) button.jse-primary:where(.svelte-lta8xm):hover {
  background: var(--jse-button-primary-background-highlight, var(--jse-theme-color-highlight, #5f9dff));
}
.jse-transform-modal-inner.svelte-lta8xm .jse-modal-contents:where(.svelte-lta8xm) .jse-actions:where(.svelte-lta8xm) button.jse-primary:where(.svelte-lta8xm):disabled {
  background: var(--jse-button-primary-background-disabled, #9d9d9d);
}
.jse-transform-modal-inner.svelte-lta8xm .jse-modal-contents:where(.svelte-lta8xm) .jse-main-contents:where(.svelte-lta8xm) {
  flex: 1;
  display: flex;
  gap: calc(2 * var(--jse-padding, 10px));
  min-height: 0;
  box-sizing: border-box;
  padding: 0 calc(2 * var(--jse-padding, 10px)) var(--jse-padding, 10px);
}
.jse-transform-modal-inner.svelte-lta8xm .jse-modal-contents:where(.svelte-lta8xm) .jse-main-contents:where(.svelte-lta8xm) .jse-query-contents:where(.svelte-lta8xm) {
  flex: 1;
  display: flex;
  flex-direction: column;
}
.jse-transform-modal-inner.svelte-lta8xm .jse-modal-contents:where(.svelte-lta8xm) .jse-main-contents:where(.svelte-lta8xm) .jse-query-contents:where(.svelte-lta8xm) .jse-description:where(.svelte-lta8xm) p {
  margin: var(--jse-padding, 10px) 0;
}
.jse-transform-modal-inner.svelte-lta8xm .jse-modal-contents:where(.svelte-lta8xm) .jse-main-contents:where(.svelte-lta8xm) .jse-query-contents:where(.svelte-lta8xm) .jse-description:where(.svelte-lta8xm) p:first-child {
  margin-top: 0;
}
.jse-transform-modal-inner.svelte-lta8xm .jse-modal-contents:where(.svelte-lta8xm) .jse-main-contents:where(.svelte-lta8xm) .jse-query-contents:where(.svelte-lta8xm) .jse-description:where(.svelte-lta8xm) p:last-child {
  margin-bottom: 0;
}
.jse-transform-modal-inner.svelte-lta8xm .jse-modal-contents:where(.svelte-lta8xm) .jse-main-contents:where(.svelte-lta8xm) .jse-query-contents:where(.svelte-lta8xm) .jse-description:where(.svelte-lta8xm) code {
  background: var(--jse-modal-code-background, rgba(0, 0, 0, 0.05));
  font-family: var(--jse-font-family-mono, consolas, menlo, monaco, "Ubuntu Mono", "source-code-pro", monospace);
  font-size: var(--jse-font-size-mono, 14px);
}
.jse-transform-modal-inner.svelte-lta8xm .jse-modal-contents:where(.svelte-lta8xm) .jse-main-contents:where(.svelte-lta8xm) .jse-query-contents:where(.svelte-lta8xm) .query-error:where(.svelte-lta8xm) {
  color: var(--jse-error-color, #ee5341);
}
.jse-transform-modal-inner.svelte-lta8xm .jse-modal-contents:where(.svelte-lta8xm) .jse-main-contents:where(.svelte-lta8xm) .jse-query-contents:where(.svelte-lta8xm) textarea.jse-query:where(.svelte-lta8xm) {
  flex: 1;
  outline: none;
  resize: vertical;
}
.jse-transform-modal-inner.svelte-lta8xm .jse-modal-contents:where(.svelte-lta8xm) .jse-main-contents:where(.svelte-lta8xm) .jse-data-contents:where(.svelte-lta8xm) {
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: calc(2 * var(--jse-padding, 10px));
}
.jse-transform-modal-inner.svelte-lta8xm .jse-modal-contents:where(.svelte-lta8xm) .jse-main-contents:where(.svelte-lta8xm) .jse-data-contents:where(.svelte-lta8xm) .jse-original-data:where(.svelte-lta8xm) {
  flex: 1;
  display: flex;
  flex-direction: column;
  min-height: 0;
  box-sizing: border-box;
}
.jse-transform-modal-inner.svelte-lta8xm .jse-modal-contents:where(.svelte-lta8xm) .jse-main-contents:where(.svelte-lta8xm) .jse-data-contents:where(.svelte-lta8xm) .jse-original-data.jse-hide:where(.svelte-lta8xm) {
  flex: none;
}
.jse-transform-modal-inner.svelte-lta8xm .jse-modal-contents:where(.svelte-lta8xm) .jse-main-contents:where(.svelte-lta8xm) .jse-data-contents:where(.svelte-lta8xm) .jse-preview-data:where(.svelte-lta8xm) {
  flex: 1;
  display: flex;
  flex-direction: column;
  min-height: 0;
  box-sizing: border-box;
}
.jse-transform-modal-inner.svelte-lta8xm .jse-modal-contents:where(.svelte-lta8xm) .jse-main-contents:where(.svelte-lta8xm) .jse-data-contents.jse-hide-original-data:where(.svelte-lta8xm) {
  flex-direction: column;
  gap: 0;
  margin-bottom: 0;
}
.jse-transform-modal-inner.svelte-lta8xm .jse-modal-contents:where(.svelte-lta8xm) .jse-actions:where(.svelte-lta8xm) {
  padding: var(--jse-padding, 10px) calc(2 * var(--jse-padding, 10px)) calc(2 * var(--jse-padding, 10px));
}
@media screen and (max-width: 1200px) {
  .jse-transform-modal-inner.svelte-lta8xm .jse-modal-contents:where(.svelte-lta8xm) .jse-main-contents:where(.svelte-lta8xm) {
    flex-direction: column;
    overflow: auto;
  }
  .jse-transform-modal-inner.svelte-lta8xm .jse-modal-contents:where(.svelte-lta8xm) .jse-main-contents:where(.svelte-lta8xm) .jse-query-contents:where(.svelte-lta8xm) textarea.jse-query:where(.svelte-lta8xm) {
    min-height: 150px;
    flex: none;
  }
  .jse-transform-modal-inner.svelte-lta8xm .jse-modal-contents:where(.svelte-lta8xm) .jse-main-contents:where(.svelte-lta8xm) .jse-data-contents:where(.svelte-lta8xm) .jse-tree-mode {
    height: 300px;
    flex: none;
  }
  .jse-transform-modal-inner.svelte-lta8xm .jse-modal-contents:where(.svelte-lta8xm) .jse-main-contents:where(.svelte-lta8xm) .jse-data-contents:where(.svelte-lta8xm) .jse-original-data:where(.svelte-lta8xm),
  .jse-transform-modal-inner.svelte-lta8xm .jse-modal-contents:where(.svelte-lta8xm) .jse-main-contents:where(.svelte-lta8xm) .jse-data-contents:where(.svelte-lta8xm) .jse-preview-data:where(.svelte-lta8xm) {
    flex: unset;
  }
}
.jse-transform-modal-inner.svelte-lta8xm .jse-label:where(.svelte-lta8xm) {
  font-weight: bold;
  display: block;
  box-sizing: border-box;
}
.jse-transform-modal-inner.svelte-lta8xm .jse-label:where(.svelte-lta8xm) .jse-label-inner:where(.svelte-lta8xm) {
  margin-top: calc(2 * var(--jse-padding, 10px));
  margin-bottom: calc(0.5 * var(--jse-padding, 10px));
  box-sizing: border-box;
}
.jse-transform-modal-inner.svelte-lta8xm .jse-label:where(.svelte-lta8xm) .jse-label-inner:where(.svelte-lta8xm) button:where(.svelte-lta8xm) {
  border: none;
  background: transparent;
  color: inherit;
  cursor: pointer;
  font-family: var(--jse-font-family, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen-Sans, Ubuntu, Cantarell, "Helvetica Neue", sans-serif);
  font-size: var(--jse-font-size, 16px);
  padding: 5px;
  margin: 0;
  font-weight: bold;
  padding: 0;
}
.jse-transform-modal-inner.svelte-lta8xm .jse-tree-mode {
  flex: 1;
  background: var(--jse-input-background-readonly, transparent);
  box-shadow: none;
  box-sizing: border-box;
  --jse-main-border: var(--jse-input-border, 1px solid #d8dbdf);
}
.jse-transform-modal-inner.svelte-lta8xm input:where(.svelte-lta8xm),
.jse-transform-modal-inner.svelte-lta8xm textarea:where(.svelte-lta8xm) {
  border: var(--jse-input-border, 1px solid #d8dbdf);
  outline: none;
  box-sizing: border-box;
  padding: calc(0.5 * var(--jse-padding, 10px));
  font-family: var(--jse-font-family-mono, consolas, menlo, monaco, "Ubuntu Mono", "source-code-pro", monospace);
  font-size: var(--jse-font-size-mono, 14px);
  color: inherit;
  background: var(--jse-input-background, var(--jse-background-color, #fff));
}
.jse-transform-modal-inner.svelte-lta8xm input:where(.svelte-lta8xm):focus,
.jse-transform-modal-inner.svelte-lta8xm textarea:where(.svelte-lta8xm):focus {
  border: var(--jse-input-border-focus, 1px solid var(--jse-input-border-focus, var(--jse-theme-color, #3883fa)));
}
.jse-transform-modal-inner.svelte-lta8xm input:where(.svelte-lta8xm):read-only,
.jse-transform-modal-inner.svelte-lta8xm textarea:where(.svelte-lta8xm):read-only {
  background: var(--jse-input-background-readonly, transparent);
}
.jse-transform-modal-inner.svelte-lta8xm .jse-preview.jse-error:where(.svelte-lta8xm) {
  flex: 1;
  background: var(--jse-input-background-readonly, transparent);
  border: var(--jse-input-border, 1px solid #d8dbdf);
  color: var(--jse-error-color, #ee5341);
  padding: calc(0.5 * var(--jse-padding, 10px));
}
.jse-transform-modal-inner.svelte-lta8xm a {
  color: var(--jse-a-color, #156fc5);
}
.jse-transform-modal-inner.svelte-lta8xm a:hover {
  color: var(--jse-a-color-highlight, #0f508d);
}`);var Sl=Qu(()=>Qw),js=Qu(()=>Gw),FS=te('<div class="query-error svelte-lta8xm"> </div>'),WS=te("<!> <!>",1),VS=te('<div class="jse-preview jse-error svelte-lta8xm"> </div>'),HS=te('<!> <div class="jse-modal-contents svelte-lta8xm"><div class="jse-main-contents svelte-lta8xm"><div class="jse-query-contents svelte-lta8xm"><div class="jse-label svelte-lta8xm"><div class="jse-label-inner svelte-lta8xm">Language</div></div> <div class="jse-description svelte-lta8xm"><!></div> <div class="jse-label svelte-lta8xm"><div class="jse-label-inner svelte-lta8xm">Path</div></div> <input class="jse-path svelte-lta8xm" type="text" readonly="" title="Selected path"/> <div class="jse-label svelte-lta8xm"><div class="jse-label-inner svelte-lta8xm"><button type="button" class="svelte-lta8xm"><!> Wizard</button></div></div> <!> <div class="jse-label svelte-lta8xm"><div class="jse-label-inner svelte-lta8xm">Query</div></div> <textarea class="jse-query svelte-lta8xm" spellcheck="false"></textarea></div> <div><div><div class="jse-label svelte-lta8xm"><div class="jse-label-inner svelte-lta8xm"><button type="button" class="svelte-lta8xm"><!> Original</button></div></div> <!></div> <div class="jse-preview-data svelte-lta8xm"><div class="jse-label svelte-lta8xm"><div class="jse-label-inner svelte-lta8xm">Preview</div></div> <!></div></div></div> <div class="jse-actions svelte-lta8xm"><button type="button" class="jse-primary svelte-lta8xm">Transform</button></div></div>',1),JS=te('<div class="jse-transform-modal-inner svelte-lta8xm"><!></div>');function KS(e,t){var n,o,a;lt(t,!1);var i=Lr("jsoneditor:TransformModal"),s=g(t,"id",25,()=>"transform-modal-"+_s()),l=g(t,"json",9),c=g(t,"rootPath",25,()=>[]),u=g(t,"indentation",9),d=g(t,"truncateTextSize",9),v=g(t,"escapeControlCharacters",9),p=g(t,"escapeUnicodeCharacters",9),b=g(t,"parser",9),m=g(t,"parseMemoizeOne",9),h=g(t,"validationParser",9),j=g(t,"pathParser",9),x=g(t,"queryLanguages",9),C=g(t,"queryLanguageId",13),A=g(t,"onChangeQueryLanguage",9),O=g(t,"onRenderValue",9),w=g(t,"onRenderMenu",9),z=g(t,"onRenderContextMenu",9),R=g(t,"onClassName",9),Y=g(t,"onTransform",9),E=g(t,"onClose",9),K=$(void 0,!0),J=$(ob({onChange:ne=>f(J,ne)}).get(),!0),U=$(void 0,!0),ae=$(void 0,!0),ge=$(!1,!0),se="".concat(s(),":").concat(dt(c())),Te=(n=Sl()[se])!==null&&n!==void 0?n:{},De=$(js().showWizard!==!1,!0),Le=$(js().showOriginal!==!1,!0),je=$((o=Te.queryOptions)!==null&&o!==void 0?o:{},!0),Oe=$(C()===Te.queryLanguageId&&Te.query?Te.query:"",!0),Pe=$((a=Te.isManual)!==null&&a!==void 0&&a,!0),ot=$(void 0,!0),xe=$(void 0,!0),ue=$({text:""},!0);function we(ne){var B;return(B=x().find(bt=>bt.id===ne))!==null&&B!==void 0?B:x()[0]}function ft(ne){try{f(je,ne),f(Oe,we(C()).createQuery(r(U),ne)),f(ot,void 0),f(Pe,!1),i("updateQueryByWizard",{queryOptions:r(je),query:r(Oe),isManual:r(Pe)})}catch(B){f(ot,String(B))}}function Jt(ne){f(Oe,ne.target.value),f(Pe,!0),i("handleChangeQuery",{query:r(Oe),isManual:r(Pe)})}r(Pe)||ft(r(je)),no(()=>{var ne;(ne=r(K))===null||ne===void 0||ne.focus()});var pe=du(function(ne,B){if(ne===void 0)return f(ue,{text:""}),void f(xe,"Error: No JSON");if(B.trim()!=="")try{i("previewTransform",{query:B});var bt=we(C()).executeQuery(ne,B,b());f(ue,{json:bt}),f(xe,void 0)}catch(st){f(ue,{text:""}),f(xe,String(st))}else f(ue,{json:ne})},300);function V(){if(r(U)===void 0)return f(ue,{text:""}),void f(xe,"Error: No JSON");try{i("handleTransform",{query:r(Oe)});var ne=we(C()).executeQuery(r(U),r(Oe),b());Y()([{op:"replace",path:dt(c()),value:ne}]),E()()}catch(B){console.error(B),f(ue,{text:""}),f(xe,String(B))}}function he(){f(De,!r(De)),js(js().showWizard=r(De))}function L(){f(Le,!r(Le)),js(js().showOriginal=r(Le))}function de(ne){ne.focus()}function Q(ne){i("handleChangeQueryLanguage",ne),C(ne),A()(ne),ft(r(je))}function Ne(){r(ge)?f(ge,!r(ge)):E()()}Z(()=>(y(l()),y(c())),()=>{f(U,rb(Ye(l(),c())))}),Z(()=>r(U),()=>{f(ae,r(U)?{json:r(U)}:{text:""})}),Z(()=>(r(U),r(Oe)),()=>{pe(r(U),r(Oe))}),Z(()=>(Sl(),r(je),r(Oe),y(C()),r(Pe)),()=>{Sl(Sl()[se]={queryOptions:r(je),query:r(Oe),queryLanguageId:C(),isManual:r(Pe)}),i("store state in memory",se,Sl()[se])}),jn(),At(!0),Xl(e,{get onClose(){return E()},className:"jse-transform-modal",get fullscreen(){return r(ge)},children:(ne,B)=>{var bt=JS();gv(N(bt),{children:(st,Se)=>{var xt=HS(),Fe=Xe(xt);(function(Ge,Yt){lt(Yt,!1);var It,Nn=g(Yt,"queryLanguages",9),Fn=g(Yt,"queryLanguageId",9),Un=g(Yt,"fullscreen",13),sr=g(Yt,"onChangeQueryLanguage",9),Hn=g(Yt,"onClose",9),er=$(void 0,!0),{openAbsolutePopup:pr,closeAbsolutePopup:Gn}=Ei("absolute-popup");function Sr(){var hr={queryLanguages:Nn(),queryLanguageId:Fn(),onChangeQueryLanguage:jr=>{Gn(It),sr()(jr)}};It=pr(Hk,hr,{offsetTop:-2,offsetLeft:0,anchor:r(er),closeOnOuterClick:!0})}At(!0),Tu(Ge,{title:"Transform",fullScreenButton:!0,get onClose(){return Hn()},get fullscreen(){return Un()},set fullscreen(hr){Un(hr)},$$slots:{actions:(hr,jr)=>{var Xn,be=Yk();nn(N(be),{get data(){return Yb}}),Qn(be,qt=>f(er,qt),()=>r(er)),ze(()=>Xn=Mt(be,1,"jse-config svelte-5gkegr",null,Xn,{hide:Nn().length<=1})),Ce("click",be,Sr),P(hr,be)}},$$legacy:!0}),ct()})(Fe,{get queryLanguages(){return x()},get queryLanguageId(){return C()},onChangeQueryLanguage:Q,get onClose(){return E()},get fullscreen(){return r(ge)},set fullscreen(Ge){f(ge,Ge)},$$legacy:!0});var He=N(W(Fe,2)),pt=N(He),Ue=W(N(pt),2);Wm(N(Ue),()=>(y(C()),D(()=>we(C()).description)));var Rt=W(Ue,4),k=W(Rt,2),S=N(k),T=N(S),I=N(T),re=Ze(()=>r(De)?Fa:Il);nn(I,{get data(){return r(re)}});var ke=W(k,2),_e=Ge=>{var Yt=Ut(),It=Xe(Yt),Nn=Un=>{var sr=WS(),Hn=Xe(sr);Fk(Hn,{get queryOptions(){return r(je)},get json(){return r(U)},onChange:ft});var er=W(Hn,2),pr=Gn=>{var Sr=FS(),hr=N(Sr);ze(()=>ut(hr,r(ot))),P(Gn,Sr)};ie(er,Gn=>{r(ot)&&Gn(pr)}),P(Un,sr)},Fn=Un=>{P(Un,Wr("(Only available for arrays, not for objects)"))};ie(It,Un=>{r(U),D(()=>Array.isArray(r(U)))?Un(Nn):Un(Fn,!1)}),P(Ge,Yt)};ie(ke,Ge=>{r(De)&&Ge(_e)});var ee=W(ke,4);Qn(ee,Ge=>f(K,Ge),()=>r(K));var oe,it,et=W(pt,2),We=N(et),Je=N(We),Nt=N(Je),xn=N(Nt),Sn=N(xn),$t=Ze(()=>r(Le)?Fa:Il);nn(Sn,{get data(){return r($t)}});var dn=W(Je,2),Bt=Ge=>{Nv(Ge,{get externalContent(){return r(ae)},externalSelection:void 0,get history(){return r(J)},readOnly:!0,get truncateTextSize(){return d()},mainMenuBar:!1,navigationBar:!1,get indentation(){return u()},get escapeControlCharacters(){return v()},get escapeUnicodeCharacters(){return p()},get parser(){return b()},get parseMemoizeOne(){return m()},get onRenderValue(){return O()},get onRenderMenu(){return w()},get onRenderContextMenu(){return z()},onError:D(()=>console.error),get onChange(){return Tr},get onChangeMode(){return Tr},get onSelect(){return Tr},get onUndo(){return Tr},get onRedo(){return Tr},get onFocus(){return Tr},get onBlur(){return Tr},get onSortModal(){return Tr},get onTransformModal(){return Tr},get onJSONEditorModal(){return Tr},get onClassName(){return R()},validator:void 0,get validationParser(){return h()},get pathParser(){return j()}})};ie(dn,Ge=>{r(Le)&&Ge(Bt)});var Kt=W(We,2),ln=W(N(Kt),2),vt=Ge=>{Nv(Ge,{get externalContent(){return r(ue)},externalSelection:void 0,get history(){return r(J)},readOnly:!0,get truncateTextSize(){return d()},mainMenuBar:!1,navigationBar:!1,get indentation(){return u()},get escapeControlCharacters(){return v()},get escapeUnicodeCharacters(){return p()},get parser(){return b()},get parseMemoizeOne(){return m()},get onRenderValue(){return O()},get onRenderMenu(){return w()},get onRenderContextMenu(){return z()},onError:D(()=>console.error),get onChange(){return Tr},get onChangeMode(){return Tr},get onSelect(){return Tr},get onUndo(){return Tr},get onRedo(){return Tr},get onFocus(){return Tr},get onBlur(){return Tr},get onSortModal(){return Tr},get onTransformModal(){return Tr},get onJSONEditorModal(){return Tr},get onClassName(){return R()},validator:void 0,get validationParser(){return h()},get pathParser(){return j()}})},vn=Ge=>{var Yt=VS(),It=N(Yt);ze(()=>ut(It,r(xe))),P(Ge,Yt)};ie(ln,Ge=>{r(xe)?Ge(vn,!1):Ge(vt)});var Ot=N(W(He,2));Kr(()=>Ce("click",Ot,V)),io(Ot,Ge=>de?.(Ge)),ze(Ge=>{es(Rt,Ge),es(ee,r(Oe)),oe=Mt(et,1,"jse-data-contents svelte-lta8xm",null,oe,{"jse-hide-original-data":!r(Le)}),it=Mt(We,1,"jse-original-data svelte-lta8xm",null,it,{"jse-hide":!r(Le)}),Ot.disabled=!!r(xe)},[()=>(y(un),y(c()),y(Fr),D(()=>un(c())?"(document root)":Fr(c())))]),Ce("click",T,he),Ce("input",ee,Jt),Ce("click",xn,L),P(st,xt)},$$slots:{default:!0}}),io(bt,(st,Se)=>zu?.(st,Se),()=>Ne),P(ne,bt)},$$slots:{default:!0}}),ct()}function Ao(){}var YS=0;class Gr{constructor(){var t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};this.id=YS++,this.perNode=!!t.perNode,this.deserialize=t.deserialize||(()=>{throw new Error("This node type doesn't define a deserialize function")}),this.combine=t.combine||null}add(t){if(this.perNode)throw new RangeError("Can't add per-node props to node types");return typeof t!="function"&&(t=ec.match(t)),n=>{var o=t(n);return o===void 0?null:[this,o]}}}Gr.closedBy=new Gr({deserialize:e=>e.split(" ")}),Gr.openedBy=new Gr({deserialize:e=>e.split(" ")}),Gr.group=new Gr({deserialize:e=>e.split(" ")}),Gr.isolate=new Gr({deserialize:e=>{if(e&&e!="rtl"&&e!="ltr"&&e!="auto")throw new RangeError("Invalid value for isolate: "+e);return e||"auto"}}),Gr.contextHash=new Gr({perNode:!0}),Gr.lookAhead=new Gr({perNode:!0}),Gr.mounted=new Gr({perNode:!0});var Mh,QS=Object.create(null);class ec{constructor(t,n,o){var a=arguments.length>3&&arguments[3]!==void 0?arguments[3]:0;this.name=t,this.props=n,this.id=o,this.flags=a}static define(t){var n=t.props&&t.props.length?Object.create(null):QS,o=(t.top?1:0)|(t.skipped?2:0)|(t.error?4:0)|(t.name==null?8:0),a=new ec(t.name||"",n,t.id,o);if(t.props){for(var i of t.props)if(Array.isArray(i)||(i=i(a)),i){if(i[0].perNode)throw new RangeError("Can't store a per-node prop on a node type");n[i[0].id]=i[1]}}return a}prop(t){return this.props[t.id]}get isTop(){return(1&this.flags)>0}get isSkipped(){return(2&this.flags)>0}get isError(){return(4&this.flags)>0}get isAnonymous(){return(8&this.flags)>0}is(t){if(typeof t=="string"){if(this.name==t)return!0;var n=this.prop(Gr.group);return!!n&&n.indexOf(t)>-1}return this.id==t}static match(t){var n=Object.create(null);for(var o in t)for(var a of o.split(" "))n[a]=t[o];return i=>{for(var s=i.prop(Gr.group),l=-1;l<(s?s.length:0);l++){var c=n[l<0?i.name:s[l]];if(c)return c}}}}ec.none=new ec("",Object.create(null),0,8),function(e){e[e.ExcludeBuffers=1]="ExcludeBuffers",e[e.IncludeAnonymous=2]="IncludeAnonymous",e[e.IgnoreMounts=4]="IgnoreMounts",e[e.IgnoreOverlays=8]="IgnoreOverlays"}(Mh||(Mh={})),new Gr({perNode:!0});St(`/* over all fonts, sizes, and colors */
/* "consolas" for Windows, "menlo" for Mac with fallback to "monaco", 'Ubuntu Mono' for Ubuntu */
/* (at Mac this font looks too large at 14px, but 13px is too small for the font on Windows) */
/* main, menu, modal */
/* jsoneditor modal */
/* tooltip in text mode */
/* panels: navigation bar, gutter, search box */
/* navigation-bar */
/* context menu */
/* contents: json key and values */
/* contents: selected or hovered */
/* contents: section of collapsed items in an array */
/* contents: highlighting of search matches */
/* contents: inline tags inside the JSON document */
/* contents: table */
/* controls in modals: inputs, buttons, and \`a\` */
/* messages */
/* svelte-select */
/* color picker */
.jse-status-bar.svelte-1pmgv9j {
  background: var(--jse-panel-background, #ebebeb);
  color: var(--jse-panel-color-readonly, #b2b2b2);
  font-family: var(--jse-font-family-mono, consolas, menlo, monaco, "Ubuntu Mono", "source-code-pro", monospace);
  font-size: var(--jse-font-size-mono, 14px);
  margin: 0;
  border-top: var(--jse-panel-border, var(--jse-main-border, 1px solid #d7d7d7));
  border-left: var(--jse-main-border, 1px solid #d7d7d7);
  border-right: var(--jse-main-border, 1px solid #d7d7d7);
  display: flex;
  gap: var(--jse-padding, 10px);
}
.jse-status-bar.svelte-1pmgv9j:last-child {
  border-bottom: var(--jse-main-border, 1px solid #d7d7d7);
}
.jse-status-bar.svelte-1pmgv9j .jse-status-bar-info:where(.svelte-1pmgv9j) {
  padding: 2px;
}`);var GS=te('<div class="jse-status-bar-info svelte-1pmgv9j"> </div>'),XS=te('<div class="jse-status-bar-info svelte-1pmgv9j"> </div>'),ZS=te('<div class="jse-status-bar-info svelte-1pmgv9j"> </div>'),e2=te('<div class="jse-status-bar svelte-1pmgv9j"><!> <!> <!></div>'),Pf=U1.define([{tag:bl.propertyName,color:"var(--internal-key-color)"},{tag:bl.number,color:"var(--internal-value-color-number)"},{tag:bl.bool,color:"var(--internal-value-color-boolean)"},{tag:bl.string,color:"var(--internal-value-color-string)"},{tag:bl.keyword,color:"var(--internal-value-color-null)"}]),t2=wg(Pf),n2=Pf.style;Pf.style=e=>n2(e||[]);var r2=[Kv.fromClass(class{constructor(e){this.view=e,this.indentUnit=uu(e.state),this.initialPaddingLeft=null,this.isChrome=window?.navigator.userAgent.includes("Chrome"),this.generate(e.state)}update(e){var t=uu(e.state);(t!==this.indentUnit||e.docChanged||e.viewportChanged)&&(this.indentUnit=t,this.generate(e.state))}generate(e){var t=new Gv;this.initialPaddingLeft?this.addStyleToBuilder(t,e,this.initialPaddingLeft):this.view.requestMeasure({read:n=>{var o=n.contentDOM.querySelector(".cm-line");o&&(this.initialPaddingLeft=window.getComputedStyle(o).getPropertyValue("padding-left"),this.addStyleToBuilder(t,n.state,this.initialPaddingLeft)),this.decorations=t.finish()}}),this.decorations=t.finish()}addStyleToBuilder(e,t,n){var o=this.getVisibleLines(t);for(var a of o){var{numColumns:i,containsTab:s}=this.numColumns(a.text,t.tabSize),l="calc(".concat(i+this.indentUnit,"ch + ").concat(n,")"),c=this.isChrome?"calc(-".concat(i+this.indentUnit,"ch - ").concat(s?1:0,"px)"):"-".concat(i+this.indentUnit,"ch");e.add(a.from,a.from,wi.line({attributes:{style:"padding-left: ".concat(l,"; text-indent: ").concat(c,";")}}))}}getVisibleLines(e){var t=new Set,n=null;for(var{from:o,to:a}of this.view.visibleRanges)for(var i=o;i<=a;){var s=e.doc.lineAt(i);n!==s&&(t.add(s),n=s),i=s.to+1}return t}numColumns(e,t){var n=0,o=!1;e:for(var a=0;a<e.length;a++)switch(e[a]){case" ":n+=1;continue e;case"	":n+=t-n%t,o=!0;continue e;case"\r":continue e;default:break e}return{numColumns:n,containsTab:o}}},{decorations:e=>e.decorations})];St(`/* over all fonts, sizes, and colors */
/* "consolas" for Windows, "menlo" for Mac with fallback to "monaco", 'Ubuntu Mono' for Ubuntu */
/* (at Mac this font looks too large at 14px, but 13px is too small for the font on Windows) */
/* main, menu, modal */
/* jsoneditor modal */
/* tooltip in text mode */
/* panels: navigation bar, gutter, search box */
/* navigation-bar */
/* context menu */
/* contents: json key and values */
/* contents: selected or hovered */
/* contents: section of collapsed items in an array */
/* contents: highlighting of search matches */
/* contents: inline tags inside the JSON document */
/* contents: table */
/* controls in modals: inputs, buttons, and \`a\` */
/* messages */
/* svelte-select */
/* color picker */
.jse-text-mode.svelte-k2b9e6 {
  --internal-key-color: var(--jse-key-color, #1a1a1a);
  --internal-value-color-number: var(--jse-value-color-number, #ee422e);
  --internal-value-color-boolean: var(--jse-value-color-boolean, #ff8c00);
  --internal-value-color-string: var(--jse-value-color-string, #008000);
  --internal-value-color-null: var(--jse-value-color-null, #004ed0);
  flex: 1;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  background: var(--jse-background-color, #fff);
}
.jse-text-mode.no-main-menu.svelte-k2b9e6 {
  border-top: var(--jse-main-border, 1px solid #d7d7d7);
}
.jse-text-mode.svelte-k2b9e6 .jse-contents:where(.svelte-k2b9e6) {
  flex: 1;
  display: flex;
  position: relative;
  flex-direction: column;
  overflow: hidden;
  min-width: 0;
  min-height: 0;
  border-left: var(--jse-main-border, 1px solid #d7d7d7);
  border-right: var(--jse-main-border, 1px solid #d7d7d7);
}
.jse-text-mode.svelte-k2b9e6 .jse-contents:where(.svelte-k2b9e6):last-child {
  border-bottom: var(--jse-main-border, 1px solid #d7d7d7);
}
.jse-text-mode.svelte-k2b9e6 .jse-contents.jse-hidden:where(.svelte-k2b9e6) {
  visibility: hidden;
  position: absolute;
  top: 0;
  left: 0;
}
.jse-text-mode.svelte-k2b9e6 .jse-contents:where(.svelte-k2b9e6) .cm-editor {
  flex: 1;
  overflow: hidden;
}
.jse-text-mode.svelte-k2b9e6 .jse-contents:where(.svelte-k2b9e6) .cm-editor .cm-scroller {
  font-family: var(--jse-font-family-mono, consolas, menlo, monaco, "Ubuntu Mono", "source-code-pro", monospace);
  font-size: var(--jse-font-size-mono, 14px);
  line-height: var(--jse-line-height, calc(1em + 4px));
  color: var(--jse-delimiter-color, rgba(0, 0, 0, 0.38));
}
.jse-text-mode.svelte-k2b9e6 .jse-contents:where(.svelte-k2b9e6) .cm-editor .cm-gutters {
  background: var(--jse-panel-background, #ebebeb);
  color: var(--jse-panel-color-readonly, #b2b2b2);
  border-right: var(--jse-panel-border, var(--jse-main-border, 1px solid #d7d7d7));
}
.jse-text-mode.svelte-k2b9e6 .jse-contents:where(.svelte-k2b9e6) .cm-editor .cm-activeLine,
.jse-text-mode.svelte-k2b9e6 .jse-contents:where(.svelte-k2b9e6) .cm-editor .cm-activeLineGutter {
  background: var(--jse-active-line-background-color, rgba(0, 0, 0, 0.06));
}
.jse-text-mode.svelte-k2b9e6 .jse-contents:where(.svelte-k2b9e6) .cm-editor .cm-selectionBackground {
  background: var(--jse-selection-background-color, #d3d3d3);
}
.jse-text-mode.svelte-k2b9e6 .jse-contents:where(.svelte-k2b9e6) .cm-editor .cm-searchMatch {
  background-color: var(--jse-search-match-color, #ffe665);
  outline: var(--jse-search-match-outline, none);
}
.jse-text-mode.svelte-k2b9e6 .jse-contents:where(.svelte-k2b9e6) .cm-editor .cm-searchMatch.cm-searchMatch-selected {
  background-color: var(--jse-search-match-active-color, var(--jse-search-match-color, #ffe665));
  outline: var(--jse-search-match-outline, 2px solid #e0be00);
}
.jse-text-mode.svelte-k2b9e6 .jse-contents:where(.svelte-k2b9e6) .cm-editor .cm-selectionMatch {
  background-color: var(--jse-search-match-background-color, rgba(153, 255, 119, 0.5019607843));
}
.jse-text-mode.svelte-k2b9e6 .jse-contents:where(.svelte-k2b9e6) .cm-editor .cm-foldPlaceholder {
  background: var(--jse-tag-background, rgba(0, 0, 0, 0.2));
  color: var(--jse-tag-color, var(--jse-text-color-inverse, #fff));
  border: none;
  padding: 0 var(--jse-padding, 10px);
}
.jse-text-mode.svelte-k2b9e6 .jse-contents:where(.svelte-k2b9e6) .cm-editor .cm-tooltip {
  font-size: var(--jse-font-size, 16px);
  font-family: var(--jse-font-family, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen-Sans, Ubuntu, Cantarell, "Helvetica Neue", sans-serif);
  color: var(--jse-tooltip-color, var(--jse-text-color, #4d4d4d));
  background: var(--jse-tooltip-background, var(--jse-modal-background, #f5f5f5));
  border: var(--jse-tooltip-border, var(--jse-main-border, 1px solid #d7d7d7));
}
.jse-text-mode.svelte-k2b9e6 .jse-contents:where(.svelte-k2b9e6) .cm-editor .cm-diagnosticAction {
  background: var(--jse-tooltip-action-button-color, var(--jse-text-color-inverse, #fff));
  background: var(--jse-tooltip-action-button-background, #4d4d4d);
}
.jse-text-mode.svelte-k2b9e6 .jse-contents:where(.svelte-k2b9e6) .cm-editor .cm-panels {
  border-bottom: var(--jse-panel-border, var(--jse-main-border, 1px solid #d7d7d7));
}
.jse-text-mode.svelte-k2b9e6 .jse-contents:where(.svelte-k2b9e6) .cm-editor .cm-search {
  background: var(--jse-panel-background, #ebebeb);
  color: var(--jse-panel-color, var(--jse-text-color, #4d4d4d));
  font-family: var(--jse-font-family, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen-Sans, Ubuntu, Cantarell, "Helvetica Neue", sans-serif);
  font-size: var(--jse-font-size, 16px);
}
.jse-text-mode.svelte-k2b9e6 .jse-contents:where(.svelte-k2b9e6) .cm-editor .cm-search input {
  font-family: var(--jse-font-family, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen-Sans, Ubuntu, Cantarell, "Helvetica Neue", sans-serif);
  font-size: var(--jse-font-size-text-mode-search, 80%);
  color: var(--jse-input-color, var(--jse-text-color, #4d4d4d));
  border: var(--jse-input-border, 1px solid #d8dbdf);
  background: var(--jse-input-background, var(--jse-background-color, #fff));
  margin-right: 2px;
}
.jse-text-mode.svelte-k2b9e6 .jse-contents:where(.svelte-k2b9e6) .cm-editor .cm-search button {
  font-family: var(--jse-font-family, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen-Sans, Ubuntu, Cantarell, "Helvetica Neue", sans-serif);
  font-size: var(--jse-font-size-text-mode-search, 80%);
  color: var(--jse-panel-button-color, inherit);
  background: var(--jse-panel-button-background, transparent);
  border: none;
  cursor: pointer;
  text-transform: capitalize;
  padding: calc(0.5 * var(--jse-padding, 10px)) var(--jse-padding, 10px);
  margin: 0;
}
.jse-text-mode.svelte-k2b9e6 .jse-contents:where(.svelte-k2b9e6) .cm-editor .cm-search button:hover {
  color: var(--panel-button-color-highlight, var(--jse-text-color, #4d4d4d));
  background: var(--jse-panel-button-background-highlight, #e0e0e0);
}
.jse-text-mode.svelte-k2b9e6 .jse-contents:where(.svelte-k2b9e6) .cm-editor .cm-search label {
  font-family: var(--jse-font-family, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen-Sans, Ubuntu, Cantarell, "Helvetica Neue", sans-serif);
  font-size: var(--jse-font-size-text-mode-search, 80%);
  padding-left: var(--jse-padding, 10px);
}
.jse-text-mode.svelte-k2b9e6 .jse-contents:where(.svelte-k2b9e6) .cm-editor .cm-search label input {
  margin-right: 2px;
}
.jse-text-mode.svelte-k2b9e6 .jse-contents:where(.svelte-k2b9e6) .cm-editor .cm-search button[name='close'] {
  width: 32px;
  height: 32px;
  font-size: 24px;
  line-height: 24px;
  padding: 0;
  right: 0;
  top: -4px;
}
.jse-text-mode.svelte-k2b9e6 .jse-contents:where(.svelte-k2b9e6) .cm-editor .cm-cursor-primary {
  border-color: var(--jse-text-color, #4d4d4d);
}
.jse-text-mode.svelte-k2b9e6 .jse-contents:where(.svelte-k2b9e6) .jse-loading-space:where(.svelte-k2b9e6) {
  flex: 1;
}
.jse-text-mode.svelte-k2b9e6 .jse-contents:where(.svelte-k2b9e6) .jse-loading:where(.svelte-k2b9e6) {
  flex: 2;
  text-align: center;
  color: var(--jse-panel-color-readonly, #b2b2b2);
  box-sizing: border-box;
  font-family: var(--jse-font-family, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen-Sans, Ubuntu, Cantarell, "Helvetica Neue", sans-serif);
  font-size: var(--jse-font-size, 16px);
}
.jse-text-mode.svelte-k2b9e6 .jse-contents.jse-preview:where(.svelte-k2b9e6) {
  flex: 1;
  font-family: var(--jse-font-family-mono, consolas, menlo, monaco, "Ubuntu Mono", "source-code-pro", monospace);
  font-size: var(--jse-font-size-mono, 14px);
  color: var(--jse-panel-color-readonly, #b2b2b2);
  overflow: auto;
  white-space: pre-wrap;
  word-break: break-word;
  padding: 2px;
}
.jse-text-mode.svelte-k2b9e6 .jse-fold-progress:where(.svelte-k2b9e6) {
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 8px 12px;
  background: var(--jse-background-color, #fff);
  border-top: var(--jse-panel-border, var(--jse-main-border, 1px solid #d7d7d7));
  border-bottom: var(--jse-panel-border, var(--jse-main-border, 1px solid #d7d7d7));
}
.jse-text-mode.svelte-k2b9e6 .jse-fold-progress:where(.svelte-k2b9e6) .jse-fold-tip:where(.svelte-k2b9e6) {
  font-family: var(--jse-font-family, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen-Sans, Ubuntu, Cantarell, "Helvetica Neue", sans-serif);
  font-size: var(--jse-font-size-mono, 14px);
  color: var(--jse-panel-color-readonly, #b2b2b2);
}
.jse-text-mode.svelte-k2b9e6 .jse-fold-progress:where(.svelte-k2b9e6) .jse-fold-progress-track:where(.svelte-k2b9e6) {
  flex: 1;
  height: 6px;
  background: var(--jse-panel-background, #ebebeb);
  border-radius: 3px;
  overflow: hidden;
  border: 1px solid var(--jse-panel-border, var(--jse-main-border, 1px solid #d7d7d7));
}
.jse-text-mode.svelte-k2b9e6 .jse-fold-progress:where(.svelte-k2b9e6) .jse-fold-progress-fill:where(.svelte-k2b9e6) {
  height: 100%;
  background: linear-gradient(90deg, var(--jse-theme-color, #3883fa), var(--jse-theme-color-highlight, #5f9dff));
  border-radius: 2px;
  transition: width 0.1s ease;
  min-width: 2px;
}
.jse-text-mode.svelte-k2b9e6 .jse-fold-progress:where(.svelte-k2b9e6) .jse-fold-cancel-button:where(.svelte-k2b9e6) {
  padding: 4px 12px;
  font-size: 12px;
  font-family: var(--jse-font-family, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen-Sans, Ubuntu, Cantarell, "Helvetica Neue", sans-serif);
  background: var(--jse-theme-color, #3883fa);
  color: #fff;
  border-radius: 3px;
  cursor: pointer;
  transition: background-color 0.2s ease;
  flex-shrink: 0;
  border: 1px solid var(--jse-main-border, 1px solid #d7d7d7);
}
.jse-text-mode.svelte-k2b9e6 .jse-fold-progress:where(.svelte-k2b9e6) .jse-fold-cancel-button:where(.svelte-k2b9e6):hover {
  background: var(--jse-theme-color-highlight, #5f9dff);
  color: #fff;
}`);var o2=te('<div class="jse-fold-progress svelte-k2b9e6"><span class="jse-fold-tip svelte-k2b9e6">Collapsing</span> <div class="jse-fold-progress-track svelte-k2b9e6"><div class="jse-fold-progress-fill svelte-k2b9e6"></div></div> <button class="jse-fold-cancel-button svelte-k2b9e6" type="button" title="Cancel folding">Cancel</button></div>'),a2=te('<!> <div class="jse-contents jse-preview svelte-k2b9e6"> </div>',1),i2=te("<!> <!> <!> <!>",1),s2=te("<div></div> <!> <!>",1),l2=te('<div class="jse-contents svelte-k2b9e6"><div class="jse-loading-space svelte-k2b9e6"></div> <div class="jse-loading svelte-k2b9e6">loading...</div></div>'),c2=te("<div><!> <!> <!></div>");function u2(e,t){lt(t,!1);var n=$(void 0,!0),o=$(void 0,!0),a=g(t,"readOnly",9),i=g(t,"mainMenuBar",9),s=g(t,"statusBar",9),l=g(t,"askToFormat",9),c=g(t,"externalContent",9),u=g(t,"externalSelection",9),d=g(t,"history",9),v=g(t,"indentation",9),p=g(t,"tabSize",9),b=g(t,"escapeUnicodeCharacters",9),m=g(t,"parser",9),h=g(t,"validator",9),j=g(t,"validationParser",9),x=g(t,"onChange",9),C=g(t,"onChangeMode",9),A=g(t,"onSelect",9),O=g(t,"onUndo",9),w=g(t,"onRedo",9),z=g(t,"onError",9),R=g(t,"onFocus",9),Y=g(t,"onBlur",9),E=g(t,"onRenderMenu",9),K=g(t,"onSortModal",9),J=g(t,"onTransformModal",9),U=Lr("jsoneditor:TextMode"),ae={key:"Mod-i",run:_e,shift:ee,preventDefault:!0},ge=typeof window>"u";U("isSSR:",ge);var se,Te=$(void 0,!0),De=$(void 0,!0),Le=$(void 0,!0),je=$(!1,!0),Oe=$(l(),!0),Pe=$([],!0),ot=$(!1,!0),xe=$(0,!0),ue=$(0,!0),we=null,ft=new yl,Jt=new yl,pe=new yl,V=new yl,he=new yl,L=c(),de=$(hv(L,v(),m()),!0),Q=vy.define(),Ne=null;function ne(){if(!Ne||Ne.length===0)return!1;var H=Ne[0].startState,ce=Ne[Ne.length-1].state,Me=Ne.map(X=>X.changes).reduce((X,me)=>X.compose(me)),q={type:"text",undo:{changes:Me.invert(H.doc).toJSON(),selection:jr(H.selection)},redo:{changes:Me.toJSON(),selection:jr(ce.selection)}};return U("add history item",q),d().add(q),Ne=null,!0}var B=$(b(),!0);no(mt(function*(){if(!ge)try{se=function(H){var{target:ce,initialText:Me,readOnly:q,indentation:X}=H;U("Create CodeMirror editor",{readOnly:q,indentation:X});var me=function(tt,nt){return $d(tt)?tt.ranges.every(ht=>ht.anchor<nt.length&&ht.head<nt.length):!1}(u(),Me)?Nn(u()):void 0,qe=vs.create({doc:Me,selection:me,extensions:[rp.of([L1,ae]),ft.of(vt()),Xj(),B1(),F1(),W1(),V1(),Fe(),H1(),J1(),vs.allowMultipleSelections.of(!0),K1(),wg(Y1,{fallback:!0}),Q1(),G1(),X1(),Z1(),ey(),ty(),ny(),rp.of([...ry,...oy,...ay,{key:"Mod-z",run:Nt,preventDefault:!0},{key:"Mod-y",mac:"Mod-Shift-z",run:xn,preventDefault:!0},{key:"Ctrl-Shift-z",run:xn,preventDefault:!0},...iy,...sy,...Uj]),t2,ox({hideFirstIndent:!0}),Bo.domEventHandlers({dblclick:ln}),Bo.updateListener.of(tt=>{f(Le,tt.state),tt.docChanged&&(tt.transactions.some(nt=>!!nt.annotation(Q))||(Ne=[...Ne??[],tt]),pr()),tt.selectionSet&&hr()}),yy(),ly({top:!0}),Bo.lineWrapping,Jt.of(vs.readOnly.of(q)),V.of(vs.tabSize.of(p())),pe.of(er(X)),he.of(Bo.theme({},{dark:vn()}))]});return se=new Bo({state:qe,parent:ce}),me&&se.dispatch(se.state.update({selection:me.main,scrollIntoView:!0})),se}({target:r(Te),initialText:Xn(r(de),r(je))?"":r(n).escapeValue(r(de)),readOnly:a(),indentation:v()})}catch(H){console.error(H)}})),Io(()=>{Gn(),se&&(U("Destroy CodeMirror editor"),se.destroy()),Rt()});var bt=Bs(),st=Bs();function Se(){se&&(U("focus"),se.focus())}function xt(H,ce){if(se)try{(function(){var Me=arguments.length>0&&arguments[0]!==void 0?arguments[0]:[],q=!(arguments.length>1&&arguments[1]!==void 0)||arguments[1],X=se.state,me=X.doc.length,qe=op(X,me,1/0);if(qe){var tt=[];if(Me.length===0)tt=pt(qe,X,void 0,q);else{var{from:nt}=Ed(r(n).escapeValue(r(de)),Me);nt!==void 0&&nt!==0&&(tt=pt(qe,X,nt,q))}tt.length>0&&function(ht){Ue.apply(this,arguments)}(tt)}})(H,ce)}catch(Me){z()(Me)}}function Fe(){return cy.of((H,ce,Me)=>{var q=op(H,H.doc.length,1/0);if(!q||q.length<Me)return null;for(var X=null,me=q.resolveStack(Me,1);me;me=me.next){var qe=me.node;if(!(qe.to<=Me||qe.from>Me)){if(X&&qe.from<ce)break;var tt=qe.type.prop(uy);if(tt&&(qe.to<q.length-50||q.length==H.doc.length||!He(qe))){var nt=tt(qe,H);nt&&nt.from<=Me&&nt.from>=ce&&nt.to>Me&&(X=nt)}}}return X})}function He(H){var ce=H.lastChild;return ce&&ce.to==H.to&&ce.type.isError}function pt(H,ce,Me){var q=!(arguments.length>3&&arguments[3]!==void 0)||arguments[3],X=[],me=new Set;return H.iterate({enter(qe){if(Me===void 0||qe.from>=Me){var tt=fy(ce,qe.from,qe.to);if(tt){var nt="".concat(tt.from,"-").concat(tt.to);if(!me.has(nt))if(q)X.push({from:tt.from,to:tt.to}),me.add(nt);else{var ht=X.some(qn=>qn.from<=tt.from&&qn.to>=tt.to);ht||(X.push({from:tt.from,to:tt.to}),me.add(nt))}}}}}),X}function Ue(){return Ue=mt(function*(H){if(H.length!==0){var ce=H.length>5e3;ce&&(f(ot,!0),f(xe,0),f(ue,H.length),we=new AbortController);var Me=q=>new Promise(X=>{var me;ce&&(me=we)!==null&&me!==void 0&&me.signal.aborted?X():requestAnimationFrame(()=>{var qe=Math.min(q+100,H.length),tt=H.slice(q,qe);se.dispatch({effects:tt.map(nt=>gy.of({from:nt.from,to:nt.to}))}),ce&&f(xe,qe),qe<H.length?Me(qe).then(X):X()})});yield Me(0),ce&&(f(ot,!1),f(xe,0),f(ue,0),we=null)}}),Ue.apply(this,arguments)}function Rt(){we&&we.abort()}function k(H){var ce=arguments.length>1&&arguments[1]!==void 0?arguments[1]:jv;if(se)try{if(H&&H.length>0){var{from:Me}=Ed(r(n).escapeValue(r(de)),H);Me!==void 0&&(se.dispatch({selection:{anchor:Me,head:Me}}),py(se))}else hy(se);ce?.(H)}catch(q){z()(q)}}function S(){k([],()=>!0)}function T(){xt([],!0)}var I=!1;function re(H){return ke(H,!1)}function ke(H,ce){U("handlePatch",H,ce);var Me=m().parse(r(de)),q=Ho(Me,H),X=Ag(Me,H);return It({text:m().stringify(q,null,v())},ce,!1),{json:q,previousJson:Me,undo:X,redo:H}}function _e(){if(U("format"),a())return!1;try{var H=m().parse(r(de));return It({text:m().stringify(H,null,v())},!0,!1),f(Oe,l()),!0}catch(ce){z()(ce)}return!1}function ee(){if(U("compact"),a())return!1;try{var H=m().parse(r(de));return It({text:m().stringify(H)},!0,!1),f(Oe,!1),!0}catch(ce){z()(ce)}return!1}function oe(){if(U("repair"),!a())try{It({text:Vo(r(de))},!0,!1),f(be,Rd),f(qt,void 0)}catch(H){z()(H)}}function it(){var H;if(!a())try{var ce=m().parse(r(de));I=!0,K()({id:bt,json:ce,rootPath:[],onSort:(H=mt(function*(Me){var{operations:q}=Me;U("onSort",q),ke(q,!0)}),function(Me){return H.apply(this,arguments)}),onClose:()=>{I=!1,Se()}})}catch(Me){z()(Me)}}function et(H){var{id:ce,rootPath:Me,onTransform:q,onClose:X}=H;try{var me=m().parse(r(de));I=!0,J()({id:ce||st,json:me,rootPath:Me||[],onTransform:qe=>{q?q({operations:qe,json:me,transformedJson:Ho(me,qe)}):(U("onTransform",qe),ke(qe,!0))},onClose:()=>{I=!1,Se(),X&&X()}})}catch(qe){z()(qe)}}function We(){a()||et({rootPath:[]})}function Je(){se&&(r(Te)&&r(Te).querySelector(".cm-search")?my(se):by(se))}function Nt(){if(a())return!1;Gn();var H=d().undo();return U("undo",H),Gp(H)?(se.dispatch({annotations:Q.of("undo"),changes:ap.fromJSON(H.undo.changes),selection:pd.fromJSON(H.undo.selection),scrollIntoView:!0}),!0):(O()(H),!1)}function xn(){if(a())return!1;Gn();var H=d().redo();return U("redo",H),Gp(H)?(se.dispatch({annotations:Q.of("redo"),changes:ap.fromJSON(H.redo.changes),selection:pd.fromJSON(H.redo.selection),scrollIntoView:!0}),!0):(w()(H),!1)}function Sn(){f(je,!0),It(c(),!0,!0)}function $t(){C()(kr.tree)}function dn(){sr()}function Bt(H){U("select validation error",H);var{from:ce,to:Me}=Ot(H);ce!==void 0&&Me!==void 0&&(Kt(ce,Me),Se())}function Kt(H,ce){U("setSelection",{anchor:H,head:ce}),se&&se.dispatch(se.state.update({selection:{anchor:H,head:ce},scrollIntoView:!0}))}function ln(H,ce){if(ce.state.selection.ranges.length===1){var Me=ce.state.selection.ranges[0],q=r(de).slice(Me.from,Me.to);if(q==="{"||q==="["){var X=Bu.parse(r(de)),me=Object.keys(X.pointers).find(tt=>{var nt;return((nt=X.pointers[tt].value)===null||nt===void 0?void 0:nt.pos)===Me.from}),qe=X.pointers[me];me&&qe&&qe.value&&qe.valueEnd&&(U("pointer found, selecting inner contents of path:",me,qe),Kt(qe.value.pos+1,qe.valueEnd.pos-1))}}}function vt(){return Fj(bn,{delay:300})}function vn(){return!!r(Te)&&getComputedStyle(r(Te)).getPropertyValue("--jse-theme").includes("dark")}function Ot(H){var{path:ce,message:Me,severity:q}=H,{line:X,column:me,from:qe,to:tt}=Ed(r(n).escapeValue(r(de)),ce);return{path:ce,line:X,column:me,from:qe,to:tt,message:Me,severity:q,actions:[]}}function Ge(H,ce){var{line:Me,column:q,position:X,message:me}=H;return{path:[],line:Me,column:q,from:X,to:X,severity:Ko.error,message:me,actions:ce&&!a()?[{name:"Auto repair",apply:()=>oe()}]:void 0}}function Yt(H){return{from:H.from||0,to:H.to||0,message:H.message||"",actions:H.actions,severity:H.severity}}function It(H,ce,Me){var q=hv(H,v(),m()),X=!Lt(H,L),me=L;U("setCodeMirrorContent",{isChanged:X,emitChange:ce,forceUpdate:Me}),se&&(X||Me)&&(L=H,f(de,q),Xn(r(de),r(je))||se.dispatch({changes:{from:0,to:se.state.doc.length,insert:r(n).escapeValue(r(de))}}),ne(),X&&ce&&Sr(L,me))}function Nn(H){return $d(H)?pd.fromJSON(H):void 0}function Fn(){return Un.apply(this,arguments)}function Un(){return Un=mt(function*(){U("refresh"),yield function(){return Hn.apply(this,arguments)}()}),Un.apply(this,arguments)}function sr(){if(se){var H=se?r(n).unescapeValue(se.state.doc.toString()):"",ce=H!==r(de);if(U("onChangeCodeMirrorValue",{isChanged:ce}),ce){var Me=L;f(de,H),L={text:r(de)},ne(),Sr(L,Me),Vn(),hr()}}}function Hn(){return(Hn=mt(function*(){if(Vn(),se){var H=vn();return U("updateTheme",{dark:H}),se.dispatch({effects:[he.reconfigure(Bo.theme({},{dark:H}))]}),new Promise(ce=>setTimeout(ce))}return Promise.resolve()})).apply(this,arguments)}function er(H){var ce=dy.of(typeof H=="number"?" ".repeat(H):H);return H==="	"?[ce]:[ce,r2]}Tf({onMount:no,onDestroy:Io,getWindow:()=>fc(r(De)),hasFocus:()=>I&&document.hasFocus()||gf(r(De)),onFocus:R(),onBlur:()=>{Gn(),Y()()}});var pr=du(sr,300);function Gn(){pr.flush()}function Sr(H,ce){x()&&x()(H,ce,{contentErrors:$n(),patchResult:void 0})}function hr(){A()(jr(r(Le).selection))}function jr(H){return Ae({type:Pn.text},H.toJSON())}function Xn(H,ce){return!!H&&H.length>Td&&!ce}var be=$(Rd,!0),qt=$(void 0,!0);function bn(){if(Xn(r(de),r(je)))return[];var H=$n();if(Qp(H)){var{parseError:ce,isRepairable:Me}=H;return[Yt(Ge(ce,Me))]}return Aw(H)?H.validationErrors.map(Ot).map(Yt):[]}function $n(){U("validate:start"),Gn();var H=lr(r(n).escapeValue(r(de)),h(),m(),j());return Qp(H)?(f(be,H.isRepairable?Vp:"invalid"),f(qt,H.parseError),f(Pe,[])):(f(be,Rd),f(qt,void 0),f(Pe,H?.validationErrors||[])),U("validate:end"),H}var lr=ql(Xk);function Rr(){r(qt)&&function(H){U("select parse error",H);var ce=Ge(H,!1);Kt(ce.from!=null?ce.from:0,ce.to!=null?ce.to:0),Se()}(r(qt))}var Vt={icon:Zb,text:"Show me",title:"Move to the parse error location",onClick:Rr};Z(()=>y(b()),()=>{f(n,pf({escapeControlCharacters:!1,escapeUnicodeCharacters:b()}))}),Z(()=>y(c()),()=>{It(c(),!1,!1)}),Z(()=>y(u()),()=>{(function(H){if($d(H)){var ce=Nn(H);!se||!ce||r(Le)&&r(Le).selection.eq(ce)||(U("applyExternalSelection",ce),se.dispatch({selection:ce}))}})(u())}),Z(()=>y(h()),()=>{(function(H){U("updateLinter",H),se&&se.dispatch({effects:ft.reconfigure(vt())})})(h())}),Z(()=>y(v()),()=>{(function(H){se&&(U("updateIndentation",H),se.dispatch({effects:pe.reconfigure(er(H))}))})(v())}),Z(()=>y(p()),()=>{(function(H){se&&(U("updateTabSize",H),se.dispatch({effects:V.reconfigure(vs.tabSize.of(H))}))})(p())}),Z(()=>y(a()),()=>{(function(H){se&&(U("updateReadOnly",H),se.dispatch({effects:[Jt.reconfigure(vs.readOnly.of(H))]}))})(a())}),Z(()=>(r(B),y(b())),()=>{r(B)!==b()&&(f(B,b()),U("forceUpdateText",{escapeUnicodeCharacters:b()}),se&&se.dispatch({changes:{from:0,to:se.state.doc.length,insert:r(n).escapeValue(r(de))}}))}),Z(()=>(r(be),y(a()),xi),()=>{f(o,r(be)!==Vp||a()?[Vt]:[{icon:xi,text:"Auto repair",title:"Automatically repair JSON",onClick:oe},Vt])}),jn();var xr={focus:Se,collapse:xt,expand:k,patch:re,handlePatch:ke,openTransformModal:et,refresh:Fn,flush:Gn,validate:$n};At(!0);var Vr,Zn=c2(),Br=N(Zn),In=H=>{var ce=Ze(()=>(r(de),D(()=>r(de).length===0))),Me=Ze(()=>!r(ce)),q=Ze(()=>!r(ce)),X=Ze(()=>!r(ce)),me=Ze(()=>!r(ce)),qe=Ze(()=>!r(ce)),tt=Ze(()=>!r(ce));(function(nt,ht){lt(ht,!1);var qn=$(void 0,!0),Gt=g(ht,"readOnly",9,!1),rn=g(ht,"onExpandAll",9),zt=g(ht,"onCollapseAll",9),Xt=g(ht,"onFormat",9),Pr=g(ht,"onCompact",9),yt=g(ht,"onSort",9),hn=g(ht,"onTransform",9),on=g(ht,"onToggleSearch",9),fn=g(ht,"onUndo",9),Wn=g(ht,"onRedo",9),On=g(ht,"canExpandAll",9),wt=g(ht,"canCollapseAll",9),Or=g(ht,"canUndo",9),mr=g(ht,"canRedo",9),Nr=g(ht,"canFormat",9),wn=g(ht,"canCompact",9),En=g(ht,"canSort",9),wr=g(ht,"canTransform",9),M=g(ht,"onRenderMenu",9),G=$(void 0,!0),ye=$(void 0,!0),Ie={type:"button",icon:Uu,title:"Search (Ctrl+F)",className:"jse-search",onClick:on()},ve=$(void 0,!0);Z(()=>(y(rn()),y(On())),()=>{f(G,{type:"button",icon:W0,title:"Expand all",className:"jse-expand-all",onClick:rn(),disabled:!On()})}),Z(()=>(y(zt()),y(wt())),()=>{f(ye,{type:"button",icon:V0,title:"Collapse all",className:"jse-collapse-all",onClick:zt(),disabled:!wt()})}),Z(()=>(y(Gt()),r(G),r(ye),y(Xt()),y(Nr()),y(Pr()),y(wn()),y(yt()),y(En()),y(hn()),y(wr()),y(fn()),y(Or()),y(Wn()),y(mr())),()=>{f(ve,Gt()?[r(G),r(ye),{type:"separator"},Ie,{type:"space"}]:[r(G),r(ye),{type:"separator"},{type:"button",icon:Oh,title:"Format JSON: add proper indentation and new lines (Ctrl+I)",className:"jse-format",onClick:Xt(),disabled:Gt()||!Nr()},{type:"button",icon:eS,title:"Compact JSON: remove all white spacing and new lines (Ctrl+Shift+I)",className:"jse-compact",onClick:Pr(),disabled:Gt()||!wn()},{type:"separator"},{type:"button",icon:su,title:"Sort",className:"jse-sort",onClick:yt(),disabled:Gt()||!En()},{type:"button",icon:lu,title:"Transform contents (filter, sort, project)",className:"jse-transform",onClick:hn(),disabled:Gt()||!wr()},Ie,{type:"separator"},{type:"button",icon:Wv,title:"Undo (Ctrl+Z)",className:"jse-undo",onClick:fn(),disabled:!Or()},{type:"button",icon:Vv,title:"Redo (Ctrl+Shift+Z)",className:"jse-redo",onClick:Wn(),disabled:!mr()},{type:"space"}])}),Z(()=>(y(M()),r(ve)),()=>{f(qn,M()(r(ve))||r(ve))}),jn(),At(!0),od(nt,{get items(){return r(qn)}}),ct()})(H,{get readOnly(){return a()},onExpandAll:S,onCollapseAll:T,onFormat:_e,onCompact:ee,onSort:it,onTransform:We,onToggleSearch:Je,onUndo:Nt,onRedo:xn,get canExpandAll(){return r(Me)},get canCollapseAll(){return r(q)},get canFormat(){return r(X)},get canCompact(){return r(me)},get canSort(){return r(qe)},get canTransform(){return r(tt)},get canUndo(){return y(d()),D(()=>d().canUndo)},get canRedo(){return y(d()),D(()=>d().canRedo)},get onRenderMenu(){return E()}})};ie(Br,H=>{i()&&H(In)});var Qt=W(Br,2),Tt=H=>{var ce=o2(),Me=W(N(ce),2),q=N(Me),X=W(Me,2);ze(()=>No(q,"width: ".concat(r(ue)>0?r(xe)/r(ue)*100:0,"%"))),Ce("click",X,Rt),P(H,ce)};ie(Qt,H=>{r(ot)&&H(Tt)});var An=W(Qt,2),gr=H=>{var ce,Me=Ze(()=>(r(de),r(je),D(()=>Xn(r(de),r(je))))),q=s2(),X=Xe(q);Qn(X,ht=>f(Te,ht),()=>r(Te));var me=W(X,2),qe=ht=>{var qn=a2(),Gt=Xe(qn),rn=Ze(()=>(y(tu),y(Td),r(de),D(()=>"The JSON document is larger than ".concat(tu(Td),", ")+"and may crash your browser when loading it in text mode. Actual size: ".concat(tu(r(de).length),"."))));Oo(Gt,{get icon(){return Yi},type:"error",get message(){return r(rn)},actions:[{text:"Open anyway",title:"Open the document in text mode. This may freeze or crash your browser.",onClick:Sn},{text:"Open in tree mode",title:"Open the document in tree mode. Tree mode can handle large documents.",onClick:$t},{text:"Cancel",title:"Cancel opening this large document.",onClick:dn}],onClose:Se});var zt=N(W(Gt,2));ze(Xt=>ut(zt,Xt),[()=>(y(Ra),r(de),y(yu),D(()=>Ra(r(de)||"",yu)))]),P(ht,qn)};ie(me,ht=>{r(Me)&&ht(qe)});var tt=W(me,2),nt=ht=>{var qn=i2(),Gt=Xe(qn),rn=hn=>{(function(on,fn){lt(fn,!1);var Wn=g(fn,"editorState",8),On=$(),wt=$(),Or=$(),mr=$(),Nr=$();Z(()=>y(Wn()),()=>{var ve;f(On,(ve=Wn())===null||ve===void 0||(ve=ve.selection)===null||ve===void 0||(ve=ve.main)===null||ve===void 0?void 0:ve.head)}),Z(()=>(r(On),y(Wn())),()=>{var ve;f(wt,r(On)!==void 0?(ve=Wn())===null||ve===void 0||(ve=ve.doc)===null||ve===void 0?void 0:ve.lineAt(r(On)):void 0)}),Z(()=>r(wt),()=>{f(Or,r(wt)!==void 0?r(wt).number:void 0)}),Z(()=>(r(wt),r(On)),()=>{f(mr,r(wt)!==void 0&&r(On)!==void 0?r(On)-r(wt).from+1:void 0)}),Z(()=>y(Wn()),()=>{var ve;f(Nr,(ve=Wn())===null||ve===void 0||(ve=ve.selection)===null||ve===void 0||(ve=ve.ranges)===null||ve===void 0?void 0:ve.reduce((Ve,Qe)=>Ve+Qe.to-Qe.from,0))}),jn(),At();var wn=e2(),En=N(wn),wr=ve=>{var Ve=GS(),Qe=N(Ve);ze(()=>{var Ke;return ut(Qe,"Line: ".concat((Ke=r(Or))!==null&&Ke!==void 0?Ke:""))}),P(ve,Ve)};ie(En,ve=>{r(Or)!==void 0&&ve(wr)});var M=W(En,2),G=ve=>{var Ve=XS(),Qe=N(Ve);ze(()=>{var Ke;return ut(Qe,"Column: ".concat((Ke=r(mr))!==null&&Ke!==void 0?Ke:""))}),P(ve,Ve)};ie(M,ve=>{r(mr)!==void 0&&ve(G)});var ye=W(M,2),Ie=ve=>{var Ve=ZS(),Qe=N(Ve);ze(()=>{var Ke;return ut(Qe,"Selection: ".concat((Ke=r(Nr))!==null&&Ke!==void 0?Ke:""," characters"))}),P(ve,Ve)};ie(ye,ve=>{r(Nr)!==void 0&&r(Nr)>0&&ve(Ie)}),P(on,wn),ct()})(hn,{get editorState(){return r(Le)}})};ie(Gt,hn=>{s()&&hn(rn)});var zt=W(Gt,2),Xt=hn=>{Oo(hn,{type:"error",get icon(){return Yi},get message(){return r(qt),D(()=>r(qt).message)},get actions(){return r(o)},onClick:Rr,onClose:Se})};ie(zt,hn=>{r(qt)&&hn(Xt)});var Pr=W(zt,2),yt=hn=>{var on=Ze(()=>[{icon:Oh,text:"Format",title:"Format JSON: add proper indentation and new lines (Ctrl+I)",onClick:_e},{icon:Du,text:"No thanks",title:"Close this message",onClick:()=>f(Oe,!1)}]);Oo(hn,{type:"success",message:"Do you want to format the JSON?",get actions(){return r(on)},onClose:Se})};ie(Pr,hn=>{r(qt),r(Oe),y(Fp),r(de),D(()=>!r(qt)&&r(Oe)&&Fp(r(de)))&&hn(yt)}),zf(W(Pr,2),{get validationErrors(){return r(Pe)},selectError:Bt}),P(ht,qn)};ie(tt,ht=>{r(Me)||ht(nt)}),ze(()=>ce=Mt(X,1,"jse-contents svelte-k2b9e6",null,ce,{"jse-hidden":r(Me)})),P(H,q)},tr=H=>{P(H,l2())};return ie(An,H=>{ge?H(tr,!1):H(gr)}),Qn(Zn,H=>f(De,H),()=>r(De)),ze(()=>Vr=Mt(Zn,1,"jse-text-mode svelte-k2b9e6",null,Vr,{"no-main-menu":!i()})),P(e,Zn),jt(t,"focus",Se),jt(t,"collapse",xt),jt(t,"expand",k),jt(t,"patch",re),jt(t,"handlePatch",ke),jt(t,"openTransformModal",et),jt(t,"refresh",Fn),jt(t,"flush",Gn),jt(t,"validate",$n),ct(xr)}St(`/* over all fonts, sizes, and colors */
/* "consolas" for Windows, "menlo" for Mac with fallback to "monaco", 'Ubuntu Mono' for Ubuntu */
/* (at Mac this font looks too large at 14px, but 13px is too small for the font on Windows) */
/* main, menu, modal */
/* jsoneditor modal */
/* tooltip in text mode */
/* panels: navigation bar, gutter, search box */
/* navigation-bar */
/* context menu */
/* contents: json key and values */
/* contents: selected or hovered */
/* contents: section of collapsed items in an array */
/* contents: highlighting of search matches */
/* contents: inline tags inside the JSON document */
/* contents: table */
/* controls in modals: inputs, buttons, and \`a\` */
/* messages */
/* svelte-select */
/* color picker */
.jse-inline-value.svelte-1jv89ui {
  font-family: var(--jse-font-family-mono, consolas, menlo, monaco, "Ubuntu Mono", "source-code-pro", monospace);
  font-size: var(--jse-font-size-mono, 14px);
  line-height: var(--jse-line-height, calc(1em + 4px));
  border: none;
  padding: 0 calc(0.5 * var(--jse-padding, 10px));
  background: transparent;
  color: inherit;
  cursor: inherit;
}
.jse-inline-value.jse-highlight.svelte-1jv89ui {
  background-color: var(--jse-search-match-color, #ffe665);
  outline: var(--jse-search-match-outline, none);
}
.jse-inline-value.jse-highlight.jse-active.svelte-1jv89ui {
  background-color: var(--jse-search-match-active-color, var(--jse-search-match-color, #ffe665));
  outline: var(--jse-search-match-outline, 2px solid #e0be00);
}`);var d2=te('<button type="button"> </button>');St(`/* over all fonts, sizes, and colors */
/* "consolas" for Windows, "menlo" for Mac with fallback to "monaco", 'Ubuntu Mono' for Ubuntu */
/* (at Mac this font looks too large at 14px, but 13px is too small for the font on Windows) */
/* main, menu, modal */
/* jsoneditor modal */
/* tooltip in text mode */
/* panels: navigation bar, gutter, search box */
/* navigation-bar */
/* context menu */
/* contents: json key and values */
/* contents: selected or hovered */
/* contents: section of collapsed items in an array */
/* contents: highlighting of search matches */
/* contents: inline tags inside the JSON document */
/* contents: table */
/* controls in modals: inputs, buttons, and \`a\` */
/* messages */
/* svelte-select */
/* color picker */
.jse-column-header.svelte-5pxwfq {
  background: none;
  border: none;
  font-family: inherit;
  font-size: inherit;
  color: inherit;
  display: flex;
  gap: var(--jse-padding, 10px);
  padding: calc(0.5 * var(--jse-padding, 10px)) var(--jse-padding, 10px) calc(0.5 * var(--jse-padding, 10px)) calc(0.5 * var(--jse-padding, 10px));
  width: 100%;
}
.jse-column-header.svelte-5pxwfq:hover {
  background: var(--jse-table-header-background-highlight, #e8e8e8);
}
.jse-column-header.svelte-5pxwfq:not(.jse-column-header.jse-readonly) {
  cursor: pointer;
}
.jse-column-header.svelte-5pxwfq span.jse-column-sort-icon:where(.svelte-5pxwfq) {
  height: 1em;
}`);var v2=te('<span class="jse-column-sort-icon svelte-5pxwfq"><!></span>'),f2=te('<button type="button"><span class="jse-column-name"> </span> <!></button>');St(`/* over all fonts, sizes, and colors */
/* "consolas" for Windows, "menlo" for Mac with fallback to "monaco", 'Ubuntu Mono' for Ubuntu */
/* (at Mac this font looks too large at 14px, but 13px is too small for the font on Windows) */
/* main, menu, modal */
/* jsoneditor modal */
/* tooltip in text mode */
/* panels: navigation bar, gutter, search box */
/* navigation-bar */
/* context menu */
/* contents: json key and values */
/* contents: selected or hovered */
/* contents: section of collapsed items in an array */
/* contents: highlighting of search matches */
/* contents: inline tags inside the JSON document */
/* contents: table */
/* controls in modals: inputs, buttons, and \`a\` */
/* messages */
/* svelte-select */
/* color picker */
.jse-table-mode-welcome.svelte-1b9gnk8 {
  flex: 1;
  display: flex;
  flex-direction: column;
  overflow: auto;
  align-items: center;
  border-left: var(--jse-main-border, 1px solid #d7d7d7);
  border-right: var(--jse-main-border, 1px solid #d7d7d7);
}
.jse-table-mode-welcome.svelte-1b9gnk8:last-child {
  border-bottom: var(--jse-main-border, 1px solid #d7d7d7);
}
.jse-table-mode-welcome.svelte-1b9gnk8 .jse-space.jse-before:where(.svelte-1b9gnk8) {
  flex: 1;
}
.jse-table-mode-welcome.svelte-1b9gnk8 .jse-nested-arrays:where(.svelte-1b9gnk8) {
  display: flex;
  flex-direction: column;
  gap: var(--jse-padding, 10px);
  max-width: 400px;
  margin: 2em var(--jse-padding, 10px);
  font-family: var(--jse-font-family, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen-Sans, Ubuntu, Cantarell, "Helvetica Neue", sans-serif);
  font-size: var(--jse-font-size, 16px);
}
.jse-table-mode-welcome.svelte-1b9gnk8 .jse-nested-arrays:where(.svelte-1b9gnk8) .jse-nested-arrays-info:where(.svelte-1b9gnk8) {
  color: var(--jse-panel-color-readonly, #b2b2b2);
}
.jse-table-mode-welcome.svelte-1b9gnk8 .jse-nested-arrays:where(.svelte-1b9gnk8) .jse-nested-property:where(.svelte-1b9gnk8) {
  display: flex;
  align-items: center;
  gap: var(--jse-padding, 10px);
}
.jse-table-mode-welcome.svelte-1b9gnk8 .jse-nested-arrays:where(.svelte-1b9gnk8) .jse-nested-property:where(.svelte-1b9gnk8) .jse-nested-property-path:where(.svelte-1b9gnk8) {
  flex: 1;
}
.jse-table-mode-welcome.svelte-1b9gnk8 .jse-nested-arrays:where(.svelte-1b9gnk8) .jse-nested-property:where(.svelte-1b9gnk8) .jse-nested-property-path:where(.svelte-1b9gnk8) .jse-nested-property-count:where(.svelte-1b9gnk8) {
  opacity: 0.5;
  white-space: nowrap;
}
.jse-table-mode-welcome.svelte-1b9gnk8 .jse-nested-arrays:where(.svelte-1b9gnk8) button.jse-nested-array-action:where(.svelte-1b9gnk8) {
  text-align: left;
  border: none;
  background: transparent;
  color: inherit;
  cursor: pointer;
  font-family: var(--jse-font-family, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen-Sans, Ubuntu, Cantarell, "Helvetica Neue", sans-serif);
  font-size: var(--jse-font-size, 16px);
  padding: 5px;
  margin: 0;
  background: var(--jse-button-primary-background, var(--jse-theme-color, #3883fa));
  color: var(--jse-button-primary-color, #fff);
  padding: var(--jse-padding, 10px) calc(2 * var(--jse-padding, 10px));
  border-radius: 3px;
}
.jse-table-mode-welcome.svelte-1b9gnk8 .jse-nested-arrays:where(.svelte-1b9gnk8) button.jse-nested-array-action:where(.svelte-1b9gnk8):hover {
  background: var(--jse-button-primary-background-highlight, var(--jse-theme-color-highlight, #5f9dff));
}
.jse-table-mode-welcome.svelte-1b9gnk8 .jse-nested-arrays:where(.svelte-1b9gnk8) button.jse-nested-array-action:where(.svelte-1b9gnk8):disabled {
  background: var(--jse-button-primary-background-disabled, #9d9d9d);
}
.jse-table-mode-welcome.svelte-1b9gnk8 .jse-space.jse-after:where(.svelte-1b9gnk8) {
  flex: 2;
}`);var p2=te(`An empty document cannot be opened in table mode. You can go to tree mode instead, or paste
        a JSON Array using <b>Ctrl+V</b>.`,1),h2=te('<button type="button" class="jse-nested-array-action svelte-1b9gnk8">Extract</button>'),g2=te('<div class="jse-nested-property svelte-1b9gnk8"><div class="jse-nested-property-path svelte-1b9gnk8"> <span class="jse-nested-property-count svelte-1b9gnk8"> </span></div> <button type="button" class="jse-nested-array-action svelte-1b9gnk8"> </button> <!></div>'),m2=te('<div class="jse-table-mode-welcome svelte-1b9gnk8" role="none"><div class="jse-space jse-before svelte-1b9gnk8"></div> <div class="jse-nested-arrays svelte-1b9gnk8"><div class="jse-nested-arrays-title"> </div> <div class="jse-nested-arrays-info svelte-1b9gnk8"><!></div> <!> <button type="button" class="jse-nested-array-action svelte-1b9gnk8">Switch to tree mode</button></div> <div class="jse-space jse-after svelte-1b9gnk8"></div></div>');function b2(e,t){lt(t,!0);var n=vo(()=>t.json?function(h){var j=arguments.length>1&&arguments[1]!==void 0?arguments[1]:2,x=[];return function C(A,O){yr(A)&&O.length<j&&Object.keys(A).forEach(w=>{C(A[w],O.concat(w))}),vr(A)&&x.push(O)}(h,[]),x}(t.json).slice(0,99).filter(h=>h.length>0):[]),o=vo(()=>!un(r(n))),a=vo(()=>t.json===void 0&&(t.text===""||t.text===void 0)),i=vo(()=>r(o)?"Object with nested arrays":r(a)?"An empty document":yr(t.json)?"An object":vr(t.json)?"An empty array":"A ".concat(ff(t.json,t.parser))),s=m2();s.__click=()=>t.onClick();var l=W(N(s),2),c=N(l),u=N(c),d=W(c,2),v=N(d),p=h=>{P(h,Wr(`An object cannot be opened in table mode. You can open a nested array instead, or open the
        document in tree mode.`))},b=h=>{var j=Ut(),x=Xe(j),C=O=>{P(O,p2())},A=O=>{var w=Wr();ze(()=>{var z;return ut(w,"".concat((z=r(i))!==null&&z!==void 0?z:""," cannot be opened in table mode. You can open the document in tree mode instead."))}),P(O,w)};ie(x,O=>{r(a)&&!t.readOnly?O(C):O(A,!1)},!0),P(h,j)};ie(v,h=>{r(o)?h(p):h(b,!1)});var m=W(d,2);fr(m,17,()=>r(n),Cr,(h,j)=>{var x=vo(()=>function(K){return Ye(t.json,K).length}(r(j))),C=g2(),A=N(C),O=N(A),w=N(W(O)),z=W(A,2);z.__click=()=>t.openJSONEditorModal(r(j));var R=N(z),Y=W(z,2),E=K=>{var J=h2();J.__click=()=>t.extractPath(r(j)),P(K,J)};ie(Y,K=>{t.readOnly||K(E)}),ze(K=>{var J;ut(O,'"'.concat(K??"",'" ')),ut(w,"(".concat((J=r(x))!==null&&J!==void 0?J:""," ").concat(r(x)!==1?"items":"item",")")),ut(R,t.readOnly?"View":"Edit")},[()=>Fr(r(j))]),P(h,C)}),W(m,2).__click=()=>t.onChangeMode(kr.tree),ze(()=>ut(u,r(i))),P(e,s),ct()}uc(["click"]);St(`/* over all fonts, sizes, and colors */
/* "consolas" for Windows, "menlo" for Mac with fallback to "monaco", 'Ubuntu Mono' for Ubuntu */
/* (at Mac this font looks too large at 14px, but 13px is too small for the font on Windows) */
/* main, menu, modal */
/* jsoneditor modal */
/* tooltip in text mode */
/* panels: navigation bar, gutter, search box */
/* navigation-bar */
/* context menu */
/* contents: json key and values */
/* contents: selected or hovered */
/* contents: section of collapsed items in an array */
/* contents: highlighting of search matches */
/* contents: inline tags inside the JSON document */
/* contents: table */
/* controls in modals: inputs, buttons, and \`a\` */
/* messages */
/* svelte-select */
/* color picker */
.jse-column-header.svelte-1wgrwv3 {
  background: none;
  border: none;
  font-family: inherit;
  font-size: inherit;
  color: inherit;
  display: flex;
  gap: var(--jse-padding, 10px);
  padding: calc(0.5 * var(--jse-padding, 10px)) var(--jse-padding, 10px) calc(0.5 * var(--jse-padding, 10px)) calc(0.5 * var(--jse-padding, 10px));
  width: 100%;
}
.jse-column-header.svelte-1wgrwv3:hover {
  background: var(--jse-table-header-background-highlight, #e8e8e8);
}
.jse-column-header.svelte-1wgrwv3:not(.jse-column-header.jse-readonly) {
  cursor: pointer;
}`);var y2=te('<button type="button"><!></button>');St(`/* over all fonts, sizes, and colors */
/* "consolas" for Windows, "menlo" for Mac with fallback to "monaco", 'Ubuntu Mono' for Ubuntu */
/* (at Mac this font looks too large at 14px, but 13px is too small for the font on Windows) */
/* main, menu, modal */
/* jsoneditor modal */
/* tooltip in text mode */
/* panels: navigation bar, gutter, search box */
/* navigation-bar */
/* context menu */
/* contents: json key and values */
/* contents: selected or hovered */
/* contents: section of collapsed items in an array */
/* contents: highlighting of search matches */
/* contents: inline tags inside the JSON document */
/* contents: table */
/* controls in modals: inputs, buttons, and \`a\` */
/* messages */
/* svelte-select */
/* color picker */
.jse-table-mode.svelte-1p86y3c {
  flex: 1;
  display: flex;
  flex-direction: column;
  position: relative;
  background: var(--jse-background-color, #fff);
  min-width: 0;
  min-height: 0;
  font-family: var(--jse-font-family-mono, consolas, menlo, monaco, "Ubuntu Mono", "source-code-pro", monospace);
  font-size: var(--jse-font-size-mono, 14px);
  color: var(--jse-text-color, #4d4d4d);
  line-height: var(--jse-line-height, calc(1em + 4px));
}
.jse-table-mode.no-main-menu.svelte-1p86y3c {
  border-top: var(--jse-main-border, 1px solid #d7d7d7);
}
.jse-table-mode.svelte-1p86y3c .jse-search-box-container:where(.svelte-1p86y3c) {
  position: relative;
  height: 0;
  top: calc(var(--jse-line-height, calc(1em + 4px)) + 2 * var(--jse-padding, 10px));
  margin-right: calc(var(--jse-padding, 10px) + 20px);
  margin-left: var(--jse-padding, 10px);
  text-align: right;
  z-index: 3;
}
.jse-table-mode.svelte-1p86y3c .jse-hidden-input-label:where(.svelte-1p86y3c) {
  position: fixed;
  right: 0;
  top: 0;
  width: 0;
  height: 0;
}
.jse-table-mode.svelte-1p86y3c .jse-hidden-input-label:where(.svelte-1p86y3c) .jse-hidden-input:where(.svelte-1p86y3c) {
  width: 0;
  height: 0;
  padding: 0;
  border: 0;
  outline: none;
}
.jse-table-mode.svelte-1p86y3c .jse-contents:where(.svelte-1p86y3c) {
  flex: 1;
  align-items: flex-start;
  flex-direction: column;
  display: flex;
  overflow: auto;
  overflow-anchor: none;
  scrollbar-gutter: stable;
  border-left: var(--jse-main-border, 1px solid #d7d7d7);
  border-right: var(--jse-main-border, 1px solid #d7d7d7);
}
.jse-table-mode.svelte-1p86y3c .jse-contents:where(.svelte-1p86y3c):last-child {
  border-bottom: var(--jse-main-border, 1px solid #d7d7d7);
}
.jse-table-mode.svelte-1p86y3c .jse-contents:where(.svelte-1p86y3c) table.jse-table-main:where(.svelte-1p86y3c) {
  border-collapse: collapse;
  border-spacing: 0;
}
.jse-table-mode.svelte-1p86y3c .jse-contents:where(.svelte-1p86y3c) table.jse-table-main:where(.svelte-1p86y3c) .jse-table-invisible-start-section:where(.svelte-1p86y3c) td:where(.svelte-1p86y3c),
.jse-table-mode.svelte-1p86y3c .jse-contents:where(.svelte-1p86y3c) table.jse-table-main:where(.svelte-1p86y3c) .jse-table-invisible-end-section:where(.svelte-1p86y3c) td:where(.svelte-1p86y3c) {
  margin: 0;
  padding: 0;
}
.jse-table-mode.svelte-1p86y3c .jse-contents:where(.svelte-1p86y3c) table.jse-table-main:where(.svelte-1p86y3c) .jse-search-box-background:where(.svelte-1p86y3c) {
  background: var(--jse-table-header-background, #f5f5f5);
}
.jse-table-mode.svelte-1p86y3c .jse-contents:where(.svelte-1p86y3c) table.jse-table-main:where(.svelte-1p86y3c) .jse-table-invisible-end-section:where(.svelte-1p86y3c) td:where(.svelte-1p86y3c) {
  padding-bottom: var(--jse-padding, 10px);
}
.jse-table-mode.svelte-1p86y3c .jse-contents:where(.svelte-1p86y3c) table.jse-table-main:where(.svelte-1p86y3c) .jse-table-row:where(.svelte-1p86y3c):hover {
  background-color: var(--jse-table-row-odd-background, rgba(0, 0, 0, 0.05));
}
.jse-table-mode.svelte-1p86y3c .jse-contents:where(.svelte-1p86y3c) table.jse-table-main:where(.svelte-1p86y3c) .jse-table-row:where(.svelte-1p86y3c) .jse-table-cell:where(.svelte-1p86y3c) {
  padding: 0 var(--jse-padding, 10px) 0 0;
  vertical-align: top;
  white-space: nowrap;
  height: var(--jse-line-height, calc(1em + 4px));
}
.jse-table-mode.svelte-1p86y3c .jse-contents:where(.svelte-1p86y3c) table.jse-table-main:where(.svelte-1p86y3c) .jse-table-row:where(.svelte-1p86y3c) .jse-table-cell.jse-table-cell-header:where(.svelte-1p86y3c), .jse-table-mode.svelte-1p86y3c .jse-contents:where(.svelte-1p86y3c) table.jse-table-main:where(.svelte-1p86y3c) .jse-table-row:where(.svelte-1p86y3c) .jse-table-cell.jse-table-cell-gutter:where(.svelte-1p86y3c) {
  font-weight: normal;
  text-align: left;
  color: var(--jse-text-readonly, #8d8d8d);
  background: var(--jse-table-header-background, #f5f5f5);
}
.jse-table-mode.svelte-1p86y3c .jse-contents:where(.svelte-1p86y3c) table.jse-table-main:where(.svelte-1p86y3c) .jse-table-row:where(.svelte-1p86y3c) .jse-table-cell.jse-table-cell-header:where(.svelte-1p86y3c) {
  padding: 0;
  position: sticky;
  top: 0;
}
.jse-table-mode.svelte-1p86y3c .jse-contents:where(.svelte-1p86y3c) table.jse-table-main:where(.svelte-1p86y3c) .jse-table-row:where(.svelte-1p86y3c) .jse-table-cell.jse-table-cell-header:where(.svelte-1p86y3c) .jse-table-root-error:where(.svelte-1p86y3c) {
  padding: calc(0.5 * var(--jse-padding, 10px)) var(--jse-padding, 10px) calc(0.5 * var(--jse-padding, 10px)) calc(0.5 * var(--jse-padding, 10px));
}
.jse-table-mode.svelte-1p86y3c .jse-contents:where(.svelte-1p86y3c) table.jse-table-main:where(.svelte-1p86y3c) .jse-table-row:where(.svelte-1p86y3c) .jse-table-cell.jse-table-cell-gutter:where(.svelte-1p86y3c) {
  padding: 0 var(--jse-padding, 10px) 0 calc(0.5 * var(--jse-padding, 10px));
}
.jse-table-mode.svelte-1p86y3c .jse-contents:where(.svelte-1p86y3c) table.jse-table-main:where(.svelte-1p86y3c) .jse-table-row:where(.svelte-1p86y3c) .jse-table-cell:where(.svelte-1p86y3c) .jse-value-outer:where(.svelte-1p86y3c) {
  display: inline-block;
  cursor: var(--jse-contents-cursor, pointer);
}
.jse-table-mode.svelte-1p86y3c .jse-contents:where(.svelte-1p86y3c) table.jse-table-main:where(.svelte-1p86y3c) .jse-table-row:where(.svelte-1p86y3c) .jse-table-cell:where(.svelte-1p86y3c) .jse-value-outer:where(.svelte-1p86y3c):hover {
  background: var(--jse-hover-background-color, rgba(0, 0, 0, 0.06));
}
.jse-table-mode.svelte-1p86y3c .jse-contents:where(.svelte-1p86y3c) table.jse-table-main:where(.svelte-1p86y3c) .jse-table-row:where(.svelte-1p86y3c) .jse-table-cell:where(.svelte-1p86y3c) .jse-value-outer.jse-selected-value:where(.svelte-1p86y3c) {
  background: var(--jse-selection-background-color, #d3d3d3);
}
.jse-table-mode.svelte-1p86y3c .jse-contents:where(.svelte-1p86y3c) table.jse-table-main:where(.svelte-1p86y3c) .jse-table-row:where(.svelte-1p86y3c) .jse-table-cell:where(.svelte-1p86y3c) .jse-context-menu-anchor:where(.svelte-1p86y3c) {
  display: inline-flex;
  position: relative;
  vertical-align: top;
}
.jse-table-mode.svelte-1p86y3c .jse-contents.jse-contents-loading:where(.svelte-1p86y3c) {
  align-items: unset;
}
.jse-table-mode.svelte-1p86y3c .jse-contents.jse-contents-loading:where(.svelte-1p86y3c) .jse-loading-space:where(.svelte-1p86y3c) {
  flex: 1;
}
.jse-table-mode.svelte-1p86y3c .jse-contents.jse-contents-loading:where(.svelte-1p86y3c) .jse-loading:where(.svelte-1p86y3c) {
  flex: 2;
  text-align: center;
  color: var(--jse-panel-color-readonly, #b2b2b2);
  box-sizing: border-box;
  font-family: var(--jse-font-family, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen-Sans, Ubuntu, Cantarell, "Helvetica Neue", sans-serif);
  font-size: var(--jse-font-size, 16px);
}`);var j2=te('<div class="jse-table-root-error svelte-1p86y3c"><!></div>'),x2=te('<th class="jse-table-cell jse-table-cell-header svelte-1p86y3c"><!></th>'),w2=te('<th class="jse-table-cell jse-table-cell-header svelte-1p86y3c"><!></th>'),k2=te('<th class="jse-table-cell jse-table-cell-gutter svelte-1p86y3c"> <!></th>'),C2=te('<div class="jse-context-menu-anchor svelte-1p86y3c"><!></div>'),S2=te('<td class="jse-table-cell svelte-1p86y3c"><div><!><!></div> <!></td>'),O2=te('<td class="jse-table-cell svelte-1p86y3c"></td>'),E2=te('<tr class="jse-table-row svelte-1p86y3c"><!><!><!></tr>'),_2=te('<div class="jse-search-box-container svelte-1p86y3c"><!></div> <div class="jse-contents svelte-1p86y3c"><table class="jse-table-main svelte-1p86y3c"><tbody><tr class="jse-table-row jse-table-row-header svelte-1p86y3c"><th class="jse-table-cell jse-table-cell-header svelte-1p86y3c"><!></th><!><!></tr><tr><td class="svelte-1p86y3c"></td></tr><!><tr class="jse-table-invisible-end-section svelte-1p86y3c"><td class="svelte-1p86y3c"></td></tr></tbody></table></div> <!> <!> <!> <!>',1),M2=te("<!> <!>",1),A2=te('<label class="jse-hidden-input-label svelte-1p86y3c"><input type="text" tabindex="-1" class="jse-hidden-input svelte-1p86y3c"/></label> <!>',1),T2=te('<div class="jse-contents jse-contents-loading svelte-1p86y3c"><div class="jse-loading-space svelte-1p86y3c"></div> <div class="jse-loading svelte-1p86y3c">loading...</div></div>'),z2=te('<div role="table"><!> <!></div> <!> <!>',1);function R2(e,t){lt(t,!1);var n=$(void 0,!0),o=$(void 0,!0),a=$(void 0,!0),i=Lr("jsoneditor:TableMode"),{openAbsolutePopup:s,closeAbsolutePopup:l}=Ei("absolute-popup"),c=D0(),u=Bs(),d=Bs(),v=typeof window>"u";i("isSSR:",v);var p=g(t,"readOnly",9),b=g(t,"externalContent",9),m=g(t,"externalSelection",9),h=g(t,"history",9),j=g(t,"truncateTextSize",9),x=g(t,"mainMenuBar",9),C=g(t,"escapeControlCharacters",9),A=g(t,"escapeUnicodeCharacters",9),O=g(t,"flattenColumns",9),w=g(t,"parser",9),z=g(t,"parseMemoizeOne",9),R=g(t,"validator",9),Y=g(t,"validationParser",9),E=g(t,"indentation",9),K=g(t,"onChange",9),J=g(t,"onChangeMode",9),U=g(t,"onSelect",9),ae=g(t,"onUndo",9),ge=g(t,"onRedo",9),se=g(t,"onRenderValue",9),Te=g(t,"onRenderMenu",9),De=g(t,"onRenderContextMenu",9),Le=g(t,"onFocus",9),je=g(t,"onBlur",9),Oe=g(t,"onSortModal",9),Pe=g(t,"onTransformModal",9),ot=g(t,"onJSONEditorModal",9),xe=$(void 0,!0),ue=$(void 0,!0),we=$(void 0,!0),ft=$(void 0,!0),Jt=$(void 0,!0);Tf({onMount:no,onDestroy:Io,getWindow:()=>fc(r(ue)),hasFocus:()=>Ue&&document.hasFocus()||gf(r(ue)),onFocus:()=>{Rt=!0,Le()&&Le()()},onBlur:()=>{Rt=!1,je()&&je()()}});var pe,V=$(void 0,!0),he=$(void 0,!0),L=$(void 0,!0),de=$(void 0,!0),Q=$(void 0,!0),Ne=$(void 0,!0),ne=$(!1,!0),B=$(!1,!0);function bt(M){f(Ne,(pe=M)?O0(r(V),pe.items):void 0)}function st(M){return Se.apply(this,arguments)}function Se(){return(Se=mt(function*(M){f(oe,void 0),yield Fn(M)})).apply(this,arguments)}function xt(){f(ne,!1),f(B,!1),Ge()}var Fe=$(1e4,!0),He=$([],!0),pt=$(void 0,!0),Ue=!1,Rt=!1,k=$(!1,!0),S=$({},!0),T=$(600,!0),I=$(0,!0),re=18;function ke(M){f(oe,M)}function _e(M){r(oe)&&M!==void 0&&(Ro(M,Ji(r(oe)))&&Ro(M,rt(r(oe)))||(i("clearing selection: path does not exist anymore",r(oe)),f(oe,void 0)))}var ee=$(r(V)!==void 0?yv({json:r(V)}):void 0,!0),oe=$(Kl(m())?m():void 0,!0),it=$(void 0,!0),et=$(!1,!0);function We(M){if(!p()){i("onSortByHeader",M);var G=M.sortDirection===To.desc?-1:1;Kt(H0(r(V),[],M.path,G),(ye,Ie)=>({state:Ie,sortedColumn:M}))}}no(()=>{r(oe)&&sr(rt(r(oe)))});var Je=$(void 0,!0);function Nt(M){if(M.json!==void 0||M.text!==void 0){var G=r(V)!==void 0&&M.json!==void 0;h().add({type:"tree",undo:{patch:G?[{op:"replace",path:"",value:M.json}]:void 0,json:M.json,text:M.text,documentState:M.documentState,textIsRepaired:M.textIsRepaired,selection:la(M.selection),sortedColumn:M.sortedColumn},redo:{patch:G?[{op:"replace",path:"",value:r(V)}]:void 0,json:r(V),text:r(he),documentState:r(ee),textIsRepaired:r(et),selection:la(r(oe)),sortedColumn:r(it)}})}}var xn=$([],!0),Sn=ql(U0);function $t(M,G,ye,Ie){Ts(()=>{var ve;try{ve=Sn(M,G,ye,Ie)}catch(Ve){ve=[{path:[],message:"Failed to validate: "+Ve.message,severity:Ko.warning}]}Lt(ve,r(xn))||(i("validationErrors changed:",ve),f(xn,ve))},ve=>i("validationErrors updated in ".concat(ve," ms")))}function dn(){return i("validate"),r(L)?{parseError:r(L),isRepairable:!1}:($t(r(V),R(),w(),Y()),un(r(xn))?void 0:{validationErrors:r(xn)})}function Bt(M,G){if(i("patch",M,G),r(V)===void 0)throw new Error("Cannot apply patch: no JSON");var ye=r(V),Ie={json:void 0,text:r(he),documentState:r(ee),selection:la(r(oe)),sortedColumn:r(it),textIsRepaired:r(et)},ve=S0(r(V),M),Ve=f0(r(V),r(ee),M),Qe=kS(r(it),M,r(He)),Ke=typeof G=="function"?G(Ve.json,Ve.documentState,r(oe)):void 0;return f(V,Ke?.json!==void 0?Ke.json:Ve.json),f(ee,Ke?.state!==void 0?Ke.state:Ve.documentState),f(oe,Ke?.selection!==void 0?Ke.selection:r(oe)),f(it,Ke?.sortedColumn!==void 0?Ke.sortedColumn:Qe),f(he,void 0),f(et,!1),f(de,void 0),f(Q,void 0),f(L,void 0),h().add({type:"tree",undo:Ae({patch:ve},Ie),redo:{patch:M,json:void 0,text:void 0,documentState:r(ee),selection:la(r(oe)),sortedColumn:r(it),textIsRepaired:r(et)}}),{json:r(V),previousJson:ye,undo:ve,redo:M}}function Kt(M,G){i("handlePatch",M,G);var ye={json:r(V),text:r(he)},Ie=Bt(M,G);return ln(ye,Ie),Ie}function ln(M,G){if((M.json!==void 0||M?.text!==void 0)&&K()){if(r(he)!==void 0){var ye={text:r(he),json:void 0};K()(ye,M,{contentErrors:dn(),patchResult:G})}else if(r(V)!==void 0){var Ie={text:void 0,json:r(V)};K()(Ie,M,{contentErrors:dn(),patchResult:G})}}}function vt(M){i("pasted json as text",M),f(de,M)}function vn(M){i("pasted multiline text",{pastedText:M}),f(Q,M)}function Ot(M){var G=parseInt(M[0],10),ye=[String(G+1),...M.slice(1)];return Ro(r(V),ye)?Ht(ye):Ht(M)}function Ge(){i("focus"),r(ft)&&(r(ft).focus(),r(ft).select())}function Yt(M){f(I,M.target.scrollTop)}function It(){r(oe)||f(oe,function(){if(vr(r(V))&&!un(r(V))&&!un(r(He)))return Ht(["0",...r(He)[0]])}())}function Nn(){if(r(et)&&r(V)!==void 0){var M={json:r(V),text:r(he)},G={json:r(V),documentState:r(ee),selection:r(oe),sortedColumn:r(it),text:r(he),textIsRepaired:r(et)};f(he,void 0),f(et,!1),_e(r(V)),Nt(G),ln(M,void 0)}return{json:r(V),text:r(he)}}function Fn(M){var{scrollToWhenVisible:G=!0}=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},ye=r(ne)?Al:0,Ie=_h(M,r(He),S,re),ve=Ie-r(I)+ye+re,Ve=Hn(M);if(i("scrollTo",{path:M,top:Ie,scrollTop:r(I),elem:Ve}),!r(we))return Promise.resolve();var Qe=r(we).getBoundingClientRect();if(Ve&&!G){var Ke=Ve.getBoundingClientRect();if(Ke.bottom>Qe.top&&Ke.top<Qe.bottom)return Promise.resolve()}var Dt=-Math.max(ye+2*re,Qe.height/4);return new Promise(Ve?an=>{c(Ve,{container:r(we),offset:Dt,duration:300,callback:()=>{Un(M),an()}})}:an=>{c(ve,{container:r(we),offset:Dt,duration:300,callback:()=>{Vn(),Un(M),an()}})})}function Un(M){var G=Hn(M);if(G&&r(we)){var ye=r(we).getBoundingClientRect(),Ie=G.getBoundingClientRect();if(Ie.right>ye.right){var ve=Ie.right-ye.right;wo(we,r(we).scrollLeft+=ve)}if(Ie.left<ye.left){var Ve=ye.left-Ie.left;wo(we,r(we).scrollLeft-=Ve)}}}function sr(M){(function(G){if(r(we)){var{rowIndex:ye}=Mo(G,r(He)),Ie=_h(G,r(He),S,re),ve=Ie+(S[ye]||re),Ve=re,Qe=r(we).getBoundingClientRect(),Ke=r(I),Dt=r(I)+Qe.height-Ve;if(ve>Dt){var an=ve-Dt;wo(we,r(we).scrollTop+=an)}if(Ie<Ke){var Zt=Ke-Ie;wo(we,r(we).scrollTop-=Zt)}}})(M),Un(M)}function Hn(M){var G,ye,Ie=r(He).find(Ve=>ha(M.slice(1),Ve)),ve=Ie?M.slice(0,1).concat(Ie):M;return(G=(ye=r(we))===null||ye===void 0?void 0:ye.querySelector('td[data-path="'.concat(Zc(ve),'"]')))!==null&&G!==void 0?G:void 0}function er(M){var G,{anchor:ye,left:Ie,top:ve,width:Ve,height:Qe,offsetTop:Ke,offsetLeft:Dt,showTip:an}=M,Zt=function(F){var{json:fe,documentState:Be,selection:$e,readOnly:Re,onEditValue:kt,onEditRow:Ct,onToggleEnforceString:Ft,onCut:kn,onCopy:en,onPaste:Ln,onRemove:Et,onDuplicateRow:nr,onInsertBeforeRow:Tn,onInsertAfterRow:rr,onRemoveRow:gn}=F,gt=fe!==void 0,sn=!!$e,_t=fe!==void 0&&$e?Ye(fe,rt($e)):void 0,at=gt&&(Rn($e)||qr($e)||cn($e)),Pt=!Re&&gt&&$e!==void 0&&wu($e),cr=Pt&&!ir(_t),zn=!Re&&at,or=$e!==void 0&&da(fe,Be,rt($e));return[{type:"separator"},{type:"row",items:[{type:"column",items:[{type:"label",text:"Table cell:"},{type:"dropdown-button",main:{type:"button",onClick:()=>kt(),icon:zs,text:"Edit",title:"Edit the value (Double-click on the value)",disabled:!Pt},width:"11em",items:[{type:"button",icon:zs,text:"Edit",title:"Edit the value (Double-click on the value)",onClick:()=>kt(),disabled:!Pt},{type:"button",icon:or?pg:hg,text:"Enforce string",title:"Enforce keeping the value as string when it contains a numeric value",onClick:()=>Ft(),disabled:!cr}]},{type:"dropdown-button",main:{type:"button",onClick:()=>kn(!0),icon:Rs,text:"Cut",title:"Cut selected contents, formatted with indentation (Ctrl+X)",disabled:!zn},width:"10em",items:[{type:"button",icon:Rs,text:"Cut formatted",title:"Cut selected contents, formatted with indentation (Ctrl+X)",onClick:()=>kn(!0),disabled:Re||!at},{type:"button",icon:Rs,text:"Cut compacted",title:"Cut selected contents, without indentation (Ctrl+Shift+X)",onClick:()=>kn(!1),disabled:Re||!at}]},{type:"dropdown-button",main:{type:"button",onClick:()=>en(!0),icon:ci,text:"Copy",title:"Copy selected contents, formatted with indentation (Ctrl+C)",disabled:!at},width:"12em",items:[{type:"button",icon:ci,text:"Copy formatted",title:"Copy selected contents, formatted with indentation (Ctrl+C)",onClick:()=>en(!1),disabled:!at},{type:"button",icon:ci,text:"Copy compacted",title:"Copy selected contents, without indentation (Ctrl+Shift+C)",onClick:()=>en(!1),disabled:!at}]},{type:"button",onClick:()=>Ln(),icon:gg,text:"Paste",title:"Paste clipboard contents (Ctrl+V)",disabled:Re||!sn},{type:"button",onClick:()=>Et(),icon:Yd,text:"Remove",title:"Remove selected contents (Delete)",disabled:Re||!at}]},{type:"column",items:[{type:"label",text:"Table row:"},{type:"button",onClick:()=>Ct(),icon:zs,text:"Edit row",title:"Edit the current row",disabled:Re||!sn||!gt},{type:"button",onClick:()=>nr(),icon:mg,text:"Duplicate row",title:"Duplicate the current row (Ctrl+D)",disabled:Re||!sn||!gt},{type:"button",onClick:()=>Tn(),icon:Ss,text:"Insert before",title:"Insert a row before the current row",disabled:Re||!sn||!gt},{type:"button",onClick:()=>rr(),icon:Ss,text:"Insert after",title:"Insert a row after the current row",disabled:Re||!sn||!gt},{type:"button",onClick:()=>gn(),icon:Yd,text:"Remove row",title:"Remove current row",disabled:Re||!sn||!gt}]}]}]}({json:r(V),documentState:r(ee),selection:r(oe),readOnly:p(),onEditValue:Sr,onEditRow:hr,onToggleEnforceString:jr,onCut:Vr,onCopy:Br,onPaste:qt,onRemove:Qt,onDuplicateRow:An,onInsertBeforeRow:gr,onInsertAfterRow:tr,onRemoveRow:H}),Jn=(G=De()(Zt))!==null&&G!==void 0?G:Zt;if(Jn!==!1){var $r={left:Ie,top:ve,offsetTop:Ke,offsetLeft:Dt,width:Ve,height:Qe,anchor:ye,closeOnOuterClick:!0,onClose:()=>{Ue=!1,Ge()}};Ue=!0;var _=s(nb,{tip:an?"Tip: you can open this context menu via right-click or with Ctrl+Q":void 0,items:Jn,onRequestClose(){l(_),Ge()}},$r)}}function pr(M){if(!Dr(r(oe)))if(M&&(M.stopPropagation(),M.preventDefault()),M&&M.type==="contextmenu"&&M.target!==r(ft))er({left:M.clientX,top:M.clientY,width:Na,height:Pa,showTip:!1});else{var G,ye=(G=r(we))===null||G===void 0?void 0:G.querySelector(".jse-table-cell.jse-selected-value");if(ye)er({anchor:ye,offsetTop:2,width:Na,height:Pa,showTip:!1});else{var Ie,ve=(Ie=r(we))===null||Ie===void 0?void 0:Ie.getBoundingClientRect();ve&&er({top:ve.top+2,left:ve.left+2,width:Na,height:Pa,showTip:!1})}}}function Gn(M){er({anchor:l0(M.target,"BUTTON"),offsetTop:0,width:Na,height:Pa,showTip:!0})}function Sr(){if(!p()&&r(oe)){var M=rt(r(oe));ir(Ye(r(V),M))?nt(M):f(oe,Ht(M))}}function hr(){!p()&&r(oe)&&nt(rt(r(oe)).slice(0,1))}function jr(){if(!p()&&cn(r(oe))){var M=r(oe).path,G=dt(M),ye=Ye(r(V),M),Ie=!da(r(V),r(ee),M),ve=Ie?String(ye):cl(String(ye),w());i("handleToggleEnforceString",{enforceString:Ie,value:ye,updatedValue:ve}),Kt([{op:"replace",path:G,value:ve}],(Ve,Qe)=>({state:Xu(r(V),Qe,M,{type:"value",enforceString:Ie})}))}}function Xn(){return be.apply(this,arguments)}function be(){return(be=mt(function*(){if(i("apply pasted json",r(de)),r(de)){var{onPasteAsJson:M}=r(de);M(),setTimeout(Ge)}})).apply(this,arguments)}function qt(){return bn.apply(this,arguments)}function bn(){return(bn=mt(function*(){try{q(yield navigator.clipboard.readText())}catch(M){console.error(M),f(k,!0)}})).apply(this,arguments)}function $n(){return lr.apply(this,arguments)}function lr(){return(lr=mt(function*(){i("apply pasted multiline text",r(Q)),r(Q)&&(q(JSON.stringify(r(Q))),setTimeout(Ge))})).apply(this,arguments)}function Rr(){i("clear pasted json"),f(de,void 0),Ge()}function Vt(){i("clear pasted multiline text"),f(Q,void 0),Ge()}function xr(){J()(kr.text)}function Vr(M){return Zn.apply(this,arguments)}function Zn(){return(Zn=mt(function*(M){yield Q0({json:r(V),selection:r(oe),indentation:M?E():void 0,readOnly:p(),parser:w(),onPatch:Kt})})).apply(this,arguments)}function Br(){return In.apply(this,arguments)}function In(){return In=mt(function*(){var M=!(arguments.length>0&&arguments[0]!==void 0)||arguments[0];r(V)!==void 0&&(yield G0({json:r(V),selection:r(oe),indentation:M?E():void 0,parser:w()}))}),In.apply(this,arguments)}function Qt(){Z0({json:r(V),text:r(he),selection:r(oe),keepSelection:!0,readOnly:p(),onChange:K(),onPatch:Kt})}function Tt(M){p()||(i("extract",{path:M}),Kt(w0(r(V),Ht(M))))}function An(){(function(M){var{json:G,selection:ye,columns:Ie,readOnly:ve,onPatch:Ve}=M;if(!ve&&G!==void 0&&ye&&Ms(ye)){var{rowIndex:Qe,columnIndex:Ke}=Mo(rt(ye),Ie);ao("duplicate row",{rowIndex:Qe});var Dt=[String(Qe)];Ve(x0(G,[Dt]),(an,Zt)=>({state:Zt,selection:Ht($i({rowIndex:Qe<G.length?Qe+1:Qe,columnIndex:Ke},Ie))}))}})({json:r(V),selection:r(oe),columns:r(He),readOnly:p(),onPatch:Kt})}function gr(){(function(M){var{json:G,selection:ye,columns:Ie,readOnly:ve,onPatch:Ve}=M;if(!ve&&G!==void 0&&ye&&Ms(ye)){var{rowIndex:Qe}=Mo(rt(ye),Ie);ao("insert before row",{rowIndex:Qe}),Ve(As(G,[String(Qe)],[{key:"",value:yr(G[0])?{}:""}]))}})({json:r(V),selection:r(oe),columns:r(He),readOnly:p(),onPatch:Kt})}function tr(){(function(M){var{json:G,selection:ye,columns:Ie,readOnly:ve,onPatch:Ve}=M;if(!ve&&G!==void 0&&ye&&Ms(ye)){var{rowIndex:Qe,columnIndex:Ke}=Mo(rt(ye),Ie);ao("insert after row",{rowIndex:Qe});var Dt=Qe+1,an=[String(Dt)],Zt=[{key:"",value:yr(G[0])?{}:""}];Ve(Dt<G.length?As(G,an,Zt):wv(G,[],Zt),(Jn,$r)=>({state:$r,selection:Ht($i({rowIndex:Dt,columnIndex:Ke},Ie))}))}})({json:r(V),selection:r(oe),columns:r(He),readOnly:p(),onPatch:Kt})}function H(){(function(M){var{json:G,selection:ye,columns:Ie,readOnly:ve,onPatch:Ve}=M;if(!ve&&G!==void 0&&ye&&Ms(ye)){var{rowIndex:Qe,columnIndex:Ke}=Mo(rt(ye),Ie);ao("remove row",{rowIndex:Qe}),Ve(Cu([[String(Qe)]]),(Dt,an)=>{var Zt=Qe<Dt.length?Qe:Qe>0?Qe-1:void 0,Jn=Zt!==void 0?Ht($i({rowIndex:Zt,columnIndex:Ke},Ie)):void 0;return ao("remove row new selection",{rowIndex:Qe,newRowIndex:Zt,newSelection:Jn}),{state:an,selection:Jn}})}})({json:r(V),selection:r(oe),columns:r(He),readOnly:p(),onPatch:Kt})}function ce(){return(ce=mt(function*(M){yield eb({char:M,selectInside:!1,json:r(V),selection:r(oe),readOnly:p(),parser:w(),onPatch:Kt,onReplaceJson:X,onSelect:ke})})).apply(this,arguments)}function Me(M){var G;M.preventDefault(),q((G=M.clipboardData)===null||G===void 0?void 0:G.getData("text/plain"))}function q(M){M!==void 0&&X0({clipboardText:M,json:r(V),selection:r(oe),readOnly:p(),parser:w(),onPatch:Kt,onChangeText:me,onPasteMultilineText:vn,openRepairModal:ht})}function X(M,G){var ye={json:r(V),text:r(he)},Ie={json:r(V),documentState:r(ee),selection:r(oe),sortedColumn:r(it),text:r(he),textIsRepaired:r(et)},ve=xo(M,r(ee)),Ve=typeof G=="function"?G(M,ve,r(oe)):void 0;f(V,Ve?.json!==void 0?Ve.json:M),f(ee,Ve?.state!==void 0?Ve.state:ve),f(oe,Ve?.selection!==void 0?Ve.selection:r(oe)),f(it,void 0),f(he,void 0),f(et,!1),f(L,void 0),_e(r(V)),Nt(Ie),ln(ye,void 0)}function me(M,G){i("handleChangeText");var ye={json:r(V),text:r(he)},Ie={json:r(V),documentState:r(ee),selection:r(oe),sortedColumn:r(it),text:r(he),textIsRepaired:r(et)};try{f(V,z()(M)),f(ee,xo(r(V),r(ee))),f(he,void 0),f(et,!1),f(L,void 0)}catch(Ve){try{f(V,z()(Vo(M))),f(ee,xo(r(V),r(ee))),f(he,M),f(et,!0),f(L,void 0)}catch{f(V,void 0),f(ee,void 0),f(he,M),f(et,!1),f(L,r(he)!==""?Ys(r(he),Ve.message||String(Ve)):void 0)}}if(typeof G=="function"){var ve=G(r(V),r(ee),r(oe));f(V,ve?.json!==void 0?ve.json:r(V)),f(ee,ve?.state!==void 0?ve.state:r(ee)),f(oe,ve?.selection!==void 0?ve.selection:r(oe))}_e(r(V)),Nt(Ie),ln(ye,void 0)}function qe(M){i("select validation error",M),f(oe,Ht(M.path)),Fn(M.path)}function tt(M){if(r(V)!==void 0){var{id:G,onTransform:ye,onClose:Ie}=M,ve=M.rootPath||[];Ue=!0,Pe()({id:G||d,json:r(V),rootPath:ve||[],onTransform:Ve=>{ye?ye({operations:Ve,json:r(V),transformedJson:Ho(r(V),Ve)}):(i("onTransform",ve,Ve),Kt(Ve))},onClose:()=>{Ue=!1,setTimeout(Ge),Ie&&Ie()}})}}function nt(M){i("openJSONEditorModal",{path:M}),Ue=!0,ot()({content:{json:Ye(r(V),M)},path:M,onPatch:Kt,onClose:()=>{Ue=!1,setTimeout(Ge)}})}function ht(M,G){f(Jt,{text:M,onParse:ye=>vc(ye,Ie=>dc(Ie,w())),onRepair:Zm,onApply:G,onClose:Ge})}function qn(){(function(M){p()||r(V)===void 0||(Ue=!0,Oe()({id:u,json:r(V),rootPath:M,onSort:G=>{var{operations:ye,itemPath:Ie,direction:ve}=G;i("onSort",ye,M,Ie,ve),Kt(ye,(Ve,Qe)=>({state:Qe,sortedColumn:{path:Ie,sortDirection:ve===-1?To.desc:To.asc}}))},onClose:()=>{Ue=!1,setTimeout(Ge)}}))})([])}function Gt(){tt({rootPath:[]})}function rn(M){i("openFind",{findAndReplace:M}),f(ne,!1),f(B,!1),Vn(),f(ne,!0),f(B,M)}function zt(){if(!p()&&h().canUndo){var M=h().undo();if(xu(M)){var G={json:r(V),text:r(he)};f(V,M.undo.patch?Ho(r(V),M.undo.patch):M.undo.json),f(ee,M.undo.documentState),f(oe,M.undo.selection),f(it,M.undo.sortedColumn),f(he,M.undo.text),f(et,M.undo.textIsRepaired),f(L,void 0),i("undo",{item:M,json:r(V)}),ln(G,M.undo.patch&&M.redo.patch?{json:r(V),previousJson:G.json,redo:M.undo.patch,undo:M.redo.patch}:void 0),Ge(),r(oe)&&Fn(rt(r(oe)),{scrollToWhenVisible:!1})}else ae()(M)}}function Xt(){if(!p()&&h().canRedo){var M=h().redo();if(xu(M)){var G={json:r(V),text:r(he)};f(V,M.redo.patch?Ho(r(V),M.redo.patch):M.redo.json),f(ee,M.redo.documentState),f(oe,M.redo.selection),f(it,M.redo.sortedColumn),f(he,M.redo.text),f(et,M.redo.textIsRepaired),f(L,void 0),i("redo",{item:M,json:r(V)}),ln(G,M.undo.patch&&M.redo.patch?{json:r(V),previousJson:G.json,redo:M.redo.patch,undo:M.undo.patch}:void 0),Ge(),r(oe)&&Fn(rt(r(oe)),{scrollToWhenVisible:!1})}else ge()(M)}}function Pr(M){f(T,M.getBoundingClientRect().height)}Z(()=>(y(C()),y(A())),()=>{f(xe,pf({escapeControlCharacters:C(),escapeUnicodeCharacters:A()}))}),Z(()=>r(ne),()=>{(function(M){if(r(we)){var G=M?Al:-100;r(we).scrollTo({top:wo(we,r(we).scrollTop+=G),left:r(we).scrollLeft})}})(r(ne))}),Z(()=>y(b()),()=>{(function(M){var G={json:r(V)},ye=Fl(M)?M.text!==r(he):!Lt(G.json,M.json);if(i("update external content",{isChanged:ye}),ye){var Ie={json:r(V),documentState:r(ee),selection:r(oe),sortedColumn:r(it),text:r(he),textIsRepaired:r(et)};if(Fl(M))try{f(V,z()(M.text)),f(ee,xo(r(V),r(ee))),f(he,M.text),f(et,!1),f(L,void 0)}catch(ve){try{f(V,z()(Vo(M.text))),f(ee,xo(r(V),r(ee))),f(he,M.text),f(et,!0),f(L,void 0)}catch{f(V,void 0),f(ee,void 0),f(he,M.text),f(et,!1),f(L,r(he)!==""?Ys(r(he),ve.message||String(ve)):void 0)}}else f(V,M.json),f(ee,xo(r(V),r(ee))),f(he,void 0),f(et,!1),f(L,void 0);_e(r(V)),f(it,void 0),Nt(Ie)}})(b())}),Z(()=>y(m()),()=>{(function(M){Lt(r(oe),M)||(i("applyExternalSelection",{selection:r(oe),externalSelection:M}),Kl(M)&&f(oe,M))})(m())}),Z(()=>(r(He),r(V),y(O()),r(Fe)),()=>{f(He,vr(r(V))?function(M,G){var ye=new Set(G.map(dt)),Ie=new Set(M.map(dt));for(var ve of ye)Ie.has(ve)||ye.delete(ve);for(var Ve of Ie)ye.has(Ve)||ye.add(Ve);return[...ye].map(fo)}(yS(r(V),O(),r(Fe)),r(He)):[])}),Z(()=>(r(V),r(He)),()=>{f(pt,!(!r(V)||un(r(He))))}),Z(()=>(r(V),r(Fe)),()=>{f(n,Array.isArray(r(V))&&r(V).length>r(Fe))}),Z(()=>(r(I),r(T),r(V),r(ne),Al),()=>{f(o,jS(r(I),r(T),r(V),S,re,r(ne)?Al:0))}),Z(()=>r(V),()=>{r(V),r(we)&&r(we).scrollTo({top:r(we).scrollTop,left:r(we).scrollLeft})}),Z(()=>r(oe),()=>{var M;M=r(oe),Lt(M,m())||(i("onSelect",M),U()(M))}),Z(()=>(y(p()),y(j()),y(w()),r(xe),r(V),r(ee),y(se())),()=>{f(Je,{mode:kr.table,readOnly:p(),truncateTextSize:j(),parser:w(),normalization:r(xe),getJson:()=>r(V),getDocumentState:()=>r(ee),findElement:Hn,findNextInside:Ot,focus:Ge,onPatch:(M,G)=>Kt(function(ye,Ie){return ye.flatMap(ve=>{if(Xv(ve)){var Ve=fo(ve.path);if(Ve.length>0){for(var Qe=[ve],Ke=tn(Ve);Ke.length>0&&!Ro(Ie,Ke);)Qe.unshift({op:"add",path:dt(Ke),value:{}}),Ke=tn(Ke);return Qe}}return ve})}(M,r(V)),G),onSelect:ke,onFind:rn,onPasteJson:vt,onRenderValue:se()})}),Z(()=>(r(V),y(R()),y(w()),y(Y())),()=>{$t(r(V),R(),w(),Y())}),Z(()=>(r(xn),r(He)),()=>{f(a,xS(r(xn),r(He)))}),jn();var yt={validate:dn,patch:Bt,focus:Ge,acceptAutoRepair:Nn,scrollTo:Fn,findElement:Hn,openTransformModal:tt};At(!0);var hn=z2();Ce("mousedown",Da,function(M){!ul(M.target,G=>G===r(ue))&&Dr(r(oe))&&(i("click outside the editor, exit edit mode"),f(oe,la(r(oe))),Rt&&r(ft)&&(r(ft).focus(),r(ft).blur()),i("blur (outside editor)"),r(ft)&&r(ft).blur())});var on,fn=Xe(hn),Wn=N(fn),On=M=>{(function(G,ye){lt(ye,!1);var Ie=g(ye,"containsValidArray",9),ve=g(ye,"readOnly",9),Ve=g(ye,"showSearch",13,!1),Qe=g(ye,"history",9),Ke=g(ye,"onSort",9),Dt=g(ye,"onTransform",9),an=g(ye,"onContextMenu",9),Zt=g(ye,"onUndo",9),Jn=g(ye,"onRedo",9),$r=g(ye,"onRenderMenu",9);function _(){Ve(!Ve())}var F=$(void 0,!0),fe=$(void 0,!0);Z(()=>(y(ve()),y(Ke()),y(Ie()),y(Dt()),y(an()),y(Zt()),y(Qe()),y(Jn())),()=>{f(F,ve()?[{type:"space"}]:[{type:"button",icon:su,title:"Sort",className:"jse-sort",onClick:Ke(),disabled:ve()||!Ie()},{type:"button",icon:lu,title:"Transform contents (filter, sort, project)",className:"jse-transform",onClick:Dt(),disabled:ve()||!Ie()},{type:"button",icon:Uu,title:"Search (Ctrl+F)",className:"jse-search",onClick:_,disabled:!Ie()},{type:"button",icon:bg,title:yf,className:"jse-contextmenu",onClick:an()},{type:"separator"},{type:"button",icon:Wv,title:"Undo (Ctrl+Z)",className:"jse-undo",onClick:Zt(),disabled:!Qe().canUndo},{type:"button",icon:Vv,title:"Redo (Ctrl+Shift+Z)",className:"jse-redo",onClick:Jn(),disabled:!Qe().canRedo},{type:"space"}])}),Z(()=>(y($r()),r(F)),()=>{f(fe,$r()(r(F))||r(F))}),jn(),At(!0),od(G,{get items(){return r(fe)}}),ct()})(M,{get containsValidArray(){return r(pt)},get readOnly(){return p()},get history(){return h()},onSort:qn,onTransform:Gt,onUndo:zt,onRedo:Xt,onContextMenu:Gn,get onRenderMenu(){return Te()},get showSearch(){return r(ne)},set showSearch(G){f(ne,G)},$$legacy:!0})};ie(Wn,M=>{x()&&M(On)});var wt=W(Wn,2),Or=M=>{var G=A2(),ye=Xe(G),Ie=N(ye);Ie.readOnly=!0,Qn(Ie,Ke=>f(ft,Ke),()=>r(ft));var ve=W(ye,2),Ve=Ke=>{var Dt=_2(),an=Xe(Dt);J0(N(an),{get json(){return r(V)},get documentState(){return r(ee)},get parser(){return w()},get showSearch(){return r(ne)},get showReplace(){return r(B)},get readOnly(){return p()},get columns(){return r(He)},onSearch:bt,onFocus:st,onPatch:Kt,onClose:xt});var Zt=W(an,2),Jn=N(Zt),$r=N(Jn),_=N($r),F=N(_),fe=N(F),Be=at=>{var Pt=Ze(()=>(y(ys),r(a),D(()=>{var br;return ys([],(br=r(a))===null||br===void 0?void 0:br.root)}))),cr=Ut(),zn=Xe(cr),or=br=>{var Hr=j2();Ls(N(Hr),{get validationError(){return r(Pt)},get onExpand(){return Ao}}),P(br,Hr)};ie(zn,br=>{r(Pt)&&br(or)}),P(at,cr)};ie(fe,at=>{y(un),r(a),D(()=>{var Pt;return!un((Pt=r(a))===null||Pt===void 0?void 0:Pt.root)})&&at(Be)});var $e=W(F);fr($e,1,()=>r(He),Cr,(at,Pt)=>{var cr=x2();(function(zn,or){lt(or,!1);var br=$(void 0,!0),Hr=$(void 0,!0),ka=$(void 0,!0),ho=g(or,"path",9),Do=g(or,"sortedColumn",9),ra=g(or,"readOnly",9),Uo=g(or,"onSort",9);Z(()=>(y(ho()),Fr),()=>{f(br,un(ho())?"values":Fr(ho()))}),Z(()=>(y(Do()),y(ho())),()=>{var Er;f(Hr,Do()&&Lt(ho(),(Er=Do())===null||Er===void 0?void 0:Er.path)?Do().sortDirection:void 0)}),Z(()=>(r(Hr),Hp),()=>{f(ka,r(Hr)?Hp[r(Hr)]:void 0)}),jn(),At(!0);var ro,Jr=f2(),go=N(Jr),Ca=N(go),mo=W(go,2),Cn=Er=>{var _r=v2(),Mi=N(_r),us=Ze(()=>(r(Hr),y(To),y(Fa),y(Zf),D(()=>r(Hr)===To.asc?Fa:Zf)));nn(Mi,{get data(){return r(us)}}),ze(()=>yn(_r,"title","Currently sorted in ".concat(r(ka)," order"))),P(Er,_r)};ie(mo,Er=>{r(Hr)!==void 0&&Er(Cn)}),ze(Er=>{ro=Mt(Jr,1,"jse-column-header svelte-5pxwfq",null,ro,{"jse-readonly":ra()}),yn(Jr,"title",ra()?r(br):r(br)+" (Click to sort the data by this column)"),ut(Ca,Er)},[()=>(y(Ra),r(br),y(50),D(()=>Ra(r(br),50)))]),Ce("click",Jr,function(){ra()||Uo()({path:ho(),sortDirection:r(Hr)===To.asc?To.desc:To.asc})}),P(zn,Jr),ct()})(N(cr),{get path(){return r(Pt)},get sortedColumn(){return r(it)},get readOnly(){return p()},onSort:We}),P(at,cr)});var Re=W($e),kt=at=>{var Pt=w2(),cr=N(Pt),zn=Ze(()=>(r(V),D(()=>Array.isArray(r(V))?r(V).length:0)));(function(or,br){lt(br,!1);var Hr=g(br,"count",9),ka=g(br,"maxSampleCount",9),ho=g(br,"readOnly",9),Do=g(br,"onRefresh",9);At(!0);var ra,Uo=y2();nn(N(Uo),{get data(){return i1}}),ze(()=>{ra=Mt(Uo,1,"jse-column-header svelte-1wgrwv3",null,ra,{"jse-readonly":ho()}),yn(Uo,"title","The Columns are created by sampling ".concat(ka()," items out of ").concat(Hr(),". ")+"If you're missing a column, click here to sample all of the items instead of a subset. This is slower.")}),Ce("click",Uo,()=>Do()()),P(or,Uo),ct()})(cr,{get count(){return r(zn)},get maxSampleCount(){return r(Fe)},get readOnly(){return p()},onRefresh:()=>f(Fe,1/0)}),P(at,Pt)};ie(Re,at=>{r(n)&&at(kt)});var Ct,Ft,kn=W(_),en=N(kn),Ln=W(kn);fr(Ln,1,()=>(r(o),D(()=>r(o).visibleItems)),Cr,(at,Pt,cr)=>{var zn=Ze(()=>(r(o),D(()=>r(o).startIndex+cr))),or=Ze(()=>(r(a),y(r(zn)),D(()=>r(a).rows[r(zn)]))),br=Ze(()=>(y(ys),y(r(zn)),y(r(or)),D(()=>{var ro;return ys([String(r(zn))],(ro=r(or))===null||ro===void 0?void 0:ro.row)}))),Hr=Ze(()=>(y(aa),r(V),r(Ne),y(r(zn)),D(()=>aa(r(V),r(Ne),[String(r(zn))])))),ka=E2(),ho=N(ka);Fm(ho,()=>r(zn),ro=>{var Jr=k2(),go=N(Jr),Ca=W(go),mo=Cn=>{Ls(Cn,{get validationError(){return r(br)},get onExpand(){return Ao}})};ie(Ca,Cn=>{r(br)&&Cn(mo)}),io(Jr,(Cn,Er)=>Wc?.(Cn,Er),()=>Cn=>function(Er,_r){S[_r]=Er.getBoundingClientRect().height}(Cn,r(zn))),ze(()=>{var Cn;return ut(go,"".concat((Cn=r(zn))!==null&&Cn!==void 0?Cn:""," "))}),P(ro,Jr)});var Do=W(ho);fr(Do,1,()=>r(He),Cr,(ro,Jr,go,Ca)=>{var mo,Cn=Ze(()=>(y(r(zn)),r(Jr),D(()=>[String(r(zn))].concat(r(Jr))))),Er=Ze(()=>(y(Ye),r(Pt),r(Jr),D(()=>Ye(r(Pt),r(Jr))))),_r=Ze(()=>(y(cn),r(oe),y(ha),y(r(Cn)),D(()=>cn(r(oe))&&ha(r(oe).path,r(Cn))))),Mi=Ze(()=>(y(r(or)),D(()=>{var Mr;return(Mr=r(or))===null||Mr===void 0?void 0:Mr.columns[go]}))),us=Ze(()=>(y(ys),y(r(Cn)),y(r(Mi)),D(()=>ys(r(Cn),r(Mi))))),Ai=S2(),dl=N(Ai),ds=N(dl),vl=Mr=>{var Eo=Ze(()=>(y(Su),y(aa),r(Pt),y(r(Hr)),r(Jr),D(()=>Su(aa(r(Pt),r(Hr),r(Jr)))))),fl=Ze(()=>(y(r(Eo)),D(()=>!!r(Eo)&&r(Eo).some(zi=>zi.active)))),pl=Ze(()=>(y(un),y(r(Eo)),D(()=>!un(r(Eo)))));(function(zi,Qr){lt(Qr,!1);var hl=g(Qr,"path",9),Yf=g(Qr,"value",9),Qf=g(Qr,"parser",9),Nb=g(Qr,"isSelected",9),$b=g(Qr,"containsSearchResult",9),Ib=g(Qr,"containsActiveSearchResult",9),qb=g(Qr,"onEdit",9);At(!0);var Gf,bc=d2(),Db=N(bc);ze(gl=>{Gf=Mt(bc,1,"jse-inline-value svelte-1jv89ui",null,Gf,{"jse-selected":Nb(),"jse-highlight":$b(),"jse-active":Ib()}),ut(Db,gl)},[()=>(y(Ra),y(Qf()),y(Yf()),y(50),D(()=>{var gl;return Ra((gl=Qf().stringify(Yf()))!==null&&gl!==void 0?gl:"",50)}))]),Ce("dblclick",bc,()=>qb()(hl())),P(zi,bc),ct()})(Mr,{get path(){return r(Cn)},get value(){return r(Er)},get parser(){return w()},get isSelected(){return r(_r)},get containsSearchResult(){return r(pl)},get containsActiveSearchResult(){return r(fl)},onEdit:nt})},ud=Mr=>{var Eo=Ze(()=>(y(aa),r(V),r(Ne),y(r(Cn)),D(()=>{var Qr;return(Qr=aa(r(V),r(Ne),r(Cn)))===null||Qr===void 0?void 0:Qr.searchResults}))),fl=Ze(()=>r(Er)!==void 0?r(Er):""),pl=Ze(()=>(y(da),r(V),r(ee),y(r(Cn)),D(()=>da(r(V),r(ee),r(Cn))))),zi=Ze(()=>r(_r)?r(oe):void 0);F0(Mr,{get path(){return r(Cn)},get value(){return r(fl)},get enforceString(){return r(pl)},get selection(){return r(zi)},get searchResultItems(){return r(Eo)},get context(){return r(Je)}})};ie(ds,Mr=>{y(ir),y(r(Er)),D(()=>ir(r(Er)))?Mr(vl):Mr(ud,!1)});var dd=W(ds),vd=Mr=>{var Eo=C2();ni(N(Eo),{selected:!0,onContextMenu:er}),P(Mr,Eo)};ie(dd,Mr=>{y(p()),y(r(_r)),y(Dr),r(oe),D(()=>!p()&&r(_r)&&!Dr(r(oe)))&&Mr(vd)});var oa=W(dl,2),Ti=Mr=>{Ls(Mr,{get validationError(){return r(us)},get onExpand(){return Ao}})};ie(oa,Mr=>{r(us)&&Mr(Ti)}),ze(Mr=>{yn(Ai,"data-path",Mr),mo=Mt(dl,1,"jse-value-outer svelte-1p86y3c",null,mo,{"jse-selected-value":r(_r)})},[()=>(y(Zc),y(r(Cn)),D(()=>Zc(r(Cn))))]),P(ro,Ai)});var ra=W(Do),Uo=ro=>{P(ro,O2())};ie(ra,ro=>{r(n)&&ro(Uo)}),P(at,ka)});var Et,nr=N(W(Ln));Qn(Zt,at=>f(we,at),()=>r(we)),io(Zt,(at,Pt)=>Wc?.(at,Pt),()=>Pr),Kr(()=>Ce("scroll",Zt,Yt));var Tn=W(Zt,2),rr=at=>{var Pt=Ze(()=>(r(de),D(()=>"You pasted a JSON ".concat(Array.isArray(r(de).contents)?"array":"object"," as text")))),cr=Ze(()=>[{icon:xi,text:"Paste as JSON instead",title:"Paste the text as JSON instead of a single value",onMouseDown:Xn},{text:"Leave as is",title:"Keep the pasted content as a single value",onClick:Rr}]);Oo(at,{type:"info",get message(){return r(Pt)},get actions(){return r(cr)}})};ie(Tn,at=>{r(de)&&at(rr)});var gn=W(Tn,2),gt=at=>{var Pt=Ze(()=>[{icon:xi,text:"Paste as string instead",title:"Paste the clipboard data as a single string value instead of an array",onClick:$n},{text:"Leave as is",title:"Keep the pasted array",onClick:Vt}]);Oo(at,{type:"info",message:"Multiline text was pasted as array",get actions(){return r(Pt)}})};ie(gn,at=>{r(Q)&&at(gt)});var sn=W(gn,2),_t=at=>{var Pt=Ze(()=>p()?[]:[{icon:Hv,text:"Ok",title:"Accept the repaired document",onClick:Nn},{icon:cu,text:"Repair manually instead",title:"Leave the document unchanged and repair it manually instead",onClick:xr}]);Oo(at,{type:"success",message:"The loaded JSON document was invalid but is successfully repaired.",get actions(){return r(Pt)},onClose:Ge})};ie(sn,at=>{r(et)&&at(_t)}),zf(W(sn,2),{get validationErrors(){return r(xn)},selectError:qe}),ze(()=>{Ct=Mt(kn,1,"jse-table-invisible-start-section svelte-1p86y3c",null,Ct,{"jse-search-box-background":r(ne)}),yn(en,"colspan",(r(He),D(()=>r(He).length))),Ft=No(en,"",Ft,{height:(r(o),D(()=>r(o).startHeight+"px"))}),yn(nr,"colspan",(r(He),D(()=>r(He).length))),Et=No(nr,"",Et,{height:(r(o),D(()=>r(o).endHeight+"px"))})}),P(Ke,Dt)},Qe=Ke=>{var Dt=Ut(),an=Xe(Dt),Zt=$r=>{var _=M2(),F=Xe(_),fe=Ze(()=>p()?[]:[{icon:cu,text:"Repair manually",title:'Open the document in "code" mode and repair it manually',onClick:xr}]);Oo(F,{type:"error",message:"The loaded JSON document is invalid and could not be repaired automatically.",get actions(){return r(fe)}}),tb(W(F,2),{get text(){return r(he)},get json(){return r(V)},get indentation(){return E()},get parser(){return w()}}),P($r,_)},Jn=$r=>{b2($r,{get text(){return r(he)},get json(){return r(V)},get readOnly(){return p()},get parser(){return w()},openJSONEditorModal:nt,extractPath:Tt,get onChangeMode(){return J()},onClick:()=>{Ge()}})};ie(an,$r=>{r(L)&&r(he)!==void 0&&r(he)!==""?$r(Zt):$r(Jn,!1)},!0),P(Ke,Dt)};ie(ve,Ke=>{r(pt)?Ke(Ve):Ke(Qe,!1)}),Ce("paste",Ie,Me),P(M,G)},mr=M=>{P(M,T2())};ie(wt,M=>{v?M(mr,!1):M(Or)}),Qn(fn,M=>f(ue,M),()=>r(ue));var Nr=W(fn,2),wn=M=>{L0(M,{onClose:()=>f(k,!1)})};ie(Nr,M=>{r(k)&&M(wn)});var En=W(Nr,2),wr=M=>{B0(M,bi(()=>r(Jt),{onClose:()=>{var G;(G=r(Jt))===null||G===void 0||G.onClose(),f(Jt,void 0)}}))};return ie(En,M=>{r(Jt)&&M(wr)}),ze(()=>on=Mt(fn,1,"jse-table-mode svelte-1p86y3c",null,on,{"no-main-menu":!x()})),Ce("mousedown",fn,function(M){if(M.buttons===1||M.buttons===2){var G=M.target;G.isContentEditable||Ge();var ye=c0(G);if(ye){if(Dr(r(oe))&&Yl(r(V),r(oe),ye))return;f(oe,Ht(ye)),M.preventDefault()}}}),Ce("keydown",fn,function(M){var G=Ha(M);if(i("keydown",{combo:G,key:M.key}),G==="Ctrl+X"&&(M.preventDefault(),Vr(!0)),G==="Ctrl+Shift+X"&&(M.preventDefault(),Vr(!1)),G==="Ctrl+C"&&(M.preventDefault(),Br(!0)),G==="Ctrl+Shift+C"&&(M.preventDefault(),Br(!1)),G==="Ctrl+D"&&(M.preventDefault(),An()),G!=="Delete"&&G!=="Backspace"||(M.preventDefault(),Qt()),G==="Insert"&&M.preventDefault(),G==="Ctrl+A"&&M.preventDefault(),G==="Ctrl+Q"&&pr(M),G==="ArrowLeft"&&(M.preventDefault(),It(),r(oe))){var ye=function(Dt,an){var{rowIndex:Zt,columnIndex:Jn}=Mo(rt(an),Dt);return Jn>0?Ht($i({rowIndex:Zt,columnIndex:Jn-1},Dt)):an}(r(He),r(oe));f(oe,ye),sr(rt(ye))}if(G==="ArrowRight"&&(M.preventDefault(),It(),r(oe))){var Ie=function(Dt,an){var{rowIndex:Zt,columnIndex:Jn}=Mo(rt(an),Dt);return Jn<Dt.length-1?Ht($i({rowIndex:Zt,columnIndex:Jn+1},Dt)):an}(r(He),r(oe));f(oe,Ie),sr(rt(Ie))}if(G==="ArrowUp"&&(M.preventDefault(),It(),r(oe))){var ve=function(Dt,an){var{rowIndex:Zt,columnIndex:Jn}=Mo(rt(an),Dt);return Zt>0?Ht($i({rowIndex:Zt-1,columnIndex:Jn},Dt)):an}(r(He),r(oe));f(oe,ve),sr(rt(ve))}if(G==="ArrowDown"&&(M.preventDefault(),It(),r(oe))){var Ve=function(Dt,an,Zt){var{rowIndex:Jn,columnIndex:$r}=Mo(rt(Zt),an);return Jn<Dt.length-1?Ht($i({rowIndex:Jn+1,columnIndex:$r},an)):Zt}(r(V),r(He),r(oe));f(oe,Ve),sr(rt(Ve))}if(G==="Enter"&&r(oe)&&cn(r(oe))){M.preventDefault();var Qe=r(oe).path;ir(Ye(r(V),Qe))?nt(Qe):p()||f(oe,Ae(Ae({},r(oe)),{},{edit:!0}))}if(G.replace(/^Shift\+/,"").length===1&&r(oe))return M.preventDefault(),void function(Dt){ce.apply(this,arguments)}(M.key);if(G==="Ctrl+Enter"&&cn(r(oe))){M.preventDefault();var Ke=Ye(r(V),r(oe).path);Gu(Ke)&&window.open(String(Ke),"_blank")}G==="Escape"&&r(oe)&&(M.preventDefault(),f(oe,void 0)),G==="Ctrl+F"&&(M.preventDefault(),rn(!1)),G==="Ctrl+H"&&(M.preventDefault(),rn(!0)),G==="Ctrl+Z"&&(M.preventDefault(),zt()),G==="Ctrl+Shift+Z"&&(M.preventDefault(),Xt())}),Ce("contextmenu",fn,pr),P(e,hn),jt(t,"validate",dn),jt(t,"patch",Bt),jt(t,"focus",Ge),jt(t,"acceptAutoRepair",Nn),jt(t,"scrollTo",Fn),jt(t,"findElement",Hn),jt(t,"openTransformModal",tt),ct(yt)}function Ah(e,t){lt(t,!1);var n=g(t,"content",8),o=g(t,"selection",12),a=g(t,"readOnly",8),i=g(t,"indentation",8),s=g(t,"tabSize",8),l=g(t,"truncateTextSize",8),c=g(t,"externalMode",8),u=g(t,"mainMenuBar",8),d=g(t,"navigationBar",8),v=g(t,"statusBar",8),p=g(t,"askToFormat",8),b=g(t,"escapeControlCharacters",8),m=g(t,"escapeUnicodeCharacters",8),h=g(t,"flattenColumns",8),j=g(t,"parser",8),x=g(t,"parseMemoizeOne",8),C=g(t,"validator",8),A=g(t,"validationParser",8),O=g(t,"pathParser",8),w=g(t,"insideModal",8),z=g(t,"onChange",8),R=g(t,"onChangeMode",8),Y=g(t,"onSelect",8),E=g(t,"onRenderValue",8),K=g(t,"onClassName",8),J=g(t,"onRenderMenu",8),U=g(t,"onRenderContextMenu",8),ae=g(t,"onError",8),ge=g(t,"onFocus",8),se=g(t,"onBlur",8),Te=g(t,"onSortModal",8),De=g(t,"onTransformModal",8),Le=g(t,"onJSONEditorModal",8),je=$(),Oe=$(),Pe=$(),ot=Lr("jsoneditor:JSONEditorRoot"),xe=$(ob({onChange:S=>f(xe,S)}).get()),ue=$(c());function we(S){if(Xp(S)){f(ue,S.undo.mode);var T=r(xe).items(),I=T.findIndex(ke=>ke===S),re=I!==-1?T[I-1]:void 0;ot("handleUndo",{index:I,item:S,items:T,prevItem:re}),re&&o(re.redo.selection),R()(r(ue))}}function ft(S){if(Xp(S)){f(ue,S.redo.mode);var T=r(xe).items(),I=T.findIndex(ke=>ke===S),re=I!==-1?T[I+1]:void 0;ot("handleRedo",{index:I,item:S,items:T,nextItem:re}),re&&o(re.undo.selection),R()(r(ue))}}var Jt=$(),pe={type:"separator"},V=$(),he=$();function L(S){if(r(je))return r(je).patch(S);if(r(Oe))return r(Oe).patch(S);if(r(Pe))return r(Pe).patch(S);throw new Error('Method patch is not available in mode "'.concat(r(ue),'"'))}function de(S,T){if(r(je))return r(je).expand(S,T);if(r(Pe))return r(Pe).expand(S,T);throw new Error('Method expand is not available in mode "'.concat(r(ue),'"'))}function Q(S,T){if(r(je))return r(je).collapse(S,T);if(r(Pe))return r(Pe).collapse(S,T);throw new Error('Method collapse is not available in mode "'.concat(r(ue),'"'))}function Ne(S){if(r(Pe))r(Pe).openTransformModal(S);else if(r(je))r(je).openTransformModal(S);else{if(!r(Oe))throw new Error('Method transform is not available in mode "'.concat(r(ue),'"'));r(Oe).openTransformModal(S)}}function ne(){if(r(Pe))return r(Pe).validate();if(r(je))return r(je).validate();if(r(Oe))return r(Oe).validate();throw new Error('Method validate is not available in mode "'.concat(r(ue),'"'))}function B(){return r(je)?r(je).acceptAutoRepair():n()}function bt(S){if(r(je))return r(je).scrollTo(S);if(r(Oe))return r(Oe).scrollTo(S);throw new Error('Method scrollTo is not available in mode "'.concat(r(ue),'"'))}function st(S){if(r(je))return r(je).findElement(S);if(r(Oe))return r(Oe).findElement(S);throw new Error('Method findElement is not available in mode "'.concat(r(ue),'"'))}function Se(){r(Pe)?r(Pe).focus():r(je)?r(je).focus():r(Oe)&&r(Oe).focus()}function xt(){return Fe.apply(this,arguments)}function Fe(){return(Fe=mt(function*(){r(Pe)&&(yield r(Pe).refresh())})).apply(this,arguments)}Z(()=>y(c()),()=>{(function(S){if(S!==r(ue)){var T={type:"mode",undo:{mode:r(ue),selection:void 0},redo:{mode:S,selection:void 0}};r(ue)==="text"&&r(Pe)&&r(Pe).flush(),ot("add history item",T),r(xe).add(T),f(ue,S)}})(c())}),Z(()=>(r(ue),y(R())),()=>{f(Jt,[{type:"button",text:"text",title:"Switch to text mode (current mode: ".concat(r(ue),")"),className:"jse-group-button jse-first"+(r(ue)===kr.text?" jse-selected":""),onClick:()=>R()(kr.text)},{type:"button",text:"tree",title:"Switch to tree mode (current mode: ".concat(r(ue),")"),className:"jse-group-button "+(r(ue)===kr.tree?" jse-selected":""),onClick:()=>R()(kr.tree)},{type:"button",text:"table",title:"Switch to table mode (current mode: ".concat(r(ue),")"),className:"jse-group-button jse-last"+(r(ue)===kr.table?" jse-selected":""),onClick:()=>R()(kr.table)}])}),Z(()=>(r(Jt),y(J()),r(ue),y(w()),y(a())),()=>{f(V,S=>{var T=bv(S[0])?r(Jt).concat(S):r(Jt).concat(pe,S),I=Gd(T);return J()(T,{mode:r(ue),modal:w(),readOnly:a()})||I})}),Z(()=>(y(U()),r(ue),y(w()),y(a()),y(o())),()=>{f(he,S=>{var T,I=Gd(S);return(T=U()(S,{mode:r(ue),modal:w(),readOnly:a(),selection:o()}))!==null&&T!==void 0?T:!a()&&I})}),jn();var He={patch:L,expand:de,collapse:Q,transform:Ne,validate:ne,acceptAutoRepair:B,scrollTo:bt,findElement:st,focus:Se,refresh:xt};At();var pt=Ut(),Ue=Xe(pt),Rt=S=>{Qn(u2(S,{get externalContent(){return n()},get externalSelection(){return o()},get history(){return r(xe)},get readOnly(){return a()},get indentation(){return i()},get tabSize(){return s()},get mainMenuBar(){return u()},get statusBar(){return v()},get askToFormat(){return p()},get escapeUnicodeCharacters(){return m()},get parser(){return j()},get validator(){return C()},get validationParser(){return A()},get onChange(){return z()},get onChangeMode(){return R()},get onSelect(){return Y()},onUndo:we,onRedo:ft,get onError(){return ae()},get onFocus(){return ge()},get onBlur(){return se()},get onRenderMenu(){return r(V)},get onSortModal(){return Te()},get onTransformModal(){return De()},$$legacy:!0}),T=>f(Pe,T),()=>r(Pe))},k=S=>{var T=Ut(),I=Xe(T),re=_e=>{Qn(R2(_e,{get externalContent(){return n()},get externalSelection(){return o()},get history(){return r(xe)},get readOnly(){return a()},get truncateTextSize(){return l()},get mainMenuBar(){return u()},get escapeControlCharacters(){return b()},get escapeUnicodeCharacters(){return m()},get flattenColumns(){return h()},get parser(){return j()},get parseMemoizeOne(){return x()},get validator(){return C()},get validationParser(){return A()},get indentation(){return i()},get onChange(){return z()},get onChangeMode(){return R()},get onSelect(){return Y()},onUndo:we,onRedo:ft,get onRenderValue(){return E()},get onFocus(){return ge()},get onBlur(){return se()},get onRenderMenu(){return r(V)},get onRenderContextMenu(){return r(he)},get onSortModal(){return Te()},get onTransformModal(){return De()},get onJSONEditorModal(){return Le()},$$legacy:!0}),ee=>f(Oe,ee),()=>r(Oe))},ke=_e=>{Qn(Nv(_e,{get externalContent(){return n()},get externalSelection(){return o()},get history(){return r(xe)},get readOnly(){return a()},get indentation(){return i()},get truncateTextSize(){return l()},get mainMenuBar(){return u()},get navigationBar(){return d()},get escapeControlCharacters(){return b()},get escapeUnicodeCharacters(){return m()},get parser(){return j()},get parseMemoizeOne(){return x()},get validator(){return C()},get validationParser(){return A()},get pathParser(){return O()},get onError(){return ae()},get onChange(){return z()},get onChangeMode(){return R()},get onSelect(){return Y()},onUndo:we,onRedo:ft,get onRenderValue(){return E()},get onClassName(){return K()},get onFocus(){return ge()},get onBlur(){return se()},get onRenderMenu(){return r(V)},get onRenderContextMenu(){return r(he)},get onSortModal(){return Te()},get onTransformModal(){return De()},get onJSONEditorModal(){return Le()},$$legacy:!0}),ee=>f(je,ee),()=>r(je))};ie(I,_e=>{r(ue),y(kr),D(()=>r(ue)===kr.table)?_e(re):_e(ke,!1)},!0),P(S,T)};return ie(Ue,S=>{r(ue),y(kr),D(()=>r(ue)===kr.text||String(r(ue))==="code")?S(Rt):S(k,!1)}),P(e,pt),jt(t,"patch",L),jt(t,"expand",de),jt(t,"collapse",Q),jt(t,"transform",Ne),jt(t,"validate",ne),jt(t,"acceptAutoRepair",B),jt(t,"scrollTo",bt),jt(t,"findElement",st),jt(t,"focus",Se),jt(t,"refresh",xt),ct(He)}St(`/* over all fonts, sizes, and colors */
/* "consolas" for Windows, "menlo" for Mac with fallback to "monaco", 'Ubuntu Mono' for Ubuntu */
/* (at Mac this font looks too large at 14px, but 13px is too small for the font on Windows) */
/* main, menu, modal */
/* jsoneditor modal */
/* tooltip in text mode */
/* panels: navigation bar, gutter, search box */
/* navigation-bar */
/* context menu */
/* contents: json key and values */
/* contents: selected or hovered */
/* contents: section of collapsed items in an array */
/* contents: highlighting of search matches */
/* contents: inline tags inside the JSON document */
/* contents: table */
/* controls in modals: inputs, buttons, and \`a\` */
/* messages */
/* svelte-select */
/* color picker */
.jse-modal-wrapper.svelte-t4zsk3 {
  flex: 1;
  display: flex;
  min-width: 0;
  min-height: 0;
  flex-direction: column;
}
.jse-modal-wrapper.svelte-t4zsk3 .jse-modal-contents:where(.svelte-t4zsk3) {
  flex: 1;
  display: flex;
  flex-direction: column;
  padding: 20px;
  overflow: auto;
  min-width: 0;
  min-height: 0;
}
.jse-modal-wrapper.svelte-t4zsk3 .jse-modal-contents:where(.svelte-t4zsk3) .jse-actions:where(.svelte-t4zsk3) {
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  padding-top: var(--jse-padding, 10px);
}
.jse-modal-wrapper.svelte-t4zsk3 .jse-modal-contents:where(.svelte-t4zsk3) .jse-actions:where(.svelte-t4zsk3) button.jse-primary:where(.svelte-t4zsk3) {
  border: none;
  background: transparent;
  color: inherit;
  cursor: pointer;
  font-family: var(--jse-font-family, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen-Sans, Ubuntu, Cantarell, "Helvetica Neue", sans-serif);
  font-size: var(--jse-font-size, 16px);
  padding: 5px;
  margin: 0;
  background: var(--jse-button-primary-background, var(--jse-theme-color, #3883fa));
  color: var(--jse-button-primary-color, #fff);
  padding: var(--jse-padding, 10px) calc(2 * var(--jse-padding, 10px));
  border-radius: 3px;
}
.jse-modal-wrapper.svelte-t4zsk3 .jse-modal-contents:where(.svelte-t4zsk3) .jse-actions:where(.svelte-t4zsk3) button.jse-primary:where(.svelte-t4zsk3):hover {
  background: var(--jse-button-primary-background-highlight, var(--jse-theme-color-highlight, #5f9dff));
}
.jse-modal-wrapper.svelte-t4zsk3 .jse-modal-contents:where(.svelte-t4zsk3) .jse-actions:where(.svelte-t4zsk3) button.jse-primary:where(.svelte-t4zsk3):disabled {
  background: var(--jse-button-primary-background-disabled, #9d9d9d);
}
.jse-modal-wrapper.svelte-t4zsk3 .jse-modal-contents:where(.svelte-t4zsk3) .jse-label:where(.svelte-t4zsk3) {
  font-weight: bold;
  display: block;
  box-sizing: border-box;
}
.jse-modal-wrapper.svelte-t4zsk3 .jse-modal-contents:where(.svelte-t4zsk3) .jse-label:where(.svelte-t4zsk3) .jse-label-inner:where(.svelte-t4zsk3) {
  margin-top: calc(2 * var(--jse-padding, 10px));
  margin-bottom: calc(0.5 * var(--jse-padding, 10px));
  box-sizing: border-box;
}
.jse-modal-wrapper.svelte-t4zsk3 .jse-modal-contents:where(.svelte-t4zsk3) .jse-modal-inline-editor:where(.svelte-t4zsk3) {
  flex: 1;
  min-height: 150px;
  min-width: 0;
  max-width: 100%;
  display: flex;
  --jse-theme-color: var(--jse-modal-editor-theme-color, #707070);
  --jse-theme-color-highlight: var(--jse-modal-editor-theme-color-highlight, #646464);
}
.jse-modal-wrapper.svelte-t4zsk3 .jse-actions:where(.svelte-t4zsk3) {
  gap: var(--jse-padding, 10px);
  align-items: center;
}
.jse-modal-wrapper.svelte-t4zsk3 .jse-actions:where(.svelte-t4zsk3) .jse-error:where(.svelte-t4zsk3) {
  flex: 1;
  color: var(--jse-error-color, #ee5341);
}
.jse-modal-wrapper.svelte-t4zsk3 .jse-actions:where(.svelte-t4zsk3) button.jse-secondary:where(.svelte-t4zsk3) {
  border: none;
  background: transparent;
  color: inherit;
  cursor: pointer;
  font-family: var(--jse-font-family, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen-Sans, Ubuntu, Cantarell, "Helvetica Neue", sans-serif);
  font-size: var(--jse-font-size, 16px);
  padding: 5px;
  margin: 0;
  background: var(--jse-button-secondary-background, #d3d3d3);
  color: var(--jse-button-secondary-color, var(--jse-text-color, #4d4d4d));
  padding: var(--jse-padding, 10px) calc(2 * var(--jse-padding, 10px));
  border-radius: 3px;
}
.jse-modal-wrapper.svelte-t4zsk3 .jse-actions:where(.svelte-t4zsk3) button.jse-secondary:where(.svelte-t4zsk3):hover {
  background: var(--jse-button-secondary-background-highlight, #e1e1e1);
}
.jse-modal-wrapper.svelte-t4zsk3 .jse-actions:where(.svelte-t4zsk3) button.jse-secondary:where(.svelte-t4zsk3):disabled {
  background: var(--jse-button-secondary-background-disabled, #9d9d9d);
}
.jse-modal-wrapper.svelte-t4zsk3 input:where(.svelte-t4zsk3) {
  border: var(--jse-input-border, 1px solid #d8dbdf);
  outline: none;
  box-sizing: border-box;
  padding: calc(0.5 * var(--jse-padding, 10px));
  font-family: var(--jse-font-family-mono, consolas, menlo, monaco, "Ubuntu Mono", "source-code-pro", monospace);
  font-size: var(--jse-font-size-mono, 14px);
  color: inherit;
  background: var(--jse-input-background, var(--jse-background-color, #fff));
}
.jse-modal-wrapper.svelte-t4zsk3 input:where(.svelte-t4zsk3):focus {
  border: var(--jse-input-border-focus, 1px solid var(--jse-input-border-focus, var(--jse-theme-color, #3883fa)));
}
.jse-modal-wrapper.svelte-t4zsk3 input:where(.svelte-t4zsk3):read-only {
  background: var(--jse-input-background-readonly, transparent);
}`);var P2=te('<div class="jse-error svelte-t4zsk3"> </div>'),N2=te('<button type="button" class="jse-secondary svelte-t4zsk3"><!> Back</button>'),$2=te('<button type="button" class="jse-primary svelte-t4zsk3">Apply</button>'),I2=te('<button type="button" class="jse-primary svelte-t4zsk3">Close</button>'),q2=te('<!> <div class="jse-modal-contents svelte-t4zsk3"><div class="jse-label svelte-t4zsk3"><div class="jse-label-inner svelte-t4zsk3">Path</div></div> <input class="jse-path svelte-t4zsk3" type="text" readonly="" title="Selected path"/> <div class="jse-label svelte-t4zsk3"><div class="jse-label-inner svelte-t4zsk3">Contents</div></div> <div class="jse-modal-inline-editor svelte-t4zsk3"><!></div> <div class="jse-actions svelte-t4zsk3"><!> <!> <!></div></div>',1),D2=te('<div class="jse-modal-wrapper svelte-t4zsk3"><!></div>'),U2={};St(`/* over all fonts, sizes, and colors */
/* "consolas" for Windows, "menlo" for Mac with fallback to "monaco", 'Ubuntu Mono' for Ubuntu */
/* (at Mac this font looks too large at 14px, but 13px is too small for the font on Windows) */
/* main, menu, modal */
/* jsoneditor modal */
/* tooltip in text mode */
/* panels: navigation bar, gutter, search box */
/* navigation-bar */
/* context menu */
/* contents: json key and values */
/* contents: selected or hovered */
/* contents: section of collapsed items in an array */
/* contents: highlighting of search matches */
/* contents: inline tags inside the JSON document */
/* contents: table */
/* controls in modals: inputs, buttons, and \`a\` */
/* messages */
/* svelte-select */
/* color picker */
.jse-modal-contents.svelte-lwzlls {
  flex: 1;
  display: flex;
  flex-direction: column;
  padding: 20px;
  overflow: auto;
  min-width: 0;
  min-height: 0;
}
.jse-modal-contents.svelte-lwzlls .jse-actions:where(.svelte-lwzlls) {
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  padding-top: var(--jse-padding, 10px);
}
.jse-modal-contents.svelte-lwzlls .jse-actions:where(.svelte-lwzlls) button.jse-primary:where(.svelte-lwzlls) {
  border: none;
  background: transparent;
  color: inherit;
  cursor: pointer;
  font-family: var(--jse-font-family, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen-Sans, Ubuntu, Cantarell, "Helvetica Neue", sans-serif);
  font-size: var(--jse-font-size, 16px);
  padding: 5px;
  margin: 0;
  background: var(--jse-button-primary-background, var(--jse-theme-color, #3883fa));
  color: var(--jse-button-primary-color, #fff);
  padding: var(--jse-padding, 10px) calc(2 * var(--jse-padding, 10px));
  border-radius: 3px;
}
.jse-modal-contents.svelte-lwzlls .jse-actions:where(.svelte-lwzlls) button.jse-primary:where(.svelte-lwzlls):hover {
  background: var(--jse-button-primary-background-highlight, var(--jse-theme-color-highlight, #5f9dff));
}
.jse-modal-contents.svelte-lwzlls .jse-actions:where(.svelte-lwzlls) button.jse-primary:where(.svelte-lwzlls):disabled {
  background: var(--jse-button-primary-background-disabled, #9d9d9d);
}
.jse-modal-contents.svelte-lwzlls table:where(.svelte-lwzlls) {
  width: 100%;
  border-collapse: collapse;
  border-spacing: 0;
}
.jse-modal-contents.svelte-lwzlls table:where(.svelte-lwzlls) th:where(.svelte-lwzlls),
.jse-modal-contents.svelte-lwzlls table:where(.svelte-lwzlls) td:where(.svelte-lwzlls) {
  text-align: left;
  vertical-align: middle;
  font-weight: normal;
  padding-bottom: var(--jse-padding, 10px);
}
.jse-modal-contents.svelte-lwzlls input.jse-path:where(.svelte-lwzlls) {
  width: 100%;
  box-sizing: border-box;
  padding: 5px 10px;
  border: var(--jse-input-border, 1px solid #d8dbdf);
  border-radius: var(--jse-input-radius, 3px);
  font-family: inherit;
  font-size: inherit;
  background: inherit;
  background: var(--jse-input-background-readonly, transparent);
  color: inherit;
  outline: none;
}
.jse-modal-contents.svelte-lwzlls .svelte-select input {
  box-sizing: border-box;
}
.jse-modal-contents.svelte-lwzlls .jse-space:where(.svelte-lwzlls) {
  height: 200px;
}
.jse-modal-contents.svelte-lwzlls .jse-space:where(.svelte-lwzlls) .jse-error:where(.svelte-lwzlls) {
  color: var(--jse-error-color, #ee5341);
}`);var xs=Qu(()=>U2),L2=te('<tr><th class="svelte-lwzlls">Property</th><td class="svelte-lwzlls"><!></td></tr>'),B2=te('<div class="jse-error svelte-lwzlls"> </div>'),F2=te('<!> <div class="jse-modal-contents svelte-lwzlls"><table class="svelte-lwzlls"><colgroup><col width="25%"/><col width="75%"/></colgroup><tbody><tr><th class="svelte-lwzlls">Path</th><td class="svelte-lwzlls"><input class="jse-path svelte-lwzlls" type="text" readonly="" title="Selected path"/></td></tr><!><tr><th class="svelte-lwzlls">Direction</th><td class="svelte-lwzlls"><!></td></tr></tbody></table> <div class="jse-space svelte-lwzlls"><!></div> <div class="jse-actions svelte-lwzlls"><button type="button" class="jse-primary svelte-lwzlls">Sort</button></div></div>',1);St(`/* over all fonts, sizes, and colors */
/* "consolas" for Windows, "menlo" for Mac with fallback to "monaco", 'Ubuntu Mono' for Ubuntu */
/* (at Mac this font looks too large at 14px, but 13px is too small for the font on Windows) */
/* main, menu, modal */
/* jsoneditor modal */
/* tooltip in text mode */
/* panels: navigation bar, gutter, search box */
/* navigation-bar */
/* context menu */
/* contents: json key and values */
/* contents: selected or hovered */
/* contents: section of collapsed items in an array */
/* contents: highlighting of search matches */
/* contents: inline tags inside the JSON document */
/* contents: table */
/* controls in modals: inputs, buttons, and \`a\` */
/* messages */
/* svelte-select */
/* color picker */
.jse-main.svelte-1l55585 {
  width: 100%;
  height: 100%;
  min-width: 0;
  min-height: 150px;
  font-family: var(--jse-font-family, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen-Sans, Ubuntu, Cantarell, "Helvetica Neue", sans-serif);
  font-size: var(--jse-font-size, 16px);
  line-height: normal;
  position: relative;
  display: flex;
  flex-direction: row;
}
.jse-main.svelte-1l55585:not(.jse-focus) {
  --jse-selection-background-color: var(--jse-selection-background-inactive-color, #e8e8e8);
  --jse-context-menu-pointer-background: var(--jse-context-menu-pointer-hover-background, #b2b2b2);
}`);var W2=te('<div role="none"><!></div> <!> <!> <!>',1);function V2(e,t){lt(t,!1);var n=$(void 0,!0),o=Lr("jsoneditor:JSONEditor"),a={text:""},i=void 0,s=!1,l=kr.tree,c=!0,u=!0,d=!0,v=!0,p=!1,b=!1,m=!0,h=JSON,j=void 0,x=JSON,C={parse:Kw,stringify:Fr},A=[hw],O=A[0].id,w=Ao,z=void 0,R=void 0,Y=Jw,E=Ao,K=Ao,J=Ao,U=Ao,ae=be=>{console.error(be),alert(be.toString())},ge=Ao,se=Ao,Te=g(t,"content",13,a),De=g(t,"selection",13,i),Le=g(t,"readOnly",13,s),je=g(t,"indentation",13,2),Oe=g(t,"tabSize",13,4),Pe=g(t,"truncateTextSize",13,1e3),ot=g(t,"mode",13,l),xe=g(t,"mainMenuBar",13,c),ue=g(t,"navigationBar",13,u),we=g(t,"statusBar",13,d),ft=g(t,"askToFormat",13,v),Jt=g(t,"escapeControlCharacters",13,p),pe=g(t,"escapeUnicodeCharacters",13,b),V=g(t,"flattenColumns",13,m),he=g(t,"parser",13,h),L=g(t,"validator",13,j),de=g(t,"validationParser",13,x),Q=g(t,"pathParser",13,C),Ne=g(t,"queryLanguages",13,A),ne=g(t,"queryLanguageId",13,O),B=g(t,"onChangeQueryLanguage",13,w),bt=g(t,"onChange",13,z),st=g(t,"onSelect",13,R),Se=g(t,"onRenderValue",13,Y),xt=g(t,"onClassName",13,E),Fe=g(t,"onRenderMenu",13,K),He=g(t,"onRenderContextMenu",13,J),pt=g(t,"onChangeMode",13,U),Ue=g(t,"onError",13,ae),Rt=g(t,"onFocus",13,ge),k=g(t,"onBlur",13,se),S=$(_s(),!0),T=$(!1,!0),I=$(void 0,!0),re=$(void 0,!0),ke=$(void 0,!0),_e=$(void 0,!0),ee=$(he(),!0);function oe(){return Te()}function it(be){o("set");var qt=_d(be);if(qt)throw new Error(qt);f(S,_s()),Te(be),Vn()}function et(be){o("update");var qt=_d(be);if(qt)throw new Error(qt);Te(be),Vn()}function We(be){var qt=r(I).patch(be);return Vn(),qt}function Je(be){De(be),Vn()}function Nt(be,qt){r(I).expand(be,qt),Vn()}function xn(be){var qt=arguments.length>1&&arguments[1]!==void 0&&arguments[1];r(I).collapse(be,qt),Vn()}function Sn(){var be=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};r(I).transform(be),Vn()}function $t(){return r(I).validate()}function dn(){var be=r(I).acceptAutoRepair();return Vn(),be}function Bt(be){return Kt.apply(this,arguments)}function Kt(){return(Kt=mt(function*(be){yield r(I).scrollTo(be)})).apply(this,arguments)}function ln(be){return r(I).findElement(be)}function vt(){r(I).focus(),Vn()}function vn(){return Ot.apply(this,arguments)}function Ot(){return(Ot=mt(function*(){yield r(I).refresh()})).apply(this,arguments)}function Ge(be){var qt,bn,$n,lr,Rr,Vt,xr,Vr,Zn,Br,In,Qt,Tt,An,gr,tr,H,ce,Me,q,X,me,qe,tt,nt,ht,qn,Gt,rn,zt,Xt,Pr=Object.keys(be);for(var yt of Pr)switch(yt){case"content":Te((qt=be[yt])!==null&&qt!==void 0?qt:a);break;case"selection":De((bn=be[yt])!==null&&bn!==void 0?bn:i);break;case"readOnly":Le(($n=be[yt])!==null&&$n!==void 0?$n:s);break;case"indentation":je((lr=be[yt])!==null&&lr!==void 0?lr:2);break;case"tabSize":Oe((Rr=be[yt])!==null&&Rr!==void 0?Rr:4);break;case"truncateTextSize":Pe((Vt=be[yt])!==null&&Vt!==void 0?Vt:1e3);break;case"mode":ot((xr=be[yt])!==null&&xr!==void 0?xr:l);break;case"mainMenuBar":xe((Vr=be[yt])!==null&&Vr!==void 0?Vr:c);break;case"navigationBar":ue((Zn=be[yt])!==null&&Zn!==void 0?Zn:u);break;case"statusBar":we((Br=be[yt])!==null&&Br!==void 0?Br:d);break;case"askToFormat":ft((In=be[yt])!==null&&In!==void 0?In:v);break;case"escapeControlCharacters":Jt((Qt=be[yt])!==null&&Qt!==void 0?Qt:p);break;case"escapeUnicodeCharacters":pe((Tt=be[yt])!==null&&Tt!==void 0?Tt:b);break;case"flattenColumns":V((An=be[yt])!==null&&An!==void 0?An:m);break;case"parser":he((gr=be[yt])!==null&&gr!==void 0?gr:h);break;case"validator":L((tr=be[yt])!==null&&tr!==void 0?tr:j);break;case"validationParser":de((H=be[yt])!==null&&H!==void 0?H:x);break;case"pathParser":Q((ce=be[yt])!==null&&ce!==void 0?ce:C);break;case"queryLanguages":Ne((Me=be[yt])!==null&&Me!==void 0?Me:A);break;case"queryLanguageId":ne((q=be[yt])!==null&&q!==void 0?q:O);break;case"onChangeQueryLanguage":B((X=be[yt])!==null&&X!==void 0?X:w);break;case"onChange":bt((me=be[yt])!==null&&me!==void 0?me:z);break;case"onRenderValue":Se((qe=be[yt])!==null&&qe!==void 0?qe:Y);break;case"onClassName":xt((tt=be[yt])!==null&&tt!==void 0?tt:E);break;case"onRenderMenu":Fe((nt=be[yt])!==null&&nt!==void 0?nt:K);break;case"onRenderContextMenu":He((ht=be[yt])!==null&&ht!==void 0?ht:J);break;case"onChangeMode":pt((qn=be[yt])!==null&&qn!==void 0?qn:U);break;case"onSelect":st((Gt=be[yt])!==null&&Gt!==void 0?Gt:R);break;case"onError":Ue((rn=be[yt])!==null&&rn!==void 0?rn:ae);break;case"onFocus":Rt((zt=be[yt])!==null&&zt!==void 0?zt:ge);break;case"onBlur":k((Xt=be[yt])!==null&&Xt!==void 0?Xt:se);break;default:hn(yt)}function hn(on){o('Unknown property "'.concat(on,'"'))}Ne().some(on=>on.id===ne())||ne(Ne()[0].id),Vn()}function Yt(){return It.apply(this,arguments)}function It(){return(It=mt(function*(){throw new Error("class method destroy() is deprecated. It is replaced with a method destroy() in the vanilla library.")})).apply(this,arguments)}function Nn(be,qt,bn){Te(be),bt()&&bt()(be,qt,bn)}function Fn(be){De(be),st()&&st()(Gd(be))}function Un(){f(T,!0),Rt()&&Rt()()}function sr(){f(T,!1),k()&&k()()}function Hn(be){return er.apply(this,arguments)}function er(){return(er=mt(function*(be){ot()!==be&&(ot(be),Vn(),vt(),pt()(be))})).apply(this,arguments)}function pr(be){o("handleChangeQueryLanguage",be),ne(be),B()(be)}function Gn(be){var{id:qt,json:bn,rootPath:$n,onTransform:lr,onClose:Rr}=be;Le()||f(_e,{id:qt,json:bn,rootPath:$n,indentation:je(),truncateTextSize:Pe(),escapeControlCharacters:Jt(),escapeUnicodeCharacters:pe(),parser:he(),parseMemoizeOne:r(n),validationParser:de(),pathParser:Q(),queryLanguages:Ne(),queryLanguageId:ne(),onChangeQueryLanguage:pr,onRenderValue:Se(),onRenderMenu:Vt=>Fe()(Vt,{mode:ot(),modal:!0,readOnly:Le()}),onRenderContextMenu:Vt=>He()(Vt,{mode:ot(),modal:!0,readOnly:Le(),selection:De()}),onClassName:xt(),onTransform:lr,onClose:Rr})}function Sr(be){Le()||f(ke,be)}function hr(be){var{content:qt,path:bn,onPatch:$n,onClose:lr}=be;o("onJSONEditorModal",{content:qt,path:bn}),f(re,{content:qt,path:bn,onPatch:$n,readOnly:Le(),indentation:je(),tabSize:Oe(),truncateTextSize:Pe(),mainMenuBar:xe(),navigationBar:ue(),statusBar:we(),askToFormat:ft(),escapeControlCharacters:Jt(),escapeUnicodeCharacters:pe(),flattenColumns:V(),parser:he(),validator:void 0,validationParser:de(),pathParser:Q(),onRenderValue:Se(),onClassName:xt(),onRenderMenu:Fe(),onRenderContextMenu:He(),onSortModal:Sr,onTransformModal:Gn,onClose:lr})}function jr(be){be.stopPropagation()}Z(()=>(y(he()),r(ee),y(Te()),_s),()=>{if(!t0(he(),r(ee))){if(o("parser changed, recreate editor"),Wl(Te())){var be=r(ee).stringify(Te().json);Te({json:be!==void 0?he().parse(be):void 0})}f(ee,he()),f(S,_s())}}),Z(()=>y(Te()),()=>{var be=_d(Te());be&&console.error("Error: "+be)}),Z(()=>y(De()),()=>{De()===null&&console.warn("selection is invalid: it is null but should be undefined")}),Z(()=>y(he()),()=>{f(n,ql(he().parse))}),Z(()=>y(ot()),()=>{o("mode changed to",ot())}),jn();var Xn={get:oe,set:it,update:et,patch:We,select:Je,expand:Nt,collapse:xn,transform:Sn,validate:$t,acceptAutoRepair:dn,scrollTo:Bt,findElement:ln,focus:vt,refresh:vn,updateProps:Ge,destroy:Yt};return At(!0),gv(e,{children:(be,qt)=>{var bn,$n=W2(),lr=Xe($n);Fm(N(lr),()=>r(S),In=>{Qn(Ah(In,{get externalMode(){return ot()},get content(){return Te()},get selection(){return De()},get readOnly(){return Le()},get indentation(){return je()},get tabSize(){return Oe()},get truncateTextSize(){return Pe()},get statusBar(){return we()},get askToFormat(){return ft()},get mainMenuBar(){return xe()},get navigationBar(){return ue()},get escapeControlCharacters(){return Jt()},get escapeUnicodeCharacters(){return pe()},get flattenColumns(){return V()},get parser(){return he()},get parseMemoizeOne(){return r(n)},get validator(){return L()},get validationParser(){return de()},get pathParser(){return Q()},insideModal:!1,get onError(){return Ue()},onChange:Nn,onChangeMode:Hn,onSelect:Fn,get onRenderValue(){return Se()},get onClassName(){return xt()},onFocus:Un,onBlur:sr,get onRenderMenu(){return Fe()},get onRenderContextMenu(){return He()},onSortModal:Sr,onTransformModal:Gn,onJSONEditorModal:hr,$$legacy:!0}),Qt=>f(I,Qt),()=>r(I))});var Rr=W(lr,2),Vt=In=>{(function(Qt,Tt){var An,gr;lt(Tt,!1);var tr=$(void 0,!0),H=$(void 0,!0),ce=$(void 0,!0),Me=$(void 0,!0),q=Lr("jsoneditor:SortModal"),X=g(Tt,"id",9),me=g(Tt,"json",9),qe=g(Tt,"rootPath",9),tt=g(Tt,"onSort",9),nt=g(Tt,"onClose",9),ht={value:1,label:"ascending"},qn=[ht,{value:-1,label:"descending"}],Gt="".concat(X(),":").concat(dt(qe())),rn=$((An=xs()[Gt])===null||An===void 0?void 0:An.selectedProperty,!0),zt=$(((gr=xs()[Gt])===null||gr===void 0?void 0:gr.selectedDirection)||ht,!0),Xt=$(void 0,!0);function Pr(){try{var hn,on,fn;f(Xt,void 0);var Wn=((hn=r(rn))===null||hn===void 0?void 0:hn.value)||((on=r(Me))===null||on===void 0||(on=on[0])===null||on===void 0?void 0:on.value)||[],On=(fn=r(zt))===null||fn===void 0?void 0:fn.value,wt=H0(me(),qe(),Wn,On);tt()!==void 0&&qe()!==void 0&&tt()({operations:wt,rootPath:qe(),itemPath:Wn,direction:On}),nt()()}catch(Or){f(Xt,String(Or))}}function yt(hn){hn.focus()}Z(()=>(y(me()),y(qe())),()=>{f(tr,Ye(me(),qe()))}),Z(()=>r(tr),()=>{f(H,Array.isArray(r(tr)))}),Z(()=>(r(H),r(tr)),()=>{f(ce,r(H)?pv(r(tr)):void 0)}),Z(()=>(r(ce),si),()=>{f(Me,r(ce)?r(ce).map(si):void 0)}),Z(()=>(xs(),r(rn),r(zt)),()=>{xs(xs()[Gt]={selectedProperty:r(rn),selectedDirection:r(zt)}),q("store state in memory",Gt,xs()[Gt])}),jn(),At(!0),Xl(Qt,{get onClose(){return nt()},className:"jse-sort-modal",children:(hn,on)=>{var fn=F2(),Wn=Xe(fn),On=Ze(()=>r(H)?"Sort array items":"Sort object keys");Tu(Wn,{get title(){return r(On)},get onClose(){return nt()}});var wt=N(W(Wn,2)),Or=W(N(wt)),mr=N(Or),Nr=W(N(mr)),wn=N(Nr),En=W(mr),wr=Qe=>{var Ke=L2(),Dt=W(N(Ke));Li(N(Dt),{showChevron:!0,get items(){return r(Me)},get value(){return r(rn)},set value(an){f(rn,an)},$$legacy:!0}),P(Qe,Ke)};ie(En,Qe=>{r(H),r(Me),D(()=>{var Ke;return r(H)&&r(Me)&&((Ke=r(Me))===null||Ke===void 0?void 0:Ke.length)>1})&&Qe(wr)});var M=W(En),G=W(N(M));Li(N(G),{showChevron:!0,clearable:!1,get items(){return qn},get value(){return r(zt)},set value(Qe){f(zt,Qe)},$$legacy:!0});var ye=W(wt,2),Ie=N(ye),ve=Qe=>{var Ke=B2(),Dt=N(Ke);ze(()=>ut(Dt,r(Xt))),P(Qe,Ke)};ie(Ie,Qe=>{r(Xt)&&Qe(ve)});var Ve=N(W(ye,2));Kr(()=>Ce("click",Ve,Pr)),io(Ve,Qe=>yt?.(Qe)),ze(Qe=>{es(wn,Qe),Ve.disabled=(r(H),r(Me),r(rn),D(()=>{var Ke;return!!(r(H)&&r(Me)&&((Ke=r(Me))===null||Ke===void 0?void 0:Ke.length)>1)&&!r(rn)}))},[()=>(y(qe()),y(un),y(Fr),D(()=>qe()&&!un(qe())?Fr(qe()):"(document root)"))]),P(hn,fn)},$$slots:{default:!0}}),ct()})(In,bi(()=>r(ke),{onClose:()=>{var Qt;(Qt=r(ke))===null||Qt===void 0||Qt.onClose(),f(ke,void 0)}}))};ie(Rr,In=>{r(ke)&&In(Vt)});var xr=W(Rr,2),Vr=In=>{KS(In,bi(()=>r(_e),{onClose:()=>{var Qt;(Qt=r(_e))===null||Qt===void 0||Qt.onClose(),f(_e,void 0)}}))};ie(xr,In=>{r(_e)&&In(Vr)});var Zn=W(xr,2),Br=In=>{(function(Qt,Tt){lt(Tt,!1);var An=$(void 0,!0),gr=$(void 0,!0),tr=$(void 0,!0),H=$(void 0,!0),ce=Lr("jsoneditor:JSONEditorModal"),Me=g(Tt,"content",9),q=g(Tt,"path",9),X=g(Tt,"onPatch",9),me=g(Tt,"readOnly",9),qe=g(Tt,"indentation",9),tt=g(Tt,"tabSize",9),nt=g(Tt,"truncateTextSize",9),ht=g(Tt,"mainMenuBar",9),qn=g(Tt,"navigationBar",9),Gt=g(Tt,"statusBar",9),rn=g(Tt,"askToFormat",9),zt=g(Tt,"escapeControlCharacters",9),Xt=g(Tt,"escapeUnicodeCharacters",9),Pr=g(Tt,"flattenColumns",9),yt=g(Tt,"parser",9),hn=g(Tt,"validator",9),on=g(Tt,"validationParser",9),fn=g(Tt,"pathParser",9),Wn=g(Tt,"onRenderValue",9),On=g(Tt,"onClassName",9),wt=g(Tt,"onRenderMenu",9),Or=g(Tt,"onRenderContextMenu",9),mr=g(Tt,"onSortModal",9),Nr=g(Tt,"onTransformModal",9),wn=g(Tt,"onClose",9),En=$(void 0,!0),wr=$(void 0,!0),M={mode:Ie(Me()),content:Me(),selection:void 0,relativePath:q()},G=$([M],!0),ye=$(void 0,!0);function Ie(F){return Wl(F)&&vr(F.json)?kr.table:kr.tree}function ve(){var F,fe=(F=Wt(r(G)))===null||F===void 0?void 0:F.selection;Kl(fe)&&r(En).scrollTo(rt(fe))}function Ve(){if(ce("handleApply"),!me())try{f(ye,void 0);var F=r(An).relativePath,fe=r(An).content,Be=[{op:"replace",path:dt(F),value:Lp(fe,yt()).json}];if(r(G).length>1){var $e=Lp(r(G)[r(G).length-2].content,yt()).json,Re={json:Ho($e,Be)},kt=Ae(Ae({},r(G)[r(G).length-2]||M),{},{content:Re});f(G,[...r(G).slice(0,r(G).length-2),kt]),Vn(),ve()}else X()(Be),wn()()}catch(Ct){f(ye,String(Ct))}}function Qe(){if(ce("handleClose"),r(wr))f(wr,!1);else if(r(G).length>1){var F;f(G,tn(r(G))),Vn(),(F=r(En))===null||F===void 0||F.focus(),ve(),f(ye,void 0)}else wn()()}function Ke(F){ce("handleChange",F),Zt(fe=>Ae(Ae({},fe),{},{content:F}))}function Dt(F){ce("handleChangeSelection",F),Zt(fe=>Ae(Ae({},fe),{},{selection:F}))}function an(F){ce("handleChangeMode",F),Zt(fe=>Ae(Ae({},fe),{},{mode:F}))}function Zt(F){var fe=F(Wt(r(G)));f(G,[...tn(r(G)),fe])}function Jn(F){f(ye,F.toString()),console.error(F)}function $r(F){var fe,{content:Be,path:$e}=F;ce("handleJSONEditorModal",{content:Be,path:$e});var Re={mode:Ie(Be),content:Be,selection:void 0,relativePath:$e};f(G,[...r(G),Re]),Vn(),(fe=r(En))===null||fe===void 0||fe.focus()}function _(F){F.focus()}no(()=>{var F;(F=r(En))===null||F===void 0||F.focus()}),Z(()=>r(G),()=>{f(An,Wt(r(G))||M)}),Z(()=>r(G),()=>{f(gr,r(G).flatMap(F=>F.relativePath))}),Z(()=>(r(gr),Fr),()=>{f(tr,un(r(gr))?"(document root)":Fr(r(gr)))}),Z(()=>y(yt()),()=>{f(H,ql(yt().parse))}),jn(),At(!0),Xl(Qt,{onClose:Qe,className:"jse-jsoneditor-modal",get fullscreen(){return r(wr)},children:(F,fe)=>{var Be=D2();gv(N(Be),{children:($e,Re)=>{var kt=q2(),Ct=Xe(kt),Ft=Ze(()=>(r(G),D(()=>r(G).length>1?" (".concat(r(G).length,")"):"")));Tu(Ct,{get title(){var _t;return"Edit nested content ".concat((_t=r(Ft))!==null&&_t!==void 0?_t:"")},fullScreenButton:!0,onClose:Qe,get fullscreen(){return r(wr)},set fullscreen(_t){f(wr,_t)},$$legacy:!0});var kn=W(Ct,2),en=W(N(kn),2),Ln=W(en,4);Qn(Ah(N(Ln),{get externalMode(){return r(An),D(()=>r(An).mode)},get content(){return r(An),D(()=>r(An).content)},get selection(){return r(An),D(()=>r(An).selection)},get readOnly(){return me()},get indentation(){return qe()},get tabSize(){return tt()},get truncateTextSize(){return nt()},get statusBar(){return Gt()},get askToFormat(){return rn()},get mainMenuBar(){return ht()},get navigationBar(){return qn()},get escapeControlCharacters(){return zt()},get escapeUnicodeCharacters(){return Xt()},get flattenColumns(){return Pr()},get parser(){return yt()},get parseMemoizeOne(){return r(H)},get validator(){return hn()},get validationParser(){return on()},get pathParser(){return fn()},insideModal:!0,onError:Jn,onChange:Ke,onChangeMode:an,onSelect:Dt,get onRenderValue(){return Wn()},get onClassName(){return On()},get onFocus(){return Ao},get onBlur(){return Ao},get onRenderMenu(){return wt()},get onRenderContextMenu(){return Or()},get onSortModal(){return mr()},get onTransformModal(){return Nr()},onJSONEditorModal:$r,$$legacy:!0}),_t=>f(En,_t),()=>r(En));var Et=N(W(Ln,2)),nr=_t=>{var at=P2(),Pt=N(at);ze(()=>ut(Pt,r(ye))),P(_t,at)};ie(Et,_t=>{r(ye)&&_t(nr)});var Tn=W(Et,2),rr=_t=>{var at=N2();nn(N(at),{get data(){return Qb}}),Ce("click",at,Qe),P(_t,at)};ie(Tn,_t=>{r(G),D(()=>r(G).length>1)&&_t(rr)});var gn=W(Tn,2),gt=_t=>{var at=$2();Kr(()=>Ce("click",at,Ve)),io(at,Pt=>_?.(Pt)),P(_t,at)},sn=_t=>{var at=I2();Ce("click",at,Qe),P(_t,at)};ie(gn,_t=>{me()?_t(sn,!1):_t(gt)}),ze(()=>es(en,r(tr))),P($e,kt)},$$slots:{default:!0}}),P(F,Be)},$$slots:{default:!0}}),ct()})(In,bi(()=>r(re),{onClose:()=>{var Qt;(Qt=r(re))===null||Qt===void 0||Qt.onClose(),f(re,void 0)}}))};ie(Zn,In=>{r(re)&&In(Br)}),ze(()=>bn=Mt(lr,1,"jse-main svelte-1l55585",null,bn,{"jse-focus":r(T)})),Ce("keydown",lr,jr),P(be,$n)},$$slots:{default:!0}}),jt(t,"get",oe),jt(t,"set",it),jt(t,"update",et),jt(t,"patch",We),jt(t,"select",Je),jt(t,"expand",Nt),jt(t,"collapse",xn),jt(t,"transform",Sn),jt(t,"validate",$t),jt(t,"acceptAutoRepair",dn),jt(t,"scrollTo",Bt),jt(t,"findElement",ln),jt(t,"focus",vt),jt(t,"refresh",vn),jt(t,"updateProps",Ge),jt(t,"destroy",Yt),ct(Xn)}function H2(e){var{target:t,props:n}=e,o=Rx(V2,{target:t,props:n});return o.destroy=mt(function*(){return function(a,i){var s=dv.get(a);return s?(dv.delete(a),s(i)):Promise.resolve()}(o)}),Vn(),o}const J2=/"(?:_|\\u0{2}5[Ff]){2}(?:p|\\u0{2}70)(?:r|\\u0{2}72)(?:o|\\u0{2}6[Ff])(?:t|\\u0{2}74)(?:o|\\u0{2}6[Ff])(?:_|\\u0{2}5[Ff]){2}"\s*:/,K2=/"(?:c|\\u0063)(?:o|\\u006[Ff])(?:n|\\u006[Ee])(?:s|\\u0073)(?:t|\\u0074)(?:r|\\u0072)(?:u|\\u0075)(?:c|\\u0063)(?:t|\\u0074)(?:o|\\u006[Ff])(?:r|\\u0072)"\s*:/,Y2=/^\s*["[{]|^\s*-?\d{1,16}(\.\d{1,17})?([Ee][+-]?\d+)?\s*$/;function Q2(e,t){if(e==="__proto__"||e==="constructor"&&t&&typeof t=="object"&&"prototype"in t){G2(e);return}return t}function G2(e){console.warn(`[destr] Dropping "${e}" key to prevent prototype pollution.`)}function ru(e,t={}){if(typeof e!="string")return e;const n=e.trim();if(e[0]==='"'&&e.endsWith('"')&&!e.includes("\\"))return n.slice(1,-1);if(n.length<=9){const o=n.toLowerCase();if(o==="true")return!0;if(o==="false")return!1;if(o==="undefined")return;if(o==="null")return null;if(o==="nan")return Number.NaN;if(o==="infinity")return Number.POSITIVE_INFINITY;if(o==="-infinity")return Number.NEGATIVE_INFINITY}if(!Y2.test(e)){if(t.strict)throw new SyntaxError("[destr] Invalid JSON");return e}try{if(J2.test(e)||K2.test(e)){if(t.strict)throw new Error("[destr] Possible prototype pollution");return JSON.parse(e,Q2)}return JSON.parse(e)}catch(o){if(t.strict)throw o;return e}}function X2(e,t={}){return ru(e,{...t,strict:!0})}var Z2=typeof ui=="object"&&ui&&ui.Object===Object&&ui,e6=typeof self=="object"&&self&&self.Object===Object&&self,ab=Z2||e6||Function("return this")(),Pu=ab.Symbol,ib=Object.prototype,t6=ib.hasOwnProperty,n6=ib.toString,Ol=Pu?Pu.toStringTag:void 0;function r6(e){var t=t6.call(e,Ol),n=e[Ol];try{e[Ol]=void 0;var o=!0}catch{}var a=n6.call(e);return o&&(t?e[Ol]=n:delete e[Ol]),a}var o6=Object.prototype,a6=o6.toString;function i6(e){return a6.call(e)}var s6="[object Null]",l6="[object Undefined]",Th=Pu?Pu.toStringTag:void 0;function c6(e){return e==null?e===void 0?l6:s6:Th&&Th in Object(e)?r6(e):i6(e)}function u6(e){return e!=null&&typeof e=="object"}var d6="[object Symbol]";function v6(e){return typeof e=="symbol"||u6(e)&&c6(e)==d6}var f6=/\s/;function p6(e){for(var t=e.length;t--&&f6.test(e.charAt(t)););return t}var h6=/^\s+/;function g6(e){return e&&e.slice(0,p6(e)+1).replace(h6,"")}function $v(e){var t=typeof e;return e!=null&&(t=="object"||t=="function")}var zh=NaN,m6=/^[-+]0x[0-9a-f]+$/i,b6=/^0b[01]+$/i,y6=/^0o[0-7]+$/i,j6=parseInt;function Rh(e){if(typeof e=="number")return e;if(v6(e))return zh;if($v(e)){var t=typeof e.valueOf=="function"?e.valueOf():e;e=$v(t)?t+"":t}if(typeof e!="string")return e===0?e:+e;e=g6(e);var n=b6.test(e);return n||y6.test(e)?j6(e.slice(2),n?2:8):m6.test(e)?zh:+e}var Vd=function(){return ab.Date.now()},x6="Expected a function",w6=Math.max,k6=Math.min;function C6(e,t,n){var o,a,i,s,l,c,u=0,d=!1,v=!1,p=!0;if(typeof e!="function")throw new TypeError(x6);t=Rh(t)||0,$v(n)&&(d=!!n.leading,v="maxWait"in n,i=v?w6(Rh(n.maxWait)||0,t):i,p="trailing"in n?!!n.trailing:p);function b(z){var R=o,Y=a;return o=a=void 0,u=z,s=e.apply(Y,R),s}function m(z){return u=z,l=setTimeout(x,t),d?b(z):s}function h(z){var R=z-c,Y=z-u,E=t-R;return v?k6(E,i-Y):E}function j(z){var R=z-c,Y=z-u;return c===void 0||R>=t||R<0||v&&Y>=i}function x(){var z=Vd();if(j(z))return C(z);l=setTimeout(x,h(z))}function C(z){return l=void 0,p&&o?b(z):(o=a=void 0,s)}function A(){l!==void 0&&clearTimeout(l),u=0,o=c=a=l=void 0}function O(){return l===void 0?s:C(Vd())}function w(){var z=Vd(),R=j(z);if(o=arguments,a=this,c=z,R){if(l===void 0)return m(c);if(v)return clearTimeout(l),l=setTimeout(x,t),b(c)}return l===void 0&&(l=setTimeout(x,t)),s}return w.cancel=A,w.flush=O,w}var sb=typeof ui=="object"&&ui&&ui.Object===Object&&ui,S6=typeof self=="object"&&self&&self.Object===Object&&self,xa=sb||S6||Function("return this")(),ya=xa.Symbol,lb=Object.prototype,O6=lb.hasOwnProperty,E6=lb.toString,El=ya?ya.toStringTag:void 0;function _6(e){var t=O6.call(e,El),n=e[El];try{e[El]=void 0;var o=!0}catch{}var a=E6.call(e);return o&&(t?e[El]=n:delete e[El]),a}var M6=Object.prototype,A6=M6.toString;function T6(e){return A6.call(e)}var z6="[object Null]",R6="[object Undefined]",Ph=ya?ya.toStringTag:void 0;function ss(e){return e==null?e===void 0?R6:z6:Ph&&Ph in Object(e)?_6(e):T6(e)}function ja(e){return e!=null&&typeof e=="object"}var P6="[object Symbol]";function Nf(e){return typeof e=="symbol"||ja(e)&&ss(e)==P6}function N6(e,t){for(var n=-1,o=e==null?0:e.length,a=Array(o);++n<o;)a[n]=t(e[n],n,e);return a}var qo=Array.isArray,Nh=ya?ya.prototype:void 0,$h=Nh?Nh.toString:void 0;function cb(e){if(typeof e=="string")return e;if(qo(e))return N6(e,cb)+"";if(Nf(e))return $h?$h.call(e):"";var t=e+"";return t=="0"&&1/e==-1/0?"-0":t}function wa(e){var t=typeof e;return e!=null&&(t=="object"||t=="function")}function $f(e){return e}var $6="[object AsyncFunction]",I6="[object Function]",q6="[object GeneratorFunction]",D6="[object Proxy]";function If(e){if(!wa(e))return!1;var t=ss(e);return t==I6||t==q6||t==$6||t==D6}var Hd=xa["__core-js_shared__"],Ih=function(){var e=/[^.]+$/.exec(Hd&&Hd.keys&&Hd.keys.IE_PROTO||"");return e?"Symbol(src)_1."+e:""}();function U6(e){return!!Ih&&Ih in e}var L6=Function.prototype,B6=L6.toString;function ls(e){if(e!=null){try{return B6.call(e)}catch{}try{return e+""}catch{}}return""}var F6=/[\\^$.*+?()[\]{}|]/g,W6=/^\[object .+?Constructor\]$/,V6=Function.prototype,H6=Object.prototype,J6=V6.toString,K6=H6.hasOwnProperty,Y6=RegExp("^"+J6.call(K6).replace(F6,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$");function Q6(e){if(!wa(e)||U6(e))return!1;var t=If(e)?Y6:W6;return t.test(ls(e))}function G6(e,t){return e?.[t]}function cs(e,t){var n=G6(e,t);return Q6(n)?n:void 0}var Iv=cs(xa,"WeakMap"),qh=Object.create,X6=function(){function e(){}return function(t){if(!wa(t))return{};if(qh)return qh(t);e.prototype=t;var n=new e;return e.prototype=void 0,n}}();function Z6(e,t,n){switch(n.length){case 0:return e.call(t);case 1:return e.call(t,n[0]);case 2:return e.call(t,n[0],n[1]);case 3:return e.call(t,n[0],n[1],n[2])}return e.apply(t,n)}function eO(e,t){var n=-1,o=e.length;for(t||(t=Array(o));++n<o;)t[n]=e[n];return t}var tO=800,nO=16,rO=Date.now;function oO(e){var t=0,n=0;return function(){var o=rO(),a=nO-(o-n);if(n=o,a>0){if(++t>=tO)return arguments[0]}else t=0;return e.apply(void 0,arguments)}}function aO(e){return function(){return e}}var Nu=function(){try{var e=cs(Object,"defineProperty");return e({},"",{}),e}catch{}}(),iO=Nu?function(e,t){return Nu(e,"toString",{configurable:!0,enumerable:!1,value:aO(t),writable:!0})}:$f,sO=oO(iO);function lO(e,t){for(var n=-1,o=e==null?0:e.length;++n<o&&t(e[n],n,e)!==!1;);return e}var cO=9007199254740991,uO=/^(?:0|[1-9]\d*)$/;function qf(e,t){var n=typeof e;return t=t??cO,!!t&&(n=="number"||n!="symbol"&&uO.test(e))&&e>-1&&e%1==0&&e<t}function ad(e,t,n){t=="__proto__"&&Nu?Nu(e,t,{configurable:!0,enumerable:!0,value:n,writable:!0}):e[t]=n}function mc(e,t){return e===t||e!==e&&t!==t}var dO=Object.prototype,vO=dO.hasOwnProperty;function ub(e,t,n){var o=e[t];(!(vO.call(e,t)&&mc(o,n))||n===void 0&&!(t in e))&&ad(e,t,n)}function db(e,t,n,o){var a=!n;n||(n={});for(var i=-1,s=t.length;++i<s;){var l=t[i],c=o?o(n[l],e[l],l,n,e):void 0;c===void 0&&(c=e[l]),a?ad(n,l,c):ub(n,l,c)}return n}var Dh=Math.max;function fO(e,t,n){return t=Dh(t===void 0?e.length-1:t,0),function(){for(var o=arguments,a=-1,i=Dh(o.length-t,0),s=Array(i);++a<i;)s[a]=o[t+a];a=-1;for(var l=Array(t+1);++a<t;)l[a]=o[a];return l[t]=n(s),Z6(e,this,l)}}function pO(e,t){return sO(fO(e,t,$f),e+"")}var hO=9007199254740991;function Df(e){return typeof e=="number"&&e>-1&&e%1==0&&e<=hO}function id(e){return e!=null&&Df(e.length)&&!If(e)}function gO(e,t,n){if(!wa(n))return!1;var o=typeof t;return(o=="number"?id(n)&&qf(t,n.length):o=="string"&&t in n)?mc(n[t],e):!1}function vb(e){return pO(function(t,n){var o=-1,a=n.length,i=a>1?n[a-1]:void 0,s=a>2?n[2]:void 0;for(i=e.length>3&&typeof i=="function"?(a--,i):void 0,s&&gO(n[0],n[1],s)&&(i=a<3?void 0:i,a=1),t=Object(t);++o<a;){var l=n[o];l&&e(t,l,o,i)}return t})}var mO=Object.prototype;function Uf(e){var t=e&&e.constructor,n=typeof t=="function"&&t.prototype||mO;return e===n}function bO(e,t){for(var n=-1,o=Array(e);++n<e;)o[n]=t(n);return o}var yO="[object Arguments]";function Uh(e){return ja(e)&&ss(e)==yO}var fb=Object.prototype,jO=fb.hasOwnProperty,xO=fb.propertyIsEnumerable,$u=Uh(function(){return arguments}())?Uh:function(e){return ja(e)&&jO.call(e,"callee")&&!xO.call(e,"callee")};function wO(){return!1}var pb=typeof exports=="object"&&exports&&!exports.nodeType&&exports,Lh=pb&&typeof module=="object"&&module&&!module.nodeType&&module,kO=Lh&&Lh.exports===pb,Bh=kO?xa.Buffer:void 0,CO=Bh?Bh.isBuffer:void 0,tc=CO||wO,SO="[object Arguments]",OO="[object Array]",EO="[object Boolean]",_O="[object Date]",MO="[object Error]",AO="[object Function]",TO="[object Map]",zO="[object Number]",RO="[object Object]",PO="[object RegExp]",NO="[object Set]",$O="[object String]",IO="[object WeakMap]",qO="[object ArrayBuffer]",DO="[object DataView]",UO="[object Float32Array]",LO="[object Float64Array]",BO="[object Int8Array]",FO="[object Int16Array]",WO="[object Int32Array]",VO="[object Uint8Array]",HO="[object Uint8ClampedArray]",JO="[object Uint16Array]",KO="[object Uint32Array]",ur={};ur[UO]=ur[LO]=ur[BO]=ur[FO]=ur[WO]=ur[VO]=ur[HO]=ur[JO]=ur[KO]=!0;ur[SO]=ur[OO]=ur[qO]=ur[EO]=ur[DO]=ur[_O]=ur[MO]=ur[AO]=ur[TO]=ur[zO]=ur[RO]=ur[PO]=ur[NO]=ur[$O]=ur[IO]=!1;function YO(e){return ja(e)&&Df(e.length)&&!!ur[ss(e)]}function Lf(e){return function(t){return e(t)}}var hb=typeof exports=="object"&&exports&&!exports.nodeType&&exports,Nl=hb&&typeof module=="object"&&module&&!module.nodeType&&module,QO=Nl&&Nl.exports===hb,Jd=QO&&sb.process,tl=function(){try{var e=Nl&&Nl.require&&Nl.require("util").types;return e||Jd&&Jd.binding&&Jd.binding("util")}catch{}}(),Fh=tl&&tl.isTypedArray,Bf=Fh?Lf(Fh):YO,GO=Object.prototype,XO=GO.hasOwnProperty;function gb(e,t){var n=qo(e),o=!n&&$u(e),a=!n&&!o&&tc(e),i=!n&&!o&&!a&&Bf(e),s=n||o||a||i,l=s?bO(e.length,String):[],c=l.length;for(var u in e)(t||XO.call(e,u))&&!(s&&(u=="length"||a&&(u=="offset"||u=="parent")||i&&(u=="buffer"||u=="byteLength"||u=="byteOffset")||qf(u,c)))&&l.push(u);return l}function mb(e,t){return function(n){return e(t(n))}}var ZO=mb(Object.keys,Object),e8=Object.prototype,t8=e8.hasOwnProperty;function n8(e){if(!Uf(e))return ZO(e);var t=[];for(var n in Object(e))t8.call(e,n)&&n!="constructor"&&t.push(n);return t}function Ff(e){return id(e)?gb(e):n8(e)}function r8(e){var t=[];if(e!=null)for(var n in Object(e))t.push(n);return t}var o8=Object.prototype,a8=o8.hasOwnProperty;function i8(e){if(!wa(e))return r8(e);var t=Uf(e),n=[];for(var o in e)o=="constructor"&&(t||!a8.call(e,o))||n.push(o);return n}function Wf(e){return id(e)?gb(e,!0):i8(e)}var s8=vb(function(e,t,n,o){db(t,Wf(t),e,o)}),l8=/\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,c8=/^\w*$/;function Vf(e,t){if(qo(e))return!1;var n=typeof e;return n=="number"||n=="symbol"||n=="boolean"||e==null||Nf(e)?!0:c8.test(e)||!l8.test(e)||t!=null&&e in Object(t)}var nc=cs(Object,"create");function u8(){this.__data__=nc?nc(null):{},this.size=0}function d8(e){var t=this.has(e)&&delete this.__data__[e];return this.size-=t?1:0,t}var v8="__lodash_hash_undefined__",f8=Object.prototype,p8=f8.hasOwnProperty;function h8(e){var t=this.__data__;if(nc){var n=t[e];return n===v8?void 0:n}return p8.call(t,e)?t[e]:void 0}var g8=Object.prototype,m8=g8.hasOwnProperty;function b8(e){var t=this.__data__;return nc?t[e]!==void 0:m8.call(t,e)}var y8="__lodash_hash_undefined__";function j8(e,t){var n=this.__data__;return this.size+=this.has(e)?0:1,n[e]=nc&&t===void 0?y8:t,this}function as(e){var t=-1,n=e==null?0:e.length;for(this.clear();++t<n;){var o=e[t];this.set(o[0],o[1])}}as.prototype.clear=u8;as.prototype.delete=d8;as.prototype.get=h8;as.prototype.has=b8;as.prototype.set=j8;function x8(){this.__data__=[],this.size=0}function sd(e,t){for(var n=e.length;n--;)if(mc(e[n][0],t))return n;return-1}var w8=Array.prototype,k8=w8.splice;function C8(e){var t=this.__data__,n=sd(t,e);if(n<0)return!1;var o=t.length-1;return n==o?t.pop():k8.call(t,n,1),--this.size,!0}function S8(e){var t=this.__data__,n=sd(t,e);return n<0?void 0:t[n][1]}function O8(e){return sd(this.__data__,e)>-1}function E8(e,t){var n=this.__data__,o=sd(n,e);return o<0?(++this.size,n.push([e,t])):n[o][1]=t,this}function Ya(e){var t=-1,n=e==null?0:e.length;for(this.clear();++t<n;){var o=e[t];this.set(o[0],o[1])}}Ya.prototype.clear=x8;Ya.prototype.delete=C8;Ya.prototype.get=S8;Ya.prototype.has=O8;Ya.prototype.set=E8;var rc=cs(xa,"Map");function _8(){this.size=0,this.__data__={hash:new as,map:new(rc||Ya),string:new as}}function M8(e){var t=typeof e;return t=="string"||t=="number"||t=="symbol"||t=="boolean"?e!=="__proto__":e===null}function ld(e,t){var n=e.__data__;return M8(t)?n[typeof t=="string"?"string":"hash"]:n.map}function A8(e){var t=ld(this,e).delete(e);return this.size-=t?1:0,t}function T8(e){return ld(this,e).get(e)}function z8(e){return ld(this,e).has(e)}function R8(e,t){var n=ld(this,e),o=n.size;return n.set(e,t),this.size+=n.size==o?0:1,this}function Qa(e){var t=-1,n=e==null?0:e.length;for(this.clear();++t<n;){var o=e[t];this.set(o[0],o[1])}}Qa.prototype.clear=_8;Qa.prototype.delete=A8;Qa.prototype.get=T8;Qa.prototype.has=z8;Qa.prototype.set=R8;var P8="Expected a function";function Hf(e,t){if(typeof e!="function"||t!=null&&typeof t!="function")throw new TypeError(P8);var n=function(){var o=arguments,a=t?t.apply(this,o):o[0],i=n.cache;if(i.has(a))return i.get(a);var s=e.apply(this,o);return n.cache=i.set(a,s)||i,s};return n.cache=new(Hf.Cache||Qa),n}Hf.Cache=Qa;var N8=500;function $8(e){var t=Hf(e,function(o){return n.size===N8&&n.clear(),o}),n=t.cache;return t}var I8=/[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,q8=/\\(\\)?/g,D8=$8(function(e){var t=[];return e.charCodeAt(0)===46&&t.push(""),e.replace(I8,function(n,o,a,i){t.push(a?i.replace(q8,"$1"):o||n)}),t});function U8(e){return e==null?"":cb(e)}function bb(e,t){return qo(e)?e:Vf(e,t)?[e]:D8(U8(e))}function cd(e){if(typeof e=="string"||Nf(e))return e;var t=e+"";return t=="0"&&1/e==-1/0?"-0":t}function yb(e,t){t=bb(t,e);for(var n=0,o=t.length;e!=null&&n<o;)e=e[cd(t[n++])];return n&&n==o?e:void 0}function L8(e,t,n){var o=e==null?void 0:yb(e,t);return o===void 0?n:o}function B8(e,t){for(var n=-1,o=t.length,a=e.length;++n<o;)e[a+n]=t[n];return e}var jb=mb(Object.getPrototypeOf,Object),F8="[object Object]",W8=Function.prototype,V8=Object.prototype,xb=W8.toString,H8=V8.hasOwnProperty,J8=xb.call(Object);function K8(e){if(!ja(e)||ss(e)!=F8)return!1;var t=jb(e);if(t===null)return!0;var n=H8.call(t,"constructor")&&t.constructor;return typeof n=="function"&&n instanceof n&&xb.call(n)==J8}function Y8(){this.__data__=new Ya,this.size=0}function Q8(e){var t=this.__data__,n=t.delete(e);return this.size=t.size,n}function G8(e){return this.__data__.get(e)}function X8(e){return this.__data__.has(e)}var Z8=200;function e4(e,t){var n=this.__data__;if(n instanceof Ya){var o=n.__data__;if(!rc||o.length<Z8-1)return o.push([e,t]),this.size=++n.size,this;n=this.__data__=new Qa(o)}return n.set(e,t),this.size=n.size,this}function Xo(e){var t=this.__data__=new Ya(e);this.size=t.size}Xo.prototype.clear=Y8;Xo.prototype.delete=Q8;Xo.prototype.get=G8;Xo.prototype.has=X8;Xo.prototype.set=e4;var wb=typeof exports=="object"&&exports&&!exports.nodeType&&exports,Wh=wb&&typeof module=="object"&&module&&!module.nodeType&&module,t4=Wh&&Wh.exports===wb,Vh=t4?xa.Buffer:void 0,Hh=Vh?Vh.allocUnsafe:void 0;function kb(e,t){if(t)return e.slice();var n=e.length,o=Hh?Hh(n):new e.constructor(n);return e.copy(o),o}function n4(e,t){for(var n=-1,o=e==null?0:e.length,a=0,i=[];++n<o;){var s=e[n];t(s,n,e)&&(i[a++]=s)}return i}function r4(){return[]}var o4=Object.prototype,a4=o4.propertyIsEnumerable,Jh=Object.getOwnPropertySymbols,i4=Jh?function(e){return e==null?[]:(e=Object(e),n4(Jh(e),function(t){return a4.call(e,t)}))}:r4;function s4(e,t,n){var o=t(e);return qo(e)?o:B8(o,n(e))}function qv(e){return s4(e,Ff,i4)}var Dv=cs(xa,"DataView"),Uv=cs(xa,"Promise"),Lv=cs(xa,"Set"),Kh="[object Map]",l4="[object Object]",Yh="[object Promise]",Qh="[object Set]",Gh="[object WeakMap]",Xh="[object DataView]",c4=ls(Dv),u4=ls(rc),d4=ls(Uv),v4=ls(Lv),f4=ls(Iv),Fo=ss;(Dv&&Fo(new Dv(new ArrayBuffer(1)))!=Xh||rc&&Fo(new rc)!=Kh||Uv&&Fo(Uv.resolve())!=Yh||Lv&&Fo(new Lv)!=Qh||Iv&&Fo(new Iv)!=Gh)&&(Fo=function(e){var t=ss(e),n=t==l4?e.constructor:void 0,o=n?ls(n):"";if(o)switch(o){case c4:return Xh;case u4:return Kh;case d4:return Yh;case v4:return Qh;case f4:return Gh}return t});var p4=Object.prototype,h4=p4.hasOwnProperty;function g4(e){var t=e.length,n=new e.constructor(t);return t&&typeof e[0]=="string"&&h4.call(e,"index")&&(n.index=e.index,n.input=e.input),n}var Iu=xa.Uint8Array;function Jf(e){var t=new e.constructor(e.byteLength);return new Iu(t).set(new Iu(e)),t}function m4(e,t){var n=Jf(e.buffer);return new e.constructor(n,e.byteOffset,e.byteLength)}var b4=/\w*$/;function y4(e){var t=new e.constructor(e.source,b4.exec(e));return t.lastIndex=e.lastIndex,t}var Zh=ya?ya.prototype:void 0,eg=Zh?Zh.valueOf:void 0;function j4(e){return eg?Object(eg.call(e)):{}}function Cb(e,t){var n=t?Jf(e.buffer):e.buffer;return new e.constructor(n,e.byteOffset,e.length)}var x4="[object Boolean]",w4="[object Date]",k4="[object Map]",C4="[object Number]",S4="[object RegExp]",O4="[object Set]",E4="[object String]",_4="[object Symbol]",M4="[object ArrayBuffer]",A4="[object DataView]",T4="[object Float32Array]",z4="[object Float64Array]",R4="[object Int8Array]",P4="[object Int16Array]",N4="[object Int32Array]",$4="[object Uint8Array]",I4="[object Uint8ClampedArray]",q4="[object Uint16Array]",D4="[object Uint32Array]";function U4(e,t,n){var o=e.constructor;switch(t){case M4:return Jf(e);case x4:case w4:return new o(+e);case A4:return m4(e);case T4:case z4:case R4:case P4:case N4:case $4:case I4:case q4:case D4:return Cb(e,n);case k4:return new o;case C4:case E4:return new o(e);case S4:return y4(e);case O4:return new o;case _4:return j4(e)}}function Sb(e){return typeof e.constructor=="function"&&!Uf(e)?X6(jb(e)):{}}var L4="[object Map]";function B4(e){return ja(e)&&Fo(e)==L4}var tg=tl&&tl.isMap,F4=tg?Lf(tg):B4,W4="[object Set]";function V4(e){return ja(e)&&Fo(e)==W4}var ng=tl&&tl.isSet,H4=ng?Lf(ng):V4,J4=1,Ob="[object Arguments]",K4="[object Array]",Y4="[object Boolean]",Q4="[object Date]",G4="[object Error]",Eb="[object Function]",X4="[object GeneratorFunction]",Z4="[object Map]",eE="[object Number]",_b="[object Object]",tE="[object RegExp]",nE="[object Set]",rE="[object String]",oE="[object Symbol]",aE="[object WeakMap]",iE="[object ArrayBuffer]",sE="[object DataView]",lE="[object Float32Array]",cE="[object Float64Array]",uE="[object Int8Array]",dE="[object Int16Array]",vE="[object Int32Array]",fE="[object Uint8Array]",pE="[object Uint8ClampedArray]",hE="[object Uint16Array]",gE="[object Uint32Array]",ar={};ar[Ob]=ar[K4]=ar[iE]=ar[sE]=ar[Y4]=ar[Q4]=ar[lE]=ar[cE]=ar[uE]=ar[dE]=ar[vE]=ar[Z4]=ar[eE]=ar[_b]=ar[tE]=ar[nE]=ar[rE]=ar[oE]=ar[fE]=ar[pE]=ar[hE]=ar[gE]=!0;ar[G4]=ar[Eb]=ar[aE]=!1;function ou(e,t,n,o,a,i){var s,l=t&J4;if(s!==void 0)return s;if(!wa(e))return e;var c=qo(e);if(c)s=g4(e);else{var u=Fo(e),d=u==Eb||u==X4;if(tc(e))return kb(e,l);if(u==_b||u==Ob||d&&!a)s=d?{}:Sb(e);else{if(!ar[u])return a?e:{};s=U4(e,u,l)}}i||(i=new Xo);var v=i.get(e);if(v)return v;i.set(e,s),H4(e)?e.forEach(function(m){s.add(ou(m,t,n,m,e,i))}):F4(e)&&e.forEach(function(m,h){s.set(h,ou(m,t,n,h,e,i))});var p=qv,b=c?void 0:p(e);return lO(b||e,function(m,h){b&&(h=m,m=e[h]),ub(s,h,ou(m,t,n,h,e,i))}),s}var mE=1,bE=4;function yE(e){return ou(e,mE|bE)}var jE="__lodash_hash_undefined__";function xE(e){return this.__data__.set(e,jE),this}function wE(e){return this.__data__.has(e)}function qu(e){var t=-1,n=e==null?0:e.length;for(this.__data__=new Qa;++t<n;)this.add(e[t])}qu.prototype.add=qu.prototype.push=xE;qu.prototype.has=wE;function kE(e,t){for(var n=-1,o=e==null?0:e.length;++n<o;)if(t(e[n],n,e))return!0;return!1}function CE(e,t){return e.has(t)}var SE=1,OE=2;function Mb(e,t,n,o,a,i){var s=n&SE,l=e.length,c=t.length;if(l!=c&&!(s&&c>l))return!1;var u=i.get(e),d=i.get(t);if(u&&d)return u==t&&d==e;var v=-1,p=!0,b=n&OE?new qu:void 0;for(i.set(e,t),i.set(t,e);++v<l;){var m=e[v],h=t[v];if(o)var j=s?o(h,m,v,t,e,i):o(m,h,v,e,t,i);if(j!==void 0){if(j)continue;p=!1;break}if(b){if(!kE(t,function(x,C){if(!CE(b,C)&&(m===x||a(m,x,n,o,i)))return b.push(C)})){p=!1;break}}else if(!(m===h||a(m,h,n,o,i))){p=!1;break}}return i.delete(e),i.delete(t),p}function EE(e){var t=-1,n=Array(e.size);return e.forEach(function(o,a){n[++t]=[a,o]}),n}function _E(e){var t=-1,n=Array(e.size);return e.forEach(function(o){n[++t]=o}),n}var ME=1,AE=2,TE="[object Boolean]",zE="[object Date]",RE="[object Error]",PE="[object Map]",NE="[object Number]",$E="[object RegExp]",IE="[object Set]",qE="[object String]",DE="[object Symbol]",UE="[object ArrayBuffer]",LE="[object DataView]",rg=ya?ya.prototype:void 0,Kd=rg?rg.valueOf:void 0;function BE(e,t,n,o,a,i,s){switch(n){case LE:if(e.byteLength!=t.byteLength||e.byteOffset!=t.byteOffset)return!1;e=e.buffer,t=t.buffer;case UE:return!(e.byteLength!=t.byteLength||!i(new Iu(e),new Iu(t)));case TE:case zE:case NE:return mc(+e,+t);case RE:return e.name==t.name&&e.message==t.message;case $E:case qE:return e==t+"";case PE:var l=EE;case IE:var c=o&ME;if(l||(l=_E),e.size!=t.size&&!c)return!1;var u=s.get(e);if(u)return u==t;o|=AE,s.set(e,t);var d=Mb(l(e),l(t),o,a,i,s);return s.delete(e),d;case DE:if(Kd)return Kd.call(e)==Kd.call(t)}return!1}var FE=1,WE=Object.prototype,VE=WE.hasOwnProperty;function HE(e,t,n,o,a,i){var s=n&FE,l=qv(e),c=l.length,u=qv(t),d=u.length;if(c!=d&&!s)return!1;for(var v=c;v--;){var p=l[v];if(!(s?p in t:VE.call(t,p)))return!1}var b=i.get(e),m=i.get(t);if(b&&m)return b==t&&m==e;var h=!0;i.set(e,t),i.set(t,e);for(var j=s;++v<c;){p=l[v];var x=e[p],C=t[p];if(o)var A=s?o(C,x,p,t,e,i):o(x,C,p,e,t,i);if(!(A===void 0?x===C||a(x,C,n,o,i):A)){h=!1;break}j||(j=p=="constructor")}if(h&&!j){var O=e.constructor,w=t.constructor;O!=w&&"constructor"in e&&"constructor"in t&&!(typeof O=="function"&&O instanceof O&&typeof w=="function"&&w instanceof w)&&(h=!1)}return i.delete(e),i.delete(t),h}var JE=1,og="[object Arguments]",ag="[object Array]",Hc="[object Object]",KE=Object.prototype,ig=KE.hasOwnProperty;function YE(e,t,n,o,a,i){var s=qo(e),l=qo(t),c=s?ag:Fo(e),u=l?ag:Fo(t);c=c==og?Hc:c,u=u==og?Hc:u;var d=c==Hc,v=u==Hc,p=c==u;if(p&&tc(e)){if(!tc(t))return!1;s=!0,d=!1}if(p&&!d)return i||(i=new Xo),s||Bf(e)?Mb(e,t,n,o,a,i):BE(e,t,c,n,o,a,i);if(!(n&JE)){var b=d&&ig.call(e,"__wrapped__"),m=v&&ig.call(t,"__wrapped__");if(b||m){var h=b?e.value():e,j=m?t.value():t;return i||(i=new Xo),a(h,j,n,o,i)}}return p?(i||(i=new Xo),HE(e,t,n,o,a,i)):!1}function Kf(e,t,n,o,a){return e===t?!0:e==null||t==null||!ja(e)&&!ja(t)?e!==e&&t!==t:YE(e,t,n,o,Kf,a)}var QE=1,GE=2;function XE(e,t,n,o){var a=n.length,i=a;if(e==null)return!i;for(e=Object(e);a--;){var s=n[a];if(s[2]?s[1]!==e[s[0]]:!(s[0]in e))return!1}for(;++a<i;){s=n[a];var l=s[0],c=e[l],u=s[1];if(s[2]){if(c===void 0&&!(l in e))return!1}else{var d=new Xo,v;if(!(v===void 0?Kf(u,c,QE|GE,o,d):v))return!1}}return!0}function Ab(e){return e===e&&!wa(e)}function ZE(e){for(var t=Ff(e),n=t.length;n--;){var o=t[n],a=e[o];t[n]=[o,a,Ab(a)]}return t}function Tb(e,t){return function(n){return n==null?!1:n[e]===t&&(t!==void 0||e in Object(n))}}function e3(e){var t=ZE(e);return t.length==1&&t[0][2]?Tb(t[0][0],t[0][1]):function(n){return n===e||XE(n,e,t)}}function t3(e,t){return e!=null&&t in Object(e)}function n3(e,t,n){t=bb(t,e);for(var o=-1,a=t.length,i=!1;++o<a;){var s=cd(t[o]);if(!(i=e!=null&&n(e,s)))break;e=e[s]}return i||++o!=a?i:(a=e==null?0:e.length,!!a&&Df(a)&&qf(s,a)&&(qo(e)||$u(e)))}function r3(e,t){return e!=null&&n3(e,t,t3)}var o3=1,a3=2;function i3(e,t){return Vf(e)&&Ab(t)?Tb(cd(e),t):function(n){var o=L8(n,e);return o===void 0&&o===t?r3(n,e):Kf(t,o,o3|a3)}}function s3(e){return function(t){return t?.[e]}}function l3(e){return function(t){return yb(t,e)}}function c3(e){return Vf(e)?s3(cd(e)):l3(e)}function u3(e){return typeof e=="function"?e:e==null?$f:typeof e=="object"?qo(e)?i3(e[0],e[1]):e3(e):c3(e)}function d3(e){return function(t,n,o){for(var a=-1,i=Object(t),s=o(t),l=s.length;l--;){var c=s[++a];if(n(i[c],c,i)===!1)break}return t}}var zb=d3();function v3(e,t){return e&&zb(e,t,Ff)}function Bv(e,t,n){(n!==void 0&&!mc(e[t],n)||n===void 0&&!(t in e))&&ad(e,t,n)}function f3(e){return ja(e)&&id(e)}function Fv(e,t){if(!(t==="constructor"&&typeof e[t]=="function")&&t!="__proto__")return e[t]}function p3(e){return db(e,Wf(e))}function h3(e,t,n,o,a,i,s){var l=Fv(e,n),c=Fv(t,n),u=s.get(c);if(u){Bv(e,n,u);return}var d=i?i(l,c,n+"",e,t,s):void 0,v=d===void 0;if(v){var p=qo(c),b=!p&&tc(c),m=!p&&!b&&Bf(c);d=c,p||b||m?qo(l)?d=l:f3(l)?d=eO(l):b?(v=!1,d=kb(c,!0)):m?(v=!1,d=Cb(c,!0)):d=[]:K8(c)||$u(c)?(d=l,$u(l)?d=p3(l):(!wa(l)||If(l))&&(d=Sb(c))):v=!1}v&&(s.set(c,d),a(d,c,o,i,s),s.delete(c)),Bv(e,n,d)}function Rb(e,t,n,o,a){e!==t&&zb(t,function(i,s){if(a||(a=new Xo),wa(i))h3(e,t,s,n,Rb,o,a);else{var l=o?o(Fv(e,s),i,s+"",e,t,a):void 0;l===void 0&&(l=i),Bv(e,s,l)}},Wf)}var g3=vb(function(e,t,n,o){Rb(e,t,n,o)});function m3(e,t){var n={};return t=u3(t),v3(e,function(o,a,i){ad(n,t(o,a,i),o)}),n}const b3=new RegExp("([\\p{Ll}\\d])(\\p{Lu})","gu"),y3=new RegExp("(\\p{Lu})([\\p{Lu}][\\p{Ll}])","gu"),j3=new RegExp("(\\d)\\p{Ll}|(\\p{L})\\d","u"),x3=/[^\p{L}\d]+/giu,sg="$1\0$2",lg="";function Pb(e){let t=e.trim();t=t.replace(b3,sg).replace(y3,sg),t=t.replace(x3,"\0");let n=0,o=t.length;for(;t.charAt(n)==="\0";)n++;if(n===o)return[];for(;t.charAt(o-1)==="\0";)o--;return t.slice(n,o).split(/\0/g)}function w3(e){const t=Pb(e);for(let n=0;n<t.length;n++){const o=t[n],a=j3.exec(o);if(a){const i=a.index+(a[1]??a[2]).length;t.splice(n,1,o.slice(0,i),o.slice(i))}}return t}function k3(e,t){const[n,o,a]=E3(e,t),i=C3(void 0),s=S3(void 0),l=O3(i,s);return n+o.map((c,u)=>u===0?i(c):l(c,u)).join("")+a}function C3(e){return t=>t.toLocaleLowerCase(e)}function S3(e){return t=>t.toLocaleUpperCase(e)}function O3(e,t){return(n,o)=>{const a=n[0];return(o>0&&a>="0"&&a<="9"?"_"+a:t(a))+e(n.slice(1))}}function E3(e,t={}){const n=t.split??(t.separateNumbers?w3:Pb),o=t.prefixCharacters??lg,a=t.suffixCharacters??lg;let i=0,s=e.length;for(;i<e.length;){const l=e.charAt(i);if(!o.includes(l))break;i++}for(;s>i;){const l=s-1,c=e.charAt(l);if(!a.includes(c))break;s=l}return[e.slice(0,i),n(e.slice(i,s)),e.slice(s)]}const $l=e=>/.+-.+/.test(e)?k3(e):e,_3=e=>Object.prototype.toString.call(e).slice(8,-1)==="Object";function M3(e,t){const n=Object.create(null),o=e.split(",");for(let a=0;a<o.length;a++)n[o[a]]=!0;return a=>!!n[a]}const A3=M3("String,Number,Boolean,Function,Symbol,BigInt");function T3(e){const t=e?.toString().match(/^\s*function (\w+)/);return t?t[1]:e===null?"null":""}function z3(e,t){let n;const o=T3(t);if(A3(o)){const a=typeof e;n=a===o.toLowerCase(),!n&&a==="object"&&(n=e instanceof t)}else o==="Object"?n=wa(e):o==="Array"?n=Array.isArray(e):o==="null"?n=e===null:n=e instanceof t;return{valid:n,expectedType:o}}function R3({prop:e,type:t,validator:n}){if(![void 0,null].includes(e)&&t){let o=!1;const a=Array.isArray(t)?t:[t],i=[];for(let s=0;s<a.length&&!o;s++){const{valid:l,expectedType:c}=z3(e,a[s]);i.push(c||""),o=l}if(!o)throw new TypeError(`Invalid prop: type check failed, expecting [${i.join(", ")}], receiving: ${e}`)}if(n&&!n(e))throw new Error(`Invalid prop: validator check failed, receiving: ${e}`)}function P3(e,{mergeObject:t,mergeObjectCustomizer:n,mergeFunction:o}){const a=[];for(let s=e.length-1;s>=0;s--)a.push(e[s]);const i=n||(o?(s,l)=>typeof s=="function"&&typeof l=="function"?o?.(l,s):void 0:void 0);return t==="deep"?g3(...a,i):s8(...a,i)}function N3(e,{mergeFunction:t}){return e.reduce(t,()=>{})}function ri(e,t={}){const{type:n,default:o,defaultIsDynamic:a=!1,required:i=!1,validator:s,camelizeObjectKeys:l=!1,mergeObjectApplyOnlyToDefault:c=!1,mergeFunctionApplyOnlyToDefault:u=!0}=t;let{mergeObject:d="deep",mergeObjectCustomizer:v,mergeFunction:p=!1}=t;const b=[];let m,h=!1,j=!1;const x=C=>{if(C!==void 0){R3({type:n,prop:C,validator:s});const A=_3(C),O=typeof C=="function";return h=A,j=O,A?(C=yE(C),l?m3(C,(w,z)=>$l(z)):C):C}};for(const C of e)b.push(x(C));if(!a)b.push(x(o));else if(typeof o!="function")throw new TypeError(`Invalid option: options.default should be Function when options.defaultIsDynamic enabled, receiving: ${o}`);h||(d=!1,j||(p=!1));for(let C=0;C<b.length;C++){const A=b[C];if(A!==void 0){C===b.length-1?m=A:d?m=P3(c?[A,o]:b,{mergeObject:d,mergeObjectCustomizer:v,mergeFunction:p}):p?m=N3(u?[A,o]:b,{mergeFunction:p}):m=A;break}}if(i&&[void 0,null].includes(m))throw new Error("Missing required prop");return a?ri(e,{...t,default:o(m),defaultIsDynamic:!1}):m}function cg(e){const t=Array.from($l(e));return t[0]=t[0].toUpperCase(),t.unshift("o","n"),t.join("")}function $3(e,{props:t=[],camelizePropNames:n=!1}={}){const o={props:{},attrs:{},listeners:{},hooks:{},slots:{}};let a;if(Array.isArray(t))a=n?t.map(i=>$l(i)):t;else if(n){a=[];for(const i in t)a.push($l(i))}else a=Object.keys(t);for(const i in e)if(i.startsWith("@")){const s=i.substring(1);if(s.startsWith("vue:"))o.hooks[cg(s.replace("vue:","vnode-"))]=e[i];else{if(s.startsWith("vnode"))throw new Error("@vnode-* hooks are no longer supported. Use the vue: prefix instead. For example, @vnode-mounted should be changed to @vue:mounted. @vnode-* hooks support has been removed in Vue 3.4.");o.listeners[cg(s)]=e[i]}}else if(i.startsWith("#")){const s=i.substring(1);s&&(o.slots[s]=e[i])}else{const s=n?$l(i):i;a.includes(s)?o.props[s]=e[i]:o.attrs[i]=e[i]}return o}const ug="JsonEditorVue",au=["mainMenuBar","navigationBar","statusBar","askToFormat","readOnly","escapeControlCharacters","escapeUnicodeCharacters","flattenColumns"],Za={},dg={},iu="modelValue",vg="update:modelValue",fg={[iu]:{},mode:{type:String},debounce:{type:Number},stringified:{type:Boolean,default:void 0},...Object.fromEntries(au.map(e=>[e,{type:Boolean,default:void 0}]))},I3=jg({name:ug,install(e,t){const n=$3(t||{},{props:fg});Object.assign(Za,n.props),Object.assign(dg,n.attrs),e.component(ug,this)},props:fg,emits:{[vg](e){return!0},"update:mode":function(e){return!0}},setup(e,{attrs:t,emit:n,expose:o}){var a;const i=(a=d1())==null?void 0:a.proxy,s=Ps(),l=Ps(!1),c=Ps();v1(()=>{var x;c.value=ri([e.mode,Za.mode],{type:String}),(x=s.value)==null||x.updateProps({mode:c.value||kr.tree})});const u=x=>{n("update:mode",x)};Za.mode!==void 0&&e.mode===void 0&&u(Za.mode);const d=Qd(()=>ri([e.debounce,Za.debounce,300],{type:Number})),v=Qd(()=>ri([e.stringified,Za.stringified,!0],{type:Boolean}));let p=ru;const b=x=>{l.value=!0,!v.value&&x.text&&(s.value&&!s.value.validate()&&(x.json=p(x.text)),x.text=void 0),n(vg,x.text===void 0?x.json:x.text)},m=C6(b,d.value),h=x=>{c.value==="text"?m(x):b(x)},j=(x,C)=>(...A)=>{x(...A),C(...A)};return o?.({jsonEditor:s}),f1(()=>{var x;(x=s.value)==null||x.destroy()}),p1(()=>{const x=ri([e[iu],Za[iu]]),C=Object.fromEntries(Array.from(au,O=>[O,ri([e[O],Za[O]])]).filter(([,O])=>O!==void 0)),A=ri([C,t,dg],{camelizeObjectKeys:!0,defaultIsDynamic:!0,default:O=>{var w;return p=((w=O.parser)==null?void 0:w.parse)||ru,{onChange:h,onChangeMode:u,mode:c.value,parser:{parse:X2,stringify:JSON.stringify},...x!==void 0&&{content:{[typeof x=="string"&&c.value==="text"&&v.value?"text":"json"]:x}}}},mergeFunction:j,mergeObject:"shallow",type:Object});s.value=H2({target:i?.$refs.jsonEditorRef,props:A}),fd(()=>e[iu],O=>{if(l.value){l.value=!1;return}s.value&&s.value.set([void 0,""].includes(O)?{text:""}:{[typeof O=="string"&&c.value==="text"&&v.value?"text":"json"]:O})},{deep:!0}),fd(()=>Array.from(au,O=>e[O]),O=>{var w;(w=s.value)==null||w.updateProps(Object.fromEntries(Array.from(O,(z,R)=>[au[R],z]).filter(([,z])=>z!==void 0)))}),fd(()=>t,O=>{var w,z;const R={};(O.onChange||O["on-change"])&&(R.onChange=h),(O.onChangeMode||O["on-change-mode"])&&(R.onChangeMode=u),p=((w=O.parser)==null?void 0:w.parse)||ru,(z=s.value)==null||z.updateProps(Object.getOwnPropertyNames(R).length>0?ri([O,R],{camelizeObjectKeys:!0,mergeFunction:j,mergeObject:"shallow",type:Object}):O)},{deep:!0}),o||(o=O=>{for(const w in O)i[w]=Ar(O[w])},o({jsonEditor:s}))}),()=>h1("div",{ref:"jsonEditorRef"})}});const q3={key:1,"mb-2":"","mt-2":""},E_=jg({__name:"json-editor",setup(e){const{t}=g1(),n=m1(),o=Ps('{ "a": { "array": [1, 2, 3] } }'),a=Ps("");function i(m){lo(m)?a.value=`$.${Fr(m.path)}`:zr(m)?a.value=`$.${Fr(m.path)}`:qr(m)?a.value=`$.${Fr(m.path)}`:cn(m)?a.value=`$.${Fr(m.path)}`:Rn(m)?a.value=`$.${Fr(m.focusPath)}`:a.value="No available in this mode"}const s=Ps(),l=ep("json-linter:schema-data",""),c=b1({name:"schema",storageName:"json-editor:schema",defaultValue:""}),{schemas:u,errors:d}=wy({json:o,schemaUrl:c,schemaData:l});function v(){try{o.value=Vo(o.value)}catch{}}const p=ep("json-editor:indent-size",3),b=Qd(()=>{const m=o.value;try{return JSON.stringify(JSON.parseBigNum(m),null,p.value)}catch{return m}});return(m,h)=>{const j=C1,x=Ey,C=_1,A=_y,O=My,w=S1,z=Ay,R=O1,Y=Ty;return ml(),jc("div",null,[bo(Ar(I3),{modelValue:Ar(o),"onUpdate:modelValue":h[0]||(h[0]=E=>xc(o)?o.value=E:null),mode:"text",class:y1(Ar(n).isDarkTheme?"jse-theme-dark":""),"on-select":i,"mb-2":""},null,8,["modelValue","class"]),bo(x,{justify:"center","mb-2":""},{default:Ri(()=>[bo(j,{onClick:v},{default:Ri(()=>[j1(tp(Ar(t)("tools.json-editor.texts.repair-json")),1)]),_:1})]),_:1}),bo(A,{label:Ar(t)("tools.json-editor.texts.label-current-selected-node-jsonpath")},{default:Ri(()=>[bo(C,{value:Ar(a)},null,8,["value"])]),_:1},8,["label"]),bo(O),bo(A,{label:Ar(t)("tools.json-linter.texts.label-indent-size-0-compact"),"label-placement":"left"},{default:Ri(()=>[bo(w,{value:Ar(p),"onUpdate:value":h[1]||(h[1]=E=>xc(p)?p.value=E:null),min:"0",max:"10",style:{width:"100px"}},null,8,["value"])]),_:1},8,["label"]),bo(A,{label:Ar(t)("tools.json-editor.texts.label-your-edited-json")},{default:Ri(()=>[bo(C,{value:Ar(b),language:"json","download-file-name":"output.json"},null,8,["value"])]),_:1},8,["label"]),bo(A,{label:Ar(t)("tools.json-editor.texts.label-json-schema"),"label-placement":"left","label-width":"130px","label-align":"right"},{default:Ri(()=>[bo(z,{value:Ar(c),"onUpdate:value":h[2]||(h[2]=E=>xc(c)?c.value=E:null),options:[{label:Ar(t)("tools.json-editor.texts.label-no-validation"),value:""},{label:Ar(t)("tools.json-editor.texts.label-custom"),value:"custom"},...Ar(u).map(E=>({label:`${E.name} / ${E.description}`,value:E.url}))],filterable:"","mb-4":""},null,8,["value","options"])]),_:1},8,["label"]),Ar(c)==="custom"?(ml(),x1(R,{key:0,ref_key:"jsonSchemaInputElement",ref:s,value:Ar(l),"onUpdate:value":h[3]||(h[3]=E=>xc(l)?l.value=E:null),placeholder:Ar(t)("tools.json-editor.texts.placeholder-paste-your-json-schema-here"),rows:"20",multiline:"",autocomplete:"off",autocorrect:"off",autocapitalize:"off",spellcheck:"false",monospace:""},null,8,["value","placeholder"])):np("",!0),Ar(d).length>0?(ml(),jc("div",q3,[bo(Y,{title:Ar(t)("tools.json-editor.texts.title-schema-validation-errors"),type:"error"},{default:Ri(()=>[(ml(!0),jc(w1,null,k1(Ar(d),E=>(ml(),jc("ul",{key:E},[E1("li",null,tp(E),1)]))),128))]),_:1},8,["title"])])):np("",!0)])}}});export{E_ as default};
