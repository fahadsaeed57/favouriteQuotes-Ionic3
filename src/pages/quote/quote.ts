import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams,ViewController } from 'ionic-angular';
import { OnInit } from '@angular/core/src/metadata/lifecycle_hooks';
import { Quote } from '../../Data/quote.interface';

@IonicPage()
@Component({
  selector: 'page-quote',
  templateUrl: 'quote.html',
})
export class QuotePage implements OnInit {
quote:Quote
  constructor(public navCtrl: NavController, public navParams: NavParams,private viewCtrl:ViewController) {
  }
 
  ngOnInit(){
    this.quote = this.navParams.data;
  }
  onDismiss(remove=false){
    this.viewCtrl.dismiss(remove);
  }
}
