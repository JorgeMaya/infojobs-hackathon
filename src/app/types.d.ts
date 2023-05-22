export interface GitUserDetails {
      login: string;
      html_url: string;
      avatar_url: string;
      bio: string;
      public_repos: number;
}

export interface GitRepo {
   full_name: string;
   language: string;
   html_url: string;
   description: string;
}