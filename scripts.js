function search() {
    let searchBar = document.getElementById('searchBar');
    let query = searchBar.value.toLowerCase();
    let sections = document.querySelectorAll('section');

    sections.forEach(section => {
        section.style.display = 'none';
        let items = section.querySelectorAll('div');

        items.forEach(item => {
            let text = item.innerText.toLowerCase();
            if (text.includes(query)) {
                section.style.display = 'block';
                item.style.display = 'block';
            } else {
                item.style.display = 'none';
            }
        });
    });
}

function clearSearch() {
    document.getElementById('searchBar').value = '';
    let sections = document.querySelectorAll('section');

    sections.forEach(section => {
        section.style.display = 'block';
        let items = section.querySelectorAll('div');

        items.forEach(item => {
            item.style.display = 'block';
        });
    });
}
