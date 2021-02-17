$(document).ready(function (e) {
 $("#show").click(function (e){

var name = $("#name").val();
var pass = $("#pass").val();


$.ajax({
    url: 'https://api.noaeincloud.ir/api/sample',
    data:{"name": name, "pass": pass},
    type: 'GET',
    dataType: 'JSON',
    beforeSend: function() {
  
    },
    success: function(xhr, response) {
        
        swal({
            title: "it is registered !",
            text: "You clicked the button!",
            icon: "success",
            button: "Aww yiss!",
          });
    },
    error: function(xhr, status, error) {
        console.log(xhr.message)
        swal ( "Oops" ,  "Something went wrong!" ,  "error" )
    },
 
  });

});

});