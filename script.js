function rotateFunction() {
    // Find initial angle
    var el = document.getElementById('box');
    var angle = el.value;
    if (typeof angle == 'undefined') {
        angle = 50400;
    }

    // Constants
    var x = 625; // min value
    var y = 1345; // max value
    var temp = Math.floor(Math.random() * 3 - 1);
    if (temp) {
        angle = Math.floor((Math.random() * (y - x)) + x) * temp + angle; // angle to rotate by somewhere between x and y degrees
        if (angle < 0) {
            while (angle < 0) {
                angle += 360;
            }
        } else if (angle >= 100800) {
            while (angle >= 100800) {
                angle -= 360;
            }
        }
        el.value = angle;

        // Rotate box
        el.style.transform = "rotate(" + angle + "deg)";

        // Figure out where the wheel will land
        var section = Math.floor(((angle + 22.5) % 360) / 45);
        var land;
        if (section <= 3) {
            var container = document.querySelector('.box1');
        } else {
            var container = document.querySelector('.box2');
        }
        switch (section) {
            case 0:
            case 4:
                land = container.querySelector('.span4').textContent;
                break;
            case 1:
            case 5:
                land = container.querySelector('.span3').textContent;
                break;
            case 2:
            case 6:
                land = container.querySelector('.span2').textContent;
                break;
            case 3:
            case 7:
                land = container.querySelector('.span1').textContent;
        }
        console.log(angle)
        console.log(land)
            // Animation for arrow
            // var element = document.getElementById('mainbox');
            // element.classList.remove('animate');
        setTimeout(function() {
            // element.classList.add('animate');
            document.getElementById("location").innerHTML = "Currently at: " + land;
        }, 2500);
        // setTimeout(function() {
        //     element.classList.remove('animate');
        // }, 8500);
    } else {
        console.log("stayed")
    }
}

function buttonRotateFunction() {
    // Find initial angle
    var el = document.getElementById('box');
    var angle = el.value;
    if (typeof angle == 'undefined') {
        angle = 50400;
    }
    var temp = Math.floor(Math.random() * 2);
    if (Math.floor(temp)) {
        var factor = 1;
    } else {
        var factor = -1;
    }
    // Constants
    var x = 625; // min value
    var y = 1345; // max value
    angle = Math.floor((Math.random() * (y - x)) + x) * factor + angle; // angle to rotate by somewhere between x and y degrees
    if (angle < 0) {
        while (angle < 0) {
            angle += 360;
        }
    } else if (angle >= 100800) {
        while (angle >= 100800) {
            angle -= 360;
        }
    }
    el.value = angle;

    // Rotate box
    el.style.transform = "rotate(" + angle + "deg)";

    // Figure out where the wheel will land
    var section = Math.floor(((angle + 22.5) % 360) / 45);
    var land;
    if (section <= 3) {
        var container = document.querySelector('.box1');
    } else {
        var container = document.querySelector('.box2');
    }
    switch (section) {
        case 0:
        case 4:
            land = container.querySelector('.span4').textContent;
            break;
        case 1:
        case 5:
            land = container.querySelector('.span3').textContent;
            break;
        case 2:
        case 6:
            land = container.querySelector('.span2').textContent;
            break;
        case 3:
        case 7:
            land = container.querySelector('.span1').textContent;
    }
    console.log(angle)
    console.log(land)
        // Animation for arrow
        // var element = document.getElementById('mainbox');
        // element.classList.remove('animate');
    setTimeout(function() {
        // element.classList.add('animate');
        document.getElementById("location").innerHTML = "Currently at: " + land;
    }, 2500);
    // setTimeout(function() {
    //     element.classList.remove('animate');
    // }, 8500);
}

function buttonRotateRight() {
    // Find initial angle
    var el = document.getElementById('box');
    var angle = el.value;
    if (typeof angle == 'undefined') {
        angle = 50400;
    }

    // Constants
    var x = 625; // min value
    var y = 1345; // max value
    angle = Math.floor(Math.random() * (y - x)) + x + angle; // angle to rotate by somewhere between x and y degrees
    if (angle < 0) {
        while (angle < 0) {
            angle += 360;
        }
    } else if (angle >= 100800) {
        while (angle >= 100800) {
            angle -= 360;
        }
    }
    el.value = angle;

    // Rotate box
    el.style.transform = "rotate(" + angle + "deg)";

    // Figure out where the wheel will land
    var section = Math.floor(((angle + 22.5) % 360) / 45);
    var land;
    if (section <= 3) {
        var container = document.querySelector('.box1');
    } else {
        var container = document.querySelector('.box2');
    }
    switch (section) {
        case 0:
        case 4:
            land = container.querySelector('.span4').textContent;
            break;
        case 1:
        case 5:
            land = container.querySelector('.span3').textContent;
            break;
        case 2:
        case 6:
            land = container.querySelector('.span2').textContent;
            break;
        case 3:
        case 7:
            land = container.querySelector('.span1').textContent;
    }
    console.log(angle)
    console.log(land)
        // Animation for arrow
        // var element = document.getElementById('mainbox');
        // element.classList.remove('animate');
    setTimeout(function() {
        // element.classList.add('animate');
        document.getElementById("location").innerHTML = "Currently at: " + land;
    }, 2500);
    // setTimeout(function() {
    //     element.classList.remove('animate');
    // }, 8500);
}

function buttonRotateLeft() {
    // Find initial angle
    var el = document.getElementById('box');
    var angle = el.value;
    if (typeof angle == 'undefined') {
        angle = 50400;
    }

    // Constants
    var x = 625; // min value
    var y = 1345; // max value
    angle = -(Math.floor(Math.random() * (y - x)) + x) + angle; // angle to rotate by somewhere between x and y degrees
    if (angle < 0) {
        while (angle < 0) {
            angle += 360;
        }
    } else if (angle >= 100800) {
        while (angle >= 100800) {
            angle -= 360;
        }
    }
    el.value = angle;

    // Rotate box
    el.style.transform = "rotate(" + angle + "deg)";

    // Figure out where the wheel will land
    var section = Math.floor(((angle + 22.5) % 360) / 45);
    var land;
    if (section <= 3) {
        var container = document.querySelector('.box1');
    } else {
        var container = document.querySelector('.box2');
    }
    switch (section) {
        case 0:
        case 4:
            land = container.querySelector('.span4').textContent;
            break;
        case 1:
        case 5:
            land = container.querySelector('.span3').textContent;
            break;
        case 2:
        case 6:
            land = container.querySelector('.span2').textContent;
            break;
        case 3:
        case 7:
            land = container.querySelector('.span1').textContent;
    }
    console.log(angle)
    console.log(land)
        // Animation for arrow
        // var element = document.getElementById('mainbox');
        // element.classList.remove('animate');
    setTimeout(function() {
        // element.classList.add('animate');
        document.getElementById("location").innerHTML = "Currently at: " + land;
    }, 2500);
    // setTimeout(function() {
    //     element.classList.remove('animate');
    // }, 8500);
}