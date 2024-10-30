import Decimal from "decimal.js";

const formatDecimalToBRL = (price: Decimal): string => {
  // Convert Decimal to number
  const numericPrice = price.toNumber();

  return new Intl.NumberFormat("pt-BR", {
    style: "decimal", // Change this to 'currency' for BRL symbol
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  }).format(numericPrice); // Pass the converted number
};

export default formatDecimalToBRL;
