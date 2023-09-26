exports.middlewareGlobal = (req, res, next) => {
  res.locals.umaVariavelLocal = 'Este é o valor da variável local.'; // "res.locals" só vai ter aqui dentro
  next();
};

exports.outroMiddleware = (req, res, next) => {
  next();
};
