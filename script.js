////////// start page///////


let gamername;

function start() {


    document.querySelector(".start").remove();
    Swal.fire({
        title: 'enter your name',
        input: 'text',


        inputPlaceholder: 'Enter your name'
    });
    gamername = Swal.getInput();






    setTimeout(function () {


        document.querySelector(".playername").innerHTML = gamername.value;



    }, 5000);
    document.getElementsByClassName("audiostart")[0].play();

}
///////// start game
let game = document.querySelector(".image-container");
let images = document.querySelectorAll(".image-container .box");
let ordernums = [...images.keys()];
order();
function order() {
    for (let i = 0; i < ordernums.length; i++) {
        let randomnumber = Math.floor(Math.random() * (ordernums.length));
        let current = ordernums[i];
        ordernums[i] = randomnumber;
        ordernums[randomnumber] = current;


    }
    images.forEach(function (ele, index) {

        ele.style.order = ordernums[index];


    });

}

document.querySelectorAll(".card").forEach(
    function (ele) {
        ele.onclick = flipcard;


    });
function flipcard() {
    this.classList.add("isflip");
    checktwobox();



}

let scorewrong, scorecorrect;
function checktwobox() {

    if (sessionStorage.getItem("scorewrong")|| sessionStorage.getItem("scorecorrect")) {
        scorewrong = sessionStorage.getItem("scorewrong");


        scorecorrect = sessionStorage.getItem("scorecorrect");
    }
    else {
        scorewrong = scorecorrect = 0;
    }
    let allflip = document.querySelectorAll(".isflip");
    if (allflip.length == 2) {
        document.querySelectorAll(".box").forEach(function (ele) {
            ele.classList.add("isnotflip");


        });
        if (allflip[0].dataset.info == allflip[1].dataset.info) {

            document.querySelector(".correct").innerHTML= ++scorecorrect;
            document.querySelector(".win").play();
        
            sessionStorage.setItem("scorecorrect", scorecorrect);
            setTimeout(function () {
                document.querySelectorAll(".card").forEach(function (element) {
                    element.classList.remove("isflip");
                    allflip[0].classList.add("match");
                    allflip[1].classList.add("match");

                });
                document.querySelectorAll(".box").forEach(function (ele) {
                    ele.classList.remove("isnotflip");


                });

            }, 1000);

        }
        else {
           
            document.querySelector(".wrong").innerHTML = ++scorewrong;
             document.querySelector(".notwin").play();
            sessionStorage.setItem("scorewrong", scorewrong);
          
            setTimeout(function () {
                document.querySelectorAll(".card").forEach(function (element) {
                    element.classList.remove("isflip");
                    element.classList.remove("isnotflip");
                });
                document.querySelectorAll(".box").forEach(function (ele) {
                    ele.classList.remove("isnotflip");


                });

            }, 1000);

        }
    }
    //////check two element


}
