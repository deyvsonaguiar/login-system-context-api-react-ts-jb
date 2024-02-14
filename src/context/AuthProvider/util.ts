import { Api } from "../../services/Api"
import { IUser } from "./types"

export function setUserLocalStorage(user: IUser) {
  localStorage.setItem("u", JSON.stringify(user))
}
export function getUserLocalStorage() {
  const json = localStorage.getItem("u")
  //!json? null : JSON.parse(json)
  if(!json) {
    return null
  }
  const user = JSON.parse(json)
  return user ?? null
}

export async function LoginRequest (email: string, password: string) {
  try {
    const request = await Api.post("login", { email, password })
    return request.data
  } catch (error) {
    return null
  }
}