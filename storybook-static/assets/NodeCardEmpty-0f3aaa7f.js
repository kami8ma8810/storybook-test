import{f as _,x as N,e as p,O as s,G as f,H as y,U as i,N as g}from"./vue.esm-bundler-33967e91.js";import{N as C}from"./NodeCardBackground-e1c3a5e9.js";import{V as v}from"./ValueInput-7a78c064.js";import{b as E}from"./Editor-e2ebb077.js";import{_ as B}from"./_plugin-vue_export-helper-c27b6911.js";import"./ModalPvLimitAlertView-cb9178ae.js";import"./vue-i18n.cjs-bd62fc86.js";import"./_commonjsHelpers-042e6b4d.js";import"./ModalUpgradeRequired-a455cfd7.js";import"./BasicModal-000dc82b.js";import"./PfButton-db6d6722.js";import"./PfIconContext-bd54ca9b.js";import"./lodash-bf1bac5c.js";import"./_commonjs-dynamic-modules-302442b1.js";import"./iframe-4066d2cc.js";import"../sb-preview/runtime.js";import"./PfIcon-bb1c3c10.js";import"./mapValues-a1d744f5.js";import"./SelectSwitch-b6107958.js";import"./tiptap-extension-paragraph.esm-72054cce.js";import"./draggable-203bb716.js";import"./ApiIcon-4990672b.js";import"./useSearch-b8b0ad67.js";const m=_({name:"NodeCardEmpty",components:{ValueInput:v,NodeCardBackground:C},props:{node:{type:Object,required:!0}},setup(e,u){const{node:o}=N(e),{selectedNodeId:d,draggingNode:a,replaceNode:n,findNode:t}=E(),r=p(()=>o.value.id===d.value),c=p(()=>a.value?.id===o.value.id);return{isSelected:r,isDragging:c,update:l=>{n(o.value,t(l))}}}});function k(e,u,o,d,a,n){const t=s("ValueInput"),r=s("NodeCardBackground");return f(),y("div",{ref:"el",class:g(["NodeCardEmpty",[e.node.type]])},[i(t,{node:e.node,"allow-type":"string",onUpdate:e.update},null,8,["node","onUpdate"]),i(r,{node:e.node},null,8,["node"])],2)}const Q=B(m,[["render",k],["__scopeId","data-v-01b3a1a2"]]);m.__docgenInfo={displayName:"NodeCardEmpty",exportName:"default",description:"",tags:{},props:[{name:"node",type:{name:"BlueprintNode"},required:!0}],sourceFiles:["/Users/h.kamiyama/GitHub/studio-front/src/components/BlueprintEditor/NodeCard/NodeCardEmpty.vue"]};export{Q as default};