/*
 *  Robert Cucchiara
 *  robert_cucchiara@student.uml.edu
 *  created: 11/10/2017  
 */

//////// GLOBAL VARIABLES ////////
/* These are national averages found on government websites
 * https://www.eia.gov/dnav/pet/pet_pri_gnd_dcus_nus_m.htm  gas price was found here
 * https://www.fhwa.dot.gov/ohim/onh00/bar8.htm miles driven per year was found here
 * some of these might not be used and were for previous iterations of this assignment*/
var GAS_PER_GALLON = 2.62; 
var MILES_PER_YEAR = 16550;
var MONTHS = 12;
var MILES_PER_MONTH = MILES_PER_YEAR / MONTHS;
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
    
    if(isNaN(msrpHigh) || isNaN(msrpLow) ||isNaN(columns) ||
            isNaN(mpgHigh) ||isNaN(mpgLow) ||isNaN(rows)){
        table = ('<p>ERROR: One or more fields were wrong or missing</p>');
    } else if(msrpHigh <= 0 || msrpLow <= 0 || columns <= 0 ||
            mpgHigh <= 0 || mpgLow <= 0 || rows <= 0){
        table = ('<p>ERROR: Nothing is free in this world, sorry. please change all zeros and negatives<\p>');
    } else if(columns < 2 || rows < 2){
        table = ('<p>ERROR: You need at least two rows and columns</p>');
    } else if(msrpHigh < msrpLow) {
        table = ('<p>ERROR: Lowest price must be less than the highest price</p>');
    } else if(mpgHigh < mpgLow) {
        table = ('<p>ERROR: Lowest MPG must be less than the highest MPG</p>');
    } else {
        /* WE HAVE PASSED THROUGH ALL OF THE CHECKS AND PROCEED NORMALLY */
        
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
    }
    
    $('#info_table').html(table);
    
    return;
}

function getInput(name) {
    var input = parseFloat(document.forms["user_input"][name].value);
    return input;
}

/*
 * I am not really sure how to calculate this, the instructions imply you
 * only need mpg and vehicle price... this doesnt make any sense so I made
 * up a number. This is probably wrong but this is not my fault, the instructions
 * are vague and when I asked Hiam to clarify, he told me to read the prompt.  
 * When I told him I did he told me the answer is in there.
 */
function costMonth(cost){
    return (cost / NUMBER_OF_MONTHS_TO_PAY_CAR);
}

function costMile(mpg){
    return GAS_PER_GALLON / mpg;
}

/*
function costMonth(cost, mpg){
    var mpy = getInput("miles_a_year");
    var months = getInput("months");
    
    if(document.getElementById("opt1").checked){
        return costMonthOpt1(cost, mpg, mpy, months);
    }
    
    if(document.getElementById("opt2").checked){
        return costMonthOpt2(cost, mpg, mpy, months);
    }
    
    if(document.getElementById("opt3").checked){
        return costMonthOpt3(cost, mpg, mpy, months);
    }
     // return -1 as an error case, deal with this in a later assignment
    return -1;
}

function costMile(cost, mpg){
    var mpy = getInput("miles_a_year");
    var months = getInput("months");
    
    if(document.getElementById("opt1").checked){
        return costMileOpt1(cost, mpg, mpy, months);
    }
    
    if(document.getElementById("opt2").checked){
        return costMileOpt2(cost, mpg, mpy, months);
    }
    
    if(document.getElementById("opt3").checked){
        return costMileOpt3(cost, mpg, mpy, months);
    }
      // return -1 as an error case, deal with this in a later assignment
    return -1;
}
*/
/*
function costMonthOpt1(cost, mpg, mpy, months){
    var discount = parseFloat(document.forms["financing"]["discount"].value);
    var rebate = parseFloat(document.forms["financing"]["rebate"].value);
    var down = parseFloat(document.forms["financing"]["down"].value);
    var interest = parseFloat(document.forms["financing"]["interest"].value);
    var gasPerMonth = ((mpy / 12) / mpg) * GAS_PER_GALLON;
    
    
    down = down/100;
    interest = (interest / 100) +1;
    
    return (((((cost-discount-rebate-(cost*down)))/months)*interest) + gasPerMonth).toFixed(2);
}
function costMonthOpt2(cost, mpg, mpy, months){
    return 0;
}
function costMonthOpt3(cost, mpg, mpy, months){
    return 0;
}

function costMileOpt1(cost, mpg, mpy, months){
    return 0;
}
function costMileOpt2(cost, mpg, mpy, months){
    return 0;
}
function costMileOpt3(cost, mpg, mpy, months){
    return 0;
}
*/
