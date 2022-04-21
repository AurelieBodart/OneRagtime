import { Component } from '@angular/core';
import { DeviceDetectorService } from 'ngx-device-detector';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'OneRagtimeTest';
  constructor(private deviceService: DeviceDetectorService) {
  }

  ngOnInit() {
    var elem = document.getElementById('graphs')

      if(this.deviceService.isDesktop()) {
      elem.classList.add("contentWeb")
      elem.classList.remove("contentMobile")
    } else if (this.deviceService.isMobile()) {
      elem.classList.add("contentMobile")
      elem.classList.remove("contentWeb")
    }
  }
}
