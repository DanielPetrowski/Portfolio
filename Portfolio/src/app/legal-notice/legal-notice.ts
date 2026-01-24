import { Component, inject } from '@angular/core';
import { TranslateService,TranslatePipe } from '@ngx-translate/core';
import { RouterLink } from "@angular/router";

@Component({
  selector: 'app-legal-notice',
  standalone:true,
  imports: [TranslatePipe, RouterLink],
  templateUrl: './legal-notice.html',
  styleUrl: './legal-notice.scss',
})
export class LegalNotice {
private translate = inject(TranslateService);

  useLanguage(language: string): void {
      this.translate.use(language);
  }
}
