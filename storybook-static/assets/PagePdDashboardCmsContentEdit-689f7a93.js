import{f as O,b as d,e as g,j as V,w as m,O as J,A as w,Q as P,R as L,S as I,G as S,L as T,M as X,K as z}from"./vue.esm-bundler-33967e91.js";import{u as W}from"./vue-i18n.cjs-bd62fc86.js";import{a as Y}from"./ModalUpgradeRequired-a455cfd7.js";import{G as Z,a2 as y,R as $,aq as ee,dS as te,dQ as ae,eJ as se,fG as oe,bp as ne,X as D,d4 as re,db as F,fH as ce}from"./ModalPvLimitAlertView-cb9178ae.js";import{P as de}from"./PostEdit-a66160c7.js";import{_ as ue}from"./_plugin-vue_export-helper-c27b6911.js";import"./_commonjsHelpers-042e6b4d.js";import"./BasicModal-000dc82b.js";import"./PfButton-db6d6722.js";import"./PfIconContext-bd54ca9b.js";import"./lodash-bf1bac5c.js";import"./_commonjs-dynamic-modules-302442b1.js";import"./iframe-4066d2cc.js";import"../sb-preview/runtime.js";import"./PfIcon-bb1c3c10.js";import"./mapValues-a1d744f5.js";import"./draggable-203bb716.js";import"./SelectSwitch-b6107958.js";import"./tiptap-extension-paragraph.esm-72054cce.js";const le=r=>(T("data-v-a1b8277b"),r=r(),X(),r),ie=le(()=>z("div",{id:"teleport-post-editor-overlay"},null,-1)),R=O({__name:"PagePdDashboardCmsContentEdit",setup(r){const p=Z(),v=Y(),a=y("schemaId"),u=y("contentId"),{t:C}=W(),{cmsProjectId:h}=$(),{cmsSchema:s}=ee({schemaId:a}),{deleteContent:x,duplicateContent:j}=te(),{addContent:A}=ae(),{segmentProjectCmsItemEdited:E}=se(),{updateCmsContentFromDashboard:G}=oe(),{showConfirmDialog:U}=ne(),o=d(!1),n=d(u.value),c=d([]),l=g(()=>n.value==="new"),i=g(()=>{const e=p.getters["CmsStore/contentFindById"](n.value);return e||(n.value==="new"?{id:"new",slug:D.generateUriKey(),_meta:null}:{id:"new",slug:D.generateUriKey(),_meta:null})}),k=async e=>{o.value=!0,n.value=await A({schemaId:a.value,content:e}),o.value=!1},B=async()=>{const e=await j(i.value);await v.push(re.buildContentRoute(s.value,e))},f=async e=>{if(l.value||!s.value)return;o.value=!0;const t=i.value;await G(s.value,t,e),o.value=!1},N=async()=>{await U({text:C("CMS:deleteItemConfirm"),label:C("delete"),variant:"destructive"})&&(await x(a.value,u.value),_())},K=e=>{if(o.value){c.value.push(e);return}E(),l.value?k(e):f(e)},_=()=>{v.push({name:"PagePdDashboardCms",params:{schemaId:a.value}})},q=async(e,t)=>{await F.addField({cmsProjectId:h.value,schemaId:a.value,field:e,cmsSchemaFields:t})},M=async e=>{await ce.update({schemaId:a.value,partial:{...s.value,fields:e}})},Q=async e=>{await F.deleteField({cmsProjectId:h.value,schemaId:a.value,fieldKey:e})};V(()=>{p.dispatch("wootric/run",{surveyTrigger:"Dashboard CMS Publish"})}),m(o,e=>{!e&&c.value.length>0&&(c.value.map(t=>f(t)),c.value=[])}),m(u,e=>{n.value=e});const b=d(!1);return m(s,(e,t)=>{!t&&e&&requestAnimationFrame(()=>{b.value=!0})},{immediate:!0}),(e,t)=>{const H=J("PfRow");return w(s)?(S(),P(H,{key:0,class:"p-page-pd-dashboard-cms-content-edit _fixed _left-0",w:"full"},{default:L(()=>[ie,b.value?(S(),P(de,{key:0,"is-new-content":l.value,"newable-content":i.value,progress:o.value,schema:w(s),onClose:_,onSubmit:K,onAddField:q,onDeleteContent:N,onDeleteField:Q,onDuplicateContent:B,onUpdateFields:M},null,8,["is-new-content","newable-content","progress","schema"])):I("",!0)]),_:1})):I("",!0)}}});const Ae=ue(R,[["__scopeId","data-v-a1b8277b"]]);R.__docgenInfo={exportName:"default",displayName:"PagePdDashboardCmsContentEdit",description:"",tags:{},sourceFiles:["/Users/h.kamiyama/GitHub/studio-front/src/components/Pd/PdDashboard/PageCms/PagePdDashboardCmsContentEdit.vue"]};export{Ae as default};
