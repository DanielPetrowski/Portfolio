import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { RouterLink } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { TranslatePipe, TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-contact',
  imports: [TranslatePipe, RouterLink, FormsModule, CommonModule],
  templateUrl: './contact.html',
  styleUrl: './contact.scss',
})
export class Contact {
  formSubmitted = false;
    mailSent = false;       
  mailError = false; 

  private translate = inject(TranslateService);
  private http = inject(HttpClient);

  useLanguage(language: string): void {
    this.translate.use(language);
  }

onSubmit(form: NgForm) {
  this.formSubmitted = true;

  if (form.invalid) {
    form.control.markAllAsTouched();
    return;
  }

  const payload = {
    email: form.value.email,
    name: form.value.name,
    message: form.value.message
  };

  this.http.post(
    'https://daniel-petrowski.de/Portfolio/sendMail.php',
    payload,
    { headers: { 'Content-Type': 'application/json' } }
  ).subscribe({
    next: () => {
     this.mailSent = true;               
        setTimeout(() => this.mailSent = false, 1500); 
        form.resetForm();
        this.formSubmitted = false;
    },
    error: (error) => {
      this.mailError = true;               // Fehler-Toast
        setTimeout(() => this.mailError = false, 1500);
    }
  });
}


}
