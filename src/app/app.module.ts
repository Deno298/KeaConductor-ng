import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material';
import { MatButtonModule, MatToolbarModule, MatSidenavModule, MatIconModule, MatListModule } from '@angular/material';
import { JwtModule } from '@auth0/angular-jwt';


import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FrontpageComponent } from './frontpage/frontpage.component';
import { LoginComponent } from './login/login.component';
import { HttpClientModule } from '@angular/common/http';
import { DashboardComponent } from './dashboard/dashboard.component';
import { MainNavComponent } from './main-nav/main-nav.component';
import { LayoutModule } from '@angular/cdk/layout';
import { UserComponent } from './user/user.component';
import { AddUserComponent } from './add-user/add-user.component';
import { UsersInterfaceComponent } from './users-interface/users-interface.component';
import { MatDividerModule } from '@angular/material/divider';
import { MatCardModule } from '@angular/material/card';
import { MatExpansionModule } from '@angular/material/expansion';
import { TrainComponent } from './train/train.component';
import { AddTrainComponent } from './add-train/add-train.component';
import { TrainInterfaceComponent } from './train-interface/train-interface.component';
import { MatSelectModule } from '@angular/material/select';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatFileUploadModule } from 'angular-material-fileupload';
import { DocsComponent } from './docs/docs.component';
import { ConductComponent } from './conduct/conduct.component';
import { MatSliderModule } from '@angular/material/slider';
import { MatDialogModule } from '@angular/material/dialog';
import { EditTrainComponent } from './edit-train/edit-train.component';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
import { TrainRedirectComponent } from './train-redirect/train-redirect.component';
import { FilterUsersPipe } from './filter-users.pipe';




export function tokenGetter() {
  return localStorage.getItem('access_token');
}



@NgModule({
  declarations: [
    AppComponent,
    FrontpageComponent,
    LoginComponent,
    DashboardComponent,
    MainNavComponent,
    UserComponent,
    AddUserComponent,
    UsersInterfaceComponent,
    TrainComponent,
    AddTrainComponent,
    TrainInterfaceComponent,
    DocsComponent,
    ConductComponent,
    EditTrainComponent,
    TrainRedirectComponent,
    FilterUsersPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    HttpClientModule,
    ReactiveFormsModule,
    LayoutModule,
    MatToolbarModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    MatDividerModule,
    MatCardModule,
    MatExpansionModule,
    MatSelectModule,
    MatSlideToggleModule,
    MatFileUploadModule,
    MatSliderModule,
    MatDialogModule,
    MatTableModule,
    MatPaginatorModule,
    FormsModule,
    MatSortModule,
    JwtModule.forRoot({
      config: {
        tokenGetter: tokenGetter,
        whitelistedDomains: ['localhost:3000'],
      }
    })
  ],
  providers: [FilterUsersPipe],
  bootstrap: [AppComponent],
  entryComponents: [EditTrainComponent, AddUserComponent]
})
export class AppModule { }
