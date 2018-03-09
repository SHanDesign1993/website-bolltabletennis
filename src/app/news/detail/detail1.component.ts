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
        <p>關於本店近況及商品的最新消息皆會在此不定期發佈！！！
        </p>
        </div></div>
        <div class="container">
        <div class="title-clothes">
        2017/07/06 - FB現場直播 * 送球拍 * 活動預告

        </div>				
        
        <p class="news_content_wrap">
        8/6(日)   與大喬有約 粉絲甜一夏<br> 
        </p>
        
        <div class="detailimg">
        <img src="../../../img/detail1/img1.png" height="350px" class="detailmiddleimg">
        <img src="../../../img/detail1/img2.png" height="350px" class="detailmiddleimg">

        </div>
         
       
        
 <p class="news_content_wrap">      
<a href="https://www.facebook.com/Aki522/" target="_blank">https://www.facebook.com/Aki522/</a><br> 
活動內容：終極密碼引爆STIGA CL       <br> 
直播時間：17：00 準時開播 <br> 
活動方法：動動手指 按讚+分享此貼文並留言就有機會抽到球拍喔! [8/6 直播留言，提早不算]<br> 
遊戲方法：大喬將從1~100個數子中選出一個號碼，由粉絲們來猜<br> 
遊戲規則：一個粉絲限喊2個數字~第一個喊中的粉絲即獲得球拍      <br> 
2支『STIGA 經典 CL 七夾純木桌球拍』等你來引爆   沒喊中的粉絲別傷心 大喬另有加碼活動送你們喔         
   

</p>

        <div class="detailimg">
        
        <img src="../../../img/detail1/img3.png" height="350px" class="detailmiddleimg">
        </div>
<p class="news_content_wrap">
所有活動解釋權利都由*小編* (註:可愛可口的店長我) 決定，小編也會看各位朋友的踴躍度加碼送小禮物，千萬別錯過收看!!  <br> 
<a href="https://www.facebook.com/amimototaiwan/" target="_blank">https://www.facebook.com/amimototaiwan/ </a><br> 

</p>
        
        
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

export class Detail1Component implements OnInit{
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
