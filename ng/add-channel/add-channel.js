angular.module('tc').directive('addChannel', ['settings', function(settings) {

	function link(scope) {
		scope.value = '';
		
		scope.keypress = function(event) {
			if (event.which === 13) {
				if (scope.value.trim().length) {
					settings.channels.push(scope.value);
					scope.value = '';
				} 
				// TODO give user feedback if invalid, but only on enter
			}
		};
	}

	return {
		restrict: 'E',
		templateUrl: 'ng/add-channel/add-channel.html',
		link: link
	}
}]);