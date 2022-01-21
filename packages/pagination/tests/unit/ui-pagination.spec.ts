import { shallowMount } from '@vue/test-utils'
import { BootstrapVariants } from '@unicodernsui/core'
import { UiPagination } from '../../src'

describe('ui-pagination.vue', () => {
  it('should render when props are set', () => {
    const wrapper = shallowMount(UiPagination, {
      props: { variant: BootstrapVariants.Primary },
    })

    expect(wrapper.exists()).toBeTruthy()
  })
})
