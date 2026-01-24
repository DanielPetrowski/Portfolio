import { NgIf } from '@angular/common';
import { Component, inject, OnInit, OnDestroy } from '@angular/core';
import { TranslatePipe, TranslateService } from '@ngx-translate/core';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-header',
  imports: [TranslatePipe, NgIf],
  templateUrl: './header.html',
  styleUrl: './header.scss',
})
export class Header implements OnInit, OnDestroy {
  private translate = inject(TranslateService);
  private langSub!: Subscription;

  activeLang = 'de'; 

  ngOnInit(): void {
  
    if (this.translate.currentLang) {
      this.activeLang = this.translate.currentLang;
    }

    
    this.langSub = this.translate.onLangChange.subscribe(event => {
      this.activeLang = event.lang;
    });
  }

  useLanguage(language: string): void {
    this.translate.use(language);
    
  }

  ngOnDestroy(): void {
    this.langSub.unsubscribe();
  }

  menuOpen = false;

  toggleMenu() {
    this.menuOpen = !this.menuOpen;
  }
}
