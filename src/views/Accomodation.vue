<template>
  <ion-page>
    <ion-header>
    </ion-header>
    <ion-content class="ion-padding">
      <ion-grid fixed>
        <ion-row>
          <ion-col size="12">
            <ion-card>
              <img style="width:100%;" src="/assets/popup_header.jpg" />
              <ion-card-header>
                <ion-card-subtitle>Slieve Russell</ion-card-subtitle>
                <ion-card-title>Rooms Reserved For Wedding Guests + Wedding-Rate Discount</ion-card-title>
              </ion-card-header>
              <ion-card-content>
                Currently all regular rooms are booked out in the Slieve Russell for the 17th September. So, in order to book a room you must <b>ring</b> the hotel as we have 40 rooms set aside for the wedding.
                Please mention to the receptionist that you are going to our wedding in order to get access to these rooms plus to receive any discount that is available. Rate is €87.50 per person sharing or €127.50 for single occupancy. 
                Breakfast is included. Full refund given if room is cancelled more than 48 hours before date, a €65 cancellation fee if cancelled within 48 hours, and full payment needed if cancelled on the day. Credit Card details needed to secure room or €65 deposit if you dont have a credit card. 
                Payment of room not needed until arrival/checkout.
              </ion-card-content>
            </ion-card>
          </ion-col>
          
        </ion-row>
        <ion-row>
          <ion-col size="12" size-md size-Xl="6">
            <ion-card>
              <ion-card-header>
                <ion-card-title>AirBnB</ion-card-title>
              </ion-card-header>
              <ion-card-content>
                Check out the list <a href="https://www.airbnb.ie/s/Ballyconnell--Ireland/homes?tab_id=home_tab&refinement_paths%5B%5D=%2Fhomes&date_picker_type=calendar&checkin=2021-09-17&checkout=2021-09-18&adults=2&source=structured_search_input_header&search_type=user_map_move&ne_lat=54.19913526589589&ne_lng=-7.4023442950439176&sw_lat=54.047630781197306&sw_lng=-7.753563472290011&zoom=12&search_by_map=true&flexible_trip_dates%5B%5D=august&flexible_trip_lengths%5B%5D=weekend_trip&place_id=ChIJbaB95Y5rXkgR4OQxl6nHAAo">here</a>
              </ion-card-content>
            </ion-card>
          </ion-col>
          <ion-col size="12" size-md size-Xl="6">
            <ion-card>
              <ion-card-header>
                <ion-card-title>Other Hotel Recommendations</ion-card-title>
              </ion-card-header>
              <ion-card-content>
                Check out the list <a href="https://secure.booking.com/mywishlist.html?aid=304142&tflv=0&wl=2wZGTyMjOVDu4IRKqphS5LyGvwo&&">here</a>
                <br/>
                We recommend in particular "The Angler's Rest"
              </ion-card-content>
            </ion-card>
          </ion-col>
        </ion-row>
        <ion-row>
          <ion-col size="12" size-md size-Xl="6">
            <ion-card>
              <ion-card-header>
                <ion-card-title>Other</ion-card-title>
              </ion-card-header>
              <ion-card-content>
                Another place not listed on booking.com or AirBnb is <a href="https://www.google.com/maps/place/Carnagh+House/@54.114627,-7.6340906,17z/data=!4m9!3m8!1s0x485e6950452f0829:0x7c9bd4f4c9a60d36!5m3!1s2021-09-17!4m1!1i2!8m2!3d54.1146088!4d-7.6318993">Carnagh House</a>
              </ion-card-content>
            </ion-card>
          </ion-col>   
           <ion-col size="12" size-md size-Xl="6">
            <ion-card>
              <ion-card-header>
                <ion-card-title>Still Stuck?</ion-card-title>
              </ion-card-header>
              <ion-card-content>
                Please contact David or Nora and they will help you orgainise some alterntive accomodation somewhere. 
                Or if you are trying to orgainise a bus back to Charlestown and need to contact other guests from Charlestown let us know and we can help.
              </ion-card-content>
            </ion-card>
          </ion-col>          
        </ion-row>
      </ion-grid>
    </ion-content>
  </ion-page>
</template>

<script>
import { 
  IonRow, IonCol, IonPage, IonHeader, IonContent, IonGrid, IonCard, IonCardContent, 
  IonCardTitle, IonCardHeader
} from '@ionic/vue';

export default {
  data () {
    return {
      attending: 'no'
    }
  },
  components: {
    IonRow, IonCol, IonPage, IonHeader, IonContent, IonGrid, IonCard, IonCardContent,
    IonCardTitle, IonCardHeader
  }
}
</script>

<style scoped>

 ion-card{
   --background: white;
   --color: black
 }
 ion-grid{
  --ion-grid-width-xs: 100%;
 }

</style>