import { Routes } from '@angular/router';
import { SubredditsPageComponent } from './subreddit/pages/subreddits-page/subreddits-page.component';
import { SignInPageComponent } from './user/signin/pages/sign-in-page/sign-in-page.component';
import { LogInPageComponent } from './user/login/pages/log-in-page/log-in-page.component';
import { AuthGuard } from './auth.guard';

export const routes: Routes = [
    {
      path: 'subreddits',
      component: SubredditsPageComponent,
      canActivate: [AuthGuard]
    },
    {
        path: 'auth',
        children: [
          {
            path: 'signin',
            component: SignInPageComponent
          },
          {
            path: 'login',
            component: LogInPageComponent
          },
          {
            path: '',
            redirectTo: 'login',
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
