import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import {getQueriesForElement} from "@testing-library/react"

const render = (component) => {
    const root = ReactDOM.createRoot(document.getElementById('root'));
    root.render(
      <React.StrictMode>
        {component}
      </React.StrictMode>
    );

    getQueriesForElement(root)
}

test('renders the correct content', () => {
    render()

    const {getByText, getByLabelText } = render(<App />)

    expect(getByText("myworkouts")).not.ToBeNull()
    expect(getByLabelText("leg day")).not.toBeNull()
    expect(root.querySelctor("h2").textContent).toBe("re")
}

)
