import { Component,inject, } from '@angular/core';
import { TranslatePipe,TranslateService } from '@ngx-translate/core';

import { Router, RouterLink } from "@angular/router";


@Component({
  selector: 'app-footer',
  standalone:true,
  imports: [TranslatePipe, RouterLink],
  templateUrl: './footer.html',
  styleUrl: './footer.scss',
})
export class Footer {
  private translate = inject(TranslateService);
  private router = inject(Router);

  useLanguage(language: string): void {
    this.translate.use(language);
  }

  openLegal(event: MouseEvent) {
    event.preventDefault();      // verhindert normale Navigation
    event.stopPropagation();     // schützt vor Parent-Clicks

    const url = this.router.serializeUrl(
      this.router.createUrlTree(['/legal-notice'])
    );

    window.open(url, '_blank', 'noopener');
  }
}
