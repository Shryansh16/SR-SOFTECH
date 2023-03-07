const root = document.documentElement;
const marqueeElementDisplayed = getComputedStyle(root).getPropertyValue("--marquee-element-displayed");
const marqueecontent = document.querySelector(".marquee-content");


root.style.setProperty("--marquee-element", marqueecontent.children.length);

for(let i=0; i<marqueeElementDisplayed ; i++){
    marqueecontent.appendChild( marqueecontent.children[i].cloneNode(true));
}