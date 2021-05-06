import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  template: any[] = [
    {
      type: 'text',
      label: 'Input',
    },
  ];

  myFormGroup: FormGroup;
  allTemplate: any = this.template;

  constructor() {}

  ngOnInit() {
    this.formBuilder();
  }

  formBuilder() {
    let group: any = {};
    this.allTemplate.forEach((input_template: any) => {
      group[input_template.label] = new FormControl('');
    });
    this.myFormGroup = new FormGroup(group);
  }

  onSubmit() {
    console.log(this.myFormGroup.value);
  }

  addnewInput() {
    let newTemplate = [
      {
        type: 'text',
        label: 'Input' + (this.allTemplate.length + 1),
      },
    ];

    this.allTemplate = this.allTemplate.concat(newTemplate);
    this.formBuilder();
  }
}
