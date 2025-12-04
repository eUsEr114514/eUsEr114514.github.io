function toggleExpandable() {
    var expandable = document.querySelector('.edge');
    if (expandable.style.display === "none") {
        expandable.style.display = "block";
        document.querySelector('.expand-button').innerText = "收起 ↑";
    } else {
        expandable.style.display = "none";
        document.querySelector('.expand-button').innerText = "展开 ↓";
    }
}

