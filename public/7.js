(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[7],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/Registration.vue?vue&type=script&lang=js&":
/*!******************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/Registration.vue?vue&type=script&lang=js& ***!
  \******************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var vuelidate_lib_validators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! vuelidate/lib/validators */ "./node_modules/vuelidate/lib/validators/index.js");
/* harmony import */ var vuelidate_lib_validators__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(vuelidate_lib_validators__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var vuex__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! vuex */ "./node_modules/vuex/dist/vuex.esm.js");


function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

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
//
//
//
//
//


/* harmony default export */ __webpack_exports__["default"] = ({
  name: 'Registration',
  data: function data() {
    return {
      form: {
        password: "",
        email: "",
        name: ""
      },
      errors: []
    };
  },
  validations: {
    form: {
      email: {
        required: vuelidate_lib_validators__WEBPACK_IMPORTED_MODULE_1__["required"],
        email: vuelidate_lib_validators__WEBPACK_IMPORTED_MODULE_1__["email"],
        isUnique: function isUnique() {
          var _this = this;

          return _asyncToGenerator(
          /*#__PURE__*/
          _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee() {
            var response;
            return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
              while (1) {
                switch (_context.prev = _context.next) {
                  case 0:
                    if (!_this.$v.form.email.email) {
                      _context.next = 6;
                      break;
                    }

                    _context.next = 3;
                    return axios.get("/api/users?email=".concat(_this.form.email));

                  case 3:
                    response = _context.sent;

                    if (!response.data.length) {
                      _context.next = 6;
                      break;
                    }

                    return _context.abrupt("return", false);

                  case 6:
                    return _context.abrupt("return", true);

                  case 7:
                  case "end":
                    return _context.stop();
                }
              }
            }, _callee);
          }))();
        }
      },
      name: {
        required: vuelidate_lib_validators__WEBPACK_IMPORTED_MODULE_1__["required"]
      },
      password: {
        required: vuelidate_lib_validators__WEBPACK_IMPORTED_MODULE_1__["required"],
        minLength: Object(vuelidate_lib_validators__WEBPACK_IMPORTED_MODULE_1__["minLength"])(6)
      }
    }
  },
  methods: _objectSpread({
    shouldAppendValidClass: function shouldAppendValidClass(field) {
      // ex: field = $v.form.email
      return !field.$invalid && field.$model && field.$dirty;
    },
    shouldAppendErrorClass: function shouldAppendErrorClass(field) {
      // ex: field = $v.form.email
      return field.$error;
    }
  }, Object(vuex__WEBPACK_IMPORTED_MODULE_2__["mapActions"])({
    register: 'auth/register'
  }), {
    handleSubmit: function handleSubmit() {
      var _this2 = this;

      this.$v.form.$touch(); // if its still pending or an error is returned do not submit

      if (this.$v.form.$pending || this.$v.form.$error) return; // to form submit after this

      this.register({
        payload: this.form,
        context: this
      }).then(function () {
        _this2.$router.replace({
          name: 'feeds'
        });
      })["catch"](function (errors) {
        return _this2.errors = errors;
      });
    }
  })
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/Registration.vue?vue&type=template&id=111cccd8&":
/*!**********************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/Registration.vue?vue&type=template&id=111cccd8& ***!
  \**********************************************************************************************************************************************************************************************************/
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
  return _c("section", { staticClass: "signup" }, [
    _c("div", { staticClass: "container" }, [
      _c("div", { staticClass: "signup-content" }, [
        _c("div", { staticClass: "signup-form" }, [
          _c("h2", { staticClass: "form-title" }, [_vm._v("Sign up")]),
          _vm._v(" "),
          _c(
            "form",
            {
              staticClass: "register-form",
              attrs: { id: "register-form" },
              on: {
                submit: function($event) {
                  $event.preventDefault()
                  return _vm.handleSubmit($event)
                }
              }
            },
            [
              _c("div", { staticClass: "form-group" }, [
                _c("input", {
                  directives: [
                    {
                      name: "model",
                      rawName: "v-model",
                      value: _vm.form.name,
                      expression: "form.name"
                    }
                  ],
                  staticClass: "form-control",
                  class: {
                    "is-invalid": _vm.shouldAppendErrorClass(_vm.$v.form.name),
                    "is-valid": _vm.shouldAppendValidClass(_vm.$v.form.name)
                  },
                  attrs: { name: "name", id: "name", placeholder: "Your Name" },
                  domProps: { value: _vm.form.name },
                  on: {
                    blur: function($event) {
                      return _vm.$v.form.name.$touch()
                    },
                    input: function($event) {
                      if ($event.target.composing) {
                        return
                      }
                      _vm.$set(_vm.form, "name", $event.target.value)
                    }
                  }
                }),
                _vm._v(" "),
                !_vm.$v.form.password.required
                  ? _c("div", { staticClass: "invalid-feedback" }, [
                      _vm._v(
                        "\n                            Name is required\n                        "
                      )
                    ])
                  : _vm._e()
              ]),
              _vm._v(" "),
              _c("div", { staticClass: "form-group" }, [
                _c("input", {
                  directives: [
                    {
                      name: "model",
                      rawName: "v-model",
                      value: _vm.form.email,
                      expression: "form.email"
                    }
                  ],
                  staticClass: "form-control",
                  class: {
                    "is-invalid": _vm.shouldAppendErrorClass(_vm.$v.form.email),
                    "is-valid": _vm.shouldAppendValidClass(_vm.$v.form.email)
                  },
                  attrs: {
                    type: "email",
                    name: "email",
                    id: "email",
                    placeholder: "Your Email"
                  },
                  domProps: { value: _vm.form.email },
                  on: {
                    blur: function($event) {
                      return _vm.$v.form.email.$touch()
                    },
                    input: function($event) {
                      if ($event.target.composing) {
                        return
                      }
                      _vm.$set(_vm.form, "email", $event.target.value)
                    }
                  }
                }),
                _vm._v(" "),
                _vm.$v.form.email.$error
                  ? _c("div", { staticClass: "invalid-feedback" }, [
                      !_vm.$v.form.email.required
                        ? _c("span", [_vm._v("Email is required")])
                        : _vm._e(),
                      _vm._v(" "),
                      !_vm.$v.form.email.email
                        ? _c("span", [_vm._v("Email is invalid")])
                        : _vm._e(),
                      _vm._v(" "),
                      !_vm.$v.form.email.isUnique
                        ? _c("span", [_vm._v("Email has already been taken")])
                        : _vm._e()
                    ])
                  : _vm._e()
              ]),
              _vm._v(" "),
              _c("div", { staticClass: "form-group" }, [
                _c("input", {
                  directives: [
                    {
                      name: "model",
                      rawName: "v-model",
                      value: _vm.form.password,
                      expression: "form.password"
                    }
                  ],
                  staticClass: "form-control",
                  class: {
                    "is-invalid": _vm.shouldAppendErrorClass(
                      _vm.$v.form.password
                    ),
                    "is-valid": _vm.shouldAppendValidClass(_vm.$v.form.password)
                  },
                  attrs: {
                    name: "pass",
                    id: "pass",
                    type: "password",
                    placeholder: "Your Password"
                  },
                  domProps: { value: _vm.form.password },
                  on: {
                    blur: function($event) {
                      return _vm.$v.form.password.$touch()
                    },
                    input: function($event) {
                      if ($event.target.composing) {
                        return
                      }
                      _vm.$set(_vm.form, "password", $event.target.value)
                    }
                  }
                }),
                _vm._v(" "),
                _vm.$v.form.password.$error
                  ? _c("div", { staticClass: "invalid-feedback" }, [
                      !_vm.$v.form.password.required
                        ? _c("span", [_vm._v("Password is required")])
                        : _vm._e(),
                      _vm._v(" "),
                      !_vm.$v.form.password.minLength
                        ? _c("span", [
                            _vm._v("Password must be at least 6 characters")
                          ])
                        : _vm._e()
                    ])
                  : _vm._e()
              ]),
              _vm._v(" "),
              _vm.errors.root
                ? _c("div", { staticClass: "text-danger" }, [
                    _vm._v(
                      "\n                        " +
                        _vm._s(_vm.errors.root) +
                        "\n                    "
                    )
                  ])
                : _vm._e(),
              _vm._v(" "),
              _vm._m(0)
            ]
          )
        ]),
        _vm._v(" "),
        _c(
          "div",
          { staticClass: "signup-image" },
          [
            _vm._m(1),
            _vm._v(" "),
            _c(
              "router-link",
              {
                staticClass: "signup-image-link",
                attrs: { to: { name: "login" } }
              },
              [_vm._v("I am already member")]
            )
          ],
          1
        )
      ])
    ])
  ])
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "form-group form-button" }, [
      _c("input", {
        staticClass: "form-submit",
        attrs: {
          type: "submit",
          name: "signup",
          id: "signup",
          value: "Register"
        }
      })
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("figure", [
      _c("img", {
        attrs: { src: "images/signup-image.jpg", alt: "sing up image" }
      })
    ])
  }
]
render._withStripped = true



/***/ }),

/***/ "./resources/js/views/Registration.vue":
/*!*********************************************!*\
  !*** ./resources/js/views/Registration.vue ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Registration_vue_vue_type_template_id_111cccd8___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Registration.vue?vue&type=template&id=111cccd8& */ "./resources/js/views/Registration.vue?vue&type=template&id=111cccd8&");
/* harmony import */ var _Registration_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Registration.vue?vue&type=script&lang=js& */ "./resources/js/views/Registration.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Registration_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Registration_vue_vue_type_template_id_111cccd8___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Registration_vue_vue_type_template_id_111cccd8___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/views/Registration.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/views/Registration.vue?vue&type=script&lang=js&":
/*!**********************************************************************!*\
  !*** ./resources/js/views/Registration.vue?vue&type=script&lang=js& ***!
  \**********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Registration_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib??ref--4-0!../../../node_modules/vue-loader/lib??vue-loader-options!./Registration.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/Registration.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Registration_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/views/Registration.vue?vue&type=template&id=111cccd8&":
/*!****************************************************************************!*\
  !*** ./resources/js/views/Registration.vue?vue&type=template&id=111cccd8& ***!
  \****************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Registration_vue_vue_type_template_id_111cccd8___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib??vue-loader-options!./Registration.vue?vue&type=template&id=111cccd8& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/Registration.vue?vue&type=template&id=111cccd8&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Registration_vue_vue_type_template_id_111cccd8___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Registration_vue_vue_type_template_id_111cccd8___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);