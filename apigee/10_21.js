function executeCompoundQuery(){
    var client = new Usergrid.Client({
        //Initialize your client here!
        orgName:"Paresh18",
        appName:"sandbox"
    });
    
    //Setup your options object here
    //Fill in the query type accordingly
    //Fill in the query parameters accordingly
    var options = {
        type:"landmarks",
        qs: {"ql": "where category = 'statue' and location within 1000  of 42.3314, -83.0458"}
    };
    
    //Here is where the query executes and puts the results on the screen
    client.createCollection(options, function(error, myLandmarks){
        if(error) {
            $("#response").append("An error occurred");
        } else {
            //Get the first landmark in the set using getFirstEntity()
            var landmark = myLandmarks;
            landmarks.getFirstEntity();
            //Retrieve it's name with get()
            
            var name = landmark.get("title");
            //Retrieve the fact about it with get()
            var fact = landmark.get("fact");
            
            //Append to the screen
            $("#name").append(name);
            $("#fact").append(fact);
        }
    
    });
}