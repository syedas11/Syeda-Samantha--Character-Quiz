$(".questionOutputs").hide();
$(".begin").hide();
$(".secondpage").hide();
$(".thirdpage").hide();
$(".fourthpage").hide();
$(".fifthpage").hide();
$(".resultspage").hide();
$(".fuchka").hide();
$(".kinderjoy").hide();
$(".dinonuggies").hide();
$(".mintchoco").hide();

$(".q1button").click(function(){
    var nameInput = $(".q1").val();
    $(".questionOutputs").show();
    $(".questionOutputs").append("Your name is " + nameInput);
});

$(".q2button").click(function(){
    var ageInput = $(".q2").val();
    $(".questionOutputs").show();
    $(".questionOutputs").append(" and you are " + ageInput + " years old. Let's begin!");
    $(".begin").show();
});

$(".begin").click(function(){
    $(".firstpage").hide();
    $(".questionOutputs").hide();
    $(".begin").hide();
    $(".secondpage").show();
});

$(".activitiesimgs").click(function(){
    $(".secondpage").hide();
    $(".thirdpage").show();
});

$(".tastes").click(function(){
    $(".thirdpage").hide();
    $(".fourthpage").show();
});

$(".colors").click(function(){
    $(".fourthpage").hide();
    $(".fifthpage").show();
});

$(".resultbutton").click(function(){
    $(".fifthpage").hide();
    $(".resultspage").show();
    
    var friendinput = $(".lastq").val();
    if(friendinput === "outgoing") {
        $(".fuchka").show();
    } else if(friendinput === "Outgoing") {
        $(".fuchka").show();
    } else if(friendinput === "childlike") {
        $(".kinderjoy").show();
    } else if(friendinput === "Childlike") {
        $(".kinderjoy").show();
    } else if(friendinput === "stubborn") {
        $(".mintchoco").show();
    } else if(friendinput === "Stubborn") {
        $(".mintchoco").show();
    } else if(friendinput === "angel") {
        $(".dinonuggies").show();
    } else if(friendinput === "Angel") {
        $(".dinonuggies").show();
    }
});

$(".reset").click(function(){
    $(".resultspage").hide();
    $(".fuchka").hide();
    $(".kinderjoy").hide();
    $(".dinonuggies").hide();
    $(".mintchoco").hide();
    $(".firstpage").show();
});
