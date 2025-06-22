import { mount } from '@vue/test-utils';
import { describe, expect, it } from 'vitest';
import Counter from './Counter.vue';

describe('Counter', () => {
  it('renders with default count of 0', () => {
    const wrapper = mount(Counter);
    expect(wrapper.text()).toContain('0');
  });

  it('renders with custom initial count', () => {
    const wrapper = mount(Counter, {
      props: { count: 5 },
    });
    expect(wrapper.text()).toContain('5');
  });

  it('increments counter when + button is clicked', async () => {
    const wrapper = mount(Counter);
    const incrementButton = wrapper.find('button:last-child');

    await incrementButton.trigger('click');
    expect(wrapper.text()).toContain('1');

    await incrementButton.trigger('click');
    expect(wrapper.text()).toContain('2');
  });

  it('decrements counter when - button is clicked', async () => {
    const wrapper = mount(Counter, {
      props: { count: 5 },
    });
    const decrementButton = wrapper.find('button:first-child');

    await decrementButton.trigger('click');
    expect(wrapper.text()).toContain('4');

    await decrementButton.trigger('click');
    expect(wrapper.text()).toContain('3');
  });

  it('can go below zero', async () => {
    const wrapper = mount(Counter);
    const decrementButton = wrapper.find('button:first-child');

    await decrementButton.trigger('click');
    expect(wrapper.text()).toContain('-1');
  });

  it('has correct button text', () => {
    const wrapper = mount(Counter);
    const buttons = wrapper.findAll('button');

    expect(buttons[0].text()).toBe('-');
    expect(buttons[1].text()).toBe('+');
  });

  it('displays counter value between buttons', () => {
    const wrapper = mount(Counter, {
      props: { count: 42 },
    });
    const span = wrapper.find('span');

    expect(span.text()).toBe('42');
  });
});
