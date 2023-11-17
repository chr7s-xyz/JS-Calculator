let input = document.getElementById('input');
let myform = document.getElementsByName('myform')[0];
console.log(myform)
let resultev = () => {
    myform.res.value = eval(myform.res.value)
    input.style.textAlign = 'center';
}



var root = document.querySelector(':root');
var rootStyles = getComputedStyle(root);
const darkclick = () =>{
    root.style.setProperty('--color-first', 'hsl(0,69%,50%)');
    root.style.setProperty('--color-second', 'hsl(0,0%,0%)');
    root.style.setProperty('--color-third', 'hsl(0,0%,90%)');
    root.style.setProperty('--color-fourth', '#343A40');
    root.style.setProperty('--color-fifth', '#52796F');

    root.style.setProperty('--color-fourthshadow', 'grey');
    root.style.setProperty('--color-firstshadow', 'hsl(0, 65%, 41%)');
}
const lightclick = () => {
  
    root.style.setProperty('--color-first', '#E7C6FF');
    root.style.setProperty('--color-second', '#0081A7');
    root.style.setProperty('--color-third', '#000000');
    root.style.setProperty('--color-fourth', '#EFC3E6');
    root.style.setProperty('--color-fifth', '#CAD2C5');
    
    root.style.setProperty('--color-fourthshadow', '#e698d6');
    root.style.setProperty('--color-firstshadow', 'rgb(100, 206, 245)');


}