var app = angular.module('myApp', ['ngMaterial']);

app.config(['$mdThemingProvider','$mdIconProvider', function($mdThemingProvider, $mdIconProvider) {
	
	  //Extending Blue Palette
	  var inboxBlue = $mdThemingProvider.extendPalette('blue', {'500': '3c80f6'});
	  
	  //Defining Inbox Blue Palette
	  $mdThemingProvider.definePalette('inboxBlue', inboxBlue);
	  
	  
	  //Application Theme
	  $mdThemingProvider.theme('default')
						  .primaryPalette('inboxBlue')
						  .accentPalette("pink")
						  .warnPalette("red");
    $mdIconProvider
        .iconSet('action', '../resources/iconsets/action-icons.svg', 24)
        .iconSet('alert', '../resources/iconsets/alert-icons.svg', 24)
        .iconSet('av', '../resources/iconsets/av-icons.svg', 24)
        .iconSet('communication', '../resources/iconsets/communication-icons.svg', 24)
        .iconSet('content', '../resources/iconsets/content-icons.svg', 24)
        .iconSet('device', '../resources/iconsets/device-icons.svg', 24)
        .iconSet('editor', '../resources/iconsets/editor-icons.svg', 24)
        .iconSet('file', '../resources/iconsets/file-icons.svg', 24)
        .iconSet('hardware', '../resources/iconsets/hardware-icons.svg', 24)
        .iconSet('icons', '../resources/iconsets/icons-icons.svg', 24)
        .iconSet('image', '../resources/iconsets/image-icons.svg', 24)
        .iconSet('maps', '../resources/iconsets/maps-icons.svg', 24)
        .iconSet('navigation', '../resources/iconsets/navigation-icons.svg', 24)
        .iconSet('notification', '../resources/iconsets/notification-icons.svg', 24)
        .iconSet('social', '../resources/iconsets/social-icons.svg', 24)
        .iconSet('toggle', '../resources/iconsets/toggle-icons.svg', 24);
    
    
    
}]);



app.controller('AppCtrl',
		function($scope, $timeout, $mdSidenav, $mdUtil, $log) {
			
			/**************************$mdSidenav********************************/
	
			$scope.toggleLeft = buildToggler('left');
			$scope.toggleRight = buildToggler('right');
			/**
			 * Build handler to open/close a SideNav; when animation finishes
			 * report completion in console
			 */
			function buildToggler(navID) {
				var debounceFn = $mdUtil.debounce(function() {
					$mdSidenav(navID).toggle().then(function() {
						$log.debug("toggle " + navID + " is done");
					});
				}, 300);
				return debounceFn;
			}
			
			/************************** /$mdSidenav********************************/
			
			
});
		
		
		
app.controller('LeftCtrl', function($scope, $timeout, $mdSidenav, $log) {
	$scope.close = function() {
		$mdSidenav('left').close().then(function() {
			$log.debug("close LEFT is done");
		});
	};
});

app.controller('RightCtrl', function($scope, $timeout, $mdSidenav, $log) {
	$scope.close = function() {
		$mdSidenav('right').close().then(function() {
			$log.debug("close RIGHT is done");
		});
	};
});




app.controller('ListCtrl', function($scope, $mdDialog) {
 
	
	  $scope.navigateTo = function(to, event) {
		    $mdDialog.show(
		      $mdDialog.alert()
		        .title('Title')
		        .content('Navigating to :' + to)
		        .ariaLabel('Navigation demo')
		        .ok('Ok')
		        .targetEvent(event)
		    );
	  };

	
});
