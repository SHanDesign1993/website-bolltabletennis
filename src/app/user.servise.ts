// user.service.ts
import {Injectable} from "@angular/core";
import {Http, Headers, Response} from "@angular/http";
import {Route, Router} from "@angular/router";
import {Observable} from "rxjs/Rx";
import {MemberData} from "./memberdata";
import {Order} from "./order";
@Injectable()

export class UserService {
    private loggedIn = false;
    user_id:number;
    members:MemberData; // new
    errorMessage:string;// new
    constructor(private http: Http,private router:Router) {
        this.loggedIn = !!localStorage.getItem('auth_token');
    }

    private memberUrl = 'http://45.79.133.15:3000/user/';
    private orderUrl = 'http://45.79.133.15:3000/order';


    private extractRoot(res: Response) {
        return res.json() || {};
    }

    getOrder():Observable<Order[]>{
        var OrderObj = this.http.get("http://45.79.133.15:3000/user/"+localStorage.getItem('userid')+"/order")
        .map(res => <Order[]> res.json())
        .catch(this.handleError);
        console.log(OrderObj);
        return OrderObj;
    }

    getMember():Observable<MemberData>{
        console.log(this.user_id) ;
		/* new */
		this.http.get(localStorage.getItem('userUrl'))
            .map(res => <MemberData> res.json())
            .catch(this.handleError).subscribe(
                members => this.members = members,
                error =>  this.errorMessage = <any>error);
		/* end new */
        return this.http.get(localStorage.getItem('userUrl'))
            .map(res => <MemberData> res.json())
            .catch(this.handleError);
    }
    getMemberData():MemberData { // new
	  return this.members ;
	}
    login(identity, password) {
        let headers = new Headers();
        headers.append('Content-Type', 'application/json');

        return this.http
            .post(
                'http://45.79.133.15:3000/login',
                JSON.stringify({ identity:identity, password:password }),
                { headers }
            )
            .map(res => res.json())
            .map((res) => {
                    console.log(res.token)
                    localStorage.setItem('userid',res.user)
                    this.memberUrl='http://45.79.133.15:3000/user/'+ localStorage.getItem('userid')
                    localStorage.setItem('userUrl',this.memberUrl)
                    localStorage.setItem('auth_token', res.token);
                    this.loggedIn = true;
                    console.log("Success");
                    ////
                 if(identity=="admin@gmail.com"){
                //     //console.log("upload_product");
                     this.router.navigate(['OrderAdmin']);

                 }
                   else if(identity=="test2@gmail.com"){
                   this.router.navigate(['/memberAdmin']);
                 }
                //else if(identity=="admin8_uploadNew@gmail.com"){
                //     //console.log("upload_new");
                //     this.router.navigate(['New_Upload']);
                // }
                else{
                this.router.navigate(['MemberLogin']);
                }
                console.log("Success")
                return res.success;
            });
    }

    logout() {
        localStorage.removeItem('auth_token');
        localStorage.clear();
        this.loggedIn = false;
        // this.router.navigate(['Member']); // new
    }


    usernum(){
        console.log(localStorage.getItem('userid'))
        return localStorage.getItem('userid')
    }

    isLoggedIn() {
        return this.loggedIn;

    }

    updateData(data:any){
        let body = JSON.stringify(data);
        let headers = new Headers();
        headers.append('Content-Type','application/json');
        return this.http.put(localStorage.getItem('userUrl'),body,{headers:headers})
            .map(response => response.json())
            .catch(this.handleError);
    }

    checkPassword(identity,password){
        let headers = new Headers();
        headers.append('Content-Type', 'application/json');
        return this.http
            .post(
                'http://45.79.133.15:3000/login',
                JSON.stringify({ identity:identity, password:password }),
                { headers }
            )
            .map(res => res.json())
            .map((res) => {
                    console.log(res.token)
                    localStorage.setItem('userid',res.user)
                    this.memberUrl='http://45.79.133.15:3000/user/'+ localStorage.getItem('userid')
                    localStorage.setItem('userUrl',this.memberUrl)
                    localStorage.setItem('auth_token', res.token);
                    this.loggedIn = true;
                console.log("pwcorrect");
                return res.success;
            });

    }


    private handleError (error: any) {
        // In a real world app, we might use a remote logging infrastructure
        // We'd also dig deeper into the error to get a better message
        let errMsg = error.message || error.statusText || 'Server error';
        console.error(errMsg); // log to console instead
        return Observable.throw(errMsg);
    }
}

