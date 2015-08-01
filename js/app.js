'use strict';

var app = angular
  .module('FireBlogApp', [
    'ngAnimate',
    'ngResource',    
    'ngRoute',    
    'firebase'
  ])
  .config(function ($routeProvider) {
    $routeProvider      
      .when('/', {
        templateUrl: 'templates/home.html'        
      })
      .otherwise({
        redirectTo: '/'
      });
  });
