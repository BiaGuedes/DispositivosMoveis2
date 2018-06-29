/*jshint browser:true */
/*global $ */(function()
{
 "use strict";
 /*
   hook up event handlers 
 */
 function register_event_handlers()
 {

    
        /* button  #btnZeros */
    $(document).on("click", "#btnZeros", function(evt)
    {
       txtNumeros.placeholder = txtNumeros.placeholder + 0;
         return false;
    });
    
        /* button  #btnremover */
    $(document).on("click", "#btnremover", function(evt)
    {
        /* your code goes here */
        var textoantigo = txtNumeros.placeholder;
        
        txtNumeros.placeholder = txtNumeros.replace(textoantigo,'aaa');
        
         return false;
    });
    
    }
 document.addEventListener("app.Ready", register_event_handlers, false);
})();
