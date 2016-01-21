'use strict';

// Call this function when the page loads (the "ready" event)
$(document).ready(function() {
	initializePage();
})

/*
 * Function that is called when the document is ready.
 */
function initializePage() {
	$("#testjs").click(function(e) {
		$(".jumbotron h1").text("Javascript has taken control");
    $("#testjs").text("Button is javascripting!");
    $(".jumbotron p").toggleClass("active");
	});

  $("a.thumbnail").click(projectClick);

	// Add any additional listeners here
	// example: $("#div-id").click(functionToCall);

  $("#submitBtn").click(updateProjects); 
}

function projectClick(e) {
  // Cancel the default action, which prevents the page from reloading
  e.preventDefault();

  // In an event listener, $(this) is the leement that fired the event
  var projectTitle = $(this).find("p").text();
  var jumbotronHeader = $(".jumbotron h1");
  jumbotronHeader.text(projectTitle);

  var containingProject = $(this).closest(".project");
  var description = $(containingProject).find(".project-description");
  // If description is empty, make a generic one and append it
  if (description.length == 0) {
       $(containingProject).append("<div class='project-description'><p>Description of the project.</p></div>");
  }
  // Toggle visibilitty
  $(description).toggleClass("hidden");
}

function updateProjects(e) {
  var project = $("#project").val();
  $(project).animate({
    width: $("#width").val()
  });

  //If there's no description, make a new hidden one and then change the text
  if ($(project + " .project-description").length == 0) {
       $(project).append("<div class='project-description hidden'><p> </p></div>");
  }
  var newText = $("#description").val();
  $(project + " .project-description").text(newText);
}