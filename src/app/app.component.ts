import {Routes, RouterModule, Router} from "@angular/router";
import {Component, OnInit, ViewChild} from "@angular/core";
import {SearchValue} from "./searchvalue.service";

@Component({
  selector: 'app-root',
  template: `
        <header>
        
            <nav class="slide-left"  *ngIf="isMenuOn">
            <ul>
                <li class="c-menu__item"><a  [routerLink]="['/']">首頁</a></li>
                
                <li><a [routerLink]="['about']" routerLinkActive="active">商店介紹</a></li>
                
                <li><a (click)="gotoResult('Butterfly','')" style="cursor:pointer;">蝴蝶專區</a></li>
                <li class="c-menu__item"><a [routerLink]="['new']">最新消息</a></li>
              
                <li class="c-menu__item"><a [routerLink]="['flow']">購物指南</a></li>
               
                 <li class="c-menu__item"><a [routerLink]="['member']">會員專區</a></li>
                 <li class="c-menu__item"><a [routerLink]="['notification']">匯款通知</a></li>
                
            </ul>
            </nav>
            <nav>
            <ul>  
                <li class="logo"><a [routerLink]="['/']"><img src="img/logo.png" height="65" ></a></li>

                <div class="sideMenu" (click)="sideMenuClick()"  #side><i class="fa fa-bars" aria-hidden="true"></i></div>
                
                <li><a [routerLink]="['about']" routerLinkActive="active">商店介紹</a></li>
                <li><a (click)="gotoResult('Butterfly','')" style="cursor:pointer;">蝴蝶專區</a></li>
                <li><a [routerLink]="['new']">最新消息</a></li>
                <li><a [routerLink]="['flow']">購物指南</a></li> 
                 
                <li><a [routerLink]="['member']">會員專區</a></li>
                <li><a [routerLink]="['notification']">匯款通知</a></li> 
                
                <span class="navigation" >
                <li style="padding-left:5px;"><cart></cart></li>
                <li><a href="https://3xspeed.com" target="_blank"><img src="img/blog.png" height="32" width="32"></a></li>
                <li><a href="https://www.facebook.com/%E6%B3%A2%E7%88%BE%E6%A1%8C%E7%90%83%E7%94%A8%E5%93%81%E5%B0%88%E8%B3%A3%E5%BA%97-353230954792473/?fref=ts" target="_blank"><img src="img/fb.png" height="32" width="32"></a></li>
                </span>
            </ul>
            </nav>

        </header>

        <router-outlet></router-outlet>
        <footer>
            
			<div class="footer_top">
			    <div class="footer_new">BUTTERFLY台灣地區簽約授權經銷商</div>
				<ul>
				    <li>電話(代表號)：(02)3151-7171 | </li>
					<li>網購客服專線：(02)3151-3888 | </li>
                    <li>平日 11:30~21:00 假日 10:00~17:00 | </li>
					<li>新北市中和區自強路60號(近秀山國小) | </li>
					<li>Mail：majestic168168@gmail.com | </li>
					<li>本店保留訂單成立與否，一切以實物為主 | </li>
					<li>Powered by <a href="http://www.aptan.net"> Aptan </a> </li>
				</ul>
			</div>
			<div class="footer_bottom">
					創立於2016
			</div>
		</footer>
    `,
  host: {
    '(window:click)': 'close($event)'
  }


})



export class AppComponent implements OnInit{
    isMenuOn: Boolean = false;
  @ViewChild('side') side: any;
  constructor(private router:Router,private searchvalue:SearchValue){

  }
  gotoResult(value,value2){
    this.searchvalue.add(value,value2);
    this.router.navigate(['SearchResult']);
  }
  ngOnInit(){

  }
  close(event){
      console.log(this.side);
    if (!this.side.nativeElement.contains(event.target)) {
      this.isMenuOn = false;
    }
  }

  sideMenuClick(){
      this.isMenuOn = !this.isMenuOn;
  }
}
