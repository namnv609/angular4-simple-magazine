import { RouterModule, Routes } from "@angular/router";
import { ModuleWithProviders } from "@angular/core/src/metadata/ng_module";

import { SiteLayoutComponent } from "./_layout/site-layout/site-layout.component";
import { SiteHomeComponent } from "./components/site-home/site-home.component";

export const AppRoutes: Routes = [
  {
    path: "",
    component: SiteLayoutComponent,
    children: [
      {
        path: "",
        component: SiteHomeComponent,
        pathMatch: "full"
      }
    ]
  }
];
export const AppRoutings: ModuleWithProviders = RouterModule.forRoot(AppRoutes, {
  useHash: true
});
