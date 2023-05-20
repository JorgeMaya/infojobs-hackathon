import { OAuth2 } from "infojobs-auth-library";
import { useState } from "react";

const AccessToken = () => {
  const auth = new OAuth2({
    clientId: "deb39a1e4a73405a8154f3a6ea46999b",
    clientSecret: "DGHj/s8ogup2Ifbu13g/u/60ozT17RZp2y4Hypn9z4ur7qo8Rg",
    redirectUri: "https://verdant-melba-05d66d.netlify.app/",
  });
  //Authorization: Basic NWViZGVlZDA0ZjlkNDAzM2I5YmEwYWY0NzRiNTEyZTg6REd5bGExcUw2UEhMVVc5NEg4cXRXT3R3MWVqNXEyN3E1MXlwQktMaHBGUEh0bXB4SFo=
  
  const authUrl = auth.generateAuthUrl({
    responseType: "code",
    scope: [
      "MY_APPLICATIONS,CANDIDATE_PROFILE_WITH_EMAIL,CANDIDATE_READ_CURRICULUM_SKILLS,CV",
    ],
  });

  const getAccessToken = async () => {
    let getToken = await auth.getAccessToken(
      "dc3c089e-7ae9-46d7-9fde-39cd927d90fa"
    );
    
    return getToken;
    // await auth.refreshAccessToken(token.refresh_token);
  }
  return {
    getAccessToken
  };
}

export default AccessToken;

// {
//     "access_token": "4fefdfd7-b191-4b51-affc-988692a74705",
//     "expires_in": 43199,
//     "refresh_token": "2602b966-cdcf-44c6-a737-28f2fdf8b9d8",
//     "token_type": "undefined"
// }
//AUTHORIZATION CODE
// https://www.infojobs.net/api/oauth/user-authorize/index.xhtml?scope=MY_APPLICATIONS,CANDIDATE_PROFILE_WITH_EMAIL,CANDIDATE_READ_CURRICULUM_SKILLS,CV&client_id=deb39a1e4a73405a8154f3a6ea46999b&redirect_uri=https://verdant-melba-05d66d.netlify.app/&response_type=code
