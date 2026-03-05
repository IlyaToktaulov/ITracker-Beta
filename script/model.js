export class Model {
    constructor({renderUserTasks}) {
        this.tasks = [];

        this.renderUserTasks = renderUserTasks;
    }

    setTasks(task) {
        this.tasks.push(task);

        this.renderUserTasks(this.tasks);
    }

    getTasks() {
        return this.tasks;
    }
}