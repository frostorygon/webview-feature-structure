/**
 * Router configuration for this feature.
 *
 * Each screen is a node. Transitions are edges with optional conditions.
 * The proprietary router component consumes this config object.
 */
export const flowConfig = {
  initialScreen: 'select-reason',
  screens: {
    'select-reason': {
      component: 'feature-select-reason',
      transitions: {
        onConfirm: 'confirm',
        onError: 'error',
      },
    },
    confirm: {
      component: 'feature-confirm',
      transitions: {
        onSuccess: 'success',
        onError: 'error',
        onBack: 'select-reason',
      },
    },
    success: {
      component: 'feature-success',
      transitions: {
        onClose: '__native_close__',
      },
    },
    error: {
      component: 'feature-error',
      transitions: {
        onRetry: 'select-reason',
        onClose: '__native_close__',
      },
    },
  },
};
