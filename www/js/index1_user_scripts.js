/*jshint browser:true */
/*global $ */(function()
{
 "use strict";
 /*
   hook up event handlers 
 */
 function register_event_handlers()
 {
    
    
        /* button  #btnteste */
    $(document).on("click", "#btnteste", function(evt)
    {
        document.getElementById("txtStatusBateria").innerHTML='<h1 style="color: red; text-align:left">Status da Bateria..... ' ;   
         return false;

    });
    
    }
 document.addEventListener("app.Ready", register_event_handlers, false);
})();
