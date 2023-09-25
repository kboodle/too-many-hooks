import{j as l}from"./jsx-runtime-42309cba.js";import{a as b}from"./index-546ee486.js";const d=({variant:e="fill",color:a,className:t,...n})=>l.jsx("button",{className:`rounded-md border border-transparent px-1.5 py-1 disabled:hover:no-underline  ${e==="fill"?"bg-blue-500 text-white hover:underline disabled:bg-slate-500 ":e==="outline"?"border-slate-800 bg-white hover:underline disabled:text-slate-600":"hover:bg-slate-100"} ${t}`,style:e==="fill"?{backgroundColor:a}:e==="outline"?{borderColor:a}:{color:a},...n});try{d.displayName="Button",d.__docgenInfo={description:"",displayName:"Button",props:{variant:{defaultValue:{value:"fill"},description:"",name:"variant",required:!1,type:{name:"enum",value:[{value:'"text"'},{value:'"fill"'},{value:'"outline"'}]}},color:{defaultValue:null,description:"",name:"color",required:!1,type:{name:"string"}}}}}catch{}const u=({isOpen:e,onClose:a,children:t})=>e?b.createPortal(l.jsxs(l.Fragment,{children:[l.jsx("div",{className:"fixed left-0 top-0 z-50 h-screen w-screen bg-black opacity-50",onClick:a,"aria-hidden":!0}),l.jsx("div",{className:"fixed left-2/4 top-2/4 z-50 -translate-x-2/4 -translate-y-2/4","aria-modal":!0,tabIndex:-1,role:"dialog",children:l.jsxs("div",{className:"flex h-60 max-w-lg flex-col justify-center gap-12 rounded-lg bg-white p-4 text-xl leading-6 text-black",children:[a&&l.jsx(d,{variant:"text",title:"Close",onClick:a,className:"absolute right-2 top-2",children:"✕"}),t]})})]}),document.body):null;try{u.displayName="Modal",u.__docgenInfo={description:"",displayName:"Modal",props:{isOpen:{defaultValue:null,description:"",name:"isOpen",required:!0,type:{name:"boolean"}},onClose:{defaultValue:null,description:"",name:"onClose",required:!1,type:{name:"(() => void)"}}}}}catch{}const c=({label:e,labelDirection:a="row",onChange:t,options:n,className:p,variant:r="outline",color:o,...m})=>l.jsxs("label",{className:`flex ${a==="row"?"items-baseline":"flex-col items-start"} gap-1`,children:[e,l.jsx("select",{className:`w-full rounded-md border border-transparent bg-transparent py-1 pl-1.5 pr-8 disabled:hover:no-underline  ${r==="fill"?"bg-blue-500 text-white hover:underline disabled:bg-slate-500":r==="outline"?"border-slate-800 bg-white hover:underline disabled:text-slate-600":"hover:bg-slate-100"} ${p}`,style:r==="fill"?{backgroundColor:o}:r==="outline"?{borderColor:o}:{color:o},onChange:t?i=>t(i):void 0,...m,children:n.map(({value:i,label:s})=>l.jsx("option",{value:i,label:s},s))})]});try{c.displayName="Select",c.__docgenInfo={description:"",displayName:"Select",props:{label:{defaultValue:null,description:"",name:"label",required:!1,type:{name:"ReactNode"}},labelDirection:{defaultValue:{value:"row"},description:"",name:"labelDirection",required:!1,type:{name:"enum",value:[{value:'"column"'},{value:'"row"'}]}},onChange:{defaultValue:null,description:"",name:"onChange",required:!1,type:{name:"ChangeEventHandler<HTMLSelectElement & { value: T; }>"}},options:{defaultValue:null,description:"",name:"options",required:!0,type:{name:"{ value: T; label: string; }[]"}},variant:{defaultValue:{value:"outline"},description:"",name:"variant",required:!1,type:{name:"enum",value:[{value:'"text"'},{value:'"fill"'},{value:'"outline"'}]}},color:{defaultValue:null,description:"",name:"color",required:!1,type:{name:"string"}}}}}catch{}export{d as B,u as M,c as S};
//# sourceMappingURL=Select-0811ec66.js.map