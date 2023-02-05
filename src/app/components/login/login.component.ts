import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {AuthService} from "../../services/auth.service";
import {MatSnackBar} from "@angular/material/snack-bar";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  loginForm!: FormGroup;
  loading:boolean= false
  constructor(private fb: FormBuilder, public authService: AuthService,private _snackBar: MatSnackBar) {
  }

  ngOnInit(): void {
    this.loginForm = this.fb.group({
      email: ['', [Validators.required]],
      pass: ['', [Validators.required]],
    });
  }

  submitForm() {

    if (this.loginForm.valid) {
      this.loading = true;
      this.authService.authenticate(this.loginForm.value).subscribe(data => {
          console.log(data)
        this.loading = false
        },
        error => {
          this.loading = false
          let errMsg =  error.error.error
          if (errMsg) {
          this._snackBar.open(errMsg, 'Ok', {
            horizontalPosition: 'center',
            verticalPosition: 'top',
          });

          }
        })
    }
  }
}
