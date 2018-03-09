import {Routes, RouterModule} from "@angular/router";
import {ClassroomComponent} from "./Classroom/classroom.component";
import {FlowComponent} from "./Flow/flow.component";
import {AboutComponent} from "./Home/about.component";
import {HomeComponent} from "./Home/home.component";
import {NotificationComponent} from "./notification.component";
import {MemberComponent} from "./Member/member.component";
import {NewComponent} from "./news/new.component";
import {MemberLoginComponent} from "./Member/member-login.component";
import {SearchResultComponent} from "./Home/searchresult.component";
import {SearchResultComponent2} from "./Home/searchresult2.component";
import {newdetailComponent} from "./news/new-detail.component";
import {MemberAdminComponent} from "./Member/member-admin.component";
import {OrderAdminComponent} from "./order-admin.component";
import {UploadComponent} from "./upload.component";
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

const APP_ROUTES:Routes=[
  {path: '', component: HomeComponent},
  {path: 'flow', component: FlowComponent},
  {path: 'about', component: AboutComponent},
  {path: 'member', component: MemberComponent},
  {path: 'new', component: NewComponent},
  {path: 'newdetail', component: newdetailComponent},
  {path: 'MemberLogin', component: MemberLoginComponent},
  {path: 'classroom', component: ClassroomComponent},
  {path: 'notification', component: NotificationComponent},
  {path: 'SearchResult',component:SearchResultComponent},
  {path: 'SearchResult2',component:SearchResultComponent2},
  {path: 'memberAdmin',component:MemberAdminComponent},
  {path: 'orderAdmin',component:OrderAdminComponent},
  {path:'upload',component:UploadComponent},
  {path:'newUpload',component:NewUploadComponent},
  {path:'detail1',component:Detail1Component},
  {path:'detail2',component:Detail2Component},
  {path:'detail3',component:Detail3Component},
  {path:'detail4',component:Detail4Component},
  {path:'detail5',component:Detail5Component},
  {path:'detail6',component:Detail6Component},
  {path:'detail7',component:Detail7Component},
  {path:'detail8',component:Detail8Component},
  {path:'detail9',component:Detail9Component},
  {path:'detail10',component:Detail10Component},
  {path:'detail11',component:Detail11Component},
  {path:'detail12',component:Detail12Component},
  {path:'detail13',component:Detail13Component},
  {path:'detail14',component:Detail14Component},
  {path:'detail15',component:Detail15Component},
  {path:'detail16',component:Detail16Component},
  {path:'detail17',component:Detail17Component},
  {path:'detail18',component:Detail18Component},
  {path:'detail19',component:Detail19Component},
  {path:'detail20',component:Detail20Component},
  {path:'detail21',component:Detail21Component},

  {path:'new2',component:New2Component},
  {path:'new3',component:New3Component},
  {path:'new4',component:New4Component},
  {path:'new5',component:New5Component}



];

export const routing = RouterModule.forRoot(APP_ROUTES,{useHash: true});
