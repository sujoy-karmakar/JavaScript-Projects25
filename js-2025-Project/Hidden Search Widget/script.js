const inputFild = document.getElementById("search-input");
const button = document.getElementById('btn')
const containerDiv = document.querySelector('.container')


button.addEventListener('click', ()=>{
  
containerDiv.classList.toggle('active')
if(containerDiv.classList.contains('active')){
    inputFild.style.width = '200pc'
}
else{
    inputFild.style.width = "0%"
}
})
