const greeting = document.getElementById('greeting')
const name = document.getElementById('name')
const am_pm = document.getElementById('ampm')
const searchField = document.getElementById('searchField')
const timeText = document.getElementById('time')
const checkboxAmPm = document.getElementById('checkbox_ampm');
const checkboxRandomcolor = document.getElementById('checkbox_randomcolor');






// Change Background Color
function randomBackground() {
    purple = '#CBAACB';
    orange = '#FFC8A2';
    green = '#97C1A9';
    blue = '#8FCACA';

    colors = [orange, purple, green, blue];

    const randomColor = colors[Math.floor(Math.random() * colors.length)];

    document.body.style.background = randomColor
    localStorage.setItem('color', randomColor)
}
function currentBackground() {
    if (checkboxRandomcolor.checked == false) {
        const currentColor = localStorage.getItem('color');
        document.body.style.background = currentColor

    }
}


function settings () {

    const settingsBox = document.getElementById('settingsBox');
    const openBtn = document.getElementById('openMenu');
    const closeBtn = document.getElementById('closeMenu');


    checkboxAmPm.addEventListener('change', function() {
        if (checkboxAmPm.checked) {
            console.log("CHECKED")
            localStorage.setItem('timezone', "12hrs")
            setBgGreet()
        } else {
            console.log("UNCHECKED")
            localStorage.setItem('timezone', "24hrs")
            setBgGreet()
        }
    })


    checkboxRandomcolor.addEventListener('change', function() {
        if (checkboxRandomcolor.checked) {
            localStorage.setItem('cbRandomcolor', true)
        } else {
            localStorage.setItem('cbRandomcolor', false)
            // const currentColor = localStorage.getItem('color');
            // document.body.style.background = currentColor
            console.log("Unchecked with saved Color")
        }
    })

    settingsBox.style.visibility = "hidden";

    openBtn.addEventListener('click', function() {
        openBtn.style.visibility = "hidden";
        settingsBox.style.visibility = "visible";
    })

    closeBtn.addEventListener('click', function() {
        openBtn.style.visibility = "visible";
        settingsBox.style.visibility = "hidden";
    })
}
function check_cbRandomcolor() {
        
    const value = localStorage.getItem('cbRandomcolor')
    
    if (value == 'true') {
        checkboxRandomcolor.checked = value
        randomBackground()
    } else {
        currentBackground()
    }
}

// Set Greeting Text
function setBgGreet() {
    let today = new Date();
    let hour = today.getHours();
    let min = addZero(today.getMinutes());
    let timezone = localStorage.getItem('timezone');
    let twelveHrs = null;
    
    if (timezone === '12hrs') {
        hrs = addZero(today.getHours() % 12 || 12);
        checkboxAmPm.checked = true;
        twelveHrs = true;
    } else {
        hrs = addZero(today.getHours());
    }

    let time = hrs + ":" + min;
        
        function addZero(i) {
            if (i < 10) {i = "0" + i}
            return i;
        }


    if (twelveHrs == true) {
        am_pm.style.visibility = "visible";
    } else {
        am_pm.style.visibility = "hidden";
    }

    timeText.textContent = time;
    if (hour <= 12 ) {
        // Greeting Text
        greeting.textContent = "Good Morning, ";
        am_pm.textContent = "AM";
    } else if (hour <= 18) {
        // Greeting Text
        greeting.textContent = "Good Afternooon, ";
        am_pm.textContent = "PM";
    } else {
        // Greeting Text
        am_pm.textContent = "PM";
        greeting.textContent = "Good Evening, ";
    }
}

// Get Name
function getName() {
    
    if (localStorage.getItem('name') === null) {
        name.innerText = '[Enter Name]';
    } else {
        name.innerText = localStorage.getItem('name');
    }
}

// Set Name
function setName(e) {
    if (e.type === 'keypress') {
        // Make sure enter is pressed
        if (e.which == 13 || e.keyCode == 13) {
            localStorage.setItem('name', e.target.innerText);
            name.blur();
        }
    } else {
        localStorage.setItem('name', e.target.innerText);
    }
}

name.addEventListener('keypress', setName);
name.addEventListener('blur', setName);

function getSearch() {

    searchField.onclick = function () {
        window.open('//google.com/search?q=' + document.getElementById('search').value);
    }
}



function startUp() {
    check_cbRandomcolor()
    settings()
    setBgGreet()
    getName();
}

startUp()