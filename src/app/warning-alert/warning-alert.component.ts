import { Component } from '@angular/core';


@Component({
    selector: 'warning-alert',
    template: `
        <p> This is warning alert danger!!</p>
    `,
    styles:[`
        p {
            padding: 20px;
            background-color: mistyrose;
            border: 1px solid red;
        }
    `]
})
export class WarningAert {

}