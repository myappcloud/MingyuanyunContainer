(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[19],{

/***/ "./node_modules/_cache-loader@4.1.0@cache-loader/dist/cjs.js?!./node_modules/_babel-loader@8.2.2@babel-loader/lib/index.js!./node_modules/_cache-loader@4.1.0@cache-loader/dist/cjs.js?!./node_modules/_vue-loader@15.9.6@vue-loader/lib/index.js?!./runtime-src/views/user/permission/permission-apply.vue?vue&type=script&lang=js&":
/*!***************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/_cache-loader@4.1.0@cache-loader/dist/cjs.js??ref--12-0!./node_modules/_babel-loader@8.2.2@babel-loader/lib!./node_modules/_cache-loader@4.1.0@cache-loader/dist/cjs.js??ref--0-0!./node_modules/_vue-loader@15.9.6@vue-loader/lib??vue-loader-options!./runtime-src/views/user/permission/permission-apply.vue?vue&type=script&lang=js& ***!
  \***************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var core_js_modules_es_array_for_each_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.array.for-each.js */ "./node_modules/_core-js@3.8.2@core-js/modules/es.array.for-each.js");
/* harmony import */ var core_js_modules_es_array_for_each_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_for_each_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/web.dom-collections.for-each.js */ "./node_modules/_core-js@3.8.2@core-js/modules/web.dom-collections.for-each.js");
/* harmony import */ var core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components_app_cell__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @components/app-cell */ "./runtime-src/components/app-cell/index.vue");
/* harmony import */ var _src_api_user_state__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/src/api/user-state */ "./src/api/user-state.js");


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
    Cell: _components_app_cell__WEBPACK_IMPORTED_MODULE_2__["default"]
  },
  data: function data() {
    return {
      hasProject: false,
      hasContract: false,
      loading: false
    };
  },
  activated: function activated() {
    var _this = this;

    this.hasProject = false;
    this.hasContract = false;
    this.loading = true;
    Object(_src_api_user_state__WEBPACK_IMPORTED_MODULE_3__["getBaseInfo"])().then(function (res) {
      _this.loading = false;
      var functionList = res.function_list;
      functionList.forEach(function (v) {
        if (v.code === 'apply_proj') {
          _this.hasProject = true;
        }

        if (v.code === 'apply_contract') {
          _this.hasContract = true;
        }
      });
    });
  }
});

/***/ }),

/***/ "./node_modules/_cache-loader@4.1.0@cache-loader/dist/cjs.js?{\"cacheDirectory\":\"node_modules/.cache/vue-loader\",\"cacheIdentifier\":\"123502b7-vue-loader-template\"}!./node_modules/_vue-loader@15.9.6@vue-loader/lib/loaders/templateLoader.js?!./node_modules/_cache-loader@4.1.0@cache-loader/dist/cjs.js?!./node_modules/_vue-loader@15.9.6@vue-loader/lib/index.js?!./runtime-src/views/user/permission/permission-apply.vue?vue&type=template&id=7d873c9b&scoped=true&":
/*!**********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/_cache-loader@4.1.0@cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"123502b7-vue-loader-template"}!./node_modules/_vue-loader@15.9.6@vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/_cache-loader@4.1.0@cache-loader/dist/cjs.js??ref--0-0!./node_modules/_vue-loader@15.9.6@vue-loader/lib??vue-loader-options!./runtime-src/views/user/permission/permission-apply.vue?vue&type=template&id=7d873c9b&scoped=true& ***!
  \**********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
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
    {
      staticClass: "permission-wrapper",
      class: { empty: !_vm.hasProject && !_vm.hasContract }
    },
    [
      _c("app-header", { attrs: { title: "权限申请" } }),
      _vm.hasProject || _vm.hasContract
        ? _c(
            "div",
            { staticClass: "action-list" },
            [
              _vm.hasProject
                ? _c("cell", {
                    attrs: { border: _vm.hasContract, title: "项目管理" },
                    on: {
                      click: function($event) {
                        return _vm.$router.push("/user/project-manage")
                      }
                    }
                  })
                : _vm._e(),
              _vm.hasContract
                ? _c("cell", {
                    attrs: { title: "合同管理" },
                    on: {
                      click: function($event) {
                        return _vm.$router.push("/user/contract-manage")
                      }
                    }
                  })
                : _vm._e()
            ],
            1
          )
        : _vm._e(),
      !_vm.loading
        ? _c("empty-page", {
            attrs: {
              emptyMsg: "暂无权限",
              showEmpty: !_vm.hasProject && !_vm.hasContract,
              loadingPage: this.loading
            }
          })
        : _vm._e()
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/_css-loader@3.6.0@css-loader/dist/cjs.js?!./node_modules/_vue-loader@15.9.6@vue-loader/lib/loaders/stylePostLoader.js!./node_modules/_postcss-loader@3.0.0@postcss-loader/src/index.js?!./node_modules/_sass-loader@8.0.2@sass-loader/dist/cjs.js?!./node_modules/_cache-loader@4.1.0@cache-loader/dist/cjs.js?!./node_modules/_vue-loader@15.9.6@vue-loader/lib/index.js?!./runtime-src/views/user/permission/permission-apply.vue?vue&type=style&index=0&id=7d873c9b&lang=scss&scoped=true&":
/*!*********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/_css-loader@3.6.0@css-loader/dist/cjs.js??ref--8-oneOf-1-1!./node_modules/_vue-loader@15.9.6@vue-loader/lib/loaders/stylePostLoader.js!./node_modules/_postcss-loader@3.0.0@postcss-loader/src??ref--8-oneOf-1-2!./node_modules/_sass-loader@8.0.2@sass-loader/dist/cjs.js??ref--8-oneOf-1-3!./node_modules/_cache-loader@4.1.0@cache-loader/dist/cjs.js??ref--0-0!./node_modules/_vue-loader@15.9.6@vue-loader/lib??vue-loader-options!./runtime-src/views/user/permission/permission-apply.vue?vue&type=style&index=0&id=7d873c9b&lang=scss&scoped=true& ***!
  \*********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../../node_modules/_css-loader@3.6.0@css-loader/dist/runtime/api.js */ "./node_modules/_css-loader@3.6.0@css-loader/dist/runtime/api.js");
exports = ___CSS_LOADER_API_IMPORT___(true);
// Module
exports.push([module.i, ".custom-theme .color[data-v-7d873c9b] {\n  color: \"#2c5cf7\";\n}\n.custom-theme .border-color[data-v-7d873c9b] {\n  border-color: \"#2c5cf7\";\n}\n.custom-theme .border-color[data-v-7d873c9b]::after {\n    border-color: \"#2c5cf7\";\n}\n.custom-theme .gradient-background[data-v-7d873c9b] {\n  background: -webkit-gradient(linear, left top, right top, from(#2c5cf7), to(rgba(44, 92, 247, 0.8)));\n  background: linear-gradient(90deg, #2c5cf7 0%, rgba(44, 92, 247, 0.8) 100%);\n}\n.custom-theme .color[data-v-7d873c9b] {\n  color: #2c5cf7;\n}\n.custom-theme .border-color[data-v-7d873c9b] {\n  border-color: #2c5cf7;\n}\n.custom-theme .border-color[data-v-7d873c9b]::after {\n    border-color: #2c5cf7;\n}\n.test-theme .color[data-v-7d873c9b] {\n  color: #f00;\n}\n.test-theme .border-color[data-v-7d873c9b] {\n  border-color: #f00;\n}\n.test-theme .border-color[data-v-7d873c9b]::after {\n    border-color: #f00;\n}\n.action-list[data-v-7d873c9b] {\n  padding-top: 10px;\n}\n.permission-wrapper.empty[data-v-7d873c9b] {\n  height: 100%;\n  background: #fff;\n  overflow: hidden;\n}\n", "",{"version":3,"sources":["/Users/appcloud/appcloud/jenkins/project/pmcSDKsmartengineer/longzh_20210105_113838_8/runtime-src/styles/variable.scss","/Users/appcloud/appcloud/jenkins/project/pmcSDKsmartengineer/longzh_20210105_113838_8/runtime-src/views/user/permission/permission-apply.vue"],"names":[],"mappings":"AAkBE;EACE,gBAWsB;AAAA;AATxB;EACE,uBAQsB;AAAA;AAPtB;IACE,uBAMoB;AAAA;AAD1B;EAGI,oGAIC;EAJD,2EAIC;AAAA;AAlBH;EACE,cAsBoB;AAAA;AApBtB;EACE,qBAmBoB;AAAA;AAlBpB;IACE,qBAiBkB;AAAA;AAvBtB;EACE,WA0BiB;AAAA;AAxBnB;EACE,kBAuBiB;AAAA;AAtBjB;IACE,kBAqBe;AAAA;ACoBrB;EACE,iBAAiB;AAAA;AAEnB;EAEI,YAAY;EACZ,gBAAgB;EAChB,gBAAgB;AAAA","file":"permission-apply.vue","sourcesContent":["// 主题色\n$color-theme: #2c5cf7;\n$color-theme-light: #2c5cf7;\n// border颜色\n$color-border: #ebebeb;\n// CONTENT\n$color-body-bg: rgba(244, 244, 244, 1);\n$color-text: #202020;\n$color-text-light: #606060;\n$color-red: #eb544d;\n$color-blue: #0099ff;\n$color-purple: #a13eff;\n$color-grey: #a0a0a0;\n$color-green: #00cb59;\n$color-icon: #8a8a8a;\n$color-error: #ff3b30;\n\n@mixin theme($color-theme) {\n  .color {\n    color: $color-theme;\n  }\n  .border-color {\n    border-color: $color-theme;\n    &::after {\n      border-color: $color-theme;\n    }\n  }\n}\n\n.custom-theme {\n  @include theme('#2c5cf7');\n  .gradient-background {\n    background: linear-gradient(\n      90deg,\n      rgba($color-theme, 1) 0%,\n      rgba($color-theme, 0.8) 100%\n    );\n  }\n}\n\n.custom-theme {\n  @include theme(#2c5cf7);\n}\n\n.test-theme {\n  @include theme(#f00);\n}\n","@import \"~@src/styles/variable.scss\";\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n.action-list {\n  padding-top: 10px;\n}\n.permission-wrapper {\n  &.empty {\n    height: 100%;\n    background: #fff;\n    overflow: hidden;\n  }\n}\n"]}]);
// Exports
module.exports = exports;


/***/ }),

/***/ "./node_modules/_vue-style-loader@4.1.2@vue-style-loader/index.js?!./node_modules/_css-loader@3.6.0@css-loader/dist/cjs.js?!./node_modules/_vue-loader@15.9.6@vue-loader/lib/loaders/stylePostLoader.js!./node_modules/_postcss-loader@3.0.0@postcss-loader/src/index.js?!./node_modules/_sass-loader@8.0.2@sass-loader/dist/cjs.js?!./node_modules/_cache-loader@4.1.0@cache-loader/dist/cjs.js?!./node_modules/_vue-loader@15.9.6@vue-loader/lib/index.js?!./runtime-src/views/user/permission/permission-apply.vue?vue&type=style&index=0&id=7d873c9b&lang=scss&scoped=true&":
/*!***********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/_vue-style-loader@4.1.2@vue-style-loader??ref--8-oneOf-1-0!./node_modules/_css-loader@3.6.0@css-loader/dist/cjs.js??ref--8-oneOf-1-1!./node_modules/_vue-loader@15.9.6@vue-loader/lib/loaders/stylePostLoader.js!./node_modules/_postcss-loader@3.0.0@postcss-loader/src??ref--8-oneOf-1-2!./node_modules/_sass-loader@8.0.2@sass-loader/dist/cjs.js??ref--8-oneOf-1-3!./node_modules/_cache-loader@4.1.0@cache-loader/dist/cjs.js??ref--0-0!./node_modules/_vue-loader@15.9.6@vue-loader/lib??vue-loader-options!./runtime-src/views/user/permission/permission-apply.vue?vue&type=style&index=0&id=7d873c9b&lang=scss&scoped=true& ***!
  \***********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(/*! !../../../../node_modules/_css-loader@3.6.0@css-loader/dist/cjs.js??ref--8-oneOf-1-1!../../../../node_modules/_vue-loader@15.9.6@vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/_postcss-loader@3.0.0@postcss-loader/src??ref--8-oneOf-1-2!../../../../node_modules/_sass-loader@8.0.2@sass-loader/dist/cjs.js??ref--8-oneOf-1-3!../../../../node_modules/_cache-loader@4.1.0@cache-loader/dist/cjs.js??ref--0-0!../../../../node_modules/_vue-loader@15.9.6@vue-loader/lib??vue-loader-options!./permission-apply.vue?vue&type=style&index=0&id=7d873c9b&lang=scss&scoped=true& */ "./node_modules/_css-loader@3.6.0@css-loader/dist/cjs.js?!./node_modules/_vue-loader@15.9.6@vue-loader/lib/loaders/stylePostLoader.js!./node_modules/_postcss-loader@3.0.0@postcss-loader/src/index.js?!./node_modules/_sass-loader@8.0.2@sass-loader/dist/cjs.js?!./node_modules/_cache-loader@4.1.0@cache-loader/dist/cjs.js?!./node_modules/_vue-loader@15.9.6@vue-loader/lib/index.js?!./runtime-src/views/user/permission/permission-apply.vue?vue&type=style&index=0&id=7d873c9b&lang=scss&scoped=true&");
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var add = __webpack_require__(/*! ../../../../node_modules/_vue-style-loader@4.1.2@vue-style-loader/lib/addStylesClient.js */ "./node_modules/_vue-style-loader@4.1.2@vue-style-loader/lib/addStylesClient.js").default
var update = add("d8771028", content, false, {"sourceMap":true,"shadowMode":false});
// Hot Module Replacement
if(false) {}

/***/ }),

/***/ "./runtime-src/views/user/permission/permission-apply.vue":
/*!****************************************************************!*\
  !*** ./runtime-src/views/user/permission/permission-apply.vue ***!
  \****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _permission_apply_vue_vue_type_template_id_7d873c9b_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./permission-apply.vue?vue&type=template&id=7d873c9b&scoped=true& */ "./runtime-src/views/user/permission/permission-apply.vue?vue&type=template&id=7d873c9b&scoped=true&");
/* harmony import */ var _permission_apply_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./permission-apply.vue?vue&type=script&lang=js& */ "./runtime-src/views/user/permission/permission-apply.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _permission_apply_vue_vue_type_style_index_0_id_7d873c9b_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./permission-apply.vue?vue&type=style&index=0&id=7d873c9b&lang=scss&scoped=true& */ "./runtime-src/views/user/permission/permission-apply.vue?vue&type=style&index=0&id=7d873c9b&lang=scss&scoped=true&");
/* harmony import */ var _node_modules_vue_loader_15_9_6_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../node_modules/_vue-loader@15.9.6@vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/_vue-loader@15.9.6@vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_15_9_6_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _permission_apply_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _permission_apply_vue_vue_type_template_id_7d873c9b_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _permission_apply_vue_vue_type_template_id_7d873c9b_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "7d873c9b",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "runtime-src/views/user/permission/permission-apply.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./runtime-src/views/user/permission/permission-apply.vue?vue&type=script&lang=js&":
/*!*****************************************************************************************!*\
  !*** ./runtime-src/views/user/permission/permission-apply.vue?vue&type=script&lang=js& ***!
  \*****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_cache_loader_4_1_0_cache_loader_dist_cjs_js_ref_12_0_node_modules_babel_loader_8_2_2_babel_loader_lib_index_js_node_modules_cache_loader_4_1_0_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_15_9_6_vue_loader_lib_index_js_vue_loader_options_permission_apply_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/_cache-loader@4.1.0@cache-loader/dist/cjs.js??ref--12-0!../../../../node_modules/_babel-loader@8.2.2@babel-loader/lib!../../../../node_modules/_cache-loader@4.1.0@cache-loader/dist/cjs.js??ref--0-0!../../../../node_modules/_vue-loader@15.9.6@vue-loader/lib??vue-loader-options!./permission-apply.vue?vue&type=script&lang=js& */ "./node_modules/_cache-loader@4.1.0@cache-loader/dist/cjs.js?!./node_modules/_babel-loader@8.2.2@babel-loader/lib/index.js!./node_modules/_cache-loader@4.1.0@cache-loader/dist/cjs.js?!./node_modules/_vue-loader@15.9.6@vue-loader/lib/index.js?!./runtime-src/views/user/permission/permission-apply.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_cache_loader_4_1_0_cache_loader_dist_cjs_js_ref_12_0_node_modules_babel_loader_8_2_2_babel_loader_lib_index_js_node_modules_cache_loader_4_1_0_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_15_9_6_vue_loader_lib_index_js_vue_loader_options_permission_apply_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./runtime-src/views/user/permission/permission-apply.vue?vue&type=style&index=0&id=7d873c9b&lang=scss&scoped=true&":
/*!**************************************************************************************************************************!*\
  !*** ./runtime-src/views/user/permission/permission-apply.vue?vue&type=style&index=0&id=7d873c9b&lang=scss&scoped=true& ***!
  \**************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_4_1_2_vue_style_loader_index_js_ref_8_oneOf_1_0_node_modules_css_loader_3_6_0_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_loader_15_9_6_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_3_0_0_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_8_0_2_sass_loader_dist_cjs_js_ref_8_oneOf_1_3_node_modules_cache_loader_4_1_0_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_15_9_6_vue_loader_lib_index_js_vue_loader_options_permission_apply_vue_vue_type_style_index_0_id_7d873c9b_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/_vue-style-loader@4.1.2@vue-style-loader??ref--8-oneOf-1-0!../../../../node_modules/_css-loader@3.6.0@css-loader/dist/cjs.js??ref--8-oneOf-1-1!../../../../node_modules/_vue-loader@15.9.6@vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/_postcss-loader@3.0.0@postcss-loader/src??ref--8-oneOf-1-2!../../../../node_modules/_sass-loader@8.0.2@sass-loader/dist/cjs.js??ref--8-oneOf-1-3!../../../../node_modules/_cache-loader@4.1.0@cache-loader/dist/cjs.js??ref--0-0!../../../../node_modules/_vue-loader@15.9.6@vue-loader/lib??vue-loader-options!./permission-apply.vue?vue&type=style&index=0&id=7d873c9b&lang=scss&scoped=true& */ "./node_modules/_vue-style-loader@4.1.2@vue-style-loader/index.js?!./node_modules/_css-loader@3.6.0@css-loader/dist/cjs.js?!./node_modules/_vue-loader@15.9.6@vue-loader/lib/loaders/stylePostLoader.js!./node_modules/_postcss-loader@3.0.0@postcss-loader/src/index.js?!./node_modules/_sass-loader@8.0.2@sass-loader/dist/cjs.js?!./node_modules/_cache-loader@4.1.0@cache-loader/dist/cjs.js?!./node_modules/_vue-loader@15.9.6@vue-loader/lib/index.js?!./runtime-src/views/user/permission/permission-apply.vue?vue&type=style&index=0&id=7d873c9b&lang=scss&scoped=true&");
/* harmony import */ var _node_modules_vue_style_loader_4_1_2_vue_style_loader_index_js_ref_8_oneOf_1_0_node_modules_css_loader_3_6_0_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_loader_15_9_6_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_3_0_0_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_8_0_2_sass_loader_dist_cjs_js_ref_8_oneOf_1_3_node_modules_cache_loader_4_1_0_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_15_9_6_vue_loader_lib_index_js_vue_loader_options_permission_apply_vue_vue_type_style_index_0_id_7d873c9b_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_4_1_2_vue_style_loader_index_js_ref_8_oneOf_1_0_node_modules_css_loader_3_6_0_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_loader_15_9_6_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_3_0_0_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_8_0_2_sass_loader_dist_cjs_js_ref_8_oneOf_1_3_node_modules_cache_loader_4_1_0_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_15_9_6_vue_loader_lib_index_js_vue_loader_options_permission_apply_vue_vue_type_style_index_0_id_7d873c9b_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_4_1_2_vue_style_loader_index_js_ref_8_oneOf_1_0_node_modules_css_loader_3_6_0_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_loader_15_9_6_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_3_0_0_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_8_0_2_sass_loader_dist_cjs_js_ref_8_oneOf_1_3_node_modules_cache_loader_4_1_0_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_15_9_6_vue_loader_lib_index_js_vue_loader_options_permission_apply_vue_vue_type_style_index_0_id_7d873c9b_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_4_1_2_vue_style_loader_index_js_ref_8_oneOf_1_0_node_modules_css_loader_3_6_0_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_loader_15_9_6_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_3_0_0_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_8_0_2_sass_loader_dist_cjs_js_ref_8_oneOf_1_3_node_modules_cache_loader_4_1_0_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_15_9_6_vue_loader_lib_index_js_vue_loader_options_permission_apply_vue_vue_type_style_index_0_id_7d873c9b_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ "./runtime-src/views/user/permission/permission-apply.vue?vue&type=template&id=7d873c9b&scoped=true&":
/*!***********************************************************************************************************!*\
  !*** ./runtime-src/views/user/permission/permission-apply.vue?vue&type=template&id=7d873c9b&scoped=true& ***!
  \***********************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_cache_loader_4_1_0_cache_loader_dist_cjs_js_cacheDirectory_node_modules_cache_vue_loader_cacheIdentifier_123502b7_vue_loader_template_node_modules_vue_loader_15_9_6_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_cache_loader_4_1_0_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_15_9_6_vue_loader_lib_index_js_vue_loader_options_permission_apply_vue_vue_type_template_id_7d873c9b_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/_cache-loader@4.1.0@cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"123502b7-vue-loader-template"}!../../../../node_modules/_vue-loader@15.9.6@vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/_cache-loader@4.1.0@cache-loader/dist/cjs.js??ref--0-0!../../../../node_modules/_vue-loader@15.9.6@vue-loader/lib??vue-loader-options!./permission-apply.vue?vue&type=template&id=7d873c9b&scoped=true& */ "./node_modules/_cache-loader@4.1.0@cache-loader/dist/cjs.js?{\"cacheDirectory\":\"node_modules/.cache/vue-loader\",\"cacheIdentifier\":\"123502b7-vue-loader-template\"}!./node_modules/_vue-loader@15.9.6@vue-loader/lib/loaders/templateLoader.js?!./node_modules/_cache-loader@4.1.0@cache-loader/dist/cjs.js?!./node_modules/_vue-loader@15.9.6@vue-loader/lib/index.js?!./runtime-src/views/user/permission/permission-apply.vue?vue&type=template&id=7d873c9b&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_cache_loader_4_1_0_cache_loader_dist_cjs_js_cacheDirectory_node_modules_cache_vue_loader_cacheIdentifier_123502b7_vue_loader_template_node_modules_vue_loader_15_9_6_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_cache_loader_4_1_0_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_15_9_6_vue_loader_lib_index_js_vue_loader_options_permission_apply_vue_vue_type_template_id_7d873c9b_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_cache_loader_4_1_0_cache_loader_dist_cjs_js_cacheDirectory_node_modules_cache_vue_loader_cacheIdentifier_123502b7_vue_loader_template_node_modules_vue_loader_15_9_6_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_cache_loader_4_1_0_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_15_9_6_vue_loader_lib_index_js_vue_loader_options_permission_apply_vue_vue_type_template_id_7d873c9b_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



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
//# sourceMappingURL=19.js.map