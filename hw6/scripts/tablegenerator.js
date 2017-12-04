/*
 *  Robert Cucchiara
 *  robert_cucchiara@student.uml.edu
 *  created: 11/10/2017  
 *  last updated: 12/3/2017
 */

//////// GLOBAL VARIABLES ////////
/* These are national averages found on government websites
 * https://www.eia.gov/dnav/pet/pet_pri_gnd_dcus_nus_m.htm  gas price was found here
 * https://www.fhwa.dot.gov/ohim/onh00/bar8.htm miles driven per year was found here
 * some of these might not be used and were for previous iterations of this assignment*/
var GAS_PER_GALLON = 2.62; 
var NUMBER_OF_MONTHS_TO_PAY_CAR = 24; // This is assuming a number because you cant really 
                                      // figure out the cost per month and per gallon and have them be
                                      // different numbers with only asking the user for price and mpg

function getTable() {

    var table;
    var msrpHigh = getInput("msrp_high");
    var msrpLow = getInput("msrp_low");
    var columns = getInput("msrp_interval");
    var mpgHigh = getInput("mpg_high");
    var mpgLow = getInput("mpg_low");
    var rows = getInput("mpg_interval");
    var columnScale, rowScale;

       // this fixes a crash that occured during these cases
    if(msrpHigh-msrpLow < 1 || mpgHigh-mpgLow < 1){
        return;
    }

    columnScale = (msrpHigh - msrpLow) / columns;
    rowScale = (mpgHigh - mpgLow) / rows;

    table = ('<table>' +
                '<tr>' +
                    '<th> Price/Fuel <br> consumption </th>');

    for(var msrpScale = msrpLow; msrpScale <= msrpHigh; msrpScale += columnScale){
        table += ('<th>' + '$' + msrpScale.toFixed(2) + '</th>');
    }
    table+='</tr>';

    for(var mpgScale = mpgLow; mpgScale <= mpgHigh; mpgScale += rowScale){
        table += ('<tr>' +
                    '<th>' + mpgScale.toFixed(2) + ' mpg</th>');

        for (var msrpScale = msrpLow; msrpScale <= msrpHigh; msrpScale += columnScale) {
            table += ('<td>$' + costMonth(msrpScale).toFixed(2) + ' month <br>' +
                    '$' + costMile(mpgScale).toFixed(2) + ' mile</td>');
        }

        table += '</tr>';
    }
    table += '</table>';

    $('#info_table').html(table);
    
    return;
}

function getInput(name) {
    var input = parseFloat(document.forms["user_input"][name].value);
    return input;
}

function costMonth(cost){
    return (cost / NUMBER_OF_MONTHS_TO_PAY_CAR);
}

function costMile(mpg){
    return GAS_PER_GALLON / mpg;
}


$("button").click(function(){
    if($("#data").valid()){
        getTable();
    }
});

function getTabTable(){
    
    var table;
    var msrpHigh = getInput("msrp_high");
    var msrpLow = getInput("msrp_low");
    var columns = getInput("msrp_interval");
    var mpgHigh = getInput("mpg_high");
    var mpgLow = getInput("mpg_low");
    var rows = getInput("mpg_interval");
    var columnScale, rowScale;

       // this fixes a crash that occured during these cases
    if(msrpHigh-msrpLow < 1 || mpgHigh-mpgLow < 1){
        return;
    }

    columnScale = (msrpHigh - msrpLow) / columns;
    rowScale = (mpgHigh - mpgLow) / rows;

    table = ('<table>' +
                '<tr>' +
                    '<th> Price/Fuel <br> consumption </th>');

    for(var msrpScale = msrpLow; msrpScale <= msrpHigh; msrpScale += columnScale){
        table += ('<th>' + '$' + msrpScale.toFixed(2) + '</th>');
    }
    table+='</tr>';

    for(var mpgScale = mpgLow; mpgScale <= mpgHigh; mpgScale += rowScale){
        table += ('<tr>' +
                    '<th>' + mpgScale.toFixed(2) + ' mpg</th>');

        for (var msrpScale = msrpLow; msrpScale <= msrpHigh; msrpScale += columnScale) {
            table += ('<td>$' + costMonth(msrpScale).toFixed(2) + ' month <br>' +
                    '$' + costMile(mpgScale).toFixed(2) + ' mile</td>');
        }

        table += '</tr>';
    }
    table += '</table>';
    
    return table;
}