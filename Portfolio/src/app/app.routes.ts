import { Routes } from '@angular/router';

import { LandingPage } from './landing-page/landing-page';
import { AboutMe } from './landing-page/about-me/about-me';
import { MySkills } from './landing-page/my-skills/my-skills';
import { Portfolio } from './landing-page/portfolio/portfolio';
import { Contact } from './landing-page/contact/contact';
import { LegalNotice } from './legal-notice/legal-notice';
import { PrivacyPolicy } from './privacy-Policy/privacy-policy';

export const routes: Routes = [
    {path:"",component:LandingPage},
    {path:"about-me",component:AboutMe},
    {path:"my-skills",component:MySkills},
    {path:"portfolio",component:Portfolio},
    {path:"contact", component: Contact},
    {path:"legal-notice",component:LegalNotice},
    {path:"privacy-policy",component:PrivacyPolicy}
];
