function InputField({ label, name, value, onChange }) {
  return (
    <div className="flex justify-between">
      <label className="font-semibold w-2/12" htmlFor={label}>
        {label}:{" "}
      </label>
      <input
        type="text"
        name={name}
        value={value}
        onChange={onChange}
        className="w-10/12 h-10 py-2 px-4 outline-sky-500 border border-black/25 rounded"
      />
    </div>
  );
}

export default InputField;
