import{f as p,b as P,e as c,w as n,G as u,H as v,o as E,Q as h,R as k,V as y,K as V,U as d}from"./vue.esm-bundler-33967e91.js";import{G as b,bg as B,f$ as x,a3 as g,g0 as $,fq as S,ex as I}from"./ModalPvLimitAlertView-cb9178ae.js";import{_}from"./_plugin-vue_export-helper-c27b6911.js";import{_ as N}from"./Editor-e2ebb077.js";import"./vue-i18n.cjs-bd62fc86.js";import"./_commonjsHelpers-042e6b4d.js";import"./ModalUpgradeRequired-a455cfd7.js";import"./BasicModal-000dc82b.js";import"./PfButton-db6d6722.js";import"./PfIconContext-bd54ca9b.js";import"./lodash-bf1bac5c.js";import"./_commonjs-dynamic-modules-302442b1.js";import"./iframe-4066d2cc.js";import"../sb-preview/runtime.js";import"./PfIcon-bb1c3c10.js";import"./mapValues-a1d744f5.js";import"./SelectSwitch-b6107958.js";import"./tiptap-extension-paragraph.esm-72054cce.js";import"./draggable-203bb716.js";import"./ApiIcon-4990672b.js";import"./useSearch-b8b0ad67.js";const w=50,m=p({name:"PdEditorBackup",setup(){const i=b(),t=P(0),e=c(()=>i.state.studioAction.histories),s=c(()=>e.value[0]),{addSnapshot:r}=B();n(s,o=>{if(!o)return;/select/i.test(o.redo[0][0])||t.value++},{deep:!0}),n(t,o=>{o%w===0&&a()});const a=()=>{r(x.Backup)}}});const H={class:"PdEditorBackup"};function j(i,t,e,s,r,a){return u(),v("div",H)}const F=_(m,[["render",j],["__scopeId","data-v-4bf4e442"]]);m.__docgenInfo={displayName:"PdEditorBackup",exportName:"default",description:"",tags:{},sourceFiles:["/Users/h.kamiyama/GitHub/studio-front/src/components/Pd/PdEditorV2/PdEditorBackup.vue"]};const G={class:"PdEditorV2"},l=p({__name:"PdEditorV2",setup(i){const{accountProject:t}=g(),{showPvAlert:e}=$(),{projectId:s}=S(),{pvOptionFeatureEnabled:r}=I(),a=c(()=>t.value.isWriterRole);return E(async()=>{s&&r.value&&(a.value||await e())}),(o,f)=>(u(),h(y,null,{default:k(()=>[V("div",G,[d(N),d(F)])]),_:1}))}});const st=_(l,[["__scopeId","data-v-494f6873"]]);l.__docgenInfo={exportName:"default",displayName:"PdEditorV2",description:"",tags:{},sourceFiles:["/Users/h.kamiyama/GitHub/studio-front/src/components/Pd/PdEditorV2/PdEditorV2.vue"]};export{st as default};
