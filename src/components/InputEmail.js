import React from "react";

export default function InputEmail() {
  
  return (
    <>
      <input
        type='email'
        placeholder="E-mail"
        id="nome"
        name="nome"
        value={form.nome}
        required
        onChange={(e) => {
          setForm({ ...form, nome: e.target.value });
        }}
      />
    </>  
  );
}