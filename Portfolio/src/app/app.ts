import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Header } from './shared/header/header';

import { LandingPage } from './landing-page/landing-page';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet,Header,LandingPage],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  protected readonly title = signal('Portfolio');
}
