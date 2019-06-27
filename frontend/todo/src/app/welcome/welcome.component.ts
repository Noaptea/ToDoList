import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { WelcomeDataService } from '../service/data/welcome-data.service';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})
export class WelcomeComponent implements OnInit {

  message = 'welcome message'
  name: string;

  constructor(private service: WelcomeDataService, private route: ActivatedRoute) { }

  ngOnInit() {
    this.name = this.route.snapshot.params['name']
  }

  getWelcomeMessage() {
    console.log(this.service.executeHelloWorldBeanService().subscribe())
    this.service.executeHelloWorldBeanService().subscribe();
  }

}
