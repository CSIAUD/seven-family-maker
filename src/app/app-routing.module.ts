import { NgModule } from '@angular/core';
import { ExtraOptions, RouterModule, Routes } from '@angular/router';
import { CardComponent } from './component/card/card.component';
import { TestComponent } from './pages/test/test.component';

const routes: Routes = [
  { path: "", redirectTo: "test/card", pathMatch: "full"},
  {
    path: "test",
    component: TestComponent,
    children: [
      {path: "card", component: CardComponent}
    ]
  },
  { path: "**", redirectTo: "test/card"},
];

const routerOptions: ExtraOptions = {
  useHash: true,
  anchorScrolling: 'enabled',
  scrollPositionRestoration: 'top',
  scrollOffset: [0, 64],
  onSameUrlNavigation: 'reload',
};

@NgModule({
  imports: [
    RouterModule.forRoot(routes, routerOptions)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
