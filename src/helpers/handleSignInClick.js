import axios from "axios";

export default async function handleSignInClick(inputComponentRef) {
  console.log(inputComponentRef.value);
  const res = await axios.get(`./${inputComponentRef.value}`);
  if (!res) {
    return;
    // Access denied, you can display a nice red error message here
  }
  // Direct to chat-room path here:
}
