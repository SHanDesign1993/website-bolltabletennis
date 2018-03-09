import {Injectable} from "@angular/core";
import {Http, Response, Headers, RequestOptions} from "@angular/http";
import {Observable} from "rxjs/Observable";
import {Product} from "./product";
import 'rxjs/Rx';
@Injectable()

export class ProductService{
  constructor(private _http:Http){}
  private productUrl = 'http://45.79.133.15:3000/product';

  getProduct():Observable<Product[]>{
    return this._http.get(this.productUrl)
      .map(
        res => <Product[]> res.json(),
        res => res.extra=JSON.parse(res.json().json_str)
      )
      .catch(this.handleError);
  }

  postData(data:any){
    let body = JSON.stringify(data);
    let headers = new Headers();
    headers.append('Content-Type','application/json');
    return this._http.post(this.productUrl,body,{headers:headers})
      .map(response => response.json())
      .catch(this.handleError);
  }

  updateData(id:number,data:any){
    let body = JSON.stringify(data);
    let headers = new Headers();
    headers.append('Content-Type','application/json');
    return this._http.put(this.productUrl+'/'+id,body,{headers:headers})
      .map(response => response.json())
      .catch(this.handleError);
  }

  deleteData(id: number): Observable<Response>{
    console.log(this.productUrl + '/' + id)
    return this._http.delete(this.productUrl + '/'+ id);
  }

  postConfigData(data:any){ //testing, not in used now
    let body = JSON.stringify(data);
    let headers = new Headers();
    headers.append('Content-Type','application/json');
    return this._http.post('http://45.79.133.15:3000/config',body,{headers:headers})
      .map(response => response.json())
      .catch(this.handleError);
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
