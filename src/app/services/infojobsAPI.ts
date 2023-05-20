
const infoJobsTokenBasic = 'NWViZGVlZDA0ZjlkNDAzM2I5YmEwYWY0NzRiNTEyZTg6REd5bGExcUw2UEhMVVc5NEg4cXRXT3R3MWVqNXEyN3E1MXlwQktMaHBGUEh0bXB4SFo='
const infoJobsTokenBearer = '4fefdfd7-b191-4b51-affc-988692a74705'

export async function getInfoJobsOffers () {
   const res = await fetch('https://api.infojobs.net/api/6/candidate', {
     headers: {
       'Content-Type': 'application/json',
       Authorization: `Basic ${infoJobsTokenBasic}, Bearer ${infoJobsTokenBearer}`
     }
   })
 
   const item  = await res.json()
 
   return item
 }