'use client';

import { Button } from "@tremor/react";
import { getOfferDescriptionById } from "../services/githubAPI";

const handleClick = async (id: string) => {
   const res = await getOfferDescriptionById(id);
 }

export function GitHubComponent () {
   return (
      <div>
         <Button
				onClick={async (event) => {
					event.stopPropagation();
					await handleClick("JorgeMaya");
				}}
				size="xs"
				variant="secondary"
				color="gray"
			>
				Prueba
			</Button>
      </div>
   );
}
