//
//  MingyuanyunContainer.h
//  MingyuanyunContainer
//
//  Created by 龙章辉 on 2020/12/18.
//

#import <Foundation/Foundation.h>

//! Project version number for MingyuanyunContainer.
FOUNDATION_EXPORT double MingyuanyunContainerVersionNumber;

//! Project version string for MingyuanyunContainer.
FOUNDATION_EXPORT const unsigned char MingyuanyunContainerVersionString[];

// In this header, you should import all the public headers of your framework using statements like #import <MingyuanyunContainer/PublicHeader.h>

@import  ContainerCenter;

@interface MingyuanyunContainer : NSObject <CCContainer>

@property (class, nonatomic, strong, readonly)MingyuanyunContainer *sharedContainer;

@end
