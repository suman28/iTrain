
angular.module('myApp', ['ngMaterial']);

angular.module('myApp').controller('AppCtrl');
angular.module('myApp').config(function($mdThemingProvider, $mdIconProvider) {
  
  //Extending Blue Palette
  var inboxBlue = $mdThemingProvider.extendPalette('blue', {'500': '3c80f6'});
  
  //Defining Inbox Blue Palette
  $mdThemingProvider.definePalette('inboxBlue', inboxBlue);
  
  
  //Application Theme
  $mdThemingProvider.theme('default')
					  .primaryPalette('inboxBlue')
					  .accentPalette("Teal")
					  .warnPalette("red");


  
});




