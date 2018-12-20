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

  constructor(private fb: FormBuilder, private serviceMail: RdvmailService, private flashMessages: FlashMessagesService) { }

  ngOnInit() {

    // Définition des champs pour le formulaire
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


  mailForm(form) {
// appel service mail pour envoyer le contenu du formulaire par mail
    this.serviceMail.sendMail(form).subscribe(() => {
      // Modal confirmant l'envoi du mail
      swal('Formulaire de prise de rendez-vous', 'Votre demande à bien été envoyée, elle sera traitée et vous recevrez un e-mail de confirmation.', 'success');
    });
  }
}
