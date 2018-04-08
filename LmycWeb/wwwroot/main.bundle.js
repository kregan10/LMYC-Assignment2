webpackJsonp(["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app-routing.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppRoutingModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__pages_home_home_component__ = __webpack_require__("./src/app/pages/home/home.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__pages_contact_contact_component__ = __webpack_require__("./src/app/pages/contact/contact.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_login_login_component__ = __webpack_require__("./src/app/pages/login/login.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_register_register_component__ = __webpack_require__("./src/app/pages/register/register.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






// import { FleetComponent } from './fleet/fleet.component';
// import { FaqComponent } from './faq/faq.component';
// import { MembershipComponent } from './membership/membership.component';
// import { RulesComponent } from './rules/rules.component';
// import { ContactComponent } from './contact/contact.component';
// import { LoginComponent } from './auth/login/login.component';
// import { SignupComponent } from './auth/signup/signup.component';
// import { SignupAddressComponent } from './auth/signup/forms/signup-address.component';
// import { SignupPersonalComponent } from './auth/signup/forms/signup-personal.component';
// import { SignupPhoneComponent } from './auth/signup/forms/signup-phone.component';
// import { SignupSailingComponent } from './auth/signup/forms/signup-sailing.component';
var routes = [
    { path: '', redirectTo: '/home', pathMatch: 'full' },
    { path: 'home', component: __WEBPACK_IMPORTED_MODULE_2__pages_home_home_component__["a" /* HomeComponent */], pathMatch: "full" },
    { path: 'contact', component: __WEBPACK_IMPORTED_MODULE_3__pages_contact_contact_component__["a" /* ContactComponent */] },
    // { path: 'our-fleet', component: FleetComponent },
    // { path: 'faq', component: FaqComponent },
    // { path: 'membership', component: MembershipComponent },
    // { path: 'rules-and-regulations', component: RulesComponent },
    { path: 'login', component: __WEBPACK_IMPORTED_MODULE_4__pages_login_login_component__["a" /* LoginComponent */] },
    { path: 'register', component: __WEBPACK_IMPORTED_MODULE_5__pages_register_register_component__["a" /* RegisterComponent */] },
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            imports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* RouterModule */].forRoot(routes)],
            exports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* RouterModule */]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<!--The content below is only a placeholder and can be replaced.-->\n<div class=\"container\">\n\t<app-navbar></app-navbar>\n\t<router-outlet></router-outlet>\n</div>\n"

/***/ }),

/***/ "./src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'app';
    }
    AppComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-root',
            template: __webpack_require__("./src/app/app.component.html"),
            styles: [__webpack_require__("./src/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("./node_modules/@angular/platform-browser/esm5/platform-browser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("./node_modules/@angular/forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__("./node_modules/@angular/http/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app_routing_module__ = __webpack_require__("./src/app/app-routing.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__app_component__ = __webpack_require__("./src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__components_navbar_navbar_component__ = __webpack_require__("./src/app/components/navbar/navbar.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__components_dynamic_form_dynamic_form_component__ = __webpack_require__("./src/app/components/dynamic-form/dynamic-form.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__components_dynamic_form_question_dynamic_form_question_component__ = __webpack_require__("./src/app/components/dynamic-form-question/dynamic-form-question.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__pages_home_home_component__ = __webpack_require__("./src/app/pages/home/home.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__pages_contact_contact_component__ = __webpack_require__("./src/app/pages/contact/contact.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__pages_login_login_component__ = __webpack_require__("./src/app/pages/login/login.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__pages_register_register_component__ = __webpack_require__("./src/app/pages/register/register.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};













var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* AppComponent */],
                __WEBPACK_IMPORTED_MODULE_6__components_navbar_navbar_component__["a" /* NavbarComponent */],
                __WEBPACK_IMPORTED_MODULE_7__components_dynamic_form_dynamic_form_component__["a" /* DynamicFormComponent */],
                __WEBPACK_IMPORTED_MODULE_8__components_dynamic_form_question_dynamic_form_question_component__["a" /* DynamicFormQuestionComponent */],
                __WEBPACK_IMPORTED_MODULE_9__pages_home_home_component__["a" /* HomeComponent */],
                __WEBPACK_IMPORTED_MODULE_10__pages_contact_contact_component__["a" /* ContactComponent */],
                __WEBPACK_IMPORTED_MODULE_11__pages_login_login_component__["a" /* LoginComponent */],
                __WEBPACK_IMPORTED_MODULE_12__pages_register_register_component__["a" /* RegisterComponent */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_4__app_routing_module__["a" /* AppRoutingModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["c" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_http__["a" /* HttpModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["d" /* ReactiveFormsModule */]
            ],
            // providers: [AuthService],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* AppComponent */]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/components/dynamic-form-question/dynamic-form-question.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/dynamic-form-question/dynamic-form-question.component.html":
/***/ (function(module, exports) {

module.exports = "<div [formGroup]=\"form\" class=\"form-group\">\n\t<label [attr.for]=\"question.key\">{{question.label}}</label>\n\n\t<div [ngSwitch]=\"question.controlType\">\n        <input class=\"form-control\" *ngSwitchCase=\"'textbox'\" [formControlName]=\"question.key\" [id]=\"question.key\" [type]=\"question.type\">\n    </div>\n\n\t<div class=\"errorMessage alert alert-danger\" *ngIf=\"!isValid && (isDirty || isTouched)\">{{question.label}} is required</div>\n\n</div>\n"

/***/ }),

/***/ "./src/app/components/dynamic-form-question/dynamic-form-question.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DynamicFormQuestionComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__("./node_modules/@angular/forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__questions_question_base__ = __webpack_require__("./src/app/components/questions/question-base.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var DynamicFormQuestionComponent = /** @class */ (function () {
    function DynamicFormQuestionComponent() {
    }
    Object.defineProperty(DynamicFormQuestionComponent.prototype, "isValid", {
        get: function () {
            return this.form.controls[this.question.key].valid;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DynamicFormQuestionComponent.prototype, "isDirty", {
        get: function () {
            return this.form.controls[this.question.key].dirty;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DynamicFormQuestionComponent.prototype, "isTouched", {
        get: function () {
            return this.form.controls[this.question.key].touched;
        },
        enumerable: true,
        configurable: true
    });
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Input */])(),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_2__questions_question_base__["a" /* QuestionBase */])
    ], DynamicFormQuestionComponent.prototype, "question", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Input */])(),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1__angular_forms__["b" /* FormGroup */])
    ], DynamicFormQuestionComponent.prototype, "form", void 0);
    DynamicFormQuestionComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-question',
            template: __webpack_require__("./src/app/components/dynamic-form-question/dynamic-form-question.component.html"),
            styles: [__webpack_require__("./src/app/components/dynamic-form-question/dynamic-form-question.component.css")],
        })
    ], DynamicFormQuestionComponent);
    return DynamicFormQuestionComponent;
}());



/***/ }),

/***/ "./src/app/components/dynamic-form/dynamic-form.component.css":
/***/ (function(module, exports) {

module.exports = ".form {\n  width: 100%;\n  max-width: 330px;\n  padding: 15px;\n  margin: 0 auto;\n  font-weight: 400;\n}\n\n.form .form-control {\n  position: relative;\n  -webkit-box-sizing: border-box;\n          box-sizing: border-box;\n  height: auto;\n  padding: 10px;\n  font-size: 16px;\n}\n\n.form-signin input[type=\"email\"] {\n  margin-bottom: -1px;\n  border-bottom-right-radius: 0;\n  border-bottom-left-radius: 0;\n}\n\n.form-signin input[type=\"textbox\"] {\n  margin-bottom: 10px;\n  border-top-left-radius: 0;\n  border-top-right-radius: 0;\n}\n"

/***/ }),

/***/ "./src/app/components/dynamic-form/dynamic-form.component.html":
/***/ (function(module, exports) {

module.exports = "<div>\n\t<!-- <form class=\"form\" (ngSubmit)=\"onSubmit()\" [formGroup]=\"form\"> -->\n\t<form class=\"form\" [formGroup]=\"form\">\n\t\t<h1 class=\"h3 mb-3 font-weight-normal text-center\">{{title}}</h1>\n\n\t\t<div *ngFor=\"let question of questions\">\n\t\t\t<app-question [question]=\"question\" [form]=\"form\"></app-question>\n\t\t</div>\n\n\t\t<div>\n\t\t\t<button id=\"formButton\" class=\"btn btn-lg btn-primary btn-block\" (click)=\"buttonOnClick()\" [disabled]=\"form.invalid\">{{textButton}}</button>\n\t\t</div>\n\n\t\t<div *ngIf=\"payLoad\">\n\t\t\t<strong>Saved the following values</strong><br>{{payLoad}}\n\t\t</div>\n\t</form>\n\n\t<pre>{{ formData | json }}</pre>\n</div>\n"

/***/ }),

/***/ "./src/app/components/dynamic-form/dynamic-form.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DynamicFormComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__questions_question_control_service__ = __webpack_require__("./src/app/components/questions/question-control.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var DynamicFormComponent = /** @class */ (function () {
    function DynamicFormComponent(qcs) {
        this.qcs = qcs;
        this.questions = [];
        this.payLoad = '';
    }
    DynamicFormComponent.prototype.ngOnInit = function () {
        this.form = this.qcs.toFormGroup(this.questions);
    };
    DynamicFormComponent.prototype.buttonOnClick = function () {
        this.payLoad = JSON.stringify(this.form.value);
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Input */])(),
        __metadata("design:type", Array)
    ], DynamicFormComponent.prototype, "questions", void 0);
    DynamicFormComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-dynamic-form',
            template: __webpack_require__("./src/app/components/dynamic-form/dynamic-form.component.html"),
            styles: [__webpack_require__("./src/app/components/dynamic-form/dynamic-form.component.css")],
            providers: [__WEBPACK_IMPORTED_MODULE_1__questions_question_control_service__["a" /* QuestionControlService */]]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__questions_question_control_service__["a" /* QuestionControlService */]])
    ], DynamicFormComponent);
    return DynamicFormComponent;
}());



/***/ }),

/***/ "./src/app/components/navbar/navbar.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/navbar/navbar.component.html":
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-expand-lg navbar-light bg-light\">\n\t<a class=\"navbar-brand\" href=\"#\">LMYC</a>\n\t<button #navbarToggler class=\"navbar-toggler navbar-toggler-right\" type=\"button\" data-toggle=\"collapse\" data-target=\"#collapsingNavbar\">\n    <span class=\"navbar-toggler-icon\"></span>\n  </button>\n\t<div class=\"navbar-collapse collapse w-100\" id=\"collapsingNavbar\">\n\t\t<ul class=\"nav navbar-nav ml-auto w-100\" (click)=\"collapseNav()\">\n\t\t\t<li class=\"nav-item\" routerLinkActive=\"active\">\n\t\t\t\t<a class=\"nav-link\" [routerLink]=\"['/home']\">Home</a>\n\t\t\t</li>\n\t\t\t<li class=\"nav-item\" routerLinkActive=\"active\">\n\t\t\t\t<a class=\"nav-link\" [routerLink]=\"['/contact']\">Contact</a>\n\t\t\t</li>\n\t\t\t<!--<li class=\"nav-item\" routerLinkActive=\"active\">\n        <a class=\"nav-link\" [routerLink]=\"['/our-fleet']\">Fleet</a>\n      </li>\n      <li class=\"nav-item\" routerLinkActive=\"active\">\n        <a class=\"nav-link\" [routerLink]=\"['/membership']\">Membership</a>\n      </li>\n      <li class=\"nav-item\" routerLinkActive=\"active\">\n        <a class=\"nav-link\" [routerLink]=\"['/rules-and-regulations']\">Rules and Regulations</a>\n      </li>\n      <li class=\"nav-item\" routerLinkActive=\"active\">\n        <a class=\"nav-link\" [routerLink]=\"['/faq']\">FAQ</a>\n      </li>\n      <li class=\"nav-item\" routerLinkActive=\"active\">\n        <a class=\"nav-link\" [routerLink]=\"['/contact']\">Contact</a>\n      </li>-->\n\t\t</ul>\n\t\t<ul class=\"nav navbar-nav ml-auto w-100 justify-content-end\">\n\t\t\t<li class=\"nav-item\" routerLinkActive=\"active\">\n\t\t\t\t<a class=\"nav-link\" [routerLink]=\"['/register']\">Register</a>\n\t\t\t</li>\n\t\t\t<li class=\"nav-item\" routerLinkActive=\"active\">\n\t\t\t\t<a class=\"nav-link\" [routerLink]=\"['/login']\">Login</a>\n\t\t\t</li>\n\t\t</ul>\n\t</div>\n</nav>\n"

/***/ }),

/***/ "./src/app/components/navbar/navbar.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NavbarComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var NavbarComponent = /** @class */ (function () {
    function NavbarComponent() {
    }
    NavbarComponent.prototype.ngOnInit = function () {
    };
    NavbarComponent.prototype.navBarTogglerIsVisible = function () {
        return this.navbarToggler.nativeElement.offsetParent !== null;
    };
    NavbarComponent.prototype.collapseNav = function () {
        if (this.navBarTogglerIsVisible()) {
            this.navbarToggler.nativeElement.click();
        }
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_9" /* ViewChild */])('navbarToggler'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["t" /* ElementRef */])
    ], NavbarComponent.prototype, "navbarToggler", void 0);
    NavbarComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-navbar',
            template: __webpack_require__("./src/app/components/navbar/navbar.component.html"),
            styles: [__webpack_require__("./src/app/components/navbar/navbar.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], NavbarComponent);
    return NavbarComponent;
}());



/***/ }),

/***/ "./src/app/components/questions/question-base.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return QuestionBase; });
var QuestionBase = /** @class */ (function () {
    function QuestionBase(options) {
        if (options === void 0) { options = {}; }
        this.value = options.value;
        this.key = options.key || '';
        this.label = options.label || '';
        this.required = !!options.required;
        this.order = options.order === undefined ? 1 : options.order;
        this.controlType = options.controlType || '';
    }
    return QuestionBase;
}());



/***/ }),

/***/ "./src/app/components/questions/question-control.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return QuestionControlService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__("./node_modules/@angular/forms/esm5/forms.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var QuestionControlService = /** @class */ (function () {
    function QuestionControlService() {
    }
    QuestionControlService.prototype.toFormGroup = function (questions) {
        var group = {};
        questions.forEach(function (question) {
            group[question.key] = question.required ? new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["a" /* FormControl */](question.value || '', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["e" /* Validators */].required)
                : new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["a" /* FormControl */](question.value || '');
        });
        return new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["b" /* FormGroup */](group);
    };
    QuestionControlService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [])
    ], QuestionControlService);
    return QuestionControlService;
}());



/***/ }),

/***/ "./src/app/components/questions/question-textbox.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TextQuestion; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__question_base__ = __webpack_require__("./src/app/components/questions/question-base.ts");
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();

var TextQuestion = /** @class */ (function (_super) {
    __extends(TextQuestion, _super);
    function TextQuestion(options) {
        if (options === void 0) { options = {}; }
        var _this = _super.call(this, options) || this;
        _this.controlType = 'textbox';
        _this.type = options['type'] || '';
        return _this;
    }
    return TextQuestion;
}(__WEBPACK_IMPORTED_MODULE_0__question_base__["a" /* QuestionBase */]));



/***/ }),

/***/ "./src/app/components/questions/questionsService.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return QuestionsService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__question_textbox__ = __webpack_require__("./src/app/components/questions/question-textbox.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__models_signUpFormData__ = __webpack_require__("./src/app/models/signUpFormData.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var QuestionsService = /** @class */ (function () {
    function QuestionsService() {
        this.formData = new __WEBPACK_IMPORTED_MODULE_2__models_signUpFormData__["a" /* FormData */]();
        this.islFormDataValid = false;
        // getPersonal(): Personal {
        // 	// Return the Personal data
        // 	var personal: Personal = {
        // 		firstName: this.formData.firstName,
        // 		lastName: this.formData.lastName,
        // 		email: this.formData.email
        // 	};
        // 	return personal;
        // }
        //
        // setPersonal(data: Personal) {
        // 	// Update the Personal data only when the Personal Form had been validated successfully
        // 	this.isPersonalFormValid = true;
        // 	this.formData.firstName = data.firstName;
        // 	this.formData.lastName = data.lastName;
        // 	this.formData.email = data.email;
        // }
        //
        // resetFormData(): FormData {
        // 	// Return the form data after all this.* members had been reset
        // 	this.formData.clear();
        // 	this.isPersonalFormValid = this.isWorkFormValid = this.isAddressFormValid = false;
        // 	return this.formData;
        // }
        //
        // isFormValid() {
        // 	// Return true if all forms had been validated successfully; otherwise, return false
        // 	return this.isPersonalFormValid &&
        // 			this.isWorkFormValid &&
        // 			this.isAddressFormValid;
        // }
    }
    // Todo: get from a remote source of question metadata
    // Todo: make asynchronous
    QuestionsService.prototype.getRegisterQuestions = function () {
        var questions = [
            new __WEBPACK_IMPORTED_MODULE_1__question_textbox__["a" /* TextQuestion */]({
                key: 'firstName',
                label: 'First name',
                required: true,
                order: 1
            }),
            new __WEBPACK_IMPORTED_MODULE_1__question_textbox__["a" /* TextQuestion */]({
                key: 'lastName',
                label: 'Last name',
                required: true,
                order: 2
            }),
            new __WEBPACK_IMPORTED_MODULE_1__question_textbox__["a" /* TextQuestion */]({
                key: 'userName',
                label: 'Username',
                required: true,
                order: 3
            }),
            new __WEBPACK_IMPORTED_MODULE_1__question_textbox__["a" /* TextQuestion */]({
                key: 'emailAddress',
                label: 'Email',
                type: 'email',
                required: true,
                order: 4
            }),
            new __WEBPACK_IMPORTED_MODULE_1__question_textbox__["a" /* TextQuestion */]({
                key: 'password',
                label: 'Password',
                type: 'password',
                required: true,
                order: 5
            }),
        ];
        return questions.sort(function (a, b) { return a.order - b.order; });
    };
    QuestionsService.prototype.getLoginQuestions = function () {
        var questions = [
            new __WEBPACK_IMPORTED_MODULE_1__question_textbox__["a" /* TextQuestion */]({
                key: 'emailAddress',
                label: 'Email',
                type: 'email',
                required: true,
                order: 1
            }),
            new __WEBPACK_IMPORTED_MODULE_1__question_textbox__["a" /* TextQuestion */]({
                key: 'password',
                label: 'Password',
                type: 'password',
                required: true,
                order: 2
            }),
        ];
        return questions.sort(function (a, b) { return a.order - b.order; });
    };
    QuestionsService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])()
    ], QuestionsService);
    return QuestionsService;
}());



/***/ }),

/***/ "./src/app/models/signUpFormData.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FormData; });
var FormData = /** @class */ (function () {
    function FormData() {
        this.firstName = '';
        this.lastName = '';
        this.userName = '';
        this.email = '';
        this.password = '';
        this.street = '';
        this.city = '';
        this.province = '';
        this.postalCode = '';
        this.country = '';
        this.mobilePhone = '';
        this.emergencyContactOnePhone = '';
        this.emergencyContactTwoPhone = '';
        this.sailingExperience = '';
    }
    FormData.prototype.clear = function () {
        this.firstName = '';
        this.lastName = '';
        this.userName = '';
        this.email = '';
        this.street = '';
        this.city = '';
        this.province = '';
        this.country = '';
        this.postalCode = '';
        this.mobilePhone = '';
        this.sailingExperience = '';
    };
    return FormData;
}());



/***/ }),

/***/ "./src/app/pages/contact/contact.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/pages/contact/contact.component.html":
/***/ (function(module, exports) {

module.exports = "<h1>Contact</h1>\n"

/***/ }),

/***/ "./src/app/pages/contact/contact.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ContactComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ContactComponent = /** @class */ (function () {
    function ContactComponent() {
    }
    ContactComponent.prototype.ngOnInit = function () {
    };
    ContactComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-contact',
            template: __webpack_require__("./src/app/pages/contact/contact.component.html"),
            styles: [__webpack_require__("./src/app/pages/contact/contact.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], ContactComponent);
    return ContactComponent;
}());



/***/ }),

/***/ "./src/app/pages/home/home.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/pages/home/home.component.html":
/***/ (function(module, exports) {

module.exports = "<h1>Welcome to {{title}}</h1>\n"

/***/ }),

/***/ "./src/app/pages/home/home.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomeComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var HomeComponent = /** @class */ (function () {
    function HomeComponent() {
        this.title = 'LMYC';
    }
    HomeComponent.prototype.ngOnInit = function () {
    };
    HomeComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-home',
            template: __webpack_require__("./src/app/pages/home/home.component.html"),
            styles: [__webpack_require__("./src/app/pages/home/home.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], HomeComponent);
    return HomeComponent;
}());



/***/ }),

/***/ "./src/app/pages/login/login.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__components_questions_question_control_service__ = __webpack_require__("./src/app/components/questions/question-control.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__components_questions_questionsService_service__ = __webpack_require__("./src/app/components/questions/questionsService.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
// import { AuthService } from './../../auth.service';




var LoginComponent = /** @class */ (function () {
    function LoginComponent(
        // private authService: AuthService,
        router, qcs, QuestionsService) {
        this.router = router;
        this.qcs = qcs;
        this.QuestionsService = QuestionsService;
        this.title = "Please Login";
        this.textButton = "Next";
        this.questions = QuestionsService.getLoginQuestions();
    }
    LoginComponent.prototype.ngOnInit = function () {
        this.form = this.qcs.toFormGroup(this.questions);
        console.log('Login form loaded!');
    };
    LoginComponent.prototype.save = function (form) {
        if (!this.form.valid) {
            return false;
        }
        console.log(this.form.value);
        return true;
    };
    LoginComponent.prototype.buttonOnClick = function () {
        if (this.save(this.form)) {
            console.log("Login form saved");
        }
    };
    LoginComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-login',
            template: __webpack_require__("./src/app/components/dynamic-form/dynamic-form.component.html"),
            styles: [__webpack_require__("./src/app/components/dynamic-form/dynamic-form.component.css")],
            providers: [__WEBPACK_IMPORTED_MODULE_2__components_questions_questionsService_service__["a" /* QuestionsService */], __WEBPACK_IMPORTED_MODULE_1__components_questions_question_control_service__["a" /* QuestionControlService */]]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3__angular_router__["a" /* Router */],
            __WEBPACK_IMPORTED_MODULE_1__components_questions_question_control_service__["a" /* QuestionControlService */],
            __WEBPACK_IMPORTED_MODULE_2__components_questions_questionsService_service__["a" /* QuestionsService */]])
    ], LoginComponent);
    return LoginComponent;
}());



/***/ }),

/***/ "./src/app/pages/register/register.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RegisterComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__components_questions_question_control_service__ = __webpack_require__("./src/app/components/questions/question-control.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__components_questions_questionsService_service__ = __webpack_require__("./src/app/components/questions/questionsService.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
// import { AuthService } from './../../auth.service';




var RegisterComponent = /** @class */ (function () {
    function RegisterComponent(
        // private authService: AuthService,
        router, qcs, QuestionsService) {
        this.router = router;
        this.qcs = qcs;
        this.QuestionsService = QuestionsService;
        this.title = "Register";
        this.textButton = "Submit";
        this.questions = QuestionsService.getRegisterQuestions();
    }
    RegisterComponent.prototype.ngOnInit = function () {
        this.form = this.qcs.toFormGroup(this.questions);
        console.log('Register form loaded!');
    };
    RegisterComponent.prototype.save = function (form) {
        if (!this.form.valid) {
            return false;
        }
        console.log(this.form.value);
        return true;
    };
    RegisterComponent.prototype.buttonOnClick = function () {
        if (this.save(this.form)) {
            console.log("Register form saved");
        }
    };
    RegisterComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-login',
            template: __webpack_require__("./src/app/components/dynamic-form/dynamic-form.component.html"),
            styles: [__webpack_require__("./src/app/components/dynamic-form/dynamic-form.component.css")],
            providers: [__WEBPACK_IMPORTED_MODULE_2__components_questions_questionsService_service__["a" /* QuestionsService */], __WEBPACK_IMPORTED_MODULE_1__components_questions_question_control_service__["a" /* QuestionControlService */]]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3__angular_router__["a" /* Router */],
            __WEBPACK_IMPORTED_MODULE_1__components_questions_question_control_service__["a" /* QuestionControlService */],
            __WEBPACK_IMPORTED_MODULE_2__components_questions_questionsService_service__["a" /* QuestionsService */]])
    ], RegisterComponent);
    return RegisterComponent;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
var environment = {
    production: false
};


/***/ }),

/***/ "./src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("./node_modules/@angular/platform-browser-dynamic/esm5/platform-browser-dynamic.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("./src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("./src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_14" /* enableProdMode */])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("./src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map