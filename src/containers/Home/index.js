import React, { Component } from 'react'
import { observer, inject } from 'mobx-react'
import _ from 'lodash'

import ProblemActions from '@/actions/ProblemActions'

import HomeComponent from '@/components/Home'

@inject('problemStore')
@observer
export default class HomeContainer extends Component {
  componentDidMount() {
    this.getProblems()
  }

  getProblems = async () => {
    try {
      const problems = await ProblemActions.getProblems()
      this.props.problemStore.setProblems(problems)
    } catch (err) {
      alert(err.message || '에러가 발생하였습니다.')
    }
  }

  getSimilarProblems = async id => {
    try {
      const similarProblems = await ProblemActions.getSimilarProblems()
      this.props.problemStore.setSimilarProblems(similarProblems)
      this.props.problemStore.setSelectedProblemId(id)
    } catch (err) {
      alert(err.message || '에러가 발생하였습니다.')
    }
  }

  deleteProblem = id => {
    const problems = [...this.props.problemStore.getProblems].filter(problem => problem.id !== id)
    this.props.problemStore.setProblems(problems)
    if (id === this.props.problemStore.getSelectedProblemId) {
      this.props.problemStore.setSimilarProblems([])
      this.props.problemStore.setSelectedProblemId(undefined)
    }
  }

  addProblemFromSimilar = (problem, index) => {
    const problems = [...this.props.problemStore.getProblems]
    const similarProblems = [...this.props.problemStore.getSimilarProblems]

    problems.push(problem)
    similarProblems.splice(index, 1)

    this.props.problemStore.setProblems(problems)
    this.props.problemStore.setSimilarProblems(similarProblems)
  }

  swapProblem = similarIndex => {
    const problems = [...this.props.problemStore.getProblems]
    const similarProblems = [...this.props.problemStore.getSimilarProblems]

    const problemIndex = _.findIndex(problems, problem => problem.id === this.props.problemStore.getSelectedProblemId)
    const similarProblem = similarProblems[similarIndex]

    problems.splice(problemIndex, 1, similarProblem)

    this.props.problemStore.setProblems(problems)
    this.props.problemStore.setSelectedProblemId(undefined)
  }

  render() {
    return (
      <HomeComponent
        problems={this.props.problemStore.getProblems}
        similarProblems={this.props.problemStore.getSimilarProblems}
        selectedProblemId={this.props.problemStore.getSelectedProblemId}
        getSimilarProblems={this.getSimilarProblems}
        deleteProblem={this.deleteProblem}
        addProblemFromSimilar={this.addProblemFromSimilar}
        swapProblem={this.swapProblem}
      />
    )
  }
}
