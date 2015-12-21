angular.module('app.routes', [])

.config(function($stateProvider, $urlRouterProvider) {

  // Ionic uses AngularUI Router which uses the concept of states
  // Learn more here: https://github.com/angular-ui/ui-router
  // Set up the various states which the app can be in.
  // Each state's controller can be found in controllers.js
  $stateProvider
    
      
        
    .state('buyer', {
      url: '/buyerLogin',
      templateUrl: 'templates/buyer.html',
      controller: 'buyerCtrl'
    })
        
      
    
      
        
    .state('seller', {
      url: '/sellerLogin',
      templateUrl: 'templates/seller.html',
      controller: 'sellerCtrl'
    })
        
      
    
      
        
    .state('login', {
      url: '/page6',
      templateUrl: 'templates/login.html',
      controller: 'loginCtrl'
    })
        
      
    
      
        
    .state('signup', {
      url: '/signup',
      templateUrl: 'templates/signup.html',
      controller: 'signupCtrl'
    })
        
      
    
      
        
    .state('menu.home', {
      url: '/buyerHome',
      views: {
        'side-menu23': {
          templateUrl: 'templates/home.html',
          controller: 'homeCtrl'
        }
      }
    })
        
      
    
      
        
    .state('menu.myOrders', {
      url: '/buyerOrders',
      views: {
        'side-menu23': {
          templateUrl: 'templates/myOrders.html',
          controller: 'myOrdersCtrl'
        }
      }
    })
        
      
    
      
    .state('menu', {
      url: '/buyerMenu',
      abstract:true,
      templateUrl: 'templates/menu.html'
    })
      
    ;

  // if none of the above states are matched, use this as the fallback
  $urlRouterProvider.otherwise('/page6');

});