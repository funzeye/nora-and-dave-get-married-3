<template>
  <ion-page>
    <ion-content>
      <ion-tabs>  
          <ion-tab-bar slot="bottom">
            <ion-tab-button tab="home" href="/tabs/home">
              <ion-icon :icon="calendar"></ion-icon>
              <ion-label>Date</ion-label>
            </ion-tab-button>

            <ion-tab-button tab="seating" href="/tabs/seating">
              <ion-icon :icon="restaurant"></ion-icon>
              <ion-label>Seating</ion-label>
            </ion-tab-button>

            <ion-tab-button tab="ceremony" href="/tabs/ceremony">
              <ion-icon :icon="notifications"></ion-icon>
              <ion-label>Ceremony</ion-label>
            </ion-tab-button>
            
            <ion-tab-button tab="venue" href="/tabs/venue">
              <ion-icon :icon="location"></ion-icon>
              <ion-label>Venue</ion-label>
            </ion-tab-button>

            <ion-tab-button tab="accomodation" href="/tabs/accomodation">
              <ion-icon :icon="bed"></ion-icon>
              <ion-label>Accomodation</ion-label>
            </ion-tab-button>
          </ion-tab-bar>
      </ion-tabs>
    </ion-content>
  </ion-page>
</template>

<script>
import { 
  IonTabs, IonTabBar, IonTabButton, 
  IonContent, IonIcon, IonLabel, IonPage
} from '@ionic/vue';

import { calendar, location, bed, notifications, restaurant } from 'ionicons/icons'

export default {
  name: 'Tabs',
  setup () {
    return {
      calendar, location, bed, notifications, restaurant
    }
  },
  components: {
    IonTabs,
    IonTabBar,
    IonTabButton,
    IonIcon,
    IonLabel,
    IonContent,
    IonPage
  }
}
</script>

<style scoped>
    ion-tab-button{
        --color: white;
        --color-focused: #f3a3a8;
        --color-selected: #f3a3a8;
    }
</style>
