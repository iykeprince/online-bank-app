import { User } from './../../common/models/user.model';
import { AuthService } from './../../common/service/auth.service';
import { UserService } from 'src/app/common/service/user.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-side-bar',
  templateUrl: './side-bar.component.html',
  styleUrls: ['./side-bar.component.css']
})
export class SideBarComponent implements OnInit {
  currentUser: any;
  user: User;
  
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
