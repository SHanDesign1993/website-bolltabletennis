"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var platform_browser_1 = require('@angular/platform-browser');
var core_1 = require('@angular/core');
var forms_1 = require('@angular/forms');
var http_1 = require('@angular/http');
var app_component_1 = require('./app.component');
var app_routing_1 = require("./app.routing");
var classroom_component_1 = require("./Classroom/classroom.component");
var flow_component_1 = require("./Flow/flow.component");
var about_component_1 = require("./Home/about.component");
var home_component_1 = require("./Home/home.component");
var slide_component_1 = require("./Home/slide.component");
var carousel_component_1 = require("./Home/carousel.component");
var orderBy_1 = require("./Home/orderBy");
var cartbutton_component_1 = require("./cartbutton.component");
var line_component_1 = require("./Home/line.component");
var product_service_1 = require("./product.service");
var new_service_1 = require("./news/new.service");
var searchvalue_service_1 = require("./searchvalue.service");
var shoppingcart_service_1 = require("./shoppingcart.service");
var shoppoingcart_component_1 = require("./shoppoingcart.component");
var order_service_1 = require("./order.service");
var user_servise_1 = require("./user.servise");
var member_service_1 = require("./member.service");
var notification_component_1 = require("./notification.component");
var member_component_1 = require("./Member/member.component");
var member_admin_component_1 = require("./Member/member-admin.component");
var member_login_component_1 = require("./Member/member-login.component");
var upload_component_1 = require("./upload.component");
var new_component_1 = require("./news/new.component");
var searchresult_component_1 = require("./Home/searchresult.component");
var searchresult2_component_1 = require("./Home/searchresult2.component");
var new_detail_component_1 = require("./news/new-detail.component");
var order_admin_component_1 = require("./order-admin.component");
var clothes_component_1 = require("./Clothes/clothes.component");
var new_upload_component_1 = require("./news/new-upload.component");
var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        core_1.NgModule({
            declarations: [
                app_component_1.AppComponent,
                classroom_component_1.ClassroomComponent,
                flow_component_1.FlowComponent,
                about_component_1.AboutComponent,
                home_component_1.HomeComponent,
                cartbutton_component_1.AddButton,
                shoppoingcart_component_1.ShoppingCart,
                carousel_component_1.Carousel,
                slide_component_1.Slide,
                notification_component_1.NotificationComponent,
                member_component_1.MemberComponent,
                member_admin_component_1.MemberAdminComponent,
                member_login_component_1.MemberLoginComponent,
                upload_component_1.UploadComponent,
                new_component_1.NewComponent,
                searchresult_component_1.SearchResultComponent,
                searchresult2_component_1.SearchResultComponent2,
                new_detail_component_1.newdetailComponent,
                orderBy_1.OrderByPipe,
                line_component_1.LineComponent,
                order_admin_component_1.OrderAdminComponent,
                clothes_component_1.ClothesComponent,
                new_upload_component_1.NewUploadComponent
            ],
            imports: [
                platform_browser_1.BrowserModule,
                forms_1.FormsModule,
                http_1.HttpModule,
                app_routing_1.routing,
            ],
            providers: [product_service_1.ProductService, new_service_1.NewService, searchvalue_service_1.SearchValue, shoppingcart_service_1.ShoppingCartService, order_service_1.OrderService, user_servise_1.UserService, member_service_1.MemberService],
            bootstrap: [app_component_1.AppComponent]
        })
    ], AppModule);
    return AppModule;
}());
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map