import axios from "axios";

// import db from "../../server/routes/db.js";

// configure axios to reject promises only for status codes higher than 500
axios.defaults.validateStatus = status => {
  return status < 500;
};

export default async function useHandleSignInClick(username, navigate) {
  try {
    const res = await axios.get(`login/${username}`);
    if (!res) return;
    navigate("/chat", { replace: false, state: username }); // Later edit replace value to true
    return res.data;
  } catch (err) {
    // Handle error
    // Axios error/ Access denied
    return;
  }
}

// if (!res) {
//   return
//   // Access denied, you can display a nice red error message here
// }
