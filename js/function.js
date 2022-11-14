function signIn() {
    $('#sign-in-popup').show();
    $('.shadow').show();
    $('#sign-up-popup').hide();
    // hide the prepsre-for-my-flight button
    $('.prepare-flight-button').hide();
    $('.configure-flight').hide();
    document.body.parentNode.style.overflow = "hidden";//隐藏且禁用横向纵向两个滚动条
}
function signUp() {
    $('#sign-up-popup').show();
    $('.shadow').show();
    $('#sign-in-popup').hide();
    // hide the prepsre-for-my-flight button
    $('.prepare-flight-button').hide();
    $('.configure-flight').hide();
    document.body.parentNode.style.overflow = "hidden";//隐藏且禁用横向纵向两个滚动条

}
function closePopUp() {
    // hide the content of signIn/ signUp popup
    $('#sign-in-popup').hide();
    $('#sign-up-popup').hide();
    // hide the dialog of select-departure
    $('.configure-flight').hide();
    
    // show prepare-flight-button
    $('.prepare-flight-button').show();
    // clear the value of configure-flight
    clearValue();
    // hide the shadow
    $('.shadow').hide();
    // clear the value of password
    $('.password').val("");
    $('.passwordSignUp').val("");
    $('.invalid-password').hide();
    $('.passwordSignUp').parent().attr('class', "input-info valid-border");
    document.body.parentNode.style.overflow = "auto";

}

function checkEmail() {
    let emailAdd = $('.emailAddress').val();
    if (emailAdd != "") {
        let correctEmailAdd = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;
        if (!(correctEmailAdd.test(emailAdd))) {
            $('.emailAddress').parent().attr('class', "input-info invalid-border");
            $('.invalid-email').show();
            return
        }
    }
    $('.invalid-email').hide();
    $('.emailAddress').parent().attr('class', "input-info valid-border");
}
function checkFirstName() {
    let firstName = $('.firstName').val();
    if (firstName != "") {
        if (firstName.length < 2) {
            $('.invalid-first-name').show();
            $('.firstName').parent().attr('class', "input-info invalid-border");
            return
        }
    }
    $('.invalid-first-name').hide();
    $('.firstName').parent().attr('class', "input-info valid-border");
}
function checkFamilyName() {
    let familyName = $('.familyName').val();
    if (familyName != "") {
        if (familyName.length < 2) {
            $('.invalid-family-name').show();
            $('.familyName').parent().attr('class', "input-info invalid-border");
            return
        }
    }
    $('.invalid-family-name').hide();
    $('.familyName').parent().attr('class', "input-info valid-border");
}
function checkUsername() {
    let username = $('.usernameSignUp').val();
    if (username != "") {
        if (username.length < 4) {
            $('.invalid-username').show();
            $('.usernameSignUp').parent().attr('class', "input-info invalid-border");
            return
        }
    }
    $('.invalid-username').hide();
    $('.usernameSignUp').parent().attr('class', "input-info valid-border");
}
function checkPassword() {
    let password = $('.passwordSignUp').val();
    if (password != "") {
        if (password.length < 6) {
            $('.invalid-password').show();
            $('.passwordSignUp').parent().attr('class', "input-info invalid-border");
            return
        }
    }
    $('.invalid-password').hide();
    $('.passwordSignUp').parent().attr('class', "input-info valid-border");
}
function clickFlightButton() {
    $('.prepare-flight-button').hide();
    $('.configure-flight').show();
    $('.shadow').show();
}


//0.625   5/8
function homeResize() {

    WinHeight = $(window).height();
    WinWidth = $(window).width();
    fullBox = $(".swiper-slide .full");

    if (WinWidth > 768) {
        if (WinWidth / WinHeight > 1.6) {
            fullBox.width("100%").height(WinWidth * 0.625).css({
                "position": 'absolute',
                "left": "0px",
                "top": (WinHeight - fullBox.height()) / 2 + "px"
            });
        } else {
            fullBox.width(WinHeight * 1.6).height("100%").css({
                "position": 'absolute',
                "left": "-" + (fullBox.width() - WinWidth) / 2 + "px",
                "top": "0px"
            });
        }
    } else {
        fullBox.width("100%").height("auto").css({
            "position": 'static',
        });
    }
}

homeResize();

$(window).resize(function () {
    homeResize();
});
