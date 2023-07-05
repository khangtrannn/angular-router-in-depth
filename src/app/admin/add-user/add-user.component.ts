import { ChangeDetectionStrategy, Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AddUserComponent {
  form: FormGroup = this.fb.group({
    name: new FormControl(''),
    email: new FormControl(''),
  });

  constructor(private fb: FormBuilder) {}
}
