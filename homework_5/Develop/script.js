var submitButton = document.getElementById("btn");
var inputArea = document.getElementById("input-task");
var responseArea = document.getElementById("submitted-task");
var resetForm = document.getElementById('myform')



function postTask (e) {
    e.preventDefault();
    let tasked = inputArea.value;
    console.log(tasked)
    responseArea.textContent = tasked;
    localStorage.setItem('8AM',tasked);
    resetForm.reset()
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

