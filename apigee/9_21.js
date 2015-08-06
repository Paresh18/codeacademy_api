function queryNearestLocations(){
    var client = new Usergrid.Client({
        //Initialize your client here.
        orgName:"Paresh18",
        appName:"sandbox"
    });
    
    //Setup your options object here.
    //Set the type to landmarks
    //Fill in the parameters of the query!
    var options = {
        type: "landmarks",
        qs: {"ql": "location within 200 of 37, -122"}
    };
    
    //Lets create a collection from our query results!
    client.createCollection(options, function(error, myLandmarks){
        if(error) {
           $("#response").append("An error occurred."); 
        } else {
            //Iterate through the results of our query.
            while(myLandmarks.hasNextEntity()) {
                //Use getNextEntity() here to get each result of our
                myLandmarks.getNextEntity();
                var landmark = myLandmarks;
                var name = landmark
                $("#response").append("<li>"+name+"</li>");
            }
        }
    });
}