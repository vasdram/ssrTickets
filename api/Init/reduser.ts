import { HYDRATE } from "next-redux-wrapper";
import { handleActions } from "redux-actions";


export default handleActions({
    [HYDRATE]: (state: any, action: any) => ({
        ...state, ...action.payload 
    }),
   
  
  }, [])