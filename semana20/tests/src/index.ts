import { User } from "./models/types"

export function performPurchase(user: User, value: number): User | undefined {
    if (user.balance >= value) {
        return {
            ...user,
            balance: user.balance - value
        }
    } else {
        return undefined
    }
}