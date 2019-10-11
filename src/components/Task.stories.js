import { action } from '@storybook/addon-actions';
import { storiesOf } from '@storybook/react';
import React from 'react';
import Task from './Task';

export const task = {
  id: '1',
  title: 'Test Task',
  state: 'TASK_INBOX',
  updatedAt: new Date(2018, 0, 1, 9, 0)
};

export const actions = {
  onPinTask: action('onPinTask'),
  onArchieveTask: action('onArchiveTask')
};

storiesOf('Task', module)
  .add('default', () => <Task task={task} {...actions}></Task>)
  .add('pinned', () => <Task task={{ ...task, state: 'TASK_PINNED' }} {...actions}></Task>)
  .add('archived', () => <Task task={{ ...task, state: 'TASK_ARCHIVED' }} {...actions}></Task>);
