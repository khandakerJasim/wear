// export const CartReducer = (state, action) => {
//   switch (action.type) {
//     case "SET_DATA": {
//       return { ...state, products: action.payload };
//     }
//     case "ADD_DATA_CARD": {
//       return { ...state, Cart: [...state.Cart, { ...action.payload, qty: 1 }] };
//     }
//     case "REMOVE_FROM_CART": {
//       return {
//         ...state,
//         Cart: { ...state.Cart.filter((c) => c.id !== action.payload.id) },
//       };
//     }
//     case "CHANGE_QTY": {
//       return {
//         ...state,
//         Cart: {
//           ...state.Cart.filter((c) =>
//             c.id === action.payload.id ? (c.qty = action.payload.qty) : c.qty
//           ),
//         },
//       };
//     }
//     case "PRODUCTS_DETAILS_ID": {
//       const product = action.payload;
//       return { ...state, productdetails: product };
//     }
//     default:
//       return state;
//   }
// };

// export const Productreducer = (action, type) => {};

export const Cartreducer = (state, action) => {
  switch (action.type) {
    case "ADD_DATA_CART": {
      return { ...state, Cart: [...state.Cart, { ...action.payload, qty: 1 }] };
    }
    case "REMOVE_FROM_CART": {
      return {
        ...state,
        Cart: state.Cart.filter((c) => c.id !== action.payload.id),
      };
    }
    case "CHANGE_QTY": {
      return {
        ...state,
        Cart: state.Cart.filter((c) =>
          c.id === action.payload.id ? (c.qty = action.payload.qty) : c.qty
        ),
      };
    }
    case "SET_PRODUCTS": {
      return { ...state, products: action.payload };
    }
    case "GET_PRODUCT_BYID": {
      const product = action.payload;
      return { ...state, productdetails: product };
    }

    default:
      return state;
  }
};

export const productReducer = (state, action) => {
  switch (action.type) {
    case "SORT_BYPRICE": {
      return { ...state, sort: action.payload };
    }
    case "FILTER_BYGENDER": {
      return { ...state, bygender: action.payload, bytype: "", bycatagory: "" };
    }
    case "FILTER_BYTYPE": {
      return { ...state, bytype: action.payload, bygender: "", bycatagory: "" };
    }
    case "FILTER_BYCATAGORY": {
      return { ...state, bycatagory: action.payload, bygender: "", bytype: "" };
    }
    case "FILTER_BYSTOCK": {
      return { ...state, bystock: !state.bystock };
    }
    case "FITER_BYFIRSTDELIVERY": {
      return { ...state, byfirstdelivery: !state.byfirstdelivery };
    }
    case "FILTER_BYSEARCH": {
      return { ...state, bysearchquery: action.payload };
    }
    case "CLEARDATA": {
      return { bystock: false, byrating: 0, byfirstdelivery: false };
    }
    case "FILTER_BYRATING": {
      return { ...state, byrating: action.payload };
    }

    default:
      return state;
  }
};
