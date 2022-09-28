import React from 'react'
import './EditDetalCanvas.style.scss'

const EditDetalCanvasNoteHeader = () => {
  return (
    <div
      className="NoteHeader"
      style={{
        backgroundColor: '#fff',
        borderRadius: 8,
        boxShadow: '0px 1px 2px gray',
        height: '1000px',
        paddingBottom: 15,
      }}
    >
      <div
        style={{
          backgroundColor: '#ff6700',
        }}
      >
        <h4 style={{color: '#fff', padding: '8px 15px'}}>Description</h4>
      </div>

      <h2 style={{padding: '0px 15px'}}>
        Define multiple Massive Transformative Purposes (MTPs)
      </h2>
      <p style={{padding: '0px 15px'}}>
        The starting poin for defining an Exponential Organization is to ask
        yourself why you want to be in this world.Then describe what the world
        would look like if your project were successful.Keep in mind that your
        task is to define a set of MTPs - one is not enough! <br />
        <br />
        Run an ideation session, using such techniques as brainstorming, 'what -
        ifs" and visual thinking.
      </p>
      <div
        style={{
          backgroundColor: '#ff6700',
        }}
      >
        <h4 style={{color: '#fff', padding: '8px 15px'}}>Description</h4>
      </div>
      <p style={{padding: '0px 15px'}}>
        Review the MTP section for ideas on how to implement a good MTP for your
        ordanization.
      </p>
      <p style={{padding: '0 15px', fontWeight: 'bold'}}>
        Learn in our hSchool
      </p>
      <ul style={{padding: '0 50px'}}>
        <li style={{color: '#ff6700'}}>
          How to implement a good MTP for your organization?
        </li>
        <li className="mt-1" style={{color: '#ff6700'}}>
          Massive Transformative Purpose Overview
        </li>
      </ul>
      <div
        style={{
          backgroundColor: '#ff6700',
        }}
      >
        <h4 style={{color: '#fff', padding: '8px 15px'}}>Tip</h4>
      </div>
      <p style={{padding: '0px 15px'}}>
        A set of sticky notes and a pen are all you need for a brainstorming
        session.
        <br />
        <br />
        Remember that you are in the gerernation phase of the ExO Sprint, the
        more ideas for MTPs you generate, the better.
        <br />
        <br />
        The underlying purpose here is not only to transform the industry but
        also to have o positive impact on the world. MTPs reflect and
        communicate this purpose.
        <br />
        <br />
        Remember that the MTP should be something you can share with customers,
        employees, investor and others.
      </p>
    </div>
  )
}

export default EditDetalCanvasNoteHeader
