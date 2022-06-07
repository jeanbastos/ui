import { UiRadioThemeConfigModel } from '../'

const baseClass = 'form-check'

export const uiRadioThemeConfigDefaults: UiRadioThemeConfigModel = {
  cssClass: {
    main: 'form-check m-1',
    input: `${baseClass}-input appearance-none rounded-full h-1 w-1 bg-white checked:bg-secondary-400 ring-1 ring-secondary-400 ring-offset-4 ring-offset-white transition duration-20 mr-1 cursor-pointer`,
    label: `${baseClass}-label inline-block text-gray-800`,
    inline: `${baseClass}-inline`,
    switch: 'form-switch',
  },
}
