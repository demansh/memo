import "./App.css";
import { Layout } from "./components/Layout/Layout";
import { GamePage } from "./pages/GamePage/GamePage";

export const App = () => {
  return (
    <Layout>
      <GamePage />
    </Layout>
  );
};
