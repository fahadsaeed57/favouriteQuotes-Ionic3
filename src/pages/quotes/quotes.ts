import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { OnInit } from '@angular/core/src/metadata/lifecycle_hooks';
import { Quote } from '../../Data/quote.interface';
import {AlertController} from 'ionic-angular';
import{QuotesService} from '../../services/quotes';


@IonicPage()
@Component({
  selector: 'page-quotes',
  templateUrl: 'quotes.html',
})
export class QuotesPage implements OnInit{

  quotesData : {category: string, quotes:Quote[] ,icon:string};
  constructor(private navParams:NavParams, private alertCtrl:AlertController,private quotesSer:QuotesService){

  }
 ngOnInit(){
  this.quotesData = this.navParams.data;
 }
 onUnFavourited(selectedquote:Quote){
    this.quotesSer.onRemoveToFavourite(selectedquote);
 }
 isFavourite(quote:Quote){
   return this.quotesSer.isFavourited(quote);
 }
 onFavourited(selectedquote:Quote){
   let alert = this.alertCtrl.create({
     title:"Favourite Quote",
     subTitle:"Are you sure?",
     message:"Do you wanna Favourite this Quote?",
     buttons:[{
       text:'Yes',
       handler: ()=>{
          this.quotesSer.onPushToFavourite(selectedquote);
       }
     },{
      text:'No',
      role:'cancel',
      handler: ()=>{
         console.log("Cancelled");
      }

     }]

   });
   alert.present();
 }
}
