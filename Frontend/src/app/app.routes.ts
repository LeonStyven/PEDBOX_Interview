import { Routes } from '@angular/router';
import { SubredditsPageComponent } from './subreddit/pages/subreddits-page/subreddits-page.component';

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
        path: '**',
        redirectTo: ''
    }

];
