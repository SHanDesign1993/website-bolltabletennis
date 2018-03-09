import {Component, OnInit} from "@angular/core";
import {NewService} from "./new.service";
import {Http} from "@angular/http";
import {New} from "./new";
import {MemberService} from "../member.service";//+
import {UserService} from "../user.servise";//+
import {Router} from "@angular/router"; //+
@Component({
    template:` 
    <div class="big-about"> 
        </div>
        
        <div class="container">
        <div class="title-clothes">
        <div class="title-clothes-line"></div>上傳消息<div class="title-clothes-line2"></div>
        </div>
       </div>
    <div class="container">
    <label for="name">Title：</label>
    <input type="text" #title>
    <div class="upload_content">
    <label for="name">Content：</label>
    <!--<input type="text" #content>-->
    <textarea class="newsUploadTextarea" type="text" #content rows="4" cols="50"></textarea>
    <button (click)="onPost(title.value,content.value,'');title.value='';content.value='';">Upload</button>
    </div>
    <div class="title-clothes">
        <div class="title-clothes-line"></div>消息管理<div class="title-clothes-line2"></div>
        </div>
        <div class="news_table">
        <table width="100%"> 
        <tr>    
        <td>標題</td>
        <td>內容</td>
        <td>刪除</td>
        <td>修改</td>
        </tr>
        <tr *ngFor="let n of new">    
        <td><input type="text" value={{n.title}} #utitle></td>
        <td><textarea type="text" value={{n.content}} #ucontent rows="4" cols="10"></textarea></td>
        <!-- <td><input type="text" value={{n.content}} #ucontent></td> -->
        <td><button (click)="deleteData(n.id)">刪除</button></td>
        <td><button (click)="update(n.id,utitle.value,ucontent.value)">修改</button></td>
        </tr>
        
        </table>
        </div>
        <div class="new_button" style="text-align: center;margin-bottom: 30px;">
        <button style="color: white;background-color: #CC3366;border: none; float: none!important;" (click)="gotoOrder()">訂單管理</button></div>
        <div class="new_button" style="text-align: center;margin-bottom: 30px;">
        <button style="color: white;background-color: #CC3366;border: none; float: none!important;" (click)="gotoUpload()">上傳商品</button></div> 
        
        </div>
    `,
    providers:[NewService,MemberService]
})

export class NewUploadComponent implements OnInit{
    loggedIn: any;
    constructor(private newservice:NewService,private http:Http,private memberservice:MemberService,private userservice:UserService,private router:Router){
        this.loggedIn = !!localStorage.getItem('auth_token');//
    }

    new:New[];
    errorMessage:string;
    response:string;

    ngOnInit(){
        this.getNews();
        //
        if(this.userservice.isLoggedIn() == true){
           if(localStorage.getItem('userid') == "32"){//32 = admin
                    console.log("New_Upload");
                    this.router.navigate(['/newUpload']);
                }else{
                    this.router.navigate(['/']);
                }
        }else{this.router.navigate(['/member']);};
        //
    }

    update(id:number,title:string,content:string) {
        const data = {
            title:title,
            content:content
        }
        var r = window.confirm("Are you sure to update??")
        if (r == true) {
            this.newservice.updateData(id, data)
                .subscribe(
                    data => this.response = JSON.stringify(data),
                    error =>console.log(error)
                );
        }
    }


    onPost(title:string,content:string,author:string){
        const data={
            title:title,
            content:content,
            author:author
        };
        this.newservice.postNews(data)
            .subscribe(
                data => this.response = JSON.stringify(data),
                error =>console.log(error),
                ()=>window.alert("上傳成功")
            );
    }

    getNews(){
        this.newservice.getNews()
            .subscribe(
                products => this.new = products,
                error =>  this.errorMessage = <any>error);

    }

    deleteData(id:number){
        var r = window.confirm("Are you sure to delete??")
        if (r == true) {
            this.newservice.deleteData(id)
                .subscribe((response)=>{
                });
        }
    }
    gotoOrder(){
        this.router.navigate(['/orderAdmin']);
    }
    gotoUpload(){
        this.router.navigate(['/upload']);
    }

}
