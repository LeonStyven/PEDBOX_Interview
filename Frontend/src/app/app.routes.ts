import { Routes } from '@angular/router';
import { SubredditsPageComponent } from './subreddit/pages/subreddits-page/subreddits-page.component';
import { SignInPageComponent } from './user/signin/pages/sign-in-page/sign-in-page.component';

export const routes: Routes = [
    {
      path: 'subreddits',
      component: SubredditsPageComponent
    },
    {
        path: 'auth',
        children: [
          {
            path: 'signin',
            component: SignInPageComponent
          },
          {
            path: '',
            redirectTo: 'signin',
            pathMatch: 'full'
          }
        ]
      },
    {
      path: '',
      redirectTo: 'auth',
      pathMatch: 'full'
    },
    {
      path: '**',
      redirectTo: 'auth'
    }
  ];
