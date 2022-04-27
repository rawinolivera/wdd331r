const links = [
    {
        label: "Week1 notes",
        url: "week1/index.html"
    },
    {
        label: "Comming soon...",
        url: "https://rawinolivera.github.io/wdd331r/"
    },
    {
        label: "Comming soon...",
        url: "https://rawinolivera.github.io/wdd331r/"
    },
    {
        label: "Comming soon...",
        url: "https://rawinolivera.github.io/wdd331r/"
    },
    {
        label: "Comming soon...",
        url: "https://rawinolivera.github.io/wdd331r/"
    },
    {
        label: "Comming soon...",
        url: "https://rawinolivera.github.io/wdd331r/"
    }
]

let olist = document.querySelector("ol");
links.forEach(displayLinks);

function displayLinks (link) {
    let list = document.createElement('li');
    let a = document.createElement('a');

    a.textContent = `${link.label}`;
    a.href = `${link.url}`;
    
    list.appendChild(a); 
    olist.appendChild(list);
    
}