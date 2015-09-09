// sidenav
$(document).ready(function() {

	$('body').on('click', '.nav-toggle', function(){
		$('body').toggleClass('open');
	});

});

// nav highlighting

cgw.controller('cgw-nav', ['$scope','$location', function($scope,$location) {

	$('.nav-mask, .close-nav-mask').bind('click', function() {
      $('body').removeClass('open');
    });

	$scope.getClass = function(path) {
		if ($location.path().substr(0, path.length) == path) {
			return "active"
		}
	}

}]);

// new client

cgw.controller('saved-client', ['$scope','$location', function($scope,$location) {

	$('body .new-client').show();
	$('.toast').addClass('burnt');
	setTimeout (
		function() {
			$('.toast').removeClass('burnt');
		}, 3000
	);

}]);

// adding, editing shifts

cgw.controller('shift', ['$scope','$location', function($scope,$location) {

	function repeats(a) {
		var b = $(a).val();
		if ( b=='month' ) {
			$('.repeat').show();
		} else {
			$('.repeat').hide();
		}
	}
	
	repeats($('#3'));

	$('#3').bind('change', function() {
		repeats($(this));
    });

}]);

// week/month

cgw.controller('schedule-view', ['$scope','$location', function($scope,$location) {

	$('.week-view').show();
	$('.month').hide();
	$('.view-week').addClass('selected');

	$('.view-week').bind('click', function() {
		$('.month').hide();
		$('.view-month').removeClass('selected');
		$('.week-view').show();
		$(this).addClass('selected');
		$('.toolbar .title').html('Oct 19 &ndash; 25');
    });
    
    $('.view-month').bind('click', function() {
		$('.week-view').hide();
		$('.view-week').removeClass('selected');
		$('.month').show();
		$(this).addClass('selected');
		$('.toolbar .title').html('October');
    });

}]);

// modals

cgw.controller('schedulesWhatCtrl', function($scope, $modal) {

	$scope.open = function (size) {

		var modalInstance = $modal.open({
			animation: true,
			templateUrl:'schedules/-what.html',
			controller: 'ModalInstanceCtrl',
			size: size
		});
	};

});

cgw.controller('cgViewerCtrl', function($scope, $modal) {

	$scope.open = function (size) {

		var modalInstance = $modal.open({
			animation: true,
			templateUrl:'clients/-caregivers-list.html',
			controller: 'ModalInstanceCtrl',
			size: size
		});

	};

});

// Please note that $modalInstance represents a modal window (instance) dependency.
// It is not the same as the $modal service used above.

cgw.controller('ModalInstanceCtrl', function ($scope, $modalInstance, $route) {

	$modalInstance.opened.then(function(){
		// try has class
	});

	$scope.ok = function () {
	};
	
	$scope.cancel = function () {
		$modalInstance.dismiss('cancel');
	};

});