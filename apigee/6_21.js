function queryAppServices(){
    var client = new Usergrid.Client({
        orgName:"Paresh18",
        appName:"sandbox"
    });
    
    //Here is the name of your book
    var title = "Dune";
    
    //Setup the query options object
    var options = {
      type: "book",
      qs : {"ql": "where title = '"+title+"'"}
    };
    
    //Create collection will give back a collection of objects that
    //conform to your query.
    client.createCollection(options, function(error, books){
        if(error) {
            $("#response").append("Error");
        } else {
            //Get the first entity of the collection here.
            var firstBook = books.getFirstEntity();
            //Use the get() function to get the title of your book here
            var title = firstBook.get("title");
            //Use the get() function to get the uuid of your book here
            var uuid = firstBook.get("uuid");
            $("#response").append("Your book title is:"+title+" it's uuid is:"+uuid);
        }
    });
}