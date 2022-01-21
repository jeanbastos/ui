import { provide } from 'vue'
import { action } from '@storybook/addon-actions'
import { setComponentThemeConfig, uiUseDarkThemeInjectionToken } from '@unicodernsui/core'
import { TailwindVariants } from '@unicodernsui/custom-theme'
import { twUiPaginationThemeConfigDefaults } from './tw-ui-pagination-theme.config'
import { UiPagination, UiPaginationModel } from '../'

export default {
  title: 'UI/Tailwind/Pagination',
  component: UiPagination,
  argTypes: {
    label: { control: { type: 'text' } },
    variant: {
      control: { type: 'select' },
      options: Object.values(TailwindVariants),
    },
  },
}

type StoryModel =
  | UiPaginationModel
  | {
      label: string
    }

const Template = (args: StoryModel, { globals }: { globals: any }) => ({
  components: { UiPagination },
  setup() {
    setComponentThemeConfig(UiPagination, twUiPaginationThemeConfigDefaults)

    if (globals.backgrounds && globals.backgrounds.value !== 'transparent') {
      provide(uiUseDarkThemeInjectionToken, true)
    }

    return { args }
  },
  methods: {
    click: action('click'),
  },
  template: `
    <ui-pagination :="args" @click="click" >{{ args.label }}</ui-pagination>
  `,
})

const baseArgs: StoryModel = {
  label: 'Label',
  variant: TailwindVariants.Blue,
}

export const Blue = Template.bind({})
Blue.args = {
  ...baseArgs,
  variant: TailwindVariants.Blue,
}

export const Pink = Template.bind({})
Pink.args = {
  ...baseArgs,
  variant: TailwindVariants.Pink,
}

export const Purple = Template.bind({})
Purple.args = {
  ...baseArgs,
  variant: TailwindVariants.Purple,
}
