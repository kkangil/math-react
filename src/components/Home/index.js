import React from 'react'

import Problems from './problems'

export default ({
  problems,
  similarProblems,
  selectedProblemId,

  getSimilarProblems,
  deleteProblem,
  addProblemFromSimilar,
  swapProblem
}) => {
  return (
    <div className="flex-wrapper">
      <div className="problem-container border">
        <h2 className="title">학습지 상세 편집</h2>
        {
          problems.map((problem, index) => (
            <Problems
              key={problem.id}
              problem={problem}
              index={index}
              selectedProblemId={selectedProblemId}
              isProblem={true}
              getSimilarProblems={getSimilarProblems}
              deleteProblem={deleteProblem}
            />
          ))
        }
      </div>
      <div className="problem-container">
        <h2 className="title center">문항 교체/추가</h2>
        {
          selectedProblemId ? (
            similarProblems.map((problem, index) => (
              <Problems
                key={problem.id}
                problem={problem}
                index={index}
                selectedProblemId={selectedProblemId} addProblemFromSimilar={addProblemFromSimilar}
                swapProblem={swapProblem}
              />
            ))
          ) : (
              <div className="content no-result">
                <p>
                  <span>유사문항</span> 버튼을 누르면<br />
                  해당 문제의 유사 문항을 볼 수 있습니다
                </p>
              </div>
            )
        }
      </div>
    </div>
  )
}
