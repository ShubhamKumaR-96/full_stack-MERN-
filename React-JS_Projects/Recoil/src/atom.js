import { atom, selector } from "recoil";

export const myNetwork=atom({
    key:'myNetwork',
    default:102
})

export const jobs=atom({   
    key:'jobss',
    default:0       
})

export const notification=atom({
    key:'notification',
    default:0
})

export const message=atom({
    key:'message',
    default:4
})

export const totalNotification=selector({
    key:'notifications',
    get:({get})=>{
        const notif=get(notification)
        const msg=get(message)
        const job=get(jobs)
        const myNetworks=get(myNetwork)
        return notif+msg+job+myNetworks
    }
})
