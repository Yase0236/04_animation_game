let points;
let liv;
let myRand;
let speed;

const good = document.querySelector("#good_container");
const good2 = document.querySelector("#good_container2");
const good3 = document.querySelector("#good_container3");
const good4 = document.querySelector("#good_container4");
const good5 = document.querySelector("#good_container5");

const bad = document.querySelector("#bad_container");
const bad2 = document.querySelector("#bad_container2");
const bad3 = document.querySelector("#bad_container3");
const bad4 = document.querySelector("#bad_container4");
const bad5 = document.querySelector("#bad_container5");

window.addEventListener("load", sidenVises);

function sidenVises(){
  console.log("sidenVises");
  window.addEventListener("resize", windowResize);
  windowResize();
  //Skjul andre skærme
  document.querySelector("#game_over").classList.add("hide");
  document.querySelector("#level_complete").classList.add("hide");

  //Vis start skærm
  document.querySelector("#start").classList.remove("hide");

  //Klik på start_knap
  document.querySelector("#start_knap").addEventListener("click", startGame);

  //har fjernet (startGame); kommentaren
}

function windowResize(){
  console.log("windowResize");
  let widthScreen = document.querySelector("#screen").clientWidth;
  let myFontInProcent = 5;
  let myFont = (widthScreen / 100) * myFontInProcent;
  document.querySelector("#score_board").style.fontsize = myFont + "px";
  let myFontInProcent2 = 4;
  let myFont2 = (widthScreen / 100) * myFontInProcent2;
  document.querySelector("#level_complete").style.fontSize = myFont2 + "px";
  document.querySelector("#game_over").style.fontSize = myFont2 + "px";
  document.querySelector("#start").style.fontSize = myFont2 + "px";
}

function startGame (){
  console.log("startGame");

  //Skjul andre skærme
  document.querySelector("#game_over").classList.add("hide");
  document.querySelector("#level_complete").classList.add("hide");
  document.querySelector("#start").classList.add("hide");

  //Nulstil point og udskriv
  points = 0;
  document.querySelector("#score_board").innerHTML = points;
    
  //reset liv til 3
  liv = 3;

  //Vis alle liv
  document.querySelector("#liv1").classList.remove("gray");
  document.querySelector("#liv2").classList.remove("gray");
  document.querySelector("#liv3").classList.remove("gray");    

  //reset speed
  speed = 1;

/*   // TODO: Spil lyd til baggrund music
  document.querySelector("#bgsound").volume = 0.1;
  document.querySelector("#bgsound").currentTime = 0;
  document.querySelector("#bgsound").play(); */

  //start timer
  document.querySelector("#time_sprite").classList.add("time");
  document.querySelector("#time_container").addEventListener("animationend", stopSpillet);


  //random position til good ananas
  myRand = Math.floor(Math.random() * 8) + 1;
  good.classList = "pos" + myRand;
  myRand = Math.floor(Math.random() * 7) + 1;
  good.classList.add("delay");
  good.classList.add("speed" + speed);

  //random position til good jordbær
  myRand = Math.floor(Math.random() * 8) + 1;
  good2.classList = "pos" + myRand;
  myRand = Math.floor(Math.random() * 7) + 1;
  good2.classList.add("delay");
  good2.classList.add("speed" + speed);

  //random position til good græskar
  myRand = Math.floor(Math.random() * 8) + 1;
  good5.classList = "pos" + myRand;
  myRand = Math.floor(Math.random() * 7) + 1;
  good5.classList.add("delay");
  good5.classList.add("speed" + speed);

  //random position til good pære
  myRand = Math.floor(Math.random() * 8) + 1;
  good3.classList = "pos" + myRand;
  myRand = Math.floor(Math.random() * 7) + 1;
  good3.classList.add("delay");
  good3.classList.add("speed" + speed);

  //random position til good vandmelon
  myRand = Math.floor(Math.random() * 8) + 1;
  good4.classList = "pos" + myRand;
  myRand = Math.floor(Math.random() * 7) + 1;
  good4.classList.add("delay");
  good4.classList.add("speed" + speed);
    
  //random position til bad aubergine
  myRand = Math.floor(Math.random() * 8) + 1;
  //de forskellige animationer
  bad.classList = "pos" + myRand;
  myRand = Math.floor(Math.random() * 7) + 1;
  bad.classList.add("delay");
  bad.classList.add("speed" + speed);

  //random position til bad avocado
  myRand = Math.floor(Math.random() * 8) + 1;
  //de forskellige animationer
  bad2.classList = "pos" + myRand;
  myRand = Math.floor(Math.random() * 7) + 1;
  bad2.classList.add("delay");
  bad2.classList.add("speed" + speed);  

  //random position til bad  pære
  myRand = Math.floor(Math.random() * 8) + 1;
  //de forskellige animationer
  bad3.classList = "pos" + myRand;
  myRand = Math.floor(Math.random() * 7) + 1;
  bad3.classList.add("delay");
  bad3.classList.add("speed" + speed);  

  //random position til bad kartoffel
  myRand = Math.floor(Math.random() * 8) + 1;
  //de forskellige animationer
  bad4.classList = "pos" + myRand;
  myRand = Math.floor(Math.random() * 7) + 1;
  bad4.classList.add("delay");
  bad4.classList.add("speed" + speed);  

  //random position til bad paprika
  myRand = Math.floor(Math.random() * 8) + 1;
  //de forskellige animationer
  bad5.classList = "pos" + myRand;
  myRand = Math.floor(Math.random() * 7) + 1;
  bad5.classList.add("delay");
  bad5.classList.add("speed" + speed);  


  //start med fade in animationer
  good.classList.add("fade_in");
  good2.classList.add("fade_in");
  good3.classList.add("fade_in");
  good4.classList.add("fade_in");
  good5.classList.add("fade_in");
  bad.classList.add("fade_in");
  bad2.classList.add("fade_in");
  bad3.classList.add("fade_in");
  bad4.classList.add("fade_in");
  bad5.classList.add("fade_in");

  //lyt efter fade-in animation er færdig
  good.addEventListener("animationend", restartGood);
  good2.addEventListener("animationend", restartGood);
  good3.addEventListener("animationend", restartGood);
  good4.addEventListener("animationend", restartGood);
  good5.addEventListener("animationend", restartGood);

  bad.addEventListener("animationend", restartBad);
  bad2.addEventListener("animationend", restartBad);
  bad3.addEventListener("animationend", restartBad);
  bad4.addEventListener("animationend", restartBad);
  bad5.addEventListener("animationend", restartBad);


  //lyt efter click funktioner
  good.addEventListener("mousedown", goodHandler);
  good2.addEventListener("mousedown", goodHandler);
  good3.addEventListener("mousedown", goodHandler);
  good4.addEventListener("mousedown", goodHandler);
  good5.addEventListener("mousedown", goodHandler);

  bad.addEventListener("mousedown", badHandler);
  bad2.addEventListener("mousedown", badHandler);
  bad3.addEventListener("mousedown", badHandler);
  bad4.addEventListener("mousedown", badHandler);
  bad5.addEventListener("mousedown", badHandler);
}

//-----------------------------------------good element-----------------------------/
function goodHandler(){
  console.log("goodHandler");
  console.log(this);

  //oprydning - kan ikke klikkes flere gange
  this.removeEventListener("mousedown", goodHandler);

  //frys animationen efter den er faded ind
  this.classList.add("paused");

  //Tæl en op på points og udskriv
  points++;
  document.querySelector("#score_board").innerHTML = points;

  if (points >= 4) {
    speed = 3;
  } else if (points >= 3) {
    console.log("speed2");
    speed = 2;
  }

// TODO: Spil lyd til good element
  document.querySelector("#good_elements").volume = 0.2;
  document.querySelector("#good_elements").currentTime = 0;
  document.querySelector("#good_elements").play();
  
  //starter denne animation på sprite
  this.firstElementChild.classList.add("rotate_and_fade_out");

  this.addEventListener("animationend", restartGood);  
}

function restartGood(){
  console.log("restartGood");
  //rydder op og fjerner alt
  this.classList = "";
  this.firstElementChild.classList = "";

  //genstart på ny
  this.offsetLeft;

  //ny position til denne
  myRand = Math.floor(Math.random() * 8) + 1;
  this.classList = "pos" + myRand;

  //sæt speed på
  this.classList.add("speed" + speed);
  //sæt fade_in på element

  this.classList.add("fade_in");
    
  //lyt efter click på element
  this.addEventListener("mousedown", goodHandler);
}


//-----------------------------------------bad element---------------------------------------//
function badHandler(){
  console.log("badHandler");
  console.log(this);

  //oprydning - kan ikke klikkes flere gange
  this.removeEventListener("mousedown", badHandler);
  

  //frys animationen efter den er faded ind
  this.classList.add("paused");

  //Tilføj grå til det liv man er nået til, der efter tæl en ned på liv
  console.log(liv);
  document.querySelector("#liv"+ liv).classList.add("gray");
  liv--;

  // TODO: Spil lyd til bad element
  document.querySelector("#bad_elements").volume = 0.2;
  document.querySelector("#bad_elements").currentTime = 0;
  document.querySelector("#bad_elements").play();

  //starter denne animation på sprite
  this.firstElementChild.classList.add("rotate_and_fade_out");

  this.addEventListener("animationend", restartBad);

  if (liv <= 0 ) {
    console.log("ikke flere liv");
    stopSpillet();
  }
}

function restartBad(){
  console.log("restartBad");

  //rydder op og fjerner alt
  this.classList = "";
  this.firstElementChild.classList = "";

  //genstart på ny
  this.offsetLeft;

  //ny position til denne
  myRand = Math.floor(Math.random() * 8) + 1;
  this.classList = "pos" + myRand;

  //sæt speed på
  this.classList.add("speed" + speed);
  //sæt fade in på elementet
  this.classList.add("fade_in");

  this.addEventListener("mousedown", badHandler);
}


//-----------------------------stopper spillet---------------------------------//
function stopSpillet() {
  console.log("stopSpillet");
  
  //Stop timer
  document.querySelector("#time_sprite").classList.remove("time");
  document.querySelector("#time_container").removeEventListener("animationend", stopSpillet);
  
  //fjern alt er på alle elementers container og sprite
  bad.classList = "hide";
  bad.firstElementChild.classList = "";
  bad2.classList = "hide";
  bad2.firstElementChild.classList = "";
  bad3.classList = "hide";
  bad3.firstElementChild.classList = "";
  bad4.classList = "hide";
  bad4.firstElementChild.classList = "";
  bad5.classList = "hide";
  bad5.firstElementChild.classList = "";

  good.classList = "hide";
  good.firstElementChild.classList = "";
  good2.classList = "hide";
  good2.firstElementChild.classList = "";
  good3.classList = "hide";
  good3.firstElementChild.classList = "";
  good4.classList = "hide";
  good4.firstElementChild.classList = "";
  good5.classList = "hide";
  good5.firstElementChild.classList = "";

/*   //fjerner alle elementer på skærmen efter spillet er færdigt 
  document.querySelector("#good_sprite").style.display = "none";
  document.querySelector("#good_sprite2").style.display = "none";
  document.querySelector("#good_sprite3").style.display = "none";
  document.querySelector("#good_sprite4").style.display = "none";
  document.querySelector("#good_sprite5").style.display = "none";

  document.querySelector("#bad_sprite").style.display = "none";
  document.querySelector("#bad_sprite2").style.display = "none";
  document.querySelector("#bad_sprite3").style.display = "none";
  document.querySelector("#bad_sprite4").style.display = "none";
  document.querySelector("#bad_sprite5").style.display = "none"; */
  
  //fjern alle event listener på alle containere
  document.querySelector("#bad_container").removeEventListener("animationiteration", restartBad);
  document.querySelector("#bad_container").removeEventListener("animationend", restartBad);
  document.querySelector("#bad_container").removeEventListener("mousedown", badHandler);

  document.querySelector("#bad_container2").removeEventListener("animationiteration", restartBad);
  document.querySelector("#bad_container2").removeEventListener("animationend", restartBad);
  document.querySelector("#bad_container2").removeEventListener("mousedown", badHandler);

  document.querySelector("#bad_container3").removeEventListener("animationiteration", restartBad);
  document.querySelector("#bad_container3").removeEventListener("animationend", restartBad);
  document.querySelector("#bad_container3").removeEventListener("mousedown", badHandler);

  document.querySelector("#bad_container4").removeEventListener("animationiteration", restartBad);
  document.querySelector("#bad_container4").removeEventListener("animationend", restartBad);
  document.querySelector("#bad_container4").removeEventListener("mousedown", badHandler);

  document.querySelector("#bad_container5").removeEventListener("animationiteration", restartBad);
  document.querySelector("#bad_container5").removeEventListener("animationend", restartBad);
  document.querySelector("#bad_container5").removeEventListener("mousedown", badHandler);

  document.querySelector("#good_container").removeEventListener("animationiteration", restartGood);
  document.querySelector("#good_container").removeEventListener("animationend", restartGood);
  document.querySelector("#good_container").removeEventListener("mousedown", goodHandler);

  document.querySelector("#good_container2").removeEventListener("animationiteration", restartGood);
  document.querySelector("#good_container2").removeEventListener("animationend", restartGood);
  document.querySelector("#good_container2").removeEventListener("mousedown", goodHandler);

  document.querySelector("#good_container3").removeEventListener("animationiteration", restartGood);
  document.querySelector("#good_container3").removeEventListener("animationend", restartGood);
  document.querySelector("#good_container3").removeEventListener("mousedown", goodHandler);

  document.querySelector("#good_container4").removeEventListener("animationiteration", restartGood);
  document.querySelector("#good_container4").removeEventListener("animationend", restartGood);
  document.querySelector("#good_container4").removeEventListener("mousedown", goodHandler);

  document.querySelector("#good_container5").removeEventListener("animationiteration", restartGood);
  document.querySelector("#good_container5").removeEventListener("animationend", restartGood);
  document.querySelector("#good_container5").removeEventListener("mousedown", goodHandler);
   
  if (liv < 0) {
    gameOver();
  } else if (points >= 10) {
    levelComplete();
  } else {
    gameOver();
  }
}


//--------------------------------GAME OVER------------------------------// 
function gameOver(){
  console.log("GAMEOVER");
 
/*   //ikke nødvendigt at skrive disse to linjer
  document.querySelector("#level_complete").classList.add("hide");
  document.querySelector("#start").classList.add("hide"); */

  //Vis gameover skærm
  document.querySelector("#game_over").classList.remove("hide");

  //udskriv point 
  document.querySelector("#game_over_points");


  document.querySelector("#game_over_points").textContent = 
  "Du har fået " + points + " point";

  // TODO: Spil lyd til gameover skærm
  document.querySelector("#gameover").volume = 0.2;
  document.querySelector("#gameover").currentTime = 0;
  document.querySelector("#gameover").play();

  //Klik på genstart1
  document.querySelector("#restart1").addEventListener("click", startGame);
}

//----------------------------------LEVEL COMPLETE----------------------//  
function levelComplete(){
  console.log("Yaay you won");
  
/*   //ikke nødvendigt at skrive disse to linjer
  document.querySelector("#game_over").classList.add("hide");
  document.querySelector("#start").classList.add("hide"); */

  //Vis levelComplete skærm
  document.querySelector("#level_complete").classList.remove("hide");

  //udskriv point  
  document.querySelector("#level_complete_points");

  //points
  document.querySelector("#level_complete_points").textContent = 
  "Du har fået " + points + " point";


// TODO: Spil lyd til level complete skærm
  document.querySelector("#level_complete").volume = 0.2;
  document.querySelector("#level_complete").currentTime = 0;
  // document.querySelector("#level_complete").play();  

  //Klik på genstart2
  document.querySelector("#restart2").addEventListener("click", startGame);
  
}
