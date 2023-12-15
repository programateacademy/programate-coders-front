import Button from "./Button";
import {render, screen} from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import '@testing-library/jest-dom'
import ListDrive from "../../molecules/ListDrive/ListDrive";
import { programateStore } from "../../../store/programateStore";
{workbooks}=programateStore
test('loads and displays greeting', async () => {
    // ARRANGE
    render(<ListDrive source={workbooks.academy} nameSource={"workbooks"}/>)
  
    // ACT
    await userEvent.click(screen.getByText('Load Greeting'))
    await screen.findByRole('heading')
  
    // ASSERT
    expect(screen.getByRole('heading')).toHaveTextContent('hello there')
    expect(screen.getByRole('button')).toBeDisabled()
  })