const checkboxValues = JSON.parse(localStorage.getItem('checkboxValues')) || {};

document.querySelectorAll('input[type="checkbox"]').forEach(checkbox => {
    // set unique id for each checkbox
    checkbox.id = escape(checkbox.nextSibling.textContent.trim().replace(/\s+/g, '_')).replace(/[^\w]+/g, '_');
    // enable labeling for easy checking
    checkbox.insertAdjacentHTML('afterend', `<label for="${checkbox.id}">${checkbox.nextSibling.textContent}</label>`);
    // remove textContent for readability
    checkbox.nextSibling.nextSibling.remove();
    
    checkbox.onchange = () => {
            if(!checkbox.checked)
                delete checkboxValues[checkbox.id];
            else
                checkboxValues[checkbox.id] = true;
            localStorage.setItem('checkboxValues', JSON.stringify(checkboxValues));
    };
});

// restore previous state
for(let i in checkboxValues){
        document.querySelector(`#${i}`).setAttribute('checked', true);
}
