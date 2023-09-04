// Concatenando Arrays

const a1 = [1, 2, 3];
const a2 = [4, 5, 6];
// const a3 = a1 + a2; // ERRADO
// const a3 = a1.concat(a2); // ele junta corretamente todos os valores
// const a3 = a1.concat(a2, [7, 8, 9], 'Luiz'); // 1, 2, 3, 4, 5, 6, 7, 8, 9, Luiz

// ... rest -> ... spread
// const a3 = [...a1, ...a2]; // ele junta corretamente todos os valores
// const a3 = [...a1, 'Luiz', ...a2, [7, 8, 9]]; // ERRADO - Ele vai mostrar o Array com os elementos dentro no final , [7, 8, 9]
const a3 = [...a1, 'Luiz', ...a2, ...[7, 8, 9]]; // CORRETO - Ele vai mostrar os elementos e não os elementos dentro do Array  7, 8, 9
console.log(a1, ' - ', a2);
console.log(typeof a3, ' - ',  a3);