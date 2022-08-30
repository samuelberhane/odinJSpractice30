let pressArray = [];
let secreCode = "wesbos";
window.addEventListener("keyup", (e) => {
  pressArray.push(e.key);
  pressArray.splice(
    -secreCode.length - 1,
    pressArray.length - secreCode.length
  );
  console.log(pressArray.join(""));
  if (pressArray.join("").includes(secreCode)) {
    console.log("DING DING");
    cornify_add();
  }
});
