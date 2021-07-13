<template>
  <ion-page>
    <ion-header>
    </ion-header>
    <ion-content class="ion-padding">
      <ion-grid fixed>
        <ion-row>
          <ion-col size="12" size-md size-Xl="4">
            <ion-card>
              <img src="/assets/slieve_russell.jpg" />
              <ion-card-header>
                <ion-card-subtitle>Hotel</ion-card-subtitle>
                <ion-card-title>Slieve Russell Hotel</ion-card-title>
              </ion-card-header>
              <ion-card-content>
                4-star hotel located on a 300 acre estate in Ballyconnell, Co. Cavan. Facilities include a Golf Course and Spa. Over 200 guest rooms.
              </ion-card-content>
            </ion-card>
          </ion-col>
          <ion-col size="12" size-md size-Xl="8">
            <ion-card>
              <ion-card-header>
                <ion-card-title>More Info</ion-card-title>
              </ion-card-header>
              <ion-card-content>
                We recommend booking your room as quickly as possible as there will be another wedding on in the hotel that night so the hotel will fill up fast. We will provide a list of alternative accomodation options shortly.
              </ion-card-content>
            </ion-card>
            <ion-card>
              <ion-card-header>
                <ion-card-title>Rooms Reserved For Wedding Guests + Wedding-Rate Discount</ion-card-title>
              </ion-card-header>
              <ion-card-content>
                Currently all regular rooms are booked out in the Slieve Russell for the 17th September. So, in order to book a room you must ring the hotel as we have 40 rooms set aside for the wedding.
                Please mention to the receptionist that you are going to our wedding in order to get access to these rooms plus to receive any discount that is available. Rate is €87.50 per person sharing or €127.50 for single occupancy. 
                Breakfast is included. Full refund given if room is cancelled more than 48 hours before date, a €65 cancellation fee if cancelled within 48 hours, and full payment needed if cancelled on the day. Credit Card details needed to secure room or €65 deposit if you dont have a credit card. 
                Payment of room not needed until arrival/checkout.
              </ion-card-content>
            </ion-card>
            <ion-card>
              <ion-card-header>
                <ion-card-title>What about COVID?</ion-card-title>
              </ion-card-header>
              <ion-card-content>
                The hotel have confirmed that if wedding guest limits are in place on the date of our wedding you will be able to get a full refund.
              </ion-card-content>
            </ion-card>
            <ion-card>
              <ion-card-header>
                <ion-card-title>Directions</ion-card-title>
              </ion-card-header>
              <ion-card-content>
                <h2>From Mayo:</h2>
                <p>
                  Head north east towards Carrick On Shannon via Frenchpark. In Carrick go into town and take turn for Ballinamore.
                  Continue straight out of Carrick for about 6 kilometres. Careful not to miss the right turn for Ballinamore (R209) off the main road.
                  Continue straight through Ballinamore up the hill.
                  About 8 kilometres outside Ballinamore take a left turn for Ballyconnell (R205).
                  When you reach Ballyconnell town centre turn right and continue out of town for about 3 kilometres. The hotel is on the right.
                </p>
                <br>
                <h2>From Dublin:</h2>
                <p>
                  Follow N3 out of Dublin all the way to Belturbet (just before the border with Northern Ireland).
                  Along the way there is NO need to go into Cavan Town, stay on the N3 bypass.
                  You will reach a roundabout just outside Belturbet.
                  Take a left at that roundabout to go to Ballyconnell.
                  If you reach Northern Ireland you've gone too far!!
                  Stay on this road all the way to Ballyconnell.
                  The hotel will be on your left before you reach the town.
                </p>
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
  IonCardSubtitle, IonCardTitle, IonCardHeader
} from '@ionic/vue';

export default {
  data () {
    return {
      attending: 'no'
    }
  },
  components: {
    IonRow, IonCol, IonPage, IonHeader, IonContent, IonGrid, IonCard, IonCardContent,
     IonCardSubtitle, IonCardTitle, IonCardHeader
  }
}
</script>

<style scoped>

 ion-card{
   --background: white;
   --color: black
 }
 ion-grid{
  --ion-grid-width-xs:              100%;
 }
</style>
