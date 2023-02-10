import React from 'react'

export const GlobalContext = React.createContext(null)

export const GlobalProvider = (props) => {
    const [data, setData] = React.useState({
        loading: false,
        snack: false,
        snack_msg: "",
        campaign_done: false,
        dial_dialog: false,
        dial_number: false,
        dialo_home_menu: false
    })

    return (
        <GlobalContext.Provider value={{ data, setData }}>
            {props.children}
        </GlobalContext.Provider>
    )
}

