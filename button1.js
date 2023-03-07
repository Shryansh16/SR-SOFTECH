

var color =[' #03e9f4','rgb(32, 30, 30)'];
var i = 0;
document.querySelector('button').addEventListener("click", function(){
    i= i < color.length ? ++i : 0;
    document.getElementById('btn').style.background = color[i];
})

var bgcolor = ['rgb(32, 30, 30)', ' slategray'];
var i = 0;
document.querySelector('button').addEventListener("click", function(){
    i= i < bgcolor.length ? ++i : 0;
    document.querySelector('body').style.background = bgcolor[i];
})




