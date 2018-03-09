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
        2017/07/25 - XlOM Musa Asia 五夾純木底板評測分享

        </div>				
        <p class="news_content_wrap">
        【作者：驚嘆號】

----- 實力足以PK蝴蝶五夾經典拍 ---- 
</p>
<div class="detailimg">
        <img src="../../../img/detail4/img1.png" height="200px" >
        <img src="../../../img/detail4/img2.png" height="200px" >
        <img src="../../../img/detail4/img3.png" height="200px" >

        </div>
<p class="news_content_wrap">
Musa Asia是XIOM公司最新出品的五夾純木底板，採用Lima面材，Ayous力材，Ayous大芯，結構與蝴蝶經典純木五夾底板科貝爾如出一轍。Musa Asia製造地為韓國，在XIOM最新的幾款底板中常常可見由韓國製造的產品，對於球迷發燒友來說，韓國製造的底板實屬罕見，不過就筆者本身的使用經驗來看，XIOM這些由韓國生產的底板都有令人驚豔的傑出性能。 Musa Asia的板面長156mm，寬152mm，厚5.85mm，拍肩長9.2mm，板面形狀與多數主流底板的157mm*150mm類似，FL握柄與大家熟知的波爾ALC接近，但更顯飽滿。在板面印刷上有一個JOINTLESS的字樣，特別強調整把底板各層皆是採用無拼接整塊木材製造而成的，這樣的製作必須從選材開始就投入更多的精神與成本，很明顯這是XIOM態度與企圖心的展現。 試打過程，筆者首先配置了兩面紅雙喜PF4膠皮，以無機膠水黏貼，並且沒有灌油或灌膠。在這樣的配置下，Musa Asia有明顯的彎曲形變感，形變後的回復力度很夠，不會有支撐不住的狀況，強力擊球時的震動感沒有想像中誇張，算是輕微的，控球穩定度非常好，在這種魔鬼式的試打配置下，可以將膠皮打透，雖然稍嫌吃力，但有如此表現算是十分難得的。 
</p>
<div class="detailimg">
        <img src="../../../img/detail4/img4.png" height="200px" >
        <img src="../../../img/detail4/img5.png" height="200px" >
        <img src="../../../img/detail4/img6.png" height="200px" >
        </div>
<p class="news_content_wrap">
第二組試打配置是德系蛋糕海綿膠皮（在此不詳述膠皮款式，以免混淆焦點），搭配德系蛋糕海綿膠皮，小力量擊球的形變感很小，隨著發力增加，形變回復效應也相對提高，擊球震動感也是，小力量擊球的震手感小，隨力量增加而放大。配置德系蛋糕海綿膠皮所表現出來的性能特點就非常搶眼，持球時間長，擊球吞吐感明顯但不拖泥帶水，控球以及力量的表現比第一試打配置更加優異。 總結以上兩組試打配置的結果，Ｍsua Asia擁有極佳的持球能力，脫板速度中等，因此可以有充份的蓄能，能量轉化成速度或旋轉都是極為強烈的。Ｍusa Asia屬於彎曲形變，弧圈球一跳高而拱，發力正確下有相當不錯的二跳，夠賊夠竄，非常適合弧圈球打法。發力自小至大的過程中，始終保持著清晰而且扎實有力的手感，這對於小球的控制、受迫防守以及主動攻擊有很大的優勢。回球的特性與發力大小有良好的線性表現，並且維持了ＸIOM Vega系列底板極佳的容錯率以及超一流的控球能力，這是Musa Asia最大，也是最亮眼的特點。 從絕對性能來說，Ｍusa Asia的缺點大概就是配膠時的最大支撐力有所受限，配置兩面高硬度的膠皮容易造成震手感較強烈而影響防守；從相對的角度來說，Musa Asia是把性價比超高，性能令人驚豔的優秀底板！

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

export class Detail4Component implements OnInit{
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
