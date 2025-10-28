const search = document.querySelector('.search-box input')
const panels = document.querySelectorAll('.panel');

search.addEventListener('input', (e) => {
   if(search.value !== "") {
        panels.forEach(panel => {
            const panelHeading = panel.querySelector('h2').innerHTML.toLowerCase();
            const searchText = search.value.toLowerCase();

            if(panelHeading.includes(searchText)) {
                panel.style.display = "flex"

            } else {
                panel.style.display = "none"
            }
        })
    } else {
        panels.forEach(panel => {
            panel.style.display = "flex";
        });
    }
})