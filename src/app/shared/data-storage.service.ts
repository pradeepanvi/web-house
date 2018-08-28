import { Injectable } from "@angular/core";
import { Http, Response } from "@angular/http";
import "rxjs/Rx";

import { ProjectService } from "./project.service";
import { Project } from "./project.model";
import { Subject } from "rxjs/Rx";

@Injectable()
export class DataStorageService{
    projects: Project[];
       
    constructor(private http: Http, private projectService: ProjectService){}
    
    storeProjects(){
        return this.http.put('https://web-house-626c0.firebaseio.com/projects.json', this.projectService.getProjects());
    }

    getProjects(){
        this.http.get('https://web-house-626c0.firebaseio.com/projects.json').map(
            (response: Response) => {
                const projects: Project[] = response.json();
                return projects;
            }
        )
        .subscribe(
            (projects: Project[]) => {
                this.projectService.setProjects(projects);
                console.log(projects);
            }
        )
    }

}

