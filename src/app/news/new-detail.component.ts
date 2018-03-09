import {Component, OnInit} from "@angular/core";
import {New} from "./new";
import {NewService} from "./new.service";
import {Router} from "@angular/router";
@Component({
    template:`    
    <div class="big-about">
       
        <div class="middle-box"><br>
        <h2>最新消息</h2><br>
        <div class="line-about"></div><br>
        <p>關於波爾的最新消息！
        </p>
        </div></div>
        <div class="container">
        <div class="title-clothes">
        {{ptitle}}
        </div>				
        <p class="news_content_wrap">世界卓球2017デュッセルドルフで金メダリスト吉村真晴選手が使用したラケットを忠実に再現した、特注ラケットを限定数量で発売します。またバタフライ・オンラインショップでは、9/8から9/15まで先行予約を受け付けます。ぜひこの機会にお買い求めください。</p>
        <iframe width="560" height="500" src="https://www.youtube.com/embed/wEqwSoEdPgg?showinfo=0" frameborder="0" allowfullscreen></iframe>	
        
        <hr>
        <p class="productcategory">商品名稱<span class="productcategory2">拍子</span> </p>
        <hr>
        <p class="productcategory">商品價格<span class="productcategory2">2000</span> </p>
        <hr>
        <p class="productcategory">商品特性<span class="productcategory2">ＸＸＸＸＸＸ</span> </p>
       </div>
       
       
       
       <div class="new_button" style="text-align: center;margin-bottom: 30px;width:150px;margin:auto;margin-bottom:30px;">
       <button style="color: white;background-color: #CC3366;border: none;" (click)="gotoNew()">回到最新消息</button></div>
    `,
    styles: [`    
    .cool button{
    float: left;
    background-color: white;
    margin-left: 30px;
    border: none;
    
    }
    
    .cool{
    width:700px;
    font-size: 18px;
    font-weight: bold;
    }
    
   
    .container{
    margin-bottom: 30px;
    }
    
    `],
    inputs:['ptitle','pcontent']

})

export class newdetailComponent implements OnInit{
    public ptitle:string;
    public pcontent:string;
    constructor(private newservice:NewService,private router:Router){}
    ngOnInit(){
        this.ptitle=this.newservice.getTitle()
        console.log(this.ptitle)
        this.pcontent=this.newservice.getContent()
    }
    gotoNew(){
        this.router.navigate(['new']);
    }



}
