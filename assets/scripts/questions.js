let coll = document.getElementsByClassName("question_button");
    for (let i=0; i<coll.length; i++) {
        coll[i].addEventListener('click', function() {
            this.classList.toggle('active');
            let content = this.nextElementSibling;
            let answer1 = document.getElementById("answer1");
            let answer2 = document.getElementById("answer2");
            let answer3 = document.getElementById("answer3");
            if(content.style.maxHeight) {
                content.style.maxHeight = null;
            } else {
                answer1.style.maxHeight = null;
                answer2.style.maxHeight = null;
                answer3.style.maxHeight = null;
                content.style.maxHeight = content.scrollHeight + 'px';

            }
        })
    }