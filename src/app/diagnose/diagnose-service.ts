import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { DiagnoseJob } from './diagnose-job.model';



const httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable()
export class DiagnoseService {

    constructor(private http: HttpClient) {}

    nodeUrl: string = 'http://localhost:8080/diagnose';

    public getJobs() {
        return this.http.get<DiagnoseJob[]>(this.nodeUrl);
    }

}