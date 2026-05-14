const API_USERS = '/api/passengers'; // utiliser le proxy Vite en développement pour le routage

// Méthode de création de nouvel utilisateur
const createUser = async (newUser) =>{
        const response = await fetch(API_USERS, {
            method: 'POST', 
            headers: {
                'Content-Type': 'application/json'
            }, 
            body: JSON.stringify(newUser),
            credentials: 'include' // utiliser le token JWT pour s'authentifier dans la requête
        });

        const body = await response.json();

        if(response.ok){
            return body;
        }else {
            throw body;
        }
}

export {createUser};