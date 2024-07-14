import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  // class has 1 property password
  password = '';
// class gets added with more properties
  includeLetters = false;
  includeNumbers = false;
  includeSymbols = false;
  length = 0;

  onChangeLength(target: EventTarget){
    
    const value = (<HTMLInputElement>target).value;
    //parse the string to number
    const parsedValue = parseInt(value);
    console.log(parsedValue);

    if(!isNaN(parsedValue)){
      this.length = parsedValue;
    }
  }

  onChangeUseLetters(){
    this.includeLetters = !this.includeLetters;
  }

  onChangeUseNumbers(){
    this.includeNumbers = !this.includeNumbers;
  }

  onChangeUseSymbols(){
    this.includeSymbols = !this.includeSymbols;
  }

  // constructor(){
  //   this.password = ''
  // }

  onButtonClick(){

    const numbers = '1234567890';
    const letters ='abcdefghijklmnopqrstuvwxyz';
    const symbols = '!@#$%^&*()';

    let validChars = '';
    if(this.includeLetters){
      validChars += letters;
    }
    if(this.includeNumbers){
      validChars += numbers;
    }
    if(this.includeSymbols){
      validChars += symbols;
    }

    let generatedPassword = '';
    for(let i = 0; i< this.length; i++){
       const index = Math.floor(Math.random() * validChars.length);
       generatedPassword += validChars[index];
    }

    this.password = generatedPassword;

    /* console.log('Button was clicked');
    console.log(`About to generate a password with the following
      Includes letters : ${this.includeLetters}
      Includes numbers : ${this.includeNumbers}
      Includes symbold : ${this.includeSymbols}`      
    );
    this.password = 'My Password !!!'; */
  }

  getName(){
    return "Sridhar";
  }
}
