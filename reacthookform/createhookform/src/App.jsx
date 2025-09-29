import { useForm } from 'react-hook-form'
import './App.css'

function App() {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm({ mode: "onChange" })  // 👈 validation on typing

  async function onSubmit(data) {
    //api call ko simulate karte hai
    await new Promise((resolve)=>setTimeout(resolve,5000));
    console.log("Submitting the form:", data);
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div>
        <label>First Name:</label>
        <input
          className={errors.firstName ? "input-error" : ""}
          {...register("firstName", {
            required: "First name is required",
            minLength: { value: 3, message: "Minimum length is 3" },
            maxLength: { value: 20, message: "Maximum length is 20" },
          })}
        />
        {errors.firstName && <p className="error-msg">{errors.firstName.message}</p>}
      </div>
      <br />

      <div>
        <label>Middle Name:</label>
        <input
          className={errors.middleName ? "input-error" : ""}
          {...register("middleName", {
            required: "Middle name is required",
            minLength: { value: 3, message: "Minimum length is 3" },
            maxLength: { value: 20, message: "Maximum length is 20" },
          })}
        />
        {errors.middleName && <p className="error-msg">{errors.middleName.message}</p>}
      </div>
      <br />

      <div>
        <label>Last Name:</label>
        <input
          className={errors.lastName ? "input-error" : ""}
          {...register("lastName", {
            required: "Last name is required",
            minLength: { value: 3, message: "Minimum length is 3" },
            maxLength: { value: 20, message: "Maximum length is 20" },
            pattern: {
              value: /^[A-Za-z]+$/i,
              message: "Last name must contain only letters",
            },
          })}
        />
        {errors.lastName && <p className="error-msg">{errors.lastName.message}</p>}
      </div>
      <br />

      <input 
        type="submit" 
        disabled={isSubmitting} 
        value={isSubmitting ? "Submitting..." : "Submit"} 
      />
    </form>
  )
}

export default App
