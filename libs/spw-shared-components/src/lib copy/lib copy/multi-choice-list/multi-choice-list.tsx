import { Field } from "formik";

export interface Answer {
  text: string,
  value: string
}
/* eslint-disable-next-line */
export interface MultiChoiceListProps {
  groupName: string;
  question: string,
  answers: Answer[]
}

export function MultiChoiceList(props: MultiChoiceListProps) {
  const {question, answers, groupName} = props;
  return (
    <div>
      <h3 className="mb-5 text-lg font-medium text-gray-900 dark:text-white">{question}</h3>
      <ul className="grid gap-6 w-full md:grid-cols-1">
        {
          answers.map((answer) => (
            <li>
              <Field
                className="hidden peer"
                type="radio"
                name={groupName}
                id={answer.value}
                value={answer.value}
                data-testid={answer.value}
              />
              <label htmlFor={answer.value} className="inline-flex justify-between items-center p-5 w-full text-white-500 bg-white rounded-lg border border-gray-200 cursor-pointer dark:hover:text-gray-300 dark:border-gray-700 dark:peer-checked:text-black peer-checked:bg-white hover:bg-gray-100 dark:text-gray-400 dark:bg-gray-800 dark:hover:bg-gray-700">                           
                  <div className="block">
                      <div className="w-full">{answer.text}</div>
                  </div>
              </label>
          </li>

          ))
        }
      </ul>
    </div>

  );
}

export default MultiChoiceList;
