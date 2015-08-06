function seeFollowers(){
    var client = new Usergrid.Client({
        //Remember to intialize your client with proper credentials
		orgName:"Paresh18",
		appName:"sandbox"
	});
	
	client.getLoggedInUser(function(error, data, user){
        //Get the "followers" connection here!
		user.getConnections("followers", function(error, data, connections){
			for(var i = 0; i < connections.length; i++) {
				var connection = connections[i];
                //Use the .username property on the connection object to 
                //get the followers username.
				var username = connection.username;
                $("#response").append("<li>"+username+"</li>");
			}
		});
	});
}
