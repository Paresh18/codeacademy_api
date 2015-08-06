function iterateResults(){
    var client = new Usergrid.Client({
        //Initialize your client
        orgName:"Paresh18",
        appName:"sandbox"
    });
    
    //Setup your options object here. Remember to put your book's 
    //author in the query!
    var options = {
        type:"book",
        qs: {"ql":"where author = 'Frank Herbert'"}
    };
    
    //Here is where we'll process the results of the query.
    client.createCollection(options, function(error, books){
        while(books.hasNextEntity()) {
            //Put your call to .getNextEntity() below.
            var book = books;
            books.getNextEntity();
            book.get("title");
            //Get the book's title here!
            var title =
            $("#response").append("<li>"+title+"</li>");
        }
    
    });
    
}