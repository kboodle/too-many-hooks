import{r as e}from"./index-f1f749bf.js";var k={},E={get exports(){return k},set exports(t){k=t}},m={};/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var S=e,O=Symbol.for("react.element"),h=Symbol.for("react.fragment"),w=Object.prototype.hasOwnProperty,F=S.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,P={key:!0,ref:!0,__self:!0,__source:!0};function C(t,n,s){var r,u={},c=null,i=null;s!==void 0&&(c=""+s),n.key!==void 0&&(c=""+n.key),n.ref!==void 0&&(i=n.ref);for(r in n)w.call(n,r)&&!P.hasOwnProperty(r)&&(u[r]=n[r]);if(t&&t.defaultProps)for(r in n=t.defaultProps,n)u[r]===void 0&&(u[r]=n[r]);return{$$typeof:O,type:t,key:c,ref:i,props:u,_owner:F.current}}m.Fragment=h;m.jsx=C;m.jsxs=C;(function(t){t.exports=m})(E);const A=k.Fragment,I=k.jsx,L=k.jsxs,T=t=>typeof t=="function",N=t=>{const[n,s]=e.useState(t),r=e.useCallback((l,a)=>T(a)?a(l):a,[]),u=e.useCallback(()=>s([]),[]),c=e.useCallback(()=>s(t),[t]),i=e.useCallback((...l)=>s(a=>[...a,...l]),[]),f=e.useCallback((l,...a)=>s(o=>[...o.slice(0,l),...a,...o.slice(l)]),[]),p=e.useCallback(l=>s(a=>[...a.slice(0,l),...a.slice(l+1)]),[]),v=e.useCallback(l=>s(a=>a.filter(l)),[]),_=e.useCallback((l,a)=>s(o=>o.slice(l,a)),[]),x=e.useCallback((l,...a)=>s(o=>[...o.slice(0,l),...a.map((b,j)=>r(o[l+j],b)),...o.slice(l+a.length)]),[r]),y=e.useCallback((l,a)=>s(o=>o.map(b=>l(b)?r(b,a):b)),[r]),d=e.useCallback(l=>s(a=>a.map(o=>r(o,l))),[r]),R=e.useCallback(l=>s(a=>[...a.sort(l)]),[]),g=e.useCallback(()=>s(l=>[...l.reverse()]),[]);return[n,{set:s,clear:u,reset:c,push:i,insertAt:f,removeAt:p,removeWhere:v,trimToRange:_,updateAt:x,updateWhere:y,updateAll:d,sort:R,reverse:g}]},U=t=>{const[n,s]=e.useState(t),r=e.useCallback(()=>s(!0),[]),u=e.useCallback(()=>s(!1),[]),c=e.useCallback(()=>s(i=>!i),[]);return[n,{set:s,flag:r,unflag:u,toggle:c}]},D=(t,n)=>{const[s,r]=e.useState(),u=e.useRef(new ResizeObserver(r));return e.useEffect(()=>{if(t){const c=u.current;return c.observe(t,n),()=>{c.unobserve(t)}}},[t,u,n]),s},$=({initial:t=0,step:n=1})=>{const[s,r]=e.useState(t),u=e.useCallback(f=>r(p=>p+(f??n)),[n]),c=e.useCallback(f=>r(p=>p-(f??n)),[n]),i=e.useCallback(()=>r(t),[t]);return[s,{set:r,increment:u,decrement:c,reset:i}]};export{U as C,A as F,D as S,$ as U,I as a,L as j,N as w};
//# sourceMappingURL=too-many-hooks-471dcf19.js.map