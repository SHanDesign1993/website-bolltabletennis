import {Component} from "@angular/core";
import {UserService} from "../user.servise";
import {CanActivate} from "@angular/router";
import {MemberData} from "../memberdata";
import {OnInit} from "@angular/core";
import {Order} from "../order";
import {Router} from "@angular/router";
@Component({
    selector:'memeber-login',
    template:`
    <div class="big-member-login">
        <div class="middle-box"><br>
        <h2>會員資料</h2><button (click)="logout()">登出</button><br>
        <div class="line-member-login"></div><br>
        <div class="member-login">
        <div class="left-login">

          <p>姓名&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<input type="text" name="欄位名稱" value="{{members?.name}}" #username></p>
          <p style="display:none;">使用者帳號<input type="text" name="欄位名稱" value="{{members?.identity}}" #identity>{{members?.identity}}</p>
          <p>會員等級&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{{members?.phone_number}}</p>
          <p>原來密碼<input type="text" name="欄位名稱" value="{{members?.password}}" #old_password></p>
        
          <p>密碼修改<input type="text" id="requirePw" name="欄位名稱" value="{{members?.password}}" #password></p>
        </div>
        <div class="right-login">   
        <p>帳號&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{{members?.identity}}</p>
        <input style="display:none;" type="text" name="欄位名稱" value="{{members?.email}}" #email>
        <p>預設付款方式 <select  [value]="members?.d_way" style="width:200px;" #way>  
                      <option value="轉帳匯款（7-11取貨）">轉帳匯款（7-11取貨）</option>
                      <option value="貨到付款（7-11/全家/萊爾富)">貨到付款（7-11/全家/萊爾富)</option>
                      <option value="轉帳匯款（郵局寄送)">轉帳匯款（郵局寄送)</option>
                    </select></p>
        <p>地址/店名<input type="text" name="欄位名稱" value="{{members?.d_address}}" #d_address></p>
        <p>手機&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<input type="text" name="欄位名稱" value="{{members?.phone}}" #phone></p>
        
        <!-- <button (click)="forceUpdate(password.value)">強制修改密碼</button> -->
        <button id="changePw" (click)="checkPassword(identity.value,old_password.value,password.value)">修改密碼</button>
        <button (click)="update(username.value,email.value, way.value, d_address.value,phone.value)">儲存修改(不含密碼)</button>
        </div>
        </div>     
    </div></div>
    
    <div class="container">
    <div class="title-member-login">
        <div class="title-member-login-line"></div>訂單明細查詢<div class="title-member-login-line2"></div>
        </div>
    <div class="table-clothes"> 
      
    <table width="100%">
    <tr style="background-color:gray;">
    
    <td>訂單編號</td>
    <td>下單日期</td>
    <td>訂單內容</td>
    <td>訂單狀態</td>
    <td>總金額</td>
    
    </tr>
    
    <tr  *ngFor="let o of orders">
    <td>{{o.id}}</td>
    <script>

    </script>
    <td class="hideTime">{{o.time}}</td>
    <td *ngIf="members?.phone_number==='VIP會員' && o.sum*0.95 >= 1200"><li *ngFor="let m of o.ordered_products">{{m.name}}  ({{m.amount}}個)</li><p style="background-color:#c7c7c7">{{o.json_str}}<br>商品總價（不含運）：{{o.sum}}<br>VIP優惠後：{{o.sum*0.95}}<br>運費：0<br></p></td>
    <td *ngIf="members?.phone_number==='VIP會員' && o.sum*0.95 < 1200"><li *ngFor="let m of o.ordered_products">{{m.name}}  ({{m.amount}}個)</li><p style="background-color:#c7c7c7">{{o.json_str}}<br>商品總價（不含運）：{{o.sum}}<br>VIP優惠後：{{o.sum*0.95}}<br>運費：60<br></p></td>
    <td *ngIf="members?.phone_number!='VIP會員' && o.sum >= 1200"><li *ngFor="let m of o.ordered_products">{{m.name}}  ({{m.amount}}個)</li><p style="background-color:#c7c7c7">{{o.json_str}}<br>商品總價（不含運）：{{o.sum}}<br>運費：0<br></p></td>
    <td *ngIf="members?.phone_number!='VIP會員' && o.sum < 1200"><li *ngFor="let m of o.ordered_products">{{m.name}}  ({{m.amount}}個)</li><p style="background-color:#c7c7c7">{{o.json_str}}<br>商品總價（不含運）：{{o.sum}}<br>運費：60<br></p></td>

    <td><div *ngIf="o.status==0">未出貨</div> <div *ngIf="o.status==1">已出貨</div> <div *ngIf="o.status==2">已送達</div>   </td>
    <td>{{o.discount}}</td>
    </tr>

    </table>
    </div>
    <div class="member-email">
    
    
    </div>
    
    </div>
    `,

})


export class MemberLoginComponent implements OnInit{


    constructor(private userservice:UserService,private router:Router){}
    members:MemberData;
    d_way: string;
    errorMessage:string;
    orders:Order[];
    response:string;
    old_password:string;/*pw*/
    ngOnInit(){
        //this.members = {};
        this.getMembers();
        this.getOrders();
        if(this.userservice.isLoggedIn()!=true){
            this.router.navigate(['Member']);
        };
    }

    getMembers(){
        this.userservice.getMember()
            .subscribe(
                members => {
                    console.log(members);
                    this.members = members
                },
                error =>  this.errorMessage = <any>error);
        this.members = this.userservice.getMemberData() ; // new
    }

    getOrders(){
        this.userservice.getOrder()
            .subscribe(
                orders => {
                    for(var i =0;i<orders.length;i++){
                        //console.log(orders[i]["time"]);
                        var dateStr =orders[i]["time"].replace("T"," ");
                        orders[i]["time"] = dateStr.slice(0, -8);
                    }
                    console.log(orders);
                    this.orders = orders
                },
                error =>  this.errorMessage = <any>error);
                
        //for(var o in this.orders){
           //o.time = o.time.replace(/T.*$/,"");
        //}
    }

    update(name:string, email:string, d_way:string, d_address:string, phone:string) {  //,d_way:string,d_address:string
        const data = {
            name: name,
            email:email,
            d_way:d_way? d_way: '',
            d_address:d_address,
            phone:phone,
        }

        var r = window.confirm("確定更新資料嗎？")
        if (r == true) {
            this.userservice.updateData(data)
                .subscribe(
                    data => {
                        this.response = JSON.stringify(data);
                        window.location.reload();
                },
                    error =>console.log(error)
                );

        }
    }
    forceUpdate(password:string) {  //,d_way:string,d_address:string
        const data = {
            password:password
        }
        var r = window.confirm("確定強制更新密碼嗎？")
        if (r == true) {
            this.userservice.updateData(data)
                .subscribe(
                    data => this.response = JSON.stringify(data),
                    error =>console.log(error)
                );
        }
    }

    logout(){
		this.members = null ;
        this.userservice.logout();
		this.router.navigate(['']); // new
		location.reload(); // new
    }

    checkPassword(identity:string,old_password:string,password:string){
        const data = {
            identity:identity,
            old_password:old_password
        }
        const data2 = {
            password:password
        }
        if(password==""){
            window.alert("新密碼不可為空！");
        }else{
        this.userservice.checkPassword(identity, old_password)
            .subscribe(
            data => {
                var r = window.confirm("確定更改密碼？");
                if (r == true) {
                    this.userservice.updateData(data2)
                        .subscribe(
                            data => {
                                this.response = JSON.stringify(data2);
                                window.alert("密碼修改成功！")
                                //console.log(data2);
                            },
                            error =>console.log(error)
                        ); //undone
                }
            },
            error =>{console.log(error),window.alert("密碼有誤，請重新輸入")}
            );
        }
        console.log("rr");

        console.log("nwqn");
    }

    localTime(){/*undone*/
        this.userservice.getOrder()
            .subscribe(
                orders => this.orders = orders,
                error =>  this.errorMessage = <any>error);
        //orders.map(this.time = this.time+"WWWWW");
    }


}
