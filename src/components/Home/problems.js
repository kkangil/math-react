import React from 'react'

export default ({
  problem,
  index,
  isProblem,
  selectedProblemId,

  getSimilarProblems,
  deleteProblem,
  addProblemFromSimilar,
  swapProblem
}) => {
  return (
    <div className="content">
      <div className="content__desc">
        <p className="content__desc__type">{problem.problemType}</p>
        <p className="content__desc__unit">{problem.unitName}</p>
        {
          isProblem ? (
            <div>
              <button className={`btn mr8 ${selectedProblemId === problem.id ? 'active' : ''}`}
                onClick={() => getSimilarProblems(problem.id)}
              >유사 문항</button>
              <button className="btn"
                onClick={() => deleteProblem(problem.id)}
              >삭제</button>
            </div>
          ) : (
              <div>
                <button className="btn mr8"
                  onClick={() => addProblemFromSimilar(problem, index)}
                >추가</button>
                <button className="btn"
                  onClick={() => swapProblem(index)}
                >교체</button>
              </div>
            )
        }

      </div>
      <div className="content__problem">
        <p>{index + 1}</p>
        <img
          src={problem.problemURL}
          alt={problem.unitName}
        />
      </div>
    </div>
  )
}