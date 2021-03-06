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
 * Created by Truong on 15-Jun-16.
 */
var core_1 = require('@angular/core');
var hero_service_1 = require('./hero.service');
var hero_detail_component_1 = require('./hero-detail.component');
var router_deprecated_1 = require("@angular/router-deprecated");
var HeroComponent = (function () {
    // khởi tạo luôn ở trong hàm constructor này, để không phải new nhiều lần heroService
    // Nhờ ở app.component đã nạp heroservice vào provider r, nên ở đây mới dùng được
    function HeroComponent(heroService, router) {
        this.heroService = heroService;
        this.router = router;
        this.addingHero = false;
    }
    HeroComponent.prototype.ngOnInit = function () {
        this.getHeroes();
    };
    HeroComponent.prototype.getHeroes = function () {
        var _this = this;
        // khi đã dùng promise ở component service thì không thể truyền trực tiếp như thế này
        // this.heroes = this.heroService.getHeroes();
        this.heroService.getHeroes().then(function (value) {
            _this.heroes = value;
        }, function (error) {
            console.log("bi reject r");
        });
    };
    HeroComponent.prototype.selectHero = function (hero) {
        this.selectedHero = hero;
    };
    HeroComponent.prototype.gotoDetail = function () {
        this.router.navigate(['HeroDetail', { id: this.selectedHero.id }]);
    };
    HeroComponent.prototype.addHero = function () {
        this.addingHero = true;
        this.selectedHero = null;
    };
    HeroComponent.prototype.close = function (savedHero) {
        console.log("close Hero component");
        this.addingHero = false;
        if (savedHero) {
            this.getHeroes();
        }
    };
    HeroComponent.prototype.delete = function (hero, event) {
        var _this = this;
        event.stopPropagation();
        this.heroService
            .deleteHero(hero)
            .then(function (res) {
            _this.heroes = _this.heroes.filter(function (h) { return h !== hero; });
            if (_this.selectedHero === hero) {
                _this.selectedHero = null;
            }
        })
            .then(function (res) {
            _this.heroes = _this.heroes.filter(function (h) { return h !== hero; });
            if (_this.selectedHero === hero) {
                _this.selectedHero = null;
            }
        })
            .catch(function (error) { return _this.error = error; });
    };
    HeroComponent.prototype.testclick = function (event) {
        console.log("Event : ", event);
    };
    HeroComponent = __decorate([
        core_1.Component({
            //để dùng được hàm injector thì phải khai báo providers trong @Component
            // providers: [HeroService],
            selector: 'my-hero',
            templateUrl: 'app/hero.component.html',
            // phải khai báo directives để dùng, nếu không sẽ không hiện thẻ hero-detail
            directives: [hero_detail_component_1.HeroDetailComponent],
            styleUrls: ['app/hero.component.css']
        }), 
        __metadata('design:paramtypes', [hero_service_1.HeroService, router_deprecated_1.Router])
    ], HeroComponent);
    return HeroComponent;
}());
exports.HeroComponent = HeroComponent;
//# sourceMappingURL=hero.component.js.map