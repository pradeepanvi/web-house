import { Component, OnInit, DoCheck } from '@angular/core';
import { Project } from '../../shared/project.model';
import { ProjectService } from "../../shared/project.service";

@Component({
  selector: '[app-projects]',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent implements OnInit, DoCheck {
  projects: Project[];

  constructor(private projectService:ProjectService) { }

  ngOnInit() {
    this.projects = this.projectService.getProjects();
    console.log(this.projectService.getAllProjects());
  }
  ngDoCheck(){
    //this.projects = this.projectService.getProjects();
    //console.log(this.projects + 'asdfs a');
  }

}
