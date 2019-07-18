import { User } from './../models/user.model';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private url = environment.php_url;
  constructor(private http: HttpClient) { }

  getProfile(userId): Observable<User>{
    return this.http.get<User>(`${this.url}/user/getProfile`, {
      params: { user_id: userId}
    });
  }

}
