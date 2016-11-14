import {Component, OnInit, OnDestroy} from '@angular/core';
import {Router, ActivatedRoute} from '@angular/router';
import { HttpModule } from '@angular/http';
import './operators';
import {Subscription } from 'rxjs';


/**
 * This class represents the main application component. Within the @Routes annotation is the configuration of the
 * applications routes, configuring the paths for the lazy loaded components (HomeComponent, AboutComponent).
 */
@Component({
  moduleId: module.id,
  selector: 'sd-app',
  templateUrl: 'app.component.html',
  styleUrls: ['mainstyle.css']
})

export class AppComponent implements OnInit, OnDestroy {
  state: string;
  city: string;
  private sub: any;

  //TODO: Debugging parameter routing issues
  ngOnInit() {
    /* this.sub = this.route.params.subscribe(params => {
      this.id = +params['state']; // (+) converts string 'id' to a number

      // In a real app: dispatch action to load the details here.
    }); */
  }

  ngOnDestroy() {
  }
  //TODO:  Replace this hard-code data with real API data when API call is available
  listingName = {
    city: 'Wichita',
    state: 'KS'
  };

  approximateLoc = 'Nearby';

  //TODO:  Replace this hard-coded data with API data when it is available
  topRatedAmenities = [
    {
      amenity: 'Restaurants',
      faIcon: 'fa fa-cutlery',
      count: '30'
    },
    {
      amenity: 'Groceries',
      faIcon: 'fa fa-shopping-basket',
      count: '25'
    },
    {
      amenity: 'Banks',
      faIcon: 'fa fa-university',
      count: '30'
    }
  ];

  maintopRatedAmenities = this.topRatedAmenities.concat(
    [
      {
        amenity: 'Other Amenities',
        faIcon: 'fa fa-ellipsis-h',
        count: '30'
      }
    ]
  );
}
