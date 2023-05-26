const { OAuth2 } = require('infojobs-auth-library');
import { useContext } from 'react';
import config from '../config';
import AppContext from '../context/app-context';
const { state } = useContext(AppContext);

var refresh_token;
if (typeof window !== 'undefined') {
  // Perform localStorage action
  refresh_token = localStorage.getItem("refresh_token") ?? '';
}

var getlocal;

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

export async function getToken () {
  
  const token = await auth.getAccessToken(state);
  
  if(token.error === 'invalid_grant' && typeof window !== 'undefined') { //PASAR A USEEFECT PARA QUE SE VEA PRO!
    const refresh = await auth.refreshAccessToken(token.refresh_token);
    refresh_token = refresh.refresh_token;
    getlocal= localStorage.setItem("refresh_token", refresh_token);
    console.log('refresh', refresh);
    return refresh_token;
  } else {
    refresh_token = token.refresh_token;
    getlocal= localStorage.setItem("refresh_token", refresh_token);
    console.log('token', token);
  }
  
  return refresh_token;
};

// https://www.infojobs.net/api/oauth/user-authorize/index.xhtml?scope=MY_APPLICATIONS,CANDIDATE_PROFILE_WITH_EMAIL,CANDIDATE_READ_CURRICULUM_SKILLS,CV&client_id=deb39a1e4a73405a8154f3a6ea46999b&redirect_uri=https://verdant-melba-05d66d.netlify.app/&response_type=code
