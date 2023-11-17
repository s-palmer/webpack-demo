export default (text = "Hello world from the WPS") => {
  const element = document.createElement("div");
  element.innerHTML = text;
  return element;
}