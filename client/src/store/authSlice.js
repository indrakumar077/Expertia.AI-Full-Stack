import axios from "axios";
const { createSlice } = require("@reduxjs/toolkit");

export const authSlice = createSlice({
  name: "auth",
  initialState: {
    data: {},
  },
  reducers: {
    loginData(state, action) {
      state.data = action.payload;
    },

    signupData(state, action) {
      state.data = action.payload;
    },

    logout(state, action) {
      return {
        ...state,
        data: {},
      };
    },

    AddTasks(state, action) {
      return {
        ...state,
        data: {
          ...state.data,
          user: {
            ...state.data.user,
            Tasks: [...state.data.user.Tasks, action.payload.task],
          },
        },
      };
    },
    RemoveTask(state, action) {
      return {
        ...state,
        data: {
          ...state.data,
          user: {
            ...state.data.user,
            Tasks: [],
          },
        },
      };
    },
  },
});

export const { loginData, signupData, logout, AddTasks, RemoveTask } =
  authSlice.actions;
export default authSlice.reducer;

const API = axios.create({ baseURL: "https://expertia-backend.onrender.com" });

export function loginFetch(LoginData) {
  return async function loginFetchThunk(dispatch, getstate) {
    try {
      const loginInfo = await API.post("/auth/login", LoginData);
      dispatch(loginData(loginInfo.data));
    } catch (e) {
      console.log(e);
    }
  };
}

export function Logout() {
  return async function loginFetchThunk(dispatch, getstate) {
    try {
      dispatch(logout());
    } catch (e) {
      console.log(e);
    }
  };
}

export function signupFetch(SignupData) {
  return async function signupFetchThunk(dispatch, getstate) {
    try {
      const signupInfo = await API.post("/auth/register", SignupData);
      dispatch(signupData(signupInfo.data));
    } catch (e) {
      console.log(e);
    }
  };
}

export function AddTask(id, data) {
  return async function addTaskUser(dispatch, getstate) {
    try {
      const taskData = {
        task: data,
      };
      await API.put(`/task/${id}/addtask`, taskData);
      dispatch(AddTasks(taskData));
    } catch (error) {
      console.log(error);
    }
  };
}
export function RemoveAllTask(id, data) {
  return async function removeTaskUserThunk(dispatch, getstate) {
    try {
      await API.put(`/task/${id}/remove`);
      dispatch(RemoveTask());
    } catch (error) {
      console.log(error);
    }
  };
}
