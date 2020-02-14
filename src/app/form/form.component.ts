import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormArray } from '@angular/forms';
import { COMMA, ENTER } from '@angular/cdk/keycodes';
import { MatChipInputEvent } from '@angular/material/chips';
import { Observable } from 'rxjs';
import { map, startWith } from 'rxjs/operators';
import { MatAutocompleteSelectedEvent, MatAutocomplete } from '@angular/material/autocomplete';
// export interface Fruit {
//   name: string;
// }

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})

export class FormComponent implements OnInit {
  myControl = new FormControl();
  options: string[] = ['Angular', 'Css', 'html', 'Bootstrap'];
  filteredOptions: Observable<string[]>;
  profilForm = new FormGroup({
    personelInfo: new FormGroup({
      firstName: new FormControl('', [Validators.required]),
      lastName: new FormControl('', [Validators.required]),
      Address: new FormControl('', [Validators.required]),
      City: new FormControl('', [Validators.required]),
      State: new FormControl('', [Validators.required]),
      CodePostal: new FormControl('', [Validators.required])
    }),
    skills: new FormArray([]),
    experPro: new FormArray([
    ])
  });
  get skills() { return this.profilForm.get('skills') as FormArray; }
  get experPro() { return this.profilForm.get('experPro') as FormArray; }
  /************ */
  visible = true;
  selectable = true;
  removable = true;
  addOnBlur = true;
  readonly separatorKeysCodes: number[] = [ENTER, COMMA];
  add(event: MatChipInputEvent): void {
    const input = event.input;
    const value = event.value;
    if ((value || '').trim()) {
      this.skills.push(new FormControl(value));
      console.log(this.skills.value);
      
    }
    if (input) {
      input.value = '';
    }
  }
  selected(event: MatAutocompleteSelectedEvent): void {
    this.skills.push(new FormControl(event.option.viewValue));
    // this.myControl.setValue('');
  }

  remove(i): void {
    this.skills.removeAt(i);
  }


  // constructor() { }


  ngOnInit() {
    console.log(this.skills);
    this.filteredOptions = this.myControl.valueChanges
    .pipe(
    startWith(''),
    map(value => this._filter(value))
    );
  }
  private _filter(value: string): string[] {
    const filterValue = value.toLowerCase();

    return this.options.filter(option => option.toLowerCase().includes(filterValue));
  }
  exp(): FormGroup {
    return new FormGroup({
      poste: new FormControl(''),
      societé: new FormControl(''),
      upday: new FormControl(new Date()),
      offday: new FormControl(new Date())
    });
  }
  addexp() {
    this.experPro.push(this.exp());
    console.log(this.experPro);
    }
    removexp(i) {
      this.experPro.removeAt(i);
    }
}
