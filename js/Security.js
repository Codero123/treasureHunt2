class Security {

    constructor(){

        this.access1 = createInput("Code1")
        this.access1.position(windowWidth-1435,windowHeight-655);
        this.access1.style('background', 'white');  

        this.button1 = createButton('Check');
        this.button1.position(windowWidth-1435,windowHeight-625);
        this.button1.style('background', 'lightgrey');    

        this.access2 = createInput("Code1")
        this.access2.position(windowWidth-835,windowHeight-555);
        this.access2.style('background', 'white');  

        this.button2 = createButton('Check');
        this.button2.position(windowWidth-835,windowHeight-525);
        this.button2.style('background', 'lightgrey');

        this.access3 = createInput("Code1")
        this.access3.position(windowWidth-1435,windowHeight-455);
        this.access3.style('background', 'white');  

         this.button3 = createButton('Check');
         this.button3.position(windowWidth-1435,windowHeight-425);
         this.button3.style('background', 'lightgrey');
  
    }

    display(){

        this.button1.mousePressed(() => {
            if(system.authenticate(accessCode1,this.access1.value())){
                this.button1.hide();
                this.access1.hide();
                score++;
            }
        });

        this.button2.mousePressed(() => {
            if(system.authenticate(accessCode2,this.access2.value())){
                this.button2.hide();
                this.access2.hide();
                score++;
            }
        });

        this.button3.mousePressed(() => {
             if(system.authenticate(accessCode3,this.access3.value())){
                 this.button3.hide();
                 this.access3.hide();
                 score++;
             }
         });

    }

}