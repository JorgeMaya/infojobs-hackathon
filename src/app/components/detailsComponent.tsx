import {
	Card,
	List,
	ListItem,
	Text,
	Bold,
	Flex,
	Title,
	Button,
	Grid,
	Icon,
	Col,
} from "@tremor/react";
import { SkillComponent } from "./skillComponent";

export function DetailsComponent() {
	return (
		<div className="px-6 py-10 space-y-12">
			<Flex justifyContent="between" alignItems="end" className="">
				<img
					className="w-[8rem] h-[8rem] object-cover l:w-[10rem] l:h-[10rem] rounded-full"
					src="https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=755&q=80"
					alt=""
				/>
				<div className="mt-4 md:mx-4 md:mt-0">
					<Title className="text-2xl font-semibold text-gray-800 lg:text-3xl text-end">
						Nombre <br /> Apellido
					</Title>

					<Text className="text-lg font-semibold text-gray-500 capitalize text-end">
						Situación laboral
					</Text>
					<Flex justifyContent="end" className="mt-2">
						<span className="inline-block w-1 h-1 mr-1 bg-blue-500 rounded-full"></span>
						<span className="inline-block w-3 h-1 mr-1 bg-blue-500 rounded-full"></span>
						<span className="inline-block w-40 h-1 bg-blue-500 rounded-full"></span>
					</Flex>
				</div>
			</Flex>

			<Flex justifyContent="start" alignItems="start" className="-mx-4">
				<span className="inline-block p-2 text-blue-500 bg-blue-100 rounded-xl md:mx-4 ">
					<svg
						xmlns="http://www.w3.org/2000/svg"
						fill="none"
						viewBox="0 0 24 24"
						strokeWidth={1.5}
						stroke="currentColor"
						className="w-6 h-6"
					>
						<path
							strokeLinecap="round"
							strokeLinejoin="round"
							strokeWidth="2"
							d="M20.25 14.15v4.25c0 1.094-.787 2.036-1.872 2.18-2.087.277-4.216.42-6.378.42s-4.291-.143-6.378-.42c-1.085-.144-1.872-1.086-1.872-2.18v-4.25m16.5 0a2.18 2.18 0 00.75-1.661V8.706c0-1.081-.768-2.015-1.837-2.175a48.114 48.114 0 00-3.413-.387m4.5 8.006c-.194.165-.42.295-.673.38A23.978 23.978 0 0112 15.75c-2.648 0-5.195-.429-7.577-1.22a2.016 2.016 0 01-.673-.38m0 0A2.18 2.18 0 013 12.489V8.706c0-1.081.768-2.015 1.837-2.175a48.111 48.111 0 013.413-.387m7.5 0V5.25A2.25 2.25 0 0013.5 3h-3a2.25 2.25 0 00-2.25 2.25v.894m7.5 0a48.667 48.667 0 00-7.5 0M12 12.75h.008v.008H12v-.008z"
						/>
					</svg>
				</span>

				<div className="mt-4 md:mx-4 md:mt-0">
					<Title className="text-xl font-semibold text-gray-700">
						Datos personales
					</Title>
					<Text className="text-sm text-gray-500">Dirección</Text>
					<Text className="text-sm text-gray-500 ">Teléfono</Text>
					<Text className="text-sm text-gray-500 ">Correo</Text>
					<Text className="text-sm text-gray-500 ">Fecha de nacimiento</Text>
				</div>
			</Flex>

			<Flex justifyContent="start" alignItems="start" className="-mx-4">
				<span className="inline-block p-2 text-blue-500 bg-blue-100 rounded-xl md:mx-4 ">
					<svg
						xmlns="http://www.w3.org/2000/svg"
						fill="none"
						viewBox="0 0 24 24"
						strokeWidth={1.5}
						stroke="currentColor"
						className="w-6 h-6"
					>
						<path
							strokeLinecap="round"
							strokeLinejoin="round"
							strokeWidth="2"
							d="M20.25 14.15v4.25c0 1.094-.787 2.036-1.872 2.18-2.087.277-4.216.42-6.378.42s-4.291-.143-6.378-.42c-1.085-.144-1.872-1.086-1.872-2.18v-4.25m16.5 0a2.18 2.18 0 00.75-1.661V8.706c0-1.081-.768-2.015-1.837-2.175a48.114 48.114 0 00-3.413-.387m4.5 8.006c-.194.165-.42.295-.673.38A23.978 23.978 0 0112 15.75c-2.648 0-5.195-.429-7.577-1.22a2.016 2.016 0 01-.673-.38m0 0A2.18 2.18 0 013 12.489V8.706c0-1.081.768-2.015 1.837-2.175a48.111 48.111 0 013.413-.387m7.5 0V5.25A2.25 2.25 0 0013.5 3h-3a2.25 2.25 0 00-2.25 2.25v.894m7.5 0a48.667 48.667 0 00-7.5 0M12 12.75h.008v.008H12v-.008z"
						/>
					</svg>
				</span>

				<div className="mt-4 md:mx-4 md:mt-0">
					<Title className="text-xl font-semibold text-gray-700">
						Puesto Actual/ Ultimo puesto
					</Title>

					<Text className="text-sm text-gray-500 ">
						Nombre del puesto/ cargo
					</Text>
					<Text className="text-sm text-gray-500 ">
						Compañía/ Empresa/ Institución
					</Text>
					<Text className="text-sm text-gray-500 ">
						Fecha de inicio - Fecha de finalización
					</Text>
				</div>
			</Flex>

			<Flex justifyContent="start" alignItems="start" className="-mx-4">
				<span className="inline-block p-2 text-blue-500 bg-blue-100 rounded-xl md:mx-4 ">
					<svg
						xmlns="http://www.w3.org/2000/svg"
						fill="none"
						viewBox="0 0 24 24"
						strokeWidth={1.5}
						stroke="currentColor"
						className="w-6 h-6"
					>
						<path
							strokeLinecap="round"
							strokeLinejoin="round"
							strokeWidth="2"
							d="M20.25 14.15v4.25c0 1.094-.787 2.036-1.872 2.18-2.087.277-4.216.42-6.378.42s-4.291-.143-6.378-.42c-1.085-.144-1.872-1.086-1.872-2.18v-4.25m16.5 0a2.18 2.18 0 00.75-1.661V8.706c0-1.081-.768-2.015-1.837-2.175a48.114 48.114 0 00-3.413-.387m4.5 8.006c-.194.165-.42.295-.673.38A23.978 23.978 0 0112 15.75c-2.648 0-5.195-.429-7.577-1.22a2.016 2.016 0 01-.673-.38m0 0A2.18 2.18 0 013 12.489V8.706c0-1.081.768-2.015 1.837-2.175a48.111 48.111 0 013.413-.387m7.5 0V5.25A2.25 2.25 0 0013.5 3h-3a2.25 2.25 0 00-2.25 2.25v.894m7.5 0a48.667 48.667 0 00-7.5 0M12 12.75h.008v.008H12v-.008z"
						/>
					</svg>
				</span>

				<div className="mt-4 md:mt-0 w-full">
					<Title className="text-xl font-semibold text-gray-700">
						Skills
					</Title>
					<Flex justifyContent="between" className="mt-2">
					<Card className="xl:w-60 lg:w-48 md:w-60 sm:w-32">
						<SkillComponent />
					</Card>
					<Card className="xl:w-60 lg:w-48 md:w-60 sm:w-32">
						<SkillComponent />
					</Card>
					<Card className="xl:w-60 lg:w-48 md:w-60 sm:w-32">
						<SkillComponent />
					</Card>
			</Flex>
				</div>
			</Flex>
		</div>
	);
}
