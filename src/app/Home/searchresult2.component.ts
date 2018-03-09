import {Carousel} from "./carousel.component";
import {Slide} from "./slide.component";
import {SearchValue} from "../searchvalue.service";
import {OnInit} from "@angular/core";
import {Component} from "@angular/core";
import {Product} from "../product";
import {ProductService} from "../product.service";
import {AddButton} from "../cartbutton.component";
import {Router} from "@angular/router";
import { PagerService } from "../_services/perger.service"

@Component({
    selector:'search-result',
    providers: [PagerService],
    template:`
    <div class="detail2">
    <!-- <img src="http://suwenyu.github.io/NCCUCY/img/12810398_967697163321645_1895850552_o.jpg" alt=""> -->
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
        
        </div>
        <div class="backinfo2"></div>
        
    </div>
    
				<div class=""banner>
				
				<div class="row">
                      <div class="col-md-12">
                        <carousel [interval]="NextPhotoInterval" [noWrap]>
                          <slide *ngFor="let slidez of slides;let index=index"
                                 [active]="slidez.active">
                            <img [src]="slidez.image" style="margin:auto;">

                            
                          </slide>
                        </carousel>
                      </div>
                    
                    </div>
				
                </div>
				

			</div>
			<div class="container">
			<div class="search-title">
			
			<h2>搜尋結果 <span class="pricecol"></span></h2>
			</div>
			
            <div class="productSlider2" >
            

                    <!-- items being paged -->
                    <div class="result" *ngFor="let p of pagedItems">   
                            <button type="button" data-toggle="modal" data-target="#myModal" (click)="onSelect(p.name,p.price,p.id,p.imgsrc,p.description,p.category,p.blade_structure,p.blade_special,p.blade_vibrate,p.blade_hitsize,p.blade_thick,p.blade_holdwidth,p.blade_holdsize,p.blade_madein,p.robber_property,p.robber_speed,p.robber_spin,p.robber_control,p.robber_hard,p.robber_madein,p.other_madein,p.brand)"><img src="{{p.imgsrc}}" alt=""></button>
                            <div id="name" align="center">{{p.name}}</div>
                            <div class="commodity_detail" id="plogo">
                                <img src="../../img/logo/{{p.brand}}.jpg" alt="">
                            </div>
                            <div id="price" align="center"><span class="pricecol">＄{{p.price}}</span></div>
                            </div>
                    </div>
                    <!-- pager -->
                    <div style="width:100%;text-align:center;">
                    <ul *ngIf="pager.pages && pager.pages.length" class="pagination">
                    <!--<li [ngClass]="{disabled:pager.currentPage === 1}"><a (click)="setPage(1)">First</a></li>-->
                    <li [ngClass]="{disabled:pager.currentPage === 1}"><a (click)="setPage(pager.currentPage - 1)"><</a></li>
                    <li *ngFor="let page of pager.pages" [ngClass]="{active:pager.currentPage === page}"><a (click)="setPage(page)">{{page}}</a></li>
                    <li [ngClass]="{disabled:pager.currentPage === pager.totalPages}"><a (click)="setPage(pager.currentPage + 1)">></a></li>
                    <!--<li [ngClass]="{disabled:pager.currentPage === pager.totalPages}"><a (click)="setPage(pager.totalPages)">Last</a></li>-->
                    </ul>
                    </div>
                    
            
                    <!-- Modal -->
                    
                    <div id="myModal" class="modal fade" role="dialog" >
                      <div class="modal-dialog">
                    <!-- Modal content-->
                    <h2>{{pname}}</h2>
                    <div class="modal-content">
                    <div class="cool">
                    <button class="productClose" type="button" data-dismiss="modal"><i class="fa fa-times"></i></button>
                    <div class="modal-left">
                    <img class="product_img" src="{{pimg}}" alt="" >
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

                     <div class="icon" *ngIf=" pcategory=='lowblades' || pcategory=='glue' || pcategory=='balls' || pcategory=='clothes' || pcategory=='shoes' || pcategory=='accessory' || pcategory=='bags' || pcategory=='tables'  || pcategory=='others' ">   
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
				</div>
				

			

    `,
    inputs:['pprice','pamount','pid','pimg','pdescription','pcategory','pname','pblade_structure','pblade_special','pblade_vibrate','pblade_hitsize','pblade_thick','pblade_holdwidth','pblade_holdsize','pblade_madein','probber_property','probber_speed','probber_spin','probber_control','probber_hard','probber_madein','pothers_madein']

})

export class SearchResultComponent2 implements OnInit{


    NextPhotoInterval:number = 8000;
    //Looping or not
    noLoopSlides:boolean = true;
    //Photos
    slides:Array<any> = [];

    ss:any;
    errorMessage:string;

    // all products
    products:Product[];
    // pager object
    pager: any = {};
    // paged items
    pagedItems: Product[];

    public pamount:number;
    public pname:string;
    public pprice:number;
    public pid:number;
    public pimg:string;
    public pdescription:string;
    public pcategory:string;
    public pblade_structure:string;
    public pblade_special:string;
    public pblade_vibrate:string;
    public pblade_hitsize:string;
    public pblade_thick:string;
    public pblade_holdwidth:string;
    public pblade_holdsize:string;
    public pblade_madein:string;
    public probber_property:string;
    public probber_speed:string;
    public probber_spin:string;
    public probber_control:string;
    public probber_hard:string;
    public probber_madein:string;
    public pothers_madein:string;
    public pbrand:string;

    constructor(private searchvalue:SearchValue,private productservice:ProductService,private router:Router,private pagerService: PagerService) {
        this.addNewSlide();
    }

    ngOnInit(){
        console.log(this.ss);
        this.getProducts();
    }

    getProducts(){
        this.searchvalue.getProduct()
            .subscribe(
                products => {
                    //console.log(this.searchvalue.stype);
                    this.products = products;
                    this.SortData(this.searchvalue.stype);
                    
                    //console.log(this.products);
                    //this.setPage(1);
                },
                error =>  this.errorMessage = <any>error);

    }
    predicateBy(prop){
        return function(a,b){
           if( a[prop] > b[prop]){
               return 1;
           }else if( a[prop] < b[prop] ){
               return -1;
           }
           return 0;
        }
    }

    
    SortData(type){
        //console.log(type);
        if(type=="b"){
            //brand search , sort by category
            console.log("brand search , sort by category");
            var Category_robbers:Product[]=[];
            var Category_blades:Product[]=[];
            var Category_penhold:Product[]=[];
            var Category_lowblades:Product[]=[];
            var Category_glue:Product[]=[];
            var Category_balls:Product[]=[];
            var Category_clothes:Product[]=[];
            var Category_shoes:Product[]=[];
            var Category_accessory:Product[]=[];
            var Category_bags:Product[]=[];
            var Category_tables:Product[]=[];
            var Category_others:Product[]=[];
            for(var i=0;i<this.products.length;i++){
                if(this.products[i].category=="robbers"){
                    Category_robbers.push(this.products[i]);
                    delete this.products[i];
                }else if(this.products[i].category=="blades"){
                    Category_blades.push(this.products[i]);
                    delete this.products[i];
                }else if(this.products[i].category=="penhold"){
                    Category_penhold.push(this.products[i]);
                    delete this.products[i];
                }else if(this.products[i].category=="lowblades"){
                    Category_lowblades.push(this.products[i]);
                    delete this.products[i];
                }else if(this.products[i].category=="glue"){
                    Category_glue.push(this.products[i]);
                    delete this.products[i];
                }else if(this.products[i].category=="balls"){
                    Category_balls.push(this.products[i]);
                    delete this.products[i];
                }else if(this.products[i].category=="clothes"){
                    Category_clothes.push(this.products[i]);
                    delete this.products[i];
                }else if(this.products[i].category=="shoes"){
                    Category_shoes.push(this.products[i]);
                    delete this.products[i];
                }else if(this.products[i].category=="accessory"){
                    Category_accessory.push(this.products[i]);
                    delete this.products[i];
                }else if(this.products[i].category=="bags"){
                    Category_bags.push(this.products[i]);
                    delete this.products[i];
                }else if(this.products[i].category=="tables"){
                    Category_tables.push(this.products[i]);
                    delete this.products[i];
                }else if(this.products[i].category=="others"){
                    Category_others.push(this.products[i]);
                    delete this.products[i];
                }
            }
            var SortedProducts:Product[]=[];
            console.log(Category_robbers);
            SortedProducts=Category_blades.concat(Category_robbers.concat(Category_penhold.concat(Category_lowblades.concat(Category_glue.concat(Category_balls.concat(Category_clothes.concat(Category_shoes.concat(Category_accessory.concat(Category_bags.concat(Category_tables.concat(Category_others)))))))))));
            this.products = SortedProducts;
            console.log(this.products);
            
        }else if(type=="c"){
            //category search, sort by brand  
            console.log("category search, sort by brand");
            this.products.sort(function(a, b) {
                return parseFloat(a.brand) - parseFloat(b.brand);
            });
            //first
            var Brand_Butterfly:Product[]=[];
            var Brand_Nittku:Product[]=[];
            var Brand_Stiga:Product[]=[];
            //other
            var Brand_1:Product[]=[];
            var Brand_2:Product[]=[];
            var Brand_3:Product[]=[];
            var Brand_4:Product[]=[];
            var Brand_5:Product[]=[];
            var Brand_6:Product[]=[];
            var Brand_7:Product[]=[];
            var Brand_8:Product[]=[];
            var Brand_9:Product[]=[];
            var Brand_10:Product[]=[];
            var Brand_11:Product[]=[];
            var Brand_12:Product[]=[];
            var Brand_13:Product[]=[];
            var Brand_14:Product[]=[];
            var Brand_15:Product[]=[];
            var Brand_16:Product[]=[];
            var Brand_17:Product[]=[];
            var Brand_18:Product[]=[];
            var Brand_19:Product[]=[];

            for(var i=0;i<this.products.length;i++){
                if(this.products[i].brand=="Butterfly"){
                    Brand_Butterfly.push(this.products[i]);
                    delete this.products[i];
                }else if(this.products[i].brand=="Nittku"){
                    Brand_Nittku.push(this.products[i]);
                    delete this.products[i];
                }else if(this.products[i].brand=="Stiga"){
                    Brand_Stiga.push(this.products[i]);
                    delete this.products[i];
                }else if(this.products[i].brand=="Donic"){
                    Brand_1.push(this.products[i]);
                    delete this.products[i];
                }else if(this.products[i].brand=="Yasaka"){
                    Brand_2.push(this.products[i]);
                    delete this.products[i];
                }else if(this.products[i].brand=="Andro"){
                    Brand_3.push(this.products[i]);
                    delete this.products[i];
                }else if(this.products[i].brand=="Tibhar"){
                    Brand_4.push(this.products[i]);
                    delete this.products[i];
                }else if(this.products[i].brand=="Xion"){
                    Brand_5.push(this.products[i]);
                    delete this.products[i];
                }else if(this.products[i].brand=="紅雙喜DHS"){
                    Brand_6.push(this.products[i]);
                    delete this.products[i];
                }else if(this.products[i].brand=="Tsp"){
                    Brand_7.push(this.products[i]);
                    delete this.products[i];
                }else if(this.products[i].brand=="Victas"){
                    Brand_8.push(this.products[i]);
                    delete this.products[i];
                }else if(this.products[i].brand=="Joola"){
                    Brand_9.push(this.products[i]);
                    delete this.products[i];
                }else if(this.products[i].brand=="Dr.Neubauer紐鮑爾"){
                    Brand_10.push(this.products[i]);
                    delete this.products[i];
                }else if(this.products[i].brand=="Adidas"){
                    Brand_11.push(this.products[i]);
                    delete this.products[i];
                }else if(this.products[i].brand=="銀河"){
                    Brand_12.push(this.products[i]);
                    delete this.products[i];
                }else if(this.products[i].brand=="Kokutaku"){
                    Brand_13.push(this.products[i]);
                    delete this.products[i];
                }else if(this.products[i].brand=="Mizuno"){
                    Brand_14.push(this.products[i]);
                    delete this.products[i];
                }else if(this.products[i].brand=="Palio"){
                    Brand_15.push(this.products[i]);
                    delete this.products[i];
                }else if(this.products[i].brand=="Kison"){
                    Brand_16.push(this.products[i]);
                    delete this.products[i];
                }else if(this.products[i].brand=="雙魚"){
                    Brand_17.push(this.products[i]);
                    delete this.products[i];
                }else if(this.products[i].brand=="Crack"){
                    Brand_18.push(this.products[i]);
                    delete this.products[i];
                }else if(this.products[i].brand=="台灣神木"){
                    Brand_19.push(this.products[i]);
                    delete this.products[i];
                }
            }


            var FirstBrandsProducts:Product[]=[];
        
            FirstBrandsProducts = Brand_Butterfly.concat(Brand_Nittku.concat(Brand_Stiga));     
            var SortedProducts:Product[]=[];
            SortedProducts = FirstBrandsProducts.concat(Brand_1.concat(Brand_2.concat(Brand_3.concat(Brand_4.concat(Brand_5.concat(Brand_6.concat(Brand_7.concat(Brand_8.concat(Brand_9.concat(Brand_10.concat(Brand_11.concat(Brand_12.concat(Brand_13.concat(Brand_14.concat(Brand_15.concat(Brand_16.concat(Brand_17.concat(Brand_18.concat(Brand_19)))))))))))))))))));
            this.products = SortedProducts;
            console.log(this.products);

        }else if(type=="bc"){
             //brand and category search
            console.log("brand and category search");
        }
        this.setPage(1);
    }


    
    setPage(page: number) {
                if (page < 1 || page > this.pager.totalPages) {
                    return;
                }

                // get pager object from service
                this.pager = this.pagerService.getPager(this.products.length, page);
         
                // get current page of items
                this.pagedItems = this.products.slice(this.pager.startIndex, this.pager.endIndex + 1);
    }

    private addNewSlide() {
        this.slides.push(
            {image:'../../img/slideshow1.png',text:'BMW 1'},
            {image:'../../img/slideshow2.png',text:'BMW 2'},
            {image:'../../img/slideshow3.png',text:'BMW 3'}

        );
    }

    onChangeSelected(amount:number){
        this.pamount=amount;
    }

    onSelect(name,product,productid,pimg,pdescription,pcategory,pblade_structure,pblade_special,pblade_vibrate,pblade_hitsize,pblade_thick,pblade_holdwidth,pblade_holdsize,pblade_madein,probber_property,probber_speed,probber_spin,probber_control,probber_hard,probber_madein,pothers_madein,pbrand) {
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

    private removeLastSlide() {
        this.slides.pop();
    }

    gotoResult(value,value2){
        this.searchvalue.add(value,value2)
        this.router.navigate(['SearchResult']);
    }
}
