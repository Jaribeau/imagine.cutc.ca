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



	//Subsidies data
	var schoolsSubsidyData = [
		{
			'name':"University of Waterloo",
			'departments':[
				{
					'name':"Systems Design Engineering",
					'subsidyCount':13
				},{
					'name':"Electrical and Computer Engineering",
					'subsidyCount':7
				}
			]
		},
		{
			'name':"University of Toronto",
			'departments':[
				{
					'name':"Mechanical and Materials Engineering",
					'subsidyCount':66
				},{
					'name':"School of Computing",
					'subsidyCount':0
				}
			]
		}
	];


	var schoolSelector = document.getElementById("schoolSelector");
	var departmentSelector = document.getElementById("departmentSelector");
	var selectedSchool;
	var selectedDepartment;

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
		}

		//If it does, show google form


		//If not, show e-mail generator
	};




});

