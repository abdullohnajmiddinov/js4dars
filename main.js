// let num = 6;

// if (num === 5) {
//   console.log("togri");
// } else if (num === 6) {
//   console.log("togri 6");
// } else {
//   console.log("notogri");
// }

let a = (Math.round(Math.random() *100));
alert(`${"Random orqali chiqgan son:  "}${a}`)

if(a % 3 === 0 && a % 5===0){
 alert(a + ' :fizzbuzz')
}
else if (a % 3 === 0) {
    alert(a + ' :fizz')
}

else if (a % 5 === 0) {
    alert(a + ' :buzz')
}


else {
    alert(a + ' soni fizz ham buzz ham fizzbuzz ham emas')
}

