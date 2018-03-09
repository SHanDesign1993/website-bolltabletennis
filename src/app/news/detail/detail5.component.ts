import {Component, OnInit} from "@angular/core";
import {New} from "../new";
import {NewService} from "../new.service";
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
        2017/07/05 - 2017年夏天！DONIC BLUE STORM 火熱到貨！！

        </div>				
        <iframe src="https://www.facebook.com/plugins/video.php?href=https%3A%2F%2Fwww.facebook.com%2FBolltabletennisshop%2Fvideos%2F1373689116079980%2F&show_text=0&width=560" width="560" height="500" style="border:none;overflow:hidden" scrolling="no" frameborder="0" allowTransparency="true" allowFullScreen="true"></iframe>
        <p class="news_content_wrap">
        DONIC BLUE STORM 火熱到貨！！
詢問度爆多，滿線中 
藍色風暴-Z-系列高性能內能膠皮，對應40+新球，風暴熱襲！
BLUESTORM藍色風暴比一般的DONIC FD3 內能膠皮增加 0.1mm的海綿厚度，重量卻是減輕的。
Z1具有更大的彈性，Speed-Drive速度結合弧圈的主戰武器；40+新球維持速度效能中，結合Z1 的高摩擦面膠，速攻或強烈弧圈的不二選擇！
</p>
<hr>
        <p class="productcategory">商品名稱<span class="productcategory2">DONIC Z1</span> </p>
        <hr>
        <p class="productcategory">海綿硬度<span class="productcategory2">47.5</span> </p>
        <hr>
        <p class="productcategory">彈性&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;    <span class="productcategory2">10+++</span> </p>
        <hr>
        <p class="productcategory">旋轉&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;    <span class="productcategory2">10+++</span> </p>
        <hr>
        <p class="productcategory">控制&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;    <span class="productcategory2">6+</span> </p>
<p class="news_content_wrap">
Z2加強旋轉，迴轉能力的優勢結合。強烈弧圈攻擊結合速度適用。相持球的信賴，中前檯的旋轉破壞；Z2供給最佳化的手感與威力。
</p>
<hr>
        <p class="productcategory">商品名稱<span class="productcategory2">DONIC Z2</span> </p>
        <hr>
        <p class="productcategory">海綿硬度<span class="productcategory2">47.5</span> </p>
        <hr>
        <p class="productcategory">海綿厚度<span class="productcategory2">2.1mm/Max+</span> </p>
        <hr>
        
        <p class="productcategory">彈性&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;    <span class="productcategory2">10+</span> </p>
        <hr>
        <p class="productcategory">旋轉&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;    <span class="productcategory2">10+++</span> </p>
        <hr>
        <p class="productcategory">控制&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;    <span class="productcategory2">7</span> </p>
        
  

<button class="sharebutton" (click)="Facebook()"><img src="../../../img/fb-live-map_2.png" width="60px"></button>
<button class="sharebutton" (click)="Google()"><img src="../../../img/photo.jpg" width="50px"></button>
       <button class="sharebutton" (click)="Twitter()"><img src="../../../img/Twitter.png" width="50px"></button>       
       
        
        
       </div>
       
       
       
       <div class="new_button" style="text-align: center;margin-bottom: 30px;width:150px;margin:auto;margin-bottom:30px;">
       <button style="color: white;background-color: #CC3366;border: none;" (click)="gotoNew2()">回到最新消息</button></div>
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

export class Detail5Component implements OnInit{
  public ptitle:string;
  public pcontent:string;
  constructor(private newservice:NewService,private router:Router){}
  ngOnInit(){
    this.ptitle=this.newservice.getTitle()
    console.log(this.ptitle)
    this.pcontent=this.newservice.getContent()
  }
  gotoNew2(){
    this.router.navigate(['new2']);
  }

  Facebook() {
    void(window.open('http://www.facebook.com/share.php?u='.concat(encodeURIComponent(location.href)) ));
  }
  Google(){
    void(window.open('https://plus.google.com/share?url='.concat(encodeURIComponent(location.href)) ));
  }

  Twitter(){
    void(window.open('http://twitter.com/home/?status='.concat(encodeURIComponent(location.href))));
  }
}
