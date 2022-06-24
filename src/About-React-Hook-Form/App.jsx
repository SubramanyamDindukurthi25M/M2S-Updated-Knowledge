import {useForm} from 'react-hook-form';

const App = () => {
    const {
        register,
        handleSubmit,
        formState: {
            errors
        },
        reset
    } = useForm();
    
    const onSubmit = (data) => {
        console.log(data);
        // To reset form
        reset({
            UserName: '',
            Email: '',
            Password: '',
            NumberValue: '',
            TextArea: '',
            favNum: '',
            favNumOne: ''
        });
    }

    return (
        <section className='my-5'>
            <h2 className="text-capitalize text-center my-2 text-warning">
                registration form 
            </h2>

            <form 
                autoComplete="off" 
                className='p-2'
                onSubmit={handleSubmit(onSubmit)}
            >
                {/* 1 */}
                <div className="form-group">
                    <label>
                        User Name
                    </label>
                    <input 
                        type="text" 
                        name="username"
                        className="form-control"
                        placeholder="username"
                        {...register("UserName",{
                            required:true,
                            maxLength:20,
                            pattern: /^[A-Za-z]+$/i
                        })}
                    />
                    {errors?.UserName?.type === "required" && <p className='text-danger'>This field is required</p>}
                    {errors?.UserName?.type === "maxLength" && (
                        <p className='text-danger'>User name cannot exceed 20 characters</p>
                    )}
                    {errors?.UserName?.type === "pattern" && (
                        <p className='text-danger'>Alphabetical characters only</p>
                    )}
                </div>

                {/* 2 */}
                <div className="form-group">
                    <label>
                        Email
                    </label>
                    <input 
                        type="text" 
                        name="email"
                        placeholder="email-id"
                        className="form-control"
                        {...register("Email",{
                            required:true,
                            pattern: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i
                        })}
                    />
                    {errors?.Email?.type === "required" && <p className='text-danger'>This field is required</p>}
                    {errors?.Email?.type === "pattern" && (
                        <p className='text-danger'>Invalid Email Address</p>
                    )}
                </div>

                {/* 3 */}
                <div className="form-group">
                    <label>
                        Password
                    </label>
                    <input 
                        type="text" 
                        name="password"
                        className="form-control"
                        placeholder="password"
                        {...register("Password",{
                            required:true,
                            minLength:6,
                            maxLength:12
                        })}
                    />
                    {errors?.Password?.type === "required" && <p className='text-danger'>This field is required</p>}
                    {errors?.Password?.type === "minLength" && (
                        <p className='text-danger'>Password should be atleast 6 characters.</p>
                    )}
                    {errors?.Password?.type === "maxLength" && (
                        <p className='text-danger'>Password should not be more than 12 characters.</p>
                    )}
                </div>

                {/* 4 */}
                <div className="form-group">
                    <label>
                        Select Option
                    </label>
                    <select multiple className='form-control' {...register('NumberValue',{
                        required:true
                    })}>
                        <option value='1'>1</option>
                        <option value='2'>2</option>
                        <option value='3'>3</option>
                        <option value='4'>4</option>
                        <option value='5'>5</option>
                    </select>
                    {errors?.NumberValue?.type === "required" && <p className='text-danger'>This field is required</p>}
                </div>

                {/* 5 */}
                <div className="form-group">
                    <label>
                        Enter Your Age
                    </label>

                    <input 
                        type="number"
                        className='form-control'
                        placeholder='Enter Your Age'
                        {...register("Age",{
                            required:true,
                            min:18,
                            max:55
                        })}
                    />
                    {errors?.Age?.type === "required" && <p className='text-danger'>This field is required</p>}
                    {errors?.Age?.type === "min" && (
                        <p className='text-danger'>Age should not be less than 18</p>
                    )}
                    {errors?.Age?.type === "max" && (
                        <p className='text-danger'>Age should not be greater than 55</p>
                    )}
                </div>

                {/* 6 */}
                <div className="form-group">
                    <label>
                        Example textarea 
                    </label>
                    <textarea 
                        cols="30" 
                        rows="10"
                        className='form-control'
                        {...register('TextArea',{
                            required:true,
                            minLength:15,
                            maxLength:50
                        })}
                    ></textarea>
                    {errors?.TextArea?.type === "required" && <p className='text-danger'>This field is required</p>}
                    {errors?.TextArea?.type === "min" && (
                        <p className='text-danger'>Message should not be less than 15</p>
                    )}
                    {errors?.TextArea?.type === "max" && (
                        <p className='text-danger'>Message should not be greater than 50</p>
                    )}
                </div>

                {/* 7 */}
                <section>
                <div className="form-check form-check-inline">
                    <input 
                        type="radio" 
                        value='option1'
                        className='form-check-input'
                        {...register('favNum',{required:true})}
                    />
                    <label
                        className='form-check-label'
                    >
                        1
                    </label>
                </div>
                <div className="form-check form-check-inline">
                    <input 
                        type="radio" 
                        value='option2'
                        className='form-check-input'
                        {...register('favNum',{required:true})}
                    />
                    <label
                        className='form-check-label'
                    >
                        2
                    </label>
                </div>
                <div className="form-check form-check-inline">
                    <input 
                        type="radio" 
                        value='option3'
                        className='form-check-input'
                        {...register('favNum',{required:true})}
                    />
                    <label
                        className='form-check-label'
                    >
                        3
                    </label>
                </div>
                {errors?.favNum?.type === "required" && <p className='text-danger'>This field is required</p>}
                </section>

                {/* 8 */}
                <section>
                <div className="form-check form-check-inline">
                    <input 
                        type="checkbox" 
                        value='option1'
                        className='form-check-input'
                        {...register('favNumOne',{required:true})}
                    />
                    <label
                        className='form-check-label'
                    >
                        1
                    </label>
                </div>
                <div className="form-check form-check-inline">
                    <input 
                        type="checkbox" 
                        value='option2'
                        className='form-check-input'
                        {...register('favNumOne',{required:true})}
                    />
                    <label
                        className='form-check-label'
                    >
                        2
                    </label>
                </div>
                <div className="form-check form-check-inline">
                    <input 
                        type="checkbox" 
                        value='option3'
                        className='form-check-input'
                        {...register('favNumOne',{required:true})}
                    />
                    <label
                        className='form-check-label'
                    >
                        3
                    </label>
                </div>
                {errors?.favNumOne?.type === "required" && <p className='text-danger'>This field is required</p>}
                </section>

                <button
                    type='submit'
                    className="btn btn-primary"
                >
                    Submit
                </button>
            </form>
        </section>
    )
}

export default App;