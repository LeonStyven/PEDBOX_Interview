import { inject, Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { User } from "../interfaces/User.interface"

@Injectable({
    providedIn: 'root'
})

export class AccessService {
    private http = inject(HttpClient);
    private API_URL = "http://127.0.0.1:4000/";

    constructor() { }

    register(user: User): Observable<any> {
        const url = `${this.API_URL}/auth/register`;
        return this.http.post<any>(url, user);
    }
}