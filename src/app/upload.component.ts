import {Component} from "@angular/core";
import {ProductService} from "./product.service";
import {Product} from "./product";
import {Router} from "@angular/router";
import {OrderAdminComponent} from "./order-admin.component";
import {MemberService} from "./member.service";
import {UserService} from "./user.servise";
import {Headers, Http,Response} from "@angular/http";
import {Observable} from "rxjs/Rx";
import 'rxjs/Rx';

declare var fetch;


@Component({
    selector:'upload',
    template:`
       <div class="container">
       
       <div class="title-clothes">
        <div class="title-clothes-line"></div>上傳商品<div class="title-clothes-line2"></div>
        </div>
        <h2 align="center">球板</h2><hr>
        
        <div class="upload">
        <div class="left-upload">

       <input type="file" #files (change)="change(files.files[0])"/>
   
       <label for="name">Name：&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</label>
       <input type="text" id="blade_name" #blade_name><br>
       <label for="price">Price：&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</label>
       <input type="text" id="blade_price" #blade_price><br>
       <label for="description">Description：</label>
       <!-- <input type="text" id="blade_description" #blade_description><br> -->
       <textarea class="productUploadTextarea" type="text" id="blade_description" #blade_description rows="4" cols="20"></textarea><br>       
       <label for="category">Brand：</label>
       &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
       <select #t>
       <option value=""></option>
       <option value="Butterfly">Butterfly</option>
       <option value="Nittaku">Nittaku</option>
       <option value="Stiga">Stgia</option>
       <option value="Donic">Donic</option>
       <option value="Yasaka">Yasaka</option>
       <option value="Andro">Andro</option>
       <option value="Tibhar">Tibhar</option>
       <option value="Xion">Xiom</option>
       <option value="紅雙喜DHS">紅雙喜DHS</option>
       <option value="Tsp">Tsp</option>
       <option value="Victas">Victas</option>
       <option value="Joola">Joola</option>
       <option value="Dr.Neubauer紐鮑爾">Dr.Neubauer紐鮑爾</option>
       <option value="Adidas">Adidas</option>
       <option value="銀河">銀河</option>
       <option value="Kokutaku">Kokutaku</option>
       <option value="Darker">Darker</option>
       <option value="Mizuno">Mizuno</option>
       <option value="Palio">Palio</option>
       <option value="Kison">Kison</option>
       <option value="許紹發">許紹發</option>
       <option value="雙魚">雙魚</option>
       <option value="Crack">Crack</option>
       <option value="世奧得Sword">世奧得Sword</option>
       <option value="台灣神木">台灣神木</option>
       <option value="其他">其他</option>       
       </select><br>
       
      <label for="category">Category：</label>
       &nbsp;
       <select #tt> 
       <option value=""></option>
       <option value="blades">刀板</option>
       <option value="penhold">直板</option>
       
       </select><br>
       <label for="brand">底板結構：&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</label>
       <input type="text" id="blade_structure" #blade_structure><br>
       
      </div>
      
      <div class="right-upload">    
      <label for="name">反發特性：</label>
       <input type="text" id="blade_special" #blade_special><br>
       <label for="price">振動特性：</label>
       <input type="text" id="blade_vibrate" #blade_vibrate><br>
       <label for="description">板面尺寸：</label>
       <input type="text" id="blade_hitsize" #blade_hitsize><br>
       <label for="brand">板面厚度：</label> 
       <input type="text" id="blade_thick" #blade_thick><br>
       <label for="brand">拍柄底寬：</label>
       <input type="text" id="blade_holdwidth" #blade_holdwidth><br>
       <label for="brand">拍柄尺寸：</label>
       <input type="text" id="blade_holdsize" #blade_holdsize><br>
       <label for="brand">出產地：&nbsp;&nbsp;&nbsp;&nbsp;</label>
       <input type="text" id="blade_madein" #blade_madein>
       <button (click)="onPost(blade_name.value,blade_price.value,imageSource,blade_description.value,tt.value,t.value,blade_structure.value,blade_special.value,blade_vibrate.value,blade_hitsize.value,blade_thick.value,blade_holdwidth.value,blade_holdsize.value,blade_madein.value);blade_madein.value='';blade_holdsize.value='';blade_holdwidth.value='';blade_thick.value='';blade_hitsize.value='';blade_vibrate.value='';blade_special.value='';blade_structure.value='';blade_name.value='';blade_price.value='';blade_description.value='';">Upload</button>

      </div><br>
      <h2 align="center">膠皮</h2><hr>
      <div class="left-upload">
        <input type="file" #files2 (change)="change(files2.files[0])"/>

       <label for="name">Name：&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</label>
       <input type="text" id="name" #robber_name><br>
       <label for="price">Price：&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</label>
       <input type="text" id="price" #robber_price><br>
       <label for="description">Description：</label>
       <!-- <input type="text" id="description" #robber_description><br> -->
       <textarea class="productUploadTextarea" type="text" id="description" #robber_description rows="4" cols="20"></textarea><br>
       <label for="brand">Brand：</label> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
       <select #t2> 
       <option value=""></option>
      
        <option value="Butterfly">Butterfly</option>
       <option value="Nittaku">Nittaku</option>
       <option value="Stiga">Stgia</option>
       <option value="Donic">Donic</option>
       <option value="Yasaka">Yasaka</option>
       <option value="Andro">Andro</option>
       <option value="Tibhar">Tibhar</option>
       <option value="Xion">Xiom</option>
       <option value="紅雙喜DHS">紅雙喜DHS</option>
       <option value="Tsp">Tsp</option>
       <option value="Victas">Victas</option>
       <option value="Joola">Joola</option>
       <option value="Dr.Neubauer紐鮑爾">Dr.Neubauer紐鮑爾</option>
       <option value="Adidas">Adidas</option>
       <option value="Kokutaku">Kokutaku</option>
       <option value="Darker">Darker</option>
       <option value="Mizuno">Mizuno</option>
       <option value="Palio">Palio</option>
       <option value="Kison">Kison</option>
       <option value="許紹發">許紹發</option>
       <option value="雙魚">雙魚</option>
       <option value="Crack">Crack</option>
       <option value="世奧得Sword">世奧得Sword</option>
       <option value="台灣神木">台灣神木</option>
       <option value="其他">其他</option>
      
       
       </select><br>
       <label for="brand">性質：&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</label>
       <input type="text" id="blade" #robber_property>
      </div>
      
       <div class="right-upload">    
       
       <label for="robber-speed">速度：&nbsp;&nbsp;&nbsp;</label>
       <input type="text" id="robber-speed" #robber_speed><br>
       <label for="robber-spin">旋轉：&nbsp;&nbsp;&nbsp;</label>
       <input type="text" id="robber-spin" #robber_spin><br>
       <label for="robber-control">控制：&nbsp;&nbsp;&nbsp;</label> 
       <input type="text" id="blade" #robber_control><br>
       <label for="robber-hard">硬度：&nbsp;&nbsp;&nbsp;</label>
       <input type="text" id="blade" #robber_hard><br>
       <label for="robber-madein">出產地：</label>
       <input type="text" id="robber-madein" #robber_madein>
       <button (click)="onPost2(robber_name.value,robber_price.value,imageSource,robber_description.value,'robbers',t2.value,robber_property.value,robber_speed.value,robber_spin.value,robber_control.value,robber_hard.value,robber_madein.value);robber_madein.value='';robber_hard.value='';robber_control.value='';robber_spin.value='';robber_speed.value='';robber_property.value='';robber_name.value='';robber_price.value='';robber_description.value='';">Upload</button>

      </div><br>
           
       <h2 align="center">其他</h2><hr>
       <input type="file" #files3 (change)="change(files3.files[0])"/>

       <label for="name">Name：&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</label>
       <input type="text" id="name" #other_name><br>
       <label for="price">Price：&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</label>
       <input type="text" id="price" #other_price><br>
       <label for="description">Description：</label>
       <!-- <input type="text" id="description" #other_description><br> -->
       <textarea class="productUploadTextarea" type="text" id="description" #other_description rows="4" cols="20"></textarea><br>
       <label for="category">Category：&nbsp;&nbsp;</label>
       <select #t3>
        <option value=""></option>
       <option value="robbers">膠皮</option>
                                <option value="blades">刀板</option>
                                <option value="penhold">直板</option>
                                <option value="lowblades">成品拍</option>
                                <option value="glue">膠水&增能劑</option>
                                <option value="balls">球&置球盒</option>
                                <option value="clothes">服飾</option>
                                <option value="shoes">鞋&襪</option>
                                <option value="accessory">配件&保養清潔品</option>
                                <option value="bags">拍套&裝備袋(包)</option>
                                <option value="tables">球桌&周邊，發球機</option>
                                <option value="others">其他商品</option>
       </select><br>
       <label for="brand">Brand：&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</label> 
       <select #t4>
       <option value=""></option>
       <option value="Butterfly">Butterfly</option>
       <option value="Nittaku">Nittaku</option>
       <option value="Stiga">Stgia</option>
       <option value="Donic">Donic</option>
       <option value="Yasaka">Yasaka</option>
       <option value="Andro">Andro</option>
       <option value="Tibhar">Tibhar</option>
       <option value="Xion">Xiom</option>
       <option value="紅雙喜DHS">紅雙喜DHS</option>
       <option value="Tsp">Tsp</option>
       <option value="Victas">Victas</option>
       <option value="Joola">Joola</option>
       <option value="Dr.Neubauer紐鮑爾">Dr.Neubauer紐鮑爾</option>
       <option value="Adidas">Adidas</option>
       <option value="銀河">銀河</option>
       <option value="Kokutaku">Kokutaku</option>
       <option value="Darker">Darker</option>
       <option value="Mizuno">Mizuno</option>
       <option value="Palio">Palio</option>
       <option value="Kison">Kison</option>
       <option value="許紹發">許紹發</option>
       <option value="雙魚">雙魚</option>
       <option value="Crack">Crack</option>
       <option value="世奧得Sword">世奧得Sword</option>
       <option value="台灣神木">台灣神木</option>
       <option value="其他">其他</option>
       
       </select><br>
       <label for="other-madein">出產地：</label>
       <input type="text" id="other-madein" #other_madein>
       <button (click)="onPost3(other_name.value,other_price.value,imageSource,other_description.value,t3.value,t4.value,other_madein.value);other_name.value='';other_price.value='';other_description.value='';other_madein.value='';">Upload</button>

      </div>
      
     
        
          <div class="title-clothes">
        <div class="title-clothes-line"></div>商品管理<div class="title-clothes-line2"></div>
       
        </div> 
        <div class="update">
        <table width="100%">
        <tr> 
            <td>商品圖片</td>
            <td>商品名稱</td>
            <td>商品描述</td>
            <td>商品價錢</td>
            <td>商品品牌</td>
            <td>商品種類</td>
            <td>排序</td>
            <td></td>
            <td></td>
        </tr>
        <tr *ngFor="let p of products">
        <td><img src={{p.imgsrc}} width="80px" height="80px"></td>
            <td><input type="text" value={{p.name}} #uname></td>
            <td><textarea type="text" value={{p.description}} #udescription></textarea></td>
            <td><input type="text" value={{p.price}} #uprice></td>
            <td><input type="text" value={{p.brand}} #ubrand></td>
            <td><input type="text" value={{p.category}} #ucategory></td> 
            <td><input type="number" step="any" value={{p.sorting}} #usorting></td>
            <td><button (click)="deleteData(p.id)">移除</button></td>
            <td><button (click)="update(p.id,uname.value,udescription.value,uprice.value,ubrand.value,ucategory.value,usorting.value)">修改</button></td>
        </tr>
        </table></div>
        <div class="new_button" style="text-align: center;margin-bottom: 30px;">
       <button style="color: white;background-color: #CC3366;border: none;margin-left: 30px; margin-bottom: 30px;" (click)="gotoOrder()">訂單管理</button></div>
    <div class="new_button" style="text-align: center;margin-bottom: 30px;">
       <button style="color: white;background-color: #CC3366;border: none;" (click)="gotoNewUpload()">上傳最新消息</button></div>
  </div>

  <!--<button (click)="postTestConfig(other_madein.value,t4.value)">testConfig</button>-->

    `,
    styles:[`    
    button{
    border: none;
    color:white;
    background-color: #CC3366;
    font-size: 20px;
    float: right;
    }
    label{
    margin-top: 10px;
    }
    table{
    font-size: 20px;
    margin-bottom: 50px;
    }
    tr{
    height:40px;
    }
    
    `]
})

export class UploadComponent{

    imageSource: string;
    constructor(private productService:ProductService,public http:Http,private router:Router,private memberservice:MemberService,private userservice:UserService){
        //this.loggedIn = !!localStorage.getItem('auth_token');//
        this.url = 'http://45.79.133.15:3000/image';
    }
    products:Product[];
    errorMessage:string;
    response:string;
//    ngOnInit(){this.getProducts();}
    public url: string;
    headers: Headers;

    //
    //constructor(private router:Router,//++ private memberservice:MemberService,private userservice:UserService){}


    ngOnInit(){
        this.getProducts();
        if(this.userservice.isLoggedIn()==true){
           if(localStorage.getItem('userid')=='32'){//32 = admin
                    console.log("upload_product");
                    this.router.navigate(['/upload']);
                }else{
                    this.router.navigate(['/']);
                }
        }else{this.router.navigate(['/member']);};
    }
    //

    getProducts(){
        this.productService.getProduct()
            .subscribe(
                products => this.products = products,
                error =>  this.errorMessage = <any>error);

    }

    update(id:number,name:string,description:string,price:number,brand:string,category:string,sorting:number) {
        const data = {
            name: name,
            description: description,
            price: price,
            brand: brand,
            category: category,
            sorting:sorting
        }
        var r = window.confirm("Are you sure to update??")
        if (r == true) {
        this.productService.updateData(id, data)
            .subscribe(
                data => this.response = JSON.stringify(data),
                error =>console.log(error)
            );
        }
    }

    onPost(name:string,price:number,imgsrc:string,description:string,category:string,brand:string,blade_structure:string,blade_special:string,
           blade_vibrate:string,blade_hitsize:string,blade_thick:string,blade_holdwidth:string,blade_holdsize:string,blade_madein:string){
        const data={
            name:name,
            price:price,
            imgsrc:imgsrc,
            description:description,
            category:category,
            brand:brand,
            blade_structure:blade_structure,
            blade_special:blade_special,
            blade_vibrate:blade_vibrate,
            blade_hitsize:blade_hitsize,
            blade_thick:blade_thick,
            blade_holdwidth:blade_holdwidth,
            blade_holdsize:blade_holdsize,
            blade_madein:blade_madein
        };
        this.productService.postData(data)
            .subscribe(
                data => this.response = JSON.stringify(data),
                error =>console.log(error),
                ()=>window.alert("上傳成功")
            );

    }

    onPost2(name:string,price:number,imgsrc:string,description:string,category:string,brand:string,robber_property:string,robber_speed:string,
            robber_spin:string,robber_control:string,robber_hard:string,robber_madein:string){
        const data={
            name:name,
            price:price,
            imgsrc:imgsrc,
            description:description,
            category:category,
            brand:brand,
            robber_property:robber_property,
            robber_speed:robber_speed,
            robber_spin:robber_spin,
            robber_control:robber_control,
            robber_hard:robber_hard,
            robber_madein:robber_madein
        };
        this.productService.postData(data)
            .subscribe(
                data => this.response = JSON.stringify(data),
                error =>console.log(error),
                ()=>window.alert("上傳成功")
            );
    }

    onPost3(name:string,price:number,imgsrc:string,description:string,category:string,brand:string,other_madein:string){
        const data={
            name:name,
            price:price,
            imgsrc:imgsrc,
            description:description,
            category:category,
            brand:brand,
            other_madein:other_madein,
        };
        this.productService.postData(data)
            .subscribe(
                data => this.response = JSON.stringify(data),
                error =>console.log(error),
                ()=>window.alert("上傳成功")
            );
    }

    deleteData(id:number){
        var r = window.confirm("Are you sure to delete??")
        if (r == true) {
        this.productService.deleteData(id)
            .subscribe((response)=>{
            });
        }
    }

    change(file){
        var xhr = new XMLHttpRequest()
        let formData = new FormData();
        formData.append("file",file);
        Observable.fromPromise(fetch(this.url,{method:'post', body: formData}))
            .subscribe((response:any)=> {
                console.log(response.body)
                response.json().then(json => {
                    this.imageSource = `http://${json['imgsrc']}`
                })
            });

    }
    gotoNewUpload(){
        this.router.navigate(['/newUpload']);
    }
    gotoOrder(){
        this.router.navigate(['/orderAdmin']);
    }

    postTestConfig(made:string,t4:string){ //for test, not in use currently
        const data={
            config_json_str:[2,4,1,7,95,made,t4],
            config_purpose:"tryConfig"
        };
        this.productService.postConfigData(data)
            .subscribe(
                data => this.response = JSON.stringify(data),
                error =>console.log(error)
            );
    }




}
