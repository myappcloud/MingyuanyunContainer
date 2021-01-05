(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[16],{

/***/ "./node_modules/_cache-loader@4.1.0@cache-loader/dist/cjs.js?!./node_modules/_babel-loader@8.2.2@babel-loader/lib/index.js!./node_modules/_cache-loader@4.1.0@cache-loader/dist/cjs.js?!./node_modules/_vue-loader@15.9.6@vue-loader/lib/index.js?!./runtime-src/views/user/about.vue?vue&type=script&lang=js&":
/*!*****************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/_cache-loader@4.1.0@cache-loader/dist/cjs.js??ref--12-0!./node_modules/_babel-loader@8.2.2@babel-loader/lib!./node_modules/_cache-loader@4.1.0@cache-loader/dist/cjs.js??ref--0-0!./node_modules/_vue-loader@15.9.6@vue-loader/lib??vue-loader-options!./runtime-src/views/user/about.vue?vue&type=script&lang=js& ***!
  \*****************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var core_js_modules_es_array_for_each_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.array.for-each.js */ "./node_modules/_core-js@3.8.2@core-js/modules/es.array.for-each.js");
/* harmony import */ var core_js_modules_es_array_for_each_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_for_each_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_object_keys_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.object.keys.js */ "./node_modules/_core-js@3.8.2@core-js/modules/es.object.keys.js");
/* harmony import */ var core_js_modules_es_object_keys_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_keys_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/web.dom-collections.for-each.js */ "./node_modules/_core-js@3.8.2@core-js/modules/web.dom-collections.for-each.js");
/* harmony import */ var core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _src_common_version__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @src/common/version */ "./runtime-src/common/version.js");
/* harmony import */ var _components_app_button_index_vue__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @components/app-button/index.vue */ "./runtime-src/components/app-button/index.vue");
/* harmony import */ var _components_app_cell_index_vue__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @components/app-cell/index.vue */ "./runtime-src/components/app-cell/index.vue");
/* harmony import */ var _src_common_plugin__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @src/common/plugin */ "./runtime-src/common/plugin.js");
/* harmony import */ var _yl_app_jssdk_path__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @yl-app-jssdk/path */ "./node_modules/_@yl-app-jssdk_path@1.0.6@@yl-app-jssdk/path/index.js");
/* harmony import */ var _yl_app_jssdk_path__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_yl_app_jssdk_path__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _src_config_const__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @src/config/const */ "./runtime-src/config/const.js");
/* harmony import */ var _yl_localstorage__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @yl/localstorage */ "./node_modules/_@yl_localstorage@1.0.6@@yl/localstorage/index.js");
/* harmony import */ var _yl_localstorage__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_yl_localstorage__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _config_modules__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @config/modules */ "./runtime-src/config/modules.js");
/* harmony import */ var _config_modules__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_config_modules__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _public_resource_qr_app_png__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @/public/resource/qr-app.png */ "./public/resource/qr-app.png");
/* harmony import */ var _public_resource_qr_app_png__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(_public_resource_qr_app_png__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var _public_resource_qr_wechat_png__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @/public/resource/qr-wechat.png */ "./public/resource/qr-wechat.png");
/* harmony import */ var _public_resource_qr_wechat_png__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(_public_resource_qr_wechat_png__WEBPACK_IMPORTED_MODULE_12__);



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
//
//










/* harmony default export */ __webpack_exports__["default"] = ({
  components: {
    AppButton: _components_app_button_index_vue__WEBPACK_IMPORTED_MODULE_4__["default"],
    AppCell: _components_app_cell_index_vue__WEBPACK_IMPORTED_MODULE_5__["default"]
  },
  data: function data() {
    return {
      appName: '明源智慧工程',
      appVersion: '',
      show: false,
      qrPhoto: '',
      savePhoto: '',
      modulesList: _config_modules__WEBPACK_IMPORTED_MODULE_10___default.a,
      // 子应用列表
      subVersion: {},
      // 子应用版本号
      subCount: 0,
      // 点击次数，超过5次显示子应用版本
      subVisable: false // 是否显示子应用版本号

    };
  },
  activated: function activated() {
    var versionInfo = _src_common_version__WEBPACK_IMPORTED_MODULE_3__["default"].getAppFullVersion(true);
    this.appVersion = "V".concat(versionInfo.fullVersion);
    this.getSubVersion();
  },
  methods: {
    showAppQR: function showAppQR() {
      this.qrPhoto = _public_resource_qr_app_png__WEBPACK_IMPORTED_MODULE_11___default.a;
      this.savePhoto = 'resource/qr-app-save.png';
      this.show = true;
    },
    showWechatQr: function showWechatQr() {
      this.qrPhoto = _public_resource_qr_wechat_png__WEBPACK_IMPORTED_MODULE_12___default.a;
      this.savePhoto = 'resource/qr-wechat-save.png';
      this.show = true;
    },
    // 显示子应用版本
    showSubVersion: function showSubVersion() {
      this.subCount++;

      if (this.subCount > 5) {
        this.subVisable = true;
        this.subCount = 0;
      }
    },
    // 隐藏子应用版本展示
    hideSubVersion: function hideSubVersion() {
      this.subVisable = false;
    },
    // 获取子应用版本
    getSubVersion: function getSubVersion() {
      var _this = this;

      var version = _yl_localstorage__WEBPACK_IMPORTED_MODULE_9___default.a.getObject(_src_config_const__WEBPACK_IMPORTED_MODULE_8__["default"].VERSION); // 循环子应用，获取子应用版本

      Object.keys(_config_modules__WEBPACK_IMPORTED_MODULE_10___default.a).forEach(function (v) {
        _this.subVersion[v] = version && version[v] || '暂无版本';
      });
    },
    save: function save() {
      var _this2 = this;

      var qrsrc = '';

      if (true) {
        qrsrc = window.location.origin + '/' + this.savePhoto;
      } else {}

      _src_common_plugin__WEBPACK_IMPORTED_MODULE_6__["default"].savePicToAlbum(qrsrc).then(function () {
        _this2.$toast('保存成功');
      }).catch(function () {
        _this2.$toast('保存失败，请开启打开保存权限');
      });
    }
  }
});

/***/ }),

/***/ "./node_modules/_cache-loader@4.1.0@cache-loader/dist/cjs.js?{\"cacheDirectory\":\"node_modules/.cache/vue-loader\",\"cacheIdentifier\":\"123502b7-vue-loader-template\"}!./node_modules/_vue-loader@15.9.6@vue-loader/lib/loaders/templateLoader.js?!./node_modules/_cache-loader@4.1.0@cache-loader/dist/cjs.js?!./node_modules/_vue-loader@15.9.6@vue-loader/lib/index.js?!./runtime-src/views/user/about.vue?vue&type=template&id=3a33e090&scoped=true&":
/*!************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/_cache-loader@4.1.0@cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"123502b7-vue-loader-template"}!./node_modules/_vue-loader@15.9.6@vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/_cache-loader@4.1.0@cache-loader/dist/cjs.js??ref--0-0!./node_modules/_vue-loader@15.9.6@vue-loader/lib??vue-loader-options!./runtime-src/views/user/about.vue?vue&type=template&id=3a33e090&scoped=true& ***!
  \************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
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
    { staticClass: "about-wrapper" },
    [
      _c("app-header", { attrs: { title: "更多" } }),
      _c("div", { staticClass: "content van-hairline--top" }, [
        _c("img", {
          attrs: { src: __webpack_require__(/*! @assets/images/user/app-icon.png */ "./runtime-src/assets/images/user/app-icon.png") }
        }),
        _c("div", { staticClass: "info", on: { click: _vm.showSubVersion } }, [
          _vm._v(" " + _vm._s(_vm.appName) + " "),
          _c("br"),
          _vm._v(" " + _vm._s(_vm.appVersion) + " ")
        ]),
        _c(
          "div",
          {
            directives: [
              {
                name: "show",
                rawName: "v-show",
                value: _vm.subVisable,
                expression: "subVisable"
              }
            ]
          },
          [
            _vm._l(_vm.modulesList, function(item) {
              return _c("p", { key: item.code }, [
                _vm._v(
                  " " +
                    _vm._s(item.name) +
                    ":" +
                    _vm._s(_vm.subVersion[item.code]) +
                    " "
                )
              ])
            }),
            _c("button", { on: { click: _vm.hideSubVersion } }, [
              _vm._v("关闭")
            ])
          ],
          2
        )
      ]),
      _c("app-cell", {
        staticClass: "van-hairline--bottom",
        attrs: { title: "关注公众号" },
        on: { click: _vm.showWechatQr }
      }),
      _c(
        "app-cell",
        {
          staticClass: "van-hairline--bottom",
          attrs: { title: "二维码下载" },
          on: { click: _vm.showAppQR }
        },
        [
          _c("span", { attrs: { slot: "right" }, slot: "right" }, [
            _vm._v("iOS、安卓通用")
          ])
        ]
      ),
      _c(
        "a",
        { staticClass: "tel-box", attrs: { href: "tel: 0755-33004729" } },
        [
          _c(
            "app-cell",
            {
              staticClass: "van-hairline--bottom",
              attrs: { title: "客服热线", "is-link": false }
            },
            [
              _c(
                "a",
                {
                  staticClass: "tel",
                  attrs: { slot: "right", href: "tel: 0755-33004729" },
                  slot: "right"
                },
                [_vm._v(" 0755-33004729 ")]
              )
            ]
          )
        ],
        1
      ),
      _c(
        "van-popup",
        {
          staticClass: "qr-popup",
          model: {
            value: _vm.show,
            callback: function($$v) {
              _vm.show = $$v
            },
            expression: "show"
          }
        },
        [
          _c("div", { staticClass: "qr-wrapper" }, [
            _c(
              "div",
              { staticClass: "qr-content" },
              [
                _c("img", { attrs: { src: _vm.qrPhoto, width: "100%" } }),
                _vm._v(" " + _vm._s(_vm.appName) + " "),
                _c(
                  "app-button",
                  { staticClass: "qr-button", on: { click: _vm.save } },
                  [_vm._v("保存至相册")]
                )
              ],
              1
            )
          ])
        ]
      )
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/_css-loader@3.6.0@css-loader/dist/cjs.js?!./node_modules/_vue-loader@15.9.6@vue-loader/lib/loaders/stylePostLoader.js!./node_modules/_postcss-loader@3.0.0@postcss-loader/src/index.js?!./node_modules/_sass-loader@8.0.2@sass-loader/dist/cjs.js?!./node_modules/_cache-loader@4.1.0@cache-loader/dist/cjs.js?!./node_modules/_vue-loader@15.9.6@vue-loader/lib/index.js?!./runtime-src/views/user/about.vue?vue&type=style&index=0&id=3a33e090&lang=scss&scoped=true&":
/*!***********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/_css-loader@3.6.0@css-loader/dist/cjs.js??ref--8-oneOf-1-1!./node_modules/_vue-loader@15.9.6@vue-loader/lib/loaders/stylePostLoader.js!./node_modules/_postcss-loader@3.0.0@postcss-loader/src??ref--8-oneOf-1-2!./node_modules/_sass-loader@8.0.2@sass-loader/dist/cjs.js??ref--8-oneOf-1-3!./node_modules/_cache-loader@4.1.0@cache-loader/dist/cjs.js??ref--0-0!./node_modules/_vue-loader@15.9.6@vue-loader/lib??vue-loader-options!./runtime-src/views/user/about.vue?vue&type=style&index=0&id=3a33e090&lang=scss&scoped=true& ***!
  \***********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../node_modules/_css-loader@3.6.0@css-loader/dist/runtime/api.js */ "./node_modules/_css-loader@3.6.0@css-loader/dist/runtime/api.js");
var ___CSS_LOADER_GET_URL_IMPORT___ = __webpack_require__(/*! ../../../node_modules/_css-loader@3.6.0@css-loader/dist/runtime/getUrl.js */ "./node_modules/_css-loader@3.6.0@css-loader/dist/runtime/getUrl.js");
var ___CSS_LOADER_URL_IMPORT_0___ = __webpack_require__(/*! @assets/images/user/qr-bg.png */ "./runtime-src/assets/images/user/qr-bg.png");
exports = ___CSS_LOADER_API_IMPORT___(true);
var ___CSS_LOADER_URL_REPLACEMENT_0___ = ___CSS_LOADER_GET_URL_IMPORT___(___CSS_LOADER_URL_IMPORT_0___);
// Module
exports.push([module.i, ".custom-theme .color[data-v-3a33e090] {\n  color: \"#2c5cf7\";\n}\n.custom-theme .border-color[data-v-3a33e090] {\n  border-color: \"#2c5cf7\";\n}\n.custom-theme .border-color[data-v-3a33e090]::after {\n    border-color: \"#2c5cf7\";\n}\n.custom-theme .gradient-background[data-v-3a33e090] {\n  background: -webkit-gradient(linear, left top, right top, from(#2c5cf7), to(rgba(44, 92, 247, 0.8)));\n  background: linear-gradient(90deg, #2c5cf7 0%, rgba(44, 92, 247, 0.8) 100%);\n}\n.custom-theme .color[data-v-3a33e090] {\n  color: #2c5cf7;\n}\n.custom-theme .border-color[data-v-3a33e090] {\n  border-color: #2c5cf7;\n}\n.custom-theme .border-color[data-v-3a33e090]::after {\n    border-color: #2c5cf7;\n}\n.test-theme .color[data-v-3a33e090] {\n  color: #f00;\n}\n.test-theme .border-color[data-v-3a33e090] {\n  border-color: #f00;\n}\n.test-theme .border-color[data-v-3a33e090]::after {\n    border-color: #f00;\n}\n.about-wrapper[data-v-3a33e090] {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: column;\n          flex-direction: column;\n  background: #ffffff;\n  width: 100%;\n  height: 100%;\n  font-size: 16px;\n}\n.about-wrapper .content[data-v-3a33e090] {\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    -webkit-box-orient: vertical;\n    -webkit-box-direction: normal;\n        -ms-flex-direction: column;\n            flex-direction: column;\n    width: 100%;\n    -webkit-box-align: center;\n        -ms-flex-align: center;\n            align-items: center;\n    text-align: center;\n    padding: 24px 0 40px 0;\n}\n.about-wrapper .content > img[data-v-3a33e090] {\n      width: 80px;\n}\n.about-wrapper .content .info[data-v-3a33e090] {\n      margin-top: 20px;\n      line-height: 22px;\n}\n.about-wrapper .tel-box[data-v-3a33e090] {\n    color: #2c3e50;\n}\n.about-wrapper[data-v-3a33e090] .app-cell-right {\n    color: #999999;\n}\n.about-wrapper[data-v-3a33e090] .app-cell-right .tel {\n      color: #2c5cf7;\n}\n.about-wrapper .qr-popup[data-v-3a33e090] {\n    padding: 0 20px;\n    width: 100%;\n    background-color: transparent;\n}\n.about-wrapper .qr-popup .qr-wrapper[data-v-3a33e090] {\n      display: -webkit-box;\n      display: -ms-flexbox;\n      display: flex;\n      -webkit-box-orient: vertical;\n      -webkit-box-direction: normal;\n          -ms-flex-direction: column;\n              flex-direction: column;\n      -webkit-box-align: center;\n          -ms-flex-align: center;\n              align-items: center;\n      width: 100%;\n      padding: 80px 30px 40px 30px;\n      background: url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + ") no-repeat;\n      background-size: 100% 100%;\n}\n.about-wrapper .qr-popup .qr-wrapper .qr-content[data-v-3a33e090] {\n        display: -webkit-box;\n        display: -ms-flexbox;\n        display: flex;\n        -webkit-box-orient: vertical;\n        -webkit-box-direction: normal;\n            -ms-flex-direction: column;\n                flex-direction: column;\n        -webkit-box-align: center;\n            -ms-flex-align: center;\n                align-items: center;\n        background: #ffffff;\n        border-radius: 12px;\n        padding: 20px 40px;\n        font-size: 14px;\n        color: #999999;\n}\n.about-wrapper .qr-popup .qr-wrapper .qr-button[data-v-3a33e090] {\n        margin-top: 20px;\n        background: linear-gradient(135deg, #5297ff 0%, #5b55ff 100%);\n}\n", "",{"version":3,"sources":["/Users/appcloud/appcloud/jenkins/project/pmcSDKsmartengineer/longzh_20210105_113838_8/runtime-src/styles/variable.scss","/Users/appcloud/appcloud/jenkins/project/pmcSDKsmartengineer/longzh_20210105_113838_8/runtime-src/views/user/about.vue"],"names":[],"mappings":"AAkBE;EACE,gBAWsB;AAAA;AATxB;EACE,uBAQsB;AAAA;AAPtB;IACE,uBAMoB;AAAA;AAD1B;EAGI,oGAIC;EAJD,2EAIC;AAAA;AAlBH;EACE,cAsBoB;AAAA;AApBtB;EACE,qBAmBoB;AAAA;AAlBpB;IACE,qBAiBkB;AAAA;AAvBtB;EACE,WA0BiB;AAAA;AAxBnB;EACE,kBAuBiB;AAAA;AAtBjB;IACE,kBAqBe;AAAA;AC0GrB;EACE,oBAAa;EAAb,oBAAa;EAAb,aAAa;EACb,4BAAsB;EAAtB,6BAAsB;MAAtB,0BAAsB;UAAtB,sBAAsB;EACtB,mBAAmB;EACnB,WAAW;EACX,YAAY;EACZ,eAAe;AAAA;AANjB;IASI,oBAAa;IAAb,oBAAa;IAAb,aAAa;IACb,4BAAsB;IAAtB,6BAAsB;QAAtB,0BAAsB;YAAtB,sBAAsB;IACtB,WAAW;IACX,yBAAmB;QAAnB,sBAAmB;YAAnB,mBAAmB;IACnB,kBAAkB;IAClB,sBAAsB;AAAA;AAd1B;MAiBM,WAAW;AAAA;AAjBjB;MAqBM,gBAAgB;MAChB,iBAAiB;AAAA;AAtBvB;IA2BI,cAAc;AAAA;AA3BlB;IA+BI,cAAc;AAAA;AA/BlB;MAkCM,cDxLe;AAAA;ACsJrB;IAuCI,eAAe;IACf,WAAW;IACX,6BAA6B;AAAA;AAzCjC;MA4CM,oBAAa;MAAb,oBAAa;MAAb,aAAa;MACb,4BAAsB;MAAtB,6BAAsB;UAAtB,0BAAsB;cAAtB,sBAAsB;MACtB,yBAAmB;UAAnB,sBAAmB;cAAnB,mBAAmB;MACnB,WAAW;MACX,4BAA4B;MAC5B,6DAA2D;MAC3D,0BAA0B;AAAA;AAlDhC;QAqDQ,oBAAa;QAAb,oBAAa;QAAb,aAAa;QACb,4BAAsB;QAAtB,6BAAsB;YAAtB,0BAAsB;gBAAtB,sBAAsB;QACtB,yBAAmB;YAAnB,sBAAmB;gBAAnB,mBAAmB;QACnB,mBAAmB;QACnB,mBAAmB;QACnB,kBAAkB;QAClB,eAAe;QACf,cAAc;AAAA;AA5DtB;QAgEQ,gBAAgB;QAChB,6DAIC;AAAA","file":"about.vue","sourcesContent":["// 主题色\n$color-theme: #2c5cf7;\n$color-theme-light: #2c5cf7;\n// border颜色\n$color-border: #ebebeb;\n// CONTENT\n$color-body-bg: rgba(244, 244, 244, 1);\n$color-text: #202020;\n$color-text-light: #606060;\n$color-red: #eb544d;\n$color-blue: #0099ff;\n$color-purple: #a13eff;\n$color-grey: #a0a0a0;\n$color-green: #00cb59;\n$color-icon: #8a8a8a;\n$color-error: #ff3b30;\n\n@mixin theme($color-theme) {\n  .color {\n    color: $color-theme;\n  }\n  .border-color {\n    border-color: $color-theme;\n    &::after {\n      border-color: $color-theme;\n    }\n  }\n}\n\n.custom-theme {\n  @include theme('#2c5cf7');\n  .gradient-background {\n    background: linear-gradient(\n      90deg,\n      rgba($color-theme, 1) 0%,\n      rgba($color-theme, 0.8) 100%\n    );\n  }\n}\n\n.custom-theme {\n  @include theme(#2c5cf7);\n}\n\n.test-theme {\n  @include theme(#f00);\n}\n","@import \"~@src/styles/variable.scss\";\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n.about-wrapper {\n  display: flex;\n  flex-direction: column;\n  background: #ffffff;\n  width: 100%;\n  height: 100%;\n  font-size: 16px;\n\n  .content {\n    display: flex;\n    flex-direction: column;\n    width: 100%;\n    align-items: center;\n    text-align: center;\n    padding: 24px 0 40px 0;\n\n    & > img {\n      width: 80px;\n    }\n\n    .info {\n      margin-top: 20px;\n      line-height: 22px;\n    }\n  }\n\n  .tel-box {\n    color: #2c3e50;\n  }\n\n  /deep/.app-cell-right {\n    color: #999999;\n\n    .tel {\n      color: $color-theme;\n    }\n  }\n\n  .qr-popup {\n    padding: 0 20px;\n    width: 100%;\n    background-color: transparent;\n\n    .qr-wrapper {\n      display: flex;\n      flex-direction: column;\n      align-items: center;\n      width: 100%;\n      padding: 80px 30px 40px 30px;\n      background: url('~@assets/images/user/qr-bg.png') no-repeat;\n      background-size: 100% 100%;\n\n      .qr-content {\n        display: flex;\n        flex-direction: column;\n        align-items: center;\n        background: #ffffff;\n        border-radius: 12px;\n        padding: 20px 40px;\n        font-size: 14px;\n        color: #999999;\n      }\n\n      .qr-button {\n        margin-top: 20px;\n        background: linear-gradient(\n          135deg,\n          rgba(#5297ff, 1) 0%,\n          rgba(#5b55ff, 1) 100%\n        );\n      }\n    }\n  }\n}\n"]}]);
// Exports
module.exports = exports;


/***/ }),

/***/ "./node_modules/_vue-style-loader@4.1.2@vue-style-loader/index.js?!./node_modules/_css-loader@3.6.0@css-loader/dist/cjs.js?!./node_modules/_vue-loader@15.9.6@vue-loader/lib/loaders/stylePostLoader.js!./node_modules/_postcss-loader@3.0.0@postcss-loader/src/index.js?!./node_modules/_sass-loader@8.0.2@sass-loader/dist/cjs.js?!./node_modules/_cache-loader@4.1.0@cache-loader/dist/cjs.js?!./node_modules/_vue-loader@15.9.6@vue-loader/lib/index.js?!./runtime-src/views/user/about.vue?vue&type=style&index=0&id=3a33e090&lang=scss&scoped=true&":
/*!*************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/_vue-style-loader@4.1.2@vue-style-loader??ref--8-oneOf-1-0!./node_modules/_css-loader@3.6.0@css-loader/dist/cjs.js??ref--8-oneOf-1-1!./node_modules/_vue-loader@15.9.6@vue-loader/lib/loaders/stylePostLoader.js!./node_modules/_postcss-loader@3.0.0@postcss-loader/src??ref--8-oneOf-1-2!./node_modules/_sass-loader@8.0.2@sass-loader/dist/cjs.js??ref--8-oneOf-1-3!./node_modules/_cache-loader@4.1.0@cache-loader/dist/cjs.js??ref--0-0!./node_modules/_vue-loader@15.9.6@vue-loader/lib??vue-loader-options!./runtime-src/views/user/about.vue?vue&type=style&index=0&id=3a33e090&lang=scss&scoped=true& ***!
  \*************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(/*! !../../../node_modules/_css-loader@3.6.0@css-loader/dist/cjs.js??ref--8-oneOf-1-1!../../../node_modules/_vue-loader@15.9.6@vue-loader/lib/loaders/stylePostLoader.js!../../../node_modules/_postcss-loader@3.0.0@postcss-loader/src??ref--8-oneOf-1-2!../../../node_modules/_sass-loader@8.0.2@sass-loader/dist/cjs.js??ref--8-oneOf-1-3!../../../node_modules/_cache-loader@4.1.0@cache-loader/dist/cjs.js??ref--0-0!../../../node_modules/_vue-loader@15.9.6@vue-loader/lib??vue-loader-options!./about.vue?vue&type=style&index=0&id=3a33e090&lang=scss&scoped=true& */ "./node_modules/_css-loader@3.6.0@css-loader/dist/cjs.js?!./node_modules/_vue-loader@15.9.6@vue-loader/lib/loaders/stylePostLoader.js!./node_modules/_postcss-loader@3.0.0@postcss-loader/src/index.js?!./node_modules/_sass-loader@8.0.2@sass-loader/dist/cjs.js?!./node_modules/_cache-loader@4.1.0@cache-loader/dist/cjs.js?!./node_modules/_vue-loader@15.9.6@vue-loader/lib/index.js?!./runtime-src/views/user/about.vue?vue&type=style&index=0&id=3a33e090&lang=scss&scoped=true&");
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var add = __webpack_require__(/*! ../../../node_modules/_vue-style-loader@4.1.2@vue-style-loader/lib/addStylesClient.js */ "./node_modules/_vue-style-loader@4.1.2@vue-style-loader/lib/addStylesClient.js").default
var update = add("484cf2ed", content, false, {"sourceMap":true,"shadowMode":false});
// Hot Module Replacement
if(false) {}

/***/ }),

/***/ "./public/resource/qr-app.png":
/*!************************************!*\
  !*** ./public/resource/qr-app.png ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/qr-app.44e7b90d.png";

/***/ }),

/***/ "./public/resource/qr-wechat.png":
/*!***************************************!*\
  !*** ./public/resource/qr-wechat.png ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/qr-wechat.e62c81bb.png";

/***/ }),

/***/ "./runtime-src/assets/images/user/app-icon.png":
/*!*****************************************************!*\
  !*** ./runtime-src/assets/images/user/app-icon.png ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/app-icon.5dbf1e50.png";

/***/ }),

/***/ "./runtime-src/assets/images/user/qr-bg.png":
/*!**************************************************!*\
  !*** ./runtime-src/assets/images/user/qr-bg.png ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/qr-bg.6681b8f7.png";

/***/ }),

/***/ "./runtime-src/views/user/about.vue":
/*!******************************************!*\
  !*** ./runtime-src/views/user/about.vue ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _about_vue_vue_type_template_id_3a33e090_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./about.vue?vue&type=template&id=3a33e090&scoped=true& */ "./runtime-src/views/user/about.vue?vue&type=template&id=3a33e090&scoped=true&");
/* harmony import */ var _about_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./about.vue?vue&type=script&lang=js& */ "./runtime-src/views/user/about.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _about_vue_vue_type_style_index_0_id_3a33e090_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./about.vue?vue&type=style&index=0&id=3a33e090&lang=scss&scoped=true& */ "./runtime-src/views/user/about.vue?vue&type=style&index=0&id=3a33e090&lang=scss&scoped=true&");
/* harmony import */ var _node_modules_vue_loader_15_9_6_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../node_modules/_vue-loader@15.9.6@vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/_vue-loader@15.9.6@vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_15_9_6_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _about_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _about_vue_vue_type_template_id_3a33e090_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _about_vue_vue_type_template_id_3a33e090_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "3a33e090",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "runtime-src/views/user/about.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./runtime-src/views/user/about.vue?vue&type=script&lang=js&":
/*!*******************************************************************!*\
  !*** ./runtime-src/views/user/about.vue?vue&type=script&lang=js& ***!
  \*******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_cache_loader_4_1_0_cache_loader_dist_cjs_js_ref_12_0_node_modules_babel_loader_8_2_2_babel_loader_lib_index_js_node_modules_cache_loader_4_1_0_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_15_9_6_vue_loader_lib_index_js_vue_loader_options_about_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/_cache-loader@4.1.0@cache-loader/dist/cjs.js??ref--12-0!../../../node_modules/_babel-loader@8.2.2@babel-loader/lib!../../../node_modules/_cache-loader@4.1.0@cache-loader/dist/cjs.js??ref--0-0!../../../node_modules/_vue-loader@15.9.6@vue-loader/lib??vue-loader-options!./about.vue?vue&type=script&lang=js& */ "./node_modules/_cache-loader@4.1.0@cache-loader/dist/cjs.js?!./node_modules/_babel-loader@8.2.2@babel-loader/lib/index.js!./node_modules/_cache-loader@4.1.0@cache-loader/dist/cjs.js?!./node_modules/_vue-loader@15.9.6@vue-loader/lib/index.js?!./runtime-src/views/user/about.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_cache_loader_4_1_0_cache_loader_dist_cjs_js_ref_12_0_node_modules_babel_loader_8_2_2_babel_loader_lib_index_js_node_modules_cache_loader_4_1_0_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_15_9_6_vue_loader_lib_index_js_vue_loader_options_about_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./runtime-src/views/user/about.vue?vue&type=style&index=0&id=3a33e090&lang=scss&scoped=true&":
/*!****************************************************************************************************!*\
  !*** ./runtime-src/views/user/about.vue?vue&type=style&index=0&id=3a33e090&lang=scss&scoped=true& ***!
  \****************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_4_1_2_vue_style_loader_index_js_ref_8_oneOf_1_0_node_modules_css_loader_3_6_0_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_loader_15_9_6_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_3_0_0_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_8_0_2_sass_loader_dist_cjs_js_ref_8_oneOf_1_3_node_modules_cache_loader_4_1_0_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_15_9_6_vue_loader_lib_index_js_vue_loader_options_about_vue_vue_type_style_index_0_id_3a33e090_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/_vue-style-loader@4.1.2@vue-style-loader??ref--8-oneOf-1-0!../../../node_modules/_css-loader@3.6.0@css-loader/dist/cjs.js??ref--8-oneOf-1-1!../../../node_modules/_vue-loader@15.9.6@vue-loader/lib/loaders/stylePostLoader.js!../../../node_modules/_postcss-loader@3.0.0@postcss-loader/src??ref--8-oneOf-1-2!../../../node_modules/_sass-loader@8.0.2@sass-loader/dist/cjs.js??ref--8-oneOf-1-3!../../../node_modules/_cache-loader@4.1.0@cache-loader/dist/cjs.js??ref--0-0!../../../node_modules/_vue-loader@15.9.6@vue-loader/lib??vue-loader-options!./about.vue?vue&type=style&index=0&id=3a33e090&lang=scss&scoped=true& */ "./node_modules/_vue-style-loader@4.1.2@vue-style-loader/index.js?!./node_modules/_css-loader@3.6.0@css-loader/dist/cjs.js?!./node_modules/_vue-loader@15.9.6@vue-loader/lib/loaders/stylePostLoader.js!./node_modules/_postcss-loader@3.0.0@postcss-loader/src/index.js?!./node_modules/_sass-loader@8.0.2@sass-loader/dist/cjs.js?!./node_modules/_cache-loader@4.1.0@cache-loader/dist/cjs.js?!./node_modules/_vue-loader@15.9.6@vue-loader/lib/index.js?!./runtime-src/views/user/about.vue?vue&type=style&index=0&id=3a33e090&lang=scss&scoped=true&");
/* harmony import */ var _node_modules_vue_style_loader_4_1_2_vue_style_loader_index_js_ref_8_oneOf_1_0_node_modules_css_loader_3_6_0_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_loader_15_9_6_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_3_0_0_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_8_0_2_sass_loader_dist_cjs_js_ref_8_oneOf_1_3_node_modules_cache_loader_4_1_0_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_15_9_6_vue_loader_lib_index_js_vue_loader_options_about_vue_vue_type_style_index_0_id_3a33e090_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_4_1_2_vue_style_loader_index_js_ref_8_oneOf_1_0_node_modules_css_loader_3_6_0_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_loader_15_9_6_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_3_0_0_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_8_0_2_sass_loader_dist_cjs_js_ref_8_oneOf_1_3_node_modules_cache_loader_4_1_0_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_15_9_6_vue_loader_lib_index_js_vue_loader_options_about_vue_vue_type_style_index_0_id_3a33e090_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_4_1_2_vue_style_loader_index_js_ref_8_oneOf_1_0_node_modules_css_loader_3_6_0_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_loader_15_9_6_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_3_0_0_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_8_0_2_sass_loader_dist_cjs_js_ref_8_oneOf_1_3_node_modules_cache_loader_4_1_0_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_15_9_6_vue_loader_lib_index_js_vue_loader_options_about_vue_vue_type_style_index_0_id_3a33e090_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_4_1_2_vue_style_loader_index_js_ref_8_oneOf_1_0_node_modules_css_loader_3_6_0_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_loader_15_9_6_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_3_0_0_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_8_0_2_sass_loader_dist_cjs_js_ref_8_oneOf_1_3_node_modules_cache_loader_4_1_0_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_15_9_6_vue_loader_lib_index_js_vue_loader_options_about_vue_vue_type_style_index_0_id_3a33e090_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ "./runtime-src/views/user/about.vue?vue&type=template&id=3a33e090&scoped=true&":
/*!*************************************************************************************!*\
  !*** ./runtime-src/views/user/about.vue?vue&type=template&id=3a33e090&scoped=true& ***!
  \*************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_cache_loader_4_1_0_cache_loader_dist_cjs_js_cacheDirectory_node_modules_cache_vue_loader_cacheIdentifier_123502b7_vue_loader_template_node_modules_vue_loader_15_9_6_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_cache_loader_4_1_0_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_15_9_6_vue_loader_lib_index_js_vue_loader_options_about_vue_vue_type_template_id_3a33e090_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/_cache-loader@4.1.0@cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"123502b7-vue-loader-template"}!../../../node_modules/_vue-loader@15.9.6@vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/_cache-loader@4.1.0@cache-loader/dist/cjs.js??ref--0-0!../../../node_modules/_vue-loader@15.9.6@vue-loader/lib??vue-loader-options!./about.vue?vue&type=template&id=3a33e090&scoped=true& */ "./node_modules/_cache-loader@4.1.0@cache-loader/dist/cjs.js?{\"cacheDirectory\":\"node_modules/.cache/vue-loader\",\"cacheIdentifier\":\"123502b7-vue-loader-template\"}!./node_modules/_vue-loader@15.9.6@vue-loader/lib/loaders/templateLoader.js?!./node_modules/_cache-loader@4.1.0@cache-loader/dist/cjs.js?!./node_modules/_vue-loader@15.9.6@vue-loader/lib/index.js?!./runtime-src/views/user/about.vue?vue&type=template&id=3a33e090&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_cache_loader_4_1_0_cache_loader_dist_cjs_js_cacheDirectory_node_modules_cache_vue_loader_cacheIdentifier_123502b7_vue_loader_template_node_modules_vue_loader_15_9_6_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_cache_loader_4_1_0_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_15_9_6_vue_loader_lib_index_js_vue_loader_options_about_vue_vue_type_template_id_3a33e090_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_cache_loader_4_1_0_cache_loader_dist_cjs_js_cacheDirectory_node_modules_cache_vue_loader_cacheIdentifier_123502b7_vue_loader_template_node_modules_vue_loader_15_9_6_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_cache_loader_4_1_0_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_15_9_6_vue_loader_lib_index_js_vue_loader_options_about_vue_vue_type_template_id_3a33e090_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);
//# sourceMappingURL=16.js.map