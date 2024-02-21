import{f as l,e as i,p as u,h as s}from"./vue.esm-bundler-33967e91.js";import{P as r}from"./PfIconContext-bd54ca9b.js";const d=l({name:"PfButton",props:{disabled:{type:Boolean,required:!1,default:!1},loading:{type:Boolean,required:!1,default:!1},size:{type:String,required:!1,default:"md"},variant:{type:String,required:!1,default:"primary"},buttonType:{type:String,required:!1,default:"button"}},setup(e){const a=i(()=>{const t=[];return e.size&&t.push(`${e.size}`),e.variant&&t.push(`pf-btn-${e.variant}`),(e.loading||e.disabled)&&t.push("disabled"),t}),n=i(()=>{switch(e.variant){case"primary":return"white";case"outline":return e.disabled?"gray-400":"black";case"tertiary":return e.disabled?"gray-400":"black";case"destructive":return e.disabled?"red-300":"red-600";case"gradient":return"white";case"negative":return"gray-600";default:return null}});return u(r,{iconColor:n.value,size:e.size}),{classes:a,iconColor:n}},render(){const e=this.$slots.default().map(a=>typeof a.type=="symbol"?s("span",{style:{width:"100%"}},[a]):a);return s("button",{class:this.classes,type:this.buttonType,tabindex:this.disabled?-1:0,"area-disabled":this.disabled},this.loading?[s("span",{class:"spinner"})]:e)}});d.__docgenInfo={displayName:"PfButton",exportName:"default",description:"",tags:{},props:[{name:"disabled",type:{name:"boolean"},required:!1,defaultValue:{func:!1,value:"false"}},{name:"loading",type:{name:"boolean"},required:!1,defaultValue:{func:!1,value:"false"}},{name:"size",type:{name:"Piano.ButtonSize"},required:!1,defaultValue:{func:!1,value:"'md'"}},{name:"variant",type:{name:"Piano.ButtonType"},required:!1,defaultValue:{func:!1,value:"'primary'"}},{name:"buttonType",values:["submit","reset","button"],type:{name:"string"},required:!1,defaultValue:{func:!1,value:"'button'"}}],slots:[{name:"default"}],sourceFiles:["/Users/h.kamiyama/GitHub/studio-front/src/piano/v2/uiParts/PfButton.vue"]};export{d as _};
