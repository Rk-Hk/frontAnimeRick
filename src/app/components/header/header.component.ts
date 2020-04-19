import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { chapterEmmiter } from 'src/app/interfaces/generic.interface';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  @Input() appTitle;

  formGroup:FormGroup;
  animeCode: string = '1735';

  constructor(private _formBuilder:FormBuilder) { }


  ngOnInit() {
    this.formGroup = this._formBuilder.group({
      chapterInput: ""
    })
  }

}
