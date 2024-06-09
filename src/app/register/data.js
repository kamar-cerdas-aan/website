"use server";

export async function register(deviceID, password) {
    let data = null;

    const url = new URL('https://simanis.stei.itb.ac.id/aan/api/register');
    url.searchParams.append('device_id', deviceID);
    const response = await fetch(url, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(
            {
                password: password
            }
        ),
        
    });
    if (response.ok) {
        data = response.json();
    } else {
        console.error('Failed to register');
    }

    return data;
}

// POST /api/register
// Params device_id (e.g. /api/register?device_id=Asdf123)
// Content-Type application/json
// Body contents:
// {"password": "ghjkl"}