import { StoryFn, Meta } from '@storybook/react'

import { Review } from './Review'

export default {
  title: 'Components/Review',
  component: Review,
  argTypes: {
    rating: {
      control: {
        type: 'range',
        min: 0,
        max: 5,
        step: 0.1,
      },
    },
  },
} as Meta<typeof Review>

const Template: StoryFn<typeof Review> = (args) => <Review {...args} />

export const Default = Template.bind({})

export const Excellent = Template.bind({})
Excellent.args = {
  rating: 5,
}

export const VeryGood = Template.bind({})
VeryGood.args = {
  rating: 4.3,
}

export const Adequate = Template.bind({})
Adequate.args = {
  rating: 2.5,
}

export const VeryPoor = Template.bind({})
VeryPoor.args = {
  rating: 1,
}
