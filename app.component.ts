import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  array:string[] = ["./assets/pink.png",
  "./assets/business-process-management.jpg", 
  "./assets/prcs_anlystools.jpg", 
  "./assets/X_Steps_in_a_Business_Process_Management_Lifecycle-01.png"];

  tab: number = 1;
  subTab: number = 1;
  isFlipped: boolean = false;

  tabChange(event: any) {
    this.tab = event;
    if(event === 3) {
      this.subTab = 1;
    }
  }

  gridStyle = {
    width: '100%',
    textAlign: 'center'
  };

  subTabChange(event: any) {
    this.subTab = event;
  }

  rotateCard(event: boolean) {
    this.isFlipped = event;
  }
}