import { Component,inject } from '@angular/core';
import { TranslatePipe,TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-first-layer',
  imports: [TranslatePipe],
  templateUrl: './first-layer.html',
  styleUrl: './first-layer.scss',
})
export class FirstLayer {
  private translate = inject(TranslateService);

  useLanguage(language: string): void {
      this.translate.use(language);
  }
}
