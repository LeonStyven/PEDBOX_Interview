import { Routes } from '@angular/router';
import { SubredditsPageComponent } from './subreddit/pages/subreddits-page/subreddits-page.component';
import { SignInPageComponent } from './user/signin/pages/sign-in-page/sign-in-page.component';

export const routes: Routes = [

    {
        path: '',
        component: SubredditsPageComponent
    },
    {
        path: 'subreddits',
        component: SubredditsPageComponent
    },
    {
        path: 'signin',
        component: SignInPageComponent
    },
    {
        path: '**',
        redirectTo: ''
    }

];
