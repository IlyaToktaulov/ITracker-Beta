export class View {
    constructor({getUserTask}) {
        this.themeBtnNode = document.querySelector('#theme-btn');
        this.columnNode = document.querySelectorAll('.column');
        this.columnContentNode = document.querySelectorAll('.column-title');
        this.inputTaskNode = document.querySelector('#input-task');
        this.containerNode = document.querySelector('#container');
        this.tastListNode = document.querySelector('#task-list');
        this.setBtnNode = document.querySelector('#set-btn');
        this.clearBtnNode = document.querySelector('#clear-btn');

        this.getUserTask = getUserTask;

        this.themeBtnNode.addEventListener('click', this.setDarkTheme);
        this.setBtnNode.addEventListener('click', this.setUserTask);
        this.clearBtnNode.addEventListener('click', this.resetInput);
    }

    setDarkTheme = () => {
        this.columnNode.forEach(column => {
            column.classList.toggle('column-dark');
        });

        this.columnContentNode.forEach(columnContent => {
            columnContent.classList.toggle('column-element-dark');
        });

        this.inputTaskNode.classList.toggle('input-Dark');
        this.themeBtnNode.classList.toggle('button-theme-dark');

        const isDark = this.containerNode.classList.contains('background-dark');
        this.containerNode.style.setProperty('background-image',
            isDark ? 'url(./img/white.jpeg)' : 'url(./img/dark.jpg)',
            'important'
        );
        this.containerNode.classList.toggle('background-dark');
    }

    setUserTask = () => {
        const newUserTask = this.inputTaskNode.value;
        this.getUserTask(newUserTask);
        this.resetInput();
    }

    resetInput = () => {
        this.inputTaskNode.value = '';
    }

    renderUserTasks(tasks) {
        this.tastListNode.innerHTML = '';

        tasks.forEach(task => {
            this.tastListNode.innerHTML += `
                <div>
                    <p>${task}</p>
                </div>
            `;
        });
    }

}