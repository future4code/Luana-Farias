import { v4 } from 'uuid'

const generatedId = v4();

export const idGenerator = () :string => {
    return v4()
}