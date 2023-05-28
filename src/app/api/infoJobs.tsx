const { OAuth2 } = require('infojobs-auth-library');
import config from '../config';

const auth = new OAuth2({
    clientId: config.clientId,
    clientSecret: config.clientSecret,
    redirectUri: config.redirectUri,
});
// Generate the url that will be used for the consent dialog.
const authUrl = auth.generateAuthUrl({
    responseType: 'code',
    scope: ["MY_APPLICATIONS,CANDIDATE_PROFILE_WITH_EMAIL,CANDIDATE_READ_CURRICULUM_SKILLS,CV",],
});

export async function getToken (state: string) {
  
  const token = await auth.getAccessToken(state);
  console.log('token', token);
  await auth.refreshAccessToken(token.refresh_token);
  return token;
};