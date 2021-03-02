
// 预加载
function preload(){
    let gif = new Image();
    gif.src = "../xiaofan/img/base64/tom.gif";
}
preload();

const start_btn = document.querySelector(".start-btn");
const loadPage = document.querySelector(".load");
const page1 = document.querySelector(".page1");
const page1TxtMod = document.querySelector(".page1>.text");
const page1Txt = document.querySelector("#page1-txt");
const $btnLike = document.querySelector(".btn-like");
const $btnUnlike = document.querySelector(".btn-unlike");
const $dialog = document.querySelector(".dialog");
const $dialogTxt = document.querySelector(".dialog>.main");
const $dialogbtn = document.querySelector(".dialog>button");
const $time = document.querySelector(".time-cumulate");
const $bgm = document.querySelector("audio");
const $page2 = document.querySelector(".page2");
const page2TxtMod = document.querySelector(".page2-main>.text");
const page2Txt = document.querySelector("#page2-txt");

let index;
let diaglogTxt = ["愿你像星星⭐一样",
                  "眼👀里永远有光芒",
                  "女生节快乐",
                  "一生被爱",
                  "一生可爱",
                  "💗"]


setTimeout(() => {
    start_btn.style.marginLeft = "0"
}, 2000);
start_btn.addEventListener("click", function(e){
    $bgm.play();
    start_btn.style.marginLeft = "200%";
    setTimeout(() => {
        loadPage.classList.add("hide");
        page1.classList.remove("hide");

        printTxt1();
    }, 500);
    setTimeout(() => {
        $time.classList.remove("hide");
    }, 1000);
})

function type(input, output){
    let htmlModel = input.innerText;
    output.innerText = htmlModel.substring(0,index++);
    console.log(htmlModel.substring(0,index))
    if(index % 3 == 0){
        output.className = "";
    }else if(index % 3 == 1){
        output.className = "saying";
    }
}

// 打印第一页文字
function printTxt1(){
    index = 0;
    let time = setInterval(function(){
        let htmlModel = page1TxtMod.innerText;
        page1Txt.innerText = htmlModel.substring(0,index++);
        console.log(htmlModel.substring(0,index))
        if(index % 3 == 0){
            page1Txt.className = "";
        }else if(index % 3 == 1){
            page1Txt.className = "saying";
        }
    
        if(index > htmlModel.length){
            page1Txt.className = "";
            clearInterval(time);
            $btnLike.style.left = "10%";
            $btnUnlike.style.right = "10%"
        }
    }, 200);
}
// 打印第二页文字
function printTxt2(){
    index = 0;
    let time = setInterval(function(){
        let htmlMode2 = page2TxtMod.innerText;
        page2Txt.innerText = htmlMode2.substring(0,index++);
        console.log(htmlMode2.substring(0,index))
        if(index % 3 == 0){
            page2Txt.className = "";
        }else if(index % 3 == 1){
            page2Txt.className = "saying";
        }
    
        if(index > htmlMode2.length){
            page2Txt.className = "";
            clearInterval(time);
        }
    }, 200);
}
// printTxt2();

// 喜欢与不喜欢按钮
$btnLike.addEventListener("click", function(e){
    e.stopPropagation();
    $dialog.classList.remove("hide")
})

// 对话框逻辑
let dialogIdx = 0;
$dialogbtn.addEventListener("click", function(){
    if(dialogIdx >= diaglogTxt.length){
        $dialog.classList.add("hide");
        $page2.classList.remove("hide");
        setTimeout(() => {
            printTxt2()
        }, 10000);
        return;
    }
    $dialogTxt.innerText = diaglogTxt[dialogIdx++];
    $dialog.classList.add("hide");
    setTimeout(() => {
        $dialog.classList.remove("hide");
    }, 100);
})


// 时间
const $day = document.querySelector(".day");
const $hour = document.querySelector(".hour");
const $min = document.querySelector(".min");
const $second = document.querySelector(".second");
function timeAni(){
    var day = Math.floor(new Date().getTime() / 1000) - (new Date('2021-1-20').getTime() / 1000),
    day2 = Math.floor(day / (24 * 3600)),
    day3 = day2 * 24 * 3600,
    day4 = day - day3,
    day5 = Math.floor(day4 / 3600),
    day6 = day4 - day5 * 3600,
    day7 = Math.floor(day6 / 60),
    day8 = day6 - day7 * 60;
    $day.innerText = day2;
    $hour.innerText = day5;
    $min.innerText = day7;
    $second.innerText = day8;
};
setInterval(timeAni, 1000);
