////////////////////////////////////////////////////////////////////////////

function Qeustion(text, choices, answer){
    this.text = text;
    this.choices = choices;
    this.answer = answer;   
     }

Qeustion.prototype.correctAnswer =function(choice){
                                            
  return choice === this.answer;  
    // if (choice === this.answer){
    // return choice
    // } 
 }