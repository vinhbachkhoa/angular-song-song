import { Component } from '@angular/core';

@Component({
    selector: 'contact',
    templateUrl: './contact.component.html'
})
export class ContactComponent {

    private person: any =
    { name: "Vinh", mssv: "20145266" }

    constructor() { }
    submit() {
        alert(this.person.name + this.person.mssv);
    }
}