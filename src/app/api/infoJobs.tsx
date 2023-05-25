const { OAuth2 } = require('infojobs-auth-library');
import config from '../config';
const xhr = new XMLHttpRequest();
var refresh_token = localStorage.getItem("refresh_token") ?? '';
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

// async function refreshAccessToken(refresh_token: string) {
//   const refresh = await fetch('https://www.infojobs.net/oauth/authorize?' + new URLSearchParams({
//     grant_type: 'refresh_token',
//     client_id: config.clientId,
//     client_secret: config.clientSecret,
//     refresh_token,
//     redirect_uri: config.redirectUri
//   }))
//   const response = await refresh.json();
// 	return response;
// }

export async function getToken () {
  // const res = await getAuth();
  // console.log(res);
  
  const token = await auth.getAccessToken('ae90fdff-294f-4cb6-817e-3ead7d8652fe');
  
  if(token.error === 'invalid_grant') {
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

//AUTHORIZATION CODE
async function getAuth() {
  const url = 'https://www.infojobs.net/api/oauth/user-authorize/index.xhtml?scope=MY_APPLICATIONS,CANDIDATE_PROFILE_WITH_EMAIL,CANDIDATE_READ_CURRICULUM_SKILLS,CV&client_id=deb39a1e4a73405a8154f3a6ea46999b&redirect_uri=https://verdant-melba-05d66d.netlify.app/&response_type=code';
  const auth = await fetch(url,{ method: 'GET' })
  .then(async response => {
    console.log(response);
    // HTTP 301 response
    // HOW CAN I FOLLOW THE HTTP REDIRECT RESPONSE?
    if (response.url) {
      const res = await fetch(response.url,{ method: 'GET' });
      console.log('res', res);
      // window.location.href = response.url;
      // console.log('response.url', window.location.href);
    }
  })
  .catch(function(err) {
    console.info(err + " url: " + url);
  });
  // xhr.open("GET", url);

  // xhr.send();

  // xhr.onreadystatechange = function () {
  //   if (this.readyState === this.DONE) {
  //     console.log('Prueba url',this.responseURL);
  //     const prueba = new URL(window.location.href = this.responseURL);
  //     console.log('Prueba url', prueba);
  //     this.abort();
  //   }
  // };
}
// https://www.infojobs.net/api/oauth/user-authorize/index.xhtml?scope=MY_APPLICATIONS,CANDIDATE_PROFILE_WITH_EMAIL,CANDIDATE_READ_CURRICULUM_SKILLS,CV&client_id=deb39a1e4a73405a8154f3a6ea46999b&redirect_uri=https://verdant-melba-05d66d.netlify.app/&response_type=code
