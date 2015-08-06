function addLocationDataToYourStorage(){
    var client = new Usergrid.Client({
        //Initialize your client here
        orgName:"Paresh18",
        appName:"sandbox"
    });
    
    //An array of landmark objects with associated facts
    var landmarks = [
        {
            "type":"landmark",
            "landmark_name":"Statue of Liberty",
            "city":"New York City",
            "category":"statue",
            "fact":"A gift to the United States from the people of France.",
            "location":{
                "latitude":40.689244,
                "longitude":-74.044514
            }
        },
        {
            "type":"landmark",
            "landmark_name":"Golden Gate Bridge",
            "city":"San Francisco",
            "category":"bridge",
            "fact":"There are approximately 600,000 rivets in each tower.",
            "location":{
                "latitude":37.821257,
                "longitude":-122.478787
            }
        },
        {
            "type":"landmark",
            "landmark_name":"Spirit of Detroit",
            "city":"Detroit",
            "category":"statue",
            "fact":"It was commissioned in 1955 for a cost of $58,000.",
            "location":{
                "latitude":42.3293,
                "longitude":-83.0446
            }
        },
        {
            "type":"landmark",
            "landmark_name":"Ambassador Bridge",
            "city":"Detroit",
            "category":"bridge",
            "fact":"The bridge carries approximately 25% of trade between Canada and the United States.",
            "location":{
                "latitude":42.3119,
                "longitude":-83.0741
            }
        },
        {
            "type":"landmark",
            "landmark_name":"Renaissance Center",
            "city":"Detroit",
            "category":"skyscraper",
            "fact":"The first tower of the Renaissance Center opened on July 1, 1976.",
            "location":{
                "latitude":42.3290,
                "longitude":-83.0397
            }
        },
        {
            "type":"landmark",
            "landmark_name":"Mount Rushmore",
            "city":"Keystone",
            "category":"statue",
            "fact":"The memorial was iconically used as the location of the climactic chase scene in Alfred Hitchcock's 1959 movie North by Northwest.",
            "location":{
                "latitude":43.8789,
                "longitude":-103.4598
            }
        }
    ];
    
    for(var i = 0; i < landmarks.length; i++) {
        var landmark = landmarks[i];
        insertEntity(landmark);
    }
    
    //Here is our function that inserts the landmarks!
    function insertEntity(entity){
        client.createEntity(entity, function(error, myLandmark){
            if(error) {
                $("#response").append("Error inserting landmark!");
            } else {
                //Retrieve the landmark name here using get()
                var name =my_Landmark.get("landmark_name");
                $("#response").append("<li><strong>Inserted:</strong>"+name+"</li>");
            }
        });
    }
}