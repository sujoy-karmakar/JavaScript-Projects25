## Digital Clock

> - **`new Date`** : is a js method using which we can get new date; which create a new date obj;
```
<!-- EX -->
let now = new Date()
console.log(now); // বর্তমান তারিখ এবং সময় দেখাবে (যেমন: Tue Dec 18 2024 10:30:45 GMT+0530)
```
-----
> - **`getHours`** : It's give the current time of hour; between(0-23)
> - **`getMunites`** It's gitve the current time of munite; between(0-59)
> - **`getSeconds`** It's give the current time of second; 
between(0-59)

```
const now = new Date();
console.log(now.getHours());   // যেমন: ১০
console.log(now.getMinutes()); // যেমন: ৩০
console.log(now.getSeconds()); // যেমন: ৪৫
```

---
> - **`String().padStart("2","0")`** it is a method in js using this it check the size of the string and if need then it use 0 left of the singale value

```
const singleDigit = '5';
console.log(singleDigit.padStart(2, '0')); // Output: "05"

const alreadyTwoDigits = '10';
console.log(alreadyTwoDigits.padStart(2, '0')); // Output: "10"

```