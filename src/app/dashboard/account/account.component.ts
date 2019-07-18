import { User } from './../../common/models/user.model';
import { AuthService } from './../../common/service/auth.service';
import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/common/service/user.service';

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.css']
})
export class AccountComponent implements OnInit {
  public user: User;
  public currentUser: any;

  constructor(
    private _auth: AuthService,
    private _user: UserService
  ) { }

  ngOnInit() {
    this.currentUser = this._auth.currentUser.data;
    console.log("user", this.currentUser);
    this._user.getProfile(this.currentUser.user_id).subscribe((user) => {
      this.user = user;
      console.log('dynamic user', this.user);
    });
  }

}
