import { useEffect, useState } from "react";
import liff from "@line/liff";
import "./App.css";

function App() {
  const [message, setMessage] = useState("");
  const [language, setLanguage] = useState("");
  const [idToken, setIdToken] = useState("");
  const [error, setError] = useState("");

  useEffect(() => {
    setLanguage(liff.getLanguage());
    setIdToken(liff.getDecodedIDToken());
    liff
      .init({
        liffId: "1657418011-9QvJjKVb"
      })
      .then(() => {
        setMessage("LIFF init succeeded.");
      })
      .catch((e: Error) => {
        setMessage("LIFF init failed.");
        setError(`${e}`);
      });
  });

  return (
    <div className="App">
      <h1>create-liff-app</h1>
      {idToken && <p>{idToken}</p>}
      {language && <p>{language}</p>}
      {message && <p>{message}</p>}
      {error && (
        <p>
          <code>{error}</code>
        </p>
      )}
      <a
        href="https://developers.line.biz/ja/docs/liff/"
        target="_blank"
        rel="noreferrer"
      >
        LIFF Documentation
      </a>
    </div>
  );
}

export default App;
