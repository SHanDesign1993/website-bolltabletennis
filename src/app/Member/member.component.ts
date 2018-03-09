import {Route, Router} from "@angular/router";
import {MemberData} from "../memberdata";
import {MemberService} from "../member.service";
import {UserService} from "../user.servise";
import {Component} from "@angular/core";

@Component({
    template: `

        <div class="big-member">
       
        <div class="middle-box-member">
        
        <div class="member-left">
        <div class="member-leftinfo">
        <h2>波爾桌球會員登入</h2>
        <p>電子信箱 E-mail</p>
        
        
        <input required type="text" name="欄位名稱" #identity2>
        <p>密碼 Password</p>
        <input type="password" name="欄位名稱" #password2>
        <div class="member-footer">
        <div class="footer-left">
        <button (click)="Submit(identity2.value,password2.value)">登入</button>
        
        </div>
        <div class="footer-right">
        
        </div>
        
        </div>
        
        </div> 
        </div>
        
        <div class="member-right">
        <div class="member-rightinfo">
        <h2>會員註冊</h2>
        <p>姓名 Name</p>
        <input type="text" id="name" #name>
        <p>電子信箱 E-mail</p>
        <input type="text" name="identity" #identity>
        <p>密碼 Password</p>
        <input type="text" name="password" #password>
        <div class="member-rightfooter">
        <button (click)="onPost(name.value,identity.value,password.value,'一般會員');name.value='';identity.value='';password.value='';">註冊</button>
        </div>
        
        </div>
        </div>
        
        
        </div>
        
        </div>
        
        
        <div class="container">
        </div>
    `
})


export class MemberComponent {
    constructor(private router:Router,private memberservice:MemberService,private userservice:UserService){}
    
    gotoLogin(){
        this.router.navigate(['MemberLogin']);
    }


    members:MemberData[];
    errorMessage:string;
    response:string;
    token:string

    ngOnInit(){
        this.getProducts();
        if(this.userservice.isLoggedIn()==true){
            this.router.navigate(['MemberLogin']);
        };
    }

    getProducts(){
        this.memberservice.getMembers()
            .subscribe(
                members => this.members = members,
                error =>  this.errorMessage = <any>error);

    }

    onPost(name:string,identity:string,password:string,phone_number:string){
        const data={
            name:name,
            identity:identity,
            password:password,
            email:identity,
            phone_number:phone_number
        };
        this.memberservice.postData(data)
            .subscribe(
                data => {this.response = JSON.stringify(data),window.alert("註冊成功!")},
                error =>{console.log(error),window.alert("註冊失敗！請檢查信箱格式或是已申請過！")}
            );
    }

    Submit(identity, password) {
        const data={
            identity:identity,
            password:password
        };
        this.userservice.login(identity, password)
            .subscribe(
            //     (result) => { this.result = result;
            // if (typeof (result=='undefined') ){ //result
            //     console.log("if result True->" + result);
            //    //  this.router.navigate(['SearchResult']); //-->router controll in user.servise.ts
            // }
            // else{
            //     //console.log("if result !=True->" + result);
            //     window.alert("帳號或密碼有誤，請重新輸入") //result->undefined, success
            // }
            //     }
            data => {console.log("great!");this.router.navigate(['']);location.reload()}, // new
            error =>{console.log(error),window.alert("帳號或密碼有誤，請重新輸入")}
            );
    }



}
