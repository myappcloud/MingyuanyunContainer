Pod::Spec.new do |s|
  s.name             = 'MingyuanyunContainer'
  s.version          = '0.1.0'
  s.summary          = 'Mingyuanyun Container'

  s.homepage         = 'http://git.dev.cmrh.com/ios-group/mo-dou/myy-container'
  s.license          = 'MIT'
  s.author           = { 'myappcloud' => 'myappcloud@mingyuanyun.com' }
  s.source           = { :git => 'http://git.dev.cmrh.com/ios-group/mo-dou/myy-container.git', :tag => s.version.to_s }

  s.cocoapods_version       = '>= 1.6.1'
  s.swift_version           = '5.0'
  s.ios.deployment_target   = '9.0'
  s.frameworks             = 'UIKit'

  s.public_header_files  =  'MingyuanyunContainer.framework/Headers/*.h'
  s.vendored_frameworks  =  'MingyuanyunContainer.framework'

  # s.resources = 'com.mysoft.engineertooltest.bundle',
  #               'SdkPluginLibResources.bundle'

  # s.dependency  'SAMKeychain', '~> 1.5.0'
  # s.dependency  'Cordova', '5.1.1'
  # s.dependency  'AliyunOSSiOS', '2.10.7'
  # s.dependency  'LzmaSDK-ObjC', '2.1.1'
  # s.dependency  'Masonry'
  # s.dependency  'SSZipArchive', '~> 2.2.2'
  # s.dependency  'TFHpple', '2.0.0'
  # s.dependency  'MBProgressHUD', '~> 1.1.0'
  # s.dependency  'AFNetworking', '~> 4.0.0'
  # s.dependency  'FMDB', '2.7.5'
  # s.dependency  'MMKV'
  # s.dependency  'SDWebImage', '~> 5.0.0'
  # s.dependency  'FrameAccessor', '2.0'
  # s.dependency  'AWSS3', '2.13.0'
  # s.dependency  'ACEDrawingView', '2.2.1'

end
