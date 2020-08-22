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
  

  constructor() { }

  ngOnInit() {
    this.author = ''
    this.name = ''
    this.quotes = ['Quote', 'Flask', 'Django']

  }
  onClick(quote) {
    // return true
    for (let j = 0; j < this.quotes.length; j++) {
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

}
