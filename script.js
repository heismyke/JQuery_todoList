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

            var del = $("<i class='fa-solid fa-trash-can'></i>")
            $("li").append(del)

            
            del.click(function(){
                li.remove();
            });

            $("#taskArea").val("");
            
            $("#add").prop("disabled", true)

            
        })

    })

  

});