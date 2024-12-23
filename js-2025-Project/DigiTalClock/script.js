let newClock = document.getElementById('clock')

function updateClock(){
    const now = new Date();
    console.log(now);
    const hours = String(now.getHours()).padStart("2","0")
    console.log(hours);
    const minutes= String(now.getMinutes()).padStart("2","0")
    console.log(minutes);
    const seconds = String(now.getSeconds()).padStart("2","0")
    console.log(seconds);
const timeStringClock = `${hours}: ${minutes}: ${seconds}`

newClock.textContent=timeStringClock;
}
setInterval(updateClock,1000)
updateClock()