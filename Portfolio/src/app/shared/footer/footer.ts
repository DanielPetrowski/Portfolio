import { Component,inject } from '@angular/core';
import { TranslatePipe,TranslateService } from '@ngx-translate/core';

import { RouterLink } from "@angular/router";


@Component({
  selector: 'app-footer',
  imports: [TranslatePipe, RouterLink],
  templateUrl: './footer.html',
  styleUrl: './footer.scss',
})
export class Footer {
  private translate = inject(TranslateService);

  useLanguage(language: string): void {
      this.translate.use(language);
  }
}
