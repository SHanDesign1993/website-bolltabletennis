import {Injectable} from "@angular/core";
import {Http, Response} from "@angular/http";
import {Observable} from "rxjs/Rx";
import {Product} from "./product";

@Injectable()

export class SearchValue{


  ss:any;
  public stype:string;

  private productUrl = 'http://45.79.133.15:3000/product';
  constructor(private _http:Http){
    this.ss=''
  }



  add(v:any,c:any){
    if(v==''&&c==''){
      this.productUrl = 'http://45.79.133.15:3000/product';
      this.stype="0";
    }
    if(v!=''&&c=='') {
      this.productUrl = 'http://45.79.133.15:3000/product/search?b=' + v;
      this.stype="b";
    }
    if(v==''&&c!=''){
      this.productUrl = 'http://45.79.133.15:3000/product/search?c=' + c;
      this.stype="c";
    }
    if(v!=''&&c!=''){
      this.productUrl = 'http://45.79.133.15:3000/product/search?b='+v+"&c="+c;
      this.stype="bc";
    }
    console.log(this.productUrl)
  }

  getProduct():Observable<Product[]>{
    return this._http.get(this.productUrl)
      .map(
        res => <Product[]> res.json(),
        res => {
          //this.SortData(JSON.parse(res.json().json_str));
          res.extra=JSON.parse(res.json().json_str);
        }
      )
      .catch(this.handleError);
  }

  getNum(arr){
    var count = 0;
    arr.forEach((index, array) => {

      count = count + 1;

    });
    return count;
  }

  private extractData(res: Response) {
    let body = res.json();
    return body.data || { };
  }

  private handleError (error: any) {
    // In a real world app, we might use a remote logging infrastructure
    // We'd also dig deeper into the error to get a better message
    let errMsg = error.message || error.statusText || 'Server error';
    console.error(errMsg); // log to console instead
    return Observable.throw(errMsg);
  }
}
