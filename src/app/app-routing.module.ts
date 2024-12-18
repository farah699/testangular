import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './components/home/home.component';
import { AlbumComponent } from './components/album/album.component';
import { ArchivesComponent } from './components/archives/archives.component';
import { AddAlbumComponent } from './components/add-album/add-album.component';

const routes: Routes = [
  { path: 'header', component: HeaderComponent }, 
  { path: 'home', component: HomeComponent },
  { path: "", redirectTo: "home", pathMatch: "full" }, // Redirection
  { path: 'al', component: AlbumComponent }, 
  { path: 'archive', component:ArchivesComponent},
  { path: 'addalbum', component:AddAlbumComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
