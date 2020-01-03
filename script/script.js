let textarea = {
    textareaWrap : document.getElementsByClassName('textarea-wrap')[0],
    expandButton: document.querySelector('#textarea-label','::after'),
    submitButton: document.querySelector('#submitbutton'),
    textarea : document.querySelector('textarea'),
    expandshrink : function() {
            this.textareaWrap.classList.toggle('expanded');
            this.expandButton.classList.toggle('expanded');
            this.submitButton.classList.toggle('expanded');
            this.textarea.classList.toggle('expanded');
        
    }
}

textarea.expandButton.addEventListener('click', textarea.expandshrink.bind(textarea));
textarea.textarea.addEventListener('focus', (event) => {
    event.currentTarget.innerText='';
    event.currentTarget.style.color='black';
});

