var appState = {};

app.component("mainTable", {
	controller: function() {
		let ctrl = this;
		
		ctrl.test = function() {
			return 'Prueba'
		} 
		
		ctrl.arrayTabs = [true, false];
		
		ctrl.formNames = ["Initial parameters", "Mensual data"];
		
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
	controller: function() {
		let ctrl = this;
		
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
		
		ctrl.saveState = function() {
			appState.yearPurchase = ctrl.yearPurchase;
			appState.typeFurniture = ctrl.typeFurniture;
			appState.monthPurchase = ctrl.monthPurchase;
			appState.interval = ctrl.interval;
			appState.coin = ctrl.coin;
		}
	},
	templateUrl: 'html/componentsTemplates/firstForm.html',
});

app.component('secondForm', {
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
	},
	templateUrl: 'html/componentsTemplates/secondForm.html',
});

app.component('selectComponent', {
	bindings: {
		label: '<',
		options: '<',
	},
	controller: function() {
		let ctrl = this;
	},
	templateUrl: 'html/componentsTemplates/selectComponent.html',
});

app.component('inputComponent', {
	bindings: {
		label: '<',
		type: '@'
	},
	controller: function() {
		let ctrl = this;
	},
	templateUrl: 'html/componentsTemplates/inputComponent.html',
});