export default { title: 'Flows' };

/** ✅ Happy Path — user selects reason → confirms → sees success */
export const HappyPath = {};

/** ✅ API Unavailable → Error — backend is down */
export const APIUnavailableError = {};

/** ✅ Session Expired → Error — token expires mid-flow */
export const SessionExpiredError = {};
