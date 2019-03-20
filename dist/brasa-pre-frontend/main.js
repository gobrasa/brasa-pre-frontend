(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/admin/admin.component.css":
/*!*******************************************!*\
  !*** ./src/app/admin/admin.component.css ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "iframe{\n  width: 100%;\n  height: 100%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYWRtaW4vYWRtaW4uY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLFdBQVc7RUFDWCxZQUFZO0FBQ2QiLCJmaWxlIjoic3JjL2FwcC9hZG1pbi9hZG1pbi5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaWZyYW1le1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAxMDAlO1xufSJdfQ== */"

/***/ }),

/***/ "./src/app/admin/admin.component.html":
/*!********************************************!*\
  !*** ./src/app/admin/admin.component.html ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h2>Dashboards</h2>\n<div *ngFor=\"let userDeck of userDecks\">\n\n    <!-- If it is a mentor, it can see only himself-->\n    <div *ngIf=\"userDeck.role_name == 'admin' && userNickname == userDeck.username\">\n        <iframe src=\"https://ec2-54-215-139-223.us-west-1.compute.amazonaws.com/dashboard/dashboard-app-brasa-pre?p_Region=Europa&p_Exam_Category=TOEFL&p_Regiao=Europa\"></iframe>\n    </div>\n\n</div>"

/***/ }),

/***/ "./src/app/admin/admin.component.ts":
/*!******************************************!*\
  !*** ./src/app/admin/admin.component.ts ***!
  \******************************************/
/*! exports provided: AdminComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdminComponent", function() { return AdminComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var auth0_web__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! auth0-web */ "./node_modules/auth0-web/dist/index.js");
/* harmony import */ var auth0_web__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(auth0_web__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _mentor_shared_mentor_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../mentor/shared/mentor.service */ "./src/app/mentor/shared/mentor.service.ts");






var AdminComponent = /** @class */ (function () {
    function AdminComponent(route, http) {
        this.route = route;
        this.http = http;
        this.getMentors();
        this.getUser();
        this.getMentee();
        this.getAllMentees();
        this.userNickname = auth0_web__WEBPACK_IMPORTED_MODULE_4__["getProfile"]().nickname;
        //console.log(this.userNickname);
    }
    AdminComponent.prototype.getAllMentors = function () {
        var httpOptions = _mentor_shared_mentor_service__WEBPACK_IMPORTED_MODULE_5__["MentorService"].buildHttpOptions();
        return this.http.get('https://brasa-pre.herokuapp.com/api/mentors', httpOptions);
    };
    AdminComponent.prototype.getAllUsers = function () {
        var httpOptions = _mentor_shared_mentor_service__WEBPACK_IMPORTED_MODULE_5__["MentorService"].buildHttpOptions();
        return this.http.get('https://brasa-pre.herokuapp.com/api/users', httpOptions);
    };
    AdminComponent.prototype.getAllMentees = function () {
        var httpOptions = _mentor_shared_mentor_service__WEBPACK_IMPORTED_MODULE_5__["MentorService"].buildHttpOptions();
        return this.http.get('https://brasa-pre.herokuapp.com/api/mentees', httpOptions);
    };
    AdminComponent.prototype.getMentors = function () {
        var _this = this;
        this.getAllMentors().subscribe(function (mentorDecks) {
            _this.mentorDecks = mentorDecks['objects'];
            console.log(mentorDecks);
        });
    };
    AdminComponent.prototype.getUser = function () {
        var _this = this;
        this.getAllUsers().subscribe(function (userDecks) {
            _this.userDecks = userDecks['objects'];
            //console.log(userDecks);
        });
    };
    AdminComponent.prototype.getMentee = function () {
        var _this = this;
        this.getAllMentees().subscribe(function (menteeDecks) {
            _this.menteeDecks = menteeDecks['objects'];
            //console.log(menteeDecks);
        });
    };
    AdminComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-admin',
            template: __webpack_require__(/*! ./admin.component.html */ "./src/app/admin/admin.component.html"),
            styles: [__webpack_require__(/*! ./admin.component.css */ "./src/app/admin/admin.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"]])
    ], AdminComponent);
    return AdminComponent;
}());



/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");



var routes = [];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".fill-remaining-space {\n    /* This fills the remaining space, by using flexbox.\n       Every toolbar row uses a flexbox row layout. */\n    flex: 1 1 auto;\n  }\n\n  div.view-container {\n    padding: 15px;\n    margin: 0 auto;\n    max-width: 940px;\n   \n  }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXBwLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSTtxREFDaUQ7SUFDakQsY0FBYztFQUNoQjs7RUFFQTtJQUNFLGFBQWE7SUFDYixjQUFjO0lBQ2QsZ0JBQWdCOztFQUVsQiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmZpbGwtcmVtYWluaW5nLXNwYWNlIHtcbiAgICAvKiBUaGlzIGZpbGxzIHRoZSByZW1haW5pbmcgc3BhY2UsIGJ5IHVzaW5nIGZsZXhib3guXG4gICAgICAgRXZlcnkgdG9vbGJhciByb3cgdXNlcyBhIGZsZXhib3ggcm93IGxheW91dC4gKi9cbiAgICBmbGV4OiAxIDEgYXV0bztcbiAgfVxuXG4gIGRpdi52aWV3LWNvbnRhaW5lciB7XG4gICAgcGFkZGluZzogMTVweDtcbiAgICBtYXJnaW46IDAgYXV0bztcbiAgICBtYXgtd2lkdGg6IDk0MHB4O1xuICAgXG4gIH1cbiJdfQ== */"

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "    <mat-toolbar class=\"mat-elevation-z10\">\n      <button mat-button *ngIf=\"!authenticated\" routerLink=\"/\">Home</button>\n      <button mat-button onclick=\"location.href='http://www.gobrasa.org';\">Conheça a BRASA</button>\n      <button mat-button  *ngIf=\"authenticated\" routerLink=\"/mentee/listing\">Mentee</button>\n      <button mat-button  *ngIf=\"authenticated\" routerLink=\"/mentor/listing\">Mentor</button>\n      <button mat-button  *ngIf=\"role == 'admin'\" routerLink=\"/admin\">Admin</button>\n\n      <!-- This fills the remaining space of the current row -->\n      <span class=\"fill-remaining-space\"></span>\n\n      <button mat-button (click)=\"signIn()\" *ngIf=\"!authenticated\">Sign In</button>\n      <button mat-button (click)=\"signOut()\" *ngIf=\"authenticated\" routerLink=\"/\">Sign Out</button>\n    </mat-toolbar>\n\n    <div class=\"view-container\">\n      <router-outlet></router-outlet>\n    </div>\n"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var auth0_web__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! auth0-web */ "./node_modules/auth0-web/dist/index.js");
/* harmony import */ var auth0_web__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(auth0_web__WEBPACK_IMPORTED_MODULE_3__);




var AppComponent = /** @class */ (function () {
    function AppComponent(http) {
        this.http = http;
        this.authenticated = false;
        this.signIn = auth0_web__WEBPACK_IMPORTED_MODULE_3__["signIn"];
        this.signOut = auth0_web__WEBPACK_IMPORTED_MODULE_3__["signOut"];
        this.API_URL = 'https://brasa-pre.herokuapp.com/api';
    }
    AppComponent_1 = AppComponent;
    AppComponent.prototype.ngOnInit = function () {
        var self = this;
        auth0_web__WEBPACK_IMPORTED_MODULE_3__["subscribe"](function (authenticated) { return (self.authenticated = authenticated); });
        this.userNickname = auth0_web__WEBPACK_IMPORTED_MODULE_3__["getProfile"]().nickname;
        this.getUsername(this.userNickname);
    };
    AppComponent.buildHttpOptions = function () {
        var httpOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
                'Authorization': "Bearer " + auth0_web__WEBPACK_IMPORTED_MODULE_3__["getAccessToken"]()
            }),
        };
        return httpOptions;
    };
    AppComponent.prototype.getUsername = function (username) {
        var _this = this;
        console.log('hey');
        var httpOptions = AppComponent_1.buildHttpOptions();
        this.http.get(this.API_URL + "/users?q={\"filters\":[{\"name\":\"username\",\"op\":\"eq\",\"val\": \"" + username + "\"}],\"single\":true}", httpOptions).subscribe(function (usuario) {
            _this.role = usuario.role_name;
        });
        ;
    };
    var AppComponent_1;
    AppComponent = AppComponent_1 = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: MY_NATIVE_FORMATS, AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MY_NATIVE_FORMATS", function() { return MY_NATIVE_FORMATS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var auth0_web__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! auth0-web */ "./node_modules/auth0-web/dist/index.js");
/* harmony import */ var auth0_web__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(auth0_web__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _callback_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./callback.component */ "./src/app/callback.component.ts");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./home/home.component */ "./src/app/home/home.component.ts");
/* harmony import */ var _mentee_mentee_college_mentee_college_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./mentee/mentee-college/mentee-college.component */ "./src/app/mentee/mentee-college/mentee-college.component.ts");
/* harmony import */ var _mentee_mentee_test_mentee_test_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./mentee/mentee-test/mentee-test.component */ "./src/app/mentee/mentee-test/mentee-test.component.ts");
/* harmony import */ var _mentee_mentee_essay_mentee_essay_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./mentee/mentee-essay/mentee-essay.component */ "./src/app/mentee/mentee-essay/mentee-essay.component.ts");
/* harmony import */ var _mentee_mentee_information_mentee_information_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./mentee/mentee-information/mentee-information.component */ "./src/app/mentee/mentee-information/mentee-information.component.ts");
/* harmony import */ var _mentee_mentee_listing_mentee_listing_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./mentee/mentee-listing/mentee-listing.component */ "./src/app/mentee/mentee-listing/mentee-listing.component.ts");
/* harmony import */ var _admin_admin_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./admin/admin.component */ "./src/app/admin/admin.component.ts");
/* harmony import */ var _welcome_welcome_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./welcome/welcome.component */ "./src/app/welcome/welcome.component.ts");
/* harmony import */ var _mentee_mentee_detail_mentee_detail_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./mentee/mentee-detail/mentee-detail.component */ "./src/app/mentee/mentee-detail/mentee-detail.component.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _mentee_mentee_module__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./mentee/mentee.module */ "./src/app/mentee/mentee.module.ts");
/* harmony import */ var _mentor_mentor_module__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./mentor/mentor.module */ "./src/app/mentor/mentor.module.ts");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var angular2_multiselect_dropdown__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! angular2-multiselect-dropdown */ "./node_modules/angular2-multiselect-dropdown/fesm5/angular2-multiselect-dropdown.js");
/* harmony import */ var ng_pick_datetime__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ng-pick-datetime */ "./node_modules/ng-pick-datetime/picker.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _mentor_mentor_listing_mentor_listing_component__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ./mentor/mentor-listing/mentor-listing.component */ "./src/app/mentor/mentor-listing/mentor-listing.component.ts");
/* harmony import */ var _mentor_mentor_information_mentor_information_component__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ./mentor/mentor-information/mentor-information.component */ "./src/app/mentor/mentor-information/mentor-information.component.ts");
/* harmony import */ var _mentor_mentor_detail_mentor_detail_component__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ./mentor/mentor-detail/mentor-detail.component */ "./src/app/mentor/mentor-detail/mentor-detail.component.ts");
/* harmony import */ var _mentee_mentee_component__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! ./mentee/mentee.component */ "./src/app/mentee/mentee.component.ts");
/* harmony import */ var _mentor_mentor_mentor_component__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! ./mentor/mentor/mentor.component */ "./src/app/mentor/mentor/mentor.component.ts");
/* harmony import */ var _env__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! ./env */ "./src/app/env.ts");


































var appRoutes = [
    { path: 'callback', component: _callback_component__WEBPACK_IMPORTED_MODULE_8__["CallbackComponent"] },
    { path: 'mentee/listing', component: _mentee_mentee_listing_mentee_listing_component__WEBPACK_IMPORTED_MODULE_15__["MenteeListingComponent"] },
    { path: 'mentee/test/:id', component: _mentee_mentee_test_mentee_test_component__WEBPACK_IMPORTED_MODULE_12__["MenteeTestComponent"] },
    { path: 'mentee/essay/:id', component: _mentee_mentee_essay_mentee_essay_component__WEBPACK_IMPORTED_MODULE_13__["MenteeEssayComponent"] },
    { path: 'mentee/college/:id', component: _mentee_mentee_college_mentee_college_component__WEBPACK_IMPORTED_MODULE_11__["MenteeCollegeComponent"] },
    { path: 'mentee/detail/:id', component: _mentee_mentee_detail_mentee_detail_component__WEBPACK_IMPORTED_MODULE_18__["MenteeDetailComponent"] },
    { path: 'mentee/listing/:id', component: _mentee_mentee_information_mentee_information_component__WEBPACK_IMPORTED_MODULE_14__["MenteeInformationComponent"] },
    { path: 'mentor/listing', component: _mentor_mentor_listing_mentor_listing_component__WEBPACK_IMPORTED_MODULE_26__["MentorListingComponent"] },
    { path: 'mentor/listing/:id', component: _mentor_mentor_information_mentor_information_component__WEBPACK_IMPORTED_MODULE_27__["MentorInformationComponent"] },
    { path: 'mentor/detail/:id', component: _mentor_mentor_detail_mentor_detail_component__WEBPACK_IMPORTED_MODULE_28__["MentorDetailComponent"] },
    { path: 'admin', component: _admin_admin_component__WEBPACK_IMPORTED_MODULE_16__["AdminComponent"] },
    { path: 'welcome', component: _welcome_welcome_component__WEBPACK_IMPORTED_MODULE_17__["WelcomeComponent"] },
    { path: '', component: _home_home_component__WEBPACK_IMPORTED_MODULE_10__["HomeComponent"] },
];
var MY_NATIVE_FORMATS = {
    fullPickerInput: { year: 'numeric', month: 'numeric', day: 'numeric' },
    datePickerInput: { year: 'numeric', month: 'numeric', day: 'numeric' },
    timePickerInput: { hour: 'numeric', minute: 'numeric' },
    monthYearLabel: { year: 'numeric', month: 'short' },
    dateA11yLabel: { year: 'numeric', month: 'long', day: 'numeric' },
    monthYearA11yLabel: { year: 'numeric', month: 'long' },
};
var AppModule = /** @class */ (function () {
    function AppModule() {
        auth0_web__WEBPACK_IMPORTED_MODULE_7__["configure"]({
            domain: 'brasa-pre-app.eu.auth0.com',
            audience: 'https://online-exam.digituz.com',
            clientID: 'Qw4p5JyU5yO2dZ0DWPL27g9tq6P4c5kk',
            redirectUri: _env__WEBPACK_IMPORTED_MODULE_31__["AWS_URL"],
            scope: 'openid profile manage:exams'
        });
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"],
                _callback_component__WEBPACK_IMPORTED_MODULE_8__["CallbackComponent"],
                _home_home_component__WEBPACK_IMPORTED_MODULE_10__["HomeComponent"],
                //MentorComponent,
                _mentee_mentee_listing_mentee_listing_component__WEBPACK_IMPORTED_MODULE_15__["MenteeListingComponent"],
                _mentor_mentor_mentor_component__WEBPACK_IMPORTED_MODULE_30__["MentorComponent"],
                _mentor_mentor_information_mentor_information_component__WEBPACK_IMPORTED_MODULE_27__["MentorInformationComponent"],
                _mentor_mentor_listing_mentor_listing_component__WEBPACK_IMPORTED_MODULE_26__["MentorListingComponent"],
                _mentor_mentor_detail_mentor_detail_component__WEBPACK_IMPORTED_MODULE_28__["MentorDetailComponent"],
                _mentee_mentee_component__WEBPACK_IMPORTED_MODULE_29__["MenteeComponent"],
                _mentee_mentee_information_mentee_information_component__WEBPACK_IMPORTED_MODULE_14__["MenteeInformationComponent"],
                _mentee_mentee_essay_mentee_essay_component__WEBPACK_IMPORTED_MODULE_13__["MenteeEssayComponent"],
                _mentee_mentee_test_mentee_test_component__WEBPACK_IMPORTED_MODULE_12__["MenteeTestComponent"],
                _mentee_mentee_essay_mentee_essay_component__WEBPACK_IMPORTED_MODULE_13__["MenteeEssayComponent"],
                _mentee_mentee_college_mentee_college_component__WEBPACK_IMPORTED_MODULE_11__["MenteeCollegeComponent"],
                _mentee_mentee_detail_mentee_detail_component__WEBPACK_IMPORTED_MODULE_18__["MenteeDetailComponent"],
                _admin_admin_component__WEBPACK_IMPORTED_MODULE_16__["AdminComponent"],
                _welcome_welcome_component__WEBPACK_IMPORTED_MODULE_17__["WelcomeComponent"]
            ],
            imports: [
                angular2_multiselect_dropdown__WEBPACK_IMPORTED_MODULE_23__["AngularMultiSelectModule"],
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_9__["BrowserAnimationsModule"],
                ng_pick_datetime__WEBPACK_IMPORTED_MODULE_24__["OwlDateTimeModule"],
                ng_pick_datetime__WEBPACK_IMPORTED_MODULE_24__["OwlNativeDateTimeModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClientModule"],
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_9__["NoopAnimationsModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_22__["MatAutocompleteModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_22__["MatBadgeModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_22__["MatBottomSheetModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_22__["MatButtonModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_22__["MatButtonToggleModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_22__["MatCardModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_22__["MatCheckboxModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_22__["MatChipsModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_22__["MatDatepickerModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_22__["MatDialogModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_22__["MatDividerModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_22__["MatExpansionModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_22__["MatGridListModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_22__["MatIconModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_22__["MatInputModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_22__["MatListModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_22__["MatMenuModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_22__["MatNativeDateModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_22__["MatPaginatorModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_22__["MatProgressBarModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_22__["MatProgressSpinnerModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_22__["MatRadioModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_22__["MatRippleModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_22__["MatSelectModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_22__["MatSidenavModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_22__["MatSliderModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_22__["MatSlideToggleModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_22__["MatSnackBarModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_22__["MatSortModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_22__["MatStepperModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_22__["MatTableModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_22__["MatTabsModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_22__["MatToolbarModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_22__["MatTooltipModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_22__["MatTreeModule"],
                _mentee_mentee_module__WEBPACK_IMPORTED_MODULE_20__["MenteePageModule"],
                _mentor_mentor_module__WEBPACK_IMPORTED_MODULE_21__["MentorPageModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_19__["FormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_19__["ReactiveFormsModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_6__["RouterModule"].forRoot(appRoutes),
            ],
            providers: [{ provide: ng_pick_datetime__WEBPACK_IMPORTED_MODULE_24__["OWL_DATE_TIME_FORMATS"], useValue: MY_NATIVE_FORMATS }, _angular_common__WEBPACK_IMPORTED_MODULE_25__["DatePipe"]],
            entryComponents: [_mentee_mentee_test_mentee_test_component__WEBPACK_IMPORTED_MODULE_12__["MenteeTestComponent"], _mentee_mentee_college_mentee_college_component__WEBPACK_IMPORTED_MODULE_11__["MenteeCollegeComponent"]],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"], _mentee_mentee_test_mentee_test_component__WEBPACK_IMPORTED_MODULE_12__["MenteeTestComponent"], _mentee_mentee_college_mentee_college_component__WEBPACK_IMPORTED_MODULE_11__["MenteeCollegeComponent"]]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/auth/auth.service.ts":
/*!**************************************!*\
  !*** ./src/app/auth/auth.service.ts ***!
  \**************************************/
/*! exports provided: AuthService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthService", function() { return AuthService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _env__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../env */ "./src/app/env.ts");
/* harmony import */ var auth0_web__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! auth0-web */ "./node_modules/auth0-web/dist/index.js");
/* harmony import */ var auth0_web__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(auth0_web__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _mentee_shared_mentee_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../mentee/shared/mentee.service */ "./src/app/mentee/shared/mentee.service.ts");






var AuthService = /** @class */ (function () {
    function AuthService(http) {
        this.http = http;
        this.isLoggedIn = false;
        // store the URL so we can redirect after logging in
        this.redirectUrl = '/welcome';
        this.login = auth0_web__WEBPACK_IMPORTED_MODULE_3__["signIn"];
        this.logout = auth0_web__WEBPACK_IMPORTED_MODULE_3__["signOut"];
        this.HS_API_URL = 'https://brasa-pre.herokuapp.com/api';
    }
    AuthService.prototype.check_authenticated = function () {
        var _this = this;
        auth0_web__WEBPACK_IMPORTED_MODULE_3__["subscribe"](function (authenticated) { return (_this.isLoggedIn = authenticated); });
        return this.isLoggedIn;
    };
    AuthService.prototype.retrieve_username = function () {
        var profile = auth0_web__WEBPACK_IMPORTED_MODULE_3__["getProfile"]();
        return profile.nickname;
    };
    AuthService.prototype.check_role_from_username = function (username) {
        var httpOptions = _mentee_shared_mentee_service__WEBPACK_IMPORTED_MODULE_5__["MenteeService"].buildHttpOptions();
        var user2;
        return this.http.get(_env__WEBPACK_IMPORTED_MODULE_2__["AWS_URL"] + "/users/" + username, httpOptions);
    };
    AuthService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root',
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClient"]])
    ], AuthService);
    return AuthService;
}());



/***/ }),

/***/ "./src/app/callback.component.ts":
/*!***************************************!*\
  !*** ./src/app/callback.component.ts ***!
  \***************************************/
/*! exports provided: CallbackComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CallbackComponent", function() { return CallbackComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var auth0_web__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! auth0-web */ "./node_modules/auth0-web/dist/index.js");
/* harmony import */ var auth0_web__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(auth0_web__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");




var CallbackComponent = /** @class */ (function () {
    function CallbackComponent(router) {
        this.router = router;
    }
    CallbackComponent.prototype.ngOnInit = function () {
        var self = this;
        auth0_web__WEBPACK_IMPORTED_MODULE_1__["handleAuthCallback"](function (err) {
            if (err)
                alert(err);
            self.router.navigate(['/welcome']);
        });
    };
    CallbackComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
            selector: 'callback',
            template: "\n    <div>Loading authentication details...</div>\n  ",
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]])
    ], CallbackComponent);
    return CallbackComponent;
}());



/***/ }),

/***/ "./src/app/env.ts":
/*!************************!*\
  !*** ./src/app/env.ts ***!
  \************************/
/*! exports provided: AWS_URL */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AWS_URL", function() { return AWS_URL; });
//export const AWS_URL = 'http://brasa-pre-app.gobrasa.org//callback';
var AWS_URL = 'http://localhost:4200/callback';


/***/ }),

/***/ "./src/app/home/home.component.css":
/*!*****************************************!*\
  !*** ./src/app/home/home.component.css ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "body{\n    font-family: Lato, sans-serif;\n}\n\n#title{\n    width: 100%;\n    position: absolute;\n    background-size: cover;\n    left: 0;\n    top: 64px;\n    height: 350px;\n    background-image: url('brasa-pre.png');\n    -webkit-transform: translate3d(0px, 0px, 0px);\n    transform: translate3d(0px, 0px, 0px);\n    \n}\n\n.layer {\n    background-color: rgba(55,136,203, 0.3);\n    position: absolute;\n    top: 0;\n    left: 0;\n    width: 100%;\n    height: 100%;\n}\n\n#title-text{\n   \n    margin: 98px auto;\n    text-align: center;\n    color: white;\n}\n\n#title-text h1{\n    font-size: 85px;\n    text-transform: uppercase;\n    letter-spacing: 2px;\n    font-weight: 100;\n    line-height: 1;\n}\n\n#info{\n    margin-top: 400px;\n}\n\n#info h1{\n    color: rgb(55,136,203);\n}\n\n#footer{\n    position: fixed;\n    bottom: 0;\n    left: 0;\n    right: 0;\n    width: 100%;\n    height: 10px;\n    background-color: rgb(55,136,203);\n}\n\n@media only screen and (max-width: 600px) {\n    #title{\n        width: 100%;\n        position: absolute;\n        background-size: cover;\n        left: 0;\n        top: 57px;\n        height: 350px;\n        background-image: url(https://lh6.googleusercontent.com/09AJvnubRaQpoLLNH0vOWyNK92yUwNkf13UUQA33kOiA34GAKUtfhiq03wFI4rj6r09xOmg=w16383);\n        -webkit-transform: translate3d(0px, 0px, 0px);\n        transform: translate3d(0px, 0px, 0px);\n        \n    }\n\n    .layer {\n        background-color: rgba(55,136,203, 0.8);\n        position: absolute;\n        top: 0;\n        left: 0;\n        width: 100%;\n        height: 100%;\n    }\n\n    #info{\n        margin-top: 360px;\n        height: 400px;\n    }\n  }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaG9tZS9ob21lLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSw2QkFBNkI7QUFDakM7O0FBRUE7SUFDSSxXQUFXO0lBQ1gsa0JBQWtCO0lBQ2xCLHNCQUFzQjtJQUN0QixPQUFPO0lBQ1AsU0FBUztJQUNULGFBQWE7SUFDYixzQ0FBNkM7SUFDN0MsNkNBQTZDO0lBQzdDLHFDQUFxQzs7QUFFekM7O0FBRUE7SUFDSSx1Q0FBdUM7SUFDdkMsa0JBQWtCO0lBQ2xCLE1BQU07SUFDTixPQUFPO0lBQ1AsV0FBVztJQUNYLFlBQVk7QUFDaEI7O0FBRUE7O0lBRUksaUJBQWlCO0lBQ2pCLGtCQUFrQjtJQUNsQixZQUFZO0FBQ2hCOztBQUVBO0lBQ0ksZUFBZTtJQUNmLHlCQUF5QjtJQUN6QixtQkFBbUI7SUFDbkIsZ0JBQWdCO0lBQ2hCLGNBQWM7QUFDbEI7O0FBRUE7SUFDSSxpQkFBaUI7QUFDckI7O0FBRUE7SUFDSSxzQkFBc0I7QUFDMUI7O0FBRUE7SUFDSSxlQUFlO0lBQ2YsU0FBUztJQUNULE9BQU87SUFDUCxRQUFRO0lBQ1IsV0FBVztJQUNYLFlBQVk7SUFDWixpQ0FBaUM7QUFDckM7O0FBRUE7SUFDSTtRQUNJLFdBQVc7UUFDWCxrQkFBa0I7UUFDbEIsc0JBQXNCO1FBQ3RCLE9BQU87UUFDUCxTQUFTO1FBQ1QsYUFBYTtRQUNiLHVJQUF1STtRQUN2SSw2Q0FBNkM7UUFDN0MscUNBQXFDOztJQUV6Qzs7SUFFQTtRQUNJLHVDQUF1QztRQUN2QyxrQkFBa0I7UUFDbEIsTUFBTTtRQUNOLE9BQU87UUFDUCxXQUFXO1FBQ1gsWUFBWTtJQUNoQjs7SUFFQTtRQUNJLGlCQUFpQjtRQUNqQixhQUFhO0lBQ2pCO0VBQ0YiLCJmaWxlIjoic3JjL2FwcC9ob21lL2hvbWUuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbImJvZHl7XG4gICAgZm9udC1mYW1pbHk6IExhdG8sIHNhbnMtc2VyaWY7XG59XG5cbiN0aXRsZXtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcbiAgICBsZWZ0OiAwO1xuICAgIHRvcDogNjRweDtcbiAgICBoZWlnaHQ6IDM1MHB4O1xuICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybCgnaW1hZ2VzL2JyYXNhLXByZS5wbmcnKTtcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlM2QoMHB4LCAwcHgsIDBweCk7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgwcHgsIDBweCwgMHB4KTtcbiAgICBcbn1cblxuLmxheWVyIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDU1LDEzNiwyMDMsIDAuMyk7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHRvcDogMDtcbiAgICBsZWZ0OiAwO1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGhlaWdodDogMTAwJTtcbn1cblxuI3RpdGxlLXRleHR7XG4gICBcbiAgICBtYXJnaW46IDk4cHggYXV0bztcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgY29sb3I6IHdoaXRlO1xufVxuXG4jdGl0bGUtdGV4dCBoMXtcbiAgICBmb250LXNpemU6IDg1cHg7XG4gICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgICBsZXR0ZXItc3BhY2luZzogMnB4O1xuICAgIGZvbnQtd2VpZ2h0OiAxMDA7XG4gICAgbGluZS1oZWlnaHQ6IDE7XG59XG5cbiNpbmZve1xuICAgIG1hcmdpbi10b3A6IDQwMHB4O1xufVxuXG4jaW5mbyBoMXtcbiAgICBjb2xvcjogcmdiKDU1LDEzNiwyMDMpO1xufVxuXG4jZm9vdGVye1xuICAgIHBvc2l0aW9uOiBmaXhlZDtcbiAgICBib3R0b206IDA7XG4gICAgbGVmdDogMDtcbiAgICByaWdodDogMDtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBoZWlnaHQ6IDEwcHg7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDU1LDEzNiwyMDMpO1xufVxuXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDYwMHB4KSB7XG4gICAgI3RpdGxle1xuICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xuICAgICAgICBsZWZ0OiAwO1xuICAgICAgICB0b3A6IDU3cHg7XG4gICAgICAgIGhlaWdodDogMzUwcHg7XG4gICAgICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybChodHRwczovL2xoNi5nb29nbGV1c2VyY29udGVudC5jb20vMDlBSnZudWJSYVFwb0xMTkgwdk9XeU5LOTJ5VXdOa2YxM1VVUUEzM2tPaUEzNEdBS1V0ZmhpcTAzd0ZJNHJqNnIwOXhPbWc9dzE2MzgzKTtcbiAgICAgICAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKDBweCwgMHB4LCAwcHgpO1xuICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKDBweCwgMHB4LCAwcHgpO1xuICAgICAgICBcbiAgICB9XG5cbiAgICAubGF5ZXIge1xuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDU1LDEzNiwyMDMsIDAuOCk7XG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgdG9wOiAwO1xuICAgICAgICBsZWZ0OiAwO1xuICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgaGVpZ2h0OiAxMDAlO1xuICAgIH1cblxuICAgICNpbmZve1xuICAgICAgICBtYXJnaW4tdG9wOiAzNjBweDtcbiAgICAgICAgaGVpZ2h0OiA0MDBweDtcbiAgICB9XG4gIH1cbiJdfQ== */"

/***/ }),

/***/ "./src/app/home/home.component.html":
/*!******************************************!*\
  !*** ./src/app/home/home.component.html ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!DOCTYPE html>\n<html>\n  <head>\n    <title></title>\n    <link rel=\"stylesheet\" href=\"https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css\" integrity=\"sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T\" crossorigin=\"anonymous\">\n  </head>\n  <body>\n  <div class=\"container\">\n    <div class=\"content\">\n        <div id=\"title\">\n          <div class=\"layer\">\n              <div id=\"header-links\">\n                \n              </div>\n\n              <div id=\"title-text\">\n                  <h1>Brasa Pré</h1>\n                  <p>2019 | 2020</p>\n              </div>\n          </div>\n          \n        </div>\n        <div id=\"info\">\n          <h1>O que é o BRASA PRÉ?</h1>\n            <p>O BRASA PRÉ é um programa de mentoria gratuito que possui como missão auxiliar jovens brasileiros\n            a realizarem o sonho de estudar nas melhores universidades do mundo. </p>\n\n            <p>O programa é organizado pela BRASA, a Brazilian Student Association, uma organização sem fins lucrativos formada \n            por uma rede de mais de 4,000 estudantes na América do Norte, Europa e Ásia. \n            Somos hoje organização referência para quem almeja estudar, para quem estuda e para quem já estudou no exterior. \n            Saiba mais sobre nossas iniciativas em gobrasa.org</p>\n        </div>\n\n\n\n\n    </div>\n    \n  </div>\n  <div id=\"footer\"></div>\n</body>\n</html>"

/***/ }),

/***/ "./src/app/home/home.component.ts":
/*!****************************************!*\
  !*** ./src/app/home/home.component.ts ***!
  \****************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var HomeComponent = /** @class */ (function () {
    function HomeComponent() {
    }
    HomeComponent.prototype.ngOnInit = function () {
    };
    HomeComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-home',
            template: __webpack_require__(/*! ./home.component.html */ "./src/app/home/home.component.html"),
            styles: [__webpack_require__(/*! ./home.component.css */ "./src/app/home/home.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], HomeComponent);
    return HomeComponent;
}());



/***/ }),

/***/ "./src/app/mentee/mentee-college/mentee-college.component.css":
/*!********************************************************************!*\
  !*** ./src/app/mentee/mentee-college/mentee-college.component.css ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n\n.btn-wrapper {\n    text-align: center;\n}\n\n#college_update{\n    margin-bottom: 30px;\n    width: 500px;\n    margin: 30px auto;\n}\n\n.action{\n    margin-top: 20px;\n    height: 40px;\n}\n\n.voltar{\n    margin-right: 30px;\n    background: none;\n    border: none;\n    color: #9999;\n    float: left;\n}\n\n.salvar{\n    float: right;\n    margin-right: 11px;\n}\n\n#exams_update{\n    margin-bottom: 30px;\n    width: 500px;\n    margin: 30px auto;\n}\n\n#uploaded_essays{\n    margin-bottom: 30px;\n    width: 500px;\n    margin: 30px auto;\n}\n\n.essay-listing{\n    display: inline;\n    margin-top: 5px;\n}\n\nhr{\n    margin-top: 5px;\n    margin-bottom: 6px;\n  }\n\n.apagar{\n    float: right;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbWVudGVlL21lbnRlZS1jb2xsZWdlL21lbnRlZS1jb2xsZWdlLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFFQTtJQUNJLGtCQUFrQjtBQUN0Qjs7QUFFQTtJQUNJLG1CQUFtQjtJQUNuQixZQUFZO0lBQ1osaUJBQWlCO0FBQ3JCOztBQUVBO0lBQ0ksZ0JBQWdCO0lBQ2hCLFlBQVk7QUFDaEI7O0FBRUE7SUFDSSxrQkFBa0I7SUFDbEIsZ0JBQWdCO0lBQ2hCLFlBQVk7SUFDWixZQUFZO0lBQ1osV0FBVztBQUNmOztBQUdBO0lBQ0ksWUFBWTtJQUNaLGtCQUFrQjtBQUN0Qjs7QUFFQTtJQUNJLG1CQUFtQjtJQUNuQixZQUFZO0lBQ1osaUJBQWlCO0FBQ3JCOztBQUVBO0lBQ0ksbUJBQW1CO0lBQ25CLFlBQVk7SUFDWixpQkFBaUI7QUFDckI7O0FBRUE7SUFDSSxlQUFlO0lBQ2YsZUFBZTtBQUNuQjs7QUFFQTtJQUNJLGVBQWU7SUFDZixrQkFBa0I7RUFDcEI7O0FBRUY7SUFDSSxZQUFZO0FBQ2hCIiwiZmlsZSI6InNyYy9hcHAvbWVudGVlL21lbnRlZS1jb2xsZWdlL21lbnRlZS1jb2xsZWdlLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJcblxuLmJ0bi13cmFwcGVyIHtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cbiNjb2xsZWdlX3VwZGF0ZXtcbiAgICBtYXJnaW4tYm90dG9tOiAzMHB4O1xuICAgIHdpZHRoOiA1MDBweDtcbiAgICBtYXJnaW46IDMwcHggYXV0bztcbn1cblxuLmFjdGlvbntcbiAgICBtYXJnaW4tdG9wOiAyMHB4O1xuICAgIGhlaWdodDogNDBweDtcbn1cblxuLnZvbHRhcntcbiAgICBtYXJnaW4tcmlnaHQ6IDMwcHg7XG4gICAgYmFja2dyb3VuZDogbm9uZTtcbiAgICBib3JkZXI6IG5vbmU7XG4gICAgY29sb3I6ICM5OTk5O1xuICAgIGZsb2F0OiBsZWZ0O1xufVxuXG5cbi5zYWx2YXJ7XG4gICAgZmxvYXQ6IHJpZ2h0O1xuICAgIG1hcmdpbi1yaWdodDogMTFweDtcbn1cblxuI2V4YW1zX3VwZGF0ZXtcbiAgICBtYXJnaW4tYm90dG9tOiAzMHB4O1xuICAgIHdpZHRoOiA1MDBweDtcbiAgICBtYXJnaW46IDMwcHggYXV0bztcbn1cblxuI3VwbG9hZGVkX2Vzc2F5c3tcbiAgICBtYXJnaW4tYm90dG9tOiAzMHB4O1xuICAgIHdpZHRoOiA1MDBweDtcbiAgICBtYXJnaW46IDMwcHggYXV0bztcbn1cblxuLmVzc2F5LWxpc3Rpbmd7XG4gICAgZGlzcGxheTogaW5saW5lO1xuICAgIG1hcmdpbi10b3A6IDVweDtcbn1cblxuaHJ7XG4gICAgbWFyZ2luLXRvcDogNXB4O1xuICAgIG1hcmdpbi1ib3R0b206IDZweDtcbiAgfVxuXG4uYXBhZ2Fye1xuICAgIGZsb2F0OiByaWdodDtcbn1cbiJdfQ== */"

/***/ }),

/***/ "./src/app/mentee/mentee-college/mentee-college.component.html":
/*!*********************************************************************!*\
  !*** ./src/app/mentee/mentee-college/mentee-college.component.html ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n<!DOCTYPE html>\n<html>\n  <head>\n    <title></title>\n    <link rel=\"stylesheet\" href=\"https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css\" integrity=\"sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T\" crossorigin=\"anonymous\">\n  </head>\n  <body>\n  <div class=\"container\">\n\n    <div *ngIf=\"role=='mentee' || role=='admin'\" id=\"college_update\" class=\"shadow-sm p-3 mb-5 bg-white rounded\">\n        <h1>Atualize sua College List!</h1>\n        <form [formGroup]=\"userForm\" (ngSubmit)=\"postCollegeList()\">\n\n          <div class=\"form-group\">\n            <angular2-multiselect\n                                  [data]=\"isoCode\"\n                                  [(ngModel)]=\"isoControl\"\n                                  [settings]=\"settingsIso\"\n                                  (onSelect)=\"onIsoSelect($event)\"\n                                  (onDeSelect)=\"onIsoDeSelect($event)\"\n                                  formControlName=\"isoList\"\n                                  >\n                  <c-item>\n                      <ng-template let-item=\"item\">\n                        {{item.country_iso_code}}\n                      </ng-template>\n                  </c-item>\n            </angular2-multiselect>\n          </div>\n\n          <div class=\"form-group\" *ngIf=\"selectedUnis\">\n          <angular2-multiselect *ngIf=\"selectedUnis.length == helper3\"\n                                [data]=\"universitiesIso\"\n                                [(ngModel)]=\"selectedUnisIso\"\n                                [loading] = \"loading\"\n                                [settings]=\"settingsUnis\"\n                                (onSelect)=\"onItemSelect($event)\"\n                                (onDeSelect)=\"OnItemDeSelect($event)\"\n                                formControlName=\"uniList\"\n                                ><c-item>\n                    <ng-template let-item=\"item\">\n                      {{item.name}}\n                    </ng-template>\n            </c-item>\n          </angular2-multiselect>\n          </div>\n\n\n          <div class=\"action\">\n              <button *ngIf=\"role=='mentee'\" type=\"submit\" class=\"btn btn-sm btn-success salvar\">Salvar</button>\n              <button type=\"button\" class=\"btn btn-sm btn-info\" (click)=\"goBack()\">Voltar</button>\n          </div>\n\n\n        </form>\n    </div>\n\n    </div>\n\n    <div id=\"uploaded_essays\" class=\"shadow-sm p-3 mb-5 bg-white rounded\">\n\n\n    <h1>College List:</h1>\n    <div *ngFor=\"let selectedUni of selectedUnis\">\n      <div class=\"essay-listing\" *ngIf=\"role == 'admin' || role == 'mentee' || role=='mentor'\">\n        {{ selectedUni.name }}\n        <button *ngIf=\"role=='mentee' || role == 'admin'\" type=\"button\" class=\"btn btn-sm btn-danger apagar\" (click)=\"excludeUniversity(selectedUni.upload_id)\">\n            Remover Universidade\n          </button>\n       \n        <hr>\n      </div>\n      </div>\n      <button type=\"button\" class=\"btn btn btn-sm btn-info\" (click)=\"goBack()\">Voltar</button>\n    </div>\n    </body>\n    </html>\n"

/***/ }),

/***/ "./src/app/mentee/mentee-college/mentee-college.component.ts":
/*!*******************************************************************!*\
  !*** ./src/app/mentee/mentee-college/mentee-college.component.ts ***!
  \*******************************************************************/
/*! exports provided: MenteeCollegeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MenteeCollegeComponent", function() { return MenteeCollegeComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _shared_mentee_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../shared/mentee.service */ "./src/app/mentee/shared/mentee.service.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var auth0_web__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! auth0-web */ "./node_modules/auth0-web/dist/index.js");
/* harmony import */ var auth0_web__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(auth0_web__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");








var MenteeCollegeComponent = /** @class */ (function () {
    function MenteeCollegeComponent(formBuilder, http, getMentee, menteeService, route, cd, zone, _location) {
        this.formBuilder = formBuilder;
        this.http = http;
        this.getMentee = getMentee;
        this.menteeService = menteeService;
        this.route = route;
        this.cd = cd;
        this.zone = zone;
        this._location = _location;
        this.API_URL = 'https://brasa-pre.herokuapp.com/api';
        this.universities = [];
        this.universitiesIso = [];
        this.isoCode = [];
        this.selectedUnis = new Array();
        this.selectedUnisIso = new Array();
        //public selectedIsoCodes: University[]=[];
        // public selectedUnis1: University[]=[];
        this.helper = [];
        this.categoria = new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"]();
        this.categories = ['teste', 'teste2'];
        this.itemList = [];
        this.selectedItems = [];
        this.settingsUnis = {};
        this.settingsIso = {};
        this.helper2 = 0;
        this.helper3 = -1;
        this.loading = false;
        this.uniSelectedChange = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({ 'Content-Type': 'application/json',
            'Access-Control-Allow-Origin': '*',
            'Access-Control-Allow-Methods': 'POST, GET, OPTIONS, PUT',
            "Access-Control-Allow-Headers": "Origin, X-Requested-With, Content-Type, Accept"
        });
        this.userForm = this.formBuilder.group({
            uniList: [],
            isoList: ''
        });
        this.getUniList(); // pegando todas universities
        this.userNickname = auth0_web__WEBPACK_IMPORTED_MODULE_6__["getProfile"]().nickname;
        this.getUsername(this.userNickname);
        this.menteeId = this.route.snapshot.paramMap.get('id');
        this.selectColleges(this.menteeId); //pegando college list do 'menteeId' para pré selecionar
        //this.selectedUnis1 = this.selectedUnis
        //let timer = of(this.selectColleges(this.menteeId)).delay(5000);
        //timer.subscribe(() => this.selectColleges(this.menteeId));
        console.log(this.selectedUnis, '00');
        console.log(this.userForm, 'here');
        /*
        this.selectedUnis1.push({id: 693, name: "Seattle University"})
        this.selectedUnis1.push({id: 695, name: "Sewanee, University of the South"})
        this.selectedUnis1.push({id: 698, name: "Shippensburg University of Pennsylvania"})
        this.selectedUnis1.push({id: 696,name: "Shawnee State University"});/*
        console.log(this.selectedUnis1.constructor, '1')
        console.log(this.selectedUnis.constructor, '0')
        console.log(this.selectedUnis, this.selectedUnis1)*/
        this.settingsIso = {
            singleSelection: true,
            text: "País",
            labelKey: 'country_iso_code',
            primaryKey: 'country_iso_code',
            classes: "myclass custom-class"
        };
        this.settingsUnis = {
            singleSelection: false,
            text: "Select College List",
            enableFilterSelectAll: false,
            enableSearchFilter: true,
            lazyLoading: true,
            labelKey: "name",
            limitSelection: 20,
            classes: "myclass custom-class",
            disabled: true
        };
    }
    MenteeCollegeComponent.prototype.getUsername = function (username) {
        var _this = this;
        this.menteeService.getUser(username).subscribe(function (usuario) {
            _this.role = usuario.role_name;
        });
    };
    MenteeCollegeComponent.prototype.onIsoSelect = function (item) {
        var _this = this;
        console.log(item.country_iso_code, 'klasdflak');
        this.universitiesIso = [];
        this.selectedUnisIso = [];
        this.universities.forEach(function (university) {
            if (university.country_iso_code == item.country_iso_code) {
                _this.universitiesIso.push(university);
            }
        });
        this.selectedUnisIso.forEach(function (university) {
            if (university.country_iso_code == item.country_iso_code) {
                _this.selectedUnisIso.push(university);
            }
        });
        this.settingsUnis = {
            singleSelection: false,
            text: "Select College List",
            enableFilterSelectAll: false,
            enableSearchFilter: true,
            lazyLoading: true,
            labelKey: "name",
            limitSelection: 20,
            classes: "myclass custom-class",
            disabled: false
        };
    };
    MenteeCollegeComponent.prototype.onIsoDeSelect = function (item) {
        this.settingsUnis = {
            singleSelection: false,
            text: "Select College List",
            enableFilterSelectAll: false,
            enableSearchFilter: true,
            lazyLoading: true,
            labelKey: "name",
            limitSelection: 20,
            classes: "myclass custom-class",
            disabled: true
        };
    };
    MenteeCollegeComponent.prototype.onItemSelect = function (item) {
        this.helper3 = this.helper3 + 1;
        console.log(item);
        this.selectedUnis.push({ id: 0, name: item.name });
    };
    MenteeCollegeComponent.prototype.goBack = function () {
        this._location.back();
    };
    MenteeCollegeComponent.prototype.OnItemDeSelect = function (item) {
        this.helper3 = this.helper3 - 1;
        this.selectedUnis.pop();
    };
    MenteeCollegeComponent.prototype.excludeUniversity = function (id) {
        var _this = this;
        var httpOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
                'Content-Type': 'application/json',
                'Access-Control-Allow-Origin': '*',
                'Access-Control-Allow-Methods': 'POST, GET, OPTIONS, PUT',
                "Access-Control-Allow-Headers": "Origin, X-Requested-With, Content-Type, Accept",
                'Authorization': "Bearer " + auth0_web__WEBPACK_IMPORTED_MODULE_6__["getAccessToken"]()
            })
        };
        console.log(auth0_web__WEBPACK_IMPORTED_MODULE_6__["getAccessToken"]());
        this.http.delete(this.API_URL + "/university_applications/" + id, httpOptions).subscribe(function (data) {
        }, function (error) {
            console.log(error);
        });
        ;
        this.selectedUnis.forEach(function (uni, index) {
            console.log(uni.id);
            if (uni.upload_id == id) {
                _this.selectedUnis.splice(index, 1);
            }
        });
    };
    MenteeCollegeComponent.prototype.postCollegeList = function () {
        var _this = this;
        // pegando ids
        var universitiesId = [];
        this.userForm.value.uniList.forEach(function (test) {
            universitiesId.push(test.id);
        });
        //console.log(universitiesId)
        var httpOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
                'Content-Type': 'application/json',
                'Access-Control-Allow-Origin': '*',
                'Access-Control-Allow-Methods': 'POST, GET, OPTIONS, PUT',
                "Access-Control-Allow-Headers": "Origin, X-Requested-With, Content-Type, Accept",
                'Authorization': "Bearer " + auth0_web__WEBPACK_IMPORTED_MODULE_6__["getAccessToken"]()
            })
        };
        //http://brasa-pre.herokuapp.com/api/university_application_for_mentee
        universitiesId.forEach(function (ids) {
            console.log(ids);
            _this.http.post(_this.API_URL + "/university_applications", { mentee_id: _this.menteeId,
                university_id: ids }, httpOptions).subscribe(function (data) {
                //console.log(data['_body']);
                _this._location.back();
            }, function (error) {
                console.log(error);
                _this._location.back();
            });
        });
    };
    ;
    MenteeCollegeComponent.prototype.selectColleges = function (id) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                this.menteeService.getMenteeCollegeList(id).subscribe(function (tests) {
                    _this.helper3 = tests.university_applications.length;
                    console.log(tests, 'tem upload id ?');
                    tests.university_applications.forEach(function (unis) {
                        _this.menteeService.getCollegeNameById(unis.university_id).subscribe(function (collegeName) {
                            _this.selectedUnis.push({ id: unis.university_id, name: collegeName.name, upload_id: unis.id });
                            //this.selectedIsoCodes.push({isoCode: collegeName.country_iso_code});
                        });
                    });
                    /*
                    for (this.helper2; this.helper2< tests.university_applications.length;this.helper2++){
                      console.log(this.helper2)
                      console.log(tests.university_applications[this.helper2].university_id)
                      this.menteeService.getCollegeNameById(tests.university_applications[this.helper2].university_id).subscribe(collegeName=>{
                        if (this.helper2 < this.helper3){
                          console.log('he')
                        this.selectedUnis.push({id: tests.university_applications[this.helper2].university_id, name: collegeName.name});
                        console.log(this.selectedUnis.length, this.helper3)}
                      })
              
                    }*/
                    // this.selectedUnis = this.helper
                    console.log(_this.selectedUnis, 'lllololo');
                    return _this.selectedUnis;
                    /*
                    .forEach(unis => {
                      console.log(unis, 'herere')
                      this.menteeService.getCollegeNameById(unis.university_id).subscribe(collegeName=>{
                        this.helper.push({id: unis.university_id, name: collegeName.name});
                      })
                    }).then(()=>{
                      this.uniSelectedChange.emit(this.selectedUnis);
                      this.cd.detectChanges();
                      this.loading = true
                      return this.selectedUnis, this.loading = true
                    })*/
                });
                return [2 /*return*/];
            });
        });
    };
    ;
    /*public logForm(){
      for (let i =0; i< this.collegeArray.length; i++){
        this.http.post(`${this.API_URL}/universities/`, this.collegeArray[i], {headers: this.headers}).subscribe(data => {
            console.log(data['_body']);
           }, error => {
            console.log(error);
          });
      };
    };*/
    MenteeCollegeComponent.prototype.getUniList = function () {
        var _this = this;
        this.menteeService.getAllUniversities().subscribe(function (tests) {
            _this.universities = tests['objects'];
            console.log(tests['objects'], '<<<');
            var result = [];
            var codes = [];
            var mapUniversities = new Map();
            for (var _i = 0, _a = tests['objects']; _i < _a.length; _i++) {
                var item = _a[_i];
                if (!mapUniversities.has(item.name)) {
                    mapUniversities.set(item.name, item.name); // set any value to Map
                    result.push({
                        id: item.id,
                        name: item.name,
                        country_iso_code: item.country_iso_code
                    });
                }
                ;
                if (!mapUniversities.has(item.country_iso_code)) {
                    mapUniversities.set(item.country_iso_code, item.country_iso_code); // set any value to Map
                    codes.push({
                        country_iso_code: item.country_iso_code
                    });
                }
                ;
            }
            ;
            _this.isoCode = codes;
            _this.universities = result;
        });
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Array)
    ], MenteeCollegeComponent.prototype, "selectedUnis", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Array)
    ], MenteeCollegeComponent.prototype, "selectedUnisIso", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], MenteeCollegeComponent.prototype, "uniSelectedChange", void 0);
    MenteeCollegeComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-mentee-college',
            template: __webpack_require__(/*! ./mentee-college.component.html */ "./src/app/mentee/mentee-college/mentee-college.component.html"),
            styles: [__webpack_require__(/*! ./mentee-college.component.css */ "./src/app/mentee/mentee-college/mentee-college.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormBuilder"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"],
            _shared_mentee_service__WEBPACK_IMPORTED_MODULE_4__["MenteeService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"],
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"],
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"], _angular_common__WEBPACK_IMPORTED_MODULE_7__["Location"]])
    ], MenteeCollegeComponent);
    return MenteeCollegeComponent;
}());



/***/ }),

/***/ "./src/app/mentee/mentee-detail/mentee-detail.component.css":
/*!******************************************************************!*\
  !*** ./src/app/mentee/mentee-detail/mentee-detail.component.css ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "#update_info{\n    margin-bottom: 30px;\n    width: 500px;\n    margin: 30px auto;\n}\n\n.action{\n    height: 40px;\n    margin-top: 20px;\n}\n\n.voltar{\n    margin-right: 30px;\n    background: none;\n    border: none;\n    color: #9999;\n    float: left;\n}\n\n.salvar{\n\n    float: right;\n    margin-right: 11px;\n}\n\n#info{\n    font-size: 14px;\n    margin-bottom: 30px;\n    width: 500px;\n    margin: 30px auto;\n}\n\nhr{\n    margin-top: 5px;\n    margin-bottom: 6px;\n  }\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbWVudGVlL21lbnRlZS1kZXRhaWwvbWVudGVlLWRldGFpbC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksbUJBQW1CO0lBQ25CLFlBQVk7SUFDWixpQkFBaUI7QUFDckI7O0FBRUE7SUFDSSxZQUFZO0lBQ1osZ0JBQWdCO0FBQ3BCOztBQUVBO0lBQ0ksa0JBQWtCO0lBQ2xCLGdCQUFnQjtJQUNoQixZQUFZO0lBQ1osWUFBWTtJQUNaLFdBQVc7QUFDZjs7QUFHQTs7SUFFSSxZQUFZO0lBQ1osa0JBQWtCO0FBQ3RCOztBQUVBO0lBQ0ksZUFBZTtJQUNmLG1CQUFtQjtJQUNuQixZQUFZO0lBQ1osaUJBQWlCO0FBQ3JCOztBQUVBO0lBQ0ksZUFBZTtJQUNmLGtCQUFrQjtFQUNwQiIsImZpbGUiOiJzcmMvYXBwL21lbnRlZS9tZW50ZWUtZGV0YWlsL21lbnRlZS1kZXRhaWwuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIiN1cGRhdGVfaW5mb3tcbiAgICBtYXJnaW4tYm90dG9tOiAzMHB4O1xuICAgIHdpZHRoOiA1MDBweDtcbiAgICBtYXJnaW46IDMwcHggYXV0bztcbn1cblxuLmFjdGlvbntcbiAgICBoZWlnaHQ6IDQwcHg7XG4gICAgbWFyZ2luLXRvcDogMjBweDtcbn1cblxuLnZvbHRhcntcbiAgICBtYXJnaW4tcmlnaHQ6IDMwcHg7XG4gICAgYmFja2dyb3VuZDogbm9uZTtcbiAgICBib3JkZXI6IG5vbmU7XG4gICAgY29sb3I6ICM5OTk5O1xuICAgIGZsb2F0OiBsZWZ0O1xufVxuXG5cbi5zYWx2YXJ7XG5cbiAgICBmbG9hdDogcmlnaHQ7XG4gICAgbWFyZ2luLXJpZ2h0OiAxMXB4O1xufVxuXG4jaW5mb3tcbiAgICBmb250LXNpemU6IDE0cHg7XG4gICAgbWFyZ2luLWJvdHRvbTogMzBweDtcbiAgICB3aWR0aDogNTAwcHg7XG4gICAgbWFyZ2luOiAzMHB4IGF1dG87XG59XG5cbmhye1xuICAgIG1hcmdpbi10b3A6IDVweDtcbiAgICBtYXJnaW4tYm90dG9tOiA2cHg7XG4gIH0iXX0= */"

/***/ }),

/***/ "./src/app/mentee/mentee-detail/mentee-detail.component.html":
/*!*******************************************************************!*\
  !*** ./src/app/mentee/mentee-detail/mentee-detail.component.html ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!DOCTYPE html>\n<html>\n  <head>\n    <title></title>\n    <link rel=\"stylesheet\" href=\"https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css\" integrity=\"sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T\" crossorigin=\"anonymous\">\n  </head>\n  <body>\n  <div class=\"container\">\n\n\n  <div *ngIf=\"role=='mentee' || role=='admin'\" id=\"update_info\" class=\"shadow-sm p-3 mb-5 bg-white rounded\">\n      <h1>Atualize suas informações!</h1>\n      <form [formGroup]=\"todo\" (ngSubmit)=\"logForm()\">\n        <div class=\"form-group\">\n          <input placeholder=\"Nome\" type=\"text\" class=\"form-control\" [(ngModel)]=\"menteeDados.first_name\" [ngModelOptions]=\"{standalone: true}\" required>\n        </div>\n\n\n        <div class=\"form-group\">\n          <input placeholder=\"Sobrenome\" type=\"text\" class=\"form-control\"  [(ngModel)]=\"menteeDados.last_name\" [ngModelOptions]=\"{standalone: true}\">\n        </div>\n\n\n        <div class=\"form-group\">\n          <input placeholder=\"Cidade\" type=\"text\" class=\"form-control\"  [(ngModel)]=\"menteeDados.city\" [ngModelOptions]=\"{standalone: true}\">\n        </div>\n\n\n        <div class=\"form-group\">\n          <input placeholder=\"Estado\" type=\"text\" class=\"form-control\"  [(ngModel)]=\"menteeDados.state\" [ngModelOptions]=\"{standalone: true}\">\n        </div>\n\n\n        <mat-form-field>\n          <mat-select [(value)]=\"menteeDados.financial_aid\" placeholder=\"Precisa de financial aid ?\">\n            <mat-option [value]=\"true\">Sim</mat-option>\n            <mat-option [value]=\"false\">Não</mat-option>\n          </mat-select>\n        </mat-form-field>\n\n        <div class=\"action\">\n            <button type=\"submit\" class=\"btn btn-success btn-sm salvar\">Salvar Informações</button>\n            <button type=\"button\" class=\"btn btn-sm btn-info\" (click)=\"goBack()\">Voltar</button>\n        </div>\n\n      </form>\n  </div>\n\n\n\n      <div *ngIf=\"(role == 'mentor' || role == 'admin') && userNickname == username\">\n        <div id=\"info\" class=\"shadow-sm p-3 mb-5 bg-white rounded\">\n          <h1>Informações do seu mentee!</h1>\n          <div id=\"menteeDeck\">\n              <strong>Nome: </strong> <span>{{menteeDados.first_name}} {{menteeDados.last_name}}</span>\n              <hr>\n              <strong>Cidade: </strong> <span>{{menteeDados.city}}</span>\n              <hr>\n              <strong>Estado: </strong> <span>{{menteeDados.state}}</span>\n              <hr>\n              <strong>Financial Aid: </strong> <span *ngIf=\"menteeDados.financial_aid==1\">Sim</span> <span *ngIf=\"menteeDados.financial_aid==0\">Não</span>\n              <hr>\n              <span ><strong>Contato primário BRASA</strong></span>\n              <br>\n              <span ><strong>Email: </strong>{{ menteeDados.primary_contact_email }}</span>\n          </div>\n          <div class=\"action\">\n              <button type=\"button\" class=\"btn btn-sm btn-info\" (click)=\"goBack()\">\n                  Voltar\n                </button>\n          </div>\n        </div>\n    </div>\n\n    </div>\n  </body>\n</html>\n"

/***/ }),

/***/ "./src/app/mentee/mentee-detail/mentee-detail.component.ts":
/*!*****************************************************************!*\
  !*** ./src/app/mentee/mentee-detail/mentee-detail.component.ts ***!
  \*****************************************************************/
/*! exports provided: MenteeDetailComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MenteeDetailComponent", function() { return MenteeDetailComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _shared_mentee_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../shared/mentee.service */ "./src/app/mentee/shared/mentee.service.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var auth0_web__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! auth0-web */ "./node_modules/auth0-web/dist/index.js");
/* harmony import */ var auth0_web__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(auth0_web__WEBPACK_IMPORTED_MODULE_7__);








var MenteeDetailComponent = /** @class */ (function () {
    function MenteeDetailComponent(formBuilder, http, getMentee, menteeService, route, _location) {
        //this.headers = new HttpHeaders({'Content-Type': 'application/json',
        //'Access-Control-Allow-Origin': '*',
        //'Access-Control-Allow-Methods': 'POST, GET, OPTIONS, PUT',
        //"Access-Control-Allow-Headers": "Origin, X-Requested-With, Content-Type, Accept"
        //});
        this.formBuilder = formBuilder;
        this.http = http;
        this.getMentee = getMentee;
        this.menteeService = menteeService;
        this.route = route;
        this._location = _location;
        this.API_URL = 'https://brasa-pre.herokuapp.com/api';
        this.satArray = [];
        this.scoresArray = [];
        this.satSubjectsArray = [];
        this.menteeProfile = [];
        this.menteeDados = [];
        this.headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({ 'Authorization': "Bearer " + auth0_web__WEBPACK_IMPORTED_MODULE_7__["getAccessToken"]()
        });
        this.userNickname = auth0_web__WEBPACK_IMPORTED_MODULE_7__["getProfile"]().nickname;
        this.menteeDados.push({ first_name: '',
            last_name: '',
            city: '',
            state: '',
            financial_aid: '',
            primary_contact_email: ''
        });
        this.todo = this.formBuilder.group({});
        this.menteeId = this.route.snapshot.paramMap.get('id');
        this.getInformation();
        this.getUsername(this.userNickname);
        /*this.getMentee.get(`${this.API_URL}/mentees`).subscribe(data => {
          this.todo.value.username = data["objects"][0].username
          console.log(this.todo.value.username)
            //"username": data["objects"][0].username,
          //this.menteeProfile.push(data['heroesUrl']),
          //this.menteeProfile.push(data['textfile'])
            console.log(data['_body']);
           }, error => {
            console.log(error);
          });*/
    }
    MenteeDetailComponent.buildHttpOptions = function () {
        var httpOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
                'Authorization': "Bearer " + auth0_web__WEBPACK_IMPORTED_MODULE_7__["getAccessToken"]()
            }),
        };
        return httpOptions;
    };
    MenteeDetailComponent.prototype.getUsername = function (username) {
        var _this = this;
        this.menteeService.getUser(username).subscribe(function (usuario) {
            _this.role = usuario.role_name;
            _this.username = usuario.username;
        });
    };
    MenteeDetailComponent.prototype.getInformation = function () {
        var _this = this;
        this.menteeService.getMenteeCollegeList(this.menteeId).subscribe(function (mentee) {
            console.log(mentee, ':::');
            _this.menteeDados = {
                first_name: mentee.first_name,
                last_name: mentee.last_name,
                city: mentee.city,
                state: mentee.state,
                financial_aid: mentee.financial_aid,
                universities: mentee.universities,
                primary_contact_email: mentee.primary_contact.email
            };
        });
    };
    MenteeDetailComponent.prototype.goBack = function () {
        this._location.back();
    };
    MenteeDetailComponent.prototype.logForm = function () {
        var _this = this;
        console.log(this.menteeDados);
        //console.log(this.http.post(`${this.API_URL}/mentees/` + this.menteeId, this.todo.value, {headers: this.headers}))
        console.log('ˆˆ');
        this.http.put(this.API_URL + "/mentees/" + this.menteeId, {
            "first_name": this.menteeDados.first_name,
            "last_name": this.menteeDados.last_name,
            "city": this.menteeDados.city,
            "state": this.menteeDados.state,
            //"email": this.todo.value.email
            "financial_aid": this.menteeDados.financial_aid,
            "universities": this.menteeDados.universities
        }, { headers: this.headers, observe: "response" }).toPromise().then(function (data) {
            if (data.status == 200) {
                _this._location.back();
                //this.navCtrl.goBack("/tabs/mentee/listing/1");
            }
        }).catch(function (err) { console.log(err); });
        /*, error => {
          console.log(error);
        });*/
        /*for (let i =0; i< this.scoresArray.length; i++){
          this.http.post(`${this.API_URL}/exams`, this.scoresArray[i], {headers: this.headers}).subscribe(data => {
              console.log(data['_body']);
             }, error => {
              console.log(error);
            });
        };*/
    };
    MenteeDetailComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-mentee-detail',
            template: __webpack_require__(/*! ./mentee-detail.component.html */ "./src/app/mentee/mentee-detail/mentee-detail.component.html"),
            styles: [__webpack_require__(/*! ./mentee-detail.component.css */ "./src/app/mentee/mentee-detail/mentee-detail.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormBuilder"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"],
            _shared_mentee_service__WEBPACK_IMPORTED_MODULE_4__["MenteeService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"],
            _angular_common__WEBPACK_IMPORTED_MODULE_6__["Location"]])
    ], MenteeDetailComponent);
    return MenteeDetailComponent;
}());



/***/ }),

/***/ "./src/app/mentee/mentee-essay/mentee-essay.component.css":
/*!****************************************************************!*\
  !*** ./src/app/mentee/mentee-essay/mentee-essay.component.css ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n\n.btn-wrapper {\n    text-align: center;\n}\n\n#essay{\n    width: 500px;\n    height: 250px;\n    margin: 29px auto;\n}\n\n.action{\n    height: 30px;\n    /* display: table-row-group; */\n    margin-top: -6px;\n}\n\n.voltar{\n    margin-top: 32px;\n    float: left;\n}\n\n.voltar1{\n    margin-top: 5px;\n}\n\n.salvar{\n    margin-top: 32px;\n    float: right;\n    margin-right: 11px;\n}\n\n.apagar-btn{\n    float: right;\n}\n\n.essay-listing{\n    margin-top: 20px;\n}\n\n#uploaded_essays{\n    margin-bottom: 30px;\n    width: 500px;\n    margin: 30px auto;\n}\n\nhr{\n    margin-top: 5px;\n    margin-bottom: 6px;\n  }\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbWVudGVlL21lbnRlZS1lc3NheS9tZW50ZWUtZXNzYXkuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUVBO0lBQ0ksa0JBQWtCO0FBQ3RCOztBQUVBO0lBQ0ksWUFBWTtJQUNaLGFBQWE7SUFDYixpQkFBaUI7QUFDckI7O0FBRUE7SUFDSSxZQUFZO0lBQ1osOEJBQThCO0lBQzlCLGdCQUFnQjtBQUNwQjs7QUFFQTtJQUNJLGdCQUFnQjtJQUNoQixXQUFXO0FBQ2Y7O0FBRUE7SUFDSSxlQUFlO0FBQ25COztBQUVBO0lBQ0ksZ0JBQWdCO0lBQ2hCLFlBQVk7SUFDWixrQkFBa0I7QUFDdEI7O0FBRUE7SUFDSSxZQUFZO0FBQ2hCOztBQUVBO0lBQ0ksZ0JBQWdCO0FBQ3BCOztBQUVBO0lBQ0ksbUJBQW1CO0lBQ25CLFlBQVk7SUFDWixpQkFBaUI7QUFDckI7O0FBRUE7SUFDSSxlQUFlO0lBQ2Ysa0JBQWtCO0VBQ3BCIiwiZmlsZSI6InNyYy9hcHAvbWVudGVlL21lbnRlZS1lc3NheS9tZW50ZWUtZXNzYXkuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIlxuXG4uYnRuLXdyYXBwZXIge1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cblxuI2Vzc2F5e1xuICAgIHdpZHRoOiA1MDBweDtcbiAgICBoZWlnaHQ6IDI1MHB4O1xuICAgIG1hcmdpbjogMjlweCBhdXRvO1xufVxuXG4uYWN0aW9ue1xuICAgIGhlaWdodDogMzBweDtcbiAgICAvKiBkaXNwbGF5OiB0YWJsZS1yb3ctZ3JvdXA7ICovXG4gICAgbWFyZ2luLXRvcDogLTZweDtcbn1cblxuLnZvbHRhcntcbiAgICBtYXJnaW4tdG9wOiAzMnB4O1xuICAgIGZsb2F0OiBsZWZ0O1xufVxuXG4udm9sdGFyMXtcbiAgICBtYXJnaW4tdG9wOiA1cHg7XG59XG5cbi5zYWx2YXJ7XG4gICAgbWFyZ2luLXRvcDogMzJweDtcbiAgICBmbG9hdDogcmlnaHQ7XG4gICAgbWFyZ2luLXJpZ2h0OiAxMXB4O1xufVxuXG4uYXBhZ2FyLWJ0bntcbiAgICBmbG9hdDogcmlnaHQ7XG59XG5cbi5lc3NheS1saXN0aW5ne1xuICAgIG1hcmdpbi10b3A6IDIwcHg7XG59XG5cbiN1cGxvYWRlZF9lc3NheXN7XG4gICAgbWFyZ2luLWJvdHRvbTogMzBweDtcbiAgICB3aWR0aDogNTAwcHg7XG4gICAgbWFyZ2luOiAzMHB4IGF1dG87XG59XG5cbmhye1xuICAgIG1hcmdpbi10b3A6IDVweDtcbiAgICBtYXJnaW4tYm90dG9tOiA2cHg7XG4gIH0iXX0= */"

/***/ }),

/***/ "./src/app/mentee/mentee-essay/mentee-essay.component.html":
/*!*****************************************************************!*\
  !*** ./src/app/mentee/mentee-essay/mentee-essay.component.html ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!DOCTYPE html>\n<html>\n  <head>\n    <title></title>\n    <link rel=\"stylesheet\" href=\"https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css\" integrity=\"sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T\" crossorigin=\"anonymous\">\n  </head>\n  <body>\n    <div class=\"container\">\n      <div *ngIf=\"role == 'mentee' || role == 'admin'\" class=\"container\">\n          <div id=\"essay\" class=\" shadow-sm p-3 mb-5 bg-white rounded\">\n            <h1>Envie o link do Google Docs</h1>\n\n            <form [formGroup]=\"todo\" (ngSubmit)=\"logForm()\">\n                <input placeholder=\"Essay Título\" type=\"text\" class=\"form-control\" [(ngModel)]=\"title\" [ngModelOptions]=\"{standalone: true}\" required>\n                <br>\n                <input placeholder=\"Essay link\" type=\"text\" class=\"form-control\" [(ngModel)]=\"link\" [ngModelOptions]=\"{standalone: true}\" required>\n                <button type=\"button\" class=\"btn voltar btn btn-sm btn-info\" (click)=\"goBack()\">Voltar</button>\n                <button type=\"submit\" class=\"btn btn-sm btn-success salvar\">Adicionar</button>\n                \n            </form>\n        </div>\n\n      </div>\n        <div id=\"uploaded_essays\" class=\"shadow-sm p-3 mb-5 bg-white rounded\">\n          <h1>Essays adicionadas:</h1>\n          <div *ngFor=\"let essay of essays\">\n            <div class=\"essay-listing\" *ngIf=\"essay.username == menteeName || essay.username == userNickname || role == 'admin'\">\n\n              <a href=\"{{ essay.link }}\" target=\"_blank\">{{ essay.title }}</a>\n              <div class=\"action apagar-btn\">\n                <button *ngIf=\"role=='mentee' || role == 'admin'\" type=\"button\" class=\"btn btn-sm btn-danger apagar\" (click)=\"excludeEssay(essay.upload_id)\">\n                  Apagar essay\n                </button>\n              </div>\n              <hr>\n            </div>\n          </div>\n          <div class=\"action\">\n            <button type=\"button\" class=\"btn btn voltar1 btn-sm btn-info\" (click)=\"goBack()\">\n                Voltar\n            </button>\n          </div>\n      </div>\n  </div>\n</body>\n</html>\n"

/***/ }),

/***/ "./src/app/mentee/mentee-essay/mentee-essay.component.ts":
/*!***************************************************************!*\
  !*** ./src/app/mentee/mentee-essay/mentee-essay.component.ts ***!
  \***************************************************************/
/*! exports provided: MenteeEssayComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MenteeEssayComponent", function() { return MenteeEssayComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _shared_mentee_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../shared/mentee.service */ "./src/app/mentee/shared/mentee.service.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var auth0_web__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! auth0-web */ "./node_modules/auth0-web/dist/index.js");
/* harmony import */ var auth0_web__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(auth0_web__WEBPACK_IMPORTED_MODULE_6__);







var MenteeEssayComponent = /** @class */ (function () {
    /*AddEssay(){
      this.essayArray.push({'link':''});
    };
    RemoveEssay(idx){
      this.essayArray.splice(idx, 1);
    };*/
    function MenteeEssayComponent(formBuilder, http, getMentee, _location, menteeService) {
        this.formBuilder = formBuilder;
        this.http = http;
        this.getMentee = getMentee;
        this._location = _location;
        this.menteeService = menteeService;
        this.API_URL = 'https://brasa-pre.herokuapp.com/api';
        this.userNickname = auth0_web__WEBPACK_IMPORTED_MODULE_6__["getProfile"]().nickname;
        this.headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({ 'Content-Type': 'application/json',
            'Access-Control-Allow-Origin': '*',
            'Access-Control-Allow-Methods': 'POST, GET, OPTIONS, PUT',
            "Access-Control-Allow-Headers": "Origin, X-Requested-With, Content-Type, Accept"
        });
        this.todo = this.formBuilder.group({});
        this.getScheduledExams();
        this.getUsername(this.userNickname);
    }
    MenteeEssayComponent.prototype.goBack = function () {
        this._location.back();
    };
    MenteeEssayComponent.prototype.getUsername = function (username) {
        var _this = this;
        this.menteeService.getUser(username).subscribe(function (usuario) {
            _this.role = usuario.role_name;
            _this.username = usuario.username;
            if (_this.role == 'mentor') {
                _this.menteeService.getMentor(_this.userNickname).subscribe(function (mentor) {
                    _this.getMenteeName(mentor.id);
                });
            }
        });
    };
    MenteeEssayComponent.prototype.getMenteeName = function (mentorId) {
        var _this = this;
        this.menteeService.getMenteeFromMentor(mentorId).subscribe(function (usuario) {
            _this.menteeName = usuario.username;
        });
    };
    MenteeEssayComponent.prototype.logForm = function () {
        var _this = this;
        var httpOptions = _shared_mentee_service__WEBPACK_IMPORTED_MODULE_3__["MenteeService"].buildHttpOptions();
        this.http.post(this.API_URL + "/uploads", {
            "link": this.link,
            "username": this.userNickname,
            "title": this.title
        }, httpOptions).subscribe(function (data) {
            _this.getScheduledExams();
            console.log(data['_body']);
        }, function (error) {
            console.log(error);
        });
        this.link = '';
        this.title = '';
    };
    ;
    MenteeEssayComponent.prototype.getScheduledExams = function () {
        var _this = this;
        this.menteeService.getAllEssays().subscribe(function (tests) {
            tests['objects'];
            _this.essays = tests['objects'];
        });
    };
    MenteeEssayComponent.prototype.excludeEssay = function (id) {
        var _this = this;
        var httpOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
                'Content-Type': 'application/json',
                'Access-Control-Allow-Origin': '*',
                'Access-Control-Allow-Methods': 'POST, GET, OPTIONS, PUT',
                "Access-Control-Allow-Headers": "Origin, X-Requested-With, Content-Type, Accept",
                'Authorization': "Bearer " + auth0_web__WEBPACK_IMPORTED_MODULE_6__["getAccessToken"]()
            })
        };
        console.log(id);
        this.http.delete(this.API_URL + "/uploads/" + id, httpOptions).subscribe(function (data) {
        }, function (error) {
            console.log(error);
        });
        ;
        this.essays.forEach(function (essay, index) {
            console.log(essay.id);
            if (essay.upload_id == id) {
                _this.essays.splice(index, 1);
            }
        });
    };
    MenteeEssayComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-mentee-essay',
            template: __webpack_require__(/*! ./mentee-essay.component.html */ "./src/app/mentee/mentee-essay/mentee-essay.component.html"),
            styles: [__webpack_require__(/*! ./mentee-essay.component.css */ "./src/app/mentee/mentee-essay/mentee-essay.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"],
            _angular_common__WEBPACK_IMPORTED_MODULE_5__["Location"],
            _shared_mentee_service__WEBPACK_IMPORTED_MODULE_3__["MenteeService"]])
    ], MenteeEssayComponent);
    return MenteeEssayComponent;
}());



/***/ }),

/***/ "./src/app/mentee/mentee-information/mentee-information.component.css":
/*!****************************************************************************!*\
  !*** ./src/app/mentee/mentee-information/mentee-information.component.css ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".mat-card {\n    max-width: 500px;\n    margin: 40px auto;\n}\n    \n#menteeDeck {\n    margin-left: 20px;\n}\n    \n.content {\n    display: flex;\n    flex-wrap: wrap;\n  }\n    \n.child {\n    flex-grow: 1;\n    flex: 1 1 35%;\n    margin: 20px;\n    max-width: 200px;\n  }\n    \nhr{\n    margin-top: 3px;\n    margin-bottom: 3px;\n  }\n    \n.btn{\n    background-color: rgb(55,136,203);\n    color: white;\n  }\n    \n.btn:hover {\n    color: white;\n  }\n    \n.action{\n    margin-top: 20px;\n    height: 10px;\n}\n    \n.voltar{\n    margin-right: 30px;\n    background: none;\n    border: none;\n    color: #9999;\n    float: left;\n}\n    \n.mat-card-header{\n  display: flex;\n}\n    \n.first-column{\n  margin-left:-33px;\n  float: left;\n  flex: 80%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbWVudGVlL21lbnRlZS1pbmZvcm1hdGlvbi9tZW50ZWUtaW5mb3JtYXRpb24uY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLGdCQUFnQjtJQUNoQixpQkFBaUI7QUFDckI7O0FBRUE7SUFDSSxpQkFBaUI7QUFDckI7O0FBRUE7SUFDSSxhQUFhO0lBQ2IsZUFBZTtFQUNqQjs7QUFFQTtJQUNFLFlBQVk7SUFDWixhQUFhO0lBQ2IsWUFBWTtJQUNaLGdCQUFnQjtFQUNsQjs7QUFFQTtJQUNFLGVBQWU7SUFDZixrQkFBa0I7RUFDcEI7O0FBRUE7SUFDRSxpQ0FBaUM7SUFDakMsWUFBWTtFQUNkOztBQUVBO0lBQ0UsWUFBWTtFQUNkOztBQUVBO0lBQ0UsZ0JBQWdCO0lBQ2hCLFlBQVk7QUFDaEI7O0FBRUE7SUFDSSxrQkFBa0I7SUFDbEIsZ0JBQWdCO0lBQ2hCLFlBQVk7SUFDWixZQUFZO0lBQ1osV0FBVztBQUNmOztBQUVBO0VBQ0UsYUFBYTtBQUNmOztBQUVBO0VBQ0UsaUJBQWlCO0VBQ2pCLFdBQVc7RUFDWCxTQUFTO0FBQ1giLCJmaWxlIjoic3JjL2FwcC9tZW50ZWUvbWVudGVlLWluZm9ybWF0aW9uL21lbnRlZS1pbmZvcm1hdGlvbi5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLm1hdC1jYXJkIHtcbiAgICBtYXgtd2lkdGg6IDUwMHB4O1xuICAgIG1hcmdpbjogNDBweCBhdXRvO1xufVxuICAgIFxuI21lbnRlZURlY2sge1xuICAgIG1hcmdpbi1sZWZ0OiAyMHB4O1xufVxuXG4uY29udGVudCB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LXdyYXA6IHdyYXA7XG4gIH1cbiAgXG4gIC5jaGlsZCB7XG4gICAgZmxleC1ncm93OiAxO1xuICAgIGZsZXg6IDEgMSAzNSU7XG4gICAgbWFyZ2luOiAyMHB4O1xuICAgIG1heC13aWR0aDogMjAwcHg7XG4gIH1cblxuICBocntcbiAgICBtYXJnaW4tdG9wOiAzcHg7XG4gICAgbWFyZ2luLWJvdHRvbTogM3B4O1xuICB9XG5cbiAgLmJ0bntcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoNTUsMTM2LDIwMyk7XG4gICAgY29sb3I6IHdoaXRlO1xuICB9XG4gIFxuICAuYnRuOmhvdmVyIHtcbiAgICBjb2xvcjogd2hpdGU7XG4gIH1cblxuICAuYWN0aW9ue1xuICAgIG1hcmdpbi10b3A6IDIwcHg7XG4gICAgaGVpZ2h0OiAxMHB4O1xufVxuXG4udm9sdGFye1xuICAgIG1hcmdpbi1yaWdodDogMzBweDtcbiAgICBiYWNrZ3JvdW5kOiBub25lO1xuICAgIGJvcmRlcjogbm9uZTtcbiAgICBjb2xvcjogIzk5OTk7XG4gICAgZmxvYXQ6IGxlZnQ7XG59XG5cbi5tYXQtY2FyZC1oZWFkZXJ7XG4gIGRpc3BsYXk6IGZsZXg7XG59XG5cbi5maXJzdC1jb2x1bW57XG4gIG1hcmdpbi1sZWZ0Oi0zM3B4O1xuICBmbG9hdDogbGVmdDtcbiAgZmxleDogODAlO1xufSJdfQ== */"

/***/ }),

/***/ "./src/app/mentee/mentee-information/mentee-information.component.html":
/*!*****************************************************************************!*\
  !*** ./src/app/mentee/mentee-information/mentee-information.component.html ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!DOCTYPE html>\n<html>\n  <head>\n    <title></title>\n    <link rel=\"stylesheet\" href=\"https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css\" integrity=\"sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T\" crossorigin=\"anonymous\">\n  </head>\n  <body>\n  <div class=\"container\">\n    <mat-card class=\"example-card\">\n        <div *ngFor=\"let menteeDeck of menteeDeck\">\n            <div *ngIf=\"menteeDeck.id == menteeId\">\n                <mat-card-header>\n\n                    <span class=\"first-column\">\n                        <mat-card-title>{{ menteeDeck.first_name + \" \" + menteeDeck.last_name }}</mat-card-title>\n                    </span>\n\n                    <span class=\"second-column\">\n                        <span *ngIf=\"menteeDeck.cycle_id== 1\">\n                            <img src=\"//s3.amazonaws.com/brasaassets/pre_universitario/brasa_app/eu_flag.png\" height=\"30\" width=\"30\">\n                        </span>\n                        <span *ngIf=\"menteeDeck.cycle_id == 2\">\n                            <img src=\"//s3.amazonaws.com/brasaassets/pre_universitario/brasa_app/us_flag.png\" height=\"30\" width=\"30\">\n                        </span>\n\n                        </span>\n\n                    </mat-card-header>\n\n                <mat-card-content>\n                    <div id=\"menteeDeck\">\n                        <div *ngFor=\"let mentorDeck of mentorDecks\">\n                            <div *ngIf=\"menteeDeck.mentor_id == mentorDeck.id\">\n                                <span ><strong>Mentor: </strong></span>\n                                <span><a href=\"/mentor/listing/{{menteeDeck.mentor_id}}\">{{ mentorDeck.first_name }} {{ mentorDeck.last_name }}</a></span>\n                                <hr>\n                            </div>\n                        </div>\n                        <span ><strong>Cidade: </strong></span>\n                        <span>{{ menteeDeck.city }}</span>\n                        <hr>\n                        <span ><strong>Estado: </strong></span>\n                        <span>{{ menteeDeck.state }}</span>\n                        <hr>\n\n                        <span ><strong>Contato primário BRASA</strong></span>\n                        <br>\n                        <span ><strong>Email: </strong>{{ menteeDeck.primary_contact.email }}</span>\n                    </div>\n                </mat-card-content>\n                <mat-card-actions>\n                    <button *ngIf = \"role == 'mentee' || role == 'admin'\" type=\"button\" class=\"btn btn-block\" routerLink=\"/mentee/detail/{{menteeDeck.id}}\"><i class=\"fa fa-plus\"></i>  Atualizar informações</button>\n                    <button *ngIf = \"role == 'mentee' || role == 'admin'\" type=\"button\" class=\"btn btn-block\" routerLink=\"/mentee/test/{{menteeDeck.id}}\"><i class=\"fa fa-plus\"></i> Adicionar prova</button>\n                    <button *ngIf = \"role == 'mentee' || role == 'admin'\" type=\"button\" class=\"btn btn-block\" routerLink=\"/mentee/essay/{{menteeDeck.id}}\"><i class=\"fa fa-plus\"></i> Adicionar essay</button>\n                    <button *ngIf = \"role == 'mentee' || role == 'admin'\" type=\"button\" class=\"btn btn-block\" routerLink=\"/mentee/college/{{menteeDeck.id}}\"><i class=\"fa fa-plus\"></i> Editar College List</button>\n\n                    <button *ngIf = \"role == 'mentor'\" type=\"button\" class=\"btn btn-block\" routerLink=\"/mentee/detail/{{menteeDeck.id}}\"><i class=\"fa fa-plus\"></i>  Ver informações</button>\n                    <button *ngIf = \"role == 'mentor'\" type=\"button\" class=\"btn btn-block\" routerLink=\"/mentee/test/{{menteeDeck.id}}\"><i class=\"fa fa-plus\"></i> Ver provas adicionadas</button>\n                    <button *ngIf = \"role == 'mentor'\" type=\"button\" class=\"btn btn-block\" routerLink=\"/mentee/essay/{{menteeDeck.id}}\"><i class=\"fa fa-plus\"></i> Ver essays adicionados</button>\n                    <button *ngIf = \"role == 'mentor'\" type=\"button\" class=\"btn btn-block\" routerLink=\"/mentee/college/{{menteeDeck.id}}\"><i class=\"fa fa-plus\"></i> Ver College List</button>\n                </mat-card-actions>\n            </div>\n\n        </div>\n        </mat-card>\n    </div>\n\n</body>\n</html>\n"

/***/ }),

/***/ "./src/app/mentee/mentee-information/mentee-information.component.ts":
/*!***************************************************************************!*\
  !*** ./src/app/mentee/mentee-information/mentee-information.component.ts ***!
  \***************************************************************************/
/*! exports provided: MenteeInformationComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MenteeInformationComponent", function() { return MenteeInformationComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _shared_mentee_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../shared/mentee.service */ "./src/app/mentee/shared/mentee.service.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var auth0_web__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! auth0-web */ "./node_modules/auth0-web/dist/index.js");
/* harmony import */ var auth0_web__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(auth0_web__WEBPACK_IMPORTED_MODULE_5__);






var MenteeInformationComponent = /** @class */ (function () {
    function MenteeInformationComponent(route, http, menteeService) {
        this.route = route;
        this.http = http;
        this.menteeService = menteeService;
        this.getMentees();
        this.getMentors();
        this.getUni();
        this.userNickname = auth0_web__WEBPACK_IMPORTED_MODULE_5__["getProfile"]().nickname;
        this.getUsername(this.userNickname);
    }
    MenteeInformationComponent.buildHttpOptions = function () {
        var httpOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpHeaders"]({
                'Authorization': "Bearer " + auth0_web__WEBPACK_IMPORTED_MODULE_5__["getAccessToken"]()
            }),
        };
        return httpOptions;
    };
    MenteeInformationComponent.prototype.getAllMentees = function () {
        var httpOptions = _shared_mentee_service__WEBPACK_IMPORTED_MODULE_3__["MenteeService"].buildHttpOptions();
        return this.http.get('https://brasa-pre.herokuapp.com/api/mentees', httpOptions);
    };
    MenteeInformationComponent.prototype.getUsername = function (username) {
        var _this = this;
        this.menteeService.getUser(username).subscribe(function (usuario) {
            _this.role = usuario.role_name;
            _this.username = usuario.username;
        });
    };
    MenteeInformationComponent.prototype.getMentees = function () {
        var _this = this;
        this.getAllMentees().subscribe(function (menteeDecks) {
            console.log(menteeDecks, 'deve estar aqui');
            _this.menteeDeck = menteeDecks['objects'];
            _this.menteeId = _this.route.snapshot.paramMap.get('id');
            console.log(_this.menteeDeck);
        });
    };
    MenteeInformationComponent.prototype.getAllMentors = function () {
        var httpOptions = _shared_mentee_service__WEBPACK_IMPORTED_MODULE_3__["MenteeService"].buildHttpOptions();
        return this.http.get('https://brasa-pre.herokuapp.com/api/mentors', httpOptions);
    };
    MenteeInformationComponent.prototype.getMentors = function () {
        var _this = this;
        this.getAllMentors().subscribe(function (mentorDecks) {
            _this.mentorDecks = mentorDecks['objects'];
        });
    };
    MenteeInformationComponent.prototype.getAllUniversity = function () {
        var httpOptions = _shared_mentee_service__WEBPACK_IMPORTED_MODULE_3__["MenteeService"].buildHttpOptions();
        return this.http.get('https://brasa-pre.herokuapp.com/api/university_applications', httpOptions);
    };
    MenteeInformationComponent.prototype.getUni = function () {
        var _this = this;
        this.getAllUniversity().subscribe(function (uniDecks) {
            _this.uniDecks = uniDecks['objects'];
            console.log(uniDecks);
        });
    };
    MenteeInformationComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-mentee-information',
            template: __webpack_require__(/*! ./mentee-information.component.html */ "./src/app/mentee/mentee-information/mentee-information.component.html"),
            styles: [__webpack_require__(/*! ./mentee-information.component.css */ "./src/app/mentee/mentee-information/mentee-information.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClient"],
            _shared_mentee_service__WEBPACK_IMPORTED_MODULE_3__["MenteeService"]])
    ], MenteeInformationComponent);
    return MenteeInformationComponent;
}());



/***/ }),

/***/ "./src/app/mentee/mentee-listing/mentee-listing.component.css":
/*!********************************************************************!*\
  !*** ./src/app/mentee/mentee-listing/mentee-listing.component.css ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".mat-card {\n  max-width: 500px;\n  margin: 40px auto;\n}\n  \n#menteeDeck {\n  margin-left: 20px;\n}\n  \n.content {\n  display: flex;\n  flex-wrap: wrap;\n}\n  \n.child {\n  flex-grow: 1;\n  flex: 1 1 35%;\n  margin: 20px;\n  max-width: 398px;\n}\n  \nhr{\n  margin-top: 3px;\n  margin-bottom: 3px;\n}\n  \n.btn{\n  background-color: rgb(55,136,203);\n  color: white;\n}\n  \n.btn:hover {\n  color: white;\n}\n  \n.mat-card-header{\n  display: flex;\n}\n  \n.first-column{\n  margin-left:-33px;\n  float: left;\n  flex: 80%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbWVudGVlL21lbnRlZS1saXN0aW5nL21lbnRlZS1saXN0aW5nLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxnQkFBZ0I7RUFDaEIsaUJBQWlCO0FBQ25COztBQUVBO0VBQ0UsaUJBQWlCO0FBQ25COztBQUVBO0VBQ0UsYUFBYTtFQUNiLGVBQWU7QUFDakI7O0FBRUE7RUFDRSxZQUFZO0VBQ1osYUFBYTtFQUNiLFlBQVk7RUFDWixnQkFBZ0I7QUFDbEI7O0FBRUE7RUFDRSxlQUFlO0VBQ2Ysa0JBQWtCO0FBQ3BCOztBQUVBO0VBQ0UsaUNBQWlDO0VBQ2pDLFlBQVk7QUFDZDs7QUFFQTtFQUNFLFlBQVk7QUFDZDs7QUFFQTtFQUNFLGFBQWE7QUFDZjs7QUFFQTtFQUNFLGlCQUFpQjtFQUNqQixXQUFXO0VBQ1gsU0FBUztBQUNYIiwiZmlsZSI6InNyYy9hcHAvbWVudGVlL21lbnRlZS1saXN0aW5nL21lbnRlZS1saXN0aW5nLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubWF0LWNhcmQge1xuICBtYXgtd2lkdGg6IDUwMHB4O1xuICBtYXJnaW46IDQwcHggYXV0bztcbn1cbiAgXG4jbWVudGVlRGVjayB7XG4gIG1hcmdpbi1sZWZ0OiAyMHB4O1xufVxuXG4uY29udGVudCB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtd3JhcDogd3JhcDtcbn1cblxuLmNoaWxkIHtcbiAgZmxleC1ncm93OiAxO1xuICBmbGV4OiAxIDEgMzUlO1xuICBtYXJnaW46IDIwcHg7XG4gIG1heC13aWR0aDogMzk4cHg7XG59XG5cbmhye1xuICBtYXJnaW4tdG9wOiAzcHg7XG4gIG1hcmdpbi1ib3R0b206IDNweDtcbn1cblxuLmJ0bntcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDU1LDEzNiwyMDMpO1xuICBjb2xvcjogd2hpdGU7XG59XG5cbi5idG46aG92ZXIge1xuICBjb2xvcjogd2hpdGU7XG59XG5cbi5tYXQtY2FyZC1oZWFkZXJ7XG4gIGRpc3BsYXk6IGZsZXg7XG59XG5cbi5maXJzdC1jb2x1bW57XG4gIG1hcmdpbi1sZWZ0Oi0zM3B4O1xuICBmbG9hdDogbGVmdDtcbiAgZmxleDogODAlO1xufSJdfQ== */"

/***/ }),

/***/ "./src/app/mentee/mentee-listing/mentee-listing.component.html":
/*!*********************************************************************!*\
  !*** ./src/app/mentee/mentee-listing/mentee-listing.component.html ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!DOCTYPE html>\n<html>\n  <head>\n    <title></title>\n    <link rel=\"stylesheet\" href=\"https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css\" integrity=\"sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T\" crossorigin=\"anonymous\">\n  </head>\n  <body>\n  <div class=\"container\">\n    <div>\n\n      <!-- Logic for when a mentor is logging in. It only sees his mentees -->\n      <div *ngIf=\"role == 'mentor' && userNickname == username\">\n          <!-- <h1>{{ menteeDeck.mentor_id }}</h1> -->\n        <div *ngFor=\"let menteeDeck of menteeDecks\">\n\n            <div *ngIf=\"mentorId == menteeDeck.mentor_id\">\n              <mat-card class=\"example-card \">\n              <mat-card-header>\n\n                <span class=\"first-column\">\n                  <mat-card-title>{{ menteeDeck.first_name + \" \" + menteeDeck.last_name }}</mat-card-title>\n                </span>\n\n                <span class=\"second-column\">\n                    <span *ngIf=\"menteeDeck.cycle_id== 1\">\n                        <img src=\"//s3.amazonaws.com/brasaassets/pre_universitario/brasa_app/eu_flag.png\" height=\"30\" width=\"30\">\n                    </span>\n                    <span *ngIf=\"menteeDeck.cycle_id == 2\">\n                        <img src=\"//s3.amazonaws.com/brasaassets/pre_universitario/brasa_app/us_flag.png\" height=\"30\" width=\"30\">\n                    </span>\n                    \n                  </span>\n\n              </mat-card-header>\n\n              <mat-card-content>\n                <div id=\"menteeDeck\">\n\n                 \n                </div>\n              </mat-card-content>\n              <mat-card-actions>\n                <button type=\"button\" class=\"btn btn-block\" routerLink=\"/mentee/listing/{{menteeDeck.id}}\"><i class=\"fa fa-plus\"></i>Informações</button>\n              </mat-card-actions>\n            </mat-card>\n            </div>\n          </div>\n        </div>\n\n        <!-- Logic for when a mentee is logging in. It only sees himself-->\n        <div *ngIf=\"role == 'mentee' && userNickname == username\">\n          <div *ngFor=\"let menteeDeck of menteeDecks\">\n              <div *ngIf=\"userNickname == menteeDeck.username\">\n                <mat-card class=\"example-card\">\n                    <mat-card-header>\n\n                      <span class=\"first-column\">\n                        <mat-card-title>{{ menteeDeck.first_name + \" \" + menteeDeck.last_name }}</mat-card-title>\n                      </span>\n      \n                      <span class=\"second-column\">\n                          <span *ngIf=\"menteeDeck.cycle_id== 1\">\n                              <img src=\"//s3.amazonaws.com/brasaassets/pre_universitario/brasa_app/eu_flag.png\" height=\"30\" width=\"30\">\n                          </span>\n                          <span *ngIf=\"menteeDeck.cycle_id == 2\">\n                              <img src=\"//s3.amazonaws.com/brasaassets/pre_universitario/brasa_app/us_flag.png\" height=\"30\" width=\"30\">\n                          </span>\n                          \n                        </span>\n        \n                    </mat-card-header>\n                  <mat-card-content>\n                    <div id=\"menteeDeck\">\n                     \n                    </div>\n                  </mat-card-content>\n                  <mat-card-actions>\n                    <button type=\"button\" class=\"btn  btn-block\" routerLink=\"/mentee/listing/{{menteeDeck.id}}\"><i class=\"fa fa-plus\"></i> Informações</button>\n                  </mat-card-actions>\n                </mat-card>\n              </div>\n            </div>\n          </div>\n\n\n          <!-- Logic for when a admin is logging in. It can see all the mentes -->\n          <div *ngIf=\"role == 'admin' && userNickname == username\">\n            <h1>Mentees</h1>\n            <div class=\"content\">\n              <mat-card class=\"example-card child\" *ngFor=\"let menteeDeck of menteeDecks\">\n                  <mat-card-header>\n\n                      <span class=\"first-column\">\n                        <mat-card-title>{{ menteeDeck.first_name + \" \" + menteeDeck.last_name }}</mat-card-title>\n                      </span>\n      \n                      <span class=\"second-column\">\n                          <span *ngIf=\"menteeDeck.cycle_id== 1\">\n                              <img src=\"//s3.amazonaws.com/brasaassets/pre_universitario/brasa_app/eu_flag.png\" height=\"30\" width=\"30\">\n                          </span>\n                          <span *ngIf=\"menteeDeck.cycle_id == 2\">\n                              <img src=\"//s3.amazonaws.com/brasaassets/pre_universitario/brasa_app/us_flag.png\" height=\"30\" width=\"30\">\n                          </span>\n                          \n                        </span>\n      \n                    </mat-card-header>\n\n                  <mat-card-content>\n                    <div id=\"menteeDeck\">\n\n                      \n                    </div>\n                  </mat-card-content>\n                  <mat-card-actions>\n                    <button type=\"button\" class=\"btn btn-block\" routerLink=\"/mentee/listing/{{menteeDeck.id}}\"><i class=\"fa fa-plus\"></i> Atualizar Informações</button>\n\n                  </mat-card-actions>\n                </mat-card>\n          </div>\n\n            </div>\n\n      </div>\n  </div>\n</body>\n</html>\n"

/***/ }),

/***/ "./src/app/mentee/mentee-listing/mentee-listing.component.ts":
/*!*******************************************************************!*\
  !*** ./src/app/mentee/mentee-listing/mentee-listing.component.ts ***!
  \*******************************************************************/
/*! exports provided: MenteeListingComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MenteeListingComponent", function() { return MenteeListingComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var auth0_web__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! auth0-web */ "./node_modules/auth0-web/dist/index.js");
/* harmony import */ var auth0_web__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(auth0_web__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _shared_mentee_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../shared/mentee.service */ "./src/app/mentee/shared/mentee.service.ts");






var MenteeListingComponent = /** @class */ (function () {
    function MenteeListingComponent(route, http, menteeService) {
        this.route = route;
        this.http = http;
        this.menteeService = menteeService;
        this.getMentees();
        this.getUser();
        this.getMenteesFromMentor();
        this.userNickname = auth0_web__WEBPACK_IMPORTED_MODULE_4__["getProfile"]().nickname;
        this.getUsername(this.userNickname);
    }
    MenteeListingComponent.buildHttpOptions = function () {
        var httpOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpHeaders"]({
                'Authorization': "Bearer " + auth0_web__WEBPACK_IMPORTED_MODULE_4__["getAccessToken"]()
            }),
        };
        return httpOptions;
    };
    MenteeListingComponent.prototype.getAllMentees = function () {
        var httpOptions = _shared_mentee_service__WEBPACK_IMPORTED_MODULE_5__["MenteeService"].buildHttpOptions();
        return this.http.get('https://brasa-pre.herokuapp.com/api/mentees', httpOptions);
    };
    MenteeListingComponent.prototype.getAllUsers = function () {
        var httpOptions = _shared_mentee_service__WEBPACK_IMPORTED_MODULE_5__["MenteeService"].buildHttpOptions();
        return this.http.get('https://brasa-pre.herokuapp.com/api/users', httpOptions);
    };
    MenteeListingComponent.prototype.getAllMenteesFromMentor = function () {
        var httpOptions = _shared_mentee_service__WEBPACK_IMPORTED_MODULE_5__["MenteeService"].buildHttpOptions();
        return this.http.get('https://brasa-pre.herokuapp.com/api/mentors', httpOptions);
    };
    MenteeListingComponent.prototype.getMentees = function () {
        var _this = this;
        this.getAllMentees().subscribe(function (menteeDecks) {
            _this.menteeDecks = menteeDecks['objects'];
        });
    };
    MenteeListingComponent.prototype.getMentorId = function (username) {
        var _this = this;
        this.menteeService.getMentor(username).subscribe(function (usuario) {
            _this.mentorId = usuario.id;
        });
    };
    MenteeListingComponent.prototype.getUsername = function (username) {
        var _this = this;
        this.menteeService.getUser(username).subscribe(function (usuario) {
            _this.role = usuario.role_name;
            _this.username = usuario.username;
            if (_this.role == 'mentor') {
                _this.getMentorId(_this.userNickname);
            }
        });
    };
    MenteeListingComponent.prototype.getUser = function () {
        var _this = this;
        this.getAllUsers().subscribe(function (userDecks) {
            _this.userDecks = userDecks['objects'];
            //console.log(userDecks);
        });
    };
    MenteeListingComponent.prototype.getMenteesFromMentor = function () {
        var _this = this;
        this.getAllMenteesFromMentor().subscribe(function (mentorDeck) {
            _this.mentorDeck = mentorDeck['objects'];
        });
    };
    MenteeListingComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-mentee-listing',
            template: __webpack_require__(/*! ./mentee-listing.component.html */ "./src/app/mentee/mentee-listing/mentee-listing.component.html"),
            styles: [__webpack_require__(/*! ./mentee-listing.component.css */ "./src/app/mentee/mentee-listing/mentee-listing.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"],
            _shared_mentee_service__WEBPACK_IMPORTED_MODULE_5__["MenteeService"]])
    ], MenteeListingComponent);
    return MenteeListingComponent;
}());



/***/ }),

/***/ "./src/app/mentee/mentee-test/mentee-test.component.css":
/*!**************************************************************!*\
  !*** ./src/app/mentee/mentee-test/mentee-test.component.css ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n\n.btn-wrapper {\n    text-align: center;\n}\n\n#update_info{\n    margin-bottom: 30px;\n    width: 500px;\n    margin: 30px auto;\n}\n\n.action{\n    margin-top: 20px;\n    height: 40px;\n}\n\n.voltar{\n    float: left;\n}\n\n.exam-list{\n    /* border: 1px solid; */\n    padding: 19px;\n    margin: 37px;\n    box-shadow: 0px 0px 4px 1px rgba(240,240,240,1);\n}\n\n.salvar{\n    float: right;\n    margin-right: 11px;\n}\n\n#exams_update{\n    margin-bottom: 30px;\n    width: 500px;\n    margin: 30px auto;\n}\n\nhr{\n    margin-top: 5px;\n    margin-bottom: 6px;\n  }\n\n.apagar{\n    margin-top: 15px;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbWVudGVlL21lbnRlZS10ZXN0L21lbnRlZS10ZXN0LmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFFQTtJQUNJLGtCQUFrQjtBQUN0Qjs7QUFFQTtJQUNJLG1CQUFtQjtJQUNuQixZQUFZO0lBQ1osaUJBQWlCO0FBQ3JCOztBQUVBO0lBQ0ksZ0JBQWdCO0lBQ2hCLFlBQVk7QUFDaEI7O0FBRUE7SUFDSSxXQUFXO0FBQ2Y7O0FBRUE7SUFDSSx1QkFBdUI7SUFDdkIsYUFBYTtJQUNiLFlBQVk7SUFHWiwrQ0FBK0M7QUFDbkQ7O0FBR0E7SUFDSSxZQUFZO0lBQ1osa0JBQWtCO0FBQ3RCOztBQUVBO0lBQ0ksbUJBQW1CO0lBQ25CLFlBQVk7SUFDWixpQkFBaUI7QUFDckI7O0FBRUE7SUFDSSxlQUFlO0lBQ2Ysa0JBQWtCO0VBQ3BCOztBQUVGO0lBQ0ksZ0JBQWdCO0FBQ3BCIiwiZmlsZSI6InNyYy9hcHAvbWVudGVlL21lbnRlZS10ZXN0L21lbnRlZS10ZXN0LmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJcblxuLmJ0bi13cmFwcGVyIHtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cbiN1cGRhdGVfaW5mb3tcbiAgICBtYXJnaW4tYm90dG9tOiAzMHB4O1xuICAgIHdpZHRoOiA1MDBweDtcbiAgICBtYXJnaW46IDMwcHggYXV0bztcbn1cblxuLmFjdGlvbntcbiAgICBtYXJnaW4tdG9wOiAyMHB4O1xuICAgIGhlaWdodDogNDBweDtcbn1cblxuLnZvbHRhcntcbiAgICBmbG9hdDogbGVmdDtcbn1cblxuLmV4YW0tbGlzdHtcbiAgICAvKiBib3JkZXI6IDFweCBzb2xpZDsgKi9cbiAgICBwYWRkaW5nOiAxOXB4O1xuICAgIG1hcmdpbjogMzdweDtcbiAgICAtd2Via2l0LWJveC1zaGFkb3c6IDBweCAwcHggNHB4IDFweCByZ2JhKDI0MCwyNDAsMjQwLDEpO1xuICAgIC1tb3otYm94LXNoYWRvdzogMHB4IDBweCA0cHggMXB4IHJnYmEoMjQwLDI0MCwyNDAsMSk7XG4gICAgYm94LXNoYWRvdzogMHB4IDBweCA0cHggMXB4IHJnYmEoMjQwLDI0MCwyNDAsMSk7XG59XG5cblxuLnNhbHZhcntcbiAgICBmbG9hdDogcmlnaHQ7XG4gICAgbWFyZ2luLXJpZ2h0OiAxMXB4O1xufVxuXG4jZXhhbXNfdXBkYXRle1xuICAgIG1hcmdpbi1ib3R0b206IDMwcHg7XG4gICAgd2lkdGg6IDUwMHB4O1xuICAgIG1hcmdpbjogMzBweCBhdXRvO1xufVxuXG5ocntcbiAgICBtYXJnaW4tdG9wOiA1cHg7XG4gICAgbWFyZ2luLWJvdHRvbTogNnB4O1xuICB9XG5cbi5hcGFnYXJ7XG4gICAgbWFyZ2luLXRvcDogMTVweDtcbn1cbiJdfQ== */"

/***/ }),

/***/ "./src/app/mentee/mentee-test/mentee-test.component.html":
/*!***************************************************************!*\
  !*** ./src/app/mentee/mentee-test/mentee-test.component.html ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n<!DOCTYPE html>\n<html>\n  <head>\n    <title></title>\n    <link rel=\"stylesheet\" href=\"https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css\" integrity=\"sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T\" crossorigin=\"anonymous\">\n  </head>\n  <body>\n  <div class=\"container\">\n\n\n      <div *ngIf=\"role== 'mentee' || role == 'admin'\">\n          <div id=\"exams_update\" class=\"shadow-sm p-3 mb-5 bg-white rounded\">\n          <h1>Adicione suas provas!</h1>\n        <form [formGroup]=\"todo\" (ngSubmit)=\"logForm()\">\n          <div class=\"form-group\">\n              <angular2-multiselect\n                                [data]=\"categories\"\n                                [(ngModel)]=\"category\"\n                                [settings]=\"settingsCategory\"\n                                (onSelect)=\"onCategorySelect($event)\"\n                                (onDeSelect)=\"OnItemDeSelect($event)\"\n                                formControlName=\"categoryName\"\n                                >\n                <c-item>\n                  <ng-template let-item=\"item\">\n                    {{item.category}}\n                  </ng-template>\n                </c-item>\n              </angular2-multiselect>\n            </div>\n\n        <div class=\"form-group\">\n          <angular2-multiselect\n                                [data]=\"subCategories\"\n                                [(ngModel)]=\"subCategory\"\n                                [settings]=\"settingsSubCategory\"\n                                formControlName=\"subCategoryName\"\n                                >\n                <c-item>\n                    <ng-template let-item=\"item\">\n                      {{item.subcategory}}\n                    </ng-template>\n                </c-item>\n          </angular2-multiselect>\n        </div>\n\n\n            <label class=\" form-group\">\n                  <input class=\"form-control\" placeholder=\"Data\"\n                        [min]=\"min\" [max]=\"max\"\n                        [owlDateTimeTrigger]=\"dt\"\n                        [owlDateTime]=\"dt\"\n                        (input)=\"dateTime=$event.target.value\"\n                        formControlName=\"dateInput\">\n                  <owl-date-time [pickerType]=\"'calendar'\" #dt></owl-date-time>\n              </label>\n\n          <div class=\"form-group\">\n            <input type=\"text\" class=\"form-control\" placeholder=\"Nota\" [(ngModel)]=\"score\" [ngModelOptions]=\"{standalone: true}\">\n          </div>\n          <div class=\"action\">\n              <button type=\"button\" class=\"btn btn voltar btn-sm btn-info\" (click)=\"goBack()\">Voltar</button>\n              <button type=\"submit\" class=\"btn btn-sm btn-success salvar\">Enviar</button>\n          </div>\n\n      </form>\n      </div>\n    </div>\n\n   <div id=\"exams_update\" class=\"shadow-sm p-3 mb-5 bg-white rounded\">\n    <h1>Provas adicionadas:</h1>\n    <div *ngFor=\"let scheduledExam of scheduledExams\">\n      <div *ngIf=\"scheduledExam.mentee_id == menteeId\">\n        <div class=\"exam-list\">\n          <span ><strong>Prova: </strong></span>\n          <span>{{ scheduledExam.exam.category }}</span>\n          <hr>\n          <span ><strong>Categoria: </strong></span>\n          <span>{{ scheduledExam.exam.subcategory }}</span>\n          <hr>\n          <span ><strong>Nota: </strong></span>\n          <span>{{ scheduledExam.score }}</span>\n          <hr>\n          <span ><strong>Data: </strong></span>\n          <span>{{ scheduledExam.realization_date | date:\"dd/MM/yyyy\"}}</span>\n          <br>\n          <button *ngIf=\"role=='mentee' || role=='admin'\"type=\"button\" class=\"btn btn-danger apagar  btn-sm\" (click)=\"excludeExam(scheduledExam.id)\">\n            Apagar prova\n          </button>\n      </div>\n    </div>\n    </div>\n    <button type=\"button\" class=\"btn btn  btn-sm btn-info\" (click)=\"goBack()\">Voltar</button>\n  </div>\n</div>\n</body>\n</html>\n"

/***/ }),

/***/ "./src/app/mentee/mentee-test/mentee-test.component.ts":
/*!*************************************************************!*\
  !*** ./src/app/mentee/mentee-test/mentee-test.component.ts ***!
  \*************************************************************/
/*! exports provided: MenteeTestComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MenteeTestComponent", function() { return MenteeTestComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _shared_mentee_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../shared/mentee.service */ "./src/app/mentee/shared/mentee.service.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var auth0_web__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! auth0-web */ "./node_modules/auth0-web/dist/index.js");
/* harmony import */ var auth0_web__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(auth0_web__WEBPACK_IMPORTED_MODULE_7__);









var MenteeTestComponent = /** @class */ (function () {
    function MenteeTestComponent(fb, http, getMentee, menteeService, route, datepipe, _location) {
        this.fb = fb;
        this.http = http;
        this.getMentee = getMentee;
        this.menteeService = menteeService;
        this.route = route;
        this.datepipe = datepipe;
        this._location = _location;
        this.dateTime = Date();
        // Min moment: April 12 2000
        this.min = new Date(2000, 3, 12);
        // Max moment: April 25 2025
        this.max = new Date(2025, 3, 25);
        this.API_URL = 'https://brasa-pre.herokuapp.com/api';
        this.scoresArray = [];
        //public categories: Exam[];
        this.categoria = new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"]();
        //public categories: string[] = ['teste', 'teste2'];
        this.categories = [];
        this.subCategories = [];
        this.settingsCategory = {};
        this.settingsSubCategory = {};
        this.myDate = Date();
        this.headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({ 'Content-Type': 'application/json',
            'Access-Control-Allow-Origin': '*',
            'Access-Control-Allow-Methods': 'POST, GET, OPTIONS, PUT',
            "Access-Control-Allow-Headers": "Origin, X-Requested-With, Content-Type, Accept"
        });
        this.todo = this.fb.group({
            categoryName: '',
            subCategoryName: '',
            score: '',
            dateInput: ''
        });
        this.getExams();
        this.menteeId = this.route.snapshot.paramMap.get('id');
        this.getScheduledExams();
        this.userNickname = auth0_web__WEBPACK_IMPORTED_MODULE_7__["getProfile"]().nickname;
        this.getUsername(this.userNickname);
        this.settingsSubCategory = {
            singleSelection: true,
            text: "Categoria",
            enableSearchFilter: true,
            lazyLoading: true,
            labelKey: 'subcategory',
            primaryKey: 'subcategory',
            classes: "myclass custom-class",
            disabled: true
        };
        this.settingsCategory = {
            singleSelection: true,
            text: "Prova",
            enableSearchFilter: true,
            lazyLoading: true,
            labelKey: 'category',
            primaryKey: 'category',
            classes: "myclass custom-class"
        };
    }
    MenteeTestComponent.buildHttpOptions = function () {
        var httpOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
                'Authorization': "Bearer " + auth0_web__WEBPACK_IMPORTED_MODULE_7__["getAccessToken"]()
            }),
        };
        return httpOptions;
    };
    MenteeTestComponent.prototype.getUsername = function (username) {
        var _this = this;
        this.menteeService.getUser(username).subscribe(function (usuario) {
            _this.role = usuario.role_name;
            _this.username = usuario.username;
        });
    };
    MenteeTestComponent.prototype.onCategorySelect = function (item) {
        console.log(item.category);
        this.getSubcategories(item.category);
        this.settingsSubCategory = {
            singleSelection: true,
            text: "Categoria",
            enableSearchFilter: true,
            lazyLoading: true,
            labelKey: 'subcategory',
            primaryKey: 'subcategory',
            classes: "myclass custom-class",
            disabled: false
        };
    };
    MenteeTestComponent.prototype.OnItemDeSelect = function (item) {
        this.settingsSubCategory = {
            singleSelection: true,
            text: "Categoria",
            enableSearchFilter: true,
            lazyLoading: true,
            labelKey: 'subcategory',
            primaryKey: 'subcategory',
            classes: "myclass custom-class",
            disabled: true
        };
    };
    MenteeTestComponent.prototype.goBack = function () {
        this._location.back();
    };
    MenteeTestComponent.prototype.logForm = function () {
        var _this = this;
        var httpOptions = _shared_mentee_service__WEBPACK_IMPORTED_MODULE_4__["MenteeService"].buildHttpOptions();
        // this.datepipe.transform(this.dateTime, 'dd-MM-yyyy') -> mudando formato da data
        this.menteeService.getAllExams().subscribe(function (tests) {
            tests['objects'].forEach(function (prova) {
                //console.log(prova.category,this.category.category)
                //console.log(prova.subcategory, this.subCategory.subcategory)
                if (prova.category == _this.todo.value.categoryName[0].category && prova.subcategory == _this.todo.value.subCategoryName[0].subcategory) {
                    var provaId = prova.id;
                    console.log(_this.datepipe.transform(_this.dateTime, 'dd-MM-yyyy'), _this.menteeId, provaId, _this.score, '<-- post');
                    _this.http.post(_this.API_URL + "/scheduled_exams", {
                        "realization_date": _this.datepipe.transform(_this.dateTime, 'dd-MM-yyyy'),
                        "mentee_id": _this.menteeId,
                        "exam_id": provaId,
                        "score": _this.score
                    }, httpOptions).subscribe(function (data) {
                        console.log(data['_body']);
                        _this.getScheduledExams();
                    }, function (error) {
                        console.log(error);
                    });
                    _this.getExams();
                    //delete this.todo.value.categoryName[0].category
                    //delete this.todo.value.subCategoryName[0].subcategory
                    _this.score = Number();
                    _this.todo.reset();
                    _this.dateTime = Date();
                    _this.settingsSubCategory = {
                        singleSelection: true,
                        text: "Categoria",
                        enableSearchFilter: true,
                        lazyLoading: true,
                        labelKey: 'subcategory',
                        primaryKey: 'subcategory',
                        classes: "myclass custom-class",
                        disabled: true
                    };
                }
            });
        });
        /*
            for (let i =0; i< this.scoresArray.length; i++){
              this.http.post(`${this.API_URL}/exams`, this.scoresArray[i], {headers: this.headers}).subscribe(data => {
                  console.log(data['_body']);
                 }, error => {
                  console.log(error);
                });
            };*/
    };
    ;
    MenteeTestComponent.prototype.getExams = function () {
        var _this = this;
        this.menteeService.getAllExams().subscribe(function (tests) {
            _this.categories = tests['objects'];
            _this.subCategories = tests['objects'];
            var resultCategory = [];
            var resultSubCategory = [];
            var mapCategory = new Map();
            var mapSubCategory = new Map();
            for (var _i = 0, _a = tests['objects']; _i < _a.length; _i++) {
                var item = _a[_i];
                if (!mapCategory.has(item.category)) {
                    mapCategory.set(item.category, item.category); // set any value to Map
                    resultCategory.push({
                        category: item.category
                    });
                }
                ;
                if (!mapSubCategory.has(item.subcategory)) {
                    mapSubCategory.set(item.subcategory, item.subcategory); // set any value to Map
                    resultSubCategory.push({
                        subcategory: item.subcategory
                    });
                }
            }
            ;
            _this.categories = resultCategory;
            _this.subCategories = resultSubCategory;
            /*
          tests.forEach((element)=>{
            console.log(element)
            console.log(element.category)
     
            this.categories.push({categoryValue: element.category})
            console.log(this.categories, '11')
          })*/
        });
    };
    MenteeTestComponent.prototype.getScheduledExams = function () {
        var _this = this;
        this.menteeService.getAllScheduledExams().subscribe(function (tests) {
            tests['objects'];
            _this.scheduledExams = tests['objects'];
        });
    };
    MenteeTestComponent.prototype.excludeExam = function (id) {
        var _this = this;
        var httpOptions = _shared_mentee_service__WEBPACK_IMPORTED_MODULE_4__["MenteeService"].buildHttpOptions();
        this.http.delete(this.API_URL + "/scheduled_exams/" + id, httpOptions).subscribe(function (data) {
            console.log(data['_body']);
        }, function (error) {
            console.log(error);
        });
        ;
        this.scheduledExams.forEach(function (exam, index) {
            console.log(exam.id);
            if (exam.id == id) {
                _this.scheduledExams.splice(index, 1);
            }
        });
    };
    MenteeTestComponent.prototype.getSubcategories = function (categorySent) {
        var _this = this;
        this.menteeService.getAllExams().subscribe(function (tests) {
            _this.subCategories = tests['objects'];
            var resultSubCategory = [];
            var mapSubCategory = new Map();
            for (var _i = 0, _a = tests['objects']; _i < _a.length; _i++) {
                var item = _a[_i];
                if (item.category == categorySent) {
                    if (!mapSubCategory.has(item.subcategory)) {
                        mapSubCategory.set(item.subcategory, item.subcategory); // set any value to Map
                        resultSubCategory.push({
                            subcategory: item.subcategory
                        });
                    }
                }
            }
            ;
            _this.subCategories = resultSubCategory;
            /*
            tests.forEach((element)=>{
              console.log(element)
              console.log(element.category)
       
              this.categories.push({categoryValue: element.category})
              console.log(this.categories, '11')
            })*/
        });
    };
    ;
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], MenteeTestComponent.prototype, "score", void 0);
    MenteeTestComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-mentee-test',
            template: __webpack_require__(/*! ./mentee-test.component.html */ "./src/app/mentee/mentee-test/mentee-test.component.html"),
            styles: [__webpack_require__(/*! ./mentee-test.component.css */ "./src/app/mentee/mentee-test/mentee-test.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormBuilder"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"],
            _shared_mentee_service__WEBPACK_IMPORTED_MODULE_4__["MenteeService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"],
            _angular_common__WEBPACK_IMPORTED_MODULE_6__["DatePipe"],
            _angular_common__WEBPACK_IMPORTED_MODULE_6__["Location"]])
    ], MenteeTestComponent);
    return MenteeTestComponent;
}());



/***/ }),

/***/ "./src/app/mentee/mentee.component.css":
/*!*********************************************!*\
  !*** ./src/app/mentee/mentee.component.css ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21lbnRlZS9tZW50ZWUuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/mentee/mentee.component.html":
/*!**********************************************!*\
  !*** ./src/app/mentee/mentee.component.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  mentee works!\n</p>\n<p>Username: {{username}}</p>\n\n<p>{{user | json }}</p>\n"

/***/ }),

/***/ "./src/app/mentee/mentee.component.ts":
/*!********************************************!*\
  !*** ./src/app/mentee/mentee.component.ts ***!
  \********************************************/
/*! exports provided: MenteeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MenteeComponent", function() { return MenteeComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _auth_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../auth/auth.service */ "./src/app/auth/auth.service.ts");



var MenteeComponent = /** @class */ (function () {
    function MenteeComponent(auth) {
        var _this = this;
        this.auth = auth;
        this.username = this.auth.retrieve_username();
        this.auth.check_role_from_username(this.username)
            .subscribe(function (res) {
            _this.user = res;
        }, console.error);
        console.log(this.user);
    }
    MenteeComponent.prototype.get_role = function () { };
    MenteeComponent.prototype.ngOnInit = function () {
        console.log('entered mentee');
    };
    MenteeComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-mentee',
            template: __webpack_require__(/*! ./mentee.component.html */ "./src/app/mentee/mentee.component.html"),
            styles: [__webpack_require__(/*! ./mentee.component.css */ "./src/app/mentee/mentee.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_auth_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"]])
    ], MenteeComponent);
    return MenteeComponent;
}());



/***/ }),

/***/ "./src/app/mentee/mentee.module.ts":
/*!*****************************************!*\
  !*** ./src/app/mentee/mentee.module.ts ***!
  \*****************************************/
/*! exports provided: MenteePageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MenteePageModule", function() { return MenteePageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _shared_mentee_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./shared/mentee.service */ "./src/app/mentee/shared/mentee.service.ts");
/* harmony import */ var _mentee_mentee_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./mentee/mentee.component */ "./src/app/mentee/mentee/mentee.component.ts");








var MenteePageModule = /** @class */ (function () {
    function MenteePageModule() {
    }
    MenteePageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClientModule"]
            ],
            providers: [
                _shared_mentee_service__WEBPACK_IMPORTED_MODULE_5__["MenteeService"]
            ],
            declarations: [
                _mentee_mentee_component__WEBPACK_IMPORTED_MODULE_6__["MenteeComponent"]
            ],
            schemas: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["CUSTOM_ELEMENTS_SCHEMA"]]
        })
    ], MenteePageModule);
    return MenteePageModule;
}());



/***/ }),

/***/ "./src/app/mentee/mentee/mentee.component.css":
/*!****************************************************!*\
  !*** ./src/app/mentee/mentee/mentee.component.css ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21lbnRlZS9tZW50ZWUvbWVudGVlLmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/mentee/mentee/mentee.component.html":
/*!*****************************************************!*\
  !*** ./src/app/mentee/mentee/mentee.component.html ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  mentee works!\n</p>\n"

/***/ }),

/***/ "./src/app/mentee/mentee/mentee.component.ts":
/*!***************************************************!*\
  !*** ./src/app/mentee/mentee/mentee.component.ts ***!
  \***************************************************/
/*! exports provided: MenteeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MenteeComponent", function() { return MenteeComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var MenteeComponent = /** @class */ (function () {
    function MenteeComponent() {
    }
    MenteeComponent.prototype.ngOnInit = function () {
    };
    MenteeComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-mentee',
            template: __webpack_require__(/*! ./mentee.component.html */ "./src/app/mentee/mentee/mentee.component.html"),
            styles: [__webpack_require__(/*! ./mentee.component.css */ "./src/app/mentee/mentee/mentee.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], MenteeComponent);
    return MenteeComponent;
}());



/***/ }),

/***/ "./src/app/mentee/shared/mentee.service.ts":
/*!*************************************************!*\
  !*** ./src/app/mentee/shared/mentee.service.ts ***!
  \*************************************************/
/*! exports provided: MenteeService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MenteeService", function() { return MenteeService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var auth0_web__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! auth0-web */ "./node_modules/auth0-web/dist/index.js");
/* harmony import */ var auth0_web__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(auth0_web__WEBPACK_IMPORTED_MODULE_3__);




var MenteeService = /** @class */ (function () {
    function MenteeService(http) {
        this.http = http;
        this.API_URL = 'https://brasa-pre.herokuapp.com/api';
        this.API_KEY = 'WZmY7utpbDmshO1LYNtsweImq68Rp1h8e1Zjsnz63RbxE029tN';
    }
    MenteeService_1 = MenteeService;
    MenteeService.buildHttpOptions = function () {
        var httpOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
                'Authorization': "Bearer " + auth0_web__WEBPACK_IMPORTED_MODULE_3__["getAccessToken"]()
            }),
        };
        return httpOptions;
    };
    MenteeService.prototype.getAllmenteeDecks = function () {
        var httpOptions = MenteeService_1.buildHttpOptions();
        return this.http.get(this.API_URL + "/mentees/", httpOptions);
    };
    MenteeService.prototype.getUser = function (username) {
        var httpOptions = MenteeService_1.buildHttpOptions();
        return this.http.get(this.API_URL + "/users?q={\"filters\":[{\"name\":\"username\",\"op\":\"eq\",\"val\": \"" + username + "\"}],\"single\":true}", httpOptions);
    };
    MenteeService.prototype.getMenteeFromMentor = function (mentorId) {
        var httpOptions = MenteeService_1.buildHttpOptions();
        return this.http.get(this.API_URL + "/mentees?q={\"filters\":[{\"name\":\"mentor_id\",\"op\":\"eq\",\"val\": \"" + mentorId + "\"}],\"single\":true}", httpOptions);
    };
    MenteeService.prototype.getMentor = function (username) {
        var httpOptions = MenteeService_1.buildHttpOptions();
        return this.http.get(this.API_URL + "/mentors?q={\"filters\":[{\"name\":\"username\",\"op\":\"eq\",\"val\": \"" + username + "\"}],\"single\":true}", httpOptions);
    };
    // public getCollegeList(id): Observable<any>{
    //   return this.http.get<any>(`${this.HS_API_URL}/mentees/` + id);
    // }
    MenteeService.prototype.getAllExams = function () {
        var httpOptions = MenteeService_1.buildHttpOptions();
        //const httpOptions = ExamsApiService.buildHttpOptions();
        //console.log(httpOptions);
        return this.http.get(this.API_URL + "/exams", httpOptions);
    };
    MenteeService.prototype.getAllScheduledExams = function () {
        var httpOptions = MenteeService_1.buildHttpOptions();
        return this.http.get(this.API_URL + "/scheduled_exams", httpOptions);
    };
    // public getAllUniversities(): Observable<any>{
    //   return this.http.get<any>(`${this.HS_API_URL}/universities/`);
    // }
    MenteeService.prototype.getAllEssays = function () {
        var httpOptions = MenteeService_1.buildHttpOptions();
        return this.http.get(this.API_URL + "/uploads", httpOptions);
    };
    MenteeService.prototype.getMenteeCollegeList = function (id) {
        var httpOptions = MenteeService_1.buildHttpOptions();
        return this.http.get(this.API_URL + "/mentees/" + id, httpOptions);
    };
    MenteeService.prototype.getCollegeNameById = function (id) {
        var httpOptions = MenteeService_1.buildHttpOptions();
        return this.http.get(this.API_URL + "/universities/" + id, httpOptions);
    };
    MenteeService.prototype.getAllUniversities = function () {
        var httpOptions = MenteeService_1.buildHttpOptions();
        return this.http.get(this.API_URL + "/universities", httpOptions);
    };
    var MenteeService_1;
    MenteeService = MenteeService_1 = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], MenteeService);
    return MenteeService;
}());



/***/ }),

/***/ "./src/app/mentor/mentor-detail/mentor-detail.component.css":
/*!******************************************************************!*\
  !*** ./src/app/mentor/mentor-detail/mentor-detail.component.css ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "#update_info{\n    margin-bottom: 30px;\n    width: 500px;\n    margin: 30px auto;\n}\n\n.action{\n    height: 40px;\n    margin-top: 20px;\n}\n\n.voltar{\n    margin-right: 30px;\n    background: none;\n    border: none;\n    color: #9999;\n    float: left;\n}\n\n.salvar{\n    float: right;\n    margin-right: 11px;\n}\n\n#info{\n    font-size: 14px;\n    margin-bottom: 30px;\n    width: 500px;\n    margin: 30px auto;\n}\n\nhr{\n    margin-top: 5px;\n    margin-bottom: 6px;\n  }\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbWVudG9yL21lbnRvci1kZXRhaWwvbWVudG9yLWRldGFpbC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksbUJBQW1CO0lBQ25CLFlBQVk7SUFDWixpQkFBaUI7QUFDckI7O0FBRUE7SUFDSSxZQUFZO0lBQ1osZ0JBQWdCO0FBQ3BCOztBQUVBO0lBQ0ksa0JBQWtCO0lBQ2xCLGdCQUFnQjtJQUNoQixZQUFZO0lBQ1osWUFBWTtJQUNaLFdBQVc7QUFDZjs7QUFHQTtJQUNJLFlBQVk7SUFDWixrQkFBa0I7QUFDdEI7O0FBRUE7SUFDSSxlQUFlO0lBQ2YsbUJBQW1CO0lBQ25CLFlBQVk7SUFDWixpQkFBaUI7QUFDckI7O0FBRUE7SUFDSSxlQUFlO0lBQ2Ysa0JBQWtCO0VBQ3BCIiwiZmlsZSI6InNyYy9hcHAvbWVudG9yL21lbnRvci1kZXRhaWwvbWVudG9yLWRldGFpbC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiI3VwZGF0ZV9pbmZve1xuICAgIG1hcmdpbi1ib3R0b206IDMwcHg7XG4gICAgd2lkdGg6IDUwMHB4O1xuICAgIG1hcmdpbjogMzBweCBhdXRvO1xufVxuXG4uYWN0aW9ue1xuICAgIGhlaWdodDogNDBweDtcbiAgICBtYXJnaW4tdG9wOiAyMHB4O1xufVxuXG4udm9sdGFye1xuICAgIG1hcmdpbi1yaWdodDogMzBweDtcbiAgICBiYWNrZ3JvdW5kOiBub25lO1xuICAgIGJvcmRlcjogbm9uZTtcbiAgICBjb2xvcjogIzk5OTk7XG4gICAgZmxvYXQ6IGxlZnQ7XG59XG5cblxuLnNhbHZhcntcbiAgICBmbG9hdDogcmlnaHQ7XG4gICAgbWFyZ2luLXJpZ2h0OiAxMXB4O1xufVxuXG4jaW5mb3tcbiAgICBmb250LXNpemU6IDE0cHg7XG4gICAgbWFyZ2luLWJvdHRvbTogMzBweDtcbiAgICB3aWR0aDogNTAwcHg7XG4gICAgbWFyZ2luOiAzMHB4IGF1dG87XG59XG5cbmhye1xuICAgIG1hcmdpbi10b3A6IDVweDtcbiAgICBtYXJnaW4tYm90dG9tOiA2cHg7XG4gIH0iXX0= */"

/***/ }),

/***/ "./src/app/mentor/mentor-detail/mentor-detail.component.html":
/*!*******************************************************************!*\
  !*** ./src/app/mentor/mentor-detail/mentor-detail.component.html ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!DOCTYPE html>\n<html>\n  <head>\n    <title></title>\n    <link rel=\"stylesheet\" href=\"https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css\" integrity=\"sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T\" crossorigin=\"anonymous\">\n  </head>\n  <body>\n\n<div class=\"container\" >\n  <!-- Mentor or Admin can see the form to update informations-->\n  <div *ngIf=\"(role == 'mentor' || role == 'admin') && userNickname == username\" id=\"update_info\" class=\"shadow-sm p-3 mb-5 bg-white rounded\">\n    <h1>Atualize suas informações!</h1>\n    <form [formGroup]=\"todo\" (ngSubmit)=\"logForm()\">\n      <div class=\"form-group\">\n        <input placeholder=\"Nome\" type=\"text\" class=\"form-control\" [(ngModel)]=\"mentorDados.first_name\" [ngModelOptions]=\"{standalone: true}\" required>\n      </div>\n\n\n      <div class=\"form-group\">\n        <input placeholder=\"Sobrenome\" type=\"text\" class=\"form-control\" [(ngModel)]=\"mentorDados.last_name\" [ngModelOptions]=\"{standalone: true}\">\n      </div>\n\n      <div class=\"form-group\">\n        <input placeholder=\"Cidade\" type=\"text\" class=\"form-control\" [(ngModel)]=\"mentorDados.city\" [ngModelOptions]=\"{standalone: true}\">\n      </div>\n\n      <div class=\"form-group\">\n        <input placeholder=\"Estado\" type=\"text\" class=\"form-control\" [(ngModel)]=\"mentorDados.state\" [ngModelOptions]=\"{standalone: true}\">\n      </div>\n\n\n      <!--div class=\"form-group\">\n        <input placeholder=\"Universidade\" type=\"text\" [(ngModel)]=\"mentorDados.university\" [ngModelOptions]=\"{standalone: true}\">\n      </div-->\n      <div class=\"form-group\" *ngIf=\"selectedUnis\">\n      <angular2-multiselect\n                            [data]=\"universities\"\n                            [(ngModel)]=\"selectedUnis\"\n                            [settings]=\"settings\"\n                            (onSelect)=\"onItemSelect($event)\"\n                            formControlName=\"uniList\"\n                            ><c-item>\n                <ng-template let-item=\"item\">\n                  {{item.name}}\n                </ng-template>\n        </c-item>\n      </angular2-multiselect>\n      </div>\n\n      <div class=\"form-group\" *ngIf=\"selectedMajor\">\n      <angular2-multiselect\n                            [data]=\"courses\"\n                            [(ngModel)]=\"selectedMajor\"\n                            [settings]=\"settingsMajor\"\n                            (onSelect)=\"onMajorSelect($event)\"\n                            (onDeSelect)=\"onMajorDeSelect($event)\"\n                            formControlName=\"major\"\n                            ><c-item>\n                <ng-template let-item=\"item\">\n                  {{item.name}}\n                </ng-template>\n        </c-item>\n      </angular2-multiselect>\n      </div>\n\n      <div class=\"form-group\" *ngIf=\"selectedMajor1\">\n      <angular2-multiselect\n                            [data]=\"courses\"\n                            [(ngModel)]=\"selectedMajor1\"\n                            [settings]=\"settingsMajor1\"\n                            (onSelect)=\"onMajor1Select($event)\"\n                            (onDeSelect)=\"onMajor1DeSelect($event)\"\n                            formControlName=\"major1\"\n                            ><c-item>\n                <ng-template let-item=\"item\">\n                  {{item.name}}\n                </ng-template>\n        </c-item>\n      </angular2-multiselect>\n      </div>\n\n      <div class=\"form-group\" *ngIf=\"selectedMinor\">\n      <angular2-multiselect\n                            [data]=\"courses\"\n                            [(ngModel)]=\"selectedMinor\"\n                            [settings]=\"settingsMinor\"\n                            (onSelect)=\"onMinorSelect($event)\"\n                            (onDeSelect)=\"onMinorDeSelect($event)\"\n                            formControlName=\"minor\"\n                            ><c-item>\n                <ng-template let-item=\"item\">\n                  {{item.name}}\n                </ng-template>\n        </c-item>\n      </angular2-multiselect>\n      </div>\n\n\n      <div class=\"form-group\" *ngIf=\"selectedMinor1\">\n      <angular2-multiselect\n                            [data]=\"courses\"\n                            [(ngModel)]=\"selectedMinor1\"\n                            [settings]=\"settingsMinor1\"\n                            (onSelect)=\"onMinor1Select($event)\"\n                            (onDeSelect)=\"onMinor1DeSelect($event)\"\n                            formControlName=\"minor1\"\n                            ><c-item>\n                <ng-template let-item=\"item\">\n                  {{item.name}}\n                </ng-template>\n        </c-item>\n      </angular2-multiselect>\n      </div>\n\n      <!--div class=\"form-group\">\n        <input placeholder=\"Major\" type=\"text\" class=\"form-control\" [(ngModel)]=\"mentorDados.major\" [ngModelOptions]=\"{standalone: true}\">\n      </div>\n\n      <div class=\"form-group\">\n        <input placeholder=\"Minor\" type=\"text\" class=\"form-control\" [(ngModel)]=\"mentorDados.minor\" [ngModelOptions]=\"{standalone: true}\">\n      </div-->\n\n\n      <div class=\"action\">\n          <button type=\"submit\" class=\"btn btn-sm btn-success salvar\">Salvar Informações</button>\n          <button type=\"button\" class=\"btn btn-sm btn-info\" (click)=\"goBack()\">Voltar</button>\n      </div>\n\n\n    </form>\n  </div>\n\n  <!-- Mentee cant see the form, only the information -->\n  <div *ngIf=\"(role == 'admin' || role == 'mentee' || role == 'mentor') && userNickname == username\">\n    <div id=\"info\" class=\"shadow-sm p-3 mb-5 bg-white rounded\">\n      <h1>Informações do seu mentor!</h1>\n\n      <div class=\"form-group\">\n        <strong>Nome:</strong> {{mentorDados.first_name}}  {{mentorDados.last_name}}\n      </div>\n\n      <div class=\"form-group\">\n        <strong>Cidade:</strong> {{mentorDados.city}}\n      </div>\n\n      <div class=\"form-group\">\n        <strong>Estado:</strong> {{mentorDados.state}}\n      </div>\n\n      <div class=\"form-group\">\n          <strong>Universidade:</strong> {{mentorDados.university}}\n      </div>\n\n      <div class=\"form-group\" *ngIf= \"mentorDados.major\">\n          <strong>Major:</strong> {{ mentorDados.major}}\n      </div>\n\n      <div class=\"form-group\" *ngIf= \"mentorDados.major1\">\n          <strong>Segundo Major:</strong> {{ mentorDados.major1}}\n      </div>\n\n      <div class=\"form-group\" *ngIf= \"mentorDados.minor\">\n          <strong>Minor:</strong> {{ mentorDados.minor}}\n      </div>\n\n      <div class=\"form-group\" *ngIf= \"mentorDados.minor1\">\n          <strong>Segundo Minor:</strong> {{ mentorDados.minor1}}\n      </div>\n\n\n\n      <div class=\"action\">\n          <button type=\"button\" class=\"btn btn-sm btn-info\" (click)=\"goBack()\">\n              Voltar\n            </button>\n      </div>\n    </div>\n  </div>\n<br>\n<br>\n\n\n\n\n</div>\n</body>\n</html>\n"

/***/ }),

/***/ "./src/app/mentor/mentor-detail/mentor-detail.component.ts":
/*!*****************************************************************!*\
  !*** ./src/app/mentor/mentor-detail/mentor-detail.component.ts ***!
  \*****************************************************************/
/*! exports provided: MentorDetailComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MentorDetailComponent", function() { return MentorDetailComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _shared_mentor_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../shared/mentor.service */ "./src/app/mentor/shared/mentor.service.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var auth0_web__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! auth0-web */ "./node_modules/auth0-web/dist/index.js");
/* harmony import */ var auth0_web__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(auth0_web__WEBPACK_IMPORTED_MODULE_7__);








var MentorDetailComponent = /** @class */ (function () {
    function MentorDetailComponent(formBuilder, http, getMentee, mentorService, route, _location) {
        this.formBuilder = formBuilder;
        this.http = http;
        this.getMentee = getMentee;
        this.mentorService = mentorService;
        this.route = route;
        this._location = _location;
        this.API_URL = 'http://brasa-pre.herokuapp.com/api';
        //private readonly API_URL = 'http://bce8300d.ngrok.io';
        this.selectedUnis = new Array();
        this.selectedMajor = new Array();
        this.selectedMinor = new Array();
        this.selectedMajor1 = new Array();
        this.selectedMinor1 = new Array();
        this.helper = [];
        this.mentorProfile = [];
        this.mentorDados = [];
        this.universities = [];
        this.courses = [];
        this.settings = {};
        this.settingsMajor = {};
        this.settingsMinor = {};
        this.settingsMajor1 = {};
        this.settingsMinor1 = {};
        this.helper3 = -1;
        this.headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({ 'Authorization': "Bearer " + auth0_web__WEBPACK_IMPORTED_MODULE_7__["getAccessToken"]()
        });
        this.userNickname = auth0_web__WEBPACK_IMPORTED_MODULE_7__["getProfile"]().nickname;
        this.todo = this.formBuilder.group({
            uniList: [],
            major: '',
            minor: '',
            major1: '',
            minor1: ''
        });
        this.mentorDados.push({ first_name: '',
            last_name: '',
            university: '',
            city: '',
            state: '',
            major: '',
            minor: '',
            major1: '',
            minor1: ''
        });
        //this.todo = this.formBuilder.group({});
        this.mentorId = this.route.snapshot.paramMap.get('id');
        this.selectCollege(this.mentorId);
        this.selectCourses(this.mentorId);
        this.getInformation();
        this.getUser(this.userNickname);
        this.getUniList();
        this.settings = {
            singleSelection: true,
            text: "Selecione sua Universidade",
            enableFilterSelectAll: false,
            enableSearchFilter: true,
            labelKey: "name",
            classes: "myclass custom-class"
        };
        this.settingsMajor = {
            singleSelection: true,
            text: "Selecione seu Major",
            enableFilterSelectAll: false,
            enableSearchFilter: true,
            labelKey: "name",
            classes: "myclass custom-class"
        };
        this.settingsMinor = {
            singleSelection: true,
            text: "Selecione seu Minor",
            enableFilterSelectAll: false,
            enableSearchFilter: true,
            labelKey: "name",
            classes: "myclass custom-class"
        };
        this.settingsMajor1 = {
            singleSelection: true,
            text: "Selecione seu segundo Major",
            enableFilterSelectAll: false,
            enableSearchFilter: true,
            labelKey: "name",
            classes: "myclass custom-class"
        };
        this.settingsMinor1 = {
            singleSelection: true,
            text: "Selecione seu segundo Minor",
            enableFilterSelectAll: false,
            enableSearchFilter: true,
            labelKey: "name",
            classes: "myclass custom-class"
        };
    }
    MentorDetailComponent.prototype.getUser = function (username) {
        var _this = this;
        this.mentorService.getUser(username).subscribe(function (usuario) {
            _this.role = usuario.role_name;
            _this.username = usuario.username;
        });
    };
    MentorDetailComponent.prototype.onMajorSelect = function (item) {
        this.mentorDados.major = item.name;
    };
    MentorDetailComponent.prototype.onMajorDeSelect = function (item) {
        this.mentorDados.major = null;
    };
    MentorDetailComponent.prototype.onMinorSelect = function (item) {
        this.mentorDados.minor = item.name;
    };
    MentorDetailComponent.prototype.onMinorDeSelect = function (item) {
        this.mentorDados.minor = null;
    };
    MentorDetailComponent.prototype.onMajor1Select = function (item) {
        this.mentorDados.major1 = item.name;
    };
    MentorDetailComponent.prototype.onMajor1DeSelect = function (item) {
        this.mentorDados.major1 = null;
    };
    MentorDetailComponent.prototype.onMinor1Select = function (item) {
        this.mentorDados.minor1 = item.name;
    };
    MentorDetailComponent.prototype.onMinor1DeSelect = function (item) {
        this.mentorDados.minor1 = null;
    };
    MentorDetailComponent.prototype.goBack = function () {
        this._location.back();
    };
    MentorDetailComponent.prototype.getInformation = function () {
        var _this = this;
        this.mentorService.getMentorById(this.mentorId).subscribe(function (mentor) {
            console.log(mentor, '>>');
            var printMajor;
            var printMinor;
            var printMajor1;
            var printMinor1;
            if (!mentor.major) {
                printMajor = null;
            }
            else {
                printMajor = mentor.major.name;
            }
            if (!mentor.minor) {
                printMinor = null;
            }
            else {
                printMinor = mentor.minor.name;
            }
            if (!mentor.second_major) {
                printMajor1 = null;
            }
            else {
                printMajor1 = mentor.second_major.name;
            }
            console.log(mentor, '<<<<<<');
            if (!mentor.second_minor) {
                printMinor1 = null;
            }
            else {
                printMinor1 = mentor.second_minor.name;
            }
            _this.mentorDados = {
                first_name: mentor.first_name,
                last_name: mentor.last_name,
                university: mentor.universities,
                city: mentor.city,
                state: mentor.state,
                major: printMajor,
                minor: printMinor,
                major1: printMajor1,
                minor1: printMinor1
            };
            console.log(_this.mentorDados.major);
            /*
            if (mentor.minor){
              this.mentorDados = {
                first_name: mentor.first_name,
                last_name: mentor.last_name,
                university: mentor.universities,
                city: mentor.city,
                state: mentor.state,
                major: mentor.major.name,
                minor: mentor.minor.name
      
              };
            } else {
              this.mentorDados = {
                first_name: mentor.first_name,
                last_name: mentor.last_name,
                university: mentor.universities,
                city: mentor.city,
                state: mentor.state,
                major: mentor.major.name
            }
          }*/
        });
    };
    MentorDetailComponent.prototype.logForm = function () {
        var _this = this;
        if (this.todo.value.major[0] == null) {
            this.helperMajor = null;
        }
        else {
            this.helperMajor = this.todo.value.major[0].id;
        }
        if (this.todo.value.major1[0] == null) {
            this.helperMajor1 = null;
        }
        else {
            this.helperMajor1 = this.todo.value.major1[0].id;
        }
        if (this.todo.value.minor[0] == null) {
            this.helperMinor = null;
        }
        else {
            this.helperMinor = this.todo.value.minor[0].id;
        }
        if (this.todo.value.minor1[0] == null) {
            this.helperMinor1 = null;
        }
        else {
            this.helperMinor1 = this.todo.value.minor1[0].id;
        }
        this.http.put(this.API_URL + "/mentors/" + this.mentorId, {
            "first_name": this.mentorDados.first_name,
            "last_name": this.mentorDados.last_name,
            "university_id": this.todo.value.uniList[0].id,
            "city": this.mentorDados.city,
            "state": this.mentorDados.state,
            "major_course_id": this.helperMajor,
            "minor_course_id": this.helperMinor,
            "second_major_course_id": this.helperMajor1,
            "second_minor_course_id": this.helperMinor1
        }, { headers: this.headers, observe: "response" }).toPromise().then(function (data) {
            if (data.status == 200) {
                _this._location.back();
            }
        }).catch(function (err) { console.log(err); })
            , function (error) {
                console.log(error);
            };
    };
    MentorDetailComponent.prototype.selectCollege = function (id) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                this.mentorService.getMentorUniversity(id).subscribe(function (mentor) {
                    console.log(mentor.university_id);
                    _this.mentorService.getCollegeNameById(mentor.university_id).subscribe(function (collegeName) {
                        _this.selectedUnis.push({ id: mentor.university_id, name: collegeName.name });
                        console.log(_this.selectedUnis);
                        _this.mentorDados.university = collegeName.name;
                    });
                });
                this.selectedUnis = this.helper;
                return [2 /*return*/, this.selectedUnis];
            });
        });
    };
    MentorDetailComponent.prototype.selectCourses = function (id) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                this.mentorService.getMentorMajor(id).subscribe(function (mentor) {
                    if (mentor.major) {
                        _this.selectedMajor.push({ id: mentor.major_course_id, name: mentor.major.name, category: mentor.major.category });
                    }
                    if (mentor.minor) {
                        _this.selectedMinor.push({ id: mentor.minor_course_id, name: mentor.minor.name, category: mentor.minor.category });
                    }
                    if (mentor.second_major) {
                        _this.selectedMajor1.push({ id: mentor.second_major_course_id, name: mentor.second_major.name, category: mentor.second_major.category });
                    }
                    if (mentor.second_minor) {
                        _this.selectedMinor1.push({ id: mentor.second_minor_course_id, name: mentor.second_minor.name, category: mentor.second_minor.category });
                    }
                    console.log(_this.selectedMinor);
                });
                return [2 /*return*/, (this.selectedMinor, this.selectedMajor, this.selectedMinor1, this.selectedMajor1)];
            });
        });
    };
    MentorDetailComponent.prototype.getUniList = function () {
        var _this = this;
        this.mentorService.getAllUniversities().subscribe(function (tests) {
            _this.universities = tests['objects'];
            console.log(tests['objects']);
            var result = [];
            var mapUniversities = new Map();
            for (var _i = 0, _a = tests['objects']; _i < _a.length; _i++) {
                var item = _a[_i];
                if (!mapUniversities.has(item.name)) {
                    mapUniversities.set(item.name, item.name); // set any value to Map
                    result.push({
                        id: item.id,
                        name: item.name
                    });
                }
                ;
            }
            ;
            _this.universities = result;
        });
        this.mentorService.getAllCourses().subscribe(function (courses) {
            _this.universities = courses['objects'];
            console.log(courses['objects']);
            var result = [];
            var mapCourses = new Map();
            for (var _i = 0, _a = courses['objects']; _i < _a.length; _i++) {
                var item = _a[_i];
                if (!mapCourses.has(item.name)) {
                    mapCourses.set(item.name, item.name); // set any value to Map
                    result.push({
                        id: item.id,
                        name: item.name,
                        category: item.category
                    });
                }
                ;
            }
            ;
            _this.courses = result;
        });
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Array)
    ], MentorDetailComponent.prototype, "selectedUnis", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Array)
    ], MentorDetailComponent.prototype, "selectedMajor", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Array)
    ], MentorDetailComponent.prototype, "selectedMinor", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Array)
    ], MentorDetailComponent.prototype, "selectedMajor1", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Array)
    ], MentorDetailComponent.prototype, "selectedMinor1", void 0);
    MentorDetailComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-mentor-detail',
            template: __webpack_require__(/*! ./mentor-detail.component.html */ "./src/app/mentor/mentor-detail/mentor-detail.component.html"),
            styles: [__webpack_require__(/*! ./mentor-detail.component.css */ "./src/app/mentor/mentor-detail/mentor-detail.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormBuilder"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"],
            _shared_mentor_service__WEBPACK_IMPORTED_MODULE_4__["MentorService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"],
            _angular_common__WEBPACK_IMPORTED_MODULE_6__["Location"]])
    ], MentorDetailComponent);
    return MentorDetailComponent;
}());



/***/ }),

/***/ "./src/app/mentor/mentor-information/mentor-information.component.css":
/*!****************************************************************************!*\
  !*** ./src/app/mentor/mentor-information/mentor-information.component.css ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".mat-card {\n  max-width: 500px;\n  margin: 40px auto;\n}\n  \n#menteeDeck {\n  margin-left: 20px;\n}\n  \n.content {\n  display: flex;\n  flex-wrap: wrap;\n}\n  \n.child {\n  flex-grow: 1;\n  flex: 1 1 35%;\n  margin: 20px;\n  max-width: 200px;\n}\n  \nhr{\n  margin-top: 3px;\n  margin-bottom: 3px;\n}\n  \n.btn{\n  background-color: rgb(55,136,203);\n  color: white;\n}\n  \n.btn:hover {\n  color: white;\n}\n  \n.action{\n  margin-top: 20px;\n  height: 10px;\n}\n  \n.voltar{\n  margin-right: 30px;\n  background: none;\n  border: none;\n  color: #9999;\n  float: left;\n}\n  \n.mat-card-header{\n  display: flex;\n}\n  \n.first-column{\n  margin-left:-33px;\n  float: left;\n  flex: 80%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbWVudG9yL21lbnRvci1pbmZvcm1hdGlvbi9tZW50b3ItaW5mb3JtYXRpb24uY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGdCQUFnQjtFQUNoQixpQkFBaUI7QUFDbkI7O0FBRUE7RUFDRSxpQkFBaUI7QUFDbkI7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsZUFBZTtBQUNqQjs7QUFFQTtFQUNFLFlBQVk7RUFDWixhQUFhO0VBQ2IsWUFBWTtFQUNaLGdCQUFnQjtBQUNsQjs7QUFFQTtFQUNFLGVBQWU7RUFDZixrQkFBa0I7QUFDcEI7O0FBRUE7RUFDRSxpQ0FBaUM7RUFDakMsWUFBWTtBQUNkOztBQUVBO0VBQ0UsWUFBWTtBQUNkOztBQUVBO0VBQ0UsZ0JBQWdCO0VBQ2hCLFlBQVk7QUFDZDs7QUFFQTtFQUNFLGtCQUFrQjtFQUNsQixnQkFBZ0I7RUFDaEIsWUFBWTtFQUNaLFlBQVk7RUFDWixXQUFXO0FBQ2I7O0FBRUE7RUFDRSxhQUFhO0FBQ2Y7O0FBRUE7RUFDRSxpQkFBaUI7RUFDakIsV0FBVztFQUNYLFNBQVM7QUFDWCIsImZpbGUiOiJzcmMvYXBwL21lbnRvci9tZW50b3ItaW5mb3JtYXRpb24vbWVudG9yLWluZm9ybWF0aW9uLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubWF0LWNhcmQge1xuICBtYXgtd2lkdGg6IDUwMHB4O1xuICBtYXJnaW46IDQwcHggYXV0bztcbn1cbiAgXG4jbWVudGVlRGVjayB7XG4gIG1hcmdpbi1sZWZ0OiAyMHB4O1xufVxuXG4uY29udGVudCB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtd3JhcDogd3JhcDtcbn1cblxuLmNoaWxkIHtcbiAgZmxleC1ncm93OiAxO1xuICBmbGV4OiAxIDEgMzUlO1xuICBtYXJnaW46IDIwcHg7XG4gIG1heC13aWR0aDogMjAwcHg7XG59XG5cbmhye1xuICBtYXJnaW4tdG9wOiAzcHg7XG4gIG1hcmdpbi1ib3R0b206IDNweDtcbn1cblxuLmJ0bntcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDU1LDEzNiwyMDMpO1xuICBjb2xvcjogd2hpdGU7XG59XG5cbi5idG46aG92ZXIge1xuICBjb2xvcjogd2hpdGU7XG59XG5cbi5hY3Rpb257XG4gIG1hcmdpbi10b3A6IDIwcHg7XG4gIGhlaWdodDogMTBweDtcbn1cblxuLnZvbHRhcntcbiAgbWFyZ2luLXJpZ2h0OiAzMHB4O1xuICBiYWNrZ3JvdW5kOiBub25lO1xuICBib3JkZXI6IG5vbmU7XG4gIGNvbG9yOiAjOTk5OTtcbiAgZmxvYXQ6IGxlZnQ7XG59XG5cbi5tYXQtY2FyZC1oZWFkZXJ7XG4gIGRpc3BsYXk6IGZsZXg7XG59XG5cbi5maXJzdC1jb2x1bW57XG4gIG1hcmdpbi1sZWZ0Oi0zM3B4O1xuICBmbG9hdDogbGVmdDtcbiAgZmxleDogODAlO1xufSJdfQ== */"

/***/ }),

/***/ "./src/app/mentor/mentor-information/mentor-information.component.html":
/*!*****************************************************************************!*\
  !*** ./src/app/mentor/mentor-information/mentor-information.component.html ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!DOCTYPE html>\n<html>\n  <head>\n    <title></title>\n    <link rel=\"stylesheet\" href=\"https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css\" integrity=\"sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T\" crossorigin=\"anonymous\">\n  </head>\n  <body>\n  <div class=\"container\">\n    <mat-card class=\"example-card\">\n        <div *ngFor=\"let mentorDeck of mentorDeck\">\n\n\n          <div *ngIf=\"mentorDeck.id == mentorId\">\n              <mat-card-header>\n                  <span class=\"first-column\">\n                      <mat-card-title>{{ mentorDeck.first_name + \" \" + mentorDeck.last_name }}</mat-card-title>\n                  </span>\n\n                  <span class=\"second-column\">\n                    <span *ngIf=\"mentorDeck['cycle'].region == 'Europa'\">\n                        <img src=\"//s3.amazonaws.com/brasaassets/pre_universitario/brasa_app/eu_flag.png\" height=\"30\" width=\"30\">\n                    </span>\n                    <span *ngIf=\"mentorDeck['cycle'].region == 'Estados Unidos'\">\n                        <img src=\"//s3.amazonaws.com/brasaassets/pre_universitario/brasa_app/us_flag.png\" height=\"30\" width=\"30\">\n                    </span>\n                  </span>\n                </mat-card-header>\n\n            <mat-card-content>\n                <div id=\"mentorDeck\">\n                  <span ><strong>Universidade: </strong></span>\n                  <span>{{ mentorDeck['university'].name }}</span>\n\n                  <span *ngIf= \"mentorDeck['major']\"><hr><strong>Major: </strong>\n                    <span>{{ mentorDeck['major'].name}}</span>\n                  </span>\n\n                  <span *ngIf= \"mentorDeck['second_major']\"><hr><strong>Segundo Major: </strong>\n                    <span>{{ mentorDeck['second_major'].name}}</span>\n                  </span>\n                  <!-- <span>{{ mentorDeck['major'].category}}</span>\n                  <br> -->\n                  <span *ngIf= \"mentorDeck['minor']\"><hr><strong>Minor: </strong>\n                    <span>{{ mentorDeck['minor'].name}}</span>\n                  </span>\n\n                  <span *ngIf= \"mentorDeck['second_minor']\"><hr><strong>Segundo Minor: </strong>\n                    <span>{{ mentorDeck['second_minor'].name}}</span>\n                  </span>\n\n\n                  <hr>\n                  <span ><strong>Email: </strong></span>\n                  <span>{{ mentorDeck.username }}@gobrasa.org</span>\n\n\n                </div>\n              </mat-card-content>\n              <mat-card-actions>\n                <button type=\"button\" class=\"btn btn-block\" routerLink=\"/mentor/detail/{{mentorDeck.id}}\"><i class=\"fa fa-plus\"></i>  Informações</button>\n\n              </mat-card-actions>\n          </div>\n        </div>\n      </mat-card>\n  </div>\n</body>\n</html>\n"

/***/ }),

/***/ "./src/app/mentor/mentor-information/mentor-information.component.ts":
/*!***************************************************************************!*\
  !*** ./src/app/mentor/mentor-information/mentor-information.component.ts ***!
  \***************************************************************************/
/*! exports provided: MentorInformationComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MentorInformationComponent", function() { return MentorInformationComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _shared_mentor_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../shared/mentor.service */ "./src/app/mentor/shared/mentor.service.ts");





var MentorInformationComponent = /** @class */ (function () {
    function MentorInformationComponent(route, http) {
        this.route = route;
        this.http = http;
        this.getMentees();
    }
    MentorInformationComponent.prototype.getAllMentor = function () {
        var httpOptions = _shared_mentor_service__WEBPACK_IMPORTED_MODULE_4__["MentorService"].buildHttpOptions();
        return this.http.get('https://brasa-pre.herokuapp.com/api/mentors', httpOptions);
    };
    MentorInformationComponent.prototype.getMentees = function () {
        var _this = this;
        this.getAllMentor().subscribe(function (mentorDeck) {
            _this.mentorDeck = mentorDeck['objects'];
            _this.mentorId = _this.route.snapshot.paramMap.get('id');
        });
    };
    MentorInformationComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-mentor-information',
            template: __webpack_require__(/*! ./mentor-information.component.html */ "./src/app/mentor/mentor-information/mentor-information.component.html"),
            styles: [__webpack_require__(/*! ./mentor-information.component.css */ "./src/app/mentor/mentor-information/mentor-information.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"]])
    ], MentorInformationComponent);
    return MentorInformationComponent;
}());



/***/ }),

/***/ "./src/app/mentor/mentor-listing/mentor-listing.component.css":
/*!********************************************************************!*\
  !*** ./src/app/mentor/mentor-listing/mentor-listing.component.css ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".mat-card {\n  max-width: 500px;\n  margin: 40px auto;\n}\n  \n#mentorDeck {\n  margin-left: 20px;\n}\n  \n.content {\n  display: flex;\n  flex-wrap: wrap;\n}\n  \n.child {\n  flex-grow: 1;\n  flex: 1 1 35%;\n  margin: 20px;\n  max-width: 398px;\n}\n  \nhr{\n  margin-top: 3px;\n  margin-bottom: 3px;\n}\n  \n.btn{\n  background-color: #4B88C5;\n  color: white;\n}\n  \n.btn:hover {\n  background-color: #4B88C5;\n  color: white;\n}\n  \n.mat-card-header{\n  display: flex;\n}\n  \n.first-column{\n  margin-left:-33px;\n  float: left;\n  flex: 80%;\n}\n  \n/* .mat-card-header-text {\n  margin: 0px;\n} */\n  \n.column img{\n  float: right;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbWVudG9yL21lbnRvci1saXN0aW5nL21lbnRvci1saXN0aW5nLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxnQkFBZ0I7RUFDaEIsaUJBQWlCO0FBQ25COztBQUVBO0VBQ0UsaUJBQWlCO0FBQ25COztBQUVBO0VBQ0UsYUFBYTtFQUNiLGVBQWU7QUFDakI7O0FBRUE7RUFDRSxZQUFZO0VBQ1osYUFBYTtFQUNiLFlBQVk7RUFDWixnQkFBZ0I7QUFDbEI7O0FBRUE7RUFDRSxlQUFlO0VBQ2Ysa0JBQWtCO0FBQ3BCOztBQUVBO0VBQ0UseUJBQXlCO0VBQ3pCLFlBQVk7QUFDZDs7QUFHQTtFQUNFLHlCQUF5QjtFQUN6QixZQUFZO0FBQ2Q7O0FBRUE7RUFDRSxhQUFhO0FBQ2Y7O0FBRUE7RUFDRSxpQkFBaUI7RUFDakIsV0FBVztFQUNYLFNBQVM7QUFDWDs7QUFFQTs7R0FFRzs7QUFHSDtFQUNFLFlBQVk7QUFDZCIsImZpbGUiOiJzcmMvYXBwL21lbnRvci9tZW50b3ItbGlzdGluZy9tZW50b3ItbGlzdGluZy5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLm1hdC1jYXJkIHtcbiAgbWF4LXdpZHRoOiA1MDBweDtcbiAgbWFyZ2luOiA0MHB4IGF1dG87XG59XG4gIFxuI21lbnRvckRlY2sge1xuICBtYXJnaW4tbGVmdDogMjBweDtcbn1cblxuLmNvbnRlbnQge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LXdyYXA6IHdyYXA7XG59XG5cbi5jaGlsZCB7XG4gIGZsZXgtZ3JvdzogMTtcbiAgZmxleDogMSAxIDM1JTtcbiAgbWFyZ2luOiAyMHB4O1xuICBtYXgtd2lkdGg6IDM5OHB4O1xufVxuXG5ocntcbiAgbWFyZ2luLXRvcDogM3B4O1xuICBtYXJnaW4tYm90dG9tOiAzcHg7XG59XG5cbi5idG57XG4gIGJhY2tncm91bmQtY29sb3I6ICM0Qjg4QzU7XG4gIGNvbG9yOiB3aGl0ZTtcbn1cblxuXG4uYnRuOmhvdmVyIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzRCODhDNTtcbiAgY29sb3I6IHdoaXRlO1xufVxuXG4ubWF0LWNhcmQtaGVhZGVye1xuICBkaXNwbGF5OiBmbGV4O1xufVxuXG4uZmlyc3QtY29sdW1ue1xuICBtYXJnaW4tbGVmdDotMzNweDtcbiAgZmxvYXQ6IGxlZnQ7XG4gIGZsZXg6IDgwJTtcbn1cblxuLyogLm1hdC1jYXJkLWhlYWRlci10ZXh0IHtcbiAgbWFyZ2luOiAwcHg7XG59ICovXG5cblxuLmNvbHVtbiBpbWd7XG4gIGZsb2F0OiByaWdodDtcbn0iXX0= */"

/***/ }),

/***/ "./src/app/mentor/mentor-listing/mentor-listing.component.html":
/*!*********************************************************************!*\
  !*** ./src/app/mentor/mentor-listing/mentor-listing.component.html ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!DOCTYPE html>\n<html>\n  <head>\n    <title></title>\n    <link rel=\"stylesheet\" href=\"https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css\" integrity=\"sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T\" crossorigin=\"anonymous\">\n  </head>\n  <body>\n  <div class=\"container\">\n    <div *ngFor=\"let userDeck of userDecks\">\n\n      <!-- If it is a mentor, it can see only himself-->\n      <div *ngIf=\"userDeck.role_name == 'mentor' && userNickname == userDeck.username\">\n        <mat-card class=\"example-card\">\n            <div *ngFor=\"let mentorDeck of mentorDecks\">\n              <div *ngIf=\"userNickname == mentorDeck.username\">\n                  <mat-card-header>\n                    <span class=\"first-column\">\n                        <mat-card-title>{{ mentorDeck.first_name + \" \" + mentorDeck.last_name }}</mat-card-title>\n                    </span>\n                  \n                    <span class=\"second-column\">\n                      <span *ngIf=\"mentorDeck['cycle'].region == 'Europa'\">\n                          <img src=\"//s3.amazonaws.com/brasaassets/pre_universitario/brasa_app/eu_flag.png\" height=\"30\" width=\"30\">\n                      </span>\n                      <span *ngIf=\"mentorDeck['cycle'].region == 'Estados Unidos'\">\n                          <img src=\"//s3.amazonaws.com/brasaassets/pre_universitario/brasa_app/us_flag.png\" height=\"30\" width=\"30\">\n                      </span>\n                    </span> \n                  </mat-card-header>\n\n                <mat-card-content>\n                   \n                  </mat-card-content>\n                  <mat-card-actions>\n                    <button type=\"button\" class=\"btn btn-block\" routerLink=\"/mentor/listing/{{mentorDeck.id}}\"><i class=\"fa fa-plus\"></i>  Perfil</button>\n\n                  </mat-card-actions>\n              </div>\n            </div>\n          </mat-card>\n        </div>\n\n        <!-- If it is a mentee, it can see only its mentor-->\n      <div *ngIf=\"userDeck.role_name == 'mentee' && userNickname == userDeck.username\">\n          <mat-card class=\"example-card\">\n              <div *ngFor=\"let menteeDeck of menteeDecks\">\n                <div *ngIf=\"userNickname == menteeDeck.username\">\n                  <div *ngFor=\"let mentorDeck of mentorDecks\">\n                    <div *ngIf=\"mentorDeck.id == menteeDeck.mentor_id\">\n                        <mat-card-header>\n                            <span class=\"first-column\">\n                                <mat-card-title>{{ mentorDeck.first_name + \" \" + mentorDeck.last_name }}</mat-card-title>\n                            </span>\n                          \n                            <span class=\"second-column\">\n                              <span *ngIf=\"mentorDeck['cycle'].region == 'Europa'\">\n                                  <img src=\"//s3.amazonaws.com/brasaassets/pre_universitario/brasa_app/eu_flag.png\" height=\"30\" width=\"30\">\n                              </span>\n                              <span *ngIf=\"mentorDeck['cycle'].region == 'Estados Unidos'\">\n                                  <img src=\"//s3.amazonaws.com/brasaassets/pre_universitario/brasa_app/us_flag.png\" height=\"30\" width=\"30\">\n                              </span>\n                            </span>\n                            \n                          </mat-card-header>\n\n                      <mat-card-content>\n                          <div id=\"mentorDeck\">\n                         \n                          </div>\n                        </mat-card-content>\n                        <mat-card-actions>\n                            <button type=\"button\" class=\"btn btn-block\" routerLink=\"/mentor/detail/{{mentorDeck.id}}\"><i class=\"fa fa-plus\"></i>  Informações</button>\n\n                        </mat-card-actions>\n                    </div>\n                  </div>\n                </div>\n              </div>\n            </mat-card>\n          </div>\n\n          <!-- If it is a admin, can see all mentors-->\n          <div *ngIf=\"userDeck.role_name == 'admin' && userNickname == userDeck.username\">\n              <h1>Mentors</h1>\n              <div class=\"content\">\n                    <mat-card class=\"example-card child\" *ngFor=\"let mentorDeck of mentorDecks\">\n                      <mat-card-header>\n                        <span class=\"first-column\">\n                            <mat-card-title>{{ mentorDeck.first_name + \" \" + mentorDeck.last_name }}</mat-card-title>\n                        </span>\n                      \n                        <span class=\"second-column\">\n                          <span *ngIf=\"mentorDeck['cycle'].region == 'Europa'\">\n                              <img src=\"//s3.amazonaws.com/brasaassets/pre_universitario/brasa_app/eu_flag.png\" height=\"30\" width=\"30\">\n                          </span>\n                          <span *ngIf=\"mentorDeck['cycle'].region == 'Estados Unidos'\">\n                              <img src=\"//s3.amazonaws.com/brasaassets/pre_universitario/brasa_app/us_flag.png\" height=\"30\" width=\"30\">\n                          </span>\n                        </span>\n                        \n                      </mat-card-header>\n\n                      <mat-card-content>\n                          <div id=\"mentorDeck\">\n                            \n                          </div>\n                        </mat-card-content>\n                        <mat-card-actions>\n                          <button type=\"button\" class=\"btn btn-block\" routerLink=\"/mentor/listing/{{mentorDeck.id}}\"><i class=\"fa fa-plus\"></i>  Atualizar informações</button>\n\n                        </mat-card-actions>\n                      </mat-card>\n                </div>\n                \n              </div>\n\n\n\n      </div>\n  </div>\n</body>\n</html>\n"

/***/ }),

/***/ "./src/app/mentor/mentor-listing/mentor-listing.component.ts":
/*!*******************************************************************!*\
  !*** ./src/app/mentor/mentor-listing/mentor-listing.component.ts ***!
  \*******************************************************************/
/*! exports provided: MentorListingComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MentorListingComponent", function() { return MentorListingComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var auth0_web__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! auth0-web */ "./node_modules/auth0-web/dist/index.js");
/* harmony import */ var auth0_web__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(auth0_web__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _shared_mentor_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../shared/mentor.service */ "./src/app/mentor/shared/mentor.service.ts");






var MentorListingComponent = /** @class */ (function () {
    function MentorListingComponent(route, http) {
        this.route = route;
        this.http = http;
        this.getMentors();
        this.getUser();
        this.getMentee();
        this.getAllMentees();
        this.userNickname = auth0_web__WEBPACK_IMPORTED_MODULE_4__["getProfile"]().nickname;
        //console.log(this.userNickname);
    }
    MentorListingComponent.prototype.getAllMentors = function () {
        var httpOptions = _shared_mentor_service__WEBPACK_IMPORTED_MODULE_5__["MentorService"].buildHttpOptions();
        return this.http.get('https://brasa-pre.herokuapp.com/api/mentors', httpOptions);
    };
    MentorListingComponent.prototype.getAllUsers = function () {
        var httpOptions = _shared_mentor_service__WEBPACK_IMPORTED_MODULE_5__["MentorService"].buildHttpOptions();
        return this.http.get('https://brasa-pre.herokuapp.com/api/users', httpOptions);
    };
    MentorListingComponent.prototype.getAllMentees = function () {
        var httpOptions = _shared_mentor_service__WEBPACK_IMPORTED_MODULE_5__["MentorService"].buildHttpOptions();
        return this.http.get('https://brasa-pre.herokuapp.com/api/mentees', httpOptions);
    };
    MentorListingComponent.prototype.getMentors = function () {
        var _this = this;
        this.getAllMentors().subscribe(function (mentorDecks) {
            _this.mentorDecks = mentorDecks['objects'];
            console.log(mentorDecks);
        });
    };
    MentorListingComponent.prototype.getUser = function () {
        var _this = this;
        this.getAllUsers().subscribe(function (userDecks) {
            _this.userDecks = userDecks['objects'];
            //console.log(userDecks);
        });
    };
    MentorListingComponent.prototype.getMentee = function () {
        var _this = this;
        this.getAllMentees().subscribe(function (menteeDecks) {
            _this.menteeDecks = menteeDecks['objects'];
            //console.log(menteeDecks);
        });
    };
    MentorListingComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-mentor-listing',
            template: __webpack_require__(/*! ./mentor-listing.component.html */ "./src/app/mentor/mentor-listing/mentor-listing.component.html"),
            styles: [__webpack_require__(/*! ./mentor-listing.component.css */ "./src/app/mentor/mentor-listing/mentor-listing.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"]])
    ], MentorListingComponent);
    return MentorListingComponent;
}());



/***/ }),

/***/ "./src/app/mentor/mentor.module.ts":
/*!*****************************************!*\
  !*** ./src/app/mentor/mentor.module.ts ***!
  \*****************************************/
/*! exports provided: MentorPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MentorPageModule", function() { return MentorPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _shared_mentor_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./shared/mentor.service */ "./src/app/mentor/shared/mentor.service.ts");







var MentorPageModule = /** @class */ (function () {
    function MentorPageModule() {
    }
    MentorPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClientModule"]
            ],
            providers: [
                _shared_mentor_service__WEBPACK_IMPORTED_MODULE_5__["MentorService"]
            ],
            schemas: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["CUSTOM_ELEMENTS_SCHEMA"]]
        })
    ], MentorPageModule);
    return MentorPageModule;
}());



/***/ }),

/***/ "./src/app/mentor/mentor/mentor.component.css":
/*!****************************************************!*\
  !*** ./src/app/mentor/mentor/mentor.component.css ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21lbnRvci9tZW50b3IvbWVudG9yLmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/mentor/mentor/mentor.component.html":
/*!*****************************************************!*\
  !*** ./src/app/mentor/mentor/mentor.component.html ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  mentor works!\n</p>\n"

/***/ }),

/***/ "./src/app/mentor/mentor/mentor.component.ts":
/*!***************************************************!*\
  !*** ./src/app/mentor/mentor/mentor.component.ts ***!
  \***************************************************/
/*! exports provided: MentorComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MentorComponent", function() { return MentorComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var MentorComponent = /** @class */ (function () {
    function MentorComponent() {
    }
    MentorComponent.prototype.ngOnInit = function () {
    };
    MentorComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-mentor',
            template: __webpack_require__(/*! ./mentor.component.html */ "./src/app/mentor/mentor/mentor.component.html"),
            styles: [__webpack_require__(/*! ./mentor.component.css */ "./src/app/mentor/mentor/mentor.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], MentorComponent);
    return MentorComponent;
}());



/***/ }),

/***/ "./src/app/mentor/shared/mentor.service.ts":
/*!*************************************************!*\
  !*** ./src/app/mentor/shared/mentor.service.ts ***!
  \*************************************************/
/*! exports provided: MentorService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MentorService", function() { return MentorService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var auth0_web__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! auth0-web */ "./node_modules/auth0-web/dist/index.js");
/* harmony import */ var auth0_web__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(auth0_web__WEBPACK_IMPORTED_MODULE_3__);




var MentorService = /** @class */ (function () {
    function MentorService(http) {
        this.http = http;
        this.API_URL = 'https://brasa-pre.herokuapp.com/api';
        this.API_KEY = 'WZmY7utpbDmshO1LYNtsweImq68Rp1h8e1Zjsnz63RbxE029tN';
    }
    MentorService_1 = MentorService;
    MentorService.buildHttpOptions = function () {
        var httpOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
                'Authorization': "Bearer " + auth0_web__WEBPACK_IMPORTED_MODULE_3__["getAccessToken"]()
            }),
        };
        return httpOptions;
    };
    MentorService.prototype.getUser = function (username) {
        var httpOptions = MentorService_1.buildHttpOptions();
        return this.http.get(this.API_URL + "/users?q={\"filters\":[{\"name\":\"username\",\"op\":\"eq\",\"val\": \"" + username + "\"}],\"single\":true}", httpOptions);
    };
    MentorService.prototype.getAllUniversities = function () {
        var httpOptions = MentorService_1.buildHttpOptions();
        return this.http.get(this.API_URL + "/universities", httpOptions);
    };
    MentorService.prototype.getAllCourses = function () {
        var httpOptions = MentorService_1.buildHttpOptions();
        return this.http.get(this.API_URL + "/courses", httpOptions);
    };
    MentorService.prototype.getCollegeNameById = function (id) {
        var httpOptions = MentorService_1.buildHttpOptions();
        return this.http.get(this.API_URL + "/universities/" + id, httpOptions);
    };
    MentorService.prototype.getMentorUniversity = function (id) {
        var httpOptions = MentorService_1.buildHttpOptions();
        return this.http.get(this.API_URL + "/mentors/" + id, httpOptions);
    };
    MentorService.prototype.getMentorMajor = function (id) {
        var httpOptions = MentorService_1.buildHttpOptions();
        return this.http.get(this.API_URL + "/mentors/" + id, httpOptions);
    };
    MentorService.prototype.getAllmentorDecks = function () {
        var httpOptions = MentorService_1.buildHttpOptions();
        return this.http.get(this.API_URL + "/mentors", httpOptions);
    };
    MentorService.prototype.userId = function () {
        var httpOptions = MentorService_1.buildHttpOptions();
        return this.http.get(this.API_URL + "/mentores", httpOptions);
    };
    MentorService.prototype.getMentorById = function (id) {
        var httpOptions = MentorService_1.buildHttpOptions();
        return this.http.get(this.API_URL + "/mentors/" + id, httpOptions);
    };
    var MentorService_1;
    MentorService = MentorService_1 = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], MentorService);
    return MentorService;
}());



/***/ }),

/***/ "./src/app/welcome/welcome.component.css":
/*!***********************************************!*\
  !*** ./src/app/welcome/welcome.component.css ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "body{\n    font-family: Lato, sans-serif;\n}\n\n#title{\n    width: 100%;\n    position: absolute;\n    left: 0;\n    top: 64px;\n    height: auto;\n    \n}\n\n.layer {\n    background-color: rgba(55,136,203, 0.3);\n    position: absolute;\n    top: 0;\n    left: 0;\n    width: 100%;\n    height: 100%;\n}\n\n#title-text{\n   \n    margin: 98px auto;\n    text-align: center;\n    color: white;\n}\n\n#title-text h1{\n    font-size: 85px;\n    text-transform: uppercase;\n    letter-spacing: 2px;\n    font-weight: 100;\n    line-height: 1;\n}\n\n#info{\n    margin-top: 30px;\n}\n\n#info h1{\n    color: rgb(55,136,203);\n}\n\n.instructions{\n    margin-top: 46px;\n}\n\n.instructions h2{\n    color: rgb(55,136,203);\n}\n\n#footer{\n    position: fixed;\n    bottom: 0;\n    left: 0;\n    right: 0;\n    width: 100%;\n    height: 10px;\n    background-color: rgb(55,136,203);\n}\n\n@media only screen and (max-width: 600px) {\n    #title{\n        width: 100%;\n        position: absolute;\n        background-size: cover;\n        left: 0;\n        top: 57px;\n        height: 350px;\n        background-image: url(https://lh6.googleusercontent.com/09AJvnubRaQpoLLNH0vOWyNK92yUwNkf13UUQA33kOiA34GAKUtfhiq03wFI4rj6r09xOmg=w16383);\n        -webkit-transform: translate3d(0px, 0px, 0px);\n        transform: translate3d(0px, 0px, 0px);\n        \n    }\n\n    #info{\n        height: 400px;\n    }\n  }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvd2VsY29tZS93ZWxjb21lLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSw2QkFBNkI7QUFDakM7O0FBRUE7SUFDSSxXQUFXO0lBQ1gsa0JBQWtCO0lBQ2xCLE9BQU87SUFDUCxTQUFTO0lBQ1QsWUFBWTs7QUFFaEI7O0FBRUE7SUFDSSx1Q0FBdUM7SUFDdkMsa0JBQWtCO0lBQ2xCLE1BQU07SUFDTixPQUFPO0lBQ1AsV0FBVztJQUNYLFlBQVk7QUFDaEI7O0FBRUE7O0lBRUksaUJBQWlCO0lBQ2pCLGtCQUFrQjtJQUNsQixZQUFZO0FBQ2hCOztBQUVBO0lBQ0ksZUFBZTtJQUNmLHlCQUF5QjtJQUN6QixtQkFBbUI7SUFDbkIsZ0JBQWdCO0lBQ2hCLGNBQWM7QUFDbEI7O0FBRUE7SUFDSSxnQkFBZ0I7QUFDcEI7O0FBRUE7SUFDSSxzQkFBc0I7QUFDMUI7O0FBRUE7SUFDSSxnQkFBZ0I7QUFDcEI7O0FBRUE7SUFDSSxzQkFBc0I7QUFDMUI7O0FBRUE7SUFDSSxlQUFlO0lBQ2YsU0FBUztJQUNULE9BQU87SUFDUCxRQUFRO0lBQ1IsV0FBVztJQUNYLFlBQVk7SUFDWixpQ0FBaUM7QUFDckM7O0FBR0E7SUFDSTtRQUNJLFdBQVc7UUFDWCxrQkFBa0I7UUFDbEIsc0JBQXNCO1FBQ3RCLE9BQU87UUFDUCxTQUFTO1FBQ1QsYUFBYTtRQUNiLHVJQUF1STtRQUN2SSw2Q0FBNkM7UUFDN0MscUNBQXFDOztJQUV6Qzs7SUFFQTtRQUNJLGFBQWE7SUFDakI7RUFDRiIsImZpbGUiOiJzcmMvYXBwL3dlbGNvbWUvd2VsY29tZS5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiYm9keXtcbiAgICBmb250LWZhbWlseTogTGF0bywgc2Fucy1zZXJpZjtcbn1cblxuI3RpdGxle1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICBsZWZ0OiAwO1xuICAgIHRvcDogNjRweDtcbiAgICBoZWlnaHQ6IGF1dG87XG4gICAgXG59XG5cbi5sYXllciB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSg1NSwxMzYsMjAzLCAwLjMpO1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICB0b3A6IDA7XG4gICAgbGVmdDogMDtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBoZWlnaHQ6IDEwMCU7XG59XG5cbiN0aXRsZS10ZXh0e1xuICAgXG4gICAgbWFyZ2luOiA5OHB4IGF1dG87XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIGNvbG9yOiB3aGl0ZTtcbn1cblxuI3RpdGxlLXRleHQgaDF7XG4gICAgZm9udC1zaXplOiA4NXB4O1xuICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gICAgbGV0dGVyLXNwYWNpbmc6IDJweDtcbiAgICBmb250LXdlaWdodDogMTAwO1xuICAgIGxpbmUtaGVpZ2h0OiAxO1xufVxuXG4jaW5mb3tcbiAgICBtYXJnaW4tdG9wOiAzMHB4O1xufVxuXG4jaW5mbyBoMXtcbiAgICBjb2xvcjogcmdiKDU1LDEzNiwyMDMpO1xufVxuXG4uaW5zdHJ1Y3Rpb25ze1xuICAgIG1hcmdpbi10b3A6IDQ2cHg7XG59XG5cbi5pbnN0cnVjdGlvbnMgaDJ7XG4gICAgY29sb3I6IHJnYig1NSwxMzYsMjAzKTtcbn1cblxuI2Zvb3RlcntcbiAgICBwb3NpdGlvbjogZml4ZWQ7XG4gICAgYm90dG9tOiAwO1xuICAgIGxlZnQ6IDA7XG4gICAgcmlnaHQ6IDA7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgaGVpZ2h0OiAxMHB4O1xuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYig1NSwxMzYsMjAzKTtcbn1cblxuXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDYwMHB4KSB7XG4gICAgI3RpdGxle1xuICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xuICAgICAgICBsZWZ0OiAwO1xuICAgICAgICB0b3A6IDU3cHg7XG4gICAgICAgIGhlaWdodDogMzUwcHg7XG4gICAgICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybChodHRwczovL2xoNi5nb29nbGV1c2VyY29udGVudC5jb20vMDlBSnZudWJSYVFwb0xMTkgwdk9XeU5LOTJ5VXdOa2YxM1VVUUEzM2tPaUEzNEdBS1V0ZmhpcTAzd0ZJNHJqNnIwOXhPbWc9dzE2MzgzKTtcbiAgICAgICAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKDBweCwgMHB4LCAwcHgpO1xuICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKDBweCwgMHB4LCAwcHgpO1xuICAgICAgICBcbiAgICB9XG5cbiAgICAjaW5mb3tcbiAgICAgICAgaGVpZ2h0OiA0MDBweDtcbiAgICB9XG4gIH1cbiJdfQ== */"

/***/ }),

/***/ "./src/app/welcome/welcome.component.html":
/*!************************************************!*\
  !*** ./src/app/welcome/welcome.component.html ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!DOCTYPE html>\n<html>\n  <head>\n    <title></title>\n    <link rel=\"stylesheet\" href=\"https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css\" integrity=\"sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T\" crossorigin=\"anonymous\">\n  </head>\n  <body>\n  <div *ngFor=\"let userDeck of userDecks\">\n  <div class=\"container\">\n    <div class=\"content\">\n        <div *ngIf=\"(userDeck.role_name == 'admin' || userDeck.role_name == 'mentor' || userDeck.role_name == 'mentee') && userNickname == userDeck.username\">\n        <div id=\"info\">\n          <h1>Bem-vindo ao app do BRASA PRÉ</h1>\n          <p>Esse app tem como objetivo... Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis facilisis varius justo, a ullamcorper sem rhoncus vitae. Curabitur ac condimentum nulla, vitae dignissim nisl. Quisque dignissim mauris lacus. </p>\n\n          <div class=\"instructions\">\n            <h2>Como o app Funciona?</h2>\n            <ol>\n              <li> <p>Adipiscing elit. Duis facilisis varius justo, a ullamcorper sem rhoncus vitae. Curabitur ac condimentum nulla, vitae dignissim nisl. Quisque dignissim mauris lacus.</p></li>\n              <li> <p>Ddipiscing elit. Duis facilisis varius justo, a ullamcorper sem rhoncus vitae. Curabitur ac condimentum nulla, vitae dignissim nisl. Quisque dignissim mauris lacus.</p></li>\n              <li> <p>Udipiscing elit. Duis facilisis varius justo, a ullamcorper sem rhoncus vitae. Curabitur ac condimentum nulla, vitae dignissim nisl. Quisque dignissim mauris lacus.</p></li>\n              <li> <p>Sdipiscing elit. Duis facilisis varius justo, a ullamcorper sem rhoncus vitae. Curabitur ac condimentum nulla, vitae dignissim nisl. Quisque dignissim mauris lacus.</p></li>\n            </ol>\n           \n          </div>\n\n        </div>\n        </div>\n        </div>\n    </div>\n    \n    \n  </div>\n  <div id=\"footer\"></div>\n</body>\n</html>"

/***/ }),

/***/ "./src/app/welcome/welcome.component.ts":
/*!**********************************************!*\
  !*** ./src/app/welcome/welcome.component.ts ***!
  \**********************************************/
/*! exports provided: WelcomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WelcomeComponent", function() { return WelcomeComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var auth0_web__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! auth0-web */ "./node_modules/auth0-web/dist/index.js");
/* harmony import */ var auth0_web__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(auth0_web__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _mentor_shared_mentor_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../mentor/shared/mentor.service */ "./src/app/mentor/shared/mentor.service.ts");






var WelcomeComponent = /** @class */ (function () {
    function WelcomeComponent(route, http) {
        this.route = route;
        this.http = http;
        this.getMentors();
        this.getUser();
        this.getMentee();
        this.getAllMentees();
        this.userNickname = auth0_web__WEBPACK_IMPORTED_MODULE_4__["getProfile"]().nickname;
        //console.log(this.userNickname);
    }
    WelcomeComponent.prototype.getAllMentors = function () {
        var httpOptions = _mentor_shared_mentor_service__WEBPACK_IMPORTED_MODULE_5__["MentorService"].buildHttpOptions();
        return this.http.get('https://brasa-pre.herokuapp.com/api/mentors', httpOptions);
    };
    WelcomeComponent.prototype.getAllUsers = function () {
        var httpOptions = _mentor_shared_mentor_service__WEBPACK_IMPORTED_MODULE_5__["MentorService"].buildHttpOptions();
        return this.http.get('https://brasa-pre.herokuapp.com/api/users', httpOptions);
    };
    WelcomeComponent.prototype.getAllMentees = function () {
        var httpOptions = _mentor_shared_mentor_service__WEBPACK_IMPORTED_MODULE_5__["MentorService"].buildHttpOptions();
        return this.http.get('https://brasa-pre.herokuapp.com/api/mentees', httpOptions);
    };
    WelcomeComponent.prototype.getMentors = function () {
        var _this = this;
        this.getAllMentors().subscribe(function (mentorDecks) {
            _this.mentorDecks = mentorDecks['objects'];
            console.log(mentorDecks);
        });
    };
    WelcomeComponent.prototype.getUser = function () {
        var _this = this;
        this.getAllUsers().subscribe(function (userDecks) {
            _this.userDecks = userDecks['objects'];
            //console.log(userDecks);
        });
    };
    WelcomeComponent.prototype.getMentee = function () {
        var _this = this;
        this.getAllMentees().subscribe(function (menteeDecks) {
            _this.menteeDecks = menteeDecks['objects'];
            //console.log(menteeDecks);
        });
    };
    WelcomeComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-welcome',
            template: __webpack_require__(/*! ./welcome.component.html */ "./src/app/welcome/welcome.component.html"),
            styles: [__webpack_require__(/*! ./welcome.component.css */ "./src/app/welcome/welcome.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"]])
    ], WelcomeComponent);
    return WelcomeComponent;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! hammerjs */ "./node_modules/hammerjs/hammer.js");
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(hammerjs__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");





if (_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_3__["AppModule"])
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/matheusbustamante/Desktop/brasa-pre-app/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map