import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
    selector: 'radioButton',
    templateUrl: './radioButton.component.html' 
})

export class RadioButtonComponent implements OnInit {
    @Input() questionDatas
    @Output("formChange") change: EventEmitter<any> = new EventEmitter();
    radioChecked=''
    constructor() { }

    ngOnInit() { }

    radioChange(event){
        this.change.emit(event.value);
    }
}