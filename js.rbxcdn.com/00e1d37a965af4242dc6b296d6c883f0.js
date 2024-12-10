;// bundle: clientinstaller___17f61b6b9da41058675bcdf1b7c0b606_m
;// files: Events/ET.js, ClientInstaller.js, InstallationInstructions.js

;// Events/ET.js
EventTracker=new function(){var self=this;self.logMetrics=false;self.transmitMetrics=true;self.localEventLog=[];var eventStore=new function(){var events={};this.get=function(name){return events[name];};this.set=function(name,time){events[name]=time;};this.remove=function(name){delete events[name];};};var timestamp=function(){return new Date().valueOf();};var endEachEvent=function(eventNames,reason){var now=timestamp();$.each(eventNames,function(idx,name){end(name,reason,now);});};var end=function(name,reason,time){var evt=eventStore.get(name);if(evt){eventStore.remove(name);var duration=time-evt;if(self.logMetrics){console.log('[event]',name,reason,duration);}
if(self.transmitMetrics){var statName=name+"_"+reason;$.ajax({type:"POST",timeout:50000,url:"/game/report-stats?name="+statName+"&value="+duration,crossDomain:true,xhrFields:{withCredentials:true}});}}else{if(self.logMetrics){console.log('[event]','ERROR: event not started -',name,reason);}}};self.start=function(){var now=timestamp();$.each(arguments,function(idx,name){eventStore.set(name,now);});};self.endSuccess=function(){endEachEvent(arguments,'Success');};self.endCancel=function(){endEachEvent(arguments,'Cancel');};self.endFailure=function(){endEachEvent(arguments,'Failure');};self.fireEvent=function(){$.each(arguments,function(idx,name){$.ajax({type:"POST",timeout:50000,url:"/game/report-event?name="+name,crossDomain:true,xhrFields:{withCredentials:true}});if(self.logMetrics){console.log('[event]',name);}
self.localEventLog.push(name);});};}

;// ClientInstaller.js
if(typeof Roblox==="undefined"){Roblox={};}
Roblox.Client={};Roblox.Client._installHost=null;Roblox.Client._installSuccess=null;Roblox.Client._CLSID=null;Roblox.Client._continuation=null;Roblox.Client._skip=null;Roblox.Client._isIDE=null;Roblox.Client._isRobloxBrowser=null;Roblox.Client._isPlaceLaunch=false;Roblox.Client._silentModeEnabled=false;Roblox.Client._bringAppToFrontEnabled=false;Roblox.Client._numLocks=0;Roblox.Client._logTiming=false;Roblox.Client._logStartTime=null;Roblox.Client._logEndTime=null;Roblox.Client._hiddenModeEnabled=false;Roblox.Client._runInstallABTest=function(){};Roblox.Client._currentPluginVersion="";Roblox.Client._whyIsRobloxLauncherNotCreated=null;Roblox.Client._eventStreamLoggingEnabled=false;Roblox.Client._launchMode="unknown";Roblox.Client.LauncherNotCreatedReasons={pluginNotInstalled:"pluginNotInstalled",pluginNotAllowed:"pluginNotAllowed",wrongInstallHost:"wrongInstallHost",wrongInstallHostAndPluginWasNotAllowed:"wrongInstallHostAndPluginWasNotAllowed",versionMismatch:"versionMismatch",unknownError:"unknownError"};Roblox.Client.ReleaseLauncher=function(o,removeLock,overrideLocks){if(removeLock)
Roblox.Client._numLocks--;if(overrideLocks||Roblox.Client._numLocks<=0){if(o!=null){document.getElementById('pluginObjDiv').innerHTML='';o=null;}
Roblox.Client._numLocks=0;}
if(Roblox.Client._logTiming){Roblox.Client._logEndTime=new Date();var ms=Roblox.Client._logEndTime.getTime()-Roblox.Client._logStartTime.getTime();}};Roblox.Client.IsUpToDateVersion=function(o){var serverVersion=Roblox.Client._currentPluginVersion;if(serverVersion==null||serverVersion==""){return true;}
try{var installedVersion=o.Get_Version();if(installedVersion=="-1"||installedVersion=="undefined"){return true;}}catch(ex){return false;}
if(serverVersion===installedVersion){return true;}
var installedVersionValues=$.map(installedVersion.split(","),function(val){return parseInt(val,10);});var serverVersionValues=$.map(serverVersion.split(","),function(val){return parseInt(val,10);});var versionStringLength=Math.min(serverVersionValues.length,installedVersionValues.length);for(var i=0;i<versionStringLength;i++){if(serverVersionValues[i]>installedVersionValues[i]){return false;}else if(serverVersionValues[i]<installedVersionValues[i]){return true;}}
if(installedVersionValues.length!==serverVersionValues.length){return false;}
return true;};Roblox.Client.GetInstallHost=function(o){if(Roblox.Client.IsIE())
{return o.InstallHost;}
else
{var val=o.Get_InstallHost();if(val.match(/roblox.com$/))
return val;else
return val.substring(0,val.length-1);}};Roblox.Client.IsIE=function(){try{return!!new ActiveXObject("htmlfile");}catch(e){return false;}};Roblox.Client.browserRequiresPluginActivation=function(){return/firefox/i.test(navigator.userAgent)||window.chrome||window.safari;};Roblox.Client.CreateLauncher=function(addLock){if(Roblox.Client._logTiming){Roblox.Client._logStartTime=new Date();}
if(addLock)
Roblox.Client._numLocks++;if(Roblox.Client._installHost==null||Roblox.Client._CLSID==null)
{if(typeof initClientProps=='function'){initClientProps();}}
var pluginObj=document.getElementById('robloxpluginobj');var pluginDiv=$('#pluginObjDiv');if(!pluginObj){Roblox.Client._hiddenModeEnabled=false;var pluginString;if(Roblox.Client.IsIE()){pluginString="<object classid=\"clsid:"+Roblox.Client._CLSID+"\"";pluginString+=" id=\"robloxpluginobj\" type=\"application/x-vnd-roblox-launcher\"";pluginString+=" codebase=\""+Roblox.Client._installHost+"\"><p>Failed to INIT Plugin</p></object>";$(pluginDiv).append(pluginString);}
else{pluginString="<object id=\"robloxpluginobj\" type=\"application/x-vnd-roblox-launcher\"><p>Please Install the plugin</p></object>";$(pluginDiv).append(pluginString);}
pluginObj=document.getElementById('robloxpluginobj');}
if(!pluginObj){Roblox.Client.ReleaseLauncher(pluginObj,addLock,false);Roblox.Client._whyIsRobloxLauncherNotCreated=Roblox.Client.LauncherNotCreatedReasons.unknownError;return null;}
if($("#robloxpluginobj p").is(":visible")){Roblox.Client.ReleaseLauncher(pluginObj,addLock,false);Roblox.Client._whyIsRobloxLauncherNotCreated=Roblox.Client.LauncherNotCreatedReasons.pluginNotInstalled;return null;}
try{pluginObj.Hello();}
catch(ex){var browserRequiresPluginActivation=Roblox.Client.browserRequiresPluginActivation();if(browserRequiresPluginActivation&&!$("#robloxpluginobj p").is(":visible")){Roblox.Client._whyIsRobloxLauncherNotCreated=Roblox.Client.LauncherNotCreatedReasons.pluginNotAllowed;}
else{Roblox.Client.ReleaseLauncher();Roblox.Client._whyIsRobloxLauncherNotCreated=Roblox.Client.LauncherNotCreatedReasons.unknownError;}
return null;}
try{var host=Roblox.Client.GetInstallHost(pluginObj);if(!host||host!=Roblox.Client._installHost)
throw new Error("wrong InstallHost: (plugins):  "+host+"  (servers):  "+Roblox.Client._installHost);}
catch(ex){switch(Roblox.Client._whyIsRobloxLauncherNotCreated){case Roblox.Client.LauncherNotCreatedReasons.pluginNotAllowed:Roblox.Client._whyIsRobloxLauncherNotCreated=Roblox.Client.LauncherNotCreatedReasons.wrongInstallHostAndPluginWasNotAllowed;break;case Roblox.Client.LauncherNotCreatedReasons.wrongInstallHostAndPluginWasNotAllowed:break;default:Roblox.Client._whyIsRobloxLauncherNotCreated=Roblox.Client.LauncherNotCreatedReasons.wrongInstallHost;}
Roblox.Client.ReleaseLauncher(pluginObj,addLock,false);return null;}
if(!Roblox.Client.IsUpToDateVersion(pluginObj)){Roblox.Client._whyIsRobloxLauncherNotCreated=Roblox.Client.LauncherNotCreatedReasons.versionMismatch;return null;}
return pluginObj;};Roblox.Client.whyIsRobloxLauncherNotCreated=function(){return Roblox.Client._whyIsRobloxLauncherNotCreated;};Roblox.Client.isIDE=function(){if(Roblox.Client._isIDE==null){Roblox.Client._isIDE=false;Roblox.Client._isRobloxBrowser=false;if(window.external){try{if(window.external.IsRobloxAppIDE!==undefined){Roblox.Client._isIDE=window.external.IsRobloxAppIDE;Roblox.Client._isRobloxBrowser=true;}}
catch(ex){}}}
return Roblox.Client._isIDE;};Roblox.Client.isRobloxBrowser=function(){Roblox.Client.isIDE();return Roblox.Client._isRobloxBrowser;};Roblox.Client.robloxBrowserInstallHost=function(){if(window.external){try{return window.external.InstallHost;}
catch(ex){}}
return"";};Roblox.Client.IsRobloxProxyInstalled=function(){var o=Roblox.Client.CreateLauncher(false);var isInstalled=false;if(o!=null){isInstalled=true;}
Roblox.Client.ReleaseLauncher(o,false,false);if(isInstalled||Roblox.Client.isRobloxBrowser())
return true;return false;};Roblox.Client.IsRobloxInstalled=function(){try{var o=Roblox.Client.CreateLauncher(false);var host=Roblox.Client.GetInstallHost(o);Roblox.Client.ReleaseLauncher(o,false,false);return host==Roblox.Client._installHost;}
catch(e){if(Roblox.Client.isRobloxBrowser()){host=Roblox.Client.robloxBrowserInstallHost();return host==Roblox.Client._installHost;}
return false;}};Roblox.Client.SetStartInHiddenMode=function(value){try{var o=Roblox.Client.CreateLauncher(false);if(o!==null){o.SetStartInHiddenMode(value);Roblox.Client._hiddenModeEnabled=value;return true;}}
catch(e){}
return false;};Roblox.Client.UnhideApp=function(){try{if(Roblox.Client._hiddenModeEnabled){var o=Roblox.Client.CreateLauncher(false);o.UnhideApp();}}
catch(exp){}};Roblox.Client.Update=function(){EventTracker&&EventTracker.start('UpdateClient');try{var o=Roblox.Client.CreateLauncher(false);o.Update();Roblox.Client.ReleaseLauncher(o,false,false);}
catch(e){EventTracker&&EventTracker.endFailure('UpdateClient');}};Roblox.Client.WaitForRoblox=function(continuation){if(Roblox.Client._skip){window.location=Roblox.Client._skip;return false;}
Roblox.Client._continuation=continuation;Roblox.Client._cancelled=false;var osName="Windows";if(navigator.appVersion.indexOf("Mac")!=-1){osName="Mac";}
if(Roblox.Client.IsRobloxProxyInstalled()){Roblox.Client._continuation();return false;}
else if(Roblox.Client._whyIsRobloxLauncherNotCreated==Roblox.Client.LauncherNotCreatedReasons.pluginNotAllowed){Roblox.InstallationInstructions.show("activation");GoogleAnalyticsEvents&&GoogleAnalyticsEvents.FireEvent(['Plugin','Activation Begin',osName]);}
else{EventTracker&&EventTracker.start('InstallClient');Roblox.InstallationInstructions.show("installation");Roblox.Client._runInstallABTest();GoogleAnalyticsEvents&&GoogleAnalyticsEvents.FireEvent(['Plugin','Install Begin',osName]);if(Roblox.Client._eventStreamLoggingEnabled&&typeof Roblox.GamePlayEvents!="undefined"){Roblox.GamePlayEvents.SendInstallBegin(null,play_placeId);}
if(window.chrome||window.safari){window.location.hash='#chromeInstall';$.cookie('chromeInstall',continuation.toString().replace(/play_placeId/,play_placeId.toString()));if(Roblox.Client._eventStreamLoggingEnabled&&typeof Roblox.GamePlayEvents!="undefined"){$.cookie('chromeInstallPlaceId',play_placeId);$.cookie('chromeInstallLaunchMode',Roblox.GamePlayEvents.lastContext);}}
var iframe=document.getElementById("downloadInstallerIFrame");iframe.src="/download/client";}
window.setTimeout(function(){Roblox.Client._ontimer();},1000);return true;};Roblox.Client.ResumeTimer=function(continuation){Roblox.Client._continuation=continuation;Roblox.Client._cancelled=false;window.setTimeout(function(){Roblox.Client._ontimer();},0);};Roblox.Client.Refresh=function(){try{navigator.plugins.refresh(false);}
catch(ex){}};Roblox.Client._onCancel=function(){Roblox.InstallationInstructions.hide();Roblox.Client._cancelled=true;EventTracker&&EventTracker.endCancel('InstallClient');return false;};Roblox.Client._ontimer=function(){if(Roblox.Client._cancelled)
return;Roblox.Client.Refresh();if(Roblox.Client.IsRobloxProxyInstalled()){Roblox.InstallationInstructions.hide();window.setTimeout(function(){if((window.chrome||window.safari)&&window.location.hash=='#chromeInstall'){window.location.hash='';$.cookie('chromeInstall',null);}},5000);EventTracker&&EventTracker.endSuccess('InstallClient');Roblox.Client._continuation();if(Roblox.Client._installSuccess)
Roblox.Client._installSuccess();}
else if(Roblox.Client._whyIsRobloxLauncherNotCreated==Roblox.Client.LauncherNotCreatedReasons.pluginNotAllowed){Roblox.InstallationInstructions.show("activation");window.setTimeout(function(){Roblox.Client._ontimer();},1000);}
else if(Roblox.Client._whyIsRobloxLauncherNotCreated==Roblox.Client.LauncherNotCreatedReasons.wrongInstallHostAndPluginWasNotAllowed){Roblox.Client._whyIsRobloxLauncherNotCreated=null;Roblox.InstallationInstructions.hide();Roblox.Client.WaitForRoblox(Roblox.Client._continuation);}
else{window.setTimeout(function(){Roblox.Client._ontimer();},1000);}};

;// InstallationInstructions.js
if(typeof Roblox==="undefined"){Roblox={};}
Roblox.InstallationInstructions=(function(){function show(mode){if(typeof mode=="undefined"){mode="installation";}
loadImages(mode);var modalWidth=0;var installInstructionsImage=$('.InstallInstructionsImage');if(installInstructionsImage&&typeof $(installInstructionsImage).data("modalwidth")!="undefined"){modalWidth=$('.InstallInstructionsImage').data('modalwidth');}
if(modalWidth>0){var leftPercent=($(window).width()-(modalWidth-10))/2;$('#InstallationInstructions').modal({escClose:true,opacity:80,minWidth:modalWidth,maxWidth:modalWidth,overlayCss:{backgroundColor:"#000"},position:[50,leftPercent],zIndex:1031});}else{$('#InstallationInstructions').modal({escClose:true,opacity:80,maxWidth:($(window).width()/2),minWidth:($(window).width()/2),overlayCss:{backgroundColor:"#000"},position:[50,"25%"],zIndex:1031});}}
function hide(){$.modal.close();}
function loadImages(mode){var installInstructionsImage=$('.InstallInstructionsImage');if(navigator.userAgent.match(/Mac OS X 10[_|\.]5/)){var oldMacDelaySrc=installInstructionsImage.data("oldmacdelaysrc");if(installInstructionsImage&&typeof oldMacDelaySrc!="undefined"){if(installInstructionsImage.hasClass("src-replaced")){installInstructionsImage.attr('src',oldMacDelaySrc);}
else{installInstructionsImage.attr('data-delaysrc',oldMacDelaySrc);}}}
else{var activationSrc=installInstructionsImage.data("activationsrc");if(mode==="activation"&&activationSrc!==undefined){if(installInstructionsImage.hasClass("src-replaced")){installInstructionsImage.attr('src',activationSrc);}
else{installInstructionsImage.attr('data-delaysrc',activationSrc);}}}}
var my={show:show,hide:hide};return my;})();

;//Bundle detector
Roblox && Roblox.BundleDetector && Roblox.BundleDetector.bundleDetected('clientinstaller');