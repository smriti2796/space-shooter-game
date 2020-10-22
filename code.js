var p5Inst = new p5(null, 'sketch');

window.preload = function () {
  initMobileControls(p5Inst);

  p5Inst._predefinedSpriteAnimations = {};
  p5Inst._pauseSpriteAnimationsByDefault = false;
  var animationListJSON = {"orderedKeys":["bb01b2f0-58e8-4536-ac9a-6923e0fea23a","64b95d20-999b-40ac-9ab3-0bf04bddce28","fa1fa97f-6840-4961-8087-e40e93f4238f","b363769a-5ef2-4c52-800e-1788d3dc612e","1b0933f3-3d1e-4a9c-93d8-4d695326cd31","fc1ed1c0-a546-4a07-8eba-0d5598b2fc78","db4a888e-1082-45e2-b00a-a55f205aca1b","88853a30-86b3-45aa-be46-e935be470a4f"],"propsByKey":{"bb01b2f0-58e8-4536-ac9a-6923e0fea23a":{"name":"alien","sourceUrl":"assets/api/v1/animation-library/gamelab/Dz9.cydbAADxZqnDUs9C7cNcF_F4xck5/category_characters/floating_alien.png","frameSize":{"x":239,"y":406},"frameCount":1,"looping":true,"frameDelay":2,"version":"Dz9.cydbAADxZqnDUs9C7cNcF_F4xck5","loadedFromSource":true,"saved":true,"sourceSize":{"x":239,"y":406},"rootRelativePath":"assets/api/v1/animation-library/gamelab/Dz9.cydbAADxZqnDUs9C7cNcF_F4xck5/category_characters/floating_alien.png"},"64b95d20-999b-40ac-9ab3-0bf04bddce28":{"name":"monster","sourceUrl":"assets/api/v1/animation-library/gamelab/BHJWF812ARLlKRd3Tk0aX_Zyb9HLKrly/category_characters/orange_monster.png","frameSize":{"x":240,"y":300},"frameCount":1,"looping":true,"frameDelay":2,"version":"BHJWF812ARLlKRd3Tk0aX_Zyb9HLKrly","loadedFromSource":true,"saved":true,"sourceSize":{"x":240,"y":300},"rootRelativePath":"assets/api/v1/animation-library/gamelab/BHJWF812ARLlKRd3Tk0aX_Zyb9HLKrly/category_characters/orange_monster.png"},"fa1fa97f-6840-4961-8087-e40e93f4238f":{"name":"alien2","sourceUrl":"assets/api/v1/animation-library/gamelab/cyB_0D9pcYkQw_IKGfeHOm_4oFwn.kmk/category_characters/red_alien.png","frameSize":{"x":318,"y":333},"frameCount":1,"looping":true,"frameDelay":2,"version":"cyB_0D9pcYkQw_IKGfeHOm_4oFwn.kmk","loadedFromSource":true,"saved":true,"sourceSize":{"x":318,"y":333},"rootRelativePath":"assets/api/v1/animation-library/gamelab/cyB_0D9pcYkQw_IKGfeHOm_4oFwn.kmk/category_characters/red_alien.png"},"b363769a-5ef2-4c52-800e-1788d3dc612e":{"name":"bot","sourceUrl":"assets/api/v1/animation-library/gamelab/quoa4.I3I2BmotFDbwakNBk9f39n50S_/category_characters/wing_bot.png","frameSize":{"x":218,"y":128},"frameCount":8,"looping":true,"frameDelay":2,"version":"quoa4.I3I2BmotFDbwakNBk9f39n50S_","loadedFromSource":true,"saved":true,"sourceSize":{"x":1744,"y":128},"rootRelativePath":"assets/api/v1/animation-library/gamelab/quoa4.I3I2BmotFDbwakNBk9f39n50S_/category_characters/wing_bot.png"},"1b0933f3-3d1e-4a9c-93d8-4d695326cd31":{"name":"bullet","sourceUrl":null,"frameSize":{"x":100,"y":100},"frameCount":1,"looping":true,"frameDelay":12,"version":"0RVA8buMxUDu504.c3Cyc1H4xi0r9H24","loadedFromSource":true,"saved":true,"sourceSize":{"x":100,"y":100},"rootRelativePath":"assets/1b0933f3-3d1e-4a9c-93d8-4d695326cd31.png"},"fc1ed1c0-a546-4a07-8eba-0d5598b2fc78":{"name":"spacecraft","sourceUrl":"assets/api/v1/animation-library/gamelab/7eOaJzJi2IJDNiuNWLPRwYIsKsqQjpHA/category_vehicles/playerShip2_red.png","frameSize":{"x":112,"y":75},"frameCount":1,"looping":true,"frameDelay":2,"version":"7eOaJzJi2IJDNiuNWLPRwYIsKsqQjpHA","loadedFromSource":true,"saved":true,"sourceSize":{"x":112,"y":75},"rootRelativePath":"assets/api/v1/animation-library/gamelab/7eOaJzJi2IJDNiuNWLPRwYIsKsqQjpHA/category_vehicles/playerShip2_red.png"},"db4a888e-1082-45e2-b00a-a55f205aca1b":{"name":"bg","sourceUrl":"assets/v3/animations/HPtw53EEa0htbIHZH86Cjn6AWT7iCem39Zym2RsFkck/db4a888e-1082-45e2-b00a-a55f205aca1b.png","frameSize":{"x":4214,"y":2370},"frameCount":1,"looping":true,"frameDelay":4,"version":"WMboVU7wAOpgljZ96zWBSToOIQlNAAHg","loadedFromSource":true,"saved":true,"sourceSize":{"x":4214,"y":2370},"rootRelativePath":"assets/v3/animations/HPtw53EEa0htbIHZH86Cjn6AWT7iCem39Zym2RsFkck/db4a888e-1082-45e2-b00a-a55f205aca1b.png"},"88853a30-86b3-45aa-be46-e935be470a4f":{"name":"bg2","sourceUrl":"assets/v3/animations/cSCpiX8hDY4koH0T2aExkVzy8Bly21t2v7KET-mMpWo/88853a30-86b3-45aa-be46-e935be470a4f.png","frameSize":{"x":1920,"y":1080},"frameCount":1,"looping":true,"frameDelay":4,"version":"EXlwBt3zHl970MY_4YHjprTSOFFZXLfG","loadedFromSource":true,"saved":true,"sourceSize":{"x":1920,"y":1080},"rootRelativePath":"assets/v3/animations/cSCpiX8hDY4koH0T2aExkVzy8Bly21t2v7KET-mMpWo/88853a30-86b3-45aa-be46-e935be470a4f.png"}}};
  var orderedKeys = animationListJSON.orderedKeys;
  var allAnimationsSingleFrame = false;
  orderedKeys.forEach(function (key) {
    var props = animationListJSON.propsByKey[key];
    var frameCount = allAnimationsSingleFrame ? 1 : props.frameCount;
    var image = loadImage(props.rootRelativePath, function () {
      var spriteSheet = loadSpriteSheet(
          image,
          props.frameSize.x,
          props.frameSize.y,
          frameCount
      );
      p5Inst._predefinedSpriteAnimations[props.name] = loadAnimation(spriteSheet);
      p5Inst._predefinedSpriteAnimations[props.name].looping = props.looping;
      p5Inst._predefinedSpriteAnimations[props.name].frameDelay = props.frameDelay;
    });
  });

  function wrappedExportedCode(stage) {
    if (stage === 'preload') {
      if (setup !== window.setup) {
        window.setup = setup;
      } else {
        return;
      }
    }
// -----

var bg=createSprite(200,230,400,400);
bg.setAnimation("bg");
bg.scale=0.2;
// space background

var spacecraft = createSprite(200, 350);
spacecraft.setAnimation("spacecraft");
spacecraft.scale=0.7;
//this creates spacecraft


var alien1 = createSprite(70, 20);
alien1.setAnimation("alien");
alien1.scale=0.13;

var alien2 = createSprite(150, 130);
alien2.setAnimation("alien");
alien2.scale=0.13;

var alien3 = createSprite(350, 60);
alien3.setAnimation("monster");
alien3.scale=0.13;

var alien4 = createSprite(260, 175);
alien4.setAnimation("monster");
alien4.scale=0.13;

var alien5 = createSprite(350, 210);
alien5.setAnimation("bot");
alien5.scale=0.2;

var alien6 = createSprite(30, 90);
alien6.setAnimation("bot");
alien6.scale=0.2;

var alien7 = createSprite(250, 20);
alien7.setAnimation("bot");
alien7.scale=0.2;
//these creates 7 alien's sprite

var bullets=[];
for(var k=0;k<9;k++){
 bullets[k] = createSprite(500, 200);
 bullets[k].setAnimation("bullet");
 bullets[k].scale = 0.3;
}
// for firing bullets

var j=0;
var score=0;
var gameState="serve";
// diff variables to keep different count

function draw() {
 background("white");
 
bg.velocityX=-1;
// this craetes moving background

 drawSprites();
 
 if(bg.x<0){
   bg.x=400;
 }
 //this loops the background
 
 if(gameState==="serve")
 {
   score=0;
   textSize(16);
   text("PRESS 'SPACE' TO START",100,280);
  
  alien1.x=70;
  alien1.y=20;
  
  alien2.x=150;
  alien2.y=130;
  
  alien3.x=350;
  alien3.y=75;
  
  alien4.x=260;
  alien4.y=175;
  
  alien5.x=350;
  alien5.y=210;
  
  alien6.x=30;
  alien6.y=90;
  
  alien7.x=250;
  alien7.y=20;
 
 for(var k=0;k<9;k++){
  bullets[k] = createSprite(500, 200);
  bullets[k].setAnimation("bullet");
  bullets[k].scale = 0.3;
 }
}
//this is the starting state of the game
 
 textSize(18);
 fill("red");
 text("KILL : "+score, 315,380);
 //to display the scores 
 
 createEdgeSprites();
 alien1.bounceOff(edges);
 alien2.bounceOff(edges);
 alien3.bounceOff(edges);
 alien4.bounceOff(edges);
 alien5.bounceOff(edges);
 alien6.bounceOff(edges);
 alien7.bounceOff(edges);
 
 alien5.bounce(alien6);
 alien5.bounce(alien7);
 
 alien6.bounce(alien7);
  
 spacecraft.bounceOff(edges);
//to make sprites not go out of the screen


 if(keyDown("space")&& gameState==="serve" ){
  move();
  gameState="play";
}
// this starts the game

if(gameState==="play"){
  if(keyDown("right")){
  spacecraft.x=spacecraft.x+5;
}
 if(keyDown("left")){
   spacecraft.x=spacecraft.x-5;
 }  
}
 //this controls the spacecraft
 
 
 if(keyWentDown("space") && gameState==="play"){
  playSound("assets/category_pop/bamboo_pop_v2_notification4.mp3", false);
    
  bullets[j].x=spacecraft.x;
  bullets[j].y=spacecraft.y-40;
  bullets[j].velocityY=-4;
  j=j+1;
  
  if(j>8){
    j=0;
  }
  if(bullets[j].x<0){
    bullets[j].destroy();
  }
}
//to make bullets come out of the spacecraft

for(var i=0 ; i<9 ;i++){
  if(bullets[i].isTouching(alien1) && gameState==="play"){
    alien1.x=70;
    alien1.y=20;
    score=score+1;
  }
  if(bullets[i].isTouching(alien2)&& gameState==="play"){
    alien2.x=350;
    alien2.y=130;
    score=score+1;
  }
  if(bullets[i].isTouching(alien3)&& gameState==="play"){
    alien3.x=350;
    alien3.y=60;
    score=score+1;
  }
  if(bullets[i].isTouching(alien4)&& gameState==="play"){
    alien4.x=260;
    alien4.y=175;
    score=score+1;
  }
  if(bullets[i].isTouching(alien5)&& gameState==="play"){
    alien5.x=350;
    alien5.y=210;
    score=score+1;
  }
  if(bullets[i].isTouching(alien6)&& gameState==="play"){
    alien6.x=30;
    alien6.y=90;
    score=score+1;
  }
  if(bullets[i].isTouching(alien7)&& gameState==="play"){
    alien7.x=250;
    alien7.y=20;
    score=score+1;
  }
}
// for killing aliens and increasing kills


 if(alien5.isTouching(spacecraft) || alien6.isTouching(spacecraft)
  || alien7.isTouching(spacecraft)){
  
    gameState="over"; 
    fill("red");
    stroke("black");
    text("PRESS 'R' TO RESTART ",110,280);
    textSize(28);
    text("GAME OVER",120,250);
    stop();
  
  }
  
  if((score===100) ||( score>=99)){
    gameState="over";
    stop();
    
    spacecraft.x=500;
    spacecraft.y=350;
    
    alien1.x=570;
    alien1.y=20;
  
    alien2.x=550;
    alien2.y=130;
  
    alien3.x=550;
    alien3.y=75;
  
    alien4.x=560;
    alien4.y=175;
  
    alien5.x=550;
    alien5.y=210;
  
    alien6.x=530;
    alien6.y=90;
  
    alien7.x=550;
    alien7.y=20;
    
    stroke("black");
    strokeWeight(5);
    fill("deepskyblue");
    
    text("PRESS 'R' TO RESTART ",95,270);
    text("YOUR SCORES :"+score,120,300);
    textSize(25);
    fill("GAINSBORO");
    text("YOU SAVED THE PLANET!",50,230);
  
  }
//both this if are for game over condition


if(keyDown("r") && gameState==="over"){
  
  gameState="serve";
  score=0;
  spacecraft.x=200;
  spacecraft.y=350;
 }
 //this restarts the game
}

function move(){
  alien1.velocityX=3;
  alien2.velocityX=-3;
  alien3.velocityX=3; 
  alien4.velocityX=-3;
  alien5.velocityX=-0.5;
  alien5.velocityY=-2;
  alien6.velocityX=-2;
  alien6.velocityY=0.5;
  alien7.velocityX=-1;
  alien7.velocityY=2;
 }
 //to move the aliens
 
 function stop(){
  alien1.setVelocity(0,0);
  alien2.setVelocity(0,0);
  alien3.setVelocity(0,0);
  alien4.setVelocity(0,0);
  alien5.setVelocity(0,0);
  alien6.setVelocity(0,0); 
  alien7.setVelocity(0,0); 
  bg.setVelocity(0,0);
  spacecraft.pause();
}
 // to stop every sprite 
  
// -----
    try { window.draw = draw; } catch (e) {}
    switch (stage) {
      case 'preload':
        if (preload !== window.preload) { preload(); }
        break;
      case 'setup':
        if (setup !== window.setup) { setup(); }
        break;
    }
  }
  window.wrappedExportedCode = wrappedExportedCode;
  wrappedExportedCode('preload');
};

window.setup = function () {
  window.wrappedExportedCode('setup');
};
