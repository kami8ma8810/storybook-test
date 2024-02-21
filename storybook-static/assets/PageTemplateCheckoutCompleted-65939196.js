import{f as C,b as T,a7 as D,H as o,K as t,P as R,W as z,_ as N,$ as q,A as e,q as V,J as n,S as u,G as s,L as j,M as I,e as k,o as A,aa as L,U as x,R as P,V as w,F as O,I as B,Q as F}from"./vue.esm-bundler-33967e91.js";import{G,aY as H,v as Q,f as Y,u as K,t as J,s as W}from"./ModalPvLimitAlertView-cb9178ae.js";import{a as S,c as X}from"./ModalUpgradeRequired-a455cfd7.js";import{_ as $}from"./_plugin-vue_export-helper-c27b6911.js";import{a as Z}from"./useTemplateCheckoutStore-2be28c07.js";import"./PfButton-db6d6722.js";import"./vue-i18n.cjs-bd62fc86.js";import"./_commonjsHelpers-042e6b4d.js";import"./BasicModal-000dc82b.js";import"./lodash-bf1bac5c.js";import"./_commonjs-dynamic-modules-302442b1.js";import"./iframe-4066d2cc.js";import"../sb-preview/runtime.js";import"./PfIcon-bb1c3c10.js";import"./PfIconContext-bd54ca9b.js";import"./mapValues-a1d744f5.js";const ee=""+new URL("doccii_template_purchase_thanks-ff5e1a53.svg",import.meta.url).href,te=a=>(j("data-v-85bd63ff"),a=a(),I(),a),se={class:"_fixed _inset-0 _flex _h-screen _flex-col _items-center _overflow-scroll"},oe=te(()=>t("div",{class:"_fixed _inset-0 _z-0 _bg-white _opacity-95"},null,-1)),ae={class:"_relative _z-1 _my-64 _flex _h-full _w-full _flex-col _items-center _justify-center _gap-20"},re=["placeholder","disabled"],le=["disabled"],ne={key:0,class:"spinner _inline-block _h-16 _w-16 _flex-none"},ie={key:1,class:"label-lg-bold _text-white"},U=C({__name:"PageTemplateCheckoutStartProjectModal",props:{templateCoverUrl:{},templateId:{},projectId:{}},emits:["close"],setup(a){const m=a,g=S(),y=G(),{editProjectTitle:b,project:i}=H(),c=T(i.value.name),r=T(!1),p=async()=>{r.value=!0,await y.dispatch("v2/getProjects",{cache:!1}),await b({projectId:m.projectId,body:{name:c.value}}),g.push({name:"PdEditorV2",params:{projectId:m.projectId},query:{[Q]:"true"}})};return(_,d)=>{const f=D("focus");return s(),o("div",se,[oe,t("main",ae,[t("div",{class:"cover _relative _h-[450px] _w-[300px]",style:R({backgroundImage:`url( ${_.templateCoverUrl} )`})},null,4),t("form",{class:"_flex _h-[120px] _w-[240px] _flex-col _items-center _justify-between",onSubmit:z(p,["prevent"])},[N(t("input",{"onUpdate:modelValue":d[0]||(d[0]=v=>V(c)?c.value=v:null),class:"title _w-full",placeholder:_.$t("Enter Project Name"),disabled:e(r)},null,8,re),[[q,e(c)],[f]]),t("button",{type:"submit",disabled:!e(c),class:"_flex _h-40 _w-[120px] _flex-none _items-center _rounded-full _bg-black hover:_bg-black hover:_opacity-80 disabled:_pointer-events-none disabled:_opacity-20"},[e(r)?(s(),o("span",ne)):(s(),o("span",ie,n(_.$t("Create")),1))],8,le)],32)]),e(r)?u("",!0):(s(),o("button",{key:0,class:"close-button",onClick:d[1]||(d[1]=v=>_.$emit("close"))}))])}}});const ce=$(U,[["__scopeId","data-v-85bd63ff"]]);U.__docgenInfo={exportName:"default",displayName:"PageTemplateCheckoutStartProjectModal",description:"",tags:{},props:[{name:"templateCoverUrl",required:!0,type:{name:"string"}},{name:"templateId",required:!0,type:{name:"string"}},{name:"projectId",required:!0,type:{name:"string"}}],events:[{name:"close"}],sourceFiles:["/Users/h.kamiyama/GitHub/studio-front/src/components/Pd/PdDashboard/PageTemplateCheckout/PageTemplateCheckoutStartProjectModal.vue"]};const E=a=>(j("data-v-b2dbc210"),a=a(),I(),a),_e={class:"_flex _h-screen _w-full _flex-col _items-center _justify-center _overflow-scroll"},de={key:0,class:"_my-96 _flex _w-[420px] _flex-col _items-center _gap-32"},pe=E(()=>t("img",{src:ee},null,-1)),ue=E(()=>t("p",{class:"_font-positive _text-[37px]"},"Thank you!",-1)),me={class:"_flex _flex-col _items-center _gap-16"},fe={class:"_heading-sm"},ve={class:"label-md-normal _text-gray-800"},he={class:"_flex _w-full _gap-16 _rounded-8 _border _border-solid _border-gray-100 _p-20"},ge=["src"],ye={class:"_flex _flex-1 _flex-col _justify-center _gap-4"},be={class:"_heading-sm"},ke={class:"label-md-normal _text-gray-600"},xe={key:0,class:"spinner"},Pe={key:0,class:"wait-msg"},Te={key:1,class:"wait-msg"},we={key:2,class:"_flex _w-full _flex-row"},Ce={class:"label-sm-normal _text-red-500"},M=C({__name:"PageTemplateCheckoutCompleted",setup(a){const m=Y("modal"),{currency:g}=K(),y=S(),b=J(),{template:i,projectId:c,checkoutProgress:r,initializingErrorMessage:p}=W(Z()),_=T(!1),d=k(()=>i.value?.templateId??""),f=k(()=>i.value?.coverUrl??""),v=k(()=>r.value==="none"&&p.value==="");return A(()=>{if(!i.value){y.replace({name:"ProjectsActive"});return}_.value=!0,b.init(g.value);const l=h=>{if(r.value!=="none")return h.preventDefault(),""};window.addEventListener("beforeunload",l),L(()=>{window.removeEventListener("beforeunload",l)})}),(l,h)=>(s(),o("div",_e,[x(w,{"enter-active-class":"_transition _duration-500","enter-from-class":"_opacity-0 _translate-y-10"},{default:P(()=>[e(_)?(s(),o("div",de,[pe,ue,t("div",me,[t("p",fe,n(l.$t("STUDIO_STORE_Thanks:thanks")),1),t("p",ve,n(l.$t("STUDIO_STORE_Thanks:message")),1)]),t("div",he,[t("img",{src:e(f),class:"_h-[81px] _w-[58px] _rounded-2 _border _border-solid _border-gray-100 _object-cover"},null,8,ge),t("div",ye,[t("p",be,n(e(i)?.templateTitle),1),t("p",ke,n(e(i)?.templateDesigner?.displayName),1)])]),x(e(X),{disabled:!e(v),to:{query:{modal:"create"}},size:"lg",variant:"primary",class:"_w-full _flex-none"},{default:P(()=>[e(r)!=="none"?(s(),o("div",xe)):(s(),o(O,{key:1},[B(n(l.$t("STUDIO_STORE_Thanks:try")),1)],64))]),_:1},8,["disabled"]),e(r)==="initializing-cms"?(s(),o("div",Pe,n(l.$t("Initializing CMS")),1)):e(r)==="initializing-project"?(s(),o("div",Te,n(l.$t("Initializing Project")),1)):u("",!0),e(p)?(s(),o("div",we,[t("p",Ce,n(e(p)),1)])):u("",!0)])):u("",!0)]),_:1}),x(w,{"enter-active-class":"_transition","enter-from-class":"_opacity-0 _translate-y-10","leave-active-class":"_transition","leave-to-class":"_opacity-0 _translate-y-10"},{default:P(()=>[e(m)==="create"?(s(),F(ce,{key:0,"template-cover-url":e(f),"template-id":e(d),"project-id":e(c),onClose:h[0]||(h[0]=je=>l.$router.push({query:void 0}))},null,8,["template-cover-url","template-id","project-id"])):u("",!0)]),_:1})]))}});const Fe=$(M,[["__scopeId","data-v-b2dbc210"]]);M.__docgenInfo={exportName:"default",displayName:"PageTemplateCheckoutCompleted",description:"",tags:{},sourceFiles:["/Users/h.kamiyama/GitHub/studio-front/src/components/Pd/PdDashboard/PageTemplateCheckout/PageTemplateCheckoutCompleted.vue"]};export{Fe as default};
