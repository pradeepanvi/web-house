import { Component, OnInit } from '@angular/core';
import { ProjectService } from "../../shared/project.service";
import { Project } from '../../shared/project.model';

@Component({
  selector: '[app-list]',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
  projects: Project[];

  constructor(private projectService:ProjectService) { }

  ngOnInit() {
    this.projects = this.projectService.getProjects();
    console.log(this.projects);
  }

}
