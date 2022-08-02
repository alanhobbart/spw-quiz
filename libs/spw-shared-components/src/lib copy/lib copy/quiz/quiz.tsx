import {
    Formik,
    Form as FormikForm,
    Field,
    ErrorMessage,
    useFormikContext,
    FormikHelpers
} from 'formik';

/* eslint-disable-next-line */
export interface QuizProps {
  children: JSX.Element[] | JSX.Element,
  initialValues?: null,
  onSubmit: (values: Values,
    { setSubmitting }: FormikHelpers<Values>) => void
}

export interface Values {
  name: string;
  email: string;
}

export function Quiz(props: QuizProps) {

  const {onSubmit} = props;
  
  return (
    <Formik
    initialValues={{
      name: '',
      email: '',
    }}
    onSubmit={onSubmit}
    >
        <FormikForm className="needs-validation">
            {props.children}
        </FormikForm>
    </Formik>
  );
}

/* eslint-disable-next-line */
export interface TextFieldProps {
  name: string,
  label: string,
  placeholder?: string,
  [rest: string]: any
}

export function TextField(props: TextFieldProps) {
  const { name, label, placeholder, ...rest } = props
  return (
      <>
          {label && <label htmlFor={name}>{label}</label>}
          <Field
              className="form-control"
              type="text"
              name={name}
              id={name}
              placeholder={placeholder || ""} 
              {...rest}
          />
          <ErrorMessage name={name} render={msg => <div style={{ color: 'red' }} >{msg}</div>} />
      </>
  )
}

/* eslint-disable-next-line */
export interface ButtonProps {
  title: string,
  [rest: string]: any
}

export function SubmitButton(props: ButtonProps){
  const { title, ...rest } = props;
  const { isSubmitting } = useFormikContext();
  
  return (
      <button type="submit" {...rest} disabled={isSubmitting}>{title}</button>
  )
}

export default Quiz;
