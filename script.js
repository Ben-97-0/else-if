//How to use if/ else

 boxval = document.getElementById("box1");
//let min = document.getElementById("min")
//let med = document.getElementById("med");
//let max = document.getElementById("max");
//let box1 = document.getElementById("box1")

document.getElementById("btn").addEventListener("click", clickedbtn)
function clickedbtn () {
if (boxval.value == "min") {
let inp3 = +document.getElementById("inp1").value;
let inp4 = +document.getElementById("inp2").value;
answer = inp3 + inp4;
document.getElementById("para").innerHTML = answer;
console.log(answer)
}
else if (boxval.value == "med") {
    let inp3 = +document.getElementById("inp1").value;
   let inp4 = +document.getElementById("inp2").value;
        answer = inp3 - inp4;
         document.getElementById("para").innerHTML = answer;
}
else {
        let inp3 = +document.getElementById("inp1").value;
    let inp4 = +document.getElementById("inp2").value;
    answer = inp3 * inp4
    document.getElementById("para").innerHTML = answer;
}
}




