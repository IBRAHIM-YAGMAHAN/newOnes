"use strict";
(self["webpackChunkproject_template_ui"] = self["webpackChunkproject_template_ui"] || []).push([[261],{

/***/ 261
/*!*****************************************************!*\
  !*** ./src/app/components/giris/giris.component.ts ***!
  \*****************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   GirisComponent: () => (/* binding */ GirisComponent)
/* harmony export */ });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/forms */ 4456);
/* harmony import */ var ng_recaptcha__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ng-recaptcha */ 5981);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ 9748);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 1817);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 6124);
/* harmony import */ var _services_giris_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../services/giris.service */ 3068);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ 3305);
/* harmony import */ var _services_genel_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../services/genel.service */ 8033);
/* harmony import */ var _services_constants_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../services/constants.service */ 7135);










const _c0 = ["recaptchaRefLogin"];
const _c1 = ["recaptchaRefKayit"];
let GirisComponent = /*#__PURE__*/(() => {
  class GirisComponent {
    girisService;
    router;
    route;
    formBuilder;
    genelService;
    constantsService;
    yukleniyor = false;
    yukleniyorEdevlet = false;
    girisForm;
    recaptchaToken = null;
    kayitOlunuyor = false;
    step = 'giris';
    hatalar = {};
    suEposta = '';
    suTcKimlikNo = '';
    recaptchaComponentLogin;
    recaptchaComponentKayit;
    constructor(girisService, router, route, formBuilder, genelService, constantsService) {
      this.girisService = girisService;
      this.router = router;
      this.route = route;
      this.formBuilder = formBuilder;
      this.genelService = genelService;
      this.constantsService = constantsService;
      this.girisForm = this.formBuilder.group({
        tckimlikno: new _angular_forms__WEBPACK_IMPORTED_MODULE_0__.FormControl(''),
        sifre: new _angular_forms__WEBPACK_IMPORTED_MODULE_0__.FormControl(''),
        recaptcha: new _angular_forms__WEBPACK_IMPORTED_MODULE_0__.FormControl('')
      });
    }
    deger = '';
    ngOnInit() {
      localStorage.removeItem('auth');
      this.route.queryParams.subscribe(params => {
        const userUid = params['UserUid'];
        this.deger = params['deger'];
        const control = params['giris_durum'];
      });
    }
    onCaptchaResolved(event) {
      this.recaptchaToken = event;
    }
    girisYap() {
      this.yukleniyor = true;
      const tckimlikno = this.girisForm.controls['tckimlikno']?.value ?? "";
      const sifre = this.girisForm.controls['sifre']?.value ?? "";
      this.girisService.giris("" + tckimlikno, "" + sifre, "" + this.recaptchaToken).subscribe({
        next: res => {
          this.genelService.success("Giriş Başarılı.");
          localStorage.setItem(this.constantsService.APP_AUT, JSON.stringify(res.data));
          // Navigation'ı bir sonraki tick'e erteliyoruz ki localStorage kaydı tamamlansın ve guard kontrol edebilsin
          setTimeout(() => {
            this.router.navigateByUrl('/anasayfa');
          }, 50);
        },
        error: err => this.hataYonet(err),
        complete: () => {
          this.yukleniyor = false;
        }
      });
    }
    divOpenFnc(tip = '') {
      if (tip === 'giris') {
        this.recaptchaComponentLogin?.reset();
        this.recaptchaToken = null;
      }
      this.step = tip;
    }
    girisEdevletLink() {
      window.location.href = "https://giris.erbakan.edu.tr/giris?oto_giris=a7b8a3bd-e6e2-4947-bf5f-9ae6d8b6483e&uygulama_id=23";
    }
    dogrulaniyor = false;
    sifremiUnuttum() {}
    kayitOl() {}
    hataYazdir = [];
    hataYonet(err) {
      this.kayitOlunuyor = false;
      this.yukleniyor = false;
      this.yukleniyorEdevlet = false;
      this.hatalar = {};
      this.recaptchaComponentLogin?.reset();
      this.recaptchaComponentKayit?.reset();
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
    static ɵfac = function GirisComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || GirisComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_services_giris_service__WEBPACK_IMPORTED_MODULE_5__.GirisService), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_6__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_6__.ActivatedRoute), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_0__.FormBuilder), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_services_genel_service__WEBPACK_IMPORTED_MODULE_7__.GenelService), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_services_constants_service__WEBPACK_IMPORTED_MODULE_8__.ConstantsService));
    };
    static ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineComponent"]({
      type: GirisComponent,
      selectors: [["app-giris"]],
      viewQuery: function GirisComponent_Query(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵviewQuery"](_c0, 5)(_c1, 5);
        }
        if (rf & 2) {
          let _t;
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵloadQuery"]()) && (ctx.recaptchaComponentLogin = _t.first);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵloadQuery"]()) && (ctx.recaptchaComponentKayit = _t.first);
        }
      },
      decls: 106,
      vars: 15,
      consts: [["recaptchaRefLogin", ""], ["id", "kt_body", 2, "min-height", "100vh"], ["id", "kt_app_root", 1, "d-flex", "flex-column", "flex-root"], [1, "d-flex", "flex-column", "flex-lg-row", "flex-column-fluid"], [1, "d-flex", "flex-column", "flex-lg-row-fluid", "w-lg-50", "p-5", "order-2", "order-lg-1"], [1, "d-flex", "flex-center", "flex-column", "flex-lg-row-fluid"], [1, "w-lg-500px", "p-5", 3, "hidden"], ["novalidate", "novalidate", "id", "kt_sign_in_form", 1, "form", "w-100", 3, "submit", "formGroup"], [1, "text-center", "mb-6"], [1, "text-gray-900", "fw-bolder", "mb-3", "text-center", "d-inline-flex", "align-items-center", "justify-content-center", "gap-2"], [1, "fa-solid", "fa-right-to-bracket", "text-primary", "fs-2"], [1, "text-gray-500", "text-center", "fs-6", 3, "hidden"], [1, "alert", "alert-danger", "text-black"], [1, "fas", "fa-exclamation-triangle", "text-danger", "me-1", "fs-4"], [1, "cursor-pointer", "btn-sm", "btn-primary", "text-white", "p-1", 3, "click", "hidden"], [1, "fas", "fa-user-plus", "me-1", "p-2", "fs-7", "text-white"], ["translate", "", 1, "indicator-label"], [1, "fv-row", "mb-8"], ["type", "text", "formControlName", "tckimlikno", "placeholder", "E-posta adresiniz", "name", "tckimlikno", "autocomplete", "off", 1, "form-control", "bg-transparent", 2, "border-color", "#8fb9d5"], [1, "fv-row", "mb-3"], ["type", "password", "formControlName", "sifre", "placeholder", "\u015Eifreniz", "name", "password", "autocomplete", "off", 1, "form-control", "bg-transparent", 2, "border-color", "#8fb9d5"], [1, "d-flex", "flex-stack", "flex-wrap", "gap-3", "fs-base", "fw-semibold", "mb-4"], [1, "link-primary", "cursor-pointer", "fs-5", 3, "click"], [1, "fas", "fa-key", "me-1", "text-danger"], [1, "mb-4", 2, "justify-content", "center", "display", "flex"], ["siteKey", "6LcFD6YpAAAAAGSGbeYUc0HSaJZZp_EBJfMqyX2Q", 3, "resolved"], [1, "d-grid", "mb-10"], [1, "text-center"], ["type", "submit", "id", "kt_sign_in_submit", 1, "btn", "btn-lg", "btn-primary", "w-100", "mb-1", "cursor-pointer", 3, "disabled"], [1, "fas", "fa-sign-in-alt", "me-2", "fs-3"], [1, "indicator-progress"], [1, "spinner-border", "spinner-border-sm", "align-middle", "ms-2"], [1, "btn", "btn-flex", "flex-center", "btn-danger", "btn-lg", "w-100", "mb-5", 3, "click", "disabled"], ["alt", "Logo", "src", "/assets/image/e-devlet.png", 1, "h-20px", "me-3"], [1, "indicator-label"], ["novalidate", "novalidate", 1, "form", "p-2", 3, "submit", "hidden"], ["translate", "", 1, "text-dark", "text-center", "mb-3", 2, "vertical-align", "middle"], [1, "fas", "fa-unlock", "text-primary", "fs-3", "me-2"], ["translate", "", 1, "text-black-400", "text-center", "fs-5", "mb-4"], [1, "fv-row", "mb-4"], ["translate", "", 1, "form-label", "fs-6", "fw-bolder", "text-dark"], ["type", "text", "name", "tC_YU_PasaportNo", "autocomplete", "off", 1, "form-control", "form-control-lg", 2, "border-color", "#8fb9d5", 3, "ngModelChange", "email", "ngModel"], ["type", "text", "name", "eposta", "autocomplete", "off", "oninput", "this.value = this.value?.toLocaleLowerCase()", 1, "form-control", "form-control-lg", 2, "border-color", "#8fb9d5", 3, "ngModelChange", "email", "ngModel"], [1, "d-flex", "justify-content-center", "flex-shrink-0"], ["type", "button", "id", "kt_modal_new_target_cancel", "translate", "", 1, "btn", "btn-danger", "btn-hover-rise", "me-3", 3, "click"], [1, "fas", "fa-reply"], ["type", "submit", 1, "btn", "btn-primary", 3, "click", "disabled"], [1, "fas", "fa-check", "me-2"], [1, "w-lg-500px", "d-flex", "flex-stack", "px-10", "mx-auto", "justify-content-center"], [1, "d-flex", "flex-lg-row-fluid", "w-lg-50", "bgi-size-cover", "bgi-position-center", "order-1", "order-lg-2", 2, "background-image", "url(/assets/media/misc/auth-bg.png)"], [1, "d-flex", "flex-column", "flex-center", "py-2", "py-lg-5", "px-5", "px-md-5", "w-100"], [1, "mb-5"], ["alt", "Logo", "src", "assets/image/neu_logo_net.png", 1, "h-100px", "h-lg-150px"], [1, "d-none", "d-lg-block", "text-white", "fs-1qx", "fw-bolder", "text-center", "mb-7"], [1, "d-none", "d-lg-block", "text-white", "fs-5", 2, "text-align", "justify"], ["target", "_blank", "href", "https://erbakan.edu.tr/tr/neulu-olmak-ayricaliktir", 2, "color", "yellow"], [1, "fas", "fa-graduation-cap", "mb-3", "mt-3", 2, "font-size", "3rem", "color", "white"], [1, "d-none", "d-lg-block", "text-white", "fs-4", "text-center"], [1, "text-center", "text-white", "mt-5"], [1, "cursor-pointer", "px-3", "py-2", "mt-5", 2, "border", "2px solid #fff", "border-radius", "8px", "display", "inline-block", 3, "click"], [1, "fas", "fa-user-plus", "me-1", "text-white"], [1, "indicator-label", "text-white"]],
      template: function GirisComponent_Template(rf, ctx) {
        if (rf & 1) {
          const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "body", 1)(1, "div", 2)(2, "div", 3)(3, "div", 4)(4, "div", 5)(5, "div", 6)(6, "form", 7);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("submit", function GirisComponent_Template_form_submit_6_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r1);
            return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"](ctx.girisYap());
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](7, "div", 8)(8, "h1", 9);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](9, "i", 10);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](10, "span");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](11, "Giri\u015F Yap");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](12, "div", 11)(13, "div", 12);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](14, "i", 13);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](15, " Sisteme giri\u015F yapmak i\u00E7in e-posta adresinizi ve \u015Fifrenizi giriniz. Sisteme \u00FCye de\u011Filseniz ");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](16, "a", 14);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function GirisComponent_Template_a_click_16_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r1);
            return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"](ctx.divOpenFnc("kayitol"));
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](17, "i", 15);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](18, "span", 16);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](19, "Yeni Kay\u0131t");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](20, " ekran\u0131ndan \u00FCye olman\u0131z gerekmektedir. \u00D6nceki Mezun Bilgi Sistemine kay\u0131tl\u0131 mezunlar\u0131m\u0131z ");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](21, "b");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](22, "\"\u015Eifremi Unuttum\"");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](23, " se\u00E7ene\u011Finden \u015Fifresini s\u0131f\u0131rlay\u0131p sisteme giri\u015F yapabilirler. ");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](24, "div", 17);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](25, "input", 18);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](26, "div", 19);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](27, "input", 20);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](28, "div", 21);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](29, "div");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](30, "a", 22);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function GirisComponent_Template_a_click_30_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r1);
            return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"](ctx.divOpenFnc("sifremiunuttum"));
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](31, "i", 23);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](32, "\u015Eifremi Unuttum");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](33, "div", 24)(34, "re-captcha", 25, 0);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("resolved", function GirisComponent_Template_re_captcha_resolved_34_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r1);
            return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"](ctx.onCaptchaResolved($event));
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](36, "div", 26)(37, "div", 27)(38, "button", 28);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](39, "i", 29);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](40, "span", 16);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](41, "Giri\u015F");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](42, "span", 30);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](43, "L\u00FCtfen Bekleyin... ");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](44, "span", 31);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](45, "button", 32);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function GirisComponent_Template_button_click_45_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r1);
            return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"](ctx.girisEdevletLink());
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](46, "img", 33);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](47, "span", 34);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](48, " E-Devlet ile Giri\u015F");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](49, "span", 30);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](50, "Giri\u015F Yap\u0131l\u0131yor... ");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](51, "span", 31);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](52, "div", 35);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("submit", function GirisComponent_Template_div_submit_52_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r1);
            return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"](ctx.sifremiUnuttum());
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](53, "h3", 36);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](54, "i", 37);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](55, "\u015Eifre Yenileme ");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](56, "div", 38);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](57, " Yeni \u015Fifreniz e-posta adresinize ve telefonunuza g\u00F6nderilecektir. ");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](58, "div", 39)(59, "label", 40);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](60, "T.C. Kimlik Numaras\u0131");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](61, "input", 41);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtwoWayListener"]("ngModelChange", function GirisComponent_Template_input_ngModelChange_61_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r1);
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtwoWayBindingSet"](ctx.suTcKimlikNo, $event) || (ctx.suTcKimlikNo = $event);
            return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"]($event);
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](62, "div", 39)(63, "label", 40);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](64, "Sisteme Kay\u0131tl\u0131 Eposta Adresiniz");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](65, "input", 42);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtwoWayListener"]("ngModelChange", function GirisComponent_Template_input_ngModelChange_65_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r1);
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtwoWayBindingSet"](ctx.suEposta, $event) || (ctx.suEposta = $event);
            return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"]($event);
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](66, "div", 43)(67, "button", 44);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function GirisComponent_Template_button_click_67_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r1);
            return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"](ctx.divOpenFnc("giris"));
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](68, "i", 45);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](69, " Giri\u015F Ekran\u0131 ");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](70, "button", 46);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function GirisComponent_Template_button_click_70_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r1);
            return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"](ctx.sifremiUnuttum());
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](71, "span", 16);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](72, "i", 47);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](73, "\u015Eifremi Yenile");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](74, "span", 30);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](75, "L\u00FCtfen bekleyiniz... ");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](76, "span", 31);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](77, "div", 48);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](78, " \u00A9 2025 - Bilgi \u0130\u015Flem Daire Ba\u015Fkanl\u0131\u011F\u0131 ");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](79, "div", 49)(80, "div", 50)(81, "span", 51);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](82, "img", 52);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](83, "h1", 53);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](84, "NE\u00DC Sms Panel Sistemi\u2019ne Ho\u015F Geldiniz");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](85, "div", 54);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](86, " De\u011Ferli Mezunumuz, ");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](87, "br")(88, "br");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](89, " Kariyer geli\u015Fiminizi desteklemek amac\u0131yla Necmettin Erbakan \u00DCniversitesi Kariyer Merkezi olarak hizmetinizdeyiz. E\u011Fitimler, seminerler, etkinlikler, staj ve istihdam imk\u00E2nlar\u0131 ile mezun bulu\u015Fmalar\u0131 gibi pek \u00E7ok faaliyetten yararlanabilmeniz i\u00E7in merkezimizin \u00E7al\u0131\u015Fmalar\u0131na kat\u0131labilirsiniz. Mezuniyet sonras\u0131nda da \u00FCniversitemizle ba\u011F\u0131n\u0131z\u0131 s\u00FCrd\u00FCrmek i\u00E7in NE\u00DCM Mezun \u00D6\u011Frenci Portal\u0131'na kay\u0131t olman\u0131z\u0131 bekliyoruz. ");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](90, "br")(91, "br");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](92, " Bu portal arac\u0131l\u0131\u011F\u0131yla d\u00F6nem arkada\u015Flar\u0131n\u0131za ula\u015Fabilir, diplomalar\u0131n\u0131z\u0131n Konya d\u0131\u015F\u0131ndaki adreslerinize kargo ile g\u00F6nderilmesini talep edebilir ve Mezun Kimlik Kart\u0131 edinerek ");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](93, "a", 55);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](94, "\u201CNE\u00DC\u2019l\u00FC olmak ayr\u0131cal\u0131kt\u0131r\u201D");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](95, " sayfas\u0131nda yer alan avantajlardan faydalanabilirsiniz. ");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](96, "i", 56);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](97, "div", 57)(98, "div", 58);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](99, " Sisteme giri\u015F yapabilmeniz i\u00E7in \u00FCye olman\u0131z gerekmektedir.");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](100, "br");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](101, " NE\u00DC mezunu olmayan ki\u015Filer kay\u0131t olamaz. ");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](102, "a", 59);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function GirisComponent_Template_a_click_102_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r1);
            return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"](ctx.divOpenFnc("kayitol"));
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](103, "i", 60);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](104, "span", 61);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](105, "Yeni Kay\u0131t");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()()()()()()();
        }
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](5);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("hidden", ctx.step != "giris");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("formGroup", ctx.girisForm);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](6);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("hidden", ctx.step != "giris");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](4);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("hidden", ctx.step != "giris");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](22);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("disabled", ctx.yukleniyor);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵattribute"]("data-kt-indicator", ctx.yukleniyor ? "on" : "off");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](7);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("disabled", ctx.yukleniyorEdevlet);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵattribute"]("data-kt-indicator", ctx.yukleniyorEdevlet ? "on" : "off");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](7);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("hidden", ctx.step != "sifremiunuttum");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](9);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("email", true);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtwoWayProperty"]("ngModel", ctx.suTcKimlikNo);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](4);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("email", true);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtwoWayProperty"]("ngModel", ctx.suEposta);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](5);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("disabled", ctx.dogrulaniyor);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵattribute"]("data-kt-indicator", ctx.dogrulaniyor ? "on" : "off");
        }
      },
      dependencies: [_angular_forms__WEBPACK_IMPORTED_MODULE_0__.ReactiveFormsModule, _angular_forms__WEBPACK_IMPORTED_MODULE_0__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_0__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_0__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_0__.EmailValidator, _angular_forms__WEBPACK_IMPORTED_MODULE_0__.FormGroupDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_0__.FormControlName, ng_recaptcha__WEBPACK_IMPORTED_MODULE_1__.RecaptchaModule, ng_recaptcha__WEBPACK_IMPORTED_MODULE_1__.RecaptchaComponent, _angular_common__WEBPACK_IMPORTED_MODULE_2__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_0__.FormsModule, _angular_forms__WEBPACK_IMPORTED_MODULE_0__.NgModel],
      styles: [".contentKayit[_ngcontent-%COMP%] {\n    \n\n    overflow-y: auto;\n    border: 1px solid #006CEA;\n    padding: 20px;\n    overflow: visible;\n    border-radius: 20px; \n  }\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvY29tcG9uZW50cy9naXJpcy9naXJpcy5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksdUJBQXVCO0lBQ3ZCLGdCQUFnQjtJQUNoQix5QkFBeUI7SUFDekIsYUFBYTtJQUNiLGlCQUFpQjtJQUNqQixtQkFBbUI7RUFDckIiLCJzb3VyY2VzQ29udGVudCI6WyIuY29udGVudEtheWl0IHtcclxuICAgIC8qIG1heC1oZWlnaHQ6IDcwMHB4OyAqL1xyXG4gICAgb3ZlcmZsb3cteTogYXV0bztcclxuICAgIGJvcmRlcjogMXB4IHNvbGlkICMwMDZDRUE7XHJcbiAgICBwYWRkaW5nOiAyMHB4O1xyXG4gICAgb3ZlcmZsb3c6IHZpc2libGU7XHJcbiAgICBib3JkZXItcmFkaXVzOiAyMHB4OyBcclxuICB9Il0sInNvdXJjZVJvb3QiOiIifQ== */"]
    });
  }
  return GirisComponent;
})();

/***/ },

/***/ 5981
/*!*************************************************************!*\
  !*** ./node_modules/ng-recaptcha/fesm2022/ng-recaptcha.mjs ***!
  \*************************************************************/
(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   RECAPTCHA_BASE_URL: () => (/* binding */ RECAPTCHA_BASE_URL),
/* harmony export */   RECAPTCHA_LANGUAGE: () => (/* binding */ RECAPTCHA_LANGUAGE),
/* harmony export */   RECAPTCHA_LOADER_OPTIONS: () => (/* binding */ RECAPTCHA_LOADER_OPTIONS),
/* harmony export */   RECAPTCHA_NONCE: () => (/* binding */ RECAPTCHA_NONCE),
/* harmony export */   RECAPTCHA_SETTINGS: () => (/* binding */ RECAPTCHA_SETTINGS),
/* harmony export */   RECAPTCHA_V3_SITE_KEY: () => (/* binding */ RECAPTCHA_V3_SITE_KEY),
/* harmony export */   ReCaptchaV3Service: () => (/* binding */ ReCaptchaV3Service),
/* harmony export */   RecaptchaComponent: () => (/* binding */ RecaptchaComponent),
/* harmony export */   RecaptchaFormsModule: () => (/* binding */ RecaptchaFormsModule),
/* harmony export */   RecaptchaLoaderService: () => (/* binding */ RecaptchaLoaderService),
/* harmony export */   RecaptchaModule: () => (/* binding */ RecaptchaModule),
/* harmony export */   RecaptchaV3Module: () => (/* binding */ RecaptchaV3Module),
/* harmony export */   RecaptchaValueAccessorDirective: () => (/* binding */ RecaptchaValueAccessorDirective)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 1817);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 6124);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ 316);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ 819);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ 5797);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs */ 9452);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs/operators */ 1567);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ 4456);







/** @deprecated Use `LOADER_OPTIONS` instead. See `RecaptchaLoaderOptions.onBeforeLoad` */
const RECAPTCHA_LANGUAGE = /*#__PURE__*/new _angular_core__WEBPACK_IMPORTED_MODULE_0__.InjectionToken("recaptcha-language");
/** @deprecated Use `LOADER_OPTIONS` instead. See `RecaptchaLoaderOptions.onBeforeLoad` */
const RECAPTCHA_BASE_URL = /*#__PURE__*/new _angular_core__WEBPACK_IMPORTED_MODULE_0__.InjectionToken("recaptcha-base-url");
/** @deprecated Use `LOADER_OPTIONS` instead. See `RecaptchaLoaderOptions.onBeforeLoad` */
const RECAPTCHA_NONCE = /*#__PURE__*/new _angular_core__WEBPACK_IMPORTED_MODULE_0__.InjectionToken("recaptcha-nonce-tag");
const RECAPTCHA_SETTINGS = /*#__PURE__*/new _angular_core__WEBPACK_IMPORTED_MODULE_0__.InjectionToken("recaptcha-settings");
const RECAPTCHA_V3_SITE_KEY = /*#__PURE__*/new _angular_core__WEBPACK_IMPORTED_MODULE_0__.InjectionToken("recaptcha-v3-site-key");
/**
 * See the documentation for `RecaptchaLoaderOptions`.
 */
const RECAPTCHA_LOADER_OPTIONS = /*#__PURE__*/new _angular_core__WEBPACK_IMPORTED_MODULE_0__.InjectionToken("recaptcha-loader-options");
function loadScript(renderMode, onBeforeLoad, onLoaded, {
  url,
  lang,
  nonce
} = {}) {
  window.ng2recaptchaloaded = () => {
    onLoaded(grecaptcha);
  };
  const script = document.createElement("script");
  script.innerHTML = "";
  const {
    url: baseUrl,
    nonce: onBeforeLoadNonce
  } = onBeforeLoad(new URL(url || "https://www.google.com/recaptcha/api.js"));
  baseUrl.searchParams.set("render", renderMode === "explicit" ? renderMode : renderMode.key);
  baseUrl.searchParams.set("onload", "ng2recaptchaloaded");
  baseUrl.searchParams.set("trustedtypes", "true");
  if (lang) {
    baseUrl.searchParams.set("hl", lang);
  }
  script.src = baseUrl.href;
  const nonceValue = onBeforeLoadNonce || nonce;
  if (nonceValue) {
    script.setAttribute("nonce", nonceValue);
  }
  script.async = true;
  script.defer = true;
  document.head.appendChild(script);
}
function newLoadScript({
  v3SiteKey,
  onBeforeLoad,
  onLoaded
}) {
  const renderMode = v3SiteKey ? {
    key: v3SiteKey
  } : "explicit";
  loader.loadScript(renderMode, onBeforeLoad, onLoaded);
}
const loader = {
  loadScript,
  newLoadScript
};
function toNonNullObservable(subject) {
  return subject.asObservable().pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_6__.filter)(value => value !== null));
}
let RecaptchaLoaderService = /*#__PURE__*/(() => {
  class RecaptchaLoaderService {
    /**
     * @internal
     * @nocollapse
     */
    static {
      this.ready = null;
    }
    constructor(
    // eslint-disable-next-line @typescript-eslint/ban-types
    platformId,
    // eslint-disable-next-line deprecation/deprecation
    language,
    // eslint-disable-next-line deprecation/deprecation
    baseUrl,
    // eslint-disable-next-line deprecation/deprecation
    nonce, v3SiteKey, options) {
      this.platformId = platformId;
      this.language = language;
      this.baseUrl = baseUrl;
      this.nonce = nonce;
      this.v3SiteKey = v3SiteKey;
      this.options = options;
      const subject = this.init();
      this.ready = subject ? toNonNullObservable(subject) : (0,rxjs__WEBPACK_IMPORTED_MODULE_5__.of)();
    }
    /** @internal */
    init() {
      if (RecaptchaLoaderService.ready) {
        return RecaptchaLoaderService.ready;
      }
      if (!(0,_angular_common__WEBPACK_IMPORTED_MODULE_2__.isPlatformBrowser)(this.platformId)) {
        return undefined;
      }
      const subject = new rxjs__WEBPACK_IMPORTED_MODULE_4__.BehaviorSubject(null);
      RecaptchaLoaderService.ready = subject;
      loader.newLoadScript({
        v3SiteKey: this.v3SiteKey,
        onBeforeLoad: url => {
          if (this.options?.onBeforeLoad) {
            return this.options.onBeforeLoad(url);
          }
          const newUrl = new URL(this.baseUrl ?? url);
          if (this.language) {
            newUrl.searchParams.set("hl", this.language);
          }
          return {
            url: newUrl,
            nonce: this.nonce
          };
        },
        onLoaded: recaptcha => {
          let value = recaptcha;
          if (this.options?.onLoaded) {
            value = this.options.onLoaded(recaptcha);
          }
          subject.next(value);
        }
      });
      return subject;
    }
    static {
      this.ɵfac = function RecaptchaLoaderService_Factory(__ngFactoryType__) {
        return new (__ngFactoryType__ || RecaptchaLoaderService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__.PLATFORM_ID), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](RECAPTCHA_LANGUAGE, 8), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](RECAPTCHA_BASE_URL, 8), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](RECAPTCHA_NONCE, 8), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](RECAPTCHA_V3_SITE_KEY, 8), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](RECAPTCHA_LOADER_OPTIONS, 8));
      };
    }
    static {
      this.ɵprov = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
        token: RecaptchaLoaderService,
        factory: RecaptchaLoaderService.ɵfac
      });
    }
  }
  return RecaptchaLoaderService;
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && void 0;
})();
let nextId = 0;
let RecaptchaComponent = /*#__PURE__*/(() => {
  class RecaptchaComponent {
    constructor(elementRef, loader, zone, settings) {
      this.elementRef = elementRef;
      this.loader = loader;
      this.zone = zone;
      this.id = `ngrecaptcha-${nextId++}`;
      this.errorMode = "default";
      this.resolved = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
      /**
       * @deprecated `(error) output will be removed in the next major version. Use (errored) instead
       */
      // eslint-disable-next-line @angular-eslint/no-output-native
      this.error = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
      this.errored = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
      if (settings) {
        this.siteKey = settings.siteKey;
        this.theme = settings.theme;
        this.type = settings.type;
        this.size = settings.size;
        this.badge = settings.badge;
      }
    }
    ngAfterViewInit() {
      this.subscription = this.loader.ready.subscribe(grecaptcha => {
        if (grecaptcha != null && grecaptcha.render instanceof Function) {
          this.grecaptcha = grecaptcha;
          this.renderRecaptcha();
        }
      });
    }
    ngOnDestroy() {
      // reset the captcha to ensure it does not leave anything behind
      // after the component is no longer needed
      this.grecaptchaReset();
      if (this.subscription) {
        this.subscription.unsubscribe();
      }
    }
    /**
     * Executes the invisible recaptcha.
     * Does nothing if component's size is not set to "invisible".
     */
    execute() {
      if (this.size !== "invisible") {
        return;
      }
      if (this.widget != null) {
        void this.grecaptcha.execute(this.widget);
      } else {
        // delay execution of recaptcha until it actually renders
        this.executeRequested = true;
      }
    }
    reset() {
      if (this.widget != null) {
        if (this.grecaptcha.getResponse(this.widget)) {
          // Only emit an event in case if something would actually change.
          // That way we do not trigger "touching" of the control if someone does a "reset"
          // on a non-resolved captcha.
          this.resolved.emit(null);
        }
        this.grecaptchaReset();
      }
    }
    /**
     * ⚠️ Warning! Use this property at your own risk!
     *
     * While this member is `public`, it is not a part of the component's public API.
     * The semantic versioning guarantees _will not be honored_! Thus, you might find that this property behavior changes in incompatible ways in minor or even patch releases.
     * You are **strongly advised** against using this property.
     * Instead, use more idiomatic ways to get reCAPTCHA value, such as `resolved` EventEmitter, or form-bound methods (ngModel, formControl, and the likes).å
     */
    get __unsafe_widgetValue() {
      return this.widget != null ? this.grecaptcha.getResponse(this.widget) : null;
    }
    /** @internal */
    expired() {
      this.resolved.emit(null);
    }
    /** @internal */
    onError(args) {
      // eslint-disable-next-line deprecation/deprecation
      this.error.emit(args);
      this.errored.emit(args);
    }
    /** @internal */
    captchaResponseCallback(response) {
      this.resolved.emit(response);
    }
    /** @internal */
    grecaptchaReset() {
      if (this.widget != null) {
        this.zone.runOutsideAngular(() => this.grecaptcha.reset(this.widget));
      }
    }
    /** @internal */
    renderRecaptcha() {
      // This `any` can be removed after @types/grecaptcha get updated
      const renderOptions = {
        badge: this.badge,
        callback: response => {
          this.zone.run(() => this.captchaResponseCallback(response));
        },
        "expired-callback": () => {
          this.zone.run(() => this.expired());
        },
        sitekey: this.siteKey,
        size: this.size,
        tabindex: this.tabIndex,
        theme: this.theme,
        type: this.type
      };
      if (this.errorMode === "handled") {
        renderOptions["error-callback"] = (...args) => {
          this.zone.run(() => this.onError(args));
        };
      }
      this.widget = this.grecaptcha.render(this.elementRef.nativeElement, renderOptions);
      if (this.executeRequested === true) {
        this.executeRequested = false;
        this.execute();
      }
    }
    static {
      this.ɵfac = function RecaptchaComponent_Factory(__ngFactoryType__) {
        return new (__ngFactoryType__ || RecaptchaComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__.ElementRef), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](RecaptchaLoaderService), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.NgZone), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](RECAPTCHA_SETTINGS, 8));
      };
    }
    static {
      this.ɵcmp = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
        type: RecaptchaComponent,
        selectors: [["re-captcha"]],
        hostVars: 1,
        hostBindings: function RecaptchaComponent_HostBindings(rf, ctx) {
          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵattribute"]("id", ctx.id);
          }
        },
        inputs: {
          id: "id",
          siteKey: "siteKey",
          theme: "theme",
          type: "type",
          size: "size",
          tabIndex: "tabIndex",
          badge: "badge",
          errorMode: "errorMode"
        },
        outputs: {
          resolved: "resolved",
          error: "error",
          errored: "errored"
        },
        exportAs: ["reCaptcha"],
        standalone: false,
        decls: 0,
        vars: 0,
        template: function RecaptchaComponent_Template(rf, ctx) {},
        encapsulation: 2
      });
    }
  }
  return RecaptchaComponent;
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && void 0;
})();
let RecaptchaCommonModule = /*#__PURE__*/(() => {
  class RecaptchaCommonModule {
    static {
      this.ɵfac = function RecaptchaCommonModule_Factory(__ngFactoryType__) {
        return new (__ngFactoryType__ || RecaptchaCommonModule)();
      };
    }
    static {
      this.ɵmod = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({
        type: RecaptchaCommonModule
      });
    }
    static {
      this.ɵinj = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({});
    }
  }
  return RecaptchaCommonModule;
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && void 0;
})();
let RecaptchaModule = /*#__PURE__*/(() => {
  class RecaptchaModule {
    static {
      this.ɵfac = function RecaptchaModule_Factory(__ngFactoryType__) {
        return new (__ngFactoryType__ || RecaptchaModule)();
      };
    }
    static {
      this.ɵmod = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({
        type: RecaptchaModule
      });
    }
    static {
      this.ɵinj = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
        providers: [RecaptchaLoaderService],
        imports: [RecaptchaCommonModule]
      });
    }
  }
  return RecaptchaModule;
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && void 0;
})();

/**
 * The main service for working with reCAPTCHA v3 APIs.
 *
 * Use the `execute` method for executing a single action, and
 * `onExecute` observable for listening to all actions at once.
 */
let ReCaptchaV3Service = /*#__PURE__*/(() => {
  class ReCaptchaV3Service {
    constructor(zone, recaptchaLoader, siteKey) {
      this.recaptchaLoader = recaptchaLoader;
      this.zone = zone;
      this.siteKey = siteKey;
      this.init();
    }
    get onExecute() {
      if (!this.onExecuteSubject) {
        this.onExecuteSubject = new rxjs__WEBPACK_IMPORTED_MODULE_3__.Subject();
        this.onExecuteObservable = this.onExecuteSubject.asObservable();
      }
      return this.onExecuteObservable;
    }
    get onExecuteError() {
      if (!this.onExecuteErrorSubject) {
        this.onExecuteErrorSubject = new rxjs__WEBPACK_IMPORTED_MODULE_3__.Subject();
        this.onExecuteErrorObservable = this.onExecuteErrorSubject.asObservable();
      }
      return this.onExecuteErrorObservable;
    }
    /**
     * Executes the provided `action` with reCAPTCHA v3 API.
     * Use the emitted token value for verification purposes on the backend.
     *
     * For more information about reCAPTCHA v3 actions and tokens refer to the official documentation at
     * https://developers.google.com/recaptcha/docs/v3.
     *
     * @param {string} action the action to execute
     * @returns {Observable<string>} an `Observable` that will emit the reCAPTCHA v3 string `token` value whenever ready.
     * The returned `Observable` completes immediately after emitting a value.
     */
    execute(action) {
      const subject = new rxjs__WEBPACK_IMPORTED_MODULE_3__.Subject();
      if (!this.grecaptcha) {
        if (!this.actionBacklog) {
          this.actionBacklog = [];
        }
        this.actionBacklog.push([action, subject]);
      } else {
        this.executeActionWithSubject(action, subject);
      }
      return subject.asObservable();
    }
    /** @internal */
    executeActionWithSubject(action, subject) {
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      const onError = error => {
        this.zone.run(() => {
          subject.error(error);
          if (this.onExecuteErrorSubject) {
            // We don't know any better at this point, unfortunately, so have to resort to `any`
            // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
            this.onExecuteErrorSubject.next({
              action,
              error
            });
          }
        });
      };
      this.zone.runOutsideAngular(() => {
        try {
          this.grecaptcha.execute(this.siteKey, {
            action
          }).then(token => {
            this.zone.run(() => {
              subject.next(token);
              subject.complete();
              if (this.onExecuteSubject) {
                this.onExecuteSubject.next({
                  action,
                  token
                });
              }
            });
          }, onError);
        } catch (e) {
          onError(e);
        }
      });
    }
    /** @internal */
    init() {
      this.recaptchaLoader.ready.subscribe(value => {
        this.grecaptcha = value;
        if (this.actionBacklog && this.actionBacklog.length > 0) {
          this.actionBacklog.forEach(([action, subject]) => this.executeActionWithSubject(action, subject));
          this.actionBacklog = undefined;
        }
      });
    }
    static {
      this.ɵfac = function ReCaptchaV3Service_Factory(__ngFactoryType__) {
        return new (__ngFactoryType__ || ReCaptchaV3Service)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.NgZone), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](RecaptchaLoaderService), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](RECAPTCHA_V3_SITE_KEY));
      };
    }
    static {
      this.ɵprov = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
        token: ReCaptchaV3Service,
        factory: ReCaptchaV3Service.ɵfac
      });
    }
  }
  return ReCaptchaV3Service;
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && void 0;
})();
let RecaptchaV3Module = /*#__PURE__*/(() => {
  class RecaptchaV3Module {
    static {
      this.ɵfac = function RecaptchaV3Module_Factory(__ngFactoryType__) {
        return new (__ngFactoryType__ || RecaptchaV3Module)();
      };
    }
    static {
      this.ɵmod = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({
        type: RecaptchaV3Module
      });
    }
    static {
      this.ɵinj = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
        providers: [ReCaptchaV3Service, RecaptchaLoaderService]
      });
    }
  }
  return RecaptchaV3Module;
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && void 0;
})();
let RecaptchaValueAccessorDirective = /*#__PURE__*/(() => {
  class RecaptchaValueAccessorDirective {
    constructor(host) {
      this.host = host;
      this.requiresControllerReset = false;
    }
    writeValue(value) {
      if (!value) {
        this.host.reset();
      } else {
        // In this case, it is most likely that a form controller has requested to write a specific value into the component.
        // This isn't really a supported case - reCAPTCHA values are single-use, and, in a sense, readonly.
        // What this means is that the form controller has recaptcha control state of X, while reCAPTCHA itself can't "restore"
        // to that state. In order to make form controller aware of this discrepancy, and to fix the said misalignment,
        // we'll be telling the controller to "reset" the value back to null.
        if (this.host.__unsafe_widgetValue !== value && Boolean(this.host.__unsafe_widgetValue) === false) {
          this.requiresControllerReset = true;
        }
      }
    }
    registerOnChange(fn) {
      this.onChange = fn;
      if (this.requiresControllerReset) {
        this.requiresControllerReset = false;
        this.onChange(null);
      }
    }
    registerOnTouched(fn) {
      this.onTouched = fn;
    }
    onResolve($event) {
      if (this.onChange) {
        this.onChange($event);
      }
      if (this.onTouched) {
        this.onTouched();
      }
    }
    static {
      this.ɵfac = function RecaptchaValueAccessorDirective_Factory(__ngFactoryType__) {
        return new (__ngFactoryType__ || RecaptchaValueAccessorDirective)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](RecaptchaComponent));
      };
    }
    static {
      this.ɵdir = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineDirective"]({
        type: RecaptchaValueAccessorDirective,
        selectors: [["re-captcha", "formControlName", ""], ["re-captcha", "formControl", ""], ["re-captcha", "ngModel", ""]],
        hostBindings: function RecaptchaValueAccessorDirective_HostBindings(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("resolved", function RecaptchaValueAccessorDirective_resolved_HostBindingHandler($event) {
              return ctx.onResolve($event);
            });
          }
        },
        standalone: false,
        features: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵProvidersFeature"]([{
          multi: true,
          provide: _angular_forms__WEBPACK_IMPORTED_MODULE_7__.NG_VALUE_ACCESSOR,
          useExisting: (0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.forwardRef)(() => RecaptchaValueAccessorDirective)
        }])]
      });
    }
  }
  return RecaptchaValueAccessorDirective;
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && void 0;
})();
let RecaptchaFormsModule = /*#__PURE__*/(() => {
  class RecaptchaFormsModule {
    static {
      this.ɵfac = function RecaptchaFormsModule_Factory(__ngFactoryType__) {
        return new (__ngFactoryType__ || RecaptchaFormsModule)();
      };
    }
    static {
      this.ɵmod = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({
        type: RecaptchaFormsModule
      });
    }
    static {
      this.ɵinj = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
        imports: [_angular_forms__WEBPACK_IMPORTED_MODULE_7__.FormsModule, RecaptchaCommonModule]
      });
    }
  }
  return RecaptchaFormsModule;
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && void 0;
})();

/**
 * Generated bundle index. Do not edit.
 */



/***/ }

}]);
//# sourceMappingURL=261.js.map