let saveBtn = document.getElementById('save');
let entry = document.getElementById('8am');

entry.addEventListener('submit', (e) => {
    e.preventDefault();

    saveBtn.addEventListener('click',(e) => {
        e.preventDefault();
        let submission = document.getElementById('8am');
        console.log(submission)
        
        submission = submission.value;
        localStorage.setItem('8AM',submission)
})
});
