function postUserActivity(){
    var client = new Usergrid.Client({
        //Initialize the client with the proper orgName!
        orgName:"Paresh18",
        appName:"sandbox"
    });
    
    //Get the currently logged in user
    client.getLoggedInUser(function(error, data, user){
        if(error) {
            $("#response").append("Error getting user!");
        } else {
            //Set your content here!
            var content = "Hello World";
            client.createUserActivityWithEntity(user, content, function(error, activity){
                if(error) {
                    $("#response").append("Error creating activity!");
                } else {
                    //Get the content of your activity here!
                    var content = get("content");
                    $("#response").append();
                }
            });
        }
    });
}