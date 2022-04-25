const links = [
    {
        label: "Week1 notes",
        url: "rawinolivera.github.io/wdd331r/week1/indexedDB.html"
    }
]

let olist = document.querySelector("ol");
links.forEach(displayLinks);

function displayLinks (link) {
    let list = document.createElement('li');
    let a = document.createElement('a');

    list.textContent = `${link.label}`;
    a.textContent = `"${link.url}"`;
    
    list.appendChild(a); 
    olist.appendChild(list);
    
}