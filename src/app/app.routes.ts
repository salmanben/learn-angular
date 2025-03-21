import { Routes } from '@angular/router';
import { HomeListComponent } from './components/home-list/home-list.component';
import { TestComponent } from './components/test/test.component';

export const routes: Routes = [
  {
    path: "homes",
    component: HomeListComponent,
  },
  {
    path: "",
    redirectTo: "homes",
    pathMatch: "full",
  },
  {
    path: "test",
    component: TestComponent,
  },
];