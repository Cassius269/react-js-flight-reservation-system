const API_AIRPORTS= '/api/airports'; // utiliser le proxy Vite en développement pour le routage

// Méthode de création de nouvel aéroport
 const createAirport= async (newAirport) => {
    const response = await fetch(API_AIRPORTS, {
        method: 'POST',
        headers : {
            'Content-Type': 'application/json'
        },
        body:JSON.stringify(newAirport),
        credentials: 'include'
    });

    const body = await response.json();

    if(response.ok){
        return body;
    }else {
        throw body;
    }
 }


 // Méthode de récupération d'un aéroport par son ID
const getAirportById = async (idAirport) => {
    const response = await fetch(`${API_AIRPORTS}/${idAirport}`, {
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

 // Méthode de récupération de tous les aéroports
const getAllAirports = async () => {
    const response = await fetch(API_AIRPORTS, {
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

 // Méthode de mise à jour d'aéroport  
const updateAirport = async (airportToEdit) => {
    const {id, ...payload} = airportToEdit;

    const response = await fetch(`${API_AIRPORTS}/${airportToEdit.id}`, {
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

  // Méthode de mise à jour d'aéroport  
const deleteAirport = async (idAirport) => {
    const response = await fetch(`${API_AIRPORTS}/${idAirport}`, {
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

export {createAirport, getAirportById, getAllAirports, updateAirport, deleteAirport}
