import { Component, OnInit, Input } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  name: string;
  password: string;
  confirm: string;
  user;

  constructor() { }

  ngOnInit() {
  }

  onRegisterSubmit() {
    console.log('submitted');
    this.user.name = this.name;
    if (this.password === this.confirm) {
      this.user.password = this.password;
    }
    console.log(this.user);
  }
}
