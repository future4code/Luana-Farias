export type authenticationData = {
   id: string,
   role: string
}

export type userCredentials = {
   email: string
   password: string
}

export type userPersonalInfo = {
   name: string
   nickname: string
}

export enum userRole {
   ADMIN = "ADMIN",
   NORMAL = "NORMAL"
}

export type user = {id: string, email: string, name: string, nickname: string, password: string, role: userRole, cep: string, number: string}

export type userAdress = {
   locality: string,
   neighborhood: string,
   city: string,
   state: string
}