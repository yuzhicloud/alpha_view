import {Injectable} from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Node } from '../model/node.model';


const httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable()
export class NodeService {

    constructor(private http: HttpClient) {}

    // private nodeUrl = '/nm';
    nodeUrl: string = 'http://localhost:8080/nm';

    public getNodes() {
        return this.http.get<Node[]>(this.nodeUrl);
    }

    getNodeById(id: number) {
        return this.http.get<Node>(this.nodeUrl + '/' + id);
    }


    public updateNode(node: Node){
        return this.http.put(this.nodeUrl + '/' + node.id, node);
    }

    public deleteNode(id: number) {
        return this.http.delete(this.nodeUrl + '/' + id);
    }

    public createNode(node: Node) {
        return this.http.post<Node>(this.nodeUrl, node);
    }

}