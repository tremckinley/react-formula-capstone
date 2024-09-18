const AuthForm = (props) => {
  let { fields, submitMessage } = props;
  if (!fields) {fields=[
    {label: "username", type: "text"},
    {label: "password", type: "password"}
  ]}
  
  return (
      <form className="bg-white border border-slate-300 p-4 m-4 rounded-lg min-w-72">
        {fields.map((field) => 
          <div key={field.label} className="flex flex-col my-4 text-stone-500">
            <label htmlFor={field.label}>{field.label}</label>
            <input id={field.label} type={field.type} className="px-2 py-1 rounded-md bg-slate-50 border border-slate-500 focus:outline-emerald-600 text-stone-600" />
          </div>
        )}
        <button className="w-full bg-emerald-700 rounded-lg py-2 text-white font-bold">{submitMessage ? submitMessage : "Submit"}</button>
      </form>
  );
};

export default AuthForm;
