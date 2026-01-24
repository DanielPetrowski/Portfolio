import { NgIf } from '@angular/common';
import { Component,inject } from '@angular/core';
import {  TranslatePipe, TranslateService } from '@ngx-translate/core';


@Component({
  selector: 'app-header',
  imports: [TranslatePipe,NgIf],
  templateUrl: './header.html',
  styleUrl: './header.scss',
})
export class Header {
 private translate = inject(TranslateService);

 

activeLang = 'de';

useLanguage(language: string): void {
  this.activeLang = language;
  this.translate.use(language);
}


menuOpen = false;

toggleMenu() {
  this.menuOpen = !this.menuOpen;
}
}


