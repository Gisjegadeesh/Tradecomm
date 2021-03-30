import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
    selector: 'DateField',
    templateUrl: './dateField.component.html'
})

export class DateFieldComponent implements OnInit {
    @Input() questionDatas
    @Output("formChange") change: EventEmitter<any> = new EventEmitter();

    constructor() { }

    ngOnInit() { }

    onChange(event){
        this.change.emit(event.target.value);
    }
}