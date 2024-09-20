import { Component, ElementRef, ViewChild, viewChild } from '@angular/core';
import { LocationService } from '../services/location.service';
import { GoogleMap } from '@capacitor/google-maps';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
 
  constructor(private locationSRV : LocationService) {
    //Esta funcion toma la coordenada, pero en la web falla en android no xD
   //this.getLocation();
 
  }
  
  /*
     lat:19.283997, 
     lng:-69.188183
  */
 //Pones en las variables la coordenada que quieres mostrar
  latitude : number = 19.283997
  longitude :number = -69.188183
  mapTypeId :any = 'satellite'

  title = 'App Map'
  position= {
    lat:this.latitude, 
    lng:this.longitude
  }
zoom = 10
  label = {
    color: 'blue',
    text: 'Tu estas aqui'
  }
  getLocation() {
    this.locationSRV.getPosition().then(pos => {
        this.latitude = pos.lat;
        this.longitude = pos.lng;
    });    
  }

  changeMapMode(tipo:string){
    if(tipo == 'satellite'){
        this.mapTypeId = 'satellite'
    }else if(tipo == 'roadmap'){
      this.mapTypeId = 'roadmap'
    }else if(tipo == 'terrain'){
      this.mapTypeId = 'terrain'
    }
  }

}
