import { Component, OnInit } from '@angular/core';
import { ProfessionalService } from './professional.service';

@Component({
  selector: 'app-professional',
  templateUrl: './professional.component.html',
  styleUrls: ['./professional.component.css'],
  providers: [ ProfessionalService ]
})
export class ProfessionalComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
