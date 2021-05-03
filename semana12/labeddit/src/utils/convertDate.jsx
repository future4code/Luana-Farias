
    export const convertDate = (timestamp) => {
        let time = new Date(timestamp)
        let day = time.getDate().toString().padStart(2, '0');
        let month = (time.getMonth() + 1).toString().padStart(2, '0');
        let year = time.getFullYear();

        return `${day}/${month}/${year}`
    }

    // console.log(convertDate(createdAt))

    // export const convertTime = (timestamp) => {
    //     let time = new Date(timestamp)
    //     let hour = time.getHours().toString().padStart(2, '0');
    //     let minutes = time.getMinutes().toString().padStart(2, '0');

    //     let atualTime = new Date();
    //     let hourNow = atualTime.getHours();
    //     let atualMinutes = atualTime.getMinutes();

    //     let FinalHour = hourNow - hour
    //     let finalMinutes = atualMinutes - minutes

    //     return FinalHour
    //     // return `${hour}:${minutes} = ${hourNow} ${atualMinutes}`
    // }

    // console.log(convertTime(1619705267662))

    export const convertTime = (timestamp) => {
        let time = new Date(timestamp)
        let hour = time.getHours().toString().padStart(2, '0');
        let minutes = time.getMinutes().toString().padStart(2, '0');

        let atualTime = new Date();
        let hourNow = atualTime.getHours();
        let atualMinutes = atualTime.getMinutes();
        let atualDay = atualTime.getDay();

        let finalHour = hourNow - hour
        let finalMinutes = atualMinutes - minutes

        if(!finalHour) {
            return finalMinutes > 1 ? `há ${finalMinutes} minutos` : `há ${finalMinutes} minuto`
        } else {
            if(finalHour > 1) {
                return `há ${finalHour} horas`
            } else if (finalHour > 24) {
                return `há ${atualDay} dia` 
            } else if (atualDay > 1) {
                return `há ${atualDay} dias`
            } else {
                return `há ${finalHour} hora`
            }
            
        }

    }