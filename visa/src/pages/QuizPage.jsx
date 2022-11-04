import React, { useContext } from "react";
import { useMutation, useQuery } from "react-query";
import { useNavigate } from "react-router-dom";
import { VisaContext } from "../contexts/visaContext";
import { QUESTION } from "../rquery";
import { VisaService } from "../services/VisaService";

export default function QuizPage() {
  const { inid, resetAll } = useContext(VisaContext);
  const navigate = useNavigate();
  const {
    data: questionData,
    refetch,
    isError,
  } = useQuery([QUESTION, inid], () => VisaService.getQuestion(inid), {
    enabled: !!inid,
  });

  const { mutate: mutatePostQuestion } = useMutation(
    (values) => VisaService.postQuestion(values, inid),
    {
      onSuccess: () => {
        refetch();
      },
    }
  );

  const handleBtnClick = (id) => {
    mutatePostQuestion({ choice: id });
  };

  if (isError) {
    resetAll();
    navigate("/");
    return;
  }

  if (questionData?.data?.message === "no_question") {
    navigate("/results");
    return;
  }

  return (
    <div>
      <div className="container">
        <div className="row justify-content-center align-items-center">
          <div className="col-lg-6">
          <h1>{questionData?.data?.data.title}</h1>
      <br />
      {questionData?.data?.data.answers.map((a) => {
        return <button onClick={() => handleBtnClick(a.id)}>{a.title}</button>;
      })}
          </div>
        </div>
      </div>
    </div>
  );
}
