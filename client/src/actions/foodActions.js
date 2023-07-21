import axios from "axios";

export const getAllFood = () => async (dispatch) => {
  dispatch({ type: "GET_FOOD_REQUEST" });

  try {
    const response = await axios.get("/api/food/getallfood");
    console.log(response);
    dispatch({ type: "GET_FOOD_SUCCESS", payload: response.data });
  } catch (error) {
    dispatch({ type: "GET_FOOD_FAILED", payload: error });
    console.log(error);
  }
};

export const getFoodById = (foodId) => async (dispatch) => {
  dispatch({ type: "GET_FOODBYID_REQUEST" });

  try {
    const response = await axios.post("/api/food/getfoodbyid", { foodId });
    console.log(response);
    dispatch({ type: "GET_FOODBYID_SUCCESS", payload: response.data });
  } catch (error) {
    dispatch({ type: "GET_FOODBYID_FAILED", payload: error });
  }
};

export const filterFoods = (searchkey, category) => async (dispatch) => {
  dispatch({ type: "GET_FOOD_REQUEST" });

  try {
    let filteredFood;
    const response = await axios.get("/api/food/getallfood");
    filteredFood = response.data.filter((food) =>
      food.name.toLowerCase().includes(searchkey)
    );

    if (category !== "all") {
      filteredFood = response.data.filter(
        (food) => food.category.toLowerCase() === category
      );
    }
    dispatch({ type: "GET_FOOD_SUCCESS", payload: filteredFood });
  } catch (error) {
    dispatch({ type: "GET_FOOD_FAILED", payload: error });
  }
};

export const addFood = (food) => async (dispatch) => {
  dispatch({ type: "ADD_FOOD_REQUEST" });
  try {
    const response = await axios.post("/api/food/addfood", { food });
    console.log(response);
    dispatch({ type: "ADD_FOOD_SUCCESS" });
  } catch (error) {
    dispatch({ type: "ADD_FOOD_FAILED", payload: error });
  }
};

export const editFood = (editedFood) => async (dispatch) => {
  dispatch({ type: "EDIT_FOOD_REQUEST" });
  try {
    const response = await axios.post("/api/food/editfood", { editedFood });
    console.log(response);
    dispatch({ type: "EDIT_FOOD_SUCCESS" });
    window.location.href = "/admin/foodlist";
  } catch (error) {
    dispatch({ type: "EDIT_FOOD_FAILED", payload: error });
  }
};

export const deleteFood = (foodId) => async (dispatch) => {
  try {
    const response = await axios.post("/api/food/deletefood", foodId);
    alert("Food Deleted Successfully");
    console.log(response);
    window.location.reload();
  } catch (error) {
    alert("Something went wrong");
    console.log(error);
  }
};
