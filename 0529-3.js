const $popup = document.querySelector("#popup");
$popup.children[1].addEventListener("click" , dat );
function dat(){
$popup.style.display = "none";
}

const $footer = document.querySelector("footer");
$footer.addEventListener("click" , ne ); // $footer(지정:이것을).addEventListener(이벤트를 발생시켜라)("click"(조건:클릭하면) , ne );
function ne(){
$popup.style.display = "block";
}

 const $subMenu = document.querySelector("nav li:first-child a:last-child");
$subMenu.addEventListener("click" , gg ); // $footer(지정:이것을).addEventListener(이벤트를 발생시켜라)("click"(조건:클릭하면) , ne );
function gg() {
    $subMenu.style.background='pink';
    $subMenu.style.textDecoration ='underline';
}

const $qqq = document.querySelector("#qq");
$qqq.addEventListener("click" , qq ); // $footer(지정:이것을).addEventListener(이벤트를 발생시켜라)("click"(조건:클릭하면) , ne );
function qq() {
    $qqq.style.background='pink';
    $qqq.style.textDecoration ='underline';
}

const $www = document.querySelector(".ww");
$www.addEventListener("mouseup" , ww);
function ww() {
    $www.style.color='pink';
    $www.style.textDecoration ='underline';
}

const $ooo = document.querySelector("#popup");
$ooo.addEventListener("click" , popup );
function popup() {
    $ooo.style.background='rgb(255, 255, 255)';
}

const zzz = document.querySelectorAll(".zz");
//받아온 수만큼 각 요소에 기능을 넣어준다. 
zzz.forEach(function(item) {
    item.addEventListener('click',()=>{
        item.style.background = "pink";
        item.style.textDecoration ='underline';    
    });
} );

