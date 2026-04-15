/**
 * @fixture
 * Component: <reason-card>
 * Description: Default, selected, and disabled states
 */
export const reasonCardDefault = {
  reasonId: 'fees',
  label: 'The fees are too high',
  isSelected: false,
  isDisabled: false,
};

export const reasonCardSelected = {
  reasonId: 'fees',
  label: 'The fees are too high',
  isSelected: true,
  isDisabled: false,
};

export const reasonCardDisabled = {
  reasonId: 'switching-bank',
  label: 'I am switching to another bank',
  isSelected: false,
  isDisabled: true,
};
