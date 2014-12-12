var work = {
	"jobs": [
		{
			"employer": "CompUSA",
			"title": "Account Manager",
			"location": "Metairie, La.",
			"dates": "1997-2000",
			"description": "Business Sales Account Manager"
		},

		{
			"employer": "AT&T",
			"title": "Client Tech Administrator",
			"location": "Baton Rouge, La.",
			"dates": "2000-present",
			"description": "Local IT Admin for Company-Owned Retail Stores"
		}
	]
}

var projects = {
	"projects": [
		{
			"title": "",
			"dates": "",
			"description": "",
			"images": ""
		},

		{
			"title": "",
			"dates": "",
			"description": "",
			"images": ""
		}	
	]
}

var bio = {
	"name": "Lee Hoyt",
	"role": "Web Designer",
	"welcomeMessage": "Welcome to my Darkness!",
	"contacts": {
		"mobile": "225-235-3702",
		"email": "leehoyt@bellsouth.net",
		"github": "hytlee72",
		"location": "Baton Rouge, La."
	},
	"biopic" : "images/me.jpg",

	"skills": [
		"awesomeness",
		"ninjakata master",
		"pinball wizard",
		"all-around badass"
		]
}

var education = {
	"schools": [
	  {
			"name": "Hammond High School",
			"location": "Hammond, La.",
			"degree": "Diploma",
			"dates": "1987-1990",
			"url": "http://www.tangischools.org/hhms"
		}
	],

	"onlineCourses": [
		{
			"title": "Front-End Web Design Nanodegree",
			"school": "Udacity",
			"dates": "11/2014-present",
			"url": "http://www.udacity.com"
		}
	]
}


var formattedRole = HTMLheaderRole.replace("%data%",
	bio.role);
var formattedName = HTMLheaderName.replace("%data%",
	bio.name);
var formattedBioPic = HTMLbioPic.replace("%data%",
	bio.biopic);
var formattedWelcome = HTMLWelcomeMsg.replace("%data%",
	bio.welcomeMessage);
var formattedMobile = HTMLmobile.replace("%data%",
	bio.contacts.mobile);
var formattedEmail = HTMLemail.replace("%data%",
	bio.contacts.email);
var formattedGithub = HTMLgithub.replace("%data%",
	bio.contacts.github);
var formattedLocation = HTMLlocation.replace("%data%",
	bio.contacts.location);
	
$("#header").prepend(
	formattedName,
	formattedRole);

$("#header").append(
	formattedBioPic,
	formattedWelcome);
$("#topContacts").append(
	formattedMobile,
	formattedEmail,
	formattedGithub,
	formattedLocation);

if(bio.skills.length > 0) { 

		$("#header").append(HTMLskillsStart);

		var skillcount=0;

		for(skill in bio.skills) {
		var formattedSkill = HTMLskills.replace("%data%",
			bio.skills[skillcount]);
		$("#skills").append(formattedSkill);
		skillcount = skillcount + 1;
	}
}


function displayWork() {
for(job in work.jobs) {
	$("#workExperience").append(HTMLworkStart);
	var formattedEmployer = HTMLworkEmployer.replace("%data%", 
		work.jobs[job].employer);
	var formattedTitle = HTMLworkTitle.replace("%data%",
		work.jobs[job].title);
	var formattedEmployerTitle = formattedEmployer + 
		formattedTitle;
	var formattedLocation = HTMLworkLocation.replace("%data%",
		work.jobs[job].location);
	var formattedDates = HTMLworkDates.replace("%data%",
		work.jobs[job].dates);
	var formattedDescription = HTMLworkDescription.replace("%data%",
		work.jobs[job].description);	
	$(".work-entry:last").append(
		formattedEmployerTitle,
		formattedLocation,
	   formattedDates,
	   formattedDescription);
	}
}

displayWork();
