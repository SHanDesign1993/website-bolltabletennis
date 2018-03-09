import {Component} from "@angular/core";
import {Order} from "./order";
import {OrderService} from "./order.service";
import {UserService} from "./user.servise";//+
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
        <td>訂單編號</td>
        <td>訂單日期</td>
        <td>商品內容</td>
        <td>訂單總金額</td> 
        <td>訂單狀況</td>
        <td>資料</td>
        <td>修改狀態</td>
        <td></td>
        <td></td>
    </tr>
    <tr *ngFor="let o of orders">  
        <td>{{o.id}}</td>
        <td>{{o.time}}</td>
        <td><li *ngFor="let m of o.ordered_products">{{m.name}}({{m.amount}}個)</li></td>
        <td>{{o.discount}}</td>
        <td><div *ngIf="o.status==0">未出貨</div> <div *ngIf="o.status==1">已出貨</div> <div *ngIf="o.status==2">已送達</div></td>
        <td>{{o.json_str}}<br>商品總價（不含運）：{{o.sum}}<br>運費減免：{{o.sum + 60 - o.discount}}<br>運費減免後價格：{{o.discount}}</td>
        <td><select #status><option value="0">未出貨</option><option value="1">已出貨</option><option value="2">已送達</option></select></td>
        <td><button (click)="update(o.id,status.value)">修改</button></td>
        <td><button (click)="deleteData(o.id)">移除</button></td>
    
    </tr>
    
    
    </table>    
    </div>
    <div class="new_button" style="text-align: center;margin-bottom: 30px;">
       <button style="color: white;background-color: #CC3366;border: none;" (click)="gotoUpload()">上傳商品</button></div>
    <div class="new_button" style="text-align: center;margin-bottom: 30px;">
       <button style="color: white;background-color: #CC3366;border: none;" (click)="gotoNewUpload()">上傳最新消息</button></div>
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
    `]


})

export class OrderAdminComponent{
    loggedIn:any;
    constructor(private orderService:OrderService,private userservice:UserService,private router:Router){
        this.loggedIn = !!localStorage.getItem('auth_token');//
    }
    orders:Order[];
    errorMessage:string;
    response:string;
    ngOnInit(){this.getProducts();
        //
        if(this.userservice.isLoggedIn()==true){
           if(localStorage.getItem('userid')=="32"){//32 = admin
                    this.router.navigate(['/orderAdmin']);
                }else{
                    this.router.navigate(['/']);
                }
        }else{this.router.navigate(['/member']);};
    }

    getProducts(){
        this.orderService.getProduct()
            .subscribe(
                orders => this.orders = orders,
                error =>  this.errorMessage = <any>error);

    }

    deleteData(id:number){
        var r = window.confirm("Are you sure to delete??")
        if (r == true) {
            this.orderService.deleteData(id)
                .subscribe((response)=>{
                });
        }
    }

    update(id:number,status:number) {
        const data = {
            status:status
        }
        var r = window.confirm("Are you sure to update??")
        if (r == true) {
            this.orderService.updateData(id, data)
                .subscribe(
                    data => this.response = JSON.stringify(data),
                    error =>console.log(error)
                );
        }
    }
    
    gotoNewUpload(){
        this.router.navigate(['/newUpload']);
    }
    gotoUpload(){
        this.router.navigate(['/upload']);
    }
    
}
