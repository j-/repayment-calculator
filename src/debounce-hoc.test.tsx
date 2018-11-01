import * as React from 'react';
import { mount } from 'enzyme';
import { debounce } from './debounce-hoc';

beforeEach(() => {
	jest.useFakeTimers();
});

it('is a function', () => {
	expect(debounce).toBeInstanceOf(Function);
});

it('returns a component', () => {
	const Result = debounce(1000, () => null);
	expect(Result).toBeInstanceOf(Function);
});

it('returns a component', () => {
	const Result = debounce(1000, () => null);
	expect(() => {
		mount(<Result />);
	}).not.toThrow();
});

it('renders the child component', () => {
	const Inner = () => <div>Hello world</div>;
	const Outer = debounce(1000, Inner);
	const wrapper = mount(<Outer />);
	expect(wrapper.find(Inner)).toHaveLength(1);
	expect(wrapper.find(Inner).text()).toBe('Hello world');
});

it('passes through props immediately the first time', () => {
	type Props = { name: string }
	const Inner: React.SFC<Props> = ({ name }) => <div>Hello {name}</div>;
	const Outer = debounce(1000, Inner);
	const wrapper = mount(<Outer name="world" />);
	expect(wrapper.find(Inner).text()).toBe('Hello world');
});

it('does not pass through prop changes immediately', () => {
	type Props = { name: string }
	const Inner: React.SFC<Props> = ({ name }) => <div>Hello {name}</div>;
	const Outer = debounce(1000, Inner);
	const wrapper = mount(<Outer name="somebody" />);
	wrapper.setProps({ name: 'world' });
	expect(wrapper.find(Inner).text()).toBe('Hello somebody');
});

it('passes through props after a delay', () => {
	type Props = { name: string }
	const Inner: React.SFC<Props> = ({ name }) => <div>Hello {name}</div>;
	const Outer = debounce(1000, Inner);
	const wrapper = mount(<Outer name="somebody" />);
	wrapper.setProps({ name: 'world' });
	jest.runAllTimers();
	expect(wrapper.find(Inner).text()).toBe('Hello world');
});
