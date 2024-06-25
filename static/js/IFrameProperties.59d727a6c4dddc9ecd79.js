(this["fb_mf"] = this["fb_mf"] || []).push([[20],{

/***/ 2345:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/toConsumableArray.js + 2 modules
var toConsumableArray = __webpack_require__(67);

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/objectSpread2.js
var objectSpread2 = __webpack_require__(60);

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/slicedToArray.js + 1 modules
var slicedToArray = __webpack_require__(58);

// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(4);

// EXTERNAL MODULE: ./src/components/LeftNavigation/DesignerControls/BasicControls.module.css
var BasicControls_module = __webpack_require__(78);
var BasicControls_module_default = /*#__PURE__*/__webpack_require__.n(BasicControls_module);

// EXTERNAL MODULE: ./node_modules/react-bootstrap/esm/Form.js + 13 modules
var Form = __webpack_require__(2286);

// EXTERNAL MODULE: ./node_modules/react-bootstrap/esm/Card.js + 3 modules
var Card = __webpack_require__(2305);

// EXTERNAL MODULE: ./src/ReusableComponents/ToggleBtn/ToggleBtn.jsx
var ToggleBtn = __webpack_require__(85);

// EXTERNAL MODULE: ./src/components/Properties/PropertiesConfiguration.jsx
var PropertiesConfiguration = __webpack_require__(84);

// EXTERNAL MODULE: ./src/ReusableComponents/CollapseCard/CollapseCard.jsx
var CollapseCard = __webpack_require__(90);

// CONCATENATED MODULE: ./src/components/Properties/IFrameJson.jsx
var IFrameJson={Basic:{Label:"",// "Mapping" : "",
CustomId:'',// UserDefinedControlID: "",
Visible:"",FullScreenView:"",SourceURL:"",// "Width":"",
Height:"",ControlDescription:""},Display:{MobileVisible:"",TabsVisible:""},Spacing:{SpacingLeft:"",SpacingRight:"",SpacingTop:"",SpacingBottom:""}// Events: {
//   EventButton: "",
// },
};/* harmony default export */ var Properties_IFrameJson = (IFrameJson);
// EXTERNAL MODULE: ./src/ReusableComponents/ControlLabel/ControlLabel.jsx
var ControlLabel = __webpack_require__(100);

// EXTERNAL MODULE: ./src/ReusableComponents/Events/EventList.js
var EventList = __webpack_require__(125);

// EXTERNAL MODULE: ./src/ReusableComponents/Events/Events.jsx + 20 modules
var Events = __webpack_require__(132);

// EXTERNAL MODULE: ./src/Resources/globalFunctions.js + 1 modules
var globalFunctions = __webpack_require__(70);

// EXTERNAL MODULE: ./src/components/IFormDesignerLayout/Logic/UserIdLogic.js
var UserIdLogic = __webpack_require__(80);

// EXTERNAL MODULE: ./src/components/IFormDesignerLayout/RequestLogic.jsx
var RequestLogic = __webpack_require__(72);

// EXTERNAL MODULE: ./node_modules/react-i18next/dist/es/useTranslation.js + 1 modules
var useTranslation = __webpack_require__(2317);

// EXTERNAL MODULE: ./src/ReusableComponents/ErrorMessageComponent/ErrorMessageComponent.jsx
var ErrorMessageComponent = __webpack_require__(103);

// EXTERNAL MODULE: ./src/ReusableComponents/Alert/CustomizedAlert.jsx
var CustomizedAlert = __webpack_require__(71);

// EXTERNAL MODULE: ./src/components/CustomHooks/CustomHooks.js
var CustomHooks = __webpack_require__(62);

// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(0);

// CONCATENATED MODULE: ./src/components/IFormDesignerLayout/IFormDesignerComponents/IFrameProperties/IFrameProperties.jsx
var IFrameProperties_IFrameProperties=function IFrameProperties(props){var _window,_window$appformBuilde,_window2,_window2$appformBuild,_props$selectedContro6,_props$selectedContro7;var translationStyles1=((_window=window)===null||_window===void 0?void 0:(_window$appformBuilde=_window.appformBuilder_configs)===null||_window$appformBuilde===void 0?void 0:_window$appformBuilde.selectedLanguage)==="ar"||((_window2=window)===null||_window2===void 0?void 0:(_window2$appformBuild=_window2.appformBuilder_configs)===null||_window2$appformBuild===void 0?void 0:_window2$appformBuild.selectedLanguage)==="ar-SA";var contexts=Object(CustomHooks["b" /* GetStateFromData */])(props.containerId);var _contexts$contexts=contexts.contexts,updateJson=_contexts$contexts.updateJson,changeSectionLayout=_contexts$contexts.changeSectionLayout,formState2=_contexts$contexts.formState2,deleteControl=_contexts$contexts.deleteControl,setQuickToolsClose=_contexts$contexts.setQuickToolsClose,customControlIdList=_contexts$contexts.customControlIdList,setCustomControlIdList=_contexts$contexts.setCustomControlIdList,showAlertConfirmNotifications=_contexts$contexts.showAlertConfirmNotifications;var updatedComponentInFormState=updateJson.updatedComponentInFormState,removeAndUpdateComponentInFormState=updateJson.removeAndUpdateComponentInFormState;var _useState=Object(react["useState"])({open:false,showConfirm:"showNotification"}),_useState2=Object(slicedToArray["a" /* default */])(_useState,2),alertData=_useState2[0],setAlertData=_useState2[1];var _useState3=Object(react["useState"])(false),_useState4=Object(slicedToArray["a" /* default */])(_useState3,2),errorMessageId=_useState4[0],setErrorMessageId=_useState4[1];var _useTranslation=Object(useTranslation["a" /* useTranslation */])(['styles','translation']),t=_useTranslation.t;var src=props.selectedControl.style["SourceURL"];if(props.selectedControl.style["Label"]===undefined){props.selectedControl.style["SourceURL"]=src;props.selectedControl.style["Label"]=props.selectedControl.id;}var CollapsibleItems=[];Object.keys(Properties_IFrameJson).forEach(function(key,index){var collapseComponentBody=[];Object.keys(Properties_IFrameJson[key]).forEach(function(property){collapseComponentBody.push(prepareHtmlTag(property,PropertiesConfiguration["a" /* default */][property].type));});CollapsibleItems.push(/*#__PURE__*/Object(jsx_runtime["jsx"])(CollapseCard["a" /* default */],{id:index+"",heading:key,body:collapseComponentBody}));});function selectedOptionForLabel(selectedControlId,selectedControlLabel,ControlLabelKey){var select=document.getElementById(selectedControlId+ControlLabelKey);var option_tag=select.options[select.selectedIndex];var temp_style=props.selectedControl.style;temp_style[ControlLabelKey]=option_tag.value;props.selectedControl.style[ControlLabelKey]=option_tag.value;updatedComponentInFormState(props.selectedControl.id,props.selectedControl);}var _updateEventData=function updateEventData(eventJson){var count=Object.keys(eventJson).length;if(count>0){var Events={};Events["Events"]=eventJson;props.selectedControl["event"]=Events;}updatedComponentInFormState(props.selectedControl.id,props.selectedControl);};function handleProperty(propertyName,propertyValue,event){if(propertyName==="CustomId"){if(propertyValue!==props.selectedControl.style.CustomId){var element=event.target;var jsonToSend={customControlId:propertyValue,controlid:props.selectedControl.id};Object(RequestLogic["Q" /* validateCustomControlId */])(jsonToSend).then(function(response){if(response&&response.data&&response.data.status==="0"){var updatedJson=Object(UserIdLogic["b" /* updateUserId */])(props.selectedControl,// whole control Json
propertyValue//newly defined id
);if(updatedJson){updatedComponentInFormState(props.selectedControl.id,updatedJson);}}else if(response&&response.data&&response.data.status==="-1"){showAlertConfirmNotifications({'open':true,'showConfirm':'showNotification','alertType':'error','alertContentKey':"CustomControl Id already Exist"});element.value=props.selectedControl.style.CustomId||'';}}).catch(function(error){// handle error
element.value=props.selectedControl.style.CustomId||'';console.log("Server side error "+error);});}}else if(propertyName==="SourceURL"){// props.selectedControl["SurveyName"] = propertyValue;
if(props.selectedControl.controlName==="Survey"){props.selectedControl["SurveyURL"]=propertyValue;}if(props.selectedControl.controlName==="iframe"){if(/(https:\/\/www\.|http:\/\/www\.|https:\/\/|http:\/\/)?[a-zA-Z]{2,}(\.[a-zA-Z]{2,})(\.[a-zA-Z]{2,})?\/[a-zA-Z0-9]{2,}|((https:\/\/www\.|http:\/\/www\.|https:\/\/|http:\/\/)?[a-zA-Z]{2,}(\.[a-zA-Z]{2,})(\.[a-zA-Z]{2,})?)|(https:\/\/www\.|http:\/\/www\.|https:\/\/|http:\/\/)?[a-zA-Z0-9]{2,}\.[a-zA-Z0-9]{2,}\.[a-zA-Z0-9]{2,}(\.[a-zA-Z0-9]{2,})?/g.test(propertyValue)){props.selectedControl.style["SourceURL"]=propertyValue;}else if(propertyValue===""||propertyValue===null){props.selectedControl.style["SourceURL"]=propertyValue;}else{setAlertData({open:true,showConfirm:"showNotification",alertType:"error",alertContentMsg:"URL is invalid, Please enter the correct URL",autoHideDuration:4000});}}updatedComponentInFormState(props.selectedControl.id,Object(objectSpread2["a" /* default */])({},props.selectedControl));}else{var temp_style=props.selectedControl.style;temp_style[propertyName]=propertyValue;props.selectedControl.style[propertyName]=propertyValue;updatedComponentInFormState(props.selectedControl.id,props.selectedControl);}}function handleToggle(e,field){var value=e.target.value;props.selectedControl.style[field]=value+"";if(field==="Enable"){props.selectedControl.style["previousEnable"]=value;}if(field==="ReadOnlyStyle"){props.selectedControl.style["previousReadOnly"]=value;}if(field==="ReadOnly"){props.selectedControl.style["previousReadOnlyValue"]=value;}updatedComponentInFormState(props.selectedControl.id,props.selectedControl);}function validateRegex(propertyName,propertyValue,event,inputBoxId){try{var passValue=event===null||event===void 0?void 0:event.key;if(propertyName==="CustomId"){if(event.target.selectionEnd===event.target.selectionStart){passValue=[propertyValue.slice(0,event.target.selectionEnd)+event.key+propertyValue.slice(event.target.selectionEnd)].join("");}else{var stringArray=propertyValue.split("");stringArray.splice(event.target.selectionStart,event.target.selectionEnd-event.target.selectionStart);stringArray.splice.apply(stringArray,[event.target.selectionStart,0].concat(Object(toConsumableArray["a" /* default */])(event===null||event===void 0?void 0:event.key.split(""))));passValue=stringArray.join("");}}if(event&&event.which!==8&&event.which!==46&&event.code!=="Tab"&&!Object(globalFunctions["l" /* regexValidator */])(passValue,PropertiesConfiguration["a" /* default */][propertyName]["regexType"])){event.preventDefault();setAlertData(Object(objectSpread2["a" /* default */])(Object(objectSpread2["a" /* default */])({},PropertiesConfiguration["a" /* default */]["customizedAlertNotificationData"]),{},{open:true,alertContentKey:"RegexErrorMessage"}));}else{setAlertData({showConfirm:"showNotification",open:false});setErrorMessageId(false);}}catch(e){console.log("Error while validating regex");}}function prepareHtmlTag(key,type){var _props$selectedContro,_props$selectedContro2,_props$selectedContro3,_props$selectedContro4,_props$selectedContro5,_window3,_window3$appformBuild;switch(type.toLowerCase()){case"text":return/*#__PURE__*/Object(jsx_runtime["jsxs"])("div",{className:BasicControls_module_default.a.parentDiv,style:translationStyles1?{display:"flex"}:null,children:[/*#__PURE__*/Object(jsx_runtime["jsx"])("span",{className:BasicControls_module_default.a.leftLabel,children:t("translation:".concat(PropertiesConfiguration["a" /* default */][key].label))}),/*#__PURE__*/Object(jsx_runtime["jsxs"])("div",{className:BasicControls_module_default.a.RightTextBox,children:[/*#__PURE__*/Object(jsx_runtime["jsx"])("input",{type:"text","aria-label":"Control Value1",defaultValue:props.selectedControl.style[key],className:BasicControls_module_default.a.RightLabelTextBox,onKeyPress:function onKeyPress(event){return validateRegex(key,event.target.value,event,props.selectedControl.id+key);},onKeyUp:function onKeyUp(event){return validateRegex(key,event.target.value,event,props.selectedControl.id+key);},onBlur:function onBlur(event){return handleProperty(key,event.target.value,event);}},props.selectedControl.id),key!=="CustomId"?/*#__PURE__*/Object(jsx_runtime["jsx"])("div",{className:translationStyles1?BasicControls_module_default.a.RightTextboxPlaceholderArabic:BasicControls_module_default.a.RightTextboxPlaceholder,children:"px"}):null]})]});case"text_top_bottom":return/*#__PURE__*/Object(jsx_runtime["jsxs"])(Form["a" /* default */].Group,{className:BasicControls_module_default.a.parentDivTopBottom,children:[/*#__PURE__*/Object(jsx_runtime["jsx"])("div",{children:/*#__PURE__*/Object(jsx_runtime["jsx"])("span",{className:BasicControls_module_default.a.topBottomLabel,children:t("translation:".concat(PropertiesConfiguration["a" /* default */][key].label))})}),/*#__PURE__*/Object(jsx_runtime["jsx"])("div",{children:/*#__PURE__*/Object(jsx_runtime["jsx"])("input",{type:"text","aria-label":"Control Value2",defaultValue:props.selectedControl.style[key],className:BasicControls_module_default.a.fullWidthTextBox,onKeyPress:function onKeyPress(event){return validateRegex(key,event.target.value,event,props.selectedControl.id+key);},onBlur:function onBlur(event){return handleProperty(key,event.target.value,event);}},props.selectedControl.id)})]});case"toggle":return/*#__PURE__*/Object(jsx_runtime["jsxs"])("div",{className:BasicControls_module_default.a.parentDiv,style:translationStyles1?{display:"flex"}:null,children:[/*#__PURE__*/Object(jsx_runtime["jsx"])("span",{className:BasicControls_module_default.a.leftLabel,children:t("translation:".concat(PropertiesConfiguration["a" /* default */][key].label))}),/*#__PURE__*/Object(jsx_runtime["jsx"])("div",{className:translationStyles1?BasicControls_module_default.a.toggleCheckboxArabic:BasicControls_module_default.a.toggleCheckbox,children:/*#__PURE__*/Object(jsx_runtime["jsx"])(ToggleBtn["a" /* default */],{id:props!==null&&props!==void 0&&(_props$selectedContro=props.selectedControl)!==null&&_props$selectedContro!==void 0&&(_props$selectedContro2=_props$selectedContro.style)!==null&&_props$selectedContro2!==void 0&&_props$selectedContro2.CustomId?props===null||props===void 0?void 0:(_props$selectedContro3=props.selectedControl)===null||_props$selectedContro3===void 0?void 0:(_props$selectedContro4=_props$selectedContro3.style)===null||_props$selectedContro4===void 0?void 0:_props$selectedContro4.CustomId:props===null||props===void 0?void 0:(_props$selectedContro5=props.selectedControl)===null||_props$selectedContro5===void 0?void 0:_props$selectedContro5.id,toggleState:props.selectedControl.style[key],handleToggle:handleToggle,field:key},props.selectedControl.id+props.selectedControl.style[key])})]});case"combo":return/*#__PURE__*/Object(jsx_runtime["jsx"])(jsx_runtime["Fragment"],{children:/*#__PURE__*/Object(jsx_runtime["jsxs"])("div",{className:BasicControls_module_default.a.parentDiv,style:translationStyles1?{display:"flex"}:null,children:[/*#__PURE__*/Object(jsx_runtime["jsx"])("span",{className:BasicControls_module_default.a.leftLabel,children:t("translation:".concat(PropertiesConfiguration["a" /* default */][key].label))}),/*#__PURE__*/Object(jsx_runtime["jsx"])("div",{className:BasicControls_module_default.a.RightLabelSelectForText,children:/*#__PURE__*/Object(jsx_runtime["jsx"])("select",{id:props.selectedControl.id+key,className:BasicControls_module_default.a.RightLabelSelectForText,onChange:function onChange(){return selectedOptionForLabel(props.selectedControl.id,PropertiesConfiguration["a" /* default */][key].label,key);},children:PropertiesConfiguration["a" /* default */][key].children.map(function(optionTagData,optionCount){if(PropertiesConfiguration["a" /* default */][key].children[optionCount].Value||PropertiesConfiguration["a" /* default */][key].children[optionCount].Value===""||PropertiesConfiguration["a" /* default */][key].children[optionCount].Value==="Select"){var _ControlsMap$key$chil,_ControlsMap$key$chil2;return/*#__PURE__*/Object(jsx_runtime["jsx"])(jsx_runtime["Fragment"],{children:PropertiesConfiguration["a" /* default */][key].children[optionCount].Value===props.selectedControl.style[key]?/*#__PURE__*/Object(jsx_runtime["jsx"])("option",{style:(_ControlsMap$key$chil=PropertiesConfiguration["a" /* default */][key].children[optionCount])===null||_ControlsMap$key$chil===void 0?void 0:_ControlsMap$key$chil.style,value:PropertiesConfiguration["a" /* default */][key].children[optionCount].Value,selected:true,children:t("translation:".concat(PropertiesConfiguration["a" /* default */][key].children[optionCount].Title))}):/*#__PURE__*/Object(jsx_runtime["jsx"])("option",{style:(_ControlsMap$key$chil2=PropertiesConfiguration["a" /* default */][key].children[optionCount])===null||_ControlsMap$key$chil2===void 0?void 0:_ControlsMap$key$chil2.style,value:PropertiesConfiguration["a" /* default */][key].children[optionCount].Value,children:t("translation:".concat(PropertiesConfiguration["a" /* default */][key].children[optionCount].Title))})});}})},props.selectedControl.id)})]})});case"textareaurl":return/*#__PURE__*/Object(jsx_runtime["jsxs"])("div",{children:[/*#__PURE__*/Object(jsx_runtime["jsx"])("div",{className:BasicControls_module_default.a.leftLabelForTextBox,children:/*#__PURE__*/Object(jsx_runtime["jsx"])("p",{children:t("translation:".concat(PropertiesConfiguration["a" /* default */][key].label))})}),/*#__PURE__*/Object(jsx_runtime["jsx"])("div",{children:/*#__PURE__*/Object(jsx_runtime["jsx"])("textarea",{"aria-label":props.selectedControl.style[key],className:BasicControls_module_default.a.checkBoxLayoutStyletextAreaURL,defaultValue:props.selectedControl.controlName==="Survey"?props.selectedControl.SurveyURL:props.selectedControl.style[key],onBlur:function onBlur(event){return handleProperty(key,event.target.value);}},props.selectedControl.id)})]});case"textbox":return/*#__PURE__*/Object(jsx_runtime["jsxs"])("div",{children:[/*#__PURE__*/Object(jsx_runtime["jsxs"])("div",{className:BasicControls_module_default.a.leftLabelForTextBox,children:[/*#__PURE__*/Object(jsx_runtime["jsxs"])("div",{className:BasicControls_module_default.a.labelForLabel,children:[t("translation:".concat(PropertiesConfiguration["a" /* default */][key].label))," "]}),/*#__PURE__*/Object(jsx_runtime["jsx"])("input",{type:"text","aria-label":"Control Value3",defaultValue:props.selectedControl.style[key],maxLength:(_window3=window)===null||_window3===void 0?void 0:(_window3$appformBuild=_window3.appformBuilder_configs)===null||_window3$appformBuild===void 0?void 0:_window3$appformBuild.label_max_length,id:props.selectedControl.id+key,className:[BasicControls_module_default.a.textBoxLayoutForLable,errorMessageId===props.selectedControl.id+key?BasicControls_module_default.a.inputBoxErrorStyle:null].join(" "),onKeyPress:function onKeyPress(event){return validateRegex(key,event.target.value,event,props.selectedControl.id+key);},onKeyUp:function onKeyUp(event){return validateRegex(key,event.target.value,event,props.selectedControl.id+key);},onBlur:function onBlur(event){return handleProperty(key,event.target.value,event);}},props.selectedControl.id+props.selectedControl.style[key])]}),errorMessageId===props.selectedControl.id+key?/*#__PURE__*/Object(jsx_runtime["jsx"])(ErrorMessageComponent["a" /* default */],{errorMessage:"non-permissible value"}):null]});case"textarea":return/*#__PURE__*/Object(jsx_runtime["jsxs"])("div",{children:[/*#__PURE__*/Object(jsx_runtime["jsx"])("div",{className:BasicControls_module_default.a.leftLabelForTextBox,children:/*#__PURE__*/Object(jsx_runtime["jsx"])("p",{children:t("translation:".concat(PropertiesConfiguration["a" /* default */][key].label))})}),/*#__PURE__*/Object(jsx_runtime["jsx"])("div",{children:/*#__PURE__*/Object(jsx_runtime["jsx"])("textarea",{"aria-label":props.selectedControl.style[key],className:BasicControls_module_default.a.checkBoxLayoutStyletextArea,defaultValue:props.selectedControl.style[key],onBlur:function onBlur(event){return handleProperty(key,event.target.value);}},props.selectedControl.id)})]});case"eventbutton":return/*#__PURE__*/Object(jsx_runtime["jsx"])(Events["a" /* default */],{json:EventList["a" /* EventListjson */],value:props.selectedControl.event,elemtype:props.selectedControl.elem_type,updateEventData:function updateEventData(eventJson){return _updateEventData(eventJson);}},props.selectedControl.id+"_eventsProperty");default:return null;}}return/*#__PURE__*/Object(jsx_runtime["jsxs"])(jsx_runtime["Fragment"],{children:[/*#__PURE__*/Object(jsx_runtime["jsx"])(ControlLabel["a" /* default */],{label:props.selectedControl["controlName"]==="Survey"?"Survey":"Iframe",handleDelete:deleteControl,id:props.selectedControl.id,customId:props===null||props===void 0?void 0:(_props$selectedContro6=props.selectedControl)===null||_props$selectedContro6===void 0?void 0:(_props$selectedContro7=_props$selectedContro6.style)===null||_props$selectedContro7===void 0?void 0:_props$selectedContro7.CustomId}),/*#__PURE__*/Object(jsx_runtime["jsx"])("div",{className:"propertiesBody",children:/*#__PURE__*/Object(jsx_runtime["jsx"])(Card["a" /* default */].Body,{className:BasicControls_module_default.a.cardBodySheetProperties,children:CollapsibleItems.map(function(item,index){return item;})})}),alertData.open===true&&/*#__PURE__*/Object(jsx_runtime["jsx"])(CustomizedAlert["a" /* default */],{alertData:alertData})]});};/* harmony default export */ var IFormDesignerComponents_IFrameProperties_IFrameProperties = __webpack_exports__["default"] = (IFrameProperties_IFrameProperties);

/***/ })

}]);
//# sourceMappingURL=IFrameProperties.59d727a6c4dddc9ecd79.js.map