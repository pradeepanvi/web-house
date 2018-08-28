import { Skill } from "./project-skill.model";
import { Image } from "./project-img.model";
export class Project {
    public name:string;
    public detail:string; 
    public client:string; 
    public link:string; 
    public front_end:boolean; 
    public psd_to_html:boolean; 
    public html5_css3_less:boolean; 
    public jquery:boolean; 
    public pixel_perfect:boolean; 
    public responsive:boolean; 
    public seo_friendly:boolean; 
    public railo:boolean; 
    public testing:boolean; 
    public optimisation:boolean; 
    public thumb:string; 
    public main_img:string; 
    public slider_img1:string; 
    public slider_img2:string;
    
    constructor(name:string, detail:string, client:string, link:string, front_end:boolean, psd_to_html:boolean, html5_css3_less:boolean, jquery:boolean, pixel_perfect:boolean, responsive:boolean, seo_friendly:boolean, railo:boolean, testing:boolean, optimisation:boolean, thumb:string, main_img:string, slider_img1:string, slider_img2:string){
        this.name = name;
        this.detail = detail;
        this.client = client;
        this.link = link;
        this.front_end = front_end;
        this.psd_to_html = psd_to_html;
        this.html5_css3_less = html5_css3_less;
        this.jquery = jquery;
        this.pixel_perfect = pixel_perfect;
        this.responsive = responsive;
        this.seo_friendly = seo_friendly;
        this.railo = railo;
        this.testing = testing;
        this.optimisation = optimisation;
        this.thumb = thumb;
        this.main_img = main_img;
        this.slider_img1 = slider_img1;
        this.slider_img2 = slider_img2;
    }
}