module.exports =  {
    /**
     * INFOJOBS API
     */
    refreshToken: process.env.REFRESH_TOKEN,
    baseUrl: process.env.BASE_URL || 'https://www.infojobs.net/',
    clientId: process.env.CLIENT_ID || "deb39a1e4a73405a8154f3a6ea46999b",
    clientSecret: process.env.CLIENT_SECRET || "DGHj/s8ogup2Ifbu13g/u/60ozT17RZp2y4Hypn9z4ur7qo8Rg",
    redirectUri: process.env.REDIRECT_URI ||"https://verdant-melba-05d66d.netlify.app/",
}