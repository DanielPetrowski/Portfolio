import { Component,inject } from '@angular/core';
import { AboutMe } from './about-me/about-me';
import { MySkills } from './my-skills/my-skills';
import { Portfolio } from './portfolio/portfolio';
import { Contact } from './contact/contact';
import { TranslatePipe,TranslateService } from '@ngx-translate/core';


@Component({
  selector: 'app-landing-page',
  imports: [AboutMe,MySkills,Portfolio,Contact,TranslatePipe],
  templateUrl: './landing-page.html',
  styleUrl: './landing-page.scss',
})
export class LandingPage {
  private translate = inject(TranslateService);

  useLanguage(language: string): void {
      this.translate.use(language);
  }
}
