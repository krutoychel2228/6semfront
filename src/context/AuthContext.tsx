import { createContext, useReducer, Dispatch, ReactNode, useEffect } from "react"

export enum UserActions {
    SET,
    REMOVE
}

export type User = {
    email: string
    first_name: string
    last_name: string
    description: string
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    groups: any[]
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    gyms: any[]
    is_staff: boolean
    token: string
    id: number
    avatar: string
    phone: string
    username: string
} | null

type Action = {
    type: UserActions
    payload: User
}

type StateType = {
    user: User
}

type AuthContextType = {
    state: StateType
    dispatch: Dispatch<Action>
} | null

type ChildrenType = {
    children: ReactNode
}

export const AuthContext = createContext<AuthContextType>(null)

export const authReducer = (state: StateType, action: Action) => {
    switch (action.type) {
        case UserActions.SET:
            return { user: action.payload }
        case UserActions.REMOVE:
            return { user: null }
        default:
            return state
    }
}

export const AuthContextProvider = ({ children }: ChildrenType) => {
    const [state, dispatch] = useReducer(authReducer, {
        user: null
    })

    useEffect(() => {
        const user = localStorage.getItem('user')

        if (user) dispatch({ type: UserActions.SET, payload: JSON.parse(user) })
    }, [])

    return (
        <AuthContext.Provider value={{ state, dispatch }}>
            {children}
        </AuthContext.Provider>
    )
}