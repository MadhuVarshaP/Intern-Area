import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { Auth0Provider } from "@auth0/auth0-react";
import { ProfileProvider } from "./utils/ProfileContext";

const root = ReactDOM.createRoot(document.getElementById("root"));
// const history = unstable_HistoryRouter();
// const onRedirectCallback = appState => {
//   history.push(
//     appState && appState.returnTo
//       ? appState.returnTo
//       : window.location.pathname
//   );
// };
root.render(
  <React.StrictMode>
    <Auth0Provider
      domain="dev-qd1ntdamndjem8yr.us.auth0.com"
      clientId="h16JY9r30ogPhrLro0XzPxrjjNpNMCDk"
      audience=""
      authorizationParams={{
        redirect_uri: window.location.origin,
      }}
    >
      <ProfileProvider>
        <App />
      </ProfileProvider>
    </Auth0Provider>
  </React.StrictMode>
);
