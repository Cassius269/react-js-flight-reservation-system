const API_RESERVATIONS= '/api/reservations'; // utiliser le proxy Vite en développement pour le routage

// Méthode de création de nouveau vol
 const createReservation= async (newReservation) => {
    const response = await fetch(API_RESERVATIONS, {
        method: 'POST',
        headers : {
            'Content-Type': 'application/json'
        },
        body:JSON.stringify(newReservation),
        credentials: 'include'
    });

    const body = await response.json();

    if(response.ok){
        return body;
    }else {
        throw body;
    }
 }


 // Méthode de récupération d'un vol par son ID
const getReservationById = async (idReservation) => {
    const response = await fetch(`${API_RESERVATIONS}/${idReservation}`, {
        method: 'GET',
        credentials: 'include'
    });

    const body = await response.json();

    if(response.ok){
        return body;
    }else {
        throw body;
    }
}

 // Méthode de récupération de tous les vols
const getAllReservations = async () => {
    const response = await fetch(API_RESERVATIONS, {
        method: 'GET',
        credentials: 'include'
    });

    const body = await response.json();

    if(response.ok){
        return body;
    }else {
        throw body;
    }
}

 // Méthode de mise à jour de vol  
const updateReservation = async (flightToEdit) => {
    const {id, ...payload} = flightToEdit;

    const response = await fetch(`${API_RESERVATIONS}/${flightToEdit.id}`, {
        method: 'PATCH',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(payload),
        credentials: "include"
    });

    const body = await response.json();

    if(response.ok){
        return body;
    }else {
        throw body;
    }
 } 

  // Méthode de mise à jour de vol  
const deleteReservation = async (idReservation) => {
    const response = await fetch(`${API_RESERVATIONS}/${idReservation}`, {
        method: 'DELETE',
        credentials: "include"
    });

    const body = await response.json();

    if(response.ok){
        return body;
    }else {
        throw body;
    }
 } 

export {createReservation, getReservationById, getAllReservations, updateReservation, deleteReservation}
