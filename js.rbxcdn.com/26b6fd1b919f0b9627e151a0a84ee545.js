;// bundle: page___ad13ef2fdd0598c14f627930c26be902_m
;// files: GenericConfirmation.js, utilities/dialog.js, common/deviceMeta.js

;// GenericConfirmation.js
if(typeof Roblox==="undefined"){Roblox={};}
if(typeof Roblox.GenericConfirmation==="undefined"){Roblox.GenericConfirmation=function(){var BUTTON_CLASS_GREEN="btn-primary";var BUTTON_CLASS_BLUE="btn-neutral";var BUTTON_CLASS_GRAY="btn-negative";var BUTTON_CLASS_GREEN_DISABLED="btn-disabled-primary";var BUTTON_CLASS_BLUE_DISABLED="btn-disabled-neutral";var BUTTON_CLASS_GRAY_DISABLED="btn-disabled-negative";var BUTTON_CLASS_NONE="btn-none";var BUTTON_SELECTOR_YES="#roblox-confirm-btn";var BUTTON_SELECTOR_NO="#roblox-decline-btn";var status={isOpen:false};function onCloseCallback(){status.isOpen=false;close();}
var modalProperties={overlayClose:true,escClose:true,opacity:80,overlayCss:{backgroundColor:"#000"},onClose:onCloseCallback};function open(properties){status.isOpen=true;var defaults={titleText:"",bodyContent:"",footerText:"",acceptText:Roblox.Resources.GenericConfirmation.yes,declineText:Roblox.Resources.GenericConfirmation.No,acceptColor:BUTTON_CLASS_BLUE,declineColor:BUTTON_CLASS_GRAY,xToCancel:false,onAccept:function(){return false;},onDecline:function(){return false;},onCancel:function(){return false;},imageUrl:null,allowHtmlContentInBody:false,allowHtmlContentInFooter:false,dismissable:true,fieldValidationRequired:false,onOpenCallback:function(){}};properties=$.extend({},defaults,properties);modalProperties.overlayClose=properties.dismissable;modalProperties.escClose=properties.dismissable;var yesBtn=$(BUTTON_SELECTOR_YES);yesBtn.html(properties.acceptText);yesBtn.attr("class","btn-large "+properties.acceptColor);yesBtn.unbind();yesBtn.bind('click',function(){if(_buttonIsDisabled(yesBtn))
{return false;}
if(properties.fieldValidationRequired){btnClickCallbackFirst(properties.onAccept);}else{btnClick(properties.onAccept);}
return false;});var noBtn=$(BUTTON_SELECTOR_NO);noBtn.html(properties.declineText);noBtn.attr("class","btn-large "+properties.declineColor);noBtn.unbind();noBtn.bind('click',function(){if(_buttonIsDisabled(noBtn))
{return false;}
btnClick(properties.onDecline);return false;});$('[data-modal-handle="confirmation"] div.Title').text(properties.titleText);var modal=$("[data-modal-handle='confirmation']");if(properties.imageUrl==null){modal.addClass('noImage');}else{modal.find('img.GenericModalImage').attr('src',properties.imageUrl);modal.removeClass('noImage');}
if(properties.allowHtmlContentInBody)
$("[data-modal-handle='confirmation'] div.Message").html(properties.bodyContent);else
$("[data-modal-handle='confirmation'] div.Message").text(properties.bodyContent);if($.trim(properties.footerText)==""){$('[data-modal-handle="confirmation"] div.ConfirmationModalFooter').hide();}
else{$('[data-modal-handle="confirmation"] div.ConfirmationModalFooter').show();}
if(properties.allowHtmlContentInFooter)
$('[data-modal-handle="confirmation"] div.ConfirmationModalFooter').html(properties.footerText);else
$('[data-modal-handle="confirmation"] div.ConfirmationModalFooter').text(properties.footerText);$("[data-modal-handle='confirmation']").modal(modalProperties);var cancelBtn=$("a.genericmodal-close");cancelBtn.unbind();cancelBtn.bind('click',function(){btnClick(properties.onCancel);return false;});if(!properties.xToCancel){cancelBtn.hide();}
properties.onOpenCallback();}
function _disableButton(btn){if(btn.hasClass(BUTTON_CLASS_GRAY)){btn.addClass(BUTTON_CLASS_GRAY_DISABLED);}else if(btn.hasClass(BUTTON_CLASS_GREEN)){btn.addClass(BUTTON_CLASS_GREEN_DISABLED);}else if(btn.hasClass(BUTTON_CLASS_BLUE)){btn.addClass(BUTTON_CLASS_BLUE_DISABLED);}}
function _buttonIsDisabled(btn){if(btn.hasClass(BUTTON_CLASS_BLUE_DISABLED)||btn.hasClass(BUTTON_CLASS_GRAY_DISABLED)||btn.hasClass(BUTTON_CLASS_GREEN_DISABLED)){return true;}
return false;}
function disableButtons(){var yesBtn=$(BUTTON_SELECTOR_YES);var noBtn=$(BUTTON_SELECTOR_NO);_disableButton(yesBtn);_disableButton(noBtn);}
function enableButtons(){var yesBtn=$(BUTTON_SELECTOR_YES);var noBtn=$(BUTTON_SELECTOR_NO);var classesToRemove=BUTTON_CLASS_BLUE_DISABLED+" "+BUTTON_CLASS_GRAY_DISABLED+" "+BUTTON_CLASS_GREEN_DISABLED;yesBtn.removeClass(classesToRemove);noBtn.removeClass(classesToRemove);}
function clickYes(){if(status.isOpen){var yesBtn=$(BUTTON_SELECTOR_YES);yesBtn.click();}}
function clickNo(){var noBtn=$(BUTTON_SELECTOR_NO);noBtn.click();}
function close(id){status.isOpen=false;if(typeof id!=='undefined'){$.modal.close(id);}else{$.modal.close();}}
function btnClick(callBack){close();if(typeof callBack==='function'){callBack();}}
function btnClickCallbackFirst(callBack){if(typeof callBack==='function'){var returnVal=callBack();if(returnVal!=='undefined'){if(returnVal==false){return false;}}}
close();};return{open:open,close:close,disableButtons:disableButtons,enableButtons:enableButtons,clickYes:clickYes,clickNo:clickNo,status:status,green:BUTTON_CLASS_GREEN,blue:BUTTON_CLASS_BLUE,gray:BUTTON_CLASS_GRAY,none:BUTTON_CLASS_NONE};}();}
$(document).keypress(function(e){if(Roblox.GenericConfirmation.status.isOpen&&e.which===13){Roblox.GenericConfirmation.clickYes();}});

;// utilities/dialog.js
if(typeof Roblox==="undefined"){Roblox={};}
if(typeof Roblox.Dialog==="undefined"){Roblox.Dialog=function(){var CONTAINER_SELECTOR=".simplemodal-container";var BUTTON_CLASS_GREEN="btn-primary-md";var BUTTON_CLASS_BLUE="btn-secondary-md";var BUTTON_CLASS_WHITE="btn-control-md";var BUTTON_CLASS_GREEN_DISABLED="btn-primary-md disabled";var BUTTON_CLASS_BLUE_DISABLED="btn-secondary-md disabled";var BUTTON_CLASS_WHITE_DISABLED="btn-control-md disabled";var BUTTON_CLASS_NONE="btn-none";var BUTTON_SELECTOR_YES=".modal-btns #confirm-btn";var BUTTON_SELECTOR_NO=".modal-btns #decline-btn";var MODAL_CHECKBOX_SELECTOR="#modal-checkbox-input";var status={isOpen:false};var modalProperties={overlayClose:true,escClose:true,opacity:80,zIndex:1040,overlayCss:{backgroundColor:"#000"},onClose:close,focus:false};var dialogDefaults={Yes:"Yes",No:"No",Agree:"Agree"};function open(properties){status.isOpen=true;var defaults={titleText:"",bodyContent:"",footerText:"",footerMiddleAligned:false,acceptText:Roblox.Lang.ControlsResources["Action.Yes"]||dialogDefaults.Yes,declineText:Roblox.Lang.ControlsResources["Action.No"]||dialogDefaults.No,acceptColor:BUTTON_CLASS_BLUE,declineColor:BUTTON_CLASS_WHITE,xToCancel:false,onAccept:function(){return false;},onDecline:function(){return false;},onCancel:function(){return false;},imageUrl:null,showAccept:true,showDecline:true,allowHtmlContentInBody:false,allowHtmlContentInFooter:false,dismissable:true,fieldValidationRequired:false,onOpenCallback:function(){},onCloseCallback:close,cssClass:null,checkboxAgreementText:Roblox.Lang.ControlsResources["Action.Agree"]||dialogDefaults.Agree,checkboxAgreementRequired:false};properties=$.extend({},defaults,properties);modalProperties.overlayClose=properties.dismissable;modalProperties.escClose=properties.dismissable;if(properties.onCloseCallback){modalProperties.onClose=function(){properties.onCloseCallback();close();}}
var yesBtn=$(BUTTON_SELECTOR_YES);yesBtn.html(properties.acceptText);yesBtn.attr("class",properties.acceptColor);yesBtn.unbind();yesBtn.bind('click',function(){if(_buttonIsDisabled(yesBtn)){return false;}
if(properties.fieldValidationRequired){btnClickCallbackFirst(properties.onAccept);}else{btnClick(properties.onAccept);}
return false;});var noBtn=$(BUTTON_SELECTOR_NO);noBtn.html(properties.declineText);noBtn.attr("class",properties.declineColor);noBtn.unbind();noBtn.bind('click',function(){if(_buttonIsDisabled(noBtn)){return false;}
btnClick(properties.onDecline);return false;});var checkbox=$(MODAL_CHECKBOX_SELECTOR);checkbox.unbind();checkbox.bind("change",function(){if(checkbox.is(":checked")){_enableButton(yesBtn);}else{_disableButton(yesBtn);}});var modal=$('[data-modal-type="confirmation"]');modal.find(".modal-title").text(properties.titleText);if(properties.imageUrl==null){modal.addClass('noImage');}else{modal.find('img.modal-thumb').attr('src',properties.imageUrl);modal.removeClass('noImage');}
if(status.extraClass){modal.removeClass(status.extraClass);status.extraClass=false;}
if(properties.cssClass!=null){modal.addClass(properties.cssClass);status.extraClass=properties.cssClass;}
if(properties.allowHtmlContentInBody){modal.find(".modal-message").html(properties.bodyContent);}else{modal.find(".modal-message").text(properties.bodyContent);}
if(properties.checkboxAgreementRequired){_disableButton(yesBtn);modal.find(".modal-checkbox.checkbox > input").prop("checked",false);modal.find(".modal-checkbox.checkbox > label").text(properties.checkboxAgreementText);modal.find(".modal-checkbox.checkbox").show();}else{modal.find(".modal-checkbox.checkbox > input").prop("checked",true);modal.find(".modal-checkbox.checkbox").hide();}
if($.trim(properties.footerText)==""){modal.find(".modal-footer").hide();}else{modal.find(".modal-footer").show();}
if(properties.allowHtmlContentInFooter){modal.find(".modal-footer").html(properties.footerText);}else{modal.find(".modal-footer").text(properties.footerText);}
if(properties.footerMiddleAligned){modal.find(".modal-footer").addClass("modal-footer-center");}
modal.modal(modalProperties);var cancelBtn=$(CONTAINER_SELECTOR+" .modal-header .close");cancelBtn.unbind();cancelBtn.bind('click',function(){btnClick(properties.onCancel);return false;});if(!properties.xToCancel){cancelBtn.hide();}
if(!properties.showAccept){yesBtn.hide();}
if(!properties.showDecline){noBtn.hide();}
$("#rbx-body").addClass("modal-mask");properties.onOpenCallback();}
function _disableButton(btn){if(btn.hasClass(BUTTON_CLASS_WHITE)){btn.addClass(BUTTON_CLASS_WHITE_DISABLED);}else if(btn.hasClass(BUTTON_CLASS_GREEN)){btn.addClass(BUTTON_CLASS_GREEN_DISABLED);}else if(btn.hasClass(BUTTON_CLASS_BLUE)){btn.addClass(BUTTON_CLASS_BLUE_DISABLED);}}
function _buttonIsDisabled(btn){if(btn.hasClass(BUTTON_CLASS_BLUE_DISABLED)||btn.hasClass(BUTTON_CLASS_WHITE_DISABLED)||btn.hasClass(BUTTON_CLASS_GREEN_DISABLED)){return true;}
return false;}
function disableButtons(){var yesBtn=$(BUTTON_SELECTOR_YES);var noBtn=$(BUTTON_SELECTOR_NO);_disableButton(yesBtn);_disableButton(noBtn);}
function _enableButton(btn){if(btn.hasClass(BUTTON_CLASS_WHITE_DISABLED)){btn.removeClass(BUTTON_CLASS_WHITE_DISABLED);btn.addClass(BUTTON_CLASS_WHITE);}else if(btn.hasClass(BUTTON_CLASS_GREEN_DISABLED)){btn.removeClass(BUTTON_CLASS_GREEN_DISABLED);btn.addClass(BUTTON_CLASS_GREEN);}else if(btn.hasClass(BUTTON_CLASS_BLUE_DISABLED)){btn.removeClass(BUTTON_CLASS_BLUE_DISABLED);btn.addClass(BUTTON_CLASS_BLUE);}}
function enableButtons(){var yesBtn=$(BUTTON_SELECTOR_YES);var noBtn=$(BUTTON_SELECTOR_NO);_enableButton(yesBtn);_enableButton(noBtn);}
function clickYes(){if(status.isOpen){var yesBtn=$(BUTTON_SELECTOR_YES);yesBtn.click();}}
function clickNo(){var noBtn=$(BUTTON_SELECTOR_NO);noBtn.click();}
function close(id){status.isOpen=false;if(typeof id!=='undefined'){$.modal.close(id);}else{$.modal.close();}
$("#rbx-body").removeClass("modal-mask");}
function btnClick(callBack){close();if(typeof callBack==='function'){callBack();}}
function btnClickCallbackFirst(callBack){if(typeof callBack==='function'){var returnVal=callBack();if(returnVal!=='undefined'){if(returnVal==false){return false;}}}
close();}
function toggleProcessing(isShown,closeClass){var modal=$(".modal-body");if(isShown){modal.find(".modal-btns").hide();modal.find(".modal-processing").show();}else{modal.find(".modal-btns").show();modal.find(".modal-processing").hide();}
if(typeof closeClass!=="undefined"&&closeClass!==""){$.modal.close("."+closeClass);}}
return{open:open,close:close,disableButtons:disableButtons,enableButtons:enableButtons,clickYes:clickYes,clickNo:clickNo,status:status,toggleProcessing:toggleProcessing,green:BUTTON_CLASS_GREEN,blue:BUTTON_CLASS_BLUE,white:BUTTON_CLASS_WHITE,none:BUTTON_CLASS_NONE};}();}
$(document).keypress(function(e){if(Roblox.Dialog.isOpen&&e.which===13){Roblox.Dialog.clickYes();}});

;// common/deviceMeta.js
var Roblox=Roblox||{};Roblox.DeviceMeta=(function(){var metaTag=document.querySelector('meta[name="device-meta"]');if(metaTag===null){console.debug("Error loading device information from meta tag - please check if meta tag is present");return;}
var keyMap=metaTag.dataset||{};var appTypes={android:"android",ios:"ios",xbox:"xbox",uwp:"uwp",amazon:"amazon",win32:"win32",universalapp:"universalApp",unknown:"unknown"};var deviceTypes={computer:"computer",tablet:"tablet",phone:"phone",console:"console"};return function(){return{deviceType:deviceTypes[keyMap.deviceType]||'',appType:appTypes[keyMap.appType]||'',isInApp:keyMap.isInApp==='true',isDesktop:keyMap.isDesktop==='true',isPhone:keyMap.isPhone==='true',isTablet:keyMap.isTablet==='true',isConsole:keyMap.isConsole==='true',isAndroidApp:keyMap.isAndroidApp==='true',isIosApp:keyMap.isIosApp==='true',isUWPApp:keyMap.isUwpApp==='true',isXboxApp:keyMap.isXboxApp==='true',isAmazonApp:keyMap.isAmazonApp==='true',isWin32App:keyMap.isWin32App==='true',isStudio:keyMap.isStudio==='true',isIosDevice:keyMap.isIosDevice==='true',isAndroidDevice:keyMap.isAndroidDevice==='true',isUniversalApp:keyMap.isUniversalApp==='true',isChromeOs:keyMap.isChromeOs==='true',}};})();

;//Bundle detector
Roblox && Roblox.BundleDetector && Roblox.BundleDetector.bundleDetected('page');