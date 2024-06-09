"use server";

export async function getProfile(token) {
    let data = null;
    const response = await fetch("https://simanis.stei.itb.ac.id/aan/api/profile", {
        method: "GET",
        headers: {
            Authorization: `Bearer ${token}`,
        },
    });
    if (response.ok) {
        data = response.json();
    } else {
        console.error("Failed to get data");
    }

    return data;
}

export async function getHistory(token) {
    let data = null;
    const response = await fetch("https://simanis.stei.itb.ac.id/aan/api/data", {
        method: "GET",
        headers: {
            Authorization: `Bearer ${token}`,
        },
    });
    if (response.ok) {
        data = response.json();
    } else {
        console.error("Failed to get data");
    }

    return data;
}