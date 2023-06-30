import React from 'react'

export default function Skills({skills}) {
    const[loggedIn, setLoggedIn] = React.useState(false)
  return (
    <div>
        <h2>List of Skills</h2>
      <ul>
        {skills.map(skill => (
            <li key = {skill.id}>{skill.name}</li>
        ))}
      </ul>
      {loggedIn
      ?(<button>start working</button>)
      :(<button>login</button>)
      }
    </div>
  )
}