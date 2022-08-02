import { ComponentStory, ComponentMeta } from '@storybook/react';
import { MultiChoiceList } from './multi-choice-list';
import { userEvent, waitFor, within } from '@storybook/testing-library';
import Quiz from '../quiz/quiz';
import { expect } from '@storybook/jest';

export default {
  component: MultiChoiceList,
  title: 'MultiChoiceList',
} as ComponentMeta<typeof MultiChoiceList>;

const Template: ComponentStory<typeof MultiChoiceList> = (args) => (
  <Quiz onSubmit={() => {}}><MultiChoiceList {...args} /></Quiz>
);

const question = {
  groupName: '‘financiallyConfidentAnswerGroup',
  question: 'Would you describe yourself as being ‘financially confident’ person?',
  answers: [{
    text: 'Not at all. I feel uncomfortable talking about money and don’t have any sort of financial plan in place.',
    value: 'no'
  },
  {
    text: 'So-so. I’m good at managing my day-to-day finances, but I haven’t given much thought to my long-term financial goals.',
    value: 'maybe'
  },
  {
    text: 'Yes, I trust that the decisions I’ve made about money aims to ensure that my finances will support my goals and ambitions throughout life.',
    value: 'yes'
  }]
};

export const Default = Template.bind({});
Default.args = {...question};

export const SelectedAnswer = Template.bind({});
SelectedAnswer.args = {...question};
SelectedAnswer.play = async ({ args, canvasElement }) => {
  const canvas = within(canvasElement);

  const yesAnswer = await canvas.getByTestId('yes');
  await userEvent.click(yesAnswer);
  const answer = await canvas.getByText('Yes, I trust that the decisions I’ve made about money aims to ensure that my finances will support my goals and ambitions throughout life.');
  await waitFor(() => expect(answer).toBeInTheDocument());
};

