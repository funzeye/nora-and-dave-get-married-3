<template>
  <ion-app>
    <ion-router-outlet />
  </ion-app>
</template>

<script lang="js">
import { IonApp, IonRouterOutlet } from '@ionic/vue';
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'App',
  components: {
    IonApp,
    IonRouterOutlet
  }
});
</script>

<style>
@font-face {
   font-family: 'Abril Fatface';
   src: url('/assets/fonts/AbrilFatface-Regular.ttf');
   font-weight: 700;
   font-style: normal;
 }

 @font-face {
   font-family: 'Oswald';
   src: url('/assets/fonts/Oswald-VariableFont_wght.ttf');
   font-weight: 500;
   font-style: normal;
 }

:root{
  --ion-background-color:#9b4937;
  --ion-text-color: white;
}

.alert-rsvp .alert-title, .alert-rsvp .alert-sub-title{
    color: black;
}

.alert-rsvp .alert-head{
    background: #f0f0f0;
    margin-bottom: 16px;
}

.alert-rsvp .alert-wrapper{
    background: white;
}

</style>