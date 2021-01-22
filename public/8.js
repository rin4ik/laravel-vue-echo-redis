(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[8],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/Feeds/index.vue?vue&type=script&lang=js&":
/*!*****************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/Feeds/index.vue?vue&type=script&lang=js& ***!
  \*****************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);


function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

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
  data: function data() {
    return {
      feeds: [],
      frequentWords: []
    };
  },
  methods: {
    fetchFeeds: function fetchFeeds() {
      var _this = this;

      return _asyncToGenerator(
      /*#__PURE__*/
      _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee() {
        var response;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.next = 2;
                return axios.get('api/feeds');

              case 2:
                response = _context.sent;
                _this.feeds = response.data.feeds;
                _this.frequentWords = response.data.frequent;

              case 5:
              case "end":
                return _context.stop();
            }
          }
        }, _callee);
      }))();
    }
  },
  created: function created() {
    this.fetchFeeds();
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/Feeds/index.vue?vue&type=template&id=2e4eac89&":
/*!*********************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/Feeds/index.vue?vue&type=template&id=2e4eac89& ***!
  \*********************************************************************************************************************************************************************************************************/
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
  return _c("div", { staticClass: "container" }, [
    _c("h1", { staticClass: "my-4 text-center" }, [
      _vm._v("\n        RSS FEEDS\n    ")
    ]),
    _vm._v(" "),
    _c(
      "button",
      {
        staticClass: "btn btn-sm btn-primary float-right",
        on: { click: _vm.fetchFeeds }
      },
      [_vm._v("FETCH")]
    ),
    _vm._v(" "),
    _c("div", { staticClass: "row" }, [
      _c("div", { staticClass: "col-lg-3" }, [
        _c("div", { staticClass: "card my-5" }, [
          _c("h5", { staticClass: "card-header" }, [
            _vm._v("Frequent Words (10)")
          ]),
          _vm._v(" "),
          _c("div", { staticClass: "card-body" }, [
            _c(
              "ul",
              { staticClass: "list-group list-group-flush" },
              _vm._l(_vm.frequentWords, function(value, key) {
                return _c("li", { staticClass: "list-group-item" }, [
                  _c("strong", [_vm._v(_vm._s(key))]),
                  _vm._v(" : "),
                  _c("span", { staticStyle: { float: "right" } }, [
                    _vm._v(_vm._s(value))
                  ])
                ])
              }),
              0
            )
          ])
        ])
      ]),
      _vm._v(" "),
      _c("div", { staticClass: "col-lg-9 mt-5" }, [
        _c(
          "div",
          { staticClass: "row" },
          _vm._l(_vm.feeds, function(feed) {
            return _c("div", { staticClass: "col-lg-4  mb-4" }, [
              _c("div", { staticClass: "card h-100" }, [
                _c("a", { attrs: { href: feed.url } }, [
                  _c("img", {
                    staticClass: "card-img-top",
                    attrs: { src: "https://loremflickr.com/700/400", alt: "" }
                  })
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "card-body" }, [
                  _c("h5", { staticClass: "card-title" }, [
                    _c("a", { attrs: { href: feed.url } }, [
                      _vm._v(_vm._s(feed.title))
                    ])
                  ]),
                  _vm._v(" "),
                  _c("span", { staticClass: "text-sm-left mt-2" }, [
                    _c("b", [_vm._v("Author :")]),
                    _vm._v(" "),
                    _c(
                      "a",
                      {
                        staticClass: "font-italic",
                        attrs: { href: feed.author.link, target: "_blank" }
                      },
                      [_vm._v(_vm._s(feed.author.name))]
                    )
                  ]),
                  _vm._v(" "),
                  _c("span", { staticClass: "text-sm-left text-muted" }, [
                    _c("b", [_vm._v("Published At :")]),
                    _vm._v(
                      "\n                                " +
                        _vm._s(feed.date) +
                        "\n                            "
                    )
                  ]),
                  _vm._v(" "),
                  _c("p", { staticClass: "card-text mt-2" }, [
                    _vm._v(_vm._s(feed.text))
                  ])
                ])
              ])
            ])
          }),
          0
        )
      ])
    ])
  ])
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./resources/js/views/Feeds/index.vue":
/*!********************************************!*\
  !*** ./resources/js/views/Feeds/index.vue ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _index_vue_vue_type_template_id_2e4eac89___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index.vue?vue&type=template&id=2e4eac89& */ "./resources/js/views/Feeds/index.vue?vue&type=template&id=2e4eac89&");
/* harmony import */ var _index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./index.vue?vue&type=script&lang=js& */ "./resources/js/views/Feeds/index.vue?vue&type=script&lang=js&");
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__[key]; }) }(__WEBPACK_IMPORT_KEY__));
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _index_vue_vue_type_template_id_2e4eac89___WEBPACK_IMPORTED_MODULE_0__["render"],
  _index_vue_vue_type_template_id_2e4eac89___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/views/Feeds/index.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/views/Feeds/index.vue?vue&type=script&lang=js&":
/*!*********************************************************************!*\
  !*** ./resources/js/views/Feeds/index.vue?vue&type=script&lang=js& ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./index.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/Feeds/index.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/views/Feeds/index.vue?vue&type=template&id=2e4eac89&":
/*!***************************************************************************!*\
  !*** ./resources/js/views/Feeds/index.vue?vue&type=template&id=2e4eac89& ***!
  \***************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_template_id_2e4eac89___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./index.vue?vue&type=template&id=2e4eac89& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/Feeds/index.vue?vue&type=template&id=2e4eac89&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_template_id_2e4eac89___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_template_id_2e4eac89___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);