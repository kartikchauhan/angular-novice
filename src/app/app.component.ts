import { Component } from '@angular/core';

@Component({
    selector: 'app-root',
    templateUrl: 'app.component.html',
    styleUrls: ['./app.component.css']
})

export class AppComponent {

    currentTabNumber: number = 1;

    switchToClikedTab(currentTab)
    {
        console.log("In switchToClickedTab " + currentTab);
        this.currentTabNumber = currentTab;
    }
}
