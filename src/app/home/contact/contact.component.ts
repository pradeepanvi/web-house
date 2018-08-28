import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from "@angular/forms";
import { Http, Response } from "@angular/http";
import "rxjs/Rx";

@Component({
  selector: '[app-contact]',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {
  contactForm: FormGroup;

  constructor(private http: Http) { }

  ngOnInit() {
    this.initForm();
  }

  onSubmit(){
    return this.http.post('https://web-house-626c0.firebaseio.com/contacts.json', this.contactForm.value).subscribe(
      (response: Response) => {
        console.log(response)
      }      
    );
  }

  private initForm(){
    this.contactForm = new FormGroup({
      'name' : new FormControl('', Validators.required),
      'email' : new FormControl('', Validators.required),
      'phone' : new FormControl('', Validators.required),
      'msg' : new FormControl('')
    })
  }

}
