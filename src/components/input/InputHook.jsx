import { useController } from "react-hook-form";

// eslint-disable-next-line react/prop-types
const InputHook = ({ control, ...props }) => {
  const { field } = useController({
    control,
    // eslint-disable-next-line react/prop-types
    name: props.name,
    defaultValue: "",
  });
  return (
    <input
      className="p-4 border border-gray-100 rounded-lg bg-white outline-none transition-all focus:border-blue-500"
      {...field}
      {...props}
    ></input>
  );
};

export default InputHook;
