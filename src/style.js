export const colors = {
  black: "#050505",
};

// goober doesnt handle css imports properly.
export function setupStyles(imports) {
  const styleImportsKEY = "simon-says-styles";
  const importsEle = document.getElementById(styleImportsKEY);
  if (!importsEle) {
    const ele = document.createElement("style");
    ele.innerText = imports;
    ele.setAttribute("id", styleImportsKEY);
    document.head.appendChild(ele);
  }
}
