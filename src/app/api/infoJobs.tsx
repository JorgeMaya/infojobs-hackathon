import { OAuth2 } from "infojobs-auth-library";
import { useState } from "react";

const AccessToken = () => {
  const auth = new OAuth2({
    clientId: "5ebdeed04f9d4033b9ba0af474b512e8",
    clientSecret: "DGyla1qL6PHLUW94H8qtWOtw1ej5q27q51ypBKLhpFPHtmpxHZ",
    redirectUri: "http://www.infojobs.net/core/oauth2vc/index.xhtml",
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
      "a5928852-d44b-4389-bdce-5bf01168742f"
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
// https://www.infojobs.net/api/oauth/user-authorize/index.xhtml?scope=MY_APPLICATIONS,CANDIDATE_PROFILE_WITH_EMAIL,CANDIDATE_READ_CURRICULUM_SKILLS,CV&client_id=5ebdeed04f9d4033b9ba0af474b512e8&redirect_uri=http://www.infojobs.net/core/oauth2vc/index.xhtml&response_type=code
