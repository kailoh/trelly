'use strict';

Office.initialize = function (reason) {
    $(document).ready(function () {
        console.log("Office.initialize");
        getTaskSuggestions();
    });
};


function getTaskSuggestions() {

	var entities = Office.context.mailbox.item.getEntities();
	var tasksArray = entities.taskSuggestions;
	var htmlText = "";

	htmlText += tasksArray[0].taskString;


// 		// Iterates through each instance of a task suggestion.
// 		for (var i = 0; i < tasksArray.length; i++) {	
//         // Gets the string that was identified as a task suggestion.
//         htmlText += "TaskString : <span>" + 
//         tasksArray[i].taskString + "</span><br/>";

//         // Gets an array of assignees for that instance of a task 
//         // suggestion. Each assignee is represented by an 
//         // EmailUser object.
//         var assigneesArray = tasksArray[i].assignees;
//         for (var j = 0; j < assigneesArray.length; j++) {
//         	htmlText += "Assignee : ( ";
//             // Gets the displayName property of the assignee.
//             htmlText += "displayName = <span>" + assigneesArray[j].displayName + 
//             "</span> , ";

//             // Gets the emailAddress property of each assignee.
//             // This is the SMTP address of the assignee.
//             htmlText += "emailAddress = <span>" + assigneesArray[j].emailAddress + 
//             "</span>";

//             htmlText += " )<br/>";
// }

// htmlText += "<hr/>";
// }

	document.getElementById("entities_box").innerHTML = htmlText;
}