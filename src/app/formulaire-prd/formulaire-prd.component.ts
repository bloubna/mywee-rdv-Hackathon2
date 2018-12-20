import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-formulaire-prd',
  templateUrl: './formulaire-prd.component.html',
  styleUrls: ['./formulaire-prd.component.css']
})
export class FormulairePRDComponent implements OnInit {
  rdvForm: FormGroup;
  constructor(private fb: FormBuilder) { }

  ngOnInit() {
    this.rdvForm = this.fb.group({
      societe: [''],
      nom: ['', Validators.required],
      prenom: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      sujet: ['', Validators.required],
      debut: ['', Validators.required],
      fin: ['', Validators.required],
    });
  }

}
