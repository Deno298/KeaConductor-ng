import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from '../app/dashboard/dashboard.component';
import { FrontpageComponent } from '../app/frontpage/frontpage.component';
import { UserComponent } from '../app/user/user.component';
import { AddUserComponent } from '../app/add-user/add-user.component';
import { UsersInterfaceComponent} from '../app/users-interface/users-interface.component';
import { TrainComponent } from '../app/train/train.component';
import { AddTrainComponent  } from '../app/add-train/add-train.component';
import { TrainInterfaceComponent } from '../app/train-interface/train-interface.component';
import { DocsComponent } from '../app/docs/docs.component';
import { ConductComponent } from '../app/conduct/conduct.component';

const routes: Routes = [
  {
    path: 'dashboard',
    component: DashboardComponent,
    children: [
      {
        path: 'train',
        component: TrainComponent,
        children: [
          {
            path: 'add',
            component: AddTrainComponent,
          },
          {
            path: 'interface',
            component: TrainInterfaceComponent,
          }
        ]
      },
      {
        path: 'docs',
        component: DocsComponent
      },
      {
        path: 'conduct',
        component: ConductComponent
      },
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
            component: UsersInterfaceComponent,
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
