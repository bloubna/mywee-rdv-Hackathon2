import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { RdvmailService } from '../common/rdvmail.service';
import swal from 'sweetalert';
import { FlashMessagesService } from 'angular2-flash-messages';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {
  rdvForm: FormGroup;
  
  constructor(private fb: FormBuilder, private service: RdvmailService, private flashMessages: FlashMessagesService) { }
  
  ngOnInit() {
    //Champ requis pour l'envoi du mail
    this.rdvForm = this.fb.group({
      societe: [''],
      nom: ['', Validators.required],
      prenom: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      sujet: ['', Validators.required],
      debut: ['', Validators.required],
      fin: ['', Validators.required],
      heuredebut: ['', Validators.required],
      heurefin: ['', Validators.required],
      recaptchaReactive: ['', Validators.required],
    });
    
  }
  
  //Modal confirmant l'envoi du mail
  mailForm(form){
    this.service.sendMail(form).subscribe(() => {
      swal('Formulaire de prise de rendez-vous', 'Votre demande à bien été envoyée', 'success');
    });
  }
}
