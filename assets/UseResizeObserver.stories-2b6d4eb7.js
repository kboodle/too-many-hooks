import{M as g,e as b,C as u,f as m}from"./chunk-MA2MUXQN-17148198.js";import"./chunk-R4NKYYJA-96bb58e6.js";import{a,j as e,F as R}from"./jsx-runtime-004bc00d.js";import{r as c}from"./index-b3c7c874.js";import{G as f}from"./too-many-hooks-cd89ca79.js";import{u as p}from"./index-a1245236.js";import"./iframe-5cf682ab.js";import"../sb-preview/runtime.mjs";import"./index-d475d2ea.js";import"./_commonjsHelpers-042e6b4d.js";import"./_getTag-dfdf31e6.js";import"./index-356e4a49.js";const l=()=>{const[t,s]=c.useState(null),n=f(t);return a("div",{className:"prose flex flex-col items-center gap-4",children:[e("p",{children:"Resize to change the flow of content"}),a("div",{ref:r=>s(r),className:`flex h-80 w-80 resize gap-4 overflow-auto border border-slate-800 bg-slate-200 p-4 ${n&&n[0].contentRect.width<300?"flex-col":""}`,children:[e("div",{className:"flex-1 rounded border border-slate-500 bg-white"}),e("div",{className:"flex-1 rounded border border-slate-500 bg-white"})]})]})};try{l.displayName="ContainerQuery",l.__docgenInfo={description:"",displayName:"ContainerQuery",props:{}}}catch{}const y=`import React, { useState } from 'react'
import { useResizeObserver } from 'too-many-hooks'

const ContainerQuery: React.FC = () => {
  const [container, setContainer] = useState<HTMLDivElement | null>(null)
  const entries = useResizeObserver(container)

  return (
    <div className="prose flex flex-col items-center gap-4">
      <p>Resize to change the flow of content</p>
      <div
        ref={element => setContainer(element)}
        className={\`flex h-80 w-80 resize gap-4 overflow-auto border border-slate-800 bg-slate-200 p-4 \${
          entries && entries[0].contentRect.width < 300 ? 'flex-col' : ''
        }\`}
      >
        <div className="flex-1 rounded border border-slate-500 bg-white" />
        <div className="flex-1 rounded border border-slate-500 bg-white" />
      </div>
    </div>
  )
}

export default ContainerQuery
`,d=({onResize:t})=>{const[s,n]=c.useState(null),r=f(s);return c.useEffect(()=>{if(r){const o=r[0].target.getBoundingClientRect();t(`Element resized to ${o.width} x ${o.height}`)}},[r,t]),e("textarea",{className:"prose",ref:o=>n(o)})};try{d.displayName="TextArea",d.__docgenInfo={description:"",displayName:"TextArea",props:{onResize:{defaultValue:null,description:"",name:"onResize",required:!0,type:{name:"(name?: string | null | undefined) => string"}}}}}catch{}const v=`import React, { useEffect, useState } from 'react'
import { useResizeObserver } from 'too-many-hooks'

interface Props {
  onResize: (name?: string | null) => string
}

const TextArea: React.FC<Props> = ({ onResize }) => {
  const [textArea, setTextArea] = useState<HTMLTextAreaElement | null>(null)
  const entries = useResizeObserver(textArea)

  useEffect(() => {
    if (entries) {
      const boundingRect = entries[0].target.getBoundingClientRect()
      onResize(\`Element resized to \${boundingRect.width} x \${boundingRect.height}\`)
    }
  }, [entries, onResize])

  return <textarea className="prose" ref={element => setTextArea(element)} />
}

export default TextArea
`,h={parameters:{layout:"centered",docs:{source:{code:v,language:"tsx"}}},argTypes:{onResize:{action:t=>t}},render:t=>e(d,{...t})},x={parameters:{layout:"centered",docs:{source:{code:y,language:"tsx"}}},render:t=>e(l,{...t})},_=`/**
 * \`useResizeObserver\` hook type
 *
 * @export
 * @typedef {UseResizeObserver}
 * @param {(Element | null)} target
 * @param {?ResizeObserverOptions} [options]
 * @returns {(ResizeObserverEntry[] | undefined)}
 */
export declare type UseResizeObserver = (target: Element | null, options?: ResizeObserverOptions) => ResizeObserverEntry[] | undefined;
/**
 * Wraps a resize observer on an element
 *
 * @implements {UseResizeObserver}
 * @param {(Element | null)} target
 * @param {?ResizeObserverOptions} [options]
 * @returns {(ResizeObserverEntry[] | undefined)}
 */
declare const useResizeObserver: UseResizeObserver;
export default useResizeObserver;
`;function z(t={}){const{wrapper:s}=Object.assign({},p(),t.components);return s?e(s,{...t,children:e(n,{})}):n();function n(){const r=Object.assign({h1:"h1",p:"p",code:"code",h2:"h2",h3:"h3"},p(),t.components);return a(R,{children:[e(g,{title:"Example/UseResizeObserver"}),`
`,e(r.h1,{children:"useResizeObserver"}),`
`,a(r.p,{children:["Handles adding and removing a ",e(r.code,{children:"ResizeObserver"})," to observe an element and return the most recent ",e(r.code,{children:"ResizeObserverEntry"})]}),`
`,e(r.h2,{children:"Types"}),`
`,e(b,{language:"ts",code:_}),`
`,e(r.h2,{children:"Examples"}),`
`,e(r.h3,{children:"Container Query Emulation"}),`
`,e(u,{withSource:"open",children:e(m,{name:"Container Query Emulation",story:x})}),`
`,e(r.h3,{children:"Text Area"}),`
`,e(u,{withSource:"open",children:e(m,{name:"Text Area",story:h})})]})}}const O=x;O.storyName="Container Query Emulation";const E=h;E.storyName="Text Area";const i={title:"Example/UseResizeObserver",tags:["mdx"],includeStories:["_containerQuery_","_textArea_"]};i.parameters=i.parameters||{};i.parameters.docs={...i.parameters.docs||{},page:z};const F=["_containerQuery_","_textArea_"];export{F as __namedExportsOrder,O as _containerQuery_,E as _textArea_,i as default};
//# sourceMappingURL=UseResizeObserver.stories-2b6d4eb7.js.map
