(self["webpackChunkproject_template_ui"] = self["webpackChunkproject_template_ui"] || []).push([[507],{

/***/ 7507
/*!***********************************************************!*\
  !*** ./src/app/components/anasayfa/anasayfa.component.ts ***!
  \***********************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AnasayfaComponent: () => (/* binding */ AnasayfaComponent)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common */ 9748);
/* harmony import */ var ngx_lightbox__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ngx-lightbox */ 6736);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 6124);
/* harmony import */ var _services_yetki_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/yetki.service */ 8444);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ 3305);
/* harmony import */ var _services_anasayfa_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../services/anasayfa.service */ 8622);
/* harmony import */ var _services_genel_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../services/genel.service */ 8033);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/platform-browser */ 436);









let AnasayfaComponent = /*#__PURE__*/(() => {
  class AnasayfaComponent {
    yetkiService;
    router;
    anasayfaService;
    lightbox;
    genelService;
    sanitizer;
    constructor(yetkiService, router, anasayfaService, lightbox, genelService, sanitizer) {
      this.yetkiService = yetkiService;
      this.router = router;
      this.anasayfaService = anasayfaService;
      this.lightbox = lightbox;
      this.genelService = genelService;
      this.sanitizer = sanitizer;
    }
    yukleniyor = false;
    ngOnInit() {}
    hatalar = {};
    hataYazdir = [];
    breadcrumbs = [];
    hataYonet(err) {
      this.hatalar = {};
      this.hatalar = err.error.errors;
      this.hataYazdir = [];
      for (let key in this.hatalar) {
        let hata = this.hatalar[key];
        this.genelService.error(hata[0]);
        this.hataYazdir.push(this.hatalar[key]);
      }
      if (err.error?.message && err.error?.message != "") {
        this.genelService.swError(err.error?.message);
      }
      ;
    }
    closeLightbox() {
      this.lightbox.close();
    }
    static ɵfac = function AnasayfaComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || AnasayfaComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_services_yetki_service__WEBPACK_IMPORTED_MODULE_3__.YetkiService), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_services_anasayfa_service__WEBPACK_IMPORTED_MODULE_5__.AnasayfaService), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](ngx_lightbox__WEBPACK_IMPORTED_MODULE_1__.Lightbox), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_services_genel_service__WEBPACK_IMPORTED_MODULE_6__.GenelService), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_platform_browser__WEBPACK_IMPORTED_MODULE_7__.DomSanitizer));
    };
    static ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({
      type: AnasayfaComponent,
      selectors: [["app-anasayfa"]],
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵProvidersFeature"]([ngx_lightbox__WEBPACK_IMPORTED_MODULE_1__.Lightbox] // <-- Bunu ekleyin
      )],
      decls: 16,
      vars: 0,
      consts: [["id", "kt_app_toolbar", 1, "app-toolbar", "pt-4", "pt-lg-5"], ["id", "kt_app_toolbar_container", 1, "app-container", "container-fluid", "d-flex", "align-items-stretch"], [1, "app-toolbar-wrapper", "d-flex", "flex-stack", "flex-wrap", "gap-4", "w-100"], [1, "page-title", "d-flex", "flex-column", "justify-content-center", "gap-1", "me-3"], [1, "page-heading", "d-flex", "flex-column", "justify-content-center", "text-gray-900", "fw-bold", "fs-3", "m-0"], ["translate", ""], [1, "fas", "fa-tasks", "text-primary", "me-2", 2, "font-size", "large"], [1, "breadcrumb", "breadcrumb-separatorless", "fw-semibold", "fs-7", "my-0"], [1, "breadcrumb-item", "text-muted"], [1, "text-muted", "text-hover-primary"], [1, "d-flex", "align-items-center", "gap-2", "gap-lg-3"], ["id", "kt_app_content", 1, "app-content", "flex-column-fluid"], ["id", "kt_app_content_container", 1, "app-container", "container-fluid"]],
      template: function AnasayfaComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdomElementStart"](0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "div", 3)(4, "h1", 4)(5, "span", 5);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdomElement"](6, "i", 6)(7, "span");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](8, "Anasayfa ");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdomElementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdomElementStart"](9, "ul", 7)(10, "li", 8)(11, "span", 9);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](12, "NE\u00DC Sms Panel Sistemi Ho\u015Fgeldiniz.");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdomElementEnd"]()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdomElement"](13, "div", 10);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdomElementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdomElementStart"](14, "div", 11);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdomElement"](15, "div", 12);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdomElementEnd"]();
        }
      },
      dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_0__.CommonModule, ngx_lightbox__WEBPACK_IMPORTED_MODULE_1__.LightboxModule],
      styles: ["\n\n.landing-header[data-kt-sticky=\"on\"][_ngcontent-%COMP%]   .logo-default[_ngcontent-%COMP%] {\n    display: none !important;\n}\n\n.landing-header[data-kt-sticky=\"on\"][_ngcontent-%COMP%]   .logo-sticky[_ngcontent-%COMP%] {\n    display: inline-block !important;\n}\n\n\n\n.landing-header[_ngcontent-%COMP%]:not([data-kt-sticky=\"on\"])   .logo-sticky[_ngcontent-%COMP%] {\n    display: none !important;\n}\n\n.gallery-grid[_ngcontent-%COMP%] {\n    display: flex;\n    flex-wrap: wrap;\n    gap: 1rem;\n    justify-content: center;\n}\n\n.gallery-item[_ngcontent-%COMP%] {\n    width: 280px;\n    \n\n    max-width: 320px;\n}\n\n.gallery-item[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n     width: 80%; \n    \n\n    object-fit: cover;\n}\n\n.lightbox-backdrop[_ngcontent-%COMP%], \n.lightbox[_ngcontent-%COMP%] {\n    z-index: 2000 !important;\n    position: fixed !important;\n}\n\n.carousel-item[_ngcontent-%COMP%] {\n    padding: 2rem 0;\n    transition: transform 1.5s ease-in-out;\n    \n\n}\n\n\n\n\n\n.carousel-control-prev-icon[_ngcontent-%COMP%], \n.carousel-control-next-icon[_ngcontent-%COMP%] {\n    background-color: #222 !important;\n    opacity: 1;\n    box-shadow: none;\n    width: 3rem;\n    height: 3rem;\n    background-size: 70% 70%;\n    background-position: center;\n}\n\n.scroll-list[_ngcontent-%COMP%] {\n  max-height: 350px;\n  overflow-y: auto;\n  padding-right: 4px;\n}\n\n\n\n@keyframes _ngcontent-%COMP%_yanipSon {\n  0%, 100% { background-color: #fffbe6; }\n  50% { background-color: #c5f0fa; }\n\n}\n\n.son-duyuru-yanip-son[_ngcontent-%COMP%] {\n  animation: _ngcontent-%COMP%_yanipSon 1s infinite;\n  transition: background-color 0.1s;\n  border-radius: 8px; \n\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvY29tcG9uZW50cy9hbmFzYXlmYS9hbmFzYXlmYS5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLHNFQUFzRTtBQUN0RTtJQUNJLHdCQUF3QjtBQUM1Qjs7QUFFQTtJQUNJLGdDQUFnQztBQUNwQzs7QUFFQSw0Q0FBNEM7QUFDNUM7SUFDSSx3QkFBd0I7QUFDNUI7O0FBRUE7SUFDSSxhQUFhO0lBQ2IsZUFBZTtJQUNmLFNBQVM7SUFDVCx1QkFBdUI7QUFDM0I7O0FBRUE7SUFDSSxZQUFZO0lBQ1osK0JBQStCO0lBQy9CLGdCQUFnQjtBQUNwQjs7QUFFQTtLQUNLLFVBQVU7SUFDWCxtQkFBbUI7SUFDbkIsaUJBQWlCO0FBQ3JCOztBQUVBOztJQUVJLHdCQUF3QjtJQUN4QiwwQkFBMEI7QUFDOUI7O0FBRUE7SUFDSSxlQUFlO0lBQ2Ysc0NBQXNDO0lBQ3RDLDRCQUE0QjtBQUNoQzs7QUFFQSxpQ0FBaUM7QUFDakMsbURBQW1EO0FBQ25EOztJQUVJLGlDQUFpQztJQUNqQyxVQUFVO0lBQ1YsZ0JBQWdCO0lBQ2hCLFdBQVc7SUFDWCxZQUFZO0lBQ1osd0JBQXdCO0lBQ3hCLDJCQUEyQjtBQUMvQjs7QUFFQTtFQUNFLGlCQUFpQjtFQUNqQixnQkFBZ0I7RUFDaEIsa0JBQWtCO0FBQ3BCOztBQUVBLDJDQUEyQztBQUMzQztFQUNFLFdBQVcseUJBQXlCLEVBQUU7RUFDdEMsTUFBTSx5QkFBeUIsRUFBRTs7QUFFbkM7O0FBRUE7RUFDRSwrQkFBK0I7RUFDL0IsaUNBQWlDO0VBQ2pDLGtCQUFrQixFQUFFLHNDQUFzQztBQUM1RCIsInNvdXJjZXNDb250ZW50IjpbIi8qIFN0aWNreSBkdXJ1bXVuZGEgc2FkZWNlIHN0aWNreSBsb2dvIGfDg8K2csODwrxuc8ODwrxuLCBkacOEwp9lcmxlcmkgZ2l6bGVuc2luICovXHJcbi5sYW5kaW5nLWhlYWRlcltkYXRhLWt0LXN0aWNreT1cIm9uXCJdIC5sb2dvLWRlZmF1bHQge1xyXG4gICAgZGlzcGxheTogbm9uZSAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4ubGFuZGluZy1oZWFkZXJbZGF0YS1rdC1zdGlja3k9XCJvblwiXSAubG9nby1zdGlja3kge1xyXG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi8qIFN0aWNreSBkZcOEwp9pbGtlbiBzdGlja3kgbG9nbyBnaXpsaSBvbHN1biAqL1xyXG4ubGFuZGluZy1oZWFkZXI6bm90KFtkYXRhLWt0LXN0aWNreT1cIm9uXCJdKSAubG9nby1zdGlja3kge1xyXG4gICAgZGlzcGxheTogbm9uZSAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4uZ2FsbGVyeS1ncmlkIHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4LXdyYXA6IHdyYXA7XHJcbiAgICBnYXA6IDFyZW07XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxufVxyXG5cclxuLmdhbGxlcnktaXRlbSB7XHJcbiAgICB3aWR0aDogMjgwcHg7XHJcbiAgICAvKiDDg8KWbmNla2kgZGXDhMKfZXJkZW4gZGFoYSBiw4PCvHnDg8K8ayAqL1xyXG4gICAgbWF4LXdpZHRoOiAzMjBweDtcclxufVxyXG5cclxuLmdhbGxlcnktaXRlbSBpbWcge1xyXG4gICAgIHdpZHRoOiA4MCU7IFxyXG4gICAgLyogaGVpZ2h0OiAyMjBweDsgKi9cclxuICAgIG9iamVjdC1maXQ6IGNvdmVyO1xyXG59XHJcblxyXG4ubGlnaHRib3gtYmFja2Ryb3AsXHJcbi5saWdodGJveCB7XHJcbiAgICB6LWluZGV4OiAyMDAwICFpbXBvcnRhbnQ7XHJcbiAgICBwb3NpdGlvbjogZml4ZWQgIWltcG9ydGFudDtcclxufVxyXG5cclxuLmNhcm91c2VsLWl0ZW0ge1xyXG4gICAgcGFkZGluZzogMnJlbSAwO1xyXG4gICAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIDEuNXMgZWFzZS1pbi1vdXQ7XHJcbiAgICAvKiAxLjUgc2FuaXllIHPDg8K8cmVkZSBrYXlhciAqL1xyXG59XHJcblxyXG4vKiBDYXJvdXNlbCBva2xhcsOEwrFuw4TCsSBrb3l1bGHDhcKfdMOEwrFyICovXHJcbi8qIENhcm91c2VsIG9rbGFyw4TCsW7DhMKxIMODwqdlcsODwqdldmVzaXogdmUgZGFoYSBiw4PCvHnDg8K8ayB5YXAgKi9cclxuLmNhcm91c2VsLWNvbnRyb2wtcHJldi1pY29uLFxyXG4uY2Fyb3VzZWwtY29udHJvbC1uZXh0LWljb24ge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzIyMiAhaW1wb3J0YW50O1xyXG4gICAgb3BhY2l0eTogMTtcclxuICAgIGJveC1zaGFkb3c6IG5vbmU7XHJcbiAgICB3aWR0aDogM3JlbTtcclxuICAgIGhlaWdodDogM3JlbTtcclxuICAgIGJhY2tncm91bmQtc2l6ZTogNzAlIDcwJTtcclxuICAgIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcclxufVxyXG5cclxuLnNjcm9sbC1saXN0IHtcclxuICBtYXgtaGVpZ2h0OiAzNTBweDtcclxuICBvdmVyZmxvdy15OiBhdXRvO1xyXG4gIHBhZGRpbmctcmlnaHQ6IDRweDtcclxufVxyXG5cclxuLyogU29uIGR1eXVydSBpw4PCp2luIHlhbsOEwrFwIHPDg8K2bm1lIGFuaW1hc3lvbnUgKi9cclxuQGtleWZyYW1lcyB5YW5pcFNvbiB7XHJcbiAgMCUsIDEwMCUgeyBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmYmU2OyB9XHJcbiAgNTAlIHsgYmFja2dyb3VuZC1jb2xvcjogI2M1ZjBmYTsgfVxyXG5cclxufVxyXG5cclxuLnNvbi1kdXl1cnUteWFuaXAtc29uIHtcclxuICBhbmltYXRpb246IHlhbmlwU29uIDFzIGluZmluaXRlO1xyXG4gIHRyYW5zaXRpb246IGJhY2tncm91bmQtY29sb3IgMC4xcztcclxuICBib3JkZXItcmFkaXVzOiA4cHg7IC8qIMOEwrBzdGVkacOEwp9pbml6IGRlw4TCn2VyaSB2ZXJlYmlsaXJzaW5peiAqL1xyXG59Il0sInNvdXJjZVJvb3QiOiIifQ== */"]
    });
  }
  return AnasayfaComponent;
})();

/***/ },

/***/ 8622
/*!**********************************************!*\
  !*** ./src/app/services/anasayfa.service.ts ***!
  \**********************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AnasayfaService: () => (/* binding */ AnasayfaService)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 1817);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ 698);


let AnasayfaService = /*#__PURE__*/(() => {
  class AnasayfaService {
    http;
    apiUrl = '/api/home';
    constructor(http) {
      this.http = http;
    }
    footerLinks() {
      return this.http.get(this.apiUrl + '/footerLinks');
    }
    static ɵfac = function AnasayfaService_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || AnasayfaService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__.HttpClient));
    };
    static ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
      token: AnasayfaService,
      factory: AnasayfaService.ɵfac,
      providedIn: 'root'
    });
  }
  return AnasayfaService;
})();

/***/ },

/***/ 5841
/*!*******************************************************!*\
  !*** ./node_modules/file-saver/dist/FileSaver.min.js ***!
  \*******************************************************/
(module, exports) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;(function (a, b) {
  if (true) !(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_FACTORY__ = (b),
		__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
		(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
		__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));else // removed by dead control flow
{}
})(this, function () {
  "use strict";

  function b(a, b) {
    return "undefined" == typeof b ? b = {
      autoBom: !1
    } : "object" != typeof b && (console.warn("Deprecated: Expected third argument to be a object"), b = {
      autoBom: !b
    }), b.autoBom && /^\s*(?:text\/\S*|application\/xml|\S*\/\S*\+xml)\s*;.*charset\s*=\s*utf-8/i.test(a.type) ? new Blob(["\uFEFF", a], {
      type: a.type
    }) : a;
  }
  function c(a, b, c) {
    var d = new XMLHttpRequest();
    d.open("GET", a), d.responseType = "blob", d.onload = function () {
      g(d.response, b, c);
    }, d.onerror = function () {
      console.error("could not download file");
    }, d.send();
  }
  function d(a) {
    var b = new XMLHttpRequest();
    b.open("HEAD", a, !1);
    try {
      b.send();
    } catch (a) {}
    return 200 <= b.status && 299 >= b.status;
  }
  function e(a) {
    try {
      a.dispatchEvent(new MouseEvent("click"));
    } catch (c) {
      var b = document.createEvent("MouseEvents");
      b.initMouseEvent("click", !0, !0, window, 0, 0, 0, 80, 20, !1, !1, !1, !1, 0, null), a.dispatchEvent(b);
    }
  }
  var f = "object" == typeof window && window.window === window ? window : "object" == typeof self && self.self === self ? self : "object" == typeof global && global.global === global ? global : void 0,
    a = f.navigator && /Macintosh/.test(navigator.userAgent) && /AppleWebKit/.test(navigator.userAgent) && !/Safari/.test(navigator.userAgent),
    g = f.saveAs || ("object" != typeof window || window !== f ? function () {} : "download" in HTMLAnchorElement.prototype && !a ? function (b, g, h) {
      var i = f.URL || f.webkitURL,
        j = document.createElement("a");
      g = g || b.name || "download", j.download = g, j.rel = "noopener", "string" == typeof b ? (j.href = b, j.origin === location.origin ? e(j) : d(j.href) ? c(b, g, h) : e(j, j.target = "_blank")) : (j.href = i.createObjectURL(b), setTimeout(function () {
        i.revokeObjectURL(j.href);
      }, 4E4), setTimeout(function () {
        e(j);
      }, 0));
    } : "msSaveOrOpenBlob" in navigator ? function (f, g, h) {
      if (g = g || f.name || "download", "string" != typeof f) navigator.msSaveOrOpenBlob(b(f, h), g);else if (d(f)) c(f, g, h);else {
        var i = document.createElement("a");
        i.href = f, i.target = "_blank", setTimeout(function () {
          e(i);
        });
      }
    } : function (b, d, e, g) {
      if (g = g || open("", "_blank"), g && (g.document.title = g.document.body.innerText = "downloading..."), "string" == typeof b) return c(b, d, e);
      var h = "application/octet-stream" === b.type,
        i = /constructor/i.test(f.HTMLElement) || f.safari,
        j = /CriOS\/[\d]+/.test(navigator.userAgent);
      if ((j || h && i || a) && "undefined" != typeof FileReader) {
        var k = new FileReader();
        k.onloadend = function () {
          var a = k.result;
          a = j ? a : a.replace(/^data:[^;]*;/, "data:attachment/file;"), g ? g.location.href = a : location = a, g = null;
        }, k.readAsDataURL(b);
      } else {
        var l = f.URL || f.webkitURL,
          m = l.createObjectURL(b);
        g ? g.location = m : location.href = m, g = null, setTimeout(function () {
          l.revokeObjectURL(m);
        }, 4E4);
      }
    });
  f.saveAs = g.saveAs = g,  true && (module.exports = g);
});

/***/ },

/***/ 6736
/*!********************************************!*\
  !*** ./node_modules/ngx-lightbox/index.js ***!
  \********************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   LIGHTBOX_EVENT: () => (/* reexport safe */ _lightbox_event_service__WEBPACK_IMPORTED_MODULE_2__.LIGHTBOX_EVENT),
/* harmony export */   Lightbox: () => (/* reexport safe */ _lightbox_service__WEBPACK_IMPORTED_MODULE_0__.Lightbox),
/* harmony export */   LightboxConfig: () => (/* reexport safe */ _lightbox_config_service__WEBPACK_IMPORTED_MODULE_1__.LightboxConfig),
/* harmony export */   LightboxEvent: () => (/* reexport safe */ _lightbox_event_service__WEBPACK_IMPORTED_MODULE_2__.LightboxEvent),
/* harmony export */   LightboxModule: () => (/* reexport safe */ _lightbox_module__WEBPACK_IMPORTED_MODULE_3__.LightboxModule)
/* harmony export */ });
/* harmony import */ var _lightbox_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./lightbox.service */ 7914);
/* harmony import */ var _lightbox_config_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./lightbox-config.service */ 1967);
/* harmony import */ var _lightbox_event_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./lightbox-event.service */ 543);
/* harmony import */ var _lightbox_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./lightbox.module */ 497);





/***/ },

/***/ 1967
/*!**************************************************************!*\
  !*** ./node_modules/ngx-lightbox/lightbox-config.service.js ***!
  \**************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   LightboxConfig: () => (/* binding */ LightboxConfig)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 1817);


let LightboxConfig = /*#__PURE__*/(() => {
  class LightboxConfig {
    constructor() {
      this.fadeDuration = 0.7;
      this.resizeDuration = 0.5;
      this.fitImageInViewPort = true;
      this.positionFromTop = 20;
      this.showImageNumberLabel = false;
      this.alwaysShowNavOnTouchDevices = false;
      this.wrapAround = false;
      this.disableKeyboardNav = false;
      this.disableScrolling = false;
      this.centerVertically = false;
      this.enableTransition = true;
      this.albumLabel = 'Image %1 of %2';
      this.showZoom = false;
      this.showRotate = false;
      this.containerElementResolver = documentRef => documentRef.querySelector('body');
    }
  }
  LightboxConfig.ɵfac = function LightboxConfig_Factory(t) {
    return new (t || LightboxConfig)();
  };
  LightboxConfig.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
    token: LightboxConfig,
    factory: LightboxConfig.ɵfac
  });
  return LightboxConfig;
})();
(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && void 0;
})();

/***/ },

/***/ 543
/*!*************************************************************!*\
  !*** ./node_modules/ngx-lightbox/lightbox-event.service.js ***!
  \*************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   LIGHTBOX_EVENT: () => (/* binding */ LIGHTBOX_EVENT),
/* harmony export */   LightboxEvent: () => (/* binding */ LightboxEvent),
/* harmony export */   LightboxWindowRef: () => (/* binding */ LightboxWindowRef)
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs */ 819);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 1817);



const LIGHTBOX_EVENT = {
  CHANGE_PAGE: 1,
  CLOSE: 2,
  OPEN: 3,
  ZOOM_IN: 4,
  ZOOM_OUT: 5,
  ROTATE_LEFT: 6,
  ROTATE_RIGHT: 7
};
let LightboxEvent = /*#__PURE__*/(() => {
  class LightboxEvent {
    constructor() {
      this._lightboxEventSource = new rxjs__WEBPACK_IMPORTED_MODULE_0__.Subject();
      this.lightboxEvent$ = this._lightboxEventSource.asObservable();
    }
    broadcastLightboxEvent(event) {
      this._lightboxEventSource.next(event);
    }
  }
  LightboxEvent.ɵfac = function LightboxEvent_Factory(t) {
    return new (t || LightboxEvent)();
  };
  LightboxEvent.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({
    token: LightboxEvent,
    factory: LightboxEvent.ɵfac
  });
  return LightboxEvent;
})();
(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && void 0;
})();
function getWindow() {
  return window;
}
let LightboxWindowRef = /*#__PURE__*/(() => {
  class LightboxWindowRef {
    get nativeWindow() {
      return getWindow();
    }
  }
  LightboxWindowRef.ɵfac = function LightboxWindowRef_Factory(t) {
    return new (t || LightboxWindowRef)();
  };
  LightboxWindowRef.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({
    token: LightboxWindowRef,
    factory: LightboxWindowRef.ɵfac
  });
  return LightboxWindowRef;
})();
(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && void 0;
})();

/***/ },

/***/ 3763
/*!*****************************************************************!*\
  !*** ./node_modules/ngx-lightbox/lightbox-overlay.component.js ***!
  \*****************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   LightboxOverlayComponent: () => (/* binding */ LightboxOverlayComponent)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common */ 1817);
/* harmony import */ var _lightbox_event_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./lightbox-event.service */ 543);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 6124);





const _c0 = ["lb-overlay", ""];
let LightboxOverlayComponent = /*#__PURE__*/(() => {
  class LightboxOverlayComponent {
    constructor(_elemRef, _rendererRef, _lightboxEvent, _documentRef) {
      this._elemRef = _elemRef;
      this._rendererRef = _rendererRef;
      this._lightboxEvent = _lightboxEvent;
      this._documentRef = _documentRef;
      this.classList = 'lightboxOverlay animation fadeInOverlay';
      this._subscription = this._lightboxEvent.lightboxEvent$.subscribe(event => this._onReceivedEvent(event));
    }
    close() {
      // broadcast to itself and all others subscriber including the components
      this._lightboxEvent.broadcastLightboxEvent({
        id: _lightbox_event_service__WEBPACK_IMPORTED_MODULE_1__.LIGHTBOX_EVENT.CLOSE,
        data: null
      });
    }
    ngAfterViewInit() {
      const fadeDuration = this.options.fadeDuration;
      this._rendererRef.setStyle(this._elemRef.nativeElement, '-webkit-animation-duration', `${fadeDuration}s`);
      this._rendererRef.setStyle(this._elemRef.nativeElement, 'animation-duration', `${fadeDuration}s`);
      this._sizeOverlay();
    }
    onResize() {
      this._sizeOverlay();
    }
    ngOnDestroy() {
      this._subscription.unsubscribe();
    }
    _sizeOverlay() {
      const width = this._getOverlayWidth();
      const height = this._getOverlayHeight();
      this._rendererRef.setStyle(this._elemRef.nativeElement, 'width', `${width}px`);
      this._rendererRef.setStyle(this._elemRef.nativeElement, 'height', `${height}px`);
    }
    _onReceivedEvent(event) {
      switch (event.id) {
        case _lightbox_event_service__WEBPACK_IMPORTED_MODULE_1__.LIGHTBOX_EVENT.CLOSE:
          this._end();
          break;
        default:
          break;
      }
    }
    _end() {
      this.classList = 'lightboxOverlay animation fadeOutOverlay';
      // queue self destruction after the animation has finished
      // FIXME: not sure if there is any way better than this
      setTimeout(() => {
        this.cmpRef.destroy();
      }, this.options.fadeDuration * 1000);
    }
    _getOverlayWidth() {
      return Math.max(this._documentRef.body.scrollWidth, this._documentRef.body.offsetWidth, this._documentRef.documentElement.clientWidth, this._documentRef.documentElement.scrollWidth, this._documentRef.documentElement.offsetWidth);
    }
    _getOverlayHeight() {
      return Math.max(this._documentRef.body.scrollHeight, this._documentRef.body.offsetHeight, this._documentRef.documentElement.clientHeight, this._documentRef.documentElement.scrollHeight, this._documentRef.documentElement.offsetHeight);
    }
  }
  LightboxOverlayComponent.ɵfac = function LightboxOverlayComponent_Factory(t) {
    return new (t || LightboxOverlayComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_2__.ElementRef), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_2__.Renderer2), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_lightbox_event_service__WEBPACK_IMPORTED_MODULE_1__.LightboxEvent), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_common__WEBPACK_IMPORTED_MODULE_0__.DOCUMENT));
  };
  LightboxOverlayComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({
    type: LightboxOverlayComponent,
    selectors: [["", "lb-overlay", ""]],
    hostVars: 2,
    hostBindings: function LightboxOverlayComponent_HostBindings(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function LightboxOverlayComponent_click_HostBindingHandler() {
          return ctx.close();
        })("resize", function LightboxOverlayComponent_resize_HostBindingHandler() {
          return ctx.onResize();
        }, false, _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresolveWindow"]);
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵclassMap"](ctx.classList);
      }
    },
    inputs: {
      options: "options",
      cmpRef: "cmpRef"
    },
    attrs: _c0,
    decls: 0,
    vars: 0,
    template: function LightboxOverlayComponent_Template(rf, ctx) {},
    encapsulation: 2
  });
  return LightboxOverlayComponent;
})();
(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && void 0;
})();

/***/ },

/***/ 3954
/*!*********************************************************!*\
  !*** ./node_modules/ngx-lightbox/lightbox.component.js ***!
  \*********************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   LightboxComponent: () => (/* binding */ LightboxComponent)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common */ 1817);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 6124);
/* harmony import */ var _lightbox_event_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./lightbox-event.service */ 543);
/* harmony import */ var ngx_filesaver__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-filesaver */ 7227);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/platform-browser */ 436);









const _c0 = ["outerContainer"];
const _c1 = ["container"];
const _c2 = ["leftArrow"];
const _c3 = ["rightArrow"];
const _c4 = ["navArrow"];
const _c5 = ["dataContainer"];
const _c6 = ["image"];
const _c7 = ["caption"];
const _c8 = ["number"];
const _c9 = ["lb-content", ""];
let LightboxComponent = /*#__PURE__*/(() => {
  class LightboxComponent {
    constructor(_elemRef, _rendererRef, _lightboxEvent, _lightboxElem, _lightboxWindowRef, _fileSaverService, _sanitizer, _documentRef) {
      this._elemRef = _elemRef;
      this._rendererRef = _rendererRef;
      this._lightboxEvent = _lightboxEvent;
      this._lightboxElem = _lightboxElem;
      this._lightboxWindowRef = _lightboxWindowRef;
      this._fileSaverService = _fileSaverService;
      this._sanitizer = _sanitizer;
      this._documentRef = _documentRef;
      // initialize data
      this.options = this.options || {};
      this.album = this.album || [];
      this.currentImageIndex = this.currentImageIndex || 0;
      this._windowRef = this._lightboxWindowRef.nativeWindow;
      // control the interactive of the directive
      this.ui = {
        // control the appear of the reloader
        // false: image has loaded completely and ready to be shown
        // true: image is still loading
        showReloader: true,
        // control the appear of the nav arrow
        // the arrowNav is the parent of both left and right arrow
        // in some cases, the parent shows but the child does not show
        showLeftArrow: false,
        showRightArrow: false,
        showArrowNav: false,
        // control the appear of the zoom and rotate buttons
        showZoomButton: false,
        showRotateButton: false,
        // control whether to show the
        // page number or not
        showPageNumber: false,
        showCaption: false,
        // control whether to show the download button or not
        showDownloadButton: false,
        classList: 'lightbox animation fadeIn'
      };
      this.content = {
        pageNumber: ''
      };
      this._event = {};
      this._lightboxElem = this._elemRef;
      this._event.subscription = this._lightboxEvent.lightboxEvent$.subscribe(event => this._onReceivedEvent(event));
      this.rotate = 0;
    }
    ngOnInit() {
      this.album.forEach(album => {
        if (album.caption) {
          album.caption = this._sanitizer.sanitize(_angular_core__WEBPACK_IMPORTED_MODULE_1__.SecurityContext.HTML, album.caption);
        }
      });
    }
    ngAfterViewInit() {
      // need to init css value here, after the view ready
      // actually these values are always 0
      this._cssValue = {
        containerTopPadding: Math.round(this._getCssStyleValue(this._containerElem, 'padding-top')),
        containerRightPadding: Math.round(this._getCssStyleValue(this._containerElem, 'padding-right')),
        containerBottomPadding: Math.round(this._getCssStyleValue(this._containerElem, 'padding-bottom')),
        containerLeftPadding: Math.round(this._getCssStyleValue(this._containerElem, 'padding-left')),
        imageBorderWidthTop: Math.round(this._getCssStyleValue(this._imageElem, 'border-top-width')),
        imageBorderWidthBottom: Math.round(this._getCssStyleValue(this._imageElem, 'border-bottom-width')),
        imageBorderWidthLeft: Math.round(this._getCssStyleValue(this._imageElem, 'border-left-width')),
        imageBorderWidthRight: Math.round(this._getCssStyleValue(this._imageElem, 'border-right-width'))
      };
      if (this._validateInputData()) {
        this._prepareComponent();
        this._registerImageLoadingEvent();
      }
    }
    ngOnDestroy() {
      if (!this.options.disableKeyboardNav) {
        // unbind keyboard event
        this._disableKeyboardNav();
      }
      this._event.subscription.unsubscribe();
    }
    close($event) {
      $event.stopPropagation();
      if ($event.target.classList.contains('lightbox') || $event.target.classList.contains('lb-loader') || $event.target.classList.contains('lb-close')) {
        this._lightboxEvent.broadcastLightboxEvent({
          id: _lightbox_event_service__WEBPACK_IMPORTED_MODULE_2__.LIGHTBOX_EVENT.CLOSE,
          data: null
        });
      }
    }
    download($event) {
      $event.stopPropagation();
      const url = this.album[this.currentImageIndex].src;
      const downloadUrl = this.album[this.currentImageIndex].downloadUrl;
      const parts = url.split('/');
      const fileName = parts[parts.length - 1];
      const canvas = document.createElement('canvas');
      const ctx = canvas.getContext('2d');
      const preloader = new Image();
      const _this = this;
      preloader.onload = function () {
        // @ts-ignore
        canvas.width = this.naturalWidth;
        // @ts-ignore
        canvas.height = this.naturalHeight;
        // @ts-ignore
        ctx.drawImage(this, 0, 0);
        canvas.toBlob(function (blob) {
          _this._fileSaverService.save(blob, fileName);
        }, 'image/jpeg', 0.75);
      };
      preloader.crossOrigin = '';
      if (downloadUrl && downloadUrl.length > 0) preloader.src = this._sanitizer.sanitize(_angular_core__WEBPACK_IMPORTED_MODULE_1__.SecurityContext.URL, downloadUrl);else preloader.src = this._sanitizer.sanitize(_angular_core__WEBPACK_IMPORTED_MODULE_1__.SecurityContext.URL, url);
    }
    control($event) {
      $event.stopPropagation();
      let height;
      let width;
      if ($event.target.classList.contains('lb-turnLeft')) {
        this.rotate = this.rotate - 90;
        this._rotateContainer();
        this._calcTransformPoint();
        this._documentRef.getElementById('image').style.transform = `rotate(${this.rotate}deg)`;
        this._documentRef.getElementById('image').style.webkitTransform = `rotate(${this.rotate}deg)`;
        this._lightboxEvent.broadcastLightboxEvent({
          id: _lightbox_event_service__WEBPACK_IMPORTED_MODULE_2__.LIGHTBOX_EVENT.ROTATE_LEFT,
          data: null
        });
      } else if ($event.target.classList.contains('lb-turnRight')) {
        this.rotate = this.rotate + 90;
        this._rotateContainer();
        this._calcTransformPoint();
        this._documentRef.getElementById('image').style.transform = `rotate(${this.rotate}deg)`;
        this._documentRef.getElementById('image').style.webkitTransform = `rotate(${this.rotate}deg)`;
        this._lightboxEvent.broadcastLightboxEvent({
          id: _lightbox_event_service__WEBPACK_IMPORTED_MODULE_2__.LIGHTBOX_EVENT.ROTATE_RIGHT,
          data: null
        });
      } else if ($event.target.classList.contains('lb-zoomOut')) {
        height = parseInt(this._documentRef.getElementById('outerContainer').style.height, 10) / 1.5;
        width = parseInt(this._documentRef.getElementById('outerContainer').style.width, 10) / 1.5;
        this._documentRef.getElementById('outerContainer').style.height = height + 'px';
        this._documentRef.getElementById('outerContainer').style.width = width + 'px';
        height = parseInt(this._documentRef.getElementById('image').style.height, 10) / 1.5;
        width = parseInt(this._documentRef.getElementById('image').style.width, 10) / 1.5;
        this._documentRef.getElementById('image').style.height = height + 'px';
        this._documentRef.getElementById('image').style.width = width + 'px';
        this._lightboxEvent.broadcastLightboxEvent({
          id: _lightbox_event_service__WEBPACK_IMPORTED_MODULE_2__.LIGHTBOX_EVENT.ZOOM_OUT,
          data: null
        });
      } else if ($event.target.classList.contains('lb-zoomIn')) {
        height = parseInt(this._documentRef.getElementById('outerContainer').style.height, 10) * 1.5;
        width = parseInt(this._documentRef.getElementById('outerContainer').style.width, 10) * 1.5;
        this._documentRef.getElementById('outerContainer').style.height = height + 'px';
        this._documentRef.getElementById('outerContainer').style.width = width + 'px';
        height = parseInt(this._documentRef.getElementById('image').style.height, 10) * 1.5;
        width = parseInt(this._documentRef.getElementById('image').style.width, 10) * 1.5;
        this._documentRef.getElementById('image').style.height = height + 'px';
        this._documentRef.getElementById('image').style.width = width + 'px';
        this._lightboxEvent.broadcastLightboxEvent({
          id: _lightbox_event_service__WEBPACK_IMPORTED_MODULE_2__.LIGHTBOX_EVENT.ZOOM_IN,
          data: null
        });
      }
    }
    _rotateContainer() {
      let temp = this.rotate;
      if (temp < 0) {
        temp *= -1;
      }
      if (temp / 90 % 4 === 1 || temp / 90 % 4 === 3) {
        this._documentRef.getElementById('outerContainer').style.height = this._documentRef.getElementById('image').style.width;
        this._documentRef.getElementById('outerContainer').style.width = this._documentRef.getElementById('image').style.height;
        this._documentRef.getElementById('container').style.height = this._documentRef.getElementById('image').style.width;
        this._documentRef.getElementById('container').style.width = this._documentRef.getElementById('image').style.height;
      } else {
        this._documentRef.getElementById('outerContainer').style.height = this._documentRef.getElementById('image').style.height;
        this._documentRef.getElementById('outerContainer').style.width = this._documentRef.getElementById('image').style.width;
        this._documentRef.getElementById('container').style.height = this._documentRef.getElementById('image').style.width;
        this._documentRef.getElementById('container').style.width = this._documentRef.getElementById('image').style.height;
      }
    }
    _resetImage() {
      this.rotate = 0;
      this._documentRef.getElementById('image').style.transform = `rotate(${this.rotate}deg)`;
      this._documentRef.getElementById('image').style.webkitTransform = `rotate(${this.rotate}deg)`;
    }
    _calcTransformPoint() {
      let height = parseInt(this._documentRef.getElementById('image').style.height, 10);
      let width = parseInt(this._documentRef.getElementById('image').style.width, 10);
      let temp = this.rotate % 360;
      if (temp < 0) {
        temp = 360 + temp;
      }
      if (temp === 90) {
        this._documentRef.getElementById('image').style.transformOrigin = height / 2 + 'px ' + height / 2 + 'px';
      } else if (temp === 180) {
        this._documentRef.getElementById('image').style.transformOrigin = width / 2 + 'px ' + height / 2 + 'px';
      } else if (temp === 270) {
        this._documentRef.getElementById('image').style.transformOrigin = width / 2 + 'px ' + width / 2 + 'px';
      }
    }
    nextImage() {
      if (this.album.length === 1) {
        return;
      } else if (this.currentImageIndex === this.album.length - 1) {
        this._changeImage(0);
      } else {
        this._changeImage(this.currentImageIndex + 1);
      }
    }
    prevImage() {
      if (this.album.length === 1) {
        return;
      } else if (this.currentImageIndex === 0 && this.album.length > 1) {
        this._changeImage(this.album.length - 1);
      } else {
        this._changeImage(this.currentImageIndex - 1);
      }
    }
    _validateInputData() {
      if (this.album && this.album instanceof Array && this.album.length > 0) {
        for (let i = 0; i < this.album.length; i++) {
          // check whether each _nside
          // album has src data or not
          if (this.album[i].src) {
            continue;
          }
          throw new Error('One of the album data does not have source data');
        }
      } else {
        throw new Error('No album data or album data is not correct in type');
      }
      // to prevent data understand as string
      // convert it to number
      if (isNaN(this.currentImageIndex)) {
        throw new Error('Current image index is not a number');
      } else {
        this.currentImageIndex = Number(this.currentImageIndex);
      }
      return true;
    }
    _registerImageLoadingEvent() {
      const preloader = new Image();
      preloader.onload = () => {
        this._onLoadImageSuccess();
      };
      const src = this.album[this.currentImageIndex].src;
      preloader.src = this._sanitizer.sanitize(_angular_core__WEBPACK_IMPORTED_MODULE_1__.SecurityContext.URL, src);
    }
    /**
     * Fire when the image is loaded
     */
    _onLoadImageSuccess() {
      if (!this.options.disableKeyboardNav) {
        // unbind keyboard event during transition
        this._disableKeyboardNav();
      }
      let imageHeight;
      let imageWidth;
      let maxImageHeight;
      let maxImageWidth;
      let windowHeight;
      let windowWidth;
      let naturalImageWidth;
      let naturalImageHeight;
      // set default width and height of image to be its natural
      imageWidth = naturalImageWidth = this._imageElem.nativeElement.naturalWidth;
      imageHeight = naturalImageHeight = this._imageElem.nativeElement.naturalHeight;
      if (this.options.fitImageInViewPort) {
        windowWidth = this._windowRef.innerWidth;
        windowHeight = this._windowRef.innerHeight;
        maxImageWidth = windowWidth - this._cssValue.containerLeftPadding - this._cssValue.containerRightPadding - this._cssValue.imageBorderWidthLeft - this._cssValue.imageBorderWidthRight - 20;
        maxImageHeight = windowHeight - this._cssValue.containerTopPadding - this._cssValue.containerTopPadding - this._cssValue.imageBorderWidthTop - this._cssValue.imageBorderWidthBottom - 120;
        if (naturalImageWidth > maxImageWidth || naturalImageHeight > maxImageHeight) {
          if (naturalImageWidth / maxImageWidth > naturalImageHeight / maxImageHeight) {
            imageWidth = maxImageWidth;
            imageHeight = Math.round(naturalImageHeight / (naturalImageWidth / imageWidth));
          } else {
            imageHeight = maxImageHeight;
            imageWidth = Math.round(naturalImageWidth / (naturalImageHeight / imageHeight));
          }
        }
        this._rendererRef.setStyle(this._imageElem.nativeElement, 'width', `${imageWidth}px`);
        this._rendererRef.setStyle(this._imageElem.nativeElement, 'height', `${imageHeight}px`);
      }
      this._sizeContainer(imageWidth, imageHeight);
      if (this.options.centerVertically) {
        this._centerVertically(imageWidth, imageHeight);
      }
    }
    _centerVertically(imageWidth, imageHeight) {
      const scrollOffset = this._documentRef.documentElement.scrollTop;
      const windowHeight = this._windowRef.innerHeight;
      const viewOffset = windowHeight / 2 - imageHeight / 2;
      const topDistance = scrollOffset + viewOffset;
      this._rendererRef.setStyle(this._lightboxElem.nativeElement, 'top', `${topDistance}px`);
    }
    _sizeContainer(imageWidth, imageHeight) {
      const oldWidth = this._outerContainerElem.nativeElement.offsetWidth;
      const oldHeight = this._outerContainerElem.nativeElement.offsetHeight;
      const newWidth = imageWidth + this._cssValue.containerRightPadding + this._cssValue.containerLeftPadding + this._cssValue.imageBorderWidthLeft + this._cssValue.imageBorderWidthRight;
      const newHeight = imageHeight + this._cssValue.containerTopPadding + this._cssValue.containerBottomPadding + this._cssValue.imageBorderWidthTop + this._cssValue.imageBorderWidthBottom;
      // make sure that distances are large enough for transitionend event to be fired, at least 5px.
      if (Math.abs(oldWidth - newWidth) + Math.abs(oldHeight - newHeight) > 5) {
        this._rendererRef.setStyle(this._outerContainerElem.nativeElement, 'width', `${newWidth}px`);
        this._rendererRef.setStyle(this._outerContainerElem.nativeElement, 'height', `${newHeight}px`);
        // bind resize event to outer container
        // use enableTransition to prevent infinite loader
        if (this.options.enableTransition) {
          this._event.transitions = [];
          ['transitionend', 'webkitTransitionEnd', 'oTransitionEnd', 'MSTransitionEnd'].forEach(eventName => {
            this._event.transitions.push(this._rendererRef.listen(this._outerContainerElem.nativeElement, eventName, event => {
              if (event.target === event.currentTarget) {
                this._postResize(newWidth, newHeight);
              }
            }));
          });
        } else {
          this._postResize(newWidth, newHeight);
        }
      } else {
        this._postResize(newWidth, newHeight);
      }
    }
    _postResize(newWidth, newHeight) {
      // unbind resize event
      if (Array.isArray(this._event.transitions)) {
        this._event.transitions.forEach(eventHandler => {
          eventHandler();
        });
        this._event.transitions = [];
      }
      this._rendererRef.setStyle(this._dataContainerElem.nativeElement, 'width', `${newWidth}px`);
      this._showImage();
    }
    _showImage() {
      this.ui.showReloader = false;
      this._updateNav();
      this._updateDetails();
      if (!this.options.disableKeyboardNav) {
        this._enableKeyboardNav();
      }
    }
    _prepareComponent() {
      // add css3 animation
      this._addCssAnimation();
      // position the image according to user's option
      this._positionLightBox();
      // update controls visibility on next view generation
      setTimeout(() => {
        this.ui.showZoomButton = this.options.showZoom;
        this.ui.showRotateButton = this.options.showRotate;
        this.ui.showDownloadButton = this.options.showDownloadButton;
      }, 0);
    }
    _positionLightBox() {
      // @see https://stackoverflow.com/questions/3464876/javascript-get-window-x-y-position-for-scroll
      const top = (this._windowRef.pageYOffset || this._documentRef.documentElement.scrollTop) + this.options.positionFromTop;
      const left = this._windowRef.pageXOffset || this._documentRef.documentElement.scrollLeft;
      if (!this.options.centerVertically) {
        this._rendererRef.setStyle(this._lightboxElem.nativeElement, 'top', `${top}px`);
      }
      this._rendererRef.setStyle(this._lightboxElem.nativeElement, 'left', `${left}px`);
      this._rendererRef.setStyle(this._lightboxElem.nativeElement, 'display', 'block');
      // disable scrolling of the page while open
      if (this.options.disableScrolling) {
        this._rendererRef.addClass(this._documentRef.documentElement, 'lb-disable-scrolling');
      }
    }
    /**
     * addCssAnimation add css3 classes for animate lightbox
     */
    _addCssAnimation() {
      const resizeDuration = this.options.resizeDuration;
      const fadeDuration = this.options.fadeDuration;
      this._rendererRef.setStyle(this._lightboxElem.nativeElement, '-webkit-animation-duration', `${fadeDuration}s`);
      this._rendererRef.setStyle(this._lightboxElem.nativeElement, 'animation-duration', `${fadeDuration}s`);
      this._rendererRef.setStyle(this._outerContainerElem.nativeElement, '-webkit-transition-duration', `${resizeDuration}s`);
      this._rendererRef.setStyle(this._outerContainerElem.nativeElement, 'transition-duration', `${resizeDuration}s`);
      this._rendererRef.setStyle(this._dataContainerElem.nativeElement, '-webkit-animation-duration', `${fadeDuration}s`);
      this._rendererRef.setStyle(this._dataContainerElem.nativeElement, 'animation-duration', `${fadeDuration}s`);
      this._rendererRef.setStyle(this._imageElem.nativeElement, '-webkit-animation-duration', `${fadeDuration}s`);
      this._rendererRef.setStyle(this._imageElem.nativeElement, 'animation-duration', `${fadeDuration}s`);
      this._rendererRef.setStyle(this._captionElem.nativeElement, '-webkit-animation-duration', `${fadeDuration}s`);
      this._rendererRef.setStyle(this._captionElem.nativeElement, 'animation-duration', `${fadeDuration}s`);
      this._rendererRef.setStyle(this._numberElem.nativeElement, '-webkit-animation-duration', `${fadeDuration}s`);
      this._rendererRef.setStyle(this._numberElem.nativeElement, 'animation-duration', `${fadeDuration}s`);
    }
    _end() {
      this.ui.classList = 'lightbox animation fadeOut';
      if (this.options.disableScrolling) {
        this._rendererRef.removeClass(this._documentRef.documentElement, 'lb-disable-scrolling');
      }
      setTimeout(() => {
        this.cmpRef.destroy();
      }, this.options.fadeDuration * 1000);
    }
    _updateDetails() {
      // update the caption
      if (typeof this.album[this.currentImageIndex].caption !== 'undefined' && this.album[this.currentImageIndex].caption !== '') {
        this.ui.showCaption = true;
      }
      // update the page number if user choose to do so
      // does not perform numbering the page if the
      // array length in album <= 1
      if (this.album.length > 1 && this.options.showImageNumberLabel) {
        this.ui.showPageNumber = true;
        this.content.pageNumber = this._albumLabel();
      }
    }
    _albumLabel() {
      // due to {this.currentImageIndex} is set from 0 to {this.album.length} - 1
      return this.options.albumLabel.replace(/%1/g, Number(this.currentImageIndex + 1)).replace(/%2/g, this.album.length);
    }
    _changeImage(newIndex) {
      this._resetImage();
      this.currentImageIndex = newIndex;
      this._hideImage();
      this._registerImageLoadingEvent();
      this._lightboxEvent.broadcastLightboxEvent({
        id: _lightbox_event_service__WEBPACK_IMPORTED_MODULE_2__.LIGHTBOX_EVENT.CHANGE_PAGE,
        data: newIndex
      });
    }
    _hideImage() {
      this.ui.showReloader = true;
      this.ui.showArrowNav = false;
      this.ui.showLeftArrow = false;
      this.ui.showRightArrow = false;
      this.ui.showPageNumber = false;
      this.ui.showCaption = false;
    }
    _updateNav() {
      let alwaysShowNav = false;
      // check to see the browser support touch event
      try {
        this._documentRef.createEvent('TouchEvent');
        alwaysShowNav = this.options.alwaysShowNavOnTouchDevices ? true : false;
      } catch (e) {
        // noop
      }
      // initially show the arrow nav
      // which is the parent of both left and right nav
      this._showArrowNav();
      if (this.album.length > 1) {
        if (this.options.wrapAround) {
          if (alwaysShowNav) {
            // alternatives this.$lightbox.find('.lb-prev, .lb-next').css('opacity', '1');
            this._rendererRef.setStyle(this._leftArrowElem.nativeElement, 'opacity', '1');
            this._rendererRef.setStyle(this._rightArrowElem.nativeElement, 'opacity', '1');
          }
          // alternatives this.$lightbox.find('.lb-prev, .lb-next').show();
          this._showLeftArrowNav();
          this._showRightArrowNav();
        } else {
          if (this.currentImageIndex > 0) {
            // alternatives this.$lightbox.find('.lb-prev').show();
            this._showLeftArrowNav();
            if (alwaysShowNav) {
              // alternatives this.$lightbox.find('.lb-prev').css('opacity', '1');
              this._rendererRef.setStyle(this._leftArrowElem.nativeElement, 'opacity', '1');
            }
          }
          if (this.currentImageIndex < this.album.length - 1) {
            // alternatives this.$lightbox.find('.lb-next').show();
            this._showRightArrowNav();
            if (alwaysShowNav) {
              // alternatives this.$lightbox.find('.lb-next').css('opacity', '1');
              this._rendererRef.setStyle(this._rightArrowElem.nativeElement, 'opacity', '1');
            }
          }
        }
      }
    }
    _showLeftArrowNav() {
      this.ui.showLeftArrow = true;
    }
    _showRightArrowNav() {
      this.ui.showRightArrow = true;
    }
    _showArrowNav() {
      this.ui.showArrowNav = this.album.length !== 1;
    }
    _enableKeyboardNav() {
      this._event.keyup = this._rendererRef.listen('document', 'keyup', event => {
        this._keyboardAction(event);
      });
    }
    _disableKeyboardNav() {
      if (this._event.keyup) {
        this._event.keyup();
      }
    }
    _keyboardAction($event) {
      const KEYCODE_ESC = 27;
      const KEYCODE_LEFTARROW = 37;
      const KEYCODE_RIGHTARROW = 39;
      const keycode = $event.keyCode;
      const key = String.fromCharCode(keycode).toLowerCase();
      if (keycode === KEYCODE_ESC || key.match(/x|o|c/)) {
        this._lightboxEvent.broadcastLightboxEvent({
          id: _lightbox_event_service__WEBPACK_IMPORTED_MODULE_2__.LIGHTBOX_EVENT.CLOSE,
          data: null
        });
      } else if (key === 'p' || keycode === KEYCODE_LEFTARROW) {
        if (this.currentImageIndex !== 0) {
          this._changeImage(this.currentImageIndex - 1);
        } else if (this.options.wrapAround && this.album.length > 1) {
          this._changeImage(this.album.length - 1);
        }
      } else if (key === 'n' || keycode === KEYCODE_RIGHTARROW) {
        if (this.currentImageIndex !== this.album.length - 1) {
          this._changeImage(this.currentImageIndex + 1);
        } else if (this.options.wrapAround && this.album.length > 1) {
          this._changeImage(0);
        }
      }
    }
    _getCssStyleValue(elem, propertyName) {
      return parseFloat(this._windowRef.getComputedStyle(elem.nativeElement, null).getPropertyValue(propertyName));
    }
    _onReceivedEvent(event) {
      switch (event.id) {
        case _lightbox_event_service__WEBPACK_IMPORTED_MODULE_2__.LIGHTBOX_EVENT.CLOSE:
          this._end();
          break;
        default:
          break;
      }
    }
  }
  LightboxComponent.ɵfac = function LightboxComponent_Factory(t) {
    return new (t || LightboxComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__.ElementRef), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__.Renderer2), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_lightbox_event_service__WEBPACK_IMPORTED_MODULE_2__.LightboxEvent), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__.ElementRef), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_lightbox_event_service__WEBPACK_IMPORTED_MODULE_2__.LightboxWindowRef), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](ngx_filesaver__WEBPACK_IMPORTED_MODULE_3__.FileSaverService), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_platform_browser__WEBPACK_IMPORTED_MODULE_4__.DomSanitizer), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_common__WEBPACK_IMPORTED_MODULE_0__.DOCUMENT));
  };
  LightboxComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
    type: LightboxComponent,
    selectors: [["", "lb-content", ""]],
    viewQuery: function LightboxComponent_Query(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵviewQuery"](_c0, 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵviewQuery"](_c1, 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵviewQuery"](_c2, 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵviewQuery"](_c3, 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵviewQuery"](_c4, 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵviewQuery"](_c5, 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵviewQuery"](_c6, 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵviewQuery"](_c7, 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵviewQuery"](_c8, 5);
      }
      if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵloadQuery"]()) && (ctx._outerContainerElem = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵloadQuery"]()) && (ctx._containerElem = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵloadQuery"]()) && (ctx._leftArrowElem = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵloadQuery"]()) && (ctx._rightArrowElem = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵloadQuery"]()) && (ctx._navArrowElem = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵloadQuery"]()) && (ctx._dataContainerElem = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵloadQuery"]()) && (ctx._imageElem = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵloadQuery"]()) && (ctx._captionElem = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵloadQuery"]()) && (ctx._numberElem = _t.first);
      }
    },
    hostVars: 2,
    hostBindings: function LightboxComponent_HostBindings(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function LightboxComponent_click_HostBindingHandler($event) {
          return ctx.close($event);
        });
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassMap"](ctx.ui.classList);
      }
    },
    inputs: {
      album: "album",
      currentImageIndex: "currentImageIndex",
      options: "options",
      cmpRef: "cmpRef"
    },
    attrs: _c9,
    decls: 34,
    vars: 14,
    consts: [["id", "outerContainer", 1, "lb-outerContainer", "transition"], ["outerContainer", ""], ["id", "container", 1, "lb-container"], ["container", ""], ["id", "image", 1, "lb-image", "animation", "fadeIn", 3, "src", "hidden"], ["image", ""], [1, "lb-nav", 3, "hidden"], ["navArrow", ""], [1, "lb-prev", 3, "hidden", "click"], ["leftArrow", ""], [1, "lb-next", 3, "hidden", "click"], ["rightArrow", ""], [1, "lb-loader", 3, "hidden", "click"], [1, "lb-cancel"], [1, "lb-dataContainer", 3, "hidden"], ["dataContainer", ""], [1, "lb-data"], [1, "lb-details"], [1, "lb-caption", "animation", "fadeIn", 3, "hidden", "innerHtml"], ["caption", ""], [1, "lb-number", "animation", "fadeIn", 3, "hidden"], ["number", ""], [1, "lb-controlContainer"], [1, "lb-closeContainer"], [1, "lb-close", 3, "click"], [1, "lb-downloadContainer", 3, "hidden"], [1, "lb-download", 3, "click"], [1, "lb-turnContainer", 3, "hidden"], [1, "lb-turnLeft", 3, "click"], [1, "lb-turnRight", 3, "click"], [1, "lb-zoomContainer", 3, "hidden"], [1, "lb-zoomOut", 3, "click"], [1, "lb-zoomIn", 3, "click"]],
    template: function LightboxComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0, 1)(2, "div", 2, 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](4, "img", 4, 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "div", 6, 7)(8, "a", 8, 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function LightboxComponent_Template_a_click_8_listener() {
          return ctx.prevImage();
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "a", 10, 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function LightboxComponent_Template_a_click_10_listener() {
          return ctx.nextImage();
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function LightboxComponent_Template_div_click_12_listener($event) {
          return ctx.close($event);
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](13, "a", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](14, "div", 14, 15)(16, "div", 16)(17, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](18, "span", 18, 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](20, "span", 20, 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](22);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](23, "div", 22)(24, "div", 23)(25, "a", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function LightboxComponent_Template_a_click_25_listener($event) {
          return ctx.close($event);
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](26, "div", 25)(27, "a", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function LightboxComponent_Template_a_click_27_listener($event) {
          return ctx.download($event);
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](28, "div", 27)(29, "a", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function LightboxComponent_Template_a_click_29_listener($event) {
          return ctx.control($event);
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](30, "a", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function LightboxComponent_Template_a_click_30_listener($event) {
          return ctx.control($event);
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](31, "div", 30)(32, "a", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function LightboxComponent_Template_a_click_32_listener($event) {
          return ctx.control($event);
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](33, "a", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function LightboxComponent_Template_a_click_33_listener($event) {
          return ctx.control($event);
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()()();
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("src", ctx.album[ctx.currentImageIndex].src, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"])("hidden", ctx.ui.showReloader);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("hidden", !ctx.ui.showArrowNav);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("hidden", !ctx.ui.showLeftArrow);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("hidden", !ctx.ui.showRightArrow);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("hidden", !ctx.ui.showReloader);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("hidden", ctx.ui.showReloader);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("hidden", !ctx.ui.showCaption)("innerHtml", ctx.album[ctx.currentImageIndex].caption, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeHtml"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("hidden", !ctx.ui.showPageNumber);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx.content.pageNumber);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("hidden", !ctx.ui.showDownloadButton);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("hidden", !ctx.ui.showRotateButton);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("hidden", !ctx.ui.showZoomButton);
      }
    },
    encapsulation: 2
  });
  return LightboxComponent;
})();
(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && void 0;
})();

/***/ },

/***/ 497
/*!******************************************************!*\
  !*** ./node_modules/ngx-lightbox/lightbox.module.js ***!
  \******************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   LightboxModule: () => (/* binding */ LightboxModule)
/* harmony export */ });
/* harmony import */ var ngx_filesaver__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ngx-filesaver */ 7227);
/* harmony import */ var _lightbox_config_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./lightbox-config.service */ 1967);
/* harmony import */ var _lightbox_event_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./lightbox-event.service */ 543);
/* harmony import */ var _lightbox_overlay_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./lightbox-overlay.component */ 3763);
/* harmony import */ var _lightbox_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./lightbox.component */ 3954);
/* harmony import */ var _lightbox_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./lightbox.service */ 7914);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 1817);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 6124);








let LightboxModule = /*#__PURE__*/(() => {
  class LightboxModule {}
  LightboxModule.ɵfac = function LightboxModule_Factory(t) {
    return new (t || LightboxModule)();
  };
  LightboxModule.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdefineNgModule"]({
    type: LightboxModule
  });
  LightboxModule.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineInjector"]({
    providers: [_lightbox_service__WEBPACK_IMPORTED_MODULE_5__.Lightbox, _lightbox_config_service__WEBPACK_IMPORTED_MODULE_1__.LightboxConfig, _lightbox_event_service__WEBPACK_IMPORTED_MODULE_2__.LightboxEvent, _lightbox_event_service__WEBPACK_IMPORTED_MODULE_2__.LightboxWindowRef],
    imports: [ngx_filesaver__WEBPACK_IMPORTED_MODULE_0__.FileSaverModule]
  });
  return LightboxModule;
})();
(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && void 0;
})();
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵsetNgModuleScope"](LightboxModule, {
    declarations: [_lightbox_overlay_component__WEBPACK_IMPORTED_MODULE_3__.LightboxOverlayComponent, _lightbox_component__WEBPACK_IMPORTED_MODULE_4__.LightboxComponent],
    imports: [ngx_filesaver__WEBPACK_IMPORTED_MODULE_0__.FileSaverModule]
  });
})();

/***/ },

/***/ 7914
/*!*******************************************************!*\
  !*** ./node_modules/ngx-lightbox/lightbox.service.js ***!
  \*******************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Lightbox: () => (/* binding */ Lightbox)
/* harmony export */ });
/* harmony import */ var _lightbox_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./lightbox.component */ 3954);
/* harmony import */ var _lightbox_config_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./lightbox-config.service */ 1967);
/* harmony import */ var _lightbox_event_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./lightbox-event.service */ 543);
/* harmony import */ var _lightbox_overlay_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./lightbox-overlay.component */ 3763);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 1817);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 6124);









let Lightbox = /*#__PURE__*/(() => {
  class Lightbox {
    constructor(_componentFactoryResolver, _injector, _applicationRef, _lightboxConfig, _lightboxEvent, _documentRef) {
      this._componentFactoryResolver = _componentFactoryResolver;
      this._injector = _injector;
      this._applicationRef = _applicationRef;
      this._lightboxConfig = _lightboxConfig;
      this._lightboxEvent = _lightboxEvent;
      this._documentRef = _documentRef;
    }
    open(album, curIndex = 0, options = {}) {
      const overlayComponentRef = this._createComponent(_lightbox_overlay_component__WEBPACK_IMPORTED_MODULE_3__.LightboxOverlayComponent);
      const componentRef = this._createComponent(_lightbox_component__WEBPACK_IMPORTED_MODULE_0__.LightboxComponent);
      const newOptions = {};
      // broadcast open event
      this._lightboxEvent.broadcastLightboxEvent({
        id: _lightbox_event_service__WEBPACK_IMPORTED_MODULE_2__.LIGHTBOX_EVENT.OPEN
      });
      Object.assign(newOptions, this._lightboxConfig, options);
      // attach input to lightbox
      componentRef.instance.album = album;
      componentRef.instance.currentImageIndex = curIndex;
      componentRef.instance.options = newOptions;
      componentRef.instance.cmpRef = componentRef;
      // attach input to overlay
      overlayComponentRef.instance.options = newOptions;
      overlayComponentRef.instance.cmpRef = overlayComponentRef;
      // FIXME: not sure why last event is broadcasted (which is CLOSED) and make
      // lightbox can not be opened the second time.
      // Need to timeout so that the OPEN event is set before component is initialized
      setTimeout(() => {
        this._applicationRef.attachView(overlayComponentRef.hostView);
        this._applicationRef.attachView(componentRef.hostView);
        overlayComponentRef.onDestroy(() => {
          this._applicationRef.detachView(overlayComponentRef.hostView);
        });
        componentRef.onDestroy(() => {
          this._applicationRef.detachView(componentRef.hostView);
        });
        const containerElement = newOptions.containerElementResolver(this._documentRef);
        containerElement.appendChild(overlayComponentRef.location.nativeElement);
        containerElement.appendChild(componentRef.location.nativeElement);
      });
    }
    close() {
      if (this._lightboxEvent) {
        this._lightboxEvent.broadcastLightboxEvent({
          id: _lightbox_event_service__WEBPACK_IMPORTED_MODULE_2__.LIGHTBOX_EVENT.CLOSE
        });
      }
    }
    _createComponent(ComponentClass) {
      const factory = this._componentFactoryResolver.resolveComponentFactory(ComponentClass);
      const component = factory.create(this._injector);
      return component;
    }
  }
  Lightbox.ɵfac = function Lightbox_Factory(t) {
    return new (t || Lightbox)(_angular_common__WEBPACK_IMPORTED_MODULE_4__["ɵɵinject"](_angular_core__WEBPACK_IMPORTED_MODULE_5__.ComponentFactoryResolver), _angular_common__WEBPACK_IMPORTED_MODULE_4__["ɵɵinject"](_angular_common__WEBPACK_IMPORTED_MODULE_4__.Injector), _angular_common__WEBPACK_IMPORTED_MODULE_4__["ɵɵinject"](_angular_core__WEBPACK_IMPORTED_MODULE_5__.ApplicationRef), _angular_common__WEBPACK_IMPORTED_MODULE_4__["ɵɵinject"](_lightbox_config_service__WEBPACK_IMPORTED_MODULE_1__.LightboxConfig), _angular_common__WEBPACK_IMPORTED_MODULE_4__["ɵɵinject"](_lightbox_event_service__WEBPACK_IMPORTED_MODULE_2__.LightboxEvent), _angular_common__WEBPACK_IMPORTED_MODULE_4__["ɵɵinject"](_angular_common__WEBPACK_IMPORTED_MODULE_4__.DOCUMENT));
  };
  Lightbox.ɵprov = /*@__PURE__*/_angular_common__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineInjectable"]({
    token: Lightbox,
    factory: Lightbox.ɵfac
  });
  return Lightbox;
})();
(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && void 0;
})();

/***/ },

/***/ 7227
/*!***************************************************************!*\
  !*** ./node_modules/ngx-filesaver/fesm2020/ngx-filesaver.mjs ***!
  \***************************************************************/
(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   FileSaverDirective: () => (/* binding */ FileSaverDirective),
/* harmony export */   FileSaverModule: () => (/* binding */ FileSaverModule),
/* harmony export */   FileSaverService: () => (/* binding */ FileSaverService)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 1817);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 6124);
/* harmony import */ var file_saver__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! file-saver */ 5841);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ 698);





let FileSaverService = /*#__PURE__*/(() => {
  class FileSaverService {
    get isFileSaverSupported() {
      try {
        return !!new Blob();
      } catch (e) {
        return false;
      }
    }
    genType(fileName) {
      if (!fileName || fileName.lastIndexOf('.') === -1) {
        return 'text/plain';
      }
      const type = fileName.substr(fileName.lastIndexOf('.') + 1);
      switch (type) {
        case 'txt':
          return 'text/plain';
        case 'xml':
        case 'html':
          return `text/${type}`;
        case 'json':
          return 'octet/stream';
        default:
          return `application/${type}`;
      }
    }
    save(blob, fileName, filtType, option) {
      if (!blob) {
        throw new Error('Data argument should be a blob instance');
      }
      const file = new Blob([blob], {
        type: filtType || blob.type || this.genType(fileName)
      });
      (0,file_saver__WEBPACK_IMPORTED_MODULE_2__.saveAs)(file, decodeURI(fileName || 'download'), option);
    }
    saveText(txt, fileName, option) {
      const blob = new Blob([txt]);
      this.save(blob, fileName, undefined, option);
    }
  }
  FileSaverService.ɵfac = function FileSaverService_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || FileSaverService)();
  };
  FileSaverService.ɵprov = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
    token: FileSaverService,
    factory: FileSaverService.ɵfac,
    providedIn: 'root'
  });
  return FileSaverService;
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && void 0;
})();
let FileSaverDirective = /*#__PURE__*/(() => {
  class FileSaverDirective {
    constructor(el, fss, httpClient) {
      this.el = el;
      this.fss = fss;
      this.httpClient = httpClient;
      this.method = 'GET';
      this.success = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
      this.error = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
      if (!fss.isFileSaverSupported) {
        el.nativeElement.classList.add(`filesaver__not-support`);
      }
    }
    getName(res) {
      return decodeURI(this.fileName || res.headers.get('filename') || res.headers.get('x-filename') || '');
    }
    _click() {
      if (!this.fss.isFileSaverSupported) {
        return;
      }
      let req = this.http;
      if (!req) {
        let params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_3__.HttpParams();
        const query = this.query || {};
        // tslint:disable-next-line:forin
        for (const item in query) {
          params = params.set(item, query[item]);
        }
        req = this.httpClient.request(this.method, this.url, {
          observe: 'response',
          responseType: 'blob',
          headers: this.header,
          params
        });
      }
      this.setDisabled(true);
      req.subscribe(res => {
        if (res.status !== 200 || res.body.size <= 0) {
          this.error.emit(res);
          return;
        }
        this.fss.save(res.body, this.getName(res), undefined, this.fsOptions);
        this.success.emit(res);
      }, err => this.error.emit(err), () => this.setDisabled(false));
    }
    setDisabled(status) {
      const el = this.el.nativeElement;
      el.disabled = status;
      el.classList[status ? 'add' : 'remove'](`filesaver__disabled`);
    }
  }
  FileSaverDirective.ɵfac = function FileSaverDirective_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || FileSaverDirective)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__.ElementRef), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](FileSaverService), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_3__.HttpClient));
  };
  FileSaverDirective.ɵdir = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineDirective"]({
    type: FileSaverDirective,
    selectors: [["", "fileSaver", ""]],
    hostBindings: function FileSaverDirective_HostBindings(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function FileSaverDirective_click_HostBindingHandler() {
          return ctx._click();
        });
      }
    },
    inputs: {
      method: "method",
      http: "http",
      query: "query",
      header: "header",
      url: "url",
      fileName: "fileName",
      fsOptions: "fsOptions"
    },
    outputs: {
      success: "success",
      error: "error"
    },
    exportAs: ["fileSaver"]
  });
  return FileSaverDirective;
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && void 0;
})();
let FileSaverModule = /*#__PURE__*/(() => {
  class FileSaverModule {}
  FileSaverModule.ɵfac = function FileSaverModule_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || FileSaverModule)();
  };
  FileSaverModule.ɵmod = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({
    type: FileSaverModule
  });
  FileSaverModule.ɵinj = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({});
  return FileSaverModule;
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && void 0;
})();

/**
 * Generated bundle index. Do not edit.
 */



/***/ }

}]);
//# sourceMappingURL=507.js.map