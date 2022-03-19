import { shallowMount } from '@vue/test-utils'
import IbanChecker from '@/components/IbanChecker.vue'
import router from "@/router";
const wrapper = shallowMount(IbanChecker, {
  global:{
    plugins: [router]
  }
})
describe('IbanChecker.vue', () => {
  it('check for input field', async () => {
    await router.push('/')
    await router.isReady()

    expect(wrapper.find("#floatingInputIban").exists()).toBe(true)
  })
  it('Right IBAN should return true', async () => {
    await router.push('/')
    await router.isReady()
    await wrapper.setData({iban: "EE851297854133244471"})
    const wrapperFind = wrapper.find("#btn-submit")
    wrapperFind.trigger('click')
    expect(wrapper.vm.right).toBe(true)
  })
  it('Wrong IBAN should return false', async () => {
    await router.push('/')
    await router.isReady()
    await wrapper.setData({iban: "EE85129785--4133244471"})
    const wrapperFind = wrapper.find("#btn-submit")
    wrapperFind.trigger('click')
    expect(wrapper.vm.right).toBe(false)
  })
})
