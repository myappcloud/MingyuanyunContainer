//
//  CordovaPluginLib.h
//  CordovaPluginLib
//
//  Created by 龙章辉 on 2019/11/22.
//  Copyright © 2019 Peter. All rights reserved.
//

#import <Foundation/Foundation.h>

//! Project version number for CordovaPluginLib.
FOUNDATION_EXPORT double CordovaPluginLibVersionNumber;

//! Project version string for CordovaPluginLib.
FOUNDATION_EXPORT const unsigned char CordovaPluginLibVersionString[];

// In this header, you should import all the public headers of your framework using statements like #import <CordovaPluginLib/PublicHeader.h>

extern NSString *const CORDOVA_PLUGIN_LIB_DIRECTORY_NAME;
extern NSString *const CORDOVA_PLUGIN_LIB_SDK_INIT; //sdk初始化
extern NSString *const CORDOVA_PLUGIN_LIB_BECOME_ACTIVE;//sdk界面可见
extern NSString *const CORDOVA_PLUGIN_LIB_RESIGN_ACTIVE; //sdk界面不可见
extern NSString *const CORDOVA_PLUGIN_LIB_DESTORY;//sdk被销毁
extern NSString *const CORDOVA_PLUGIN_LIB_PARAMS_CHANGE;
extern NSString *const CORDOVA_PLUGIN_LIB_EVENT_NOTIFICATION;

@interface CordovaPluginLib : NSObject

@property(nonatomic,readonly)NSString *bundleId;
@property(nonatomic, readonly)NSString *sdkVersion;   //SDK版本号
@property(nonatomic,readonly,assign)BOOL isOpen;
@property(nonatomic,readonly,assign)BOOL isShow;
@property(nonatomic,readonly,assign)BOOL alreadyInit;
@property(nonatomic,readonly)NSDictionary *sdkArgs;

+ (instancetype)sharedLib;

/**
 * 初始化sdk,并将界面可见
 * 如果已经打开，再次调用此方法，仅更新参数
 */
- (void)openWithBundleId:(NSString *)bundleId args:(NSDictionary *)args complete:(void (^)(NSString *errMsg))completeBlock;

/**
 * 调用此方法，只做初始化，页面不可见
 */
- (void)initWithBundleId:(NSString *)bundleId args:(NSDictionary *)args complete:(void (^)(NSString *errMsg))completeBlock;

/**
 * 更新sdk参数
 */
- (void)updateSdkParams:(NSDictionary *)params;
- (void)receiveEventNotification:(NSDictionary *)params;
@end
