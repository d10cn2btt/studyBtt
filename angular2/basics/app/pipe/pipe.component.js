"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
/**
 * Created by Truong on 23-Jun-16.
 */
var core_1 = require('@angular/core');
var custom_pipe_component_1 = require('./custom.pipe.component');
var PipeComponent = (function () {
    function PipeComponent() {
        this.birthday = new Date(1988, 3, 15); // April 15, 1988
        this.toggle = true; // start with true == shortDate
    }
    Object.defineProperty(PipeComponent.prototype, "format", {
        // linhlt: hàm get format này là ntn, tại sao lại chạy 2 lần khi ấn button
        get: function () {
            return this.toggle ? 'shortDate' : 'fullDate';
        },
        enumerable: true,
        configurable: true
    });
    PipeComponent.prototype.toggleFormat = function () {
        this.toggle = !this.toggle;
    };
    PipeComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'my-pipe',
            templateUrl: 'pipe.component.html',
            pipes: [custom_pipe_component_1.CustomPipe]
        }), 
        __metadata('design:paramtypes', [])
    ], PipeComponent);
    return PipeComponent;
}());
exports.PipeComponent = PipeComponent;
//# sourceMappingURL=pipe.component.js.map