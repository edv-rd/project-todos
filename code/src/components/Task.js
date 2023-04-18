import React from 'react'
import { useSelector } from 'react-redux'
import styled from 'styled-components'
import CheckBox from './CheckBox'
import DeleteButton from './DeleteButton'

const StyledContainer = styled.div``

const StyledText = styled.p`
font-size: 12px;

&.completed {
    color: green;
    text-decoration: line-through;
}
`

const Task = ({ id }) => {
  const task = useSelector((state) => state.tasks.find((t) => t.id === id))
  return (
    <StyledContainer>
      <StyledText className={
        task.complete
          && 'completed'
      }>
        {task.text}
      </StyledText>
      <CheckBox id={id} />
      <DeleteButton id={id} />
    </StyledContainer>
  );
}

export default Task;