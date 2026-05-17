const API_COMPANIES = '/api/companies'; // utiliser le proxy Vite en développement pour le routage

// Méthode de création de nouveau vol
 const createCompany= async (newCompany) => {
    const response = await fetch(API_COMPANIES, {
        method: 'POST',
        headers : {
            'Content-Type': 'application/json'
        },
        body:JSON.stringify(newCompany),
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
const getCompanyById = async (idCompany) => {
    const response = await fetch(`${API_COMPANIES}/${idCompany}`, {
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
const getAllCompanies = async (queryParams) => {
    console.log('endpoint', `${API_COMPANIES}${queryParams ? `?${queryParams}` : ''}`)
    const response = await fetch(`${API_COMPANIES}${queryParams ? `?${queryParams}` : ''}`, {
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
const updateCompany = async (flightToEdit) => {
    const {id, ...payload} = flightToEdit;

    const response = await fetch(`${API_COMPANIES}/${flightToEdit.id}`, {
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
const deleteCompany = async (idCompany) => {
    const response = await fetch(`${API_COMPANIES}/${idCompany}`, {
        method: 'DELETE',
        credentials: "include"
    });

    if (response.ok) {
        return idCompany;
    } else {
        throw new Error("Erreur suppression de vol");
    }
 } 

export {createCompany, getCompanyById, getAllCompanies, updateCompany, deleteCompany}
