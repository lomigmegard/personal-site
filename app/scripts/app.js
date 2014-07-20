'use strict';

angular.module('personalsiteApp', [
  'ui.router'
])

.run(
  [ '$rootScope', '$state', '$stateParams',
    function ($rootScope, $state, $stateParams) {
      $rootScope.$state = $state;
      $rootScope.$stateParams = $stateParams;
    }
  ]
)

.config(
  [ '$stateProvider', '$urlRouterProvider', '$locationProvider',
    function ($stateProvider, $urlRouterProvider, $locationProvider) {

      $urlRouterProvider

        .otherwise('/');


      $stateProvider

        .state('home', {
          url: '/',
          templateUrl: 'views/home.html'
        })

        .state('tour', {
          url: '/tour',
          templateUrl: 'views/tour.html'
        });

      $locationProvider.html5Mode(true);
    }
  ]
);
