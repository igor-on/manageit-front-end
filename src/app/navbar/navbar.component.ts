import { Component, OnInit } from '@angular/core';
import { Project, ProjectService } from '../services/project.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  projects: Project[]

  constructor(private projectService: ProjectService) { }

  getAllProjects() {
    this.projectService.getAllProjects().subscribe(val => this.projects = val)
  }

  ngOnInit(): void {
    this.getAllProjects()
  }

}
