function signupUser(){
    var client = new Usergrid.Client({
        //Don't forget to intialize the SDK with the correct orgName!
        orgName:"Paresh18",
        appName:"sandbox"
    });
    
    //Set a username
    var username = "Rohan18";
    
    //Set a password
    var password = "12345678";
    
    //Set an email
    var email = "monchy1990@gmail.com";
    
    //Set a name
    var name = "Rohan";
    
    //Call signup() below!
    client.signup(username, password, email, name, function(error, user){
        if(error) {
            $("#error").append("There was an error");
        } else {
            //Get the username property from user
            var username = user.get("username");
            //Get the picture property from user
            var picture =user.get("picture");
            $("#profilePicture").append("<img src='"+picture+"' />");
            $("#username").append("Your username:"+username);
        }  
    });
}