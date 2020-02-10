import axios from "axios";

const instance = axios.create({
  baseURL: "https://react-hooks-update-69684.firebaseio.com/"
});

export default instance;
