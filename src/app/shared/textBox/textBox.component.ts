import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
    selector: 'textBox',
    templateUrl: './textBox.component.html'
})

export class TextboxComponent implements OnInit {

    @Input() questionDatas
    @Output("formChange") change: EventEmitter<any> = new EventEmitter();
    textboxValue=''
    constructor() { }

    ngOnInit() {
     }

    onChange(event){
        this.textboxValue=event.target.value
        this.change.emit(this.textboxValue);
    }
}