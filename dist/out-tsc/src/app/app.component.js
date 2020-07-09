import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
let AppComponent = class AppComponent {
    //name = this.userData[0].userFirst[0].name[1];
    constructor(msgService, router) {
        this.msgService = msgService;
        this.router = router;
        this.title = 'angularTask';
        this.userData = [];
        this.userFirst = this.userData[0];
    }
    ngOnInit() {
        this.getUsersData();
    }
    getUsersData() {
        this.msgService.getUsers().subscribe(data => {
            this.userData = data;
            this.userFirst = JSON.stringify(this.userData[0]);
            console.log(this.userFirst);
        });
    }
    viewDetails() {
        this.router.navigate(['/viewuserdetails']);
    }
};
AppComponent = tslib_1.__decorate([
    Component({
        selector: 'app-root',
        templateUrl: './app.component.html',
        styleUrls: ['./app.component.css']
    })
], AppComponent);
export { AppComponent };
;
//# sourceMappingURL=app.component.js.map