(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[20],{

/***/ "./node_modules/_cache-loader@4.1.0@cache-loader/dist/cjs.js?!./node_modules/_babel-loader@8.2.2@babel-loader/lib/index.js!./node_modules/_cache-loader@4.1.0@cache-loader/dist/cjs.js?!./node_modules/_vue-loader@15.9.6@vue-loader/lib/index.js?!./runtime-src/views/user/setting.vue?vue&type=script&lang=js&":
/*!*******************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/_cache-loader@4.1.0@cache-loader/dist/cjs.js??ref--12-0!./node_modules/_babel-loader@8.2.2@babel-loader/lib!./node_modules/_cache-loader@4.1.0@cache-loader/dist/cjs.js??ref--0-0!./node_modules/_vue-loader@15.9.6@vue-loader/lib??vue-loader-options!./runtime-src/views/user/setting.vue?vue&type=script&lang=js& ***!
  \*******************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var core_js_modules_es_array_concat_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.array.concat.js */ "./node_modules/_core-js@3.8.2@core-js/modules/es.array.concat.js");
/* harmony import */ var core_js_modules_es_array_concat_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_concat_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Users_appcloud_appcloud_jenkins_project_pmcSDKsmartengineer_longzh_20210105_113838_8_node_modules_babel_runtime_7_12_5_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/_@babel_runtime@7.12.5@@babel/runtime/helpers/esm/objectSpread2 */ "./node_modules/_@babel_runtime@7.12.5@@babel/runtime/helpers/esm/objectSpread2.js");
/* harmony import */ var _components_app_cell__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @components/app-cell */ "./runtime-src/components/app-cell/index.vue");
/* harmony import */ var _services_login_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @services/login-service */ "./runtime-src/services/login-service.js");
/* harmony import */ var _src_config_page_setting_config__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @src/config/page/setting-config */ "./runtime-src/config/page/setting-config.js");
/* harmony import */ var _services_router_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @services/router-service */ "./runtime-src/services/router-service.js");
/* harmony import */ var _yl_app_jssdk_context__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @yl-app-jssdk/context */ "./node_modules/_@yl-app-jssdk_context@1.0.7@@yl-app-jssdk/context/index.js");
/* harmony import */ var _yl_app_jssdk_context__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_yl_app_jssdk_context__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var vuex__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! vuex */ "./node_modules/_vuex@3.6.0@vuex/dist/vuex.esm.js");


//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
// import AppButton from '@components/app-button';






var key = '';
/* harmony default export */ __webpack_exports__["default"] = ({
  components: {
    Cell: _components_app_cell__WEBPACK_IMPORTED_MODULE_2__["default"] // AppButton,

  },
  data: function data() {
    return {
      onlyWifi: 'off',
      showPopup: false,
      clearing: false,
      clearFail: false,
      items: Object(_src_config_page_setting_config__WEBPACK_IMPORTED_MODULE_4__["default"])()
    };
  },
  computed: Object(_Users_appcloud_appcloud_jenkins_project_pmcSDKsmartengineer_longzh_20210105_113838_8_node_modules_babel_runtime_7_12_5_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_1__["default"])({}, Object(vuex__WEBPACK_IMPORTED_MODULE_7__["mapState"])({
    isAppStoreAccount: function isAppStoreAccount(state) {
      return state.app.isAppStoreAccount;
    }
  })),
  activated: function activated() {
    this.items = Object(_src_config_page_setting_config__WEBPACK_IMPORTED_MODULE_4__["default"])();
    var user = _yl_app_jssdk_context__WEBPACK_IMPORTED_MODULE_6___default.a.getUserContext();
    key = "download_data_inwifi_".concat(user.tenantCode, "_").concat(user.account);
    this.init();
  },
  methods: {
    // 初始化
    init: function init() {
      this.onlyWifi = localStorage.getItem(key);
    },
    onlyWifiSwitch: function onlyWifiSwitch(check) {
      this.onlyWifi = check;
      localStorage.setItem(key, check);
    },
    logout: function logout() {
      this.$dialog.confirm({
        title: '',
        message: '确定退出登录？'
      }).then(function () {
        return _services_login_service__WEBPACK_IMPORTED_MODULE_3__["default"].logout();
      });
    },
    toSetting: function toSetting(item) {
      return _services_router_service__WEBPACK_IMPORTED_MODULE_5__["default"].goto(item);
    }
  }
});

/***/ }),

/***/ "./node_modules/_cache-loader@4.1.0@cache-loader/dist/cjs.js?{\"cacheDirectory\":\"node_modules/.cache/vue-loader\",\"cacheIdentifier\":\"123502b7-vue-loader-template\"}!./node_modules/_vue-loader@15.9.6@vue-loader/lib/loaders/templateLoader.js?!./node_modules/_cache-loader@4.1.0@cache-loader/dist/cjs.js?!./node_modules/_vue-loader@15.9.6@vue-loader/lib/index.js?!./runtime-src/views/user/setting.vue?vue&type=template&id=8b35af8a&scoped=true&":
/*!**************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/_cache-loader@4.1.0@cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"123502b7-vue-loader-template"}!./node_modules/_vue-loader@15.9.6@vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/_cache-loader@4.1.0@cache-loader/dist/cjs.js??ref--0-0!./node_modules/_vue-loader@15.9.6@vue-loader/lib??vue-loader-options!./runtime-src/views/user/setting.vue?vue&type=template&id=8b35af8a&scoped=true& ***!
  \**************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    { staticClass: "user-setting-wrapper" },
    [
      _c("app-header", { attrs: { title: "设置" } }),
      _c(
        "div",
        { staticClass: "user-setting-content" },
        [
          _c("van-switch-cell", {
            attrs: {
              title: "仅WiFi上传下载",
              "active-value": "1",
              "inactive-value": "0"
            },
            on: { change: _vm.onlyWifiSwitch },
            model: {
              value: _vm.onlyWifi,
              callback: function($$v) {
                _vm.onlyWifi = $$v
              },
              expression: "onlyWifi"
            }
          }),
          !_vm.isAppStoreAccount
            ? _vm._l(_vm.items, function(item) {
                return _c("cell", {
                  key: item.name,
                  attrs: { title: item.name },
                  on: {
                    click: function($event) {
                      return _vm.toSetting(item)
                    }
                  }
                })
              })
            : _vm._e()
        ],
        2
      )
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/_css-loader@3.6.0@css-loader/dist/cjs.js?!./node_modules/_vue-loader@15.9.6@vue-loader/lib/loaders/stylePostLoader.js!./node_modules/_postcss-loader@3.0.0@postcss-loader/src/index.js?!./node_modules/_sass-loader@8.0.2@sass-loader/dist/cjs.js?!./node_modules/_cache-loader@4.1.0@cache-loader/dist/cjs.js?!./node_modules/_vue-loader@15.9.6@vue-loader/lib/index.js?!./runtime-src/views/user/setting.vue?vue&type=style&index=0&id=8b35af8a&lang=scss&scoped=true&":
/*!*************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/_css-loader@3.6.0@css-loader/dist/cjs.js??ref--8-oneOf-1-1!./node_modules/_vue-loader@15.9.6@vue-loader/lib/loaders/stylePostLoader.js!./node_modules/_postcss-loader@3.0.0@postcss-loader/src??ref--8-oneOf-1-2!./node_modules/_sass-loader@8.0.2@sass-loader/dist/cjs.js??ref--8-oneOf-1-3!./node_modules/_cache-loader@4.1.0@cache-loader/dist/cjs.js??ref--0-0!./node_modules/_vue-loader@15.9.6@vue-loader/lib??vue-loader-options!./runtime-src/views/user/setting.vue?vue&type=style&index=0&id=8b35af8a&lang=scss&scoped=true& ***!
  \*************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../node_modules/_css-loader@3.6.0@css-loader/dist/runtime/api.js */ "./node_modules/_css-loader@3.6.0@css-loader/dist/runtime/api.js");
exports = ___CSS_LOADER_API_IMPORT___(true);
// Module
exports.push([module.i, ".custom-theme .color[data-v-8b35af8a] {\n  color: \"#2c5cf7\";\n}\n.custom-theme .border-color[data-v-8b35af8a] {\n  border-color: \"#2c5cf7\";\n}\n.custom-theme .border-color[data-v-8b35af8a]::after {\n    border-color: \"#2c5cf7\";\n}\n.custom-theme .gradient-background[data-v-8b35af8a] {\n  background: -webkit-gradient(linear, left top, right top, from(#2c5cf7), to(rgba(44, 92, 247, 0.8)));\n  background: linear-gradient(90deg, #2c5cf7 0%, rgba(44, 92, 247, 0.8) 100%);\n}\n.custom-theme .color[data-v-8b35af8a] {\n  color: #2c5cf7;\n}\n.custom-theme .border-color[data-v-8b35af8a] {\n  border-color: #2c5cf7;\n}\n.custom-theme .border-color[data-v-8b35af8a]::after {\n    border-color: #2c5cf7;\n}\n.test-theme .color[data-v-8b35af8a] {\n  color: #f00;\n}\n.test-theme .border-color[data-v-8b35af8a] {\n  border-color: #f00;\n}\n.test-theme .border-color[data-v-8b35af8a]::after {\n    border-color: #f00;\n}\n.user-setting-wrapper .user-setting-content[data-v-8b35af8a] {\n  margin-top: 10px;\n}\n.user-setting-wrapper[data-v-8b35af8a] .van-cell {\n  font-size: 16px !important;\n  padding: 15px;\n}\n.user-setting-wrapper[data-v-8b35af8a] .van-icon-arrow {\n  color: #8a8a8a;\n}\n.user-setting-wrapper .app-cell[data-v-8b35af8a] {\n  margin-top: 10px;\n}\n.user-setting-wrapper .logout[data-v-8b35af8a] {\n  width: 100%;\n  padding: 14px;\n  font-size: 16px;\n  color: #f14848;\n  text-align: center;\n  background: #ffffff;\n}\n.svg[data-v-8b35af8a] {\n  -webkit-transform: rotate(-90deg);\n          transform: rotate(-90deg);\n}\n.loading-box[data-v-8b35af8a] {\n  text-align: center;\n  padding: 0 30px;\n}\n.loading-box .track[data-v-8b35af8a] {\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    -webkit-box-align: center;\n        -ms-flex-align: center;\n            align-items: center;\n    width: 160px;\n    height: 160px;\n    background: #ffffff;\n    border-radius: 50%;\n    border: 15px solid #ebf1ff;\n    margin: 30px auto;\n    position: relative;\n}\n.loading-box .track .text[data-v-8b35af8a] {\n      width: 100%;\n      text-align: center;\n      -webkit-box-flex: 1;\n          -ms-flex: 1;\n              flex: 1;\n}\n.loading-box .track .block[data-v-8b35af8a] {\n      position: absolute;\n      top: -15px;\n      left: -15px;\n      width: 160px;\n      height: 160px;\n      border-radius: 50%;\n      border: 15px solid transparent;\n      border-top-color: #2c5cf7;\n      clip: rect(0 80px 200px 0);\n      -webkit-transform: rotate(50deg);\n              transform: rotate(50deg);\n}\n.loading-box .track .loader-ani[data-v-8b35af8a] {\n      -webkit-animation: loading-data-v-8b35af8a 1.1s infinite linear;\n      animation: loading-data-v-8b35af8a 1.1s infinite linear;\n}\n@-webkit-keyframes loading-data-v-8b35af8a {\n0% {\n    -webkit-transform: rotate(30deg);\n    transform: rotate(30deg);\n}\n100% {\n    -webkit-transform: rotate(390deg);\n    transform: rotate(390deg);\n}\n}\n@keyframes loading-data-v-8b35af8a {\n0% {\n    -webkit-transform: rotate(30deg);\n    transform: rotate(30deg);\n}\n100% {\n    -webkit-transform: rotate(390deg);\n    transform: rotate(390deg);\n}\n}\n", "",{"version":3,"sources":["/Users/appcloud/appcloud/jenkins/project/pmcSDKsmartengineer/longzh_20210105_113838_8/runtime-src/styles/variable.scss","/Users/appcloud/appcloud/jenkins/project/pmcSDKsmartengineer/longzh_20210105_113838_8/runtime-src/views/user/setting.vue"],"names":[],"mappings":"AAkBE;EACE,gBAWsB;AAAA;AATxB;EACE,uBAQsB;AAAA;AAPtB;IACE,uBAMoB;AAAA;AAD1B;EAGI,oGAIC;EAJD,2EAIC;AAAA;AAlBH;EACE,cAsBoB;AAAA;AApBtB;EACE,qBAmBoB;AAAA;AAlBpB;IACE,qBAiBkB;AAAA;AAvBtB;EACE,WA0BiB;AAAA;AAxBnB;EACE,kBAuBiB;AAAA;AAtBjB;IACE,kBAqBe;AAAA;ACmDrB;EAEI,gBAAgB;AAAA;AAFpB;EAMI,0BAA0B;EAC1B,aAAa;AAAA;AAPjB;EAWI,cAAc;AAAA;AAXlB;EAeI,gBAAgB;AAAA;AAfpB;EAmBI,WAAW;EACX,aAAa;EACb,eAAe;EACf,cAAc;EACd,kBAAkB;EAClB,mBAAmB;AAAA;AAIvB;EACE,iCAAyB;UAAzB,yBAAyB;AAAA;AAG3B;EACE,kBAAkB;EAClB,eAAe;AAAA;AAFjB;IAKI,oBAAa;IAAb,oBAAa;IAAb,aAAa;IACb,yBAAmB;QAAnB,sBAAmB;YAAnB,mBAAmB;IACnB,YAAY;IACZ,aAAa;IACb,mBAAmB;IACnB,kBAAkB;IAClB,0BAA0B;IAC1B,iBAAiB;IACjB,kBAAkB;AAAA;AAbtB;MAgBM,WAAW;MACX,kBAAkB;MAClB,mBAAO;UAAP,WAAO;cAAP,OAAO;AAAA;AAlBb;MAsBM,kBAAkB;MAClB,UAAU;MACV,WAAW;MACX,YAAY;MACZ,aAAa;MACb,kBAAkB;MAClB,8BAA8B;MAC9B,yBAAyB;MACzB,0BAA0B;MAC1B,gCAAwB;cAAxB,wBAAwB;AAAA;AA/B9B;MAmCM,+DAA+C;MAC/C,uDAAuC;AAAA;AAK7C;AACE;IACE,gCAAgC;IAChC,wBAAwB;AAAA;AAE1B;IACE,iCAAiC;IACjC,yBAAyB;AAAA;AAAA;AAP7B;AACE;IACE,gCAAgC;IAChC,wBAAwB;AAAA;AAE1B;IACE,iCAAiC;IACjC,yBAAyB;AAAA;AAAA","file":"setting.vue","sourcesContent":["// 主题色\n$color-theme: #2c5cf7;\n$color-theme-light: #2c5cf7;\n// border颜色\n$color-border: #ebebeb;\n// CONTENT\n$color-body-bg: rgba(244, 244, 244, 1);\n$color-text: #202020;\n$color-text-light: #606060;\n$color-red: #eb544d;\n$color-blue: #0099ff;\n$color-purple: #a13eff;\n$color-grey: #a0a0a0;\n$color-green: #00cb59;\n$color-icon: #8a8a8a;\n$color-error: #ff3b30;\n\n@mixin theme($color-theme) {\n  .color {\n    color: $color-theme;\n  }\n  .border-color {\n    border-color: $color-theme;\n    &::after {\n      border-color: $color-theme;\n    }\n  }\n}\n\n.custom-theme {\n  @include theme('#2c5cf7');\n  .gradient-background {\n    background: linear-gradient(\n      90deg,\n      rgba($color-theme, 1) 0%,\n      rgba($color-theme, 0.8) 100%\n    );\n  }\n}\n\n.custom-theme {\n  @include theme(#2c5cf7);\n}\n\n.test-theme {\n  @include theme(#f00);\n}\n","@import \"~@src/styles/variable.scss\";\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n.user-setting-wrapper {\n  .user-setting-content {\n    margin-top: 10px;\n  }\n\n  /deep/.van-cell {\n    font-size: 16px !important;\n    padding: 15px;\n  }\n\n  /deep/.van-icon-arrow {\n    color: #8a8a8a;\n  }\n\n  .app-cell {\n    margin-top: 10px;\n  }\n\n  .logout {\n    width: 100%;\n    padding: 14px;\n    font-size: 16px;\n    color: #f14848;\n    text-align: center;\n    background: #ffffff;\n  }\n}\n\n.svg {\n  transform: rotate(-90deg);\n}\n\n.loading-box {\n  text-align: center;\n  padding: 0 30px;\n\n  .track {\n    display: flex;\n    align-items: center;\n    width: 160px;\n    height: 160px;\n    background: #ffffff;\n    border-radius: 50%;\n    border: 15px solid #ebf1ff;\n    margin: 30px auto;\n    position: relative;\n\n    .text {\n      width: 100%;\n      text-align: center;\n      flex: 1;\n    }\n\n    .block {\n      position: absolute;\n      top: -15px;\n      left: -15px;\n      width: 160px;\n      height: 160px;\n      border-radius: 50%;\n      border: 15px solid transparent;\n      border-top-color: #2c5cf7;\n      clip: rect(0 80px 200px 0);\n      transform: rotate(50deg);\n    }\n\n    .loader-ani {\n      -webkit-animation: loading 1.1s infinite linear;\n      animation: loading 1.1s infinite linear;\n    }\n  }\n}\n\n@keyframes loading {\n  0% {\n    -webkit-transform: rotate(30deg);\n    transform: rotate(30deg);\n  }\n  100% {\n    -webkit-transform: rotate(390deg);\n    transform: rotate(390deg);\n  }\n}\n"]}]);
// Exports
module.exports = exports;


/***/ }),

/***/ "./node_modules/_vue-style-loader@4.1.2@vue-style-loader/index.js?!./node_modules/_css-loader@3.6.0@css-loader/dist/cjs.js?!./node_modules/_vue-loader@15.9.6@vue-loader/lib/loaders/stylePostLoader.js!./node_modules/_postcss-loader@3.0.0@postcss-loader/src/index.js?!./node_modules/_sass-loader@8.0.2@sass-loader/dist/cjs.js?!./node_modules/_cache-loader@4.1.0@cache-loader/dist/cjs.js?!./node_modules/_vue-loader@15.9.6@vue-loader/lib/index.js?!./runtime-src/views/user/setting.vue?vue&type=style&index=0&id=8b35af8a&lang=scss&scoped=true&":
/*!***************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/_vue-style-loader@4.1.2@vue-style-loader??ref--8-oneOf-1-0!./node_modules/_css-loader@3.6.0@css-loader/dist/cjs.js??ref--8-oneOf-1-1!./node_modules/_vue-loader@15.9.6@vue-loader/lib/loaders/stylePostLoader.js!./node_modules/_postcss-loader@3.0.0@postcss-loader/src??ref--8-oneOf-1-2!./node_modules/_sass-loader@8.0.2@sass-loader/dist/cjs.js??ref--8-oneOf-1-3!./node_modules/_cache-loader@4.1.0@cache-loader/dist/cjs.js??ref--0-0!./node_modules/_vue-loader@15.9.6@vue-loader/lib??vue-loader-options!./runtime-src/views/user/setting.vue?vue&type=style&index=0&id=8b35af8a&lang=scss&scoped=true& ***!
  \***************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(/*! !../../../node_modules/_css-loader@3.6.0@css-loader/dist/cjs.js??ref--8-oneOf-1-1!../../../node_modules/_vue-loader@15.9.6@vue-loader/lib/loaders/stylePostLoader.js!../../../node_modules/_postcss-loader@3.0.0@postcss-loader/src??ref--8-oneOf-1-2!../../../node_modules/_sass-loader@8.0.2@sass-loader/dist/cjs.js??ref--8-oneOf-1-3!../../../node_modules/_cache-loader@4.1.0@cache-loader/dist/cjs.js??ref--0-0!../../../node_modules/_vue-loader@15.9.6@vue-loader/lib??vue-loader-options!./setting.vue?vue&type=style&index=0&id=8b35af8a&lang=scss&scoped=true& */ "./node_modules/_css-loader@3.6.0@css-loader/dist/cjs.js?!./node_modules/_vue-loader@15.9.6@vue-loader/lib/loaders/stylePostLoader.js!./node_modules/_postcss-loader@3.0.0@postcss-loader/src/index.js?!./node_modules/_sass-loader@8.0.2@sass-loader/dist/cjs.js?!./node_modules/_cache-loader@4.1.0@cache-loader/dist/cjs.js?!./node_modules/_vue-loader@15.9.6@vue-loader/lib/index.js?!./runtime-src/views/user/setting.vue?vue&type=style&index=0&id=8b35af8a&lang=scss&scoped=true&");
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var add = __webpack_require__(/*! ../../../node_modules/_vue-style-loader@4.1.2@vue-style-loader/lib/addStylesClient.js */ "./node_modules/_vue-style-loader@4.1.2@vue-style-loader/lib/addStylesClient.js").default
var update = add("6851ba77", content, false, {"sourceMap":true,"shadowMode":false});
// Hot Module Replacement
if(false) {}

/***/ }),

/***/ "./runtime-src/config/page/setting-config.js":
/*!***************************************************!*\
  !*** ./runtime-src/config/page/setting-config.js ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return settingConfig; });
/* harmony import */ var core_js_modules_es_array_splice_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.array.splice.js */ "./node_modules/_core-js@3.8.2@core-js/modules/es.array.splice.js");
/* harmony import */ var core_js_modules_es_array_splice_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_splice_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _src_config_sub_app_white_list__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/src/config/sub-app-white-list */ "./src/config/sub-app-white-list.js");


function settingConfig() {
  var settingConfigData = [{
    name: '批量下载离线数据',
    router: '/zjapp/user-batch-download'
  }, {
    name: '自动下载内容',
    router: '/zjapp/auto-download-setting'
  }, {
    name: '清除数据',
    confirm: {
      message: '清除全部已下载和在本机创建的数据，不影响已上传的数据，确定要清除吗?'
    },
    router: '/zjapp/super-data-clear'
  }];

  if (Object(_src_config_sub_app_white_list__WEBPACK_IMPORTED_MODULE_1__["showZhkfModlue"])()) {
    var item = {
      name: '移动验房设置',
      router: '/zhkf/user/setting'
    };
    settingConfigData.splice(2, 0, item);
  }

  return settingConfigData;
}

/***/ }),

/***/ "./runtime-src/views/user/setting.vue":
/*!********************************************!*\
  !*** ./runtime-src/views/user/setting.vue ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _setting_vue_vue_type_template_id_8b35af8a_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./setting.vue?vue&type=template&id=8b35af8a&scoped=true& */ "./runtime-src/views/user/setting.vue?vue&type=template&id=8b35af8a&scoped=true&");
/* harmony import */ var _setting_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./setting.vue?vue&type=script&lang=js& */ "./runtime-src/views/user/setting.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _setting_vue_vue_type_style_index_0_id_8b35af8a_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./setting.vue?vue&type=style&index=0&id=8b35af8a&lang=scss&scoped=true& */ "./runtime-src/views/user/setting.vue?vue&type=style&index=0&id=8b35af8a&lang=scss&scoped=true&");
/* harmony import */ var _node_modules_vue_loader_15_9_6_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../node_modules/_vue-loader@15.9.6@vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/_vue-loader@15.9.6@vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_15_9_6_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _setting_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _setting_vue_vue_type_template_id_8b35af8a_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _setting_vue_vue_type_template_id_8b35af8a_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "8b35af8a",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "runtime-src/views/user/setting.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./runtime-src/views/user/setting.vue?vue&type=script&lang=js&":
/*!*********************************************************************!*\
  !*** ./runtime-src/views/user/setting.vue?vue&type=script&lang=js& ***!
  \*********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_cache_loader_4_1_0_cache_loader_dist_cjs_js_ref_12_0_node_modules_babel_loader_8_2_2_babel_loader_lib_index_js_node_modules_cache_loader_4_1_0_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_15_9_6_vue_loader_lib_index_js_vue_loader_options_setting_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/_cache-loader@4.1.0@cache-loader/dist/cjs.js??ref--12-0!../../../node_modules/_babel-loader@8.2.2@babel-loader/lib!../../../node_modules/_cache-loader@4.1.0@cache-loader/dist/cjs.js??ref--0-0!../../../node_modules/_vue-loader@15.9.6@vue-loader/lib??vue-loader-options!./setting.vue?vue&type=script&lang=js& */ "./node_modules/_cache-loader@4.1.0@cache-loader/dist/cjs.js?!./node_modules/_babel-loader@8.2.2@babel-loader/lib/index.js!./node_modules/_cache-loader@4.1.0@cache-loader/dist/cjs.js?!./node_modules/_vue-loader@15.9.6@vue-loader/lib/index.js?!./runtime-src/views/user/setting.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_cache_loader_4_1_0_cache_loader_dist_cjs_js_ref_12_0_node_modules_babel_loader_8_2_2_babel_loader_lib_index_js_node_modules_cache_loader_4_1_0_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_15_9_6_vue_loader_lib_index_js_vue_loader_options_setting_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./runtime-src/views/user/setting.vue?vue&type=style&index=0&id=8b35af8a&lang=scss&scoped=true&":
/*!******************************************************************************************************!*\
  !*** ./runtime-src/views/user/setting.vue?vue&type=style&index=0&id=8b35af8a&lang=scss&scoped=true& ***!
  \******************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_4_1_2_vue_style_loader_index_js_ref_8_oneOf_1_0_node_modules_css_loader_3_6_0_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_loader_15_9_6_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_3_0_0_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_8_0_2_sass_loader_dist_cjs_js_ref_8_oneOf_1_3_node_modules_cache_loader_4_1_0_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_15_9_6_vue_loader_lib_index_js_vue_loader_options_setting_vue_vue_type_style_index_0_id_8b35af8a_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/_vue-style-loader@4.1.2@vue-style-loader??ref--8-oneOf-1-0!../../../node_modules/_css-loader@3.6.0@css-loader/dist/cjs.js??ref--8-oneOf-1-1!../../../node_modules/_vue-loader@15.9.6@vue-loader/lib/loaders/stylePostLoader.js!../../../node_modules/_postcss-loader@3.0.0@postcss-loader/src??ref--8-oneOf-1-2!../../../node_modules/_sass-loader@8.0.2@sass-loader/dist/cjs.js??ref--8-oneOf-1-3!../../../node_modules/_cache-loader@4.1.0@cache-loader/dist/cjs.js??ref--0-0!../../../node_modules/_vue-loader@15.9.6@vue-loader/lib??vue-loader-options!./setting.vue?vue&type=style&index=0&id=8b35af8a&lang=scss&scoped=true& */ "./node_modules/_vue-style-loader@4.1.2@vue-style-loader/index.js?!./node_modules/_css-loader@3.6.0@css-loader/dist/cjs.js?!./node_modules/_vue-loader@15.9.6@vue-loader/lib/loaders/stylePostLoader.js!./node_modules/_postcss-loader@3.0.0@postcss-loader/src/index.js?!./node_modules/_sass-loader@8.0.2@sass-loader/dist/cjs.js?!./node_modules/_cache-loader@4.1.0@cache-loader/dist/cjs.js?!./node_modules/_vue-loader@15.9.6@vue-loader/lib/index.js?!./runtime-src/views/user/setting.vue?vue&type=style&index=0&id=8b35af8a&lang=scss&scoped=true&");
/* harmony import */ var _node_modules_vue_style_loader_4_1_2_vue_style_loader_index_js_ref_8_oneOf_1_0_node_modules_css_loader_3_6_0_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_loader_15_9_6_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_3_0_0_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_8_0_2_sass_loader_dist_cjs_js_ref_8_oneOf_1_3_node_modules_cache_loader_4_1_0_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_15_9_6_vue_loader_lib_index_js_vue_loader_options_setting_vue_vue_type_style_index_0_id_8b35af8a_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_4_1_2_vue_style_loader_index_js_ref_8_oneOf_1_0_node_modules_css_loader_3_6_0_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_loader_15_9_6_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_3_0_0_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_8_0_2_sass_loader_dist_cjs_js_ref_8_oneOf_1_3_node_modules_cache_loader_4_1_0_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_15_9_6_vue_loader_lib_index_js_vue_loader_options_setting_vue_vue_type_style_index_0_id_8b35af8a_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_4_1_2_vue_style_loader_index_js_ref_8_oneOf_1_0_node_modules_css_loader_3_6_0_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_loader_15_9_6_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_3_0_0_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_8_0_2_sass_loader_dist_cjs_js_ref_8_oneOf_1_3_node_modules_cache_loader_4_1_0_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_15_9_6_vue_loader_lib_index_js_vue_loader_options_setting_vue_vue_type_style_index_0_id_8b35af8a_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_4_1_2_vue_style_loader_index_js_ref_8_oneOf_1_0_node_modules_css_loader_3_6_0_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_loader_15_9_6_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_3_0_0_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_8_0_2_sass_loader_dist_cjs_js_ref_8_oneOf_1_3_node_modules_cache_loader_4_1_0_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_15_9_6_vue_loader_lib_index_js_vue_loader_options_setting_vue_vue_type_style_index_0_id_8b35af8a_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ "./runtime-src/views/user/setting.vue?vue&type=template&id=8b35af8a&scoped=true&":
/*!***************************************************************************************!*\
  !*** ./runtime-src/views/user/setting.vue?vue&type=template&id=8b35af8a&scoped=true& ***!
  \***************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_cache_loader_4_1_0_cache_loader_dist_cjs_js_cacheDirectory_node_modules_cache_vue_loader_cacheIdentifier_123502b7_vue_loader_template_node_modules_vue_loader_15_9_6_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_cache_loader_4_1_0_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_15_9_6_vue_loader_lib_index_js_vue_loader_options_setting_vue_vue_type_template_id_8b35af8a_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/_cache-loader@4.1.0@cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"123502b7-vue-loader-template"}!../../../node_modules/_vue-loader@15.9.6@vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/_cache-loader@4.1.0@cache-loader/dist/cjs.js??ref--0-0!../../../node_modules/_vue-loader@15.9.6@vue-loader/lib??vue-loader-options!./setting.vue?vue&type=template&id=8b35af8a&scoped=true& */ "./node_modules/_cache-loader@4.1.0@cache-loader/dist/cjs.js?{\"cacheDirectory\":\"node_modules/.cache/vue-loader\",\"cacheIdentifier\":\"123502b7-vue-loader-template\"}!./node_modules/_vue-loader@15.9.6@vue-loader/lib/loaders/templateLoader.js?!./node_modules/_cache-loader@4.1.0@cache-loader/dist/cjs.js?!./node_modules/_vue-loader@15.9.6@vue-loader/lib/index.js?!./runtime-src/views/user/setting.vue?vue&type=template&id=8b35af8a&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_cache_loader_4_1_0_cache_loader_dist_cjs_js_cacheDirectory_node_modules_cache_vue_loader_cacheIdentifier_123502b7_vue_loader_template_node_modules_vue_loader_15_9_6_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_cache_loader_4_1_0_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_15_9_6_vue_loader_lib_index_js_vue_loader_options_setting_vue_vue_type_template_id_8b35af8a_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_cache_loader_4_1_0_cache_loader_dist_cjs_js_cacheDirectory_node_modules_cache_vue_loader_cacheIdentifier_123502b7_vue_loader_template_node_modules_vue_loader_15_9_6_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_cache_loader_4_1_0_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_15_9_6_vue_loader_lib_index_js_vue_loader_options_setting_vue_vue_type_template_id_8b35af8a_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);
//# sourceMappingURL=20.js.map