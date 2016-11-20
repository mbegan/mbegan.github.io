/**
 * AngularJS Tutorial 1
 * @author Nick Kaye <nick.c.kaye@gmail.com>
 */

/**
 * Main AngularJS Web Application
 */
var app = angular.module('tutorialWebApp', [
  'ngRoute'
]);

/**
 * Configure the Routes
 */
app.config(['$routeProvider', function ($routeProvider) {
  $routeProvider
    // Home
    .when("/", {templateUrl: "partials/default.html", controller: "PageCtrl"})
    // Pages
    .when("/Login", {templateUrl: "partials/Login.html", controller: "PageCtrl"})
    .when("/Details", {templateUrl: "partials/Details.html", controller: "PageCtrl"})
    .when("/Support", {templateUrl: "partials/Support.html", controller: "PageCtrl"})
    .otherwise("/404", {templateUrl: "partials/404.html", controller: "PageCtrl"});
}]);

/**
 * Controls the Blog
 */
app.controller('BlogCtrl', function (/* $scope, $location, $http */) {
  console.log("Blog Controller reporting for duty.");
});

/**
 * Controls all other Pages
 */
app.controller('PageCtrl', function (/* $scope, $location, $http */) {
  console.log("Page Controller reporting for duty.");

  // Activates the Carousel
  $('.carousel').carousel({
    interval: 5000
  });

  // Activates Tooltips for Social Links
  $('.tooltip-social').tooltip({
    selector: "a[data-toggle=tooltip]"
  })
});

//Configuration variables that we'll use through the app
var zenUrl = "https://mattegantest.oktapreview.com/home/zendesk/0oa8tvgiuh93NlQ0W0h7/120";
var myClientId = "dSQSiGg1lEvo9f2c3iDc";
var myRedirectURL = "https://mbegan.github.io/demo";
var myOktaOrg = "https://mattegantest.oktapreview.com";