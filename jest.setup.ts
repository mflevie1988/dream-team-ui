import '@testing-library/jest-dom'
import 'jest-axe/extend-expect';

window.scrollTo = jest.fn();
global.open = jest.fn();
