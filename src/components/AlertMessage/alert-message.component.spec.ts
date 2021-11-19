import { mount } from '@cypress/vue'
import UiAlert from './alert-message.component.vue'
import { ContextualVariants } from '../../types'

describe('UiAlert', () => {
  it('Check color', () => {
    const title = 'Title'

    mount(UiAlert, {
      props: {
        show: true,
        animate: true,
        ariaLabelCloseButton: title,
        dismissible: true,
        variant: ContextualVariants.Primary,
      },
    })

    cy.get('div').should('have.css', 'color', '#084298')
  })
})
