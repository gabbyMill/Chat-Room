import axios from "axios";

export default async function handleSignInClick(inputComponentRef) {
  console.log(inputComponentRef.value);
  try {
    const res = await axios.get(`./${inputComponentRef.value}`);
    if (!res) {
      return;
      // Access denied, you can display a nice red error message here
    }
  } catch (err) {
    // Handle error
    return;
  }

  // Direct to chat-room path either here or in login page:
  return true;
}
