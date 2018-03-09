import {Http, Headers, Response} from "@angular/http";
import {Injectable} from "@angular/core";
import {Observable} from "rxjs/Rx";
import {New} from "./new";
import 'rxjs/Rx';

@Injectable()

export class NewService {
  public ptitle:string;
  public pcontent:string;
  constructor(private _http:Http) {
    this.ptitle = ''
    this.pcontent=''
  }

  private productUrl = 'http://45.79.133.15:3000/news';

  getNews():Observable<New[]>{
    return this._http.get(this.productUrl)
      .map(
        res => <New[]> res.json(),
        res => res.extra=JSON.parse(res.json().json_str)
      )
      .catch(this.handleError);
  }

  add(title:string,content:string){
    this.ptitle = title;
    this.pcontent=content;
    console.log(this.ptitle);
    localStorage.setItem('newTitle',this.ptitle);
    localStorage.setItem('newContent',this.pcontent)
  }

  getTitle(){
    return localStorage.getItem('newTitle');
  }

  getContent(){
    return localStorage.getItem('newContent');
  }

  postNews(data:any){
    let body = JSON.stringify(data);
    let headers = new Headers();
    headers.append('Content-Type','application/json');
    return this._http.post(this.productUrl,body,{headers:headers})
      .map(response => response.json())
      .catch(this.handleError);
  }

  deleteData(id: number): Observable<Response>{
    console.log(this.productUrl + '/' + id)
    return this._http.delete(this.productUrl + '/'+ id);
  }

  updateData(id:number,data:any){
    let body = JSON.stringify(data);
    let headers = new Headers();
    headers.append('Content-Type','application/json');
    return this._http.put(this.productUrl+'/'+id,body,{headers:headers})
      .map(response => response.json())
      .catch(this.handleError);
  }

  private handleError (error: any) {
    // In a real world app, we might use a remote logging infrastructure
    // We'd also dig deeper into the error to get a better message
    let errMsg = error.message || error.statusText || 'Server error';
    console.error(errMsg); // log to console instead
    return Observable.throw(errMsg);
  }

}
