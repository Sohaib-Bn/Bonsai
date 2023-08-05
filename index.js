///////////////////////////
// NAV BAR FOR SMALL SCREEN

$(".navbar__icon").click(function () {
    $(this).toggleClass("be-close-icon");
    $(".nav-small-screen").toggleClass("hidden")
})




/////////////////////////
// PRICE-SWITCH

var isSwitched = false;

$(".btn-switch").click(function(){
    isSwitched =! isSwitched;

    if (isSwitched == true) {
        $(this).addClass("switch");
        $(".price-text__year").addClass("price-text__focus");
        $(".price-text__month").removeClass("price-text__focus");
        $(".price-number--1").text("17");
        $(".price-number--2").text("32");
        $(".price-number--3").text("52");
        $(".only-year").addClass("show-only-year");
        $(".card__price-text").addClass("increase-padding-bottom");
        $(".feature__price-numb--1").text("$100");
        $(".feature__price-numb--2").text("$90");
    }

    if (isSwitched == false) {
        $(this).removeClass("switch");
        $(".price-text__month").addClass("price-text__focus");
        $(".price-text__year").removeClass("price-text__focus");
        $(".price-number--1").text("24");
        $(".price-number--2").text("39");
        $(".price-number--3").text("79");
        $(".only-year").removeClass("show-only-year");
        $(".card__price-text").removeClass("increase-padding-bottom");
        $(".feature__price-numb--1").text("$10");
        $(".feature__price-numb--2").text("$9");

    }
})




/////////////////////////
// FAQ
$(".fac__box").click(function () {
    var num = $(this).attr("id");
    $(".fac__inswer--" + num).slideToggle("slow");
    $(".fac__inswer").not(".fac__inswer--" + num).slideUp("slow");
    $(".fac__icon--" + num).toggleClass("retate-row");
    $(".fac__icon").not(".fac__icon--" + num).removeClass("retate-row");

})