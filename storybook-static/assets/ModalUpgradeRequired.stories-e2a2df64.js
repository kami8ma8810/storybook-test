import{b as r}from"./ModalUpgradeRequired-a455cfd7.js";import{u as n}from"./BasicModal-000dc82b.js";import{o as t}from"./vue.esm-bundler-33967e91.js";import"./PfButton-db6d6722.js";import"./PfIconContext-bd54ca9b.js";import"./_plugin-vue_export-helper-c27b6911.js";const i={component:r},e={render:o=>({components:{ModalUpgradeRequired:r},setup(){const a=n();return t(()=>{a.push("ModalUpgradeRequired")}),{args:o}},template:'<ModalUpgradeRequired v-bind="args" />'})};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
  render: args => ({
    components: {
      ModalUpgradeRequired
    },
    setup() {
      const modal = useStackModal();
      onMounted(() => {
        modal.push('ModalUpgradeRequired');
      });
      return {
        args
      };
    },
    template: '<ModalUpgradeRequired v-bind="args" />'
  })
}`,...e.parameters?.docs?.source}}};const l=["Default"];export{e as Default,l as __namedExportsOrder,i as default};
