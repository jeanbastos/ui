import { action } from '@storybook/addon-actions'
import { BootstrapVariants, ButtonSizeVariants } from '@unicodernsui/core'
import { UiCodeHighlight } from '@unicodernsui/code-highlight'
import { UiButton, UiButtonModel } from '../'
import { UiButtonDoc } from '../dev'

export default {
  title: 'UI/Bootstrap/Button',
  component: UiButton,
  argTypes: {
    label: { control: { type: 'text' } },
    size: {
      control: { type: 'select' },
      options: Object.values(ButtonSizeVariants),
    },
    variant: {
      control: { type: 'select' },
      options: Object.values(BootstrapVariants),
    },
    toggle: { control: { type: 'boolean' } },
    ['aria:role']: { name: 'role(aria)', control: { type: 'text' } },
  },
  parameters: {
    docs: {
      page: UiButtonDoc,
    },
  },
}

type StoryModel =
  | UiButtonModel
  | {
      label: string
    }

const Template = (args: StoryModel) => ({
  components: { UiButton, UiCodeHighlight },
  setup() {
    return { args }
  },
  methods: {
    toggle: action('toggle'),
  },
  template: `
    <ui-code-highlight>
      <ui-button :="args" @toggle="toggle" >{{ args.label }}</ui-button>
    </ui-code-highlight>
  `,
})

const baseArgs: StoryModel = {
  label: 'Label',
  variant: BootstrapVariants.Primary,
  size: ButtonSizeVariants.Medium,
  anchor: false,
  outline: false,
  active: false,
  toggle: false,
}

export const Anchor = Template.bind({})
Anchor.args = {
  ...baseArgs,
  label: 'Anchor',
  anchor: true,
}
Anchor.parameters = {
  docs: {
    source: {
      code: '<ui-button variant="primary" :anchor="true">Anchor</ui-button>',
    },
  },
}