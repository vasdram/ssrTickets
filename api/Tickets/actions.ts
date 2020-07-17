import { createAction } from 'redux-actions';

const getTicketsRequest: any = createAction('TICKETS_GET_REQUEST');
const getTicketsSuccess: any = createAction('TICKETS_GET_SUCCESS');
const getTicketsFail: any = createAction('TICKETS_GET_FAILURE');

export {
  getTicketsRequest,
  getTicketsSuccess,
  getTicketsFail,
};
