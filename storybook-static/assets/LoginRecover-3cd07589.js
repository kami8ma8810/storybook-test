import{c as L,o as y}from"./ModalPvLimitAlertView-cb9178ae.js";import{f as k,b as d,O as c,G as _,H as u,K as t,J as s,W as w,_ as E,$,N as x,S as R,U as g,R as f,I as b,F as N}from"./vue.esm-bundler-33967e91.js";import{u as C,a as D}from"./ModalUpgradeRequired-a455cfd7.js";import{_ as S}from"./_plugin-vue_export-helper-c27b6911.js";import"./vue-i18n.cjs-bd62fc86.js";import"./_commonjsHelpers-042e6b4d.js";import"./BasicModal-000dc82b.js";import"./lodash-bf1bac5c.js";import"./_commonjs-dynamic-modules-302442b1.js";import"./iframe-4066d2cc.js";import"../sb-preview/runtime.js";import"./PfButton-db6d6722.js";import"./PfIconContext-bd54ca9b.js";import"./PfIcon-bb1c3c10.js";import"./mapValues-a1d744f5.js";const h=k({name:"LoginRecover",components:{LanguageLink:L},emits:["setEmail"],setup(e,o){const l=C(),p=D(),n=d({email:""}),a=d(!1),i=d(""),m=()=>{a.value=!0,i.value="",y.post("https://api.studiodesignapp.com/api/v2/email/password/recover",{email:n.value.email}).then(()=>{o.emit("setEmail",n.value.email);const v=l.params.lang?`/${l.params.lang}/reset/check-reset-email`:"/reset/check-reset-email";p.push(v),a.value=!1}).catch(()=>{i.value="Already signed up with Facebook or account does not exist.",a.value=!1})},r=()=>{m()};return o.emit("setEmail",""),{postData:n,isEmailLoading:a,emailError:i,onSubmit:r}}}),B={class:"_mb-24 _flex _flex-col _gap-24 tablet:_mb-40"},V={class:"_heading-md _text-center tablet:_heading-lg"},F={class:"_label-md-normal _whitespace-pre _text-center _text-const-gray-800"},U={class:"_mb-40 _flex _w-full _max-w-login _flex-col _items-center _justify-center _gap-32 tablet:_w-login"},j={class:"_flex _flex-col _items-stretch _gap-8"},z=["placeholder"],G={key:0,class:"_text-sm _text-const-red-500"};function H(e,o,l,p,n,a){const i=c("PfButton"),m=c("LanguageLink");return _(),u(N,null,[t("div",B,[t("h1",V,s(e.$t("Login: Reset your password")),1),t("p",F,s(e.$t("Login: We'll email you a link to reset your password and get you back on track in no time.")),1)]),t("div",U,[t("form",{class:"_flex _w-full _flex-col _gap-16",onSubmit:o[1]||(o[1]=w((...r)=>e.onSubmit&&e.onSubmit(...r),["prevent"]))},[t("div",j,[t("label",null,s(e.$t("Login: Email address")),1),E(t("input",{"onUpdate:modelValue":o[0]||(o[0]=r=>e.postData.email=r),class:x(["_h-44 _rounded-6 _border-1 _border-solid _border-const-gray-100 _px-16",e.emailError?["_border-const-red-500","_bg-const-red-50"]:[]]),placeholder:e.$t("Login: Enter your email address"),type:"email"},null,10,z),[[$,e.postData.email]]),e.emailError?(_(),u("p",G,s(e.$t(e.emailError)),1)):R("",!0)]),g(i,{disabled:!e.postData.email,"button-type":"submit",size:"md",loading:e.isEmailLoading},{default:f(()=>[b(s(e.$t("Login: Reset password")),1)]),_:1},8,["disabled","loading"])],32),g(m,{to:"/login",class:"label-sm-bold _flex _h-36 _flex-row _items-center _justify-center _gap-6 _text-const-black hover:_text-const-gray-800"},{default:f(()=>[b(s(e.$t("Login: Cancel")),1)]),_:1})])],64)}const te=S(h,[["render",H]]);h.__docgenInfo={displayName:"LoginRecover",exportName:"default",description:"",tags:{},events:[{name:"setEmail"}],sourceFiles:["/Users/h.kamiyama/GitHub/studio-front/src/components/Login/LoginRecover.vue"]};export{te as default};