import { useForm } from "react-hook-form";

export const Contacto = () => {

  const { register, handleSubmit} = useForm();

  const enviar = (data) => {
    console.log(data)
  }

  return (
    <section className="container-form">
      <h1 className="container-form-title">Contacto</h1>
      <form className="form" onSubmit={handleSubmit(enviar)}>
        <input type="text" placeholder="Ingresa tu nombre" {...register("nombre")} />
        <input type="email" placeholder="Ingresa tu email" {...register("email")} />
        <input type="phone" placeholder="Ingresa tu telefono" {...register("telefono")} />
        <button type="submit">Enviar</button>
      </form>
    </section>
  );
};
