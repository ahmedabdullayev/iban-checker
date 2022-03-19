import { shallowMount } from '@vue/test-utils'
import IbanListChecker from '@/components/IbanListChecker.vue'
import router from "@/router";
const wrapper = shallowMount(IbanListChecker, {
    global:{
        plugins: [router]
    }
})

const event = {
    target: {
        files: [
            {
                name: 'ibans.text',
                size: 50000,
                type: 'text/plain',
            },
        ],
    },
}
describe('IbanListChecker.vue', () => {
    it('makes a call to persist the text on text upload', () => {
        const fileReaderSpy = jest.spyOn(FileReader.prototype, 'readAsText').mockImplementation(() => null)
        wrapper.vm.handleFileUpload(event)
        expect(fileReaderSpy).toHaveBeenCalledWith(event.target.files[0])
    })
    it('checks for button', async () => {
        await router.push('/')
        await router.isReady()
        expect(wrapper.find("#actual-btn").exists()).toBe(true)
    })

})
