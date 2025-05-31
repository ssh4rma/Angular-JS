import { Component } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css',
})
export class LoginComponent {
  onSubmit(formData: NgForm): void {
    if (formData.form.invalid) {
      alert('Please fill the details');
    }
    const enteredEmail = formData.form.value.email;
    const enteredPass = formData.form.value.password;

    console.log(enteredEmail, enteredPass);
  }
}
