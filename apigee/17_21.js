function viewMyFeed(){
    var client = new Usergrid.Client({
        //Intialize your client with the proper credentials
		orgName:"Paresh18",
		appName:"sandbox"
	});
	
    //Replace "USERNAME" with the user you want to get a feed for!
	client.getFeedForUser("Rohan18", function(error, data, activities){
		for(var i = 0; i < activities.length; i++) {
            var activity = activities[i];
            activity.content;
            //Use the .content property on the object to get the content data!   
            var content = 
            $("#response").append("<li>"+content+"</li>");
		}
	});
}