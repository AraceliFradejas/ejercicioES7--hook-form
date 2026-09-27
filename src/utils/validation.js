// Reglas de la práctica: email y contraseña validados mediante regex.
export const EMAIL_PATTERN = /^[^\s@]+@[^\s@.]+(?:\.[^\s@.]+)+$/;
export const PASSWORD_PATTERN = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[^A-Za-z0-9\s])\S{8,}$/;
export const PASSWORD_HELP = 'Al menos 8 caracteres, con mayúscula, minúscula, número y símbolo. Sin espacios.';

export const usernameRules = {
  required: 'Introduce tu nombre de usuario.',
  validate: (value) => value.trim().length > 0 || 'El nombre no puede contener solo espacios.',
};
export const emailRules = {
  required: 'Introduce tu correo electrónico.',
  pattern: { value: EMAIL_PATTERN, message: 'Introduce un correo válido, como nombre@ejemplo.com.' },
};
export const passwordRules = {
  required: 'Introduce una contraseña.',
  pattern: { value: PASSWORD_PATTERN, message: 'La contraseña debe cumplir todos los requisitos indicados.' },
};
