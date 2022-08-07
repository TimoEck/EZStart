const greeting = document.getElementById('greeting')
const name = document.getElementById('name')
const am_pm = document.getElementById('ampm')
const searchField = document.getElementById('searchField')
const timeText = document.getElementById('time')
const checkboxAmPm = document.getElementById('checkbox_ampm');
const checkboxRandomcolor = document.getElementById('checkbox_randomcolor');
const settingsBox = document.getElementById('settings_box');
const settingsBtn = document.getElementById('settings_btn');






// Select the text at startup
async function selectText() {
    
    await searchField.focus();
    await searchField.select();
}


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

    checkboxAmPm.addEventListener('change', function() {
        if (checkboxAmPm.checked) {
            //console.log("Timeformat: 12hrs")
            localStorage.setItem('timezone', "12hrs")
     
            setBgGreet()
        } else {
            //console.log("Timeformat: 24hrs")
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
            //console.log("Your color is saved :)")
        }
    })


}
    function check_cbValues() {

        const timezone_value = localStorage.getItem('timezone')

        if (timezone_value == '12hrs') {

        } else {

        }


        const randomcolor_value = localStorage.getItem('cbRandomcolor')

        if (randomcolor_value == 'true') {
            checkboxRandomcolor.checked = randomcolor_value
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
        greeting.textContent = "Good Morning,\n";
        am_pm.textContent = "AM";
    } else if (hour <= 18) {
        // Greeting Text
        greeting.textContent = "Good Afternooon," + ' ';
        am_pm.textContent = "PM";
    } else {
        // Greeting Text
        greeting.textContent = "Good Evening, ";
        am_pm.textContent = "PM";
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

// function getSearchengine() {
    
// }


    const searchIcon = document.querySelector('#searchIcon')
    const innerIcon = document.querySelector('#innerIcon')
    const innerIconChild = document.querySelector('#innerIcon').firstChild
    const changeSearch_btn = document.querySelector('#dropdown_button')
    const googleIcon = document.querySelector('#Google_icon')
    const googleBtn = document.querySelector('#google_btn')
    const duckduckgoIcon = document.querySelector('#Duckduckgo_icon')
    const duckduckgoBtn = document.querySelector('#duckduckgo_btn')
    const bingIcon = document.querySelector('#Bing_icon')
    const bingBtn = document.querySelector('#bing_btn')
    const customBtn = document.querySelector('#customEngine')
    const dropdownMenu = document.querySelector('.dropdown-menu')






googleBtn.addEventListener('click', function(){          
    const engine = localStorage['searchEngine']
    if (engine != "google") {
        localStorage.setItem('searchEngine', 'google')
        const google_clone = googleIcon.cloneNode(true)
        innerIcon.firstElementChild.remove()
        innerIcon.appendChild(google_clone)
        //console.log("Google selected")
    } else {
        //console.log('Already Google selected')
    }
    return
})
duckduckgoBtn.addEventListener('click', function(){  
    const engine = localStorage['searchEngine']
    if (engine != "duckduckgo") {
        localStorage.setItem('searchEngine', 'duckduckgo')
        const duckduckgo_clone = duckduckgoIcon.cloneNode(true)
        innerIcon.firstElementChild.remove()
        innerIcon.appendChild(duckduckgo_clone)
        //console.log("Duckduckgo selected")
    } else {
        //console.log('Already Duckduckgo selected')
    }
    return
})
bingBtn.addEventListener('click', function(){  
    const engine = localStorage['searchEngine']
    if (engine != "bing") {
        localStorage.setItem('searchEngine', 'bing')
        const bing_clone = bingIcon.cloneNode(true)
        innerIcon.firstElementChild.remove()
        innerIcon.appendChild(bing_clone)
        //console.log("Bing selected")
    } else {
        //console.log('Already Bing selected')
    }
    return
})
function getEngine() {
    const engine = localStorage['searchEngine']
    if (engine == "google") {
        localStorage.setItem('searchEngine', 'google')
        const google_clone = googleIcon.cloneNode(true)
        innerIcon.firstElementChild.remove()
        innerIcon.appendChild(google_clone)
        //console.log("Google selected")
    } else if (engine == "duckduckgo") {
        localStorage.setItem('searchEngine', 'duckduckgo')
        const duckduckgo_clone = duckduckgoIcon.cloneNode(true)
        innerIcon.firstElementChild.remove()
        innerIcon.appendChild(duckduckgo_clone)
    } else if (engine == "bing") {
        localStorage.setItem('searchEngine', 'bing')
        const bing_clone = bingIcon.cloneNode(true)
        innerIcon.firstElementChild.remove()
        innerIcon.appendChild(bing_clone)
        //console.log("Bing selected")
    } else {
        localStorage.setItem('searchEngine', 'google')
        const google_clone = googleIcon.cloneNode(true)
        innerIcon.firstElementChild.remove()
        innerIcon.appendChild(google_clone)
    }
}
function getSearch() {
    const engine = localStorage['searchEngine']
    if (engine == "google") {
        window.open('//google.com/search?q=' + searchField.value);
    } else if (engine == "duckduckgo") {
        window.open('//duckduckgo.com/?q=' + searchField.value);
    } else if (engine == "bing") {
        window.open('//bing.com/search?q=' + searchField.value);
    } else {
        alert("Select a searchengine")
    }
}
 // Press Enter to search
function clickPress(event) {
    if (event.key == "Enter") {
        getSearch()
    }
}

function setDefault() {
    localStorage.setItem('cbRandomcolor', true)
    localStorage.setItem('timezone', "24hrs")
}

function checkVisit() {
    if (!localStorage.getItem('visited', true)) {
        localStorage.setItem('visited', true);
        setDefault()
    } else {
        return
    }
};




function startUp() {
    checkVisit();
    check_cbValues();
    getEngine();
    settings();
    setBgGreet()
    getName();
    selectText();

}

document.addEventListener("load", startUp())


