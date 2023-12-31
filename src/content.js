import "./content.css";
import initPanel from "./initPanel";

function inject(recursive = false) {
  const isInjectable = ["complete", "interactive"].includes(
    document.readyState
  );

  if (isInjectable) {
    const scriptEl = document.createElement("script");
    scriptEl.setAttribute("data-source", "token manager"),
      (scriptEl.innerHTML = `(${initPanel.toString()})();`);
    setTimeout(() => document.body.appendChild(scriptEl), 1000);
  } else {
    document.onreadystatechange = function () {
      if (document.readyState === "interactive" && !recursive) inject(true);
    };
  }
}

inject();
