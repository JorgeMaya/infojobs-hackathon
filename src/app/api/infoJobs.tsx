const { OAuth2 } = require('infojobs-auth-library');
import config from '../config';

const auth = new OAuth2({
  clientId: config.clientId,
  clientSecret: config.clientSecret,
  redirectUri: config.redirectUri,
});
let tokenData: any;
// Generate the url that will be used for the consent dialog.
const authUrl = auth.generateAuthUrl({
  responseType: 'code',
  scope: ["MY_APPLICATIONS,CANDIDATE_PROFILE_WITH_EMAIL,CANDIDATE_READ_CURRICULUM_SKILLS,CV",],
});

export async function getToken(state: string) {

  const token = await auth.getAccessToken(state);
  console.log('token', token);
  await auth.refreshAccessToken(token.refresh_token);
  tokenData = token;
  return token;
};

export async function getOffers() {
  const request = await fetch(`${config.baseUrl}api/9/offer`, {
    method: 'GET',
    headers: {
      Authentication: `Basic ${config.authenticationCode}`
    }
  });
  const response = await request.json();
  return response.items;
}

export async function getCVS() {
  const request = await fetch(`${config.baseUrl}api/2/curriculum`, {
    method: 'GET',
    headers: {
      Authentication: `Basic ${config.authenticationCode} Bearer ${tokenData.access_token}}`
    }
  });
  const response = await request.json();
  return response; //array
}