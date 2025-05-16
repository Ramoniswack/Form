import { useForm } from "react-hook-form";

const FillForm = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    console.log(data);
    alert(`Hi, ${data.name}! Form submitted successfully!`);
  };

  return (
    <>

<div className="flex items-center justify-center min-h-screen bg-gray-100 px-4">
  <form
    onSubmit={handleSubmit(onSubmit)}
    className="w-full max-w-md bg-white shadow-lg rounded-2xl px-6 py-8 space-y-5"
  >

        <div className="text-2xl py-4 px-6 bg-gray-900 text-white text-center font-bold uppercase rounded ">
        Form
    </div> 
    <br/><br/>

        <div className="flex flex-col mb-4">

        <label htmlFor="name">Name :</label>
        <input
        className="border border-gray-300 rounded px-4 py-2  focus:outline-sky-400" 
          type="text"
          placeholder="Name"
          {...register("name", {
            required: "Name is required",
            minLength: {
              value: 3,
              message: "Min len 3",
            },
          })}
        />
        {errors.name && (
          <p className=" text-red-500 text-sm min-h-[1.125rem]">
            {errors.name.message}
          </p>
        )}
         </div>

        <div className="flex flex-col mb-4"> 
            <label htmlFor="email">Email :</label>
        <input
        className="border border-gray-300 rounded px-4 py-2  focus:outline-sky-400"
          type="email"
          placeholder="Email"
          {...register("email", {
            required: "Email is required",
            pattern: {
              value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
              message: "Invalid email format",
            },
          })}
        />
        {errors.email && <p className="text-red-500 text-sm min-h-[1.125rem]">{errors.email.message}</p>}

           </div>
      <div className="flex flex-col mb-4">

        <label htmlFor="password">Password :</label>
        <input
        className="border border-gray-300 rounded px-4 py-2  focus:outline-sky-400"
        
        type="password"
        placeholder="Password"
        {...register("password", {
          required: "Password is required",
          pattern: {
            value: /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/,
            message:
            "Password must be at least 8 characters long and contain at least one letter and one number",
          },
        })}
        />
        {errors.password && <p className=" text-red-500 text-sm min-h-[1.125rem] ">{errors.password.message}</p>}

        </div>

<div className="flex flex-col mb-4"> 


        <label htmlFor="phone">Phone :</label>
        <input
        className="border border-gray-300 rounded px-4 py-2  focus:outline-sky-400"
          type="text"
          placeholder="Phone"
          {...register("phone", {
            required: "Phone number is required",
            pattern: {
              value: /^[0-9]{10}$/,
              message: "Phone number must be 10 digits long",
            },
          })}
          />
        {errors.phone && <p className=" text-red-500 text-sm min-h-[1.125rem]">{errors.phone.message}</p>}
      </div>

      <div className="flex flex-col mb-4">
           <label htmlFor="address">Address :</label>
        <input
        className="border border-gray-300 rounded px-4 py-2  focus:outline-sky-400"
          type="text"
          placeholder="Address"
          {...register("address", {
            required: "Address is required",
            pattern: {
              value: /^[a-zA-Z0-9\s,.'-]{3,}$/,
              
            },
          })}
        />
        {errors.address && <p className=" text-red-500 text-sm min-h-[1.125rem]">{errors.address.message}</p>}




      </div>

     
<div className="flex flex-col mb-4">
     <label htmlFor="City">City :</label>
        <input
        className="border border-gray-300 rounded px-4 py-2  focus:outline-sky-400"
          type="text"
          placeholder="City"
          {...register("city", {
            required: "City is required",
            pattern: {
              value: /^[a-zA-Z\s]+$/,
              message: "City must contain only letters and spaces",
            },
          })}
        />
        {errors.city && <p className=" text-red-500">{errors.city.message}</p>}

</div>

     

        <button type="submit" className="px-6 py-2 min-w-[120px] text-center text-white bg-violet-600 border border-violet-600 rounded active:text-violet-500 hover:bg-violet-800  focus:outline-none focus:ring cursor-pointer">Submit</button>
        <p> R.A.MON TIWARI </p><button className="border">p</button>

        <span> R.A.MON TIWARI</span> <button className="border">S</button>
      </form>
      </div>
    </>
  );
};

export default FillForm;
