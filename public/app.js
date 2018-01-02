var phonecatApp = angular.module('phonecatApp', ['ngRoute','ngMaterial', 'ngMessages' ]);
angular.module('phonecatApp').config(['$locationProvider', '$routeProvider',
    function config($locationProvider, $routeProvider) {
      $locationProvider.hashPrefix('!');

      $routeProvider.when('/search', {
                 template: '<search-bar></search-bar>'
               }).otherwise('/search');
               // when('/button', {
               //   template: '<button-list></button-list>'
               // })

        // when('/phones/:phoneId', {
        //   template: '<phone-detail></phone-detail>'
        // }).
        // when('/phones/:datePicker', {
        //   template: '<date-picker></date-picker>'
        // }).
        // otherwise('/phones/:datePicker');
    }
  ]);
