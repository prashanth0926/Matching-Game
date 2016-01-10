var count=2;
var random_num = 0;
var this_image;
var this_image1;
var x = 20;
var left_div;
var right_div;
var the_body;
var top_position;
var left_position;
var start = Date.now(),
        diff,
        minutes,
        seconds;
var score=0;
function show_pattern(){
    start_timer();
    
    the_body = document.getElementById("theBody");
    left_div = document.getElementById("leftDiv");
    left_div.width = "45%";
    left_div.style.borderRight = "thick solid #0000FF";
    right_div = document.getElementById("rightDiv");
    right_div.width = "45%";
    right_div.style.left = "55%";
    right_div.style.borderLeft = "thick solid #0000FF"
    add_images();
}
function add_images(){
    for(var i=0;i<count;i++){
        left_div.appendChild(image_tag());
        right_div.appendChild(image_tag1());
    }
    var crctImg = image_tag();
    crctImg.onclick = function(){ 
        score += 1;
        start = Date.now()+999;
        start_timer();
        for(z=0; z<document.getElementsByTagName("img").length;z++){                                 document.getElementsByTagName("img")[z].style.display="none";
                     }
count *= 2; add_images();
    document.getElementById("score").innerHTML = score; }
    left_div.appendChild(crctImg);
    the_body.appendChild(left_div);
    the_body.appendChild(right_div);
}
function random_number(x){
    random_num = Math.random()*x;
    random_num = Math.floor(random_num);
    return random_num;
}
function image_tag(){
    top_position = random_number(768);
    left_position = random_number(675);
    this_image = document.createElement("img");
    this_image.style.top = top_position +"px";
    this_image.style.left = left_position +"px";
    this_image.src = "smile.png";
    this_image.alt = "smiley";
    this_image.onclick = function(){alert("Game Over! \n\n Your Score is: "+score); count=2; window.location.reload();};
    return this_image;
}
function image_tag1(){
    this_image1 = document.createElement("img");
    this_image1.style.top = top_position +"px";
    this_image1.style.left = left_position +"px";
    this_image1.src = "smile.png";
    this_image1.alt = "smiley";
    this_image1.onclick = function(){alert("Game Over! \n\n Your Score is: "+score); count=2; window.location.reload();};
    return this_image1;
}

function startTimer(duration, display) {
    function timer() {
        // get the number of seconds that have elapsed since 
        // startTimer() was called
        diff = duration - (((Date.now() - start) / 1000) | 0);

        // does the same job as parseInt truncates the float
        minutes = (diff / 60) | 0;
        seconds = (diff % 60) | 0;

        minutes = minutes < 10 ? "0" + minutes : minutes;
        seconds = seconds < 10 ? "0" + seconds : seconds;

        display.textContent = minutes + ":" + seconds; 

        if (diff <= 0) {
            // add one second so that the count down starts at the full duration
            // example 05:00 not 04:59
            start = Date.now() + 1000;
            alert("Time Up! \n\n Game Over! \n\n Your Score is: "+score);
            window.location.reload();
        }
    };
    // we don't want to wait a full second before the timer starts
    timer();
    setInterval(timer, 1000);
}

function start_timer() {
    var oneMinute = 60 * 1,
        display = document.querySelector('#time');
    startTimer(oneMinute, display);
};