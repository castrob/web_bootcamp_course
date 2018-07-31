//1  check off specific todos by clicking
$('ul').on("click", "li", function () {
    $(this).toggleClass("completed");
});

//2 delete an todo (causes an event bubbling)
$("ul").on("click", "span", function (event) {
    $(this).parent().fadeOut(400, function () {
       $(this).remove();
    });
    event.stopPropagation();
});

//3 creating a new todo
$("input[type='text']").keypress(function (event) {
    if(event.which === 13){
        var todoText = $(this).val();
        $(this).val("");
        $("ul").append("<li>" + "<span><i class=\"far fa-trash-alt\"></i></span> " + todoText + "</li>");
    }
});

$(".fa-plus").click(function () {
    $("input[type='text']").fadeToggle();
});