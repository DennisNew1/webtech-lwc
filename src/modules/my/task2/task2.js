import { LightningElement } from 'lwc';

export default class task2 extends LightningElement {

    beers = [
        {
            name: "Pils",
            varieties: [
                "Flensburger",
                "Veltins",
                "Bitburger",
                "Störtebecker",
                "Becks",
                "Krombacher"
            ]
        },
        {
            name: "Kölsch",
            varieties: [
                "Zunft",
                "Reissdorf",
                "Sion",
                "Peters",
                "Gaffel",
            ]
        },
        {
            name: "Weizen",
            varieties: [
                "Paulaner",
                "Erdinger",
                "Weihenstephan",
                "Maisel",
                "Riedenburger",
                "Kapuziner"
            ]
        }
    ]

    onClickBack() {
        this.dispatchEvent(new CustomEvent('back'));
    }

}
