import { ReactComponent as LocationIcon } from 'assets/icons/location.svg'
import { ReactComponent as CalendarIcon } from 'assets/icons/calendar.svg'
import { ReactComponent as SearchIcon } from 'assets/icons/search.svg'

import {
  Container,
  Fieldset,
  InputGroup,
  Input,
  SubmitButton,
} from './styles'

export const SearchForm = () => {
  return (
    <Container onSubmit={() => {}}>
      <Fieldset>
        <InputGroup>
          <LocationIcon />
          <Input type='text' placeholder='North Carolina, NC 90025' />
        </InputGroup>

        <InputGroup>
          <CalendarIcon />
          <Input type='text' placeholder='11/03/2021' />
        </InputGroup>

        <InputGroup>
          <CalendarIcon />
          <Input type='text' placeholder='12/12/2021' />
        </InputGroup>
      </Fieldset>

      <SubmitButton>
        <SearchIcon />
      </SubmitButton>
    </Container>
  )
}
