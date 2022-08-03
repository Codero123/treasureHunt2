class Secondlevel {

    constructor(){

        this.access4 = createInput("Code1")
        this.access4.position(windowWidth-1435,windowHeight-655);
        this.access4.style('background', 'white');  

        this.button4 = createButton('Check');
        this.button4.position(windowWidth-1435,windowHeight-625);
        this.button4.style('background', 'lightgrey');    

        this.access5 = createInput("Code1")
        this.access5.position(windowWidth-835,windowHeight-555);
        this.access5.style('background', 'white');  

        this.button5 = createButton('Check');
        this.button5.position(windowWidth-835,windowHeight-525);
        this.button5.style('background', 'lightgrey');

        this.access6 = createInput("Code1")
        this.access6.position(windowWidth-1435,windowHeight-455);
        this.access6.style('background', 'white');  

         this.button6 = createButton('Check');
         this.button6.position(windowWidth-1435,windowHeight-425);
         this.button6.style('background', 'lightgrey');

         this.access7 = createInput("Code1")
        this.access7.position(windowWidth-1435,windowHeight-255);
        this.access7.style('background', 'white');  

         this.button7 = createButton('Check');
         this.button7.position(windowWidth-1435,windowHeight-225);
         this.button7.style('background', 'lightgrey');

         this.access8 = createInput("Code1")
        this.access8.position(windowWidth-835,windowHeight-355);
        this.access8.style('background', 'white');  

        this.button8 = createButton('Check');
        this.button8.position(windowWidth-835,windowHeight-325);
        this.button8.style('background', 'lightgrey');

    
    }

    show(){

        this.button4.mousePressed(() => {
            if(system.authenticate(accessCode4,this.access4.value())){
                this.button4.hide();
                this.access4.hide();
                score++;
            }
        });

        this.button5.mousePressed(() => {
            if(system.authenticate(accessCode5,this.access5.value())){
                this.button5.hide();
                this.access5.hide();
                score++;
            }
        });

        this.button6.mousePressed(() => {
            if(system.authenticate(accessCode6,this.access6.value())){
                this.button6.hide();
                this.access6.hide();
                score++;
            }
        });

        this.button7.mousePressed(() => {
            if(system.authenticate(accessCode7,this.access7.value())){
                this.button7.hide();
                this.access7.hide();
                score++;
            }
        });

        this.button8.mousePressed(() => {
            if(system.authenticate(accessCode8,this.access8.value())){
                this.button8.hide();
                this.access8.hide();
                score++;
            }
        });
    }

}