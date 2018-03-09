import {OnInit, Component} from '@angular/core';
import {Slide} from './slide.component';
import {Carousel} from './carousel.component';
import {ProductService} from "../product.service";
import {Product} from "../product";
import {Router} from "@angular/router";
import {ShoppingCart} from "../shoppoingcart.component";
import {AddButton} from "../cartbutton.component";
import {SearchValue} from "../searchvalue.service";
import {NewService} from "../news/new.service";
import {New} from "../news/new";
import {LineComponent} from "./line.component";
import {AboutComponent} from "./about.component";
import {OrderByPipe} from "./orderBy";
import { NgModule } from '@angular/core';
//import {escape} from "@angular/common/src/facade/lang";

@Component({
  template: `
        
        <div class="container" >
        
        </div>
        <div class="detail">
        <div class="info_content">
					<div class="info">
						<div class="searchbar"><br>
							<div class="search">
							<div class="search1">
							   <span>
							   品牌分類
							   <select style="width: 7em;border-radius: .25em;" #brand>
							                 <option value="">所有品牌</option>
							                 <option value="Butterfly">BUTTERFLY</option>
                               <option value="Nittaku">Nittaku</option>
                               <option value="Stiga">STIGA</option>
                               <option value="Donic">DONIC</option>
                               <option value="Yasaka">Yasaka</option>
                               <option value="Andro">Andro</option>
                               <option value="Tibhar">TIBHAR</option>
                               <option value="Xion">XIOM</option>
                             
                              <option value="紅雙喜DHS">紅雙喜DHS</option>
                               <option value="Tsp">TSP</option>
                               <option value="Victas">VICTAS</option>
                               <option value="Joola">JOOLA</option>
                              <option value="Dr.Neubauer紐鮑爾">Dr.Neubauer</option>
                               <option value="Adidas">adidas</option>
                              <option value="銀河">銀河</option>
                               <option value="Kokutaku">Kokutaku</option>              
                               <option value="Mizuno">Mizuno</option>
                               <option value="Palio">Palio</option>
                               <option value="Kison">Kison</option>
                              <option value="雙魚">雙魚</option>
                               <option value="Crack">Crack</option>
                              <option value="台灣神木">台灣神木</option> 
							   </select>
							   </span>
                               <span>                      
							   商品分類
							   <select style="width: 7em;border-radius: .25em;" #category>
							   <option value="">所有商品</option>
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
							   </select></span>  
							   <button (click)="gotoResult(brand.value,category.value)">商品搜尋</button>
							</div> 
                            </div>
						</div>
						
						<div class="leftInfo">
						<h3>波爾桌球用品專賣店<br>BOLL TABLE TENNIS<button (click)="gotoAbout()" style="float: right;margin-left: 10px;">更多關於我們</button></h3>
                        <p>每支球拍都有自己的故事，昂貴的球具並不意味著適合自己！
讓每把拍子都能夠找到它的主人，也讓每位主人都因為擁有它而感動不已......
					    </p>
					    <div class="bothImg" align="center">
					    <span class="leftImg">
					    <a href="mailto:majestic168168@gmail.com" ><img src="../../img/telephone.png" height="70px" width="70px"></a><h3>(02)3151-7171</h3>
					    
					    </span>
					    <span class="rightImg">
					    <img data-toggle="modal" data-target="#lineModal" src="../../img/line.png" height="70px" width="70px"><h3>ID 0986465666</h3>
					    </span>
					    
					    </div>
              <!-- Modal -->
                  <div class="modal fade" id="lineModal" tabindex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true">
                    <div class="modal-dialog lineModal" role="document" style="padding-top: 100px;">
                      <div class="modal-content" style="width: 200px;min-height: 200px">
                        <div class="modal-header">
                          <button type="button" style="width: 20px;height: 20px;" class="close" data-dismiss="modal" aria-label="Close">
                            <span aria-hidden="true">&times;</span>
                          </button>
                          <h4 class="modal-title" id="myModalLabel">Line ID 0986465666</h4>
                        </div>
                        <div class="modal-body">
                          <img src="../../img/lineid.jpeg">
                        </div>
                      </div>
                    </div>
                  </div>

					    </div>
					    
					    <div class="rightInfo"> 
					    
					    <img src="../../img/pic.jpg" height="250px" width="460px">
					    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d6209.344007754694!2d121.51676365026631!3d24.996184892916983!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3442a9e1ff84c2df%3A0x7eedfc63cbe4f1ed!2zMjM15paw5YyX5biC5Lit5ZKM5Y2A6Ieq5by36LevNjDomZ8!5e0!3m2!1szh-TW!2stw!4v1464106888426" width="460" height="150" frameborder="0" style="border:0" allowfullscreen></iframe>
					    
					    </div>
					
					</div>
					<div class="backinfo"></div>
					
				</div>
	
				<div class="banner">
				
				<div class="row">
                      <div class="col-md-12">
                        <carousel [interval]="NextPhotoInterval" [noWrap]>
                          <slide  *ngFor="let slidez of slides; let index=index"
                                 [active]="slidez.active" >
                            <img [src]="slidez.image" style="margin:auto;">

                            
                          </slide>
                        </carousel>
                      </div>
                    
                    </div>
				
                </div>
				
			  </div>
			  
			  <div class="news">
				<div class="news_img"></div>
				<div class="news_info">
					<h2>最新消息</h2><hr width="450px">
					<div class="new_btn">

          <button (click)="gotoDetail21()">2017-11-22<span class="category">評測</span><p></p>"Nittaku Bloodwood"帥氣開箱分享</button>
          <button (click)="gotoDetail20()">2017-11-14<span class="category">評測</span><p></p>STIGA 北極純木五夾 ARCTIC 開箱體驗</button>
          <button (click)="gotoDetail19()">2017-11-12<span class="category">情報</span><p></p>日本蝴蝶牌“BUTTERFLY”桌球底板的誕生</button>
          <button (click)="gotoDetail18()">2017-11-09<span class="category">新品</span><p></p>㊣ Arctic Wood ㊣ STIGA底板 新品上市</button>
          <button (click)="gotoDetail17()">2017-11-03<span class="category">新品</span><p></p>BUTTERFLY CHACK SHEET 專業無機黏膠紙</button>
          <button (click)="gotoDetail16()">2017-10-27<span class="category">情報</span><p></p>⭐"BUTTERFLY 波爾ALC"底板持續熱銷中⭐<a class="new_button" (click)="gotoNew()">更多消息</a></button>
          
          
					</div>
					
					<div id="myModal5" class="modal fade" role="dialog" >
                      <div class="modal-dialog">
                    <!-- Modal content-->
                      <div class="modal-content">
                      <div class="ptitle"> {{ptitle}}</div>
                      <div class="pcontent">{{pcontent}}</div>
                      </div>
                      </div>
                      </div>
                      
          </div>
          
			</div>
			
			
			<div class="commodity">
			<div class="title-clothes">
        <div class="title-clothes-line"></div>新品上架<div class="title-clothes-line2"></div>
        </div>
			<div class="commodity_raw productSlider" >
				<div class="col-md-2" *ngFor="let p of products | orderBy : '-sorting'">
					<button type="button" data-toggle="modal" data-target="#myModal" (click)="onSelect(p.name,p.price,p.id,p.imgsrc,p.description,p.category,p.blade_structure,p.blade_special,p.blade_vibrate,p.blade_hitsize,p.blade_thick,p.blade_holdwidth,p.blade_holdsize,p.blade_madein,p.robber_property,p.robber_speed,p.robber_spin,p.robber_control,p.robber_hard,p.robber_madein,p.other_madein,p.brand)"><img src="{{p.imgsrc}}" alt=""></button>
					<div class="commodity_detail" id="name">{{p.name}}</div>
          <div class="commodity_detail" id="plogo">
            <img src="../../img/logo/{{p.brand}}.jpg" alt="">
          </div>
					<div class="commodity_detail" id="price"><span class="pricecol">＄{{p.price}}</span></div>					
					<!-- Modal -->
                    
                    <div id="myModal" class="modal fade" role="dialog" >
                      <div class="modal-dialog">
                    <!-- Modal content-->
                       <h2>{{pname}}</h2>
                      <div class="modal-content">
                     <div class="cool">
                     <button class="productClose" type="button" data-dismiss="modal"><i class="fa fa-times"></i></button>
                     <div class="modal-left">
                     <img class="product_img" src="{{pimg}}" alt="">
                     </div>
                     <div class="modal-right">
                     
                     
                     <div class="icon" *ngIf="pcategory=='blades' || pcategory=='penhold'"> 
                     <div class="icon1" align="center"><img src="../../img/icon/06.png"><p>底板結構</p><span class="pricecol"><p>{{pblade_structure}}</p></span></div>
                     <div class="icon1" align="center"><img src="../../img/icon/11.png"><p>震動特性</p><span class="pricecol"><p>{{pblade_vibrate}}</p></span></div>
                     
                     &nbsp;<div class="icon1" align="center"><img src="../../img/icon/08.png"><p>&nbsp;反發特性</p><span class="pricecol"><p>{{pblade_special}}</p></span></div>
                    <div class="icon1" align="center"><img src="../../img/icon/09.png"><p>拍柄尺寸</p><span class="pricecol"><p>{{pblade_holdsize}}</p></span></div>
                    <br>  <div class="icon1" align="center"><img src="../../img/icon/10.png"><p>拍柄底寬</p><span class="pricecol"><p>{{pblade_holdwidth}}</p></span></div>
                     
                     <div class="icon1" align="center"><img src="../../img/icon/12.png"><p>板面尺寸</p><span class="pricecol"><p>{{pblade_hitsize}}</p></span></div>
                     <div class="icon1" align="center"><img src="../../img/icon/13.png"><p>板面厚度</p><span class="pricecol"><p>{{pblade_thick}}</p></span></div>
                     <div class="icon1" align="center"><img src="../../img/icon/05.png"><p>出產地</p><span class="pricecol"><p>{{pblade_madein}}</p></span></div>
                
                     </div> 
                     
                     <div class="icon" *ngIf="pcategory=='robbers'">   
                     
                    <div class="icon2" align="center"><img src="../../img/icon/01.png"><p>性質</p><span class="pricecol"><p>{{probber_property}}</p></span></div>
                    <div class="icon2" align="center"><img src="../../img/icon/07.png"><p>速度</p><span class="pricecol"><p>{{probber_speed}}</p></span></div>
                    <div class="icon2" align="center"><img src="../../img/icon/02.png"><p>旋轉</p><span class="pricecol"><p>{{probber_spin}}</p></span></div>
                     
                    <br> <div class="icon2" align="center"><img src="../../img/icon/03.png"><p>控制</p><span class="pricecol"><p>{{probber_control}}</p></span></div>
                     <div class="icon2" align="center"><img src="../../img/icon/04.png"><p>硬度</p><span class="pricecol"><p>{{probber_hard}}</p></span></div>
                     <div class="icon2" align="center"><img src="../../img/icon/05.png"><p>出產地</p><span class="pricecol"><p>{{probber_madein}}</p></span></div>
                     
                     </div>

                     <div class="icon" *ngIf="pcategory=='lowblades' || pcategory=='glue' || pcategory=='balls' || pcategory=='clothes' || pcategory=='shoes' || pcategory=='accessory' || pcategory=='bags' || pcategory=='tables'  || pcategory=='others' ">   
                     <div class="icon2" align="center"><img src="../../img/icon/05.png"><p>出產地</p><span class="pricecol"><p>{{pothers_madein}}</p></span></div>
                     </div>
                     
                     <div class="description">
                     <p>{{pdescription}}</p>
                     </div>       
                     <div class="button_panel">
                     
                     <button class="price-btn">{{pprice}}</button>
                     <select style="width: 4em;border-radius: .25em;height: 1.75em;background-color: #fff;color: #181896;font-size: 20px;" (change)="onChangeSelected($event.target.value)">
                     <option [value]=1 [selected]="pamount==1">1</option>
                     <option [value]=2>2</option>
                     <option [value]=3>3</option>
                     <option [value]=4>4</option>
                     <option [value]=5>5</option>
                     <option [value]=6>6</option>
                     <option [value]=7>7</option>
                     <option [value]=8>8</option>
                     <option [value]=9>9</option>
                     <option [value]=10>10</option>
                     </select>
                     <add [pprice]="pprice" [pid]="pid" [pamount]="pamount" [pname]="pname"></add>
                    
                     </div>
                     
                     </div>
                     
                     
                     </div>
    
                    </div>
    
                </div>
            </div>
				</div></div>
		   <div class="title-home">
        <div class="title-home-line"></div>各類商品<div class="title-home-line2"></div>
        </div>
		<div class="commodity_classify">
		    <div class="categorybtn">
					<div class="raw">
				<br/>
					<div class="col-md-4 col-md-2" align="center"><button (click)="gotoResult('','blades')"><img src="../../img/category/blades.jpg" alt=""></button><span class="coool">刀板</span></div>
					<div class="col-md-4 col-md-2" align="center"><button (click)="gotoResult('','penhold')"><img src="../../img/category/penhold.jpg" alt=""></button><span class="coool">直板</span></div>
					<div class="col-md-4 col-md-2" align="center"><button (click)="gotoResult('','robbers')"><img src="../../img/category/robbers.jpg" alt=""></button><span class="coool">膠皮</span></div>
					<div class="col-md-4 col-md-2" align="center"><button (click)="gotoResult('','clothes')"><img src="../../img/category/clothes.jpg" alt=""></button><span class="coool">服飾</span></div>
					<div class="col-md-4 col-md-2" align="center"><button (click)="gotoResult('','shoes')"><img src="../../img/category/shoes.jpg" alt=""></button><span class="coool">鞋&襪</span></div>
					<div class="col-md-4 col-md-2" align="center"><button (click)="gotoResult('','bags')"><img src="../../img/category/bags.jpg" alt=""></button><span class="coool">拍套&裝備袋(包)</span></div>
				</div>
				<div class="raw"><br/>
					<div class="col-md-4 col-md-2" align="center"><button (click)="gotoResult('','lowblades')"><img src="../../img/category/lowblades.jpg" alt=""></button><span class="coool">成品拍</span></div>
					<div class="col-md-4 col-md-2" align="center"><button (click)="gotoResult('','balls')"><img src="../../img/category/balls.jpg" alt=""></button><span class="coool">球&置球盒</span></div>
					<div class="col-md-4 col-md-2" align="center"><button (click)="gotoResult('','tables')"><img src="../../img/category/tables.jpg" alt=""></button><span class="coool">球桌&周邊，發球機</span></div>
					<div class="col-md-4 col-md-2" align="center"><button (click)="gotoResult('','glue')"><img src="../../img/category/glues.jpg" alt=""></button><span class="coool">膠水&增能劑</span></div>
					<div class="col-md-4 col-md-2" align="center"><button (click)="gotoResult('','accessory')"><img src="../../img/category/accessory.jpg" alt=""></button><span class="coool">配件&保養清潔品</span></div>
					<div class="col-md-4 col-md-2" align="center"><button (click)="gotoResult('','others')"><img src="../../img/category/others.jpg" alt=""></button><span class="coool">其他</span></div>
				</div>
            </div>
			</div>
    
			
			
        
       
		
    `,
  inputs:['ptitle','pcontent','pamount','pprice','pid','pimg','pdescription','pcategory','pname','pblade_structure','pblade_special','pblade_vibrate','pblade_hitsize','pblade_thick','pblade_holdwidth','pblade_holdsize','pblade_madein','probber_property','probber_speed','probber_spin','probber_control','probber_hard','probber_madein','pothers_madein']
})



export class HomeComponent{
  NextPhotoInterval:number = 8000;
  //Looping or not
  noLoopSlides:boolean = true;
  //Photos
  slides:Array<any> = [];

  pname:string;
  pprice:number;
  pid:number;
  pamount:number;
  pimg:string;
  pdescription:string;
  pcategory:string;
  pblade_structure:string;
  pblade_special:string;
  pblade_vibrate:string;
  pblade_hitsize:string;
  pblade_thick:string;
  pblade_holdwidth:string;
  pblade_holdsize:string;
  pblade_madein:string;
  probber_property:string;
  probber_speed:string;
  probber_spin:string;
  probber_control:string;
  probber_hard:string;
  probber_madein:string;
  pothers_madein:string;
  ptitle:string;
  pcontent:string;
  pothers:string;
  pbrand:string;

  constructor(private productService:ProductService,private router:Router,private searchvalue:SearchValue,private newservice:NewService) {
    this.addNewSlide();
  }

   addNewSlide() {
    this.slides.push(
      {image:'../../img/1.jpg',text:'BMW 1'},
      {image:'../../img/2.jpg',text:'BMW 2'},
      {image:'../../img/3.jpg',text:'BMW 3'},
      {image:'../../img/4.jpg',text:'BMW 3'}

    );
  }

  removeLastSlide() {
    this.slides.pop();
  }

  gotoResult(value,value2){
    this.searchvalue.add(value,value2)
    this.router.navigate(['SearchResult']);
  }


  errorMessage:string;

  products:Product[];
  new:New[];

  ngOnInit(){
    this.getProducts();
    this.getNews();

  }
  getNews(){
    this.newservice.getNews()
      .subscribe(
        products => this.new = products,
        error =>  this.errorMessage = <any>error);


  }

  getProducts(){
    this.productService.getProduct()
      .subscribe(
        products => {

          //this.products = products;
          var sortedArray: Product[] = products.sort((obj1, obj2) => {
            if (+obj1.json_str > +obj2.json_str) {
                return 1;
            }
        
            if (+obj1.json_str < +obj2.json_str) {
                return -1;
            }
        
            return 0;
        });
        var NeedToSort:Product[]=[];
        var DontNeedToSort:Product[]=[];
        for(var i=0;i<sortedArray.length;i++){
          if(sortedArray[i].json_str!=null && sortedArray[i].json_str>0){
              NeedToSort.push(sortedArray[i]);
              delete sortedArray[i];
          }
        }
        DontNeedToSort =sortedArray.filter(Boolean);
        console.log(NeedToSort);
        //console.log(DontNeedToSort);
        
        for(var i=0;i<DontNeedToSort.length;i++){
          NeedToSort.push(DontNeedToSort[i]);
        }
        
        this.products = NeedToSort.reverse();
        console.log(this.products);
        },
        error =>  this.errorMessage = <any>error);


  }

  select2(title:string,content:string){
    this.newservice.add(title,content);
  }

  onChangeSelected(amount:number){
    this.pamount=amount;
  }


  onSelect(name:string,product: number,productid:number,pimg:string,pdescription:string,pcategory,pblade_structure:string,pblade_special:string,pblade_vibrate:string,pblade_hitsize:string,pblade_thick:string,pblade_holdwidth:string,pblade_holdsize:string,pblade_madein:string,probber_property:string,probber_speed:string,probber_spin:string,probber_control:string,probber_hard:string,probber_madein:string,pothers_madein:string,pbrand:string) {
    this.pamount=1;
    this.pname=name;
    this.pprice = product;
    this.pid=productid;
    this.pimg=pimg;
    this.pdescription=pdescription;
    this.pcategory=pcategory;
    this.pblade_structure=pblade_structure;
    this.pblade_special=pblade_special;
    this.pblade_vibrate=pblade_vibrate;
    this.pblade_hitsize=pblade_hitsize;
    this.pblade_thick=pblade_thick;
    this.pblade_holdwidth=pblade_holdwidth;
    this.pblade_holdsize=pblade_holdsize;
    this.pblade_madein=pblade_madein;
    this.probber_property=probber_property;
    this.probber_speed=probber_speed;
    this.probber_spin=probber_spin;
    this.probber_control=probber_control;
    this.probber_hard=probber_hard;
    this.probber_madein=probber_madein;
    this.pothers_madein=pothers_madein;
    this.pbrand=pbrand;
  }

  gotoAbout(){
    this.router.navigate(['about']);
  }

  gotoNewDetail(){
    this.router.navigate(['newdetail']);
  }

  gotoNew(){
    this.router.navigate(['new']);
  }

  changeNum(pamount){
    this.pamount=pamount;
    console.log(this.pamount)
  }

  gotoDetail1(){
    this.router.navigate(['detail1']);
  }
  gotoDetail2(){
    this.router.navigate(['detail2']);
  }
  gotoDetail3(){
    this.router.navigate(['detail3']);
  }
  gotoDetail4(){
    this.router.navigate(['detail4']);
  }
  gotoDetail5(){
    this.router.navigate(['detail5']);
  }
  gotoDetail6(){
    this.router.navigate(['detail6']);
  }
  gotoDetail7(){
    this.router.navigate(['detail7']);
  }
  gotoDetail8(){
    this.router.navigate(['detail8']);
  }
  gotoDetail9(){
    this.router.navigate(['detail9']);
  }
  gotoDetail10(){
    this.router.navigate(['detail10']);
  }
  gotoDetail11(){
    this.router.navigate(['detail11']);
  }
  gotoDetail12(){
    this.router.navigate(['detail12']);
  }
  gotoDetail13(){
    this.router.navigate(['detail13']);
  }
  gotoDetail14(){
    this.router.navigate(['detail14']);
  }
  gotoDetail15(){
    this.router.navigate(['detail15']);
  }
  gotoDetail16(){
    this.router.navigate(['detail16']);
  }
  gotoDetail17(){
    this.router.navigate(['detail17']);
  }
  gotoDetail18(){
    this.router.navigate(['detail18']);
  }
  gotoDetail19(){
    this.router.navigate(['detail19']);
  }
  gotoDetail20(){
    this.router.navigate(['detail20']);
  }
  gotoDetail21(){
    this.router.navigate(['detail21']);
  }





    }