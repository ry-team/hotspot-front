<template>
  <div class="main">
    <div class="header">
      <img src="../assets/img/uzonline-logo.png" class="logo-image">
      <img src="../assets/img/caravan-logo.jpg" class="logo-image">
    </div>
    <div class="title">
      <h2>Подтверждение номера</h2>
      Чтобы получить доступ в интернет, пожалуйста, введите номер телефона
    </div>
    <div class="phone-block">
      <div class="phone-input-block">
        <label for="phone">Телефон</label>
        <masked-input
          id="phone"
          v-model="phone"
          mask="\+\998 (\91)111-11-11"
          placeholder="+998 (9_)___-__-__"
          type="tel"
        >
        </masked-input>
      </div>
      <div class="send-code-button-block">
        <button class="button send-code-button">Отправить код</button>
      </div>
    </div>
    <div class="controls">
      <div>
        <label>
          <input type="checkbox"/>
          У меня уже есть код
        </label>
      </div>

      <div class="access-type-select">
        <!--<div>-->
        <!--<label><input type="radio" name="access_type" checked/>Бесплатный интернет</label>-->
        <!--</div>-->
        <!--<div>-->
        <!--<label><input type="radio" name="access_type"/>Платный интернет</label>-->
        <!--</div>-->

        <div class="radio-button-row">
          <div>
            <input id="free_type" type="radio" name="access_type" checked/>
          </div>
          <div>
            <label for="free_type">Бесплатный интернет</label>
          </div>
        </div>
        <div class="radio-button-row">
          <div>
            <input id="non_free_type" type="radio" name="access_type" checked/>
          </div>
          <div>
            <label for="non_free_type">Платный интернет</label>
          </div>
        </div>
      </div>
    </div>
    <div class="submit-button">
      <button class="button proceed-button">Продолжить</button>
    </div>
  </div>
</template>

<script>
  import MaskedInput from 'vue-masked-input';

  export default {
    name: 'phone-confirmation',
    data() {
      return {
        phone: null,
      };
    },
    components: {
      MaskedInput,
    },
  };
</script>

<style scoped>
  @import "../assets/css/phone-confirmation.css";
</style>
