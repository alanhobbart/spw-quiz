import { FormikHelpers } from "formik";
import { useState } from "react";
import MultiChoiceList from "../multi-choice-list/multi-choice-list";
import Quiz, { Values, TextField, SubmitButton } from "./quiz";

export function Demo() {
    const [result, setResult] = useState<Values>();

    return (<div className="App">
        <Quiz 
            onSubmit={(
                values: Values,
                { setSubmitting }: FormikHelpers<Values>
            ) => {
                setResult(values);
            }}
        >
        <div>
            <MultiChoiceList 
                groupName="financiallyConfidentAnswerGroup"
                question="'Would you describe yourself as being ‘financially confident’?'"
                answers={[{
                    text: 'Not at all. I feel uncomfortable talking about money and don’t have any sort of financial plan in place.',
                    value: 'no'
                },
                {
                    text: 'So-so. I’m good at managing my day-to-day finances, but I haven’t given much thought to my long-term financial goals.',
                    value: 'maybe'
                },
                {
                    text: 'Yes, I trust that the decisions I’ve made about money aims to ensure that my finances will support my goals and ambitions throughout life.',
                    value: 'yes'
                }]
                }
            />
        </div>

        <SubmitButton
            title="Submit"
        />
        </Quiz>
        <div>{result?.name} {result?.email}</div>
    </div>)
}


export default Demo;
