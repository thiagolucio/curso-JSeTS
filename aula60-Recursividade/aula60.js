// Recursividade é uma função que se chama de volta...Loop por assim dizer. 
// Com recursividade vc deve se preocupar em "quando parar" a recursividade.
function recursiva(max) {
  console.log(max);
  if (max >= 10) return;
  max++;
  recursiva(max);
}

recursiva(0);
 