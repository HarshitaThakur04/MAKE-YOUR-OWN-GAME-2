class Game{
    counstructor(){}
   start(){
       if(gameState===START){
           background(startImg);
           form=new Form();
           form.display();
       }
   }

   play(){
    background(playImg);
    Engine.update(engine);


   }

   end(){}

}