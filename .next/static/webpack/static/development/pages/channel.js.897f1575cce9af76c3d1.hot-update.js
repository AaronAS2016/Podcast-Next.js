webpackHotUpdate("static\\development\\pages\\channel.js",{

/***/ "./components/PodcastPlayer.js":
/*!*************************************!*\
  !*** ./components/PodcastPlayer.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return PodcastPlayer; });
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "./node_modules/styled-jsx/style.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _routes__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../routes */ "./routes.js");
/* harmony import */ var _routes__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_routes__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _helpers_slug__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../helpers/slug */ "./helpers/slug.js");



function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }




var PodcastPlayer =
/*#__PURE__*/
function (_React$Component) {
  _inherits(PodcastPlayer, _React$Component);

  function PodcastPlayer() {
    _classCallCheck(this, PodcastPlayer);

    return _possibleConstructorReturn(this, _getPrototypeOf(PodcastPlayer).apply(this, arguments));
  }

  _createClass(PodcastPlayer, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          clip = _this$props.clip,
          onClose = _this$props.onClose;
      return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        className: "jsx-776517351" + " " + "modal"
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        className: "jsx-776517351" + " " + 'clip'
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("nav", {
        className: "jsx-776517351"
      }, onClose ? react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("a", {
        onClick: onClose,
        className: "jsx-776517351"
      }, "< Volver") : react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_routes__WEBPACK_IMPORTED_MODULE_2__["Link"], {
        route: "channel",
        params: {
          slug: Object(_helpers_slug__WEBPACK_IMPORTED_MODULE_3__["default"])(clip.channel.title),
          id: clip.channel.id
        },
        prefetch: true
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("a", {
        className: "jsx-776517351" + " " + 'close'
      }, "< Volver"))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("picture", {
        className: "jsx-776517351"
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        style: {
          backgroundImage: "url(".concat(clip.urls.image || clip.channel.urls.logo_image.original, ")")
        },
        className: "jsx-776517351"
      })), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        className: "jsx-776517351" + " " + 'player'
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h3", {
        className: "jsx-776517351"
      }, clip.title), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h6", {
        className: "jsx-776517351"
      }, clip.channel.title), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("audio", {
        controls: true,
        autoPlay: true,
        className: "jsx-776517351"
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("source", {
        src: clip.urls.high_mp3,
        type: "audio/mpeg",
        className: "jsx-776517351"
      })))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
        styleId: "776517351",
        css: "nav.jsx-776517351{background:232931;}nav.jsx-776517351 a.jsx-776517351{display:inline-block;padding:15px;color:white;cursor:pointer;-webkit-text-decoration:none;text-decoration:none;}.clip.jsx-776517351{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;height:100%;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;background:#8756ca;color:white;}picture.jsx-776517351{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;-webkit-flex:1 1;-ms-flex:1 1;flex:1 1;background-color:#232931;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;width:auto;padding:10%;}picture.jsx-776517351 div.jsx-776517351{width:100%;height:100%;background-position:50% 50%;background-size:contain;background-repeat:no-repeat;}.player.jsx-776517351{padding:30px;background:#393e46;text-align:center;}h3.jsx-776517351{margin:0;}h6.jsx-776517351{margin:0;margin-top:1em;}audio.jsx-776517351{margin-top:2em;width:100%;}.modal.jsx-776517351{position:fixed;top:0;left:0;right:0;bottom:0;z-index:99999;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkM6XFxVc2Vyc1xcQWFyb25cXERvY3VtZW50c1xcR2l0SHViXFxQb2RjYXN0LU5leHQuanNcXGNvbXBvbmVudHNcXFBvZGNhc3RQbGF5ZXIuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBa0NrQixBQUc2QixBQUdHLEFBT1IsQUFPQSxBQVVGLEFBT0UsQUFLSixBQUdBLEFBSU0sQUFLQSxTQVhqQixBQUdpQixFQWZILEVBT08sRUFZUixBQUtMLEdBbkRSLEdBR2UsQUFpRE4sRUF4QnFCLENBZTlCLEVBSUEsRUFNVSxJQWxCVSxFQS9CTixFQWtESCxTQUNLLENBbERDLElBK0JqQixDQVAwQixRQTJCMUIsRUFsRHVCLGFBSVQsQUFPTyxDQWFTLFdBbkJOLGlCQW9CeEIsUUF4QkEscURBS3FCLEdBTUksZ0JBTFgsWUFDZCx1RUFLVyx1Q0FDZ0IseUJBQ0gsOEVBQ1gsV0FDQyxZQUNkIiwiZmlsZSI6IkM6XFxVc2Vyc1xcQWFyb25cXERvY3VtZW50c1xcR2l0SHViXFxQb2RjYXN0LU5leHQuanNcXGNvbXBvbmVudHNcXFBvZGNhc3RQbGF5ZXIuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBMaW5rIH0gZnJvbSAnLi4vcm91dGVzJ1xyXG5pbXBvcnQgc2x1ZyBmcm9tICcuLi9oZWxwZXJzL3NsdWcnXHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBQb2RjYXN0UGxheWVyIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcclxuICByZW5kZXIoKSB7XHJcbiAgICBjb25zdCB7IGNsaXAsIG9uQ2xvc2UgfSA9IHRoaXMucHJvcHNcclxuXHJcbiAgICByZXR1cm4gPGRpdiBjbGFzc05hbWU9XCJtb2RhbFwiPlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT0nY2xpcCc+XHJcbiAgICAgICAgPG5hdj5cclxuICAgICAgICAgIHsgb25DbG9zZSA/XHJcbiAgICAgICAgICAgIDxhIG9uQ2xpY2s9e29uQ2xvc2V9PiZsdDsgVm9sdmVyPC9hPlxyXG4gICAgICAgICAgICA6XHJcbiAgICAgICAgICAgIDxMaW5rIHJvdXRlPSdjaGFubmVsJyBcclxuICAgICAgICAgICAgICBwYXJhbXM9e3sgc2x1Zzogc2x1ZyhjbGlwLmNoYW5uZWwudGl0bGUpLCBpZDogY2xpcC5jaGFubmVsLmlkIH19IFxyXG4gICAgICAgICAgICAgIHByZWZldGNoPlxyXG4gICAgICAgICAgICAgIDxhIGNsYXNzTmFtZT0nY2xvc2UnPiZsdDsgVm9sdmVyPC9hPlxyXG4gICAgICAgICAgICA8L0xpbms+XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgPC9uYXY+XHJcblxyXG4gICAgICAgIDxwaWN0dXJlPlxyXG4gICAgICAgICAgPGRpdiBzdHlsZT17eyBiYWNrZ3JvdW5kSW1hZ2U6IGB1cmwoJHtjbGlwLnVybHMuaW1hZ2UgfHwgY2xpcC5jaGFubmVsLnVybHMubG9nb19pbWFnZS5vcmlnaW5hbH0pYCB9fSAvPlxyXG4gICAgICAgIDwvcGljdHVyZT5cclxuXHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9J3BsYXllcic+XHJcbiAgICAgICAgICA8aDM+eyBjbGlwLnRpdGxlIH08L2gzPlxyXG4gICAgICAgICAgPGg2PnsgY2xpcC5jaGFubmVsLnRpdGxlIH08L2g2PlxyXG4gICAgICAgICAgPGF1ZGlvIGNvbnRyb2xzIGF1dG9QbGF5PXt0cnVlfT5cclxuICAgICAgICAgICAgPHNvdXJjZSBzcmM9e2NsaXAudXJscy5oaWdoX21wM30gdHlwZT0nYXVkaW8vbXBlZycgLz5cclxuICAgICAgICAgIDwvYXVkaW8+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgPHN0eWxlIGpzeD57YFxyXG4gICAgICAgIG5hdiB7XHJcbiAgICAgICAgICBiYWNrZ3JvdW5kOiAyMzI5MzE7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIG5hdiBhIHtcclxuICAgICAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgICAgICAgIHBhZGRpbmc6IDE1cHg7XHJcbiAgICAgICAgICBjb2xvcjogd2hpdGU7XHJcbiAgICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICAgICAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC5jbGlwIHtcclxuICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgICAgICAgYmFja2dyb3VuZDogIzg3NTZjYTtcclxuICAgICAgICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcGljdHVyZSB7XHJcbiAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgICAgICAgZmxleDogMSAxO1xyXG4gICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogIzIzMjkzMTtcclxuICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICAgICAgICB3aWR0aDogYXV0bztcclxuICAgICAgICAgIHBhZGRpbmc6IDEwJTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcGljdHVyZSBkaXYge1xyXG4gICAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICAgICAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiA1MCUgNTAlO1xyXG4gICAgICAgICAgYmFja2dyb3VuZC1zaXplOiBjb250YWluO1xyXG4gICAgICAgICAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcclxuICAgICAgICB9XHJcbiAgICAgICAgLnBsYXllciB7XHJcbiAgICAgICAgICBwYWRkaW5nOiAzMHB4O1xyXG4gICAgICAgICAgYmFja2dyb3VuZDogIzM5M2U0NjtcclxuICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgICB9XHJcbiAgICAgICAgaDMge1xyXG4gICAgICAgICAgbWFyZ2luOiAwO1xyXG4gICAgICAgIH1cclxuICAgICAgICBoNiB7XHJcbiAgICAgICAgICBtYXJnaW46IDA7XHJcbiAgICAgICAgICBtYXJnaW4tdG9wOiAxZW07XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGF1ZGlvIHtcclxuICAgICAgICAgIG1hcmdpbi10b3A6IDJlbTtcclxuICAgICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLm1vZGFsIHtcclxuICAgICAgICAgIHBvc2l0aW9uOiBmaXhlZDtcclxuICAgICAgICAgIHRvcDogMDtcclxuICAgICAgICAgIGxlZnQ6IDA7XHJcbiAgICAgICAgICByaWdodDogMDtcclxuICAgICAgICAgIGJvdHRvbTogMDtcclxuICAgICAgICAgIHotaW5kZXg6IDk5OTk5O1xyXG4gICAgICAgIH1cclxuICAgICAgYH08L3N0eWxlPlxyXG4gICAgPC9kaXY+XHJcbiAgfVxyXG59Il19 */\n/*@ sourceURL=C:\\Users\\Aaron\\Documents\\GitHub\\Podcast-Next.js\\components\\PodcastPlayer.js */"
      }));
    }
  }]);

  return PodcastPlayer;
}(react__WEBPACK_IMPORTED_MODULE_1___default.a.Component);



/***/ })

})
//# sourceMappingURL=channel.js.897f1575cce9af76c3d1.hot-update.js.map