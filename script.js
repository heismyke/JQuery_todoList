$(document).ready(function() {

    var tasks = " "

    $("#add").prop("disabled", true)

    $("#taskArea").keyup(function(){
        var value = $(this).val()

        if(value.length > 0){

            $("#add").prop("disabled", false)

        }else{

            $("#add").prop("disabled", true)

        }

        $("#add").off("click").click( function(){

            tasks = $("#taskArea").val().trim();

            var li = $("<li></li>")

            li.append(tasks)

            $("#unorderedList").append(li)

            $("#taskArea").val("");
            
            $("#add").prop("disabled", true)
        })

    })
   

});