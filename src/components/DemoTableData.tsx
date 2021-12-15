import { TeamData, Submission } from "./types"

const contestDuration = 120
const problemsCount = 6

const list : TeamData[] = [
  {
    name: "Harbour.Space University",
    submissions: [{
        time: 1,
        problem: 0,
        verdict: true
      },
      {
        time: 7,
        problem: 1,
        verdict: true
      },
      {
        time: 18,
        problem: 2,
        verdict: true
      },
      {
        time: 36,
        problem: 3,
        verdict: true
      },
      {
        time: 50,
        problem: 4,
        verdict: false
      },
      {
        time: 57,
        problem: 4,
        verdict: true
      }
    ]
  },
  {
    name: "ITMO University",
    submissions: [{
        time: 0.55,
        problem: 0,
        verdict: true
      },
      {
        time: 4.7,
        problem: 1,
        verdict: true
      },
      {
        time: 10.6,
        problem: 2,
        verdict: true
      },
      {
        time: 29.6,
        problem: 3,
        verdict: true
      },
      {
        time: 67.35,
        problem: 4,
        verdict: false
      },
      {
        time: 112,
        problem: 5,
        verdict: false
      },
      {
        time: 114,
        problem: 5,
        verdict: false
      },
      {
        time: 116,
        problem: 5,
        verdict: true
      }
    ]
  },
  {
    name: "Moscow State University",
    submissions: [{
        time: 1,
        problem: 0,
        verdict: true
      },
      {
        time: 16,
        problem: 1,
        verdict: false
      },
      {
        time: 18,
        problem: 1,
        verdict: true
      },
      {
        time: 27,
        problem: 2,
        verdict: true
      },
      {
        time: 71,
        problem: 3,
        verdict: false
      },
      {
        time: 82,
        problem: 3,
        verdict: false
      },
      {
        time: 85,
        problem: 3,
        verdict: false
      },
      {
        time: 88,
        problem: 3,
        verdict: false
      },
      {
        time: 97,
        problem: 3,
        verdict: true
      }
    ]
  },
  {
    name: "Higher School of Economics",
    submissions: [{
        time: 1,
        problem: 0,
        verdict: true
      },
      {
        time: 15,
        problem: 1,
        verdict: false
      },
      {
        time: 18,
        problem: 1,
        verdict: true
      },
      {
        time: 53,
        problem: 2,
        verdict: true
      },
      {
        time: 105,
        problem: 3,
        verdict: true
      }
    ]
  },
  {
    name: "Massachusetts Institute of Technology",
    submissions: [{
        time: 1,
        problem: 0,
        verdict: true
      },
      {
        time: 28,
        problem: 1,
        verdict: true
      },
      {
        time: 47,
        problem: 2,
        verdict: true
      },
      {
        time: 116,
        problem: 3,
        verdict: false
      },
      {
        time: 119,
        problem: 3,
        verdict: false
      }
    ]
  },
  {
    name: "Harvard University",
    submissions: [{
        time: 0.5,
        problem: 0,
        verdict: true
      },
      {
        time: 14,
        problem: 1,
        verdict: true
      },
      {
        time: 26,
        problem: 2,
        verdict: true
      },
      {
        time: 93,
        problem: 3,
        verdict: false
      },
      {
        time: 97,
        problem: 3,
        verdict: false
      }
    ]
  },
  {
    name: "KAIST",
    submissions: [{
        time: 13.1,
        problem: 0,
        verdict: true
      },
      {
        time: 47.1,
        problem: 1,
        verdict: false
      },
      {
        time: 86,
        problem: 1,
        verdict: false
      },
      {
        time: 91.65,
        problem: 1,
        verdict: true
      }
    ]
  },
  {
    name: "Kazakh-British Technical University",
    submissions: [{
        time: 3.05,
        problem: 0,
        verdict: true
      },
      {
        time: 72.25,
        problem: 1,
        verdict: false
      },
      {
        time: 81.6,
        problem: 1,
        verdict: false
      },
      {
        time: 87.33,
        problem: 1,
        verdict: false
      },
      {
        time: 89.65,
        problem: 1,
        verdict: false
      },
      {
        time: 92.05,
        problem: 1,
        verdict: false
      },
      {
        time: 97.25,
        problem: 1,
        verdict: false
      },
      {
        time: 107.55,
        problem: 1,
        verdict: false
      },
      {
        time: 110.05,
        problem: 1,
        verdict: false
      }
    ]
  }
]

export function getData() {
  return list
}

export function getSubmissions() {
  let submissionList : Submission[] = []

  for (let i = 0; i < list.length; i++) {
    for (let j = 0; j < list[i].submissions.length; j++) {
      let current = list[i].submissions[j]
      submissionList.push({...current, team: i})
    }
  }

  submissionList.sort((a, b) => {
    return a.time - b.time
  })

  return submissionList
}

export function getContestDuration() {
  return contestDuration
}

export function getProblemsCount() {
  return problemsCount
}

export function getTeamsCount() {
  return list.length
}