import * as tslib_1 from "tslib";
import { Injectable } from '@angular/core';
let MessageService = class MessageService {
    constructor(http) {
        this.http = http;
        var obj;
        this.getUsers().subscribe(data => console.log(data), error => console.log(error));
    }
    getUsers() {
        return this.http.get("https://jsonplaceholder.typicode.com/users");
    }
};
MessageService = tslib_1.__decorate([
    Injectable({
        providedIn: 'root'
    })
], MessageService);
export { MessageService };
//# sourceMappingURL=message.service.js.map