"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require("@angular/core");
var SearchResultComponent = (function () {
    function SearchResultComponent(searchvalue, productservice, router) {
        this.searchvalue = searchvalue;
        this.productservice = productservice;
        this.router = router;
        this.NextPhotoInterval = 8000;
        //Looping or not
        this.noLoopSlides = true;
        //Photos
        this.slides = [];
        this.addNewSlide();
    }
    SearchResultComponent.prototype.ngOnInit = function () {
        console.log(this.ss);
        this.getProducts();
    };
    SearchResultComponent.prototype.getProducts = function () {
        var _this = this;
        this.searchvalue.getProduct()
            .subscribe(function (products) { return _this.products = products; }, function (error) { return _this.errorMessage = error; });
    };
    SearchResultComponent.prototype.addNewSlide = function () {
        this.slides.push({ image: '../../img/slideshow1.png', text: 'BMW 1' }, { image: '../../img/slideshow2.png', text: 'BMW 2' }, { image: '../../img/slideshow3.png', text: 'BMW 3' });
    };
    SearchResultComponent.prototype.onSelect = function (name, product, productid, pimg, pdescription, pcategory, pblade_structure, pblade_special, pblade_vibrate, pblade_hitsize, pblade_thick, pblade_holdwidth, pblade_holdsize, pblade_madein, probber_property, probber_speed, probber_spin, probber_control, probber_hard, probber_madein, pothers_madein, pbrand) {
        this.pname = name;
        this.pprice = product;
        this.pid = productid;
        this.pimg = pimg;
        this.pdescription = pdescription;
        this.pcategory = pcategory;
        this.pblade_structure = pblade_structure;
        this.pblade_special = pblade_special;
        this.pblade_vibrate = pblade_vibrate;
        this.pblade_hitsize = pblade_hitsize;
        this.pblade_thick = pblade_thick;
        this.pblade_holdwidth = pblade_holdwidth;
        this.pblade_holdsize = pblade_holdsize;
        this.pblade_madein = pblade_madein;
        this.probber_property = probber_property;
        this.probber_speed = probber_speed;
        this.probber_spin = probber_spin;
        this.probber_control = probber_control;
        this.probber_hard = probber_hard;
        this.probber_madein = probber_madein;
        this.pothers_madein = pothers_madein;
        this.pbrand = pbrand;
    };
    SearchResultComponent.prototype.removeLastSlide = function () {
        this.slides.pop();
    };
    SearchResultComponent.prototype.countNum = function () {
        var total = 0;
        for (var _i = 0, _a = this.products; _i < _a.length; _i++) {
            var item = _a[_i];
            total += 1;
        }
        return total;
    };
    SearchResultComponent.prototype.gotoResult = function (value, value2) {
        this.searchvalue.add(value, value2);
        this.router.navigate(['SearchResult2']);
    };
    SearchResultComponent = __decorate([
        core_1.Component({
            selector: 'search-result',
            template: "\n    <div class=\"detail2\">\n\t\t\t\t<!-- <img src=\"http://suwenyu.github.io/NCCUCY/img/12810398_967697163321645_1895850552_o.jpg\" alt=\"\"> -->\n\t\t\t\t<div class=\"info_content\">\n\t\t\t\t\t<div class=\"info\">\n\t\t\t\t\t\t<div class=\"searchbar\"><br>\n\t\t\t\t\t\t\t<div class=\"search\">\n\t\t\t\t\t\t\t<div class=\"search1\">\n\t\t\t\t\t\t\t   <span>\n\t\t\t\t\t\t\t   \u54C1\u724C\u5206\u985E\n\t\t\t\t\t\t\t \n\t\t\t\t\t\t\t   <select #brand>\n\t\t\t\t\t\t\t   <option value=\"\">\u6240\u6709\u54C1\u724C</option>\n\t\t\t\t\t\t\t   \n\t\t\t\t\t\t\t                 <option value=\"Butterfly\">BUTTERFLY</option>\n                               <option value=\"Nittaku\">Nittaku</option>\n                               <option value=\"Stiga\">STIGA</option>\n                               <option value=\"Donic\">DONIC</option>\n                               <option value=\"Yasaka\">Yasaka</option>\n                               <option value=\"Andro\">Andro</option>\n                               <option value=\"Tibhar\">TIBHAR</option>\n                               <option value=\"Xion\">XIOM</option>\n                             \n                              <option value=\"\u7D05\u96D9\u559CDHS\">\u7D05\u96D9\u559CDHS</option>\n                               <option value=\"Tsp\">TSP</option>\n                               <option value=\"Victas\">VICTAS</option>\n                               <option value=\"Joola\">JOOLA</option>\n                              <option value=\"Dr.Neubauer\u7D10\u9B91\u723E\">Dr.Neubauer</option>\n                               <option value=\"Adidas\">adidas</option>\n                              <option value=\"\u9280\u6CB3\">\u9280\u6CB3</option>\n                               <option value=\"Kokutaku\">Kokutaku</option>              \n                               <option value=\"Mizuno\">Mizuno</option>\n                               <option value=\"Palio\">Palio</option>\n                               <option value=\"Kison\">Kison</option>\n                              <option value=\"\u96D9\u9B5A\">\u96D9\u9B5A</option>\n                               <option value=\"Crack\">Crack</option>\n                              <option value=\"\u53F0\u7063\u795E\u6728\">\u53F0\u7063\u795E\u6728</option> \n\t\t\t\t\t\t\t   </select>\n\t\t\t\t\t\t\t   </span>\n                               <span>                      \n\t\t\t\t\t\t\t   \u5546\u54C1\u5206\u985E\n\t\t\t\t\t\t\t   <select #category>\n\t\t\t\t\t\t\t    <option value=\"\">\u6240\u6709\u5546\u54C1</option>\n\t\t\t\t\t\t\t    <option value=\"robbers\">\u81A0\u76AE</option>\n                                <option value=\"blades\">\u5200\u677F</option>\n                                <option value=\"penhold\">\u76F4\u677F</option>\n                                <option value=\"lowblades\">\u6210\u54C1\u62CD</option>\n                                <option value=\"glue\">\u81A0\u6C34&\u589E\u80FD\u5291</option>\n                                <option value=\"balls\">\u7403&\u7F6E\u7403\u76D2</option>\n                                <option value=\"clothes\">\u670D\u98FE</option>\n                                <option value=\"shoes\">\u978B&\u896A</option>\n                                <option value=\"accessory\">\u914D\u4EF6&\u4FDD\u990A\u6E05\u6F54\u54C1</option>\n                                <option value=\"bags\">\u62CD\u5957&\u88DD\u5099\u888B(\u5305)</option>\n                                <option value=\"tables\">\u7403\u684C&\u5468\u908A\uFF0C\u767C\u7403\u6A5F</option>\n                                <option value=\"others\">\u5176\u4ED6\u5546\u54C1</option>\n\t\t\t\t\t\t\t   </select></span>  \n\t\t\t\t\t\t\t   <button (click)=\"gotoResult(brand.value,category.value)\">\u5546\u54C1\u641C\u5C0B</button>\n\t\t\t\t\t\t\t</div> \n                      \n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class=\"backinfo2\"></div>\n\t\t\t\t\t\n\t\t\t\t</div>\n\t\t\t\t\n\t\t\t\t<div class=\"\"banner>\n\t\t\t\t\n\t\t\t\t<div class=\"row\">\n                      <div class=\"col-md-12\">\n                        <carousel [interval]=\"NextPhotoInterval\" [noWrap]>\n                          <slide *ngFor=\"let slidez of slides; let index=index\"\n                                 [active]=\"slidez.active\">\n                            <img [src]=\"slidez.image\" style=\"margin:auto;\">\n\n                            \n                          </slide>\n                        </carousel>\n                      </div>\n                    \n                    </div>\n\t\t\t\t\n                </div>\n\t\t\t\t\n\n\t\t\t</div>\n\t\t\t<div class=\"container\">\n\t\t\t<div class=\"search-title\">\n\t\t\t<h2>\u641C\u5C0B\u7D50\u679C <span class=\"pricecol\"></span> </h2>\n\t\t\t\n\t\t\t</div>\n\t\t\t\n\t\t\t\n\t\t\t<div class=\"productSlider2\" >\n\t\t\t\t\t<div class=\"result\" *ngFor=\"let p of products\">   \n\t\t\t\t\t<button type=\"button\" data-toggle=\"modal\" data-target=\"#myModal\" (click)=\"onSelect(p.name,p.price,p.id,p.imgsrc,p.description,p.category,p.blade_structure,p.blade_special,p.blade_vibrate,p.blade_hitsize,p.blade_thick,p.blade_holdwidth,p.blade_holdsize,p.blade_madein,p.robber_property,p.robber_speed,p.robber_spin,p.robber_control,p.robber_hard,p.robber_madein,p.other_madein,p.brand)\"><img src=\"{{p.imgsrc}}\" alt=\"\"></button>\n\t\t\t\t\t<div id=\"name\" align=\"center\">{{p.name}}</div>\n                    <div class=\"commodity_detail\" id=\"plogo\">\n                        <img src=\"../../img/logo/{{p.brand}}.jpg\" alt=\"\">\n                    </div>\n\t\t\t\t\t<div class=\"searchprice\" id=\"price\" align=\"center\"><span class=\"pricecol\">\uFF04{{p.price}}</span></div>\n\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t\t\n            \n\t\t\t\t\t<!-- Modal -->\n                    \n                    <div id=\"myModal\" class=\"modal fade\" role=\"dialog\" >\n                      <div class=\"modal-dialog\">\n                    <!-- Modal content-->\n                       <h2>{{pname}}</h2>\n                      <div class=\"modal-content\">\n                     <div class=\"cool\">\n                     <button class=\"productClose\" type=\"button\" data-dismiss=\"modal\"><i class=\"fa fa-times\"></i></button>\n                     <div class=\"modal-left\">\n                     <img src=\"{{pimg}}\" alt=\"\" >\n                     </div>\n                     <div class=\"modal-right\">\n                     <div class=\"icon\" *ngIf=\"pcategory=='blades' || pcategory=='penhold'\"> \n                     <div class=\"icon1\" align=\"center\"><img src=\"../../img/icon/06.png\"><p>\u5E95\u677F\u7D50\u69CB</p><span class=\"pricecol\"><p>{{pblade_structure}}</p></span></div>\n                     <div class=\"icon1\" align=\"center\"><img src=\"../../img/icon/11.png\"><p>\u9707\u52D5\u7279\u6027</p><span class=\"pricecol\"><p>{{pblade_vibrate}}</p></span></div>\n                     \n                     &nbsp;<div class=\"icon1\" align=\"center\"><img src=\"../../img/icon/08.png\"><p>&nbsp;\u53CD\u767C\u7279\u6027</p><span class=\"pricecol\"><p>{{pblade_special}}</p></span></div>\n                    <div class=\"icon1\" align=\"center\"><img src=\"../../img/icon/09.png\"><p>\u62CD\u67C4\u5C3A\u5BF8</p><span class=\"pricecol\"><p>{{pblade_holdsize}}</p></span></div>\n                    <br>  <div class=\"icon1\" align=\"center\"><img src=\"../../img/icon/10.png\"><p>\u62CD\u67C4\u5E95\u5BEC</p><span class=\"pricecol\"><p>{{pblade_holdwidth}}</p></span></div>\n                     \n                     <div class=\"icon1\" align=\"center\"><img src=\"../../img/icon/12.png\"><p>\u677F\u9762\u5C3A\u5BF8</p><span class=\"pricecol\"><p>{{pblade_hitsize}}</p></span></div>\n                     <div class=\"icon1\" align=\"center\"><img src=\"../../img/icon/13.png\"><p>\u677F\u9762\u539A\u5EA6</p><span class=\"pricecol\"><p>{{pblade_thick}}</p></span></div>\n                     <div class=\"icon1\" align=\"center\"><img src=\"../../img/icon/05.png\"><p>\u51FA\u7522\u5730</p><span class=\"pricecol\"><p>{{pblade_madein}}</p></span></div>\n                \n                     </div> \n                     \n                     <div class=\"icon\" *ngIf=\"pcategory=='robbers'\">   \n                     \n                    <div class=\"icon2\" align=\"center\"><img src=\"../../img/icon/01.png\"><p>\u6027\u8CEA</p><span class=\"pricecol\"><p>{{probber_property}}</p></span></div>\n                    <div class=\"icon2\" align=\"center\"><img src=\"../../img/icon/07.png\"><p>\u901F\u5EA6</p><span class=\"pricecol\"><p>{{probber_speed}}</p></span></div>\n                    <div class=\"icon2\" align=\"center\"><img src=\"../../img/icon/02.png\"><p>\u65CB\u8F49</p><span class=\"pricecol\"><p>{{probber_spin}}</p></span></div>\n                     \n                    <br> <div class=\"icon2\" align=\"center\"><img src=\"../../img/icon/03.png\"><p>\u63A7\u5236</p><span class=\"pricecol\"><p>{{probber_control}}</p></span></div>\n                     <div class=\"icon2\" align=\"center\"><img src=\"../../img/icon/04.png\"><p>\u786C\u5EA6</p><span class=\"pricecol\"><p>{{probber_hard}}</p></span></div>\n                     <div class=\"icon2\" align=\"center\"><img src=\"../../img/icon/05.png\"><p>\u51FA\u7522\u5730</p><span class=\"pricecol\"><p>{{probber_madein}}</p></span></div>\n                     \n                     </div>\n\n                     <div class=\"icon\" *ngIf=\" pcategory=='lowblades' || pcategory=='glue' || pcategory=='balls' || pcategory=='clothes' || pcategory=='shoes' || pcategory=='accessory' || pcategory=='bags' || pcategory=='tables'  || pcategory=='others' \">   \n                     <div class=\"icon2\" align=\"center\"><img src=\"../../img/icon/05.png\"><p>\u51FA\u7522\u5730</p><span class=\"pricecol\"><p>{{pothers_madein}}</p></span></div>\n                     </div>\n\n                     <div class=\"description\">\n                     <p>{{pdescription}}</p>\n                     </div>                     \n                     <div class=\"left-btn\">\n                     <button>{{pprice}}</button>\n                     </div>\n                     <div class=\"right-btn\">    \n                    \n                     <add [pprice]=\"pprice\" [pid]=\"pid\" [pamount]=\"pamount\" [pname]=\"pname\"></add>\n                     </div>\n                     \n                     </div>\n                     \n                     </div>\n    \n                    </div>\n    \n                </div>\n            </div>\n\t\t\t\t\n\t\t\t\t\n\n\t\t\t\n\t\t\t\n\t\t\t\n\t\t\t\n\n    ",
            inputs: ['pprice', 'pid', 'pimg', 'pdescription', 'pcategory', 'pname', 'pblade_structure', 'pblade_special', 'pblade_vibrate', 'pblade_hitsize', 'pblade_thick', 'pblade_holdwidth', 'pblade_holdsize', 'pblade_madein', 'probber_property', 'probber_speed', 'probber_spin', 'probber_control', 'probber_hard', 'probber_madein', 'pothers_madein']
        })
    ], SearchResultComponent);
    return SearchResultComponent;
}());
exports.SearchResultComponent = SearchResultComponent;
//# sourceMappingURL=searchresult.component.js.map