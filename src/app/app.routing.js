"use strict";
var router_1 = require("@angular/router");
var classroom_component_1 = require("./Classroom/classroom.component");
var flow_component_1 = require("./Flow/flow.component");
var about_component_1 = require("./Home/about.component");
var home_component_1 = require("./Home/home.component");
var notification_component_1 = require("./notification.component");
var member_component_1 = require("./Member/member.component");
var new_component_1 = require("./news/new.component");
var member_login_component_1 = require("./Member/member-login.component");
var searchresult_component_1 = require("./Home/searchresult.component");
var searchresult2_component_1 = require("./Home/searchresult2.component");
var new_detail_component_1 = require("./news/new-detail.component");
var member_admin_component_1 = require("./Member/member-admin.component");
var order_admin_component_1 = require("./order-admin.component");
var upload_component_1 = require("./upload.component");
var new_upload_component_1 = require("./news/new-upload.component");
var APP_ROUTES = [
    { path: '', component: home_component_1.HomeComponent },
    { path: 'flow', component: flow_component_1.FlowComponent },
    { path: 'about', component: about_component_1.AboutComponent },
    { path: 'member', component: member_component_1.MemberComponent },
    { path: 'new', component: new_component_1.NewComponent },
    { path: 'newdetail', component: new_detail_component_1.newdetailComponent },
    { path: 'MemberLogin', component: member_login_component_1.MemberLoginComponent },
    { path: 'classroom', component: classroom_component_1.ClassroomComponent },
    { path: 'notification', component: notification_component_1.NotificationComponent },
    { path: 'SearchResult', component: searchresult_component_1.SearchResultComponent },
    { path: 'SearchResult2', component: searchresult2_component_1.SearchResultComponent2 },
    { path: 'memberAdmin', component: member_admin_component_1.MemberAdminComponent },
    { path: 'orderAdmin', component: order_admin_component_1.OrderAdminComponent },
    { path: 'upload', component: upload_component_1.UploadComponent },
    { path: 'newUpload', component: new_upload_component_1.NewUploadComponent }
];
exports.routing = router_1.RouterModule.forRoot(APP_ROUTES, { useHash: true });
//# sourceMappingURL=app.routing.js.map