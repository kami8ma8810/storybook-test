import{f as D,h as j,e as o,O as P,H as c,K as y,U as H,A as n,P as h,S as v,J as l,R as b,F as A,N as F,I as q,G as a,Z as le,Q as ue,L as pe,M as ve}from"./vue.esm-bundler-33967e91.js";import{P as ye,a as me,d as Ie}from"./PdSectionTitle-5e0aef1e.js";import{fT as E,fU as e,aY as ge,fM as he,B as Pe,fV as be,fW as He,fX as fe,fY as B,fZ as _e,f7 as W,f_ as V}from"./ModalPvLimitAlertView-cb9178ae.js";import{u as Se}from"./vue-i18n.cjs-bd62fc86.js";import{_ as x}from"./_plugin-vue_export-helper-c27b6911.js";import"./ModalUpgradeRequired-a455cfd7.js";import"./BasicModal-000dc82b.js";import"./PfButton-db6d6722.js";import"./PfIconContext-bd54ca9b.js";import"./_commonjsHelpers-042e6b4d.js";import"./lodash-bf1bac5c.js";import"./_commonjs-dynamic-modules-302442b1.js";import"./iframe-4066d2cc.js";import"../sb-preview/runtime.js";import"./PfIcon-bb1c3c10.js";import"./mapValues-a1d744f5.js";function $e(r,i,m){const s={},d=m&&(E[m.type]||"var(--text-color-2)");switch(r){case e.OldInvoice:case e.SubscriptionStarted:case e.SubscriptionPaid:case e.SubscriptionPlanChanged:case e.PageviewsAddOnPaid:s.materialIcon="check";break;case e.SubscriptionFailed:case e.PageviewsAddOnFailed:s.materialIcon="priority_high";break}switch(r){case e.SubscriptionPlanDowngraded:case e.SubscriptionPlanChangedFromPublish:case e.SubscriptionCancelled:case e.SubscriptionReactivate:case e.BillingOwnerChanged:case e.PageviewsAddOnStarted:case e.PageviewsAddOnEnded:s.style={height:"8px",width:"8px"};break;case e.SubscriptionWillEnd:case e.SubscriptionEnded:s.style={borderRadius:"0",height:"2px",width:"20px"};break}switch(r){case e.SubscriptionWillPay:s.style={...s.style,backgroundColor:"var(--base-color-1)",border:`2px solid ${i}`};break;case e.SubscriptionPlanChanged:s.style={...s.style,background:`linear-gradient(0deg, ${d} 49%, ${i} 50%)`};break;case e.SubscriptionCancelled:case e.BillingOwnerChanged:s.style={...s.style,background:d};break;case e.SubscriptionWillEnd:s.style={...s.style,backgroundColor:i};break;case e.SubscriptionEnded:s.style={...s.style,backgroundColor:d};break}return s}const L=D({props:{invoiceHistoryType:{type:String,required:!0},prevInvoiceHistoryItem:{type:Object,required:!1},color:{type:String,required:!0,default:"var(--text-color-2)"}},render(){const r=$e(this.invoiceHistoryType,this.color,this.prevInvoiceHistoryItem);return r?j("div",{class:`InvoicesItemIcon ${this.invoiceHistoryType}`,style:{display:"flex",alignItems:"center",justifyContent:"center",width:"20px",height:"20px",borderRadius:"50%",backgroundColor:this.color,...r.style}},[r.materialIcon?j("i",{class:"material-icons",style:{color:"var(--base-color-1)",fontSize:"14px",maxWidth:"100%"}},r.materialIcon):""]):null}});L.__docgenInfo={exportName:"default",displayName:"InvoicesItemIcon",description:"",tags:{},props:[{name:"invoiceHistoryType",type:{name:"InvoiceHistoryTypeEnum"},required:!0},{name:"prevInvoiceHistoryItem",type:{name:"InvoiceHistoryItem | undefined"},required:!1},{name:"color",type:{name:"string"},required:!0,defaultValue:{func:!1,value:"'var(--text-color-2)'"}}],sourceFiles:["/Users/h.kamiyama/GitHub/studio-front/src/components/Pd/PdDashboard/PageInvoice/InvoicesItemIcon.vue"]};const Ce=["data-test"],we={class:"item-first"},ke={class:"icon-wrap"},Oe={key:0,class:"item-second"},Fe=["title"],Ae={class:"receipt-container"},Ee={key:1,class:"receipt-empty"},M=D({__name:"InvoicesItem",props:{invoiceHistoryItem:{},prevInvoiceHistoryItem:{}},setup(r){const i=r,{project:m,projectUsers:s}=ge(),{t:d}=Se(),{plans:$}=he(),C=o(()=>be(i.invoiceHistoryItem.displayDatetime)),w=o(()=>{const t=m.value.billing_owner_user_id;return s.value.find(O=>O.id===t)?.avatar??""}),k=o(()=>d(He[i.invoiceHistoryItem.type])),I=o(()=>{if(!i.prevInvoiceHistoryItem)return;const t=i.prevInvoiceHistoryItem?.plan?.id;return $.value.find(p=>p.id===t)}),u=o(()=>{if(!i.invoiceHistoryItem)return;const t=i.invoiceHistoryItem.plan?.id;return $.value.find(p=>p.id===t)}),f=o(()=>m.value.notification_codes||[]),_=o(()=>f.value.some(t=>t===fe.StudioPaymentError)),G=o(()=>["2bVNiHc2","DMuO2neI","Y090N5nP","FIFWTGVK"].some(t=>t===i.invoiceHistoryItem.coupon?.id)),Y=o(()=>u.value?i.invoiceHistoryItem.type===e.OldInvoice?`（${u.value.name}）`:i.invoiceHistoryItem.type===e.SubscriptionStarted||i.invoiceHistoryItem.type===e.SubscriptionFailed?`（${u.value.name}/${d(u.value.interval)}）`:i.invoiceHistoryItem.type===e.SubscriptionPlanChangedFromPublish?`（Publish → ${u.value.name}/${d(u.value.interval)}）`:I.value?i.invoiceHistoryItem.type===e.SubscriptionPlanChanged||i.invoiceHistoryItem.type===e.SubscriptionPlanDowngraded?`（${I.value.name}/${d(I.value.interval)} → ${u.value.name}/${d(u.value.interval)}）`:i.invoiceHistoryItem.type===e.SubscriptionCancelled?`（${I.value.name}/${d(I.value.interval)} → FREE）`:"":"":""),z=o(()=>i.invoiceHistoryItem.type===e.PageviewsAddOnPaid||i.invoiceHistoryItem.type===e.PageviewsAddOnFailed?`（${d("PvLimit: Pv Option")} ${i.invoiceHistoryItem.addOn?.usage.toLocaleString()} ${d("PlanV3: PvOption Invoice History Over Pv")}）`:""),T=o(()=>{const t=E[i.invoiceHistoryItem.type];return t||"var(--text-color-2)"}),Z=o(()=>i.invoiceHistoryItem.plan?.currency?B[i.invoiceHistoryItem.plan.currency]:i.invoiceHistoryItem.addOn?.currency?B[i.invoiceHistoryItem.addOn.currency]:""),K=o(()=>!!i.invoiceHistoryItem.coupon),J=o(()=>!!i.invoiceHistoryItem.proration),U=o(()=>i.invoiceHistoryItem.plan?.amount===0),Q=o(()=>N.value!=="0"),X=o(()=>!!i.invoiceHistoryItem.addOn&&i.invoiceHistoryItem.addOn.amount>0),N=o(()=>{if(!i.invoiceHistoryItem.plan?.amount)return"";const t=_e(i.invoiceHistoryItem.plan.amount,i.invoiceHistoryItem.coupon,i.invoiceHistoryItem.proration);return W(V(t,i.invoiceHistoryItem.plan.currency))}),ee=o(()=>{if(!i.invoiceHistoryItem.addOn?.amount)return"";const t=i.invoiceHistoryItem.addOn.currency;return W(V(i.invoiceHistoryItem.addOn.amount,t))}),g=o(()=>[e.SubscriptionWillPay,e.SubscriptionWillEnd].some(t=>t===i.invoiceHistoryItem.type)),ie=o(()=>i.invoiceHistoryItem.type===e.SubscriptionEnded),te=o(()=>![e.SubscriptionReactivate,e.SubscriptionCancelled,e.SubscriptionWillEnd,e.SubscriptionEnded,e.BillingOwnerChanged,e.PageviewsAddOnStarted,e.PageviewsAddOnEnded].some(t=>t===i.invoiceHistoryItem.type)),ne=o(()=>![e.OldInvoice,e.SubscriptionReactivate,e.SubscriptionFailed,e.SubscriptionCancelled,e.SubscriptionWillEnd,e.SubscriptionEnded,e.BillingOwnerChanged,e.SubscriptionWillPay,e.PageviewsAddOnStarted,e.PageviewsAddOnFailed,e.PageviewsAddOnEnded].some(t=>t===i.invoiceHistoryItem.type)),oe=o(()=>[e.SubscriptionStarted,e.SubscriptionPaid,e.SubscriptionWillPay,e.SubscriptionFailed,e.SubscriptionPlanChanged,e.SubscriptionPlanChangedFromPublish,e.BillingOwnerChanged,e.PageviewsAddOnPaid,e.PageviewsAddOnFailed].some(t=>t===i.invoiceHistoryItem.type)),re=o(()=>[e.SubscriptionFailed,e.PageviewsAddOnFailed].includes(i.invoiceHistoryItem.type)),S=o(()=>g.value?{color:"var(--text-color-4)!important"}:{}),se=o(()=>i.invoiceHistoryItem.billingUser&&i.invoiceHistoryItem.billingUser.name||""),ae=o(()=>{if(i.invoiceHistoryItem.type===e.SubscriptionWillPay)return{opacity:g.value?.4:null,backgroundImage:`url('${w.value}')`};if(i.invoiceHistoryItem&&i.invoiceHistoryItem.billingUser)return{opacity:g.value?.4:null,backgroundImage:`url('${i.invoiceHistoryItem.billingUser.avatar}')`}}),ce=o(()=>re.value?{color:E[i.invoiceHistoryItem.type],textDecoration:"line-through"}:{}),de=async()=>{if(i.invoiceHistoryItem.invoiceId)await Pe().get(`https://api.studiodesignapp.com/api/v2/projects/${m.value.id}/invoices/${i.invoiceHistoryItem.invoiceId}/receipt_url`).then(t=>{const p=t.data.data.receipt_url;window.open(p,"_blank")});else if(i.invoiceHistoryItem.invoiceId===null&&i.invoiceHistoryItem.receiptUrl===null)window.alert(d("Invoice Error"));else{const t=i.invoiceHistoryItem.receiptUrl;window.open(t,"_blank")}};return(t,p)=>{const O=P("CanUse");return a(),c("div",{class:F(["PdPlanInvoicesItem",t.invoiceHistoryItem.type]),"data-test":t.invoiceHistoryItem.type},[y("div",we,[y("div",ke,[H(L,{"invoice-history-type":t.invoiceHistoryItem.type,"prev-invoice-history-item":t.prevInvoiceHistoryItem,color:n(T)},null,8,["invoice-history-type","prev-invoice-history-item","color"]),n(g)||n(ie)?v("",!0):(a(),c("div",{key:0,class:"connect",style:h({background:n(T)})},null,4))]),y("p",{class:"date",style:h(n(S))},l(n(C)),5),y("p",{class:"detail",style:h(n(S))},l(n(k))+l(n(Y))+l(n(z)),5),H(O,{permission:t.$_enum.PermissionType.ProductBillingOwner},{yes:b(()=>[n(_)&&(t.invoiceHistoryItem.type===t.$_enum.InvoiceHistoryType.SubscriptionFailed||t.invoiceHistoryItem.type===t.$_enum.InvoiceHistoryType.PageviewsAddOnFailed)?(a(),c("a",{key:0,class:"action-btn",onClick:p[0]||(p[0]=xe=>t.$store.dispatch("v2/showAccountModal"))},l(t.$t("Change Payment Card")),1)):v("",!0)]),_:1},8,["permission"]),n(U)?v("",!0):(a(),c(A,{key:0},[n(K)?(a(),c("span",{key:0,class:F([{isFutureInvoice:n(g)},"hasCoupon"])},l(n(G)?t.$t("Special Price"):t.$t("Coupon Applied")),3)):v("",!0),n(J)?(a(),c("span",{key:1,class:F([{isFutureInvoice:n(g)},"hasDiscount"])},l(t.$t("Discount Applied")),3)):v("",!0)],64))]),n(U)?v("",!0):(a(),c("div",Oe,[n(oe)?(a(),c("div",{key:0,class:"user-icon",style:h(n(ae)),title:n(se)},null,12,Fe)):v("",!0),y("div",{class:"amount",style:h({...n(S),...n(ce)})},[n(te)?(a(),c(A,{key:0},[q(l(n(Z))+l(n(N))+l(n(ee)),1)],64)):v("",!0)],4),y("div",Ae,[n(ne)&&(n(Q)||n(X))?(a(),c("button",{key:0,class:"receipt",style:h(n(S)),onClick:de},l(t.$t("View Invoice")),5)):(a(),c("span",Ee))])]))],10,Ce)}}});const De=x(M,[["__scopeId","data-v-de96d794"]]);M.__docgenInfo={exportName:"default",displayName:"InvoicesItem",description:"",tags:{},props:[{name:"invoiceHistoryItem",required:!0,type:{name:"InvoiceHistoryItem"}},{name:"prevInvoiceHistoryItem",required:!1,type:{name:"InvoiceHistoryItem"}}],sourceFiles:["/Users/h.kamiyama/GitHub/studio-front/src/components/Pd/PdDashboard/PageInvoice/InvoicesItem.vue"]};const R=D({components:{PdPageTitle:ye,PdPageContainer:me,PdNeedPermission:Ie,InvoicesItem:De},computed:{currentProject(){return this.$store.getters["project/project"]},isCurrentPlanCanceled(){return this.currentProject.isCanceled},invoiceHistory(){return this.$store.state.payment.invoiceHistory},invoiceHistoryLoaded(){return this.$store.state.payment.invoiceHistoryLoaded},hasInvoice(){return this.invoiceHistory.length>0},projectId(){return this.$route.params.projectId}},created(){this.$store.dispatch("payment/getInvoices",{projectId:this.$route.params.projectId})}});const Te=r=>(pe("data-v-a1ef1a04"),r=r(),ve(),r),Ue={id:"PagePdDashboardInvoice"},Ne={key:0,class:"loading"},je=Te(()=>y("div",{class:"spinner black"},null,-1)),Be=[je],We={key:1,class:"no-invoice"},Ve={key:2,class:"setting-row"};function qe(r,i,m,s,d,$){const C=P("PdPageTitle"),w=P("PdNeedPermission"),k=P("InvoicesItem"),I=P("CanUse"),u=P("PdPageContainer");return a(),c("div",Ue,[H(u,null,{default:b(()=>[H(C,null,{default:b(()=>[q(l(r.$t("Invoice History")),1)]),_:1}),H(I,{permission:r.$_enum.PermissionType.ProductOwner},{no:b(()=>[H(w,null,{default:b(()=>[y("p",null,l(r.$t("You need Owner permission to view invoices.")),1)]),_:1})]),yes:b(()=>[r.invoiceHistoryLoaded?r.hasInvoice?(a(),c("div",Ve,[(a(!0),c(A,null,le(r.invoiceHistory,(f,_)=>(a(),ue(k,{key:`${f.displayDatetime}_${_}`,"invoice-history-item":f,"prev-invoice-history-item":r.invoiceHistory[_+1]},null,8,["invoice-history-item","prev-invoice-history-item"]))),128))])):(a(),c("p",We,l(r.$t("No invoice history in this project.")),1)):(a(),c("div",Ne,Be))]),_:1},8,["permission"])]),_:1})])}const ri=x(R,[["render",qe],["__scopeId","data-v-a1ef1a04"]]);R.__docgenInfo={exportName:"default",displayName:"PagePdDashboardInvoice",description:"",tags:{},sourceFiles:["/Users/h.kamiyama/GitHub/studio-front/src/components/Pd/PdDashboard/PageInvoice/PagePdDashboardInvoice.vue"]};export{ri as default};
