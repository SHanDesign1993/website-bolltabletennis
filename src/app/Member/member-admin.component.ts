import {Component} from "@angular/core";
import {MemberService} from "../member.service";
import {MemberData} from "../memberdata";
import {UserService} from "../user.servise";//+
import {Router} from "@angular/router"; //+
@Component({
    template:`    
    <div class="container">
    <div class="change">
    <div class="title-clothes">
        <div class="title-clothes-line"></div>訂單管理<div class="title-clothes-line2"></div>
        </div>
    <table width="100%"> 
    <tr>    
        <td>編號</td>
        <td>帳號</td>
        <td>姓名</td>
        <!-- <td>信箱</td> -->
        <td>手機</td>
        <td>會員等級</td>
        <td>
            <!-- <input style="max-width: 50px;" type="text" name="欄位名稱" value="" #defaultPw> -->
        </td>
        <td></td>
    </tr>
    <tr *ngFor="let o of members">
    
        <td>{{o.id}}</td>
        <td>{{o.identity}}</td>
        <td>{{o.name}}</td>
        <!-- <td>{{o.email}}</td> -->
        <td>{{o.phone}}</td>
        <td><input type="text" value="{{o.phone_number}}" #vip></td>
        <td><button (click)="resetPw(o.id,vip.value);">修改</button></td>
        <td><button (click)="deleteData(o.id);">移除</button></td>
    </tr>
    
    </table>    
    </div>
</div>
    
    `,
    styles:[ `  
     tr{
     height:40px;
     }
     
     table{
     margin-bottom: 50px;
     font-size: 20px;
     }
     button{
     background-color: #CC3366;
     color:white;
     border: none;
     }
     
    `]


})

export class MemberAdminComponent{
    constructor(private memberService:MemberService,private userservice:UserService,private router:Router){
        //this.loggedIn = !!localStorage.getItem('auth_token');//
    }
    members:MemberData[];
    errorMessage:string;
    response:string;
    ngOnInit(){
        this.getMembers();

      if(this.userservice.isLoggedIn()==true){
        if(localStorage.getItem('userid')=='32'){//32 = admin
          console.log("member_admin");
          this.router.navigate(['/MemberAdmin']);//specialForThisPage
        }else{
          console.log("member_adminhome");
          this.router.navigate(['/']);
        }
      }else{this.router.navigate(['/member']);};
    }

    getMembers(){
        this.memberService.getMembers()
            .subscribe(
                members => this.members = members,
                error =>  this.errorMessage = <any>error);

    }

    resetPw(id:number,phone_number:string) {
        const data = {
            phone_number:phone_number
        }
        var r = window.confirm("Are you sure to update??")
        if (r == true) {
            this.memberService.updateData(id,data)
                .subscribe(
                    data => this.response = JSON.stringify(data),
                    error =>console.log(error)
                );
        }
       location.reload();
    }

    deleteData(id:number){
        var r = window.confirm("Are you sure to delete??")
        if (r == true) {
            this.memberService.deleteData(id)
                .subscribe((response)=>{
                });
        }
    }

}
