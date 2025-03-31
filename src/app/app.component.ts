import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { AboutComponent } from "./about/about.component";
import { SkillsComponent } from "./skills/skills.component";
import { ProjectsComponent } from "./projects/projects.component";
import { ResumeComponent } from "./resume/resume.component";
import { FooterComponent } from "./footer/footer.component";

@Component({
  selector: 'app-root',
  imports: [AboutComponent, SkillsComponent, ProjectsComponent, ResumeComponent, FooterComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Portfolio_SPA';
  // Method to download the resume
  downloadResume() {
    const link = document.createElement('a');
    link.href = 'assets/resume.pdf';  // Path to the file in the assets folder
    link.download = 'resume.pdf';  // Corrected the filename for download
    link.click();
  }
  
}
