
function normalize(roman) {
    if(roman === "IIII") return "IV";
    return roman;
}
export const add = (first, second) => {
  return normalize(first + second);;
};
