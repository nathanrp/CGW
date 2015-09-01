// 

// datepicker

cgw.directive('jqDatepicker',function($document){
	return function (scope, element, attrs) {
//		if(!Modernizr.inputtypes.date) {
			$(element).datepicker({
				showButtonPanel: true,
				changeMonth: true,
				changeYear: true,
				showOtherMonths: true, 
				dateFormat: 'mm/dd/yy'
			});
//		}
	}
});

// add shift

