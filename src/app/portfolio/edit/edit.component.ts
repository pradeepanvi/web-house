import { Component, OnInit, DoCheck } from '@angular/core';
import { FormGroup, FormControl, Validators, FormArray } from '@angular/forms';

import { ProjectService } from "../../shared/project.service";
import { ActivatedRoute, Router, Params } from '@angular/router';
import { Project } from '../../shared/project.model';
import { DataStorageService } from '../../shared/data-storage.service';
import { JsonpCallbackContext } from '@angular/common/http/src/jsonp';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {
  editForm: FormGroup;
  editMode = false;
  id: number;

  constructor(private route: ActivatedRoute,
              private router: Router,
              private projectService: ProjectService, private dataService: DataStorageService) { }

  ngOnInit() {
    this.route.params.subscribe(
      (params: Params) => {
        this.id = +params['id'];
        this.editMode = params['id'] != null;
        this.initForm();
      }
    )
  }


  onSubmit(){
    if(this.editMode){
      this.projectService.updateProject(this.id, this.editForm.value);
    } else {
      this.projectService.addProject(this.editForm.value);
    }
    this.onCancel();
  }

  onCancel(){
   this.router.navigate(['/'], {relativeTo: this.route})
  }

  private initForm(){
    let pName = '';
    let pDetail = '';
    let pClient = '';
    let pLink = '';
    let pFront = false;
    let pPSD = false;
    let pHTML = false;
    let pJquery = false;
    let pPixel = false;
    let pRes = false;
    let pSEO = false;
    let pRailo = false;
    let pTesting = false;
    let pOptimization = false;
    let pThumb = '';
    let pMain = '';
    let pSlider1 = '';
    let pSlider2 = '';

    if(this.editMode){

      //this.projectService.getProject(this.id)
      

      const project = this.projectService.getProject(this.id);


        console.log(project)

        pName = project.name;
        pDetail = project.detail;
        pClient = project.client;
        pLink = project.link;
        pFront = project.front_end;
        pPSD = project.psd_to_html;
        pHTML = project.html5_css3_less;
        pJquery = project.jquery;
        pPixel = project.pixel_perfect;
        pRes = project.responsive;
        pSEO = project.responsive;
        pRailo = project.railo;
        pTesting = project.testing;
        pOptimization = project.optimisation;
        pThumb = project.thumb;
        pMain = project.main_img;
        pSlider1 = project.slider_img1;
        pSlider2 = project.slider_img2;

        console.log('Fronted ', pFront);
        // pFront = project.skills[0].front_end;
        // pPSD = project.skills[0].psd_to_html;
        // pHTML = project.skills[0].html5_css3_less;
        // pJquery = project.skills[0].jquery;
        // pPixel = project.skills[0].pixel_perfect;
        // pRes = project.skills[0].responsive;
        // pSEO = project.skills[0].responsive;
        // pRailo = project.skills[0].railo;
        // pTesting = project.skills[0].testing;
        // pOptimization = project.skills[0].optimisation;
        // pThumb = project.images[0].thumb;
        // pMain = project.images[0].main_img;
        // pSlider1 = project.images[0].slider_img1;
        // pSlider2 = project.images[0].slider_img2;
    }

    this.editForm = new FormGroup({
      'name' : new FormControl(pName, Validators.required),
      'detail' : new FormControl(pDetail, Validators.required),
      'client': new FormControl(pClient, Validators.required),
      'link': new FormControl(pLink, Validators.required),
      'front_end': new FormControl(pFront),
      'psd_to_html': new FormControl(pPSD),
      'html5_css3_less': new FormControl(pHTML),
      'jquery': new FormControl(pJquery),
      'pixel_perfect': new FormControl(pPixel),
      'responsive': new FormControl(pRes),
      'seo_friendly': new FormControl(pSEO),
      'railo': new FormControl(pRailo),
      'testing': new FormControl(pTesting),
      'optimisation': new FormControl(pOptimization),
      'thumb' : new FormControl(pThumb),
      'main_img' : new FormControl(pMain),
      'slider_img1' : new FormControl(pSlider1),
      'slider_img2' : new FormControl(pSlider2)
    })
  }

}

