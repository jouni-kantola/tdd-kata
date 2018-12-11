
function normalize(roman) {
    if(roman === "IIII") return "IV";
    if(roman === "IIIII") return "V";
    return roman;
}
export const add = (first, second) => {
  return normalize(first + second);;
};
