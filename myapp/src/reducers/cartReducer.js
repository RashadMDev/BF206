export const cartReducer = (state, action) => {
      switch (action.type) {
            case 'INIT_CART':
                  return action.payload;

            case 'ADD_ITEM': {
                  const existingItem = state.find(item => item.id === action.payload.id);
                  if (existingItem) {
                        return state.map(item =>
                              item.id === action.payload.id
                                    ? { ...item, quantity: item.quantity + 1 }
                                    : item
                        );
                  } else {
                        return [...state, { ...action.payload, quantity: 1 }];
                  }
            }

            case 'INCREASE_QUANTITY':
                  return state.map(item =>
                        item.id === action.payload
                              ? { ...item, quantity: item.quantity + 1 }
                              : item
                  );

            case 'DECREASE_QUANTITY':
                  return state
                        .map(item =>
                              item.id === action.payload
                                    ? { ...item, quantity: item.quantity - 1 }
                                    : item
                        )
                        .filter(item => item.quantity > 0);

            case 'REMOVE_ITEM':
                  return state.filter(item => item.id !== action.payload);

            default:
                  return state;
      }
};