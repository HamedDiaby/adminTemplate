export const formatDateAndHour = ()=> {

    const formatDate = (date: string | any)=> {
        const current = new Date(date);
        const month = (Number(current.getMonth()) + 1) >= 10 ? 
        `${(Number(current.getMonth()) + 1)}` : `0${Number(current.getMonth()) + 1}`;

        return `${current.getDate()}.${month}.${current.getFullYear()}`;
    }

    const formatDateV2 = (date: string | any)=> {
        const current = new Date(date);
        const month = (Number(current.getMonth()) + 1) >= 10 ? 
        `${(Number(current.getMonth()) + 1)}` : `0${Number(current.getMonth()) + 1}`;

        return `${current.getFullYear()}-${month}-${current.getDate()}`;
    }

    const formatHour = (date: string | any)=> {
        const current = new Date(date);
        return `${current.getHours()}H${current.getMinutes()}`;
    }

    return {
        formatDate,
        formatDateV2,
        formatHour,
    }
}