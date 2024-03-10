import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NewThemeComponent } from './new-theme/new-theme.component';
import { CurrentThemeComponent } from './current-theme/current-theme.component';
import { ThemeRoutingModule } from './theme-routing-module';
import { ThemesListComponent } from '../themes-list/themes-list.component';
import { PostsListComponent } from '../posts-list/posts-list.component';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [NewThemeComponent, CurrentThemeComponent, ThemesListComponent, PostsListComponent, SharedModule],
  imports: [CommonModule, ThemeRoutingModule],
})
export class ThemeModule {}
