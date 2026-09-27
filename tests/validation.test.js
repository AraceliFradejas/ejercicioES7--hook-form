import test from 'node:test';
import assert from 'node:assert/strict';
import { EMAIL_PATTERN, PASSWORD_PATTERN, usernameRules, emailRules, passwordRules } from '../src/utils/validation.js';

test('los tres campos tienen un mensaje de obligatoriedad', () => {
  for (const rules of [usernameRules, emailRules, passwordRules]) assert.equal(typeof rules.required, 'string');
});
test('el nombre rechaza espacios y admite nombres compuestos', () => {
  assert.notEqual(usernameRules.validate('   '), true);
  assert.equal(usernameRules.validate('Araceli Fradejas'), true);
});
test('el correo admite subdominios y etiquetas', () => {
  for (const email of ['hola@ejemplo.com', 'a.b+curso@correo.ejemplo.es']) assert.equal(EMAIL_PATTERN.test(email), true);
});
test('el correo rechaza valores incompletos, espacios y varios arrobas', () => {
  for (const email of ['', 'hola', 'hola@', '@ejemplo.es', 'a@b', 'a@@b.es', 'a b@c.es', 'a@b..es', 'a@b.es ']) assert.equal(EMAIL_PATTERN.test(email), false, email);
});
test('la contraseña exige cada categoría, longitud mínima y ausencia de espacios', () => {
  assert.equal(PASSWORD_PATTERN.test('Abcdef1!'), true);
  for (const password of ['', 'Abcd1!', 'abcdef1!', 'ABCDEF1!', 'Abcdefg!', 'Abcdef12', 'Abc def1!', 'Abcdef1!\n']) assert.equal(PASSWORD_PATTERN.test(password), false, password);
});
