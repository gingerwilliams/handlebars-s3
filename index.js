//get query string parameter
function getParameterByName(name, url) {
    if (!url) url = window.location.href;
    name = name.replace(/[\[\]]/g, "\\$&");
    var regex = new RegExp("[?&]" + name + "(=([^&#]*)|&|#|$)"),
        results = regex.exec(url);
    if (!results) return null;
    if (!results[2]) return '';
    return decodeURIComponent(results[2].replace(/\+/g, " "));
}

//Custom Expression Helpers
Handlebars.registerHelper("formatName", function(property1, property2){
    return new Handlebars.SafeString("this reference number for <strong>" + property1 + "</strong> is <strong>" + property2 + "</strong>");
});

Handlebars.registerHelper("formatPhoneNumber", function(property){
    prop = String(property);
    return  "(" + prop.substring(0,3) + ") " + prop.substring(3,6) + "-" + prop.substring(6);
});

//Custom Block Helpers
Handlebars.registerHelper("makeBold", function(options){
    return new Handlebars.SafeString("<strong>" + options.fn(this) + "</strong>"); 
    //options.fn(this)
    //returns whatever appears in the starting and ending block
});

Handlebars.registerHelper("toLower", function(options){
    return options.fn(this).toLowerCase();
});
// Handlebars.registerPartial('myPartial', '{{name}}')


$(document).ready(function(){
    // var cast = {
        
    //     "employees": [
    //         {
    //             "name": "Ginger Williams",
    //             "title": "Front End Dev"
    //         },
    //         {
    //             "name": "Anna Benencio",
    //             "title": "UI Lead"
    //         },
    //         {
    //             "name": "Vinh Tran",
    //             "title": "Cloud Engineer",
    //             "location": "Sandy Spring, GA"         
    //         }
    //     ]
        
    // }
    var listTemplate = document.getElementById("list-template").innerHTML;
    
    var compiledListTemplate = Handlebars.compile(listTemplate);
    var componentId = getParameterByName("id");
    // console.log(componentId);
    $.getJSON("data.json", function(data){
        // console.log(data);
        // console.log(listTemplate);
        // console.log(compiledListTemplate(
        //     data
        // ));
        if(window.document.body.classList.contains('template-page')){
            console.log("component page");
            document.getElementById("list").innerHTML = compiledListTemplate(data.sections[componentId]);
        }else{
            document.getElementById("list").innerHTML = compiledListTemplate(data);
        }
        
    });

    
    
    
    
});





