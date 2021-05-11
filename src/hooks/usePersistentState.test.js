import { act, renderHook } from '@testing-library/react-hooks'
import usePersistentState from './usePersistentState'

test('should usePersistentState', () => {
    const foo = { a: 'A' }
    const { result } = renderHook(() => usePersistentState(foo));

    expect(result.current[0]).toBe(foo);
    expect(typeof result.current[1]).toBe('function');

    act(() => {
        result.current[1](foo)
    });

    expect(result.current[0]).toBe(foo);
})
