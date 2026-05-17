const API_AIRPLANES= '/api/airplanes'; // utiliser le proxy Vite en développement pour le routage

// Méthode de création de nouvel avion
 const createAirplane= async (newAirplane) => {
    const response = await fetch(API_AIRPLANES, {
        method: 'POST',
        headers : {
            'Content-Type': 'application/json'
        },
        body:JSON.stringify(newAirplane),
        credentials: 'include'
    });

    const body = await response.json();

    if(response.ok){
        return body;
    }else {
        throw body;
    }
 }


 // Méthode de récupération d'un avion par son ID
const getAirplaneById = async (idAirplane) => {
    const response = await fetch(`${API_AIRPLANES}/${idAirplane}`, {
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

 // Méthode de récupération de tous les avions
const getAllAirplanes = async () => {
    const response = await fetch(API_AIRPLANES, {
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

 // Méthode de mise à jour d'avion  
const updateAirplane = async (airplaneToEdit) => {
    const {id, ...payload} = airplaneToEdit;

    const response = await fetch(`${API_AIRPLANES}/${airplaneToEdit.id}`, {
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

  // Méthode de mise à jour d'avion  
const deleteAirplane = async (idAirplane) => {
    const response = await fetch(`${API_AIRPLANES}/${idAirplane}`, {
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

export {createAirplane, getAirplaneById, getAllAirplanes, updateAirplane, deleteAirplane}
