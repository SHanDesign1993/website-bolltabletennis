import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import {AppComponent} from './app.component';
import {routing} from "./app.routing";
import {ClassroomComponent} from "./Classroom/classroom.component";
import {FlowComponent} from "./Flow/flow.component";
import {AboutComponent} from "./Home/about.component";
import {HomeComponent} from "./Home/home.component";
import {Slide} from "./Home/slide.component";
import {Carousel} from "./Home/carousel.component";
import {OrderByPipe} from "./Home/orderBy";
import {AddButton} from "./cartbutton.component";
import {LineComponent} from "./Home/line.component";
import {NgFor, CommonModule} from "@angular/common";
import {ProductService} from "./product.service";
import {NewService} from "./news/new.service";
import {SearchValue} from "./searchvalue.service";
import {ShoppingCartService} from "./shoppingcart.service";
import {ShoppingCart} from "./shoppoingcart.component";
import {OrderService} from "./order.service";
import {UserService} from "./user.servise";
import {MemberData} from "./memberdata";
import {MemberService} from "./member.service";
import {NotificationComponent} from "./notification.component";
import {MemberComponent} from "./Member/member.component";
import {MemberAdminComponent} from "./Member/member-admin.component";
import {MemberLoginComponent} from "./Member/member-login.component";
import {UploadComponent} from "./upload.component";
import {NewComponent} from "./news/new.component";
import {SearchResultComponent} from "./Home/searchresult.component";
import {SearchResultComponent2} from "./Home/searchresult2.component";
import {newdetailComponent} from "./news/new-detail.component";
import {OrderAdminComponent} from "./order-admin.component";
import {ClothesComponent} from "./Clothes/clothes.component";
import {NewUploadComponent} from "./news/new-upload.component";
import {Detail1Component} from "./news/detail/detail1.component";
import {Detail2Component} from "./news/detail/detail2.component";
import {Detail3Component} from "./news/detail/detail3.component";
import {Detail4Component} from "./news/detail/detail4.component";
import {Detail5Component} from "./news/detail/detail5.component";
import {Detail6Component} from "./news/detail/detail6.component";
import {Detail7Component} from "./news/detail/detail7.component";
import {Detail8Component} from "./news/detail/detail8.component";
import {Detail9Component} from "./news/detail/detail9.component";
import {Detail10Component} from "./news/detail/detail10.component";
import {Detail11Component} from "./news/detail/detail11.component";
import {Detail12Component} from "./news/detail/detail12.component";
import {Detail13Component} from "./news/detail/detail13.component";
import {Detail14Component} from "./news/detail/detail14.component";
import {Detail15Component} from "./news/detail/detail15.component";
import {Detail16Component} from "./news/detail/detail16.component";
import {Detail17Component} from "./news/detail/detail17.component";
import {Detail18Component} from "./news/detail/detail18.component";
import {Detail19Component} from "./news/detail/detail19.component";
import {Detail20Component} from "./news/detail/detail20.component";
import {Detail21Component} from "./news/detail/detail21.component";

import {New2Component} from "./news/new2.component";
import {New3Component} from "./news/new3.component";
import {New4Component} from "./news/new4.component";
import {New5Component} from "./news/new5.component";



@NgModule({
  declarations: [
    AppComponent,
    ClassroomComponent,
    FlowComponent,
    AboutComponent,
    HomeComponent,
    AddButton,
    ShoppingCart,
    Carousel,
    Slide,
    NotificationComponent,
    MemberComponent,
    MemberAdminComponent,
    MemberLoginComponent,
    UploadComponent,
    NewComponent,
    SearchResultComponent,
    SearchResultComponent2,
    newdetailComponent,
    OrderByPipe,
    LineComponent,
    OrderAdminComponent,
    ClothesComponent,
    NewUploadComponent,
    Detail1Component,
    Detail2Component,
    Detail3Component,
    Detail4Component,
    Detail5Component,
    Detail6Component,
    Detail7Component,
    Detail8Component,
    Detail9Component,
    Detail10Component,
    Detail11Component,
    Detail12Component,
    Detail13Component,
    Detail14Component,
    Detail15Component,
    Detail16Component,
    Detail17Component,
    Detail18Component,
    Detail19Component,
    Detail20Component,
    Detail21Component,

    New2Component,
    New3Component,
    New4Component,
    New5Component
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    routing,

  ],
  providers: [ProductService,NewService,SearchValue,ShoppingCartService,OrderService,UserService,MemberService],
  bootstrap: [AppComponent]
})
export class AppModule { }
