import { render, fireEvent } from '../utilities/test';
import Survey from './Survey';

const sections = [
  {
    name: "Preliminary",
    questions: []
  }
]

test('loads and displays greeting', async () => {
  // ARRANGE
  render(<Survey sections={sections} />)

  // ACT
  await userEvent.click(screen.getByText('Load Greeting'))
  await screen.findByRole('heading')

  // ASSERT
  expect(screen.getByRole('heading')).toHaveTextContent('hello there')
  expect(screen.getByRole('button')).toBeDisabled()
})
