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

/***/ "./src/app/app.component.css":
/***/ (function(module, exports) {

module.exports = "h1 {\n  color:darkslateblue;\n  font-size: 70px;\n  font-family:fantasy;\n}\n\np {\n  font-size: 20px;\n  font-style: oblique;\n  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;\n}\n\nh3{\n  float: left;\n  margin-right: 80%;\n  font-size: 20px;\n  text-align: left;\n  width: 100%;\n  font-style: italic;\n  font-family: monospace;\n\n}\n\nh4{\n  font-size: 20px;\n  font-style: italic;\n  font-weight: bold   ;\n  font-family: Verdana, Geneva, Tahoma, sans-serif;\n  border-top: 1px solid;\n  margin-top: 10px;\n  line-height: 100px;\n}"

/***/ }),

/***/ "./src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<div style=\"text-align:center\">\n  <h3>Developed by Albert Amwata</h3>\n  <h1>\n\n    Welcome To Quotes App.\n  </h1>\n  <p>\n     This site will enable you to create quotes and have them upvoted or downvoted.\n  </p>\n  <app-quote-form></app-quote-form>\n  <br>\n  <app-quote-details></app-quote-details>\n  <br>\n  <h4>Quotes App. All Rights Reserved</h4>\n\n</div>"

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
    }
    AppComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_component__ = __webpack_require__("./src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__quote_form_quote_form_component__ = __webpack_require__("./src/app/quote-form/quote-form.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__quote_details_quote_details_component__ = __webpack_require__("./src/app/quote-details/quote-details.component.ts");
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
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["E" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* AppComponent */],
                __WEBPACK_IMPORTED_MODULE_4__quote_form_quote_form_component__["a" /* QuoteFormComponent */],
                __WEBPACK_IMPORTED_MODULE_5__quote_details_quote_details_component__["a" /* QuoteDetailsComponent */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormsModule */]
            ],
            providers: [],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* AppComponent */]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/quote-details/quote-details.component.css":
/***/ (function(module, exports) {

module.exports = ".container-fluid {\n  text-align: center;\n  font-size: 20px;\n}\n\nbutton {\n  background-color: black;\n  color: white;\n  font-size: 15px;\n  border: 1px solid black;\n}"

/***/ }),

/***/ "./src/app/quote-details/quote-details.component.html":
/***/ (function(module, exports) {

module.exports = "<!-- <button (click)=\"votesup()\">UpVote</button>\n\n<button (click)=\"votesdown()\">DownVote</button> -->"

/***/ }),

/***/ "./src/app/quote-details/quote-details.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return QuoteDetailsComponent; });
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

var QuoteDetailsComponent = /** @class */ (function () {
    function QuoteDetailsComponent() {
    }
    QuoteDetailsComponent.prototype.ngOnInit = function () {
        this.votesup = 0;
        this.votesdown = 0;
        function votesup() {
            this.votesup++;
        }
        function votesdown() {
            this.votesdown--;
        }
    };
    QuoteDetailsComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'app-quote-details',
            template: __webpack_require__("./src/app/quote-details/quote-details.component.html"),
            styles: [__webpack_require__("./src/app/quote-details/quote-details.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], QuoteDetailsComponent);
    return QuoteDetailsComponent;
}());



/***/ }),

/***/ "./src/app/quote-form/quote-form.component.css":
/***/ (function(module, exports) {

module.exports = ".container-fluid {\n  font-size: 20px;\n}\n\nbutton {\n  background-color: black;\n  color: white;\n  font-size: 15px;\n  border: 1px solid black;\n}\n\nul li{\n  list-style: none;\n  margin-top: 10px;\n  }"

/***/ }),

/***/ "./src/app/quote-form/quote-form.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container-fluid\">\n\n  <form (submit)=\"onSubmit(quotes.values)\">\n    <div>\n      <!-- <label for=\"name\">Write Quote Here!:</label> -->\n      <br>\n      <textarea rows=\"15\" cols=\"50\" type=\"text\"  name=\"quotes\" [(ngModel)]=\"quotes\" placeholder=\"Write Quote Here\"></textarea>\n    </div>\n\n    <div class=\"form-group\">\n\n      <label for=\"author\">Author :</label>\n      <input type=\"text\" [(ngModel)]=\"author\" name=\"author\">\n    </div>\n    <br>\n    <div class=\"form-group\">\n\n      <label for=\"name\">Name :</label>\n      <input type=\"text\" [(ngModel)]=\"name\" name=\"name\">\n    </div>\n    <!-- <label type=\"text\" name=\"votesup\" [(ngModel)]=\"votesup\" value=\"0\"></label> -->\n\n  </form>\n\n\n  <p>QUOTE:{{quotes}}</p>\n  <p>AUTHOR:{{author}}</p>\n  <p>NAME:{{name}}</p>\n  <button (click)=\"onClick(quotes)\" type=\"submit\">Submit Quote</button>\n  <ul>\n    <li *ngFor=\"let quote of quotes; let i = index\">{{i+1}}: {{quotes}}\n      <app-quote-details></app-quote-details>\n      <button (click)=\"deleteQuote(quote)\" type=\"submit\">Delete Quote</button>\n\n      <button  (click)=\"votesup()\">UpVote: {{votesup}}</button>\n      <button  (click)=\"voteDown()\">DownVote: {{votesdown}}</button>\n    </li>\n\n\n  </ul>"

/***/ }),

/***/ "./src/app/quote-form/quote-form.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return QuoteFormComponent; });
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

var QuoteFormComponent = /** @class */ (function () {
    function QuoteFormComponent() {
    }
    QuoteFormComponent.prototype.ngOnInit = function () {
        this.author = '';
        this.name = '';
        this.quotes = ['Angular', 'Flask', 'Django'];
    };
    QuoteFormComponent.prototype.onClick = function (quote) {
        // return true
        for (var j = 0; j < this.quotes.length; j++) {
            this.quotes[j] == quote;
            "Quote" + this.quotes.push(quote);
            return false;
        }
    };
    QuoteFormComponent.prototype.onSubmit = function (quote) {
        // return false;
        this.quotes.push(this.quotes[0]);
        // this.quotes.unshift(quote)
    };
    QuoteFormComponent.prototype.deleteQuote = function (quote) {
        for (var i = 0; i < this.quotes.length; i++) {
            if (this.quotes[i] == quote) {
                this.quotes.splice(i, 1);
            }
        }
    };
    QuoteFormComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'app-quote-form',
            template: __webpack_require__("./src/app/quote-form/quote-form.component.html"),
            styles: [__webpack_require__("./src/app/quote-form/quote-form.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], QuoteFormComponent);
    return QuoteFormComponent;
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
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_7" /* enableProdMode */])();
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