import { createContext, useEffect, useState } from "react";
import { IAuthProviderProps, IContext, IUser } from "./types";
import { LoginRequest, getUserLocalStorage, setUserLocalStorage } from "./util";

export const AuthContext = createContext<IContext>({} as IContext)

export const AuthProvider = ({ children }: IAuthProviderProps) => {

  useEffect(() => {
    const user = getUserLocalStorage()
    user? setUser(user) : null
  }, [])

  const [user, setUser] = useState<IUser | null>()

  async function authenticate(email: string, password: string) {
    const response = await LoginRequest(email, password)
    const payload = {token: response.token, email}
    setUser(payload)
    setUserLocalStorage(payload)
  }
  
  async function logout() {
    setUser(null)
    setUserLocalStorage(null as any)
  }

  return (
    <AuthContext.Provider value={{ ...user, authenticate, logout }}>
      {children}
    </AuthContext.Provider>
  )
}