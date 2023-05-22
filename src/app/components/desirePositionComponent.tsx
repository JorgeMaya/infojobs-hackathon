import {
	Button,
	Flex,
	Title,
	Text,
	Divider,
	Metric,
	Bold,
} from "@tremor/react";

export function DesirePositionComponent(props: {}) {
	return (
		<div className="h-auto">
			<Flex justifyContent="start" className="space-x-4">
				<Title className="truncate">Posición deseada</Title>
			</Flex>
			<Flex className="mt-3">
				<Text>Nombre de la posición</Text>
			</Flex>
			<Divider />
			<Text className="truncate">
				<Bold>Salario Deseado</Bold>
			</Text>
			<Metric>$235,0000.00</Metric>
			<Text>mínimo aceptado $235,0000.00</Text>
			{/* <Flex justifyContent="end">
			<Button
				size="sm"
				variant="secondary"
				iconPosition="right"
				className="mt-4"
				onClick={() => window.open(gitUserDetails.html_url, "_blank")}
			>
				Buscar Vacantes
			</Button>
         </Flex> */}
		</div>
	);
}
