app.component("mainTable", {
	controller: function() {
		var ctrl = this;
		
		ctrl.arrayTabs = [true, false];
		
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