import { ReactComponent as LocationIcon } from 'assets/icons/location.svg'
import { ReactComponent as CalendarIcon } from 'assets/icons/calendar.svg'
import { ReactComponent as SearchIcon } from 'assets/icons/search.svg'

import * as S from './styles'

export const SearchForm = () => {
  return (
    <S.Container onSubmit={() => {}}>
      <S.Content>
        <S.InputGroup>
          <LocationIcon />
          <S.Input
            type='text'
            placeholder='North Carolina, NC 90025'
            readOnly
          />
        </S.InputGroup>

        <S.InputGroup>
          <CalendarIcon />
          <S.Input type='text' placeholder='11/03/2021' readOnly />
        </S.InputGroup>

        <S.InputGroup>
          <CalendarIcon />
          <S.Input type='text' placeholder='12/12/2021' readOnly />
        </S.InputGroup>
      </S.Content>

      <S.SubmitButton>
        <SearchIcon />
      </S.SubmitButton>
    </S.Container>
  )
}
