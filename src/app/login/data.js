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

// export default function handlerSession(req, res) {
//     const sessionData = req.body;
//     const cookie = serialize('session', JSON.stringify(sessionData), {
//         sameSite: 'strict',
//         path: '/',
//         maxAge: 3600,
//     });
//     res.setHeader('Set-Cookie', cookie);
//     res.status(200).json(sessionData);
// }