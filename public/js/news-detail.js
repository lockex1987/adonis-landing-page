/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/@babel/runtime/regenerator/index.js":
/*!**********************************************************!*\
  !*** ./node_modules/@babel/runtime/regenerator/index.js ***!
  \**********************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__(/*! regenerator-runtime */ "./node_modules/regenerator-runtime/runtime.js");


/***/ }),

/***/ "./frontend/js/helpers/cookie.js":
/*!***************************************!*\
  !*** ./frontend/js/helpers/cookie.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "setCookie": () => (/* binding */ setCookie),
/* harmony export */   "getCookie": () => (/* binding */ getCookie),
/* harmony export */   "deleteCookie": () => (/* binding */ deleteCookie)
/* harmony export */ });
/**
 * Thiết lập cookie.
 * @param {string} cname Tên cookie
 * @param {string} cvalue Giá trị của cookie
 * @param {int} expiredTime Thời điểm hết hạn của token (đơn vị millisecond)
 * @param {string} domain Domain của cookie (thiết lập domain là domain chính để share cookie giữa các sub-domain)
 */
var setCookie = function setCookie(cname, cvalue, expiredTime, domain, secure) {
  var date = new Date();
  date.setTime(expiredTime);
  document.cookie = cname + '=' + encodeURIComponent(cvalue) + ';expires=' + date.toUTCString() + ';path=/' + (domain ? ';domain=' + domain : '') + (secure ? ';secure' : '');
};
/**
 * Lấy giá trị cookie.
 * @param {string} cname Tên cookie
 * @returns {string} Giá trị của cookie
 */

var getCookie = function getCookie(cname) {
  var name = cname + '=';
  var decodedCookie = decodeURIComponent(document.cookie);
  var ca = decodedCookie.split(';');

  for (var i = 0; i < ca.length; i++) {
    var c = ca[i].trim();

    if (c.indexOf(name) == 0) {
      return c.substring(name.length, c.length);
    }
  }

  return '';
};
/**
 * Xóa cookie.
 * @param {string} cname Tên cookie
 * @param {string} domain Domain của cookie (thiết lập domain là domain chính để share cookie giữa các sub-domain)
 */

var deleteCookie = function deleteCookie(cname, domain) {
  // Thiết lập giá trị rỗng
  // với thời hạn là một ngày trong quá khứ
  document.cookie = cname + '=' + ';expires=Thu, 01 Jan 1970 00:00:00 UTC' + ';path=/' + (domain ? ';domain=' + domain : '');
};

/***/ }),

/***/ "./frontend/js/helpers/sso.js":
/*!************************************!*\
  !*** ./frontend/js/helpers/sso.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "getToken": () => (/* binding */ getToken),
/* harmony export */   "setToken": () => (/* binding */ setToken),
/* harmony export */   "deleteToken": () => (/* binding */ deleteToken)
/* harmony export */ });
/* harmony import */ var _cookie_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./cookie.js */ "./frontend/js/helpers/cookie.js");
 // Tên cookie

var AUTH_COOKIE_NAME = 'authToken';
var AUTH_EXPIRED_NAME = 'authExpired';
/**
 * Lấy root domain.
 * Ví dụ main.platform.vn, ai.platform.vn, darkweb.platform.vn sẽ có cùng root domain là .platform.vn.
 */

function getRootDomain() {
  // Nếu host có chứa ký tự (không phải tất cả là số)
  // thì là domain, không phải IP
  // Logic thế cho đơn giản
  var host = location.host;
  var hasAlphabet = /[a-z]/i.test(host);

  if (!hasAlphabet) {
    // Theo IP
    return location.host;
  } // Theo domain


  var temp = host.split('.').reverse();

  if (temp.length > 2) {
    return '.' + temp[1] + '.' + temp[0];
  }

  return '.' + temp[0];
}
/**
 * Lấy giá trị token.
 */


var getToken = function getToken() {
  return (0,_cookie_js__WEBPACK_IMPORTED_MODULE_0__.getCookie)(AUTH_COOKIE_NAME);
};
/**
 * Lưu token.
 * @param {string} token Giá trị token
 * @param {int} expiredTime Thời điểm hết hạn của token (đơn vị millisecond)
 */

var setToken = function setToken(token, expiredTime) {
  var rootDomain = getRootDomain();
  (0,_cookie_js__WEBPACK_IMPORTED_MODULE_0__.setCookie)(AUTH_COOKIE_NAME, token, expiredTime, rootDomain);
  (0,_cookie_js__WEBPACK_IMPORTED_MODULE_0__.setCookie)(AUTH_EXPIRED_NAME, expiredTime, expiredTime, rootDomain);
};
/**
 * Xóa token.
 */

var deleteToken = function deleteToken() {
  var rootDomain = getRootDomain();
  (0,_cookie_js__WEBPACK_IMPORTED_MODULE_0__.deleteCookie)(AUTH_COOKIE_NAME, rootDomain);
  (0,_cookie_js__WEBPACK_IMPORTED_MODULE_0__.deleteCookie)(AUTH_EXPIRED_NAME, rootDomain);
};

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./frontend/js/components/HtmlEditor.vue?vue&type=script&lang=js":
/*!***************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./frontend/js/components/HtmlEditor.vue?vue&type=script&lang=js ***!
  \***************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  props: {
    placeholder: {
      type: String,
      "default": 'Nhập nội dung'
    }
  },
  mounted: function mounted() {
    this.initEditor();
  },
  methods: {
    setCode: function setCode(code) {
      $(this.$el).summernote('code', code);
    },
    getCode: function getCode() {
      return $(this.$el).summernote('code');
    },
    focus: function focus() {
      $(this.$el).summernote('focus');
    },

    /**
     * Khởi tạo HTML editor.
     */
    initEditor: function initEditor() {
      var vm = this;
      $(this.$el).summernote({
        // Nếu editor ở trên Bootstrap modal thì phải thêm tùy chọn này
        dialogsInBody: true,
        dialogsFade: true,
        // Không kéo thả ảnh
        disableDragAndDrop: true,
        minHeight: 200,
        maxHeight: null,
        // tự động điều chỉnh độ dài theo nội dung
        placeholder: this.placeholder,
        lang: 'vi-VN',
        // tiếng Việt
        // Không check chính tả
        spellCheck: false,
        toolbar: [// ['style', ['style']],
        ['font', ['bold', 'italic', 'underline']], // , 'clear'
        // ['color', ['color']],
        // ['para', ['ul', 'ol', 'paragraph']],
        // ['table', ['table']],
        // ['insert', ['link', 'picture']],
        ['insert', ['link']] // ['view', ['fullscreen', 'codeview']]
        ],
        callbacks: {
          /**
           * Paste text bình thường (không ảnh, không định dạng).
           */
          onPaste: function onPaste(evt) {
            evt.preventDefault();
            var bufferText = ((evt.originalEvent || evt).clipboardData || window.clipboardData).getData('text');
            document.execCommand('insertText', false, bufferText); // $(vm.$el).summernote('insertText', bufferText);
          }
        }
      });
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./frontend/js/components/NewsComment.vue?vue&type=script&lang=js":
/*!****************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./frontend/js/components/NewsComment.vue?vue&type=script&lang=js ***!
  \****************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_HtmlEditor_vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ~/components/HtmlEditor.vue */ "./frontend/js/components/HtmlEditor.vue");
/* harmony import */ var _helpers_sso_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ~/helpers/sso.js */ "./frontend/js/helpers/sso.js");
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }



function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  components: {
    HtmlEditor: _components_HtmlEditor_vue__WEBPACK_IMPORTED_MODULE_1__["default"]
  },
  props: {
    // ID tin tức
    newsId: Number
  },
  data: function data() {
    return {
      // Danh sách bình luận
      commentList: null,
      // Đang thêm mới bình luận
      isSaving: false,
      // Kiểm tra trạng thái đăng nhập (0: chưa kiểm tra, 1: đã đăng nhập, 2: chưa đăng nhập)
      checkLoginStatus: 0,
      // Tên và ảnh đại diện của người dùng đang đăng nhập
      userFullName: '',
      avatar: '',
      // Link đăng nhập
      loginLink: SSO_PASSPORT_URL + '/login?app=' + SSO_CONSUMER_DOMAIN + '&returnLink=' + encodeURIComponent(window.location.href)
    };
  },
  mounted: function mounted() {
    // Nếu chưa load xong Bootstrap thì ra undefined
    // console.log($(document).tooltip);
    this.getCommentList(); // TODO: Đã có trường isLogin rồi

    this.checkLogin();
  },
  methods: {
    /**
     * Kiểm tra người dùng đã đăng nhập hay chưa.
     */
    checkLogin: function checkLogin() {
      var _this = this;

      return _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee() {
        var token, userFullName, avatar, _yield$axios$get, data, user;

        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                token = (0,_helpers_sso_js__WEBPACK_IMPORTED_MODULE_2__.getToken)();
                userFullName = '';
                avatar = '';

                if (!token) {
                  _context.next = 9;
                  break;
                }

                _context.next = 6;
                return axios.get('/me');

              case 6:
                _yield$axios$get = _context.sent;
                data = _yield$axios$get.data;

                // có thể gọi GET /me ở sso-passport
                if (data.code == 0) {
                  user = data.user;
                  userFullName = user.full_name;
                  avatar = user.avatar;
                } else {// Xóa token đã hết hạn
                  // deleteToken();
                }

              case 9:
                _this.userFullName = userFullName;
                _this.avatar = avatar;
                _this.checkLoginStatus = userFullName ? 1 : 2;

              case 12:
              case "end":
                return _context.stop();
            }
          }
        }, _callee);
      }))();
    },

    /**
     * Hủy form thêm bình luận.
     */
    cancelCommentForm: function cancelCommentForm() {
      this.$refs.commentEditor.setCode('<p><br></p>');
      CV.clearErrorMessages(this.$el);
    },

    /**
     * Lấy danh sách comment.
     */
    getCommentList: function getCommentList() {
      var _this2 = this;

      return _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee2() {
        var params, _yield$axios$get2, data, list, level1List;

        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                params = {
                  newsId: _this2.newsId
                };
                _context2.next = 3;
                return axios.get('/api/news/comment', {
                  params: params
                });

              case 3:
                _yield$axios$get2 = _context2.sent;
                data = _yield$axios$get2.data;
                list = data !== null && data !== void 0 ? data : []; // Sắp xếp danh sách bình luận cấp 1 theo thời gian giảm dần (mới nhất ở đầu)
                // Sắp xếp danh sách bình luận cấp 2 theo thời gian tăng dần (để nắm được luồng thảo luận)

                level1List = list.filter(function (level1) {
                  return !level1.parent_id;
                }).map(function (level1) {
                  var level2List = list.filter(function (level2) {
                    return level2.parent_id == level1.id;
                  }).reverse();
                  return _objectSpread(_objectSpread({}, level1), {}, {
                    showReply: false,
                    replies: level2List
                  });
                });
                _this2.commentList = level1List;

              case 8:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2);
      }))();
    },

    /**
     * Thêm comment.
     */
    addComment: function addComment() {
      var _this3 = this;

      return _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee3() {
        var contentHtml, contentText, params, _yield$axios$post, data;

        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                if (!_this3.isSaving) {
                  _context3.next = 2;
                  break;
                }

                return _context3.abrupt("return");

              case 2:
                contentHtml = _this3.$refs.commentEditor.getCode().trim();
                contentText = $('<div>' + contentHtml + '</div>')[0].textContent.trim();

                if (contentText) {
                  _context3.next = 7;
                  break;
                }

                noti.error('Vui lòng nhập nội dung bình luận');
                return _context3.abrupt("return");

              case 7:
                if (!(contentHtml.length > 2000)) {
                  _context3.next = 10;
                  break;
                }

                noti.error('Nội dung bình luận quá dài');
                return _context3.abrupt("return");

              case 10:
                _this3.isSaving = true;
                params = {
                  newsId: _this3.newsId,
                  content: contentHtml,
                  parentId: null
                };
                _context3.next = 14;
                return axios.post('/api/news/comment', params);

              case 14:
                _yield$axios$post = _context3.sent;
                data = _yield$axios$post.data;
                _this3.isSaving = false;

                if (data.code == 0) {
                  noti.success('Thêm bình luận thành công');

                  _this3.cancelCommentForm();

                  _this3.getCommentList();
                } else if (data.code == 1) {
                  noti.error(data.message);
                }

              case 18:
              case "end":
                return _context3.stop();
            }
          }
        }, _callee3);
      }))();
    },

    /**
     * Trả lời.
     */
    addReply: function addReply(comment) {
      var _this4 = this;

      return _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee4() {
        var contentHtml, contentText, params, _yield$axios$post2, data;

        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee4$(_context4) {
          while (1) {
            switch (_context4.prev = _context4.next) {
              case 0:
                contentHtml = _this4.$refs['replyEditor' + comment.id].getCode().trim();
                contentText = $('<div>' + contentHtml + '</div>')[0].textContent.trim();

                if (contentText) {
                  _context4.next = 5;
                  break;
                }

                noti.error('Vui lòng nhập nội dung trả lời');
                return _context4.abrupt("return");

              case 5:
                if (!(contentHtml.length > 2000)) {
                  _context4.next = 8;
                  break;
                }

                noti.error('Nội dung trả lời quá dài');
                return _context4.abrupt("return");

              case 8:
                params = {
                  newsId: _this4.newsId,
                  content: contentHtml,
                  parentId: comment.id
                };
                _context4.next = 11;
                return axios.post('/api/news/comment', params);

              case 11:
                _yield$axios$post2 = _context4.sent;
                data = _yield$axios$post2.data;

                if (data.code == 0) {
                  _this4.cancelReplyForm(comment);

                  _this4.getCommentList();
                }

              case 14:
              case "end":
                return _context4.stop();
            }
          }
        }, _callee4);
      }))();
    },

    /**
     * Hiển thị trả lời.
     */
    openReplyForm: function openReplyForm(comment) {
      var _this5 = this;

      comment.showReply = true;
      this.$nextTick(function () {
        _this5.$refs['replyEditor' + comment.id].focus();
      });
    },

    /**
     * Hủy bỏ trả lời.
     */
    cancelReplyForm: function cancelReplyForm(comment) {
      comment.showReply = false;
      this.$refs['replyEditor' + comment.id].setCode('<p><br></p>');
    },

    /**
     * Thời gian tương đối.
     */
    relativeTime: function relativeTime(datetime) {
      var relativeTime = moment(datetime);
      var now = moment();

      if (now.diff(relativeTime, 'days', true) >= 1) {
        return relativeTime.format('DD/MM/YYYY') + ' lúc ' + relativeTime.format('HH:mm');
      } else {
        return relativeTime.fromNow();
      }
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./frontend/js/components/HtmlEditor.vue?vue&type=template&id=f54981ac":
/*!*******************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./frontend/js/components/HtmlEditor.vue?vue&type=template&id=f54981ac ***!
  \*******************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render)
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "vue");
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(vue__WEBPACK_IMPORTED_MODULE_0__);

function render(_ctx, _cache, $props, $setup, $data, $options) {
  return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("textarea");
}

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./frontend/js/components/NewsComment.vue?vue&type=template&id=475c184a":
/*!********************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./frontend/js/components/NewsComment.vue?vue&type=template&id=475c184a ***!
  \********************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render)
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "vue");
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(vue__WEBPACK_IMPORTED_MODULE_0__);

var _hoisted_1 = {
  "class": "comments"
};

var _hoisted_2 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  "class": "mb-3 font-weight-500 text-muted"
}, " Bình luận ", -1
/* HOISTED */
);

var _hoisted_3 = ["href"];

var _hoisted_4 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  "class": "rounded bg-light p-2 d-flex align-items-center justify-content-center",
  style: {
    "height": "100px"
  }
}, " Đăng nhập để thêm bình luận ", -1
/* HOISTED */
);

var _hoisted_5 = [_hoisted_4];
var _hoisted_6 = {
  "class": "mb-3 d-flex align-items-center"
};
var _hoisted_7 = ["src"];
var _hoisted_8 = {
  "class": "font-weight-500"
};
var _hoisted_9 = {
  "class": "mb-3"
};

var _hoisted_10 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)(" Thêm bình luận ");

var _hoisted_11 = {
  "class": "la la-spinner la-spin"
};
var _hoisted_12 = {
  "class": "mb-3 d-flex align-items-center"
};
var _hoisted_13 = ["src"];
var _hoisted_14 = {
  "class": "font-weight-500"
};

var _hoisted_15 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("i", {
  "class": "fa fa-circle ms-3",
  style: {
    "font-size": "0.25rem",
    "color": "#bdbdbd"
  }
}, null, -1
/* HOISTED */
);

var _hoisted_16 = {
  "class": "text-muted font-italic font-size-0.875 ms-3"
};
var _hoisted_17 = ["innerHTML"];
var _hoisted_18 = {
  "class": "mt-3"
};
var _hoisted_19 = ["onClick"];

var _hoisted_20 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("i", {
  "class": "la la-reply"
}, null, -1
/* HOISTED */
);

var _hoisted_21 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)(" Trả lời ");

var _hoisted_22 = [_hoisted_20, _hoisted_21];
var _hoisted_23 = {
  "class": "border-start ps-5"
};
var _hoisted_24 = {
  "class": "mt-5"
};
var _hoisted_25 = {
  "class": "mb-3 d-flex align-items-center"
};
var _hoisted_26 = ["src"];
var _hoisted_27 = {
  "class": "font-weight-500"
};
var _hoisted_28 = {
  "class": "mb-3"
};
var _hoisted_29 = ["onClick"];

var _hoisted_30 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("i", {
  "class": "la la-reply"
}, null, -1
/* HOISTED */
);

var _hoisted_31 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)(" Trả lời ");

var _hoisted_32 = [_hoisted_30, _hoisted_31];
var _hoisted_33 = ["onClick"];
var _hoisted_34 = {
  "class": "mb-3 d-flex align-items-center"
};
var _hoisted_35 = ["src"];
var _hoisted_36 = {
  "class": "font-weight-500"
};

var _hoisted_37 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("i", {
  "class": "fa fa-circle ms-3",
  style: {
    "font-size": "0.25rem",
    "color": "#bdbdbd"
  }
}, null, -1
/* HOISTED */
);

var _hoisted_38 = {
  "class": "text-muted font-italic font-size-0.875 ms-3"
};
var _hoisted_39 = ["innerHTML"];
function render(_ctx, _cache, $props, $setup, $data, $options) {
  var _component_html_editor = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("html-editor");

  return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", _hoisted_1, [_hoisted_2, (0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", null, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("a", {
    href: $data.loginLink
  }, _hoisted_5, 8
  /* PROPS */
  , _hoisted_3)], 512
  /* NEED_PATCH */
  ), [[vue__WEBPACK_IMPORTED_MODULE_0__.vShow, $data.checkLoginStatus == 2]]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" Nếu dùng v-show thì bị lỗi \"t.attr(...).tooltip is not a function\", phải sử dụng v-if "), (0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", null, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_6, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("img", {
    src: $data.avatar,
    "class": "avatar me-2 rounded-circle",
    onerror: "this.src = '/images/user-avatar.png'"
  }, null, 8
  /* PROPS */
  , _hoisted_7), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", _hoisted_8, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($data.userFullName), 1
  /* TEXT */
  )]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_9, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_html_editor, {
    ref: "commentEditor",
    placeholder: "Nội dung bình luận"
  }, null, 512
  /* NEED_PATCH */
  )]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", null, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("button", {
    type: "button",
    "class": "btn btn-primary btn-sm",
    onClick: _cache[0] || (_cache[0] = function ($event) {
      return $options.addComment();
    })
  }, [_hoisted_10, (0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", _hoisted_11, null, 512
  /* NEED_PATCH */
  ), [[vue__WEBPACK_IMPORTED_MODULE_0__.vShow, $data.isSaving]])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("button", {
    type: "button",
    "class": "btn btn-outline-secondary btn-sm ms-3",
    onClick: _cache[1] || (_cache[1] = function ($event) {
      return $options.cancelCommentForm();
    })
  }, " Hủy bỏ ")])], 512
  /* NEED_PATCH */
  ), [[vue__WEBPACK_IMPORTED_MODULE_0__.vShow, $data.checkLoginStatus == 1]]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" Danh sách comment (cấp 1) "), ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(true), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)(vue__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.renderList)($data.commentList, function (comment) {
    return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", {
      key: comment.id,
      "class": "mt-5"
    }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" Tên, thời gian, nội dung "), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_12, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("img", {
      src: comment.user.avatar,
      "class": "avatar me-2 rounded-circle",
      onerror: "this.src = '/images/user-avatar.png'"
    }, null, 8
    /* PROPS */
    , _hoisted_13), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", _hoisted_14, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(comment.user.full_name), 1
    /* TEXT */
    ), _hoisted_15, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", _hoisted_16, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($options.relativeTime(comment.created_at)), 1
    /* TEXT */
    )]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
      innerHTML: comment.content
    }, null, 8
    /* PROPS */
    , _hoisted_17), (0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_18, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("a", {
      href: "#",
      "class": "text-decoration-none",
      onClick: (0,vue__WEBPACK_IMPORTED_MODULE_0__.withModifiers)(function ($event) {
        return $options.openReplyForm(comment);
      }, ["prevent"])
    }, _hoisted_22, 8
    /* PROPS */
    , _hoisted_19)], 512
    /* NEED_PATCH */
    ), [[vue__WEBPACK_IMPORTED_MODULE_0__.vShow, $data.checkLoginStatus == 1 && !comment.showReply]]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_23, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_24, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_25, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("img", {
      src: $data.avatar,
      "class": "avatar me-2 rounded-circle",
      onerror: "this.src = '/images/user-avatar.png'"
    }, null, 8
    /* PROPS */
    , _hoisted_26), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", _hoisted_27, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($data.userFullName), 1
    /* TEXT */
    )]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_28, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_html_editor, {
      ref: 'replyEditor' + comment.id,
      placeholder: "Nội dung trả lời"
    }, null, 512
    /* NEED_PATCH */
    )]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", null, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("button", {
      type: "button",
      "class": "btn btn-primary btn-sm",
      onClick: function onClick($event) {
        return $options.addReply(comment);
      }
    }, _hoisted_32, 8
    /* PROPS */
    , _hoisted_29), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("button", {
      type: "button",
      "class": "btn btn-outline-secondary btn-sm ms-3",
      onClick: function onClick($event) {
        return $options.cancelReplyForm(comment);
      }
    }, " Hủy bỏ ", 8
    /* PROPS */
    , _hoisted_33)])], 512
    /* NEED_PATCH */
    ), [[vue__WEBPACK_IMPORTED_MODULE_0__.vShow, comment.showReply]]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" Danh sách trả lời (cấp 2) "), ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(true), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)(vue__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.renderList)(comment.replies, function (reply) {
      return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", {
        key: reply.id,
        "class": "mt-5"
      }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" Tên, thời gian, nội dung "), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" Tương tự phần cấp 1 "), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_34, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("img", {
        src: reply.user.avatar,
        "class": "avatar me-2 rounded-circle",
        onerror: "this.src = '/images/user-avatar.png'"
      }, null, 8
      /* PROPS */
      , _hoisted_35), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", _hoisted_36, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(reply.user.full_name), 1
      /* TEXT */
      ), _hoisted_37, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", _hoisted_38, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($options.relativeTime(reply.created_at)), 1
      /* TEXT */
      )]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
        innerHTML: reply.content
      }, null, 8
      /* PROPS */
      , _hoisted_39)]);
    }), 128
    /* KEYED_FRAGMENT */
    ))])]);
  }), 128
  /* KEYED_FRAGMENT */
  ))]);
}

/***/ }),

/***/ "./node_modules/regenerator-runtime/runtime.js":
/*!*****************************************************!*\
  !*** ./node_modules/regenerator-runtime/runtime.js ***!
  \*****************************************************/
/***/ ((module) => {

/**
 * Copyright (c) 2014-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

var runtime = (function (exports) {
  "use strict";

  var Op = Object.prototype;
  var hasOwn = Op.hasOwnProperty;
  var undefined; // More compressible than void 0.
  var $Symbol = typeof Symbol === "function" ? Symbol : {};
  var iteratorSymbol = $Symbol.iterator || "@@iterator";
  var asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator";
  var toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag";

  function define(obj, key, value) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
    return obj[key];
  }
  try {
    // IE 8 has a broken Object.defineProperty that only works on DOM objects.
    define({}, "");
  } catch (err) {
    define = function(obj, key, value) {
      return obj[key] = value;
    };
  }

  function wrap(innerFn, outerFn, self, tryLocsList) {
    // If outerFn provided and outerFn.prototype is a Generator, then outerFn.prototype instanceof Generator.
    var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator;
    var generator = Object.create(protoGenerator.prototype);
    var context = new Context(tryLocsList || []);

    // The ._invoke method unifies the implementations of the .next,
    // .throw, and .return methods.
    generator._invoke = makeInvokeMethod(innerFn, self, context);

    return generator;
  }
  exports.wrap = wrap;

  // Try/catch helper to minimize deoptimizations. Returns a completion
  // record like context.tryEntries[i].completion. This interface could
  // have been (and was previously) designed to take a closure to be
  // invoked without arguments, but in all the cases we care about we
  // already have an existing method we want to call, so there's no need
  // to create a new function object. We can even get away with assuming
  // the method takes exactly one argument, since that happens to be true
  // in every case, so we don't have to touch the arguments object. The
  // only additional allocation required is the completion record, which
  // has a stable shape and so hopefully should be cheap to allocate.
  function tryCatch(fn, obj, arg) {
    try {
      return { type: "normal", arg: fn.call(obj, arg) };
    } catch (err) {
      return { type: "throw", arg: err };
    }
  }

  var GenStateSuspendedStart = "suspendedStart";
  var GenStateSuspendedYield = "suspendedYield";
  var GenStateExecuting = "executing";
  var GenStateCompleted = "completed";

  // Returning this object from the innerFn has the same effect as
  // breaking out of the dispatch switch statement.
  var ContinueSentinel = {};

  // Dummy constructor functions that we use as the .constructor and
  // .constructor.prototype properties for functions that return Generator
  // objects. For full spec compliance, you may wish to configure your
  // minifier not to mangle the names of these two functions.
  function Generator() {}
  function GeneratorFunction() {}
  function GeneratorFunctionPrototype() {}

  // This is a polyfill for %IteratorPrototype% for environments that
  // don't natively support it.
  var IteratorPrototype = {};
  define(IteratorPrototype, iteratorSymbol, function () {
    return this;
  });

  var getProto = Object.getPrototypeOf;
  var NativeIteratorPrototype = getProto && getProto(getProto(values([])));
  if (NativeIteratorPrototype &&
      NativeIteratorPrototype !== Op &&
      hasOwn.call(NativeIteratorPrototype, iteratorSymbol)) {
    // This environment has a native %IteratorPrototype%; use it instead
    // of the polyfill.
    IteratorPrototype = NativeIteratorPrototype;
  }

  var Gp = GeneratorFunctionPrototype.prototype =
    Generator.prototype = Object.create(IteratorPrototype);
  GeneratorFunction.prototype = GeneratorFunctionPrototype;
  define(Gp, "constructor", GeneratorFunctionPrototype);
  define(GeneratorFunctionPrototype, "constructor", GeneratorFunction);
  GeneratorFunction.displayName = define(
    GeneratorFunctionPrototype,
    toStringTagSymbol,
    "GeneratorFunction"
  );

  // Helper for defining the .next, .throw, and .return methods of the
  // Iterator interface in terms of a single ._invoke method.
  function defineIteratorMethods(prototype) {
    ["next", "throw", "return"].forEach(function(method) {
      define(prototype, method, function(arg) {
        return this._invoke(method, arg);
      });
    });
  }

  exports.isGeneratorFunction = function(genFun) {
    var ctor = typeof genFun === "function" && genFun.constructor;
    return ctor
      ? ctor === GeneratorFunction ||
        // For the native GeneratorFunction constructor, the best we can
        // do is to check its .name property.
        (ctor.displayName || ctor.name) === "GeneratorFunction"
      : false;
  };

  exports.mark = function(genFun) {
    if (Object.setPrototypeOf) {
      Object.setPrototypeOf(genFun, GeneratorFunctionPrototype);
    } else {
      genFun.__proto__ = GeneratorFunctionPrototype;
      define(genFun, toStringTagSymbol, "GeneratorFunction");
    }
    genFun.prototype = Object.create(Gp);
    return genFun;
  };

  // Within the body of any async function, `await x` is transformed to
  // `yield regeneratorRuntime.awrap(x)`, so that the runtime can test
  // `hasOwn.call(value, "__await")` to determine if the yielded value is
  // meant to be awaited.
  exports.awrap = function(arg) {
    return { __await: arg };
  };

  function AsyncIterator(generator, PromiseImpl) {
    function invoke(method, arg, resolve, reject) {
      var record = tryCatch(generator[method], generator, arg);
      if (record.type === "throw") {
        reject(record.arg);
      } else {
        var result = record.arg;
        var value = result.value;
        if (value &&
            typeof value === "object" &&
            hasOwn.call(value, "__await")) {
          return PromiseImpl.resolve(value.__await).then(function(value) {
            invoke("next", value, resolve, reject);
          }, function(err) {
            invoke("throw", err, resolve, reject);
          });
        }

        return PromiseImpl.resolve(value).then(function(unwrapped) {
          // When a yielded Promise is resolved, its final value becomes
          // the .value of the Promise<{value,done}> result for the
          // current iteration.
          result.value = unwrapped;
          resolve(result);
        }, function(error) {
          // If a rejected Promise was yielded, throw the rejection back
          // into the async generator function so it can be handled there.
          return invoke("throw", error, resolve, reject);
        });
      }
    }

    var previousPromise;

    function enqueue(method, arg) {
      function callInvokeWithMethodAndArg() {
        return new PromiseImpl(function(resolve, reject) {
          invoke(method, arg, resolve, reject);
        });
      }

      return previousPromise =
        // If enqueue has been called before, then we want to wait until
        // all previous Promises have been resolved before calling invoke,
        // so that results are always delivered in the correct order. If
        // enqueue has not been called before, then it is important to
        // call invoke immediately, without waiting on a callback to fire,
        // so that the async generator function has the opportunity to do
        // any necessary setup in a predictable way. This predictability
        // is why the Promise constructor synchronously invokes its
        // executor callback, and why async functions synchronously
        // execute code before the first await. Since we implement simple
        // async functions in terms of async generators, it is especially
        // important to get this right, even though it requires care.
        previousPromise ? previousPromise.then(
          callInvokeWithMethodAndArg,
          // Avoid propagating failures to Promises returned by later
          // invocations of the iterator.
          callInvokeWithMethodAndArg
        ) : callInvokeWithMethodAndArg();
    }

    // Define the unified helper method that is used to implement .next,
    // .throw, and .return (see defineIteratorMethods).
    this._invoke = enqueue;
  }

  defineIteratorMethods(AsyncIterator.prototype);
  define(AsyncIterator.prototype, asyncIteratorSymbol, function () {
    return this;
  });
  exports.AsyncIterator = AsyncIterator;

  // Note that simple async functions are implemented on top of
  // AsyncIterator objects; they just return a Promise for the value of
  // the final result produced by the iterator.
  exports.async = function(innerFn, outerFn, self, tryLocsList, PromiseImpl) {
    if (PromiseImpl === void 0) PromiseImpl = Promise;

    var iter = new AsyncIterator(
      wrap(innerFn, outerFn, self, tryLocsList),
      PromiseImpl
    );

    return exports.isGeneratorFunction(outerFn)
      ? iter // If outerFn is a generator, return the full iterator.
      : iter.next().then(function(result) {
          return result.done ? result.value : iter.next();
        });
  };

  function makeInvokeMethod(innerFn, self, context) {
    var state = GenStateSuspendedStart;

    return function invoke(method, arg) {
      if (state === GenStateExecuting) {
        throw new Error("Generator is already running");
      }

      if (state === GenStateCompleted) {
        if (method === "throw") {
          throw arg;
        }

        // Be forgiving, per 25.3.3.3.3 of the spec:
        // https://people.mozilla.org/~jorendorff/es6-draft.html#sec-generatorresume
        return doneResult();
      }

      context.method = method;
      context.arg = arg;

      while (true) {
        var delegate = context.delegate;
        if (delegate) {
          var delegateResult = maybeInvokeDelegate(delegate, context);
          if (delegateResult) {
            if (delegateResult === ContinueSentinel) continue;
            return delegateResult;
          }
        }

        if (context.method === "next") {
          // Setting context._sent for legacy support of Babel's
          // function.sent implementation.
          context.sent = context._sent = context.arg;

        } else if (context.method === "throw") {
          if (state === GenStateSuspendedStart) {
            state = GenStateCompleted;
            throw context.arg;
          }

          context.dispatchException(context.arg);

        } else if (context.method === "return") {
          context.abrupt("return", context.arg);
        }

        state = GenStateExecuting;

        var record = tryCatch(innerFn, self, context);
        if (record.type === "normal") {
          // If an exception is thrown from innerFn, we leave state ===
          // GenStateExecuting and loop back for another invocation.
          state = context.done
            ? GenStateCompleted
            : GenStateSuspendedYield;

          if (record.arg === ContinueSentinel) {
            continue;
          }

          return {
            value: record.arg,
            done: context.done
          };

        } else if (record.type === "throw") {
          state = GenStateCompleted;
          // Dispatch the exception by looping back around to the
          // context.dispatchException(context.arg) call above.
          context.method = "throw";
          context.arg = record.arg;
        }
      }
    };
  }

  // Call delegate.iterator[context.method](context.arg) and handle the
  // result, either by returning a { value, done } result from the
  // delegate iterator, or by modifying context.method and context.arg,
  // setting context.delegate to null, and returning the ContinueSentinel.
  function maybeInvokeDelegate(delegate, context) {
    var method = delegate.iterator[context.method];
    if (method === undefined) {
      // A .throw or .return when the delegate iterator has no .throw
      // method always terminates the yield* loop.
      context.delegate = null;

      if (context.method === "throw") {
        // Note: ["return"] must be used for ES3 parsing compatibility.
        if (delegate.iterator["return"]) {
          // If the delegate iterator has a return method, give it a
          // chance to clean up.
          context.method = "return";
          context.arg = undefined;
          maybeInvokeDelegate(delegate, context);

          if (context.method === "throw") {
            // If maybeInvokeDelegate(context) changed context.method from
            // "return" to "throw", let that override the TypeError below.
            return ContinueSentinel;
          }
        }

        context.method = "throw";
        context.arg = new TypeError(
          "The iterator does not provide a 'throw' method");
      }

      return ContinueSentinel;
    }

    var record = tryCatch(method, delegate.iterator, context.arg);

    if (record.type === "throw") {
      context.method = "throw";
      context.arg = record.arg;
      context.delegate = null;
      return ContinueSentinel;
    }

    var info = record.arg;

    if (! info) {
      context.method = "throw";
      context.arg = new TypeError("iterator result is not an object");
      context.delegate = null;
      return ContinueSentinel;
    }

    if (info.done) {
      // Assign the result of the finished delegate to the temporary
      // variable specified by delegate.resultName (see delegateYield).
      context[delegate.resultName] = info.value;

      // Resume execution at the desired location (see delegateYield).
      context.next = delegate.nextLoc;

      // If context.method was "throw" but the delegate handled the
      // exception, let the outer generator proceed normally. If
      // context.method was "next", forget context.arg since it has been
      // "consumed" by the delegate iterator. If context.method was
      // "return", allow the original .return call to continue in the
      // outer generator.
      if (context.method !== "return") {
        context.method = "next";
        context.arg = undefined;
      }

    } else {
      // Re-yield the result returned by the delegate method.
      return info;
    }

    // The delegate iterator is finished, so forget it and continue with
    // the outer generator.
    context.delegate = null;
    return ContinueSentinel;
  }

  // Define Generator.prototype.{next,throw,return} in terms of the
  // unified ._invoke helper method.
  defineIteratorMethods(Gp);

  define(Gp, toStringTagSymbol, "Generator");

  // A Generator should always return itself as the iterator object when the
  // @@iterator function is called on it. Some browsers' implementations of the
  // iterator prototype chain incorrectly implement this, causing the Generator
  // object to not be returned from this call. This ensures that doesn't happen.
  // See https://github.com/facebook/regenerator/issues/274 for more details.
  define(Gp, iteratorSymbol, function() {
    return this;
  });

  define(Gp, "toString", function() {
    return "[object Generator]";
  });

  function pushTryEntry(locs) {
    var entry = { tryLoc: locs[0] };

    if (1 in locs) {
      entry.catchLoc = locs[1];
    }

    if (2 in locs) {
      entry.finallyLoc = locs[2];
      entry.afterLoc = locs[3];
    }

    this.tryEntries.push(entry);
  }

  function resetTryEntry(entry) {
    var record = entry.completion || {};
    record.type = "normal";
    delete record.arg;
    entry.completion = record;
  }

  function Context(tryLocsList) {
    // The root entry object (effectively a try statement without a catch
    // or a finally block) gives us a place to store values thrown from
    // locations where there is no enclosing try statement.
    this.tryEntries = [{ tryLoc: "root" }];
    tryLocsList.forEach(pushTryEntry, this);
    this.reset(true);
  }

  exports.keys = function(object) {
    var keys = [];
    for (var key in object) {
      keys.push(key);
    }
    keys.reverse();

    // Rather than returning an object with a next method, we keep
    // things simple and return the next function itself.
    return function next() {
      while (keys.length) {
        var key = keys.pop();
        if (key in object) {
          next.value = key;
          next.done = false;
          return next;
        }
      }

      // To avoid creating an additional object, we just hang the .value
      // and .done properties off the next function object itself. This
      // also ensures that the minifier will not anonymize the function.
      next.done = true;
      return next;
    };
  };

  function values(iterable) {
    if (iterable) {
      var iteratorMethod = iterable[iteratorSymbol];
      if (iteratorMethod) {
        return iteratorMethod.call(iterable);
      }

      if (typeof iterable.next === "function") {
        return iterable;
      }

      if (!isNaN(iterable.length)) {
        var i = -1, next = function next() {
          while (++i < iterable.length) {
            if (hasOwn.call(iterable, i)) {
              next.value = iterable[i];
              next.done = false;
              return next;
            }
          }

          next.value = undefined;
          next.done = true;

          return next;
        };

        return next.next = next;
      }
    }

    // Return an iterator with no values.
    return { next: doneResult };
  }
  exports.values = values;

  function doneResult() {
    return { value: undefined, done: true };
  }

  Context.prototype = {
    constructor: Context,

    reset: function(skipTempReset) {
      this.prev = 0;
      this.next = 0;
      // Resetting context._sent for legacy support of Babel's
      // function.sent implementation.
      this.sent = this._sent = undefined;
      this.done = false;
      this.delegate = null;

      this.method = "next";
      this.arg = undefined;

      this.tryEntries.forEach(resetTryEntry);

      if (!skipTempReset) {
        for (var name in this) {
          // Not sure about the optimal order of these conditions:
          if (name.charAt(0) === "t" &&
              hasOwn.call(this, name) &&
              !isNaN(+name.slice(1))) {
            this[name] = undefined;
          }
        }
      }
    },

    stop: function() {
      this.done = true;

      var rootEntry = this.tryEntries[0];
      var rootRecord = rootEntry.completion;
      if (rootRecord.type === "throw") {
        throw rootRecord.arg;
      }

      return this.rval;
    },

    dispatchException: function(exception) {
      if (this.done) {
        throw exception;
      }

      var context = this;
      function handle(loc, caught) {
        record.type = "throw";
        record.arg = exception;
        context.next = loc;

        if (caught) {
          // If the dispatched exception was caught by a catch block,
          // then let that catch block handle the exception normally.
          context.method = "next";
          context.arg = undefined;
        }

        return !! caught;
      }

      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        var record = entry.completion;

        if (entry.tryLoc === "root") {
          // Exception thrown outside of any try block that could handle
          // it, so set the completion value of the entire function to
          // throw the exception.
          return handle("end");
        }

        if (entry.tryLoc <= this.prev) {
          var hasCatch = hasOwn.call(entry, "catchLoc");
          var hasFinally = hasOwn.call(entry, "finallyLoc");

          if (hasCatch && hasFinally) {
            if (this.prev < entry.catchLoc) {
              return handle(entry.catchLoc, true);
            } else if (this.prev < entry.finallyLoc) {
              return handle(entry.finallyLoc);
            }

          } else if (hasCatch) {
            if (this.prev < entry.catchLoc) {
              return handle(entry.catchLoc, true);
            }

          } else if (hasFinally) {
            if (this.prev < entry.finallyLoc) {
              return handle(entry.finallyLoc);
            }

          } else {
            throw new Error("try statement without catch or finally");
          }
        }
      }
    },

    abrupt: function(type, arg) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.tryLoc <= this.prev &&
            hasOwn.call(entry, "finallyLoc") &&
            this.prev < entry.finallyLoc) {
          var finallyEntry = entry;
          break;
        }
      }

      if (finallyEntry &&
          (type === "break" ||
           type === "continue") &&
          finallyEntry.tryLoc <= arg &&
          arg <= finallyEntry.finallyLoc) {
        // Ignore the finally entry if control is not jumping to a
        // location outside the try/catch block.
        finallyEntry = null;
      }

      var record = finallyEntry ? finallyEntry.completion : {};
      record.type = type;
      record.arg = arg;

      if (finallyEntry) {
        this.method = "next";
        this.next = finallyEntry.finallyLoc;
        return ContinueSentinel;
      }

      return this.complete(record);
    },

    complete: function(record, afterLoc) {
      if (record.type === "throw") {
        throw record.arg;
      }

      if (record.type === "break" ||
          record.type === "continue") {
        this.next = record.arg;
      } else if (record.type === "return") {
        this.rval = this.arg = record.arg;
        this.method = "return";
        this.next = "end";
      } else if (record.type === "normal" && afterLoc) {
        this.next = afterLoc;
      }

      return ContinueSentinel;
    },

    finish: function(finallyLoc) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.finallyLoc === finallyLoc) {
          this.complete(entry.completion, entry.afterLoc);
          resetTryEntry(entry);
          return ContinueSentinel;
        }
      }
    },

    "catch": function(tryLoc) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.tryLoc === tryLoc) {
          var record = entry.completion;
          if (record.type === "throw") {
            var thrown = record.arg;
            resetTryEntry(entry);
          }
          return thrown;
        }
      }

      // The context.catch method must only be called with a location
      // argument that corresponds to a known catch block.
      throw new Error("illegal catch attempt");
    },

    delegateYield: function(iterable, resultName, nextLoc) {
      this.delegate = {
        iterator: values(iterable),
        resultName: resultName,
        nextLoc: nextLoc
      };

      if (this.method === "next") {
        // Deliberately forget the last sent value so that we don't
        // accidentally pass it on to the delegate.
        this.arg = undefined;
      }

      return ContinueSentinel;
    }
  };

  // Regardless of whether this script is executing as a CommonJS module
  // or not, return the runtime object so that we can declare the variable
  // regeneratorRuntime in the outer scope, which allows this module to be
  // injected easily by `bin/regenerator --include-runtime script.js`.
  return exports;

}(
  // If this script is executing as a CommonJS module, use module.exports
  // as the regeneratorRuntime namespace. Otherwise create a new empty
  // object. Either way, the resulting object will be used to initialize
  // the regeneratorRuntime variable at the top of this file.
   true ? module.exports : 0
));

try {
  regeneratorRuntime = runtime;
} catch (accidentalStrictMode) {
  // This module should not be running in strict mode, so the above
  // assignment should always work unless something is misconfigured. Just
  // in case runtime.js accidentally runs in strict mode, in modern engines
  // we can explicitly access globalThis. In older engines we can escape
  // strict mode using a global Function call. This could conceivably fail
  // if a Content Security Policy forbids using Function, but in that case
  // the proper solution is to fix the accidental strict mode problem. If
  // you've misconfigured your bundler to force strict mode and applied a
  // CSP to forbid Function, and you're not willing to fix either of those
  // problems, please detail your unique predicament in a GitHub issue.
  if (typeof globalThis === "object") {
    globalThis.regeneratorRuntime = runtime;
  } else {
    Function("r", "regeneratorRuntime = r")(runtime);
  }
}


/***/ }),

/***/ "./node_modules/vue-loader/dist/exportHelper.js":
/*!******************************************************!*\
  !*** ./node_modules/vue-loader/dist/exportHelper.js ***!
  \******************************************************/
/***/ ((__unused_webpack_module, exports) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
// runtime helper for setting properties on components
// in a tree-shakable way
exports["default"] = (sfc, props) => {
    const target = sfc.__vccOpts || sfc;
    for (const [key, val] of props) {
        target[key] = val;
    }
    return target;
};


/***/ }),

/***/ "./frontend/js/components/HtmlEditor.vue":
/*!***********************************************!*\
  !*** ./frontend/js/components/HtmlEditor.vue ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _HtmlEditor_vue_vue_type_template_id_f54981ac__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./HtmlEditor.vue?vue&type=template&id=f54981ac */ "./frontend/js/components/HtmlEditor.vue?vue&type=template&id=f54981ac");
/* harmony import */ var _HtmlEditor_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./HtmlEditor.vue?vue&type=script&lang=js */ "./frontend/js/components/HtmlEditor.vue?vue&type=script&lang=js");
/* harmony import */ var _home_huyennv9_projects_landing_page_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/vue-loader/dist/exportHelper.js */ "./node_modules/vue-loader/dist/exportHelper.js");




;
const __exports__ = /*#__PURE__*/(0,_home_huyennv9_projects_landing_page_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__["default"])(_HtmlEditor_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"], [['render',_HtmlEditor_vue_vue_type_template_id_f54981ac__WEBPACK_IMPORTED_MODULE_0__.render],['__file',"frontend/js/components/HtmlEditor.vue"]])
/* hot reload */
if (false) {}


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__exports__);

/***/ }),

/***/ "./frontend/js/components/NewsComment.vue":
/*!************************************************!*\
  !*** ./frontend/js/components/NewsComment.vue ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _NewsComment_vue_vue_type_template_id_475c184a__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./NewsComment.vue?vue&type=template&id=475c184a */ "./frontend/js/components/NewsComment.vue?vue&type=template&id=475c184a");
/* harmony import */ var _NewsComment_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./NewsComment.vue?vue&type=script&lang=js */ "./frontend/js/components/NewsComment.vue?vue&type=script&lang=js");
/* harmony import */ var _home_huyennv9_projects_landing_page_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/vue-loader/dist/exportHelper.js */ "./node_modules/vue-loader/dist/exportHelper.js");




;
const __exports__ = /*#__PURE__*/(0,_home_huyennv9_projects_landing_page_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__["default"])(_NewsComment_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"], [['render',_NewsComment_vue_vue_type_template_id_475c184a__WEBPACK_IMPORTED_MODULE_0__.render],['__file',"frontend/js/components/NewsComment.vue"]])
/* hot reload */
if (false) {}


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__exports__);

/***/ }),

/***/ "./frontend/js/components/HtmlEditor.vue?vue&type=script&lang=js":
/*!***********************************************************************!*\
  !*** ./frontend/js/components/HtmlEditor.vue?vue&type=script&lang=js ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_HtmlEditor_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"])
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_HtmlEditor_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./HtmlEditor.vue?vue&type=script&lang=js */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./frontend/js/components/HtmlEditor.vue?vue&type=script&lang=js");
 

/***/ }),

/***/ "./frontend/js/components/NewsComment.vue?vue&type=script&lang=js":
/*!************************************************************************!*\
  !*** ./frontend/js/components/NewsComment.vue?vue&type=script&lang=js ***!
  \************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_NewsComment_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"])
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_NewsComment_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./NewsComment.vue?vue&type=script&lang=js */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./frontend/js/components/NewsComment.vue?vue&type=script&lang=js");
 

/***/ }),

/***/ "./frontend/js/components/HtmlEditor.vue?vue&type=template&id=f54981ac":
/*!*****************************************************************************!*\
  !*** ./frontend/js/components/HtmlEditor.vue?vue&type=template&id=f54981ac ***!
  \*****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_HtmlEditor_vue_vue_type_template_id_f54981ac__WEBPACK_IMPORTED_MODULE_0__.render)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_HtmlEditor_vue_vue_type_template_id_f54981ac__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./HtmlEditor.vue?vue&type=template&id=f54981ac */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./frontend/js/components/HtmlEditor.vue?vue&type=template&id=f54981ac");


/***/ }),

/***/ "./frontend/js/components/NewsComment.vue?vue&type=template&id=475c184a":
/*!******************************************************************************!*\
  !*** ./frontend/js/components/NewsComment.vue?vue&type=template&id=475c184a ***!
  \******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_NewsComment_vue_vue_type_template_id_475c184a__WEBPACK_IMPORTED_MODULE_0__.render)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_NewsComment_vue_vue_type_template_id_475c184a__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./NewsComment.vue?vue&type=template&id=475c184a */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./frontend/js/components/NewsComment.vue?vue&type=template&id=475c184a");


/***/ }),

/***/ "vue":
/*!**********************!*\
  !*** external "Vue" ***!
  \**********************/
/***/ ((module) => {

"use strict";
module.exports = Vue;

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be in strict mode.
(() => {
"use strict";
/*!******************************************!*\
  !*** ./frontend/js/pages/news-detail.js ***!
  \******************************************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_NewsComment_vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ~/components/NewsComment.vue */ "./frontend/js/components/NewsComment.vue");


function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }


var NewsDetailApp = {
  components: {
    NewsComment: _components_NewsComment_vue__WEBPACK_IMPORTED_MODULE_1__["default"]
  },
  data: function data() {
    // Các biến isLogin, userLiked, likesCount được định nghĩa ở resources/views/pages/newsDetail/newsDetail.blade.php
    return {
      // Người dùng đã login chưa
      isLogin: isLogin,
      // Người dùng đã like tin tức chưa
      userLiked: userLiked,
      // Số like của tin tức
      likesCount: likesCount
    };
  },
  methods: {
    /**
     * Like tin tức.
     */
    likeNews: function likeNews(newsId) {
      var _this = this;

      return _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee() {
        var params, _yield$axios$post, data;

        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                params = {
                  newsId: newsId
                };
                _context.next = 3;
                return axios.post('/like-news', params);

              case 3:
                _yield$axios$post = _context.sent;
                data = _yield$axios$post.data;
                _this.likesCount = data.likes_count;
                _this.userLiked = true;

              case 7:
              case "end":
                return _context.stop();
            }
          }
        }, _callee);
      }))();
    },

    /**
     * Bỏ like tin tức.
     */
    unlikeNews: function unlikeNews(newsId) {
      var _this2 = this;

      return _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee2() {
        var params, _yield$axios$post2, data;

        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                params = {
                  newsId: newsId
                };
                _context2.next = 3;
                return axios.post('/unlike-news', params);

              case 3:
                _yield$axios$post2 = _context2.sent;
                data = _yield$axios$post2.data;
                _this2.likesCount = data.likes_count;
                _this2.userLiked = false;

              case 7:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2);
      }))();
    }
  }
}; // Chờ cho Bootstrap load xong, không thì bị lỗi "t.attr(...).tooltip is not a function"

window.addEventListener('load', function () {
  Vue.createApp(NewsDetailApp).mount('#app');
});
/**
 * Lấy danh sách tin tức liên quan.
 */

function getRelatedNewsList() {
  return _getRelatedNewsList.apply(this, arguments);
}

function _getRelatedNewsList() {
  _getRelatedNewsList = _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee3() {
    var url, data;
    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee3$(_context3) {
      while (1) {
        switch (_context3.prev = _context3.next) {
          case 0:
            url = '/tin-tuc/relate/' + currentNewsId;
            _context3.next = 3;
            return fetch(url).then(function (resp) {
              return resp.text();
            });

          case 3:
            data = _context3.sent;
            document.querySelector('#relatedList').innerHTML = data;

          case 5:
          case "end":
            return _context3.stop();
        }
      }
    }, _callee3);
  }));
  return _getRelatedNewsList.apply(this, arguments);
}

getRelatedNewsList();
})();

/******/ })()
;
//# sourceMappingURL=news-detail.js.map