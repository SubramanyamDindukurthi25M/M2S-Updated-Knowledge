import { useState } from "react";
import { FormField } from "./FormField";
import axios from "axios";
import swal from "sweetalert";

const baseUrl = 'https://course-api.com/axios-tutorial-post';

export const SecondAxios = () => {
    const [studentValues, setStudentValues] = useState({
        name: '',
        email: ''
    })

    const handleSubmit = (e) => {
        e.preventDefault();

        const data = {
            name: studentValues.name,
            email: studentValues.email
        }

        axios
            .post(baseUrl, data)
            .then((response) => {
                swal(response.data.msg);
            })
            .catch((error) => {
                swal(error.message);
            })

        // To reset form values
        setStudentValues({
            name: '',
            email: ''
        })
    }

    return (
        <>
            <form>
                <div className="form-group px-2">
                    <FormField
                        label='Name'
                        inputProps={{type:'text',placeholder:'Name...'}}
                        value={studentValues.name}
                        onChange={(e) => setStudentValues({...studentValues,name:e.target.value})}
                    />
                    <br />
                    <FormField
                        label='Email'
                        inputProps={{type:'email',placeholder:'Email...'}}
                        value={studentValues.email}
                        onChange={(e) => setStudentValues({...studentValues,email:e.target.value})}
                    />
                </div>
                <button
                    className="btn btn-primary"
                    onClick={handleSubmit}
                >
                    Login 
                </button>
            </form>
        </>
    )
}