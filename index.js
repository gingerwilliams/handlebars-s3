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


//Partials
// Handlebars.registerPartial(
//     'navPartial', 
//     document.getElementById("nav-partial").innerHTML
// );


// $(document).ready(function(){
   
//     // var listTemplate = document.getElementById("list-template").innerHTML;
//     // var compiledListTemplate = Handlebars.compile(listTemplate);
//     var nav = document.getElementById("nav-template").innerHTML;
//     var compiledNavTemplate = Handlebars.compile(nav);

//     var componentTemplate = document.getElementById("component-template").innerHTML;
//     var compiledComponentTemplate = Handlebars.compile(componentTemplate);

//     var componentId = getParameterByName("id");
//     // console.log(componentId);
//     $.getJSON("data.json", function(data){
//         // console.log(data);
//         // console.log(listTemplate);
//         // console.log(compiledListTemplate(
//         //     data
//         // ));
//         document.getElementById("nav").innerHTML = compiledNavTemplate(data);
//         document.getElementById("component").innerHTML = compiledComponentTemplate(data.sections[componentId]);
//     }); 
// });





