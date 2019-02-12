/*
    interactive story by jayson 
*/

// global variable

//beginning, endone, endtwo
var currentSetting = "beginning";

function setup() {
    createCanvas(windowWidth, windowHeight);
}

function bg() {

    //sky
    fill('#aec4e5');
    noStroke();
    rect(0, 0, 1000, 8000);

    //ground
    fill('#604130');
    noStroke();
    rect(0, 700, 1000, 2000);

    //grass
    fill('#308744');
    noStroke();
    rect(0, 700, 1000, 100);
}

function draw() {
    background(50);

    if (currentSetting == "beginning") {

        bg();
        // first character
        fill('#4c7e84');
        noStroke();
        ellipse(200, 590, 260, 200); // body
        stroke(0);
        ellipse(250, 570, 20, 35); // left eye
        ellipse(200, 570, 20, 35); // right eye

        // second character
        fill('#8c5269');
        noStroke();
        arc(500, 590, 200, 200, 0, PI + QUARTER_PI, CHORD); //body
        stroke(0);
        arc(500, 570, 20, 27, 0, PI, CHORD); //right eye
        arc(450, 570, 20, 27, 0, PI, CHORD); //left eye

        //wall
        fill('#422222');
        noStroke();
        rect(800, 100, 100, 600);

        //bubbleone
        fill('white');
        noStroke();
        ellipse(200, 400, 160, 100);
        ellipse(270, 440, 80, 50);
        ellipse(270, 470, 40, 25);
        fill('#3a3a3a');
        rect(165, 365, 80, 40);
        fill('#7a671d');
        rect(196, 404, 17, 40);

        //bubbletwo
        fill('white');
        noStroke();
        ellipse(600, 460, 160, 100);
        ellipse(540, 500, 80, 50);
        ellipse(540, 530, 40, 25);
        fill('#9e2929');
        rect(570, 430, 60, 25);
        fill('#bababa');
        rect(575, 470, 50, 8);
        rect(575, 460, 50, 8);

    } else if (currentSetting == "endone") {

    }


}