import { useEffect } from "react";

const NoMatch = () => {
  useEffect(() => {
    console.log(document.documentURI)
  });

  return (
    <p>Error</p>
  );
}

export default NoMatch;