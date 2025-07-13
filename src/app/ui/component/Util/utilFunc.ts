export const roundDecimal = (num: number) =>
  (Math.round(num * 100) / 100).toFixed(2);


export const formatMoney = (num: number|string) =>
   num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
