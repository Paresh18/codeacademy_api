function saveData(){    
    //Initialize our client
    var client = new Usergrid.Client({
        orgName:"Paresh18",
        appName:"sandbox"
    });
    
    //In our options object we set the type of the entitiy
    //and we also set any data that goes along with it
    //in this case it's the books title.
    var options = {
        type:"book",
        title:"Dune",
        author:"Frank Herbert"
    };
    
    //Let's create our entity, and display the results
    //of the creation in the html element with the id of response
    client.createEntity(options, function(error, book){
        if(error) {
            //error saving book
            $("#response").append("There was an error!");
        } else {
            //book saved successfully
            //Use book.get() here to get the properties from the object we just created!
            var uuid = book.get("uuid");
            var author =book.get("author"); 
            var title = book.get("title");
            $("#response").append("Book saved! Its uuid on our server is: "+uuid+"<br/>");
            $("#response").append("The book you saved was: "+title + "<br/>");
            $("#response").append("It's author is: "+author);
            
        }
    }); 
}