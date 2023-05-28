import { AppContextProvider } from "./context/app-context";
import { HomePage} from "./pages/homePage";

export default async function Home() {

	return (
      <AppContextProvider>
        <HomePage />
      </AppContextProvider>
	);
}
