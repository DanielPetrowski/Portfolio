import { Component, signal,inject,} from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Header } from './shared/header/header';
import { Footer } from './shared/footer/footer';
import {  TranslateService } from '@ngx-translate/core';
import { LegalNotice } from './legal-notice/legal-notice';




@Component({
  selector: 'app-root',
  imports: [RouterOutlet,Header,Footer,LegalNotice],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  protected readonly title = signal('Portfolio');

     private translate = inject(TranslateService);

  useLanguage(language: string): void {
      this.translate.use(language);
  }
}
