function createFollower(){
    var client = new Usergrid.Client({
        //Intialize your client with proper credentials!
        orgName:"Paresh18",
        appName:"sandbox"
    });
    
    //Setup your new user for your app (It's me!)
    var username = "mdobs";
    
    var password = "password";
    
    var email = "mdobson@apigee.com";
    
    var name = "Matt";
    //Sign the user up!
    client.login("Paresh18","12345678", function(error, data, loggedInUser){
        client.signup(username, password, email, name, function(error, user){
            //Connect the users with the "following" relationship here
            user.connect("followers", loggedInUser, function(error, data){
                if(error) {
                    //Display a message saying it didn't work
                    $("#response").append("Error happened!");
                } else {
                    //Display a success message
                    $("#response").append("Awesome! "+loggedInUser.get("username") + " is following "+user.get("username"));
                }    
            });     
        });
    });
}
