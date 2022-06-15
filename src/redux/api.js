import axios from 'axios';


export const fetchYoutube = async () => {
  const key = "AIzaSyD8CO3HqgmKUUwhHdahg0c9Xpw7_AR1Q7M ";
  const playlist = "PLfHCKVPanu7zyjtt09sovNP8_tjZFDGrz";
  const num = 6;
  const url = `https://www.googleapis.com/youtube/v3/playlistItems?part=snippet&key=${key}&playlistId=${playlist}&maxResults=${num}`;

  return await axios.get(url);
};


export const fetchProduct = async () => {
  const url = `${process.env.PUBLIC_URL}/DB/products.json`;

  return await axios.get(url);
}
// export const fetchMember = async () => {
//   const url = `${process.env.PUBLIC_URL}/DB/members.json`;

//   return await axios.get(url);
// };