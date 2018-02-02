import { Component,OnInit } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { Quote } from '../../Data/quote.interface';
import quotes  from '../../Data/quotes';
import { QuotesPage } from '../quotes/quotes';
@Component({
  selector: 'page-library',
  templateUrl: 'library.html',
})
export class LibraryPage implements OnInit {
  quotes=QuotesPage;
  quotesData : {category: string, quotes:Quote[] ,icon:string}[];
  
  ngOnInit(){
    this.quotesData= quotes;
  }
}
