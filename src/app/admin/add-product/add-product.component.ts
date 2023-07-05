import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { SaveData } from 'src/app/auth/save-data.interface';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.scss']
})
export class AddProductComponent implements SaveData {
  form: FormGroup = this.fb.group({
    name: new FormControl(''),
    quantity: new FormControl(0),
  });

  constructor(private fb: FormBuilder) {}

  isDataSaved(): boolean {
    return !this.form.dirty;
  }
}
