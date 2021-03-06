/**
 * Created by MSI on 20-Jun-16.
 */
import {Component} from '@angular/core';
import {HTTP_PROVIDERS} from '@angular/http';// import http ? main d? nh?ng th?ng component c� th? d�ng
import {RouteConfig, ROUTER_DIRECTIVES, ROUTER_PROVIDERS} from '@angular/router-deprecated';
import {UserInputComponent} from './userInput/userInput.component';
import {HeroFormComponent} from './Forms/hero-form.component';
import {NewsComponent} from './news/news.component';
import {NewsService} from './news/news.service';
import {AttributeDirectiveComponent} from './AttributeDirectives/attribute-directive.component';
import {PipeComponent} from './pipe/pipe.component';
import {IoComponent} from './IO/io.component';

@Component({
    selector: 'my-basics',
    template: `
        <h1>{{title}}</h1>
        <nav>
            <a [routerLink]="['UserInput']">User Input</a>
            <a [routerLink]="['Form']">Form</a>
            <a [routerLink]="['News']">News</a>
            <a [routerLink]="['AD']">Attribute Directive</a>
            <a [routerLink]="['Pipe']">Pipe</a>
            <a [routerLink]="['Io']">IO Demo</a>
        </nav>
        <router-outlet></router-outlet>
    `,
    directives: [ROUTER_DIRECTIVES],
    providers: [ROUTER_PROVIDERS, NewsService, HTTP_PROVIDERS]
})

@RouteConfig([
    {
        path: '/userInput',
        name: 'UserInput',
        component: UserInputComponent
    },
    {
        path: '/form',
        name: 'Form',
        component: HeroFormComponent
    },
    {
        path: '/news',
        name: 'News',
        component: NewsComponent
    }
    {
        path: '/attribute-directive',
        name: 'AD',
        component: AttributeDirectiveComponent
    },
    {
        path: '/pipe',
        name: 'Pipe',
        component: PipeComponent
    },
    {
        path: '/io',
        name: 'Io',
        component: IoComponent
    },
])

export class AppComponent {
    public title = "Basic Angular 2";
}