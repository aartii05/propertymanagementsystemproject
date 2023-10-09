import { Component,OnInit,NgModule } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import {PropertyService} from '../property.service';
import {AddPropertyComponent} from '../add-property/add-property.component'
import {Property} from '../property';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
showIntro:any;
  ngOnInit(){

    }

     constructor(private router: Router){
        this.router.events.subscribe(event => {
        if (event instanceof NavigationEnd) {
          const currentRoute = this.router.url;
          if (currentRoute === '/home') {
            this.showIntro = true;
          }
          else
          {
             this.showIntro = false;
          }                                      }
          });
      }


}
