(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[3],{

/***/ "./node_modules/_cache-loader@4.1.0@cache-loader/dist/cjs.js?!./node_modules/_babel-loader@8.2.2@babel-loader/lib/index.js!./node_modules/_cache-loader@4.1.0@cache-loader/dist/cjs.js?!./node_modules/_vue-loader@15.9.6@vue-loader/lib/index.js?!./runtime-src/views/user/info.vue?vue&type=script&lang=js&":
/*!****************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/_cache-loader@4.1.0@cache-loader/dist/cjs.js??ref--12-0!./node_modules/_babel-loader@8.2.2@babel-loader/lib!./node_modules/_cache-loader@4.1.0@cache-loader/dist/cjs.js??ref--0-0!./node_modules/_vue-loader@15.9.6@vue-loader/lib??vue-loader-options!./runtime-src/views/user/info.vue?vue&type=script&lang=js& ***!
  \****************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: commonDetailObj, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "commonDetailObj", function() { return commonDetailObj; });
/* harmony import */ var core_js_modules_es_array_map_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.array.map.js */ "./node_modules/_core-js@3.8.2@core-js/modules/es.array.map.js");
/* harmony import */ var core_js_modules_es_array_map_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_map_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.function.name.js */ "./node_modules/_core-js@3.8.2@core-js/modules/es.function.name.js");
/* harmony import */ var core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es.object.to-string.js */ "./node_modules/_core-js@3.8.2@core-js/modules/es.object.to-string.js");
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _components_app_cell__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @components/app-cell */ "./runtime-src/components/app-cell/index.vue");
/* harmony import */ var _yl_app_jssdk_context__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @yl-app-jssdk/context */ "./node_modules/_@yl-app-jssdk_context@1.0.7@@yl-app-jssdk/context/index.js");
/* harmony import */ var _yl_app_jssdk_context__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_yl_app_jssdk_context__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _yl_app_jssdk_path__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @yl-app-jssdk/path */ "./node_modules/_@yl-app-jssdk_path@1.0.6@@yl-app-jssdk/path/index.js");
/* harmony import */ var _yl_app_jssdk_path__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_yl_app_jssdk_path__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _src_common_take_photo__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @src/common/take-photo */ "./runtime-src/common/take-photo.js");
/* harmony import */ var _services_user_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @services/user-service */ "./runtime-src/services/user-service.js");
/* harmony import */ var _yl_guid__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @yl/guid */ "./node_modules/_@yl_guid@1.0.0@@yl/guid/index.js");
/* harmony import */ var _yl_guid__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_yl_guid__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _src_api_user_state__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @/src/api/user-state */ "./src/api/user-state.js");



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







/** 共享对象 用于二级详情页*/

var commonDetailObj = {
  title: '',
  list: []
};
/* harmony default export */ __webpack_exports__["default"] = ({
  components: {
    Cell: _components_app_cell__WEBPACK_IMPORTED_MODULE_3__["default"]
  },
  data: function data() {
    return {
      showAvatarSelect: false,
      userInfo: {
        avatarUrl: '',
        name: '',
        mobile: '',
        role: '',
        post: '',
        userType: ''
      },
      actions: [{
        name: '拍照',
        type: 1
      }, {
        name: '从相册选择',
        type: 2
      }],
      roleList: [],
      postList: [],
      contractorList: [],
      orgList: []
    };
  },
  activated: function activated() {
    this.init();
  },
  computed: {
    orgAndContractorList: function orgAndContractorList() {
      if (this.userInfo.userType == 0) {
        return this.orgList.map(function (item) {
          return {
            name: item.fullPathName
          };
        });
      } else {
        return this.contractorList;
      }
    }
  },
  methods: {
    init: function init() {
      var _this = this;

      _services_user_service__WEBPACK_IMPORTED_MODULE_7__["default"].getUserRoleInfo().then(function () {
        var user = Object(_yl_app_jssdk_context__WEBPACK_IMPORTED_MODULE_4__["getUserContext"])();
        _this.userInfo.avatarUrl = Object(_yl_app_jssdk_path__WEBPACK_IMPORTED_MODULE_5__["getWebViewPath"])(user.avatarPath) || user.avatarUrl || '';
        _this.userInfo.name = user.tenantInfo.tenantName || '';
        _this.userInfo.title = '';
        _this.userInfo.mobile = user.tenantInfo.mobile || '';
        _this.userInfo.role = user.role;
        _this.userInfo.post = user.post;
        _this.userInfo.userType = user.userType;
        /** 初始化数据 */
        // this.roleList = [];
        // this.postList = [];
        // this.contractorList = [];
        // this.orgList = [];

        /** 获取完整的角色信息 */

        Object(_src_api_user_state__WEBPACK_IMPORTED_MODULE_9__["getUserRoleInfo"])({
          type: 'list'
        }).then(function (res) {
          _this.roleList = res;
        });
        /** 获取完整的岗位信息 */

        Object(_src_api_user_state__WEBPACK_IMPORTED_MODULE_9__["getUserPostInfo"])({
          type: 'list'
        }).then(function (res) {
          // console.log(res, 'resresresresresresresresresres');
          _this.postList = res;
        });
        /** 非甲方才有供应商 */

        if (user.userType != 0) {
          /** 获取完整的供应商信息 */
          Object(_src_api_user_state__WEBPACK_IMPORTED_MODULE_9__["getUserContractorInfo"])({
            type: 'list'
          }).then(function (res) {
            console.log(res, 'ContractorContractorContractorContractor');
            _this.contractorList = res;
          });
        } else {
          /** 获取完整的组织信息 */
          Object(_src_api_user_state__WEBPACK_IMPORTED_MODULE_9__["getUserOrgInfo"])({
            type: 'list'
          }).then(function (res) {
            console.log(res, 'OrgOrgOrgOrgOrg');
            _this.orgList = res;
          });
        }
      });
    },
    editAvatar: function editAvatar() {
      this.showAvatarSelect = true;
    },
    onSelect: function onSelect(item) {
      var _this2 = this;

      var avatarId = _yl_guid__WEBPACK_IMPORTED_MODULE_8___default()();
      var newAvatarPath = Object(_yl_app_jssdk_path__WEBPACK_IMPORTED_MODULE_5__["getPrefixPath"])('avatar');
      newAvatarPath.fullPath += avatarId + '.jpg';
      newAvatarPath.relativePath += avatarId + '.jpg';
      var newAvatarUrl;
      _src_common_take_photo__WEBPACK_IMPORTED_MODULE_6__["default"].takeAvatar(newAvatarPath.fullPath, item.name !== '拍照').then(function () {
        _this2.$toast.loading({
          duration: 0,
          // 持续展示 toast
          forbidClick: true,
          // 禁用背景点击
          loadingType: 'spinner',
          message: '正在上传头像...'
        }); // TODO: 上传头像图片;


        return _services_user_service__WEBPACK_IMPORTED_MODULE_7__["default"].uploadAvatar(newAvatarPath.fullPath).then(function (url) {
          newAvatarUrl = url;

          _this2.$toast.clear();
        }).catch(function () {
          _this2.$toast.clear();

          _this2.$toast('上传头像失败');

          return Promise.reject('上传头像失败');
        });
      }).then(function () {
        // 返回url和本地路径
        return {
          original: newAvatarUrl,
          localPath: newAvatarPath.fullPath + '?' + new Date().getTime()
        };
      }).then(function (img) {
        if (img) {
          Object(_yl_app_jssdk_context__WEBPACK_IMPORTED_MODULE_4__["setUserContext"])({
            avatarUrl: img.original,
            avatarPath: img.localPath
          });
          _this2.userInfo.avatarUrl =  true ? img.original : undefined;

          _this2.$toast('保存成功');

          _this2.showAvatarSelect = false;
        }
      }).catch(function (err) {
        console.log(err);

        _this2.$toast.clear();
      });
    },
    onCancel: function onCancel() {
      this.showAvatarSelect = false;
    },
    toPassword: function toPassword() {
      this.$router.push({
        name: 'password'
      });
    },

    /** 跳转到角色详情 */
    toRoleDetail: function toRoleDetail() {
      if (this.roleList.length > 2) {
        commonDetailObj.title = '角色';
        console.log(this.roleList, 'roleList');
        commonDetailObj.list = this.roleList.map(function (item) {
          return {
            name: item.fullPath
          };
        });
        this.$router.push('/user/info-detail');
      }
    },

    /** 跳转到岗位详情 */
    toPostDetail: function toPostDetail() {
      if (this.postList.length > 2) {
        commonDetailObj.title = '岗位';
        commonDetailObj.list = this.postList.map(function (item) {
          return {
            name: item
          };
        });
        this.$router.push('/user/info-detail');
      }
    },

    /** 跳转到供应商/组织详情 */
    toOrgAnddContractorDetail: function toOrgAnddContractorDetail() {
      if (this.orgAndContractorList.length > 2) {
        if (this.userInfo.userType == 0) {
          commonDetailObj.title = '所属组织';
        } else {
          commonDetailObj.title = '所属供应商';
        }

        commonDetailObj.list = this.orgAndContractorList;
        this.$router.push('/user/info-detail');
      }
    }
  }
});

/***/ }),

/***/ "./node_modules/_cache-loader@4.1.0@cache-loader/dist/cjs.js?{\"cacheDirectory\":\"node_modules/.cache/vue-loader\",\"cacheIdentifier\":\"123502b7-vue-loader-template\"}!./node_modules/_vue-loader@15.9.6@vue-loader/lib/loaders/templateLoader.js?!./node_modules/_cache-loader@4.1.0@cache-loader/dist/cjs.js?!./node_modules/_vue-loader@15.9.6@vue-loader/lib/index.js?!./runtime-src/views/user/info.vue?vue&type=template&id=6f4679d3&scoped=true&":
/*!***********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/_cache-loader@4.1.0@cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"123502b7-vue-loader-template"}!./node_modules/_vue-loader@15.9.6@vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/_cache-loader@4.1.0@cache-loader/dist/cjs.js??ref--0-0!./node_modules/_vue-loader@15.9.6@vue-loader/lib??vue-loader-options!./runtime-src/views/user/info.vue?vue&type=template&id=6f4679d3&scoped=true& ***!
  \***********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
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
    { staticClass: "user-info-wrapper" },
    [
      _c("app-header", { attrs: { title: "个人信息" } }),
      _c(
        "div",
        { staticClass: "user-info-content" },
        [
          _c(
            "cell",
            {
              staticClass: "van-hairline--bottom",
              attrs: { title: "头像" },
              on: { click: _vm.editAvatar }
            },
            [
              _c("template", { slot: "right" }, [
                _c("div", { staticClass: "avatar" }, [
                  _vm.userInfo.avatarUrl
                    ? _c("img", { attrs: { src: _vm.userInfo.avatarUrl } })
                    : _vm._e()
                ])
              ])
            ],
            2
          ),
          _c(
            "cell",
            {
              staticClass: "van-hairline--bottom",
              attrs: { title: "姓名", isLink: false }
            },
            [
              _c("template", { slot: "right" }, [
                _vm._v(_vm._s(_vm.userInfo.name))
              ])
            ],
            2
          ),
          _c(
            "cell",
            {
              staticClass: "van-hairline--bottom",
              attrs: { title: "手机号码", isLink: false }
            },
            [
              _c("template", { slot: "right" }, [
                _vm._v(_vm._s(_vm.userInfo.mobile))
              ])
            ],
            2
          ),
          _c(
            "cell",
            {
              attrs: {
                title: "角色",
                isLink: _vm.roleList.length > 2,
                border: true
              },
              on: { click: _vm.toRoleDetail }
            },
            [
              _c("template", { slot: "right" }, [
                _vm.roleList.length > 2
                  ? _c("span", [_vm._v(_vm._s(_vm.roleList.length))])
                  : _c(
                      "span",
                      _vm._l(_vm.roleList, function(item, index) {
                        return _c("div", { key: index }, [
                          _vm._v(" " + _vm._s(item.fullName || item.name) + " ")
                        ])
                      }),
                      0
                    )
              ])
            ],
            2
          ),
          _c(
            "cell",
            {
              attrs: {
                border: true,
                isLink: _vm.postList.length > 2,
                title: "岗位"
              },
              on: { click: _vm.toPostDetail }
            },
            [
              _c("template", { slot: "right" }, [
                _vm.postList.length > 2
                  ? _c("span", [_vm._v(_vm._s(_vm.postList.length))])
                  : _c(
                      "span",
                      _vm._l(_vm.postList, function(item, index) {
                        return _c("div", { key: index }, [
                          _vm._v(" " + _vm._s(item) + " ")
                        ])
                      }),
                      0
                    )
              ])
            ],
            2
          ),
          _c(
            "cell",
            {
              attrs: {
                border: true,
                isLink: _vm.orgAndContractorList.length > 2,
                title: _vm.userInfo.userType == "0" ? "所属组织" : "所属供应商"
              },
              on: { click: _vm.toOrgAnddContractorDetail }
            },
            [
              _c("template", { slot: "right" }, [
                _vm.orgAndContractorList.length > 2
                  ? _c("span", [
                      _vm._v(_vm._s(_vm.orgAndContractorList.length))
                    ])
                  : _c(
                      "span",
                      _vm._l(_vm.orgAndContractorList, function(item, index) {
                        return _c("div", { key: index }, [
                          _vm._v(" " + _vm._s(item.name) + " ")
                        ])
                      }),
                      0
                    )
              ])
            ],
            2
          ),
          _c("cell", {
            attrs: { title: "修改密码" },
            on: { click: _vm.toPassword }
          })
        ],
        1
      ),
      _c(
        "van-popup",
        {
          staticClass: "avatarSelector",
          attrs: { position: "bottom" },
          model: {
            value: _vm.showAvatarSelect,
            callback: function($$v) {
              _vm.showAvatarSelect = $$v
            },
            expression: "showAvatarSelect"
          }
        },
        [
          _c(
            "div",
            { staticClass: "actions" },
            _vm._l(_vm.actions, function(item, index) {
              return _c(
                "div",
                {
                  key: index,
                  staticClass: "action-item action-button",
                  class: { "van-hairline--bottom": !index },
                  on: {
                    click: function($event) {
                      return _vm.onSelect(item)
                    }
                  }
                },
                [_vm._v(" " + _vm._s(item.name) + " ")]
              )
            }),
            0
          ),
          _c(
            "div",
            {
              staticClass: "cancel action-button",
              on: { click: _vm.onCancel }
            },
            [_vm._v(" 取消 ")]
          )
        ]
      )
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/_css-loader@3.6.0@css-loader/dist/cjs.js?!./node_modules/_vue-loader@15.9.6@vue-loader/lib/loaders/stylePostLoader.js!./node_modules/_postcss-loader@3.0.0@postcss-loader/src/index.js?!./node_modules/_sass-loader@8.0.2@sass-loader/dist/cjs.js?!./node_modules/_cache-loader@4.1.0@cache-loader/dist/cjs.js?!./node_modules/_vue-loader@15.9.6@vue-loader/lib/index.js?!./runtime-src/views/user/info.vue?vue&type=style&index=0&id=6f4679d3&lang=scss&scoped=true&":
/*!**********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/_css-loader@3.6.0@css-loader/dist/cjs.js??ref--8-oneOf-1-1!./node_modules/_vue-loader@15.9.6@vue-loader/lib/loaders/stylePostLoader.js!./node_modules/_postcss-loader@3.0.0@postcss-loader/src??ref--8-oneOf-1-2!./node_modules/_sass-loader@8.0.2@sass-loader/dist/cjs.js??ref--8-oneOf-1-3!./node_modules/_cache-loader@4.1.0@cache-loader/dist/cjs.js??ref--0-0!./node_modules/_vue-loader@15.9.6@vue-loader/lib??vue-loader-options!./runtime-src/views/user/info.vue?vue&type=style&index=0&id=6f4679d3&lang=scss&scoped=true& ***!
  \**********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../node_modules/_css-loader@3.6.0@css-loader/dist/runtime/api.js */ "./node_modules/_css-loader@3.6.0@css-loader/dist/runtime/api.js");
var ___CSS_LOADER_GET_URL_IMPORT___ = __webpack_require__(/*! ../../../node_modules/_css-loader@3.6.0@css-loader/dist/runtime/getUrl.js */ "./node_modules/_css-loader@3.6.0@css-loader/dist/runtime/getUrl.js");
var ___CSS_LOADER_URL_IMPORT_0___ = __webpack_require__(/*! ../../assets/images/user/default-avatar.png */ "./runtime-src/assets/images/user/default-avatar.png");
exports = ___CSS_LOADER_API_IMPORT___(true);
var ___CSS_LOADER_URL_REPLACEMENT_0___ = ___CSS_LOADER_GET_URL_IMPORT___(___CSS_LOADER_URL_IMPORT_0___);
// Module
exports.push([module.i, ".custom-theme .color[data-v-6f4679d3] {\n  color: \"#2c5cf7\";\n}\n.custom-theme .border-color[data-v-6f4679d3] {\n  border-color: \"#2c5cf7\";\n}\n.custom-theme .border-color[data-v-6f4679d3]::after {\n    border-color: \"#2c5cf7\";\n}\n.custom-theme .gradient-background[data-v-6f4679d3] {\n  background: -webkit-gradient(linear, left top, right top, from(#2c5cf7), to(rgba(44, 92, 247, 0.8)));\n  background: linear-gradient(90deg, #2c5cf7 0%, rgba(44, 92, 247, 0.8) 100%);\n}\n.custom-theme .color[data-v-6f4679d3] {\n  color: #2c5cf7;\n}\n.custom-theme .border-color[data-v-6f4679d3] {\n  border-color: #2c5cf7;\n}\n.custom-theme .border-color[data-v-6f4679d3]::after {\n    border-color: #2c5cf7;\n}\n.test-theme .color[data-v-6f4679d3] {\n  color: #f00;\n}\n.test-theme .border-color[data-v-6f4679d3] {\n  border-color: #f00;\n}\n.test-theme .border-color[data-v-6f4679d3]::after {\n    border-color: #f00;\n}\n.user-info-wrapper[data-v-6f4679d3] {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: column;\n          flex-direction: column;\n  overflow: hidden;\n  height: 100%;\n  width: 100%;\n}\n.user-info-wrapper[data-v-6f4679d3] .app-cell-right {\n    color: #999999;\n}\n.user-info-wrapper .user-info-content[data-v-6f4679d3] {\n    padding-top: 10px;\n    -webkit-box-flex: 1;\n        -ms-flex: 1;\n            flex: 1;\n    overflow: auto;\n}\n.user-info-wrapper .avatar[data-v-6f4679d3] {\n    width: 48px;\n    height: 48px;\n    border-radius: 50%;\n    background: url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + ");\n    background-size: contain;\n    margin-right: 5px;\n}\n.user-info-wrapper .avatar > img[data-v-6f4679d3] {\n      width: 100%;\n      height: 100%;\n      border-radius: 50%;\n}\n.user-info-wrapper .app-cell[data-v-6f4679d3] {\n    -webkit-box-align: start;\n        -ms-flex-align: start;\n            align-items: flex-start;\n}\n.role-cell[data-v-6f4679d3] {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  width: 100%;\n  padding: 15px;\n  background: #ffffff;\n  font-size: 16px;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n  margin-bottom: 1px;\n}\n.role-cell .role-cell-left[data-v-6f4679d3] {\n    min-width: 90px;\n}\n.role-cell .role-cell-right[data-v-6f4679d3] {\n    text-align: right;\n    color: #999999;\n    overflow: hidden;\n    -webkit-box-flex: 1;\n        -ms-flex: 1;\n            flex: 1;\n}\n.role-cell .role-cell-right .role-list[data-v-6f4679d3] {\n      width: 100%;\n      overflow: hidden;\n}\n.role-cell .role-cell-right .role-list .role-item[data-v-6f4679d3] {\n        width: 100%;\n        white-space: nowrap;\n        overflow: hidden;\n        text-overflow: ellipsis;\n}\n[data-v-6f4679d3] .van-popup {\n  background: #ececec;\n  border-radius: 20px 20px 0 0;\n}\n[data-v-6f4679d3] .van-popup .actions {\n    width: 100%;\n    background-color: #ffffff;\n}\n[data-v-6f4679d3] .van-popup .action-button {\n    width: 100%;\n    height: 56px;\n    font-size: 16px;\n    line-height: 56px;\n    background: #ffffff;\n    text-align: center;\n}\n[data-v-6f4679d3] .van-popup .action-item {\n    color: #000000;\n}\n[data-v-6f4679d3] .van-popup .cancel {\n    margin-top: 8px;\n    color: #666666;\n}\n", "",{"version":3,"sources":["/Users/appcloud/appcloud/jenkins/project/pmcSDKsmartengineer/longzh_20210105_113838_8/runtime-src/styles/variable.scss","/Users/appcloud/appcloud/jenkins/project/pmcSDKsmartengineer/longzh_20210105_113838_8/runtime-src/views/user/info.vue"],"names":[],"mappings":"AAkBE;EACE,gBAWsB;AAAA;AATxB;EACE,uBAQsB;AAAA;AAPtB;IACE,uBAMoB;AAAA;AAD1B;EAGI,oGAIC;EAJD,2EAIC;AAAA;AAlBH;EACE,cAsBoB;AAAA;AApBtB;EACE,qBAmBoB;AAAA;AAlBpB;IACE,qBAiBkB;AAAA;AAvBtB;EACE,WA0BiB;AAAA;AAxBnB;EACE,kBAuBiB;AAAA;AAtBjB;IACE,kBAqBe;AAAA;AC6RrB;EACE,oBAAa;EAAb,oBAAa;EAAb,aAAa;EACb,4BAAsB;EAAtB,6BAAsB;MAAtB,0BAAsB;UAAtB,sBAAsB;EACtB,gBAAgB;EAChB,YAAY;EACZ,WAAW;AAAA;AALb;IAQI,cAAc;AAAA;AARlB;IAYI,iBAAiB;IACjB,mBAAO;QAAP,WAAO;YAAP,OAAO;IACP,cAAc;AAAA;AAdlB;IAkBI,WAAW;IACX,YAAY;IACZ,kBAAkB;IAClB,mDAA8D;IAC9D,wBAAwB;IACxB,iBAAiB;AAAA;AAvBrB;MA0BM,WAAW;MACX,YAAY;MACZ,kBAAkB;AAAA;AA5BxB;IAiCI,wBAAuB;QAAvB,qBAAuB;YAAvB,uBAAuB;AAAA;AAI3B;EACE,oBAAa;EAAb,oBAAa;EAAb,aAAa;EACb,WAAW;EACX,aAAa;EACb,mBAAmB;EACnB,eAAe;EACf,yBAAmB;MAAnB,sBAAmB;UAAnB,mBAAmB;EACnB,kBAAkB;AAAA;AAPpB;IAUI,eAAe;AAAA;AAVnB;IAcI,iBAAiB;IACjB,cAAc;IACd,gBAAgB;IAChB,mBAAO;QAAP,WAAO;YAAP,OAAO;AAAA;AAjBX;MAoBM,WAAW;MACX,gBAAgB;AAAA;AArBtB;QAwBQ,WAAW;QACX,mBAAmB;QACnB,gBAAgB;QAChB,uBAAuB;AAAA;AAM/B;EACE,mBAAmB;EACnB,4BAA4B;AAAA;AAF9B;IAKI,WAAW;IACX,yBAAyB;AAAA;AAN7B;IAUI,WAAW;IACX,YAAY;IACZ,eAAe;IACf,iBAAiB;IACjB,mBAAmB;IACnB,kBAAkB;AAAA;AAftB;IAmBI,cAAc;AAAA;AAnBlB;IAuBI,eAAe;IACf,cAAc;AAAA","file":"info.vue","sourcesContent":["// 主题色\n$color-theme: #2c5cf7;\n$color-theme-light: #2c5cf7;\n// border颜色\n$color-border: #ebebeb;\n// CONTENT\n$color-body-bg: rgba(244, 244, 244, 1);\n$color-text: #202020;\n$color-text-light: #606060;\n$color-red: #eb544d;\n$color-blue: #0099ff;\n$color-purple: #a13eff;\n$color-grey: #a0a0a0;\n$color-green: #00cb59;\n$color-icon: #8a8a8a;\n$color-error: #ff3b30;\n\n@mixin theme($color-theme) {\n  .color {\n    color: $color-theme;\n  }\n  .border-color {\n    border-color: $color-theme;\n    &::after {\n      border-color: $color-theme;\n    }\n  }\n}\n\n.custom-theme {\n  @include theme('#2c5cf7');\n  .gradient-background {\n    background: linear-gradient(\n      90deg,\n      rgba($color-theme, 1) 0%,\n      rgba($color-theme, 0.8) 100%\n    );\n  }\n}\n\n.custom-theme {\n  @include theme(#2c5cf7);\n}\n\n.test-theme {\n  @include theme(#f00);\n}\n","@import \"~@src/styles/variable.scss\";\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n.user-info-wrapper {\n  display: flex;\n  flex-direction: column;\n  overflow: hidden;\n  height: 100%;\n  width: 100%;\n\n  /deep/.app-cell-right {\n    color: #999999;\n  }\n\n  .user-info-content {\n    padding-top: 10px;\n    flex: 1;\n    overflow: auto;\n  }\n\n  .avatar {\n    width: 48px;\n    height: 48px;\n    border-radius: 50%;\n    background: url('../../assets/images/user/default-avatar.png');\n    background-size: contain;\n    margin-right: 5px;\n\n    & > img {\n      width: 100%;\n      height: 100%;\n      border-radius: 50%;\n    }\n  }\n\n  .app-cell {\n    align-items: flex-start;\n  }\n}\n\n.role-cell {\n  display: flex;\n  width: 100%;\n  padding: 15px;\n  background: #ffffff;\n  font-size: 16px;\n  align-items: center;\n  margin-bottom: 1px;\n\n  .role-cell-left {\n    min-width: 90px;\n  }\n\n  .role-cell-right {\n    text-align: right;\n    color: #999999;\n    overflow: hidden;\n    flex: 1;\n\n    .role-list {\n      width: 100%;\n      overflow: hidden;\n\n      .role-item {\n        width: 100%;\n        white-space: nowrap;\n        overflow: hidden;\n        text-overflow: ellipsis;\n      }\n    }\n  }\n}\n\n/deep/ .van-popup {\n  background: #ececec;\n  border-radius: 20px 20px 0 0;\n\n  .actions {\n    width: 100%;\n    background-color: #ffffff;\n  }\n\n  .action-button {\n    width: 100%;\n    height: 56px;\n    font-size: 16px;\n    line-height: 56px;\n    background: #ffffff;\n    text-align: center;\n  }\n\n  .action-item {\n    color: #000000;\n  }\n\n  .cancel {\n    margin-top: 8px;\n    color: #666666;\n  }\n}\n"]}]);
// Exports
module.exports = exports;


/***/ }),

/***/ "./node_modules/_vue-style-loader@4.1.2@vue-style-loader/index.js?!./node_modules/_css-loader@3.6.0@css-loader/dist/cjs.js?!./node_modules/_vue-loader@15.9.6@vue-loader/lib/loaders/stylePostLoader.js!./node_modules/_postcss-loader@3.0.0@postcss-loader/src/index.js?!./node_modules/_sass-loader@8.0.2@sass-loader/dist/cjs.js?!./node_modules/_cache-loader@4.1.0@cache-loader/dist/cjs.js?!./node_modules/_vue-loader@15.9.6@vue-loader/lib/index.js?!./runtime-src/views/user/info.vue?vue&type=style&index=0&id=6f4679d3&lang=scss&scoped=true&":
/*!************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/_vue-style-loader@4.1.2@vue-style-loader??ref--8-oneOf-1-0!./node_modules/_css-loader@3.6.0@css-loader/dist/cjs.js??ref--8-oneOf-1-1!./node_modules/_vue-loader@15.9.6@vue-loader/lib/loaders/stylePostLoader.js!./node_modules/_postcss-loader@3.0.0@postcss-loader/src??ref--8-oneOf-1-2!./node_modules/_sass-loader@8.0.2@sass-loader/dist/cjs.js??ref--8-oneOf-1-3!./node_modules/_cache-loader@4.1.0@cache-loader/dist/cjs.js??ref--0-0!./node_modules/_vue-loader@15.9.6@vue-loader/lib??vue-loader-options!./runtime-src/views/user/info.vue?vue&type=style&index=0&id=6f4679d3&lang=scss&scoped=true& ***!
  \************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(/*! !../../../node_modules/_css-loader@3.6.0@css-loader/dist/cjs.js??ref--8-oneOf-1-1!../../../node_modules/_vue-loader@15.9.6@vue-loader/lib/loaders/stylePostLoader.js!../../../node_modules/_postcss-loader@3.0.0@postcss-loader/src??ref--8-oneOf-1-2!../../../node_modules/_sass-loader@8.0.2@sass-loader/dist/cjs.js??ref--8-oneOf-1-3!../../../node_modules/_cache-loader@4.1.0@cache-loader/dist/cjs.js??ref--0-0!../../../node_modules/_vue-loader@15.9.6@vue-loader/lib??vue-loader-options!./info.vue?vue&type=style&index=0&id=6f4679d3&lang=scss&scoped=true& */ "./node_modules/_css-loader@3.6.0@css-loader/dist/cjs.js?!./node_modules/_vue-loader@15.9.6@vue-loader/lib/loaders/stylePostLoader.js!./node_modules/_postcss-loader@3.0.0@postcss-loader/src/index.js?!./node_modules/_sass-loader@8.0.2@sass-loader/dist/cjs.js?!./node_modules/_cache-loader@4.1.0@cache-loader/dist/cjs.js?!./node_modules/_vue-loader@15.9.6@vue-loader/lib/index.js?!./runtime-src/views/user/info.vue?vue&type=style&index=0&id=6f4679d3&lang=scss&scoped=true&");
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var add = __webpack_require__(/*! ../../../node_modules/_vue-style-loader@4.1.2@vue-style-loader/lib/addStylesClient.js */ "./node_modules/_vue-style-loader@4.1.2@vue-style-loader/lib/addStylesClient.js").default
var update = add("29880db0", content, false, {"sourceMap":true,"shadowMode":false});
// Hot Module Replacement
if(false) {}

/***/ }),

/***/ "./runtime-src/assets/images/user/default-avatar.png":
/*!***********************************************************!*\
  !*** ./runtime-src/assets/images/user/default-avatar.png ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/default-avatar.457ab4fe.png";

/***/ }),

/***/ "./runtime-src/views/user/info.vue":
/*!*****************************************!*\
  !*** ./runtime-src/views/user/info.vue ***!
  \*****************************************/
/*! exports provided: commonDetailObj, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _info_vue_vue_type_template_id_6f4679d3_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./info.vue?vue&type=template&id=6f4679d3&scoped=true& */ "./runtime-src/views/user/info.vue?vue&type=template&id=6f4679d3&scoped=true&");
/* harmony import */ var _info_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./info.vue?vue&type=script&lang=js& */ "./runtime-src/views/user/info.vue?vue&type=script&lang=js&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "commonDetailObj", function() { return _info_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["commonDetailObj"]; });

/* harmony import */ var _info_vue_vue_type_style_index_0_id_6f4679d3_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./info.vue?vue&type=style&index=0&id=6f4679d3&lang=scss&scoped=true& */ "./runtime-src/views/user/info.vue?vue&type=style&index=0&id=6f4679d3&lang=scss&scoped=true&");
/* harmony import */ var _node_modules_vue_loader_15_9_6_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../node_modules/_vue-loader@15.9.6@vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/_vue-loader@15.9.6@vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_15_9_6_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _info_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _info_vue_vue_type_template_id_6f4679d3_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _info_vue_vue_type_template_id_6f4679d3_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "6f4679d3",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "runtime-src/views/user/info.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./runtime-src/views/user/info.vue?vue&type=script&lang=js&":
/*!******************************************************************!*\
  !*** ./runtime-src/views/user/info.vue?vue&type=script&lang=js& ***!
  \******************************************************************/
/*! exports provided: default, commonDetailObj */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_cache_loader_4_1_0_cache_loader_dist_cjs_js_ref_12_0_node_modules_babel_loader_8_2_2_babel_loader_lib_index_js_node_modules_cache_loader_4_1_0_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_15_9_6_vue_loader_lib_index_js_vue_loader_options_info_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/_cache-loader@4.1.0@cache-loader/dist/cjs.js??ref--12-0!../../../node_modules/_babel-loader@8.2.2@babel-loader/lib!../../../node_modules/_cache-loader@4.1.0@cache-loader/dist/cjs.js??ref--0-0!../../../node_modules/_vue-loader@15.9.6@vue-loader/lib??vue-loader-options!./info.vue?vue&type=script&lang=js& */ "./node_modules/_cache-loader@4.1.0@cache-loader/dist/cjs.js?!./node_modules/_babel-loader@8.2.2@babel-loader/lib/index.js!./node_modules/_cache-loader@4.1.0@cache-loader/dist/cjs.js?!./node_modules/_vue-loader@15.9.6@vue-loader/lib/index.js?!./runtime-src/views/user/info.vue?vue&type=script&lang=js&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "commonDetailObj", function() { return _node_modules_cache_loader_4_1_0_cache_loader_dist_cjs_js_ref_12_0_node_modules_babel_loader_8_2_2_babel_loader_lib_index_js_node_modules_cache_loader_4_1_0_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_15_9_6_vue_loader_lib_index_js_vue_loader_options_info_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["commonDetailObj"]; });

 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_cache_loader_4_1_0_cache_loader_dist_cjs_js_ref_12_0_node_modules_babel_loader_8_2_2_babel_loader_lib_index_js_node_modules_cache_loader_4_1_0_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_15_9_6_vue_loader_lib_index_js_vue_loader_options_info_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./runtime-src/views/user/info.vue?vue&type=style&index=0&id=6f4679d3&lang=scss&scoped=true&":
/*!***************************************************************************************************!*\
  !*** ./runtime-src/views/user/info.vue?vue&type=style&index=0&id=6f4679d3&lang=scss&scoped=true& ***!
  \***************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_4_1_2_vue_style_loader_index_js_ref_8_oneOf_1_0_node_modules_css_loader_3_6_0_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_loader_15_9_6_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_3_0_0_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_8_0_2_sass_loader_dist_cjs_js_ref_8_oneOf_1_3_node_modules_cache_loader_4_1_0_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_15_9_6_vue_loader_lib_index_js_vue_loader_options_info_vue_vue_type_style_index_0_id_6f4679d3_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/_vue-style-loader@4.1.2@vue-style-loader??ref--8-oneOf-1-0!../../../node_modules/_css-loader@3.6.0@css-loader/dist/cjs.js??ref--8-oneOf-1-1!../../../node_modules/_vue-loader@15.9.6@vue-loader/lib/loaders/stylePostLoader.js!../../../node_modules/_postcss-loader@3.0.0@postcss-loader/src??ref--8-oneOf-1-2!../../../node_modules/_sass-loader@8.0.2@sass-loader/dist/cjs.js??ref--8-oneOf-1-3!../../../node_modules/_cache-loader@4.1.0@cache-loader/dist/cjs.js??ref--0-0!../../../node_modules/_vue-loader@15.9.6@vue-loader/lib??vue-loader-options!./info.vue?vue&type=style&index=0&id=6f4679d3&lang=scss&scoped=true& */ "./node_modules/_vue-style-loader@4.1.2@vue-style-loader/index.js?!./node_modules/_css-loader@3.6.0@css-loader/dist/cjs.js?!./node_modules/_vue-loader@15.9.6@vue-loader/lib/loaders/stylePostLoader.js!./node_modules/_postcss-loader@3.0.0@postcss-loader/src/index.js?!./node_modules/_sass-loader@8.0.2@sass-loader/dist/cjs.js?!./node_modules/_cache-loader@4.1.0@cache-loader/dist/cjs.js?!./node_modules/_vue-loader@15.9.6@vue-loader/lib/index.js?!./runtime-src/views/user/info.vue?vue&type=style&index=0&id=6f4679d3&lang=scss&scoped=true&");
/* harmony import */ var _node_modules_vue_style_loader_4_1_2_vue_style_loader_index_js_ref_8_oneOf_1_0_node_modules_css_loader_3_6_0_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_loader_15_9_6_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_3_0_0_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_8_0_2_sass_loader_dist_cjs_js_ref_8_oneOf_1_3_node_modules_cache_loader_4_1_0_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_15_9_6_vue_loader_lib_index_js_vue_loader_options_info_vue_vue_type_style_index_0_id_6f4679d3_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_4_1_2_vue_style_loader_index_js_ref_8_oneOf_1_0_node_modules_css_loader_3_6_0_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_loader_15_9_6_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_3_0_0_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_8_0_2_sass_loader_dist_cjs_js_ref_8_oneOf_1_3_node_modules_cache_loader_4_1_0_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_15_9_6_vue_loader_lib_index_js_vue_loader_options_info_vue_vue_type_style_index_0_id_6f4679d3_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_4_1_2_vue_style_loader_index_js_ref_8_oneOf_1_0_node_modules_css_loader_3_6_0_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_loader_15_9_6_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_3_0_0_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_8_0_2_sass_loader_dist_cjs_js_ref_8_oneOf_1_3_node_modules_cache_loader_4_1_0_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_15_9_6_vue_loader_lib_index_js_vue_loader_options_info_vue_vue_type_style_index_0_id_6f4679d3_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_4_1_2_vue_style_loader_index_js_ref_8_oneOf_1_0_node_modules_css_loader_3_6_0_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_loader_15_9_6_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_3_0_0_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_8_0_2_sass_loader_dist_cjs_js_ref_8_oneOf_1_3_node_modules_cache_loader_4_1_0_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_15_9_6_vue_loader_lib_index_js_vue_loader_options_info_vue_vue_type_style_index_0_id_6f4679d3_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ "./runtime-src/views/user/info.vue?vue&type=template&id=6f4679d3&scoped=true&":
/*!************************************************************************************!*\
  !*** ./runtime-src/views/user/info.vue?vue&type=template&id=6f4679d3&scoped=true& ***!
  \************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_cache_loader_4_1_0_cache_loader_dist_cjs_js_cacheDirectory_node_modules_cache_vue_loader_cacheIdentifier_123502b7_vue_loader_template_node_modules_vue_loader_15_9_6_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_cache_loader_4_1_0_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_15_9_6_vue_loader_lib_index_js_vue_loader_options_info_vue_vue_type_template_id_6f4679d3_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/_cache-loader@4.1.0@cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"123502b7-vue-loader-template"}!../../../node_modules/_vue-loader@15.9.6@vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/_cache-loader@4.1.0@cache-loader/dist/cjs.js??ref--0-0!../../../node_modules/_vue-loader@15.9.6@vue-loader/lib??vue-loader-options!./info.vue?vue&type=template&id=6f4679d3&scoped=true& */ "./node_modules/_cache-loader@4.1.0@cache-loader/dist/cjs.js?{\"cacheDirectory\":\"node_modules/.cache/vue-loader\",\"cacheIdentifier\":\"123502b7-vue-loader-template\"}!./node_modules/_vue-loader@15.9.6@vue-loader/lib/loaders/templateLoader.js?!./node_modules/_cache-loader@4.1.0@cache-loader/dist/cjs.js?!./node_modules/_vue-loader@15.9.6@vue-loader/lib/index.js?!./runtime-src/views/user/info.vue?vue&type=template&id=6f4679d3&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_cache_loader_4_1_0_cache_loader_dist_cjs_js_cacheDirectory_node_modules_cache_vue_loader_cacheIdentifier_123502b7_vue_loader_template_node_modules_vue_loader_15_9_6_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_cache_loader_4_1_0_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_15_9_6_vue_loader_lib_index_js_vue_loader_options_info_vue_vue_type_template_id_6f4679d3_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_cache_loader_4_1_0_cache_loader_dist_cjs_js_cacheDirectory_node_modules_cache_vue_loader_cacheIdentifier_123502b7_vue_loader_template_node_modules_vue_loader_15_9_6_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_cache_loader_4_1_0_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_15_9_6_vue_loader_lib_index_js_vue_loader_options_info_vue_vue_type_template_id_6f4679d3_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./src/api/user-state.js":
/*!*******************************!*\
  !*** ./src/api/user-state.js ***!
  \*******************************/
/*! exports provided: getBaseInfo, getApplyProjectList, getFlow, getContractFlow, getUserRoleInfo, getUserPostInfo, getUserContractorInfo, getUserOrgInfo, getApplyContractList, getApplyProjList, getApplyProjListInOrg, cancelApply */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getBaseInfo", function() { return getBaseInfo; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getApplyProjectList", function() { return getApplyProjectList; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getFlow", function() { return getFlow; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getContractFlow", function() { return getContractFlow; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getUserRoleInfo", function() { return getUserRoleInfo; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getUserPostInfo", function() { return getUserPostInfo; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getUserContractorInfo", function() { return getUserContractorInfo; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getUserOrgInfo", function() { return getUserOrgInfo; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getApplyContractList", function() { return getApplyContractList; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getApplyProjList", function() { return getApplyProjList; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getApplyProjListInOrg", function() { return getApplyProjListInOrg; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "cancelApply", function() { return cancelApply; });
/* harmony import */ var core_js_modules_es_array_concat_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.array.concat.js */ "./node_modules/_core-js@3.8.2@core-js/modules/es.array.concat.js");
/* harmony import */ var core_js_modules_es_array_concat_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_concat_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.object.to-string.js */ "./node_modules/_core-js@3.8.2@core-js/modules/es.object.to-string.js");
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _src_common_ajax__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @src/common/ajax */ "./runtime-src/common/ajax.js");



var domain = window.GLOBAL_ENV.SSO_CENTER_DEFAULT_API;

var formatResult = function formatResult(result) {
  if (result.errcode) {
    return Promise.reject(result.message);
  }

  return Promise.resolve(result.data);
};
/**
 * 获取用户状态
 */


var getBaseInfo = function getBaseInfo() {
  return Object(_src_common_ajax__WEBPACK_IMPORTED_MODULE_2__["default"])({
    url: "".concat(domain, "/m/PermissionApply/permission-auth/get-user-base-info")
  }).then(function (res) {
    return formatResult(res);
  }).then(function (data) {
    return data.base_info;
  });
};
/**
 * 获取申请的项目
 * @param {*} type
 */

var getApplyProjectList = function getApplyProjectList(type) {
  return Object(_src_common_ajax__WEBPACK_IMPORTED_MODULE_2__["default"])({
    url: "".concat(domain, "/m/PermissionApply/permission-auth/get-apply-project-list"),
    method: 'post',
    data: {
      type: type
    }
  }).then(function (res) {
    return formatResult(res);
  });
};
/**
 * 获取项目审核流程
 * @param {*} data
 */

var getFlow = function getFlow(data) {
  return Object(_src_common_ajax__WEBPACK_IMPORTED_MODULE_2__["default"])({
    method: 'POST',
    url: "".concat(domain, "/m/PermissionApply/permission-auth/get-project-approve-flow"),
    data: data
  }).then(function (result) {
    if (result.errcode != 0) {
      return Promise.reject('请求失败');
    }

    return Promise.resolve(result.data);
  }).catch(function (err) {
    return Promise.reject(err);
  });
};
/**
 * 获取合同审核流程
 * @param {*} apply_id 审批ID
 * @param {*} contract_keyword_id 合同关键字主键ID
 */

var getContractFlow = function getContractFlow(data) {
  return Object(_src_common_ajax__WEBPACK_IMPORTED_MODULE_2__["default"])({
    method: 'POST',
    url: "".concat(domain, "/m/PermissionApply/permission-auth/get-contract-approve-flow"),
    data: data
  }).then(function (result) {
    if (result.errcode != 0) {
      return Promise.reject('请求失败');
    }

    return Promise.resolve(result.data);
  }).catch(function (err) {
    return Promise.reject(err);
  });
};
/**
 * 获取用户角色
 * @param {*} data
 */

var getUserRoleInfo = function getUserRoleInfo(data) {
  return Object(_src_common_ajax__WEBPACK_IMPORTED_MODULE_2__["default"])({
    method: 'POST',
    url: "".concat(domain, "/m/PermissionApply/permission-approval/get-user-role-info"),
    data: data,
    retry: false
  }).then(function (result) {
    if (result.errcode != 0) {
      return Promise.reject('请求失败');
    }

    return Promise.resolve(result.data);
  }).catch(function (err) {
    return Promise.reject(err);
  });
};
/**
 * 获取用户岗位
 * @param {*} data
 */

var getUserPostInfo = function getUserPostInfo(data) {
  return Object(_src_common_ajax__WEBPACK_IMPORTED_MODULE_2__["default"])({
    method: 'POST',
    url: "".concat(domain, "/m/PermissionApply/permission-approval/get-user-post-info"),
    data: data,
    retry: false
  }).then(function (result) {
    if (result.errcode != 0) {
      return Promise.reject('请求失败');
    }

    return Promise.resolve(result.data);
  }).catch(function (err) {
    return Promise.reject(err);
  });
};
/**
 * 获取供应商
 * @param {*} data
 */

var getUserContractorInfo = function getUserContractorInfo(data) {
  return Object(_src_common_ajax__WEBPACK_IMPORTED_MODULE_2__["default"])({
    method: 'POST',
    url: "".concat(domain, "/m/PermissionApply/permission-approval/get-contractor-list"),
    data: data,
    retry: false
  }).then(function (result) {
    if (result.errcode != 0) {
      return Promise.reject('请求失败');
    }

    return Promise.resolve(result.data);
  }).catch(function (err) {
    return Promise.reject(err);
  });
};
/**
 * 获取组织
 * @param {*} data
 */

var getUserOrgInfo = function getUserOrgInfo(data) {
  return Object(_src_common_ajax__WEBPACK_IMPORTED_MODULE_2__["default"])({
    method: 'POST',
    url: "".concat(domain, "/m/PermissionApply/permission-approval/get-org-list"),
    data: data,
    retry: false
  }).then(function (result) {
    if (result.errcode != 0) {
      return Promise.reject('请求失败');
    }

    return Promise.resolve(result.data);
  }).catch(function (err) {
    return Promise.reject(err);
  });
};
/**
 * 获取申请的项目
 * @param {*} type
 */

var getApplyContractList = function getApplyContractList(data) {
  return Object(_src_common_ajax__WEBPACK_IMPORTED_MODULE_2__["default"])({
    url: "".concat(domain, "/m/PermissionApply/permission-approval/apply-contract-list"),
    method: 'post',
    data: data
  }).then(function (res) {
    return formatResult(res);
  });
};
/**
 * 获取申请的项目
 * @param {*} type
 */

var getApplyProjList = function getApplyProjList(data) {
  return Object(_src_common_ajax__WEBPACK_IMPORTED_MODULE_2__["default"])({
    url: "".concat(domain, "/m/PermissionApply/permission-approval/apply-proj-list?approvalState=").concat(data.approvalState || '', "&orgId=").concat(data.orgId || ''),
    method: 'post',
    data: data
  }).then(function (res) {
    return formatResult(res);
  });
};
/**
 * 获取公司层级下的申请的项目
 * @param {*} type
 */

var getApplyProjListInOrg = function getApplyProjListInOrg(data) {
  var _url = "".concat(domain, "/m/PermissionApply/permission-approval/apply-proj-list-in-org?approvalState=").concat(data.approvalState || '', "&orgId=").concat(data.orgId || '');

  return Object(_src_common_ajax__WEBPACK_IMPORTED_MODULE_2__["default"])({
    url: _url,
    method: 'post',
    data: data
  }).then(function (res) {
    return formatResult(res);
  });
};
/**
 * 撤销申请
 *
 * @param {*} apply_id 申请记录ID，必填
 * @param {*} project_id 项目ID，撤销项目时必填
 * @param {*} keyword_id 合同关键字主键ID，撤销合同时必填
 */

var cancelApply = function cancelApply(data) {
  return Object(_src_common_ajax__WEBPACK_IMPORTED_MODULE_2__["default"])({
    url: "".concat(domain, "/m/PermissionApply/permission-auth/cancel-apply"),
    method: 'post',
    data: data
  }).then(function (res) {
    return formatResult(res);
  });
};

/***/ })

}]);
//# sourceMappingURL=3.js.map