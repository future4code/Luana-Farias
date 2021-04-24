import styled from 'styled-components'



export const TripListContainer = styled.div`
    color: white;
    border-bottom: 2px solid #D61D56;
    /* width: 100%; */
    height: 20%;
    /* background-color: green; */

    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0.8%;
    padding-top: 2%;
    /* border: 3px solid green; */

    & span {
        font-size: 0.9em;
        padding-top: 2%;
        padding-right: 3%;
    }

    & p {
        margin-top: 1.9%;
    }
`

export const Body = styled.div`
    display: flex;
    height: 90vh;
    width: 90vw;
    align-items: center;
    justify-content: center;
    
    /* background-color: purple; */
    `

export const ContainerList = styled.section`
    height: 80%;
    width: 40%;
 
    /* border: 3px solid red; */
    `