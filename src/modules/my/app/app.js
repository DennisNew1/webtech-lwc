import { LightningElement } from 'lwc';

export default class App extends LightningElement {

    showTask = 3;

    onClickTask(e) {
        this.showTask = Number (e.target.dataset.id);

    }

    onBack() {
        this.showTask = 3;
    }

    get showTask1() {
        return this.showTask === 0;
    }

    get showTask2() {
        return this.showTask === 1;
    }

    get showTask3() {
        return this.showTask === 2;
    }

    get showMain() {
        return this.showTask === 3;
    }

}
