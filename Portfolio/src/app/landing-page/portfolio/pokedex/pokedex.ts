import { Component,inject } from '@angular/core';
import { TranslatePipe,TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-pokedex',
  imports: [TranslatePipe],
  templateUrl: './pokedex.html',
  styleUrl: './pokedex.scss',
})
export class Pokedex {
  private translate = inject(TranslateService);

  useLanguage(language: string): void {
      this.translate.use(language);
  }
}
