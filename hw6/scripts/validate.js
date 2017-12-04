/*
 *  Robert Cucchiara
 *  robert_cucchiara@student.uml.edu
 *  Created: 11/14/2017
 *  last edited: 12/2/2017
 *  This page holds the code for validating user input
 */


$(function(){
    
    /*
     * This checks if input is greater then zero.
     * This is used in the mpg and msrp fields
     */
    $.validator.addMethod('greaterThanZero', function(value, element){
        return value > 0;
    }, ' Please enter a number greater than 0');
    
    /*
     * This checks if the input is 2 or greater
     * This is used to check the row and column fields
     */
    $.validator.addMethod('greaterThanOne', function(value, element){
        return value > 1;
    }, ' Please enter a number greater than 1');
    
    /*
     * This checks if a value is less then another input
     * This is used to check mpg_low and msrp_low to ensure they are lower
     *  then the mpg_high and msrp_high, respectively.
     */
    $.validator.addMethod('lessThan', function(value, element, param){
       var target = $(param);
       return value < target.val();
    }, ' Please enter a number less than the corresponding high value');
    
    $.validator.addMethod('mpgUpperBound', function(value, element){
        return value > 50;
    }, ' Its 2017, lets be reasonable');
    
    $.validator.addMethod('msrpUpperBound', function(value, element){
        return value > 500000;
    }, ' That is probably to much for a vehicle');
    
    /*
     * This is going to handle the validation of the form the user fills out
     */
    $('#data').validate({
   
        rules: {
            msrp_high:{
                required: true,
                number: true,
                greaterThanZero: true,
                nowhitespace: true,
                msrpUpperBound: false
            },
            msrp_low:{
                required: true,
                number: true,
                greaterThanZero: true,
                nowhitespace: true,
                lessThan: "#msrp_high"
            },
            mpg_high:{
                required: true,
                number: true,
                greaterThanZero: true,
                nowhitespace: true,
                mpgUpperBound: false
            },
            mpg_low:{
                required: true,
                number: true,
                greaterThanZero: true,
                nowhitespace: true,
                lessThan: "#mpg_high"
            },
            msrp_interval:{
                required: true,
                number: true,
                greaterThanOne: true,
                nowhitespace: true
            },
            mpg_interval:{
                required: true,
                number: true,
                greaterThanOne: true,
                nowhitespace: true
            }
        },
        
        submitHandler: function(form){
            form.submit();
        }
        
    });    
});