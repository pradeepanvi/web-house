import { Component, OnInit, DoCheck } from '@angular/core';
import { ActivatedRoute, Params, Router } from "@angular/router";
import { ProjectService } from "../../shared/project.service";
import { Project } from "../../shared/project.model";

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})
export class DetailComponent implements OnInit, DoCheck{
  project: Project;
  id: number;
  prev: number;
  next: number;
  prevS: boolean;
  nextS: boolean;

  constructor(private route: ActivatedRoute,
              private router: Router,
              private projectService : ProjectService) { }

  ngOnInit() {
    this.route.params.subscribe(
      (params: Params) => {
        this.id = +params['id'];
        this.project = this.projectService.getProject(this.id);
      }
    )
    //console.log(this.project)
  }

  ngDoCheck(){
    if(1 - this.id != 1){
      this.prev = 1 - this.id;
      this.prevS = true;
    } else {
      this.prevS = false;
    }

    if(this.projectService.getProjects().length > this.id + 1){
      this.next = 1 + this.id;
      this.nextS = true;
    } else {
      this.nextS = false;
    }
  }
  
}
