import { Component,inject } from '@angular/core';
import { FirstLayer } from './first-layer/first-layer';
import { Pokedex } from './pokedex/pokedex';
import { PolloLoco } from './pollo-loco/pollo-loco';
import { TranslatePipe,TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-portfolio',
  imports: [FirstLayer,Pokedex,PolloLoco,TranslatePipe],
  templateUrl: './portfolio.html',
  styleUrl: './portfolio.scss',
})
export class Portfolio {
  private translate = inject(TranslateService);

  useLanguage(language: string): void {
      this.translate.use(language);
  }
}

