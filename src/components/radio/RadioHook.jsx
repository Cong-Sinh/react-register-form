import { useController } from "react-hook-form";

// eslint-disable-next-line react/prop-types
const RadioHook = ({ control, ...props }) => {
  const { field } = useController({
    control,
    // eslint-disable-next-line react/prop-types
    name: props.name,
  });
  return (
    <label className=" bg-white rounded-full cursor-pointer custom-radio">
      <input type="radio" className="hidden" {...field} {...props} />
      <div className="bg-white w-full h-full rounded-full "></div>
    </label>
  );
};

export default RadioHook;
