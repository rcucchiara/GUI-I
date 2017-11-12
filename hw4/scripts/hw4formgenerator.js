/*
 *  Robert Cucchiara
 *  robert_cucchiara@student.uml.edu
 *  created: 11/12/2017 
 */

function getForm1() {
    var form = ('<form name="financing">'+
            '<fieldset>'+
                '<legend>Financing</legend>'+
                '<br>Discount: $'+
                '<input type="text" name="discount" placeholder="Dealer discount"><br><br>'+
                'Rebate: $'+
                '<input type="text" name="rebate" placeholder="Money back"><br><br>'+
                'Down payment:'+
                '<input type="text" name="down" placeholder="Percent of MSRP"> %<br><br>'+
                'Interest:'+
                '<input type="text" name="interest" placeholder="On monthly payment"> %<br><br>'+
            '</fieldset>'+
        '</form>');
    $('#finance_form').html(form);    
    return;
}

function getForm2() {
    var form = ('<form name="financing">' +
            '<fieldset>' +
                '<legend>Financing</legend>' +
                '<br>Down payment: ' +
                '<input type="text" name="down" placeholder="Percent of MSRP"> %<br><br>' +
                'Interest:' + 
                '<input type="text" name="interest" placeholder="On monthly payment"> %<br><br>' +
            '</fieldset>' +
        '</form>');
    $('#finance_form').html(form);
    return;
}

function getForm3() {
    var form = ('<form name="financing">'+
            '<fieldset>'+
                '<legend>Leasing</legend>'+
                '<br>Monthly payment: $'+
                '<input type="text" name="payment" placeholder="Base amount due"><br><br>'+
                'Capital cost reduction: '+
                '<input type="text" name="cap_cost" placeholder="i.e. down payment"> %<br><br>'+
                'Miles per year allowed: '+
                '<input type="text" name="mpy" placeholder="Mile cap"><br><br>'+
                'Charge per mile over: $'+
                '<input type="text" name="dpm" placeholder="Extra mile charge"><br><br>'+
            '</fieldset>'+
        '</form>');
    $('#finance_form').html(form);
    return;
}