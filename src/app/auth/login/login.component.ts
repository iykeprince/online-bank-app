import { AuthService } from './../../common/service/auth.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;
  found: boolean = false;
  error: boolean = false;
  loading: boolean = false;

  constructor(
    private _auth: AuthService,
    private _fb: FormBuilder,
    private _router: Router
  ) { }

  ngOnInit() {
    this.loginForm = this._fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required]]
    });
  }

  get email(){ return this.loginForm.get('email') }
  get password(){ return this.loginForm.get('password') }

  login(){
    const credential = this.loginForm.value;
    this.loading = true;
    this._auth.login(credential).subscribe((res) => {
      if(res.isLoggedIn){
        this.loading = false;
        this.found = true;
        this.error = false;
        this._auth.saveToken(res.token);
        this._router.navigate(['/account']);
      }else{
        this.loading = false;
        this.found =false;
        this.error = true;
      }
    }, (error) => {
      this.loading = false;
      this.found = false; 
    });
  }
}
