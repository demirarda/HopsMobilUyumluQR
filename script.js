document.querySelector('footer input').addEventListener('input', function() {
    let query = this.value.toLowerCase();
    let items = document.querySelectorAll('.item p');

    items.forEach(function(item) {
        if (item.textContent.toLowerCase().includes(query)) {
            item.parentElement.style.display = 'block';
        } else {
            item.parentElement.style.display = 'none';
        }
    });
});
