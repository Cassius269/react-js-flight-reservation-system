const API_CAPTAINS= '/api/captains'; // utiliser le proxy Vite en développement pour le routage

// Méthode de création de nouveau vol
 const createCaptain= async (newCaptain) => {
    const response = await fetch(API_CAPTAINS, {
        method: 'POST',
        headers : {
            'Content-Type': 'application/json'
        },
        body:JSON.stringify(newCaptain),
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
const getCaptainById = async (idCaptain) => {
    const response = await fetch(`${API_CAPTAINS}/${idCaptain}`, {
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
const getAllCaptains = async () => {
    const response = await fetch(API_CAPTAINS, {
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
const updateCaptain = async (captainToEdit) => {
    const {id, ...payload} = captainToEdit;

    const response = await fetch(`${API_CAPTAINS}/${captainToEdit.id}`, {
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
const deleteCaptain = async (idCaptain) => {
    const response = await fetch(`${API_CAPTAINS}/${idCaptain}`, {
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

export {createCaptain, getCaptainById, getAllCaptains, updateCaptain, deleteCaptain}
