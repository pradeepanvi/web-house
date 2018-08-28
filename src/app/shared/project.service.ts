import { Subject } from "rxjs/Subject";
import { Project } from "./project.model";

export class ProjectService {
    projectsChanged = new Subject<Project[]>();
    private projects: Project[] = [];

    setProjects(projects: Project[]){
        this.projects = projects;
        this.projectsChanged.next(this.projects.slice());
    }

    getProjects(){
        console.log(this.projects);
        return this.projects.slice();
    }
    getProject(index:number){
        return this.projects[index];
    }
    addProject(project: Project){
        this.projects.push(project);
        this.projectsChanged.next(this.projects.slice());
    }
    updateProject(index:number, newProject: Project){
        this.projects[index] = newProject;
        this.projectsChanged.next(this.projects.slice());
    }
    deleteProject(index:number){
        this.projects.splice(index, 1);
        this.projectsChanged.next(this.projects.slice());
    }
}

// [
//     new Project(
//         'Achva1',
//         'Freelance Front-End project for Pixl8 Interactive PSD to HTML, HTML5, LESS, CSS3, JavaScript, jQuery, Responsive, Testing, Railo 30+ templates', 
//         'Pixl8 Digital Agency London', 
//         'www.charteredbanker.com', 
//         true,
//         true,
//         true,
//         true,
//         true,
//         true,
//         true,
//         true,
//         true,
//         true,
//         'https://upload.wikimedia.org/wikipedia/commons/b/be/Burger_King_Angus_Bacon_%26_Cheese_Steak_Burger.jpg',
//         'https://upload.wikimedia.org/wikipedia/commons/b/be/Burger_King_Angus_Bacon_%26_Cheese_Steak_Burger.jpg',
//         'https://upload.wikimedia.org/wikipedia/commons/b/be/Burger_King_Angus_Bacon_%26_Cheese_Steak_Burger.jpg',
//         ''),
//     new Project(
//         'Achva2',
//         'Freelance Front-End project for Pixl8 Interactive PSD to HTML, HTML5, LESS, CSS3, JavaScript, jQuery, Responsive, Testing, Railo 30+ templates', 
//         'Pixl8 Digital Agency London', 
//         'www.charteredbanker.com', 
//         true,
//         true,
//         true,
//         true,
//         true,
//         true,
//         true,
//         true,
//         true,
//         true,
//         'https://upload.wikimedia.org/wikipedia/commons/b/be/Burger_King_Angus_Bacon_%26_Cheese_Steak_Burger.jpg',
//         'https://upload.wikimedia.org/wikipedia/commons/b/be/Burger_King_Angus_Bacon_%26_Cheese_Steak_Burger.jpg',
//         'https://upload.wikimedia.org/wikipedia/commons/b/be/Burger_King_Angus_Bacon_%26_Cheese_Steak_Burger.jpg',
//         ''),
// ];