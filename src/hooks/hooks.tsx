import { useState, useEffect } from "react";
import * as globals from "../services/global-elements";
import { UserDataType } from "../types/types";


export const UserListHook = () => {

    const [userListInitial, setUserListInitial] = useState<UserDataType[]>([]);

    useEffect( () => {
        setUserListInitial(globals.userListStateArr)
    }, [])

    return { userListInitial, setUserListInitial }
}






