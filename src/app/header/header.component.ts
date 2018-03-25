import { Component, Output, EventEmitter } from "@angular/core";

@Component({
    selector: 'app-header',
    templateUrl: 'header.component.html',
    styleUrls: ['./header.component.css']
})

export class HeaderComponent
{
    @Output() currentTab = new EventEmitter();

    openTab(currentTab: number)
    {
        console.log(currentTab + "clicked");
        this.currentTab.emit(currentTab);
    }
}