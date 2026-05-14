const API_FLIGHTS = '/api/flights'; // utiliser le proxy Vite en développement pour le routage

// Méthode de création de nouveau vol
 const createFlight= async (newFlight) => {
    const response = await fetch(API_FLIGHTS, {
        method: 'POST',
        headers : {
            'Content-Type': 'application/json'
        },
        body:JSON.stringify(newFlight),
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
const getFlightById = async (idFlight) => {
    const response = await fetch(`${API_FLIGHTS}/${idFlight}`, {
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
const getAllFlights = async (queryParams) => {
    console.log('endpoint', `${API_FLIGHTS}${queryParams ? `?${queryParams}` : ''}`)
    const response = await fetch(`${API_FLIGHTS}${queryParams ? `?${queryParams}` : ''}`, {
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
const updateFlight = async (flightToEdit) => {
    const {id, ...payload} = flightToEdit;

    const response = await fetch(`${API_FLIGHTS}/${flightToEdit.id}`, {
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
const deleteFlight = async (idFlight) => {
    const response = await fetch(`${API_FLIGHTS}/${idFlight}`, {
        method: 'DELETE',
        credentials: "include"
    });

    if (response.ok) {
        return idFlight;
    } else {
        throw new Error("Erreur suppression de vol");
    }
 } 

export {createFlight, getFlightById, getAllFlights, updateFlight, deleteFlight}
