var usersList = [];

$(document).ready(function(){
	

	$.getJSON('assets/json/users.json',function(data){
		usersList = data;
		showListOfUsers();
	})

	function showListOfUsers(){
		var list = "";
		for (var i in usersList){
			list += "<li class='user-item' onclick='userOnClick("+i+")'>"+usersList[i].name+"</li>";
		}
		$("#list").append(list);
	}
});

function userOnClick(index){
	$("#bc-name").html(usersList[index].name);
	$("#bc-contact").html(usersList[index].email);
	$("#bc-company").html(usersList[index].company);
	$("#bc-phone").html(usersList[index].phone);
	$("#bc-title").html(usersList[index].title);

	$("#bc-contact").attr("href", "mailto:" + usersList[index].email);

}
