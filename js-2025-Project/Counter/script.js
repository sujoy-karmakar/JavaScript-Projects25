const count = document.getElementById("count")
const addNum = document.getElementById("add")
const resetNum = document.getElementById("reset")
const subNum = document.getElementById("subs")

let countNum = 0;

subNum.addEventListener("click",()=>{
  countNum--
  count.innerHTML=countNum
})
resetNum.addEventListener("click",()=>{
   countNum = 0
    count.innerHTML=countNum
  })
  addNum.addEventListener("click",()=>{
    countNum++
    count.innerHTML=countNum
  })
    