import {
	Text,
	Flex,
	CategoryBar,
	Metric,
	Tracker,
	Color,
	Title,
	Bold,
} from "@tremor/react";

interface Tracker {
	color: Color;
	tooltip: string;
}

const website: Tracker[] = [
	{ color: "blue", tooltip: "Bajo" },
   { color: "blue", tooltip: "Medio" },
	{ color: "cyan", tooltip: "Alto" },
];

export function SkillComponent() {
	return (
		<div className="h-auto">
			<Title className="text-xl">Nombre Skill</Title>
			<Flex
				justifyContent="between"
				alignItems="center"
			>
				<Text className="text-3xl">
					<Bold>Medio</Bold>
				</Text>
				<Tracker data={website} className="h-5 w-20 mt-2 ml-4" />
			</Flex>
		</div>
	);
}
