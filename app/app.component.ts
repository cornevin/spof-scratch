import { Component } from '@angular/core';

import { Task } from './models/task';


@Component({
    selector: 'my-app',
    templateUrl: './app/app.component.html',
    styleUrls: ['./app/app.component.css'],
})

export class AppComponent {
    task: Task = {
        name: "Work chineese ! "
    };

}
