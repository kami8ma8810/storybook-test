import{M as a}from"./ModalProjectListPvLimitAlertView-5e10dd61.js";import{u as s}from"./BasicModal-000dc82b.js";import{o as c}from"./vue.esm-bundler-33967e91.js";import"./vue-i18n.cjs-bd62fc86.js";import"./_commonjsHelpers-042e6b4d.js";import"./PfIcon-bb1c3c10.js";import"./PfIconContext-bd54ca9b.js";import"./_plugin-vue_export-helper-c27b6911.js";import"./PfButton-db6d6722.js";const I={component:a},r={render:e=>({components:{ModalProjectListPvLimitAlertView:a},setup(){const t=s();return c(()=>{t.push("ModalProjectListPvLimitAlert")}),{args:e}},template:'<ModalProjectListPvLimitAlertView v-bind="args" />'}),args:{almostLimitProjects:[{projectId:"exampleProjectId1",projectName:"Free Plan 80%",plan:"Free"},{projectId:"exampleProjectId2",projectName:"Starter Plan 80%",plan:"Starter"}],overLimitProjects:[]}};r.storyName="1.プロジェクト一覧 PV80%超過のみ";const o={render:e=>({components:{ModalProjectListPvLimitAlertView:a},setup(){const t=s();return c(()=>{t.push("ModalProjectListPvLimitAlert")}),{args:e}},template:'<ModalProjectListPvLimitAlertView v-bind="args" />'}),args:{almostLimitProjects:[],overLimitProjects:[{projectId:"exampleProjectId1",projectName:"Free Plan 80%",plan:"Free"},{projectId:"exampleProjectId2",projectName:"Starter Plan 80%",plan:"Starter"}]}};o.storyName="2.プロジェクト一覧 PV100%超過のみ";const n={render:e=>({components:{ModalProjectListPvLimitAlertView:a},setup(){const t=s();return c(()=>{t.push("ModalProjectListPvLimitAlert")}),{args:e}},template:'<ModalProjectListPvLimitAlertView v-bind="args" />'}),args:{almostLimitProjects:[{projectId:"exampleProjectId1",projectName:"Free Plan 80%",plan:"Free"},{projectId:"exampleProjectId2",projectName:"Starter Plan 80%",plan:"Starter"}],overLimitProjects:[{projectId:"exampleProjectId1",projectName:"Free Plan 80%",plan:"Free"},{projectId:"exampleProjectId2",projectName:"Starter Plan 80%",plan:"Starter"},{projectId:"exampleProjectId3",projectName:"CMS Plan 80%",plan:"CMS"},{projectId:"exampleProjectId4",projectName:"Business Plan 80%",plan:"Business"}]}};n.storyName="3.プロジェクト一覧 PV80%超過 & PV100%超過";r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  render: args => ({
    components: {
      ModalProjectListPvLimitAlertView
    },
    setup() {
      const modal = useStackModal();
      onMounted(() => {
        modal.push('ModalProjectListPvLimitAlert');
      });
      return {
        args
      };
    },
    template: '<ModalProjectListPvLimitAlertView v-bind="args" />'
  }),
  args: {
    almostLimitProjects: [{
      projectId: 'exampleProjectId1',
      projectName: 'Free Plan 80%',
      plan: 'Free'
    }, {
      projectId: 'exampleProjectId2',
      projectName: 'Starter Plan 80%',
      plan: 'Starter'
    }],
    overLimitProjects: []
  }
}`,...r.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  render: args => ({
    components: {
      ModalProjectListPvLimitAlertView
    },
    setup() {
      const modal = useStackModal();
      onMounted(() => {
        modal.push('ModalProjectListPvLimitAlert');
      });
      return {
        args
      };
    },
    template: '<ModalProjectListPvLimitAlertView v-bind="args" />'
  }),
  args: {
    almostLimitProjects: [],
    overLimitProjects: [{
      projectId: 'exampleProjectId1',
      projectName: 'Free Plan 80%',
      plan: 'Free'
    }, {
      projectId: 'exampleProjectId2',
      projectName: 'Starter Plan 80%',
      plan: 'Starter'
    }]
  }
}`,...o.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  render: args => ({
    components: {
      ModalProjectListPvLimitAlertView
    },
    setup() {
      const modal = useStackModal();
      onMounted(() => {
        modal.push('ModalProjectListPvLimitAlert');
      });
      return {
        args
      };
    },
    template: '<ModalProjectListPvLimitAlertView v-bind="args" />'
  }),
  args: {
    almostLimitProjects: [{
      projectId: 'exampleProjectId1',
      projectName: 'Free Plan 80%',
      plan: 'Free'
    }, {
      projectId: 'exampleProjectId2',
      projectName: 'Starter Plan 80%',
      plan: 'Starter'
    }],
    overLimitProjects: [{
      projectId: 'exampleProjectId1',
      projectName: 'Free Plan 80%',
      plan: 'Free'
    }, {
      projectId: 'exampleProjectId2',
      projectName: 'Starter Plan 80%',
      plan: 'Starter'
    }, {
      projectId: 'exampleProjectId3',
      projectName: 'CMS Plan 80%',
      plan: 'CMS'
    }, {
      projectId: 'exampleProjectId4',
      projectName: 'Business Plan 80%',
      plan: 'Business'
    }]
  }
}`,...n.parameters?.docs?.source}}};const v=["ProjectListPVAlmost","ProjectListPVOver","ProjectListPVAlmostAndOver"];export{r as ProjectListPVAlmost,n as ProjectListPVAlmostAndOver,o as ProjectListPVOver,v as __namedExportsOrder,I as default};
