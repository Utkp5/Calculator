var result = document.querySelector('#input_text');
let btn = document.getElementById('container');
let btns = btn.querySelectorAll(".item");

// console.log(btns);
for(let i = 0; i<btns.length; i++ )
{
    btns[i].addEventListener("click", function () {
        if (this.innerHTML == "=") {
            result.value = eval(result.value);
        } 
        else if (this.innerHTML == "x") {
            result.value = result.value + "*"; 
        }
        else {
            
            result.value = result.value + this.innerText;
        }
    });
}


let clrtext = document.getElementById("clear_text").addEventListener("click", function () {
 result.value = " ";
});  //ye hm else me bhi likh skte hai is else laga ke uper me
