;// bundle: page___e842f21729be393c2416cc937160634b_m
;// files: utilities/sharedElementManipulator.js, extensions/Thumbnails.js, pageStyleNotifications.js, ~/Generated/js/Roblox_TranslationResources_Feature_CatalogResources_en_us_standard.js, GenericConfirmation.js, utilities/dialog.js, common/deviceMeta.js

;// utilities/sharedElementManipulator.js
var Roblox=Roblox||{};Roblox.SharedElementManipulator=(function(){var footerSelector=".container-footer";var chatSelector="#chat-container";var pagificationSelector=".pagification";function toggleElement(element,hide){if(hide){element.hide();}
else{element.show();}}
function toggleChat(hide){var chat=$(chatSelector);toggleElement(chat,hide);}
function toggleFooter(hide){var footer=$(footerSelector);toggleElement(footer,hide);}
function togglePagification(hide){var pagification=$(pagificationSelector);toggleElement(pagification,hide);}
function addFooterClass(name){$(footerSelector).addClass(name);}
function removeFooterClass(name){$(footerSelector).removeClass(name);}
return{toggleChat:toggleChat,toggleFooter:toggleFooter,togglePagification:togglePagification,addFooterClass:addFooterClass,removeFooterClass:removeFooterClass}})();

;// extensions/Thumbnails.js
$(function(){var imageRetryDataElement=$("#image-retry-data");var pauseBetweenRequests=imageRetryDataElement?imageRetryDataElement.data("image-retry-timer"):1500;var retryMaxTimes=imageRetryDataElement?imageRetryDataElement.data("image-retry-max-times"):10;var gaLoggingPercent=imageRetryDataElement?imageRetryDataElement.data('ga-logging-percent'):0;var GoogleAnalyticsEvents_FireEvent=(window.GoogleAnalyticsEvents&&GoogleAnalyticsEvents.FireEvent)||function(){};var GoogleAnalyticsEvents_FireEventPercentage=function(data){if(Math.random()<=gaLoggingPercent/100.0){GoogleAnalyticsEvents_FireEvent(data);}}
function getImgWithSrc(options){var img=options.el.is("img")?options.el:options.el.find("img");var imgWithSrc=img.length===1?img:options.el.find("img.original-image");return imgWithSrc;}
function handleFinalData(data,options){var imgWithSrc=getImgWithSrc(options);var imageUrl;if(data.data!=null&&data.data[0].imageUrl!=null){imageUrl=data.data[0].imageUrl;}
else{imageUrl=data.Url;}
if(!imgWithSrc.attr("src")&&imgWithSrc.hasClass("lazy")){imgWithSrc.attr("data-original",imageUrl);}
else{imgWithSrc.attr("src",imageUrl);}
options.el.removeAttr("data-retry-url");options.el.trigger("thumbnailLoaded");}
function logSuccess(options){var gap=new Date().getTime()-options.start;Roblox.ThumbnailMetrics&&Roblox.ThumbnailMetrics.logFinalThumbnailTime(gap);GoogleAnalyticsEvents_FireEventPercentage(["ThumbnailGenTime","2D","Success",gap]);GoogleAnalyticsEvents_FireEventPercentage(["ThumbnailGenRetries","2D","Success",options.retryCount]);}
function logGiveUp(options){var gap=new Date().getTime()-options.start;Roblox.ThumbnailMetrics&&Roblox.ThumbnailMetrics.logThumbnailTimeout();GoogleAnalyticsEvents_FireEventPercentage(["ThumbnailGenRetries","2D","Gave Up",options.retryCount]);GoogleAnalyticsEvents_FireEventPercentage(["ThumbnailGenTime","2D","Gave Up",gap]);}
function gotThumbnailData(data,options){if(data.Final||data.data!=null&&data.data[0].state!=null&&data.data[0].state==="Completed"){if(options.realRegeneration){logSuccess(options);}
handleFinalData(data,options);}else{options.realRegeneration=true;options.retryCount++;if(options.retryCount<retryMaxTimes){setTimeout(function(){options.retryFunction(options);},pauseBetweenRequests);}else{logGiveUp(options);}}}
function getThumbnailData(options){var url=options.el.data("retry-url");if(!url){return;}
$.ajax({url:url,dataType:"json",cache:false,crossDomain:true,xhrFields:{withCredentials:true},success:function(data){gotThumbnailData(data,options);}});}
$.fn.loadRobloxThumbnails=function(){return this.each(function(){var options={retryCount:0,realRegeneration:false,start:new Date().getTime(),el:$(this),retryFunction:getThumbnailData};var imgWithSrc=getImgWithSrc(options);imgWithSrc.one("load",function(){var imgLoadTime=new Date().getTime()-options.start;Roblox.ThumbnailMetrics&&Roblox.ThumbnailMetrics.logFinalThumbnailTime(imgLoadTime,"2dThumbnailOnLoad");});setTimeout(function(){getThumbnailData(options);},0);});};});

;// pageStyleNotifications.js
$(function(){$(".pagification .pagification-showall, .pagification .pagification-collapse").click(function(){$(this).parents(".pagification-body").toggleClass("collapsed");});});

;// ~/Generated/js/Roblox_TranslationResources_Feature_CatalogResources_en_us_standard.js
var Roblox=Roblox||{};Roblox.Lang=Roblox.Lang||{};Roblox.Lang['Feature.Catalog']={"Action.Add":"Add","Action.AddToCart":"Add to cart","Action.Buy":"Buy","Action.BuyCartItems":"Buy cart items","Action.BuyNow":"Buy Now","Action.BuyRobux":"Buy Robux","Action.Cancel":"Cancel","Action.Collapse":"Collapse","Action.Dialog.AddGearOk":"OK","Action.Expand":"Expand","Action.Filter.Apply":"Apply","Action.Filter.Cancel":"Cancel","Action.Go":"Go","Action.GotIt":"Got It","Action.ReadMore":"Read More","Action.Remove":"Remove","Action.RemoveFromCart":"Remove from cart","Action.SeeMore":"See More","Action.SeeMoreReseller":"See More {linkStart}{resellerLink}{linkEnd}","Action.Sell":"Sell","Action.SellNow":"Sell Now","Action.ShopGiftCards":"Shop Gift Cards","Action.ShowLess":"Show Less","Action.ViewAllItems":"View All Items","Action.ViewFeaturedItems":"View Featured Items","Action.Wear":"Wear","Description.Dialog.AddGearBody":"To add gear to your experience, find an item in the catalog and click the Add to Experience button. The item will automatically be allowed in experience, and you'll receive a commission on every copy sold from your experience page. (You can only add gear that's for sale.)","Heading.AddToProfile":"Add to Profile","Heading.AvatarShop":"Avatar Shop","Heading.BuyItem":"Buy Item","Heading.BuyItWith":"Buy it with","Heading.CartAddFailure":"Add to cart failed, please try again later","Heading.CartFailure":"Add to cart failed, please try again later","Heading.CartLimitFailure":"Add to cart failed, you reached the {itemLimit} item limit","Heading.CartRemoveFailure":"Remove from cart failed, please try again later","Heading.CatalogCategory":"Category","Heading.CatalogPage":"Catalog","Heading.HoldingPolicy":"Holding Policy","Heading.InExperienceOnly":"Available In Experience","Heading.ItemAddedToCart":"{itemName} has been added to your cart","Heading.ItemInfo":"Item Info","Heading.ItemRemovedFromCart":"{itemName} has been removed from your cart","Heading.Marketplace":"Marketplace","Heading.NeedMoreRobux":"Need More Robux?","Heading.OffSaleItem":"Off Sale Item","Heading.Overview":"Overview","Heading.QuantityLimitReached":"Creator Limit Reached","Heading.RemoveFromProfile":"Remove from Profile","Heading.Resellers":"Resellers","Heading.SellItem":"Sell Item","Heading.SellYourCollectibleItem":"Sell Your Collectible Item","Heading.SetPrice":"Set Price","Heading.TakeOffSale":"Take Off Sale","Heading.TreatYourself":"Treat yourself","Label.2D":"2D","Label.3D":"3D","Label.Accessory":"Accessory","Label.AccessoryHead":"Head","Label.AllCommunityCreations":"All Creations","Label.AllFeaturedItems":"View All Featured Items","Label.AllGenres":"All Genres","Label.AllItems":"All Items","Label.AllItemsOnRoblox":"All Items on {spanStart}{roblox}{spanEnd}","Label.AllPremiumItems":"All Premium Items","Label.Amazon":"Amazon","Label.AppleOnly":"Apple Only","Label.AveragePrice":"Average Price","Label.AveragePriceColon":"Average Price:","Label.BackAccessory":"Back Accessory","Label.BestPrice":"Best Price","Label.BreadCrumb.Free":"Free","Label.BreadCrumb.GenreOrText":"{genreName1} or {genreName2}","Label.BreadCrumb.GenreSelectedText":"Genre: {genreCount} selected","Label.BreadCrumb.Group":"Group:","Label.BreadCrumb.PriceAbove":"{price} and above","Label.BreadCrumb.PriceBelow":"{price} and below","Label.BreadCrumb.ResultsCount":"{startNumber} - {endNumber} of {resultsCount} Results","Label.Bundle":"Bundle","Label.Bundles":"Bundles","Label.BuyPrice":"Buy Price:","Label.ByCreatorLink":"By {linkStart}{creator}{linkEnd}","Label.Card.CreatorBy":"By","Label.Card.PriceWas":"Was","Label.Card.Remaining":"Remaining:","Label.CategoryAttributes":"Attributes","Label.CategoryType":"Type","Label.Character":"Character","Label.Characters":"Characters","Label.ClassicShirt":"Classic Shirt","Label.ClassicTShirt":"Classic T-Shirt","Label.ClimbAnimation":"Climb Animation","Label.Clothing.ClassicPants":"Classic Pants","Label.Clothing.ClassicShirts":"Classic Shirts","Label.Clothing.ClassicTShirts":"Classic T-Shirts","Label.Clothing.DressSkirtAccessories":"Dresses & Skirts","Label.Clothing.JacketAccessories":"Jackets","Label.Clothing.PantsAccessories":"Pants","Label.Clothing.ShirtAccessories":"Shirts","Label.Clothing.ShoesBundles":"Shoes","Label.Clothing.ShortsAccessories":"Shorts","Label.Clothing.SweaterAccessories":"Sweaters","Label.Clothing.TShirtAccessories":"T-Shirts","Label.ComingSoon":"Coming soon! Check back later.","Label.CommunityCreations":" Community Creations","Label.DeathAnimation":"Death Animation","Label.Description":"Description","Label.Dialog.AddGearTitle":"Add Gear to Your Experience","Label.DynamicHead":"Dynamic Head","Label.Edit":"Edit","Label.EmoteAnimation":"Emote Animation","Label.Emotes":"Emotes","Label.Eyebrow":"Eyebrow","Label.Eyelash":"Eyelash","Label.Face":"Face","Label.FaceAccessory":"Face Accessory","Label.FallAnimation":"Fall Animation","Label.Favorites":"Favorites","Label.FeaturedBundles":"Featured Bundles","Label.FeaturedEmotes":"Featured Emotes","Label.FeaturedItemsOnRoblox":"Featured Items on {spanStart}{roblox}{spanEnd}","Label.Fee":"{feePercentage}% Fee:","Label.Filter.ByTime":"By Time","Label.Filter.Category":"Category","Label.Filter.Creator":"Creator","Label.Filter.Filter":"Filter","Label.Filter.Filters":"Filters","Label.Filter.Genre":"Genre","Label.Filter.Hide":"Hide","Label.Filter.Price":"Price","Label.Filter.PriceMax":"Max","Label.Filter.PriceMin":"Min","Label.Filter.PriceTo":"To","Label.Filter.SalesType":"Sales Type","Label.Filter.Show":"Show","Label.Filter.SortBy":"Sort By","Label.Filter.Sorting":"Sorting","Label.Filter.Sorts":"Sorts","Label.Filter.UnavailableItems":"Unavailable Items","Label.FrontAccessory":"Front Accessory","Label.Genres":"Genres","Label.Get":"Get","Label.GetItFrom":"Get It From","Label.GoogleOnly":"Google Only","Label.HairAccessory":"Hair Accessory","Label.Hat":"Hat","Label.Head":"Head","Label.Holding":"Holding","Label.HoldingPeriod":"Holding Period","Label.IdleAnimation":"Idle Animation","Label.InExperienceOnly":"The original sale of this item is only available in experience.","Label.InExperiencePurchaseOnly":"The original sale of this item is only available in experience.","Label.InvalidPrice":"Price is invalid","Label.Ios":"iOS","Label.ItemInAHold":"Item in a hold?","Label.ItemOwned":"Item Owned","Label.ItemOwnedCount":"Owned Items ({itemCount})","Label.ItemOwnedCountSingular":"Owned Item ({itemCount})","Label.Jacket":"Jacket","Label.JumpAnimation":"Jump Animation","Label.LeftArm":"Left Arm","Label.LeftLeg":"Left Leg","Label.LeftShoe":"Left Shoe","Label.Limited":"Limited","Label.LimitedU":"Limited U","Label.MarketplaceFee30Percent":"Marketplace fee (at 30%)","Label.MaxPerUser":"Max Per User","Label.MinimumAmount":"Minimum amount must be over 0.","Label.Mobile":"Mobile","Label.MoodAnimation":"Mood Animation","Label.NeckAccessory":"Neck Accessory","Label.New":"New","Label.NewCollectibles":"New Collectibles!","Label.No":"No","Label.NotAvailable":"This item is not available at this time","Label.OffSale":"Off Sale","Label.OnSale":"On Sale","Label.OriginalPrice":"Original Price","Label.OriginalUnavailable":"Original is currently unavailable for purchase","Label.PoseAnimation":"Pose Animation","Label.Premium":"Premium","Label.PremiumForResell":"Premium is required for reselling","Label.PremiumOnly":"Available for Premium users only","Label.PriceMinimum1":"Price (minimum 1)","Label.QuantityLeft":"Quantity Left: {remaining}/{total}","Label.QuantityLimitReached":"The creator has limits on how many copies a single user can purchase from them.","Label.RecentlyCreated":"Recently Created","Label.Recommended":"Recommended","Label.RecommendedItemsForYou":"Recommended Items for You","Label.ReportItem":"Report Item","Label.ResaleFeePolicy":"Resale Fee Policy","Label.Resellable":"Resellable","Label.RightArm":"RightArm","Label.RightLeg":"Right Leg","Label.RightShoe":"Right Shoe","Label.RobuxFee":"After {feePercentage}% Fee:","Label.Rthro":"Rthro","Label.RunAnimation":"Run Animation","Label.Sale":"Sale","Label.SalePrice":"Sale Price:","Label.SearchField":"Search","Label.SeeAll":"See All","Label.SellCut":"You Earn:","Label.SellPageUpsell":"Selling is only available to users with a Premium membership.","Label.SerialNumber":"Serial Number","Label.SerialNumberColon":"Serial Number:","Label.SerialNumberDisplay":"#{serialNumber}","Label.Shirt":"Shirt","Label.ShoppingCart":"Shopping cart","Label.ShoulderAccessory":"Shoulder Accessory","Label.Skirt":"Skirt","Label.SoldIn":"Sold In","Label.SoldOut":"Sold Out","Label.Sweater":"Sweater","Label.SwimAnimation":"Swim Animation","Label.Tags":"Tags","Label.TakeOff":"Take Off","Label.TakeOffResaleConfirmation":"Are you sure you want to stop offering this item for resale?","Label.TakeOffSaleConfirmation":"Are you sure you want to take the item off sale?","Label.Torso":"Torso","Label.Total":"Total:","Label.TotalItems":"Total: {itemCount} items","Label.TotalUnformatted":"Total","Label.Tradable":"Tradable","Label.Tradeable":"Tradeable","Label.Trending":"Trending","Label.TryOn":"Try On","Label.TShirt":"T-Shirt","Label.Unlimited":"Unlimited","Label.Updated":"Updated","Label.Username":"Username","Label.WaistAccessory":"Waist Accessory","Label.WalkAnimation":"Walk Animation","Label.Xbox":"Xbox","Label.Yes":"Yes","Label.YouGet":"You get","LabelAccessories":"Accessories","LabelAccessoryAll":"All Accessories","LabelAccessoryBack":"Back","LabelAccessoryFace":"Face","LabelAccessoryFront":"Front","LabelAccessoryHair":"Hair","LabelAccessoryHats":"Hats","LabelAccessoryNeck":"Neck","LabelAccessoryShoulder":"Shoulder","LabelAccessoryWaist":"Waist","LabelAll":"All","LabelAllAvatarAnimations":"All Animations","LabelAllBodyParts":"All Body Parts","LabelAllCategories":"All Categories","LabelAllClothing":"All Clothing","LabelAllCollectibles":"All Collectibles","LabelAllCreators":"All Creators","LabelAllCurrency":"All Currency","LabelAllFeatured":"All Featured Items","LabelAllHeads":"All Heads","LabelAllTime":"All Time","LabelAnimations":"Animations","LabelAnyPrice":"Any Price","LabelAvatarAnimations":"Avatar Animations","LabelBestselling":"Bestselling","LabelBodyParts":"Body Parts","LabelClassicFaces":"Classic Faces","LabelClassicHeads":"Classic Heads","LabelClothing":"Clothing","LabelCollectibleAccessories":"Collectible Accessories","LabelCollectibleFaces":"Collectible Faces","LabelCollectibleGear":"Collectible Gear","LabelCollectibles":"Collectibles","LabelFaces":"Faces","LabelFeatured":"Featured","LabelFeaturedAccesories":"Featured Accessories","LabelFeaturedAnimations":"Featured Animations","LabelFeaturedFaces":"Featured Faces","LabelFeaturedGear":"Featured Gear","LabelFeaturedPackages":"Featured Packages","LabelFree":"Free","LabelGear":"Gear","LabelGearAll":"All Gear","LabelGearBuilding":"Building","LabelGearExplosive":"Explosive","LabelGearMelee":"Melee","LabelGearMusical":"Musical","LabelGearNavigation":"Navigation","LabelGearPersonalTransport":"Transport","LabelGearPowerUps":"Power Up","LabelGearRanged":"Ranged","LabelGearSocial":"Social","LabelGenreAdventure":"Adventure","LabelGenreAll":"All Genres","LabelGenreBuilding":"Building","LabelGenreComedy":"Comedy","LabelGenreFantasy":"Medieval","LabelGenreFighting":"Fighting","LabelGenreFPS":"FPS","LabelGenreFunny":"Comedy","LabelGenreHorror":"Horror","LabelGenreMedieval":"Medieval","LabelGenreMilitary":"Military","LabelGenreNaval":"Naval","LabelGenreNinja":"Fighting","LabelGenrePirate":"Naval","LabelGenreRPG":"RPG","LabelGenreScary":"Horror","LabelGenreSciFi":"Sci-Fi","LabelGenreSports":"Sports","LabelGenreTownAndCity":"Town and City","LabelGenreTutorial":"Building","LabelGenreWar":"Military","LabelGenreWestern":"Western","LabelGenreWildWest":"Western","LabelHeads":"Heads","LabelLiveHeads":"Live Heads","LabelMostFavorited":"Most Favorited","LabelNoResellers":"No Resellers","LabelPackages":"Packages","LabelPants":"Pants","LabelPastDay":"Past Day","LabelPastWeek":"Past Week","LabelPriceHighFirst":"Price (High to Low)","LabelPriceLowFirst":"Price (Low to High)","LabelRecentlyUpdated":"Recently Updated","LabelRelevance":"Relevance","LabelRoblox":"Roblox","LabelRobux":"Robux","LabelShirts":"Shirts","LabelTShirts":"T-Shirts","Message.AssetGet":"Would you like to get the {itemType} \"{itemName}\" from {sellerName} for {price}?","Message.AssetPurchase":"Would you like to buy the {itemType} \"{itemName}\" from {sellerName} for {price}?","Message.BundlePurchase":"Would you like to buy the \"{bundleName}\" from {sellerName} for {price}?","Message.CannotResell":"This item cannot be resold to others.","Message.CollectiblesInfo":"Collectible items can be resold from user to user after a holding period, even if the original stock is not sold out. Premium subscribers can list Collectible items for resale.","Message.GiftCardPurchase":"Buy a gift card for yourself and receive 2 exclusive virtual items for FREE","Message.HoldingPolicy":"After purchasing, original sales enter a hold for up to 30 days. The item can only be resold after this holding period ends and resales will have a hold of up to 7 days. Only premium users can resell items.","Message.HoldingPolicyL1":"Purchases from resale will have a hold of up to {days} days. The item can only be resold after this holding period ends. Only premium users can resell items.","Message.HoldingPolicyL2":"After purchasing, original sales enter a hold for up to {purchaseDays} days. The item can only be resold after this holding period ends and resales will have a hold of up to {resaleDays} days. Only premium users can resell items.","Message.InsufficientFundsForTransaction":"You have insufficient funds for this transaction","Message.ItemInInventory":"This item is available in your inventory.","Message.NoHoldingPolicy":"This item does not require a holding period, you can resell it as soon as you purchase it. Only premium users can resell items.","Message.Processing":"Processing","Message.PurchaseLimit":"You can only purchase {purchaseLimit} items at a time","Message.QuantityLimitReached":"Whoops! The creator has limits on how many copies a single user can purchase from them.","Message.RedeemAGiftCard":"When you redeem a gift card, you'll get bonus code to unlock an exclusive virtual item.","Message.RemainingBalance":"Your balance after this transaction will be {remainingBalance}.","Message.ResaleFeePolicy":"The revenue from all Marketplace transactions, including resales, is shared between Roblox and the users involved in the transaction. For resales, this means that when a user accepts your price, {yourSharePercent}% of the Robux they pay will go to you as the reseller. The other {robloxFeePercent}% will go to Roblox and other users including the item creator.","Message.ResellingDisabled":"This item cannot be sold to others. Reselling option has been disabled by the creator.","Message.RunningLowRobux":"Looks like you're running low","Message.SoldOut":"This item is sold out.","Message.TwoStepVerficationPrompt":"You reached the daily purchase limit. Complete 2-Step Verification to continue purchase.","Message.Unavailable":"Unavailable","Message.WithRobux":"With Robux, you can upgrade your avatar, unlock special items, and more. ","Response.AddedToProfile":"Added to your profile","Response.Error.Filter":"Errors exist in Filter tab","Response.GenericError":"An error occurred. Please try again later.","Response.NoItemsFound":"No items found.","Response.NoSaleItemsFromSearch":"Your search did not find items for sale. Unavailable items displayed below.","Response.PlacedOnSaleFailure":"Failed to place on sale","Response.PlacedOnSaleSuccess":"Successfully placed on sale","Response.RemovedFromProfile":"Removed from your profile","Response.TakenOffSaleFailure":"Failed to take off sale","Response.TakenOffSaleSuccess":"Successfully taken off sale","Response.TemporarilyUnavailable":"Catalog temporarily unavailable. Please try again later.","Response.Throttled":"You're going too fast! Try again in a minute."};Roblox.Lang['CatalogResources']=Roblox.Lang['Feature.Catalog'];

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