function categoryReducer(state = [], action) {
  const { type, payload } = action;
  switch (type) {
    case categoryActions.add:
      return [...state, { id: Math.random() * 1000, ...payload }];
    case categoryActions.remove: {
      return state.filter((item) => item.id !== payload.id);
    }
    case categoryActions.update: {
      return state.map((item) => (item.id === payload.id ? payload : item));
    }
    default:
      return state;
  }
}

export const categoryActions = {
  add: "ADD",
  update: "UPDATE",
  remove: "REMOVE",
};

export default categoryReducer;
