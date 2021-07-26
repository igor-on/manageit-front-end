import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TableComponent } from './routes/table/table.component';
import { BacklogComponent } from './routes/backlog/backlog.component';
import { TaskFormComponent } from './forms/task-form/task-form.component';
import { SprintFormComponent } from './forms/sprint-form/sprint-form.component';
import { AddTaskFormComponent } from './forms/add-task-form/add-task-form.component';
import { ProjectSettingsComponent } from './routes/project-settings/project-settings.component';


const routes: Routes = [
  {path: '', redirectTo: '/table', pathMatch: 'full'},
  {path: 'table', component: TableComponent, children: [
    {path: 'edit/:id', component: TaskFormComponent}
  ]},
  {path: 'backlog', component: BacklogComponent, children: [
    {path: 'sprint/edit/:id', component: SprintFormComponent},
    {path: 'task/edit/:id', component: TaskFormComponent},
    {path: 'task/add/:id', component: AddTaskFormComponent}
  ]}, 
  {path: 'project/settings', component: ProjectSettingsComponent}
]


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }