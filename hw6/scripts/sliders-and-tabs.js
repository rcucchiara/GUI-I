/*
 * Robert Cucchiara
 * created: 11/29/2017
 * last update: 12/3/2017
 * this will do stuff later, currently just an empty file
 */

/*
 * If the user changes any input in the form it will generate a new table
 */
$('input').on("change", function(){
    getTable();
});

/*
 * This function handles the slider for the miles per gallon entry field
 */
$(function(){
   $("#slider-mpg").slider({
       range: true,
       min: 1,
       max: 50,
       values: [1,50],
       slide: function(event, ui){
         $("#mpg_low").val(ui.values[0]);
         $("#mpg_high").val(ui.values[1]);
         getTable();
       }
   }); 
   $("#mpg_low").val($("#slider-mpg").slider("values", 0));
   $("#mpg_high").val($("#slider-mpg").slider("values", 1));
});

/*
 * updates the slider if value is changed in the form
 */
$("#mpg_high").on("change", function(){
   $("#slider-mpg").slider("values", 1, this.value);
});
$("#mpg_low").on("change", function(){
   $("#slider-mpg").slider("values", 0, this.value);
});

/*
 * This function handles slider for the price of the vehicle
 */
$(function(){
   $("#slider-msrp").slider({
       range: true,
       min: 1000,
       max: 50000,
       step: 100,
       values: [1000,50000],
       slide: function(event, ui){
         $("#msrp_low").val(ui.values[0]);
         $("#msrp_high").val(ui.values[1]);
         getTable();
       }
   }); 
   $("#msrp_low").val($("#slider-msrp").slider("values", 0));
   $("#msrp_high").val($("#slider-msrp").slider("values", 1));
});

/*
 * updates the slider if value is changed in the form
 */
$("#msrp_high").on("change", function(){
   $("#slider-msrp").slider("values", 1, this.value);
});
$("#msrp_low").on("change", function(){
   $("#slider-msrp").slider("values", 0, this.value);
});


/*
 * These functions handle the number of columns slider
 */
$(function(){
    $("#slider-column").slider({
        range: "min",
        min: 2,
        max: 20,
        step: 1,
        values: 2,
        slide: function(event, ui){
            $("#msrp_interval").val(ui.value);
            getTable();
        }
    });
    $("#msrp_interval").val($("#slider-column").slider("value"));
});
/*
 * updates the slider if value is changed in the form
 */
$("#msrp_interval").on("change", function(){
   $("#slider-column").slider("value", this.value);
});

/*
 * These functions handle the number of rows slider
 */
$(function(){
    $("#slider-row").slider({
        range: "min",
        min: 2,
        max: 20,
        step: 1,
        values: 2,
        slide: function(event, ui){
            $("#mpg_interval").val(ui.value);
            getTable();
        }
    });
    $("#mpg_interval").val($("#slider-row").slider("value"));
});
/*
 * updates the slider if value is changed in the form
 */
$("#mpg_interval").on("change", function(){
   $("#slider-row").slider("value", this.value);
});

////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////
////////////////////// Code below is tab related ///////////////////////////////

// This is a global variable used in keeping track of the number of tabs created
var TAB_COUNTER = 1;

$("#add_tab").click(function(){

    $("#data").validate();
    if($("#data").valid()){
        console.log("form was valid!");
    } else {
        window.alert("Error: could not create new tab, invalid data entry");
        return;
    }
    
    var tabContent = getTabTable();
    
    var tabTemplate = "<li><a href='#{href}'>#{label}</a> <span class='ui-icon ui-icon-close' role='presentation'>Remove Tab</span></li>";   
    var tabs = $("#tabs").tabs();
    
    
    
    
    // Name of the tab is-> MSRP: [$1000, $50000], MPG: [1, 50] 
    var tabTitle = "MSRP: [$" + document.forms["user_input"]["msrp_low"].value +
            ", $" + document.forms["user_input"]["msrp_high"].value + "], MPG: [" +
            document.forms["user_input"]["mpg_low"].value + ", " + 
            document.forms["user_input"]["mpg_high"].value + "]";
    
    var id = "tabs-" + TAB_COUNTER,
        li = $(tabTemplate.replace(/#\{href\}/g, "#" + id ).replace( /#\{label\}/g, tabTitle ));
        
    tabs.find(".ui-tabs-nav").append(li);
    tabs.append("<div id='" + id + "'><p>" + tabContent + "</p></div>");
    tabs.tabs("refresh");
    TAB_COUNTER++;
    
});

// deletes a tab when x is clicked on the tab
$("#tabs").on("click", "span.ui-icon-close", function(){
    var panelId = $( this ).closest( "li" ).remove().attr( "aria-controls" );
    $( "#" + panelId ).remove();
    $("#tabs").tabs( "refresh" );
});