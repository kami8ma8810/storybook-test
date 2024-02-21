import{b as s}from"./ModalPvLimitAlertView-cb9178ae.js";import{u as i}from"./BasicModal-000dc82b.js";import{o as a}from"./vue.esm-bundler-33967e91.js";import"./vue-i18n.cjs-bd62fc86.js";import"./_commonjsHelpers-042e6b4d.js";import"./ModalUpgradeRequired-a455cfd7.js";import"./PfButton-db6d6722.js";import"./PfIconContext-bd54ca9b.js";import"./lodash-bf1bac5c.js";import"./_commonjs-dynamic-modules-302442b1.js";import"./iframe-4066d2cc.js";import"../sb-preview/runtime.js";import"./_plugin-vue_export-helper-c27b6911.js";import"./PfIcon-bb1c3c10.js";import"./mapValues-a1d744f5.js";const N={component:s},e={render:n=>({components:{ModalPvLimitAlertView:s},setup(){const t=i();return a(()=>{t.push("ModalPvLimitAlert")}),{args:n}},template:'<ModalPvLimitAlertView v-bind="args" />'}),args:{pvCountAlert:"almost limit",projectPlanName:"CMS",pvLimit:1e5,pvCount:85e3,isPlanV3Business:!1,nextPlanName:"Business",nextPlanPvLimit:"200000000",projectId:"string",pvOptionEnabled:!1},argTypes:{pvCountAlert:{options:["almost limit","over limit"],control:{type:"select"}}}};e.storyName="1.PV80%";const o={render:n=>({components:{ModalPvLimitAlertView:s},setup(){const t=i();return a(()=>{t.push("ModalPvLimitAlert")}),{args:n}},template:'<ModalPvLimitAlertView v-bind="args" />'}),args:{pvCountAlert:"almost limit",projectPlanName:"CMS",pvLimit:1e5,pvCount:94e3,isPlanV3Business:!1,nextPlanName:"Business",nextPlanPvLimit:"200000000",projectId:"string",pvOptionEnabled:!0},argTypes:{pvCountAlert:{options:["almost limit","over limit"],control:{type:"select"}}}};o.storyName="2.PV90%";const r={render:n=>({components:{ModalPvLimitAlertView:s},setup(){const t=i();return a(()=>{t.push("ModalPvLimitAlert")}),{args:n}},template:'<ModalPvLimitAlertView v-bind="args" />'}),args:{pvCountAlert:"almost limit",projectPlanName:"CMS",pvLimit:1e5,pvCount:103e3,isPlanV3Business:!1,nextPlanName:"Business",nextPlanPvLimit:"200000000",projectId:"string",pvOptionEnabled:!0},argTypes:{pvCountAlert:{options:["almost limit","over limit"],control:{type:"select"}}}};r.storyName="3.over";e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
  render: args => ({
    components: {
      ModalPvLimitAlertView
    },
    setup() {
      const modal = useStackModal();
      onMounted(() => {
        modal.push('ModalPvLimitAlert');
      });
      return {
        args
      };
    },
    template: '<ModalPvLimitAlertView v-bind="args" />'
  }),
  args: {
    pvCountAlert: 'almost limit',
    projectPlanName: 'CMS',
    pvLimit: 100000,
    pvCount: 85000,
    isPlanV3Business: false,
    nextPlanName: 'Business',
    nextPlanPvLimit: '200000000',
    projectId: 'string',
    pvOptionEnabled: false
  },
  argTypes: {
    pvCountAlert: {
      options: ['almost limit', 'over limit'],
      control: {
        type: 'select'
      }
    }
  }
}`,...e.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  render: args => ({
    components: {
      ModalPvLimitAlertView
    },
    setup() {
      const modal = useStackModal();
      onMounted(() => {
        modal.push('ModalPvLimitAlert');
      });
      return {
        args
      };
    },
    template: '<ModalPvLimitAlertView v-bind="args" />'
  }),
  args: {
    pvCountAlert: 'almost limit',
    projectPlanName: 'CMS',
    pvLimit: 100000,
    pvCount: 94000,
    isPlanV3Business: false,
    nextPlanName: 'Business',
    nextPlanPvLimit: '200000000',
    projectId: 'string',
    pvOptionEnabled: true
  },
  argTypes: {
    pvCountAlert: {
      options: ['almost limit', 'over limit'],
      control: {
        type: 'select'
      }
    }
  }
}`,...o.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  render: args => ({
    components: {
      ModalPvLimitAlertView
    },
    setup() {
      const modal = useStackModal();
      onMounted(() => {
        modal.push('ModalPvLimitAlert');
      });
      return {
        args
      };
    },
    template: '<ModalPvLimitAlertView v-bind="args" />'
  }),
  args: {
    pvCountAlert: 'almost limit',
    projectPlanName: 'CMS',
    pvLimit: 100000,
    pvCount: 103000,
    isPlanV3Business: false,
    nextPlanName: 'Business',
    nextPlanPvLimit: '200000000',
    projectId: 'string',
    pvOptionEnabled: true
  },
  argTypes: {
    pvCountAlert: {
      options: ['almost limit', 'over limit'],
      control: {
        type: 'select'
      }
    }
  }
}`,...r.parameters?.docs?.source}}};const x=["PV80","PV90","DAY1"];export{r as DAY1,e as PV80,o as PV90,x as __namedExportsOrder,N as default};
