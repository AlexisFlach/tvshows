import React from 'react'
import {Input} from '../../components/UI/Form/Input.styled'
import { SearchForm } from '../../components/UI/Form/Form.styled'
export const Form = () => {
  return (
    <SearchForm>
        <Input type="text" placeholder="Search for a show" />
    </SearchForm>
  )
}
