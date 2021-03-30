import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MatTableDataSource } from '@angular/material/table';
import { IDropdownSettings } from 'ng-multiselect-dropdown';
import { FormArray, FormBuilder, FormControl, FormGroup } from '@angular/forms';

const ELEMENT_DATA: any[] = [
  {
    Name: '',
    Position: '',
    Address: '',
    TelephoneNo: '',
    Email: ''
  },
  {
    Name: '',
    Position: '',
    Address: '',
    TelephoneNo: '',
    Email: ''
  },
];

interface ICity{
  item_id: number;
  item_text: string;
}
@Component({
  selector: 'app-sme-onboarding',
  templateUrl: './sme-onboarding.component.html',
  styleUrls: ['./sme-onboarding.component.scss']
})
export class SmeOnboardingComponent implements OnInit {

  dataSource = new MatTableDataSource(ELEMENT_DATA);
  displayedColumns: string[] = ['Name', 'Position', 'Address', 'TelephoneNo', 'Email'];

  sName: string;
  taxId: string;
  
  state: string;
  country: string;
  invalidLogin = false
  getFormInput
  questions=[]
  questionnaireSections=[]

  smeForm1:FormGroup
  // smeForm2:FormGroup
  // smeForm3:FormGroup
  // smeForm4:FormGroup
  // smeForm5:FormGroup
  // smeForm6:FormGroup
  // smeForm7:FormGroup
  // smeForm8:FormGroup

  smeForm:FormGroup

  constructor(private router: Router,
    private fb:FormBuilder) { }

  
  name = "Angular";
  cities: Array<ICity> = [];
  selectedItems: Array<ICity> = [];
  dropdownSettings: IDropdownSettings = {};

  ngOnInit() {
    this.questionnaireSections=[
      {
        "alias": "getting-to-know-you",
        "label": "Getting to know you as a business",
        "sectionResponseState": "NotStarted",
        "questions":[
          {
            "characterMin": null,
            "characterMax": 30,
            "validation": [],
            "response": null,
            "number": "1",
            "alias": "name",
            "label": "Name",
            "description": "Name of the person accountable for the information provided",
            "conditions": [],
            "required": true,
            "type": "QuestionTextDto"
          },
          {
            "characterMin": null,
            "characterMax": 30,
            "validation": [],
            "response": null,
            "number": "1",
            "alias": "sample-radio",
            "label": "Sample Condition?",
            "description": "Name of the person accountable for the information provided",
            "conditions": [],
            "required": true,
            "type": "QuestionBoolDto"
          },
          {
            characterMin: null,
            characterMax: 30,
            validation: [],
            response: null,
            number: 2,
            alias: "job-title",
            label: "Job title",
            description: "Job title of the person accountable for the information provided",
            conditions: [],
            required: true,
            type: "QuestionTextDto"
          },
          {
            characterMin: null,
            characterMax: 30,
            validation: [],
            response: null,
            number: 3,
            alias: "company-registration-number",
            label: "Company registration number",
            description: "Local company registration number",
            conditions: [],
            required: true,
            type: "QuestionNumberDto"
          },
          {
            characterMin: null,
            characterMax: 30,
            validation: [],
            response: null,
            number: 3,
            alias: "company-registration-number",
            label: "KYC",
            description: "Local company registration number",
            conditions: [],
            required: true,
            type: "QuestionFileListDto"
          },
          {
            characterMin: null,
            characterMax: 50,
            validation: [],
            response: null,
            number: 4,
            alias: "company-name",
            label: "Company",
            description: "Company legal name",
            conditions: [],
            required: true,
            type: "QuestionTextDto"
          },
          {
            "options": [
              {
                "alias": "AF",
                "label": "Afghanistan"
              },
              {
                "alias": "GB",
                "label": "United Kingdom"
              }
            ],
            "allowMultiple": true,
            "allowOther": false,
            "response": null,
            "number": "10",
            "alias": "country",
            "label": "Country",
            "description": null,
            "conditions": [],
            "required": true,
            "type": "QuestionMultipleChoiceDto"
          },
          {
            "dateMin": null,
            "dateMax": null,
            "response": null,
            "number": 5,
            "alias": "date-founded",
            "label": "Date founded",
            "description": null,
            "conditions": [],
            "required": true,
            "type": "QuestionDateDto"
           },
           {
              options: [
              {
              alias: "SGD",
              label: "Singapore Dollar"
              }
              ],
              "allowMultiple": false,
              "allowOther": false,
              response: null,
              number: 11,
              alias: "trading-currency",
              label: "Trading currency",
              description: null,
              conditions: [],
              required: true,
              type: "QuestionMultipleChoiceDto"
              
           },
           {
            options: [
            {
            alias: "agriculture-forestry-and-fishing",
            label: "Agriculture, Forestry and Fishing"
            },
            {
            alias: "mining-quarrying--drilling-incl-oil-and-gas",
            label: "Mining, quarrying &amp; drilling (incl oil and gas)"
            },
            {
            alias: "manufacturing-aerospacedefenceadvanced",
            label: "Manufacturing: Aerospace/Defence/Advanced"
            },
            {
            alias: "manufacturing-automotiverailmarine",
            label: "Manufacturing: Automotive/Rail/Marine"
            },
            {
            alias: "manufacturing-life-scienceschemicalspharmaceuticals",
            label: "Manufacturing: Life Sciences/Chemicals/Pharmaceuticals"
            },
            {
            alias: "manufacturing-food-beverages-processing",
            label: "Manufacturing: Food, Beverages Processing"
            },
            {
            alias: "manufacturing-other",
            label: "Manufacturing: Other"
            },
            {
            alias: "electrical-gas-and-steam-supply-and-equipment-incl-air-conditioning",
            label: "Electrical, gas and steam supply and equipment (incl air-conditioning)"
            },
            {
            alias: "water-supply-sewerage-waste-management",
            label: "Water supply, sewerage, waste management"
            },
            {
            alias: "construction",
            label: "Construction"
            },
            {
            alias: "wholesale-retail-including-automotive-and-motor-bike-repairs",
            label: "Wholesale, Retail (including automotive and motor bike repairs)"
            },
            {
            alias: "transport-logistics-and-storage",
            label: "Transport, logistics and storage"
            },
            {
            alias: "food-beverages",
            label: "Food, beverages"
            },
            {
            alias: "information-and-communications-technology-incl-digital",
            label: "Information and Communications Technology (incl digital)"
            },
            {
            alias: "finance-and-insurance-services",
            label: "Finance and insurance services"
            },
            {
            alias: "real-estate",
            label: "Real estate"
            },
            {
            alias: "professional-scientific-and-technical-services--consultancy",
            label: "Professional, scientific and technical services &amp; consultancy"
            },
            {
            alias: "administration-and-support",
            label: "Administration and support"
            },
            {
            alias: "public-administration-and-defence",
            label: "Public administration and defence"
            },
            {
            alias: "education",
            label: "Education"
            },
            {
            alias: "health-and-social-care",
            label: "Health and social care"
            },
            {
            alias: "arts-and-creativity",
            label: "Arts and creativity"
            },
            {
            alias: "travel-tourism-catering-hotels-and-leisure",
            label: "Travel, tourism, catering hotels and leisure"
            },
            {
            alias: "dont-know",
            label: "Dont Know"
            }
            ],
            "allowMultiple": true,
            "allowOther": false,
            response: null,
            number: 23,
            alias: "sector",
            label: "What sector are you in?",
            description: null,
            conditions: [],
            required: true,
            type: "QuestionMultipleChoiceDto"
            }
        ]
      },
      {
        "alias": "help-plan-your-business",
        "label": "To help you plan your business",
        "sectionResponseState": "NotStarted",
        "questions":[
          {
            "characterMin": null,
            "characterMax": 30,
            "validation": [],
            "response": null,
            "number": "1",
            "alias": "name",
            "label": "Name",
            "description": "Name of the person accountable for the information provided",
            "conditions": [],
            "required": true,
            "type": "QuestionTextDto"
          },{
            options: [
            {
            alias: "SGD",
            label: "Singapore Dollar"
            }
            ],
            "allowMultiple": false,
            "allowOther": false,
            response: null,
            number: 11,
            alias: "trading-currency",
            label: "Trading currency",
            description: null,
            conditions: [],
            required: true,
            type: "QuestionMultipleChoiceDto"
            
         },
        ]
      },
      {
        "alias": "help-you-plan-your-finances",
        "label": "To help you plan your finances",
        "sectionResponseState": "NotStarted",
        "questions":[
          {
            "characterMin": null,
            "characterMax": 30,
            "validation": [],
            "response": null,
            "number": "1",
            "alias": "name",
            "label": "Name",
            "description": "Name of the person accountable for the information provided",
            "conditions": [],
            "required": true,
            "type": "QuestionTextDto"
          },{
            options: [
            {
            alias: "SGD",
            label: "Singapore Dollar"
            }
            ],
            "allowMultiple": false,
            "allowOther": false,
            response: null,
            number: 11,
            alias: "trading-currency",
            label: "Trading currency",
            description: null,
            conditions: [],
            required: true,
            type: "QuestionMultipleChoiceDto"
            
         },
        ]
      },
      {
        "alias": "help-you-manage-your-risks",
        "label": "To help you manage your risks",
        "sectionResponseState": "NotStarted",
        "questions":[
          {
            "characterMin": null,
            "characterMax": 30,
            "validation": [],
            "response": null,
            "number": "1",
            "alias": "name",
            "label": "Name",
            "description": "Name of the person accountable for the information provided",
            "conditions": [],
            "required": true,
            "type": "QuestionTextDto"
          },{
            options: [
            {
            alias: "SGD",
            label: "Singapore Dollar"
            }
            ],
            "allowMultiple": false,
            "allowOther": false,
            response: null,
            number: 11,
            alias: "trading-currency",
            label: "Trading currency",
            description: null,
            conditions: [],
            required: true,
            type: "QuestionMultipleChoiceDto"
            
         },
        ]
      },
      {
        "alias": "understand-your-esg-score",
        "label": "Understand your ESG score",
        "sectionResponseState": "NotStarted",
        "questions":[
          {
            "characterMin": null,
            "characterMax": 30,
            "validation": [],
            "response": null,
            "number": "1",
            "alias": "name",
            "label": "Name",
            "description": "Name of the person accountable for the information provided",
            "conditions": [],
            "required": true,
            "type": "QuestionTextDto"
          },{
            options: [
            {
            alias: "SGD",
            label: "Singapore Dollar"
            }
            ],
            "allowMultiple": false,
            "allowOther": false,
            response: null,
            number: 11,
            alias: "trading-currency",
            label: "Trading currency",
            description: null,
            conditions: [],
            required: true,
            type: "QuestionMultipleChoiceDto"
            
         },
        ]
      },
      {
        "alias": "help-you-get-through-onboarding",
        "label": "To help you get through onboarding easily",
        "sectionResponseState": "NotStarted",
        "questions":[
          {
            "characterMin": null,
            "characterMax": 30,
            "validation": [],
            "response": null,
            "number": "1",
            "alias": "name",
            "label": "Name",
            "description": "Name of the person accountable for the information provided",
            "conditions": [],
            "required": true,
            "type": "QuestionTextDto"
          },{
            options: [
            {
            alias: "SGD",
            label: "Singapore Dollar"
            }
            ],
            "allowMultiple": false,
            "allowOther": false,
            response: null,
            number: 11,
            alias: "trading-currency",
            label: "Trading currency",
            description: null,
            conditions: [],
            required: true,
            type: "QuestionMultipleChoiceDto"
            
         },
        ]
      },
      {
        "alias": "help-you-understand-language-of-trade",
        "label": "To help you understand the language and practice of trade",
        "sectionResponseState": "NotStarted",
        "questions":[
          {
            "characterMin": null,
            "characterMax": 30,
            "validation": [],
            "response": null,
            "number": "1",
            "alias": "name",
            "label": "Name",
            "description": "Name of the person accountable for the information provided",
            "conditions": [],
            "required": true,
            "type": "QuestionTextDto"
          },{
            options: [
            {
            alias: "SGD",
            label: "Singapore Dollar"
            }
            ],
            "allowMultiple": false,
            "allowOther": false,
            response: null,
            number: 11,
            alias: "trading-currency",
            label: "Trading currency",
            description: null,
            conditions: [],
            required: true,
            type: "QuestionMultipleChoiceDto"
            
         },
        ]
      },
      {
        "alias": "test-questionnaire",
        "label": "Test questionnaire",
        "sectionResponseState": "NotStarted",
        "questions":[
          {
            "characterMin": null,
            "characterMax": 30,
            "validation": [],
            "response": null,
            "number": "1",
            "alias": "name",
            "label": "Name",
            "description": "Name of the person accountable for the information provided",
            "conditions": [],
            "required": true,
            "type": "QuestionTextDto"
          },{
            options: [
            {
            alias: "SGD",
            label: "Singapore Dollar"
            }
            ],
            "allowMultiple": false,
            "allowOther": false,
            response: null,
            number: 11,
            alias: "trading-currency",
            label: "Trading currency",
            description: null,
            conditions: [],
            required: true,
            type: "QuestionMultipleChoiceDto"
            
         },
        ]
      }
    ]
    this.questions=[
      {
        "characterMin": null,
        "characterMax": 30,
        "validation": [],
        "response": null,
        "number": "1",
        "alias": "name",
        "label": "Name",
        "description": "Name of the person accountable for the information provided",
        "conditions": [],
        "required": true,
        "type": "QuestionTextDto"
      },
      {
        "options": [
          {
            "alias": "AF",
            "label": "Afghanistan"
          },
          {
            "alias": "GB",
            "label": "United Kingdom"
          }
        ],
        "allowMultiple": false,
        "allowOther": false,
        "response": null,
        "number": "10",
        "alias": "country",
        "label": "Country",
        "description": null,
        "conditions": [],
        "required": true,
        "type": "QuestionMultipleChoiceDto"
      }
    ]
    this.smeForm1=this.fb.group({'smeForm1':this.fb.array([this.buildFormData()])})
    // this.smeForm2=this.fb.group({'smeForm2':this.fb.array([])})
    // this.smeForm3=this.fb.group({'smeForm3':this.fb.array([])})
    // this.smeForm4=this.fb.group({'smeForm4':this.fb.array([])})
    // this.smeForm5=this.fb.group({'smeForm5':this.fb.array([])})
    // this.smeForm6=this.fb.group({'smeForm6':this.fb.array([])})
    // this.smeForm7=this.fb.group({'smeForm7':this.fb.array([])})
    // this.smeForm8=this.fb.group({'smeForm8':this.fb.array([])})

    // this.smeForm=this.fb.group(this.groupForm())
      // smeFormDetails:this.fb.array([])
   
    // this.getFormInput=this.formService.render()
    this.cities = [
      { item_id: 1, item_text: "India" },
      { item_id: 2, item_text: "Australia" },
{ item_id: 3, item_text: "America" },
{ item_id: 4, item_text: "Singapore" }
      
    ];
    this.selectedItems = [
      { item_id: 4, item_text: "Pune" },
      { item_id: 6, item_text: "Navsari" }
    ];
    this.dropdownSettings = {
      singleSelection: false,
      defaultOpen: false,
      idField: "item_id",
      textField: "item_text",
      selectAllText: "Select All",
      unSelectAllText: "UnSelect All",
      itemsShowLimit: 3
    };
  }
  // groupForm(){
  //   let formSections=[];
  //   this.questionnaireSections.map((item,index)=>{
  //     let obj={}
  //     obj['smeSectionForm' + (index+1)] = this.fb.array([this.buildFormData()])
  //     formSections.push(obj)
  //   })
  //   return formSections;
  // }
  buildFormData(){
    let obj={}
    // this.questions.map((item,index)=>{
    //   obj[item.alias] = [""]
    // })
    return this.fb.group(obj)
  }
  // get formSections(){
  //   return this.smeForm.controls[0].value['smeSectionForm1'] as FormArray
  // }
  onItemSelect(item: any) {
    console.log('onItemSelect', item);
  }
  onItemDeSelect(item: any) {
    console.log('onItem DeSelect', item);
  }

  onSelectAll(items: any) {
    console.log('onSelectAll', items);
  }

  onDropDownClose() {
    console.log('dropdown closed');
  }

  onSubmit() {
    alert("Onboard Sucessfully")
    if (this.sName.valueOf() !== '' || this.taxId.valueOf() !== '') {
      if (this.state.valueOf() !== '' || this.state.valueOf() !== '') {
        this.router.navigate(['sme-dashboard']);
        this.invalidLogin = false;
      }
    } else {
      this.invalidLogin = true
    }
  }
  onTextBoxChange(data,secIndex,quesIndex){
    console.log(this.smeForm1.value.smeForm1)
    this.smeForm1.value.smeForm1[secIndex][""]=data
  }
  onDropdownChange(data,secIndex,quesIndex){

  }
  onRadioChange(data,secIndex,quesIndex){
  }
  onFileChange(data,secIndex,quesIndex){

  }
  onDateChange(data,secIndex,quesIndex){

  }
}
