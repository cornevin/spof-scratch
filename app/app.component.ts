import { Component } from '@angular/core';

import { Task } from './models/task';

const TASKS: Task[] = [

];

@Component({
    selector: 'my-app',
    templateUrl: './app/app.component.html',
    styleUrls: ['./app/app.component.css'],
})

export class AppComponent {

    tasks = TASKS;

    /*    task: Task = {
            name: "Work chineese ! "
        };

    */
    addTask(TaskName: string): void {
        console.log(TaskName);
        var task: Task = {
            name: TaskName
        };
        TASKS.push(task);
    }
}
