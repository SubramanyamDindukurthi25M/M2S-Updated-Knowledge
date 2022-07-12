import Logo from '../Assets/logo.png';
import {useForm} from 'react-hook-form';

export const LoginPage = () => {
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
            Email: '',
            Password: ''
        });
    }

    return (
        <section className="loginPage">
            <div className="container">

                {/* TalentMiner Logo */}
                <div className="talent-miner-logo">
                    <img 
                        src={Logo} 
                        alt="talentMiner-logo" 
                        />
                </div>
                {/* End of TalentMiner Logo */}

                {/* form */}
                <div className="form-section">
                    <form
                        autoComplete='off'
                        onSubmit={handleSubmit(onSubmit)}
                    >
                        <div className="form-section-inputs">
                            {/* 1 */}
                            <div className="form-group">
                                <input 
                                    type="text" 
                                    name="email" 
                                    placeholder='email-id'
                                    {...register("Email",{
                                        required:true,
                                        pattern: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i
                                    })}
                                />
                                {errors?.Email?.type === "required" && <p className='warningMessage'>This field is required</p>}
                                {errors?.Email?.type === "pattern" && (
                                    <p className='warningMessage'>Invalid Email Address</p>
                                )}
                            </div>

                            {/* 2 */}
                            <div className="form-group">
                                <input 
                                    type="text" 
                                    name="password" 
                                    placeholder='password'
                                    {...register("Password",{
                                        required:true,
                                        minLength:6,
                                        maxLength:12
                                    })}
                                />
                                {errors?.Password?.type === "required" && <p className='warningMessage'>This field is required</p>}
                                {errors?.Password?.type === "minLength" && (
                                    <p className='warningMessage'>Password should be atleast 6 characters.</p>
                                )}
                                {errors?.Password?.type === "maxLength" && (
                                    <p className='warningMessage'>Password should not be more than 12 characters.</p>
                                )}
                            </div>

                            {/* 3 */}
                            <div className="form-group">
                                <button
                                    type='submit'
                                    className="btnPrimary"
                                >
                                    Submit
                                </button>
                            </div>
                        </div>
                    </form>
                </div>
                {/* End of form */}

            </div>
            <p className='tagLine'>
                a new generation of talent platform
            </p>
        </section>
    )
}