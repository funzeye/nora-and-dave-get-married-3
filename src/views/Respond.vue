<template>
  <ion-page>
      <ion-header>
          <ion-toolbar>
              <ion-title>R.S.V.P.</ion-title>
          </ion-toolbar>
      </ion-header>
      <ion-content class="ion-padding">
        <ion-row class="ion-justify-content-center">
            <ion-col size="12" size-md size-lg="6" size-xl="4">
                <form @submit.prevent="respond">
                    <ion-item>
                        <ion-label position="floating">Your Name</ion-label>
                        <ion-input required type="text" inputmode="text" autocapitalize autofocus name="from_name"></ion-input>
                    </ion-item>
                    <ion-item>
                        <ion-label position="floating">Your Email (Optional)</ion-label>
                        <ion-input type="email" inputmode="email" name="reply_to_email"></ion-input>
                    </ion-item>
                    <ion-item>
                        <ion-label position="floating">Your Phone</ion-label>
                        <ion-input required type="tel" inputmode="tel" name="reply_to_phone"></ion-input>
                    </ion-item>
                    <ion-item>
                        <ion-text>Can You Attend?</ion-text>
                        <ion-segment @ionChange="segmentChanged($event)" :value="attending">
                            <ion-segment-button value="yes">
                                <ion-label>YES</ion-label>
                            </ion-segment-button>
                            <ion-segment-button value="no">
                                <ion-label>NO</ion-label>
                            </ion-segment-button>
                        </ion-segment>
                    </ion-item>
                    <ion-item class="ion-hide">
                        <ion-input type="hidden" inputmode="text" name="attendance_yesno" :value="attending"></ion-input>
                    </ion-item>
                    <ion-item>
                        <ion-label position="floating">Your Message (Optional)</ion-label>
                        <ion-textarea rows="6" name="message"></ion-textarea>
                    </ion-item>
                    <ion-button size="large" expand="full" fill="solid" type="submit">Submit</ion-button>
                </form>
            </ion-col>
        </ion-row>
      </ion-content>
  </ion-page>
</template>

<script>
import { 
  IonRow, IonCol, IonPage, IonHeader, IonButton, IonContent, IonSegment, IonSegmentButton,
  IonItem, IonText, IonTextarea, IonToolbar, IonLabel, IonInput, IonTitle, 
  loadingController, alertController
} from '@ionic/vue';

import emailjs from 'emailjs-com'

export default {
  data () {
    return {
      attending: 'no'
    }
  },
  components: {
    IonRow, IonCol, IonPage, IonHeader, IonButton, IonContent, IonSegment, IonSegmentButton,
    IonItem, IonText, IonTextarea,  IonToolbar, IonLabel, IonInput, IonTitle
  },
  props: {
    timeout: { type: Number, default: 1000 }
  },
  methods: {
    respond (e) {
      return loadingController
        .create({
          message: 'Please wait...'
        })
        .then(loading => {
          loading.present()
          console.log('submitting response via email...')
          console.log('e.target', e.target)
          emailjs.sendForm('contact_service', 'template_O3DNc5ap', e.target, 'user_b8KIlWloLxJwN8P4SkITn')
            .then((result) => {
              loading.dismiss()
              console.log('SUCCESS!', result.status, result.text)
              return alertController
                .create({
                  cssClass: 'alert-rsvp',
                  header: 'Message Sent',
                  subHeader: 'Mark your Calendar!',
                  message: 'Your RSVP was sent successfully. See you on the 17th of September!!',
                  buttons: ['OK']
                })
                .then(a => a.present().then(this.$router.replace('home')))
            }, (error) => {
              loading.dismiss()
              console.log('FAILED...', error)
              return alertController
                .create({
                  cssClass: 'alert-rsvp',
                  header: 'ERROR',
                  // subHeader: 'Subtitle',
                  message: 'Sorry there was an issue seding your message. Please try again later.',
                  buttons: ['OK']
                })
                .then(a => a.present())
            })
        })
    },
    segmentChanged (ev) {
      this.attending = ev.detail.value
      console.log('Segment changed', ev)
    }
  }
}
</script>

<style scoped>
ion-col{
  --ion-background-color: white;
  --ion-text-color: black;
  border-radius: 5px;
}
ion-button {
  margin-left: 0;
  margin-right: 0;
}

ion-segment-button{
    --background-checked: #f0f0f0;
}
</style>
