import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
    selector: 'textBox',
    templateUrl: './textBox.component.html'
})

export class TextboxComponent implements OnInit {

    @Input() questionDatas
    @Output("formChange") change: EventEmitter<any> = new EventEmitter();
    textboxValue=''
    sliderValue=0
    step = 1;
    tickInterval = 1;
    showTicks = false;
    autoTicks = true;

    constructor() { }

    ngOnInit() {
     }
     formatLabel(value: number) {
        // if (value >= 1000) {
        //   return Math.round(value / 1000) + 'k';
        // }
    
        return value;
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
    onSliderChange(event){
        this.sliderValue=event.value
        let obj={
            questionDatas: this.questionDatas,
            value:this.sliderValue,
            number:this.questionDatas.number
        }
        this.change.emit(obj);
    }
    getSliderTickInterval(): number | 'auto' {
        if (this.showTicks) {
          return this.autoTicks ? 'auto' : this.tickInterval;
        }
        return 0;
      }
}