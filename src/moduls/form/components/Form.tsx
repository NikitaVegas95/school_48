import React from 'react';
import '../../../styles/main.scss'
import { SubmitHandler, useForm } from "react-hook-form";
import { IFormInput } from "../../../app.interface";
import Fpass from "../../../components/Fpass";
import patternEmail from "../pattern/pattern-email";

export default function Form() {

  const {
    register,
    handleSubmit,
    reset,
    formState: {
      errors,
    }
  } = useForm<IFormInput>({
      mode: "onSubmit"
  });

  const onSubmit:SubmitHandler<IFormInput> = (data) => {
    alert(JSON.stringify(data));
    reset();
  }

  return (
    <form className="content__form grid" onSubmit={handleSubmit(onSubmit)}>
      <div className="content__input-wrapper">
        <input maxLength={30} minLength={8} className="input input__mail" {...register('email',
          {
            required: true,
            maxLength: 20,
            pattern: patternEmail,
        })
        } type=" " placeholder=' '/>
        <div>
          {errors?.email && <span className="empty-input-error">Обязательное поле для ввода</span>}
        </div>
        <label className='input-label placeholder' htmlFor="email">E-mail</label>
      </div>
      <div className="content__input-wrapper content__input-wrapper--margin">
        <input maxLength={20} minLength={8} className="input input__pass" {...register('pass',
          {
            required: true,
            maxLength: 20,
          })
        } type="password" placeholder=' '/>
        <div>
          {errors?.pass && <span className="empty-input-error">Обязательное поле для ввода</span>}
        </div>
        <label className='input-label placeholder' htmlFor="pass">Пароль</label>
      </div>
      <Fpass/>
      <button className='btn-reset content__form-btn margin24'>Войти</button>
    </form>
  );
}