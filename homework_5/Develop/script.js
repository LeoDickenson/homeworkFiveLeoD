var saveBtn = document.getElementById('save');
var entry = document.getElementById('8am');


    saveBtn.addEventListener('click',(e) => {
        e.preventDefault();
        var submission = document.getElementById('8AM');

        if(localStorage.getItem('8AM')== null){
            localStorage.setItem('8AM', '[]');
        }
        
        submission = submission.value;
        localStorage.setItem('8AM',submission)
});

