jQuery(function($) {'use strict',

	//Scroller
	$('.scrolling-navbar ul').onePageNav({
		currentClass: 'active',
	    changeHash: false,
	    scrollSpeed: 900,
	    scrollOffset: 0,
	    scrollThreshold: 0.3,
	    filter: ':not(.no-scroll)'
	});


		// {
		// 	'name':"University of Waterloo",
		// 	'departments':[
		// 		{
		// 			'name':"Systems Design Engineering",
		// 			'subsidyCount':13
		// 		},{
		// 			'name':"Electrical and Computer Engineering",
		// 			'subsidyCount':7
		// 		}
		// 	]
		// },

	//Subsidies data
	var schoolsSubsidyData = [
		{
			'name':"University of Toronto",
			'departments':[
				{
					'name':"Department of Mechanical and Industrial Engineering",
					'subsidyCount':25,
					'contact':'Jean Zu',
					'email':'zu@mie.utoronto.ca'
				},{
					'name':"Department of Computer Science",
					'subsidyCount':0,
					'contact':'Ravin Balakrishnan',
					'email':'chair@cs.toronto.edu'
				}
			]
		}
	];


	var schoolSelector = document.getElementById("schoolSelector");
	var departmentSelector = document.getElementById("departmentSelector");
	var selectedSchool;
	var selectedDepartment;

	var yourNameInput = document.getElementById("your-name-input");
	var projectNameInput = document.getElementById("project-name-input");
	var travelSubsidyRadio = document.getElementById("travel-subsidy-radio");



	//Populate the school selector
	for(var i = 0; i < schoolsSubsidyData.length; i++)
	{
		var newDomElement = document.createElement("option");
		newDomElement.text = schoolsSubsidyData[i].name;
		newDomElement.value = schoolsSubsidyData[i].name;
		schoolSelector.appendChild(newDomElement);
	}



	schoolSelector.onchange = function() { 

		//Store the selected school's data into a separate variable for easy access
		for(var i = 0; i < schoolsSubsidyData.length; i++)
		{
			if(schoolsSubsidyData[i].name == this.value)
				selectedSchool = schoolsSubsidyData[i];
		}

		//Show the departmentSelectorDiv
		$("#departmentSelectorDiv").css('display','block');

		//Clear the previous options in the department selector
		$("#subsidyUnavailable").css('display','none');
		$("#subsidyAvailable").css('display','none');

		while (departmentSelector.lastChild) {
			if( departmentSelector.lastChild.value == '' )
				break;
		    departmentSelector.removeChild(departmentSelector.lastChild);
		}

		//Populate the department selector with the selected school's data
		for(var i = 0; i < selectedSchool.departments.length; i++)
		{
			var newDomElement = document.createElement("option");
			newDomElement.text = selectedSchool.departments[i].name;
			newDomElement.value = selectedSchool.departments[i].name;
			departmentSelector.appendChild(newDomElement);
		}
	};



	departmentSelector.onchange = function() { 

		//Store the selected school's data into a separate variable for easy access
		for(var i = 0; i < selectedSchool.departments.length; i++)
		{
			if(selectedSchool.departments[i].name == this.value)
				selectedDepartment = selectedSchool.departments[i];
		}

		//Show the appropriate subsidy div		
		if( selectedDepartment.subsidyCount > 0 )
		{
			$('#subsidyCount').text(selectedDepartment.subsidyCount);
			$("#subsidyUnavailable").css('display','none');
			$("#subsidyAvailable").css('display','block');
		}
		else
		{
			$("#subsidyAvailable").css('display','none');
			$("#subsidyUnavailable").css('display','block');

			//Pre-fill e-mail with already known information
			$('#school-name-1').text(selectedSchool.name);
			$('#school-name-2').text(selectedSchool.name);
			$('#school-name-3').text(selectedSchool.name);
			$('#department-name-1').text(selectedDepartment.name);
			$('#department-name-2').text(selectedDepartment.name);
			$('#contact-name').text(selectedDepartment.contact);
		}
	};


	
	yourNameInput.oninput = function() {

		$('#your-name-1').text(yourNameInput.value);
		$('#your-name-2').text(yourNameInput.value);
	}
	


	projectNameInput.oninput = function() {

		if(projectNameInput.value == "")
			$('#maker-fair-sentence').css('display','none');
		else
		{
			$('#maker-fair-sentence').css('display','inline');
			$('#project-name').text(projectNameInput.value);
		}
	}
	

	travelSubsidyRadio.onchange = function() {

		if($("#travel-subsidy-radio :checked")[0].value == "true")
		{
			$('#travel-sentence').css('display','inline');
			$('#subsidy-type').css('display','inline');
		}
		else
		{
			$('#travel-sentence').css('display','none');
			$('#subsidy-type').css('display','none');

		}
	}



});

