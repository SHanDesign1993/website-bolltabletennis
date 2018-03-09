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
        2017/11/22 - "Nittaku Bloodwood"帥氣開箱分享

        </div>				
        <p class="news_content_wrap">
        【作者：驚嘆號】

        ----- 瑞典傳說，品味對決。-----

</p>
<p class="news_content_wrap">
自2009年市場上出現第一把黑檀木底板開始，相繼出現以玫瑰木、綠檀木、雞翅木、血木……等等以硬木作為面材的底板，一時之間硬木成了器材界的新寵。以硬木作為底板面材雖行之有年，例如雞翅木，但無機時代起才真正於器材界佔有一席之地。以硬木作為底板結構主要是用於面材，硬度高的面材能提供較快的脫板速度以及整體支撐力，並讓底板保有絕對的純木手感，這個特點與纖維底板的手感有一定的差別，不過數年下來，各大品牌廠商的硬木底板產品結構大同小異，尤其五夾硬木底板多為雲杉力材結構，甚無新意。以雲杉作為五夾純木結構力材是經典中的經典，用於硬木面材五夾似乎也合理，但是雲杉力材結構的五夾底板雖然提供了高質量的形變回復效應，卻也幾乎拋不開小力量容易發空發虛，以及發力後放大效應過於強烈的宿命。Nittaku於2017年第一季推出的Bloodwood底板不僅是一款硬木底板，更是一款纖維底板，以血木作為面材，阿尤斯木為力材，阿尤斯木大芯，薄碳層置於大芯兩側，這種結構並非市場上首見，但鮮少受到注目與討論。
</p>
<div class="detailimg">
        <img src="../../../img/detail21/img4.jpg" height="200px" >
        <img src="../../../img/detail21/img5.jpg" height="200px" >
        <img src="../../../img/detail21/img6.jpg" height="200px" >
        </div>
<p class="news_content_wrap">
Bloodwood是Nittaku與瑞典木屋合作的最新產品，製作工藝保有瑞典生產的品質，板面與握柄規格也是絕對的瑞典木屋調性，157*150（mm）的板面尺寸，略顯寬扁的FL握柄，瑞典木屋的FL極度適合以反手利作為握法，喜愛時下狂擰暴擰濫擰打法的球友實在應該試一試！Bloodwood以硬度略低於檀木的血木作面材，如同其他硬木底板，依舊提供了絕佳的彈性與清晰度極高的觸球手感，但是略薄的阿尤斯力材並沒有像雲杉那般造成易發空的體質，因此底板的整體手感反而顯得溫和穩重，脫板速度快但是因為底板厚度僅5.7mm，整體彎曲形變明顯，弧圈球技術所需的持球感與扯動感依然強烈。大芯兩側的薄碳層主要作用應為強化結構，以提高形變回復作用時所需的整體支撐力。Bloodwood的回球路徑偏長且高，雖然血木面材依然適合以撞擊為主的打法，但從回球特性與手感特點來說，這款底板比較適合弧圈球打法使用，對於塑料球特性與時下高重量的膠皮產品來講，具有高度的適配性。
除了前文所提性能特點，Bloodwood板身雖然較薄，震手感明顯，但並不是那種振幅極大的感覺，整體而言不會對於控制造成困擾，也不會因此使得小球處理產生冒高發虛發飄的問題。從小力量開始慢慢加大發力的過程中，回球狀態與手感表現相當線性，沒有出現突然跳檔或掉檔的狀況，雖然形變回復感強烈，但放大效應並不明顯，因此改變發力的過程中不太會有意外的回球產生，表現頗為穩定忠實！
</p>

<div class="detailimg">
        <img src="../../../img/detail21/img2.jpg" height="200px" >
        <img src="../../../img/detail21/img3.jpg" height="200px" >
        <img src="../../../img/detail21/img8.jpg" height="200px" >
        </div>
<p class="news_content_wrap">
Nittaku的底板向來走溫和均衡路線，可拉可打，儘管這兩三年來添加了不少暴力本質，但仍不失於均衡。Bloodwood也是如此，除了承襲Nittaku的傳統，瑞典木屋的風格也傲然其上，從九零年代初期與阿瓦拉Ｐ系列合作開始，歷經BT系列，以及其後專為Nittaku製作生產的Lialox、Runlox-5與Bizelox，這款血木碳板Bloodwood可以說是該品牌與瑞典製造的精彩延續。
</p>




       <button class="sharebutton" (click)="Facebook()"><img src="../../../img/fb-live-map_2.png" width="60px"></button>
       <button class="sharebutton" (click)="Google()"><img src="../../../img/photo.jpg" width="50px"></button>
       <button class="sharebutton" (click)="Twitter()"><img src="../../../img/Twitter.png" width="50px"></button>
       
        
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

export class Detail21Component implements OnInit{
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
