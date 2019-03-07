$("button").click(function(){
    var name= $(".questionone").val();
    var food= $(".questiontwo").val();
    var money= parseInt($(".questionthree").val());
    var calc= money*572;
        console.log(name, food, money,calc);
});


