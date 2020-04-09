/*::
  // Version 20200409
  //https://docs.tizen.org/application/web/api/latest/device_api/wearable/tizen/tizen.html#full-webidl
  declare var tizen: Tizen; //The tizen runtime will provide this global variable in the window object.
  declare interface Tizen extends ApplicationManagerObject, PackageManagerObject{    }
    declare type long = number;
    declare type short = number;
    declare type DOMString = string;
  //type ByteStream=octet[];
  type FilterMatchFlag = "EXACTLY"| "FULLSTRING"| "CONTAINS"| "STARTSWITH"| "ENDSWITH"| "EXISTS";
  type SortModeOrder = "ASC"| "DESC" ;
  type CompositeFilterType = "UNION"| "INTERSECTION";
  type BundleValueType = "STRING"| "STRING_ARRAY"| "BYTES"| "BYTES_ARRAY";
    //   interface Window extends TizenObject{};
    //   interface TizenObject {
    //     +tizen:Tizen;
    //   };
    //  declare var window:Window; // Don't do this, since it hides Flow built in type DOM definitions

  interface Bundle {
    get(key:DOMString):any;//  raises(WebAPIException);
    set(key:DOMString , value:any ):void ;
    typeOf(key:DOMString ):BundleValueType; // raises(WebAPIException);
    forEach(callback:BundleItemCallback ):void ;
    toJSON():Object ;
    toString():DOMString ;
  };
  interface AbstractFilter {
  };
  
  interface AttributeFilter extends AbstractFilter {
    attributeName:DOMString ;
    matchFlag:FilterMatchFlag ;
    matchValue:any ;
  };
  
  interface AttributeRangeFilter extends AbstractFilter {
    attributeName:DOMString ;
    initialValue:any ;
     endValue:any;
  };
  interface CompositeFilter extends AbstractFilter {
    type:CompositeFilterType ;
    filters:AbstractFilter[] ;
  };
  interface SortMode {
    attributeName:DOMString ;
    order:SortModeOrder ;
  };
  interface SimpleCoordinates {
    latitude:number ;
    longitude:number ;
  };
    const INDEX_SIZE_ERR = 1;
    const DOMSTRING_SIZE_ERR = 2;
    const HIERARCHY_REQUEST_ERR = 3;
    const WRONG_DOCUMENT_ERR = 4;
    const INVALID_CHARACTER_ERR = 5;
    const NO_DATA_ALLOWED_ERR = 6;
    const NO_MODIFICATION_ALLOWED_ERR = 7;
    const NOT_FOUND_ERR = 8;
    const NOT_SUPPORTED_ERR = 9;
    const INUSE_ATTRIBUTE_ERR = 10;
    const INVALID_STATE_ERR = 11;
    const SYNTAX_ERR = 12;
    const INVALID_MODIFICATION_ERR = 13;
    const NAMESPACE_ERR = 14;
    const INVALID_ACCESS_ERR = 15;
    const VALIDATION_ERR = 16;
    const TYPE_MISMATCH_ERR = 17;
    const SECURITY_ERR = 18;
    const NETWORK_ERR = 19;
    const ABORT_ERR = 20;
    const URL_MISMATCH_ERR = 21;
    const QUOTA_EXCEEDED_ERR = 22;
    const TIMEOUT_ERR = 23;
    const INVALID_NODE_TYPE_ERR = 24;
    const DATA_CLONE_ERR = 25;
  interface WebAPIException {
    +code:number;
    +name:DOMString ;
    +message:DOMString;
  };
  interface WebAPIError {
    +code:number;
    +name:DOMString ;
    +message:DOMString ;
  };
  interface SuccessCallback {
    onsuccess():void;
  };
  interface ErrorCallback {
    onerror(error:WebAPIError ):void ;
  };
  interface BundleItemCallback {
    onitem(key:DOMString , value:any , type:BundleValueType ):void ;
  };
//*************************************************************
//Application API
//https://docs.tizen.org/application/web/api/latest/device_api/wearable/tizen/application.html#full-webidl

declare type ApplicationId = DOMString;
declare type ApplicationContextId = DOMString;
declare type UserEventData = Object;
declare type EventData = SystemEventData | UserEventData;
declare type ApplicationControlLaunchMode = "SINGLE" | "GROUP";
declare type ApplicationUsageMode = "RECENTLY" | "FREQUENTLY";
declare type ApplicationUsageFilter = {
    timeSpan:?number;
    startTime:?Date;
    endTime:?Date;
};
declare interface EventInfo {
   appId:ApplicationId;
   name:DOMString;
};
declare interface ApplicationManagerObject {
  +application:ApplicationManager;
};

declare interface ApplicationManager {
  getCurrentApplication():Application;// raises(WebAPIException);
  kill(contextId:ApplicationContextId, successCallback:?SuccessCallback, errorCallback:?ErrorCallback):void; //raises(WebAPIException);
  launch(id:ApplicationId,successCallback:?SuccessCallback,errorCallback:?ErrorCallback):void; //raises(WebAPIException);
  launchAppControl(appControl:ApplicationControl, id:?ApplicationId, successCallback:?SuccessCallback,
                    errorCallback:?ErrorCallback, replyCallback:?ApplicationControlDataArrayReplyCallback):void; //raises(WebAPIException);
  findAppControl(appControl:ApplicationControl, successCallback:FindAppControlSuccessCallback,
                errorCallback:?ErrorCallback):void;//  raises(WebAPIException);
  getAppsContext(successCallback:ApplicationContextArraySuccessCallback, errorCallback:?ErrorCallback):void ;//raises(WebAPIException);
  getAppContext(contextId:?ApplicationContextId):ApplicationContext; //raises(WebAPIException);
  getAppsInfo(successCallback:ApplicationInformationArraySuccessCallback,errorCallback:?ErrorCallback):void; //raises(WebAPIException);
  getAppInfo(id:?ApplicationId):ApplicationInformation; //raises(WebAPIException);
  getAppCerts(id:?ApplicationId):ApplicationCertificate[]; //  raises(WebAPIException);
  getAppSharedURI(id:?ApplicationId):DOMString; //raises(WebAPIException);
  getAppMetaData(id:?ApplicationId):ApplicationMetaData[]; // raises(WebAPIException);
  getBatteryUsageInfo(successCallback:BatteryUsageInfoArraySuccessCallback,errorCallback:?ErrorCallback,
            days:?long, limit:?long):void; // raises(WebAPIException);
  getAppsUsageInfo(successCallback:AppsUsageInfoArraySuccessCallback, errorCallback:?ErrorCallback,
            mode:?ApplicationUsageMode, filter:?ApplicationUsageFilter, limit:?long):void; //raises(WebAPIException);
  addAppStatusChangeListener(eventCallback:StatusEventCallback, appId:?ApplicationId):long; //raises(WebAPIException);
  removeAppStatusChangeListener(watchId:long):void;//  raises(WebAPIException);
};
declare interface Application {
  +appInfo:ApplicationInformation;
  +contextId:ApplicationContextId;
  exit():void; // raises(WebAPIException);
  hide():void;//  raises(WebAPIException);
  getRequestedAppControl():RequestedApplicationControl;//  raises(WebAPIException);
  addEventListener(event:EventInfo, callback:EventCallback):long;// raises(WebAPIException);
  removeEventListener(watchId:long):void;// raises(WebAPIException);
   broadcastEvent( event:EventInfo,  data:UserEventData):void;// raises(WebAPIException);
   broadcastTrustedEvent( event:EventInfo, data:UserEventData ):void;// raises(WebAPIException);
};
declare interface ApplicationInformation {
  +id:ApplicationId ;
  +name:DOMString;
  +iconPath:DOMString;
  +version:DOMString;
  +show:boolean;
  +categories:DOMString[];
  +installDate:Date;
  +size:long;// raises(WebAPIException);
  +packageId:PackageId;
};
declare interface ApplicationContext {
  +id:ApplicationContextId ;
  +appId:ApplicationId;
};
declare interface ApplicationBatteryUsage {
  +appId:ApplicationId ;
  +batteryUsage:number;
};
declare interface ApplicationUsage {
  +appId:ApplicationId ;
  +totalCount:number;
  +totalDuration:number;
  +lastTime:Date;
};
declare interface ApplicationControlData {
  key:DOMString;
  value: DOMString[];
};
declare interface ApplicationControl {
  operation:DOMString;
  uri:?DOMString;
  mime:?DOMString;
  category:?DOMString;
  data:ApplicationControlData[];
  launchMode:ApplicationControlLaunchMode ;
};
declare interface RequestedApplicationControl {
  +appControl:ApplicationControl ;
  +callerAppId:ApplicationId ;
  replyResult(data:?ApplicationControlData[]):void ;// raises(WebAPIException);
  replyFailure():void; //raises(WebAPIException);
};
declare interface ApplicationCertificate {
  +type:DOMString ;
  +value:DOMString ;
};
declare interface ApplicationMetaData {
  +key:DOMString ;
  +value:DOMString ;
};
declare interface BatteryUsageInfoArraySuccessCallback {
  onsuccess(batteryInfoArray:ApplicationBatteryUsage[] ):void ;
};
declare interface AppsUsageInfoArraySuccessCallback {
  onsuccess(appsInfoArray:ApplicationUsage[] ):void ;
};
declare interface ApplicationInformationArraySuccessCallback {
  onsuccess(informationArray:ApplicationInformation[]):void ;
};
declare interface FindAppControlSuccessCallback {
  onsuccess(informationArray:ApplicationInformation[] , appControl:ApplicationControl ):void ;
};
declare interface ApplicationContextArraySuccessCallback {
  onsuccess(contexts:ApplicationContext[] ):void ;
};
declare interface ApplicationControlDataArrayReplyCallback {
  onsuccess(data:?ApplicationControlData[]):void ;
  onfailure():void;
};
declare interface SystemEventData {
  value:DOMString ;
  type:DOMString ;
};
declare interface EventCallback {
  onevent( event:EventInfo,  data:EventData):void ;
};
declare interface StatusEventCallback {
   onchange( appId:ApplicationId,  isActive:boolean):void;
};

//**********************************************
// Package API
// https://docs.tizen.org/application/web/api/latest/device_api/wearable/tizen/package.html#full-webidl

  declare type PackageId = DOMString;
  declare interface PackageManagerObject {
    +package:PackageManager ;
  }
  declare interface PackageManager {
    install(packageFileURI:DOMString, progressCallback:PackageProgressCallback , errorCallback:?ErrorCallback):void;//raises(WebAPIException);
    uninstall(id:PackageId , progressCallback:PackageProgressCallback , errorCallback:?ErrorCallback):void;// raises(WebAPIException);
    getPackagesInfo(successCallback:PackageInformationArraySuccessCallback , errorCallback:?ErrorCallback):void ;//raises(WebAPIException);
    getPackageInfo(id:?PackageId):PackageInformation ;// raises(WebAPIException);
    setPackageInfoEventListener(eventCallback:PackageInformationEventCallback):void ;// raises(WebAPIException);
    unsetPackageInfoEventListener():void ;// raises(WebAPIException);
  }
  declare interface PackageInformation {
    +id:PackageId ;
    +name:DOMString ;
    +iconPath:DOMString ;
    +version:DOMString ;
    +totalSize:long;
    +dataSize:long ;
    +lastModified:Date ;
    +author:DOMString ;
    +description:DOMString ;
    +appIds:ApplicationId[] ;
  }
  declare interface PackageInformationArraySuccessCallback {
    onsuccess(informationArray:PackageInformation[] ):void ;
  }
  declare interface PackageProgressCallback {
    onprogress(id:PackageId , progress:short ):void ;
    oncomplete(id:PackageId ):void ;
  }
  declare interface PackageInformationEventCallback {
    oninstalled(info:PackageInformation ):void ;
    onupdated(info:PackageInformation ):void ;
    onuninstalled(id:PackageId ):void ;
  }

*/
