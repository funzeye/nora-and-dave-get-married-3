<template>
  <ion-page>
    <ion-header>
    </ion-header>
    <ion-content class="ion-padding">
      <ion-grid fixed>
        <ion-row>
          <ion-col size="12" size-md size-Xl="4">
            <ion-card>
              <ion-card-header>
                <ion-card-title>AirBnB</ion-card-title>
              </ion-card-header>
              <ion-card-content>
                Check out the list <a href="https://www.airbnb.ie/s/Ballyconnell--Ireland/homes?tab_id=home_tab&refinement_paths%5B%5D=%2Fhomes&date_picker_type=calendar&checkin=2021-09-17&checkout=2021-09-19&adults=2&source=structured_search_input_header&search_type=unknown&ne_lat=54.16230206608746&ne_lng=-7.426634379882785&sw_lat=54.01066270284711&sw_lng=-7.7778535571288785&zoom=12&search_by_map=true">here</a>
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
  --ion-grid-width-xs:              100%;
 }
</style>
