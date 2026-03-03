export class View {
    constructor() {
        this.themeBtnNode = document.querySelector('#theme-btn');
        this.columnNode = document.querySelectorAll('.column');
        this.columnContentNode = document.querySelectorAll('.column-title');
        this.inputTaskNode = document.querySelector('#input-task');
        this.containerNode = document.querySelector('#container');

        this.themeBtnNode.addEventListener('click', this.setDarkTheme);
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
}