import { Component,inject } from '@angular/core';
import { RouterLink } from "@angular/router";
import { TranslatePipe,TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-my-skills',
  imports: [RouterLink,TranslatePipe],
  templateUrl: './my-skills.html',
  styleUrl: './my-skills.scss',
})
export class MySkills {

  private translate = inject(TranslateService);

  useLanguage(language: string): void {
      this.translate.use(language);
  }
}

