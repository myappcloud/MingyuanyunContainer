//
//  MingyuanyunViewController.h
//  CordovaPluginLib
//
//  Created by 龙章辉 on 2020/12/16.
//  Copyright © 2020 Peter. All rights reserved.
//

#import <UIKit/UIKit.h>
//#if __has_include(<ContainerCenter/ContainerCenter-Swift.h>)
//
//#import <ContainerCenter/ContainerCenter-Swift.h>
//
//#endif

@import  ContainerCenter;

@interface MingyuanyunContainerController : UIViewController

@property (nonatomic, copy) NSString * _Nullable appId;
@property (nonatomic, assign) uint64_t appVesion;
@property (nonatomic, strong) id<CCWebApp> webApp;
@property (nonatomic, copy) NSDictionary * _Nonnull params;

@property (nonatomic, copy, nullable) void (^completionBlock) (id _Nullable resultData);

- (instancetype)initWithId:(NSString *)pageId
                    params:(NSDictionary *)params
                completion:(void (^ _Nullable)(id _Nullable resultData))completion;

- (instancetype)initWithWebApp:(id<CCWebApp>)webApp
                    completion:(void (^)(id _Nullable resultData))completion;
//#endif

@end

