// Here you can access the colors variable
// have fun

let btnRandom = document.getElementById('genNew');
let divv = document.getElementById('pallete');

function getRandomNum(min, max){
    let st1 = max - min + 1;
    let st2 = Math.random() * st1;
    let result = Math.floor(st2) + min;
    return result;
}
btnRandom.addEventListener('click',()=> {
    let ttt = getRandomNum(0, colors.length-1);
    document.getElementById('pallete').style.backgroundColor = colors[ttt];
    document.getElementById('color').value = colors[ttt];
    document.getElementById('color').style.color = colors[ttt];
});
function changecolor(){
    document.getElementById("pallete").style.backgroundColor = document.getElementById('color').value;
}
