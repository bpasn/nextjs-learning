import React, {
    createContext,
    useContext,
    useState
} from 'react'

interface LoadingContextProps {
    isLoading: boolean;
    setLoading: (l: boolean) => void;
}

const LoadingContext = createContext<LoadingContextProps | undefined>(undefined);

export const useLoading = () => {
    const context = useContext(LoadingContext);
    if (!context) {
        throw new Error("useLoading must be used winthin a LoadingProvider");
    }
    return context;
}

const LoadingProviderSecond = ({
    children
}: {
    children: React.ReactNode
}) => {
    const [isLoading, setLoading] = useState(false);
    return (
        <LoadingContext.Provider value={{ isLoading, setLoading }}>
            {children}
        </LoadingContext.Provider>
    )
}

export default LoadingProviderSecond