"use server";

export async function login(deviceID, password) {
    let data = null;
    const response = await fetch('https://simanis.stei.itb.ac.id/aan/api/login', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(
            {
                device_id: deviceID,
                password: password,
            }
        ),
        
    });
    if (response.ok) {
        data = response.json();
    } else {
        console.error('Failed to login');
    }

    return data;
}