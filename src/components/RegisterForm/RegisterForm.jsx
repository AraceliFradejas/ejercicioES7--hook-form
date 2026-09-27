import { useEffect, useRef, useState } from 'react';
import { useForm } from 'react-hook-form';
import { emailRules, passwordRules, usernameRules, PASSWORD_HELP } from '../../utils/validation';
import './RegisterForm.css';

export default function RegisterForm() {
  const [showPassword, setShowPassword] = useState(false);
  const [registeredName, setRegisteredName] = useState('');
  const successHeading = useRef(null);
  const { register, handleSubmit, reset, setFocus, formState: { errors, isSubmitting } } = useForm({
    defaultValues: { username: '', email: '', password: '' },
    mode: 'onSubmit',
    reValidateMode: 'onChange',
  });

  useEffect(() => {
    // Esperar al montaje de los campos tras reset antes de recuperar el foco.
    const frame = requestAnimationFrame(() => {
      if (registeredName) successHeading.current?.focus();
      else setFocus('username');
    });
    return () => cancelAnimationFrame(frame);
  }, [registeredName, setFocus]);

  function onSubmit(data) {
    setRegisteredName(data.username.trim());
    setShowPassword(false);
    reset();
  }

  if (registeredName) {
    return <div className="form-content success">
      <span className="step">FORMULARIO COMPLETADO</span>
      <span className="success-icon" aria-hidden="true">✓</span>
      <h2 id="form-title" tabIndex={-1} ref={successHeading}>¡Todo listo,<br />{registeredName}!</h2>
      <p role="status">Tus datos han superado la validación.</p>
      <p className="success-note">Este registro es una demostración. No se ha creado ninguna cuenta ni se han enviado tus datos a un servidor.</p>
      <button className="submit" onClick={() => setRegisteredName('')}>Volver al formulario <span aria-hidden="true">↗</span></button>
    </div>;
  }

  return <div className="form-content">
    <div className="form-top"><span className="step">EMPIEZA AQUÍ</span><span className="form-number">01 — 01</span></div>
    <h2 id="form-title">Tu próximo comienzo.</h2>
    <p className="form-description">Crea tu perfil. Solo necesitamos tres cosas.</p>
    <form onSubmit={handleSubmit(onSubmit)} noValidate>
      <p className="required-note">Todos los campos son obligatorios.</p>
      <div className="field">
        <label htmlFor="username">Nombre de usuario <span aria-hidden="true">*</span></label>
        <input id="username" autoComplete="username" placeholder="¿Cómo te llamas?" aria-required="true" aria-invalid={Boolean(errors.username)} aria-describedby={errors.username ? 'username-error' : undefined} {...register('username', usernameRules)} />
        {errors.username && <p className="error" id="username-error" role="alert">{errors.username.message}</p>}
      </div>
      <div className="field">
        <label htmlFor="email">Correo electrónico <span aria-hidden="true">*</span></label>
        <input id="email" type="email" autoComplete="email" placeholder="tu@ejemplo.com" aria-required="true" aria-invalid={Boolean(errors.email)} aria-describedby={errors.email ? 'email-error' : undefined} {...register('email', emailRules)} />
        {errors.email && <p className="error" id="email-error" role="alert">{errors.email.message}</p>}
      </div>
      <div className="field">
        <label htmlFor="password">Contraseña <span aria-hidden="true">*</span></label>
        <div className="password-input">
          <input id="password" type={showPassword ? 'text' : 'password'} autoComplete="new-password" placeholder="Una contraseña solo tuya" aria-required="true" aria-invalid={Boolean(errors.password)} aria-describedby={errors.password ? 'password-help password-error' : 'password-help'} {...register('password', passwordRules)} />
          <button className="toggle-password" type="button" aria-label={showPassword ? 'Ocultar contraseña' : 'Mostrar contraseña'} aria-pressed={showPassword} onClick={() => setShowPassword((visible) => !visible)}>{showPassword ? 'Ocultar' : 'Mostrar'}</button>
        </div>
        <p className="field-help" id="password-help">{PASSWORD_HELP}</p>
        {errors.password && <p className="error" id="password-error" role="alert">{errors.password.message}</p>}
      </div>
      <button className="submit" type="submit" disabled={isSubmitting}>Crear mi perfil <span aria-hidden="true">↗</span></button>
      <p className="demo-note"><span aria-hidden="true">◇</span> Un espacio para practicar. Tus datos no se guardan.</p>
    </form>
    <div className="form-bottom"><span>HECHO CON REACT HOOK FORM</span><span aria-hidden="true">✳</span></div>
  </div>;
}
