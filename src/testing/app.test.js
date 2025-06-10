import { render, screen} from "@testing-library/react"
import { MemoryRouter } from "react-router-dom"
import App from "../App"
import userEvent from "@testing-library/user-event";


describe('routing test', () => {

    test('render dashboard by default', () => {
        render(
            <MemoryRouter initialEntries={["/"]}>
                <App/>
            </MemoryRouter>
        )
        expect(screen.getByText(/Dashboard/i)).toBeInTheDocument()
    });

    test('leaderboard navigation', async() => {
        render(
            <MemoryRouter>
                <App/>
            </MemoryRouter>
        )
        const leader = screen.getByText(/leaderboard/i)
        await userEvent.click(leader)
        expect(screen.getByText(/Sales Leaderboard/i)).toBeInTheDocument()
    });
})

