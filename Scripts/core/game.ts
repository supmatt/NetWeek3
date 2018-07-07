/// <reference path="_references.ts"/>

// IIFE - Immediately Invoked Function Expression
(function(){

  // Game Variables
  let canvas = document.getElementById("canvas");
  let stage:createjs.Stage;
  let helloLabel: objects.Label;
  let clickMeButton: objects.Button;
  let assetManager: createjs.LoadQueue;
  let assetManifest: any[];

  assetManifest = [
    {id:"clickMeButton", src:"./Assets/images/clickMeButton.png"}
  ];

  // preloads assets
  function Init():void {
    console.log("Initialization Started...");
    assetManager = new createjs.LoadQueue(); // creates the assetManager object
    assetManager.installPlugin(createjs.Sound); //asset manager can also load sounds
    assetManager.loadManifest(assetManifest);
    assetManager.on("compliete", Start, this);

    // Start();
  }

  function Start():void {
    console.log("Starting Application...")

    stage = new createjs.Stage(canvas);
    stage.enableMouseOver(20); // turn this on for buttons
    createjs.Ticker.framerate = 60; // 60 FPS
    createjs.Ticker.on("tick", Update);
    Main();
  }

  function Update():void {
    stage.update(); // redraws the stage
  }


  function clickMeButtonClick():void {
    helloLabel.text = "Clicked!";
    helloLabel.regX = helloLabel.getMeasuredWidth() * 0.5;
    helloLabel.regY = helloLabel.getMeasuredHeight() * 0.5;
  }

  function Main():void {
    console.log("Game Started...");

    helloLabel = new objects.Label("Hello, World!", "40px", 
    "Consolas", "#000000", 320, 240, true);
    stage.addChild(helloLabel);

    // clickMeButton = new objects.Button("./Assets/images/clickMeButton.png", 320, 340);
    clickMeButton = new objects.Button(assetManager, "clickMeButton", 320, 340);
    // clickMeButton.regX = clickMeButton.getBounds().width * 0.5;
    // clickMeButton.regY = clickMeButton.getBounds().height * 0.5;
    stage.addChild(clickMeButton);
    clickMeButton.on("click", clickMeButtonClick);

  }

  window.onload = Init;

})();
