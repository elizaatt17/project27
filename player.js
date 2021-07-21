constructor(){
    this.life1="green";
    this.life2="green";
    this.life3="green";


}
life1(){
push();
textSize(20) ;
fill(white);
text("player",280,40) ;

fill(this.life1);
rect(180,50,70,30);
fill(this.life2);
rect(250,50,70,30);
fill(this.life3);
rect(320,50,70,30);
pop();

    
}