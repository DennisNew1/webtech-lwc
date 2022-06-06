import { LightningElement } from 'lwc';

export default class task1 extends LightningElement {

    sum1 = 0;
    sum2 = 0;
    solution = 0;
 
    connectedCallback() {
        this.sum1 = Math.floor(Math.random() * 20);
        this.sum2 = Math.floor(Math.random() * 20);
        console.log(this.sum1);
        console.log(this.sum2);
    }

    onChangeSum(e) {
        this.solution = Number(e.target.value);
    }

    onClickBack() {
        this.dispatchEvent(new CustomEvent('back'));
    }

}
