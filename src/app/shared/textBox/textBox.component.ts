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
        let obj={
            questionDatas: this.questionDatas,
            value:this.textboxValue,
            number:this.questionDatas.number
        }
        this.change.emit(obj);
    }
}