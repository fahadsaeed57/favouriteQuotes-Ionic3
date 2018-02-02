import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams,ModalController } from 'ionic-angular';
import{ QuotesService} from '../../services/quotes';
import { Quote } from '../../Data/quote.interface';
import {QuotePage} from '../quote/quote';
import { SQLite, SQLiteObject } from '@ionic-native/sqlite';
/**
 * Generated class for the FavouritesPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-favourites',
  templateUrl: 'favourites.html',
})
export class FavouritesPage {
  quotes:Quote[];
  constructor(public navCtrl: NavController, public navParams: NavParams,public serv:QuotesService,private modalCtrl:ModalController) {
    
  }

  

  ionViewWillEnter(){
    this.quotes=this.serv.returnFavouriteQuotes();
    // this.sqlite.create({
    //   name: 'data.db',
    //   location: 'default'
    // })
    //   .then((db: SQLiteObject) => {
    
    
    //     db.executeSql('create table danceMoves(name VARCHAR(32))', {})
    //       .then(() => console.log('Executed SQL'))
    //       .catch(e => console.log(e));
    
    
    //   })
    //   .catch(e => console.log(e));
  }
  onViewQuote(quote:Quote){
    const modal = this.modalCtrl.create(QuotePage,quote);
    modal.present();
    modal.onDidDismiss( (remove:boolean) => {
        if(remove==true){
          this.serv.onRemoveToFavourite(quote);
          this.quotes = this.serv.returnFavouriteQuotes();
        }
    });
  }
}
