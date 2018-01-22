webpackJsonp(["components.module"],{

/***/ "../../../../../src/app/components/buttons/buttons.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"main-content\">\n    <div class=\"container-fluid\">\n        <div class=\"card\">\n            <div class=\"row\">\n                <div class=\"col-md-6\">\n                    <div class=\"card-header\">\n                        <h4 class=\"card-title\">Pick your Color</h4>\n                    </div>\n                    <div class=\"card-content\">\n                        <button class=\"btn\">Default</button>\n                        <button class=\"btn btn-primary\">Primary</button>\n                        <button class=\"btn btn-info\">Info</button>\n                        <button class=\"btn btn-success\">Success</button>\n                        <button class=\"btn btn-warning\">Warning</button>\n                        <button class=\"btn btn-danger\">Danger</button>\n                        <button class=\"btn btn-rose\">Rose</button>\n                    </div>\n                </div>\n                <div class=\"col-md-6\">\n                    <div class=\"card-header\">\n                        <h4 class=\"card-title\">Buttons with Label</h4>\n                    </div>\n                    <div class=\"card-content\">\n                        <button class=\"btn\">\n                            <span class=\"btn-label\">\n                                <i class=\"material-icons\">keyboard_arrow_left</i>\n                            </span>\n                            Left\n                        </button>\n                        <button class=\"btn\">\n                            Right\n                            <span class=\"btn-label btn-label-right\">\n                                <i class=\"material-icons\">keyboard_arrow_right</i>\n                            </span>\n                        </button>\n                        <button class=\"btn btn-info\">\n                            <span class=\"btn-label\">\n                                <i class=\"material-icons\">priority_high</i>\n                            </span>\n                            Info\n                        </button>\n                        <button class=\"btn btn-success\">\n                            <span class=\"btn-label\">\n                                <i class=\"material-icons\">check</i>\n                            </span>\n                            Success\n                        </button>\n                        <button class=\"btn btn-warning\">\n                            <i class=\"material-icons\">warning</i> Warning\n                        </button>\n                        <button class=\"btn btn-danger\">\n                            <i class=\"material-icons\">close</i> Danger\n                        </button>\n                    </div>\n                </div>\n            </div>\n            <div class=\"row\">\n                <div class=\"col-md-6\">\n                    <div class=\"card-header\">\n                        <h4 class=\"card-title\">Pick your Size</h4>\n                    </div>\n                    <div class=\"card-content\">\n                        <button class=\"btn btn-primary btn-xs\">x-Small</button>\n                        <button class=\"btn btn-primary btn-sm\">Small</button>\n                        <button class=\"btn btn-primary\">Regular</button>\n                        <button class=\"btn btn-primary btn-lg\">Large</button>\n                    </div>\n                </div>\n                <div class=\"col-md-6\">\n                    <div class=\"card-header\">\n                        <h4 class=\"card-title\">Pick your Style</h4>\n                    </div>\n                    <div class=\"card-content\">\n                        <button class=\"btn btn-primary\">Default</button>\n                        <button class=\"btn btn-primary btn-round\">round</button>\n                        <button class=\"btn btn-primary btn-round\">\n                            <i class=\"material-icons\">favorite</i> with icon\n                        </button>\n                        <button class=\"btn btn-primary btn-round btn-fab btn-fab-mini\">\n                            <i class=\"material-icons\">favorite</i>\n                        </button>\n                        <button class=\"btn btn-primary btn-simple\">\n                            simple\n                        </button>\n                    </div>\n                </div>\n            </div>\n            <div class=\"row\">\n                <div class=\"col-md-6\">\n                    <div class=\"card-header\">\n                        <h4 class=\"card-title\">Pagination</h4>\n                    </div>\n                    <div class=\"card-content\">\n                        <ul class=\"pagination pagination-primary\">\n                            <!--\n        color-classes: \"pagination-primary\", \"pagination-info\", \"pagination-success\", \"pagination-warning\", \"pagination-danger\"\n    -->\n                            <li>\n                                <a href=\"javascript:void(0);\">1</a>\n                            </li>\n                            <li>\n                                <a href=\"javascript:void(0);\">...</a>\n                            </li>\n                            <li>\n                                <a href=\"javascript:void(0);\">5</a>\n                            </li>\n                            <li>\n                                <a href=\"javascript:void(0);\">6</a>\n                            </li>\n                            <li class=\"active\">\n                                <a href=\"javascript:void(0);\">7</a>\n                            </li>\n                            <li>\n                                <a href=\"javascript:void(0);\">8</a>\n                            </li>\n                            <li>\n                                <a href=\"javascript:void(0);\">9</a>\n                            </li>\n                            <li>\n                                <a href=\"javascript:void(0);\">...</a>\n                            </li>\n                            <li>\n                                <a href=\"javascript:void(0);\">12</a>\n                            </li>\n                        </ul>\n                        <ul class=\"pagination pagination-info\">\n                            <li>\n                                <a href=\"javascript:void(0);\"> prev</a>\n                            </li>\n                            <li>\n                                <a href=\"javascript:void(0);\">1</a>\n                            </li>\n                            <li>\n                                <a href=\"javascript:void(0);\">2</a>\n                            </li>\n                            <li class=\"active\">\n                                <a href=\"javascript:void(0);\">3</a>\n                            </li>\n                            <li>\n                                <a href=\"javascript:void(0);\">4</a>\n                            </li>\n                            <li>\n                                <a href=\"javascript:void(0);\">5</a>\n                            </li>\n                            <li>\n                                <a href=\"javascript:void(0);\">next </a>\n                            </li>\n                        </ul>\n                    </div>\n                </div>\n                <div class=\"col-md-6\">\n                    <div class=\"card-header\">\n                        <h4 class=\"card-title\">Button Group</h4>\n                    </div>\n                    <div class=\"card-content\">\n                        <div class=\"btn-group\">\n                            <button type=\"button\" class=\"btn btn-info\">Left</button>\n                            <button type=\"button\" class=\"btn btn-info\">Middle</button>\n                            <button type=\"button\" class=\"btn btn-info\">Right</button>\n                        </div>\n                        <br>\n                        <br>\n                        <div class=\"btn-group\">\n                            <button type=\"button\" class=\"btn btn-round btn-info\">1</button>\n                            <button type=\"button\" class=\"btn btn-round btn-info\">2</button>\n                            <button type=\"button\" class=\"btn btn-round btn-info\">3</button>\n                            <button type=\"button\" class=\"btn btn-round btn-info\">4</button>\n                        </div>\n                        <div class=\"btn-group\">\n                            <button type=\"button\" class=\"btn btn-round btn-info\">5</button>\n                            <button type=\"button\" class=\"btn btn-round btn-info\">6</button>\n                            <button type=\"button\" class=\"btn btn-round btn-info\">7</button>\n                        </div>\n                    </div>\n                </div>\n            </div>\n            <div class=\"row\">\n                <div class=\"col-sm-12\">\n                    <div class=\"card-header\">\n                        <h4 class=\"card-title\">Social buttons</h4>\n                    </div>\n                    <div class=\"card-content\">\n                        <div class=\"row\">\n                            <div class=\"col-md-4 col-sm-4\">\n                                <button class=\"btn btn-social btn-fill btn-twitter\">\n                                    <i class=\"fa fa-twitter\"></i> Connect with Twitter\n                                </button>\n                            </div>\n                            <div class=\"col-md-1 col-sm-1\">\n                                <button class=\"btn btn-just-icon btn-twitter\">\n                                    <i class=\"fa fa-twitter\"></i>\n                                </button>\n                            </div>\n                            <div class=\"col-md-1 col-sm-1\">\n                                <button class=\"btn btn-just-icon btn-round btn-twitter\">\n                                    <i class=\"fa fa-twitter\"></i>\n                                </button>\n                            </div>\n                            <div class=\"col-md-1 col-sm-1\">\n                                <button class=\"btn btn-just-icon btn-simple btn-twitter\">\n                                    <i class=\"fa fa-twitter\"></i>\n                                </button>\n                            </div>\n                            <div class=\"col-md-3 col-sm-4\">\n                                <button class=\"btn btn-simple btn-twitter\">\n                                    <i class=\"fa fa-twitter\"></i> Connect with Twitter\n                                </button>\n                            </div>\n                        </div>\n                        <div class=\"row\">\n                            <div class=\"col-md-4 col-sm-4\">\n                                <button class=\"btn btn-social btn-fill btn-facebook\">\n                                    <i class=\"fa fa-facebook-square\"></i> Share &middot; 2.2k\n                                </button>\n                            </div>\n                            <div class=\"col-md-1 col-sm-1\">\n                                <button class=\"btn btn-just-icon btn-facebook\">\n                                    <i class=\"fa fa-facebook\"> </i>\n                                </button>\n                            </div>\n                            <div class=\"col-md-1 col-sm-1\">\n                                <button class=\"btn btn-just-icon btn-round btn-facebook\">\n                                    <i class=\"fa fa-facebook\"> </i>\n                                </button>\n                            </div>\n                            <div class=\"col-md-1 col-sm-1\">\n                                <button class=\"btn btn-just-icon btn-simple btn-facebook\">\n                                    <i class=\"fa fa-facebook-square\"> </i>\n                                </button>\n                            </div>\n                            <div class=\"col-md-3 col-sm-4\">\n                                <button class=\"btn btn-simple btn-facebook\">\n                                    <i class=\"fa fa-facebook-square\"></i> Share &middot; 2.2k\n                                </button>\n                            </div>\n                        </div>\n                        <div class=\"row\">\n                            <div class=\"col-md-4 col-sm-4\">\n                                <button class=\"btn btn-social btn-fill btn-google\">\n                                    <i class=\"fa fa-google-square\"></i> Share on Google+\n                                </button>\n                            </div>\n                            <div class=\"col-md-1 col-sm-1\">\n                                <button class=\"btn btn-just-icon  btn-google\">\n                                    <i class=\"fa fa-google\"> </i>\n                                </button>\n                            </div>\n                            <div class=\"col-md-1 col-sm-1\">\n                                <button class=\"btn btn-just-icon btn-round btn-google\">\n                                    <i class=\"fa fa-google\"> </i>\n                                </button>\n                            </div>\n                            <div class=\"col-md-1 col-sm-1\">\n                                <button class=\"btn btn-just-icon btn-simple btn-google\">\n                                    <i class=\"fa fa-google\"> </i>\n                                </button>\n                            </div>\n                            <div class=\"col-md-3 col-sm-4\">\n                                <button class=\"btn btn-simple btn-google\">\n                                    <i class=\"fa fa-google-square\"></i> Share on Google+\n                                </button>\n                            </div>\n                        </div>\n                        <div class=\"row\">\n                            <div class=\"col-md-4 col-sm-4\">\n                                <button class=\"btn btn-social btn-fill btn-linkedin\">\n                                    <i class=\"fa fa-linkedin-square\"></i> Connect with Linkedin\n                                </button>\n                            </div>\n                            <div class=\"col-md-1 col-sm-1\">\n                                <button class=\"btn btn-just-icon  btn-linkedin\">\n                                    <i class=\"fa fa-linkedin\"></i>\n                                </button>\n                            </div>\n                            <div class=\"col-md-1 col-sm-1\">\n                                <button class=\"btn btn-just-icon btn-round btn-linkedin\">\n                                    <i class=\"fa fa-linkedin\"></i>\n                                </button>\n                            </div>\n                            <div class=\"col-md-1 col-sm-1\">\n                                <button class=\"btn btn-just-icon btn-simple btn-linkedin\">\n                                    <i class=\"fa fa-linkedin-square\"></i>\n                                </button>\n                            </div>\n                            <div class=\"col-md-3 col-sm-4\">\n                                <button class=\"btn btn-simple btn-linkedin\">\n                                    <i class=\"fa fa-linkedin-square\"></i> Connect with Linkedin\n                                </button>\n                            </div>\n                        </div>\n                        <div class=\"row\">\n                            <div class=\"col-md-4 col-sm-4\">\n                                <button class=\"btn btn-social btn-fill btn-pinterest\">\n                                    <i class=\"fa fa-pinterest\"></i> Pint it &middot; 212\n                                </button>\n                            </div>\n                            <div class=\"col-md-1 col-sm-1\">\n                                <button class=\"btn btn-just-icon  btn-pinterest\">\n                                    <i class=\"fa fa-pinterest\"></i>\n                                </button>\n                            </div>\n                            <div class=\"col-md-1 col-sm-1\">\n                                <button class=\"btn btn-just-icon btn-round btn-pinterest\">\n                                    <i class=\"fa fa-pinterest\"></i>\n                                </button>\n                            </div>\n                            <div class=\"col-md-1 col-sm-1\">\n                                <button class=\"btn btn-just-icon btn-simple btn-pinterest\">\n                                    <i class=\"fa fa-pinterest\"></i>\n                                </button>\n                            </div>\n                            <div class=\"col-md-3 col-sm-4\">\n                                <button class=\"btn btn-simple btn-pinterest\">\n                                    <i class=\"fa fa-pinterest\"></i> Pint it &middot; 212\n                                </button>\n                            </div>\n                        </div>\n                        <div class=\"row\">\n                            <div class=\"col-md-4 col-sm-4\">\n                                <button class=\"btn btn-social btn-fill btn-youtube\">\n                                    <i class=\"fa fa-youtube-play\"></i> View on Youtube\n                                </button>\n                            </div>\n                            <div class=\"col-md-1 col-sm-1\">\n                                <button class=\"btn btn-just-icon  btn-youtube\">\n                                    <i class=\"fa fa-youtube\"> </i>\n                                </button>\n                            </div>\n                            <div class=\"col-md-1 col-sm-1\">\n                                <button class=\"btn btn-just-icon btn-round btn-youtube\">\n                                    <i class=\"fa fa-youtube\"> </i>\n                                </button>\n                            </div>\n                            <div class=\"col-md-1 col-sm-1\">\n                                <button class=\"btn btn-just-icon btn-simple btn-youtube\">\n                                    <i class=\"fa fa-youtube\"> </i>\n                                </button>\n                            </div>\n                            <div class=\"col-md-3 col-sm-4\">\n                                <button class=\"btn btn-simple btn-youtube\">\n                                    <i class=\"fa fa-youtube-play\"></i> View on Youtube\n                                </button>\n                            </div>\n                        </div>\n                        <div class=\"row\">\n                            <div class=\"col-md-4 col-sm-4\">\n                                <button class=\"btn btn-social btn-fill btn-tumblr\">\n                                    <i class=\"fa fa-tumblr-square\"></i> Repost\n                                </button>\n                            </div>\n                            <div class=\"col-md-1 col-sm-1\">\n                                <button class=\"btn btn-just-icon  btn-tumblr\">\n                                    <i class=\"fa fa-tumblr\"> </i>\n                                </button>\n                            </div>\n                            <div class=\"col-md-1 col-sm-1\">\n                                <button class=\"btn btn-just-icon btn-round btn-tumblr\">\n                                    <i class=\"fa fa-tumblr\"> </i>\n                                </button>\n                            </div>\n                            <div class=\"col-md-1 col-sm-1\">\n                                <button class=\"btn btn-just-icon btn-simple btn-tumblr\">\n                                    <i class=\"fa fa-tumblr-square\"> </i>\n                                </button>\n                            </div>\n                            <div class=\"col-md-3 col-sm-4\">\n                                <button class=\"btn btn-simple btn-tumblr\">\n                                    <i class=\"fa fa-tumblr-square\"></i> Repost\n                                </button>\n                            </div>\n                        </div>\n                        <div class=\"row\">\n                            <div class=\"col-md-4 col-sm-4\">\n                                <button class=\"btn btn-social btn-fill btn-github\">\n                                    <i class=\"fa fa-github\"></i> Connect with Github\n                                </button>\n                            </div>\n                            <div class=\"col-md-1 col-sm-1\">\n                                <button class=\"btn btn-just-icon  btn-github\">\n                                    <i class=\"fa fa-github\"></i>\n                                </button>\n                            </div>\n                            <div class=\"col-md-1 col-sm-1\">\n                                <button class=\"btn btn-just-icon btn-round btn-github\">\n                                    <i class=\"fa fa-github\"></i>\n                                </button>\n                            </div>\n                            <div class=\"col-md-1 col-sm-1\">\n                                <button class=\"btn btn-just-icon btn-simple btn-github\">\n                                    <i class=\"fa fa-github\"></i>\n                                </button>\n                            </div>\n                            <div class=\"col-md-3 col-sm-4\">\n                                <button class=\"btn btn-simple btn-github\">\n                                    <i class=\"fa fa-github\"></i> Connect with Github\n                                </button>\n                            </div>\n                        </div>\n                        <div class=\"row\">\n                            <div class=\"col-md-4 col-sm-4\">\n                                <button class=\"btn btn-social btn-fill btn-behance\">\n                                    <i class=\"fa fa-behance-square\"></i> Follow us\n                                </button>\n                            </div>\n                            <div class=\"col-md-1 col-sm-1\">\n                                <button class=\"btn btn-just-icon  btn-behance\">\n                                    <i class=\"fa fa-behance\"></i>\n                                </button>\n                            </div>\n                            <div class=\"col-md-1 col-sm-1\">\n                                <button class=\"btn btn-just-icon btn-round btn-behance\">\n                                    <i class=\"fa fa-behance\"></i>\n                                </button>\n                            </div>\n                            <div class=\"col-md-1 col-sm-1\">\n                                <button class=\"btn btn-just-icon btn-simple btn-behance\">\n                                    <i class=\"fa fa-behance\"></i>\n                                </button>\n                            </div>\n                            <div class=\"col-md-3 col-sm-4\">\n                                <button class=\"btn btn-simple btn-behance\">\n                                    <i class=\"fa fa-behance-square\"></i> Follow us\n                                </button>\n                            </div>\n                        </div>\n                        <div class=\"row\">\n                            <div class=\"col-md-4 col-sm-4\">\n                                <button class=\"btn btn-social btn-fill btn-dribbble\">\n                                    <i class=\"fa fa-dribbble\"></i> Find us on Dribble\n                                </button>\n                            </div>\n                            <div class=\"col-md-1 col-sm-1\">\n                                <button class=\"btn btn-just-icon  btn-dribbble\">\n                                    <i class=\"fa fa-dribbble\"></i>\n                                </button>\n                            </div>\n                            <div class=\"col-md-1 col-sm-1\">\n                                <button class=\"btn btn-just-icon btn-round btn-dribbble\">\n                                    <i class=\"fa fa-dribbble\"></i>\n                                </button>\n                            </div>\n                            <div class=\"col-md-1 col-sm-1\">\n                                <button class=\"btn btn-just-icon btn-simple btn-dribbble\">\n                                    <i class=\"fa fa-dribbble\"></i>\n                                </button>\n                            </div>\n                            <div class=\"col-md-3 col-sm-4\">\n                                <button class=\"btn btn-simple btn-dribbble\">\n                                    <i class=\"fa fa-dribbble\"></i> Find us on Dribble\n                                </button>\n                            </div>\n                        </div>\n                        <div class=\"row\">\n                            <div class=\"col-md-4 col-sm-4\">\n                                <button class=\"btn btn-social btn-fill btn-reddit\">\n                                    <i class=\"fa fa-reddit\"></i> Repost &middot; 232\n                                </button>\n                            </div>\n                            <div class=\"col-md-1 col-sm-1\">\n                                <button class=\"btn btn-just-icon  btn-reddit\">\n                                    <i class=\"fa fa-reddit\"></i>\n                                </button>\n                            </div>\n                            <div class=\"col-md-1 col-sm-1\">\n                                <button class=\"btn btn-just-icon btn-round btn-reddit\">\n                                    <i class=\"fa fa-reddit\"></i>\n                                </button>\n                            </div>\n                            <div class=\"col-md-1 col-sm-1\">\n                                <button class=\"btn btn-just-icon btn-simple btn-reddit\">\n                                    <i class=\"fa fa-reddit\"></i>\n                                </button>\n                            </div>\n                            <div class=\"col-md-3 col-sm-4\">\n                                <button class=\"btn btn-simple btn-reddit\">\n                                    <i class=\"fa fa-reddit\"></i> Repost &middot; 232\n                                </button>\n                            </div>\n                        </div>\n                    </div>\n                </div>\n            </div>\n        </div>\n    </div>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/components/buttons/buttons.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ButtonsComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var ButtonsComponent = /** @class */ (function () {
    function ButtonsComponent() {
    }
    ButtonsComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-buttons',
            template: __webpack_require__("../../../../../src/app/components/buttons/buttons.component.html")
        })
    ], ButtonsComponent);
    return ButtonsComponent;
}());



/***/ }),

/***/ "../../../../../src/app/components/components.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ComponentsModule", function() { return ComponentsModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common__ = __webpack_require__("../../../common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__buttons_buttons_component__ = __webpack_require__("../../../../../src/app/components/buttons/buttons.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__components_routing__ = __webpack_require__("../../../../../src/app/components/components.routing.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__grid_grid_component__ = __webpack_require__("../../../../../src/app/components/grid/grid.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__icons_icons_component__ = __webpack_require__("../../../../../src/app/components/icons/icons.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__notifications_notifications_component__ = __webpack_require__("../../../../../src/app/components/notifications/notifications.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__panels_panels_component__ = __webpack_require__("../../../../../src/app/components/panels/panels.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__sweetalert_sweetalert_component__ = __webpack_require__("../../../../../src/app/components/sweetalert/sweetalert.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__typography_typography_component__ = __webpack_require__("../../../../../src/app/components/typography/typography.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};












var ComponentsModule = /** @class */ (function () {
    function ComponentsModule() {
    }
    ComponentsModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_2__angular_common__["b" /* CommonModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_router__["d" /* RouterModule */].forChild(__WEBPACK_IMPORTED_MODULE_5__components_routing__["a" /* ComponentsRoutes */]),
                __WEBPACK_IMPORTED_MODULE_3__angular_forms__["FormsModule"]
            ],
            declarations: [
                __WEBPACK_IMPORTED_MODULE_4__buttons_buttons_component__["a" /* ButtonsComponent */],
                __WEBPACK_IMPORTED_MODULE_6__grid_grid_component__["a" /* GridSystemComponent */],
                __WEBPACK_IMPORTED_MODULE_7__icons_icons_component__["a" /* IconsComponent */],
                __WEBPACK_IMPORTED_MODULE_8__notifications_notifications_component__["a" /* NotificationsComponent */],
                __WEBPACK_IMPORTED_MODULE_9__panels_panels_component__["a" /* PanelsComponent */],
                __WEBPACK_IMPORTED_MODULE_10__sweetalert_sweetalert_component__["a" /* SweetAlertComponent */],
                __WEBPACK_IMPORTED_MODULE_11__typography_typography_component__["a" /* TypographyComponent */]
            ]
        })
    ], ComponentsModule);
    return ComponentsModule;
}());



/***/ }),

/***/ "../../../../../src/app/components/components.routing.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ComponentsRoutes; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__buttons_buttons_component__ = __webpack_require__("../../../../../src/app/components/buttons/buttons.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__grid_grid_component__ = __webpack_require__("../../../../../src/app/components/grid/grid.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__icons_icons_component__ = __webpack_require__("../../../../../src/app/components/icons/icons.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__notifications_notifications_component__ = __webpack_require__("../../../../../src/app/components/notifications/notifications.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__panels_panels_component__ = __webpack_require__("../../../../../src/app/components/panels/panels.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__sweetalert_sweetalert_component__ = __webpack_require__("../../../../../src/app/components/sweetalert/sweetalert.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__typography_typography_component__ = __webpack_require__("../../../../../src/app/components/typography/typography.component.ts");







var ComponentsRoutes = [
    {
        path: '',
        children: [{
                path: 'buttons',
                component: __WEBPACK_IMPORTED_MODULE_0__buttons_buttons_component__["a" /* ButtonsComponent */]
            }]
    }, {
        path: '',
        children: [{
                path: 'grid',
                component: __WEBPACK_IMPORTED_MODULE_1__grid_grid_component__["a" /* GridSystemComponent */]
            }]
    }, {
        path: '',
        children: [{
                path: 'icons',
                component: __WEBPACK_IMPORTED_MODULE_2__icons_icons_component__["a" /* IconsComponent */]
            }]
    }, {
        path: '',
        children: [{
                path: 'notifications',
                component: __WEBPACK_IMPORTED_MODULE_3__notifications_notifications_component__["a" /* NotificationsComponent */]
            }]
    }, {
        path: '',
        children: [{
                path: 'panels',
                component: __WEBPACK_IMPORTED_MODULE_4__panels_panels_component__["a" /* PanelsComponent */]
            }]
    }, {
        path: '',
        children: [{
                path: 'sweet-alert',
                component: __WEBPACK_IMPORTED_MODULE_5__sweetalert_sweetalert_component__["a" /* SweetAlertComponent */]
            }]
    }, {
        path: '',
        children: [{
                path: 'typography',
                component: __WEBPACK_IMPORTED_MODULE_6__typography_typography_component__["a" /* TypographyComponent */]
            }]
    }
];


/***/ }),

/***/ "../../../../../src/app/components/grid/grid.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"main-content\">\n    <div class=\"container-fluid\">\n        <h4 class=\"title\">XS Grid\n            <small>Always Horizontal</small>\n        </h4>\n        <div class=\"row\">\n            <div class=\"col-xs-4\">\n                <div class=\"card\">\n                    <div class=\"card-content text-center\">\n                        <code>col-xs-4</code>\n                    </div>\n                </div>\n            </div>\n            <div class=\"col-xs-4\">\n                <div class=\"card\">\n                    <div class=\"card-content text-center\">\n                        <code>col-xs-4</code>\n                    </div>\n                </div>\n            </div>\n            <div class=\"col-xs-4\">\n                <div class=\"card\">\n                    <div class=\"card-content text-center\">\n                        <code>col-xs-4</code>\n                    </div>\n                </div>\n            </div>\n        </div>\n        <h4 class=\"title\">SM Grid\n            <small>Collapsed at 768px</small>\n        </h4>\n        <div class=\"row\">\n            <div class=\"col-sm-4\">\n                <div class=\"card\">\n                    <div class=\"card-content text-center\">\n                        <code>col-sm-4</code>\n                    </div>\n                </div>\n            </div>\n            <div class=\"col-sm-4\">\n                <div class=\"card\">\n                    <div class=\"card-content text-center\">\n                        <code>col-sm-4</code>\n                    </div>\n                </div>\n            </div>\n            <div class=\"col-sm-4\">\n                <div class=\"card\">\n                    <div class=\"card-content text-center\">\n                        <code>col-sm-4</code>\n                    </div>\n                </div>\n            </div>\n        </div>\n        <h4 class=\"title\">MD Grid\n            <small>Collapsed at 992px</small>\n        </h4>\n        <div class=\"row\">\n            <div class=\"col-md-4\">\n                <div class=\"card\">\n                    <div class=\"card-content text-center\">\n                        <code>col-md-4</code>\n                    </div>\n                </div>\n            </div>\n            <div class=\"col-md-4\">\n                <div class=\"card\">\n                    <div class=\"card-content text-center\">\n                        <code>col-md-4</code>\n                    </div>\n                </div>\n            </div>\n            <div class=\"col-md-4\">\n                <div class=\"card\">\n                    <div class=\"card-content text-center\">\n                        <code>col-md-4</code>\n                    </div>\n                </div>\n            </div>\n        </div>\n        <h4 class=\"title\">LG Grid\n            <small>Collapsed at 1200px</small>\n        </h4>\n        <div class=\"row\">\n            <div class=\"col-lg-4\">\n                <div class=\"card\">\n                    <div class=\"card-content text-center\">\n                        <code>col-lg-4</code>\n                    </div>\n                </div>\n            </div>\n            <div class=\"col-lg-4\">\n                <div class=\"card\">\n                    <div class=\"card-content text-center\">\n                        <code>col-lg-4</code>\n                    </div>\n                </div>\n            </div>\n            <div class=\"col-lg-4\">\n                <div class=\"card\">\n                    <div class=\"card-content text-center\">\n                        <code>col-lg-4</code>\n                    </div>\n                </div>\n            </div>\n        </div>\n        <h4 class=\"title\">Mixed Grid\n            <small>Showing different sizes on different screens</small>\n        </h4>\n        <div class=\"row\">\n            <div class=\"col-sm-6 col-lg-3\">\n                <div class=\"card\">\n                    <div class=\"card-content text-center\">\n                        <code>col-sm-6 col-lg-3</code>\n                    </div>\n                </div>\n            </div>\n            <div class=\"col-sm-6 col-lg-3\">\n                <div class=\"card\">\n                    <div class=\"card-content text-center\">\n                        <code>col-sm-6 col-lg-3</code>\n                    </div>\n                </div>\n            </div>\n            <div class=\"col-sm-6 col-lg-3\">\n                <div class=\"card\">\n                    <div class=\"card-content text-center\">\n                        <code>col-sm-6 col-lg-3</code>\n                    </div>\n                </div>\n            </div>\n            <div class=\"col-sm-6 col-lg-3\">\n                <div class=\"card\">\n                    <div class=\"card-content text-center\">\n                        <code>col-sm-6 col-lg-3</code>\n                    </div>\n                </div>\n            </div>\n        </div>\n        <h4 class=\"title\">Offset Grid\n            <small>Adding some space when needed</small>\n        </h4>\n        <div class=\"row\">\n            <div class=\"col-md-3\">\n                <div class=\"card\">\n                    <div class=\"card-content text-center\">\n                        <code>col-md-3</code>\n                    </div>\n                </div>\n            </div>\n            <div class=\"col-md-3 col-md-offset-6\">\n                <div class=\"card\">\n                    <div class=\"card-content text-center\">\n                        <code>col-md-3 col-md-offset-6</code>\n                    </div>\n                </div>\n            </div>\n            <div class=\"col-md-4 col-md-offset-1\">\n                <div class=\"card\">\n                    <div class=\"card-content text-center\">\n                        <code>col-md-4 col-md-offset-1</code>\n                    </div>\n                </div>\n            </div>\n            <div class=\"col-md-4 col-md-offset-2\">\n                <div class=\"card\">\n                    <div class=\"card-content text-center\">\n                        <code>col-md-4 col-md-offset-2</code>\n                    </div>\n                </div>\n            </div>\n            <div class=\"col-md-6 col-md-offset-3\">\n                <div class=\"card\">\n                    <div class=\"card-content text-center\">\n                        <code>col-md-6 col-md-offset-3</code>\n                    </div>\n                </div>\n            </div>\n        </div>\n        <h4 class=\"title\">Paragraphs</h4>\n        <div class=\"card\">\n            <div class=\"card-content\">\n                <div class=\"row\">\n                    <div class=\"col-sm-6\">\n                        <h3>Some Title Here</h3>\n                        <p>One morning, when Gregor Samsa woke from troubled dreams, he found himself transformed in his bed into a horrible vermin. He lay on his armour-like back, and if he lifted his head a little he could see his brown belly, slightly domed and divided by arches into stiff sections. The bedding was hardly able to cover it and seemed ready to slide off any moment. His many legs, pitifully thin compared with the size of the rest of him, waved about helplessly as he looked. \"What's happened to me?\" he thought.</p>\n                    </div>\n                    <div class=\"col-sm-6\">\n                        <h3>Another Title Here</h3>\n                        <p>One morning, when Gregor Samsa woke from troubled dreams, he found himself transformed in his bed into a horrible vermin. He lay on his armour-like back, and if he lifted his head a little he could see his brown belly, slightly domed and divided by arches into stiff sections. The bedding was hardly able to cover it and seemed ready to slide off any moment. His many legs, pitifully thin compared with the size of the rest of him, waved about helplessly as he looked. \"What's happened to me?\" he thought.</p>\n                    </div>\n                </div>\n                <br>\n                <div class=\"row\">\n                    <div class=\"col-sm-4\">\n                        <h3>Some Title Here</h3>\n                        <p>One morning, when Gregor Samsa woke from troubled dreams, he found himself transformed in his bed into a horrible vermin. He lay on his armour-like back, and if he lifted his head a little he could see his brown belly, slightly domed and divided by arches into stiff sections. The bedding was hardly able to cover it and seemed ready to slide off any moment.</p>\n                    </div>\n                    <div class=\"col-sm-4\">\n                        <h3>Another Title Here</h3>\n                        <p>One morning, when Gregor Samsa woke from troubled dreams, he found himself transformed in his bed into a horrible vermin. He lay on his armour-like back, and if he lifted his head a little he could see his brown belly, slightly domed and divided by arches into stiff sections. The bedding was hardly able to cover it and seemed ready to slide off any moment.</p>\n                    </div>\n                    <div class=\"col-sm-4\">\n                        <h3>Another Title Here</h3>\n                        <p>One morning, when Gregor Samsa woke from troubled dreams, he found himself transformed in his bed into a horrible vermin. He lay on his armour-like back, and if he lifted his head a little he could see his brown belly, slightly domed and divided by arches into stiff sections. The bedding was hardly able to cover it and seemed ready to slide off any moment.</p>\n                    </div>\n                </div>\n                <br>\n                <div class=\"row\">\n                    <div class=\"col-sm-4\">\n                        <h3>Some Title Here</h3>\n                        <p>One morning, when Gregor Samsa woke from troubled dreams, he found himself transformed in his bed into a horrible vermin. He lay on his armour-like back, and if he lifted his head a little he could see his brown belly, slightly domed and divided by arches into stiff sections. The bedding was hardly able to cover it and seemed ready to slide off any moment.</p>\n                    </div>\n                    <div class=\"col-sm-8\">\n                        <h3>Another Title Here</h3>\n                        <p>One morning, when Gregor Samsa woke from troubled dreams, he found himself transformed in his bed into a horrible vermin. He lay on his armour-like back, and if he lifted his head a little he could see his brown belly, slightly domed and divided by arches into stiff sections. The bedding was hardly able to cover it and seemed ready to slide off any moment. One morning, when Gregor Samsa woke from troubled dreams, he found himself transformed in his bed into a horrible vermin. He lay on his armour-like back, and if he lifted his head a little he could see his brown belly, slightly domed and divided by arches into stiff sections. The bedding was hardly able to cover it and seemed ready to slide off any moment.</p>\n                    </div>\n                </div>\n            </div>\n        </div>\n        <!--  end card -->\n    </div>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/components/grid/grid.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GridSystemComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var GridSystemComponent = /** @class */ (function () {
    function GridSystemComponent() {
    }
    GridSystemComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-grid-cmp',
            template: __webpack_require__("../../../../../src/app/components/grid/grid.component.html")
        })
    ], GridSystemComponent);
    return GridSystemComponent;
}());



/***/ }),

/***/ "../../../../../src/app/components/icons/icons.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"main-content\">\n    <div class=\"container-fluid\">\n        <div class=\"header text-center\">\n            <h3 class=\"title\">Material Design Icons</h3>\n            <p class=\"category\">Handcrafted by our friends from\n                <a target=\"_blank\" href=\"https://design.google.com/icons/\">Google</a>\n            </p>\n        </div>\n        <div class=\"row\">\n            <div class=\"col-md-12\">\n                <div class=\"card card-plain\">\n                    <div class=\"card-content\">\n                        <div class=\"iframe-container hidden-sm hidden-xs\">\n                            <iframe src=\"https://design.google.com/icons/\">\n                                <p>Your browser does not support iframes.</p>\n                            </iframe>\n                        </div>\n                        <div class=\"col-md-6 hidden-lg hidden-md text-center\">\n                            <h5>The icons are visible on Desktop mode inside an iframe. Since the iframe is not working on Mobile and Tablets please visit the icons on their original page on Google. Check the\n                                <a href=\"https://design.google.com/icons/\" target=\"_blank\">Material Icons</a>\n                            </h5>\n                        </div>\n                    </div>\n                </div>\n            </div>\n        </div>\n    </div>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/components/icons/icons.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return IconsComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var IconsComponent = /** @class */ (function () {
    function IconsComponent() {
    }
    IconsComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-icons-cmp',
            template: __webpack_require__("../../../../../src/app/components/icons/icons.component.html")
        })
    ], IconsComponent);
    return IconsComponent;
}());



/***/ }),

/***/ "../../../../../src/app/components/notifications/notifications.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"main-content\">\n    <div class=\"container-fluid\">\n        <div class=\"header text-center\">\n            <h3 class=\"title\">Notifications</h3>\n            <p class=\"category\">Handcrafted by our friend\n                <a target=\"_blank\" href=\"https://github.com/mouse0270\">Robert McIntosh</a>. Please checkout the\n                <a href=\"http://bootstrap-notify.remabledesigns.com/\" target=\"_blank\">full documentation.</a>\n            </p>\n        </div>\n        <div class=\"row\">\n            <div class=\"col-md-6\">\n                <div class=\"card\">\n                    <div class=\"card-header\">\n                        <h4 class=\"card-title\">Notifications Style</h4>\n                    </div>\n                    <div class=\"card-content\">\n                        <div class=\"alert alert-info\">\n                            <span>This is a plain notification</span>\n                        </div>\n                        <div class=\"alert alert-info\">\n                            <button type=\"button\" aria-hidden=\"true\" class=\"close\">\n                                <i class=\"material-icons\">close</i>\n                            </button>\n                            <span>This is a notification with close button.</span>\n                        </div>\n                        <div class=\"alert alert-info alert-with-icon\" data-notify=\"container\">\n                            <i class=\"material-icons\" data-notify=\"icon\">notifications</i>\n                            <button type=\"button\" aria-hidden=\"true\" class=\"close\">\n                                <i class=\"material-icons\">close</i>\n                            </button>\n                            <span data-notify=\"message\">This is a notification with close button and icon and have many lines. You can see that the icon and the close button are always vertically aligned. This is a beautiful notification. So you don't have to worry about the style.</span>\n                        </div>\n                        <div class=\"alert alert-rose alert-with-icon\" data-notify=\"container\">\n                            <i class=\"material-icons\" data-notify=\"icon\">notifications</i>\n                            <button type=\"button\" aria-hidden=\"true\" class=\"close\">\n                                <i class=\"material-icons\">close</i>\n                            </button>\n                            <span data-notify=\"message\">This is a notification with close button and icon and is made with \".alert-rose\". You can see that the icon and the close button are always vertically aligned. This is a beautiful notification. So you don't have to worry about the style.</span>\n                        </div>\n                    </div>\n                </div>\n            </div>\n            <div class=\"col-md-6\">\n                <div class=\"card\">\n                    <div class=\"card-header\">\n                        <h4 class=\"card-title\">Notification states</h4>\n                    </div>\n                    <div class=\"card-content\">\n                        <div class=\"alert alert-info\">\n                            <button type=\"button\" aria-hidden=\"true\" class=\"close\">\n                                <i class=\"material-icons\">close</i>\n                            </button>\n                            <span>\n                                <b> Info - </b> This is a regular notification made with \".alert-info\"</span>\n                        </div>\n                        <div class=\"alert alert-success\">\n                            <button type=\"button\" aria-hidden=\"true\" class=\"close\">\n                                <i class=\"material-icons\">close</i>\n                            </button>\n                            <span>\n                                <b> Success - </b> This is a regular notification made with \".alert-success\"</span>\n                        </div>\n                        <div class=\"alert alert-warning\">\n                            <button type=\"button\" aria-hidden=\"true\" class=\"close\">\n                                <i class=\"material-icons\">close</i>\n                            </button>\n                            <span>\n                                <b> Warning - </b> This is a regular notification made with \".alert-warning\"</span>\n                        </div>\n                        <div class=\"alert alert-danger\">\n                            <button type=\"button\" aria-hidden=\"true\" class=\"close\">\n                                <i class=\"material-icons\">close</i>\n                            </button>\n                            <span>\n                                <b> Danger - </b> This is a regular notification made with \".alert-danger\"</span>\n                        </div>\n                        <div class=\"alert alert-primary\">\n                            <button type=\"button\" aria-hidden=\"true\" class=\"close\">\n                                <i class=\"material-icons\">close</i>\n                            </button>\n                            <span>\n                                <b> Primary - </b> This is a regular notification made with \".alert-primary\"</span>\n                        </div>\n                        <div class=\"alert alert-rose\">\n                            <button type=\"button\" aria-hidden=\"true\" class=\"close\">\n                                <i class=\"material-icons\">close</i>\n                            </button>\n                            <span>\n                                <b> Rose - </b> This is a regular notification made with \".alert-rose\"</span>\n                        </div>\n                    </div>\n                </div>\n            </div>\n            <div class=\"col-md-12\">\n                <div class=\"card\">\n                    <div class=\"card-content\">\n                        <div class=\"places-buttons\">\n                            <div class=\"row\">\n                                <div class=\"col-md-6 col-md-offset-3 text-center\">\n                                    <h4 class=\"card-title\">\n                                        Notifications Places\n                                        <p class=\"category\">Click to view notifications</p>\n                                    </h4>\n                                </div>\n                            </div>\n                            <div class=\"row\">\n                                <div class=\"col-lg-8 col-lg-offset-2 col-md-10 col-md-offset-1\">\n                                    <div class=\"col-md-4\">\n                                        <button class=\"btn btn-primary btn-block\" (click)=\"showNotification('top','left')\">Top Left</button>\n                                    </div>\n                                    <div class=\"col-md-4\">\n                                        <button class=\"btn btn-primary btn-block\" (click)=\"showNotification('top','center')\">Top Center</button>\n                                    </div>\n                                    <div class=\"col-md-4\">\n                                        <button class=\"btn btn-primary btn-block\" (click)=\"showNotification('top','right')\">Top Right</button>\n                                    </div>\n                                </div>\n                            </div>\n                            <div class=\"row\">\n                                <div class=\"col-lg-8 col-lg-offset-2 col-md-10 col-md-offset-1\">\n                                    <div class=\"col-md-4\">\n                                        <button class=\"btn btn-primary btn-block\" (click)=\"showNotification('bottom','left')\">Bottom Left</button>\n                                    </div>\n                                    <div class=\"col-md-4\">\n                                        <button class=\"btn btn-primary btn-block\" (click)=\"showNotification('bottom','center')\">Bottom Center</button>\n                                    </div>\n                                    <div class=\"col-md-4\">\n                                        <button class=\"btn btn-primary btn-block\" (click)=\"showNotification('bottom','right')\">Bottom Right</button>\n                                    </div>\n                                </div>\n                            </div>\n                        </div>\n                        <div class=\"row\">\n                            <div class=\"col-md-12 text-center\">\n                                <div class=\"card-header\">\n                                    <h4 class=\"card-title\">Modal</h4>\n                                </div>\n                                <button class=\"btn btn-primary btn-raised btn-round\" data-toggle=\"modal\" data-target=\"#myModal\">\n                                    Classic modal\n                                </button>\n                                <button class=\"btn btn-raised btn-round btn-info\" data-toggle=\"modal\" data-target=\"#noticeModal\">\n                                    Notice modal\n                                </button>\n                                <button class=\"btn btn-raised btn-round btn-rose\" data-toggle=\"modal\" data-target=\"#smallAlertModal\">\n                                    Small alert modal\n                                </button>\n                                <!-- Classic Modal -->\n                                <div class=\"modal fade\" id=\"myModal\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"myModalLabel\" aria-hidden=\"true\">\n                                    <div class=\"modal-dialog\">\n                                        <div class=\"modal-content\">\n                                            <div class=\"modal-header\">\n                                                <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-hidden=\"true\">\n                                                    <i class=\"material-icons\">clear</i>\n                                                </button>\n                                                <h4 class=\"modal-title\">Modal title</h4>\n                                            </div>\n                                            <div class=\"modal-body\">\n                                                <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean. A small river named Duden flows by their place and supplies it with the necessary regelialia. It is a paradisematic country, in which roasted parts of sentences fly into your mouth. Even the all-powerful Pointing has no control about the blind texts it is an almost unorthographic life One day however a small line of blind text by the name of Lorem Ipsum decided to leave for the far World of Grammar.\n                                                </p>\n                                            </div>\n                                            <div class=\"modal-footer\">\n                                                <button type=\"button\" class=\"btn btn-simple\">Nice Button</button>\n                                                <button type=\"button\" class=\"btn btn-danger btn-simple\" data-dismiss=\"modal\">Close</button>\n                                            </div>\n                                        </div>\n                                    </div>\n                                </div>\n                                <!--  End Modal -->\n                                <!-- notice modal -->\n                                <div class=\"modal fade\" id=\"noticeModal\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"myModalLabel\" aria-hidden=\"true\">\n                                    <div class=\"modal-dialog modal-notice\">\n                                        <div class=\"modal-content\">\n                                            <div class=\"modal-header\">\n                                                <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-hidden=\"true\"><i class=\"material-icons\">clear</i></button>\n                                                <h5 class=\"modal-title\" id=\"myModalLabel\">How Do You Become an Affiliate?</h5>\n                                            </div>\n                                            <div class=\"modal-body\">\n                                                <div class=\"instruction\">\n                                                    <div class=\"row\">\n                                                        <div class=\"col-md-8\">\n                                                            <strong>1. Register</strong>\n                                                            <p>The first step is to create an account at\n                                                                <a href=\"https://www.creative-tim.com/\">Creative Tim</a>. You can choose a social network or go for the classic version, whatever works best for you.</p>\n                                                        </div>\n                                                        <div class=\"col-md-4\">\n                                                            <div class=\"picture\">\n                                                                <img src=\"../../assets/img/card-1.jpeg\" alt=\"Thumbnail Image\" class=\"img-rounded img-responsive\">\n                                                            </div>\n                                                        </div>\n                                                    </div>\n                                                </div>\n                                                <div class=\"instruction\">\n                                                    <div class=\"row\">\n                                                        <div class=\"col-md-8\">\n                                                            <strong>2. Apply</strong>\n                                                            <p>The first step is to create an account at\n                                                                <a href=\"https://www.creative-tim.com/\">Creative Tim</a>. You can choose a social network or go for the classic version, whatever works best for you.</p>\n                                                        </div>\n                                                        <div class=\"col-md-4\">\n                                                            <div class=\"picture\">\n                                                                <img src=\"../../assets/img/card-2.jpeg\" alt=\"Thumbnail Image\" class=\"img-rounded img-responsive\">\n                                                            </div>\n                                                        </div>\n                                                    </div>\n                                                </div>\n                                                <p>If you have more questions, don't hesitate to contact us or send us a tweet @creativetim. We're here to help!</p>\n                                            </div>\n                                            <div class=\"modal-footer text-center\">\n                                                <button type=\"button\" class=\"btn btn-info btn-round\" data-dismiss=\"modal\">Sounds good!</button>\n                                            </div>\n                                        </div>\n                                    </div>\n                                </div>\n                                <!-- end notice modal -->\n                                <!-- small modal -->\n                                <div class=\"modal fade\" id=\"smallAlertModal\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"myModalLabel\" aria-hidden=\"true\">\n                                    <div class=\"modal-dialog modal-small \">\n                                        <div class=\"modal-content\">\n                                            <div class=\"modal-header\">\n                                                <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-hidden=\"true\"><i class=\"material-icons\">clear</i></button>\n                                            </div>\n                                            <div class=\"modal-body text-center\">\n                                                <h5>Are you sure you want to do this? </h5>\n                                            </div>\n                                            <div class=\"modal-footer text-center\">\n                                                <button type=\"button\" class=\"btn btn-simple\" data-dismiss=\"modal\">Never mind</button>\n                                                <button type=\"button\" class=\"btn btn-success btn-simple\">Yes</button>\n                                            </div>\n                                        </div>\n                                    </div>\n                                </div>\n                                <!--    end small modal -->\n                            </div>\n                        </div>\n                    </div>\n                </div>\n            </div>\n        </div>\n    </div>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/components/notifications/notifications.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NotificationsComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
// IMPORTANT: this is a plugin which requires jQuery for initialisation and data manipulation
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var NotificationsComponent = /** @class */ (function () {
    function NotificationsComponent() {
    }
    NotificationsComponent.prototype.showNotification = function (from, align) {
        var type = ['', 'info', 'success', 'warning', 'danger', 'rose', 'primary'];
        var color = Math.floor((Math.random() * 6) + 1);
        $.notify({
            icon: 'notifications',
            message: 'Welcome to <b>Material Dashboard</b> - a beautiful dashboard for every web developer.'
        }, {
            type: type[color],
            timer: 3000,
            placement: {
                from: from,
                align: align
            }
        });
    };
    NotificationsComponent.prototype.ngOnInit = function () {
        var mainPanel = document.getElementsByClassName('main-panel')[0];
        $('.modal').on('shown.bs.modal', function () {
            mainPanel.classList.add('no-scroll');
        });
        $('.modal').on('hidden.bs.modal', function () {
            mainPanel.classList.remove('no-scroll');
        });
    };
    NotificationsComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-notifications-cmp',
            template: __webpack_require__("../../../../../src/app/components/notifications/notifications.component.html")
        })
    ], NotificationsComponent);
    return NotificationsComponent;
}());



/***/ }),

/***/ "../../../../../src/app/components/panels/panels.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"main-content\">\n    <div class=\"container-fluid\">\n        <div class=\"row\">\n            <div class=\"col-md-6\">\n                <div class=\"card\">\n                    <div class=\"card-header\">\n                        <h4 class=\"card-title\">Navigation Pills -\n                            <small>Horizontal Tabs</small>\n                        </h4>\n                    </div>\n                    <div class=\"card-content\">\n                        <ul class=\"nav nav-pills nav-pills-warning\">\n                            <li class=\"active\">\n                                <a href=\"#pill1\" data-toggle=\"tab\">Profile</a>\n                            </li>\n                            <li>\n                                <a href=\"#pill2\" data-toggle=\"tab\">Settings</a>\n                            </li>\n                            <li>\n                                <a href=\"#pill3\" data-toggle=\"tab\">Options</a>\n                            </li>\n                        </ul>\n                        <div class=\"tab-content\">\n                            <div class=\"tab-pane active\" id=\"pill1\">\n                                Collaboratively administrate empowered markets via plug-and-play networks. Dynamically procrastinate B2C users after installed base benefits.\n                                <br />\n                                <br /> Dramatically visualize customer directed convergence without revolutionary ROI. Collaboratively administrate empowered markets via plug-and-play networks. Dynamically procrastinate B2C users after installed base benefits.\n                                <br />\n                                <br /> This is very nice.\n                            </div>\n                            <div class=\"tab-pane\" id=\"pill2\">\n                                Efficiently unleash cross-media information without cross-media value. Quickly maximize timely deliverables for real-time schemas.\n                                <br />\n                                <br />Dramatically maintain clicks-and-mortar solutions without functional solutions.\n                            </div>\n                            <div class=\"tab-pane\" id=\"pill3\">\n                                Completely synergize resource taxing relationships via premier niche markets. Professionally cultivate one-to-one customer service with robust ideas.\n                                <br />\n                                <br />Dynamically innovate resource-leveling customer service for state of the art customer service.\n                            </div>\n                        </div>\n                    </div>\n                </div>\n            </div>\n            <div class=\"col-md-6\">\n                <div class=\"card\">\n                    <div class=\"card-header\">\n                        <h4 class=\"card-title\">Navigation Pills -\n                            <small class=\"category\">Vertical Tabs</small>\n                        </h4>\n                    </div>\n                    <div class=\"card-content\">\n                        <div class=\"row\">\n                            <div class=\"col-md-4\">\n                                <ul class=\"nav nav-pills nav-pills-rose nav-stacked\">\n                                    <li class=\"active\">\n                                        <a href=\"#tab1\" data-toggle=\"tab\">Profile</a>\n                                    </li>\n                                    <li>\n                                        <a href=\"#tab2\" data-toggle=\"tab\">Settings</a>\n                                    </li>\n                                    <li>\n                                        <a href=\"#tab3\" data-toggle=\"tab\">Options</a>\n                                    </li>\n                                </ul>\n                            </div>\n                            <div class=\"col-md-8\">\n                                <div class=\"tab-content\">\n                                    <div class=\"tab-pane active\" id=\"tab1\">\n                                        Collaboratively administrate empowered markets via plug-and-play networks. Dynamically procrastinate B2C users after installed base benefits.\n                                        <br />\n                                        <br /> Dramatically maintain clicks-and-mortar solutions without functional solutions. Dramatically visualize customer directed convergence without revolutionary ROI. Collaboratively administrate empowered markets via plug-and-play networks. Dynamically procrastinate B2C users after installed base benefits. This is very nice.\n                                    </div>\n                                    <div class=\"tab-pane\" id=\"tab2\">\n                                        Efficiently unleash cross-media information without cross-media value. Quickly maximize timely deliverables for real-time schemas.\n                                        <br />\n                                        <br />Dramatically maintain clicks-and-mortar solutions without functional solutions.\n                                    </div>\n                                    <div class=\"tab-pane\" id=\"tab3\">\n                                        Completely synergize resource taxing relationships via premier niche markets. Professionally cultivate one-to-one customer service with robust ideas.\n                                        <br />\n                                        <br />Dynamically innovate resource-leveling customer service for state of the art customer service.\n                                    </div>\n                                </div>\n                            </div>\n                        </div>\n                    </div>\n                </div>\n            </div>\n        </div>\n        <div class=\"row\">\n            <div class=\"col-md-6\">\n                <div class=\"card\">\n                    <div class=\"card-header\">\n                        <h4 class=\"card-title\">Collapsible Accordion</h4>\n                    </div>\n                    <div class=\"card-content\">\n                        <div class=\"panel-group\" id=\"accordion\" role=\"tablist\" aria-multiselectable=\"true\">\n                            <div class=\"panel panel-default\">\n                                <div class=\"panel-heading\" role=\"tab\" id=\"headingOne\">\n                                    <a role=\"button\" data-toggle=\"collapse\" data-parent=\"#accordion\" href=\"#collapseOne\" aria-expanded=\"true\" aria-controls=\"collapseOne\">\n                                        <h4 class=\"panel-title\">\n                                            Collapsible Group Item #1\n                                            <i class=\"material-icons\">keyboard_arrow_down</i>\n                                        </h4>\n                                    </a>\n                                </div>\n                                <div id=\"collapseOne\" class=\"panel-collapse collapse in\" role=\"tabpanel\" aria-labelledby=\"headingOne\">\n                                    <div class=\"panel-body\">\n                                        Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably haven't heard of them accusamus labore sustainable VHS.\n                                    </div>\n                                </div>\n                            </div>\n                            <div class=\"panel panel-default\">\n                                <div class=\"panel-heading\" role=\"tab\" id=\"headingTwo\">\n                                    <a class=\"collapsed\" role=\"button\" data-toggle=\"collapse\" data-parent=\"#accordion\" href=\"#collapseTwo\" aria-expanded=\"false\" aria-controls=\"collapseTwo\">\n                                        <h4 class=\"panel-title\">\n                                            Collapsible Group Item #2\n                                            <i class=\"material-icons\">keyboard_arrow_down</i>\n                                        </h4>\n                                    </a>\n                                </div>\n                                <div id=\"collapseTwo\" class=\"panel-collapse collapse\" role=\"tabpanel\" aria-labelledby=\"headingTwo\">\n                                    <div class=\"panel-body\">\n                                        Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably haven't heard of them accusamus labore sustainable VHS.\n                                    </div>\n                                </div>\n                            </div>\n                            <div class=\"panel panel-default\">\n                                <div class=\"panel-heading\" role=\"tab\" id=\"headingThree\">\n                                    <a class=\"collapsed\" role=\"button\" data-toggle=\"collapse\" data-parent=\"#accordion\" href=\"#collapseThree\" aria-expanded=\"false\" aria-controls=\"collapseThree\">\n                                        <h4 class=\"panel-title\">\n                                            Collapsible Group Item #3\n                                            <i class=\"material-icons\">keyboard_arrow_down</i>\n                                        </h4>\n                                    </a>\n                                </div>\n                                <div id=\"collapseThree\" class=\"panel-collapse collapse\" role=\"tabpanel\" aria-labelledby=\"headingThree\">\n                                    <div class=\"panel-body\">\n                                        Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably haven't heard of them accusamus labore sustainable VHS.\n                                    </div>\n                                </div>\n                            </div>\n                        </div>\n                    </div>\n                </div>\n            </div>\n            <div class=\"col-md-6\">\n                <div class=\"card\">\n                    <div class=\"card-header\">\n                        <h4 class=\"card-title\">Navigation Pills Icons -\n                            <small class=\"category\">Vertical Tabs</small>\n                        </h4>\n                    </div>\n                    <div class=\"card-content\">\n                        <div class=\"row\">\n                            <div class=\"col-md-4\">\n                                <ul class=\"nav nav-pills nav-pills-icons nav-pills-rose nav-stacked\" role=\"tablist\">\n                                    <!--\n                        color-classes: \"nav-pills-primary\", \"nav-pills-info\", \"nav-pills-success\", \"nav-pills-warning\",\"nav-pills-danger\"\n                    -->\n                                    <li class=\"active\">\n                                        <a href=\"#dashboard-2\" role=\"tab\" data-toggle=\"tab\">\n                                            <i class=\"material-icons\">dashboard</i> Dashboard\n                                        </a>\n                                    </li>\n                                    <li>\n                                        <a href=\"#schedule-2\" role=\"tab\" data-toggle=\"tab\">\n                                            <i class=\"material-icons\">schedule</i> Schedule\n                                        </a>\n                                    </li>\n                                </ul>\n                            </div>\n                            <div class=\"col-md-8\">\n                                <div class=\"tab-content\">\n                                    <div class=\"tab-pane active\" id=\"dashboard-2\">\n                                        Collaboratively administrate empowered markets via plug-and-play networks. Dynamically procrastinate B2C users after installed base benefits.\n                                        <br />\n                                        <br /> Dramatically visualize customer directed convergence without revolutionary ROI. Collaboratively administrate empowered markets via plug-and-play networks. Dynamically procrastinate B2C users after installed base benefits.\n                                        <br />\n                                        <br /> Dramatically visualize customer directed convergence without revolutionary ROI. Collaboratively administrate empowered markets via plug-and-play networks. Dynamically procrastinate B2C users after installed base benefits.\n                                    </div>\n                                    <div class=\"tab-pane\" id=\"schedule-2\">\n                                        Efficiently unleash cross-media information without cross-media value. Quickly maximize timely deliverables for real-time schemas.\n                                        <br />\n                                        <br /> Dramatically maintain clicks-and-mortar solutions without functional solutions. Dramatically visualize customer directed convergence without revolutionary ROI. Collaboratively administrate empowered markets via plug-and-play networks. Dynamically procrastinate B2C users after installed base benefits.\n                                    </div>\n                                </div>\n                            </div>\n                        </div>\n                    </div>\n                </div>\n            </div>\n        </div>\n        <div class=\"row\">\n            <div class=\"col-md-8 col-md-offset-2\">\n                <h3 class=\"title text-center\">Page Subcategories</h3>\n                <br />\n                <div class=\"nav-center\">\n                    <ul class=\"nav nav-pills nav-pills-warning nav-pills-icons\" role=\"tablist\">\n                        <!--\n            color-classes: \"nav-pills-primary\", \"nav-pills-info\", \"nav-pills-success\", \"nav-pills-warning\",\"nav-pills-danger\"\n        -->\n                        <li>\n                            <a href=\"#description-1\" role=\"tab\" data-toggle=\"tab\">\n                                <i class=\"material-icons\">info</i> Description\n                            </a>\n                        </li>\n                        <li class=\"active\">\n                            <a href=\"#schedule-1\" role=\"tab\" data-toggle=\"tab\">\n                                <i class=\"material-icons\">location_on</i> Location\n                            </a>\n                        </li>\n                        <li>\n                            <a href=\"#tasks-1\" role=\"tab\" data-toggle=\"tab\">\n                                <i class=\"material-icons\">gavel</i> Legal Info\n                            </a>\n                        </li>\n                        <li>\n                            <a href=\"#tasks-2\" role=\"tab\" data-toggle=\"tab\">\n                                <i class=\"material-icons\">help_outline</i> Help Center\n                            </a>\n                        </li>\n                    </ul>\n                </div>\n                <div class=\"tab-content\">\n                    <div class=\"tab-pane\" id=\"description-1\">\n                        <div class=\"card\">\n                            <div class=\"card-header\">\n                                <h4 class=\"card-title\">Description about product</h4>\n                                <p class=\"category\">\n                                    More information here\n                                </p>\n                            </div>\n                            <div class=\"card-content\">\n                                Collaboratively administrate empowered markets via plug-and-play networks. Dynamically procrastinate B2C users after installed base benefits.\n                                <br />\n                                <br /> Dramatically visualize customer directed convergence without revolutionary ROI.\n                            </div>\n                        </div>\n                    </div>\n                    <div class=\"tab-pane active\" id=\"schedule-1\">\n                        <div class=\"card\">\n                            <div class=\"card-header\">\n                                <h4 class=\"card-title\">Location of the product</h4>\n                                <p class=\"category\">\n                                    More information here\n                                </p>\n                            </div>\n                            <div class=\"card-content\">\n                                Efficiently unleash cross-media information without cross-media value. Quickly maximize timely deliverables for real-time schemas.\n                                <br />\n                                <br /> Dramatically maintain clicks-and-mortar solutions without functional solutions.\n                            </div>\n                        </div>\n                    </div>\n                    <div class=\"tab-pane\" id=\"tasks-1\">\n                        <div class=\"card\">\n                            <div class=\"card-header\">\n                                <h4 class=\"card-title\">Legal info of the product</h4>\n                                <p class=\"category\">\n                                    More information here\n                                </p>\n                            </div>\n                            <div class=\"card-content\">\n                                Completely synergize resource taxing relationships via premier niche markets. Professionally cultivate one-to-one customer service with robust ideas.\n                                <br />\n                                <br />Dynamically innovate resource-leveling customer service for state of the art customer service.\n                            </div>\n                        </div>\n                    </div>\n                    <div class=\"tab-pane\" id=\"tasks-2\">\n                        <div class=\"card\">\n                            <div class=\"card-header\">\n                                <h4 class=\"card-title\">Help center</h4>\n                                <p class=\"category\">\n                                    More information here\n                                </p>\n                            </div>\n                            <div class=\"card-content\">\n                                From the seamless transition of glass and metal to the streamlined profile, every detail was carefully considered to enhance your experience. So while its display is larger, the phone feels just right.\n                                <br />\n                                <br /> Another Text. The first thing you notice when you hold the phone is how great it feels in your hand. The cover glass curves down around the sides to meet the anodized aluminum enclosure in a remarkable, simplified design.\n                            </div>\n                        </div>\n                    </div>\n                </div>\n            </div>\n        </div>\n    </div>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/components/panels/panels.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PanelsComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var PanelsComponent = /** @class */ (function () {
    function PanelsComponent() {
    }
    PanelsComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-panels-cmp',
            template: __webpack_require__("../../../../../src/app/components/panels/panels.component.html")
        })
    ], PanelsComponent);
    return PanelsComponent;
}());



/***/ }),

/***/ "../../../../../src/app/components/sweetalert/sweetalert.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"main-content\">\n    <div class=\"container-fluid\">\n        <div class=\"header text-center\">\n            <h3 class=\"title\">Sweet Alert 2</h3>\n            <p class=\"category\">A beautiful plugin, that replace the classic alert, Handcrafted by our friend\n                <a target=\"_blank\" href=\"https://twitter.com/t4t5\">Tristan Edwards</a>. Please check out the\n                <a href=\"http://limonte.github.io/sweetalert2/\" target=\"_blank\">full documentation.</a>\n            </p>\n        </div>\n        <div class=\"places-sweet-alerts\">\n            <div class=\"row\">\n                <div class=\"col-md-3\">\n                    <div class=\"card\">\n                        <div class=\"card-content text-center\">\n                            <h5>Basic example</h5>\n                            <button class=\"btn btn-rose btn-fill\" (click)=\"showSwal('basic')\">Try me!</button>\n                        </div>\n                    </div>\n                </div>\n                <div class=\"col-md-3\">\n                    <div class=\"card\">\n                        <div class=\"card-content text-center\">\n                            <h5>A title with a text under</h5>\n                            <button class=\"btn btn-rose btn-fill\" (click)=\"showSwal('title-and-text')\">Try me!</button>\n                        </div>\n                    </div>\n                </div>\n                <div class=\"col-md-3\">\n                    <div class=\"card\">\n                        <div class=\"card-content text-center\">\n                            <h5>A success message</h5>\n                            <button class=\"btn btn-rose btn-fill\" (click)=\"showSwal('success-message')\">Try me!</button>\n                        </div>\n                    </div>\n                </div>\n                <div class=\"col-md-3\">\n                    <div class=\"card\">\n                        <div class=\"card-content text-center\">\n                            <h5>Custom HTML description</h5>\n                            <button class=\"btn btn-rose btn-fill\" (click)=\"showSwal('custom-html')\">Try me!</button>\n                        </div>\n                    </div>\n                </div>\n                <div class=\"col-md-3\">\n                    <div class=\"card\">\n                        <div class=\"card-content text-center\">\n                            <h5>A warning message, with a function attached to the \"Confirm\" Button...</h5>\n                            <button class=\"btn btn-rose btn-fill\" (click)=\"showSwal('warning-message-and-confirmation')\">Try me!</button>\n                        </div>\n                    </div>\n                </div>\n                <div class=\"col-md-3\">\n                    <div class=\"card\">\n                        <div class=\"card-content text-center\">\n                            <h5>...and by passing a parameter, you can execute something else for \"Cancel\"</h5>\n                            <button class=\"btn btn-rose btn-fill\" (click)=\"showSwal('warning-message-and-cancel')\">Try me!</button>\n                        </div>\n                    </div>\n                </div>\n                <div class=\"col-md-3\">\n                    <div class=\"card\">\n                        <div class=\"card-content text-center\">\n                            <h5>A message with auto close timer set to 2 seconds</h5>\n                            <button class=\"btn btn-rose btn-fill\" (click)=\"showSwal('auto-close')\">Try me!</button>\n                        </div>\n                    </div>\n                </div>\n                <div class=\"col-md-3\">\n                    <div class=\"card\">\n                        <div class=\"card-content text-center\">\n                            <h5>Modal window with input field</h5>\n                            <button class=\"btn btn-rose btn-fill\" (click)=\"showSwal('input-field')\">Try me!</button>\n                        </div>\n                    </div>\n                </div>\n            </div>\n        </div>\n    </div>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/components/sweetalert/sweetalert.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SweetAlertComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_sweetalert2__ = __webpack_require__("../../../../sweetalert2/dist/sweetalert2.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_sweetalert2___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_sweetalert2__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


var SweetAlertComponent = /** @class */ (function () {
    function SweetAlertComponent() {
    }
    SweetAlertComponent.prototype.showSwal = function (type) {
        if (type === 'basic') {
            __WEBPACK_IMPORTED_MODULE_1_sweetalert2___default()({
                title: 'Here is a message!',
                buttonsStyling: false,
                confirmButtonClass: 'btn btn-success'
            }).catch(__WEBPACK_IMPORTED_MODULE_1_sweetalert2___default.a.noop);
        }
        else if (type === 'title-and-text') {
            __WEBPACK_IMPORTED_MODULE_1_sweetalert2___default()({
                title: 'Here is a message!',
                text: 'It is pretty, is not it?',
                buttonsStyling: false,
                confirmButtonClass: 'btn btn-info'
            }).catch(__WEBPACK_IMPORTED_MODULE_1_sweetalert2___default.a.noop);
        }
        else if (type === 'success-message') {
            __WEBPACK_IMPORTED_MODULE_1_sweetalert2___default()({
                type: 'success',
                title: 'Good job!',
                text: 'You clicked the button!',
                buttonsStyling: false,
                confirmButtonClass: 'btn btn-success'
            }).catch(__WEBPACK_IMPORTED_MODULE_1_sweetalert2___default.a.noop);
        }
        else if (type === 'warning-message-and-confirmation') {
            __WEBPACK_IMPORTED_MODULE_1_sweetalert2___default()({
                title: 'Are you sure?',
                text: 'You will not be able to revert this!',
                type: 'warning',
                showCancelButton: true,
                confirmButtonClass: 'btn btn-success',
                cancelButtonClass: 'btn btn-danger',
                confirmButtonText: 'Yes, delete it!',
                buttonsStyling: false
            }).then(function () {
                __WEBPACK_IMPORTED_MODULE_1_sweetalert2___default()({
                    title: 'Deleted!',
                    text: 'Your file has been deleted.',
                    type: 'success',
                    confirmButtonClass: 'btn btn-success',
                    buttonsStyling: false
                });
            }).catch(__WEBPACK_IMPORTED_MODULE_1_sweetalert2___default.a.noop);
        }
        else if (type === 'warning-message-and-cancel') {
            __WEBPACK_IMPORTED_MODULE_1_sweetalert2___default()({
                title: 'Are you sure?',
                text: 'You will not be able to recover this imaginary file!',
                type: 'warning',
                showCancelButton: true,
                confirmButtonText: 'Yes, delete it!',
                cancelButtonText: 'No, keep it',
                confirmButtonClass: 'btn btn-success',
                cancelButtonClass: 'btn btn-danger',
                buttonsStyling: false
            }).then(function () {
                __WEBPACK_IMPORTED_MODULE_1_sweetalert2___default()({
                    title: 'Deleted!',
                    text: 'Your imaginary file has been deleted.',
                    type: 'success',
                    confirmButtonClass: 'btn btn-success',
                    buttonsStyling: false
                });
            }, function (dismiss) {
                // dismiss can be 'overlay', 'cancel', 'close', 'esc', 'timer'
                if (dismiss === 'cancel') {
                    __WEBPACK_IMPORTED_MODULE_1_sweetalert2___default()({
                        title: 'Cancelled',
                        text: 'Your imaginary file is safe :)',
                        type: 'error',
                        confirmButtonClass: 'btn btn-info',
                        buttonsStyling: false
                    });
                }
            }).catch(__WEBPACK_IMPORTED_MODULE_1_sweetalert2___default.a.noop);
        }
        else if (type === 'custom-html') {
            __WEBPACK_IMPORTED_MODULE_1_sweetalert2___default()({
                title: 'HTML example',
                buttonsStyling: false,
                confirmButtonClass: 'btn btn-success',
                html: 'You can use <b>bold text</b>, ' +
                    '<a href="http://github.com">links</a> ' +
                    'and other HTML tags'
            }).catch(__WEBPACK_IMPORTED_MODULE_1_sweetalert2___default.a.noop);
        }
        else if (type === 'auto-close') {
            __WEBPACK_IMPORTED_MODULE_1_sweetalert2___default()({ title: 'Auto close alert!',
                text: 'I will close in 2 seconds.',
                timer: 2000,
                showConfirmButton: false
            }).then(function () { }, 
            // handling the promise rejection
            function (dismiss) {
                if (dismiss === 'timer') {
                    console.log('I was closed by the timer');
                }
            }).catch(__WEBPACK_IMPORTED_MODULE_1_sweetalert2___default.a.noop);
        }
        else if (type === 'input-field') {
            __WEBPACK_IMPORTED_MODULE_1_sweetalert2___default()({
                title: 'Input something',
                html: '<div class="form-group">' +
                    '<input id="input-field" type="text" class="form-control" />' +
                    '</div>',
                showCancelButton: true,
                confirmButtonClass: 'btn btn-success',
                cancelButtonClass: 'btn btn-danger',
                buttonsStyling: false
            }).then(function (result) {
                __WEBPACK_IMPORTED_MODULE_1_sweetalert2___default()({
                    type: 'success',
                    html: 'You entered: <strong>' +
                        $('#input-field').val() +
                        '</strong>',
                    confirmButtonClass: 'btn btn-success',
                    buttonsStyling: false
                });
            }).catch(__WEBPACK_IMPORTED_MODULE_1_sweetalert2___default.a.noop);
        }
    };
    SweetAlertComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-sweetalert-cmp',
            template: __webpack_require__("../../../../../src/app/components/sweetalert/sweetalert.component.html")
        })
    ], SweetAlertComponent);
    return SweetAlertComponent;
}());



/***/ }),

/***/ "../../../../../src/app/components/typography/typography.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"main-content\">\n    <div class=\"container-fluid\">\n        <div class=\"header text-center\">\n            <h3 class=\"title\">Material Dashboard Heading</h3>\n            <p class=\"category\">Created using Roboto Font Family</p>\n        </div>\n        <div class=\"row\">\n            <div class=\"col-md-12\">\n                <div class=\"card\">\n                    <div class=\"card-content\">\n                        <div id=\"typography\">\n                            <div class=\"card-title\">\n                                <h2>Typography</h2>\n                            </div>\n                            <div class=\"row\">\n                                <div class=\"tim-typo\">\n                                    <h1>\n                                        <span class=\"tim-note\">Header 1</span>The Life of Material Kit </h1>\n                                </div>\n                                <div class=\"tim-typo\">\n                                    <h2>\n                                        <span class=\"tim-note\">Header 2</span>The Life of Material Kit</h2>\n                                </div>\n                                <div class=\"tim-typo\">\n                                    <h3>\n                                        <span class=\"tim-note\">Header 3</span>The Life of Material Kit</h3>\n                                </div>\n                                <div class=\"tim-typo\">\n                                    <h4>\n                                        <span class=\"tim-note\">Header 4</span>The Life of Material Kit</h4>\n                                </div>\n                                <div class=\"tim-typo\">\n                                    <h5>\n                                        <span class=\"tim-note\">Header 5</span>The Life of Material Kit</h5>\n                                </div>\n                                <div class=\"tim-typo\">\n                                    <h6>\n                                        <span class=\"tim-note\">Header 6</span>The Life of Material Kit</h6>\n                                </div>\n                                <div class=\"tim-typo\">\n                                    <p>\n                                        <span class=\"tim-note\">Paragraph</span>\n                                        I will be the leader of a company that ends up being worth billions of dollars, because I got the answers. I understand culture. I am the nucleus. I think that’s a responsibility that I have, to push possibilities, to show people, this is the level that things could be at.</p>\n                                </div>\n                                <div class=\"tim-typo\">\n                                    <span class=\"tim-note\">Quote</span>\n                                    <blockquote>\n                                        <p>\n                                            I will be the leader of a company that ends up being worth billions of dollars, because I got the answers. I understand culture. I am the nucleus. I think that’s a responsibility that I have, to push possibilities, to show people, this is the level that things could be at.\n                                        </p>\n                                        <small>\n                                            Kanye West, Musician\n                                        </small>\n                                    </blockquote>\n                                </div>\n                                <div class=\"tim-typo\">\n                                    <span class=\"tim-note\">Muted Text</span>\n                                    <p class=\"text-muted\">\n                                        I will be the leader of a company that ends up being worth billions of dollars, because I got the answers...\n                                    </p>\n                                </div>\n                                <div class=\"tim-typo\">\n                                    <span class=\"tim-note\">Primary Text</span>\n                                    <p class=\"text-primary\">\n                                        I will be the leader of a company that ends up being worth billions of dollars, because I got the answers... </p>\n                                </div>\n                                <div class=\"tim-typo\">\n                                    <span class=\"tim-note\">Info Text</span>\n                                    <p class=\"text-info\">\n                                        I will be the leader of a company that ends up being worth billions of dollars, because I got the answers... </p>\n                                </div>\n                                <div class=\"tim-typo\">\n                                    <span class=\"tim-note\">Success Text</span>\n                                    <p class=\"text-success\">\n                                        I will be the leader of a company that ends up being worth billions of dollars, because I got the answers... </p>\n                                </div>\n                                <div class=\"tim-typo\">\n                                    <span class=\"tim-note\">Warning Text</span>\n                                    <p class=\"text-warning\">\n                                        I will be the leader of a company that ends up being worth billions of dollars, because I got the answers...\n                                    </p>\n                                </div>\n                                <div class=\"tim-typo\">\n                                    <span class=\"tim-note\">Danger Text</span>\n                                    <p class=\"text-danger\">\n                                        I will be the leader of a company that ends up being worth billions of dollars, because I got the answers... </p>\n                                </div>\n                                <div class=\"tim-typo\">\n                                    <h2>\n                                        <span class=\"tim-note\">Small Tag</span>\n                                        Header with small subtitle\n                                        <br>\n                                        <small>Use \"small\" tag for the headers</small>\n                                    </h2>\n                                </div>\n                            </div>\n                        </div>\n                    </div>\n                </div>\n            </div>\n        </div>\n    </div>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/components/typography/typography.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TypographyComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var TypographyComponent = /** @class */ (function () {
    function TypographyComponent() {
    }
    TypographyComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-typography-cmp',
            template: __webpack_require__("../../../../../src/app/components/typography/typography.component.html")
        })
    ], TypographyComponent);
    return TypographyComponent;
}());



/***/ }),

/***/ "../../../../sweetalert2/dist/sweetalert2.js":
/***/ (function(module, exports, __webpack_require__) {

/*!
 * sweetalert2 v6.10.1
 * Released under the MIT License.
 */
(function (global, factory) {
	 true ? module.exports = factory() :
	typeof define === 'function' && define.amd ? define(factory) :
	(global.Sweetalert2 = factory());
}(this, (function () { 'use strict';

function __$styleInject(css, returnValue) {
  if (typeof document === 'undefined') {
    return returnValue;
  }
  css = css || '';
  var head = document.head || document.getElementsByTagName('head')[0];
  var style = document.createElement('style');
  style.type = 'text/css';
  head.appendChild(style);
  
  if (style.styleSheet){
    style.styleSheet.cssText = css;
  } else {
    style.appendChild(document.createTextNode(css));
  }
  return returnValue;
}

var defaultParams = {
  title: '',
  titleText: '',
  text: '',
  html: '',
  type: null,
  customClass: '',
  target: 'body',
  animation: true,
  allowOutsideClick: true,
  allowEscapeKey: true,
  allowEnterKey: true,
  showConfirmButton: true,
  showCancelButton: false,
  preConfirm: null,
  confirmButtonText: 'OK',
  confirmButtonAriaLabel: '',
  confirmButtonColor: '#3085d6',
  confirmButtonClass: null,
  cancelButtonText: 'Cancel',
  cancelButtonAriaLabel: '',
  cancelButtonColor: '#aaa',
  cancelButtonClass: null,
  buttonsStyling: true,
  reverseButtons: false,
  focusConfirm: true,
  focusCancel: false,
  showCloseButton: false,
  closeButtonAriaLabel: 'Close this dialog',
  showLoaderOnConfirm: false,
  imageUrl: null,
  imageWidth: null,
  imageHeight: null,
  imageAlt: '',
  imageClass: null,
  timer: null,
  width: 500,
  padding: 20,
  background: '#fff',
  input: null,
  inputPlaceholder: '',
  inputValue: '',
  inputOptions: {},
  inputAutoTrim: true,
  inputClass: null,
  inputAttributes: {},
  inputValidator: null,
  progressSteps: [],
  currentProgressStep: null,
  progressStepsDistance: '40px',
  onOpen: null,
  onClose: null,
  useRejections: true
};

var swalPrefix = 'swal2-';

var prefix = function prefix(items) {
  var result = {};
  for (var i in items) {
    result[items[i]] = swalPrefix + items[i];
  }
  return result;
};

var swalClasses = prefix(['container', 'shown', 'iosfix', 'modal', 'overlay', 'fade', 'show', 'hide', 'noanimation', 'close', 'title', 'content', 'buttonswrapper', 'confirm', 'cancel', 'icon', 'image', 'input', 'file', 'range', 'select', 'radio', 'checkbox', 'textarea', 'inputerror', 'validationerror', 'progresssteps', 'activeprogressstep', 'progresscircle', 'progressline', 'loading', 'styled']);

var iconTypes = prefix(['success', 'warning', 'info', 'question', 'error']);

var consolePrefix = 'SweetAlert2:';

/*
 * Set hover, active and focus-states for buttons (source: http://www.sitepoint.com/javascript-generate-lighter-darker-color)
 */
var colorLuminance = function colorLuminance(hex, lum) {
  // Validate hex string
  hex = String(hex).replace(/[^0-9a-f]/gi, '');
  if (hex.length < 6) {
    hex = hex[0] + hex[0] + hex[1] + hex[1] + hex[2] + hex[2];
  }
  lum = lum || 0;

  // Convert to decimal and change luminosity
  var rgb = '#';
  for (var i = 0; i < 3; i++) {
    var c = parseInt(hex.substr(i * 2, 2), 16);
    c = Math.round(Math.min(Math.max(0, c + c * lum), 255)).toString(16);
    rgb += ('00' + c).substr(c.length);
  }

  return rgb;
};

var uniqueArray = function uniqueArray(arr) {
  var result = [];
  for (var i in arr) {
    if (result.indexOf(arr[i]) === -1) {
      result.push(arr[i]);
    }
  }
  return result;
};

/**
 * Standardise console warnings
 * @param message
 */
var warn = function warn(message) {
  console.warn(consolePrefix + ' ' + message);
};

/**
 * Standardise console errors
 * @param message
 */
var error = function error(message) {
  console.error(consolePrefix + ' ' + message);
};

// Remember state in cases where opening and handling a modal will fiddle with it.
var states = {
  previousWindowKeyDown: null,
  previousActiveElement: null,
  previousBodyPadding: null

  /*
   * Add modal + overlay to DOM
   */
};var init = function init(params) {
  // Clean up the old modal if it exists
  var c = getContainer();
  if (c) {
    c.parentNode.removeChild(c);
  }

  if (typeof document === 'undefined') {
    error('SweetAlert2 requires document to initialize');
    return;
  }

  var container = document.createElement('div');
  container.className = swalClasses.container;
  container.innerHTML = sweetHTML;

  var targetElement = typeof params.target === 'string' ? document.querySelector(params.target) : params.target;
  targetElement.appendChild(container);

  var modal = getModal();
  var input = getChildByClass(modal, swalClasses.input);
  var file = getChildByClass(modal, swalClasses.file);
  var range = modal.querySelector('.' + swalClasses.range + ' input');
  var rangeOutput = modal.querySelector('.' + swalClasses.range + ' output');
  var select = getChildByClass(modal, swalClasses.select);
  var checkbox = modal.querySelector('.' + swalClasses.checkbox + ' input');
  var textarea = getChildByClass(modal, swalClasses.textarea);

  input.oninput = function () {
    sweetAlert.resetValidationError();
  };

  input.onkeydown = function (event) {
    setTimeout(function () {
      if (event.keyCode === 13 && params.allowEnterKey) {
        event.stopPropagation();
        sweetAlert.clickConfirm();
      }
    }, 0);
  };

  file.onchange = function () {
    sweetAlert.resetValidationError();
  };

  range.oninput = function () {
    sweetAlert.resetValidationError();
    rangeOutput.value = range.value;
  };

  range.onchange = function () {
    sweetAlert.resetValidationError();
    range.previousSibling.value = range.value;
  };

  select.onchange = function () {
    sweetAlert.resetValidationError();
  };

  checkbox.onchange = function () {
    sweetAlert.resetValidationError();
  };

  textarea.oninput = function () {
    sweetAlert.resetValidationError();
  };

  return modal;
};

/*
 * Manipulate DOM
 */

var sweetHTML = ('\n <div role="dialog" aria-labelledby="' + swalClasses.title + '" aria-describedby="' + swalClasses.content + '" class="' + swalClasses.modal + '" tabindex="-1">\n   <ul class="' + swalClasses.progresssteps + '"></ul>\n   <div class="' + swalClasses.icon + ' ' + iconTypes.error + '">\n     <span class="swal2-x-mark"><span class="swal2-x-mark-line-left"></span><span class="swal2-x-mark-line-right"></span></span>\n   </div>\n   <div class="' + swalClasses.icon + ' ' + iconTypes.question + '">?</div>\n   <div class="' + swalClasses.icon + ' ' + iconTypes.warning + '">!</div>\n   <div class="' + swalClasses.icon + ' ' + iconTypes.info + '">i</div>\n   <div class="' + swalClasses.icon + ' ' + iconTypes.success + '">\n     <div class="swal2-success-circular-line-left"></div>\n     <span class="swal2-success-line-tip"></span> <span class="swal2-success-line-long"></span>\n     <div class="swal2-success-ring"></div> <div class="swal2-success-fix"></div>\n     <div class="swal2-success-circular-line-right"></div>\n   </div>\n   <img class="' + swalClasses.image + '" />\n   <h2 class="' + swalClasses.title + '" id="' + swalClasses.title + '"></h2>\n   <div id="' + swalClasses.content + '" class="' + swalClasses.content + '"></div>\n   <input class="' + swalClasses.input + '" />\n   <input type="file" class="' + swalClasses.file + '" />\n   <div class="' + swalClasses.range + '">\n     <output></output>\n     <input type="range" />\n   </div>\n   <select class="' + swalClasses.select + '"></select>\n   <div class="' + swalClasses.radio + '"></div>\n   <label for="' + swalClasses.checkbox + '" class="' + swalClasses.checkbox + '">\n     <input type="checkbox" />\n   </label>\n   <textarea class="' + swalClasses.textarea + '"></textarea>\n   <div class="' + swalClasses.validationerror + '" id="' + swalClasses.validationerror + '"></div>\n   <div class="' + swalClasses.buttonswrapper + '">\n     <button type="button" class="' + swalClasses.confirm + '">OK</button>\n     <button type="button" class="' + swalClasses.cancel + '">Cancel</button>\n   </div>\n   <button type="button" class="' + swalClasses.close + '">\xD7</button>\n </div>\n').replace(/(^|\n)\s*/g, '');

var getContainer = function getContainer() {
  return document.body.querySelector('.' + swalClasses.container);
};

var getModal = function getModal() {
  return getContainer() ? getContainer().querySelector('.' + swalClasses.modal) : null;
};

var getIcons = function getIcons() {
  var modal = getModal();
  return modal.querySelectorAll('.' + swalClasses.icon);
};

var elementByClass = function elementByClass(className) {
  return getContainer() ? getContainer().querySelector('.' + className) : null;
};

var getTitle = function getTitle() {
  return elementByClass(swalClasses.title);
};

var getContent = function getContent() {
  return elementByClass(swalClasses.content);
};

var getImage = function getImage() {
  return elementByClass(swalClasses.image);
};

var getButtonsWrapper = function getButtonsWrapper() {
  return elementByClass(swalClasses.buttonswrapper);
};

var getProgressSteps = function getProgressSteps() {
  return elementByClass(swalClasses.progresssteps);
};

var getValidationError = function getValidationError() {
  return elementByClass(swalClasses.validationerror);
};

var getConfirmButton = function getConfirmButton() {
  return elementByClass(swalClasses.confirm);
};

var getCancelButton = function getCancelButton() {
  return elementByClass(swalClasses.cancel);
};

var getCloseButton = function getCloseButton() {
  return elementByClass(swalClasses.close);
};

var getFocusableElements = function getFocusableElements() {
  var focusableElementsWithTabindex = Array.from(getModal().querySelectorAll('[tabindex]:not([tabindex="-1"]):not([tabindex="0"])'))
  // sort according to tabindex
  .sort(function (a, b) {
    a = parseInt(a.getAttribute('tabindex'));
    b = parseInt(b.getAttribute('tabindex'));
    if (a > b) {
      return 1;
    } else if (a < b) {
      return -1;
    }
    return 0;
  });

  var otherFocusableElements = Array.prototype.slice.call(getModal().querySelectorAll('button, input:not([type=hidden]), textarea, select, a, [tabindex="0"]'));

  return uniqueArray(focusableElementsWithTabindex.concat(otherFocusableElements));
};

var hasClass = function hasClass(elem, className) {
  if (elem.classList) {
    return elem.classList.contains(className);
  }
  return false;
};

var focusInput = function focusInput(input) {
  input.focus();

  // place cursor at end of text in text input
  if (input.type !== 'file') {
    // http://stackoverflow.com/a/2345915/1331425
    var val = input.value;
    input.value = '';
    input.value = val;
  }
};

var addClass = function addClass(elem, className) {
  if (!elem || !className) {
    return;
  }
  var classes = className.split(/\s+/).filter(Boolean);
  classes.forEach(function (className) {
    elem.classList.add(className);
  });
};

var removeClass = function removeClass(elem, className) {
  if (!elem || !className) {
    return;
  }
  var classes = className.split(/\s+/).filter(Boolean);
  classes.forEach(function (className) {
    elem.classList.remove(className);
  });
};

var getChildByClass = function getChildByClass(elem, className) {
  for (var i = 0; i < elem.childNodes.length; i++) {
    if (hasClass(elem.childNodes[i], className)) {
      return elem.childNodes[i];
    }
  }
};

var show = function show(elem, display) {
  if (!display) {
    display = 'block';
  }
  elem.style.opacity = '';
  elem.style.display = display;
};

var hide = function hide(elem) {
  elem.style.opacity = '';
  elem.style.display = 'none';
};

var empty = function empty(elem) {
  while (elem.firstChild) {
    elem.removeChild(elem.firstChild);
  }
};

// borrowed from jqeury $(elem).is(':visible') implementation
var isVisible = function isVisible(elem) {
  return elem.offsetWidth || elem.offsetHeight || elem.getClientRects().length;
};

var removeStyleProperty = function removeStyleProperty(elem, property) {
  if (elem.style.removeProperty) {
    elem.style.removeProperty(property);
  } else {
    elem.style.removeAttribute(property);
  }
};

var animationEndEvent = function () {
  var testEl = document.createElement('div');
  var transEndEventNames = {
    'WebkitAnimation': 'webkitAnimationEnd',
    'OAnimation': 'oAnimationEnd oanimationend',
    'animation': 'animationend'
  };
  for (var i in transEndEventNames) {
    if (transEndEventNames.hasOwnProperty(i) && testEl.style[i] !== undefined) {
      return transEndEventNames[i];
    }
  }

  return false;
}();

// Reset previous window keydown handler and focued element
var resetPrevState = function resetPrevState() {
  window.onkeydown = states.previousWindowKeyDown;
  if (states.previousActiveElement && states.previousActiveElement.focus) {
    var x = window.scrollX;
    var y = window.scrollY;
    states.previousActiveElement.focus();
    if (x && y) {
      // IE has no scrollX/scrollY support
      window.scrollTo(x, y);
    }
  }
};

// Measure width of scrollbar
// https://github.com/twbs/bootstrap/blob/master/js/modal.js#L279-L286
var measureScrollbar = function measureScrollbar() {
  var supportsTouch = 'ontouchstart' in window || navigator.msMaxTouchPoints;
  if (supportsTouch) {
    return 0;
  }
  var scrollDiv = document.createElement('div');
  scrollDiv.style.width = '50px';
  scrollDiv.style.height = '50px';
  scrollDiv.style.overflow = 'scroll';
  document.body.appendChild(scrollDiv);
  var scrollbarWidth = scrollDiv.offsetWidth - scrollDiv.clientWidth;
  document.body.removeChild(scrollDiv);
  return scrollbarWidth;
};

// JavaScript Debounce Function
// Simplivied version of https://davidwalsh.name/javascript-debounce-function
var debounce = function debounce(func, wait) {
  var timeout = void 0;
  return function () {
    var later = function later() {
      timeout = null;
      func();
    };
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
  };
};

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) {
  return typeof obj;
} : function (obj) {
  return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
};





var asyncGenerator = function () {
  function AwaitValue(value) {
    this.value = value;
  }

  function AsyncGenerator(gen) {
    var front, back;

    function send(key, arg) {
      return new Promise(function (resolve, reject) {
        var request = {
          key: key,
          arg: arg,
          resolve: resolve,
          reject: reject,
          next: null
        };

        if (back) {
          back = back.next = request;
        } else {
          front = back = request;
          resume(key, arg);
        }
      });
    }

    function resume(key, arg) {
      try {
        var result = gen[key](arg);
        var value = result.value;

        if (value instanceof AwaitValue) {
          Promise.resolve(value.value).then(function (arg) {
            resume("next", arg);
          }, function (arg) {
            resume("throw", arg);
          });
        } else {
          settle(result.done ? "return" : "normal", result.value);
        }
      } catch (err) {
        settle("throw", err);
      }
    }

    function settle(type, value) {
      switch (type) {
        case "return":
          front.resolve({
            value: value,
            done: true
          });
          break;

        case "throw":
          front.reject(value);
          break;

        default:
          front.resolve({
            value: value,
            done: false
          });
          break;
      }

      front = front.next;

      if (front) {
        resume(front.key, front.arg);
      } else {
        back = null;
      }
    }

    this._invoke = send;

    if (typeof gen.return !== "function") {
      this.return = undefined;
    }
  }

  if (typeof Symbol === "function" && Symbol.asyncIterator) {
    AsyncGenerator.prototype[Symbol.asyncIterator] = function () {
      return this;
    };
  }

  AsyncGenerator.prototype.next = function (arg) {
    return this._invoke("next", arg);
  };

  AsyncGenerator.prototype.throw = function (arg) {
    return this._invoke("throw", arg);
  };

  AsyncGenerator.prototype.return = function (arg) {
    return this._invoke("return", arg);
  };

  return {
    wrap: function (fn) {
      return function () {
        return new AsyncGenerator(fn.apply(this, arguments));
      };
    },
    await: function (value) {
      return new AwaitValue(value);
    }
  };
}();















var _extends = Object.assign || function (target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i];

    for (var key in source) {
      if (Object.prototype.hasOwnProperty.call(source, key)) {
        target[key] = source[key];
      }
    }
  }

  return target;
};

var modalParams = _extends({}, defaultParams);
var queue = [];
var swal2Observer = void 0;

/*
 * Check for the existence of Promise
 * Hopefully to avoid many github issues
 */
if (typeof Promise === 'undefined') {
  error('This package requires a Promise library, please include a shim to enable it in this browser (See: https://github.com/limonte/sweetalert2/wiki/Migration-from-SweetAlert-to-SweetAlert2#1-ie-support)');
}

/*
 * Set type, text and actions on modal
 */
var setParameters = function setParameters(params) {
  // If a custom element is set, determine if it is valid
  if (typeof params.target === 'string' && !document.querySelector(params.target) || typeof params.target !== 'string' && !params.target.appendChild) {
    warn('Target parameter is not valid, defaulting to "body"');
    params.target = 'body';
  }

  var modal = void 0;
  var oldModal = getModal();
  var targetElement = typeof params.target === 'string' ? document.querySelector(params.target) : params.target;
  // If the model target has changed, refresh the modal
  if (oldModal && targetElement && oldModal.parentNode !== targetElement.parentNode) {
    modal = init(params);
  } else {
    modal = oldModal || init(params);
  }

  for (var param in params) {
    if (!sweetAlert.isValidParameter(param)) {
      warn('Unknown parameter "' + param + '"');
    }
  }

  // Set modal width
  modal.style.width = typeof params.width === 'number' ? params.width + 'px' : params.width;

  modal.style.padding = params.padding + 'px';
  modal.style.background = params.background;
  var successIconParts = modal.querySelectorAll('[class^=swal2-success-circular-line], .swal2-success-fix');
  for (var i = 0; i < successIconParts.length; i++) {
    successIconParts[i].style.background = params.background;
  }

  var title = getTitle();
  var content = getContent();
  var buttonsWrapper = getButtonsWrapper();
  var confirmButton = getConfirmButton();
  var cancelButton = getCancelButton();
  var closeButton = getCloseButton();

  // Title
  if (params.titleText) {
    title.innerText = params.titleText;
  } else {
    title.innerHTML = params.title.split('\n').join('<br />');
  }

  // Content
  if (params.text || params.html) {
    if (_typeof(params.html) === 'object') {
      content.innerHTML = '';
      if (0 in params.html) {
        for (var _i = 0; _i in params.html; _i++) {
          content.appendChild(params.html[_i].cloneNode(true));
        }
      } else {
        content.appendChild(params.html.cloneNode(true));
      }
    } else if (params.html) {
      content.innerHTML = params.html;
    } else if (params.text) {
      content.textContent = params.text;
    }
    show(content);
  } else {
    hide(content);
  }

  // Close button
  if (params.showCloseButton) {
    closeButton.setAttribute('aria-label', params.closeButtonAriaLabel);
    show(closeButton);
  } else {
    hide(closeButton);
  }

  // Custom Class
  modal.className = swalClasses.modal;
  if (params.customClass) {
    addClass(modal, params.customClass);
  }

  // Progress steps
  var progressStepsContainer = getProgressSteps();
  var currentProgressStep = parseInt(params.currentProgressStep === null ? sweetAlert.getQueueStep() : params.currentProgressStep, 10);
  if (params.progressSteps.length) {
    show(progressStepsContainer);
    empty(progressStepsContainer);
    if (currentProgressStep >= params.progressSteps.length) {
      warn('Invalid currentProgressStep parameter, it should be less than progressSteps.length ' + '(currentProgressStep like JS arrays starts from 0)');
    }
    params.progressSteps.forEach(function (step, index) {
      var circle = document.createElement('li');
      addClass(circle, swalClasses.progresscircle);
      circle.innerHTML = step;
      if (index === currentProgressStep) {
        addClass(circle, swalClasses.activeprogressstep);
      }
      progressStepsContainer.appendChild(circle);
      if (index !== params.progressSteps.length - 1) {
        var line = document.createElement('li');
        addClass(line, swalClasses.progressline);
        line.style.width = params.progressStepsDistance;
        progressStepsContainer.appendChild(line);
      }
    });
  } else {
    hide(progressStepsContainer);
  }

  // Icon
  var icons = getIcons();
  for (var _i2 = 0; _i2 < icons.length; _i2++) {
    hide(icons[_i2]);
  }
  if (params.type) {
    var validType = false;
    for (var iconType in iconTypes) {
      if (params.type === iconType) {
        validType = true;
        break;
      }
    }
    if (!validType) {
      error('Unknown alert type: ' + params.type);
      return false;
    }
    var icon = modal.querySelector('.' + swalClasses.icon + '.' + iconTypes[params.type]);
    show(icon);

    // Animate icon
    if (params.animation) {
      switch (params.type) {
        case 'success':
          addClass(icon, 'swal2-animate-success-icon');
          addClass(icon.querySelector('.swal2-success-line-tip'), 'swal2-animate-success-line-tip');
          addClass(icon.querySelector('.swal2-success-line-long'), 'swal2-animate-success-line-long');
          break;
        case 'error':
          addClass(icon, 'swal2-animate-error-icon');
          addClass(icon.querySelector('.swal2-x-mark'), 'swal2-animate-x-mark');
          break;
        default:
          break;
      }
    }
  }

  // Custom image
  var image = getImage();
  if (params.imageUrl) {
    image.setAttribute('src', params.imageUrl);
    image.setAttribute('alt', params.imageAlt);
    show(image);

    if (params.imageWidth) {
      image.setAttribute('width', params.imageWidth);
    } else {
      image.removeAttribute('width');
    }

    if (params.imageHeight) {
      image.setAttribute('height', params.imageHeight);
    } else {
      image.removeAttribute('height');
    }

    image.className = swalClasses.image;
    if (params.imageClass) {
      addClass(image, params.imageClass);
    }
  } else {
    hide(image);
  }

  // Cancel button
  if (params.showCancelButton) {
    cancelButton.style.display = 'inline-block';
  } else {
    hide(cancelButton);
  }

  // Confirm button
  if (params.showConfirmButton) {
    removeStyleProperty(confirmButton, 'display');
  } else {
    hide(confirmButton);
  }

  // Buttons wrapper
  if (!params.showConfirmButton && !params.showCancelButton) {
    hide(buttonsWrapper);
  } else {
    show(buttonsWrapper);
  }

  // Edit text on confirm and cancel buttons
  confirmButton.innerHTML = params.confirmButtonText;
  cancelButton.innerHTML = params.cancelButtonText;

  // ARIA labels for confirm and cancel buttons
  confirmButton.setAttribute('aria-label', params.confirmButtonAriaLabel);
  cancelButton.setAttribute('aria-label', params.cancelButtonAriaLabel);

  // Set buttons to selected background colors
  if (params.buttonsStyling) {
    confirmButton.style.backgroundColor = params.confirmButtonColor;
    cancelButton.style.backgroundColor = params.cancelButtonColor;
  }

  // Add buttons custom classes
  confirmButton.className = swalClasses.confirm;
  addClass(confirmButton, params.confirmButtonClass);
  cancelButton.className = swalClasses.cancel;
  addClass(cancelButton, params.cancelButtonClass);

  // Buttons styling
  if (params.buttonsStyling) {
    addClass(confirmButton, swalClasses.styled);
    addClass(cancelButton, swalClasses.styled);
  } else {
    removeClass(confirmButton, swalClasses.styled);
    removeClass(cancelButton, swalClasses.styled);

    confirmButton.style.backgroundColor = confirmButton.style.borderLeftColor = confirmButton.style.borderRightColor = '';
    cancelButton.style.backgroundColor = cancelButton.style.borderLeftColor = cancelButton.style.borderRightColor = '';
  }

  // CSS animation
  if (params.animation === true) {
    removeClass(modal, swalClasses.noanimation);
  } else {
    addClass(modal, swalClasses.noanimation);
  }

  // showLoaderOnConfirm && preConfirm
  if (params.showLoaderOnConfirm && !params.preConfirm) {
    warn('showLoaderOnConfirm is set to true, but preConfirm is not defined.\n' + 'showLoaderOnConfirm should be used together with preConfirm, see usage example:\n' + 'https://limonte.github.io/sweetalert2/#ajax-request');
  }
};

/*
 * Animations
 */
var openModal = function openModal(animation, onComplete) {
  var container = getContainer();
  var modal = getModal();

  if (animation) {
    addClass(modal, swalClasses.show);
    addClass(container, swalClasses.fade);
    removeClass(modal, swalClasses.hide);
  } else {
    removeClass(modal, swalClasses.fade);
  }
  show(modal);

  // scrolling is 'hidden' until animation is done, after that 'auto'
  container.style.overflowY = 'hidden';
  if (animationEndEvent && !hasClass(modal, swalClasses.noanimation)) {
    modal.addEventListener(animationEndEvent, function swalCloseEventFinished() {
      modal.removeEventListener(animationEndEvent, swalCloseEventFinished);
      container.style.overflowY = 'auto';
    });
  } else {
    container.style.overflowY = 'auto';
  }

  addClass(document.documentElement, swalClasses.shown);
  addClass(document.body, swalClasses.shown);
  addClass(container, swalClasses.shown);
  fixScrollbar();
  iOSfix();
  states.previousActiveElement = document.activeElement;
  if (onComplete !== null && typeof onComplete === 'function') {
    setTimeout(function () {
      onComplete(modal);
    });
  }
};

var fixScrollbar = function fixScrollbar() {
  // for queues, do not do this more than once
  if (states.previousBodyPadding !== null) {
    return;
  }
  // if the body has overflow
  if (document.body.scrollHeight > window.innerHeight) {
    // add padding so the content doesn't shift after removal of scrollbar
    states.previousBodyPadding = document.body.style.paddingRight;
    document.body.style.paddingRight = measureScrollbar() + 'px';
  }
};

var undoScrollbar = function undoScrollbar() {
  if (states.previousBodyPadding !== null) {
    document.body.style.paddingRight = states.previousBodyPadding;
    states.previousBodyPadding = null;
  }
};

// Fix iOS scrolling http://stackoverflow.com/q/39626302/1331425
var iOSfix = function iOSfix() {
  var iOS = /iPad|iPhone|iPod/.test(navigator.userAgent) && !window.MSStream;
  if (iOS && !hasClass(document.body, swalClasses.iosfix)) {
    var offset = document.body.scrollTop;
    document.body.style.top = offset * -1 + 'px';
    addClass(document.body, swalClasses.iosfix);
  }
};

var undoIOSfix = function undoIOSfix() {
  if (hasClass(document.body, swalClasses.iosfix)) {
    var offset = parseInt(document.body.style.top, 10);
    removeClass(document.body, swalClasses.iosfix);
    document.body.style.top = '';
    document.body.scrollTop = offset * -1;
  }
};

// SweetAlert entry point
var sweetAlert = function sweetAlert() {
  for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
    args[_key] = arguments[_key];
  }

  if (args[0] === undefined) {
    error('SweetAlert2 expects at least 1 attribute!');
    return false;
  }

  var params = _extends({}, modalParams);

  switch (_typeof(args[0])) {
    case 'string':
      params.title = args[0];
      params.html = args[1];
      params.type = args[2];

      break;

    case 'object':
      _extends(params, args[0]);
      params.extraParams = args[0].extraParams;

      if (params.input === 'email' && params.inputValidator === null) {
        params.inputValidator = function (email) {
          return new Promise(function (resolve, reject) {
            var emailRegex = /^[a-zA-Z0-9.+_-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
            if (emailRegex.test(email)) {
              resolve();
            } else {
              reject('Invalid email address');
            }
          });
        };
      }

      if (params.input === 'url' && params.inputValidator === null) {
        params.inputValidator = function (url) {
          return new Promise(function (resolve, reject) {
            // taken from https://stackoverflow.com/a/3809435/1331425
            var urlRegex = /^https?:\/\/(www\.)?[-a-zA-Z0-9@:%._+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_+.~#?&//=]*)$/;
            if (urlRegex.test(url)) {
              resolve();
            } else {
              reject('Invalid URL');
            }
          });
        };
      }
      break;

    default:
      error('Unexpected type of argument! Expected "string" or "object", got ' + _typeof(args[0]));
      return false;
  }

  setParameters(params);

  var container = getContainer();
  var modal = getModal();

  return new Promise(function (resolve, reject) {
    // Close on timer
    if (params.timer) {
      modal.timeout = setTimeout(function () {
        sweetAlert.closeModal(params.onClose);
        if (params.useRejections) {
          reject('timer');
        } else {
          resolve({ dismiss: 'timer' });
        }
      }, params.timer);
    }

    // Get input element by specified type or, if type isn't specified, by params.input
    var getInput = function getInput(inputType) {
      inputType = inputType || params.input;
      if (!inputType) {
        return null;
      }
      switch (inputType) {
        case 'select':
        case 'textarea':
        case 'file':
          return getChildByClass(modal, swalClasses[inputType]);
        case 'checkbox':
          return modal.querySelector('.' + swalClasses.checkbox + ' input');
        case 'radio':
          return modal.querySelector('.' + swalClasses.radio + ' input:checked') || modal.querySelector('.' + swalClasses.radio + ' input:first-child');
        case 'range':
          return modal.querySelector('.' + swalClasses.range + ' input');
        default:
          return getChildByClass(modal, swalClasses.input);
      }
    };

    // Get the value of the modal input
    var getInputValue = function getInputValue() {
      var input = getInput();
      if (!input) {
        return null;
      }
      switch (params.input) {
        case 'checkbox':
          return input.checked ? 1 : 0;
        case 'radio':
          return input.checked ? input.value : null;
        case 'file':
          return input.files.length ? input.files[0] : null;
        default:
          return params.inputAutoTrim ? input.value.trim() : input.value;
      }
    };

    // input autofocus
    if (params.input) {
      setTimeout(function () {
        var input = getInput();
        if (input) {
          focusInput(input);
        }
      }, 0);
    }

    var confirm = function confirm(value) {
      if (params.showLoaderOnConfirm) {
        sweetAlert.showLoading();
      }

      if (params.preConfirm) {
        params.preConfirm(value, params.extraParams).then(function (preConfirmValue) {
          sweetAlert.closeModal(params.onClose);
          resolve(preConfirmValue || value);
        }, function (error$$1) {
          sweetAlert.hideLoading();
          if (error$$1) {
            sweetAlert.showValidationError(error$$1);
          }
        });
      } else {
        sweetAlert.closeModal(params.onClose);
        if (params.useRejections) {
          resolve(value);
        } else {
          resolve({ value: value });
        }
      }
    };

    // Mouse interactions
    var onButtonEvent = function onButtonEvent(event) {
      var e = event || window.event;
      var target = e.target || e.srcElement;
      var confirmButton = getConfirmButton();
      var cancelButton = getCancelButton();
      var targetedConfirm = confirmButton && (confirmButton === target || confirmButton.contains(target));
      var targetedCancel = cancelButton && (cancelButton === target || cancelButton.contains(target));

      switch (e.type) {
        case 'mouseover':
        case 'mouseup':
          if (params.buttonsStyling) {
            if (targetedConfirm) {
              confirmButton.style.backgroundColor = colorLuminance(params.confirmButtonColor, -0.1);
            } else if (targetedCancel) {
              cancelButton.style.backgroundColor = colorLuminance(params.cancelButtonColor, -0.1);
            }
          }
          break;
        case 'mouseout':
          if (params.buttonsStyling) {
            if (targetedConfirm) {
              confirmButton.style.backgroundColor = params.confirmButtonColor;
            } else if (targetedCancel) {
              cancelButton.style.backgroundColor = params.cancelButtonColor;
            }
          }
          break;
        case 'mousedown':
          if (params.buttonsStyling) {
            if (targetedConfirm) {
              confirmButton.style.backgroundColor = colorLuminance(params.confirmButtonColor, -0.2);
            } else if (targetedCancel) {
              cancelButton.style.backgroundColor = colorLuminance(params.cancelButtonColor, -0.2);
            }
          }
          break;
        case 'click':
          // Clicked 'confirm'
          if (targetedConfirm && sweetAlert.isVisible()) {
            sweetAlert.disableButtons();
            if (params.input) {
              var inputValue = getInputValue();

              if (params.inputValidator) {
                sweetAlert.disableInput();
                params.inputValidator(inputValue, params.extraParams).then(function () {
                  sweetAlert.enableButtons();
                  sweetAlert.enableInput();
                  confirm(inputValue);
                }, function (error$$1) {
                  sweetAlert.enableButtons();
                  sweetAlert.enableInput();
                  if (error$$1) {
                    sweetAlert.showValidationError(error$$1);
                  }
                });
              } else {
                confirm(inputValue);
              }
            } else {
              confirm(true);
            }

            // Clicked 'cancel'
          } else if (targetedCancel && sweetAlert.isVisible()) {
            sweetAlert.disableButtons();
            sweetAlert.closeModal(params.onClose);
            if (params.useRejections) {
              reject('cancel');
            } else {
              resolve({ dismiss: 'cancel' });
            }
          }
          break;
        default:
      }
    };

    var buttons = modal.querySelectorAll('button');
    for (var i = 0; i < buttons.length; i++) {
      buttons[i].onclick = onButtonEvent;
      buttons[i].onmouseover = onButtonEvent;
      buttons[i].onmouseout = onButtonEvent;
      buttons[i].onmousedown = onButtonEvent;
    }

    // Closing modal by close button
    getCloseButton().onclick = function () {
      sweetAlert.closeModal(params.onClose);
      if (params.useRejections) {
        reject('close');
      } else {
        resolve({ dismiss: 'close' });
      }
    };

    // Closing modal by overlay click
    container.onclick = function (e) {
      if (e.target !== container) {
        return;
      }
      if (params.allowOutsideClick) {
        sweetAlert.closeModal(params.onClose);
        if (params.useRejections) {
          reject('overlay');
        } else {
          resolve({ dismiss: 'overlay' });
        }
      }
    };

    var buttonsWrapper = getButtonsWrapper();
    var confirmButton = getConfirmButton();
    var cancelButton = getCancelButton();

    // Reverse buttons (Confirm on the right side)
    if (params.reverseButtons) {
      confirmButton.parentNode.insertBefore(cancelButton, confirmButton);
    } else {
      confirmButton.parentNode.insertBefore(confirmButton, cancelButton);
    }

    // Focus handling
    var setFocus = function setFocus(index, increment) {
      var focusableElements = getFocusableElements(params.focusCancel);
      // search for visible elements and select the next possible match
      for (var _i3 = 0; _i3 < focusableElements.length; _i3++) {
        index = index + increment;

        // rollover to first item
        if (index === focusableElements.length) {
          index = 0;

          // go to last item
        } else if (index === -1) {
          index = focusableElements.length - 1;
        }

        // determine if element is visible
        var el = focusableElements[index];
        if (isVisible(el)) {
          return el.focus();
        }
      }
    };

    var handleKeyDown = function handleKeyDown(event) {
      var e = event || window.event;
      var keyCode = e.keyCode || e.which;

      if ([9, 13, 32, 27, 37, 38, 39, 40].indexOf(keyCode) === -1) {
        // Don't do work on keys we don't care about.
        return;
      }

      var targetElement = e.target || e.srcElement;

      var focusableElements = getFocusableElements(params.focusCancel);
      var btnIndex = -1; // Find the button - note, this is a nodelist, not an array.
      for (var _i4 = 0; _i4 < focusableElements.length; _i4++) {
        if (targetElement === focusableElements[_i4]) {
          btnIndex = _i4;
          break;
        }
      }

      // TAB
      if (keyCode === 9) {
        if (!e.shiftKey) {
          // Cycle to the next button
          setFocus(btnIndex, 1);
        } else {
          // Cycle to the prev button
          setFocus(btnIndex, -1);
        }
        e.stopPropagation();
        e.preventDefault();

        // ARROWS - switch focus between buttons
      } else if (keyCode === 37 || keyCode === 38 || keyCode === 39 || keyCode === 40) {
        // focus Cancel button if Confirm button is currently focused
        if (document.activeElement === confirmButton && isVisible(cancelButton)) {
          cancelButton.focus();
          // and vice versa
        } else if (document.activeElement === cancelButton && isVisible(confirmButton)) {
          confirmButton.focus();
        }

        // ESC
      } else if (keyCode === 27 && params.allowEscapeKey === true) {
        sweetAlert.closeModal(params.onClose);
        if (params.useRejections) {
          reject('esc');
        } else {
          resolve({ dismiss: 'esc' });
        }
      }
    };

    if (!window.onkeydown || window.onkeydown.toString() !== handleKeyDown.toString()) {
      states.previousWindowKeyDown = window.onkeydown;
      window.onkeydown = handleKeyDown;
    }

    // Loading state
    if (params.buttonsStyling) {
      confirmButton.style.borderLeftColor = params.confirmButtonColor;
      confirmButton.style.borderRightColor = params.confirmButtonColor;
    }

    /**
     * Show spinner instead of Confirm button and disable Cancel button
     */
    sweetAlert.hideLoading = sweetAlert.disableLoading = function () {
      if (!params.showConfirmButton) {
        hide(confirmButton);
        if (!params.showCancelButton) {
          hide(getButtonsWrapper());
        }
      }
      removeClass(buttonsWrapper, swalClasses.loading);
      removeClass(modal, swalClasses.loading);
      modal.removeAttribute('aria-busy');
      confirmButton.disabled = false;
      cancelButton.disabled = false;
    };

    sweetAlert.getTitle = function () {
      return getTitle();
    };
    sweetAlert.getContent = function () {
      return getContent();
    };
    sweetAlert.getInput = function () {
      return getInput();
    };
    sweetAlert.getImage = function () {
      return getImage();
    };
    sweetAlert.getButtonsWrapper = function () {
      return getButtonsWrapper();
    };
    sweetAlert.getConfirmButton = function () {
      return getConfirmButton();
    };
    sweetAlert.getCancelButton = function () {
      return getCancelButton();
    };

    sweetAlert.enableButtons = function () {
      confirmButton.disabled = false;
      cancelButton.disabled = false;
    };

    sweetAlert.disableButtons = function () {
      confirmButton.disabled = true;
      cancelButton.disabled = true;
    };

    sweetAlert.enableConfirmButton = function () {
      confirmButton.disabled = false;
    };

    sweetAlert.disableConfirmButton = function () {
      confirmButton.disabled = true;
    };

    sweetAlert.enableInput = function () {
      var input = getInput();
      if (!input) {
        return false;
      }
      if (input.type === 'radio') {
        var radiosContainer = input.parentNode.parentNode;
        var radios = radiosContainer.querySelectorAll('input');
        for (var _i5 = 0; _i5 < radios.length; _i5++) {
          radios[_i5].disabled = false;
        }
      } else {
        input.disabled = false;
      }
    };

    sweetAlert.disableInput = function () {
      var input = getInput();
      if (!input) {
        return false;
      }
      if (input && input.type === 'radio') {
        var radiosContainer = input.parentNode.parentNode;
        var radios = radiosContainer.querySelectorAll('input');
        for (var _i6 = 0; _i6 < radios.length; _i6++) {
          radios[_i6].disabled = true;
        }
      } else {
        input.disabled = true;
      }
    };

    // Set modal min-height to disable scrolling inside the modal
    sweetAlert.recalculateHeight = debounce(function () {
      var modal = getModal();
      if (!modal) {
        return;
      }
      var prevState = modal.style.display;
      modal.style.minHeight = '';
      show(modal);
      modal.style.minHeight = modal.scrollHeight + 1 + 'px';
      modal.style.display = prevState;
    }, 50);

    // Show block with validation error
    sweetAlert.showValidationError = function (error$$1) {
      var validationError = getValidationError();
      validationError.innerHTML = error$$1;
      show(validationError);

      var input = getInput();
      if (input) {
        input.setAttribute('aria-invalid', true);
        input.setAttribute('aria-describedBy', swalClasses.validationerror);
        focusInput(input);
        addClass(input, swalClasses.inputerror);
      }
    };

    // Hide block with validation error
    sweetAlert.resetValidationError = function () {
      var validationError = getValidationError();
      hide(validationError);
      sweetAlert.recalculateHeight();

      var input = getInput();
      if (input) {
        input.removeAttribute('aria-invalid');
        input.removeAttribute('aria-describedBy');
        removeClass(input, swalClasses.inputerror);
      }
    };

    sweetAlert.getProgressSteps = function () {
      return params.progressSteps;
    };

    sweetAlert.setProgressSteps = function (progressSteps) {
      params.progressSteps = progressSteps;
      setParameters(params);
    };

    sweetAlert.showProgressSteps = function () {
      show(getProgressSteps());
    };

    sweetAlert.hideProgressSteps = function () {
      hide(getProgressSteps());
    };

    sweetAlert.enableButtons();
    sweetAlert.hideLoading();
    sweetAlert.resetValidationError();

    // inputs
    var inputTypes = ['input', 'file', 'range', 'select', 'radio', 'checkbox', 'textarea'];
    var input = void 0;
    for (var _i7 = 0; _i7 < inputTypes.length; _i7++) {
      var inputClass = swalClasses[inputTypes[_i7]];
      var inputContainer = getChildByClass(modal, inputClass);
      input = getInput(inputTypes[_i7]);

      // set attributes
      if (input) {
        for (var j in input.attributes) {
          if (input.attributes.hasOwnProperty(j)) {
            var attrName = input.attributes[j].name;
            if (attrName !== 'type' && attrName !== 'value') {
              input.removeAttribute(attrName);
            }
          }
        }
        for (var attr in params.inputAttributes) {
          input.setAttribute(attr, params.inputAttributes[attr]);
        }
      }

      // set class
      inputContainer.className = inputClass;
      if (params.inputClass) {
        addClass(inputContainer, params.inputClass);
      }

      hide(inputContainer);
    }

    var populateInputOptions = void 0;
    switch (params.input) {
      case 'text':
      case 'email':
      case 'password':
      case 'number':
      case 'tel':
      case 'url':
        input = getChildByClass(modal, swalClasses.input);
        input.value = params.inputValue;
        input.placeholder = params.inputPlaceholder;
        input.type = params.input;
        show(input);
        break;
      case 'file':
        input = getChildByClass(modal, swalClasses.file);
        input.placeholder = params.inputPlaceholder;
        input.type = params.input;
        show(input);
        break;
      case 'range':
        var range = getChildByClass(modal, swalClasses.range);
        var rangeInput = range.querySelector('input');
        var rangeOutput = range.querySelector('output');
        rangeInput.value = params.inputValue;
        rangeInput.type = params.input;
        rangeOutput.value = params.inputValue;
        show(range);
        break;
      case 'select':
        var select = getChildByClass(modal, swalClasses.select);
        select.innerHTML = '';
        if (params.inputPlaceholder) {
          var placeholder = document.createElement('option');
          placeholder.innerHTML = params.inputPlaceholder;
          placeholder.value = '';
          placeholder.disabled = true;
          placeholder.selected = true;
          select.appendChild(placeholder);
        }
        populateInputOptions = function populateInputOptions(inputOptions) {
          for (var optionValue in inputOptions) {
            var option = document.createElement('option');
            option.value = optionValue;
            option.innerHTML = inputOptions[optionValue];
            if (params.inputValue === optionValue) {
              option.selected = true;
            }
            select.appendChild(option);
          }
          show(select);
          select.focus();
        };
        break;
      case 'radio':
        var radio = getChildByClass(modal, swalClasses.radio);
        radio.innerHTML = '';
        populateInputOptions = function populateInputOptions(inputOptions) {
          for (var radioValue in inputOptions) {
            var radioInput = document.createElement('input');
            var radioLabel = document.createElement('label');
            var radioLabelSpan = document.createElement('span');
            radioInput.type = 'radio';
            radioInput.name = swalClasses.radio;
            radioInput.value = radioValue;
            if (params.inputValue === radioValue) {
              radioInput.checked = true;
            }
            radioLabelSpan.innerHTML = inputOptions[radioValue];
            radioLabel.appendChild(radioInput);
            radioLabel.appendChild(radioLabelSpan);
            radioLabel.for = radioInput.id;
            radio.appendChild(radioLabel);
          }
          show(radio);
          var radios = radio.querySelectorAll('input');
          if (radios.length) {
            radios[0].focus();
          }
        };
        break;
      case 'checkbox':
        var checkbox = getChildByClass(modal, swalClasses.checkbox);
        var checkboxInput = getInput('checkbox');
        checkboxInput.type = 'checkbox';
        checkboxInput.value = 1;
        checkboxInput.id = swalClasses.checkbox;
        checkboxInput.checked = Boolean(params.inputValue);
        var label = checkbox.getElementsByTagName('span');
        if (label.length) {
          checkbox.removeChild(label[0]);
        }
        label = document.createElement('span');
        label.innerHTML = params.inputPlaceholder;
        checkbox.appendChild(label);
        show(checkbox);
        break;
      case 'textarea':
        var textarea = getChildByClass(modal, swalClasses.textarea);
        textarea.value = params.inputValue;
        textarea.placeholder = params.inputPlaceholder;
        show(textarea);
        break;
      case null:
        break;
      default:
        error('Unexpected type of input! Expected "text", "email", "password", "number", "tel", "select", "radio", "checkbox", "textarea", "file" or "url", got "' + params.input + '"');
        break;
    }

    if (params.input === 'select' || params.input === 'radio') {
      if (params.inputOptions instanceof Promise) {
        sweetAlert.showLoading();
        params.inputOptions.then(function (inputOptions) {
          sweetAlert.hideLoading();
          populateInputOptions(inputOptions);
        });
      } else if (_typeof(params.inputOptions) === 'object') {
        populateInputOptions(params.inputOptions);
      } else {
        error('Unexpected type of inputOptions! Expected object or Promise, got ' + _typeof(params.inputOptions));
      }
    }

    openModal(params.animation, params.onOpen);

    if (!params.allowEnterKey) {
      if (document.activeElement) {
        document.activeElement.blur();
      }
    } else if (params.focusCancel && isVisible(cancelButton)) {
      cancelButton.focus();
    } else if (params.focusConfirm && isVisible(confirmButton)) {
      confirmButton.focus();
    } else {
      setFocus(-1, 1);
    }

    // fix scroll
    getContainer().scrollTop = 0;

    // Observe changes inside the modal and adjust height
    if (typeof MutationObserver !== 'undefined' && !swal2Observer) {
      swal2Observer = new MutationObserver(sweetAlert.recalculateHeight);
      swal2Observer.observe(modal, { childList: true, characterData: true, subtree: true });
    }
  });
};

/*
 * Global function to determine if swal2 modal is shown
 */
sweetAlert.isVisible = function () {
  return !!getModal();
};

/*
 * Global function for chaining sweetAlert modals
 */
sweetAlert.queue = function (steps) {
  queue = steps;
  var resetQueue = function resetQueue() {
    queue = [];
    document.body.removeAttribute('data-swal2-queue-step');
  };
  var queueResult = [];
  return new Promise(function (resolve, reject) {
    (function step(i, callback) {
      if (i < queue.length) {
        document.body.setAttribute('data-swal2-queue-step', i);

        sweetAlert(queue[i]).then(function (result) {
          queueResult.push(result);
          step(i + 1, callback);
        }, function (dismiss) {
          resetQueue();
          reject(dismiss);
        });
      } else {
        resetQueue();
        resolve(queueResult);
      }
    })(0);
  });
};

/*
 * Global function for getting the index of current modal in queue
 */
sweetAlert.getQueueStep = function () {
  return document.body.getAttribute('data-swal2-queue-step');
};

/*
 * Global function for inserting a modal to the queue
 */
sweetAlert.insertQueueStep = function (step, index) {
  if (index && index < queue.length) {
    return queue.splice(index, 0, step);
  }
  return queue.push(step);
};

/*
 * Global function for deleting a modal from the queue
 */
sweetAlert.deleteQueueStep = function (index) {
  if (typeof queue[index] !== 'undefined') {
    queue.splice(index, 1);
  }
};

/*
 * Global function to close sweetAlert
 */
sweetAlert.close = sweetAlert.closeModal = function (onComplete) {
  var container = getContainer();
  var modal = getModal();
  if (!modal) {
    return;
  }
  removeClass(modal, swalClasses.show);
  addClass(modal, swalClasses.hide);
  clearTimeout(modal.timeout);

  resetPrevState();

  var removeModalAndResetState = function removeModalAndResetState() {
    if (container.parentNode) {
      container.parentNode.removeChild(container);
    }
    removeClass(document.documentElement, swalClasses.shown);
    removeClass(document.body, swalClasses.shown);
    undoScrollbar();
    undoIOSfix();
  };

  // If animation is supported, animate
  if (animationEndEvent && !hasClass(modal, swalClasses.noanimation)) {
    modal.addEventListener(animationEndEvent, function swalCloseEventFinished() {
      modal.removeEventListener(animationEndEvent, swalCloseEventFinished);
      if (hasClass(modal, swalClasses.hide)) {
        removeModalAndResetState();
      }
    });
  } else {
    // Otherwise, remove immediately
    removeModalAndResetState();
  }
  if (onComplete !== null && typeof onComplete === 'function') {
    setTimeout(function () {
      onComplete(modal);
    });
  }
};

/*
 * Global function to click 'Confirm' button
 */
sweetAlert.clickConfirm = function () {
  return getConfirmButton().click();
};

/*
 * Global function to click 'Cancel' button
 */
sweetAlert.clickCancel = function () {
  return getCancelButton().click();
};

/**
 * Show spinner instead of Confirm button and disable Cancel button
 */
sweetAlert.showLoading = sweetAlert.enableLoading = function () {
  var modal = getModal();
  if (!modal) {
    sweetAlert('');
  }
  modal = getModal();
  var buttonsWrapper = getButtonsWrapper();
  var confirmButton = getConfirmButton();
  var cancelButton = getCancelButton();

  show(buttonsWrapper);
  show(confirmButton, 'inline-block');
  addClass(buttonsWrapper, swalClasses.loading);
  addClass(modal, swalClasses.loading);
  confirmButton.disabled = true;
  cancelButton.disabled = true;

  modal.setAttribute('aria-busy', true);
  modal.focus();
};

/**
 * Is valid parameter
 * @param {String} paramName
 */
sweetAlert.isValidParameter = function (paramName) {
  return defaultParams.hasOwnProperty(paramName) || paramName === 'extraParams';
};

/**
* Set default params for each popup
* @param {Object} userParams
*/
sweetAlert.setDefaults = function (userParams) {
  if (!userParams || (typeof userParams === 'undefined' ? 'undefined' : _typeof(userParams)) !== 'object') {
    return error('the argument for setDefaults() is required and has to be a object');
  }

  for (var param in userParams) {
    if (!sweetAlert.isValidParameter(param)) {
      warn('Unknown parameter "' + param + '"');
      delete userParams[param];
    }
  }

  _extends(modalParams, userParams);
};

/**
 * Reset default params for each popup
 */
sweetAlert.resetDefaults = function () {
  modalParams = _extends({}, defaultParams);
};

sweetAlert.noop = function () {};

sweetAlert.version = '6.10.1';

sweetAlert.default = sweetAlert;

return sweetAlert;

})));
if (window.Sweetalert2) window.sweetAlert = window.swal = window.Sweetalert2;


/***/ })

});
//# sourceMappingURL=components.module.chunk.js.map