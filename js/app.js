let colors = [0,1,2,3,4,5,6,7,8,9,"a","b","c","d","e","f"];

let randomColor = "";

let colorText = document.getElementById("colorText");


document.getElementById("btn").onclick =()=>
{
    randomColor = getRandomColor();
    colorText.value = randomColor;
    colorText.style.color = randomColor;
    document.body.style.backgroundColor = randomColor;
}


document.getElementById("icon").onclick= ()=>
{
    colorText.select();
    navigator.clipboard.writeText(colorText.value);
    document.getElementById("copied").style.opacity = "1";
    let handle = setTimeout(() => {
        document.getElementById("copied").style.opacity = "0";
        clearTimeout(handle);
    }, 300);
   
}


function getRandomColor(){
    let hexColor= "#";
    for(let i =0;i<6;i++){
        hexColor+= colors[Math.floor(Math.random()*colors.length)];
    }
    return hexColor;
}