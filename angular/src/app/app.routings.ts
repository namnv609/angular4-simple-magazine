import { RouterModule, Routes } from "@angular/router";
import { ModuleWithProviders } from "@angular/core/src/metadata/ng_module";

export const AppRoutes: Routes = [];
export const AppRoutings: ModuleWithProviders = RouterModule.forRoot(AppRoutes, {
  useHash: true
});
