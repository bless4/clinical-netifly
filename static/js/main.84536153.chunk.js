(this["webpackJsonpnew-clinic-app"]=this["webpackJsonpnew-clinic-app"]||[]).push([[0],{166:function(e,t,a){},168:function(e,t,a){},302:function(e,t,a){"use strict";a.r(t);var n=a(6),l=a(0),o=a.n(l),r=a(28),i=a.n(r),s=(a(166),a(9)),c=a(10),d=a(11),u=a(13),h=(a(167),a(168),a(77)),g=a(38),m=a(303),p=a(85),j=a.n(p),b=a(5),y=a(304),f=a(306),v=a(307),O=a(305),C=a(99),x=function(e){Object(d.a)(a,e);var t=Object(u.a)(a);function a(e){var n;return Object(s.a)(this,a),(n=t.call(this,e)).cancelModal=function(){n.setState({visible:!n.state.visible},(function(){n.props.toggleAdd()}))},n.handleFormSubmit=function(){var e=n.state.localData;if(n.validator.allValid()){var t={key:n.state.name,name:n.state.name,email:n.state.email,phone:n.state.phone,gender:n.state.gender,language:n.state.language,country:n.state.country,idc10:n.state.id,data_controller:n.state.dataController,consent_gdpr:n.state.consentGdpr,consent_other:n.state.consentOther,created_at:new Date};e.unshift(t),localStorage.setItem("defaultData",JSON.stringify(e)),n.props.toggleAdd(),n.props.confirmToggleAdd()}else n.validator.showMessages(),n.forceUpdate()},n.handleChangeForm=function(e){var t=e.target,a=t.name,l=t.value;n.setState(Object(b.a)({},a,l))},n.onChangeRadio=function(e){n.setState({gender:e.target.value})},n.state={name:"",email:"",phone:"",gender:"",language:"",country:"",id:"",dataController:"",consentGdpr:"",consentOther:"",visible:e.visible,localData:""},n.validator=new j.a({}),n}return Object(c.a)(a,[{key:"componentDidMount",value:function(){var e=JSON.parse(localStorage.getItem("defaultData"));e&&this.setState({localData:e})}},{key:"render",value:function(){var e=this.state.visible;return Object(n.jsxs)(y.a,{width:"700px",title:"Add Subject",visible:e,onOk:this.handleFormSubmit,onCancel:this.cancelModal,children:[Object(n.jsxs)(f.a,{children:[Object(n.jsx)(v.a,{lg:12,children:Object(n.jsxs)("div",{className:"form-data left-col",children:[Object(n.jsx)("label",{children:"Name"}),Object(n.jsx)(O.a,{name:"name",value:this.state.name,placeholder:"Name",onChange:this.handleChangeForm}),Object(n.jsxs)("div",{className:"error-message",children:[" ",this.validator.message("name",this.state.name,"required")]})]})}),Object(n.jsx)(v.a,{lg:12,children:Object(n.jsxs)("div",{className:"form-data right-col",children:[Object(n.jsx)("label",{children:"Email"}),Object(n.jsx)(O.a,{type:"email",name:"email",value:this.state.email,placeholder:"Email",onChange:this.handleChangeForm}),Object(n.jsxs)("div",{className:"error-message",children:[" ",this.validator.message("email",this.state.email,"required|email")]})]})})]}),Object(n.jsxs)("div",{className:"form-data",children:[Object(n.jsx)("label",{children:"Phone"}),Object(n.jsx)(O.a,{type:"text",name:"phone",value:this.state.phone,placeholder:"Phone",onChange:this.handleChangeForm}),Object(n.jsxs)("div",{className:"error-message",children:[" ",this.validator.message("Phone",this.state.phone,"required|phone")]})]}),Object(n.jsxs)("div",{className:"form-data",children:[Object(n.jsx)("label",{children:"Gender"}),Object(n.jsx)("br",{}),Object(n.jsxs)(C.a.Group,{onChange:this.onChangeRadio,value:this.state.gender,children:[Object(n.jsx)(C.a,{value:"Male",children:"Male"}),Object(n.jsx)(C.a,{value:"Female",children:"Female"})]}),Object(n.jsxs)("div",{className:"error-message",children:[" ",this.validator.message("gender",this.state.gender,"required")]})]}),Object(n.jsxs)(f.a,{children:[Object(n.jsx)(v.a,{lg:12,children:Object(n.jsxs)("div",{className:"form-data left-col",children:[Object(n.jsx)("label",{children:"Language"}),Object(n.jsx)(O.a,{type:"text",name:"language",value:this.state.language,placeholder:"Language",onChange:this.handleChangeForm}),Object(n.jsxs)("div",{className:"error-message",children:[" ",this.validator.message("language",this.state.language,"required")]})]})}),Object(n.jsx)(v.a,{lg:12,children:Object(n.jsxs)("div",{className:"form-data right-col",children:[Object(n.jsx)("label",{children:"Country"}),Object(n.jsx)(O.a,{type:"text",name:"country",value:this.state.country,placeholder:"Country",onChange:this.handleChangeForm}),Object(n.jsxs)("div",{className:"error-message",children:[" ",this.validator.message("country",this.state.country,"required")]})]})})]}),Object(n.jsxs)(f.a,{children:[Object(n.jsx)(v.a,{lg:12,children:Object(n.jsxs)("div",{className:"form-data left-col",children:[Object(n.jsx)("label",{children:"Idc10"}),Object(n.jsx)(O.a,{type:"text",name:"id",value:this.state.id,placeholder:"Idc10",onChange:this.handleChangeForm}),Object(n.jsxs)("div",{className:"error-message",children:[" ",this.validator.message("Idc10",this.state.id,"required")]})]})}),Object(n.jsx)(v.a,{lg:12,children:Object(n.jsxs)("div",{className:"form-data right-col",children:[Object(n.jsx)("label",{children:"Data Controller"}),Object(n.jsx)(O.a,{type:"text",name:"dataController",value:this.state.dataController,placeholder:"Data Controller",onChange:this.handleChangeForm}),Object(n.jsxs)("div",{className:"error-message",children:[" ",this.validator.message("dataController",this.state.dataController,"required")]})]})})]}),Object(n.jsxs)(f.a,{children:[Object(n.jsx)(v.a,{lg:12,children:Object(n.jsxs)("div",{className:"form-data left-col",children:[Object(n.jsx)("label",{children:"Consent Gdpr"}),Object(n.jsx)(O.a,{type:"text",name:"consentGdpr",value:this.state.consentGdpr,placeholder:"Consent Gdpr",onChange:this.handleChangeForm})]})}),Object(n.jsx)(v.a,{lg:12,children:Object(n.jsxs)("div",{className:"form-data right-col",children:[Object(n.jsx)("label",{children:"Consent Other"}),Object(n.jsx)(O.a,{type:"text",name:"consentOther",value:this.state.consentOther,placeholder:"Consent Other",onChange:this.handleChangeForm})]})})]})]})}}]),a}(l.Component),_=a(135),S=a.n(_),M=function(e){Object(d.a)(a,e);var t=Object(u.a)(a);function a(e){var n;return Object(s.a)(this,a),(n=t.call(this,e)).cancelUploadModal=function(){n.props.toggleUpload()},n.onUploadModalOk=function(){n.state.holdData.length>0&&localStorage.setItem("defaultData",JSON.stringify(n.state.holdData)),n.props.toggleUpload(),n.props.confirmToggleUpload()},n.handleForce=function(e,t){var a="",l="",o=e.map((function(e,t){return a=!0===e.consent_gdpr?"true":!1===e.consent_gdpr?"false":"",l=!0===e.consent_other?"true":!1===e.consent_other?"false":"",{key:t+1,name:e.name?e.name:"",email:e.email?e.email:"",phone:e.phone?e.phone:"",gender:e.gender?e.gender:"",language:e.language?e.language:"",country:e.country?e.country:"",idc10:e.idc10?e.idc10:"",data_controller:e.data_controller?e.data_controller:"",consent_gdpr:a,consent_other:l,created_at:e.created_at?e.created_at:""}}));n.setState({fileRowCounts:o?o.length:0,holdData:o})},n.state={visible:e.visible,fileRowCounts:0,holdData:""},n}return Object(c.a)(a,[{key:"render",value:function(){var e=this.state,t=e.fileRowCounts,a=e.visible;return Object(n.jsxs)(y.a,{title:"Upload",visible:a,onCancel:this.cancelUploadModal,footer:[Object(n.jsx)(g.a,{onClick:this.cancelUploadModal,children:"Cancel"},"back"),Object(n.jsx)(g.a,{type:"primary",onClick:this.onUploadModalOk,children:"Add Subject"},"submit")],children:[Object(n.jsx)(S.a,{cssClass:"react-csv-input",onFileLoaded:this.handleForce,parserOptions:{header:!0,dynamicTyping:!0,skipEmptyLines:!0,transformHeader:function(e){return e.toLowerCase().replace(/\W/g,"_")}}}),t>0?Object(n.jsxs)("span",{children:["Contains ",t," rows"]}):null]})}}]),a}(l.Component),F=function(e){Object(d.a)(a,e);var t=Object(u.a)(a);function a(e){var n;return Object(s.a)(this,a),(n=t.call(this,e)).handleEmailModal=function(){n.props.toggleEmail(),n.props.confirmToggleEmail()},n.cancelEmailModal=function(){n.props.toggleEmail()},n.state={visible:e.visible,count:e.count.length},n}return Object(c.a)(a,[{key:"render",value:function(){var e=this.state,t=e.visible,a=e.count;return Object(n.jsxs)(y.a,{title:"Confirm Email",visible:t,onOk:this.handleEmailModal,onCancel:this.cancelEmailModal,children:["Please click to confirm sending ",a," emails"]})}}]),a}(l.Component),k=[{key:1,name:"Veronika Pideon",email:"vpideon0@house.gov",phone:"+44-644-705-4009",gender:"Female",language:"it",country:"GB",idc10:"Z951",data_controller:"",consent_gdpr:"false",consent_other:"false",created_at:"2018-12-23T19:00:37.000Z"},{key:2,name:"Gerardo Durbin",email:"gdurbin1@ovh.net",phone:"+1-515-625-4980",gender:"Male",language:"nl",country:"US",idc10:"W9301XS",data_controller:"Mike",consent_gdpr:"false",consent_other:"false",created_at:"2018-03-24T16:10:58.000Z"},{key:3,name:"Elie Capineer",email:"ecapineer2@tumblr.com",phone:"+1-501-949-3364",gender:"Female",language:"sv",country:"US",idc10:"",data_controller:"",consent_gdpr:"true",consent_other:"false",created_at:"2019-02-13T15:31:35.000Z"},{key:4,name:"Fayette Troth",email:"ftroth3@princeton.edu",phone:"+33-764-775-1225",gender:"Female",language:"it",country:"FR",idc10:"T84210",data_controller:"",consent_gdpr:"true",consent_other:"true",created_at:"2020-02-01T08:53:27.000Z"},{key:5,name:"Sansone McGrey",email:"smcgrey4@youtu.be",phone:"+1-314-111-3559",gender:"Male",language:"fr",country:"US",idc10:"",data_controller:"",consent_gdpr:"true",consent_other:"true",created_at:"2019-05-15T14:43:49.000Z"},{key:6,name:"Marcie Ludovico",email:"mludovico5@msn.com",phone:"+46-790-469-1790",gender:"Female",language:"sv",country:"SE",idc10:"",data_controller:"",consent_gdpr:"true",consent_other:"false",created_at:"2019-01-06T06:58:01.000Z"},{key:7,name:"Barret Faire",email:"bfaire6@xrea.com",phone:"+46-266-109-6985",gender:"Male",language:"fr",country:"SE",idc10:"M84345",data_controller:"",consent_gdpr:"false",consent_other:"true",created_at:"2020-06-28T06:30:20.000Z"},{key:8,name:"Trey Shory",email:"tshory7@imgur.com",phone:"+1-419-782-6416",gender:"Male",language:"sv",country:"US",idc10:"",data_controller:"",consent_gdpr:"true",consent_other:"false",created_at:"2019-02-24T19:40:58.000Z"},{key:9,name:"Kamillah Bellhouse",email:"kbellhouse8@feedburner.com",phone:"+33-655-648-1453",gender:"Female",language:"en",country:"FR",idc10:"V4919",data_controller:"",consent_gdpr:"false",consent_other:"false",created_at:"2018-12-07T19:34:20.000Z"},{key:10,name:"Irvine Haseldine",email:"",phone:"+33-419-491-9673",gender:"Male",language:"fr",country:"",idc10:"",data_controller:"",consent_gdpr:"true",consent_other:"true",created_at:"2020-01-23T21:18:56.000Z"}],w=[{title:"Name",dataIndex:"name",key:"name",sorter:function(e,t){return e.name.localeCompare(t.name)}},{title:"Email",dataIndex:"email",key:"email",sorter:function(e,t){return e.email.localeCompare(t.email)}},{title:"Phone",dataIndex:"phone",key:"phone",sorter:function(e,t){return e.phone.localeCompare(t.phone)}},{title:"Gender",dataIndex:"gender",key:"gender",sorter:function(e,t){return e.gender.localeCompare(t.gender)}},{title:"Language",dataIndex:"language",key:"language",sorter:function(e,t){return e.language.localeCompare(t.language)}},{title:"Country",dataIndex:"country",key:"country",sorter:function(e,t){return e.country.localeCompare(t.country)}},{title:"Idc10",dataIndex:"idc10",key:"idc10",sorter:function(e,t){return e.idc10.localeCompare(t.idc10)}},{title:"Data Controller",dataIndex:"data_controller",key:"data_controller",sorter:function(e,t){return e.data_controller.localeCompare(t.data_controller)}},{title:"Consent Gdpr",dataIndex:"consent_gdpr",key:"consent_gdpr",sorter:function(e,t){return e.consent_gdpr.localeCompare(t.consent_gdpr)}},{title:"Consent Other",dataIndex:"consent_other",key:"consent_other",sorter:function(e,t){return e.consent_other.localeCompare(t.consent_other)}},{title:"Created At",dataIndex:"created_at",key:"created_at",sorter:function(e,t){return e.created_at.localeCompare(t.created_at)}}],N=h.a.Option,D=function(e){Object(d.a)(a,e);var t=Object(u.a)(a);function a(e){var n;return Object(s.a)(this,a),(n=t.call(this,e)).onSelectChange=function(e){n.setState({selectedRowKeys:e})},n.handleChangeCondition=function(e){var t=n.state,a=t.temp,l=t.languageFilter,o=t.countryFilter,r=[];a.filter((function(t,a){o&&l?t.idc10===e&&t.language===l&&t.country===o&&r.push(t):o?t.idc10===e&&t.country===o&&r.push(t):l?t.idc10===e&&t.language===l&&r.push(t):t.idc10===e&&r.push(t)})),n.setState({data:r,conditionFilter:e})},n.handleChangeCountry=function(e){var t=n.state,a=t.temp,l=t.conditionFilter,o=t.languageFilter,r=[];a.filter((function(t,a){l&&o?t.country===e&&t.idc10===l&&t.language===o&&r.push(t):l?t.country===e&&t.idc10===l&&r.push(t):o?t.country===e&&t.language===o&&r.push(t):t.country===e&&r.push(t)})),n.setState({data:r,countryFilter:e})},n.handleChangeLanguage=function(e){var t=n.state,a=t.temp,l=t.conditionFilter,o=t.countryFilter,r=[];a.filter((function(t,a){l&&o?t.language===e&&t.idc10===l&&t.country===o&&r.push(t):l?t.language===e&&t.idc10===l&&r.push(t):o?t.language===e&&t.country===o&&r.push(t):t.language===e&&r.push(t)})),n.setState({data:r,languageFilter:e})},n.clearCondition=function(){n.setState({conditionFilter:void 0},(function(){var e=n.state,t=e.temp,a=e.languageFilter,l=e.countryFilter,o=e.conditionFilter,r=[];t.filter((function(e,t){l&&a?(e.idc10===o||e.language===a&&e.country===l)&&r.push(e):l?e.idc10!==o&&e.country!==l||r.push(e):a&&e.idc10!==o&&e.language!==a||r.push(e)})),n.setState({data:r})}))},n.clearCountry=function(){n.setState({countryFilter:void 0},(function(){var e=n.state,t=e.temp,a=e.languageFilter,l=e.countryFilter,o=e.conditionFilter,r=[];t.filter((function(e,t){o&&a?(e.country===l||e.idc10===o&&e.language===a)&&r.push(e):o?e.country!==l&&e.idc10!==o||r.push(e):a&&e.country!==l&&e.language!==a||r.push(e)})),n.setState({data:r})}))},n.clearLanguage=function(){n.setState({languageFilter:void 0},(function(){var e=n.state,t=e.temp,a=e.languageFilter,l=e.countryFilter,o=e.conditionFilter,r=[];t.filter((function(e,t){o&&l?(e.language===a||e.idc10===o&&e.country===l)&&r.push(e):o?e.language!==a&&e.idc10!==o||r.push(e):l&&e.language!==a&&e.country!==l||r.push(e)})),n.setState({data:r})}))},n.showUploadModal=function(){n.setState({uploadModelVisibility:!0})},n.showAddModal=function(){n.setState({addModalVisibility:!0})},n.closeAddModal=function(){n.setState({addModalVisibility:!n.state.addModalVisibility})},n.closeUploadModal=function(){n.setState({uploadModelVisibility:!n.state.uploadModelVisibility})},n.showEmailModal=function(){n.setState({emailModelVisibility:!0})},n.closeEmailModal=function(){n.setState({emailModelVisibility:!n.state.emailModelVisibility})},n.onEmailModalOk=function(){console.log("Selected rows are",n.state.rowArray),n.setState({emailModelVisibility:!1})},n.handleSelectRow=function(e){var t=n.state.rowArray;-1===n.state.rowArray.findIndex((function(t){return t.key===e.key}))?(t.push(e),n.setState({rowArray:n.state.rowArray})):n.state.rowArray.filter((function(t,a){t.key===e.key&&n.state.rowArray.splice(a,1),n.setState({rowArray:n.state.rowArray})}))},n.state={selectedRowKeys:[],loading:!1,uploadModelVisibility:!1,emailModelVisibility:!1,addModalVisibility:!1,data:"",temp:"",holdData:[],conditionFilter:void 0,countryFilter:void 0,languageFilter:void 0,storeLocalData:"",fileRowCounts:void 0,rowArray:[]},n.validator=new j.a({}),n}return Object(c.a)(a,[{key:"getData",value:function(){var e=JSON.parse(localStorage.getItem("defaultData"));e||(e=k,localStorage.setItem("defaultData",JSON.stringify(e))),this.setState({data:e,temp:e})}},{key:"componentDidMount",value:function(){this.getData()}},{key:"render",value:function(){var e=this.state,t=e.selectedRowKeys,a=e.temp,l={selectedRowKeys:t,onChange:this.onSelectChange,onSelect:this.handleSelectRow},o=[],r=[],i=[];return a.length>0&&(o=(o=a.map((function(e){return e.idc10})))&&o.filter((function(e,t){return o.indexOf(e)===t&&null!=e&&""!==e})),r=(r=a.map((function(e){return e.country})))&&r.filter((function(e,t){return r.indexOf(e)===t&&null!==e&&""!==e})),i=(i=a.map((function(e){return e.language})))&&i.filter((function(e,t){return i.indexOf(e)===t&&null!==e&&""!==e}))),Object(n.jsxs)("div",{className:"App",children:[Object(n.jsx)(h.a,{placeholder:"Condition",value:this.state.conditionFilter,className:"condition",onChange:this.handleChangeCondition.bind(this),allowClear:!0,onClear:this.clearCondition,children:o.length>0&&o.map((function(e,t){return Object(n.jsx)(N,{value:e,children:e},t)}))}),Object(n.jsx)(h.a,{placeholder:"Country",className:"country",value:this.state.countryFilter,onChange:this.handleChangeCountry.bind(this),allowClear:!0,onClear:this.clearCountry,children:r.length>0&&r.map((function(e,t){return Object(n.jsx)(N,{value:e,children:e},t)}))}),Object(n.jsx)(h.a,{placeholder:"Language",className:"language",value:this.state.languageFilter,onChange:this.handleChangeLanguage.bind(this),allowClear:!0,onClear:this.clearLanguage,children:i.length>0&&i.map((function(e,t){return Object(n.jsx)(N,{value:e,children:e},t)}))}),Object(n.jsx)(g.a,{type:"primary",onClick:this.showEmailModal,className:"btn-send-email",children:"Send Email"}),Object(n.jsx)(g.a,{type:"primary",onClick:this.showUploadModal,className:"btn-upload",children:"Upload Subjects"}),Object(n.jsx)(g.a,{type:"primary",onClick:this.showAddModal,className:"btn-upload",children:"Add Subject"}),Object(n.jsx)(m.a,{rowSelection:l,rowKey:function(e){return e.key},columns:w,bordered:!0,dataSource:this.state.data}),Object(n.jsx)("div",{}),this.state.addModalVisibility?Object(n.jsx)(x,{visible:this.state.addModalVisibility,toggleAdd:this.closeAddModal,confirmToggleAdd:this.getData.bind(this)}):"",this.state.uploadModelVisibility?Object(n.jsx)(M,{visible:this.state.uploadModelVisibility,toggleUpload:this.closeUploadModal,confirmToggleUpload:this.getData.bind(this)}):"",this.state.emailModelVisibility?Object(n.jsx)(F,{visible:this.state.emailModelVisibility,count:this.state.selectedRowKeys,toggleEmail:this.closeEmailModal,confirmToggleEmail:this.onEmailModalOk.bind(this)}):""]})}}]),a}(l.Component),A=function(e){Object(d.a)(a,e);var t=Object(u.a)(a);function a(){return Object(s.a)(this,a),t.apply(this,arguments)}return Object(c.a)(a,[{key:"render",value:function(){return Object(n.jsx)("div",{className:"App",children:Object(n.jsx)(D,{})})}}]),a}(o.a.Component),E=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,308)).then((function(t){var a=t.getCLS,n=t.getFID,l=t.getFCP,o=t.getLCP,r=t.getTTFB;a(e),n(e),l(e),o(e),r(e)}))},I=document.getElementById("root");i.a.render(Object(n.jsx)(A,{}),I),E()}},[[302,1,2]]]);
//# sourceMappingURL=main.84536153.chunk.js.map