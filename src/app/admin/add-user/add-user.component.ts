import { ChangeDetectionStrategy, Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { SaveData } from 'src/app/auth/save-data.interface';

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AddUserComponent implements SaveData {
  form: FormGroup = this.fb.group({
    name: new FormControl(''),
    email: new FormControl(''),
  });

  constructor(private fb: FormBuilder) {}

  isDataSaved(): boolean {
    return !this.form.dirty;
  }
}
