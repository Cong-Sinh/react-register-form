// eslint-disable-next-line no-unused-vars
import React from "react";
import { useForm } from "react-hook-form";
import InputHook from "../input/InputHook";
import RadioHook from "../radio/RadioHook";
import CheckboxHook from "../checkbox/CheckboxHook";
import DropdownHook from "../dropdown/DropdownHook";

const dropdownData = [
  {
    id: 1,
    value: "teacher",
    text: "Teacher",
  },
  {
    id: 2,
    value: "developer",
    text: "developer",
  },
  {
    id: 3,
    value: "doctor",
    text: "doctor",
  },
];

const RegisterHook = () => {
  const {
    handleSubmit,
    control,
    setValue,
    // formState: { errors },
  } = useForm();
  const onSubmitHandler = (values) => {
    console.log(values);
  };
  return (
    <form
      onSubmit={handleSubmit(onSubmitHandler)}
      className="max-w-[300px] mx-auto my-10"
    >
      <div className="flex flex-col gap-3 mb-5">
        <label htmlFor="username" className="cursor-pointer">
          Username
        </label>
        <InputHook
          type="text"
          name="username"
          placeholder="sinhdzvcl"
          id="username"
          control={control}
        ></InputHook>
        <p className="text-red-500 text-sm">Please enter your username</p>
      </div>

      <div className="flex flex-col gap-3 mb-5">
        <label htmlFor="email" className="cursor-pointer">
          Email addres
        </label>
        <InputHook
          type="text"
          name="email"
          placeholder="email"
          id="email"
          control={control}
        ></InputHook>
        <p className="text-red-500 text-sm">Please enter your Email</p>
      </div>

      <div className="flex flex-col gap-3 mb-5">
        <label htmlFor="password" className="cursor-pointer">
          Password
        </label>
        <InputHook
          type="password"
          name="password"
          placeholder="password"
          id="password"
          control={control}
        ></InputHook>
        <p className="text-red-500 text-sm">Please enter your password</p>
      </div>

      <div className="flex flex-col gap-3 mb-5">
        <label className="cursor-pointer">Gender</label>
        <div className="flex items-center gap-5 cursor-pointer">
          <div className="flex items-center gap-x-3">
            <RadioHook control={control} name="gender" value="male"></RadioHook>
            <span>Male</span>
          </div>
          <div className="flex items-center gap-x-3">
            <RadioHook
              control={control}
              name="gender"
              value="female"
            ></RadioHook>
            <span>Female</span>
          </div>
        </div>
      </div>
      <div className="flex flex-col gap-3 mb-5">
        <label className="cursor-pointer">Are you</label>
        <DropdownHook
          control={control}
          setValue={setValue}
          data={dropdownData}
          // name={props.job}
        ></DropdownHook>
      </div>
      <div className="">
        <CheckboxHook
          control={control}
          text="i accept"
          name="term"
        ></CheckboxHook>
      </div>
      <button className="w-full items-center p-5 bg-blue-500 text-white">
        Submit
      </button>
    </form>
  );
};

// const MyInput = ({ control, ...props }) => {
//   const { field } = useController({
//     control,
//     name: props.name,
//     defaultValue: "",
//   });
//   return (
//     <input
//       className="p-4 rounded-md border border-gray-100"
//       {...field}
//       {...props}
//     />
//   );
// };

export default RegisterHook;
