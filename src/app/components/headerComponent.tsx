"use client";
import AppContext from "../context/app-context";
import ButtonComponent from "./buttonComponent";
import { useContext } from "react";

const HeaderComponent = () => {
	const { session, logout } = useContext(AppContext);

	return (
		<nav className="bg-white shadow shadow-gray-300 w-100 px-8 md:px-auto">
			<div className="md:h-20 h-36 mx-auto md:px-4 container flex items-center justify-between flex-wrap md:flex-nowrap">
				<div className="text-cyan-500 md:order-1">
					<svg
						width="158"
						height="40"
						viewBox="0 0 158 40"
						fill="none"
						xmlns="http://www.w3.org/2000/svg"
					>
						<path
							fillRule="evenodd"
							clipRule="evenodd"
							d="M87.7172 9.31199e-05C88.0188 9.31199e-05 88.188 0.198828 88.2256 0.450009L88.2337 0.560442L84.3286 31.8059C83.5294 38.3054 79.5349 39.9272 74.6646 39.9976L74.3234 40C72.7055 40 71.8563 39.962 71.2931 39.9135L69.9735 39.7559C69.716 39.7105 69.4992 39.6101 69.449 39.2633L69.438 39.0991V38.8851L69.7305 36.3963C69.8149 35.6662 70.1083 35.4299 70.752 35.4299C71.3528 35.3878 72.1692 35.385 73.0712 35.3421L73.9736 35.2835C75.5989 35.1466 76.6303 34.7619 77.1695 32.2992L77.2371 31.9661L81.0613 0.608865C81.0981 0.314539 81.1999 0.132243 81.4714 0.0596295L81.6218 0.0324523L87.7172 9.31199e-05ZM101.996 7.97675C105.902 7.97675 108.351 8.83694 109.809 10.2933C111.271 11.7542 111.701 13.7697 111.701 16.2579C111.701 18.9626 111.228 22.6962 110.284 25.1397C108.864 29.0009 105.944 31.6211 99.072 31.6211C95.2047 31.6211 92.799 30.8044 91.3389 29.3885C89.8373 27.8874 89.3645 25.7848 89.3645 23.2952C89.3645 20.5491 89.9215 16.4742 90.9525 13.9848C92.4576 10.3813 95.4214 7.97675 101.996 7.97675ZM65.0273 7.9767C68.9362 7.9767 71.3847 8.83527 72.8448 10.2949C74.3049 11.7541 74.7351 13.7699 74.7351 16.259C74.7351 18.9607 74.2611 22.6938 73.3186 25.1396C71.9005 29.0009 68.9788 31.6187 62.1074 31.6187C58.2402 31.6187 55.8332 30.8044 54.3731 29.3885C52.8715 27.886 52.3963 25.7833 52.3963 23.2954C52.3963 20.5491 52.957 16.4727 53.9869 13.9832C55.4897 10.3813 58.4558 7.9767 65.0273 7.9767ZM150.687 8.02028C154.122 8.02028 156.762 8.74871 157.578 9.00619C157.83 9.07836 157.955 9.2388 157.99 9.43995L158 9.56514V9.77862L157.104 12.6113C157.018 12.9119 156.723 13.0383 156.423 13.0383C156.393 13.0383 156.363 13.02 156.321 13.0078L156.046 12.9673C155.301 12.8417 153.122 12.3948 151.085 12.3948C150.011 12.3948 148.707 12.524 147.892 13.1687C147.403 13.5809 147.122 14.1253 147.06 14.7428L147.046 15.0571C147.046 16.8574 149.053 16.9437 151.028 17.3318C152.746 17.5886 154.494 18.0167 155.61 19.1328C156.469 19.9476 156.985 21.1914 156.985 23.0808C156.985 25.1818 156.34 27.3273 154.837 28.9148C152.947 30.8898 149.94 31.6185 146.59 31.6185C142.895 31.6185 139.544 30.7178 138.816 30.3735L138.682 30.302C138.559 30.2363 138.427 30.1362 138.427 29.8597C138.427 29.7736 138.427 29.707 138.439 29.6212L138.47 29.4733L139.332 26.7269C139.459 26.3423 139.63 26.2124 139.888 26.2124C139.973 26.2124 140.019 26.2124 140.104 26.255L141.108 26.507C142.331 26.8042 144.386 27.2421 146.288 27.2421C147.491 27.2421 148.609 27.0279 149.338 26.3838C149.983 25.8688 150.241 25.1397 150.241 24.4092C150.241 23.5094 149.94 23.037 149.339 22.7377C148.909 22.5226 148.371 22.3949 147.738 22.2769L145.843 21.9318C144.442 21.6575 142.852 21.2406 141.738 20.1613C140.922 19.3032 140.409 18.1461 140.409 16.3422C140.409 14.4542 140.928 12.4388 142.129 10.9808C144.278 8.40487 147.939 8.02028 150.687 8.02028ZM123.542 0C123.88 0 124.135 0.186436 124.194 0.520631L124.207 0.672792V0.7999L123.486 6.26045L123.162 8.7719L123.611 8.64768C124.472 8.42408 126.46 7.97689 128.588 7.97689C131.422 7.97689 133.483 8.53607 134.815 9.82346C136.103 11.0659 136.706 13.0394 136.706 16.0001C136.706 18.7034 136.276 21.7936 135.504 24.4109C134.04 29.259 131.078 31.6175 124.205 31.6175C120.852 31.6175 117.933 31.1442 116.301 30.5876C114.626 30.03 114.198 29.299 114.198 28.1383C114.198 27.7669 114.237 27.3548 114.3 26.8801L114.413 26.1183L117.441 1.06948C117.479 0.534974 117.687 0.19158 118.155 0.0605554L118.343 0.0214176L123.542 0ZM47.4106 0.0786864C50.5023 0.0786864 52.4367 0.639036 53.079 0.811308C53.381 0.897444 53.4654 1.11558 53.4654 1.37236C53.4654 1.40169 53.4654 1.45358 53.453 1.51016L53.4237 1.59631L52.6084 4.53005C52.5343 4.86169 52.428 5.05941 52.1827 5.10913L52.0479 5.1216H51.8759C51.3607 4.8888 50.0285 4.77775 48.8704 4.77775C46.952 4.77775 46.1567 5.203 45.8633 6.7918L45.8211 7.05244L45.4776 9.77759H50.9302C51.2716 9.77759 51.4461 9.97241 51.4844 10.2504L51.4926 10.3743V10.4609L51.0835 13.8425C51.0462 14.1786 50.8273 14.3791 50.5142 14.4239L50.3746 14.4336H44.9171L42.6154 30.5946C42.5394 31.0374 42.2164 31.1675 41.875 31.191L41.7466 31.1952H36.6659C36.3676 31.1952 36.1085 31.1944 36.0448 30.8733L36.0303 30.7373L36.1515 29.874L36.1881 29.5656H36.1942L38.3027 14.5302L39.2058 6.90065C39.7639 2.35244 42.383 0.0786864 47.4106 0.0786864ZM25.8775 8.1639C28.972 8.1639 31.2261 8.59295 32.5571 9.8787C33.2643 10.6269 33.7027 11.6622 33.7709 13.0529L33.7802 13.4834C33.7802 13.9556 33.7532 14.414 33.7156 14.8667L33.587 16.216L31.8057 30.5788C31.7682 30.9163 31.5332 31.1352 31.2163 31.1846L31.0758 31.1953H25.835C25.4969 31.1953 25.2314 31.0707 25.1704 30.8104L25.1571 30.6905V30.6053L26.8626 16.6599C26.9276 16.2088 26.9845 15.7573 27.0089 15.3251L27.0215 14.8567C27.0215 14.1699 26.922 13.6505 26.6221 13.3085C26.1919 12.7943 25.5351 12.5759 24.5029 12.5759C23.2262 12.5759 21.8348 12.7872 20.9599 12.9481L20.0787 13.1272L17.9325 30.5788C17.893 30.9163 17.6584 31.1352 17.3121 31.1846L17.1571 31.1953H11.918C11.5807 31.1953 11.2637 31.0707 11.1898 30.8104L11.1736 30.6905V30.6053L13.5431 11.8961C13.758 10.2663 14.9244 9.75019 17.5011 9.15097C19.7352 8.63625 23.1742 8.1639 25.8775 8.1639ZM4.09483 0.232893H10.3403C10.5954 0.232893 10.683 0.328502 10.7029 0.544791L10.7076 0.749709L7.07797 30.5788C7.04065 30.9164 6.8133 31.1352 6.49677 31.1846L6.35595 31.1953H0.644638C0.344052 31.1953 0.0759404 31.0668 0.0136093 30.8055L0 30.6854L3.59445 0.753434C3.63075 0.452365 3.68882 0.279628 3.96335 0.241147L4.09483 0.232893ZM126.567 12.4827C125.3 12.4827 123.755 12.7851 123.03 12.9442L122.616 13.0396L120.94 26.8134L121.437 26.9116C122.014 27.013 123.038 27.1568 124.205 27.1568C127.299 27.1568 128.588 26.2985 129.403 21.7517C129.747 19.9046 130.005 17.9309 130.005 16.0439C130.005 14.8003 129.833 13.9429 129.447 13.3853C128.888 12.6543 127.984 12.4827 126.567 12.4827ZM101.435 12.4402C98.4151 12.4402 97.4267 13.7519 96.8603 16.5704L96.7967 16.9023C96.4075 19.0056 96.0663 21.3644 96.0663 23.5094C96.0663 24.8398 96.2371 25.7848 96.8804 26.3838C97.4399 26.9001 98.299 27.1567 99.6302 27.1567C102.854 27.1567 103.755 25.6546 104.312 22.4366C104.699 20.3782 105 18.1892 105 16.1299C105 14.8416 104.828 13.9429 104.27 13.3402C103.711 12.7412 102.854 12.4402 101.435 12.4402ZM64.4682 12.4404C61.3324 12.4404 60.3876 13.8568 59.8283 16.9025C59.441 19.0056 59.0995 21.3629 59.0995 23.5096C59.0995 24.8398 59.2724 25.7833 59.915 26.3837C60.4718 26.8987 61.3324 27.1566 62.6655 27.1566C65.7705 27.1566 66.72 25.7613 67.2856 22.7762L67.347 22.438C67.7331 20.377 68.0343 18.1892 68.0343 16.1298C68.0343 14.8415 67.8602 13.9417 67.3055 13.3402C66.7459 12.7396 65.8855 12.4404 64.4682 12.4404Z"
							fill="#167DB7"
						/>
					</svg>
				</div>

				{!session ? null : (
					<>
						<div className="text-gray-500 order-3 w-full md:w-auto md:order-2">
							<ul className="flex font-semibold justify-between">
								<li className="md:px-4 md:py-2 text-sky-500">
									<a href="#">CV</a>
								</li>
								<li className="md:px-4 md:py-2 hover:text-sky-400">
									<a href="#">Empleos</a>
								</li>
								<li className="md:px-4 md:py-2 hover:text-sky-400">
									<a href="#">Mis ofertas</a>
								</li>
								<li className="md:px-4 md:py-2 hover:text-sky-400">
									<a href="#">Quién me ve</a>
								</li>
							</ul>
						</div>
						<div className="order-2 md:order-3">
							<button
								onClick={logout}
								className="tracking-wide font-semibold bg-sky-600 text-gray-100 py-4 rounded-lg hover:bg-sky-700 transition-all duration-300 ease-in-out flex items-center justify-center focus:shadow-outline focus:outline-none"
							>
								<span className="ml-3 mr-3">Cerrar sesión</span>
							</button>
						</div>
					</>
				)}
			</div>
		</nav>
	);
};

export default HeaderComponent;
