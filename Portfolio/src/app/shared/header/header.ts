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

    menuOpen = false;

  animationIndex = 0;
  isAnimating = false;

  images = [
    'img/Property 1=burger.png',
    'img/Property 1=Transition.png',
    'img/Property 1=close medium.png',
    'img/Property 1=CLOSE FINAL.png'
  ];

toggleMenu() {
    if (this.isAnimating) return;

    this.isAnimating = true;

    const opening = !this.menuOpen;

    // Start-Index festlegen
    this.animationIndex = opening
      ? 0
      : this.images.length - 1;

    const step = opening ? 1 : -1;

    const interval = setInterval(() => {
      this.animationIndex += step;

      const doneOpening =
        opening && this.animationIndex === this.images.length - 1;
      const doneClosing =
        !opening && this.animationIndex === 0;

      if (doneOpening || doneClosing) {
        clearInterval(interval);
        this.menuOpen = opening;
        this.isAnimating = false;
      }
    }, 75);
  }


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

}
