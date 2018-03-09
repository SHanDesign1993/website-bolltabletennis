import {Injectable} from "@angular/core";
import {Http, Response, Headers, RequestOptions} from "@angular/http";
import {Observable} from "rxjs/Observable";

import 'rxjs/Rx';
import {Order} from "./order";
@Injectable()
export class OrderService{
    constructor(private _http:Http){}
    private orderUrl = 'http://45.79.133.15:3000/order';

    getProduct():Observable<Order[]>{
        return this._http.get(this.orderUrl)
            .map(res => <Order[]> res.json())
            .catch(this.handleError);
    }

    postData(data:any){
        let body = JSON.stringify(data);
        let headers = new Headers();
        headers.append('Content-Type','application/json');
        return this._http.post(this.orderUrl,body,{headers:headers})
            .map(response => response.json())
            .catch(this.handleError);
    }

    updateData(id:number,data:any){
        let body = JSON.stringify(data);
        let headers = new Headers();
        headers.append('Content-Type','application/json');
        return this._http.put(this.orderUrl+'/'+id,body,{headers:headers})
            .map(response => response.json())
            .catch(this.handleError);
    }

    deleteData(id: number): Observable<Response>{
        console.log(this.orderUrl + '/' + id)
        return this._http.delete(this.orderUrl + '/'+ id);
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
