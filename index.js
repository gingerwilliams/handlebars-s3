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


var template = document.getElementById('handlebars-demo').innerHTML;

var templateScript = Handlebars.compile(template);

$.getJSON("data.json", function(data){
    
}

// handlebars.registerHelper("printComponents", function(block) {
//     var components = "Components";
//     var item = '<div>';

//     for(var i=0; i < data.length; i++ ){
//         var id = data.indexOf(data[i]);
//         var ref = data[i].reference;
//         var link = ref.substr(ref.indexOf('.')+1);
        
//         if(ref.includes(components) === true){
            
//             item += '<li class="navigation_menu-item"><a class="navigation_menu-link" href="/components/' + id + '">' + link + '</a></li>';
//         }
//     }
//     return item += '</div>';
// });

// handlebars.registerHelper("printMarkup", function(block) {
//     var markupblocks = "Markup Blocks";
//     var item = '<div>';

//     for(var i=0; i < data.length; i++ ){
//         var id = data.indexOf(data[i]);
//         var ref = data[i].reference;
//         var link = ref.substr(ref.indexOf('.')+1);
        
//         if(ref.includes(markupblocks) === true){
            
//             item += '<li class="navigation_menu-item"><a class="navigation_menu-link" href="/markupblocks/' + id + '">' + link + '</a></li>';
//         }
//     }
//     return item += '</div>';
// });


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





