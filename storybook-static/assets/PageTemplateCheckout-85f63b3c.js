import{f as q,e as b,O as f,Q as A,R as l,G as n,K as e,J as o,A as t,U as s,I as L,b as x,H as u,_ as j,ad as ee,W as $e,N as H,$ as Pe,V as _e,F as oe,S as E,L as ce,M as de,w as te,o as we,aa as Se,P as ne}from"./vue.esm-bundler-33967e91.js";import{u as ae,ge as ue,fM as Oe,fN as Ee,gh as Ie,gi as Be,h1 as Re,gj as De,gk as Me,G as Ue,a2 as Ae,F as Ne,t as Ve,s as re,a4 as Le,E as ze,f7 as F,f_ as G,y as J,h2 as ie}from"./ModalPvLimitAlertView-cb9178ae.js";import{u as je}from"./vue-i18n.cjs-bd62fc86.js";import{u as pe,B as Fe}from"./BasicModal-000dc82b.js";import{u as Ge,a as Je}from"./useTemplateCheckoutStore-2be28c07.js";import{_ as me}from"./_plugin-vue_export-helper-c27b6911.js";import"./ModalUpgradeRequired-a455cfd7.js";import"./PfButton-db6d6722.js";import"./PfIconContext-bd54ca9b.js";import"./_commonjsHelpers-042e6b4d.js";import"./lodash-bf1bac5c.js";import"./_commonjs-dynamic-modules-302442b1.js";import"./iframe-4066d2cc.js";import"../sb-preview/runtime.js";import"./PfIcon-bb1c3c10.js";import"./mapValues-a1d744f5.js";const He={class:"label-sm2-bold _text-black"},qe={class:"label-sm2-normal _text-black"},We={class:"label-xs2-normal _text-black"},Ye={class:"label-sm-normal _text-gray-600"},fe=q({__name:"TemplateV3Billing",setup(g){const{myBilling:P,hasMyBilling:i}=ae(),{push:p}=pe(),m=b(()=>P.value?.cards?P.value.cards[0]:null),w=b(()=>{if(!m.value)return"";const h=`0${m.value.expMonth}`.slice(-2),k=`0${m.value.expYear}`.slice(-2);return`${h}/${k}`}),d=()=>{p("ModalTemplateBilling",!0)};return(h,k)=>{const _=f("PfColumn"),y=f("PfIcon"),c=f("PfRow"),S=f("PfButton");return n(),A(c,{class:"PlanV3Billing _w-full _py-16 _pl-16",align:"center",justify:"between"},{default:l(()=>[e("p",He,o(h.$t("Payment Card")),1),t(i)&&t(m)?(n(),A(S,{key:0,variant:"outline",style:{border:"none"},onClick:d},{default:l(()=>[s(c,{gap:"16",align:"center"},{default:l(()=>[s(ue,{"card-brand":t(m).brand},null,8,["card-brand"]),s(_,{gap:"4",align:"end"},{default:l(()=>[e("p",qe,"**** "+o(t(m).last4),1),e("p",We,o(h.$t("expiration date"))+" "+o(t(w)),1)]),_:1}),s(y,{icon:"chevronRight",size:"18","icon-color":"gray-500"})]),_:1})]),_:1})):(n(),A(_,{key:1,gap:"8",class:"_pr-16",align:"end"},{default:l(()=>[e("p",Ye,o(h.$t("plan v3: not registered")),1),s(S,{variant:"primary",size:"sm",onClick:d},{default:l(()=>[L(o(h.$t("plan v3: Add payment method")),1)]),_:1})]),_:1}))]),_:1})}}});fe.__docgenInfo={exportName:"default",displayName:"TemplateV3Billing",description:"",tags:{},sourceFiles:["/Users/h.kamiyama/GitHub/studio-front/src/components/Pd/PdDashboard/PageTemplateCheckout/TemplateV3Billing.vue"]};const Ke={class:"_w-[100%]"},Qe={class:"label-sm-normal _mb-8 _text-black"},Xe=["placeholder"],ge=q({__name:"CheckoutCoupon",props:{isCouponCodeVerified:{type:Boolean},isCouponLoading:{type:Boolean},isCouponAreaOpen:{type:Boolean},couponErrorMessage:{}},emits:["applyCoupon","openCouponArea"],setup(g,{emit:P}){const i=x(""),p=x(""),m=g,w=P,d=b(()=>m.couponErrorMessage!==""&&i.value===p.value&&m.isCouponLoading===!1),h=()=>{w("openCouponArea")},k=()=>{w("applyCoupon",i.value),p.value=i.value};return(_,y)=>{const c=f("PfButton"),S=f("PfRow");return n(),u("div",{class:H(["_flex _items-center _justify-end _pt-20",{"_pr-6 _pl-6":!_.isCouponAreaOpen}])},[j(s(c,{variant:"tertiary",size:"xs",onClick:h},{default:l(()=>[L(o(_.isCouponCodeVerified?_.$t("Change Coupon"):_.$t("Add coupon")),1)]),_:1},512),[[ee,!_.isCouponAreaOpen]]),j(e("div",Ke,[e("p",Qe,o(_.$t("Apply coupon code?")),1),e("form",{onSubmit:$e(k,["prevent"])},[s(S,{gap:"16",w:"full"},{default:l(()=>[j(e("input",{"onUpdate:modelValue":y[0]||(y[0]=I=>i.value=I),class:H(["_w-280 _h-44 _flex-grow _rounded-6 _border _border-solid _pr-16 _pl-16 _text-[14px]",{"_border-red-500 _bg-red-50":t(d),"_border-gray-100 _bg-white":!t(d)}]),placeholder:_.$t("Coupon code")},null,10,Xe),[[Pe,i.value]]),s(c,{variant:"primary",loading:_.isCouponLoading,disabled:t(d),onClick:k},{default:l(()=>[L(o(_.$t("Apply")),1)]),_:1},8,["loading","disabled"])]),_:1}),j(e("p",{class:"label-sm-normal _mt-8 _text-red-500"},o(_.couponErrorMessage),513),[[ee,t(d)]])],32)],512),[[ee,_.isCouponAreaOpen]])],2)}}});ge.__docgenInfo={exportName:"default",displayName:"CheckoutCoupon",description:"",tags:{},props:[{name:"isCouponCodeVerified",required:!0,type:{name:"boolean"}},{name:"isCouponLoading",required:!0,type:{name:"boolean"}},{name:"isCouponAreaOpen",required:!0,type:{name:"boolean"}},{name:"couponErrorMessage",required:!0,type:{name:"string"}}],events:[{name:"applyCoupon",type:{names:["string"]}},{name:"openCouponArea"}],sourceFiles:["/Users/h.kamiyama/GitHub/studio-front/src/components/Pd/PdDashboard/PageTemplateCheckout/CheckoutCoupon.vue"]};const Ze=g=>(ce("data-v-09619516"),g=g(),de(),g),et={class:"_overflow-hidden _rounded-12 _bg-white"},tt=Ze(()=>e("i",{class:"material-icons _text-green-500"},"done",-1)),ot={class:"_heading-sm _text-black"},at={class:"label-sm-normal"},st={class:"_heading-sm _text-black"},lt={class:"label-md-bold _text-black"},nt={class:"label-md-bold _text-black"},rt={class:"label-xs2-normal _text-black"},it={class:"label-sm-normal _text-black"},_t={key:1,class:"_heading-sm _text-black"},ct={key:0,class:"label-md-bold _text-black"},he=q({__name:"ModalTemplateBilling",setup(g){const{myBilling:P,hasMyBilling:i}=ae(),p=b(()=>P.value?.cards?.[0]||null),m=b(()=>{const r=`0${p.value?.expMonth}`.slice(-2),D=`0${p.value?.expYear}`.slice(-2);return`${r}/${D}`}),{selectedCountry:w,countryOnAccount:d}=Oe(),h=b(()=>w.value||d.value||void 0),{createCustomerAndCard:k,updateCustomerAndCard:_}=Ee(),y=pe(),c=x(!1),S=async({cardToken:r,countryCode:D})=>{d.value?await _({cardToken:r}):await k({countryCode:D,cardToken:r}),c.value=!0,setTimeout(()=>{y.pop(),c.value=!1},2e3)},I=()=>{y.pop()};return(r,D)=>{const T=f("PfColumn"),B=f("PfRow"),N=f("PfDivider"),$=f("PfButton");return n(),u("div",et,[s(_e,{name:"fade",mode:"out-in"},{default:l(()=>[c.value?(n(),A(T,{key:"success-view",class:"_px-32 _py-96",align:"center",justify:"center",gap:"48",w:"560"},{default:l(()=>[tt,s(T,{class:"_w-full",gap:"8",align:"center"},{default:l(()=>[e("p",ot,o(r.$t("plan v3: card registered")),1),e("p",at,o(r.$t("plan v3: payment yet")),1)]),_:1})]),_:1})):(n(),A(t(Me),{key:"default-view","initial-country-code":h.value,"on-submit":S,class:"_w-[560px] _gap-24 _p-32"},{default:l(()=>[t(i)?(n(),u(oe,{key:0},[e("p",st,o(r.$t("plan v3: Change my payment method")),1),s(T,{class:"_w-full",gap:"16"},{default:l(()=>[s(T,{gap:"16"},{default:l(()=>[e("p",lt,o(r.$t("plan v3: Current payment method")),1),p.value?(n(),A(B,{key:0,gap:"16",align:"center"},{default:l(()=>[s(ue,{"card-brand":p.value.brand},null,8,["card-brand"]),e("p",nt,"***** "+o(p.value.last4),1),e("p",rt,o(r.$t("plan v3: Expiry date"))+" "+o(m.value),1)]),_:1})):E("",!0)]),_:1}),s(B,{class:"_w-full _bg-gray-50 _p-12"},{default:l(()=>[e("p",it,o(r.$t("plan v3: Change will apply to all projects billed to the above credit card.")),1)]),_:1})]),_:1}),s(N,{direction:"column"})],64)):(n(),u("p",_t,o(r.$t("plan v3: Add payment method")),1)),s(T,{class:"_w-full",gap:"16"},{default:l(()=>[t(i)?(n(),u("p",ct,o(r.$t("plan v3: New payment method")),1)):E("",!0),s(T,{class:"_w-full"},{default:l(()=>[s(T,{class:"_w-full _py-16",gap:"16"},{default:l(()=>[s(t(Ie)),s(t(Be))]),_:1})]),_:1})]),_:1}),s(B,{class:"_w-full _p-4",gap:"16",align:"start"},{default:l(()=>[s($,{variant:"outline",size:"lg",class:"_w-full",onClick:I},{default:l(()=>[L(o(r.$t("plan v3: billing cancel")),1)]),_:1}),s(t(Re),{label:t(d)?r.$t("plan v3: billing submit edit"):r.$t("plan v3: billing submit register")},null,8,["label"])]),_:1}),s(t(De))]),_:1},8,["initial-country-code"]))]),_:1})])}}});const dt=me(he,[["__scopeId","data-v-09619516"]]);he.__docgenInfo={exportName:"default",displayName:"ModalTemplateBilling",description:"",tags:{},sourceFiles:["/Users/h.kamiyama/GitHub/studio-front/src/components/Pd/PdDashboard/PageTemplateCheckout/ModalTemplateBilling.vue"]};const R=g=>(ce("data-v-7cf9bd1f"),g=g(),de(),g),ut={class:"_fixed _top-0 _left-0 _z-1 _flex _h-64 _w-full _items-center _justify-between _px-20"},pt=["disabled"],mt={key:0,class:"_grid _min-h-screen _place-content-center _place-items-center _gap-8"},ft=R(()=>e("h1",{class:"_heading-md"},"An error has occurred.",-1)),gt={key:0,class:"label-sm-normal _rounded-6 _bg-gray-50 _p-16 _text-left"},ht={key:1,class:"label-sm-normal _rounded-6 _bg-gray-50 _p-16 _text-left"},vt={key:1,class:"_grid _min-h-screen _place-content-center _place-items-center"},bt={key:2,class:"ModalTemplateCheckout _grid _min-h-screen _place-content-center"},yt={class:"_flex _w-[980px] _flex-col _gap-20"},Ct={class:"_flex _flex-row _justify-between _py-12"},xt={class:"_heading-md"},kt={class:"_flex _flex-row _gap-60"},Tt={class:"_flex _flex-1 _flex-col"},$t={class:"_flex _flex-col _gap-16"},Pt={class:"_heading-sm"},wt={key:0,class:"_flex _flex-row _gap-8 _rounded-6 _bg-blue-50 _p-12"},St={class:"label-sm-bold _text-blue-600"},Ot={key:0,class:"_flex _items-center _gap-16 _py-24 _px-16"},Et={class:"_flex _flex-1 _flex-col _gap-4"},It={class:"label-md-bold _text-left"},Bt={class:"label-sm-normal _text-left _text-gray-600"},Rt={class:"label-md-bold _text-right"},Dt=R(()=>e("div",{class:"_w-full _border-b _border-solid _border-gray-100"},null,-1)),Mt={class:"_flex _flex-col _gap-8 _px-16 _py-24"},Ut={class:"label-md-bold"},At={class:"label-sm-normal"},Nt=R(()=>e("div",{class:"_w-full _border-b _border-solid _border-gray-100"},null,-1)),Vt={class:"_flex _w-[420px] _flex-col _gap-[22px] _rounded-6 _bg-gray-50 _px-32 _pt-28 _pb-36"},Lt={class:"_flex _flex-col _gap-20"},zt={class:"_flex _flex-col"},jt={class:"_flex _items-center _justify-between _p-16"},Ft={class:"label-sm2-bold _text-gray-600"},Gt={class:"_flex _flex-col"},Jt={class:"_text-right _text-[16px] _font-bold"},Ht=R(()=>e("div",{class:"_w-full _border-b _border-solid _border-gray-100"},null,-1)),qt={class:"_flex _items-center _justify-between _p-16"},Wt={class:"label-sm2-bold _text-gray-600"},Yt={class:"_flex _flex-col"},Kt={class:"_text-right _text-[16px] _font-bold _text-pink-600"},Qt={class:"label-xs-normal _text-right _text-pink-600"},Xt=R(()=>e("div",{class:"_w-full _border-b _border-solid _border-gray-100"},null,-1)),Zt={class:"_flex _items-center _justify-between _p-16"},eo={class:"label-sm2-bold"},to={class:"_flex _flex-col"},oo={class:"_text-right _text-[16px] _font-bold"},ao={class:"label-xs-normal _text-right _text-gray-600"},so=R(()=>e("div",{class:"_w-full _border-b _border-solid _border-gray-100"},null,-1)),lo=R(()=>e("div",{class:"_w-full _border-b _border-solid _border-gray-100"},null,-1)),no={class:"_flex _w-full _flex-col _gap-8 _rounded-6 _bg-white _p-16 _text-left"},ro={class:"label-sm-bold"},io={class:"_flex _w-full _flex-col _gap-8"},_o={class:"_ml-16 _list-disc _text-[10px] _text-gray-700"},co=["href"],uo={class:"_ml-16 _list-disc _text-[10px] _text-gray-700"},po=["href"],mo={class:"_ml-16 _list-disc _text-[10px] _text-gray-700"},fo={class:"label-sm-normal _text-gray-700"},go={class:"_flex _flex-col _gap-8"},ho={key:0,class:"_flex _w-full _flex-row"},vo={class:"label-sm-normal _text-red-500"},ve=q({__name:"PageTemplateCheckout",setup(g){const P=Ue(),{t:i}=je(),p=Ae("templateId"),{account:m,currency:w,hasMyBilling:d,language:h}=ae(),{setLocale:k}=Ne(),{load:_,error:y,result:c,isLoading:S}=Ge(),I=Je(),r=Ve(),{initialized:D}=re(r),{showSnackBar:T}=Le(),B=b(()=>m.value.language==="JP"),{checkoutProgress:N,parchasingErrorMessage:$}=re(I),W=i("STUDIO_STORE_Payment:Register your card"),Y=x(!1),V=x(!1),K=x(!1),M=x(""),Q=x(0),se=x(""),X=x(void 0),be=async a=>{K.value=!0;const C=await ie.getTemplateCouponVerifyCoupon(a,p.value).then(v=>(V.value=!0,Y.value=!1,M.value="",X.value=a,v)).catch(v=>{switch(v.response.data.message){case"This coupon has exceeded the usage limit for one user.":M.value=i("STUDIO_STORE_Coupon:This coupon code has already been used.");break;case"This coupon is not available for this template.":M.value=i("STUDIO_STORE_Coupon:This coupon code is valid only with the issuer's own template.");break;case"Template coupon not found.":M.value=i("Coupon code is incorrect.");break;case"ParameterNotCorrected":M.value=i("Coupon code is incorrect.");break}return v});if(C.status===200&&C.data.result&&X.value){const v=await ie.getTemplateCoupon(a);Q.value=v.data.data.percentOff,se.value=i(`STUDIO_STORE_Coupon_Name:${v.data.data.name}`)}K.value=!1},ye=()=>{Y.value=!0},Ce=()=>{if(d.value===!1){$.value=W;return}I.checkout(c.value,i,X.value)},O=b(()=>{if(!(!c.value.tier||!D.value))return r.getPriceByTier(c.value.tier)}),U=b(()=>{const a=O.value;if(!a)return;const C=a.priceJpy*(Q.value/100),v=a.priceUsd*(Q.value/100);return B.value?C:v}),le=b(()=>{if(!(!O.value||!U.value))return B.value?`¥${F(G(O.value?.priceJpy-U.value,J.Jpy))}`:`$${F(G(O.value?.priceUsd-U.value,J.Usd))}`}),xe=b(()=>(c.value.checkoutHistory?.length??0)>0),ke=b(()=>$.value!==W?!1:d.value===!1);te(d,(a,C)=>{a===!0&&C===!1&&$.value===W&&($.value="")}),te($,a=>{T("cautionCircle",a)}),te(p,()=>{I.resetCheckoutProgress()});const z=x("");return(async()=>{try{await Promise.all([P.dispatch("v2/getMe"),_({templateId:p.value}),r.init(w.value)]),k(h.value)}catch(a){z.value=ze(a)}})(),we(()=>{const a=C=>{if(N.value==="purchasing")return C.preventDefault(),""};window.addEventListener("beforeunload",a),Se(()=>{window.removeEventListener("beforeunload",a)})}),(a,C)=>{const v=f("PfIcon"),Z=f("i18n-t"),Te=f("PfButton");return n(),u(oe,null,[e("div",ut,[e("button",{disabled:t(N)!=="none",class:"_flex _h-32 _w-32 _items-center _justify-center disabled:_pointer-events-none disabled:_opacity-20",onClick:C[0]||(C[0]=yo=>a.$router.back())},[s(v,{icon:"arrowLeft","icon-color":"black",size:"lg"})],8,pt)]),s(_e,{name:"fade",mode:"out-in"},{default:l(()=>[z.value||t(y)?(n(),u("div",mt,[ft,z.value?(n(),u("p",gt,o(z.value),1)):E("",!0),t(y)?(n(),u("p",ht,o(t(y)),1)):E("",!0)])):t(S)?(n(),u("div",vt)):(n(),u("div",bt,[e("div",yt,[e("div",Ct,[e("h1",xt,o(a.$t("STUDIO_STORE_Payment:buy template")),1),e("div",{class:"_h-36 _w-36 _rounded-full _bg-gray-200 _bg-cover _bg-center",style:ne({backgroundImage:`url('${t(m).avatar}')`})},null,4)]),e("div",kt,[e("div",Tt,[e("div",$t,[e("h2",Pt,o(a.$t("STUDIO_STORE_Payment:detail")),1),t(xe)?(n(),u("div",wt,[s(v,{icon:"cautionCircle",size:"16","icon-color":"blue-600"}),e("p",St,o(a.$t("STUDIO_STORE_Payment:purchased")),1)])):E("",!0)]),t(c)?(n(),u("div",Ot,[e("div",{class:"_h-[82px] _w-[58px] _rounded-2 _bg-gray-100 _bg-cover",style:ne({backgroundImage:`url('${t(c).coverUrl}')`})},null,4),e("div",Et,[e("p",It,o(t(c).templateTitle),1),e("p",Bt,o(t(c).templateDesigner?.displayName),1),e("p",Rt,o(t(O)?.displayPrice),1)])])):E("",!0),Dt,e("div",Mt,[e("p",Ut,o(a.$t("STUDIO_STORE:single entity")),1),e("p",At,o(a.$t("STUDIO_STORE:entity description")),1)]),Nt]),e("div",Vt,[e("div",Lt,[e("div",zt,[V.value&&t(U)?(n(),u(oe,{key:0},[e("div",jt,[e("span",Ft,o(a.$t("STUDIO_STORE_Payment:template price")),1),e("div",Gt,[e("p",Jt,o(t(O)?.displayPrice),1)])]),Ht,e("div",qt,[e("span",Wt,o(a.$t("Discount")),1),e("div",Yt,[e("p",Kt,o(t(B)?`¥-${t(F)(t(G)(t(U),t(J).Jpy))}`:`$-${t(F)(t(G)(t(U),t(J).Usd))}`),1),e("p",Qt,o(se.value),1)])]),Xt],64)):E("",!0),e("div",Zt,[e("span",eo,o(a.$t("STUDIO_STORE_Payment:total")),1),e("div",to,[e("p",oo,o(V.value?t(le):t(O)?.displayPrice),1),e("p",ao,o(a.$t("Tax incl.")),1)])]),so,e("div",{class:H([t(ke)&&"_rounded-6 _border-1 _border-solid _border-red-100 _bg-red-50"])},[s(fe)],2),lo,s(ge,{"is-coupon-code-verified":V.value,"is-coupon-loading":K.value,"is-coupon-area-open":Y.value,"coupon-error-message":M.value,onApplyCoupon:be,onOpenCouponArea:ye},null,8,["is-coupon-code-verified","is-coupon-loading","is-coupon-area-open","coupon-error-message"])]),e("div",no,[e("p",ro,o(a.$t("STUDIO_STORE_Payment:note")),1),e("ul",io,[e("li",_o,[s(Z,{keypath:"STUDIO_STORE_Payment:To proceed with the purchase, you must agree to {0}.",tag:"p",class:"label-sm-normal _text-gray-700"},{default:l(()=>[e("a",{href:a.$t("GDPR term link"),class:"_inline _font-bold _text-blue-600 hover:_text-blue-500",target:"_blank",rel:"noopener"},o(a.$t("STORE_FOOTER:terms")),9,co)]),_:1})]),e("li",uo,[s(Z,{keypath:"STUDIO_STORE_Payment:Before making a purchase, please make sure to review {0}.",tag:"p",class:"label-sm-normal _text-gray-700"},{default:l(()=>[e("a",{href:a.$t("STORE_FOOTER:template purchase guide link"),class:"_inline _font-bold _text-blue-600 hover:_text-blue-500",target:"_blank",rel:"noopener"},o(a.$t("STUDIO_STORE_Payment:the Template Purchase Guide")),9,po)]),_:1})]),e("li",mo,[e("p",fo,o(a.$t("STUDIO_STORE_Payment:required")),1)])])])]),e("div",go,[s(Te,{variant:"primary",class:H(["_w-full",[!t(d)&&"_border-gray-300 _bg-gray-300 hover:_border-gray-300 hover:_bg-gray-300"]]),size:"lg",loading:t(N)==="purchasing",onClick:Ce},{default:l(()=>[L(o(a.$t("STUDIO_STORE_Payment:Pay {0}",[V.value?t(le):t(O)?.displayPrice])),1)]),_:1},8,["loading","class"]),t($)?(n(),u("div",ho,[e("p",vo,o(t($)),1)])):E("",!0)])])])]),s(Fe,{name:"ModalTemplateBilling"},{default:l(()=>[s(dt)]),_:1})]))]),_:1})],64)}}});const Ao=me(ve,[["__scopeId","data-v-7cf9bd1f"]]);ve.__docgenInfo={exportName:"default",displayName:"PageTemplateCheckout",description:"",tags:{},sourceFiles:["/Users/h.kamiyama/GitHub/studio-front/src/components/Pd/PdDashboard/PageTemplateCheckout/PageTemplateCheckout.vue"]};export{Ao as default};