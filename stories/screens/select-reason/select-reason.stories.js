import { selectReasonDefault } from '../../../src/screens/select-reason/fixtures/default.js';
import { selectReasonError } from '../../../src/screens/select-reason/fixtures/error.js';
import { selectReasonEmpty } from '../../../src/screens/select-reason/fixtures/empty.js';

export default {
  title: 'Screens / Select Reason',
  component: 'feature-select-reason',
};

export const Default = { args: { ...selectReasonDefault } };
export const Loading = { args: { isLoading: true }, argTypes: { isLoading: { control: false } } };
export const Error = { args: { hasError: true, ...selectReasonError }, argTypes: { hasError: { control: false } } };
export const Empty = { args: { ...selectReasonEmpty }, argTypes: { reasons: { control: false } } };
