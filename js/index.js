const links = [
    {
        label: "Week-1: Practice: Review Webpage",
        objective: "Refresh and demonstrate skills on media queries and make layouts with css. The layouts should match the mockups in a small browser window or larger browser window.",
        url: "week1/index.html"
    },
    {
        label: "Week-2: CSS Selector Quiz",
        objective: "Demonstrate your understanding of CSS selectors",
        url: "https://rawinolivera.github.io/wdd331r/"
    },
    {
        label: "Week-3: CSS Preprocessors",
        objective: "Demonstrate SCSS skills using variables, mixins, and nesting by modifying your css from Week 1 into SCSS.",
        url: "week3/index.html"
    },
    {
        label: "Week-4: Zen Garden (Project Link)",
        objective: "Work with a group this semester on a Zen Garden project. Your group will create its own Zen Garden.",
        url: "https://rawinolivera.github.io/zengarden/"
    },
    {
        label: "Week-5: Animations and Transitions",
        objective: "Improve your mastery of CSS: CSS Animations, CSS Transitions and CSS Transforms",
        url: "https://codepen.io/rawinolivera/pen/abYBgJP?editors=1100"
    },
    {
        label: "Week-6: SVG",
        objective: "Create your own playing card design using an SVG with grouping and SCSS (the side without the numbers on it). Find another card online and cite your source.",
        url: "https://codepen.io/rawinolivera/pen/wvyyrER?editors=1100"
    },
    {
        label: "Week-7: Custom Properties and Functions",
        objective: "Walk through creating the HTML and CSS to display a quote.",
        url: "week7/quotes/index.html"
    },
    {
        label: "Week-8: Layout: Flexbox",
        objective: "Using CSS Flexbox, create a tiled layout similar to the provided example.",
        url: "week8/index.html"
    },
    {
        label: "Week-9: Web Typography",
        objective: "Recreate the textbook example provided in a webpage format, using html and font styles in css. Typography is important.",
        url: "week9/index.html"
    },
    {
        label: "Week-10: CSS Grid",
        objective: "Using CSS Grid, complete 2-3 sections from the Wes Box Grid course (20, 22, 23, 24, or 25).",
        url: "https://rawinolivera.github.io/wdd331r/"
    },
    {
        label: "Week-11: Tools/Tech: Tooling and Libraries",
        objective: "Create a website that is mobile and desktop friendly using the bootstrap framework.",
        url: "week11/build/index.html"
    },
    {
        label: "Week-12: Shapes and Gradients",
        objective: "Create a walkthrough teaching someone how to make a shape with CSS.",
        url: "https://youtu.be/GXdlQHTp9U4"
    },
    {
        label: "Week-13: Components and Architecture",
        objective: "Re-create the provided shopping cart in a codepen using layout principles like BEM.",
        url: "week13/index.html"
    }
]

let olist = document.querySelector("ol");
links.forEach(displayLinks);

function displayLinks (link) {
    let list = document.createElement('li');
    let a = document.createElement('a');
    let p = document.createElement('p');

    a.textContent = `${link.label}`;
    a.href = `${link.url}`;
    a.target = "_blanck";
    p.textContent = `${link.objective}`;
    
    list.appendChild(a); 
    list.appendChild(p);
    olist.appendChild(list);
    
}