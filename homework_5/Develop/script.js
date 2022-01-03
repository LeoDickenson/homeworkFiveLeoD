var submitButton = document.querySelector("#btn");
var inputArea = document.querySelector("#input-task");
var responseArea = document.querySelector("#submitted-task");
var resetForm = document.getElementById('myform').reset();



function postTask (e) {
    e.preventDefault();
    let tasked = inputArea.value;
    console.log(tasked)
    responseArea.textContent = tasked;
    return(resetForm);
};
submitButton.addEventListener("click", postTask);
// var saveBtn = document.getElementById('save');
// var entry = document.getElementById('8am');


//     saveBtn.addEventListener('click',(e) => {
//         e.preventDefault();
//         var submission = document.getElementById('8AM');

//         if(localStorage.getItem('8AM')== null){
//             localStorage.setItem('8AM', '[]');
//         }
        
//         submission = submission.value;
//         localStorage.setItem('8AM',submission)
// });

