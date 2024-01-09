/* Call scroll function on load */
$(document).ready(function() {
    scroll();
});

/* Expand sidenav so it "opens" */
function openSideNav() {
    document.getElementById("mySidenav").style.width="250px";
    document.getElementById("main").style.marginLeft="250px";
};

/* Reverse above changed so it appears as thought the sidenav has "closed" */
function closeSideNav() {
    document.getElementById("mySidenav").style.width="0";
    document.getElementById("main").style.marginLeft="0px";
};

/* Scroll to Introduction section */
function Introduction() {
    $("img").hide();
    var scrollPosition = $(document).height()*0
    $('html, body').animate({scrollTop: scrollPosition}, 100);
    $('.body_content').animate({"margin-top": "5%"});
    closeSideNav();
};

/* Scroll to Healthconcerns section */
function HealthConcerns() {
    $("img").hide();
    var scrollPosition = $(document).height()*0.46
    $('html, body').animate({scrollTop: scrollPosition}, 100);
    $('.body_content').animate({"margin-top": "5%"});
    closeSideNav();
};

/* Scroll to Freshwater introduction section */
function FreshWaterIntro() {
    $("img").hide();
    var scrollPosition = $(document).height()*0.58
    $('html, body').animate({scrollTop: scrollPosition}, 100);
    $('.body_content').animate({"margin-top": "5%"});
    closeSideNav();
};

/* Scroll to the important of fresh water section */
function ImportanceFreshWater() {
    $("img").hide();
    var scrollPosition = $(document).height()*0.7
    $('html, body').animate({scrollTop: scrollPosition}, 100);
    $('.body_content').animate({"margin-top": "5%"});
    closeSideNav();
};

/* Scroll to the threats of fresh water section */
function ThreatsFreshWater() {
    $("img").hide();
    var scrollPosition = $(document).height()*0.78
    $('html, body').animate({scrollTop: scrollPosition}, 100);
    $('.body_content').animate({"margin-top": "5%"});
    closeSideNav();
};

function scroll() {
    document.getElementById("downscroll").addEventListener("click", function() {
        $("img").hide();
        $('html, body').animate({scrollTop: 0}, 1);
        $('.body_content').animate({"margin-top": "5%"});
    });
};

/* Function for Copy Address, Email and Phone Number */
function copyAddress() {
    var copyAddress = document.getElementById("Address"); 
    copyAddress.select();
    document.execCommand("copy"); 
    alert("Copied the Address: " + copyAddress.value);
};

function copyNumber() {
    var copyNumber = document.getElementById("Number"); 
    copyNumber.select();
    document.execCommand("copy"); 
    alert("Copied the Phone Number: " + copyNumber.value);
};

function copyEmail() {
    var copyEmail = document.getElementById("Email"); 
    copyEmail.select();
    document.execCommand("copy"); 
    alert("Copied the email: " + copyEmail.value);
};