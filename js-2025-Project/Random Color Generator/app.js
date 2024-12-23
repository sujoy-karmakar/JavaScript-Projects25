const colorBtn = document.getElementById("btn")
const colorCode = document.getElementById("color-code")
function generateRandomColor(){
    const randomColor = '#'+ Math.floor(Math.random()*16777215).toString(16)
    return randomColor}

    colorBtn.addEventListener('click', ()=>{
        let newColor= generateRandomColor()
        document.body.style.backgroundColor=newColor;
        colorCode.textContent=`${newColor}`
    })