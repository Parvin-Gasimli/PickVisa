import { VisaContextProvider } from "../contexts/visaContext";
import Layout from "../layouts/Layout";
import PersonalFormPage from "../pages/PersonalFormPage";
import QuizPage from "../pages/QuizPage";
import ResultsPage from "../pages/ResultsPage";
import VisaTypePage from "../pages/VisaTypePage";
import "../scss/style.css"
import "../../node_modules/bootstrap/dist/css/bootstrap.min.css"

const mainRoutes = () => {
  return {
    path: "/",
    element: (
      <VisaContextProvider>
        <Layout />
      </VisaContextProvider>
    ),
    children: [
      {
        path: "/",
        element: <VisaTypePage />,
      },
      {
        path: "/form",
        element: <PersonalFormPage />,
      },
      {
        path: "/quiz",
        element: <QuizPage />,
      },
      {
        path: "/results",
        element: <ResultsPage />,
      },
    ],
  };
};

export default mainRoutes;
