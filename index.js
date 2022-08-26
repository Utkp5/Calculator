var result = document.querySelector('#input_text');
let btn = document.getElementById('container');
let btns = btn.querySelectorAll(".item");

// console.log(btns);
for(let i = 0; i<btns.length; i++ )
{
    btns[i].addEventListener("click", function () {
        console.log(this.innerHTML);
        // alert(this.innerText);
        result.value = result.value + this.innerText;
    });
}


let clrtext = document.getElementById("clear_text").addEventListener("click", function () {
 result.value = " ";
});
