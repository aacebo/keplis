import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { environment } from '../../../../environments/environment';

import { IResponse } from '../../response.interface';

import { IUser } from '../models';

@Injectable({ providedIn: 'root' })
export class UsersHttpService {
  constructor(private readonly _http: HttpClient) { }

  login(email: string) {
    return this._http.post<IResponse<{ token: string; user: IUser; }>>(`${environment.api}/users/login`, { email });
  }

  findOne(username: string) {
    return this._http.get<IResponse<IUser>>(`${environment.api}/users/${username}`);
  }
}
