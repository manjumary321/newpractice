import axios from 'axios';

async function getAccessTokenFromCode(code) {
  const { data } = await axios({
    // url: `https://oauth2.googleapis.com/token`,
    url: `https://local/3000`,
    method: 'post',
    data: {
      client_id: process.env.APP_ID_GOES_HERE,
      client_secret: process.env.APP_SECRET_GOES_HERE,
      redirect_uri: 'https://www.example.com/authenticate/google',
      grant_type: 'authorization_code',
      code,
    },
  });
  console.log(data); // { access_token, expires_in, token_type, refresh_token }
  return data.access_token;
};