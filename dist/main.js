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

module.exports = ".fill-remaining-space {\n    /* This fills the remaining space, by using flexbox.\n       Every toolbar row uses a flexbox row layout. */\n    flex: 1 1 auto;\n  }\n\n  div.view-container {\n    padding: 15px;\n    margin: 0 auto;\n    max-width: 940px;\n  }\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXBwLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSTtxREFDaUQ7SUFDakQsY0FBYztFQUNoQjs7RUFFQTtJQUNFLGFBQWE7SUFDYixjQUFjO0lBQ2QsZ0JBQWdCO0VBQ2xCIiwiZmlsZSI6InNyYy9hcHAvYXBwLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuZmlsbC1yZW1haW5pbmctc3BhY2Uge1xuICAgIC8qIFRoaXMgZmlsbHMgdGhlIHJlbWFpbmluZyBzcGFjZSwgYnkgdXNpbmcgZmxleGJveC5cbiAgICAgICBFdmVyeSB0b29sYmFyIHJvdyB1c2VzIGEgZmxleGJveCByb3cgbGF5b3V0LiAqL1xuICAgIGZsZXg6IDEgMSBhdXRvO1xuICB9XG5cbiAgZGl2LnZpZXctY29udGFpbmVyIHtcbiAgICBwYWRkaW5nOiAxNXB4O1xuICAgIG1hcmdpbjogMCBhdXRvO1xuICAgIG1heC13aWR0aDogOTQwcHg7XG4gIH0iXX0= */"

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "    <mat-toolbar color=\"primary\" class=\"mat-elevation-z10\">\n      <button mat-button routerLink=\"/\">Home</button>\n      <button mat-button onclick=\"location.href='http://www.gobrasa.org';\">Conheça a BRASA</button>\n      <button mat-button routerLink=\"/mentee/listing\">Mentee</button>\n      <button mat-button routerLink=\"/mentor/listing\">Mentor</button>\n      <button mat-button *ngIf=\"authenticated\" routerLink=\"/\">Admin</button>\n\n      <!-- This fills the remaining space of the current row -->\n      <span class=\"fill-remaining-space\"></span>\n\n      <button mat-button (click)=\"signIn()\" *ngIf=\"!authenticated\">Sign In</button>\n      <button mat-button (click)=\"signOut()\" *ngIf=\"authenticated\">Sign Out</button>\n    </mat-toolbar>\n\n    <div class=\"view-container\">\n      <router-outlet></router-outlet>\n    </div>\n"

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
/* harmony import */ var auth0_web__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! auth0-web */ "./node_modules/auth0-web/dist/index.js");
/* harmony import */ var auth0_web__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(auth0_web__WEBPACK_IMPORTED_MODULE_2__);



var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.authenticated = false;
        this.signIn = auth0_web__WEBPACK_IMPORTED_MODULE_2__["signIn"];
        this.signOut = auth0_web__WEBPACK_IMPORTED_MODULE_2__["signOut"];
    }
    AppComponent.prototype.ngOnInit = function () {
        var self = this;
        auth0_web__WEBPACK_IMPORTED_MODULE_2__["subscribe"](function (authenticated) { return (self.authenticated = authenticated); });
    };
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        })
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
/* harmony import */ var _exams_exams_api_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./exams/exams-api.service */ "./src/app/exams/exams-api.service.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _exams_exam_form_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./exams/exam-form.component */ "./src/app/exams/exam-form.component.ts");
/* harmony import */ var _exams_exams_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./exams/exams.component */ "./src/app/exams/exams.component.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var auth0_web__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! auth0-web */ "./node_modules/auth0-web/dist/index.js");
/* harmony import */ var auth0_web__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(auth0_web__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _callback_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./callback.component */ "./src/app/callback.component.ts");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./home/home.component */ "./src/app/home/home.component.ts");
/* harmony import */ var _auth_auth_guard__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./auth/auth.guard */ "./src/app/auth/auth.guard.ts");
/* harmony import */ var _mentee_mentee_college_mentee_college_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./mentee/mentee-college/mentee-college.component */ "./src/app/mentee/mentee-college/mentee-college.component.ts");
/* harmony import */ var _mentee_mentee_test_mentee_test_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./mentee/mentee-test/mentee-test.component */ "./src/app/mentee/mentee-test/mentee-test.component.ts");
/* harmony import */ var _mentee_mentee_essay_mentee_essay_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./mentee/mentee-essay/mentee-essay.component */ "./src/app/mentee/mentee-essay/mentee-essay.component.ts");
/* harmony import */ var _mentee_mentee_information_mentee_information_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./mentee/mentee-information/mentee-information.component */ "./src/app/mentee/mentee-information/mentee-information.component.ts");
/* harmony import */ var _mentee_mentee_listing_mentee_listing_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./mentee/mentee-listing/mentee-listing.component */ "./src/app/mentee/mentee-listing/mentee-listing.component.ts");
/* harmony import */ var _mentee_mentee_detail_mentee_detail_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./mentee/mentee-detail/mentee-detail.component */ "./src/app/mentee/mentee-detail/mentee-detail.component.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _mentee_mentee_module__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./mentee/mentee.module */ "./src/app/mentee/mentee.module.ts");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var angular2_multiselect_dropdown__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! angular2-multiselect-dropdown */ "./node_modules/angular2-multiselect-dropdown/fesm5/angular2-multiselect-dropdown.js");
/* harmony import */ var ng_pick_datetime__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ng-pick-datetime */ "./node_modules/ng-pick-datetime/picker.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _mentor_mentor_listing_mentor_listing_component__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ./mentor/mentor-listing/mentor-listing.component */ "./src/app/mentor/mentor-listing/mentor-listing.component.ts");
/* harmony import */ var _mentor_mentor_information_mentor_information_component__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ./mentor/mentor-information/mentor-information.component */ "./src/app/mentor/mentor-information/mentor-information.component.ts");
/* harmony import */ var _mentor_mentor_detail_mentor_detail_component__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! ./mentor/mentor-detail/mentor-detail.component */ "./src/app/mentor/mentor-detail/mentor-detail.component.ts");
/* harmony import */ var _mentee_mentee_component__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! ./mentee/mentee.component */ "./src/app/mentee/mentee.component.ts");
/* harmony import */ var _mentor_mentor_mentor_component__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! ./mentor/mentor/mentor.component */ "./src/app/mentor/mentor/mentor.component.ts");


































var appRoutes = [
    { path: 'callback', component: _callback_component__WEBPACK_IMPORTED_MODULE_11__["CallbackComponent"] },
    { path: 'new-exam', component: _exams_exam_form_component__WEBPACK_IMPORTED_MODULE_7__["ExamFormComponent"] },
    { path: 'exams', component: _exams_exams_component__WEBPACK_IMPORTED_MODULE_8__["ExamsComponent"], canActivate: [_auth_auth_guard__WEBPACK_IMPORTED_MODULE_14__["AuthGuard"]] },
    { path: 'mentee/listing', component: _mentee_mentee_listing_mentee_listing_component__WEBPACK_IMPORTED_MODULE_19__["MenteeListingComponent"] },
    { path: 'mentee/test/:id', component: _mentee_mentee_test_mentee_test_component__WEBPACK_IMPORTED_MODULE_16__["MenteeTestComponent"] },
    { path: 'mentee/essay/:id', component: _mentee_mentee_essay_mentee_essay_component__WEBPACK_IMPORTED_MODULE_17__["MenteeEssayComponent"] },
    { path: 'mentee/college/:id', component: _mentee_mentee_college_mentee_college_component__WEBPACK_IMPORTED_MODULE_15__["MenteeCollegeComponent"] },
    { path: 'mentee/detail/:id', component: _mentee_mentee_detail_mentee_detail_component__WEBPACK_IMPORTED_MODULE_20__["MenteeDetailComponent"] },
    { path: 'mentee/listing/:id', component: _mentee_mentee_information_mentee_information_component__WEBPACK_IMPORTED_MODULE_18__["MenteeInformationComponent"] },
    { path: 'mentor/listing', component: _mentor_mentor_listing_mentor_listing_component__WEBPACK_IMPORTED_MODULE_27__["MentorListingComponent"] },
    { path: 'mentor/listing/:id', component: _mentor_mentor_information_mentor_information_component__WEBPACK_IMPORTED_MODULE_28__["MentorInformationComponent"] },
    { path: 'mentor/detail/:id', component: _mentor_mentor_detail_mentor_detail_component__WEBPACK_IMPORTED_MODULE_29__["MentorDetailComponent"] },
    { path: '', component: _home_home_component__WEBPACK_IMPORTED_MODULE_13__["HomeComponent"] },
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
        auth0_web__WEBPACK_IMPORTED_MODULE_10__["configure"]({
            domain: 'brasa-pre-app.eu.auth0.com',
            audience: 'https://online-exam.digituz.com',
            clientID: 'Qw4p5JyU5yO2dZ0DWPL27g9tq6P4c5kk',
            redirectUri: 'http://ec2-52-53-185-200.us-west-1.compute.amazonaws.com:4300/callback',
            scope: 'openid profile manage:exams'
        });
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"],
                _exams_exam_form_component__WEBPACK_IMPORTED_MODULE_7__["ExamFormComponent"],
                _exams_exams_component__WEBPACK_IMPORTED_MODULE_8__["ExamsComponent"],
                _callback_component__WEBPACK_IMPORTED_MODULE_11__["CallbackComponent"],
                _home_home_component__WEBPACK_IMPORTED_MODULE_13__["HomeComponent"],
                //MentorComponent,
                _mentee_mentee_listing_mentee_listing_component__WEBPACK_IMPORTED_MODULE_19__["MenteeListingComponent"],
                _mentor_mentor_mentor_component__WEBPACK_IMPORTED_MODULE_31__["MentorComponent"],
                _mentor_mentor_information_mentor_information_component__WEBPACK_IMPORTED_MODULE_28__["MentorInformationComponent"],
                _mentor_mentor_listing_mentor_listing_component__WEBPACK_IMPORTED_MODULE_27__["MentorListingComponent"],
                _mentor_mentor_detail_mentor_detail_component__WEBPACK_IMPORTED_MODULE_29__["MentorDetailComponent"],
                _mentee_mentee_component__WEBPACK_IMPORTED_MODULE_30__["MenteeComponent"],
                _mentee_mentee_information_mentee_information_component__WEBPACK_IMPORTED_MODULE_18__["MenteeInformationComponent"],
                _mentee_mentee_essay_mentee_essay_component__WEBPACK_IMPORTED_MODULE_17__["MenteeEssayComponent"],
                _mentee_mentee_test_mentee_test_component__WEBPACK_IMPORTED_MODULE_16__["MenteeTestComponent"],
                _mentee_mentee_essay_mentee_essay_component__WEBPACK_IMPORTED_MODULE_17__["MenteeEssayComponent"],
                _mentee_mentee_college_mentee_college_component__WEBPACK_IMPORTED_MODULE_15__["MenteeCollegeComponent"],
                _mentee_mentee_detail_mentee_detail_component__WEBPACK_IMPORTED_MODULE_20__["MenteeDetailComponent"]
            ],
            imports: [
                angular2_multiselect_dropdown__WEBPACK_IMPORTED_MODULE_24__["AngularMultiSelectModule"],
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_12__["BrowserAnimationsModule"],
                ng_pick_datetime__WEBPACK_IMPORTED_MODULE_25__["OwlDateTimeModule"],
                ng_pick_datetime__WEBPACK_IMPORTED_MODULE_25__["OwlNativeDateTimeModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_6__["HttpClientModule"],
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_12__["NoopAnimationsModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_23__["MatAutocompleteModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_23__["MatBadgeModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_23__["MatBottomSheetModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_23__["MatButtonModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_23__["MatButtonToggleModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_23__["MatCardModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_23__["MatCheckboxModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_23__["MatChipsModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_23__["MatDatepickerModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_23__["MatDialogModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_23__["MatDividerModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_23__["MatExpansionModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_23__["MatGridListModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_23__["MatIconModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_23__["MatInputModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_23__["MatListModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_23__["MatMenuModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_23__["MatNativeDateModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_23__["MatPaginatorModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_23__["MatProgressBarModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_23__["MatProgressSpinnerModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_23__["MatRadioModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_23__["MatRippleModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_23__["MatSelectModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_23__["MatSidenavModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_23__["MatSliderModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_23__["MatSlideToggleModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_23__["MatSnackBarModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_23__["MatSortModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_23__["MatStepperModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_23__["MatTableModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_23__["MatTabsModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_23__["MatToolbarModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_23__["MatTooltipModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_23__["MatTreeModule"],
                _mentee_mentee_module__WEBPACK_IMPORTED_MODULE_22__["MenteePageModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_21__["FormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_21__["ReactiveFormsModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_9__["RouterModule"].forRoot(appRoutes),
            ],
            providers: [_exams_exams_api_service__WEBPACK_IMPORTED_MODULE_5__["ExamsApiService"], { provide: ng_pick_datetime__WEBPACK_IMPORTED_MODULE_25__["OWL_DATE_TIME_FORMATS"], useValue: MY_NATIVE_FORMATS }, _angular_common__WEBPACK_IMPORTED_MODULE_26__["DatePipe"]],
            entryComponents: [_mentee_mentee_test_mentee_test_component__WEBPACK_IMPORTED_MODULE_16__["MenteeTestComponent"], _mentee_mentee_college_mentee_college_component__WEBPACK_IMPORTED_MODULE_15__["MenteeCollegeComponent"]],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"], _mentee_mentee_test_mentee_test_component__WEBPACK_IMPORTED_MODULE_16__["MenteeTestComponent"], _mentee_mentee_college_mentee_college_component__WEBPACK_IMPORTED_MODULE_15__["MenteeCollegeComponent"]]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/auth/auth.guard.ts":
/*!************************************!*\
  !*** ./src/app/auth/auth.guard.ts ***!
  \************************************/
/*! exports provided: AuthGuard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthGuard", function() { return AuthGuard; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./auth.service */ "./src/app/auth/auth.service.ts");




var AuthGuard = /** @class */ (function () {
    function AuthGuard(authService, router) {
        this.authService = authService;
        this.router = router;
    }
    AuthGuard.prototype.canActivate = function (next, state) {
        var url = state.url;
        return this.checkLogin(url);
    };
    AuthGuard.prototype.checkLogin = function (url) {
        var authenticated = this.authService.check_authenticated();
        if (authenticated) {
            return true;
        }
        // Store the attempted URL for redirecting
        this.authService.redirectUrl = url;
        // Navigate to the login page with extras
        this.router.navigate(['/']);
        return false;
    };
    AuthGuard = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], AuthGuard);
    return AuthGuard;
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
/* harmony import */ var _exams_exams_api_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../exams/exams-api.service */ "./src/app/exams/exams-api.service.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");






var AuthService = /** @class */ (function () {
    function AuthService(http) {
        this.http = http;
        this.isLoggedIn = false;
        // store the URL so we can redirect after logging in
        this.redirectUrl = '/exams';
        this.login = auth0_web__WEBPACK_IMPORTED_MODULE_3__["signIn"];
        this.logout = auth0_web__WEBPACK_IMPORTED_MODULE_3__["signOut"];
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
        var httpOptions = _exams_exams_api_service__WEBPACK_IMPORTED_MODULE_4__["ExamsApiService"].buildHttpOptions();
        var user2;
        return this.http.get(_env__WEBPACK_IMPORTED_MODULE_2__["API_URL"] + "/users/" + username, httpOptions);
    };
    AuthService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root',
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClient"]])
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
            self.router.navigate(['/exams']);
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
/*! exports provided: API_URL */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "API_URL", function() { return API_URL; });
var API_URL = 'http://localhost:5000';
//export const API_URL = 'https://brasa-pre.herokuapp.com';


/***/ }),

/***/ "./src/app/exams/exam-form.component.ts":
/*!**********************************************!*\
  !*** ./src/app/exams/exam-form.component.ts ***!
  \**********************************************/
/*! exports provided: ExamFormComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ExamFormComponent", function() { return ExamFormComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _exams_api_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./exams-api.service */ "./src/app/exams/exams-api.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");




var ExamFormComponent = /** @class */ (function () {
    function ExamFormComponent(examsApi, router) {
        this.examsApi = examsApi;
        this.router = router;
        this.exam = {
            category: '',
            subcategory: ''
        };
    }
    ExamFormComponent.prototype.updateCategory = function (event) {
        this.exam.category = event.target.value;
    };
    ExamFormComponent.prototype.updateSubCategory = function (event) {
        this.exam.subcategory = event.target.value;
    };
    ExamFormComponent.prototype.saveExam = function () {
        var _this = this;
        this.examsApi
            .saveExam(this.exam)
            .subscribe(function () { return _this.router.navigate(['/exams']); }, function (error) { return alert(error.message); });
    };
    ExamFormComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'exam-form',
            template: "\n    <mat-card>\n      <h2>New Exam</h2>\n        <mat-form-field class=\"full-width\">\n          <input matInput\n                 placeholder=\"Category\"\n                 (keyup)=\"updateCategory($event)\">\n        </mat-form-field>\n\n        <mat-form-field class=\"full-width\">\n          <input matInput\n                 placeholder=\"Subcategory\"\n                 (keyup)=\"updateSubCategory($event)\">\n        </mat-form-field>\n\n        <button mat-raised-button\n                color=\"primary\"\n                (click)=\"saveExam()\">\n          Save Exam\n        </button>\n    </mat-card>\n  ",
            styles: ["\n    .exams-form {\n      min-width: 150px;\n      max-width: 500px;\n      width: 100%;\n    }\n\n    .full-width {\n      width: 100%;\n    }\n  "]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_exams_api_service__WEBPACK_IMPORTED_MODULE_2__["ExamsApiService"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]])
    ], ExamFormComponent);
    return ExamFormComponent;
}());



/***/ }),

/***/ "./src/app/exams/exams-api.service.ts":
/*!********************************************!*\
  !*** ./src/app/exams/exams-api.service.ts ***!
  \********************************************/
/*! exports provided: ExamsApiService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ExamsApiService", function() { return ExamsApiService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var auth0_web__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! auth0-web */ "./node_modules/auth0-web/dist/index.js");
/* harmony import */ var auth0_web__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(auth0_web__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _env__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../env */ "./src/app/env.ts");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");







var ExamsApiService = /** @class */ (function () {
    function ExamsApiService(http) {
        this.http = http;
        //TODO - Use exams endpoint instead of adding it to every request
        this.examsEndpoint = '/exams/';
    }
    ExamsApiService_1 = ExamsApiService;
    ExamsApiService._handleError = function (err) {
        console.log(err.message);
        return rxjs__WEBPACK_IMPORTED_MODULE_6__["Observable"].throw(err.message || 'Error: Unable to complete request.');
    };
    ExamsApiService.buildHttpOptions = function () {
        var httpOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
                'Authorization': "Bearer " + auth0_web__WEBPACK_IMPORTED_MODULE_3__["getAccessToken"]()
            }),
        };
        return httpOptions;
    };
    // GET list of public, future events
    ExamsApiService.prototype.getExams = function () {
        var httpOptions = ExamsApiService_1.buildHttpOptions();
        return this.http
            .get(_env__WEBPACK_IMPORTED_MODULE_5__["API_URL"] + "/exams/", httpOptions)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(ExamsApiService_1._handleError));
    };
    ExamsApiService.prototype.saveExam = function (exam) {
        var httpOptions = ExamsApiService_1.buildHttpOptions();
        return this.http
            .post(_env__WEBPACK_IMPORTED_MODULE_5__["API_URL"] + "/exams/", exam, httpOptions)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(ExamsApiService_1._handleError));
    };
    ExamsApiService.prototype.deleteExam = function (examId) {
        var httpOptions = ExamsApiService_1.buildHttpOptions();
        return this.http
            .delete(_env__WEBPACK_IMPORTED_MODULE_5__["API_URL"] + "/exams/" + examId, httpOptions);
    };
    var ExamsApiService_1;
    ExamsApiService = ExamsApiService_1 = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], ExamsApiService);
    return ExamsApiService;
}());



/***/ }),

/***/ "./src/app/exams/exams.component.css":
/*!*******************************************!*\
  !*** ./src/app/exams/exams.component.css ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "div.exams {\n    display: grid;\n    grid-template-columns: 1fr 1fr;\n    grid-gap: 15px;\n  }\n  \n  button.new-exam {\n    position: fixed;\n    bottom: 15px;\n    right: 15px;\n  }\n  \n  @media (max-width: 720px) {\n    div.exams {\n      grid-template-columns: 1fr;\n    }\n  }\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZXhhbXMvZXhhbXMuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLGFBQWE7SUFDYiw4QkFBOEI7SUFDOUIsY0FBYztFQUNoQjs7RUFFQTtJQUNFLGVBQWU7SUFDZixZQUFZO0lBQ1osV0FBVztFQUNiOztFQUVBO0lBQ0U7TUFDRSwwQkFBMEI7SUFDNUI7RUFDRiIsImZpbGUiOiJzcmMvYXBwL2V4YW1zL2V4YW1zLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJkaXYuZXhhbXMge1xuICAgIGRpc3BsYXk6IGdyaWQ7XG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgMWZyO1xuICAgIGdyaWQtZ2FwOiAxNXB4O1xuICB9XG4gIFxuICBidXR0b24ubmV3LWV4YW0ge1xuICAgIHBvc2l0aW9uOiBmaXhlZDtcbiAgICBib3R0b206IDE1cHg7XG4gICAgcmlnaHQ6IDE1cHg7XG4gIH1cbiAgXG4gIEBtZWRpYSAobWF4LXdpZHRoOiA3MjBweCkge1xuICAgIGRpdi5leGFtcyB7XG4gICAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmcjtcbiAgICB9XG4gIH0iXX0= */"

/***/ }),

/***/ "./src/app/exams/exams.component.ts":
/*!******************************************!*\
  !*** ./src/app/exams/exams.component.ts ***!
  \******************************************/
/*! exports provided: ExamsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ExamsComponent", function() { return ExamsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _exams_api_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./exams-api.service */ "./src/app/exams/exams-api.service.ts");
/* harmony import */ var auth0_web__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! auth0-web */ "./node_modules/auth0-web/dist/index.js");
/* harmony import */ var auth0_web__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(auth0_web__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");




var ExamsComponent = /** @class */ (function () {
    function ExamsComponent(examsApi) {
        this.examsApi = examsApi;
        this.authenticated = false;
    }
    ExamsComponent.prototype.ngOnInit = function () {
        var _this = this;
        console.log(auth0_web__WEBPACK_IMPORTED_MODULE_2__["getProfile"]());
        this.examsListSubs = this.examsApi
            .getExams()
            .subscribe(function (res) {
            _this.examsList = res;
        }, console.error);
        var self = this;
        auth0_web__WEBPACK_IMPORTED_MODULE_2__["subscribe"](function (authenticated) { return (self.authenticated = authenticated); });
    };
    ExamsComponent.prototype.ngOnDestroy = function () {
        this.examsListSubs.unsubscribe();
    };
    ExamsComponent.prototype.delete = function (examId) {
        var _this = this;
        this.examsApi
            .deleteExam(examId)
            .subscribe(function () {
            _this.examsListSubs = _this.examsApi
                .getExams()
                .subscribe(function (res) {
                _this.examsList = res;
            }, console.error);
        }, console.error);
    };
    ExamsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
            selector: 'exams',
            template: "\n    <h2>Exams</h2>\n    <iframe src=\"http://ec2-54-215-139-223.us-west-1.compute.amazonaws.com/embed/query/26/visualization/51?api_key=41qNtAQ3AXN9dbUelzoDMDzegnIJq1oemI3Ozm14\" width=\"900\" height=\"600\"></iframe>\n    <p>Choose an exam and start studying.</p>\n    <div class=\"exams\">\n      <mat-card class=\"example-card\" *ngFor=\"let exam of examsList\" class=\"mat-elevation-z5\">\n        <mat-card-content>\n          <mat-card-title>{{exam.category}}</mat-card-title>\n          <mat-card-subtitle>{{exam.subcategory}}</mat-card-subtitle>\n          <button mat-raised-button color=\"accent\">Start Exam</button>\n          <button mat-button color=\"warn\"\n                  (click)=\"delete(exam.id)\">\n            Delete\n          </button>\n          \n        </mat-card-content>\n      </mat-card>\n    </div>\n    <button mat-fab color=\"primary\" *ngIf=\"authenticated\"\n            class=\"new-exam\" routerLink=\"/new-exam\">\n      <i class=\"material-icons\">note_add</i>\n    </button>\n    \n  ",
            styles: [__webpack_require__(/*! ./exams.component.css */ "./src/app/exams/exams.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_exams_api_service__WEBPACK_IMPORTED_MODULE_1__["ExamsApiService"]])
    ], ExamsComponent);
    return ExamsComponent;
}());



/***/ }),

/***/ "./src/app/home/home.component.css":
/*!*****************************************!*\
  !*** ./src/app/home/home.component.css ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2hvbWUvaG9tZS5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/home/home.component.html":
/*!******************************************!*\
  !*** ./src/app/home/home.component.html ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  home works!\n</p>\n"

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

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21lbnRlZS9tZW50ZWUtY29sbGVnZS9tZW50ZWUtY29sbGVnZS5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/mentee/mentee-college/mentee-college.component.html":
/*!*********************************************************************!*\
  !*** ./src/app/mentee/mentee-college/mentee-college.component.html ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n<div class=\"container\">\n    <h1>Atualize sua College List!</h1>\n    <form [formGroup]=\"userForm\" (ngSubmit)=\"postCollegeList()\">\n\n      <div class=\"form-group\" *ngIf=\"selectedUnis\">\n      <angular2-multiselect *ngIf=\"selectedUnis.length == helper3\"\n      [data]=\"universities\"\n                            [(ngModel)]=\"selectedUnis\"\n                            [loading] = \"loading\"\n                            [settings]=\"settings\"\n                            (onSelect)=\"onItemSelect($event)\"\n                            (onDeSelect)=\"OnItemDeSelect($event)\"\n                            formControlName=\"uniList\"\n                            ><c-item>\n                <ng-template let-item=\"item\">\n                  {{item.name}}\n                </ng-template>\n        </c-item>\n      </angular2-multiselect>\n      </div>\n\n\n      <br><br>\n      <button type=\"submit\" class=\"btn btn-success\">Salvar</button>\n\n    </form>\n</div>\n"

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
    /*
      ngOnInit() {
        this.menteeId = this.route.snapshot.paramMap.get('id');
        this.selectColleges(this.menteeId)
    }
    ngOnChanges() {
        if (this.userForm) {
          this.userForm.setValue(this.selectedUnis);
          console.log(this.userForm, 'updated')
        }
      }*/
    function MenteeCollegeComponent(formBuilder, http, getMentee, menteeService, route, cd, zone, _location) {
        this.formBuilder = formBuilder;
        this.http = http;
        this.getMentee = getMentee;
        this.menteeService = menteeService;
        this.route = route;
        this.cd = cd;
        this.zone = zone;
        this._location = _location;
        this.API_URL = 'http://brasa-pre.herokuapp.com';
        this.universities = [];
        this.selectedUnis = new Array();
        this.selectedUnis1 = [];
        this.helper = [];
        this.categoria = new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"]();
        this.categories = ['teste', 'teste2'];
        this.itemList = [];
        this.selectedItems = [];
        this.settings = {};
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
            uniList: []
        });
        this.getUniList(); // pegando todas universities
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
        this.settings = {
            singleSelection: false,
            text: "Select College List",
            enableFilterSelectAll: false,
            enableSearchFilter: true,
            lazyLoading: true,
            labelKey: "name",
            limitSelection: 20,
            classes: "myclass custom-class"
        };
    }
    MenteeCollegeComponent.prototype.onItemSelect = function (item) {
        this.helper3 = this.helper3 + 1;
        //this.selectedUnis.push({id: 0, name: 'None'})
    };
    MenteeCollegeComponent.prototype.OnItemDeSelect = function (item) {
        this.helper3 = this.helper3 - 1;
        //this.selectedUnis.pop()
    };
    MenteeCollegeComponent.prototype.postCollegeList = function () {
        var _this = this;
        // pegando ids
        var universitiesId = [];
        this.userForm.value.uniList.forEach(function (test) {
            universitiesId.push(test.id);
        });
        console.log(universitiesId);
        var httpOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
                'Content-Type': 'application/json',
                'Access-Control-Allow-Origin': '*',
                'Access-Control-Allow-Methods': 'POST, GET, OPTIONS, PUT',
                "Access-Control-Allow-Headers": "Origin, X-Requested-With, Content-Type, Accept",
                'Authorization': "Bearer " + auth0_web__WEBPACK_IMPORTED_MODULE_6__["getAccessToken"]()
            })
        };
        this.http.post(this.API_URL + "/university_applications/university_applications_mentee/" + this.menteeId, { universities: universitiesId }, httpOptions).subscribe(function (data) {
            //console.log(data['_body']);
            _this._location.back();
        }, function (error) {
            console.log(error);
        });
    };
    ;
    MenteeCollegeComponent.prototype.selectColleges = function (id) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                this.menteeService.getMenteeCollegeList(id).subscribe(function (tests) {
                    _this.helper3 = tests.university_applications.length;
                    tests.university_applications.forEach(function (unis) {
                        _this.menteeService.getCollegeNameById(unis.university_id).subscribe(function (collegeName) {
                            _this.selectedUnis.push({ id: unis.university_id, name: collegeName.name });
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
                    _this.selectedUnis = _this.helper;
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
            _this.universities = tests;
            var result = [];
            var mapUniversities = new Map();
            for (var _i = 0, tests_1 = tests; _i < tests_1.length; _i++) {
                var item = tests_1[_i];
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
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Array)
    ], MenteeCollegeComponent.prototype, "selectedUnis", void 0);
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

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21lbnRlZS9tZW50ZWUtZGV0YWlsL21lbnRlZS1kZXRhaWwuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/mentee/mentee-detail/mentee-detail.component.html":
/*!*******************************************************************!*\
  !*** ./src/app/mentee/mentee-detail/mentee-detail.component.html ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n    <h1>Atualize suas informações!</h1>\n    <form [formGroup]=\"todo\" (ngSubmit)=\"logForm()\">\n      <div class=\"form-group\">\n        <input placeholder=\"Nome\" type=\"text\" class=\"form-control\" [(ngModel)]=\"menteeDados.first_name\" [ngModelOptions]=\"{standalone: true}\" required>\n      </div>\n      <br>\n\n      <div class=\"form-group\">\n        <input placeholder=\"Sobrenome\" type=\"text\" [(ngModel)]=\"menteeDados.last_name\" [ngModelOptions]=\"{standalone: true}\">\n      </div>\n      <br>\n\n      <div class=\"form-group\">\n        <input placeholder=\"Cidade\" type=\"text\" [(ngModel)]=\"menteeDados.city\" [ngModelOptions]=\"{standalone: true}\">\n      </div>\n      <br>\n\n      <div class=\"form-group\">\n        <input placeholder=\"Estado\" type=\"text\" [(ngModel)]=\"menteeDados.state\" [ngModelOptions]=\"{standalone: true}\">\n      </div>\n      <br>\n\n      <mat-form-field>\n        <mat-select [(value)]=\"menteeDados.financial_aid\" placeholder=\"Precisa de financial aid ?\">\n          <mat-option [value]=\"true\">Sim</mat-option>\n          <mat-option [value]=\"false\">Não</mat-option>\n        </mat-select>\n      </mat-form-field>\n      <br><br>\n      <button type=\"submit\" class=\"btn btn-success\">Enviar</button>\n\n    </form>\n"

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







var MenteeDetailComponent = /** @class */ (function () {
    /*
   AddSAT(){
     this.satArray.push({'value':''});
   };
   AddScore(){
     this.scoresArray.push({'category':'','subcategory':'', 'score': ''});
   };
   RemoveScore(){
     this.scoresArray.pop();
   };
   AddSubjects(){
     this.satSubjectsArray.push({'subject':'','value':'','date':''});
   }*/
    function MenteeDetailComponent(formBuilder, http, getMentee, menteeService, route, _location) {
        this.formBuilder = formBuilder;
        this.http = http;
        this.getMentee = getMentee;
        this.menteeService = menteeService;
        this.route = route;
        this._location = _location;
        this.API_URL = 'http://brasa-pre.herokuapp.com';
        //private readonly API_URL = 'http://bce8300d.ngrok.io';
        this.satArray = [];
        this.scoresArray = [];
        this.satSubjectsArray = [];
        this.menteeProfile = [];
        this.menteeDados = [];
        this.headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({ 'Content-Type': 'application/json',
            'Access-Control-Allow-Origin': '*',
            'Access-Control-Allow-Methods': 'POST, GET, OPTIONS, PUT',
            "Access-Control-Allow-Headers": "Origin, X-Requested-With, Content-Type, Accept"
        });
        this.menteeDados.push({ first_name: '',
            last_name: '',
            city: '',
            state: '',
            financial_aid: ''
        });
        this.todo = this.formBuilder.group({});
        this.menteeId = this.route.snapshot.paramMap.get('id');
        this.getInformation();
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
    MenteeDetailComponent.prototype.getInformation = function () {
        var _this = this;
        this.menteeService.getMenteeCollegeList(this.menteeId).subscribe(function (mentee) {
            _this.menteeDados = {
                first_name: mentee.first_name,
                last_name: mentee.last_name,
                city: mentee.city,
                state: mentee.state,
                financial_aid: mentee.financial_aid,
                universities: mentee.universities
            };
        });
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
            if (data.status == 204) {
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

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21lbnRlZS9tZW50ZWUtZXNzYXkvbWVudGVlLWVzc2F5LmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/mentee/mentee-essay/mentee-essay.component.html":
/*!*****************************************************************!*\
  !*** ./src/app/mentee/mentee-essay/mentee-essay.component.html ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n    <h1>Envie o link do Google Docs</h1>\n\n    <form [formGroup]=\"todo\" (ngSubmit)=\"logForm()\">\n      <div class=\"form-group\" *ngFor=\"let att of essayArray; let idx = index\">\n        <input placeholder=\"Essay link\" type=\"text\" class=\"form-control\" [(ngModel)]=\"essayArray[idx].link\" [ngModelOptions]=\"{standalone: true}\" required>\n        <button (click)=\"RemoveEssay(idx)\">Remover essay</button>\n        <br><br>\n      </div>\n      <br>\n      <button (click)=\"AddEssay()\">Adicionar outra essay</button>\n      <br><br>\n\n      <button type=\"submit\" class=\"btn btn-success\">Salvar</button>\n\n    </form>\n</div>\n"

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
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");




var MenteeEssayComponent = /** @class */ (function () {
    function MenteeEssayComponent(formBuilder, http, getMentee) {
        this.formBuilder = formBuilder;
        this.http = http;
        this.getMentee = getMentee;
        this.API_URL = 'http://brasa-pre.herokuapp.com/api';
        this.essayArray = [];
        this.headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({ 'Content-Type': 'application/json',
            'Access-Control-Allow-Origin': '*',
            'Access-Control-Allow-Methods': 'POST, GET, OPTIONS, PUT',
            "Access-Control-Allow-Headers": "Origin, X-Requested-With, Content-Type, Accept"
        });
        this.essayArray.push({ 'link': '' });
        this.todo = this.formBuilder.group({});
    }
    MenteeEssayComponent.prototype.AddEssay = function () {
        this.essayArray.push({ 'link': '' });
    };
    ;
    MenteeEssayComponent.prototype.RemoveEssay = function (idx) {
        this.essayArray.splice(idx, 1);
    };
    ;
    MenteeEssayComponent.prototype.logForm = function () {
        for (var i = 0; i < this.essayArray.length; i++) {
            this.http.post(this.API_URL + "/exams", this.essayArray[i], { headers: this.headers }).subscribe(function (data) {
                console.log(data['_body']);
            }, function (error) {
                console.log(error);
            });
        }
        ;
    };
    ;
    MenteeEssayComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-mentee-essay',
            template: __webpack_require__(/*! ./mentee-essay.component.html */ "./src/app/mentee/mentee-essay/mentee-essay.component.html"),
            styles: [__webpack_require__(/*! ./mentee-essay.component.css */ "./src/app/mentee/mentee-essay/mentee-essay.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
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

module.exports = ".mat-card {\n    max-width: 500px;\n    margin: 40px auto;\n}\n    \n#menteeDeck {\n    margin-left: 20px;\n}\n    \n.content {\n    display: flex;\n    flex-wrap: wrap;\n  }\n    \n.child {\n    flex-grow: 1;\n    flex: 1 1 35%;\n    margin: 20px;\n    max-width: 200px;\n  }\n    \nhr{\n    margin-top: 3px;\n    margin-bottom: 3px;\n  }\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbWVudGVlL21lbnRlZS1pbmZvcm1hdGlvbi9tZW50ZWUtaW5mb3JtYXRpb24uY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLGdCQUFnQjtJQUNoQixpQkFBaUI7QUFDckI7O0FBRUE7SUFDSSxpQkFBaUI7QUFDckI7O0FBRUE7SUFDSSxhQUFhO0lBQ2IsZUFBZTtFQUNqQjs7QUFFQTtJQUNFLFlBQVk7SUFDWixhQUFhO0lBQ2IsWUFBWTtJQUNaLGdCQUFnQjtFQUNsQjs7QUFFQTtJQUNFLGVBQWU7SUFDZixrQkFBa0I7RUFDcEIiLCJmaWxlIjoic3JjL2FwcC9tZW50ZWUvbWVudGVlLWluZm9ybWF0aW9uL21lbnRlZS1pbmZvcm1hdGlvbi5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLm1hdC1jYXJkIHtcbiAgICBtYXgtd2lkdGg6IDUwMHB4O1xuICAgIG1hcmdpbjogNDBweCBhdXRvO1xufVxuICAgIFxuI21lbnRlZURlY2sge1xuICAgIG1hcmdpbi1sZWZ0OiAyMHB4O1xufVxuXG4uY29udGVudCB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LXdyYXA6IHdyYXA7XG4gIH1cbiAgXG4gIC5jaGlsZCB7XG4gICAgZmxleC1ncm93OiAxO1xuICAgIGZsZXg6IDEgMSAzNSU7XG4gICAgbWFyZ2luOiAyMHB4O1xuICAgIG1heC13aWR0aDogMjAwcHg7XG4gIH1cblxuICBocntcbiAgICBtYXJnaW4tdG9wOiAzcHg7XG4gICAgbWFyZ2luLWJvdHRvbTogM3B4O1xuICB9Il19 */"

/***/ }),

/***/ "./src/app/mentee/mentee-information/mentee-information.component.html":
/*!*****************************************************************************!*\
  !*** ./src/app/mentee/mentee-information/mentee-information.component.html ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!DOCTYPE html>\n<html>\n  <head>\n    <title></title>\n    <link rel=\"stylesheet\" href=\"https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css\" integrity=\"sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T\" crossorigin=\"anonymous\">\n  </head>\n  <body>\n  <div class=\"container\">\n    <mat-card class=\"example-card\">\n        <div *ngFor=\"let menteeDeck of menteeDeck\">\n\n\n          <div *ngIf=\"menteeDeck.id == menteeId\">\n            <mat-card-header>\n              <mat-card-title>{{ menteeDeck.first_name + \" \" + menteeDeck.last_name }}</mat-card-title>\n              <mat-card-subtitle>{{\"Username: \" + \" \" + menteeDeck.username }}</mat-card-subtitle>\n            </mat-card-header>\n\n            <mat-card-content>\n                <div id=\"menteeDeck\">\n                  <span ><strong>Mentor ID: </strong></span>\n                  <span>{{ menteeDeck.mentor_id }}</span>\n                  <hr>\n                  <span ><strong>City: </strong></span>\n                  <span>{{ menteeDeck.city }}</span>\n                  <hr>\n                  <span ><strong>State: </strong></span>\n                  <span>{{ menteeDeck.state }}</span>\n                </div>\n              </mat-card-content>\n              <mat-card-actions>\n                <button type=\"button\" class=\"btn btn-primary btn-block\" routerLink=\"/mentee/detail/{{menteeDeck.id}}\"><i class=\"fa fa-plus\"></i>  Atualizar informações</button>\n                <button type=\"button\" class=\"btn btn-primary btn-block\" routerLink=\"/mentee/test/{{menteeDeck.id}}\"><i class=\"fa fa-plus\"></i> Adicionar prova</button>\n                <button type=\"button\" class=\"btn btn-primary btn-block\" routerLink=\"/mentee/essay/{{menteeDeck.id}}\"><i class=\"fa fa-plus\"></i> Adicionar essay</button>\n                <button type=\"button\" class=\"btn btn-primary btn-block\" routerLink=\"/mentee/college/{{menteeDeck.id}}\"><i class=\"fa fa-plus\"></i> Editar College List</button>\n              </mat-card-actions>\n          </div>\n        </div>\n      </mat-card>\n  </div>\n</body>\n</html>\n"

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
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");




var MenteeInformationComponent = /** @class */ (function () {
    function MenteeInformationComponent(route, http) {
        this.route = route;
        this.http = http;
        this.getMentees();
    }
    MenteeInformationComponent.prototype.getAllMentees = function () {
        return this.http.get('http://brasa-pre.herokuapp.com/api/mentees');
    };
    MenteeInformationComponent.prototype.getMentees = function () {
        var _this = this;
        this.getAllMentees().subscribe(function (menteeDecks) {
            _this.menteeDeck = menteeDecks['objects'];
            _this.menteeId = _this.route.snapshot.paramMap.get('id');
        });
    };
    MenteeInformationComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-mentee-information',
            template: __webpack_require__(/*! ./mentee-information.component.html */ "./src/app/mentee/mentee-information/mentee-information.component.html"),
            styles: [__webpack_require__(/*! ./mentee-information.component.css */ "./src/app/mentee/mentee-information/mentee-information.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"]])
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

module.exports = ".mat-card {\n    max-width: 500px;\n    margin: 20px auto;\n}\n    \n#menteeDeck {\n    margin-left: 20px;\n}\n    \n.content {\n    display: flex;\n    flex-wrap: wrap;\n  }\n    \n.child {\n    flex-grow: 1;\n    flex: 1 1 35%;\n    margin: 20px;\n    max-width: 402px;\n  }\n    \nhr{\n    margin-top: 3px;\n    margin-bottom: 3px;\n  }\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbWVudGVlL21lbnRlZS1saXN0aW5nL21lbnRlZS1saXN0aW5nLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxnQkFBZ0I7SUFDaEIsaUJBQWlCO0FBQ3JCOztBQUVBO0lBQ0ksaUJBQWlCO0FBQ3JCOztBQUVBO0lBQ0ksYUFBYTtJQUNiLGVBQWU7RUFDakI7O0FBRUE7SUFDRSxZQUFZO0lBQ1osYUFBYTtJQUNiLFlBQVk7SUFDWixnQkFBZ0I7RUFDbEI7O0FBRUE7SUFDRSxlQUFlO0lBQ2Ysa0JBQWtCO0VBQ3BCIiwiZmlsZSI6InNyYy9hcHAvbWVudGVlL21lbnRlZS1saXN0aW5nL21lbnRlZS1saXN0aW5nLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubWF0LWNhcmQge1xuICAgIG1heC13aWR0aDogNTAwcHg7XG4gICAgbWFyZ2luOiAyMHB4IGF1dG87XG59XG4gICAgXG4jbWVudGVlRGVjayB7XG4gICAgbWFyZ2luLWxlZnQ6IDIwcHg7XG59XG5cbi5jb250ZW50IHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtd3JhcDogd3JhcDtcbiAgfVxuICBcbiAgLmNoaWxkIHtcbiAgICBmbGV4LWdyb3c6IDE7XG4gICAgZmxleDogMSAxIDM1JTtcbiAgICBtYXJnaW46IDIwcHg7XG4gICAgbWF4LXdpZHRoOiA0MDJweDtcbiAgfVxuXG4gIGhye1xuICAgIG1hcmdpbi10b3A6IDNweDtcbiAgICBtYXJnaW4tYm90dG9tOiAzcHg7XG4gIH0iXX0= */"

/***/ }),

/***/ "./src/app/mentee/mentee-listing/mentee-listing.component.html":
/*!*********************************************************************!*\
  !*** ./src/app/mentee/mentee-listing/mentee-listing.component.html ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!DOCTYPE html>\n<html>\n  <head>\n    <title></title>\n    <link rel=\"stylesheet\" href=\"https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css\" integrity=\"sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T\" crossorigin=\"anonymous\">\n  </head>\n  <body>\n  <div class=\"container\">\n    <div *ngFor=\"let userDeck of userDecks\">\n\n      <!-- Logic for when a mentor is logging in. It only sees his mentees -->\n      <div *ngIf=\"userDeck.role_name == 'mentor' && userNickname == userDeck.username\">\n          <!-- <h1>{{ menteeDeck.mentor_id }}</h1> -->\n        <div *ngFor=\"let menteeDeck of menteeDecks\">\n\n            <div *ngIf=\"userDeck.id == menteeDeck.mentor_id\">\n              <mat-card class=\"example-card child\">\n              <mat-card-header>\n                <mat-card-title>{{ menteeDeck.first_name + \" \" + menteeDeck.last_name }}</mat-card-title>\n                <mat-card-subtitle>{{\"Username: \" + \" \" + menteeDeck.username }}</mat-card-subtitle>\n              </mat-card-header>\n\n              <mat-card-content>\n                <div id=\"menteeDeck\">\n                  <span ><strong>Mentor ID: </strong></span>\n                  <span>{{ menteeDeck.mentor_id }}</span>\n                  <hr>\n                  <span ><strong>City: </strong></span>\n                  <span>{{ menteeDeck.city }}</span>\n                  <hr>\n                  <span ><strong>State: </strong></span>\n                  <span>{{ menteeDeck.state }}</span>\n                </div>\n              </mat-card-content>\n              <mat-card-actions>\n                <button type=\"button\" class=\"btn btn-primary btn-block\" routerLink=\"/mentee/listing/{{menteeDeck.id}}\"><i class=\"fa fa-plus\"></i> See Details</button>\n              </mat-card-actions>\n            </mat-card>\n            </div>\n          </div>\n        </div>\n\n        <!-- Logic for when a mentee is logging in. It only sees himself-->\n        <div *ngIf=\"userDeck.role_name == 'mentee' && userNickname == userDeck.username\">\n            <!-- <h1>{{ menteeDeck.mentor_id }}</h1> -->\n          <div *ngFor=\"let menteeDeck of menteeDecks\">\n              <div *ngIf=\"userDeck.id == menteeDeck.id\">\n                <mat-card class=\"example-card child\">\n                  <mat-card-header>\n                    <mat-card-title>{{ menteeDeck.first_name + \" \" + menteeDeck.last_name }}</mat-card-title>\n                    <mat-card-subtitle>{{\"Username: \" + \" \" + menteeDeck.username }}</mat-card-subtitle>\n                  </mat-card-header>\n\n                  <mat-card-content>\n                    <div id=\"menteeDeck\">\n                      <span ><strong>Mentor ID: </strong></span>\n                      <span>{{ menteeDeck.mentor_id }}</span>\n                      <hr>\n                      <span ><strong>City: </strong></span>\n                      <span>{{ menteeDeck.city }}</span>\n                      <hr>\n                      <span ><strong>State: </strong></span>\n                      <span>{{ menteeDeck.state }}</span>\n                    </div>\n                  </mat-card-content>\n                  <mat-card-actions>\n                    <button type=\"button\" class=\"btn btn-primary btn-block\" routerLink=\"/mentee/listing/{{menteeDeck.id}}\"><i class=\"fa fa-plus\"></i> See Details</button>\n                  </mat-card-actions>\n                </mat-card>\n              </div>\n            </div>\n          </div>\n\n\n          <!-- Logic for when a admin is logging in. It can see all the mentes -->\n          <div *ngIf=\"userDeck.role_name == 'admin' && userNickname == userDeck.username\">\n            <div *ngFor=\"let menteeDeck of menteeDecks\">\n                <mat-card class=\"example-card child\">\n                  <mat-card-header>\n                    <mat-card-title>{{ menteeDeck.first_name + \" \" + menteeDeck.last_name }}</mat-card-title>\n                    <mat-card-subtitle>{{\"Username: \" + \" \" + menteeDeck.username }}</mat-card-subtitle>\n                  </mat-card-header>\n\n                  <mat-card-content>\n                    <div id=\"menteeDeck\">\n                      <span ><strong>Mentor ID: </strong></span>\n                      <span>{{ menteeDeck.mentor_id }}</span>\n                      <hr>\n                      <span ><strong>City: </strong></span>\n                      <span>{{ menteeDeck.city }}</span>\n                      <hr>\n                      <span ><strong>State: </strong></span>\n                      <span>{{ menteeDeck.state }}</span>\n                    </div>\n                  </mat-card-content>\n                  <mat-card-actions>\n                    <button type=\"button\" class=\"btn btn-primary btn-block\" routerLink=\"/mentee/listing/{{menteeDeck.id}}\"><i class=\"fa fa-plus\"></i> See Details</button>\n                  </mat-card-actions>\n                </mat-card>\n              </div>\n            </div>\n\n      </div>\n  </div>\n</body>\n</html>\n"

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





var MenteeListingComponent = /** @class */ (function () {
    function MenteeListingComponent(route, http) {
        this.route = route;
        this.http = http;
        this.getMentees();
        this.getUser();
        this.getMenteesFromMentor();
        this.userNickname = auth0_web__WEBPACK_IMPORTED_MODULE_4__["getProfile"]().nickname;
    }
    MenteeListingComponent.prototype.getAllMentees = function () {
        return this.http.get('http://brasa-pre.herokuapp.com/api/mentees');
    };
    MenteeListingComponent.prototype.getAllUsers = function () {
        return this.http.get('http://brasa-pre.herokuapp.com/api/users');
    };
    MenteeListingComponent.prototype.getAllMenteesFromMentor = function () {
        return this.http.get('http://brasa-pre.herokuapp.com/api/mentors');
    };
    MenteeListingComponent.prototype.getMentees = function () {
        var _this = this;
        this.getAllMentees().subscribe(function (menteeDecks) {
            _this.menteeDecks = menteeDecks['objects'];
            //console.log(menteeDecks);
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
            _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"]])
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

module.exports = ".btn-wrapper {\n    text-align: center;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbWVudGVlL21lbnRlZS10ZXN0L21lbnRlZS10ZXN0LmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxrQkFBa0I7QUFDdEIiLCJmaWxlIjoic3JjL2FwcC9tZW50ZWUvbWVudGVlLXRlc3QvbWVudGVlLXRlc3QuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5idG4td3JhcHBlciB7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuIl19 */"

/***/ }),

/***/ "./src/app/mentee/mentee-test/mentee-test.component.html":
/*!***************************************************************!*\
  !*** ./src/app/mentee/mentee-test/mentee-test.component.html ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n<h1>Adicione suas provas!</h1>\n<form [formGroup]=\"todo\" (ngSubmit)=\"logForm()\">\n\n  <!--mat-form-field>\n    <mat-select placeholder=\"Categoria\" [formControl]=\"categoria\" multiple>\n      <mat-option *ngFor=\"let category of categories\" [value]=\"category.category\">{{category.category}}</mat-option>\n    </mat-select>\n  </mat-form-field><br-->\n\n  <div class=\"form-group\">\n  <angular2-multiselect\n                        [data]=\"categories\"\n                        [(ngModel)]=\"category\"\n                        [settings]=\"settingsCategory\"\n                        (onSelect)=\"onCategorySelect($event)\"\n                        (onDeSelect)=\"OnItemDeSelect($event)\"\n                        formControlName=\"categoryName\"\n                        ><c-item>\n            <ng-template let-item=\"item\">\n              {{item.category}}\n            </ng-template>\n    </c-item>\n  </angular2-multiselect>\n</div><br><br>\n\n  <div class=\"form-group\">\n  <angular2-multiselect\n                        [data]=\"subCategories\"\n                        [(ngModel)]=\"subCategory\"\n                        [settings]=\"settingsSubCategory\"\n                        formControlName=\"subCategoryName\"\n                        ><c-item>\n            <ng-template let-item=\"item\">\n              {{item.subcategory}}\n            </ng-template>\n    </c-item>\n  </angular2-multiselect>\n  </div><br><br>\n\n\n  <!--mat-form-field>\n    <mat-select placeholder=\"Subcategoria\" [formControl]=\"subCategory\" multiple>\n      <mat-option *ngFor=\"let subCategoryName of subCategories\" [value]=\"subCategoryName.subcategory\">{{subCategoryName.subcategory}}</mat-option>\n    </mat-select>\n  </mat-form-field><br-->\n\n\n  <label class=\"example-input-wrapper\">\n        <input placeholder=\"Data\"\n               [min]=\"min\" [max]=\"max\"\n               [owlDateTimeTrigger]=\"dt\"\n               [owlDateTime]=\"dt\"\n               (input)=\"dateTime=$event.target.value\"\n               formControlName=\"dateInput\">\n        <owl-date-time [pickerType]=\"'calendar'\" #dt></owl-date-time>\n    </label><br><br><br>\n\n    <div class=\"form-group\">\n      <input type=\"text\" placeholder=\"Nota\" formControlName=\"score\">\n    </div><br><br>\n\n\n\n\n  <!--ion-item>\n  <ion-label>Prova</ion-label>\n    <ionic-selectable\n      #countryComponent\n      item-content\n      [(ngModel)]=\"category\"\n      itemValueField=\"category\"\n      itemTextField=\"category\"\n      [items]=\"categories\"\n      [canSearch]=\"true\"\n      [ngModelOptions]=\"{standalone: true}\"\n      (onChange)=\"getSubcategories($event)\">\n    </ionic-selectable>\n  </ion-item>\n\n\n  <ion-item>\n      <ion-label>Categoria</ion-label>\n      <ionic-selectable\n        item-content\n        [(ngModel)]=\"subCategory\"\n        itemValueField=\"subcategory\"\n        itemTextField=\"subcategory\"\n        [items]=\"subCategories\"\n        [isEnabled]=\"countryComponent.value\"\n        [placeholder]=\"countryComponent.value ? '' : 'Selecione a prova primeiro'\"\n        [ngModelOptions]=\"{standalone: true}\"\n        [canSearch]=\"true\">\n      </ionic-selectable>\n  </ion-item>\n\n  <ion-item>\n    <ion-label>Data</ion-label>\n    <ion-datetime display-format=\"MMM DD, YYYY\" min=\"2000\" [(ngModel)]=\"myDate\" [ngModelOptions]=\"{standalone: true}\"></ion-datetime>\n  </ion-item>\n<ion-item>\n  <ion-label>Nota</ion-label>\n  <ion-input text-right  [(ngModel)]=\"score\" [ngModelOptions]=\"{standalone: true}\"></ion-input>\n</ion-item-->\n\n<button type=\"submit\" class=\"btn btn-success\">Enviar</button>\n</form>\n"

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







var MenteeTestComponent = /** @class */ (function () {
    function MenteeTestComponent(fb, http, getMentee, menteeService, route, datepipe) {
        this.fb = fb;
        this.http = http;
        this.getMentee = getMentee;
        this.menteeService = menteeService;
        this.route = route;
        this.datepipe = datepipe;
        this.dateTime = Date();
        // Min moment: April 12 2000
        this.min = new Date(2000, 3, 12);
        // Max moment: April 25 2025
        this.max = new Date(2025, 3, 25);
        this.API_URL = 'http://brasa-pre.herokuapp.com';
        //private readonly API_URL = 'http://localhost:5000';
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
        console.log(this.category);
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
    MenteeTestComponent.prototype.AddScore = function () {
        this.scoresArray.push({ 'category': '', 'subCategory': '', 'score': '' });
    };
    ;
    MenteeTestComponent.prototype.RemoveScore = function (idx) {
        this.scoresArray.splice(idx, 1);
    };
    ;
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
    MenteeTestComponent.prototype.logForm = function () {
        var _this = this;
        console.log(this.score);
        // this.datepipe.transform(this.dateTime, 'dd-MM-yyyy') -> mudando formato da data
        console.log(this.datepipe.transform(this.dateTime, 'dd-MM-yyyy'), this.score, 'heyhey');
        this.menteeService.getAllExams().subscribe(function (tests) {
            console.log(tests);
            tests.forEach(function (prova) {
                //console.log(prova.category,this.category.category)
                //console.log(prova.subcategory, this.subCategory.subcategory)
                if (prova.category == _this.todo.value.categoryName[0].category && prova.subcategory == _this.todo.value.subCategoryName[0].subcategory) {
                    var provaId = prova.id;
                    /*
                    this.http.post(`${this.API_URL}/exam_schedules/`,
                      {
                        "realization_date": this.datepipe.transform(this.dateTime, 'dd-MM-yyyy'),
                          "mentee_id": this.menteeId,
                          "exam_id": provaId,
                          "score": this.score
                      },
                      {headers: this.headers}).subscribe(data => {
                        console.log(data['_body']);
                       }, error => {
                        console.log(error);
                      });*/
                    _this.getExams();
                    delete _this.todo.value.categoryName[0].category;
                    delete _this.todo.value.subCategoryName[0].subcategory;
                    _this.score = '';
                    console.log(_this.score, 'should be nothing');
                    console.log(_this.todo.value);
                    _this.todo.reset();
                    _this.todo.value.score = '';
                    console.log(_this.todo.value);
                    _this.dateTime = '';
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
            _this.categories = tests;
            _this.subCategories = tests;
            var resultCategory = [];
            var resultSubCategory = [];
            var mapCategory = new Map();
            var mapSubCategory = new Map();
            for (var _i = 0, tests_1 = tests; _i < tests_1.length; _i++) {
                var item = tests_1[_i];
                if (!mapCategory.has(item.category)) {
                    mapCategory.set(item.category, item.category); // set any value to Map
                    resultCategory.push({
                        category: item.category
                    });
                    console.log(mapCategory);
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
            console.log(_this.subCategories, _this.categories);
            console.log(_this.subCategory, _this.category);
            /*
          tests.forEach((element)=>{
            console.log(element)
            console.log(element.category)

            this.categories.push({categoryValue: element.category})
            console.log(this.categories, '11')
          })*/
        });
    };
    MenteeTestComponent.prototype.getSubcategories = function (categorySent) {
        var _this = this;
        console.log(categorySent, '3434');
        this.menteeService.getAllExams().subscribe(function (tests) {
            console.log(tests);
            _this.subCategories = tests;
            var resultSubCategory = [];
            var mapSubCategory = new Map();
            for (var _i = 0, tests_2 = tests; _i < tests_2.length; _i++) {
                var item = tests_2[_i];
                console.log(item.category);
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
            changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectionStrategy"].OnPush,
            styles: [__webpack_require__(/*! ./mentee-test.component.css */ "./src/app/mentee/mentee-test/mentee-test.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormBuilder"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"],
            _shared_mentee_service__WEBPACK_IMPORTED_MODULE_4__["MenteeService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"],
            _angular_common__WEBPACK_IMPORTED_MODULE_6__["DatePipe"]])
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
/* harmony import */ var _exams_exams_api_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../exams/exams-api.service */ "./src/app/exams/exams-api.service.ts");




var MenteeService = /** @class */ (function () {
    function MenteeService(http) {
        this.http = http;
        this.HS_API_URL = 'https://brasa-pre.herokuapp.com';
        //private readonly HS_API_URL = 'http://localhost:5000';
        this.API_KEY = 'WZmY7utpbDmshO1LYNtsweImq68Rp1h8e1Zjsnz63RbxE029tN';
    }
    MenteeService.prototype.getAllmenteeDecks = function () {
        return this.http.get(this.HS_API_URL + "/mentees/");
    };
    // public getCollegeList(id): Observable<any>{
    //   return this.http.get<any>(`${this.HS_API_URL}/mentees/` + id);
    // }
    MenteeService.prototype.getAllExams = function () {
        var httpOptions = _exams_exams_api_service__WEBPACK_IMPORTED_MODULE_3__["ExamsApiService"].buildHttpOptions();
        console.log(httpOptions);
        return this.http.get(this.HS_API_URL + "/exams");
    };
    // public getAllUniversities(): Observable<any>{
    //   return this.http.get<any>(`${this.HS_API_URL}/universities/`);
    // }
    MenteeService.prototype.getMenteeCollegeList = function (id) {
        return this.http.get(this.HS_API_URL + "/mentees/" + id);
    };
    MenteeService.prototype.getCollegeNameById = function (id) {
        return this.http.get(this.HS_API_URL + "/universities/" + id);
    };
    MenteeService.prototype.getAllUniversities = function () {
        return this.http.get(this.HS_API_URL + "/universities/");
    };
    MenteeService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
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

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21lbnRvci9tZW50b3ItZGV0YWlsL21lbnRvci1kZXRhaWwuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/mentor/mentor-detail/mentor-detail.component.html":
/*!*******************************************************************!*\
  !*** ./src/app/mentor/mentor-detail/mentor-detail.component.html ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n    <h1>Atualize suas informações!</h1>\n    <form [formGroup]=\"todo\" (ngSubmit)=\"logForm()\">\n      <div class=\"form-group\">\n        <input placeholder=\"Nome\" type=\"text\" class=\"form-control\" [(ngModel)]=\"mentorDados.first_name\" [ngModelOptions]=\"{standalone: true}\" required>\n      </div>\n      <br>\n\n      <div class=\"form-group\">\n        <input placeholder=\"Sobrenome\" type=\"text\" [(ngModel)]=\"mentorDados.last_name\" [ngModelOptions]=\"{standalone: true}\">\n      </div>\n      <br>\n\n      <div class=\"form-group\">\n        <input placeholder=\"Universidade\" type=\"text\" [(ngModel)]=\"mentorDados.university\" [ngModelOptions]=\"{standalone: true}\">\n      </div>\n      <br><br>\n      <button type=\"submit\" class=\"btn btn-success\">Enviar</button>\n\n    </form>\n"

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







var MentorDetailComponent = /** @class */ (function () {
    function MentorDetailComponent(formBuilder, http, getMentee, mentorService, route, _location) {
        this.formBuilder = formBuilder;
        this.http = http;
        this.getMentee = getMentee;
        this.mentorService = mentorService;
        this.route = route;
        this._location = _location;
        this.API_URL = 'http://brasa-pre.herokuapp.com/api';
        this.mentorProfile = [];
        this.mentorDados = [];
        this.headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({ 'Content-Type': 'application/json',
            'Access-Control-Allow-Origin': '*',
            'Access-Control-Allow-Methods': 'POST, GET, OPTIONS, PUT',
            "Access-Control-Allow-Headers": "Origin, X-Requested-With, Content-Type, Accept"
        });
        this.mentorDados.push({ first_name: '',
            last_name: '',
            university: ''
        });
        this.todo = this.formBuilder.group({});
        this.mentorId = this.route.snapshot.paramMap.get('id');
        this.getInformation();
    }
    MentorDetailComponent.prototype.getInformation = function () {
        var _this = this;
        this.mentorService.getMentorById(this.mentorId).subscribe(function (mentor) {
            _this.mentorDados = {
                first_name: mentor.first_name,
                last_name: mentor.last_name,
                university: mentor.universities
            };
        });
    };
    MentorDetailComponent.prototype.logForm = function () {
        var _this = this;
        console.log(this.mentorDados);
        //console.log(this.http.post(`${this.API_URL}/mentees/` + this.menteeId, this.todo.value, {headers: this.headers}))
        console.log('ˆˆ');
        this.http.put(this.API_URL + "/mentores/" + this.mentorId, {
            "first_name": this.mentorDados.first_name,
            "last_name": this.mentorDados.last_name,
            "university": this.mentorDados.university
        }, { headers: this.headers, observe: "response" }).toPromise().then(function (data) {
            if (data.status == 204) {
                _this._location.back();
                //this.navCtrl.goBack("/tabs/mentee/listing/1");
            }
        }).catch(function (err) { console.log(err); })
            , function (error) {
                console.log(error);
            };
    };
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

module.exports = ".mat-card {\n    max-width: 500px;\n    margin: 40px auto;\n}\n    \n#mentorDeck {\n    margin-left: 20px;\n}\n    \n.content {\n    display: flex;\n    flex-wrap: wrap;\n  }\n    \n.child {\n    flex-grow: 1;\n    flex: 1 1 35%;\n    margin: 20px;\n    max-width: 200px;\n  }\n    \nhr{\n    margin-top: 3px;\n    margin-bottom: 3px;\n  }\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbWVudG9yL21lbnRvci1pbmZvcm1hdGlvbi9tZW50b3ItaW5mb3JtYXRpb24uY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLGdCQUFnQjtJQUNoQixpQkFBaUI7QUFDckI7O0FBRUE7SUFDSSxpQkFBaUI7QUFDckI7O0FBRUE7SUFDSSxhQUFhO0lBQ2IsZUFBZTtFQUNqQjs7QUFFQTtJQUNFLFlBQVk7SUFDWixhQUFhO0lBQ2IsWUFBWTtJQUNaLGdCQUFnQjtFQUNsQjs7QUFFQTtJQUNFLGVBQWU7SUFDZixrQkFBa0I7RUFDcEIiLCJmaWxlIjoic3JjL2FwcC9tZW50b3IvbWVudG9yLWluZm9ybWF0aW9uL21lbnRvci1pbmZvcm1hdGlvbi5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLm1hdC1jYXJkIHtcbiAgICBtYXgtd2lkdGg6IDUwMHB4O1xuICAgIG1hcmdpbjogNDBweCBhdXRvO1xufVxuICAgIFxuI21lbnRvckRlY2sge1xuICAgIG1hcmdpbi1sZWZ0OiAyMHB4O1xufVxuXG4uY29udGVudCB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LXdyYXA6IHdyYXA7XG4gIH1cbiAgXG4gIC5jaGlsZCB7XG4gICAgZmxleC1ncm93OiAxO1xuICAgIGZsZXg6IDEgMSAzNSU7XG4gICAgbWFyZ2luOiAyMHB4O1xuICAgIG1heC13aWR0aDogMjAwcHg7XG4gIH1cblxuICBocntcbiAgICBtYXJnaW4tdG9wOiAzcHg7XG4gICAgbWFyZ2luLWJvdHRvbTogM3B4O1xuICB9Il19 */"

/***/ }),

/***/ "./src/app/mentor/mentor-information/mentor-information.component.html":
/*!*****************************************************************************!*\
  !*** ./src/app/mentor/mentor-information/mentor-information.component.html ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!DOCTYPE html>\n<html>\n  <head>\n    <title></title>\n    <link rel=\"stylesheet\" href=\"https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css\" integrity=\"sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T\" crossorigin=\"anonymous\">\n  </head>\n  <body>\n  <div class=\"container\">\n    <mat-card class=\"example-card\">\n        <div *ngFor=\"let mentorDeck of mentorDeck\">\n    \n    \n          <div *ngIf=\"mentorDeck.id == mentorId\">\n            <mat-card-header>\n              <mat-card-title>{{ mentorDeck.first_name + \" \" + mentorDeck.last_name }}</mat-card-title>\n              <mat-card-subtitle>{{\"Username: \" + \" \" + mentorDeck.username }}</mat-card-subtitle>\n            </mat-card-header>\n    \n            <mat-card-content>\n                <div id=\"mentorDeck\">\n                  <span ><strong>Mentor ID: </strong></span>\n                  <span>{{ mentorDeck.mentor_id }}</span>\n                  <hr>\n                  <span ><strong>City: </strong></span>\n                  <span>{{ mentorDeck.city }}</span>\n                  <hr>\n                  <span ><strong>State: </strong></span>\n                  <span>{{ mentorDeck.state }}</span>\n                </div>\n              </mat-card-content>\n              <mat-card-actions>\n                <button type=\"button\" class=\"btn btn-primary btn-block\" routerLink=\"/mentor/listing/{{mentorDeck.id}}\"><i class=\"fa fa-plus\"></i>  Atualizar informações</button>\n                \n              </mat-card-actions>\n          </div>\n        </div>  \n      </mat-card>\n  </div>\n</body>\n</html>\n\n\n\n"

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




var MentorInformationComponent = /** @class */ (function () {
    function MentorInformationComponent(route, http) {
        this.route = route;
        this.http = http;
        this.getMentees();
    }
    MentorInformationComponent.prototype.getAllMentor = function () {
        return this.http.get('http://brasa-pre.herokuapp.com/api/mentors');
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

module.exports = ".mat-card {\n    max-width: 500px;\n    margin: 20px auto;\n}\n    \n#mentorDeck {\n    margin-left: 20px;\n}\n    \n.content {\n    display: flex;\n    flex-wrap: wrap;\n  }\n    \n.child {\n    flex-grow: 1;\n    flex: 1 1 35%;\n    margin: 20px;\n    max-width: 402px;\n  }\n    \nhr{\n    margin-top: 3px;\n    margin-bottom: 3px;\n  }\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbWVudG9yL21lbnRvci1saXN0aW5nL21lbnRvci1saXN0aW5nLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxnQkFBZ0I7SUFDaEIsaUJBQWlCO0FBQ3JCOztBQUVBO0lBQ0ksaUJBQWlCO0FBQ3JCOztBQUVBO0lBQ0ksYUFBYTtJQUNiLGVBQWU7RUFDakI7O0FBRUE7SUFDRSxZQUFZO0lBQ1osYUFBYTtJQUNiLFlBQVk7SUFDWixnQkFBZ0I7RUFDbEI7O0FBRUE7SUFDRSxlQUFlO0lBQ2Ysa0JBQWtCO0VBQ3BCIiwiZmlsZSI6InNyYy9hcHAvbWVudG9yL21lbnRvci1saXN0aW5nL21lbnRvci1saXN0aW5nLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubWF0LWNhcmQge1xuICAgIG1heC13aWR0aDogNTAwcHg7XG4gICAgbWFyZ2luOiAyMHB4IGF1dG87XG59XG4gICAgXG4jbWVudG9yRGVjayB7XG4gICAgbWFyZ2luLWxlZnQ6IDIwcHg7XG59XG5cbi5jb250ZW50IHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtd3JhcDogd3JhcDtcbiAgfVxuICBcbiAgLmNoaWxkIHtcbiAgICBmbGV4LWdyb3c6IDE7XG4gICAgZmxleDogMSAxIDM1JTtcbiAgICBtYXJnaW46IDIwcHg7XG4gICAgbWF4LXdpZHRoOiA0MDJweDtcbiAgfVxuXG4gIGhye1xuICAgIG1hcmdpbi10b3A6IDNweDtcbiAgICBtYXJnaW4tYm90dG9tOiAzcHg7XG4gIH0iXX0= */"

/***/ }),

/***/ "./src/app/mentor/mentor-listing/mentor-listing.component.html":
/*!*********************************************************************!*\
  !*** ./src/app/mentor/mentor-listing/mentor-listing.component.html ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!DOCTYPE html>\n<html>\n  <head>\n    <title></title>\n    <link rel=\"stylesheet\" href=\"https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css\" integrity=\"sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T\" crossorigin=\"anonymous\">\n  </head>\n  <body>\n  <div class=\"container\">\n    <div *ngFor=\"let userDeck of userDecks\">\n\n      <!-- If it is a mentor, it can see only himself-->\n      <div *ngIf=\"userDeck.role_name == 'mentor' && userNickname == userDeck.username\">\n        <mat-card class=\"example-card\">\n            <div *ngFor=\"let mentorDeck of mentorDecks\">\n              <div *ngIf=\"userNickname == mentorDeck.username\">\n                <mat-card-header>\n                  <mat-card-title>{{ mentorDeck.first_name + \" \" + mentorDeck.last_name }}</mat-card-title>\n                  <mat-card-subtitle>{{\"Username: \" + \" \" + mentorDeck.username }}</mat-card-subtitle>\n                </mat-card-header>\n\n                <mat-card-content>\n                    <div id=\"mentorDeck\">\n                      <span ><strong>Mentor ID: </strong></span>\n                      <span>{{ mentorDeck.mentor_id }}</span>\n                      <hr>\n                      <span ><strong>City: </strong></span>\n                      <span>{{ mentorDeck.city }}</span>\n                      <hr>\n                      <span ><strong>State: </strong></span>\n                      <span>{{ mentorDeck.state }}</span>\n                    </div>\n                  </mat-card-content>\n                  <mat-card-actions>\n                    <button type=\"button\" class=\"btn btn-primary btn-block\" routerLink=\"/mentor/listing/{{mentorDeck.id}}\"><i class=\"fa fa-plus\"></i>  Atualizar informações</button>\n\n                  </mat-card-actions>\n              </div>\n            </div>\n          </mat-card>\n        </div>\n\n        <!-- If it is a mentee, it can see only its mentor-->\n      <div *ngIf=\"userDeck.role_name == 'mentee' && userNickname == userDeck.username\">\n          <mat-card class=\"example-card\">\n              <div *ngFor=\"let menteeDeck of menteeDecks\">\n                <div *ngIf=\"userDeck.id == menteeDeck.id\">\n                  <div *ngFor=\"let mentorDeck of mentorDecks\">\n                    <div *ngIf=\"mentorDeck.id == menteeDeck.mentor_id\">\n                      <mat-card-header>\n                        <mat-card-title>{{ mentorDeck.first_name + \" \" + mentorDeck.last_name }}</mat-card-title>\n                        <mat-card-subtitle>{{\"Username: \" + \" \" + mentorDeck.username }}</mat-card-subtitle>\n                      </mat-card-header>\n\n                      <mat-card-content>\n                          <div id=\"mentorDeck\">\n                            <span ><strong>Mentor ID: </strong></span>\n                            <span>{{ mentorDeck.mentor_id }}</span>\n                            <hr>\n                            <span ><strong>City: </strong></span>\n                            <span>{{ mentorDeck.city }}</span>\n                            <hr>\n                            <span ><strong>State: </strong></span>\n                            <span>{{ mentorDeck.state }}</span>\n                          </div>\n                        </mat-card-content>\n                        <mat-card-actions>\n                          <button type=\"button\" class=\"btn btn-primary btn-block\" routerLink=\"/mentor/listing/{{mentorDeck.id}}\"><i class=\"fa fa-plus\"></i>  Atualizar informações</button>\n\n                        </mat-card-actions>\n                    </div>\n                  </div>\n                </div>\n              </div>\n            </mat-card>\n          </div>\n\n          <!-- If it is a admin, can see all mentors-->\n          <div *ngIf=\"userDeck.role_name == 'admin' && userNickname == userDeck.username\">\n              <mat-card class=\"example-card\">\n                  <div *ngFor=\"let mentorDeck of mentorDecks\">\n\n                      <mat-card-header>\n                        <mat-card-title>{{ mentorDeck.first_name + \" \" + mentorDeck.last_name }}</mat-card-title>\n                        <mat-card-subtitle>{{\"Username: \" + \" \" + mentorDeck.username }}</mat-card-subtitle>\n                      </mat-card-header>\n\n                      <mat-card-content>\n                          <div id=\"mentorDeck\">\n                            <span ><strong>Mentor ID: </strong></span>\n                            <span>{{ mentorDeck.mentor_id }}</span>\n                            <hr>\n                            <span ><strong>City: </strong></span>\n                            <span>{{ mentorDeck.city }}</span>\n                            <hr>\n                            <span ><strong>State: </strong></span>\n                            <span>{{ mentorDeck.state }}</span>\n                          </div>\n                        </mat-card-content>\n                        <mat-card-actions>\n                          <button type=\"button\" class=\"btn btn-primary btn-block\" routerLink=\"/mentor/listing/{{mentorDeck.id}}\"><i class=\"fa fa-plus\"></i>  Atualizar informações</button>\n\n                        </mat-card-actions>\n\n                  </div>\n                </mat-card>\n              </div>\n\n\n\n      </div>\n  </div>\n</body>\n</html>\n"

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
        return this.http.get('http://brasa-pre.herokuapp.com/api/mentores');
    };
    MentorListingComponent.prototype.getAllUsers = function () {
        return this.http.get('http://brasa-pre.herokuapp.com/api/users');
    };
    MentorListingComponent.prototype.getAllMentees = function () {
        return this.http.get('http://brasa-pre.herokuapp.com/api/mentees');
    };
    MentorListingComponent.prototype.getMentors = function () {
        var _this = this;
        this.getAllMentors().subscribe(function (mentorDecks) {
            _this.mentorDecks = mentorDecks['objects'];
            //console.log(mentorDecks);
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



var MentorService = /** @class */ (function () {
    function MentorService(http) {
        this.http = http;
        this.HS_API_URL = 'https://brasa-pre.herokuapp.com/api';
        //private readonly HS_API_URL = 'http://localhost:5000';
        this.API_KEY = 'WZmY7utpbDmshO1LYNtsweImq68Rp1h8e1Zjsnz63RbxE029tN';
    }
    MentorService.prototype.getAllmentorDecks = function () {
        return this.http.get(this.HS_API_URL + "/mentores");
    };
    MentorService.prototype.getMentorById = function (id) {
        return this.http.get(this.HS_API_URL + "/mentores/" + id);
    };
    MentorService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], MentorService);
    return MentorService;
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

module.exports = __webpack_require__(/*! /home/ubuntu/brasa-pre-frontend/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map
