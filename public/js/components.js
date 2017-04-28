app.component("mainTable", {
	controller: function() {
		let ctrl = this;
		
		ctrl.arrayTabs = [true, false];
		
		ctrl.formNames = ["Initial parameters", "Mensual data"];
		
		ctrl.appState = {};
		
		ctrl.saveForm = function(appState) {
			if (appState.validated == false) {
				ctrl.changeTab(appState.indexForm);
			}
			
			for (let key in appState) {
				if (key != 'validated' && key != 'indexForm') {
					ctrl.appState[key] = appState[key];
				}
			}
			
			console.log(ctrl.appState);
		}
		
		ctrl.changeTab = index => {
			for (var i = 0; i<ctrl.arrayTabs.length; i++) {
				ctrl.arrayTabs[i] = false;
			}
			
			ctrl.arrayTabs[index] = true;
		}
		
		ctrl.nextTab = function() {
			let activeTab;
						
			for (var i = 0; i<ctrl.arrayTabs.length; i++) {
				if (ctrl.arrayTabs[i]) {
					activeTab = i;
				}
				ctrl.arrayTabs[i] = false;
			}
			ctrl.arrayTabs[activeTab + 1] = true;
		}
		
		ctrl.previousTab = function() {
			let activeTab;
			
			for (var i = 0; i<ctrl.arrayTabs.length; i++) {
				if (ctrl.arrayTabs[i]) {
					activeTab = i;
				}
				
				ctrl.arrayTabs[i] = false;
			}
			
			ctrl.arrayTabs[activeTab - 1] = true;
		}
		
	},
	templateUrl: 'html/componentsTemplates/mainTable.html',
});

app.component('firstForm', {
	bindings: {
		onTabChange: '&',
		ngShow: '<'
	},
	controller: function() {
		let ctrl = this;
		
		ctrl.year = new Date().getFullYear();
		ctrl.furnitureTypesLabel = 'Furniture types';
		ctrl.furnitureTypesOptions = [{name: 'Armchair', value: 1},
			{name: 'Wardrobe', value: 2},
			{name: 'Couch', value: 3}];
		
		ctrl.yearLabel = 'Year of purchase';
		
		ctrl.monthsLabel = 'Month of purchase';
		ctrl.monthsArray = [{name: 'January', value: 1},
			{name: 'February', value: 2},
			{name: 'March', value: 3},
			{name: 'April', value: 4},
			{name: 'May', value: 5},
			{name: 'June', value: 6},
			{name: 'July', value: 7},
			{name: 'August', value: 8},
			{name: 'September', value: 9},
			{name: 'October', value: 10},
			{name: 'November', value: 11},
			{name: 'December', value: 12}];
		
		ctrl.coinsLabel = 'Coin';
		ctrl.coinsArray = [{name: 'Dollar ($)', value: 1},
			{name: 'Euro (€)', value: 2},
			{name: 'Pound (£)', value: 3}]
		
		ctrl.intervalLabel = 'Interval of comparison';
		
		let errorsObj = {
				yearPurchase: 'Field Year of purchase has not been filled or has an incorrect value. Its value must be between 2012 and the current year.',
				interval: 'Field Interval of comparison has not been filled or has an incorrect value. Its value must be between 12 and 24.'
		}
		
		let checkForm = function(appState) {
			
			for (let key in appState) {
				if (appState[key] == undefined) {
					ctrl.errorValidation = true;
					ctrl.errorText = errorsObj[key];
					
					return false;
				}
			}
			
			ctrl.errorValidation = false;
			return true;
		}
		
		ctrl.$onChanges = function(changeObj) {
			let tabVisible = changeObj.ngShow;
			let appState = {
				yearPurchase: ctrl.yearPurchase,
				typeFurniture: ctrl.typeFurniture,
				monthPurchase: ctrl.monthPurchase,
				interval: ctrl.interval,
				coin: ctrl.coin,
				indexForm: 0,
			}
			
			if (tabVisible.previousValue == true && tabVisible.currentValue == false) {
				appState.validated = checkForm(appState);
				ctrl.onTabChange({appState: appState});
			}
		}
			
	},
	templateUrl: 'html/componentsTemplates/firstForm.html',
});

app.component('secondForm', {
	bindings: {
		onTabChange: '&',
		ngShow: '<'
	},
	controller: function() {
		let ctrl = this;
		
		ctrl.range = function(counter) {
			let rangeArray = [];
			
			while(rangeArray.length < counter) {
				rangeArray.push(rangeArray.length);
			}
			
			return rangeArray;
		}
		
		ctrl.getMonth = function(number) {
			let arrMonths = ['January', 'February', 'March', 'April', 'May', 'June',
				'July', 'August', 'September', 'October', 'November', 'December'];
			
			let date = new Date("January 1, 2012");
			
			date.setMonth(date.getMonth() + number);
			
			return (date.getYear() + 1900) + ' - ' + arrMonths[date.getMonth()];
		}
		
		ctrl.$onChanges = function(changeObj) {
			let tabVisible = changeObj.ngShow;
			
			if (tabVisible.previousValue == true && tabVisible.currentValue == false) {
				ctrl.onTabChange({appState: {
					antonio: 'antonio'
				}});
			}
		}
	},
	templateUrl: 'html/componentsTemplates/secondForm.html',
});

app.component('errorMessage', {
	bindings: {
		ngShow: '<',
		text: '<'
	},
	templateUrl: 'html/componentsTemplates/errorMessage.html'
})

app.component('selectComponent', {
	bindings: {
		label: '<',
		options: '<',
		ngModel: '='
	},
	controller: function() {
		let ctrl = this;
		
		ctrl.$onInit = function() {
			ctrl.election = ctrl.options[0];
			
			ctrl.ngModel = ctrl.election.value;
		}
		
		ctrl.$doCheck = function() {
			ctrl.ngModel = ctrl.election.value;
		}
	},
	templateUrl: 'html/componentsTemplates/selectComponent.html',
});

app.component('inputComponent', {
	bindings: {
		label: '<',
		type: '@',
		min: '@',
		max: '@',
		ngModel: '='
	},
	controller: function() {
		console.log(this);
		console.log(this.type);
	},
	templateUrl: 'html/componentsTemplates/inputComponent.html',
});