function loggedInUser(){
    var client = new Usergrid.Client({
        //Initialze your client here
        orgName:"Paresh18",
        appName:"sandbox"
    });
    
    //Get the currently logged in user here.
    client.getLoggedInUser(function(error, data, user){
        if(error) {
            $("#response").append("There was an error with retrieving your user!");
        } else {
            //get() the username and email of the currently logged in user
            var username = user.get("username")
            var email = user.get("email")
            //Set the username and email on the results page.
            $("#username").html(username);
            $("#email").html(email);
        }
        
        
        
    });
}