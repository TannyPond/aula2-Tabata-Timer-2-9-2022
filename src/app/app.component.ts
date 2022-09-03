import { Component, VERSION } from '@angular/core';

@Component({
  selector: 'my-app', //está na page index.html
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {
  name = 'Tämnî Sïllva' ; //+ VERSION.major
  nascimento = 1985;
  counter =  0;
  timer = setInterval(() =>{
    this.counter = this.counter + 1;
  },100);
  
  restartCounter(){
    this.counter = 0;
  }
  getIdade(){
    return 2022 - this.nascimento;
  }
  getMinutos(){
    return Math.trunc(this.counter/60);
  }

  getSegundos(){
    return Math.trunc(this.counter%60);
  }

  numbers = this.getRandomNumbers();
  refreshRandomNumbers(){
    this.numbers = this.getRandomNumbers();
  }

  getRandomNumbers(){
    let arr = [];
    for(let i = 0; i < 10 ; i++){
      arr[i] = Math.trunc(100 * Math.random());
    }
    return arr;
  }
}
