import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
    selector: 'radioButton',
    templateUrl: './radioButton.component.html' 
})

export class RadioButtonComponent implements OnInit {
    @Input() questionDatas
    @Input() sectionIndex
    @Input() questionIndex
    @Output("formChange") change: EventEmitter<any> = new EventEmitter();
    radioChecked=''
    dynWidth=''
    constructor() { }

    ngOnInit() {
        this.radioChecked=this.questionDatas.response ? "true" : ""
        this.dynWidth='400px'
     }

    radioChange(event){
        let obj={
            condition:event.value == 'true' ? true : false,
            secIndex:this.sectionIndex,
            quesIndex:this.questionIndex,
            questionDatas:this.questionDatas
        }
        this.change.emit(obj);
    }
}