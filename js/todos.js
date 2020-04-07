//check the todo
$("ul").on("click" , "li" ,function(){
    $(this).toggleClass("completed");
});

//click x to delete todo
$("ul").on("click" , "span" ,function(event){
    $(this).parent().fadeOut(300 ,function(){
        $(this).remove();
    });
    event.stopPropagation();
});

//add the new todo
$("input[type = 'text']").keypress(function(event){
   if(event.which === 13){
       var newTodo = $(this).val();
       $(this).val("");
       $("ul").append("<li><span><i class='fas fa-trash-alt'></i></span> " + newTodo +"</li>");
   }
});

//click + to add new todo
$(".fa-plus").on("click" , function(){
    $("input[type = 'text']").fadeToggle();
});