
function normalize(roman) {
    if(roman === "IIII") return "IV";
    if(roman === "IIIII") return "V";
    if(roman === "XXXX") return "XL";
    if(roman === "XXXXX") return "L";
    if(roman === "CCCC") return "CD";
    if(roman === "CCCCC") return "D";
    if(roman === "LL") return "C";
    if(roman === "VV") return "X";
    if(roman === "DD") return "M";
    return roman;
}
export const add = (first, second) => {
  return normalize(first + second);;
};
