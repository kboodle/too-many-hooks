import{r as t}from"./index-RYns6xqu.js";const b=({initial:c=0,step:e=1})=>{const[o,s]=t.useState(c),l=t.useCallback(r=>s(a=>a+(r??e)),[e]),n=t.useCallback(r=>s(a=>a-(r??e)),[e]),u=t.useCallback(()=>s(c),[c]);return[o,{set:s,increment:l,decrement:n,reset:u}]};export{b as u};