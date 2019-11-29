import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

    constructor() { }

    public whoWeAreText: string = `Trico was founded in 1987 in Scarborough, ME by three parters with experience in pulp equipment OEM.
        In 1994, Trico opened and office and fabrication shop in Pensacola, FL to better serve mills in the Southeast.
        The quality and consistency of our work has resulted in long term relationships with many of our customers,
        which allows our customers to benefit from our knowledge and familiarity with their specific equipment and operations.\n\n
        Trico Mechanical Contractors is a maintenance service and outage company serving the pulp and paper industry since 1987.
        With three regional locations, our emergency response time is minimal. Typically we're on-site within 24 hours.`;

    ngOnInit() {
    }

}
