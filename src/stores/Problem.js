import { observable, action } from 'mobx'

class ProblemStore {
  @observable problems = []
  @observable similarProblems = []
  @observable selectedProblemId

  get getProblems() {
    return this.problems
  }

  @action
  setProblems = problems => {
    this.problems = problems
  }

  get getSimilarProblems() {
    return this.similarProblems
  }

  @action
  setSimilarProblems = similarProblems => {
    this.similarProblems = similarProblems
  }

  get getSelectedProblemId() {
    return this.selectedProblemId
  }

  @action
  setSelectedProblemId = selectedProblemId => {
    this.selectedProblemId = selectedProblemId
  }
}

export default ProblemStore
