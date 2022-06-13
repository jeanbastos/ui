import { UiCheckboxThemeConfigModel } from '../'

const baseClass = 'form-check'

export const uiCheckboxThemeConfigDefaults: UiCheckboxThemeConfigModel = {
  cssClass: {
    main: baseClass,
    input: `${baseClass}-input ui-check-box appearance-none h-2 w-2 bg-white border border-[0.75px] border-secondary-400 rounded grid place-content-center`,
    label: `${baseClass}-label`,
    inline: `${baseClass}-inline`,
    switch: 'form-switch',
  },
}
