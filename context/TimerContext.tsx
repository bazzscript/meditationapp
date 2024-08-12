import {
    Dispatch,      // Type alias for a function that can dispatch an action.
    ReactNode,     // Type for anything that can be rendered (elements, strings, numbers, etc.).
    SetStateAction,// Type that represents a new state or a function to update the state.
    createContext, // Function to create a context object in React.
    useState,      // Hook that adds state to a functional component.
} from "react";

// Define the shape of the context's value. This interface outlines the properties
// and their types that the TimerContext will provide to consumers.
interface TimerContextProps {
    duration: number; // The current duration value (in seconds, for example).
    setDuration: Dispatch<SetStateAction<number>>; // A function to update the duration.
}

// Create the TimerContext with a default value. The default value sets `duration`
// to 10 and provides a no-op function for `setDuration`, which is required to match the interface.
export const TimerContext = createContext<TimerContextProps>({
    duration: 10,         // Initial/default duration value
    setDuration: () => {}, // Default function that does nothing (to avoid undefined errors).
});

// Define the shape of the props that TimerProvider will accept.
// It expects a `children` prop, which represents the nested components that
// will be wrapped by the TimerProvider.
interface TimerProviderProps {
    children: ReactNode; // Any valid React node (elements, strings, numbers, etc.).
}

// The TimerProvider component, which wraps its children with TimerContext.Provider.
// This component manages the `duration` state and provides the `setDuration` function,
// allowing any component within this provider to access or update the duration.
const TimerProvider = ({ children }: TimerProviderProps) => {
    // useState hook to manage the duration state.
    // `duration` holds the current value, and `setDuration` is used to update it.
    const [duration, setDuration] = useState(10);

    // Return the context provider component. It passes the current `duration` and `setDuration`
    // function down to all children components, allowing them to access and modify the duration.
    return (
        <TimerContext.Provider value={{ duration, setDuration }}>
            {children}
        </TimerContext.Provider>
    );
};

// Export the TimerProvider component so that other parts of the app can use it
// to wrap their components and gain access to the TimerContext.
export default TimerProvider;
