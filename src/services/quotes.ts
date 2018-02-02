import { Quote } from "../Data/quote.interface";

export class QuotesService{
    private favourited:Quote[] = [];

    onPushToFavourite(quote:Quote){
        this.favourited.push(quote);
        console.log(this.favourited);
    }
    onRemoveToFavourite(quote:Quote){
        const position = this.favourited.findIndex(
            (quoteEl)=>{
                    return quoteEl.id == quote.id
            }
        );
        this.favourited.splice(position,1);
    }
    returnFavouriteQuotes(){
        return this.favourited.slice();
    }
    isFavourited(quote:Quote){
        return this.favourited.find((quoteEls:Quote)=>{
            return quoteEls.id==quote.id;
        });
    }
}