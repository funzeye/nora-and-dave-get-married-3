<template>
  <ion-page>
    <ion-header class="ion-no-border">
      <!--<ion-toolbar>
        <ion-title>Nora and Dave Get Married</ion-title>
      </ion-toolbar>-->
    </ion-header>
    <ion-content class="ion-padding">
      <ion-grid class="ion-align-items-center">
        <ion-row style="width:100%">
          <ion-col>
            <!--<svg width="100%" height="200px" viewBox="0 0 350 350">
              <path id="curve" d="M 0 300 A 75 50 0 1 1 350 300" />
              <text class="ion-text-uppercase">
                <textPath xlink:href="#curve">&nbsp;&nbsp;Save The Date</textPath>
              </text>

            </svg>-->
            <div>
            <h2 class="save-the-date-text ion-text-uppercase">Save The Date</h2>
            </div>
          </ion-col>
        </ion-row>
        <ion-row class="ion-justify-content-center">
          <ion-col class="ion-align-self-center ion-text-center">
            <div>
              <h1 style="font-size:66px" class="ion-text-uppercase">Nora &amp; Dave</h1>
            </div>
          </ion-col>
        </ion-row>
        <ion-row class="save-date-divider-container ion-justify-content-center">
          <ion-col class="ion-align-self-center">
            <div class="save-date-divider"></div>
          </ion-col>
        </ion-row>
        <ion-row class="ion-justify-content-center">
          <ion-col class="ion-text-center">
            <div>
              <h2 class="ion-text-uppercase">Friday, 17th September 2021</h2>
            </div>
          </ion-col>
        </ion-row>
        <!--<ion-row class="ion-justify-content-center">
          <ion-col class="ion-text-center">
            <div>
              <ion-button fill="outline" size="large" color="light" @click="navigate()">R.S.V.P.</ion-button>
            </div>
          </ion-col>
        </ion-row>-->
      </ion-grid>
    </ion-content>
  </ion-page>
</template>

<script>
import { 
  IonRow, IonGrid, IonCol, IonPage, IonHeader, IonContent
} from '@ionic/vue';

export default {
  name: 'home',
  components: {
    IonRow, IonGrid, IonCol, IonPage, IonHeader, IonContent
  },
  methods: {
    navigate: function () {
      this.$router.push('respond')
    }
  }
}
</script>

<style scoped>
h1{
  font-family: 'Abril Fatface';
}
h2{
  font-family: 'Oswald';
  letter-spacing: 1.25px;
}
.save-date-divider-container{
  width: 40%;
  text-align: center;
}
.save-date-divider{
  max-width: 300px;
  border-bottom:1px solid white;
  margin: 0 auto;
}
ion-grid{
  height: 90%;
  justify-content: center;
  display: flex;
  flex-direction: column;
}
svg{
  margin-bottom: -45px;
}
path{
  fill:transparent;
}
text{
  fill:  #f3a3a8;
  font-size: 59px;
  font-weight: bold;
}

.save-the-date-text {
  font-size: 36px;
  color: #f3a3a8;
  margin-bottom: -20px;
  text-align: center;
}

</style>
