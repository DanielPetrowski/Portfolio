import { Component, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { TranslatePipe, TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-privacy-policy',
  imports: [TranslatePipe,RouterLink],
  templateUrl: './privacy-policy.html',
  styleUrl: './privacy-policy.scss',
})
export class PrivacyPolicy {
private translate = inject(TranslateService);

  useLanguage(language: string): void {
      this.translate.use(language);
  }
}
