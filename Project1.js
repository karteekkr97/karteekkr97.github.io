function validate() {
    var res = document.getElementById("one").value
    if (res.length == 0) {
        document.getElementById("msg").innerHTML = "**Please fill the firstname text box"
        return false
    }
    else if (res.length < 3) {
        document.getElementById("msg").innerHTML = "**Firstname should have min 3 letters"
        return false
    }
    else if (res.length >= 15) {
        document.getElementById("msg").innerHTML = "**Firstname should have max 15 letters"
        return false
    }


    var res1 = document.getElementById("two").value
    if (res1.length == 0) {
        document.getElementById("msg1").innerHTML = "**Please fill the lastname text box"
        return false
    }
    else if (res1.length < 3) {
        document.getElementById("msg1").innerHTML = "**Lastname should have min 3 letters"
        return false
    }
    else if (res1.length >= 15) {
        document.getElementById("msg1").innerHTML = "**Lastname should have max 15 letters"
        return false
    }


    var res3 = document.getElementById("three").value
    if (res3.length == 0) {
        document.getElementById("msg2").innerHTML = "**Please enter phone number"
        return false
    }
    else if (isNaN(res3)) {
        document.getElementById("msg2").innerHTML = "**Phone number should contain only digits "
        return false
    }
    else if (res3.length < 10) {
        document.getElementById("msg2").innerHTML = "**Phone number has less than 10 numbers"
        return false
    }
    else if (res3.length > 10) {
        document.getElementById("msg2").innerHTML = "**Phone number has more than 10 numbers"
        return false
    }
    else if (res3.charAt(0) < 6) {
        document.getElementById("msg2").innerHTML = "**Phone number should start from onlt 6 or 7 or 8 or 9 numbers"
        return false
    }


    var res4 = document.getElementById("four");
    var filter = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
    if (!filter.test(res4.value)) {
        alert('Please provide a valid email address');
        email.focus;
        return false;
    }


    var res5 = document.getElementById("five").value
    if (res5.length == 0) {
        document.getElementById("msg4").innerHTML = "**Please fill the Address1 text box"
        return false
    }
    else if (res5.length < 3) {
        document.getElementById("msg4").innerHTML = "**Address1 should have min 3 letters"
        return false
    }
    else if (res5.length >= 15) {
        document.getElementById("msg4").innerHTML = "**Address1 should have max 15 letters"
        return false
    }

    var res6 = document.getElementById("six").value
    if (res6.length == 0) {
        document.getElementById("msg5").innerHTML = "**Please fill the Address2 text box"
        return false
    }
    else if (res6.length < 3) {
        document.getElementById("msg5").innerHTML = "**Address2 should have min 3 letters"
        return false
    }
    else if (res6.length >= 15) {
        document.getElementById("msg5").innerHTML = "**Address2 should have max 15 letters"
        return false
    }


    var res7 = document.getElementById("seven").value
    if (res7.length == 0) {
        document.getElementById("msg6").innerHTML = "**Please fill the zip code box"
        return false
    }
    else if (isNaN(res7)) {
        document.getElementById("msg6").innerHTML = "**Zip code should contain only digits"
        return false
    }
    else if (res7.length < 6) {
        document.getElementById("msg6").innerHTML = "**Zip code should have min 6 digits"
        return false
    }
    else if (res7.length > 6) {
        document.getElementById("msg6").innerHTML = "*Zip code should have max 6 digits"
    }


    var res8 = document.getElementById("eight").value
    if (res8.length == 0) {
        document.getElementById("msg7").innerHTML = "**Please fill the city text box"
        return false
    }
    else if (res8.length < 3) {
        document.getElementById("msg7").innerHTML = "**City should have min 3 letters"
        return false
    }
    else if (res8.length >= 15) {
        document.getElementById("msg7").innerHTML = "**City should have max 15 letters"
        return false
    }
}
