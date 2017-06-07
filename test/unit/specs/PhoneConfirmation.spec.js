import Vue from 'vue';
import PhoneConfirmation from '@/components/PhoneConfirmation';

describe('PhoneConfirmation.vue', () => {
  it('should render correct contents', () => {
    const Constructor = Vue.extend(PhoneConfirmation);
    const vm = new Constructor().$mount();
    expect(vm.$el.querySelector('.title h2').textContent)
      .to.equal('Подтверждение номера');
  });
});
