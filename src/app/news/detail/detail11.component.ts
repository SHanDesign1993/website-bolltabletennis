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
        2017/09/22 - "STIGA AIROC系列"膠皮實測

        </div>				
        <p class="news_content_wrap">
        【作者：驚嘆號】

---- 日本海棉大進化，十足帶勁 ----
AIROC系列是STIGA公司在40+塑料球時代推出的第一款膠皮，其中包含兩個子系列，各有兩種軟硬度。2014年底上市的是AIROC，2015年中問世的是AIROC Astro，這兩個類型又可細分為中硬度的M（Medium） 與較軟的S（Soft）。


</p>
<div class="detailimg">
        <img src="../../../img/detail11/img3.jpg" height="180px" >
        <img src="../../../img/detail11/img2.jpg" height="180px" >
        <img src="../../../img/detail11/img4.jpg" height="180px" >
        </div>
<p class="news_content_wrap">
筆者在2014年底使用AIROC一個月後曾經做出一個結論，AIROC就是具有德系高密度海綿手感的日本製蛋糕海綿膠皮，筆者現在還是這個說法。德系高密度海綿清晰透板的手感是主要特色，但是力量傳遞承接較不理想，容易虛彈，旋轉表現略差一些，易碎易裂，耐用度不佳；德系蛋糕海綿膠皮的特點是強化了旋轉、改善了虛彈，耐用度提高了，但是手感較鈍，在處理小球時較不易掌控力道及球路；日本製膠皮則是有較好的口碑，吞吐感明顯，力量較大，手感清晰，而且重量普遍較輕，容易配板。AIROC算是綜合了上述三種膠皮長處特點的膠皮，持球感好，吞吐感明顯，手感清晰，耐用度高。
AIROC的在觸球瞬間，面膠會有很強烈很強烈的持球感，面膠凹陷後彈出的過程很容易被察覺體會到，過去如果球迷朋友們有聽過「吞吐感」一詞，這個凹陷後彈出的手感就是最佳註解。AIROC M型與S型相比較之下，M型手感較濁較鈍，比較不透板，發力較小時回球質量不如S型，主因是膠皮彈性較大，要有較大的發力才能打透，才能把膠皮與底板的力量一起引爆，所以手感較S型悶一些，擊球音也不像S型那般鏗鏘響亮。M型在發力充分之後的回球質量比S型高，速度、旋轉及力量等等都比S型更具殺傷力。簡單的二分法，M型偏向攻擊，殺傷力大，壓迫性強；S型偏向控制，容錯性高，各項表現走均衡全面路線。
各位朋友看這邊時，筆者要再再再一次提醒各位，上面所說的比較是AIROC M型與S型之間的相對比較，不是膠皮的絕對性能，千萬不可以斷章取義。至於M型與S型的共通之處就是回球路徑弧線較高較長，持球感明顯而強烈，可以輕鬆解決40+塑料新球比較不彈不跳不轉的狀況。
</p>
<div class="detailimg">
        <img src="../../../img/detail11/img5.jpg" height="200px" >
        <img src="../../../img/detail11/img6.jpg" height="200px" >
        <img src="../../../img/detail11/img7.jpg" height="200px" >
        </div>
<p class="news_content_wrap">
2015年，AIROC Astro開發上市，一樣的天空藍海綿，一樣略微捲曲的膠皮，一樣分為M型與S型兩個款式。對於AIROC Astro，筆者用一樣的說法來描述~ AIROC Astro就是具有德系高密度海綿手感的日本製蛋糕海綿膠皮，但是要加上「力量強化型」 五個字，奠基在AIROC的性能之上，強化力量表現後的產物就是AIROC Astro。
AIROC Astro強化了AIROC的力量表現，脫板速度略微降低，但是出球後，球速提高了，旋轉增強了，力量變大了，力量、球速與旋轉的再進化得因於能量傳遞的增加。除此之外，膠皮整體的硬度也略微提高，因此手感的呈現比第一代AIROC更加清晰紮實，發力後的能量耗損也相對較小。如果說第一代的AIROC是30機槍，第二代的AIROC Astro就是50機槍。
日系膠皮除了蝴蝶頂級系列之外，就是從STIGA AIROC系列開始殺出一條血路，為近年日系膠皮再次注入新的生息。最後筆者要再次重申一個現象，STIGA膠皮以至於許多日德系膠皮都會在開封後有迅速務化的情況，霧化不代表性能下降，很多膠面都會在霧化後才能真正發揮應有的性能表現，當面膠出現魚鱗狀白色紋路時才是壽終正寢的時候，特此說明！
</p>

<div class="detailimg">
        <img src="../../../img/detail11/img8.jpg" height="200px" >
        <img src="../../../img/detail11/img9.jpg" height="200px" >
        <img src="../../../img/detail11/img10.jpg" height="200px" >
        </div>
<p class="news_content_wrap">
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

export class Detail11Component implements OnInit{
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
