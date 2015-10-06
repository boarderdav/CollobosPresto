"use strict";angular.module("collobosApp",["angulartics","angulartics.google.analytics","angular-carousel","angular-loading-bar","matchMedia","slick","mgcrea.ngStrap.modal","mgcrea.ngStrap.popover","ngAnimate","ngRoute","ngSanitize","ngTouch","toastr","ui.bootstrap.tpls","ui.bootstrap.progressbar","ui.bootstrap.tabs","ui.bootstrap.accordion","adaptive.detection"]).config(["$modalProvider",function(a){angular.extend(a.defaults,{container:"body",html:"true",placement:"center"})}]).config(["$popoverProvider",function(a){angular.extend(a.defaults,{animation:!1,container:"body",placement:"auto top",trigger:"hover"})}]).config(["$routeProvider","$compileProvider","$locationProvider",function(a,b,c){a.when("/",{templateUrl:"views/main.html",controller:"MainCtrl"}).when("/partners",{templateUrl:"views/partners.html",controller:"MainCtrl"}).when("/customers",{templateUrl:"views/customers.html",controller:"MainCtrl"}).when("/features",{templateUrl:"views/features.html",controller:"MainCtrl"}).when("/learn-more",{templateUrl:"views/learn-more.html",controller:"MainCtrl"}).when("/distributors",{templateUrl:"views/distributors.html",controller:"MainCtrl"}).otherwise({redirectTo:"/"}),c.html5Mode(!0),c.hashPrefix("!"),b.debugInfoEnabled(!1)}]),angular.module("collobosApp").controller("HeaderCtrl",["$scope","$location",function(a,b){a.isActive=function(a){return a===b.path()},a.isActiveRoot=function(a){var c;return"/"===a?(c=["/","/learn-more","/customers"],c.indexOf(b.path())>-1):"/partners"===a?(c=["/partners","/distributors"],c.indexOf(b.path())>-1):!1}}]),angular.module("collobosApp").controller("MainCtrl",["$scope","$detection",function(a,b){a.isAndroid=b.isAndroid(),a.isIos=b.isiOS(),a.status={linkDist:!0,linkDeal:!1}}]),$(document).ready(function(){$(document).on("click","#wrapper a",function(){$(".pure-toggle").click()})}),angular.module("collobosApp").run(["$templateCache",function(a){a.put("views/customers.html",'<div class="container main-content">\n\n    <div class="row hero b-0">\n        <div class="col-xs-12 col-md-8 col-md-offset-2 text-center">\n            <h3>Customers</h3>\n            <p class="large">Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium\n                doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore\n                veritatis et quasi architecto beatae vitae dicta sunt explicabo. </p>\n        </div>\n    </div>\n\n    <div class="row customers">\n        <div class="col-sm-3 col-xs-6 text-center">\n            <img class="img-responsive" src="images/customers/chrysler.png">\n        </div>\n        <div class="col-sm-3 col-xs-6 text-center">\n            <img class="img-responsive" src="images/customers/carnegie-mellon-university.png">\n        </div>\n        <div class="col-sm-3 col-xs-6 text-center">\n            <img class="img-responsive" src="images/customers/restoration-hardware.png">\n        </div>\n        <div class="col-sm-3 col-xs-6 text-center">\n            <img class="img-responsive" src="images/customers/hasbro.png">\n        </div>\n\n        <div class="col-sm-3 col-xs-6 text-center">\n            <img class="img-responsive" src="images/customers/queensland-parliament.png">\n        </div>\n        <div class="col-sm-3 col-xs-6 text-center">\n            <img class="img-responsive" src="images/customers/jcrew.png">\n        </div>\n        <div class="col-sm-3 col-xs-6 text-center">\n            <img class="img-responsive" src="images/customers/coldwell-banker.png">\n        </div>\n        <div class="col-sm-3 col-xs-6 text-center">\n            <img class="img-responsive" src="images/customers/lmu.png">\n        </div>\n\n        <div class="col-sm-3 col-xs-6 text-center">\n            <img class="img-responsive" src="images/customers/uf.png">\n        </div>\n        <div class="col-sm-3 col-xs-6 text-center">\n            <img class="img-responsive" src="images/customers/stormfront.png">\n        </div>\n        <div class="col-sm-3 col-xs-6 text-center">\n            <img class="img-responsive" src="images/customers/marc-jacobs.png">\n        </div>\n        <div class="col-sm-3 col-xs-6 text-center">\n            <img class="img-responsive" src="images/customers/berkshire-hathaway.png">\n        </div>\n\n        <div class="col-sm-3 col-xs-6 text-center">\n            <img class="img-responsive" src="images/customers/su-pirates.png">\n        </div>\n        <div class="col-sm-3 col-xs-6 text-center">\n            <img class="img-responsive" src="images/customers/church-community-builder.png">\n        </div>\n        <div class="col-sm-3 col-xs-6 text-center">\n            <img class="img-responsive" src="images/customers/cornelia-james.png">\n        </div>\n        <div class="col-sm-3 col-xs-6 text-center">\n            <img class="img-responsive" src="images/customers/kpf.png">\n        </div>\n\n        <div class="col-sm-3 col-xs-6 text-center">\n            <img class="img-responsive" src="images/customers/modernizing-medicine.png">\n        </div>\n        <div class="col-sm-3 col-xs-6 text-center">\n            <img class="img-responsive" src="images/customers/college-of-the-holy-cross.png">\n        </div>\n        <div class="col-sm-3 col-xs-6 text-center">\n            <img class="img-responsive" src="images/customers/zebra-technologies.png">\n        </div>\n        <div class="col-sm-3 col-xs-6 text-center">\n            <img class="img-responsive" src="images/customers/gilbane.png">\n        </div>\n    </div>\n\n</div>'),a.put("views/distributors.html",'<div class="container main-content">\n\n    <div class="row hero b-0">\n        <div class="col-xs-12 col-md-8 col-md-offset-2 text-center">\n            <h3>Distributors</h3>\n            <p class="large">Please contact a distributor below for pricing above 2500 users.</p>\n        </div>\n    </div>\n\n  <div class="row hero b-0 mb-30">\n    <div class="col-xs-12 col-md-4 text-left">\n      <accordion close-others="true">\n\n        <accordion-group is-open="status.linkDist">\n          <accordion-heading>\n            <h3>Distributor <i class="pull-right glyphicon" ng-class="{\'glyphicon-minus\': status.linkDist, \'glyphicon-plus\': !status.linkDist}"></i></h3>\n          </accordion-heading>\n          <ul class="accordion-menu list-unstyled">\n            <li><a href="app.0e8d2638.js">North America</a></li>\n            <li><a href="app.0e8d2638.js">Europe</a></li>\n            <li><a href="app.0e8d2638.js">Pacific</a></li>\n            <li><a href="app.0e8d2638.js">Australia</a></li>\n            <li><a href="app.0e8d2638.js">Africa</a></li>\n          </ul>\n        </accordion-group>\n\n        <accordion-group is-open="status.linkDeal">\n          <accordion-heading>\n            <h3>Dealer <i class="pull-right glyphicon" ng-class="{\'glyphicon-minus\': status.linkDeal, \'glyphicon-plus\': !status.linkDeal}"></i></h3>\n          </accordion-heading>\n          <ul class="accordion-menu list-unstyled">\n            <li><a href="app.0e8d2638.js">North America</a></li>\n            <li><a href="app.0e8d2638.js">Europe</a></li>\n            <li><a href="app.0e8d2638.js">Pacific</a></li>\n            <li><a href="app.0e8d2638.js">Australia</a></li>\n            <li><a href="app.0e8d2638.js">Africa</a></li>\n          </ul>\n        </accordion-group>\n\n      </accordion>\n    </div>\n    <div class="col-xs-12 col-md-8 text-center">\n      <div class="col-xs-12 col-md-6 text-left" ng-repeat="i in [1,2,3,4,5,6,7,8]">\n        <ul class="list-unstyled details">\n          <li>ABC Company Name Long</li>\n          <li><a href="app.0e8d2638.js">www.abccompanynamelong.com</a></li>\n          <li>+1.800.123.4567</li>\n          <li><a href="app.0e8d2638.js">sales@abccompanynamelong.com</a></li>\n        </ul>\n      </div>\n    </div>\n  </div>\n\n</div>'),a.put("views/features.html",'<div class="container main-content">\n    <!-- Example row of columns -->\n    <div class="row hero b-0">\n        <div class="col-xs-12 col-md-10 col-md-offset-1 text-center">\n            <h3>Features</h3>\n            <p class="large">Presto is a robust, cost eective solution for enterprise mobile printing. Unlike other solutions,\n                Presto integrates with a corporate network’s DNS and DHCP servers, freeing it from requiring\n                expensive hardware and additional software components to work. It is not unusual to nd a\n                single copy of Presto Enterprise powering the entire mobile printing services of a large\n                enterprise or university network.\n            </p>\n            <br>\n            <p class="large">\n                Presto is compatible with virtually all printers and copiers and supports iOS printing via\n                AirPrint and Chrome OS / Android printing via Google Cloud Print.\n            </p>\n            <br>\n            <p class="large">\n                For more in-depth technical documentation, please visit our Presto technical support page.\n            </p>\n            <br>\n        </div>\n    </div>\n\n    <div class="row">\n        <div class="col-xs-12">\n            <h3 class="text-center">Presto Enterprise Feature Comparison</h3>\n            <table class="table table-striped mt-40">\n               <thead>\n                   <tr>\n                       <th></th>\n                       <th>Presto</th>\n                       <th>Active Print</th>\n                       <th>Aero BG</th>\n                       <th>Breezy</th>\n                       <th>Cortado Thin Print</th>\n                       <th>EFI Print</th>\n                       <th>Everyone Print</th>\n                       <th>Lantronix</th>\n                       <th>Print Central Pro</th>\n                       <th>PrinterOn</th>\n                   </tr>\n               </thead>\n                <tbody>\n                    <tr>\n                        <td>In-Network Architecture</td>\n                        <td><span class="orange big-dot"></span></td>\n                        <td></td>\n                        <td><span class="gray big-dot"></span></td>\n                        <td></td>\n                        <td></td>\n                        <td><span class="gray big-dot"></span></td>\n                        <td><span class="gray big-dot"></span></td>\n                        <td><span class="gray big-dot"></span></td>\n                        <td><span class="gray big-dot"></span></td>\n                        <td></td>\n                    </tr>\n                    <tr>\n                        <td>AirPrint Compatible</td>\n                        <td><span class="orange big-dot"></span></td>\n                        <td></td>\n                        <td><span class="gray big-dot"></span></td>\n                        <td><span class="gray big-dot"></span></td>\n                        <td></td>\n                        <td><span class="gray big-dot"></span></td>\n                        <td></td>\n                        <td><span class="gray big-dot"></span></td>\n                        <td></td>\n                        <td><span class="gray big-dot"></span></td>\n                    </tr>\n                    <tr>\n                        <td>AirPrint Across Subnets</td>\n                        <td><span class="orange big-dot"></span></td>\n                        <td></td>\n                        <td><span class="gray big-dot"></span></td>\n                        <td><span class="gray big-dot"></span></td>\n                        <td><span class="gray big-dot"></span></td>\n                        <td><span class="gray big-dot"></span></td>\n                        <td><span class="gray big-dot"></span></td>\n                        <td></td>\n                        <td></td>\n                        <td><span class="gray big-dot"></span></td>\n                    </tr>\n                    <tr>\n                        <td><strong>Wide-Area AirPrint (uDNS)</strong></td>\n                        <td><span class="orange big-dot"></span></td>\n                        <td></td>\n                        <td></td>\n                        <td></td>\n                        <td></td>\n                        <td></td>\n                        <td></td>\n                        <td></td>\n                        <td></td>\n                        <td></td>\n                    </tr>\n                    <tr>\n                        <td><strong>Location Based Discovery</strong></td>\n                        <td><span class="orange big-dot"></span></td>\n                        <td></td>\n                        <td><span class="gray big-dot"></span></td>\n                        <td></td>\n                        <td><span class="gray big-dot"></span></td>\n                        <td></td>\n                        <td><span class="gray big-dot"></span></td>\n                        <td></td>\n                        <td></td>\n                        <td></td>\n                    </tr>\n                    <tr>\n                        <td>Google Cloud Print Compatible</td>\n                        <td><span class="orange big-dot"></span></td>\n                        <td></td>\n                        <td></td>\n                        <td></td>\n                        <td></td>\n                        <td></td>\n                        <td><span class="gray big-dot"></span></td>\n                        <td></td>\n                        <td></td>\n                        <td></td>\n                    </tr>\n                    <tr>\n                        <td>Supports AD Authentication</td>\n                        <td><span class="orange big-dot"></span></td>\n                        <td></td>\n                        <td></td>\n                        <td><span class="gray big-dot"></span></td>\n                        <td></td>\n                        <td><span class="gray big-dot"></span></td>\n                        <td><span class="gray big-dot"></span></td>\n                        <td><span class="gray big-dot"></span></td>\n                        <td></td>\n                        <td><span class="gray big-dot"></span></td>\n                    </tr>\n                    <tr>\n                        <td>Runs in the Background</td>\n                        <td><span class="orange big-dot"></span></td>\n                        <td></td>\n                        <td></td>\n                        <td><span class="gray big-dot"></span></td>\n                        <td><span class="gray big-dot"></span></td>\n                        <td><span class="gray big-dot"></span></td>\n                        <td><span class="gray big-dot"></span></td>\n                        <td><span class="gray big-dot"></span></td>\n                        <td><span class="gray big-dot"></span></td>\n                        <td><span class="gray big-dot"></span></td>\n                    </tr>\n                    <tr>\n                        <td>No Apps to Install</td>\n                        <td><span class="orange big-dot"></span></td>\n                        <td></td>\n                        <td><span class="gray big-dot"></span></td>\n                        <td></td>\n                        <td></td>\n                        <td></td>\n                        <td><span class="gray big-dot"></span></td>\n                        <td><span class="gray big-dot"></span></td>\n                        <td></td>\n                        <td></td>\n                    </tr>\n                    <tr>\n                        <td>Supports Native Printing Workow</td>\n                        <td><span class="orange big-dot"></span></td>\n                        <td></td>\n                        <td><span class="gray big-dot"></span></td>\n                        <td></td>\n                        <td></td>\n                        <td></td>\n                        <td><span class="gray big-dot"></span></td>\n                        <td><span class="gray big-dot"></span></td>\n                        <td></td>\n                        <td></td>\n                    </tr>\n                    <tr>\n                        <td>No Additional Hardware</td>\n                        <td><span class="orange big-dot"></span></td>\n                        <td><span class="gray big-dot"></span></td>\n                        <td><span class="gray big-dot"></span></td>\n                        <td><span class="gray big-dot"></span></td>\n                        <td><span class="gray big-dot"></span></td>\n                        <td></td>\n                        <td><span class="gray big-dot"></span></td>\n                        <td></td>\n                        <td><span class="gray big-dot"></span></td>\n                        <td><span class="gray big-dot"></span></td>\n                    </tr>\n                    <tr>\n                        <td>All device Supported File Types</td>\n                        <td><span class="orange big-dot"></span></td>\n                        <td></td>\n                        <td><span class="gray big-dot"></span></td>\n                        <td><span class="gray big-dot"></span></td>\n                        <td><span class="gray big-dot"></span></td>\n                        <td></td>\n                        <td><span class="gray big-dot"></span></td>\n                        <td></td>\n                        <td></td>\n                        <td></td>\n                    </tr>\n                    <tr>\n                        <td><strong>No Per-Device Fees</strong></td>\n                        <td><span class="orange big-dot"></span></td>\n                        <td></td>\n                        <td><span class="gray big-dot"></span></td>\n                        <td></td>\n                        <td><span class="gray big-dot"></span></td>\n                        <td></td>\n                        <td></td>\n                        <td><span class="gray big-dot"></span></td>\n                        <td></td>\n                        <td></td>\n                    </tr>\n                    <tr>\n                        <td>Simple Public Pricing Model</td>\n                        <td><span class="orange big-dot"></span></td>\n                        <td><span class="gray big-dot"></span></td>\n                        <td><span class="gray big-dot"></span></td>\n                        <td></td>\n                        <td><span class="gray big-dot"></span></td>\n                        <td><span class="gray big-dot"></span></td>\n                        <td></td>\n                        <td><span class="gray big-dot"></span></td>\n                        <td><span class="gray big-dot"></span></td>\n                        <td></td>\n                    </tr>\n                    <tr>\n                        <td>Pricing</td>\n                        <td>$1/day per server</td>\n                        <td>$9.99/year device</td>\n                        <td>Not Public</td>\n                        <td>Not Public</td>\n                        <td>$23.50/user per year</td>\n                        <td>$300 + per printer</td>\n                        <td>Not Public</td>\n                        <td>$199.95/box</td>\n                        <td>$7.99 per device</td>\n                        <td>Not Public</td>\n                    </tr>\n                </tbody>\n            </table>\n        </div>\n    </div>\n</div>'),a.put("views/learn-more.html",'<div class="container main-content">\n    <!-- Example row of columns -->\n    <div class="row hero-center hero">\n        <div class="col-xs-12 text-center">\n            <img class="img-responsive" src="images/icons/icon-enterprise-airprint.png">\n        </div>\n        <div class="col-xs-12 col-md-8 col-md-offset-2 text-center">\n            <h3>Enterprise AirPrint</h3>\n            <p class="large">Presto is a robust solution for enterprise mobile printing. Presto integrates with a\n                corporate network’s DNS servers leveraging one-of-a-kind cross platform\n                technology for client devices and print hardware manufacturers. Presto leverages\n                the same technology across iOS, OS X, Android, and Chrome OS. Presto is the\n                premier solution for mobile print with Magic Queue (pull printing), QR Code Scan\n                release, Printer Geolocation, Print Management Integration and more. Supported\n                Client Operating Systems: iOS 10.7+, Android 5.0+, Chrome 44+</p>\n        </div>\n    </div>\n\n    <div class="row hero-center hero">\n        <div class="col-xs-12 text-center">\n            <img class="img-responsive" src="images/icons/icon-enterprise-airplay.png">\n        </div>\n        <div class="col-xs-12 col-md-6 col-md-offset-3 text-center">\n            <h3>Enterprise AirPlay</h3>\n            <p class="large">With Presto, AirPlay is enterprise ready. You’ve always wanted to use AirPlay in\n                your corporate or campus network, but the enterprise administration and\n                management tools weren’t there to support it. With Presto, you can use the same\n                tools for managing Apple TV’s as printers on your network.</p>\n        </div>\n    </div>\n\n    <div class="row hero-center hero">\n        <div class="col-xs-12 text-center">\n            <img class="img-responsive" src="images/icons/icon-enterprise-web-services.png">\n        </div>\n        <div class="col-xs-12 col-md-6 col-md-offset-3 text-center">\n            <h3>Enterprise Web Services</h3>\n            <p class="large">Administrators can locate web services in the physical environment and make\n                services specic to on enterprise networks and allow administrators to manage\n                their visibility. Make specic les and websites visible via geolocation.</p>\n        </div>\n    </div>\n\n    <div class="row hero-center hero">\n        <div class="col-xs-12 text-center">\n            <img class="img-responsive" src="images/icons/icon-rulse-engine.png">\n        </div>\n        <div class="col-xs-12 col-md-6 col-md-offset-3 text-center">\n            <h3>Rules Engine</h3>\n            <p class="large">The Presto rules engine provides unprecedented capability for managing client\n                devices and network services. If you can imagine it, our rules engine can probably\n                do it. Manage services based on geolocation, groups, authorization, etc. If you are\n                authorized, you see services. If you’re not, you don’t.</p>\n        </div>\n    </div>\n\n    <div class="row hero-center hero mb-30">\n        <div class="col-xs-12 text-center">\n            <img class="img-responsive" src="images/icons/icon-geo-discovery.png">\n        </div>\n        <div class="col-xs-12 col-md-6 col-md-offset-3 text-center">\n            <h3>Geo Discovery</h3>\n            <p class="large">An industry rst, administrators can geolocate services and advertise them to\n                users based on their proximity to the advertised service.</p>\n        </div>\n    </div>\n\n</div>'),a.put("views/main.html",'<div class="header-slider">\n  <div class="row row-align">\n    <div class="col-xs-12 col-md-4 text-center">\n      <img src="images/header/presto-header-logo.png">\n      <h1>Print. AirPlay. Web Shares.</h1>\n      <h3>Enterprise - Education - Medical - Legal</h3>\n    </div>\n    <div class="col-xs-10 col-md-4 text-center mt-20">\n      <img class="xs-height" src="images/header/header-server-client-logos.png">\n    </div>\n  </div>\n</div>\n\n<div class="container main-content">\n\n  <div class="row hero row-align hero-content">\n    <div class="col-xs-12 col-sm-6 col-md-6 text-center">\n      <img class="img-responsive" src="images/hero/monitor-1x.jpg">\n    </div>\n    <div class="col-xs-12 col-sm-6 col-md-6 text-center">\n      <h1 class="mt-0">You can Rule</h1>\n      <p>Control discovery of network services based on:</p>\n      <p class="subtext">Type - Identity - Location - Meta-Data</p>\n      <p><a class="btn btn-default" href="#" role="button">LEARN MORE ></a></p>\n    </div>\n  </div>\n\n  <div class="row hero row-align hero-content">\n    <div class="col-xs-12 col-sm-6 col-md-6 text-center">\n      <h1 class="mt-0">Discover</h1>\n      <p>Services at your fingertip:</p>\n      <p class="subtext">Print. Airplay. Web.</p>\n      <p><a class="btn btn-default" href="#" role="button">LEARN MORE ></a></p>\n    </div>\n    <div class="col-xs-12 col-sm-6 col-md-6 text-center pull-right">\n      <img class="img-responsive" src="images/hero/mobile-1x.jpg">\n    </div>\n  </div>\n\n  <div class="row hero row-align hero-content">\n    <div class="col-xs-12 col-sm-6 col-md-6 text-center">\n      <img class="img-responsive" src="images/hero/vault-1x.jpg">\n    </div>\n    <div class="col-xs-12 col-sm-6 col-md-6 text-center">\n      <h1 class="mt-0">Protect</h1>\n      <p>All communication remains in-network:</p>\n      <p class="subtext">2048 bit encryption - No content in Cloud.</p>\n      <p><a class="btn btn-default" href="#" role="button">LEARN MORE ></a></p>\n    </div>\n  </div>\n</div>'),a.put("views/partners.html",'<div class="container main-content">\n\n    <div class="row hero b-0 mh-30-em">\n        <div class="col-xs-12 col-md-8 col-md-offset-2 text-center">\n            <h3>Partner With Us</h3>\n            <p class="large">We love partnering with innovative companies who provide cutting edge technology to\n              their customers. Interested in selling Presto? We’d like to speak with you.</p>\n            <p class="large"><a href="mailto:partners@collobos.com">partners@collobos.com</a></p>\n        </div>\n    </div>\n\n</div>'),a.put("views/shared/footer.html",'<div class="container">\n  <div class="footer-social">\n    <div class="row">\n      <div class="col-xs-12 col-md-6 col-md-offset-3 text-center">\n        <a href="http://twitter.com/collobos"><img class="" src="images/social-twitter.png"></a>\n        <a href="http://blog.collobos.com/"><img class="" src="images/social-rss.png"></a>\n      </div>\n    </div>\n  </div>\n</div>\n<div class="footer">\n  <div class="container-fluid">\n    <div class="row">\n      <div class="col-xs-12 col-md-6 col-md-offset-3 text-center">\n        <p>© 2015 Collobos. All rights reserved. Terms & Conditions · Privacy Policy</p>\n        <p>\n          Collobos, Collobos Software, Presto, FingerPrint are Trademarks of Collobos Software Inc.\n          iPhone, iPad, iOS, OSX, Bonjour, AirPrint are Trademarks of Apple Inc.\n          Android, Chrome, Google Cloud Print are Trademarks of Google Inc.\n          Other trademarks are owned by 3rd parties.\n        </p>\n      </div>\n    </div>\n  </div>\n</div>'),a.put("views/shared/header-mobile.html",'<div class="pure-container" data-effect="pure-effect-slide">\n  <input type="checkbox" id="pure-toggle-left" class="pure-toggle" data-toggle="left">\n  <label class="pure-toggle-label" for="pure-toggle-left" data-toggle-label="left">\n    <span class="nav-link uppercase text-thin">Menu</span>\n  </label>\n  <a class="trial-link" href="/"> <span class="nav-link text-orange uppercase text-thin">Trial</span></a>\n  <a class="trial-link dis-link" href="/distributors"> <span class="nav-link text-orange uppercase text-thin">Distributors</span></a>\n  <!--<a class="text-orange uppercase text-thin" href="/distributors">Distributors</a>-->\n  <nav class="navbar navbar-inverse navbar-fixed-left">\n  </nav>\n  <div class="pure-drawer" data-position="left">\n    <div ng-include="\'views/shared/menu.html\'"></div>\n  </div>\n  <label class="pure-overlay" for="pure-toggle-left" data-overlay="left"></label>\n</div>'),a.put("views/shared/header.html",'<div class="pure-container" data-effect="pure-effect-slide">\n  <input type="checkbox" id="pure-toggle-top" class="pure-toggle" data-toggle="top">\n  <label class="pure-toggle-label" for="pure-toggle-top" data-toggle-label="top">\n    <span class="nav-link uppercase text-thin">Menu</span>\n  </label>\n  <a class="trial-link" href="/"> <span class="nav-link text-orange uppercase text-thin">Trial</span></a>\n  <nav class="navbar navbar-inverse navbar-fixed-top">\n    <div class="container-nav">\n      <div id="navbar" class="navbar-collapse collapse">\n\n        <div class="brand text-center"> <a href="/"><img src="images/nav-logo.png"></a></div>\n        <ul class="nav navbar-nav navbar-right navbar-top">\n          <li><a class="text-orange uppercase text-thin" href="/distributors">Distributors</a></li>\n        </ul>\n      </div>\n    </div>\n  </nav>\n  <div class="pure-drawer" data-position="top">\n    <div ng-include="\'views/shared/menu.html\'"></div>\n  </div>\n  <label class="pure-overlay" for="pure-toggle-top" data-overlay="top"></label>\n</div>'),a.put("views/shared/menu.html",'<div class="container-fluid menu">\n  <div class="container">\n    <div id="wrapper" class="row">\n   <div id="wrapper1" class="row">\n   <div class="col-md-2 col-xs-12">\n        <h4 class="uppercase text-thin">Learn</h4>\n        <p><a href="/learn-more">Presto</a></p>\n        <p><a class="menu-item" href="/features">Features</a></p>\n        <p><a href="/">Videos</a></p>\n      </div>\n      <div class="col-md-2 col-xs-12">\n        <h4 class="uppercase text-thin">Docs</h4>\n        <p><a href="/">User Guides</a></p>\n        <p><a href="/">Trouble Shooting</a></p>\n        <p><a href="/">Sales Deck</a></p>\n      </div>\n      <div class="clearfix visible-xs"></div>\n      <div class="col-md-2 col-xs-12">\n        <h4 class="uppercase text-thin">Apps</h4>\n        <p><a href="https://itunes.apple.com/us/app/presto-connect/id1026233524?mt=8">iOS</a></p>\n        <p><a href="https://play.google.com/store/apps/details?id=com.collobos.presto&hl=en">Android</a></p>\n        <p><a href="https://chrome.google.com/webstore/detail/presto/cocbbcnadafhmobecjmagdmjjppbnmao">Chrome</a></p>\n      </div>\n      <div class="col-md-2 col-xs-12">\n        <h4 class="uppercase text-thin">Partners</h4>\n        <p><a href="/partners">Program</a></p>\n      </div>\n      <div class="clearfix visible-xs"></div>\n      <div class="col-md-2 col-xs-12">\n        <h4 class="uppercase text-thin">Support</h4>\n        <p><a href="http://presto-support.collobos.com/">Presto</a></p>\n        <p><a href="/">FingerPrint</a></p>\n      </div>\n      <div class="col-md-2 col-xs-12">\n        <h4 class="uppercase text-thin">Account</h4>\n        <p><a href="/">Login</a></p>\n      </div>\n    </div>\n  </div>\n</div>')}]);