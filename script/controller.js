import {View} from './view.js';
import {Model} from './model.js';

export class Controller {
    constructor() {
        this.view = new View({
            getUserTask: this.getFromUserTask
        });
        this.model = new Model({
            renderUserTasks: this.getRenderFromUserTasks
        });
    }

    getFromUserTask = (task) => {
        this.model.setTasks(task);
    }

    getRenderFromUserTasks = (tasks) => {
        this.view.renderUserTasks(tasks);
    }
}