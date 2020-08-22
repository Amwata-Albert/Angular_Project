import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-quote-form',
  templateUrl: './quote-form.component.html',
  styleUrls: ['./quote-form.component.css']
})
export class QuoteFormComponent implements OnInit {
  name: string
  quotes: string[]
  author: string
  voteup=0
  votedown=0

  

  constructor() { }

  ngOnInit() {
    this.author = ''
    this.name = ''
    this.quotes = ['Angular']

  }
  onClick(quote) {
    // return true
    for (let j = -1; j < this.quotes.length; j++) {
      // this.quotes[j]==quote
      this.quotes.push("Quote ")
      return false
      
    }
  }
  onSubmit(quote) {
    // return false;
    // this.quotes.push(this.quotes[0])
    this.quotes.unshift(quote)

  }
  deleteQuote(quote) {
    for (let i = 0; i < this.quotes.length; i++) {
      if (this.quotes[i] == quote) {
        this.quotes.splice(i, 1)
      }
    }
  }
  votesup(quote){
    // for (let k = 0; k < this.quotes.length; k++) {
    //   if(this.quotes[k]==quote){
    //     this.quotes.push(quote)
        this.voteup++
        alert("You upvoted the Quote")
    //   }
    // }
   
  }
  votesdown(){
    this.votedown++
    alert("you Downvoted this quote")
  }

}
