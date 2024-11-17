import { Component, OnInit } from '@angular/core';
import {FormArray,FormBuilder,FormGroup,FormsModule,ReactiveFormsModule, Validators,} from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import {MatSelectModule} from '@angular/material/select';
import { CommonModule } from '@angular/common';
import { DateRangePickerComponent } from '../../shared/date-range-picker/date-range-picker.component';
import { InputComponent } from '../../shared/input/input.component';
import { TextareaComponent } from '../../shared/textarea/textarea.component';
import { DropdownComponent } from '../../shared/dropdown/dropdown.component';
import { websiteValidator } from '../../validators/website.validator';
@Component({
  selector: 'GITA-job-experience',
  standalone: true,
  imports: [
    CommonModule,MatFormFieldModule,
    MatButtonModule,FormsModule,
    ReactiveFormsModule, MatSelectModule,
    DateRangePickerComponent, InputComponent,
    TextareaComponent,DropdownComponent
  ],
  templateUrl: './job-experience.component.html',
  styleUrl: './job-experience.component.scss'
})
export class JobExperienceComponent implements OnInit{
  experienceForm!: FormGroup;
  Positions = ['Junior', 'Middle', 'Senior'];
  
  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    this.experienceForm = this.fb.group({
      jobs: this.fb.array([]),
    });
  }

  addJob() {
    const job = this.fb.group({
      companyName: [''],
      companyWebsite: ['', [Validators.required, websiteValidator()]],
      companyDescription: [''],
      positions: this.fb.array([]),
    });
    this.jobs.push(job);
  }


  removeJob(index: number) {
    this.jobs.removeAt(index);
  }

  addPosition(jobIndex: number) {
    const position = this.fb.group({
      positionName: [''],
      positionLevel: [''],
      positionDescription: [''],
      start_end_dates: ['']
    });
    this.positions(jobIndex).push(position);
  }

  removePosition(jobIndex: number, positionIndex: number) {
    this.positions(jobIndex).removeAt(positionIndex);
  }

  positions(jobIndex: number) {
    return this.jobs.at(jobIndex).get('positions') as FormArray;
  }

  get jobs() {
    return this.experienceForm.get('jobs') as FormArray;
  }

  companyWebsiteInvalid(index: number): any {
    const companyWebsiteControl = this.jobs.at(index).get('companyWebsite');

    return companyWebsiteControl?.errors?.['invalidWebsite'] &&  companyWebsiteControl?.dirty;
  }
  

}