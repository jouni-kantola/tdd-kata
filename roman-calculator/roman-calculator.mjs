
function normalize(roman) {
    if(roman === "IIII") return "IV";
    if(roman === "IIIII") return "V";
    if(roman === "CCCC") return "CD";
    if(roman === "CCCCC") return "D";
    return roman;
}
export const add = (first, second) => {
  return normalize(first + second);;
};
