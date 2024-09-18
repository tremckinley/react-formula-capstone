const AuthForm = (props) => {
  let { fields, submitMessage } = props;
  if (!fields) {fields=[
    {label: "username", type: "text"},
    {label: "password", type: "password"}
]}
  
  return (
      <form className="border border-slate-300 p-4 m-4 rounded-lg">
        {fields.map((field) => 
          <div key={field.label} className="flex flex-col my-4 text-stone-500">
            <label htmlFor={field.label}>{field.label}</label>
            <input id={field.label} type={field.type} className="px-2 rounded-md bg-slate-300 border border-slate-500" />
          </div>
        )}
        <button className="w-full bg-emerald-700 rounded-lg py-2 text-white font-bold">{submitMessage ? submitMessage : "Submit"}</button>
      </form>
  );
};

export default AuthForm;
