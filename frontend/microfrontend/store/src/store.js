// some code for global-storage here. For example:
/**
 * import { createStore } from 'redux';
 *
 * const initialState = {
 *   places: [],
 *   user: null,
 * };
 *
 * function rootReducer(state = initialState, action) {
 *   switch (action.type) {
 *     case 'ADD_PLACE':
 *       return { ...state, cart: [...state.places, action.payload] };
 *     case 'SET_USER':
 *       return { ...state, user: action.payload };
 *     default:
 *       return state;
 *   }
 * }
 *
 * const store = createStore(rootReducer);
 * export default store;
 */