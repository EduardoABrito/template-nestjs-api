export const ErrorMessages = {
  empty: (param: string) => `O campo ${param} não pode estar vazio.`,
  length: (param: string, min: number, max: number) =>
    `O campo ${param} deve ter entre ${min ?? '-'} e ${max ?? '-'} caracteres.`,
  maxLength: (param: string, max: number) => `O campo ${param} deve ter no máximo ${max ?? '-'} caracteres.`,
  invalid: (param: string) => `O campo ${param} é inválido!`,
  'string.base': (param: string) => `O campo ${param} deve ser uma string`,
  'string.zipcode': (param: string) => `${param} inválido, o campo deve estar no formato 00000-000`,
  'string.min': (param: string, limit?: number) => `O campo ${param} deve ter pelo menos ${limit ?? '-'} caracteres.`,
  'string.max': (param: string, limit?: number) => `O campo ${param} não pode ter mais de ${limit ?? '-'} caracteres.`,
  'number.base': (param: string) => `O campo ${param} deve ser um número.`,
  'number.int': (param: string) => `O campo ${param} deve ser um inteiro.`,
  'number.min': (param: string, limit?: number) => `O campo ${param} deve ser maior ou igual a ${limit ?? '-'}.`,
  'number.max': (param: string, limit?: number) => `O campo ${param} deve ser menor ou igual a ${limit ?? '-'}.`,
  'decimal.base': (param: string) => `O campo ${param} deve ser um decimal.`,
  'decimal.min': (param: string, limit?: number, decimal_digits_limit?: number) =>
    `O campo ${param} deve ser maior ou igual a ${limit?.toFixed(decimal_digits_limit) ?? '-'}.`,
  'decimal.max': (param: string, limit?: number, decimal_digits_limit?: number) =>
    `O campo ${param} deve ser menor ou igual a ${limit?.toFixed(decimal_digits_limit) ?? '-'}.`,
  'email.base': (param: string) => `O campo ${param} deve ser um email válido.`,
  'array.base': (param: string) => `O campo ${param} deve ser um array.`,
  'array.min': (param: string, min: number) => `O campo ${param} deve ter no mínimo ${min} elementos.`,
  'object.base': (param: string) => `O campo ${param} deve ser um objeto.`,
  'boolean.base': (param: string) => `O campo ${param} deve ser um boolean.`,
};
