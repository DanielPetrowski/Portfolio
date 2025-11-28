import { Component,inject } from '@angular/core';
import { TranslatePipe,TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-pollo-loco',
  imports: [TranslatePipe],
  templateUrl: './pollo-loco.html',
  styleUrl: './pollo-loco.scss',
})
export class PolloLoco {
  private translate = inject(TranslateService);

  useLanguage(language: string): void {
      this.translate.use(language);
  }
}
