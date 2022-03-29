import { render, screen } from '@testing-library/react';
import userEvent from "@testing-library/user-event";
import '@testing-library/jest-dom'
import React from 'react'
import App from './App';

describe('All Test', () => {
  let emoji, input;

  beforeEach(() => {
    render(<App/>)
    emoji = screen.getByText(/100/i)
    input = screen.getByPlaceholderText(/search emoji/i)
  })

  test('header', () => {
    const header = screen.getByText(/Emoji Search/i)
    expect(header).toBeInTheDocument();
  })

  test('emoji list render', () => {
    expect(emoji).toBeInTheDocument;
  })

  test('filter', () => {
    const emojiText = 'grim'
    userEvent.type(input, emojiText)
    expect(emoji).not.toBeInTheDocument()
  })

  test('copy', () => {
    document.execCommand = jest.fn()
    userEvent.click(emoji)
    expect(document.execCommand).toBeCalledWith('copy')

    const copied = window.ClipboardData;
    expect(copied).toEqual(emoji.value)
  })
})