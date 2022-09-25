
export const registerUserService = async ({ username, email, password }) => {
    console.log(username, email, password, process.env.REACT_APP_BACKEND);
    
    const response = await fetch(`${process.env.REACT_APP_BACKEND}/users`, {
        method: "POST",
        headers: {
            "Accept": "application/json",
            "Content-Type": "application/json",
        },
        body: JSON.stringify({ username, email, password}),
    });

    const json = await response.json();

    
    if (!response.ok) {
        throw new Error(json.message);
    }
    
};
export const loginUserService = async ({email, password}) => {
    const response = await fetch(`${process.env.REACT_APP_BACKEND}/users/login`, {
        method: "POST",
        headers: {
            "Accept": "application/json",
            "Content-Type": "application/json",
        },
        body: JSON.stringify({email, password}),
    });

    const json = await response.json();
    
    
    if (!response.ok) {
        throw new Error(json.message);
    }

    return json.data
    
}

export const getMyUserDataService = async ({ token }) => {
    const response = await fetch(`${process.env.REACT_APP_BACKEND}/users`, {
        headers: {
            Authorization: token,
        },
    });

    const json = await response.json();

    if (!response.ok) {
        throw new Error(json.message)
    }
    return json.data;
    
};
 