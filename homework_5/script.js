var submitButton8am = document.getElementById("btn8am");
var submitButton9am = document.getElementById("btn9am");
var submitButton10am = document.getElementById("btn10am");
var submitButton11am = document.getElementById("btn11am");
var submitButton12pm = document.getElementById("btn12pm");
var submitButton1pm = document.getElementById("btn1pm");
var submitButton2pm = document.getElementById("btn2pm");
var submitButton3pm = document.getElementById("btn3pm");
var submitButton4pm = document.getElementById("btn4pm");
var submitButton5pm = document.getElementById("btn5pm");
var submitButton6pm = document.getElementById("btn6pm");
var submitButton7pm = document.getElementById("btn7pm");
var submitButton8pm = document.getElementById("btn8pm");

var inputArea8am = document.getElementById("8am");
var inputArea9am = document.getElementById("9am");
var inputArea10am = document.getElementById("10am");
var inputArea11am = document.getElementById("11am");
var inputArea12pm = document.getElementById("12pm");
var inputArea1pm = document.getElementById("1pm");
var inputArea2pm = document.getElementById("2pm");
var inputArea3pm = document.getElementById("3pm");
var inputArea4pm = document.getElementById("4pm");
var inputArea5pm = document.getElementById("5pm");
var inputArea6pm = document.getElementById("6pm");
var inputArea7pm = document.getElementById("7pm");
var inputArea8pm = document.getElementById("8pm");

var task8am = document.getElementById("8am-task");
var task9am = document.getElementById("9am-task");
var task10am = document.getElementById("10am-task");
var task11am = document.getElementById("11am-task");
var task12pm = document.getElementById("12pm-task");
var task1pm = document.getElementById("1pm-task");
var task2pm = document.getElementById("2pm-task");
var task3pm = document.getElementById("3pm-task");
var task4pm = document.getElementById("4pm-task");
var task5pm = document.getElementById("5pm-task");
var task6pm = document.getElementById("6pm-task");
var task7pm = document.getElementById("7pm-task");
var task8pm = document.getElementById("8pm-task");

var localInput8am = localStorage.getItem('8AM')
var localInput9am = localStorage.getItem('9AM')
var localInput10am = localStorage.getItem('10AM')
var localInput11am = localStorage.getItem('11AM')
var localInput12pm = localStorage.getItem('12PM')
var localInput1pm = localStorage.getItem('1PM')
var localInput2pm = localStorage.getItem('2PM')
var localInput3pm = localStorage.getItem('3PM')
var localInput4pm = localStorage.getItem('4PM')
var localInput5pm = localStorage.getItem('5PM')
var localInput6pm = localStorage.getItem('6PM')
var localInput7pm = localStorage.getItem('7PM')
var localInput8pm = localStorage.getItem('8PM')

var clearBtn8am = document.getElementById("clr8am")
var clearBtn9am = document.getElementById("clr9am")
var clearBtn10am = document.getElementById("clr10am")
var clearBtn11am = document.getElementById("clr11am")
var clearBtn12pm = document.getElementById("clr12pm")
var clearBtn1pm = document.getElementById("clr1pm")
var clearBtn2pm = document.getElementById("clr2pm")
var clearBtn3pm = document.getElementById("clr3pm")
var clearBtn4pm = document.getElementById("clr4pm")
var clearBtn5pm = document.getElementById("clr5pm")
var clearBtn6pm = document.getElementById("clr6pm")
var clearBtn7pm = document.getElementById("clr7pm")
var clearBtn8pm = document.getElementById("clr8pm")

task8am.textContent = localInput8am
task9am.textContent = localInput9am
task10am.textContent = localInput10am
task11am.textContent = localInput11am
task12pm.textContent = localInput12pm
task1pm.textContent = localInput1pm
task2pm.textContent = localInput2pm
task3pm.textContent = localInput3pm
task4pm.textContent = localInput4pm
task5pm.textContent = localInput5pm
task6pm.textContent = localInput6pm
task7pm.textContent = localInput7pm
task8pm.textContent = localInput8pm

function postTask8am (e) {
    let input = inputArea8am.value;
    localStorage.setItem('8AM',input);
    task8am.textContent = input
    inputArea8am.value = ""
};
function postTask9am (e) {
    let input = inputArea9am.value;
    localStorage.setItem('9AM',input);
    task9am.textContent = input
    inputArea9am.value = ""
};
function postTask10am (e) {
    let input = inputArea10am.value;
    localStorage.setItem('10AM',input);
    task10am.textContent = input
    inputArea10am.value = ""
};
function postTask11am (e) {
    let input = inputArea11am.value;
    localStorage.setItem('11AM',input);
    task11am.textContent = input
    inputArea11am.value = ""
};
function postTask12pm (e) {
    let input = inputArea12pm.value;
    localStorage.setItem('12PM',input);
    task12pm.textContent = input
    inputArea12pm.value = ""
};
function postTask1pm (e) {
    let input = inputArea1pm.value;
    localStorage.setItem('1PM',input);
    task1pm.textContent = input
    inputArea1pm.value = ""
};
function postTask2pm (e) {
    let input = inputArea2pm.value;
    localStorage.setItem('2PM',input);
    task2pm.textContent = input
    inputArea2pm.value = ""
};
function postTask3pm (e) {
    let input = inputArea3pm.value;
    localStorage.setItem('3PM',input);
    task3pm.textContent = input
    inputArea3pm.value = ""
};
function postTask4pm (e) {
    let input = inputArea4pm.value;
    localStorage.setItem('4PM',input);
    task4pm.textContent = input
    inputArea4pm.value = ""
};
function postTask5pm (e) {
    let input = inputArea5pm.value;
    localStorage.setItem('5PM',input);
    task5pm.textContent = input
    inputArea11am.value = ""
};
function postTask6pm (e) {
    let input = inputArea6pm.value;
    localStorage.setItem('6PM',input);
    task6pm.textContent = input
    inputArea6pm.value = ""
};
function postTask7pm (e) {
    let input = inputArea7pm.value;
    localStorage.setItem('7PM',input);
    task7pm.textContent = input
    inputArea7pm.value = ""
};
function postTask8pm () {
    let input = inputArea8pm.value;
    localStorage.setItem('8PM',input);
    task8pm.textContent = input
    inputArea8pm.value = ""
};
function clear8am () {
    task8am.textContent = ""
    localStorage.setItem('8AM','');
    }
function clear9am () {
    task9am.textContent = ""
    localStorage.setItem('9AM','');
    }
function clear10am () {
    task10am.textContent = ""
    localStorage.setItem('10AM','');
    }
function clear11am () {
    task11am.textContent = ""
    localStorage.setItem('11AM','');
    }
function clear12pm () {
    task12pm.textContent = ""
    localStorage.setItem('12PM','');
    }
function clear1pm () {
    task1pm.textContent = ""
    localStorage.setItem('1PM','');
    }
function clear2pm () {
    task2pm.textContent = ""
    localStorage.setItem('2PM','');
    }
function clear3pm () {
    task3pm.textContent = ""
    localStorage.setItem('3PM','');
    }
function clear4pm () {
    task4pm.textContent = ""
    localStorage.setItem('4PM','');
    }
function clear5pm () {
    task5pm.textContent = ""
    localStorage.setItem('5PM','');
    }
function clear6pm () {
    task6pm.textContent = ""
    localStorage.setItem('6PM','');
    }
function clear7pm () {
    task7pm.textContent = ""
    localStorage.setItem('7PM','');
    }
function clear8pm () {
    task8pm.textContent = ""
    localStorage.setItem('8PM','');
}

submitButton8am.addEventListener("click", postTask8am);
submitButton9am.addEventListener("click", postTask9am);
submitButton10am.addEventListener("click", postTask10am);
submitButton11am.addEventListener("click", postTask11am);
submitButton12pm.addEventListener("click", postTask12pm);
submitButton1pm.addEventListener("click", postTask1pm);
submitButton2pm.addEventListener("click", postTask2pm);
submitButton3pm.addEventListener("click", postTask3pm);
submitButton4pm.addEventListener("click", postTask4pm);
submitButton5pm.addEventListener("click", postTask5pm);
submitButton6pm.addEventListener("click", postTask6pm);
submitButton7pm.addEventListener("click", postTask7pm);
submitButton8pm.addEventListener("click", postTask8pm);

clearBtn8am.addEventListener("click", clear8am);
clearBtn9am.addEventListener("click", clear9am);
clearBtn10am.addEventListener("click", clear10am);
clearBtn11am.addEventListener("click", clear11am);
clearBtn12pm.addEventListener("click", clear12pm);
clearBtn1pm.addEventListener("click", clear1pm);
clearBtn2pm.addEventListener("click", clear2pm);
clearBtn3pm.addEventListener("click", clear3pm);
clearBtn4pm.addEventListener("click", clear4pm);
clearBtn5pm.addEventListener("click", clear5pm);
clearBtn6pm.addEventListener("click", clear6pm);
clearBtn7pm.addEventListener("click", clear7pm);
clearBtn8pm.addEventListener('click', clear8pm);