export interface loginForm {
  username: string
  password: string
}

export interface loginResponseData {
  code: number
  data: {
    token?: string
    message?: string
  }
}

export interface userResponseData {
  code: number
  data: {
    checkUser: {
      userId: number
      avatar: string
      username: string
      password: string
      desc: string
      roles: string[]
      buttons: string[]
      routes: string[]
      token: string
    }
  }
}
