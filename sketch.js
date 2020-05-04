const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

//20 + 35 + 25 + 15 = 95 = 600 - 95 = 505

var engine, world;

function setup() {
  engine = Engine.create();
  world = engine.world;

  createCanvas(1200,600);

        stick = new Stick(475,390,20,400);

        stick1 = new Stick(725,390,20,400);

        stick2 = new Stick(525,415,35,350);

        stick3 = new Stick(675,415,35,350);

        stick4 = new Stick(600,440,50,300);

        stick5 = new Stick(600,440,250,25);
       
        bga = new Ground(600,590,1200,20);

}

function draw() {

  background(0,0,0);

  Engine.update(engine);

    stick.display();

    stick1.display();

    stick2.display();
    
    stick3.display();

    stick4.display();

    stick5.display();

    bga.display();

    triangle(575,290,625,290,600,240);

    triangle(465,190,485,190,475,132.5);

    triangle(715,190,735,190,725,132.5)

  drawSprites();
}


