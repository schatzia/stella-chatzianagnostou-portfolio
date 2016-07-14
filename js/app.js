var projects = [
{
	title: "www.dimospaggaiou.gr",
	description: "The Official Website of Paggaio - Municipality, Greece",
	project_class: "karma",
	bgImg: "dimospaggaiou.jpg",
	url: "http://www.dimospaggaiou.gr",
	getCodeUrl: "http://www.dimospaggaiou.gr"
},
{
	title: "www.ee.teithe.gr",
	description: "The Official Website of Research Committee - Alexander Technological Educational Institute of Thessaloniki, Greece",
	project_class: "karma",
	bgImg: "teithe.jpg",
	url: "http://www.ee.teithe.gr",
	getCodeUrl: "http://www.ee.teithe.gr"
},
{
	title: "www.styleguide.gr",
	description: "Styleguide - An online fashion guide with fashion & beauty tips and tricks, product reviews and smart purchases proposals",
	project_class: "karma",
	bgImg: "styleguide.jpg",
	url: "http://www.styleguide.gr",
	getCodeUrl: "http://www.styleguide.gr"
},
{
	title: "Karma Landing Page Clone",
	description: "A clone of the landing page of a startup called Karma. The aim of the project is to use HTML, CSS and Developer Tools, in order to create a clone of a specific design.",
	project_class: "karma",
	bgImg: "karma-bg.jpg",
	url: "http://schatzia.github.io/fewd_landing_page_clone",
	getCodeUrl: "http://github.com/schatzia/fewd_landing_page_clone"
},
{
	title: "Hot or Cold Application",
	description: "An interactive quiz developed using  functional Javascript and JQuery. Each time the game starts a random number between 1 and 100 is selected and the user has to guess it. For each guess the application states how close or far the guess is from the hidden number and the number of guesses is calculated until the user guesses the  correct one.",
	project_class: "hot-cold",
	bgImg: "hot-cold-bg.jpg",
	url: "http://schatzia.github.io/hot-or-cold-starter",
	getCodeUrl: "http://github.com/schatzia/hot-or-cold-starter"
},
{
	title: "Streetfighter Application",
	description: "Streetfighter Application aimed to teach us how to manipulate the DOM in response to user events, using JQuery.",
	project_class: "streetfighter",
	bgImg: "streetfighter.gif",
	url: "http://schatzia.github.io/jquery-streetfighter/main.html",
	getCodeUrl: "http://github.com/schatzia/jquery-streetfighter"
},
{
	title: "Shopping List Application",
	description: "A Web Application to create a shopping list, add items to it, be able to check/uncheck items, remove items and clear the whole list.",
	project_class: "shopping-list",
	bgImg: "shopping-list-bg.jpg",
	url: "http://schatzia.github.io/shopping-list",
	getCodeUrl: "http://github.com/schatzia/shopping-list"
},
{
	title: "Movie Quiz Application",
	description: "A Quiz Application to develop our skills in object oriented programming. The user is walked through a series of movie questions, where each of them is an object inside a JSON array. For each response the user is informed whether he gave the correct answer or not and the correct answers are summed up at the end of the quiz.",
	project_class: "movie-quiz",
	bgImg: "movie-quiz-bg.jpg",
	url: "http://schatzia.github.io/quiz-app",
	getCodeUrl: "http://github.com/schatzia/quiz-app"
},
{
	title: "Job Finder API Hack",
	description: "An application developed to practice skills on APIs. The application makes calls and retrieves data from the GitHub Jobs API. The user can set a search term and/or location, and the application returns all jobs from GitHub Jobs that match their criteria.",
	project_class: "job-finder",
	bgImg: "job-finder-bg.jpg",
	url: "http://schatzia.github.io/api-hack",
	getCodeUrl: "http://github.com/schatzia/api-hack"
}
];

function showProject(item){
	var projectElem = $('.templates .project').clone();

	projectElem.addClass(item.project_class);

	projectTitle = projectElem.find('.row h2');
	projectTitle.text(item.title);

	var projectDescr = projectElem.find('.description');
	projectDescr.text(item.description);

	projectVisitUrl = projectElem.find('.row .visit');
	projectVisitUrl.attr('href', item.url);

	projectCodeUrl = projectElem.find('.row .getCode');
	projectCodeUrl.attr('href', item.getCodeUrl);

	 /*
	 $("div."+ item.project_class).css("{background-image","url('../images/" + item.bgImg +"')}");
	 */

	return projectElem;
}
$(function(){
	$.each(projects, function(index,item){
		var project = showProject(item);
		$('.projects .content').append(project);
	});
});