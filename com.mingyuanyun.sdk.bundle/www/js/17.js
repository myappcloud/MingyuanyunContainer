(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[17],{

/***/ "./node_modules/_cache-loader@4.1.0@cache-loader/dist/cjs.js?!./node_modules/_babel-loader@8.2.2@babel-loader/lib/index.js!./node_modules/_cache-loader@4.1.0@cache-loader/dist/cjs.js?!./node_modules/_vue-loader@15.9.6@vue-loader/lib/index.js?!./runtime-src/views/announcement/detail.vue?vue&type=script&lang=js&":
/*!**************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/_cache-loader@4.1.0@cache-loader/dist/cjs.js??ref--12-0!./node_modules/_babel-loader@8.2.2@babel-loader/lib!./node_modules/_cache-loader@4.1.0@cache-loader/dist/cjs.js??ref--0-0!./node_modules/_vue-loader@15.9.6@vue-loader/lib??vue-loader-options!./runtime-src/views/announcement/detail.vue?vue&type=script&lang=js& ***!
  \**************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _services_announcement_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @services/announcement-service */ "./runtime-src/services/announcement-service.js");
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
  name: 'AnnouncementDetail',
  data: function data() {
    return {
      announcementData: null
    };
  },
  activated: function activated() {
    this.announcementData = null;
    this.getDetail();
  },
  methods: {
    handleTime: function handleTime(time) {
      var result = time.substring(0, time.length - 3);
      return result;
    },
    getDetail: function getDetail() {
      var _this = this;

      return _services_announcement_service__WEBPACK_IMPORTED_MODULE_0__["default"].getAnnouncementDetail({
        announcement_id: this.$route.params.id
      }).then(function (res) {
        _this.announcementData = res;
      });
    }
  }
});

/***/ }),

/***/ "./node_modules/_cache-loader@4.1.0@cache-loader/dist/cjs.js?{\"cacheDirectory\":\"node_modules/.cache/vue-loader\",\"cacheIdentifier\":\"123502b7-vue-loader-template\"}!./node_modules/_vue-loader@15.9.6@vue-loader/lib/loaders/templateLoader.js?!./node_modules/_cache-loader@4.1.0@cache-loader/dist/cjs.js?!./node_modules/_vue-loader@15.9.6@vue-loader/lib/index.js?!./runtime-src/views/announcement/detail.vue?vue&type=template&id=1a64f4ba&scoped=true&":
/*!*********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/_cache-loader@4.1.0@cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"123502b7-vue-loader-template"}!./node_modules/_vue-loader@15.9.6@vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/_cache-loader@4.1.0@cache-loader/dist/cjs.js??ref--0-0!./node_modules/_vue-loader@15.9.6@vue-loader/lib??vue-loader-options!./runtime-src/views/announcement/detail.vue?vue&type=template&id=1a64f4ba&scoped=true& ***!
  \*********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
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
    "app-container",
    [
      _c("app-header", { attrs: { title: "查看公告" } }),
      _c("div", { staticClass: "content-container" }, [
        _vm.announcementData
          ? _c(
              "div",
              { staticClass: "block" },
              [
                _c("p", { staticClass: "title" }, [
                  _vm._v(_vm._s(_vm.announcementData.subject))
                ]),
                _c("p", { staticClass: "sub" }, [
                  _vm._v(
                    " " +
                      _vm._s(_vm.handleTime(_vm.announcementData.published_on))
                  ),
                  _c("span", { staticClass: "publisher" }, [
                    _vm._v(_vm._s(_vm.announcementData.publisher))
                  ])
                ]),
                _c("van-divider"),
                _c("div", {
                  staticClass: "content-area",
                  domProps: { innerHTML: _vm._s(_vm.announcementData.content) }
                })
              ],
              1
            )
          : _vm._e()
      ])
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/_css-loader@3.6.0@css-loader/dist/cjs.js?!./node_modules/_vue-loader@15.9.6@vue-loader/lib/loaders/stylePostLoader.js!./node_modules/_postcss-loader@3.0.0@postcss-loader/src/index.js?!./node_modules/_sass-loader@8.0.2@sass-loader/dist/cjs.js?!./node_modules/_cache-loader@4.1.0@cache-loader/dist/cjs.js?!./node_modules/_vue-loader@15.9.6@vue-loader/lib/index.js?!./runtime-src/views/announcement/detail.vue?vue&type=style&index=0&id=1a64f4ba&lang=scss&scoped=true&":
/*!********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/_css-loader@3.6.0@css-loader/dist/cjs.js??ref--8-oneOf-1-1!./node_modules/_vue-loader@15.9.6@vue-loader/lib/loaders/stylePostLoader.js!./node_modules/_postcss-loader@3.0.0@postcss-loader/src??ref--8-oneOf-1-2!./node_modules/_sass-loader@8.0.2@sass-loader/dist/cjs.js??ref--8-oneOf-1-3!./node_modules/_cache-loader@4.1.0@cache-loader/dist/cjs.js??ref--0-0!./node_modules/_vue-loader@15.9.6@vue-loader/lib??vue-loader-options!./runtime-src/views/announcement/detail.vue?vue&type=style&index=0&id=1a64f4ba&lang=scss&scoped=true& ***!
  \********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../node_modules/_css-loader@3.6.0@css-loader/dist/runtime/api.js */ "./node_modules/_css-loader@3.6.0@css-loader/dist/runtime/api.js");
exports = ___CSS_LOADER_API_IMPORT___(true);
// Module
exports.push([module.i, ".custom-theme .color[data-v-1a64f4ba] {\n  color: \"#2c5cf7\";\n}\n.custom-theme .border-color[data-v-1a64f4ba] {\n  border-color: \"#2c5cf7\";\n}\n.custom-theme .border-color[data-v-1a64f4ba]::after {\n    border-color: \"#2c5cf7\";\n}\n.custom-theme .gradient-background[data-v-1a64f4ba] {\n  background: -webkit-gradient(linear, left top, right top, from(#2c5cf7), to(rgba(44, 92, 247, 0.8)));\n  background: linear-gradient(90deg, #2c5cf7 0%, rgba(44, 92, 247, 0.8) 100%);\n}\n.custom-theme .color[data-v-1a64f4ba] {\n  color: #2c5cf7;\n}\n.custom-theme .border-color[data-v-1a64f4ba] {\n  border-color: #2c5cf7;\n}\n.custom-theme .border-color[data-v-1a64f4ba]::after {\n    border-color: #2c5cf7;\n}\n.test-theme .color[data-v-1a64f4ba] {\n  color: #f00;\n}\n.test-theme .border-color[data-v-1a64f4ba] {\n  border-color: #f00;\n}\n.test-theme .border-color[data-v-1a64f4ba]::after {\n    border-color: #f00;\n}\n.content-container[data-v-1a64f4ba] {\n  margin-top: 11px;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: column;\n          flex-direction: column;\n  overflow-y: auto;\n  overflow-x: hidden;\n  -webkit-box-flex: 1;\n      -ms-flex: 1;\n          flex: 1;\n  background: #ffffff;\n  padding: 15px;\n}\n.content-container .block[data-v-1a64f4ba] {\n    -webkit-box-flex: 1;\n        -ms-flex: 1;\n            flex: 1;\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    -webkit-box-orient: vertical;\n    -webkit-box-direction: normal;\n        -ms-flex-direction: column;\n            flex-direction: column;\n}\n.content-container .title[data-v-1a64f4ba] {\n    font-size: 18px;\n    color: #000;\n    word-wrap: break-word;\n    word-break: break-all;\n}\n.content-container .sub[data-v-1a64f4ba] {\n    margin-top: 6px;\n    font-size: 12px;\n    color: #999999;\n}\n.content-container .sub .publisher[data-v-1a64f4ba] {\n      margin-left: 15px;\n}\n.content-container .content-area[data-v-1a64f4ba] {\n    -webkit-box-flex: 1;\n        -ms-flex: 1;\n            flex: 1;\n    overflow: scroll;\n}\n.content-container[data-v-1a64f4ba] .van-divider {\n    margin: 15px 0;\n}\n", "",{"version":3,"sources":["/Users/appcloud/appcloud/jenkins/project/pmcSDKsmartengineer/longzh_20210105_113838_8/runtime-src/styles/variable.scss","/Users/appcloud/appcloud/jenkins/project/pmcSDKsmartengineer/longzh_20210105_113838_8/runtime-src/views/announcement/detail.vue"],"names":[],"mappings":"AAkBE;EACE,gBAWsB;AAAA;AATxB;EACE,uBAQsB;AAAA;AAPtB;IACE,uBAMoB;AAAA;AAD1B;EAGI,oGAIC;EAJD,2EAIC;AAAA;AAlBH;EACE,cAsBoB;AAAA;AApBtB;EACE,qBAmBoB;AAAA;AAlBpB;IACE,qBAiBkB;AAAA;AAvBtB;EACE,WA0BiB;AAAA;AAxBnB;EACE,kBAuBiB;AAAA;AAtBjB;IACE,kBAqBe;AAAA;ACGrB;EACE,gBAAgB;EAChB,oBAAa;EAAb,oBAAa;EAAb,aAAa;EACb,4BAAsB;EAAtB,6BAAsB;MAAtB,0BAAsB;UAAtB,sBAAsB;EACtB,gBAAgB;EAChB,kBAAkB;EAClB,mBAAO;MAAP,WAAO;UAAP,OAAO;EACP,mBAAmB;EACnB,aAAa;AAAA;AARf;IAUI,mBAAO;QAAP,WAAO;YAAP,OAAO;IACP,oBAAa;IAAb,oBAAa;IAAb,aAAa;IACb,4BAAsB;IAAtB,6BAAsB;QAAtB,0BAAsB;YAAtB,sBAAsB;AAAA;AAZ1B;IAeI,eAAe;IACf,WAAW;IACX,qBAAqB;IACrB,qBAAqB;AAAA;AAlBzB;IAqBI,eAAe;IACf,eAAe;IACf,cAAc;AAAA;AAvBlB;MAyBM,iBAAiB;AAAA;AAzBvB;IA6BI,mBAAO;QAAP,WAAO;YAAP,OAAO;IACP,gBAAgB;AAAA;AA9BpB;IAiCI,cAAc;AAAA","file":"detail.vue","sourcesContent":["// 主题色\n$color-theme: #2c5cf7;\n$color-theme-light: #2c5cf7;\n// border颜色\n$color-border: #ebebeb;\n// CONTENT\n$color-body-bg: rgba(244, 244, 244, 1);\n$color-text: #202020;\n$color-text-light: #606060;\n$color-red: #eb544d;\n$color-blue: #0099ff;\n$color-purple: #a13eff;\n$color-grey: #a0a0a0;\n$color-green: #00cb59;\n$color-icon: #8a8a8a;\n$color-error: #ff3b30;\n\n@mixin theme($color-theme) {\n  .color {\n    color: $color-theme;\n  }\n  .border-color {\n    border-color: $color-theme;\n    &::after {\n      border-color: $color-theme;\n    }\n  }\n}\n\n.custom-theme {\n  @include theme('#2c5cf7');\n  .gradient-background {\n    background: linear-gradient(\n      90deg,\n      rgba($color-theme, 1) 0%,\n      rgba($color-theme, 0.8) 100%\n    );\n  }\n}\n\n.custom-theme {\n  @include theme(#2c5cf7);\n}\n\n.test-theme {\n  @include theme(#f00);\n}\n","@import \"~@src/styles/variable.scss\";\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n.content-container {\n  margin-top: 11px;\n  display: flex;\n  flex-direction: column;\n  overflow-y: auto;\n  overflow-x: hidden;\n  flex: 1;\n  background: #ffffff;\n  padding: 15px;\n  .block {\n    flex: 1;\n    display: flex;\n    flex-direction: column;\n  }\n  .title {\n    font-size: 18px;\n    color: #000;\n    word-wrap: break-word;\n    word-break: break-all;\n  }\n  .sub {\n    margin-top: 6px;\n    font-size: 12px;\n    color: #999999;\n    .publisher {\n      margin-left: 15px;\n    }\n  }\n  .content-area {\n    flex: 1;\n    overflow: scroll;\n  }\n  /deep/.van-divider {\n    margin: 15px 0;\n  }\n}\n"]}]);
// Exports
module.exports = exports;


/***/ }),

/***/ "./node_modules/_vue-style-loader@4.1.2@vue-style-loader/index.js?!./node_modules/_css-loader@3.6.0@css-loader/dist/cjs.js?!./node_modules/_vue-loader@15.9.6@vue-loader/lib/loaders/stylePostLoader.js!./node_modules/_postcss-loader@3.0.0@postcss-loader/src/index.js?!./node_modules/_sass-loader@8.0.2@sass-loader/dist/cjs.js?!./node_modules/_cache-loader@4.1.0@cache-loader/dist/cjs.js?!./node_modules/_vue-loader@15.9.6@vue-loader/lib/index.js?!./runtime-src/views/announcement/detail.vue?vue&type=style&index=0&id=1a64f4ba&lang=scss&scoped=true&":
/*!**********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/_vue-style-loader@4.1.2@vue-style-loader??ref--8-oneOf-1-0!./node_modules/_css-loader@3.6.0@css-loader/dist/cjs.js??ref--8-oneOf-1-1!./node_modules/_vue-loader@15.9.6@vue-loader/lib/loaders/stylePostLoader.js!./node_modules/_postcss-loader@3.0.0@postcss-loader/src??ref--8-oneOf-1-2!./node_modules/_sass-loader@8.0.2@sass-loader/dist/cjs.js??ref--8-oneOf-1-3!./node_modules/_cache-loader@4.1.0@cache-loader/dist/cjs.js??ref--0-0!./node_modules/_vue-loader@15.9.6@vue-loader/lib??vue-loader-options!./runtime-src/views/announcement/detail.vue?vue&type=style&index=0&id=1a64f4ba&lang=scss&scoped=true& ***!
  \**********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(/*! !../../../node_modules/_css-loader@3.6.0@css-loader/dist/cjs.js??ref--8-oneOf-1-1!../../../node_modules/_vue-loader@15.9.6@vue-loader/lib/loaders/stylePostLoader.js!../../../node_modules/_postcss-loader@3.0.0@postcss-loader/src??ref--8-oneOf-1-2!../../../node_modules/_sass-loader@8.0.2@sass-loader/dist/cjs.js??ref--8-oneOf-1-3!../../../node_modules/_cache-loader@4.1.0@cache-loader/dist/cjs.js??ref--0-0!../../../node_modules/_vue-loader@15.9.6@vue-loader/lib??vue-loader-options!./detail.vue?vue&type=style&index=0&id=1a64f4ba&lang=scss&scoped=true& */ "./node_modules/_css-loader@3.6.0@css-loader/dist/cjs.js?!./node_modules/_vue-loader@15.9.6@vue-loader/lib/loaders/stylePostLoader.js!./node_modules/_postcss-loader@3.0.0@postcss-loader/src/index.js?!./node_modules/_sass-loader@8.0.2@sass-loader/dist/cjs.js?!./node_modules/_cache-loader@4.1.0@cache-loader/dist/cjs.js?!./node_modules/_vue-loader@15.9.6@vue-loader/lib/index.js?!./runtime-src/views/announcement/detail.vue?vue&type=style&index=0&id=1a64f4ba&lang=scss&scoped=true&");
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var add = __webpack_require__(/*! ../../../node_modules/_vue-style-loader@4.1.2@vue-style-loader/lib/addStylesClient.js */ "./node_modules/_vue-style-loader@4.1.2@vue-style-loader/lib/addStylesClient.js").default
var update = add("6db6050c", content, false, {"sourceMap":true,"shadowMode":false});
// Hot Module Replacement
if(false) {}

/***/ }),

/***/ "./runtime-src/api/announcement.js":
/*!*****************************************!*\
  !*** ./runtime-src/api/announcement.js ***!
  \*****************************************/
/*! exports provided: getUseridByOpenid, getAnnouncementList, getAnnouncementDetail, updateAnnouncementStatus */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getUseridByOpenid", function() { return getUseridByOpenid; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getAnnouncementList", function() { return getAnnouncementList; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getAnnouncementDetail", function() { return getAnnouncementDetail; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "updateAnnouncementStatus", function() { return updateAnnouncementStatus; });
/* harmony import */ var core_js_modules_es_array_concat_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.array.concat.js */ "./node_modules/_core-js@3.8.2@core-js/modules/es.array.concat.js");
/* harmony import */ var core_js_modules_es_array_concat_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_concat_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.object.to-string.js */ "./node_modules/_core-js@3.8.2@core-js/modules/es.object.to-string.js");
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _src_common_ajax__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @src/common/ajax */ "./runtime-src/common/ajax.js");
/* harmony import */ var _yl_app_jssdk_context__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @yl-app-jssdk/context */ "./node_modules/_@yl-app-jssdk_context@1.0.7@@yl-app-jssdk/context/index.js");
/* harmony import */ var _yl_app_jssdk_context__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_yl_app_jssdk_context__WEBPACK_IMPORTED_MODULE_3__);




var domain = window.GLOBAL_ENV.SSO_CENTER_DEFAULT_API;
var userId = Object(_yl_app_jssdk_context__WEBPACK_IMPORTED_MODULE_3__["getUserContext"])().userId;
var receiveId; // 通过登录用户openId获取用户id

var getUseridByOpenid = function getUseridByOpenid() {
  var data = Object(_yl_app_jssdk_context__WEBPACK_IMPORTED_MODULE_3__["getUserContext"])(); // 已经获取过用户id并且当前登录的用户和上一次请求用户相同时，直接返回用户id(区分切换登录账号的情况)

  if (receiveId && data.userId === userId) {
    return Promise.resolve(receiveId);
  }

  userId = data.userId;
  var tenantCode = data.tenantCode;
  return Object(_src_common_ajax__WEBPACK_IMPORTED_MODULE_2__["default"])({
    method: 'get',
    url: "".concat(domain, "/m/").concat(tenantCode, "/PermissionApply/permission-init/get-userid-by-openid"),
    data: {
      tenantCode: tenantCode,
      openId: data.userId
    }
  }).then(function (res) {
    if (res.errcode) {
      return Promise.reject(res.message);
    }

    receiveId = res.data;
    return res.data;
  }).catch(function (err) {
    throw new Error(err);
  });
};
/**
 * 获取公告列表
 * @param {user_id} 用户id
 * @param {tenant_code} 租户code
 * @param {pageIndex} 当前页码 ，默认1
 * @param {pageSize} 每页记录数 默认 10
 */

var getAnnouncementList = function getAnnouncementList(data) {
  var tenantCode = Object(_yl_app_jssdk_context__WEBPACK_IMPORTED_MODULE_3__["getUserContext"])().tenantCode;
  return getUseridByOpenid().then(function (res) {
    return getList(res);
  });

  function getList(receiveId) {
    return Object(_src_common_ajax__WEBPACK_IMPORTED_MODULE_2__["default"])({
      method: 'POST',
      url: "".concat(domain, "/m/Organization/api2/announcement-list"),
      data: Object.assign({}, {
        user_id: receiveId,
        tenant_code: tenantCode
      }, data)
    }).then(function (res) {
      if (res.errcode) {
        return Promise.reject(res.errMsg);
      }

      var _res$data = res.data,
          list = _res$data.list,
          count = _res$data.count;
      return {
        data: list || [],
        recordCount: count || 0
      };
    }).catch(function () {
      // throw new Error(err);
      return {
        data: [],
        recordCount: 0
      };
    });
  }
};
/**
 * 获取公告详情
 * @param {user_id} 用户id
 * @param {tenant_code} 租户code
 * @param {announcement_id} string-公告ID
 */

var getAnnouncementDetail = function getAnnouncementDetail(data) {
  var tenantCode = Object(_yl_app_jssdk_context__WEBPACK_IMPORTED_MODULE_3__["getUserContext"])().tenantCode;
  return Object(_src_common_ajax__WEBPACK_IMPORTED_MODULE_2__["default"])({
    method: 'POST',
    url: "".concat(domain, "/m/Organization/api2/announcement-info"),
    data: {
      user_id: receiveId,
      tenant_code: tenantCode,
      announcement_id: data.announcement_id
    }
  }).then(function (res) {
    if (res.errcode) {
      return Promise.reject(res.errMsg);
    }

    return res.data;
  }).catch(function (err) {
    throw new Error(err);
  });
};
/**
 * 更新公告状态
 * @param {user_id} 用户id
 * @param {tenant_code} 租户code
 * @param {announcement_ids} array - 公告id数组
 */

var updateAnnouncementStatus = function updateAnnouncementStatus(data) {
  var tenantCode = Object(_yl_app_jssdk_context__WEBPACK_IMPORTED_MODULE_3__["getUserContext"])().tenantCode;
  return getUseridByOpenid().then(function (res) {
    return updateStatus(res);
  });

  function updateStatus(receiveId) {
    return Object(_src_common_ajax__WEBPACK_IMPORTED_MODULE_2__["default"])({
      method: 'POST',
      url: "".concat(domain, "/m/Organization/api2/announcement-set-status"),
      data: Object.assign({}, {
        user_id: receiveId,
        tenant_code: tenantCode
      }, data)
    }).then(function (res) {
      if (res.errcode) {
        return Promise.reject(res.errMsg);
      }

      return res;
    }).catch(function (err) {
      throw new Error(err);
    });
  }
};

/***/ }),

/***/ "./runtime-src/services/announcement-service.js":
/*!******************************************************!*\
  !*** ./runtime-src/services/announcement-service.js ***!
  \******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.object.to-string.js */ "./node_modules/_core-js@3.8.2@core-js/modules/es.object.to-string.js");
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _src_api_announcement__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @src/api/announcement */ "./runtime-src/api/announcement.js");
/* harmony import */ var _yl_app_jssdk_network__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @yl-app-jssdk/network */ "./node_modules/_@yl-app-jssdk_network@1.0.2@@yl-app-jssdk/network/index.js");
/* harmony import */ var _yl_app_jssdk_network__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_yl_app_jssdk_network__WEBPACK_IMPORTED_MODULE_2__);



/* harmony default export */ __webpack_exports__["default"] = ({
  getAnnouncementList: function getAnnouncementList(data) {
    return _yl_app_jssdk_network__WEBPACK_IMPORTED_MODULE_2___default.a.getHasNetwork().then(function (hasNetwork) {
      if (!hasNetwork) {
        return Promise.reject('您的当前网络不可用，请检查您的网络设置');
      }

      return _src_api_announcement__WEBPACK_IMPORTED_MODULE_1__["getAnnouncementList"](data).then(function (res) {
        var data = res.data,
            recordCount = res.recordCount;
        return {
          announcementData: data,
          recordCount: recordCount
        };
      });
    });
  },
  getAnnouncementDetail: function getAnnouncementDetail(data) {
    return _yl_app_jssdk_network__WEBPACK_IMPORTED_MODULE_2___default.a.getHasNetwork(data).then(function (hasNetwork) {
      if (!hasNetwork) {
        return Promise.reject('您的当前网络不可用，请检查您的网络设置');
      }

      return _src_api_announcement__WEBPACK_IMPORTED_MODULE_1__["getAnnouncementDetail"](data).then(function (res) {
        return res;
      });
    });
  },
  updateAnnouncementStatus: function updateAnnouncementStatus(data) {
    return _yl_app_jssdk_network__WEBPACK_IMPORTED_MODULE_2___default.a.getHasNetwork(data).then(function (hasNetwork) {
      if (!hasNetwork) {
        return Promise.reject('您的当前网络不可用，请检查您的网络设置');
      }

      return _src_api_announcement__WEBPACK_IMPORTED_MODULE_1__["updateAnnouncementStatus"](data).then(function (res) {
        return res;
      });
    });
  }
});

/***/ }),

/***/ "./runtime-src/views/announcement/detail.vue":
/*!***************************************************!*\
  !*** ./runtime-src/views/announcement/detail.vue ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _detail_vue_vue_type_template_id_1a64f4ba_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./detail.vue?vue&type=template&id=1a64f4ba&scoped=true& */ "./runtime-src/views/announcement/detail.vue?vue&type=template&id=1a64f4ba&scoped=true&");
/* harmony import */ var _detail_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./detail.vue?vue&type=script&lang=js& */ "./runtime-src/views/announcement/detail.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _detail_vue_vue_type_style_index_0_id_1a64f4ba_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./detail.vue?vue&type=style&index=0&id=1a64f4ba&lang=scss&scoped=true& */ "./runtime-src/views/announcement/detail.vue?vue&type=style&index=0&id=1a64f4ba&lang=scss&scoped=true&");
/* harmony import */ var _node_modules_vue_loader_15_9_6_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../node_modules/_vue-loader@15.9.6@vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/_vue-loader@15.9.6@vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_15_9_6_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _detail_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _detail_vue_vue_type_template_id_1a64f4ba_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _detail_vue_vue_type_template_id_1a64f4ba_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "1a64f4ba",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "runtime-src/views/announcement/detail.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./runtime-src/views/announcement/detail.vue?vue&type=script&lang=js&":
/*!****************************************************************************!*\
  !*** ./runtime-src/views/announcement/detail.vue?vue&type=script&lang=js& ***!
  \****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_cache_loader_4_1_0_cache_loader_dist_cjs_js_ref_12_0_node_modules_babel_loader_8_2_2_babel_loader_lib_index_js_node_modules_cache_loader_4_1_0_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_15_9_6_vue_loader_lib_index_js_vue_loader_options_detail_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/_cache-loader@4.1.0@cache-loader/dist/cjs.js??ref--12-0!../../../node_modules/_babel-loader@8.2.2@babel-loader/lib!../../../node_modules/_cache-loader@4.1.0@cache-loader/dist/cjs.js??ref--0-0!../../../node_modules/_vue-loader@15.9.6@vue-loader/lib??vue-loader-options!./detail.vue?vue&type=script&lang=js& */ "./node_modules/_cache-loader@4.1.0@cache-loader/dist/cjs.js?!./node_modules/_babel-loader@8.2.2@babel-loader/lib/index.js!./node_modules/_cache-loader@4.1.0@cache-loader/dist/cjs.js?!./node_modules/_vue-loader@15.9.6@vue-loader/lib/index.js?!./runtime-src/views/announcement/detail.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_cache_loader_4_1_0_cache_loader_dist_cjs_js_ref_12_0_node_modules_babel_loader_8_2_2_babel_loader_lib_index_js_node_modules_cache_loader_4_1_0_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_15_9_6_vue_loader_lib_index_js_vue_loader_options_detail_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./runtime-src/views/announcement/detail.vue?vue&type=style&index=0&id=1a64f4ba&lang=scss&scoped=true&":
/*!*************************************************************************************************************!*\
  !*** ./runtime-src/views/announcement/detail.vue?vue&type=style&index=0&id=1a64f4ba&lang=scss&scoped=true& ***!
  \*************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_4_1_2_vue_style_loader_index_js_ref_8_oneOf_1_0_node_modules_css_loader_3_6_0_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_loader_15_9_6_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_3_0_0_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_8_0_2_sass_loader_dist_cjs_js_ref_8_oneOf_1_3_node_modules_cache_loader_4_1_0_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_15_9_6_vue_loader_lib_index_js_vue_loader_options_detail_vue_vue_type_style_index_0_id_1a64f4ba_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/_vue-style-loader@4.1.2@vue-style-loader??ref--8-oneOf-1-0!../../../node_modules/_css-loader@3.6.0@css-loader/dist/cjs.js??ref--8-oneOf-1-1!../../../node_modules/_vue-loader@15.9.6@vue-loader/lib/loaders/stylePostLoader.js!../../../node_modules/_postcss-loader@3.0.0@postcss-loader/src??ref--8-oneOf-1-2!../../../node_modules/_sass-loader@8.0.2@sass-loader/dist/cjs.js??ref--8-oneOf-1-3!../../../node_modules/_cache-loader@4.1.0@cache-loader/dist/cjs.js??ref--0-0!../../../node_modules/_vue-loader@15.9.6@vue-loader/lib??vue-loader-options!./detail.vue?vue&type=style&index=0&id=1a64f4ba&lang=scss&scoped=true& */ "./node_modules/_vue-style-loader@4.1.2@vue-style-loader/index.js?!./node_modules/_css-loader@3.6.0@css-loader/dist/cjs.js?!./node_modules/_vue-loader@15.9.6@vue-loader/lib/loaders/stylePostLoader.js!./node_modules/_postcss-loader@3.0.0@postcss-loader/src/index.js?!./node_modules/_sass-loader@8.0.2@sass-loader/dist/cjs.js?!./node_modules/_cache-loader@4.1.0@cache-loader/dist/cjs.js?!./node_modules/_vue-loader@15.9.6@vue-loader/lib/index.js?!./runtime-src/views/announcement/detail.vue?vue&type=style&index=0&id=1a64f4ba&lang=scss&scoped=true&");
/* harmony import */ var _node_modules_vue_style_loader_4_1_2_vue_style_loader_index_js_ref_8_oneOf_1_0_node_modules_css_loader_3_6_0_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_loader_15_9_6_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_3_0_0_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_8_0_2_sass_loader_dist_cjs_js_ref_8_oneOf_1_3_node_modules_cache_loader_4_1_0_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_15_9_6_vue_loader_lib_index_js_vue_loader_options_detail_vue_vue_type_style_index_0_id_1a64f4ba_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_4_1_2_vue_style_loader_index_js_ref_8_oneOf_1_0_node_modules_css_loader_3_6_0_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_loader_15_9_6_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_3_0_0_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_8_0_2_sass_loader_dist_cjs_js_ref_8_oneOf_1_3_node_modules_cache_loader_4_1_0_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_15_9_6_vue_loader_lib_index_js_vue_loader_options_detail_vue_vue_type_style_index_0_id_1a64f4ba_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_4_1_2_vue_style_loader_index_js_ref_8_oneOf_1_0_node_modules_css_loader_3_6_0_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_loader_15_9_6_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_3_0_0_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_8_0_2_sass_loader_dist_cjs_js_ref_8_oneOf_1_3_node_modules_cache_loader_4_1_0_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_15_9_6_vue_loader_lib_index_js_vue_loader_options_detail_vue_vue_type_style_index_0_id_1a64f4ba_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_4_1_2_vue_style_loader_index_js_ref_8_oneOf_1_0_node_modules_css_loader_3_6_0_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_loader_15_9_6_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_3_0_0_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_8_0_2_sass_loader_dist_cjs_js_ref_8_oneOf_1_3_node_modules_cache_loader_4_1_0_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_15_9_6_vue_loader_lib_index_js_vue_loader_options_detail_vue_vue_type_style_index_0_id_1a64f4ba_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ "./runtime-src/views/announcement/detail.vue?vue&type=template&id=1a64f4ba&scoped=true&":
/*!**********************************************************************************************!*\
  !*** ./runtime-src/views/announcement/detail.vue?vue&type=template&id=1a64f4ba&scoped=true& ***!
  \**********************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_cache_loader_4_1_0_cache_loader_dist_cjs_js_cacheDirectory_node_modules_cache_vue_loader_cacheIdentifier_123502b7_vue_loader_template_node_modules_vue_loader_15_9_6_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_cache_loader_4_1_0_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_15_9_6_vue_loader_lib_index_js_vue_loader_options_detail_vue_vue_type_template_id_1a64f4ba_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/_cache-loader@4.1.0@cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"123502b7-vue-loader-template"}!../../../node_modules/_vue-loader@15.9.6@vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/_cache-loader@4.1.0@cache-loader/dist/cjs.js??ref--0-0!../../../node_modules/_vue-loader@15.9.6@vue-loader/lib??vue-loader-options!./detail.vue?vue&type=template&id=1a64f4ba&scoped=true& */ "./node_modules/_cache-loader@4.1.0@cache-loader/dist/cjs.js?{\"cacheDirectory\":\"node_modules/.cache/vue-loader\",\"cacheIdentifier\":\"123502b7-vue-loader-template\"}!./node_modules/_vue-loader@15.9.6@vue-loader/lib/loaders/templateLoader.js?!./node_modules/_cache-loader@4.1.0@cache-loader/dist/cjs.js?!./node_modules/_vue-loader@15.9.6@vue-loader/lib/index.js?!./runtime-src/views/announcement/detail.vue?vue&type=template&id=1a64f4ba&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_cache_loader_4_1_0_cache_loader_dist_cjs_js_cacheDirectory_node_modules_cache_vue_loader_cacheIdentifier_123502b7_vue_loader_template_node_modules_vue_loader_15_9_6_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_cache_loader_4_1_0_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_15_9_6_vue_loader_lib_index_js_vue_loader_options_detail_vue_vue_type_template_id_1a64f4ba_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_cache_loader_4_1_0_cache_loader_dist_cjs_js_cacheDirectory_node_modules_cache_vue_loader_cacheIdentifier_123502b7_vue_loader_template_node_modules_vue_loader_15_9_6_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_cache_loader_4_1_0_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_15_9_6_vue_loader_lib_index_js_vue_loader_options_detail_vue_vue_type_template_id_1a64f4ba_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);
//# sourceMappingURL=17.js.map