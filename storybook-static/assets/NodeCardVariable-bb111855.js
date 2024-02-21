import{_ as G}from"./iframe-4066d2cc.js";import{f as L,ah as H,x as M,e as d,G as s,H as i,S as y,K as p,J as T,A as l,N as f,F as N,Z as U,Q as O,U as P,L as q,M as z}from"./vue.esm-bundler-33967e91.js";import{G as J,ar as u,a1 as b,X as Q}from"./ModalPvLimitAlertView-cb9178ae.js";import{N as X}from"./NodeCardBackground-e1c3a5e9.js";import{b as Z,e as W,f as Y}from"./Editor-e2ebb077.js";import{_ as $}from"./_plugin-vue_export-helper-c27b6911.js";import"../sb-preview/runtime.js";import"./vue-i18n.cjs-bd62fc86.js";import"./_commonjsHelpers-042e6b4d.js";import"./ModalUpgradeRequired-a455cfd7.js";import"./BasicModal-000dc82b.js";import"./PfButton-db6d6722.js";import"./PfIconContext-bd54ca9b.js";import"./lodash-bf1bac5c.js";import"./_commonjs-dynamic-modules-302442b1.js";import"./PfIcon-bb1c3c10.js";import"./mapValues-a1d744f5.js";import"./SelectSwitch-b6107958.js";import"./tiptap-extension-paragraph.esm-72054cce.js";import"./draggable-203bb716.js";import"./ApiIcon-4990672b.js";import"./useSearch-b8b0ad67.js";const ee=n=>(q("data-v-7d9b87a0"),n=n(),z(),n),ae=ee(()=>p("i",{class:"material-icons child-arrow"},"play_arrow",-1)),re={class:"variable-child-frame"},g=L({__name:"NodeCardVariable",props:{node:{}},setup(n){const h=H(()=>G(()=>import("./Editor-e2ebb077.js").then(a=>a.k),["./Editor-e2ebb077.js","./vue.esm-bundler-33967e91.js","./ModalPvLimitAlertView-cb9178ae.js","./vue-i18n.cjs-bd62fc86.js","./_commonjsHelpers-042e6b4d.js","./ModalUpgradeRequired-a455cfd7.js","./BasicModal-000dc82b.js","./_plugin-vue_export-helper-c27b6911.js","./BasicModal-276b42ea.css","./PfButton-db6d6722.js","./PfIconContext-bd54ca9b.js","./ModalUpgradeRequired-1a015d77.css","./lodash-bf1bac5c.js","./_commonjs-dynamic-modules-302442b1.js","./iframe-4066d2cc.js","./PfIcon-bb1c3c10.js","./mapValues-a1d744f5.js","./ModalPvLimitAlertView-c58a5858.css","./SelectSwitch-b6107958.js","./tiptap-extension-paragraph.esm-72054cce.js","./SelectSwitch-74fee1e2.css","./draggable-203bb716.js","./ApiIcon-4990672b.js","./ApiIcon-f6bf5922.css","./useSearch-b8b0ad67.js","./Editor-f05e9ae1.css"],import.meta.url)),C=n;J();const{node:e}=M(C),{updateNode:k,selectedNodeId:c,draggingNode:m,allNodes:V,addNode:B,findNode:S}=Z(),A=u(()=>m.value?.id===e.value.id),I=d(()=>(e.value.children||[]).map(a=>S(a)).filter(Boolean)),{nodeResult:t}=W(d(()=>e.value.id)),{scopeData:x}=Y(),K=u(()=>!A.value&&c.value===e.value.id),E=u(()=>{const a=String(e.value.value).replace(".value",""),o=V.value.find(r=>(r.type==="variable"||r.type==="argument")&&r.value===a);return o?o.label:b.getNameFromKey(a,x.value)}),v=u(()=>b.isRenderModelValue(t.value)?t.value.__valueType__:Array.isArray(t.value)?"array":typeof t.value),w=d(()=>e.value.type==="variable"&&typeof t.value=="object"&&K.value),D=()=>{const a=Object.keys(t.value);if(a.length>0){const o=a[0],r=parseInt(o,10),_=!isNaN(r),j=B({id:Q.generateUid(),type:_?"variableIndex":"variableKey",value:_?r:o})[0],F=[...e.value.children||[],j.id];k(e.value.id,{children:F})}},R=d(()=>m.value?.id===e.value.id?!1:e.value.id===c.value||e.value.children.includes(c.value));return(a,o)=>(s(),i("div",{class:f(["NodeCardVariable",[l(e).type,{canSelectChildren:R.value}]])},[w.value?(s(),i("button",{key:0,class:"add-button",onClick:D},"+ Key")):y("",!0),p("span",{class:f(["variable-label",[l(v)]])},T(l(E)),3),(s(!0),i(N,null,U(I.value,r=>(s(),i(N,{key:r.id},[ae,p("div",re,[r?(s(),O(l(h),{key:0,node:r},null,8,["node"])):y("",!0)])],64))),128)),P(X,{node:l(e),"value-type":l(v)},null,8,["node","value-type"])],2))}});const Be=$(g,[["__scopeId","data-v-7d9b87a0"]]);g.__docgenInfo={exportName:"default",displayName:"NodeCardVariable",description:"",tags:{},props:[{name:"node",required:!0,type:{name:"BlueprintNode"}}],sourceFiles:["/Users/h.kamiyama/GitHub/studio-front/src/components/BlueprintEditor/NodeCard/NodeCardVariable.vue"]};export{Be as default};