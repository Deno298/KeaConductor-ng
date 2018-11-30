import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from '../app/dashboard/dashboard.component';
import { FrontpageComponent } from '../app/frontpage/frontpage.component';
import { UserComponent } from '../app/user/user.component';
import { AddUserComponent } from '../app/add-user/add-user.component';
import { UsersInterfaceComponent} from '../app/users-interface/users-interface.component';

const routes: Routes = [
  {
    path: 'dashboard',
    component: DashboardComponent,
    children: [
      {
        path: 'user',
        component: UserComponent,
        children:   [
          {
            path: 'add',
            component: AddUserComponent
          },
          {
            path: 'interface',
            component: UsersInterfaceComponent
          }
        ]
      }
    ]
  },
  {
    path: 'frontpage',
    component: FrontpageComponent
  },
  {
    path: '',
    redirectTo: 'frontpage',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
