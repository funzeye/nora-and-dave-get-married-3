<template>
  <ion-page>
    <ion-header>
    </ion-header>
    <ion-content class="ion-padding">
      <ion-grid fixed>
        <ion-row>
          <ion-col size="12">
            <ion-card>
              <img style="width:100%" src="/assets/WhatsApp Image 2021-09-13 at 10.22.54.jpeg" />
            </ion-card>
          </ion-col>
        </ion-row> 
        <ion-row>
          <ion-col size="12">
            <ion-card>
              <img style="width:100%" src="/assets/WhatsApp Image 2021-09-13 at 10.22.55.jpeg" />
            </ion-card>
          </ion-col>
        </ion-row>         
      </ion-grid>
    </ion-content>
  </ion-page>
</template>

<script>
import { 
  IonRow, IonCol, IonPage, IonHeader, IonContent, IonGrid, IonCard
} from '@ionic/vue';

export default {
  data () {
    return {
      attending: 'no'
    }
  },
  components: {
    IonRow, IonCol, IonPage, IonHeader, IonContent, IonGrid, IonCard
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