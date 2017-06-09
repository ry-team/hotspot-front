<template>
  <div class="main">
    <div class="header">
      <img src="../assets/img/caravan-logo.jpg" class="logo-image">
      <img src="../assets/img/uzonline-logo.png" class="logo-image">
    </div>
    <div class="title">
      <h2>Caravan HotSpot Wi-Fi</h2>
    </div>
    <div class="plan-selector">
      <div>Тариф</div>
      <div>
        <div class="btn-group" role="group" aria-label="...">
          <button
            type="button"
            :class="{btn: true, 'btn-default':true, 'btn-info': plan === 0}"
            @click="plan = 0"
          >
            Бесплатно
          </button>
          <!--<button-->
          <!--type="button"-->
          <!--:class="{btn: true, 'btn-default':true, 'btn-info': plan === 1}"-->
          <!--@click="plan = 1"-->
          <!--&gt;-->
          <!--Платно-->
          <!--</button>-->
        </div>
      </div>
    </div>

    <div class="input-row">
      <div>
        <label for="phone">Телефон</label>
      </div>
      <div class="input-row-right">
        <masked-input
          id="phone"
          v-model="phone"
          mask="\+\998 (\91)111-11-11"
          placeholder="+998 (9_)___-__-__"
          type="tel"
        >
        </masked-input>

        <button v-if="!codeSent" v-on:click="sendCode" class="btn btn-default" v-bind:disabled="!phoneValid">
          Получить код
        </button>

        <span v-if="codeSent && !smsTimer" v-on:click="sendCode">Отправить снова</span>
      </div>
    </div>

    <div class="input-row">
      <div>
        <label for="sms-code">Код из СМС</label>
      </div>
      <div class="input-row-right">
        <input type="text" id="sms-code" placeholder="00000" v-model="smsCode"/>
        <button
          class="btn btn-default"
          v-bind:disabled="!smsCode || !phoneValid"
          v-on:click="checkSms"
        >
          Войти в интернет
        </button>
      </div>
    </div>
  </div>
</template>

<script>
  import MaskedInput from 'vue-masked-input';
  import axios from 'axios';

  export default {
    name: 'phone-confirmation',
    data() {
      return {
        plan: 0,
        phone: null,
        smsCode: null,
        smsTimer: null,
        smsTimerLeft: 30,
        codeSent: false,
        phoneValid: false,
      };
    },
    watch: {
      phone(phone) {
        this.phoneValid = phone && !phone.includes('_');
      },
    },
    methods: {
      createSmsTimer() {
        this.smsTimer = setInterval(() => {
          this.smsTimerLeft -= 1;

          if (this.smsTimerLeft === 0) {
            this.clearSmsTimer();
          }
        }, 1000);
      },
      clearSmsTimer() {
        clearTimeout(this.smsTimer);
        this.smsTimer = null;
        this.smsTimerLeft = 30;
      },
      sendCode() {
        const params = new URLSearchParams();
        params.append('number', this.phone);
        params.append('type', this.plan.toString());

        axios.post(
          'http://dev.ry-team.com:8000/api/sms/send/',
          params,
          {
            headers: {
              'Content-type': 'application/x-www-form-urlencoded',
            },
          })
          .then(({ data: { status, msg } }) => {
            if (status === 'error') {
              alert(msg); // eslint-disable-line
            }
          });

        this.codeSent = true;
        this.createSmsTimer();
      },
      checkSms() {
        const params = new URLSearchParams();
        params.append('number', this.phone);
        params.append('code', this.smsCode);

        axios.post(
          'http://dev.ry-team.com:8000/api/sms/check/',
          params,
          {
            headers: {
              'Content-type': 'application/x-www-form-urlencoded',
            },
          })
          .then(({ data: { status, msg } }) => {
            if (status === 'error') {
              alert(msg); // eslint-disable-line
            } else {
              window.location.href = 'https://mover.uz/watch/dtGnw9rm/';
            }
          });
      },
    },
    components: {
      MaskedInput,
    },
  };
</script>

<style scoped>
  @import "../assets/css/phone-confirmation.css";
</style>
