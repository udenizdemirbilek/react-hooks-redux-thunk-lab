export function fetchCats() {
    return function (dispatch) {
        dispatch({ type: "cats/catsLoading" });
        fetch("https://learn-co-curriculum.github.io/cat-api/cats.json")
          .then((response) => response.json())
          .then((cats) =>
            dispatch({
              type: "cats/catsLoaded",
              payload: cats.images,
            })
          );
      };
}

const initialState = {
    entities: [], //array of cats
    status: "idle", //loading status for fetch
  };

export default function catsReducer(state = initialState, action) {
  switch (action.type) {
    case "cats/catsLoaded":
      return {
        ...state,
        status: "idle",
        entities: action.payload,
      };
    case "cats/catsLoading":
      return {
        ...state,
        status: "loading",
      };
    default:
      return state;
  }
}
