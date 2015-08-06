function signInUser(){
    var client = new Usergrid.Client({
        //Initialize your client here
        orgName:"Paresh18",
        appName:"sandbox"
    });
    
    //Set a username
    var username = "Rohan18";
    
    //Set a password
    var password = "12345678";
    
    //Call the login function below
    client.login(username, password, function(error, data, user){
        if(error) {
            $("#error").append("An error occurred!");
        } else {
            //Here we want to get() the username property from user
            var username =user.get("username"); 
            //Here we want to get() the picture property from user
            var picture = user.get("picture");
            //Lets append them to the page.
            $("#profilePicture").append("<img src='"+picture+"' />");
            $("#username").append(username);
        }
    });
    
}