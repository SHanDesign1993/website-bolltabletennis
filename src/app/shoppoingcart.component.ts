import {Component, OnInit} from "@angular/core";
import {ShoppingCartService} from "./shoppingcart.service";
import {OrderService} from "./order.service";
import {Order} from "./order";
import {Cart} from "./cart";
import {UserService} from "./user.servise";
import {Router} from "@angular/router";
import {MemberData} from "./memberdata";
import { AppComponent } from "app/app.component";

@Component({
  selector:'cart',
  template:`
    <a type="button" data-toggle="modal" data-target="#myModal3">
    <img src="img/shoppingcart.png" height="32" width="32" style="cursor:pointer">
    </a>
     <div id="myModal3" class="modal fade2" role="dialog" style="background-color: rgba(0,0,0, 0.63);">
         
                      <div class="modal-dialog">
                    <!-- Modal content--><h2>購物車清單</h2>
                      <div class="modal-content">
                      <button type="button" style="float:right;border: #b1b1b1 1px solid;margin: 10px;background-color: #ffffff;color:black;" data-dismiss="modal"><i class="fa fa-times"></i></button>
                      <div class="shopping-cart">
                      <div class="cart-table" align="center">
                      <table width="90%" >
                         <tr style="background-color: black;color: white;border: none;font-size: 23px;" height="40px">   
                            <td>商品id / 名稱</td>
                            <td>商品金額</td>
                            <td>數量</td>
                            <td>小計</td>
                            <td>變更</td>
                         </tr>
                         
                         
                         
                         <tr *ngFor='let product of cartobj;let i=index' style="font-size: 20px;color: black;" height="60px">   
                            <td>{{product.id}} / {{product.name}}</td>
                            <td>{{product.price}}</td>
                            <td>{{product.amount}}</td>
                            <td>{{product.price*product.amount}}</td>
                            <td><button (click)="_shoppingCartService.remove(i)">移除</button></td>                      
                         </tr>
                      
                                                                              
                     </table>
                    <div *ngIf="_shoppingCartService.getTotalPrice() === 0" align="center" class="empty">購物車裡面沒有東西</div>
                     </div>
                     <div class="cart-bottom">
                     <br><br><br>
                     <div class="cart-line" align="center"></div><br><br>
                     <label>訂購人：</label><input class="CartaddressInput"  [value]="members?.name"  type="text" #people><br><br>
                     
                      <label>手機：</label><input class="CartaddressInput" [value]="members?.phone" type="text" #phone><br><br> 
                      <!-- <label>電話（市）：</label><inputtype="text" #phone><br><br>  -->
                      <label>付款＆取貨方式：</label>
                      <select [value]="members?.d_way" #way> 
                      <option value="轉帳匯款（7-11取貨）">轉帳匯款（7-11取貨）</option>
                      <option value="貨到付款（7-11/全家/萊爾富)">貨到付款（7-11/全家/萊爾富)</option>
                      <option value="轉帳匯款（郵局寄送)">轉帳匯款（郵局寄送)</option>
                      
                     
                      </select><br><br>
                     <label>地址/店名：</label><input class="CartaddressInput" type="text"  [value]="members?.d_address" #address><br><br>
                     
                     <label>給賣家的話：</label><textarea class="otherTextarea" type="text" #otherdes rows="4" cols="10" ></textarea>
                     <!-- <input type="text"  #otherdes><br><br> -->
                     
                     <div class="cart-line" align="center"></div>
                     <div class="shoppingcartAmountText">
                    <table class="tg" style="border-style:none;table-layout: fixed;color: black;">
                    <colgroup>
                    <col style="width: 67px">
                    <col style="width: 220px">
                    <col style="width: 21px">
                    <col style="width: 46px">
                    <col style="width: 70px">
                    <col style="width: 87px">
                    </colgroup>
                      <tr>
                        <th class="tg-lqy6" colspan="2">購物車共有{{_shoppingCartService.getTotalAmount()}}項商品，商品金額共{{_shoppingCartService.getTotalPrice()}}元</th>
                        <th class="tg-yw4l"></th>
                        <th class="tg-yw4l"></th>
                        <th class="tg-yw4l"></th>
                        <th class="tg-yw4l"></th>
                      </tr>
                      <tr>
                      <td *ngIf="members?.phone_number==='VIP會員'" class="tg-lqy6 vip" colspan="2">VIP優惠打折後為{{_shoppingCartService.getTotalPrice()*0.95}}元</td>
                         <td class="tg-yw4l" colspan="3"></td>
                      </tr>
                      <tr>
                        <td class="tg-yw4l">+</td>
                        <td *ngIf="members?.phone_number==='VIP會員' && _shoppingCartService.getTotalPrice()*0.95 >= 1200" class="tg-lqy6">優惠後滿1200免運</td>
                        <td *ngIf="members?.phone_number==='VIP會員' && _shoppingCartService.getTotalPrice()*0.95 < 1200" class="tg-lqy6">優惠後未滿1200運費60元</td>
                         <td *ngIf="members?.phone_number!='VIP會員' && _shoppingCartService.getTotalPrice() >= 1200" class="tg-lqy6">滿1200免運</td>
                        <td *ngIf="members?.phone_number!='VIP會員' && _shoppingCartService.getTotalPrice() < 1200" class="tg-lqy6">未滿1200運費60元</td>
                        <td class="tg-yw4l"></td>
                        <td class="tg-yw4l"></td>
                        <td class="tg-yw4l"></td>
                        <td class="tg-yw4l"></td>
                      </tr>
                      <!-- <tr>
                        <td class="tg-yw4l"></td>
                        <td></td>
                        <td class="tg-yw4l" style="text-align: right;">運費減免<input style="width: 80px;" type="number" name="discount" value="0" #discount>元</td>
                        <td class="tg-yw4l"></td>
                        <td class="tg-yw4l"></td>
                        <td class="tg-yw4l"></td>
                        <td class="tg-yw4l"></td>
                      </tr> -->
                      <tr>
                        <td class="tg-yw4l" colspan="6"></td>
                      </tr>
                      <tr style="border-top: black 1.5px solid;" >
                         <td *ngIf="members?.phone_number==='VIP會員' && _shoppingCartService.getTotalPrice()*0.95 >= 1200" class="tg-lqy6" colspan="2">訂單金額{{_shoppingCartService.getTotalPrice()*0.95 }}元(小數點省去)</td>
                          <td *ngIf="members?.phone_number==='VIP會員' && _shoppingCartService.getTotalPrice()*0.95 < 1200" class="tg-lqy6" colspan="2">訂單金額{{_shoppingCartService.getTotalPrice()*0.95+60}}元(小數點省去)</td>

                          <td *ngIf="members?.phone_number!='VIP會員' && _shoppingCartService.getTotalPrice() >= 1200" class="tg-lqy6" colspan="2">訂單金額{{_shoppingCartService.getTotalPrice()}}元</td>
                         <td *ngIf="members?.phone_number!='VIP會員' && _shoppingCartService.getTotalPrice() < 1200" class="tg-lqy6" colspan="2">訂單金額{{_shoppingCartService.getTotalPrice()+60}}元</td>
                         <td class="tg-yw4l" colspan="3"></td>
                         
                       <!--  <td></td> -->
                          <td class="tg-yw4l" ></td>
                                                


                      </tr>
                      
                     <!-- <tr *ngIf="members?.phone_number==='VIP會員' && _shoppingCartService.getTotalPrice() >= 1200">
                        <td colspan="4" style="text-align: right;">=> 修改後金額<input style="width: 80px;display: inline-block;" value="{{_shoppingCartService.getTotalPrice()*0.95}}" type="number" #discount>元</td>

                        <td colspan="2" class="tg-yw4l"></td>
                      </tr> 
                      <tr *ngIf="members?.phone_number!='VIP會員'">
                        <td colspan="4" style="text-align: right;">=> 修改後金額<input style="width: 80px;display: inline-block;" value="{{_shoppingCartService.getTotalPrice()+60}}" type="number" #discount>元</td>

                        <td colspan="2" class="tg-yw4l"></td>
                      </tr>-->
                    </table>
                    </div>
                    <!--  <p >購物車共有{{_shoppingCartService.getTotalAmount()}}項商品，商品金額共{{_shoppingCartService.getTotalPrice()}} 元</p> 
                    <p><span>+</span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;運費60 元</p>-->
                      
                     <button (click)="clear()">清除</button>
                     <button data-dismiss="modal" *ngIf="members?.phone_number==='VIP會員' && _shoppingCartService.getTotalPrice()*0.95 >= 1200" (click)="turnObj();onPost(userService.usernum(),s,people.value,phone.value,way.value,address.value,otherdes.value,_shoppingCartService.getTotalPrice()*0.95);">送出訂單</button>
                     <button data-dismiss="modal" *ngIf="members?.phone_number==='VIP會員' && _shoppingCartService.getTotalPrice()*0.95 < 1200" (click)="turnObj();onPost(userService.usernum(),s,people.value,phone.value,way.value,address.value,otherdes.value,_shoppingCartService.getTotalPrice()*0.95+60);">送出訂單</button>
                   
                     <button data-dismiss="modal" *ngIf="members?.phone_number!='VIP會員' && _shoppingCartService.getTotalPrice() >= 1200" (click)="turnObj();onPost(userService.usernum(),s,people.value,phone.value,way.value,address.value,otherdes.value,_shoppingCartService.getTotalPrice());">送出訂單</button>
                     <button data-dismiss="modal" *ngIf="members?.phone_number!='VIP會員' && _shoppingCartService.getTotalPrice() < 1200" (click)="turnObj();onPost(userService.usernum(),s,people.value,phone.value,way.value,address.value,otherdes.value,_shoppingCartService.getTotalPrice()+60);">送出訂單</button>

                     </div>
       
    </div>
   </div>
   </div>    
                  </div>
    
    `,
  styles: [`
    
    
    
    
   
  `],
  inputs:['s','totalprice']
  ,providers:[OrderService]

})




export class ShoppingCart implements OnInit{

  phone: any;
  d_address: any;

  carts:any[];
  cartsid:any[];
  cartobj:Cart[];
  cartsname:any[];//
  s:string;
  totalprice:number;
  errorMessage:any;
  members:MemberData;


  constructor(
    public _shoppingCartService: ShoppingCartService,public orderService:OrderService,public userService:UserService,private router:Router
  ) {
  }

  ngOnInit()
  {
    this.carts = this._shoppingCartService.get();
    this.cartsid = this._shoppingCartService.getid();
    this.cartobj = this._shoppingCartService.getobj();
    this.cartsname = this._shoppingCartService.getname();//name
    this.totalprice = this._shoppingCartService.getTotalPrice();
    this.getMembers();//
  }
  getMembers(){
    this.userService.getMember()
      .subscribe(
        members => this.members = members,
        error =>  this.errorMessage = <any>error);

  }

  turnObj(){
    let stringIds = this.cartsid.map(String);
    let testObj = {};
    stringIds.forEach((id)=>{testObj[id]=this._shoppingCartService.occurrence(id, this.cartsid)});
    console.log(JSON.stringify(testObj));
    this.s = JSON.stringify(testObj);
    return JSON.stringify(testObj);
  }

  response:string;
  order:Order[];

  clear(){
    this._shoppingCartService.clear()
    
  }

  onPost(user,ordered_json_str,people,phone,way,address,otherdes,discount){
    if(this.userService.isLoggedIn()==true){
      const data={
        user:user,
        ordered_json_str:ordered_json_str,
        discount:discount,
        json_str:JSON.stringify("訂購人："+ people +"，"+"聯絡電話："+phone+"，"+"付款方式："+ way + "，" + "地址：" + address + "，" + "給賣家的話："+ otherdes+"。")
      };
      if(phone==""){
        window.alert("請輸入電話")
      }
      else if(address=="") {
        window.alert("請輸入地址或店名")
      }
      else{
      var r = window.confirm("確定要結帳嗎??確定之後將不能更改!請檢查輸入資料是否有誤！")
      if (r == true) {
        console.log(data);
        this.orderService.postData(data)
          .subscribe(
            data => this.response = JSON.stringify(data),
            error =>console.log(error),
            ()=> {
              this._shoppingCartService.clear();
              
              this.router.navigate(['MemberLogin']);
              window.location.href=this.router.url+"#/MemberLogin";
            },
          );
        
      }}
    }
    else{
      window.alert("請先登入");
    }
  }



}

