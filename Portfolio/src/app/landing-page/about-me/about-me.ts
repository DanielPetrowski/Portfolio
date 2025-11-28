import { Component, inject } from '@angular/core';
import { TranslatePipe,TranslateService } from '@ngx-translate/core';


@Component({
  selector: 'app-about-me',
  imports: [TranslatePipe],
  templateUrl: './about-me.html',
  styleUrl: './about-me.scss',
})
export class AboutMe {
 private translate = inject(TranslateService);

  useLanguage(language: string): void {
      this.translate.use(language);
  }
}
