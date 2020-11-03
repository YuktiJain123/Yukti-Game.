class Form {

  constructor() {
    this.input = createInput("Name");
    this.button = createButton('Play');
    this.title = createElement('h2');
    this.text1=createElement('h3');
    this.text2=createElement('h3');
    this.text3=createElement('h3');
    this.input2=createSelect("Grade");
    this.button2=createButton("Let's Start")
    this.bg=loadImage("images/background.jpg");
    this.level1=createButton('1');
  }
  hide(){
    this.greeting.hide();
    this.button.hide();
    this.input.hide();
    this.title.hide();
  }

  display(){
    this.title.html("Welcome to yukti's game");
    this.title.position(displayWidth/2 - 50, 0);

    this.input.position(displayWidth/2 - 60 , displayHeight/2 - 150);
    this.button.position(displayWidth/2 + 30, displayHeight/2);

   this.text1.html("Please enter your name");
   this.text1.position(displayWidth/2-60,displayHeight/2-200);

   this.text2.html("Please enter your grade");
   this.text2.position(displayWidth/2-60,displayHeight/2-100);

   this.input2.position(displayWidth/2-60,displayHeight/2-50)
   this.input2.option('5');
   this.input2.option('6');
   this.input2.option('7');
   this.input2.option('8');
   this.input2.option('9');
   this.input2.option('10');
   this.input2.option('11');
   this.input2.option('12');

    this.button.mousePressed(()=>{
      this.input.hide();
      this.button.hide();
      this.text1.hide();
      this.text2.hide();
      this.input2.hide();

     var name = this.input.value();
     this.text3.html("We are here to boost up ur general knowledge and make your brain little more sharper.. So here we go, In each level 4 questions will be asked ");
     this.text3.position(displayWidth/2,displayHeight/2-200);
     fill("Pink");
     square(displayWidth/2-130,displayHeight/2-300,500,20);
     //playerCount+=1;
      //player.index = playerCount;
      //.update();
      //player.updateCount(playerCount);
    this.button2.position(950,550,5,5);
  
    });
    this.button2.mousePressed(()=>{
      this.text3.hide();
      this.button2.hide();
      this.title.hide();
      background(this.bg);
    })
  }
  }
  

