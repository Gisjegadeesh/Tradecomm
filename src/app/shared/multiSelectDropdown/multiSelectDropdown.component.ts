import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
    selector: 'multiSelectDropdown',
    templateUrl: './multiSelectDropdown.component.html'
})

export class MultiSelectDropdown implements OnInit {
    @Input() questionDatas
    @Output("formChange") change: EventEmitter<any> = new EventEmitter();

    optionDatas=[]
    dropdownSettings:any={}
    selectedItems=[]
    constructor() { }

    ngOnInit() {
        this.questionDatas.options.map((item)=>{
            let obj={
                'id': item.alias,
                'itemName': item.label
            }
            this.optionDatas.push(obj)
        })

        this.dropdownSettings = {
            singleSelection: this.questionDatas.allowMultiple ? false : true,
            defaultOpen: false,
            idField: "item_id",
            textField: "item_text",
            allowSearchFilter: true,
            showCheckbox:this.questionDatas.allowMultiple ? true : false
          };
        // this.dropdownSettings['singleSelection'] = this.questionDatas.allowMultiple ? true : false;
        // this.dropdownSettings['showCheckbox']=this.questionDatas.allowMultiple ? true : false;
        this.dropdownSettings['text']=this.questionDatas.label
     }
     onChange(event){
         let obj={
             selectedItems:this.selectedItems,
             questionDatas:this.questionDatas,
             number:this.questionDatas['number']
         }
        this.change.emit(obj);
    }
}