import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Form, FormikHelpers } from 'formik';
import { useState } from 'react';
import { Demo } from './demo';
import { userEvent, waitFor, within } from '@storybook/testing-library';

export default {
  component: Demo,
  title: 'QuizDemo',
} as ComponentMeta<typeof Demo>;

const Template: ComponentStory<typeof Demo> = () => (
  <Demo/>
);

export const Default = Template.bind({});
Default.args = {};
Default.play = async ({ args, canvasElement }) => {
  const canvas = within(canvasElement);

  await userEvent.type(canvas.getAllByRole('input')[0], 'hi@example.com');
  await userEvent.type(canvas.getAllByRole('input')[1], 'supersecret');
  await userEvent.click(canvas.getByRole('button'));

  //await waitFor(() => expect(args.onSubmit).toHaveBeenCalled());
};

//const Submitted = Template.bind({});
//Submitted.args = {};
/*
Submitted.play = async ({ args, canvasElement }) => {
  const canvas = within(canvasElement);

  await userEvent.type(canvas.getAllByRole('input')[0], 'hi@example.com');
  await userEvent.type(canvas.getAllByRole('input')[1], 'supersecret');
  await userEvent.click(canvas.getByRole('button'));

  //await waitFor(() => expect(args.onSubmit).toHaveBeenCalled());
};*/

