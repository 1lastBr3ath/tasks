let checkboxValues = JSON.parse(localStorage.getItem('checkboxValues')) || {};

document.querySelectorAll('input[type="checkbox"]').forEach(i => {
    // set unique id for each checkbox
    i.id = escape(i.nextSibling.textContent.trim().replace(/\s+/g, '_')).replace(/[^\w]+/g, '_');
    // enable labeling for easy checking
    i.insertAdjacentHTML('afterend', `<label for="${i.id}">${i.nextSibling.textContent}</label>`);
    // remove textContent for readability
    i.nextSibling.nextSibling.remove();
    
    i.onchange = () => {
        checkboxValues[i.id] = i.checked;
        localStorage.setItem('checkboxValues', JSON.stringify(checkboxValues));
    };
});

// restore previous state
for(let i in checkboxValues){
    document.querySelector(`#${i}`).setAttribute('checked', checkboxValues[i]);
}
