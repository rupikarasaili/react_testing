import {render, screen} from '@testing-library/react'
import Counter from './Counter'

describe('Counter', ()=>{
    test('should render correctly', ()=>{
        render(<Counter />)
        const h1Elem = screen.getByRole('heading', {
            level:1
        })
        const increaseBtn = screen.getByRole('button', {
            name: 'increase'
        })
        expect(h1Elem).toBeInTheDocument()
        expect(h1Elem).toHaveTextContent(0)
        expect(increaseBtn).toBeInTheDocument()
    })
    test('should increase count when increase button is clicked', ()=>{
        render(<Counter />)
        const increaseBtn = screen.getByRole('button', {
            name: 'increase'
        })
        increaseBtn.click()
        const h1Elem = screen.getByRole('heading', {
            level:1
        })
        expect(h1Elem).toHaveTextContent(1)
    })

})