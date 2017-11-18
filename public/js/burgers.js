$(function(){
	$(".submit-btn").on("click", function(event){
		event.preventDefault();

		var newBurger = {
			name: $("#newMeat").val().trim(),
		};

		$.ajax("/api/burgers", {
			type: "POST",
			data: newBurger
		}).then(function(){
			console.log("created new burger");
			location.reload();
		});
	});
});