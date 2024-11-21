import { Component } from '@angular/core';
import { Platform } from '@ionic/angular';
import { Storage } from '@ionic/storage-angular';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
})
export class AppComponent {
  constructor(private platform: Platform, private storage: Storage,private router: Router) {
    this.initializeApp();
  }
  

  async initializeApp() {
    await this.platform.ready();
    await this.storage.create();
  }
  logout() {
    // Clear any session or token data if necessary
    console.log('Logging out...');
    this.router.navigate(['/login']); // Redirect to the login page
  }
  
}
