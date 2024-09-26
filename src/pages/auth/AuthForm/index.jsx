/* eslint-disable react/prop-types */
import { useState } from "react";

const AuthForm = (props) => {
  let { fields, submitMessage, onSubmit } = props;
  if (!fields) {
    fields = [
      { label: "username", type: "text", autocomplete: "username" },
      { label: "password", type: "password", autocomplete: "current-password" }
    ]
  }

  const [isLoading, setIsLoading] = useState(false);

  const [values, setValues] = useState(() => {
    const initialState = {};
    for (let field of fields) {
      initialState[field.label] = ""
    }
    return initialState;
  });

  return (
    <form className="bg-white border border-slate-300 p-4 m-4 rounded-lg min-w-72"
      onSubmit={async (e) => {
        e.preventDefault();
        setIsLoading(true)
        await onSubmit(values);
        setIsLoading(false);
      }}
    >
      {fields.map((field) =>
        <div key={field.label} className="flex flex-col my-4 text-stone-500">
          <label htmlFor={field.label}>{field.label}</label>
          <input id={field.label} type={field.type} autoComplete={field.autocomplete}
            className="px-2 py-1 rounded-md bg-slate-50 border border-slate-500 focus:outline-emerald-600 text-stone-600"
            value={values[field.label]}
            onChange={(e) => { setValues({ ...values, [field.label]: e.target.value }) }}
          />
        </div>
      )}
      <button className="w-full bg-emerald-700 rounded-lg py-2 text-white font-bold">
      {submitMessage ? submitMessage : "Submit"} {isLoading && (<i className="fa fa-spinner animate-spin"></i>)}
    </button>
    </form>
  );
};
 
export default AuthForm;
