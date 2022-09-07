import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {User} from "../../shared/interfaces";
import {AuthService} from "../shared/services/auth.service";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  form: FormGroup
  flagSubmited = false

  constructor(
    public auth: AuthService,
    private router: Router,
  ) {
  }

  ngOnInit(): void {
    this.form = new FormGroup({
      email: new FormControl(null, [
        Validators.required,
        Validators.email]),
      password: new FormControl(null, [
        Validators.required,
        Validators.minLength(6)])
    })
  }

  submit() {
    if (this.form.invalid) {
      return
    }
    this.flagSubmited = true

    const user: User = {
      email: this.form.value.email,
      password: this.form.value.password
    }
    //
    // this.auth.register(user).subscribe(() => {
    //   this.form.reset()
    //   this.router.navigate(['/admin', 'dashboard'])
    //   this.flagSubmited = false
    // }, () => {
    //   this.flagSubmited = false
    // })

      this.auth.SignUp(user.email, user.password)
  }

}
