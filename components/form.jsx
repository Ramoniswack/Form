import {useForm} from 'react-hook-form';

function Form()
{
    const {register,
        handleSubmit,
        reset,
        watch,
        formState: {errors},
        resetField,
        setValue,
        setError,
        } = useForm();
    
    const onSubmit = async (data) => {
        console.log(data);
        alert(`Hi, ${data.name}!`);
        reset();
    };

    // const watchAll = watch(); // watch all inputs in the form

    return(
        <>
            <form onSubmit={handleSubmit(onSubmit)}>
        <h2> Sign up form</h2>
        <label htmlFor="name">Name: <br/></label>
        <input
            type='text'
            id='name'
            name='name'
            {...register('name', {
             required: { value: true, message: "invalid" }
            })}
        />

        {errors.name && <p style={{color:'red'}}>{errors.name.message}</p>}

                <br/><br/>


            </form>


        </>

    )
}
export default Form;