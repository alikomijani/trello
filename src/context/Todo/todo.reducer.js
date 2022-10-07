function todoReducer(state = [], action) {
  const { type, payload } = action;
  switch (type) {
    case todoActions.add: {
      return [...state, { ...payload, id: Math.random() * 1000 }];
    }
    case todoActions.update: {
      return state.map((item) =>
        item.id === payload.id ? { ...item, ...payload } : item
      );
    }
    case todoActions.remove: {
      return state.filter((item) => item.id !== payload.id);
    }
    case todoActions.move: {
      return state.map((item) =>
        item.id === payload.id ? { ...item, category: payload.category } : item
      );
    }
    case todoActions.removeByCategory: {
      return state.filter((item) => item.category !== payload.category);
    }
    default:
      return state;
  }
}
export const todoActions = {
  add: "ADD_TO_DO",
  update: "UPDATE_TO_DO",
  remove: "REMOVE_TO_DO",
  move: "MOVE_TO_DO",
  removeByCategory: "REMOVE_CATEGORY",
};
export default todoReducer;
